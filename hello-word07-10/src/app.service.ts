import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBSM(): string {
    return 'Responsabilidade Pessoal, Mentalidade de Crescimento, Orientação ao Futuro, Persistência ';
}
getObjetivo(): string {
  return 'desenvolver ,organizar, praticar, usar. ';
}
}