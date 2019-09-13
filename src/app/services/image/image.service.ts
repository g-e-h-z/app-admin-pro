/*====================================================================================*/
/*  IMPORTACIONES DE ANGULAR
/*====================================================================================*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*====================================================================================*/
/*  IMPORTACIONES DE LAS VARIABLES DE ENTORNO
/*====================================================================================*/
import { API_URL } from 'src/app/config/config';
/*====================================================================================*/
/*  CONFIGURACIONES DEL SERVICIO
/*====================================================================================*/
@Injectable({
  providedIn: 'root'
})
/*====================================================================================*/
/*  INICIO DEL SERVICIO
/*====================================================================================*/
export class ImageService {
  /*==================================================================================*/
  /*  DEFINICIÓN DE ATRIBUTOS
  /*==================================================================================*/
  constructor(private http: HttpClient) {}
  /*==================================================================================*/
  /*  FUNCIÓN PARA SUBIR Y EDITAR UNA IMAGEN
  /*==================================================================================*/
  uploadImage(id: string, collection: string, image: File) {
    const URL = `${API_URL}/upload/${collection}/${id}`;
    /*--------------------------------------------------------------------------------*/
    /*  Se procesa la image y se realiza la petición.
    /*--------------------------------------------------------------------------------*/
    const data = new FormData();
    const request = new XMLHttpRequest();
    data.append('image', image, image.name);
    return this.http.put(URL, data, { reportProgress: true });
  }
}
