import { Request, Response } from 'express';

export class LoanController {
    public static getLoans = (req: Request, res: Response): void => {
        try {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: 'Simulación de error en listado de préstamos'
            });
        } catch (error: any) {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: error.message
            });
        }
    };

    public static createLoan = (req: Request, res: Response): void => {
        try {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: 'Simulación de error al crear préstamo'
            });
        } catch (error: any) {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: error.message
            });
        }
    };

    public static getLoanById = (req: Request, res: Response): void => {
        try {
            const { id } = req.params;
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: `Simulación de error al buscar el préstamo ${id}`
            });
        } catch (error: any) {
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: error.message
            });
        }
    };

    public static patchLoan = (req: Request, res: Response): void => {
        try {
            const { id } = req.params;
            res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor',
                error: `Simulación de error al actualizar el préstamo ${id}`
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