import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminCreateManyInput } from './admin-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAdminArgs {
  @Field(() => [AdminCreateManyInput], { nullable: false })
  @Type(() => AdminCreateManyInput)
  data!: Array<AdminCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
