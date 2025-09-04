import type { Entity } from "./entity.js";

export interface Service<TEntity extends Entity> {
  findById: (id: string) => Promise<TEntity | undefined>;
  findAll: () => Promise<TEntity[]>;
  editOne: (data: TEntity) => Promise<TEntity>;
  save: (data: TEntity) => Promise<void>;
  updateMany: (data: TEntity[]) => Promise<TEntity[] | undefined>;
}
