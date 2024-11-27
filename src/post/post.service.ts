import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { BaseCrudService } from 'src/baseCrud.service';
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

@Injectable()
export class PostService extends BaseCrudService<
  Post,
  FindFirstPostArgs,
  FindUniquePostArgs,
  FindManyPostArgs,
  PostGroupByArgs,
  PostAggregateArgs,
  CreateOnePostArgs,
  CreateManyPostArgs,
  UpdateOnePostArgs,
  UpdateManyPostArgs,
  DeleteOnePostArgs,
  DeleteManyPostArgs
> {
  constructor(prisma: DatabaseService) {
    super(prisma);
  }
}
