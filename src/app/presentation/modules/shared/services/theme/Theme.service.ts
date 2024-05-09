import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  getToken(): string | null {
    // if (this.localStorage) {
      return localStorage.getItem('ThemeMode');
    // }
    // throw 'No Browser';
  }

  deleteToken() {
    // if (this.localStorage) {
      localStorage.removeItem('ThemeMode');
      return;
    // }
    // throw 'No Browser';
  }

  setToken(token: string) {
    // if (this.localStorage) {
      this.deleteToken();
      localStorage.setItem('ThemeMode', token);
      return;
    // }
    // throw 'No Browser';
  }

}
