import { CreateManyCommentArgs } from 'src/@generated/comment/create-many-comment.args';
import { CreateOneCommentArgs } from 'src/@generated/comment/create-one-comment.args';
import { DeleteManyCommentArgs } from 'src/@generated/comment/delete-many-comment.args';
import { DeleteOneCommentArgs } from 'src/@generated/comment/delete-one-comment.args';
import { FindFirstCommentArgs } from 'src/@generated/comment/find-first-comment.args';
import { FindManyCommentArgs } from 'src/@generated/comment/find-many-comment.args';
import { FindUniqueCommentArgs } from 'src/@generated/comment/find-unique-comment.args';
import { UpdateManyCommentArgs } from 'src/@generated/comment/update-many-comment.args';
import { UpdateOneCommentArgs } from 'src/@generated/comment/update-one-comment.args';
import { Comment } from 'src/@generated/comment/comment.model';
import { CommentAggregateArgs } from 'src/@generated/comment/comment-aggregate.args';
import { CommentGroupByArgs } from 'src/@generated/comment/comment-group-by.args';
import { AffectedRows } from 'src/@generated/prisma/affected-rows.output';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { CommentGroupBy } from 'src/@generated/comment/comment-group-by.output';
import { AggregateComment } from 'src/@generated/comment/aggregate-comment.output';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Query(() => Comment, { nullable: false })
  findFirstComment(@Args() args: FindFirstCommentArgs) {
    this.commentService.findFirst(args);
  }

  @Query(() => Comment, { nullable: false })
  findUniqueComment(@Args() args: FindUniqueCommentArgs) {
    return this.commentService.findUnique(args);
  }

  @Query(() => [Comment], { nullable: false })
  listComments(@Args() args: FindManyCommentArgs) {
    return this.commentService.findMany(args);
  }

  @Query(() => [CommentGroupBy], { nullable: false })
  groupByComment(@Args() args: CommentGroupByArgs) {
    return this.commentService.groupBy(args);
  }

  @Query(() => AggregateComment, { nullable: false })
  aggregateComment(@Args() args: CommentAggregateArgs) {
    return this.commentService.aggregate(args);
  }

  @Mutation(() => Comment, { nullable: true })
  createComment(@Args() args: CreateOneCommentArgs) {
    return this.commentService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyComment(@Args() args: CreateManyCommentArgs) {
    return this.commentService.createMany(args);
  }

  @Mutation(() => Comment, { nullable: true })
  updateComment(@Args() args: UpdateOneCommentArgs) {
    return this.commentService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyComment(@Args() args: UpdateManyCommentArgs) {
    return this.commentService.updateMany(args);
  }

  @Mutation(() => Comment, { nullable: true })
  deleteComment(@Args() args: DeleteOneCommentArgs) {
    return this.commentService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyComment(@Args() args: DeleteManyCommentArgs) {
    return this.commentService.deleteMany(args);
  }
}
