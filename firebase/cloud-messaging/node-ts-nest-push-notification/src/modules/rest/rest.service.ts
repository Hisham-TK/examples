import { Injectable } from '@nestjs/common';
import { CreateRestDto } from './dto/create-rest.dto';
import { UpdateRestDto } from './dto/update-rest.dto';

@Injectable()
export class RestService {
  create(createRestDto: CreateRestDto) {
    return 'This action adds a new rest';
  }

  findAll() {
    return `This action returns all rest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rest`;
  }

  update(id: number, updateRestDto: UpdateRestDto) {
    return `This action updates a #${id} rest`;
  }

  remove(id: number) {
    return `This action removes a #${id} rest`;
  }
}
