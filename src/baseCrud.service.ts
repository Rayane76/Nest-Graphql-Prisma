import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class BaseCrudService<
  T,
  FindFirstArg,
  FindUniqueArg,
  FindManyArg,
  GroupByArg,
  AggregateArg,
  CreateArg,
  CreateManyArg,
  UpdateArg,
  UpdatedManyArg,
  DeleteArg,
  DeleteManyArg,
> {
  constructor(public prisma: DatabaseService) {}

  async findFirst(args: FindFirstArg): Promise<T | null> {
    try {
      return await this.prisma[this.getModelName()].findFirst(args);
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }
  findUnique(args: FindUniqueArg): Promise<T | null> {
    return this.prisma[this.getModelName()].findUnique(args);
  }

  findMany(args: FindManyArg): Promise<T[]> {
    return this.prisma[this.getModelName()].findMany(args);
  }

  groupBy(args: GroupByArg) {
    return this.prisma[this.getModelName()].groupBy(args);
  }

  aggregate(args: AggregateArg) {
    return this.prisma[this.getModelName()].aggregate(args);
  }

  create(args: CreateArg): Promise<T> {
    return this.prisma[this.getModelName()].create(args);
  }

  createMany(args: CreateManyArg) {
    return this.prisma[this.getModelName()].createMany(args);
  }

  update(args: UpdateArg): Promise<T> {
    return this.prisma[this.getModelName()].update(args);
  }

  updateMany(args: UpdatedManyArg): Promise<T[]> {
    return this.prisma[this.getModelName()].updateMany(args);
  }

  delete(args: DeleteArg): Promise<T> {
    return this.prisma[this.getModelName()].delete(args);
  }

  deleteMany(args: DeleteManyArg): Promise<T[]> {
    return this.prisma[this.getModelName()].deleteMany(args);
  }
  private getModelName(): string {
    return this.constructor.name.replace('Service', '');
  }
}
