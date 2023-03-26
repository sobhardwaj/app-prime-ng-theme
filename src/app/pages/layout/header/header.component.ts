import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { fromEvent, Observable, Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  gloablSearch: any = ''
  private readonly destroy$ = new Subject<void>()
  // private readonly document: Document
  // private lastFocusedElement: HTMLElement
  showComponentsList: boolean = false
  showToolbar: boolean = true
  // components$: Observable<ComponentLink[]> = this.componentsListService.components$;
  @ViewChild('componentSearch') componentSearch: ElementRef | undefined;

  constructor(private router: Router) {
    console.log(this.gloablSearch)

  }

  showComponentList() { }

  onSearchChange(event: any) { }

  navigateToComponent() { }


  // private handleButtonPressUp(e: KeyboardEvent): void {
  //   if (e.key === 'ArrowDown') {
  //     this.componentsListService.selectNextComponent();
  //   }

  //   if (e.key === 'ArrowUp') {
  //     this.componentsListService.selectPreviousComponent();
  //   }

  //   if (e.key === 'Escape') {
  //     this.hideComponentsList();
  //     this.lastFocusedElement.focus();
  //   }

  //   if (e.key === '/') {
  //     this.lastFocusedElement = this.document.activeElement as HTMLElement;
  //     this.componentSearch.nativeElement.focus();
  //   }
  // }
}
