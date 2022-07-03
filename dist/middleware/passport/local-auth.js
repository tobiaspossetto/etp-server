"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const user_1 = require("../../db/models/user");
const validPassword_1 = require("../../utils/validPassword");
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.User.findById(id);
    done(null, { _id: user._id, email: user.email });
}));
//* SINGUP
passport_1.default.use('local-signup', new passport_local_1.Strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userExists = yield user_1.User.find({ email });
        console.log(userExists);
        if (userExists.length > 0) {
            return done(null, false, { message: 'Email already exists' });
        }
        else {
            const newUser = new user_1.User();
            newUser.email = email;
            newUser.password = newUser.encryptPassword(password);
            yield newUser.save();
            // TODO: VER POR QUE ME DA ERROR AL USER IUser
            const userFromDatabase = yield user_1.User.findOne({ email });
            done(null, {
                _id: userFromDatabase._id,
                email: userFromDatabase.email
            });
        }
    }
    catch (error) {
        console.error(error);
    }
})));
// * SIGNIN
passport_1.default.use('local-signin', new passport_local_1.Strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.User.findOne({ email });
        console.log(user);
        if (user === null) {
            return done(null, false, { message: 'User not found' });
        }
        else if (!validPassword_1.validPassword(password, user.password)) {
            return done(null, false, { message: 'Wrong password' });
        }
        else {
            return done(null, { _id: user._id, email: user.email });
        }
    }
    catch (error) {
        console.log(error);
    }
})));
