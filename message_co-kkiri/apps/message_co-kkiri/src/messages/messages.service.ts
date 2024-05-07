import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesService {
  create(createMessageDto: CreateMessageDto) {
    return 'This action adds a new message';
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }
}
