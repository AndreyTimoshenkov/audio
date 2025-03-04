import { Component, EventEmitter, Output } from '@angular/core';
import { FakeApiService } from "../../services/fake-api.service";
import { Observable } from "rxjs";
import { IAudioFile } from "../../model/audio.model";
import { MatTableModule } from "@angular/material/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [
    MatTableModule
  ]
})
export class TableComponent {
  constructor(private readonly api: FakeApiService) {}

  @Output() play = new EventEmitter<string>();

  displayedColumns: string[] = ['id', 'soundName', 'fileName'];
  dataSource: Observable<IAudioFile[]> = this.api.getAudioFiles();

  showPlayer(url: string) {
    this.play.emit(url);
  }
}
