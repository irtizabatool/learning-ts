// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; //tuple
// } = {
//     name: 'Phoebe',
//     age: 30,
//     hobbies: ['sports', 'cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 5, READ_ONLY = 60, AUTHOR };

const person = {
    name: 'Phoebe',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
//person.role[1] = 10;

// person.role = [0, 'admin', 'user']

let favoriteOnes: any[];
favoriteOnes = ['sports'];  
console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

if(person.role === Role.AUTHOR){
    console.log("is an admin");
}