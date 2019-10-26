import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  url = 'http://localhost:8080/pessoa';

  constructor(
    private http : HttpClient
  ) { }

  getAllPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url);
  }
}
