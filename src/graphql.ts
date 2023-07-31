
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    id: number;
    title: string;
    price: number;
}

export interface Book {
    id: number;
    title: string;
    price: number;
}

export interface IQuery {
    index(): string | Promise<string>;
    books(): Book[] | Promise<Book[]>;
    findBookById(bookId: number): Nullable<Book> | Promise<Nullable<Book>>;
}

export interface IMutation {
    deleteBookById(bookId: number): Book | Promise<Book>;
    addBook(addBookArgs: AddBookArgs): Book | Promise<Book>;
    updateBook(bookId: number, updateBookArgs: AddBookArgs): Book | Promise<Book>;
}

type Nullable<T> = T | null;
