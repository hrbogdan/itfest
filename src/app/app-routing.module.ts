import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConcursuriComponent } from './concursuri/concursuri.component';
import { ConferinteComponent } from './conferinte/conferinte.component';
import { ContactComponent } from './contact/contact.component';
import { DespreNoiComponent } from './despre-noi/despre-noi.component';
import { HomeComponent } from './home/home.component';
import { TraininguriComponent } from './traininguri/traininguri.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'conferinte',
    component: ConferinteComponent,
  },
  {
    path: 'traininguri',
    component: TraininguriComponent,
  },
  {
    path: 'concursuri',
    component: ConcursuriComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'despre-noi',
    component: DespreNoiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
