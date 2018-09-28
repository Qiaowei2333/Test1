import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Employer } from '../shared/employer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  private apiUrl = 'assets/sample_data.json';

  constructor(private apiService: ApiService) { }

  getAllEmployers(): Observable < Employer[] > {
    return this.apiService.getAll(this.apiUrl);
  }
}
