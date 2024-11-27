import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdminCountAggregate } from './admin-count-aggregate.output';
import { AdminMinAggregate } from './admin-min-aggregate.output';
import { AdminMaxAggregate } from './admin-max-aggregate.output';

@ObjectType()
export class AggregateAdmin {
  @Field(() => AdminCountAggregate, { nullable: true })
  _count?: AdminCountAggregate;

  @Field(() => AdminMinAggregate, { nullable: true })
  _min?: AdminMinAggregate;

  @Field(() => AdminMaxAggregate, { nullable: true })
  _max?: AdminMaxAggregate;
}
