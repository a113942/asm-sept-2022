import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SongDocuments } from '../actions/songs.actions';
import { PlaylistFeatureEvents } from '../actions/feature.actions';
import { map, switchMap } from 'rxjs';
import { SongEntity } from '../reducers/songs.reducer';
@Injectable()
export class SongEffects {
  readonly url = 'http://localhost:1337/songs/'; // TODO: Fix this!



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
