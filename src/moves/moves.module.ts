import { Module } from '@nestjs/common';
import { MovesController } from './moves.controller';
import { MovesService } from './moves.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [MovesController],
  providers: [MovesService]
})
export class MovesModule {}
