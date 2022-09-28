import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SongDocuments, SongEvents } from '../actions/songs.actions';
import { PlaylistFeatureEvents } from '../actions/feature.actions';
import { map, switchMap } from 'rxjs';
import { SongEntity } from '../reducers/songs.reducer';
@Injectable()
export class SongEffects {
  readonly url = 'http://localhost:1337/songs/'; // TODO: Fix this!

  // SongEvents.add -> (send to api) -> SongDocuments.song
  addSong$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SongEvents.added),
        switchMap(
          (
            a // Sus. We'll fix this.
          ) =>
            this.client
              .post<SongEntity>(this.url, a.payload)
              .pipe(map((payload) => SongDocuments.song({ payload })))
        )
      );
    },
    { dispatch: true }
  );

 // PlaylistsFeatureEvents.entered -> (call API) -> SongsDocuments.songs
  loadSongs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlaylistFeatureEvents.entered),
      switchMap(() =>
        this.client.get<{ data: SongEntity[] }>(this.url).pipe(
          map((r) => r.data),
          map((payload) => SongDocuments.songs({ payload }))
        )
      )
    );
  });



 constructor(private actions$: Actions, private client: HttpClient) {}
}

// const data = client.get(this.url);
