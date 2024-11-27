import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminWhereInput } from './admin-where.input';
import { Type } from 'class-transformer';
import { AdminOrderByWithRelationInput } from './admin-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminScalarFieldEnum } from './admin-scalar-field.enum';

@ArgsType()
export class FindFirstAdminOrThrowArgs {
  @Field(() => AdminWhereInput, { nullable: true })
  @Type(() => AdminWhereInput)
  where?: AdminWhereInput;

  @Field(() => [AdminOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AdminOrderByWithRelationInput>;

  @Field(() => AdminWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<AdminWhereUniqueInput, 'id' | 'email'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [AdminScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AdminScalarFieldEnum>;
}
