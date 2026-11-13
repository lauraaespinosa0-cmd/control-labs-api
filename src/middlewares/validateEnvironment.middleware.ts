import { Request, Response, NextFunction } from 'express';
import { ICreateEnvironmentDTO } from '../dtos/environment';

const isCreateEnvironmentDTO = (value: unknown): value is ICreateEnvironmentDTO => {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        return false;
    }

    const environment = value as Record<string, unknown>;
    return (
        typeof environment.marca === 'string' && environment.marca.trim() !== '' &&
        typeof environment.serie === 'string' && environment.serie.trim() !== '' &&
        typeof environment.estado === 'string' && environment.estado.trim() !== ''
    );
};

export const validateEnvironmentPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isCreateEnvironmentDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos del equipo inválidos.'
        });
        return;
    }
    next();
};