import { Component, OnInit } from '@angular/core';
import { AppService } from '../app/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  text = '';

  constructor(private appService: AppService) {}

  ngOnInit() {
    // this.getLanguage();
  }

  changeLanguage(language) {
    const obj = {
      text: this.text,
      language: language
    };
    this.appService.getLanguage(obj).subscribe((data) => {
      this.text = data['language'];
    });
  }
}
