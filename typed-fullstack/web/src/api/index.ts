import { DefaultApi, UsersApi } from "./clients";

export const API = {
  users: new UsersApi(),
  default: new DefaultApi(),
};
