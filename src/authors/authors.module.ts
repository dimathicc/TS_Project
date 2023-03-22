import { Module } from '@nestjs/common';
import { Author } from './entities/authors.entity';

@Module({
  imports: [Author],
  controllers: [],
  providers: [],
})
export class AuthorsModule {}
