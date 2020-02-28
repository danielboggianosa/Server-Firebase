"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/user/', user_controller_1.userController.index);
        this.router.get('/api/user', user_controller_1.userController.list);
        this.router.get('/api/user/:id', user_controller_1.userController.getOne);
        this.router.post('/api/user', user_controller_1.userController.create);
        this.router.delete('/api/user/:id', user_controller_1.userController.delete);
        this.router.put('/api/user/:id', user_controller_1.userController.update);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
