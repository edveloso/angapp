import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { Observable } from 'rxjs';  
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {


  allPessoas: Observable<Pessoa[]>;
  constructor(private service: PessoaService) { }

  ngOnInit() {
    this.loadAllEmployees();
  }


  loadAllEmployees() {  
    this.allPessoas = this.service.getAllPessoas();
  } 


}
