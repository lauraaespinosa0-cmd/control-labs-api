import { Request, Response, NextFunction } from 'express';
import { ICreateComputerDTO } from '../dtos/computer';

const isCreateComputerDTO = (value: unknown): value is ICreateComputerDTO => {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        return false;
    }

    const computer = value as Record<string, unknown>;
    return (
        typeof computer.id === 'number' && Number.isInteger(computer.id) &&
        typeof computer.placa_sena === 'string' && computer.placa_sena.trim() !== '' &&
        typeof computer.codigo_activo === 'string' && computer.codigo_activo.trim() !== '' &&
        typeof computer. tipo === 'string' && computer. tipo.trim() !== '' &&
        typeof computer.room_id === 'number' && Number.isInteger(computer.room_id) &&
        typeof computer.estado === 'string' && computer.estado.trim() !== ''
    );
};

export const validateComputerPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isCreateComputerDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos del equipo inválidos.'
        });
        return;
    }
    next();
};