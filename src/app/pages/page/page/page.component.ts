import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-column',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {


  showComponentsList: any
  components$ = Observable<any>;
  hideComponentsList() { }
}
