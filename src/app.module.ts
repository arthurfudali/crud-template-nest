import { Module } from '@nestjs/common';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  // tudo que vc cria deve ser adicionado aqui
  controllers: [TasksController], // controlers -> rotas
  providers: [TasksService], // serviços -> logica
  imports: [TasksModule], // modules -> junta tudo
})
export class AppModule {}
