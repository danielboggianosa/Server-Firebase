import { Router } from 'express';
import { indexController } from '../controllers/index.controller';

class IndexRoutes {
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.get('/', indexController.index);
        this.router.get('/api', indexController.list);
        this.router.get('/api/:id', indexController.getOne)
        this.router.post('/api', indexController.create);
        this.router.delete('/api/:id', indexController.delete);
        this.router.put('/api/:id', indexController.update);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;