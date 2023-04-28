import { v4 } from "uuid";

export class User {
  username: string;
  password: string;
  id: string;

  constructor(name: string, pass: string) {
    this.username = name;
    this.password = pass;
    this.id = v4();
  }
}
