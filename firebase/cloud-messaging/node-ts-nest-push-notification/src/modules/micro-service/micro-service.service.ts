import { Injectable } from '@nestjs/common';
import { CreateMicroServiceDto } from './dto/create-micro-service.dto';
import { UpdateMicroServiceDto } from './dto/update-micro-service.dto';

@Injectable()
export class MicroServiceService {
  create(createMicroServiceDto: CreateMicroServiceDto) {
    return 'This action adds a new microService';
  }

  findAll() {
    return `This action returns all microService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} microService`;
  }

  update(id: number, updateMicroServiceDto: UpdateMicroServiceDto) {
    return `This action updates a #${id} microService`;
  }

  remove(id: number) {
    return `This action removes a #${id} microService`;
  }
}
