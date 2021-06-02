import { Module } from '@nestjs/common';
import { BookedService } from './booked.service';

@Module({
  providers: [BookedService]
})
export class BookedModule {}