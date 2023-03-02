import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSaludo(): string {
    return 'Hola Mundo!';
  }
  getHello(): string {
    return 'Hello World!';
  }
}
