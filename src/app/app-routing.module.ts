import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recetlist',
    loadChildren: () => import('./recetas/recetlist/recetlist.module').then( m => m.RecetlistPageModule)
  },
  {
    path: 'recetdetail',
    loadChildren: () => import('./recetas/recetdetail/recetdetail.module').then( m => m.RecetdetailPageModule)
  },
  {
    path: 'recetinsert',
    loadChildren: () => import('./recetas/recetinsert/recetinsert.module').then( m => m.RecetinsertPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./usuarios/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'recet-categorie',
    loadChildren: () => import('./recetas/recet-categorie/recet-categorie.module').then( m => m.RecetCategoriePageModule)
  },
  {
    path: 'busquedas',
    loadChildren: () => import('./busquedas/busquedas.module').then( m => m.BusquedasPageModule)
  },
  {
    path: 'favoty-list',
    loadChildren: () => import('./usuarios/favoty-list/favoty-list.module').then( m => m.FavotyListPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'recet-update',
    loadChildren: () => import('./recetas/recet-update/recet-update.module').then( m => m.RecetUpdatePageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./usuarios/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./usuarios/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'settings-general',
    loadChildren: () => import('./ElementSettings/settings-general/settings-general.module').then( m => m.SettingsGeneralPageModule)
  },
  {
    path: 'settings-cuenta',
    loadChildren: () => import('./ElementSettings/settings-cuenta/settings-cuenta.module').then( m => m.SettingsCuentaPageModule)
  },
  {
    path: 'visualizaciones',
    loadChildren: () => import('./ElementSettings/visualizaciones/visualizaciones.module').then( m => m.VisualizacionesPageModule)
  },
  {
    path: 'settings-privacidad',
    loadChildren: () => import('./ElementSettings/settings-privacidad/settings-privacidad.module').then( m => m.SettingsPrivacidadPageModule)
  },
  {
    path: 'terminos-usos',
    loadChildren: () => import('./Terms/terminos-usos/terminos-usos.module').then( m => m.TerminosUsosPageModule)
  },
  {
    path: 'politica-privacidad',
    loadChildren: () => import('./Terms/politica-privacidad/politica-privacidad.module').then( m => m.PoliticaPrivacidadPageModule)
  },
  {
    path: 'centro-ayuda',
    loadChildren: () => import('./Terms/centro-ayuda/centro-ayuda.module').then( m => m.CentroAyudaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
