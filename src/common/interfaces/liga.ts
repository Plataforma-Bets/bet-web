
import { IStanding } from "./standing";

export interface ILiga {
    id: number;
    nome: string | null;
    logo: string | null;
    pais: string | null;
    standings: IStanding[];
  }
