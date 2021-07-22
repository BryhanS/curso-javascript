import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura!: number;
  @Input('etiquetas') captions!: boolean;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;


  constructor() {
    this.autor = {
      nombre: "Victor Robles",
      website: "victorroblesweb.es",
      youtube: "victor Robles WEB"
    };
  }

  ngOnInit(): void {

    $('#logo').click(function (e: any) {
      e.preventDefault();
      $('header').css('background', 'green')
        .css('height', '50px');

    });

    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: this.anchura
    });

    this.conseguirAutor.emit(this.autor);
  }

  lanzar(event: any) {
    this.conseguirAutor.emit(this.autor);
  }

}
