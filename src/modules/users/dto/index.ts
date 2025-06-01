import { OmitType } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import { PartialType } from '@nestjs/swagger';

export class UserBaseDto extends OmitType(UserDto, ['isActive'] as const) {}

export class CreateUserDto extends OmitType(UserDto, ['id'] as const) {}

export class UpdateUserDto extends PartialType(UserDto) {}
