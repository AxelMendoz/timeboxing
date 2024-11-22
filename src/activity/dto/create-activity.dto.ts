import { IsString, IsInt } from 'class-validator';

export class CreateActivityDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    start_hour: string;

    @IsString()
    end_hour: string;

    @IsInt()
    task_id: number;

    @IsInt()
    status: number;
}
