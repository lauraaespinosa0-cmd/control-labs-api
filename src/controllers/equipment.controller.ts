import { Request, Response } from 'express';

export class EquipmentController {
    // Registrar nuevo equipo vinculado a un ambiente
    public static createEquipment = (req: Request, res: Response): void => {
        const { serialCode, name, environmentId } = req.body;
        if (!serialCode || !name || !environmentId) {
            res.status(400).json({ status: 'fail', message: 'serialCode, name y environmentId son requeridos' });
            return;
        }
        res.status(201).json({
            status: 'success',
            message: 'Equipo registrado y vinculado al ambiente exitosamente',
            data: { id: Date.now(), serialCode, name, environmentId, technicalStatus: 'operativo' }
        });
    };

    // Listar equipos (con soporte opcional de filtro por ambiente vía Query Param)
    public static getEquipments = (req: Request, res: Response): void => {
        const { environmentId } = req.query;

        res.status(200).json({
            status: 'success',
            message: environmentId 
                ? `Listado de equipos filtrados para el ambiente ${environmentId}` 
                : 'Listado general de equipos',
            filterApplied: { environmentId: environmentId || null },
            data: []
        });
    };

    // Actualización parcial del estado técnico (PATCH)
    public static patchEquipmentStatus = (req: Request, res: Response): void => {
        const { id } = req.params;
        const { technicalStatus, location } = req.body;

        res.status(200).json({
            status: 'success',
            message: `Estado técnico o ubicación del equipo ${id} actualizados`,
            updatedFields: { technicalStatus, location }
        });
    };
}