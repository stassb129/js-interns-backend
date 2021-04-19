import { Test, TestingModule } from '@nestjs/testing';
import { PinktadaItemsService } from './pinktada-items.service';

describe('PinktadaItemsService', () => {
  let service: PinktadaItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PinktadaItemsService],
    }).compile();

    service = module.get<PinktadaItemsService>(PinktadaItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
