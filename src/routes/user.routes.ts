import { Router } from 'express';
import { userController } from '../controllers/user.controller';

class UserRoutes {
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.get('/user/', userController.index);
        this.router.get('/api/user', userController.list);
        this.router.get('/api/user/:id', userController.getOne)
        this.router.post('/api/user', userController.create);
        this.router.delete('/api/user/:id', userController.delete);
        this.router.put('/api/user/:id', userController.update);
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;