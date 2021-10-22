import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
declare var validardatosusuario:any;
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit {

  vali='';

  datosformulario = new FormGroup({
    sexo_usuario: new FormControl(''),
    cedula_usuario: new FormControl(''),
    nombre_usuario: new FormControl(''),
    email_usuario: new FormControl(''),
    usuario: new FormControl(''),
    password: new FormControl(''),
  })


  altausuario(){

    let sexo=this.datosformulario.value.sexo_usuario;
    this.vali= validardatosusuario(sexo);
    //alert(this.datosformulario.value.sexo_usuario);
    //alert(this.datosformulario.value.nombres);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
