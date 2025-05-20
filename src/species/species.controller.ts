import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { Specie } from '@prisma/client';
import { CreateSpecieDto } from './dto/create-specie.dto';

@Controller('species')
export class SpeciesController {
    constructor(private readonly speciesService:SpeciesService){}
    @Get()
    async findAll(): Promise<Specie[]>{
        return await this.speciesService.findAll();
    }

    @Get(':id')
    async findById(@Param('id',ParseIntPipe) id:number): Promise<Specie>{
        return await this.speciesService.findById(id);
    }

    @Post()
    async create(@Body() createSpecieDto: CreateSpecieDto): Promise<Specie> {
        return await this.speciesService.create(createSpecieDto);
    }

    @Delete(':id')
    async delete(@Param('id',ParseIntPipe) id:number) {
        await this.speciesService.delete(id);
    }
}

