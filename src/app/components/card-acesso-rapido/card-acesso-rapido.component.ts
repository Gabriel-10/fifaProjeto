import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-acesso-rapido',
  templateUrl: './card-acesso-rapido.component.html',
  styleUrls: ['./card-acesso-rapido.component.scss']
})
export class CardAcessoRapidoComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() imageUrl: string = '';
  @Input() link: string = '';
  @Input() buttonClass: string = 'btn-primary';
}
