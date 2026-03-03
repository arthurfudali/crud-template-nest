import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

// o arquivo responsavel pelas rotas é chamado de CONTROLLER
// é necessário usar a anotação @Controller para o Nest entender isso
// o que é passado como argumento define a rota, nesse caso /tasks
@Controller('tasks')
export class TasksController {
  // o nest instancia o tasksService automaticamente, não é necessário dar um 'new TasksService'
  constructor(private readonly tasksService: TasksService) {}

  @Post() // indica que é uma rota POST
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }

  @Post('completed/:id')
  marksAsCompleted(@Param('id') id: string) {
    return this.tasksService.markAsCompleted(id);
  }
}
