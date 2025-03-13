import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentLanguage: string = 'ar';

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.currentLanguage = this.translationService.getCurrentLang();
    this.translationService.currentLang$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  toggleLanguage() {
    const newLang = this.currentLanguage === 'en' ? 'ar' : 'en';
    this.translationService.changeLanguage(newLang);
  }

  getCurrentLang(): string {
    return this.currentLanguage;
  }
}
