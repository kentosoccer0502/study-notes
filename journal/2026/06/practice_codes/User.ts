class User {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    if (name === '') {
      throw new Error('Name cannot be empty');
    }
    this.name = name;
    this.age = age;
  }

  getMessage(message: string): string {
    return `${this.name} (${this.age}) 「${message}」`;
  }
}

const uhyo = new User('uhyo', 30);
console.log(uhyo.getMessage('Hello, world!'));

// type User = {
//     name: string;
//     age: number;
// }

// function createUser(name: string, age: number): User {
//     if (name === '') {
//         throw new Error('Name cannot be empty');
//     }
//     return { name, age };
// }

// function getMessage(user: User, message: string): string {
//     return `${user.name} (${user.age}) 「${message}」`;
// }

// const uhyo2 = createUser('uhyo', 30);
// console.log(getMessage(uhyo2, 'Hello, world!'));
