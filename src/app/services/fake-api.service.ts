import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, EMPTY, Observable } from "rxjs";
import { IAudioFile } from "../model/audio.model";

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor(private http: HttpClient) { }

  getAudioFiles(): Observable<IAudioFile[]> {
    return this.http.get<IAudioFile[]>('/assets/audio-data.json').pipe(
      catchError(() => {
        console.error('Что-то пошло не так...');
        return EMPTY;
      })
    );
  }
}
