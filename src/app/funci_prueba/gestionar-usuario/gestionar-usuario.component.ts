import { Component, OnInit } from '@angular/core';
declare var operaciones:any;

@Component({
  selector: 'app-gestionar-usuario',
  templateUrl: './gestionar-usuario.component.html',
  styleUrls: ['./gestionar-usuario.component.scss']
})
export class GestionarUsuarioComponent implements OnInit {

  titulo ="";
   total="";
  constructor() { }

  ngOnInit(): void {
  }
  
  Onclick(){
    this.total=operaciones();
  }

}
