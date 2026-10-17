import { Request, Response } from 'express';

export class EjemploController {
    public static saludarSena = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            mensaje: 'La operación todavía no está implementada.'
        });
    };
}

