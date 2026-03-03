import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
// isso é criado automatico
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
