import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Move } from '@prisma/client';
import { MovesService } from './moves.service';
import { CreateMoveDto } from './dto/create-move.dto';

@Controller('moves')
export class MovesController {
    constructor(private readonly movesService:MovesService){}

    @Get()
    async findAll():Promise<Move[]>{
        return await this.movesService.findAll();
    }

    @Get(':id')
    async findById(@Param('id',ParseIntPipe) id:number): Promise<Move>{
        return await this.movesService.findById(id);
    }

    @Post()
    async create(@Body() createMoveDto:CreateMoveDto): Promise<Move> {
        return await this.movesService.create(createMoveDto);
    }

    @Delete(':id')
    async delete(@Param('id',ParseIntPipe) id:number) {
        await this.movesService.delete(id);
    }
}
