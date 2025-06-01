import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { SpeciesModule } from './species/species.module';
import { PrismaModule } from './prisma/prisma.module';
import { MovesModule } from './moves/moves.module';
import { MoveSpecieModule } from './move-specie/move-specie.module';
import { AuthModule } from './auth/auth.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { LogMiddleware } from './common/middleware/logMiddleware';

@Module({
  imports: [SpeciesModule, PrismaModule, MovesModule, MoveSpecieModule, AuthModule, PokemonsModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}{}
