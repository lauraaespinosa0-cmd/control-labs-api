import { Request, Response } from 'express';

export class EquipmentController {
    public static getEquipments = (req: Request, res: Response): void => {
        try {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: 'Simulación de error en listado de equipos'
            });
        } catch (error: any) {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: error.message
            });
        }
    };

    public static createEquipment = (req: Request, res: Response): void => {
        try {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: 'Simulación de error al crear equipo'
            });
        } catch (error: any) {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: error.message
            });
        }
    };

    public static getEquipmentById = (req: Request, res: Response): void => {
        try {
            const { id } = req.params;
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: `Simulación de error al buscar el equipo ${id}`
            });
        } catch (error: any) {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: error.message
            });
        }
    };

    public static patchEquipment = (req: Request, res: Response): void => {
        try {
            const { id } = req.params;
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: `Simulación de error al actualizar el equipo ${id}`
            });
        } catch (error: any) {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: error.message
            });
        }
    };
}