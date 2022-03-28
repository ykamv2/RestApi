import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

let users = [];
export const getUsers = (req,res)=>{
    // console.log(users);
    var data = JSON.stringify(users);
    res.send(data);
}

export const createUser = (req,res)=>{
    const user = req.body;
    const userId = uuidv4();
    const userWithId = {...user,id:userId}
    users.push(userWithId);
    res.send(`User with the name ${user.firstName} added to the Database`)
}

export const getUser = (req,res)=>{
    // console.log("Im here");
    const {id} = req.params;
    // console.log(id);
    const foundUser = users.find((user)=> user.id === id)
    // console.log(foundUser);
    var data = JSON.stringify(foundUser);
    res.send(data);
    
}

export const deleteUser = (req,res)=>{
    const {id} = req.params;
    // console.log("Users before : ", users)
    // we filter out those users whose id is not equals to id, i.e, whenever user.id ==!id returns true, those users will be shown, when it is false, it will be removed
    users = users.filter((user) => user.id !== id)
    // console.log("Users after : ", users)
    res.send(`User with the id: ${id} is removed`)   
}

export const updateUser = (req,res)=>{
    const {id} = req.params;
    const {firstName, lastName, age, rollno} = req.body;
    const user = users.find((user) => user.id === id)
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    if(rollno) user.rollno = rollno;   
    res.send(`User with the id: ${id} is updated`)
}
