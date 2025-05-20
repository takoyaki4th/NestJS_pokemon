import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Put, UseGuards, Request } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { Pokemon } from '@prisma/client';
import { UpadatePokemonDto } from './dto/update-pokemon.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request as ExpressRequest } from 'express';
import { RequestUser } from 'src/common/types/RequestUser';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Body() createPokemonDto: CreatePokemonDto,
    @Request() req: ExpressRequest & { user: RequestUser },
  ): Promise<Pokemon> {
    return await this.pokemonsService.create(req.user.id,createPokemonDto);
  }

  @Get()
  async findAll():Promise<Pokemon[]> {
    return await this.pokemonsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id',ParseIntPipe) id:number):Promise<Pokemon> {
    return await this.pokemonsService.findById(id);
  }

  @Get('trainer-id')
  @UseGuards(AuthGuard('jwt'))
  async findByTrainerId(
    @Request() req: ExpressRequest & { user: RequestUser },
  ):Promise<Pokemon[]> {
    return await this.pokemonsService.findByTrainerId(req.user.id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(
    @Param('id',ParseIntPipe) id: number,
    @Body() updatePokemonDto: UpadatePokemonDto
  ):Promise<Pokemon> {
    return this.pokemonsService.update(id,updatePokemonDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id',ParseIntPipe) id: number) {
    await this.pokemonsService.delete(id);
  }
}
