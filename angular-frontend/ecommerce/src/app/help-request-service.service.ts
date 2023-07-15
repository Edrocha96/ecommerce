import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HelpRequest } from './help-request';


@Injectable({
  providedIn: 'root'
})
export class HelpRequestServiceService {
  
  private baseURL = "http://ec2-54-89-252-146.compute-1.amazonaws.com:8080/api/v1/ticket/findAll";

  constructor(private httpClient: HttpClient) { }

  helpRequest ?: HelpRequest[];

  getTasksList(): Observable<HelpRequest[]>{
    console.log("URL: ", this.baseURL)
    return this.httpClient.get<HelpRequest[]>(`${this.baseURL}`,);
  }

  getTasksListMock() {
    return  this.helpRequest  = 
    [{ id:'', numberRequest:20230008765, documentNumber: '8765', name:'Edgar Henrique Rocha', email:'edrocha@gmail.com',phone:"1199665233", contactReason:'Produto quebrado', description:'Produto veio quebrado, caixa estava amassada',status:'Pedente', attachments:{id:'1',url:'www.aws.s3.sas.com'} },
    { id:'', numberRequest:20230003345, documentNumber: '3345', name:'Lucio Marcos Silva', email:'lucio@gmail.com',phone:"1199665233", contactReason:'Produto quebrado', description:'Produto veio quebrado, caixa estava amassada',status:'Pedente' , attachments:{id:'1',url:'www.aws.s3.sas.com'}, },
    { id:'', numberRequest:20230003561, documentNumber: '3561', name:'Maria Fernanda', email:'maria@gmail.com',phone:"1199665233", contactReason:'Produto quebrado', description:'Produto veio quebrado, caixa estava amassada',status:'Pedente' , attachments:{id:'1',url:'www.aws.s3.sas.com'}  }]
    }
  }
