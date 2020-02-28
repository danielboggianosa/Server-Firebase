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
const firebase_1 = __importDefault(require("../database/firebase"));
const database_1 = __importDefault(require("../database/database"));
class UserController {
    // INDEX
    index(req, res) {
        res.json({ "Mensaje": "Vas por buen camino" });
    }
    //CREATE
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { nombre, apellido, email, password } = req.body;
            yield firebase_1.default.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                database_1.default.ref('usuarios').set({
                    nombre: nombre,
                    apellido: apellido,
                    correo: email
                })
                    .then(() => res.status(200).json({ message: 'Usuario creado satisfactoriamente' }))
                    .catch((error) => res.json({ error: error }));
            })
                .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                res.json(errorMessage);
                // ...
            });
        });
    }
    // AUTENTICAR USUARIO
    authenticate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            yield firebase_1.default.auth().signInWithEmailAndPassword(email, password)
                .then(() => res.status(200).json({ message: 'Usuario autorizado' }))
                .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                // ...
            });
        });
    }
    //READ ALL
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    //READ 1
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    //UPDATE
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    //DELETE 1
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.userController = new UserController();
