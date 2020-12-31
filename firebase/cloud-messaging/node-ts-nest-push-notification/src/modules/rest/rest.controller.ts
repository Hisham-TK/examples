import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { RestService } from './rest.service';
import { CreateRestDto } from './dto/create-rest.dto';
import { UpdateRestDto } from './dto/update-rest.dto';

@Controller('rest')
export class RestController {
  constructor(private readonly restService: RestService) {}

  @Post()
  create(@Body() createRestDto: CreateRestDto) {
    return this.restService.create(createRestDto);
  }

  @Get()
  findAll() {
    return this.restService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRestDto: UpdateRestDto) {
    return this.restService.update(+id, updateRestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restService.remove(+id);
  }
}
