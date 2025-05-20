import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Trainer } from '@prisma/client';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CredentialsDto } from './dto/credentials.dto';
import { JwtPayload } from 'src/common/types/JwtPayload';
import { UpdateTrainerDto } from './dto/update-trainer.dto';

@Injectable()
export class AuthService {
  constructor(
    private prismaService:PrismaService,
    private readonly jwtService:JwtService,
  ) {}

  async create(createTrainerDto: CreateTrainerDto):Promise<Trainer> {
    const { password } = createTrainerDto;
    const hashedPassword = await bcrypt.hash(password,10);

    return await this.prismaService.trainer.create({
      data:{
        ...createTrainerDto,
        password:hashedPassword
      },
    });
  };

  async signIn(credentialsDto:CredentialsDto):Promise<{token:string}> {
    const { name, password } = credentialsDto;
    const user = await this.prismaService.trainer.findUnique({
      where: {
        name,
      },
    });

    if (user && await bcrypt.compare(password,user.password)){
      if (user.deletedAt){
        throw new ForbiddenException("削除されたユーザーです。");
      }
      const payload: JwtPayload ={
        sub:user.id,
        username:user.name,
        deletedAt:user.deletedAt? user.deletedAt:undefined
      };
      const token = this.jwtService.sign(payload);
      return { token };
    }

    throw new UnauthorizedException();
  }

  async update(id:string,updateTrainerDto:UpdateTrainerDto):Promise<Trainer> {
    const { password } = updateTrainerDto;
    const hashedPassword = await bcrypt.hash(password,10);

    return await this.prismaService.trainer.update({
      data:{
        ...updateTrainerDto,
        password:hashedPassword
      },
      where:{
        id,
      },
    });
  }

  async softDelete(id:string) {
    await this.prismaService.trainer.update({
      data:{
        deletedAt:new Date(),
      },
      where:{
        id,
      },
    });
  }
}
