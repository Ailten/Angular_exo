import { Routes } from '@angular/router';
//import { Home } from './features/home/home';
//import { Exo1 } from './features/exo/exo-1/exo-1';
//import { Exo2 } from './features/exo/exo-2/exo-2';
//import { Exo3 } from './features/exo/exo-3/exo-3';


export const routes: Routes = [

    // redirect to home when empty url.
    {path:'', redirectTo: 'home', pathMatch: 'full'},

    // load without lazy.
    //{path:'home', component: Home},
    //{path:'exo-1', component: Exo1},
    //{path:'exo-2', component: Exo2},
    //{path:'exo-3', component: Exo3},

    // verition lazy load.
    //{path:'home', 
    //    loadComponent: () => import('./features/home/home')
    //    .then((m) => m.Home)
    //},
    {path:'home', 
        loadChildren: () => import('./features/home/home.routes')
        .then((m) => m.routes)
    },

    {path: 'exercices',
        loadChildren: () => import('./features/exo/exercices.routes')
        .then((m) => m.routes)
    },

];
