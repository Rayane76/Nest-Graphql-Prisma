import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { BaseCrudService } from 'src/baseCrud.service';
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

@Injectable()
export class CommentService extends BaseCrudService<
  Comment,
  FindFirstCommentArgs,
  FindUniqueCommentArgs,
  FindManyCommentArgs,
  CommentGroupByArgs,
  CommentAggregateArgs,
  CreateOneCommentArgs,
  CreateManyCommentArgs,
  UpdateOneCommentArgs,
  UpdateManyCommentArgs,
  DeleteOneCommentArgs,
  DeleteManyCommentArgs
> {
  constructor(prisma: DatabaseService) {
    super(prisma);
  }
}
