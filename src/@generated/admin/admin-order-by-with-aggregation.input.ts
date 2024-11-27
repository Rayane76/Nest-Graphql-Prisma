import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminCountOrderByAggregateInput } from './admin-count-order-by-aggregate.input';
import { AdminMaxOrderByAggregateInput } from './admin-max-order-by-aggregate.input';
import { AdminMinOrderByAggregateInput } from './admin-min-order-by-aggregate.input';

@InputType()
export class AdminOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => AdminCountOrderByAggregateInput, {nullable:true})
    _count?: AdminCountOrderByAggregateInput;

    @Field(() => AdminMaxOrderByAggregateInput, {nullable:true})
    _max?: AdminMaxOrderByAggregateInput;

    @Field(() => AdminMinOrderByAggregateInput, {nullable:true})
    _min?: AdminMinOrderByAggregateInput;
}
