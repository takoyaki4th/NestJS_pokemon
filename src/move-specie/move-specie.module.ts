import { Module } from '@nestjs/common';
import { MoveSpecieService } from './move-specie.service';
import { MoveSpecieController } from './move-specie.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [MoveSpecieController],
  providers: [MoveSpecieService],
})
export class MoveSpecieModule {}
