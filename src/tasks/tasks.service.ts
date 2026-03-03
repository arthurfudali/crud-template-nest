import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';
import { randomUUID } from 'node:crypto';

@Injectable()
export class TasksService {
  // "banco de dados" em memória (array simples)
  private tasks: Task[] = [];

  create(createTaskDto: CreateTaskDto): Task {
    // cria o objeto Task
    const task: Task = {
      id: randomUUID(),
      title: createTaskDto.title,
      description: createTaskDto.description,
      done: false,
    };
    // adiciona na 'memoria'
    this.tasks.push(task);
    // retorna o obj
    return task;
  }

  // READ ALL — retorna todas as tasks
  findAll(): Task[] {
    return this.tasks;
  }

  // READ ONE — busca por id
  findOne(id: string): Task {
    const task: Task | undefined = this.tasks.find(
      (t: Task): boolean => t.id === id,
    );
    if (!task) throw new NotFoundException(`Task ${id} não encontrada`);
    return task;
  }

  // UPDATE — atualiza title/description
  // partial mostra que o objeto pode ou nao ser utilizado inteiramente
  update(id: string, updateTaskDto: Partial<CreateTaskDto>): Task {
    const task: Task = this.findOne(id);
    // faz o update
    Object.assign(task, updateTaskDto);
    return task;
  }

  // DELETE — remove do array
  remove(id: string): void {
    this.findOne(id); // lança 404 se não existir
    this.tasks = this.tasks.filter((t: Task): boolean => t.id !== id);
  }

  // marca a task como completa
  markAsCompleted(id: string): string {
    const task: Task = this.findOne(id);
    task.done = true;
    return 'Task Completed';
  }
}
