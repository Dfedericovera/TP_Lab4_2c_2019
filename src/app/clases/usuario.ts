export class Usuario {
  public usuario: string;
  public clave: string;
  public nombre: string;
  public tipo: string;

  constructor(usuario?: string, clave?: string, nombre?: string,tipo?:string ) {
      if (usuario) {
          this.usuario = usuario;
      }
      if (clave) {
          this.clave = clave;
      }
      if (nombre) {
          this.nombre = nombre;
      }
      if (tipo) {
        this.tipo = tipo;
    }



  }

  public ingresar() {

      return "NO hay Ayuda definida";
  }

  private static urlBase64Decode(str: string) {
      let output = str.replace(/-/g, '+').replace(/_/g, '/');
      switch (output.length % 4) {
          case 0:
              break;
          case 2:
              output += '==';
              break;
          case 3:
              output += '=';
              break;
          default:
              // tslint:disable-next-line:no-string-throw
              throw 'Illegal base64url string!';
      }
      return decodeURIComponent((<any>window).escape(window.atob(output)));
  }

  public static decodeToken(token: string = '') {

      if (token === null || token === '') { return { 'upn': '' }; }
      const parts = token.split('.');
      if (parts.length !== 3) {

          throw new Error('JWT must have 3 parts');
      }
      const decoded = this.urlBase64Decode(parts[1]);
      if (!decoded) {
          throw new Error('Cannot decode the token');
      }
      return JSON.parse(decoded);
  }
}
