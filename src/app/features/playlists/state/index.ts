import { ActionReducerMap } from '@ngrx/store';

export const FEATURENAME = 'Playlists';

import * as fromSongs from './reducers/songs.reducer';

export interface PlaylistsState {
  songs: fromSongs.SongsState;
}

export const reducers: ActionReducerMap<PlaylistsState> = {
  songs: fromSongs.reducer,
};
