import { Request, Response } from 'express';

export class DashboardController {
  public static createDashboard = (req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      message: 'El registro de paneles todavía no está implementado.'
    });
  };

  public static getDashboardsByFilter = (req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      message: 'La consulta de paneles todavía no está implementada.'
    });
  };

  public static updateDashboard = (req: Request, res: Response): void => {
    const { id } = req.params;
    res.status(501).json({
      success: false,
      message: `La actualización del panel ${id} todavía no está implementada.`
    });
  };

}