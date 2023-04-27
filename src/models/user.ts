export interface IUser {
  name: string;
  email: string;
  password: string;
}

export class User implements IUser {
  public name: string = "";
  public email: string = "";
  public password: string = "";

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
