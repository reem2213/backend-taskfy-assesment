import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() taskData: Partial<Task>): Promise<Task> {
    return this.tasksService.createTask(taskData);
  }

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() taskData: Partial<Task>,
  ): Promise<Task> {
    return this.tasksService.update(id, taskData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.tasksService.remove(id);
  }
}
