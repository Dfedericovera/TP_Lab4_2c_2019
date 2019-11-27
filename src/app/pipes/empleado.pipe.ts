import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'empleado'
})
export class EmpleadoPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value == 'A'){
      return 'Activo';
    }
    else if(value == 'B'){
      return 'Inactivo'
    }
    else{
      return 'Suspendido'
    }
    
  }

}
