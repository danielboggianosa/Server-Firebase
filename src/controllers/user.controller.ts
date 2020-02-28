import { Request, Response } from 'express';
import firebase from '../database/firebase';
import database from '../database/database';

class UserController {
    // INDEX
    public index (req: Request, res: Response) {
        res.json({"Mensaje": "Vas por buen camino"});
    }

    //CREATE
    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const {nombre, apellido, email, password} = req.body;
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            ()=>{
                database.ref('usuarios').set({
                    nombre: nombre,
                    apellido: apellido,
                    correo: email
                })
                .then(()=>res.status(200).json({message: 'Usuario creado satisfactoriamente'}))
                .catch((error:any)=>res.json({error:error}))
            }
        )
        .catch(function(error:any) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            res.json(errorMessage);
            // ...
          });
    }

    // AUTENTICAR USUARIO
    public async authenticate (req: Request, res: Response) {
        const {email, password} = req.body;
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>res.status(200).json({message:'Usuario autorizado'}))
        .catch(function(error:any) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // ...
          });
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

export const userController = new UserController();