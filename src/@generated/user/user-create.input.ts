import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
import { PostCreateNestedManyWithoutUserInput } from '../post/post-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  username!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => CommentCreateNestedManyWithoutUserInput, { nullable: true })
  comments?: CommentCreateNestedManyWithoutUserInput;

  @Field(() => PostCreateNestedManyWithoutUserInput, { nullable: true })
  posts?: PostCreateNestedManyWithoutUserInput;
}
