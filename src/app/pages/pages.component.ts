import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings/settings.service';

declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {
  constructor(private settings: SettingsService) {}

  ngOnInit() {
    init_plugins();
    const theme = this.settings.readConfig('theme');
    this.settings.setTheme(theme);
  }
}
