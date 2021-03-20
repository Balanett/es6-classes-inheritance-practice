"use strict";
// Inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    User.prototype.changePassword = function (username, password) {
        this.password = password;
        return password;
    };
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(username, password, accessLevel) {
        var _this = _super.call(this, username, password) || this;
        _this.accessLevel = accessLevel;
        return _this;
    }
    Admin.prototype.overridePassword = function () {
        return User1.password = this.password;
    };
    return Admin;
}(User));
var userName = "John Doe";
var newPassword = "New Password";
var adminName = "Admin Name";
var adminPassword = "Admin Password";
var adminAccess = 1;
var User1 = new User(userName, "DefaultPassword");
var Admin1 = new Admin(adminName, adminPassword, adminAccess);
console.log(User1.changePassword(userName, newPassword));
console.log(Admin1.overridePassword());
