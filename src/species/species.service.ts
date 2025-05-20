import { Injectable, NotFoundException } from '@nestjs/common';
import { Specie } from '@prisma/client';
import { CreateSpecieDto } from './dto/create-specie.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpeciesService {
    constructor(private readonly prismaService:PrismaService) {}

    async findAll(): Promise<Specie[]> {
        return await this.prismaService.specie.findMany();
    }

    async findById(id:number):Promise<Specie>{
        const found = await this.prismaService.specie.findUnique({
            where:{
                dex_number:id,
            },
        });
        if(!found){
            throw new NotFoundException();
        }
        return found
    }

    async create(createSpecieDto: CreateSpecieDto): Promise<Specie> {
        return await this.prismaService.specie.create({
            data:{
                ...createSpecieDto,
            },
        });
    }

    async delete(id:number) {
        await this.prismaService.specie.delete({
            where:{dex_number:id}
        });
    }
}
