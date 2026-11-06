// 📁 src/controllers/room.controller.ts
import type { Request, Response } from 'express';

export class RoomController {
  public static createRoom = (req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      message: 'El registro de salas todavía no está implementado.'
    });
  };

  public static getRoomsByFilter = (req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      message: 'La consulta de salas todavía no está implementada.'
    });
  };

  public static updateRoom = (req: Request, res: Response): void => {
    const { id } = req.params;
    res.status(501).json({
      success: false,
      message: `La actualización de la sala ${id} todavía no está implementada.`
    });
  };
}