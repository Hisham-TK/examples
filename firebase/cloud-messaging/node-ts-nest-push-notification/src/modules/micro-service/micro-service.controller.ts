import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MicroServiceService } from './micro-service.service';
import { CreateMicroServiceDto } from './dto/create-micro-service.dto';
import { UpdateMicroServiceDto } from './dto/update-micro-service.dto';

@Controller()
export class MicroServiceController {
  constructor(private readonly microServiceService: MicroServiceService) {}

  @MessagePattern('createMicroService')
  create(@Payload() createMicroServiceDto: CreateMicroServiceDto) {
    return this.microServiceService.create(createMicroServiceDto);
  }

  @MessagePattern('findAllMicroService')
  findAll() {
    return this.microServiceService.findAll();
  }

  @MessagePattern('findOneMicroService')
  findOne(@Payload() id: number) {
    return this.microServiceService.findOne(id);
  }

  @MessagePattern('updateMicroService')
  update(@Payload() updateMicroServiceDto: UpdateMicroServiceDto) {
    return this.microServiceService.update(updateMicroServiceDto.id, updateMicroServiceDto);
  }

  @MessagePattern('removeMicroService')
  remove(@Payload() id: number) {
    return this.microServiceService.remove(id);
  }
}
