import { Request, Response } from 'express';

class UserController {
    // INDEX
    public index (req: Request, res: Response) {
        res.json({"Mensaje": "Vas por buen camino"});
    }

    //CREATE
    public async create (req: Request, res: Response): Promise<void> {
        
    }

    //READ ALL
    public async list (req: Request, res: Response) {
    }
    //READ 1
    public async getOne (req: Request, res: Response): Promise<any> {
    }

    //UPDATE
    public async update (req: Request, res: Response) {
    }

    //DELETE 1
    public async delete (req: Request, res: Response): Promise<void> {
    }

}

export const indexController = new UserController();