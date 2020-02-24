import { Injectable, Logger } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { ModelBase } from '../../../vendors/model/model.base';
import { User } from '../../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserInputDto } from './dto/user.dto';

@Injectable()
export class UsersService extends ModelBase {
  constructor(
    private logger: Logger
  ) { super(); }

  async getById(id: number): Promise<User> {
    return await getRepository(User).findOne(id);
  }

  async setUserInfor(user: User): Promise<boolean> {
    try {
      await getRepository(User).save(user);
      return true;
    } catch (ex) {
      return false;
    }
  }

  async create({ email, fullname, gender, password }: CreateUserInputDto): Promise<boolean> {
    try {
      const user = new User();
      user.email = email;
      user.gender = gender;
      user.fullname = fullname;
      const salt = bcrypt.genSaltSync(10);
      user.password = bcrypt.hashSync(password, salt);
      user.accessToken = '';
      user.refreshToken = '';
      await getRepository(User).save(user);
    } catch (ex) {
      this.logger.error(ex);
      return false;
    }
    return true;
  }

  async deleteUser(user: User): Promise<boolean> {
    try {
      await getRepository(User).delete(user);
    } catch (ex) {
      return false;
    }
    return true;
  }

  async getUserByEmail(email: string): Promise<User> {
    return await getRepository(User)
      .createQueryBuilder()
      .where("email = :email", { email: email })
      .getOne();
  }
}
