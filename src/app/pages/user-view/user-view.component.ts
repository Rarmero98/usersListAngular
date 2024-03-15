import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../interfaces/iuser.interfaces';
import { UsersService } from '../../services/users.service';
import { BotoneraComponent } from '../../components/botonera/botonera.component';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [BotoneraComponent],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css',
})
export class UserViewComponent {
  activatedRoute = inject(ActivatedRoute);
  usersService = inject(UsersService);
  oneUser!: IUser;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      const id = params._id;
      try {
        this.oneUser = await this.usersService.getById(id);
      } catch (error) {
        console.log(error);
        alert('Se han cometido errores');
      }
    });
  }
}
