import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMoveSpecieDto } from './dto/create-move-specie.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Move, MoveSpecie } from '@prisma/client';
import { map } from 'rxjs';

@Injectable()
export class MoveSpecieService {
  constructor(private readonly prismaService:PrismaService){}

  async findAll():Promise<MoveSpecie[]> {
    return await this.prismaService.moveSpecie.findMany();
  }

  async findByDexNumber(dex_number: number):Promise<Move[]> {
    const found:Array<MoveSpecie & { Move:Move }> = await this.prismaService.moveSpecie.findMany({
      where:{
        dex_number
      },
      relationLoadStrategy:'join',
      include:{
        Move:true
      }
    });
    if(!found){
      throw new NotFoundException();
    }
    return found.map(found_i => found_i.Move);
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
