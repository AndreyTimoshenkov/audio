import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
  ]
})
export class PlayerComponent {
  @Input() url: string | null = null;
  @Output() close = new EventEmitter<void>();

  onCloseClick() {
    this.close.emit();
  }
 }
