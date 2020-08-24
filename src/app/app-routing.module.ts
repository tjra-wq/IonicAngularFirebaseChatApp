import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then(m => m.ChatsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'chats/start',
    loadChildren: () => import('./pages/start-chat/start-chat.module').then(m => m.StartChatPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'chat/:id',
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
