import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Pokemon } from '@prisma/client';
import { UpadatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class PokemonsService {
  constructor(private readonly prismaService:PrismaService){}

  async create(trainer_id:string,createPokemonDto: CreatePokemonDto):Promise<Pokemon> {
    const { dex_number, nickname, level, effort, individual } = createPokemonDto;
    return await this.prismaService.pokemon.create({
      data:{
        trainer_id,
        dex_number,
        nickname,
        level,
        effort_hp:effort.hp,
        effort_attack:effort.attack,
        effort_defence:effort.defense,
        effort_s_attack:effort.s_attack,
        effort_s_defense:effort.s_defense,
        effort_speed:effort.speed,
        individual_hp:individual.hp,
        individual_attack:individual.attack,
        individual_defense:individual.defense,
        individual_s_attack:individual.s_attack,
        individual_s_defense:individual.s_defense,
        individual_speed:individual.speed
      }
    })
  }

  async findAll(): Promise<Pokemon[]> {
    return await this.prismaService.pokemon.findMany();
  }

  async findById(id:number): Promise<Pokemon> {
    const found = await this.prismaService.pokemon.findUnique({
      where:{
        id,
      },
    });
    if(!found){
      throw new NotFoundException();
    }
    return found;
  }

  async findByTrainerId(trainer_id: string):Promise<Pokemon[]> {
    const found = await this.prismaService.pokemon.findMany({
      where:{
        trainer_id
      },
    });
    if(!found){
      throw new NotFoundException();
    }
    return found;
  }

  async update(id: number, updatePokemonDto: UpadatePokemonDto):Promise<Pokemon> {
    return await this.prismaService.pokemon.update({
      data: {
        nickname:updatePokemonDto.nickname,
        level:updatePokemonDto.level,
        effort_hp:updatePokemonDto.effort.hp,
        effort_attack:updatePokemonDto.effort.attack,
        effort_defence:updatePokemonDto.effort.defense,
        effort_s_attack:updatePokemonDto.effort.s_attack,
        effort_s_defense:updatePokemonDto.effort.s_defense,
        effort_speed:updatePokemonDto.effort.speed,
        individual_hp:updatePokemonDto.individual.hp,
        individual_attack:updatePokemonDto.individual.attack,
        individual_defense:updatePokemonDto.individual.defense,
        individual_s_attack:updatePokemonDto.individual.s_attack,
        individual_s_defense:updatePokemonDto.individual.s_defense,
        individual_speed:updatePokemonDto.individual.speed
      },
      where:{
        id,
      },
    });
  }

  async delete(id: number) {
    await this.prismaService.pokemon.delete({
      where: { id },
    });
  }
}
