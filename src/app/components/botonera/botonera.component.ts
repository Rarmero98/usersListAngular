import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-botonera',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css',
})
export class BotoneraComponent {
  @Input() parent: any = '';
  @Input() idUser: any = '';
  borrarUser(id: string) {}
}
