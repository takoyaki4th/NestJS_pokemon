import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MoveSpecieService } from './move-specie.service';
import { CreateMoveSpecieDto } from './dto/create-move-specie.dto';
import { Move, MoveSpecie } from '@prisma/client';

@Controller('move-species')
export class MoveSpecieController {
  constructor(private readonly moveSpecieService: MoveSpecieService) {}

  @Get()
  async findAll():Promise<MoveSpecie[]> {
    return await this.moveSpecieService.findAll();
  }

  @Get('dex-number/:id')
  async findByDexNumber(@Param('id',ParseIntPipe) dex_number: number): Promise<Move[]> {
    return await this.moveSpecieService.findByDexNumber(dex_number);
  }

  @Get('move-id/:id')
  async findByMoveId(@Param('id',ParseIntPipe) id:number):Promise<MoveSpecie[]>{
    return await this.moveSpecieService.findByMoveId(id);
  }

  @Post()
  async create(@Body() createMoveSpecieDto: CreateMoveSpecieDto):Promise<MoveSpecie> {
    return await this.moveSpecieService.create(createMoveSpecieDto);
  }

  @Delete(':id')
  async delete(@Param('id',ParseIntPipe) id: number) {
    await this.moveSpecieService.delete(id);
  }
}
