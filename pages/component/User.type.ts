export interface IUser {
  id: string;
  username: string;
  email: string;
  role: string;
}

export const dummyUserList: IUser[] = [
  {
    id: new Date().toJSON().toString(),
    username: "Dummy 1",
    email: "Dummy11@gmail.com",
    role: "Staff",
  },
  {
    id: new Date().toJSON().toString(),
    username: "Mia",
    email: "mia@gmail.com",
    role: "Admin",
  },
  {
    id: new Date().toJSON().toString(),
    username: "Dummy 1",
    email: "Dummy11@gmail.com",
    role: "Admin",
  }
];

export enum PageEnum {
    list,
    add,
    edit
}