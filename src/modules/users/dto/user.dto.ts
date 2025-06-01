import { Role } from '@modules/auth/decorators/authorization.decorator';
import {
  IsBoolean,
  IsString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsUUID,
} from 'class-validator';

export class UserDto {
  @IsUUID()
  @IsNotEmpty()
  id!: string;

  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsEnum(Role)
  @IsNotEmpty()
  @IsString()
  role!: Role;
}
