import { Test, TestingModule } from '@nestjs/testing';
import { ManagePushAppController } from './manage-push-app.controller';
import { ManagePushAppService } from './manage-push-app.service';

describe('ManagePushAppController', () => {
  let managePushAppController: ManagePushAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ManagePushAppController],
      providers: [ManagePushAppService],
    }).compile();

    managePushAppController = app.get<ManagePushAppController>(
      ManagePushAppController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(managePushAppController.getHello()).toBe('Hello World!');
    });
  });
});
