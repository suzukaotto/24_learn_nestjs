import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { FindUserDto } from './dto/findUser.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { UpdateUserBodyDto, UpdateUserParamDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(findUserDto: FindUserDto) {
    return this.userRepository.findOne({ where: { id: findUserDto.id }});
  }

  async deleteUser(deleteUserDto: DeleteUserDto) {
    return this.userRepository.delete({ id: deleteUserDto.id });
  }

  async saveUser(user: { name: string; age: number; }) {
    this.userRepository.save({
      name: user.name,
      age: user.age,
    })
  }

  async updateUser(user: UpdateUserParamDto & UpdateUserBodyDto) {
    this.userRepository.update(
      { 
        id: user.id
      },
      {
        name: user.name,
        age: user.age,
      }
    );
  }
}
