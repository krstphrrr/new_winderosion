import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { DataPortalComponent } from './pages/data-portal/data-portal.component';
import { DataSubmissionPortalComponent } from './pages/data-portal/data-submission-portal/data-submission-portal.component';
import { PlantSpeciesListComponent } from './pages/data-portal/plant-species-list/plant-species-list.component';
import { PublicDataComponent } from './pages/data-portal/public-data/public-data.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'data-portal', component: DataPortalComponent}, 
    { path: 'data-portal/data-submission-portal', component: DataSubmissionPortalComponent},
        { path: 'data-portal/plant-species-lists', component: PlantSpeciesListComponent},
        { path: 'data-portal/public-data', component: PublicDataComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }