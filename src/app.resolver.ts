import { Resolver, Query } from "@nestjs/graphql";

@Resolver(of => String )
export class AppResolver{

    @Query(returns => String)
    index() : String {
        return "NestJS GraphQL server"
    }

}