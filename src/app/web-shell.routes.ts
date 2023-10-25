import { Route } from '@angular/router';

export const webShellRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: `albums`,
        loadChildren: async () =>
          (await import('../lib/album/')).AlbumShellModule
      }
    ]
  },
  {
    path: '',
    redirectTo: 'collection',
    pathMatch: 'full'
  }
];
