import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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
          // Esta la vimos en clase
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

  getDataForm() {
    this.usersForm.reset();
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
