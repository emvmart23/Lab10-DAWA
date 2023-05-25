import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  constructor(private _cursoService: CursoService ) {

  }
  
  listCursos: Curso[] = [];
  
  
  ngOnInit(): void {
    
    this.obtenerCursos();

  }

  obtenerCursos(){
    this._cursoService.getCursos().subscribe(data => {
      
      console.log(data);
      this.listCursos = data;
    })
  }
  
}
