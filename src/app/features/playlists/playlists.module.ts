import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongEntryComponent } from './components/song-entry/song-entry.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { FEATURENAME, reducers } from './state';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from "@angular/common/http";
import { SongEffects } from './state/effects/songs.effects';

const routes: Routes = [
  {
    path: '',
    component: PlaylistsComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'songs',
        component: SongListComponent,
      },
      {
        path: 'new',
        component: SongEntryComponent,
      },
      {
        path: '**',
        redirectTo: 'overview',
      },
    ],
  },
];


@NgModule({
  declarations: [
    PlaylistsComponent,
    OverviewComponent,
    SongListComponent,
    SongEntryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(FEATURENAME, reducers),
    EffectsModule.forFeature([SongEffects]),
  ]
})
export class PlaylistsModule { }
