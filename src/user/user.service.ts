import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { BaseCrudService } from 'src/baseCrud.service';
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

@Injectable()
export class UserService extends BaseCrudService<
  User,
  FindFirstUserArgs,
  FindUniqueUserArgs,
  FindManyUserArgs,
  UserGroupByArgs,
  UserAggregateArgs,
  CreateOneUserArgs,
  CreateManyUserArgs,
  UpdateOneUserArgs,
  UpdateManyUserArgs,
  DeleteOneUserArgs,
  DeleteManyUserArgs
> {
  constructor(prisma: DatabaseService) {
    super(prisma);
  }
}
