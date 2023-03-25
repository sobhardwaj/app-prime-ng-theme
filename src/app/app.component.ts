import { Component, OnDestroy } from '@angular/core';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-prime-ng-theme';
  destroyed = new Subject<void>();
  currentScreenSize: string | undefined;

  // Create a map to display breakpoint names for demonstration purposes.
  // displayNameMap = new Map([
  //   [Breakpoints.XSmall, 'XSmall'],
  //   [Breakpoints.Small, 'Small'],
  //   [Breakpoints.Medium, 'Medium'],
  //   [Breakpoints.Large, 'Large'],
  //   [Breakpoints.XLarge, 'XLarge'],
  // ]);
  // constructor(breakpointObserver: BreakpointObserver) {
  //   breakpointObserver
  //     .observe([
  //       Breakpoints.XSmall,
  //       Breakpoints.Small,
  //       Breakpoints.Medium,
  //       Breakpoints.Large,
  //       Breakpoints.XLarge,
  //     ])
  //     .pipe(takeUntil(this.destroyed))
  //     .subscribe(result => {
  //       for (const query of Object.keys(result.breakpoints)) {
  //         if (result.breakpoints[query]) {
  //           this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
  //         }
  //       }
  //     });
  // }
}
