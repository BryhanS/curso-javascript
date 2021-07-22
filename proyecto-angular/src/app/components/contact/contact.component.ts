import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public widthSlider!:number;
  public anchuraToSlider!:any;
  public captions:boolean;
  public autor: any;

  @ViewChild('textos',{static:true}) textos:any;

  constructor() { 
    this.captions = false;
  }

  ngOnInit(): void {
    var opcion_clasica = document.querySelector('#texto')?.innerHTML;
    //alert(this.textos.nativeElement.textContent);
  };

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  };

  resetearSlider(){
    this.anchuraToSlider = false;
  }

  getAutor(event: any){
    this.autor = event;
  }

}
