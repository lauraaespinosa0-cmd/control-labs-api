import { Request, Response } from 'express';

export class EquipmentController {
    public static getEquipments = (req: Request, res: Response): void => {
        try {
            res.status(500).json({ status: 'error', message: 'Error interno del servidor' });
        } catch (error: any) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    };

    public static createEquipment = (req: Request, res: Response): void => {
        try {
            res.status(500).json({ status: 'error', message: 'Error interno del servidor' });
        } catch (error: any) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    };

    public static getEquipmentById = (req: Request, res: Response): void => {
        try {
            res.status(500).json({ status: 'error', message: 'Error interno del servidor' });
        } catch (error: any) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    };

    public static patchEquipment = (req: Request, res: Response): void => {
        try {
            res.status(500).json({ status: 'error', message: 'Error interno del servidor' });
        } catch (error: any) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    };

    // Método añadido para evitar el error TS2551 en equipment.routes.ts
    public static patchEquipmentStatus = (req: Request, res: Response): void => {
        try {
            res.status(500).json({ status: 'error', message: 'Error interno del servidor' });
        } catch (error: any) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    };
}