import { CreateManyUserArgs } from 'src/@generated/user/create-many-user.args';
import { CreateOneUserArgs } from 'src/@generated/user/create-one-user.args';
import { DeleteManyUserArgs } from 'src/@generated/user/delete-many-user.args';
import { DeleteOneUserArgs } from 'src/@generated/user/delete-one-user.args';
import { FindFirstUserArgs } from 'src/@generated/user/find-first-user.args';
import { FindManyUserArgs } from 'src/@generated/user/find-many-user.args';
import { FindUniqueUserArgs } from 'src/@generated/user/find-unique-user.args';
import { UpdateManyUserArgs } from 'src/@generated/user/update-many-user.args';
import { UpdateOneUserArgs } from 'src/@generated/user/update-one-user.args';
import { User } from 'src/@generated/user/user.model';
import { UserAggregateArgs } from 'src/@generated/user/user-aggregate.args';
import { UserGroupByArgs } from 'src/@generated/user/user-group-by.args';
import { AffectedRows } from 'src/@generated/prisma/affected-rows.output';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserGroupBy } from 'src/@generated/user/user-group-by.output';
import { AggregateUser } from 'src/@generated/user/aggregate-user.output';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { nullable: false })
  findFirstUser(@Args() args: FindFirstUserArgs) {
    this.userService.findFirst(args);
  }

  @Query(() => User, { nullable: false })
  findUniqueUser(@Args() args: FindUniqueUserArgs) {
    return this.userService.findUnique(args);
  }

  @Query(() => [User], { nullable: false })
  listUsers(@Args() args: FindManyUserArgs) {
    return this.userService.findMany(args);
  }

  @Query(() => [UserGroupBy], { nullable: false })
  groupByUser(@Args() args: UserGroupByArgs) {
    return this.userService.groupBy(args);
  }

  @Query(() => AggregateUser, { nullable: false })
  aggregateUser(@Args() args: UserAggregateArgs) {
    return this.userService.aggregate(args);
  }

  @Mutation(() => User, { nullable: true })
  createUser(@Args() args: CreateOneUserArgs) {
    return this.userService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyUser(@Args() args: CreateManyUserArgs) {
    return this.userService.createMany(args);
  }

  @Mutation(() => User, { nullable: true })
  updateUser(@Args() args: UpdateOneUserArgs) {
    return this.userService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyUser(@Args() args: UpdateManyUserArgs) {
    return this.userService.updateMany(args);
  }

  @Mutation(() => User, { nullable: true })
  deleteUser(@Args() args: DeleteOneUserArgs) {
    return this.userService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyUser(@Args() args: DeleteManyUserArgs) {
    return this.userService.deleteMany(args);
  }
}
