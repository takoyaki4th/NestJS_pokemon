import { Injectable, NotFoundException } from '@nestjs/common';
import { Move } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMoveDto } from './dto/create-move.dto';

@Injectable()
export class MovesService {
    constructor(private readonly prismaService:PrismaService){}

    async findAll(): Promise<Move[]>{
        return await this.prismaService.move.findMany();
    }

    async findById(id:number):Promise<Move>{
        const found = await this.prismaService.move.findUnique({
            where:{
                id,
            },
        });
        if(!found){
            throw new NotFoundException();
        }
        return found
    }

    async create(createMoveDto: CreateMoveDto): Promise<Move> {
        return await this.prismaService.move.create({
            data:{
                ...createMoveDto
            }
        })
    }

    async delete(id:number){
        await this.prismaService.move.delete({
            where:{id}
        });
    }
}
