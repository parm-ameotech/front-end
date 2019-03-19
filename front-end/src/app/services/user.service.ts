import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private httpService: BaseService) { }

    getUsers()
    {
        return this.httpService.get("/users");
    }

}