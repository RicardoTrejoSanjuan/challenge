import { Component, OnInit } from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";
// import { OverlayContainer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public theme: string;

  constructor (
    private overlayContainer: OverlayContainer
  ) {
    this.theme = 'my-theme';
  }

  ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  onThemeChange(theme:string): void {
    if (this.overlayContainer.getContainerElement().classList.contains('my-theme')) {
      this.overlayContainer.getContainerElement().classList.remove('my-theme');
      this.overlayContainer.getContainerElement().classList.add(theme);
    } else {
      this.overlayContainer.getContainerElement().classList.remove('my-dark-theme');
      this.overlayContainer.getContainerElement().classList.add(theme);
    }

    if (document.body.classList.contains("my-theme")) {
      document.body.classList.remove("my-theme");
      document.body.classList.add(theme);
    } else {
      document.body.classList.remove("my-dark-theme");
      document.body.classList.add(theme);
    }
  }

  changeTheme(theme:string): void {
    this.onThemeChange(theme);
    this.theme = theme;
  }
}
