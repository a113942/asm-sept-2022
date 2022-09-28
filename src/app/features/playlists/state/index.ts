import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { PlaylistItemModel } from '../models';

export const FEATURENAME = 'Playlists';

import * as fromSongs from './reducers/songs.reducer';

export interface PlaylistsState {
  songs: fromSongs.SongsState;
}

export const reducers: ActionReducerMap<PlaylistsState> = {
  songs: fromSongs.reducer,
};

// 1. Create a Feature Selector
const selectFeature = createFeatureSelector<PlaylistsState>(FEATURENAME);
// 2. Selector per "branch" (songs)

const selectSongsBranch = createSelector(selectFeature, (f) => f.songs);
// 3. Helpers (optional)

const { selectAll: selectSongEntityArray } =
  fromSongs.adapter.getSelectors(selectSongsBranch);

// 4. What the component needs

// TODO: Our component needs an PlaylistItemModel[] to display the list.

export const selectSongListModel = createSelector(
  selectSongEntityArray,
  (songs) => songs as PlaylistItemModel[]
);
