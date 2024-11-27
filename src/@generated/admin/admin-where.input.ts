import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';

@InputType()
export class AdminWhereInput {
  @Field(() => [AdminWhereInput], { nullable: true })
  AND?: Array<AdminWhereInput>;

  @Field(() => [AdminWhereInput], { nullable: true })
  OR?: Array<AdminWhereInput>;

  @Field(() => [AdminWhereInput], { nullable: true })
  NOT?: Array<AdminWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter;

  @Field(() => EnumRoleFilter, { nullable: true })
  role?: EnumRoleFilter;
}
