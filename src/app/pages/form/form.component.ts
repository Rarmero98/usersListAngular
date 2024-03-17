import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  function: string = 'Nuevo';
  action: string = 'Guardar';
  usersForm: FormGroup;
  usersService = inject(UsersService);
  router = inject(Router);

  constructor() {
    this.usersForm = new FormGroup(
      {
        first_name: new FormControl('', [
          Validators.required,
          Validators.pattern(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/),
          // Procedencia de la expresión regular: https://regexr.com/3f8cm
        ]),
        last_name: new FormControl('', [
          Validators.required,
          Validators.pattern(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/),
          // Procedencia de la expresión regular: https://regexr.com/3f8cm
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/),
          // Procedencia de la expresión regular: esta la vimos en clase
        ]),
        image: new FormControl('', [
          Validators.required,
          Validators.pattern(/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/),
          // Procedencia de la expresión regular: https://regexr.com/3um70
        ]),
      },
      []
    );
  }

  async getDataForm() {
    const response = await this.usersService.create(this.usersForm.value);
    if (response.id) {
      alert(
        `Enhorabuena, ${response.first_name}, te has registrado correctamente. ¡Bienvenido a nuestro listado de usuarios!`
      );
      this.router.navigate(['/home']);
    } else {
      alert('Ha habido un problema. Inténtalo de nuevo');
    }
  }

  checkControl(
    formControlName: string,
    validador: string
  ): boolean | undefined {
    return (
      this.usersForm.get(formControlName)?.hasError(validador) &&
      this.usersForm.get(formControlName)?.touched
    );
  }
}
