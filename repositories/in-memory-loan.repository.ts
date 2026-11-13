import { ICreateLoanDTO } from "../dtos/loan.dto";
import { Loan, LoanFilters, LoanRepository, LoanStatus } from "./loan.repository";

export class InMemoryLoanRepository implements LoanRepository {
  findAll(filters?: LoanFilters): Promise<Loan[]> {
      throw new Error("Method not implemented.");
  }
  findById(id: number): Promise<Loan | null> {
      throw new Error("Method not implemented.");
  }
  updateStatus(id: number, expectedStatus: LoanStatus, status: LoanStatus): Promise<Loan | null> {
      throw new Error("Method not implemented.");
  }
  private readonly loans = new Map<number, Loan>();
  private nextId = 1;

  public async create(input: ICreateLoanDTO): Promise<Loan> {
    const loan: Loan = {
      ...input,
      id: this.nextId++,
      estado: 'PENDIENTE_APROBACION',
      createdAt: new Date().toISOString(),
      acceptedAt: null
    };
    this.loans.set(loan.id, loan);
    return { ...loan };
  }
  // findAll, findById y updateStatus implementan el mismo contrato.
}