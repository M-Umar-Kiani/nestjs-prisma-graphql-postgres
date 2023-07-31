import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
// import { BookResolver } from './book.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, BookService, BookResolver],
})
export class BookModule {}