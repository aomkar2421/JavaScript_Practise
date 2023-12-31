class CreateUser {

    constructor(username){
        this.username = username;
    }

    changeUsername(){
       console.log(this.username.toUpperCase());
    }

    static createId(){ // static prevents direct access
        return '123'
    }
}

let om = new CreateUser("omkar");
// static prevents direct access
// console.log(om.createId())

class Teacher extends CreateUser{
    constructor(username , email){
        super(username)
        this.email = email;
    }

    course (){
        console.log("new course is added by "+this.username)
    }
}

let t1 = new Teacher("omkarrr" , "gmail.com");
// t1.createId();  not accesible 