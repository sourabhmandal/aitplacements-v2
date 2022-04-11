import { Arg, Query, Resolver } from "type-graphql";
import { prisma } from "../../utils/db";
import { User } from "./user.schema";

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    // database result
    const users: User[] = await prisma.users.findMany();
    return users;
  }

  @Query(() => User, { nullable: true })
  getUserByName(@Arg("name", () => String) name: string): User | undefined {
    // database result
    if (name == "sourabh") {
      return new User();
    }
  }
}
