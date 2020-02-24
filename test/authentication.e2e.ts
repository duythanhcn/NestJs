import { User } from '../src/app/entities/user.entity';
import axios, { AxiosResponse } from 'axios';
import { createConnection, Connection } from 'typeorm';
import { userSample } from './seeds/authen';
import * as bcrypt from 'bcrypt';
describe('Authentication', () => {
  let conn: Connection;
  /**
   * For some cases, You need to prepare data in db before run your test case.
   * You can put seed data in function `beforeAll` or `beforeEach`
   *
   */
  beforeAll(async () => {
    conn = await createConnection();
    await conn.createQueryRunner().clearTable('users');
    const repo = conn.getRepository(User);
    const userSampleDb = { ...userSample };
    /**
     * Hash password for user sample.
     */
    const passwordHash = await bcrypt.hash(userSample.password, 10);
    userSampleDb.password = passwordHash;
    const rs = await repo.insert(userSampleDb);
    console.log(rs);
  });
  afterAll(async () => {
    // await conn.createQueryRunner().clearTable('users');
  });

  it('Match.email.and.password.should.successful', async () => {
    const { data } = await axios.post('http://localhost:3000/auth/auth/login', {
      email: 'example@gmail.com',
      password: '1234567'
    });
    expect(data).toMatchObject({
      access_token: expect.any(String)
    });
  });

  it('Wrong.password.should.be.fail', async () => {
    axios
      .post('http://localhost:3000/auth/auth/login', {
        email: 'example@gmail.com',
        password: 'fail'
      })
      .catch(({ status }: AxiosResponse) => {
        expect(status).toBe(401);
      });
  });
});
