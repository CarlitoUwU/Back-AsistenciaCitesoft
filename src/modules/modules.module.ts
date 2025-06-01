import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    UsersModule, // Import the UsersModule
  ],
  exports: [
    UsersModule, // Export the UsersModule for use in other modules
  ],
})
export class ModulesModule {}
