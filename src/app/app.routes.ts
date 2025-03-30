import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { DataPortalComponent } from './pages/data-portal/data-portal.component';
import { DataSubmissionPortalComponent } from './pages/data-portal/data-submission-portal/data-submission-portal.component';
import { PlantSpeciesListComponent } from './pages/data-portal/plant-species-list/plant-species-list.component';
import { PublicDataComponent } from './pages/data-portal/public-data/public-data.component';
import { NgModule } from '@angular/core';
import { ResearchComponent } from './pages/research/research.component';
import { NetworkSitesComponent } from './pages/network-sites/network-sites.component';
import { AkronLtarComponent } from './pages/network-sites/akron-ltar/akron-ltar.component';
import { BellevueBlmComponent } from './pages/network-sites/bellevue-blm/bellevue-blm.component';
import { BigSpringArsComponent } from './pages/network-sites/big-spring-ars/big-spring-ars.component';
import { CperLtarComponent } from './pages/network-sites/cper-ltar/cper-ltar.component';
import { ElRenoLtarComponent } from './pages/network-sites/el-reno-ltar/el-reno-ltar.component';
import { HollomanAfbComponent } from './pages/network-sites/holloman-afb/holloman-afb.component';
import { JornadaLtarComponent } from './pages/network-sites/jornada-ltar/jornada-ltar.component';
import { LordsburgNmComponent } from './pages/network-sites/lordsburg-nm/lordsburg-nm.component';
import { MandanLtarComponent } from './pages/network-sites/mandan-ltar/mandan-ltar.component';
import { ManitobaComponent } from './pages/network-sites/manitoba/manitoba.component';
import { MoabBlmComponent } from './pages/network-sites/moab-blm/moab-blm.component';
import { MortonLtarComponent } from './pages/network-sites/morton-ltar/morton-ltar.component';
import { PullmanLtarComponent } from './pages/network-sites/pullman-ltar/pullman-ltar.component';
import { RedhillsArsComponent } from './pages/network-sites/redhills-ars/redhills-ars.component';
import { SanluisBlmComponent } from './pages/network-sites/sanluis-blm/sanluis-blm.component';
import { TwinvalleyArsComponent } from './pages/network-sites/twinvalley-ars/twinvalley-ars.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { InformaticsComponent } from './pages/informatics/informatics.component';
import { PersonnelComponent } from './pages/personnel/personnel.component';
import { AffiliatesComponent } from './pages/affiliates/affiliates.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { DataAccessInformationComponent } from './pages/informatics/data-access-information/data-access-information.component';
import { DataSubmissionComponent } from './pages/informatics/data-submission/data-submission.component';
import { UseAgreementComponent } from './pages/informatics/data-access-information/use-agreement/use-agreement.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'research', component: ResearchComponent},
    { path: 'network-sites', component: NetworkSitesComponent},
      { path: 'network-sites/akron-ltar', component: AkronLtarComponent}, 
      { path: 'network-sites/bellevue-blm', component: BellevueBlmComponent},
      { path: 'network-sites/big-spring-ars', component: BigSpringArsComponent},
      { path: 'network-sites/cper-ltar', component: CperLtarComponent},
      { path: 'network-sites/el-reno-ltar', component: ElRenoLtarComponent},
      { path: 'network-sites/holloman-afb', component: HollomanAfbComponent},
      { path: 'network-sites/jornada-ltar', component: JornadaLtarComponent},
      { path: 'network-sites/lordsburg-nm', component: LordsburgNmComponent},
      { path: 'network-sites/mandan-ltar', component: MandanLtarComponent},
      { path: 'network-sites/manitoba', component: ManitobaComponent},
      { path: 'network-sites/moab-blm', component: MoabBlmComponent},
      { path: 'network-sites/morton-ltar', component: MortonLtarComponent},
      { path: 'network-sites/pullman-ltar', component: PullmanLtarComponent},
      { path: 'network-sites/redhills-ars', component: RedhillsArsComponent},
      { path: 'network-sites/sanluis-blm', component: SanluisBlmComponent},
      { path: 'network-sites/twinvalley-ars', component: TwinvalleyArsComponent},
    { path: 'documents', component: DocumentsComponent},
    { path: 'informatics', component: InformaticsComponent},
      { path: 'informatics/data-access-information', component: DataAccessInformationComponent},
      { path: 'informatics/data-submission', component: DataSubmissionComponent},
        { path: 'informatics/data-access-information/use-agreement', component: UseAgreementComponent},
    { path: 'data-portal', component: DataPortalComponent}, 
      { path: 'data-portal/data-submission-portal', component: DataSubmissionPortalComponent},
      { path: 'data-portal/plant-species-lists', component: PlantSpeciesListComponent},
      { path: 'data-portal/public-data', component: PublicDataComponent},
    { path: 'personnel', component: PersonnelComponent},
    { path: 'affiliates', component: AffiliatesComponent},
    { path: 'publications', component: PublicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }