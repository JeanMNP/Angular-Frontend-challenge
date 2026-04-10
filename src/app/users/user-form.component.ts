import { Component, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService, User } from './users.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  @Input() user?: User;
  form: FormGroup;

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      tipoTelefone: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.user) {
      this.form.patchValue(this.user);
    }
  }

  salvar() {
    if (this.form.valid) {
      this.usersService.save(this.form.value as User).subscribe();
    }
  }
}
