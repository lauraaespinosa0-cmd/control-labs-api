import { Request, Response } from 'express';

export class EnviromentController {
  public static createEnviroment = (req: Request, res: Response): void => {
    // TODO: llamar al servicio con req.body y responder 201 con el préstamo creado.
    res.status(501).json({
      success: false,
      message: 'El registro de usuarios todavía no está implementado.'
    });
  };

  public static getEnviromentByFilter = (req: Request, res: Response): void => {
    // TODO: tomar los filtros de req.query, llamar al servicio y responder con los resultados.
    res.status(501).json({
      success: false,
      message: 'La consulta del historial todavía no está implementada.'
    });
  };

  public static getEnviromentById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: pasar id a la operación de consulta y responder con el préstamo encontrado.
    res.status(501).json({
      success: false,
      message: `La consulta del usuario ${id} todavía no está implementada.`
    });
  };

  public static acceptEnviromentInventory = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: pasar id a la operación de aceptación y responder con el resultado.
    res.status(501).json({
      success: false,
      message: `La aceptación del usuario ${id} todavía no está implementada.`
    });
  };

   

  public static changeEnviromentStatus = (req: Request, res: Response): void => {
    const { id } = req.params;
   
    res.status(501).json({
      success: false,
      message: `La aceptación del usuario ${id} todavía no está implementada.`
    });
  };
}