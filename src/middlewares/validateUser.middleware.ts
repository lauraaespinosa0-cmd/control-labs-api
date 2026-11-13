import { Request, Response, NextFunction } from 'express';
import { ICreateUserDTO } from '../dtos/user.dto';

const isUuid = (value: unknown): value is string =>
  typeof value === 'string' &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);

const isCreateUserDTO = (value: unknown): value is ICreateUserDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const user = value as Record<string, unknown>;
  const allowedFields = new Set([
     'id',
    'email',
    'nombre',
    'rol',
    'activo'
  ]);
  return (
    Object.keys(user).every((key) => allowedFields.has(key)) &&
    isUuid(user.id) &&
    isUuid(user.email) &&
    isUuid(user.nombre) &&
    typeof user.numeroPc === 'number' &&
    Number.isInteger(user.numeroPc)
  );
};

export const validateUserPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;
  if (!isCreateUserDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos del préstamo inválidos.'
    });
    return;
  }
  next();
};