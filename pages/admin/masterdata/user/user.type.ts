export interface IUser {
    id: string;
    username: string;
    email: string;
    role: string;
    sandi: string;
}

let counter = 1;
function generateID() {
    return `MU${counter++}`;
};

export const dummyUserList: IUser[] = [{
    id: generateID(),
    username: "Miahana",
    email: "hendamiayohana@gmail.com",
    role: "Admin",
    sandi: "12345678",
}, {
    id: generateID(),
    username: "heiyohana",
    email: "heiyohana@gmail.com",
    role: "Staff",
    sandi: "yohana12",
}, {
    id: generateID(),
    username: "ikasept",
    email: "ikasept09@gmail.com",
    role: "Staff",
    sandi: "ikasept09",
}, {
    id: generateID(),
    username: "maryana",
    email: "maryana0103@gmail.com",
    role: "Staff",
    sandi: "marya13",
}, {
    id: generateID(),
    username: "aguswin",
    email: "aguswin8@gmail.com",
    role: "Staff",
    sandi: "akuagus",
}]

export enum PageEnum {
    list,
    add,
}