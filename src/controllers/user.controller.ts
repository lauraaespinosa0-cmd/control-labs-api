import { Request, Response } from 'express';

export class UserController {
  public static createUser = (req: Request, res: Response): void => {
    // TODO: llamar al servicio con req.body y responder 201 con el préstamo creado.
    res.status(501).json({
      success: false,
      message: 'El registro de usuarios todavía no está implementado.'
    });
  };

  public static getUsersByFilter = (req: Request, res: Response): void => {
    // TODO: tomar los filtros de req.query, llamar al servicio y responder con los resultados.
    res.status(501).json({
      success: false,
      message: 'La consulta del historial todavía no está implementada.'
    });
  };

  public static getUserById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: pasar id a la operación de consulta y responder con el préstamo encontrado.
    res.status(501).json({
      success: false,
      message: `La consulta del usuario ${id} todavía no está implementada.`
    });
  };

  public static acceptUserInventory = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: pasar id a la operación de aceptación y responder con el resultado.
    res.status(501).json({
      success: false,
      message: `La aceptación del usuario ${id} todavía no está implementada.`
    });
  };

  public static changeUserEmail = (req: Request, res: Response): void => {
    const { id } = req.params;
   
    res.status(501).json({
      success: false,
      message: `La aceptación del usuario ${id} todavía no está implementada.`
    });
  };
  public static changeUserStatus = (req: Request, res: Response): void => {
    const { id } = req.params;
   
    res.status(501).json({
      success: false,
      message: `La aceptación del usuario ${id} todavía no está implementada.`
    });
  };
}