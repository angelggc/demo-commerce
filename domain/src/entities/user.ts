import type { Entity } from "../utils/types/entity.js";

export const UserStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];

export interface User extends Entity {
  name: string;
  email: string;
  password: string;
  status: UserStatus;
}

const user: User = {
  id: "1",
  name: "",
  email: "",
  password: "",
  status: UserStatus.ACTIVE,
};
