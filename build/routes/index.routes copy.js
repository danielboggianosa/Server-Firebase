"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', index_controller_1.indexController.index);
        this.router.get('/api', index_controller_1.indexController.list);
        this.router.get('/api/:id', index_controller_1.indexController.getOne);
        this.router.post('/api', index_controller_1.indexController.create);
        this.router.delete('/api/:id', index_controller_1.indexController.delete);
        this.router.put('/api/:id', index_controller_1.indexController.update);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
