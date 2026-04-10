import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UsersListComponent } from './users/users-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsersListComponent], // importa o componente de listagem
  template: `
    <h1>Desafio Angular - Listagem de Usuários</h1>
    <app-users-list></app-users-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
