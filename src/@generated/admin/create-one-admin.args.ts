import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminCreateInput } from './admin-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAdminArgs {
  @Field(() => AdminCreateInput, { nullable: false })
  @Type(() => AdminCreateInput)
  data!: AdminCreateInput;
}
