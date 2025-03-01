import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('movie')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/doyeol')
  getHello(): string {
    return 'Hello World !';
  }
}
