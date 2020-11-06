import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-codigosdeerror',
  templateUrl: './codigosdeerror.component.html',
  styleUrls: ['./codigosdeerror.component.scss']
})
export class CodigosDeErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      // download PDF
      const link = document.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute('href', '../../../assets/CODIGOS DE ERROR GREE (10).pdf');
      link.setAttribute('download', '../../../assets/CODIGOS DE ERROR GREE (10).pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      // Closes blank window
      window.open("about:blank", "_self");
      window.close();
    
  
  }

}
