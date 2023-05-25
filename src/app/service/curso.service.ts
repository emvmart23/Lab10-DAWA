import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  url = 'http://localhost:4000/api/cursos/';

  constructor(private http: HttpClient) { 

  }

  getCursos(): Observable<any> {
    return this.http.get(this.url);
  }



  guardarCurso(curso: Curso): Observable<any> {
    return this.http.post(this.url, curso);
  }
}
