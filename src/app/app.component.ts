import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    GalleryComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-features></app-features>
    <app-gallery></app-gallery>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {
    // Set default language to Arabic
    translate.setDefaultLang('ar');
    translate.use('ar');
  }

  ngOnInit() {
    // Set initial direction
    this.setDirection(this.translate.currentLang);

    // Subscribe to language changes
    this.translate.onLangChange.subscribe(event => {
      this.setDirection(event.lang);
    });
  }

  private setDirection(lang: string) {
    // Set HTML dir attribute based on language
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Add language-specific class to body
    document.body.className = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
