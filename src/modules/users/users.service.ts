import { Injectable } from '@nestjs/common';
import { UserBaseDto } from './dto';
import { CreateUserDto } from './dto/index';
import { plainToInstance } from 'class-transformer';
//import { Role } from '@modules/auth/decorators/authorization.decorator';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class UsersService {
  async users(pagination: { skip?: number; take?: number }) {
    const { skip = 0, take = 10 } = pagination;
    const users = await prisma.user.findMany({
      skip,
      take,
      select: {
        id: true,
        first_name: true,
        last_name: true,
        is_active: true,
        email: true,
      },
    });

    return users.map((user) =>
      plainToInstance(UserBaseDto, {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        isActive: user.is_active,
        email: user.email,
      }),
    );
  }

  async createUser(obj: CreateUserDto): Promise<UserBaseDto> {
    const user = await prisma.user.create({
      data: {
        first_name: obj.firstName,
        last_name: obj.lastName,
        email: obj.email,
        is_active: obj.isActive ?? true,
      },
    });

    return plainToInstance(UserBaseDto, {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      isActive: user.is_active,
      email: user.email,
    });
  }
}
