import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IResponse } from '../interfaces/iresponse.interfaces';
import { lastValueFrom } from 'rxjs';
import { IUser } from '../interfaces/iuser.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private httpClient = inject(HttpClient);
  private baseUrl = 'https://peticiones.online/api/users';

  getAll(): Promise<IResponse> {
    return lastValueFrom(this.httpClient.get<IResponse>(this.baseUrl));
  }

  getById(id: any): Promise<IUser> {
    return lastValueFrom(this.httpClient.get<IUser>(`${this.baseUrl}/${id}`));
  }
}
