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
        this.router.get('/', user_controller_1.userController.list);
        this.router.get('/:id', user_controller_1.userController.getOne);
        this.router.post('/', user_controller_1.userController.create);
        this.router.post('/authenticate', user_controller_1.userController.authenticate);
        this.router.delete('/:id', user_controller_1.userController.delete);
        this.router.put('/:id', user_controller_1.userController.update);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
