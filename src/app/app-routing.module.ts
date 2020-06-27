import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { CardComponent } from './card/card.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path:"", component: HeroComponent
  },
  {
    path:'travels', component: TravelListComponent
  },
  {
    path: 'travels/:travelId', component: TravelDetailsComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'card', component: CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
