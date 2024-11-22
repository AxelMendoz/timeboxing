import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [PrismaModule, UserModule, TaskModule, ActivityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
