import { ICreateUserDTO } from '../dtos/user.dto';

export type UserStatus = 'PENDIENTE_APROBACION' | 'APROBADO_Y_FIRMADO';

export interface Loan extends ICreateUserDTO {
  id: number;
  estado:UserStatus;
  createdAt: string;
  acceptedAt: string | null;
}

export interface UserFilters {
  roomId?: string;
}

export interface LoanRepository {
  create(input: ICreateUserDTO): Promise<Loan>;
  findAll(filters?: UserFilters): Promise<Loan[]>;
  findById(id: number): Promise<Loan | null>;
  updateStatus(
    id: number,
    expectedStatus: UserStatus,
    status: UserStatus
  ): Promise<User | null>;
}