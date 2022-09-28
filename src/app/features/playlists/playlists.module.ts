import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongEntryComponent } from './components/song-entry/song-entry.component';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes),
  ]
})
export class PlaylistsModule { }
