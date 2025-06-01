import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '@prisma/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  exports: [UsersService], //para otros modulos
})
export class UsersModule {}
