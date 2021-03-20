// Inheritance

interface IUser {
    username: string;
    password: string;
}

interface IAdmin extends IUser {
    accessLevel: number
}

class User implements IUser {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password
    }

    changePassword (username: string, password: string): string {
        this.password = password
        return password;
    }
}

class Admin extends User {
    accessLevel: number;

    constructor(username: string, password: string, accessLevel: number) {
        super(username, password)
        this.accessLevel = accessLevel;
    }

    overridePassword () {
        return User1.password = this.password;
    }
}


let userName = "John Doe"
let newPassword = "New Password"
let adminName = "Admin Name"
let adminPassword = "Admin Password"
let adminAccess = 1

let User1 = new User(userName, "DefaultPassword")
let Admin1 = new Admin(adminName, adminPassword, adminAccess)

console.log(User1.changePassword(userName, newPassword))
console.log(Admin1.overridePassword())
