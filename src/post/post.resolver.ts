import { CreateManyPostArgs } from 'src/@generated/post/create-many-post.args';
import { CreateOnePostArgs } from 'src/@generated/post/create-one-post.args';
import { DeleteManyPostArgs } from 'src/@generated/post/delete-many-post.args';
import { DeleteOnePostArgs } from 'src/@generated/post/delete-one-post.args';
import { FindFirstPostArgs } from 'src/@generated/post/find-first-post.args';
import { FindManyPostArgs } from 'src/@generated/post/find-many-post.args';
import { FindUniquePostArgs } from 'src/@generated/post/find-unique-post.args';
import { UpdateManyPostArgs } from 'src/@generated/post/update-many-post.args';
import { UpdateOnePostArgs } from 'src/@generated/post/update-one-post.args';
import { Post } from 'src/@generated/post/post.model';
import { PostAggregateArgs } from 'src/@generated/post/post-aggregate.args';
import { PostGroupByArgs } from 'src/@generated/post/post-group-by.args';
import { AffectedRows } from 'src/@generated/prisma/affected-rows.output';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PostService } from './post.service';
import { PostGroupBy } from 'src/@generated/post/post-group-by.output';
import { AggregatePost } from 'src/@generated/post/aggregate-post.output';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => Post, { nullable: false })
  findFirstPost(@Args() args: FindFirstPostArgs) {
    this.postService.findFirst(args);
  }

  @Query(() => Post, { nullable: false })
  findUniquePost(@Args() args: FindUniquePostArgs) {
    return this.postService.findUnique(args);
  }

  @Query(() => [Post], { nullable: false })
  listPosts(@Args() args: FindManyPostArgs) {
    return this.postService.findMany(args);
  }

  @Query(() => [PostGroupBy], { nullable: false })
  groupByPost(@Args() args: PostGroupByArgs) {
    return this.postService.groupBy(args);
  }

  @Query(() => AggregatePost, { nullable: false })
  aggregatePost(@Args() args: PostAggregateArgs) {
    return this.postService.aggregate(args);
  }

  @Mutation(() => Post, { nullable: true })
  createPost(@Args() args: CreateOnePostArgs) {
    return this.postService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyPost(@Args() args: CreateManyPostArgs) {
    return this.postService.createMany(args);
  }

  @Mutation(() => Post, { nullable: true })
  updatePost(@Args() args: UpdateOnePostArgs) {
    return this.postService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyPost(@Args() args: UpdateManyPostArgs) {
    return this.postService.updateMany(args);
  }

  @Mutation(() => Post, { nullable: true })
  deletePost(@Args() args: DeleteOnePostArgs) {
    return this.postService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyPost(@Args() args: DeleteManyPostArgs) {
    return this.postService.deleteMany(args);
  }
}
