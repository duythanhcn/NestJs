import { Module } from '@nestjs/common';
import { LoggerModule } from './common/logger/logger.module';
import { UsersModule } from './app/modules/users/users.module';
import { AuthModule } from './app/modules/auth/auth.module';
import { Logger } from './common/logger/logger';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './configs/db/mySql';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), AuthModule, UsersModule, LoggerModule],
  controllers: [],
  providers: []
})
export class AppModule { }
