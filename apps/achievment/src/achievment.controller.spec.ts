import { Test, TestingModule } from '@nestjs/testing';
import { AchievmentController } from './achievment.controller';
import { AchievmentService } from './achievment.service';

describe('AchievmentController', () => {
  let achievmentController: AchievmentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AchievmentController],
      providers: [AchievmentService],
    }).compile();

    achievmentController = app.get<AchievmentController>(AchievmentController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(achievmentController.getHello()).toBe('Hello World!');
    });
  });
});
