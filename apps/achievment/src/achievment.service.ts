import { Injectable } from '@nestjs/common';

@Injectable()
export class AchievmentService {
  getHello(): string {
    return 'Hello World!';
  }
}
