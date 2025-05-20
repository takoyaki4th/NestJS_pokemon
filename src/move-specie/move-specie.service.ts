import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMoveSpecieDto } from './dto/create-move-specie.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MoveSpecie } from '@prisma/client';

@Injectable()
export class MoveSpecieService {
  constructor(private readonly prismaService:PrismaService){}

  async findAll():Promise<MoveSpecie[]> {
    return await this.prismaService.moveSpecie.findMany();
  }

  async findByDexNumber(dex_number: number):Promise<MoveSpecie[]> {
    const found = await this.prismaService.moveSpecie.findMany({
      where:{
        dex_number
      },
    });
    if(!found){
      throw new NotFoundException();
    }
    return found;
  }

  async findByMoveId(move_id: number):Promise<MoveSpecie[]> {
    const found = await this.prismaService.moveSpecie.findMany({
      where:{
        move_id
      },
    });
    if(!found){
      throw new NotFoundException();
    }
    return found;
  }

  async create(createMoveSpecieDto: CreateMoveSpecieDto): Promise<MoveSpecie> {
    return await this.prismaService.moveSpecie.create({
      data:{
        ...createMoveSpecieDto
      }
    });
  }

  async delete(id: number) {
    return await this.prismaService.moveSpecie.delete({
      where:{id}
    });
  }
}
