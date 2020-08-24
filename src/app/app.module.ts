import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { Camera } from '@ionic-native/camera/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';

class CameraMock {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEQklEQVRoQ9WaSSh1YRzGn0tSRFgQESmRqRBip8w2NqQsJKGkDBuSJUVSUhaisGBhKCRSpgUprinFgoV5WohkWnC//u/XuV33u+ee857Bd++7ueee4TnP7z+8dzivwWg0mgIDA+HM4/b2Fobr62sTbSQlJTkly87ODoKCgv6C0AbtcDYYwbM5IwRCw5lgLL3+A+IsMNYBtwni6DC2qkYUxFFhxErfLoijwdjrX0kQR4GRmoRkgfxvGCkI8icb5H/ByIHgBvltGLkQikB+C4YHQjGI3jC8EKpA9IJRAqEaRGsYpRCagGgFowZCMxC1MGohNAVRCqMFhOYgvDBaQegCIhdGSwjdQKRgtIbQFUQMRg8I3UGsYfSC+BUQAYZe9fyHhutrPJlRMigTTg9iWU5OW1q2jOsFo1tp2TOsB4wuIHKMyjmHpx81B+ExyHOuFJSmIEqMKbnGFpRmIGoMqblWgNIERAsjajVUg6g1YFkmarRUgai5sVjzKtVUDKL0hlKzj9RPALHrFYHoCSEY5b0HN4hwg6+vLzw9Pf0IkJubG7y9vc373t7ecHFxgYiICLi6ukomw1pzf38fycnJsjS5QCyjtLe3h8TExB/m8vLyMD8/z/a1t7ejtbWVbXt5eWF1dVXya7wtzfT0dGxsbEhqygaxTvXU1BRaWlowMjJihvHx8UFUVBS2t7eRkpKCoaEhEFxjYyOWlpZwdXUFyprYENN8fX3F9/e3XU1ZILbqtaurC5T60dHRf3w1NDQwmPX1dXbs8PAQ8fHxWFlZYUB0jExTpgYGBjA2Nobx8XEMDw+LapaWluL8/NymZkZGhvTzEbGmq66uxtraGvz8/EC1XV5ejpKSEvj6+iI7O5uVXUdHBwOhXvH09MTg4CBycnIQHR2NsrIy1NbWsgz29PSgrq4OUpr0CJ1grTUrKirsg9ibOSgKNzc3aGtrw93dHXsNDQ3F5uYmwsLCmMmmpiZztgICAtDc3AzK1sTEBIqLixEcHIyYmBjWVy4uLpCjmZmZae41S03Fj6cpyjQTubu7M7MUKcrK8fEx6uvrmcHu7m4ziMFgwNzcHAoKCtg+On50dITd3V0kJCSYoyxHUwiwpaaiBQPv7++sN7KyslgWaFDt0/uHhwf09fXBaDQy4zSoyUNCQnB2dsbOn5ycRFFREfz9/ZGamoqZmRl8fHxwaVIWKSiCpuIlHNQHLy8vrIFJjEqJ+mB2dhYLCwvIz8/H4uIiIiMjWTkdHBzg9PSU1TL1RU1NDQoLC5GWlob+/n5UVVWx3uLR3NrawuXlJSgzP0B4Pk2pJCorK1lp0AgPD8f09DTi4uJgMplYefX29rJjFPnl5WXExsYiNzcXJycnbCbz8PBgfdPZ2ckgn5+fuTU/Pz9Zz6he5kSf3DSocalhLcfj4yPu7+9ZBihqcgevJiWALXOihWfC6iC5N3O082gG/QNytP1W6G4b4gAAAABJRU5ErkJggg==');
    })
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    // FirestoreSettingsToken,
    AngularFireStorageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // { provide: FirestoreSettingsToken, useValue: {} },
    //uncomment Camera to capture image using camera and comment the { provide: Camera,...}
    Camera,
    //  { provide: Camera, useClass: CameraMock },
    Firebase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
