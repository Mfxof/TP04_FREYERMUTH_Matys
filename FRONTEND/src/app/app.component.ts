import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/side/header/header.component';
import { FooterComponent } from './components/side/footer/footer.component';
import { CarouselComponent } from './components/side/carousel/carousel.component';
import { IndexBodyComponent } from './components/body/index/index-body/index-body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CarouselComponent, IndexBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TP04-FREYERMUTH-MATYS';
}
