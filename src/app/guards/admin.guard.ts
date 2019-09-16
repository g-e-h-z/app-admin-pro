/*====================================================================================*/
/*  IMPORTACIONES DE ANGULAR
/*====================================================================================*/
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
/*====================================================================================*/
/*  IMPORTACIONES DE SERVICIOS
/*====================================================================================*/
import { UserService } from 'src/app/services/user/user.service';
/*====================================================================================*/
/*  CONFIGURACIONES DEL GUARD
/*====================================================================================*/
@Injectable({
  providedIn: 'root'
})
/*====================================================================================*/
/*  INICIO DEL GUARD
/*====================================================================================*/
export class AdminGuard implements CanActivate {
  /*==================================================================================*/
  /*  CONSTRUCTOR
  /*==================================================================================*/
  constructor(private userService: UserService) {}
  /*==================================================================================*/
  /*  FUNCIÓN PARA COMPROBAR SI EL USUARIO ES ADMINISTRADOR
  /*==================================================================================*/
  canActivate(): boolean {
    if (this.userService.user.role === 'ADMIN_ROLE') {
      return true;
    } else {
      this.userService.logout();
      return false;
    }
  }
}
