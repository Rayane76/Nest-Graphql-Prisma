import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminWhereInput } from './admin-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';

@InputType()
export class AdminWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => [AdminWhereInput], { nullable: true })
  AND?: Array<AdminWhereInput>;

  @Field(() => [AdminWhereInput], { nullable: true })
  OR?: Array<AdminWhereInput>;

  @Field(() => [AdminWhereInput], { nullable: true })
  NOT?: Array<AdminWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter;

  @Field(() => EnumRoleFilter, { nullable: true })
  role?: EnumRoleFilter;
}
