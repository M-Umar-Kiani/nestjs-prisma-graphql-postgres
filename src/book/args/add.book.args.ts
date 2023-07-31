import {InputType, Field, Int} from "@nestjs/graphql"

@InputType()
export class AddBookArgs{
    @Field((type) => Int)
    id: number;

    @Field()
    title: string;

    @Field((type) => Int)
    price: number;
}