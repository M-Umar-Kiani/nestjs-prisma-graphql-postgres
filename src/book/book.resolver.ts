import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { BookService } from "./book.service";
import { Book } from "./schema/book.schema";
import { Book as BookModel } from "../graphql";
import { AddBookArgs } from "./args/add.book.args";
import { BookModule } from "./book.module";

@Resolver()
export class BookResolver{

    constructor(private readonly bookService : BookService){}

    @Query(returns => [Book], {name: "books"})
    getAllBooks(): Promise<BookModel[]> {
        return this.bookService.getAllBooks();
    }

    @Query(returns => Book, {name:"findBookById", nullable: true})
    getBookById(@Args({name: "bookId", type: ()=> Int}) id: number): Promise<BookModel>{
        return this.bookService.getBookById(id);
    }

    @Mutation(returns => Book, {name:"deleteBookById"})
    deleteBookById(@Args({name: "bookId", type: ()=> Int}) id: number): Promise<BookModel>{
        return this.bookService.deleteBook(id);
    }
 
    @Mutation(returns => Book, {name:"addBook"})
    addBook(@Args("addBookArgs") addBookArgs: AddBookArgs): Promise<BookModel>{
        return this.bookService.addBook(addBookArgs);
    }

    @Mutation(returns => Book, {name:"updateBook"})
    updateBook(@Args({name: "bookId", type: ()=> Int}) id: number, @Args("updateBookArgs") updateBookArgs: AddBookArgs): Promise<BookModel>{
        return this.bookService.updateBook(id ,updateBookArgs);
    }

}