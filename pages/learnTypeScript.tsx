let variable = "hello";
// variable = 21; akan menjadi salah karena sebelumnya telah dideklarasikan bahwa variable bertipe string

let age = 18;
// age = "eighteen"; juga akan menjadi salah karena sebelumnya telah dideklarasikan bahwa age bertipe number

let ageWithType: number;
// ageWithType = "eight" salah
// ageWithType = 18; benar

let testString: string;
testString = "hello";

let testBoolean: boolean;
testBoolean = false;

let tesStringOrNumber: string | number;
tesStringOrNumber = 10;
tesStringOrNumber = "sepuluh";
tesStringOrNumber = "Mia" + 366;
tesStringOrNumber = "Mia366";

// Array
let names = ["John", "Jane", "Tom"];
// names.push(3)
names.push("Mike");

let numbers = [11, 22, 35];
// numbers.push(true)
numbers.push(92);

let tesStringArray: string[];
// tesStringArray = [1,2,3,4,5] salah
tesStringArray = ["satu", "dua", "tiga"];

let tesNumberArray: number[];
// tesNumberArray = [1, 2, "3", "4", "5"]; salah
tesNumberArray = [1, 2, 3, 4, 5];

let tesStringOrNumberArray: (string | number)[];
tesStringOrNumberArray = [1, 2, "3", "4", "5"];

// OBJECTS

let user = {
  username: "John",
  age: 22,
  isAdmin: false,
};

user.username = "Jane";
// user.age = "eighteen" salah
user.age = 29;
user.isAdmin = true;
// user.phone = "+12345678" salah karena kita gak punya property phone

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  username: "John",
  age: 23,
  isAdmin: true,
  // user.phone : "+12345678", masih salah karena belum dideclare
};

let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string; //?: berarti not required
};

userObj2 = {
  username: "Mia",
  age: 22,
  isAdmin: true,
  phone: "+12345678",
};

//ANY
let testAny;

testAny = 12;
testAny = "hello";
testAny = true;
testAny = [false];
testAny = {};

let tesAnyArray: any[];
tesAnyArray = [1, "Jane", true, []];

// FUNCTIONS
let sayHi = () => {
  console.log("Hi, welcome!");
};

// sayHi = "hi"

let funcReturnString = (): string => {
  console.log("hi");
  return "lama dev";
};

let multiple = (num: number) => {
  return num * 2;
};

let multiple2 = (num: number): number => {
  return num * 2;
};

let multiple3 = (num: number): void => {
  //   return num * 2;
  // Do sth but don't return
};

let sum = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};

sum(2, 3);

let func = (user: { username: string; age: number; phone?: string }) => [
  console.log(user.username),
];

// TYPE ALIASES
type UserType = {
  username: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  console.log(user.username);
};

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + " times " + str);
};

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: UserType2 = {
  username: "John",
  age: 43,
  theme: "dark",
};

// INTERFACES
interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  username: "tom",
  email: "tom@gmail.com",
  age: 43,
  employeeId: 1,
};

const client: IUser = {
  username: "tom",
  email: "tom@gmail.com",
  age: 43,
};

// GENERICS
interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}
interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<string> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: ["str", "str2"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostBetter<{ id: number; username: string }> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, username: "John" }],
};

const testMe3: IPostBetter<{ id: number; username: string }> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, username: "John" }],
};
