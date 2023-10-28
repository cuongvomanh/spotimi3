import { Route } from '@angular/router';
import {LayoutComponent} from "../lib/ui/layout/layout.component";

export const webShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: `albums`,
        loadChildren: async () =>
          (await import('../lib/album/')).AlbumShellModule
      }
    ]
  }
];
