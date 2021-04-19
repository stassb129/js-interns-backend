import { Test, TestingModule } from '@nestjs/testing';
import { PinktadaItemsController } from './pinktada-items.controller';
import { PinktadaItemsService } from './pinktada-items.service';

describe('PinktadaItemsController', () => {
  let controller: PinktadaItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PinktadaItemsController],
      providers: [PinktadaItemsService],
    }).compile();

    controller = module.get<PinktadaItemsController>(PinktadaItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
