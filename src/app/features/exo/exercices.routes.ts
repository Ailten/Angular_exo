import { Routes } from '@angular/router';
import { Exo1 } from './exo-1/exo-1';
import { Exo2 } from './exo-2/exo-2';
import { Exo3 } from './exo-3/exo-3';
import { Exo4 } from './exo-4/exo-4';
import { Exo5 } from './exo-5/exo-5';
import { Exo6 } from './exo-6/exo-6';


export const routes: Routes = [

    {path:'exo-1', component: Exo1},
    {path:'exo-2', component: Exo2},
    {path:'exo-3', component: Exo3},
    {path:'exo-4', component: Exo4},
    {path:'exo-5', component: Exo5},
    {path:'exo-6', component: Exo6},

];