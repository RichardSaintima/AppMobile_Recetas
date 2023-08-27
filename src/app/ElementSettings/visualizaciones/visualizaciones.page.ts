import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizaciones',
  templateUrl: './visualizaciones.page.html',
  styleUrls: ['./visualizaciones.page.scss'],
})
export class VisualizacionesPage implements OnInit {
  themeToggle = false;

  constructor() {}

  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark theme based on the initial
    // value of the prefers-color-scheme media query
    this.themeToggle = prefersDark.matches;

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => {
      this.themeToggle = mediaQuery.matches;
      this.toggleDarkTheme(this.themeToggle); // Apply the theme if necessary
    });
  }

  // Listen for the toggle check/uncheck to toggle the dark theme
  toggleChange(ev: any) {
    this.themeToggle = ev.detail.checked;
    this.toggleDarkTheme(this.themeToggle); // Apply or remove the theme immediately
  }

  // Add or remove the "dark" class on the document body
  toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);
  }


}
