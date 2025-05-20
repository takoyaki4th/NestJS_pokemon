import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MoveSpecieService } from './move-specie.service';
import { CreateMoveSpecieDto } from './dto/create-move-specie.dto';

@Controller('move-species')
export class MoveSpecieController {
  constructor(private readonly moveSpecieService: MoveSpecieService) {}

  @Get()
  findAll() {
    return this.moveSpecieService.findAll();
  }

  @Get('dex-number/:id')
  findByDexNumber(@Param('id',ParseIntPipe) dex_number: number) {
    return this.moveSpecieService.findByDexNumber(dex_number);
  }

  @Get('move-id/:id')
  findByMoveId(@Param('id',ParseIntPipe) id:number){
    return this.moveSpecieService.findByMoveId(id);
  }

  @Post()
  create(@Body() createMoveSpecieDto: CreateMoveSpecieDto) {
    return this.moveSpecieService.create(createMoveSpecieDto);
  }

  @Delete(':id')
  delete(@Param('id',ParseIntPipe) id: number) {
    this.moveSpecieService.delete(id);
  }
}
