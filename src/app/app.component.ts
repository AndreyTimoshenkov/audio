import { Component } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentAudioUrl$ = new BehaviorSubject<string | null>(null);
  isPlayerVisible$ = new BehaviorSubject(false);

  onTableRowClick(url: string): void {
    this.currentAudioUrl$.next(url);
    this.isPlayerVisible$.next(true);
  }

  closePlayer() {
    this.isPlayerVisible$.next(false);
  }
}
