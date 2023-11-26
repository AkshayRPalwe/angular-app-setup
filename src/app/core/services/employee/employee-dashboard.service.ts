import { Injectable } from '@angular/core';
import { MasterService } from '../master/master.service';
import { environment } from 'src/environments/environment';
import { APIConstants } from '../../constants/APIConstants';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDashboardService {
  constructor(private _masterService: MasterService) {}

  getAllEmployee() {
    this._masterService.get(environment.api + APIConstants.user.getAllUsers);
  }
}
