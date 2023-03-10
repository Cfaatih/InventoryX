import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository : Repository<User>) {
  }
  async create(createUserDto: CreateUserDto): Promise<any> {
    const userExists = await this.getUserByUserName(createUserDto.username);
    if(userExists) return 'User already exist!';

    const user = new User();
    user.username = createUserDto.username;
    user.password = await bcrypt.hash(createUserDto.password, 10);
    user.firstname = createUserDto.firstname;
    user.lastname = createUserDto.lastname;
    user.mobile = createUserDto.mobile;
    user.email = createUserDto.email;

    return await this.userRepository.save(user);
  }

  async getUserByUserName(username: string): Promise<any> {
    return await this.userRepository.findOne({where: {username}});
  }

}
