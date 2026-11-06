import type { Request, Response } from 'express';

export class DeviceController {
  public static createDevice = (req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      message: 'El registro de dispositivos todavía no está implementado.'
    });
  };

  public static getDevicesByFilter = (req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      message: 'La consulta de dispositivos todavía no está implementada.'
    });
  };

  public static updateDevice = (req: Request, res: Response): void => {
    const { id } = req.params;
    res.status(501).json({
      success: false,
      message: `La actualización del dispositivo ${id} todavía no está implementada.`
    });
  };
}