import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = new BehaviorSubject<string>('en');
  currentLang$ = this.currentLang.asObservable();

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.loadSavedLanguage();
  }

  private loadSavedLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      this.changeLanguage(savedLang);
    }
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang.next(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }

  getCurrentLang(): string {
    return this.currentLang.value;
  }
}
