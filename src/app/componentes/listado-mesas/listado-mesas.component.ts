import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { SocioService } from "../../servicios/socio.service";
import { AutService } from "../../servicios/auth.service";
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-listado-mesas',
  templateUrl: './listado-mesas.component.html',
  styleUrls: ['./listado-mesas.component.scss']
})
export class ListadoMesasComponent implements OnInit {
  base64Image: any;
  imagen64: any = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gKgSUNDX1BST0ZJTEUAAQEAAAKQbGNtcwQwAABtbnRyUkdCIFhZWiAH3QAIAA4AFgAoAB1hY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtkZXNjAAABCAAAADhjcHJ0AAABQAAAAE53dHB0AAABkAAAABRjaGFkAAABpAAAACxyWFlaAAAB0AAAABRiWFlaAAAB5AAAABRnWFlaAAAB+AAAABRyVFJDAAACDAAAACBnVFJDAAACLAAAACBiVFJDAAACTAAAACBjaHJtAAACbAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABwAAAAcAHMAUgBHAEIAIABiAHUAaQBsAHQALQBpAG4AAG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAMgAAABwATgBvACAAYwBvAHAAeQByAGkAZwBoAHQALAAgAHUAcwBlACAAZgByAGUAZQBsAHkAAAAAWFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEoAAAXj///zKgAAB5sAAP2H///7ov///aMAAAPYAADAlFhZWiAAAAAAAABvlAAAOO4AAAOQWFlaIAAAAAAAACSdAAAPgwAAtr5YWVogAAAAAAAAYqUAALeQAAAY3nBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW2Nocm0AAAAAAAMAAAAAo9cAAFR7AABMzQAAmZoAACZmAAAPXP/bAEMABQMEBAQDBQQEBAUFBQYHDAgHBwcHDwsLCQwRDxISEQ8RERMWHBcTFBoVEREYIRgaHR0fHx8TFyIkIh4kHB4fHv/bAEMBBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/AABEIABgAGAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAABwYI/8QAJxAAAQMEAQMDBQAAAAAAAAAAAQIDBAAFBhEhEiIxBxNBFjJRYXH/xAAZAQACAwEAAAAAAAAAAAAAAAAAAwEEBQb/xAAjEQABAwMDBQEAAAAAAAAAAAABAAIDBAUREjHBITJBUWHR/9oADAMBAAIRAxEAPwDbTM5x+0YE5lYlx7hEZ6W1JhyEOkvK8NbBICufn4BNS+7et31DZJlonW6Lbo01Pt+83KJcbTvfIOgeBo615qNYplFvhTDCessNmySnEiWw2pXU5pCkpWVkk7T1E8Ac7/NVbJIuGW7DlS4NsTCQ5BLSAqO2tEpSk9ijvvQrz3A62N6oqbjI7DCN1bp7fGdUgcOiy8eEJLYmwVbbcOkFKu0jyRz92tUpiubWGBbXrbd8MiSYpTpo2+c7HU0oAd/QSpClk8lSgfNKNZyoGMbKRpRw4jWlAbT+q6Q9EfTy85RhMJN7aadQ06JVvZkOnpcaI0UqPI6SeQn+71ulKWWhz2tPn8KZTjuPocrO5xYo87KH3I9si2dMhKBHaRFUlKhyknpA7TxsnQApSlZVRVyQENaustVvpauMulYMj6Rzhf/Z";
  ngOnInit() {
    let imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRcxy-B6bxY2I8g6QVl-Ou2I39twlYXpUR5AMuZdR60kSwPP-&s';

    this.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
      /* console.log(base64data); */
      // this is the image as dataUrl
      this.base64Image = 'data:image/jpeg;base64,' + base64data;
    });

  }

  @Input()
  listado: Array<any>;
  PerfilUsuario: any;
  API: string;

  constructor(
    private SocioService: SocioService,
    private Aut: AutService,
    private router: Router
  ) {
    this.PerfilUsuario = Aut.getPerfil();
    this.API = this.SocioService.api;
  }
  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      // create an image object
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        // This will call another method that will create image from url
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }
  getBase64Image(img: HTMLImageElement) {
    // We create a HTML canvas object that will create a 2d image
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    // This will draw image    
    ctx.drawImage(img, 0, 0);
    // Convert the drawn image to Data URL
    var dataURL = canvas.toDataURL("image/jpeg");
    return dataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
  }

  generarPDF() {


    var doc = new jsPDF();
    doc.autoTable({
      /* 
      head: [["codigo", "estado", "mesa", "descripcion", "sector", "nombre_cliente", "nombre_mozo", "id_mozo", "id_encargado",
        "hora_inicial", "hora_entrega_estimada", "hora_entrega_real", "fecha", "importe"]], */
      html: '#mesasTable'
    });
    doc.save('mesas.pdf');
  }
  generate() {
    var doc = new jsPDF();

    doc.autoTable({
      html: '#mytable',
      bodyStyles: { minCellHeight: 15 },
      didDrawCell: function (data) {
        if (data.column.index === 2 && data.cell.section === 'body') {
          var td = data.cell.raw;
          var img = td.getElementsByTagName('img')[0];
          console.log(img);
          var dim = data.cell.height - data.cell.padding('vertical');
          var textPos = data.cell.textPos;
          doc.addImage(img.src, textPos.x, textPos.y, dim, dim);
        }
      }
    });

    doc.save("table.pdf");
  }

  ver() {
    console.info(this.listado);
  }
  copiarCodigo() {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getSelection().anchorNode.parentElement.textContent);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    var tooltip = document.getElementById("MyTooltip");
    tooltip.title = "Copiado";
  }

  agregarImagen64(listado:Array<any>){
    listado.forEach(mesa => {
      console.log(this.API+mesa.foto);
        this.getBase64ImageFromURL(this.API+mesa.foto).subscribe(base64data => {
          console.log(mesa.codigo,base64data);
          // this is the image as dataUrl
          var imgbase64 = 'data:image/jpeg;base64,' + base64data;
          mesa.img64 =imgbase64; 
      });
      
    });
  }

  TraerTodos() {
    /* this.miJugadoresServicio.traertodos('/juegos/listar','todos').then(data=>{
      console.info("jugadores listado",(data));
      this.listado= data;
    }) */
    this.SocioService.traertodos('/mesas/listar', 'todos').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;
    })/* .then(data => this.agregarImagen64(this.listado)); */

  }

  TraerComiendo() {
    this.SocioService.traertodos('/mesas/listar', 'Con clientes comiendo').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }

  TraerEsperando() {
    this.SocioService.traertodos('/mesas/listar', 'Con cliente esperando pedido').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }

  TraerPagando() {
    this.SocioService.traertodos('/mesas/listar', 'Con clientes pagando').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }

  TraerCerradas() {
    this.SocioService.traertodos('/mesas/listar', 'Cerrada').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }
  actualizarVista() {
    this.TraerTodos();
    /* 
    setInterval(() => {
      this.TraerTodos();
    },1000) */
    /* 
    this.router.navigate(['Error',{id:15}]); */
  }


}
