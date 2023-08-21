export interface IUser {
    id: string;
    username: string;
    email: string;
    role: string;
    sandi: string;
}

export const dummyUserList: IUser[] = [{
    id: new Date().toJSON.toString(),
    username: "Miahana",
    email: "hendamiayohana@gmail.com",
    role: "Admin",
    sandi: "12345678",
}, {
    id: new Date().toJSON.toString(),
    username: "heiyohana",
    email: "heiyohana@gmail.com",
    role: "Staff",
    sandi: "yohana12",
}, {
    id: new Date().toJSON.toString(),
    username: "ikasept",
    email: "ikasept09@gmail.com",
    role: "Staff",
    sandi: "ikasept09",
}, {
    id: new Date().toJSON.toString(),
    username: "maryana",
    email: "maryana0103@gmail.com",
    role: "Staff",
    sandi: "marya13",
}, {
    id: new Date().toJSON.toString(),
    username: "aguswin",
    email: "aguswin8@gmail.com",
    role: "Staff",
    sandi: "akuagus",
}]

export enum PageEnum {
    list,
    add,
}