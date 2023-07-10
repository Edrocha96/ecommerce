import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HelpRequest } from './help-request';


@Injectable({
  providedIn: 'root'
})
export class HelpRequestServiceService {

  private baseURL = "http://localhost:3000/api/tasks";

  constructor(private httpClient: HttpClient) { }

  helpRequest ?: HelpRequest[];

  getTasksList(): Observable<HelpRequest[]>{
    return this.httpClient.get<HelpRequest[]>(`${this.baseURL}`);
  }

  getTasksListMock() {
    return  this.helpRequest  = 
    [{ numberRequest:20230008765, documentNumber: '8765', name:'Edgar Henrique Rocha', email:'edrocha@gmail.com', contactReason:'Produto quebrado', description:'Produto veio quebrado, caixa estava amassada',status:'Pedente' },
    { numberRequest:20230003345, documentNumber: '3345', name:'Lucio Marcos Silva', email:'lucio@gmail.com', contactReason:'Produto quebrado', description:'Produto veio quebrado, caixa estava amassada',status:'Pedente' },
    { numberRequest:20230003561, documentNumber: '3561', name:'Maria Fernanda', email:'maria@gmail.com', contactReason:'Produto quebrado', description:'Produto veio quebrado, caixa estava amassada',status:'Pedente' }]
    }
  }
