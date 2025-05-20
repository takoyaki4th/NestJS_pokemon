import { Controller, Post, Body, UseGuards, Put, Request, Delete, Param, Patch } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Trainer } from '@prisma/client';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request as ExpressRequest } from 'express';
import { RequestUser } from 'src/common/types/RequestUser';
import { UpdateTrainerDto } from './dto/update-trainer.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() createTrainerDto: CreateTrainerDto):Promise<Trainer> {
    return await this.authService.create(createTrainerDto);
  }

  @Post('signin')
  async signIn(
    @Body() CredentialsDto:CreateTrainerDto
  ): Promise<{token:string}> {
    return await this.authService.signIn(CredentialsDto);
  }
  
  @Put()
  @UseGuards(AuthGuard('jwt'))
  async update(
    @Body() updateTrainerDto:UpdateTrainerDto, //updateした後に一旦tokenを消さないと行けないのでは?
    @Request() req: ExpressRequest & { user: RequestUser },
  ){
    return this.authService.update(req.user.id,updateTrainerDto);
  }

  @Patch('delete')
  @UseGuards(AuthGuard('jwt'))
  async softDelete(@Request() req:ExpressRequest & { user: RequestUser }){
    await this.authService.softDelete(req.user.id);
  }
}
