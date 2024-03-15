import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IUser } from '../../interfaces/iuser.interfaces';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [RouterLink],
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
