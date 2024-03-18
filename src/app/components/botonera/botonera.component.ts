import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2';

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
  usersService = inject(UsersService);

  async borrarUser(id: string) {
    let confirmation = confirm('¿Seguro que quieres borrar este usuario?');
    if (confirmation) {
      let response = await this.usersService.delete(id);
      if (response._id) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title:
            'Se ha borrado correctamente el usuario ' +
            response.first_name +
            ' ' +
            response.last_name,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  }
}
