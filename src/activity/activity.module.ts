// activity.module.ts
import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { PrismaService } from 'src/prisma/prisma.service'; 

@Module({
  imports: [],
  controllers: [ActivityController],
  providers: [ActivityService, PrismaService], 
})
export class ActivityModule {}
