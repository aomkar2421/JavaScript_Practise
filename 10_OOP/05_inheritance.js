class CreateUser {

    constructor(username){
        this.username = username;
    }

    changeUsername(){
       console.log(this.username.toUpperCase());
    }
}

class Teacher extends CreateUser{
    constructor(username , email){
        super(username)
        this.email = email;
    }

    course (){
        console.log("new course is added by "+this.username)
    }
}

let t1 = new Teacher("omkar" , "omk123")
t1.course();
t1.changeUsername()

let t2 = new CreateUser("avi")
t2.changeUsername();
//t2.course() not accesible

console.log(t1 instanceof Teacher)
console.log(t1 instanceof CreateUser)
console.log(t2 instanceof Teacher)
console.log(t2 instanceof CreateUser)
