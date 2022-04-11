import { ObjectType, Field, ID, GraphQLISODateTime } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  registrationNo: number;

  @Field(() => String)
  firstName: string;

  @Field(() => String!)
  lastName!: string | null;

  @Field(() => String)
  email: string;

  @Field(() => String)
  branch: string;

  @Field(() => String)
  year: string;

  @Field(() => Boolean)
  verified: boolean;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
