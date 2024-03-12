import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IResponse } from '../../interfaces/iresponse.interfaces';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  usersServices = inject(UsersService);
  response: IResponse = {};

  async ngOnInit(): Promise<void> {
    try {
      this.response = await this.usersServices.getAll();
    } catch (error) {
      console.log(error);
      alert('Se han cometido errores');
    }
  }
}
