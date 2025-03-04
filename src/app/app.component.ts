import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { IAudioFile } from "./model/audio.model";
import { FakeApiService } from "./services/fake-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'audioPlayer';

  displayedColumns: string[] = ['id', 'soundName', 'fileName'];
  dataSource: Observable<IAudioFile[]> = this.api.getAudioFiles();

  isPlayerVisible$ = new BehaviorSubject(false);
  currentAudioUrl$ = new BehaviorSubject<string>('');

  constructor( private readonly api: FakeApiService ) {}

  showPlayer(url: string) {
    this.isPlayerVisible$.next(true);
    this.currentAudioUrl$.next(url);
  }
}
