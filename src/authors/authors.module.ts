import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { Author } from './entities/authors.entity';

@Module({
  imports: [Author],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
