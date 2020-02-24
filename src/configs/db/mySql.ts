import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
// tslint:disable-next-line
require('dotenv').config();

export default {
  type: 'mysql',
  port: 3306,
  host: process.env.RDS_HOST,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE,
  synchronize: true,
  entities: [path.join(__dirname, '../..', '/**/*.entity{.ts,.js}')]
} as TypeOrmModuleOptions;
