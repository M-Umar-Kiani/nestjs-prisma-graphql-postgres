import { Injectable } from "@nestjs/common";
import { Book, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class BookService{

    constructor(private prisma: PrismaService) {}

    async addBook(data: Prisma.BookCreateInput ) : Promise<Book>{
        return this.prisma.book.create({
            data: data
        })
    }

    async deleteBook(id: number) : Promise<Book>{
        return this.prisma.book.delete({
            where:{
                id: id
            }
        })
    }

    async updateBook(id: number,data: Prisma.BookUpdateInput): Promise<Book>{
        return this.prisma.book.update({
            where:{
                id: id
            },
            data: data
        })
    }

    async getBookById(id: number): Promise<Book | null>{
        return this.prisma.book.findUnique({
            where:{
                id: id
            }
        })
    }

    async getAllBooks(): Promise<Book[]>{
        return this.prisma.book.findMany();
    }
}   