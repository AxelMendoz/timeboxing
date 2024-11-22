// create-task.dto.ts
import { IsString, IsInt, IsDateString, IsEnum, IsOptional } from 'class-validator';
import { priority } from '@prisma/client'; // Asegúrate de tener la enumeración 'priority' desde Prisma

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(priority)
  priority: priority;

  @IsDateString()
  due_date: string;

  @IsInt()
  user_id: number;  

  @IsInt()
  status: number;
}
