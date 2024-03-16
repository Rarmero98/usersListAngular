import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
        first_name: new FormControl('', []),
        last_name: new FormControl('', []),
        email: new FormControl('', []),
        image: new FormControl('', []),
      },
      []
    );
  }

  getDataForm() {
    console.log(this.usersForm.value);
  }
}
