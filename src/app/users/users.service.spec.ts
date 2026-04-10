import { TestBed } from '@angular/core/testing';
import { UsersService, User } from './users.service';
import { firstValueFrom } from 'rxjs';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('deve listar usuários', async () => {
    const users = await firstValueFrom(service.list());
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toHaveProperty('nome');
  });

  it('deve salvar um novo usuário', async () => {
    const novo: User = {
      id: 0,
      nome: 'Carlos',
      email: 'carlos@email.com',
      cpf: '11122233344',
      telefone: '11988887777',
      tipoTelefone: 'celular'
    };

    const user = await firstValueFrom(service.save(novo));
    expect(user.id).toBeGreaterThan(0);
    expect(user.nome).toBe('Carlos');
  });
});
