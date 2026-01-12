import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  authState,
  User
} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User | null>;

  constructor(
    private auth: Auth,
    private router: Router
  ) {
    this.user$ = authState(this.auth);
  }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider)
      .then(() => {
        this.router.navigate(['/faena']);
      });
  }

  getUser() {
    return this.user$;
  }

  isLoggedIn() {
    return this.user$;
  }

  logout() {
    return this.auth.signOut().then(() => {
      this.router.navigate(['/inicio']);
    });
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}
