import { Request, Response } from 'express';

export class EnvironmentController {
    public static getEnvironments = (req: Request, res: Response): void => {
        try {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: 'Simulación de error en listado de ambientes'
            });
        } catch (error: any) {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: error.message
            });
        }
    };

    public static createEnvironment = (req: Request, res: Response): void => {
        try {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: 'Simulación de error al crear ambiente'
            });
        } catch (error: any) {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: error.message
            });
        }
    };

    public static getEnvironmentById = (req: Request, res: Response): void => {
        try {
            const { id } = req.params;
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: `Simulación de error al buscar el ambiente ${id}`
            });
        } catch (error: any) {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: error.message
            });
        }
    };

    public static patchEnvironment = (req: Request, res: Response): void => {
        try {
            const { id } = req.params;
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: `Simulación de error al actualizar el ambiente ${id}`
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