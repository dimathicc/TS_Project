import { Injectable } from '@nestjs/common';
import { Author } from 'src/authors/entities/authors.entity';

@Injectable()
export class DatasourceService {
  private authors: Author[] = [];

  getAuthors(): Author[] {
    return this.authors;
  } 
}
