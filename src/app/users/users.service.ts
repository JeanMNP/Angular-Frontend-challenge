import { Injectable } from '@angular/core';
import { Observable, of, delay, throwError } from 'rxjs';

export interface User {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  tipoTelefone: string;
}

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users: User[] = [
    { id: 1, nome: 'Ana', email: 'ana@email.com', cpf: '12345678900', telefone: '11999999999', tipoTelefone: 'celular' },
    { id: 2, nome: 'Bruno', email: 'bruno@email.com', cpf: '98765432100', telefone: '11888888888', tipoTelefone: 'fixo' },
  ];

  list(): Observable<User[]> {
    return of(this.users).pipe(delay(500));
  }

  save(user: User): Observable<User> {
    if (!user.nome || !user.email) {
      return throwError(() => new Error('Dados inválidos'));
    }
    if (user.id) {
      this.users = this.users.map(u => u.id === user.id ? user : u);
    } else {
      user.id = this.users.length + 1;
      this.users.push(user);
    }
    return of(user).pipe(delay(500));
  }
}
