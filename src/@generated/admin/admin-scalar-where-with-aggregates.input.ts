import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumRoleWithAggregatesFilter } from '../prisma/enum-role-with-aggregates-filter.input';

@InputType()
export class AdminScalarWhereWithAggregatesInput {
  @Field(() => [AdminScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<AdminScalarWhereWithAggregatesInput>;

  @Field(() => [AdminScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<AdminScalarWhereWithAggregatesInput>;

  @Field(() => [AdminScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<AdminScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  password?: StringWithAggregatesFilter;

  @Field(() => EnumRoleWithAggregatesFilter, { nullable: true })
  role?: EnumRoleWithAggregatesFilter;
}
