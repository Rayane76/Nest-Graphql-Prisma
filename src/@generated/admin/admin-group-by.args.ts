import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminWhereInput } from './admin-where.input';
import { Type } from 'class-transformer';
import { AdminOrderByWithAggregationInput } from './admin-order-by-with-aggregation.input';
import { AdminScalarFieldEnum } from './admin-scalar-field.enum';
import { AdminScalarWhereWithAggregatesInput } from './admin-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AdminCountAggregateInput } from './admin-count-aggregate.input';
import { AdminMinAggregateInput } from './admin-min-aggregate.input';
import { AdminMaxAggregateInput } from './admin-max-aggregate.input';

@ArgsType()
export class AdminGroupByArgs {
  @Field(() => AdminWhereInput, { nullable: true })
  @Type(() => AdminWhereInput)
  where?: AdminWhereInput;

  @Field(() => [AdminOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<AdminOrderByWithAggregationInput>;

  @Field(() => [AdminScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof AdminScalarFieldEnum>;

  @Field(() => AdminScalarWhereWithAggregatesInput, { nullable: true })
  having?: AdminScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => AdminCountAggregateInput, { nullable: true })
  _count?: AdminCountAggregateInput;

  @Field(() => AdminMinAggregateInput, { nullable: true })
  _min?: AdminMinAggregateInput;

  @Field(() => AdminMaxAggregateInput, { nullable: true })
  _max?: AdminMaxAggregateInput;
}
