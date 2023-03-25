import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonModule } from 'primeng/button'
import { MessageModule } from 'primeng/message'
import { SidebarModule } from 'primeng/sidebar'
import { TableModule } from 'primeng/table'
import { FileUploadModule } from 'primeng/fileupload'
import { ToastModule } from 'primeng/toast'
import { DataViewModule } from 'primeng/dataview'
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox'
import { CheckboxModule } from 'primeng/checkbox'
import { ListboxModule } from 'primeng/listbox'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
// import { EditorModule } from 'primeng/editor'
import { CardModule } from 'primeng/card'
import { RadioButtonModule } from "primeng/radiobutton";
import { TabViewModule } from 'primeng/tabview'

import { FocusTrapModule } from 'primeng/focustrap';
import { TreeTableModule } from 'primeng/treetable';
import { TreeModule } from 'primeng/tree';

import { CalendarModule } from "primeng/calendar"
import { DropdownModule } from 'primeng/dropdown'
import { MultiSelectModule } from 'primeng/multiselect'
import { AccordionModule } from 'primeng/accordion'

import { BreadcrumbModule } from 'primeng/breadcrumb'
import { AnimateModule } from 'primeng/animate'
import { BadgeDirective, BadgeModule } from 'primeng/badge'
import { AvatarModule } from 'primeng/avatar'
import { AvatarGroupModule } from 'primeng/avatargroup'
import { MegaMenuModule } from 'primeng/megamenu'
import { MenubarModule } from 'primeng/menubar'
import { MenuModule } from 'primeng/menu'
import { TerminalModule } from 'primeng/terminal'
import { DragDropModule } from 'primeng/dragdrop'
import { SkeletonModule } from 'primeng/skeleton'


import { ConfirmationService } from 'primeng/api/confirmationservice'
import { KeyFilterModule } from 'primeng/keyfilter'
import { PanelModule } from 'primeng/panel'
import { OverlayPanelModule } from 'primeng/overlaypanel'
import { BlockUIModule } from 'primeng/blockui'
import { InputMaskModule } from 'primeng/inputmask'
import { ToolbarModule } from 'primeng/toolbar'
import { TooltipModule } from 'primeng/tooltip'
import { AutoCompleteModule } from 'primeng/autocomplete'
import { Dialog, DialogModule } from 'primeng/dialog'
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog'
import { ConfirmPopupModule } from 'primeng/confirmpopup'


import { SplitButtonModule } from 'primeng/splitbutton'
import { SpinnerModule } from 'primeng/spinner'
import { StepsModule } from 'primeng/steps'

import { InputSwitchModule } from 'primeng/inputswitch'
import { InputTextModule } from 'primeng/inputtext'
import { InputTextareaModule } from 'primeng/inputtextarea'


import { SharedModule, Header, Footer } from 'primeng/api';

// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { MatchHeightDirective } from './directives/match-height.directive';
// import { KeyboardCtrlDirective } from './directives/keyboard-control.directive';
// import { SpinnerComponent } from './app-spinner/app-spinner.component';
// import { CollapseDirective } from "./collapse.directive";
// import { CarotComponent } from './app-carot/app-carot.component';
// import { sideMenuHeightDirective } from './directives/side-menu-height.directive';
// import { AutoresizeDirective } from "./directives/auto-resize.directive";
// import { SearchComponent } from "./search/search.component";
// import { InputTextModule } from "primeng/components/inputtext/inputtext";
// import { FieldTooltipDirective } from "./directives/field-tooltip.directive";
// import { TooltipModule } from "primeng/components/tooltip/tooltip";
// import { TooltipService } from "./directives/tooltip.service";
// import { TooltipResolver } from "./resolver/tooltip.resolver";
// import { RecordUsageResolver } from './resolver/record-usage.resolver';
// import { InfiniteScrollerDirective } from './directives/infinite-scroll.directive';
// import { SimpleDropdownComponent } from './simple-dropdown/simple-dropdown.component';
// import { CheckboxComponent } from './checkbox/checkbox.component';
// import { TimeComponent } from './time/time.component';


export const APP_PRIMENG_COMPONENTS = [
  Dialog,
  ConfirmDialog,
  Header,
  Footer
];

export const APP_PRIMENG_MODULE = [
  //prime modueles 
  AccordionModule,
  AnimateModule,
  AvatarModule,
  AvatarGroupModule,
  AutoCompleteModule,
  CheckboxModule,
  CalendarModule,
  CardModule,
  ConfirmDialogModule,
  ConfirmPopupModule,
  ButtonModule,
  BreadcrumbModule,
  BadgeModule,
  BlockUIModule,
  DialogModule,
  DragDropModule,
  DropdownModule,
  DataViewModule,
  FileUploadModule,
  FocusTrapModule,
  InputSwitchModule,
  InputTextModule,
  InputTextareaModule,
  InputMaskModule,
  MessageModule,
  MultiSelectModule,

  MegaMenuModule,
  MenuModule,
  MenubarModule,

  TerminalModule,
  TableModule,
  TreeModule,
  TreeTableModule,

  ToastModule,
  TooltipModule,
  TriStateCheckboxModule,
  ListboxModule,

  TabViewModule,
  ToolbarModule,
  PanelModule,

  RadioButtonModule,

  OverlayPanelModule,

  SidebarModule,
  SkeletonModule,
  SplitButtonModule,
  StepsModule,
  SpinnerModule,

  KeyFilterModule,

  SharedModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //prime modueles 
    AccordionModule,
    AnimateModule,
    AvatarModule,
    AvatarGroupModule,
    AutoCompleteModule,
    CheckboxModule,
    CalendarModule,
    CardModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ButtonModule,
    BreadcrumbModule,
    BadgeModule,
    BlockUIModule,
    DialogModule,
    DragDropModule,
    DropdownModule,
    DataViewModule,
    FileUploadModule,
    FocusTrapModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule,
    MessageModule,
    MultiSelectModule,

    MegaMenuModule,
    MenuModule,
    MenubarModule,

    TerminalModule,
    TableModule,
    TreeModule,
    TreeTableModule,

    ToastModule,
    TooltipModule,
    TriStateCheckboxModule,
    ListboxModule,

    TabViewModule,
    ToolbarModule,
    PanelModule,

    RadioButtonModule,

    OverlayPanelModule,

    SidebarModule,
    SkeletonModule,
    SplitButtonModule,
    StepsModule,
    SpinnerModule,

    KeyFilterModule,

    SharedModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    //prime modueles 
    AccordionModule,
    AnimateModule,
    AvatarModule,
    AvatarGroupModule,
    AutoCompleteModule,
    CheckboxModule,
    CalendarModule,
    CardModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ButtonModule,
    BreadcrumbModule,
    BadgeModule,
    BlockUIModule,
    DialogModule,
    DragDropModule,
    DropdownModule,
    DataViewModule,
    FileUploadModule,
    FocusTrapModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule,
    MessageModule,
    MultiSelectModule,

    MegaMenuModule,
    MenuModule,
    MenubarModule,

    TerminalModule,
    TableModule,
    TreeModule,
    TreeTableModule,

    ToastModule,
    TooltipModule,
    TriStateCheckboxModule,
    ListboxModule,

    TabViewModule,
    ToolbarModule,
    PanelModule,

    RadioButtonModule,

    OverlayPanelModule,

    SidebarModule,
    SkeletonModule,
    SplitButtonModule,
    StepsModule,
    SpinnerModule,

    KeyFilterModule,

    SharedModule,
  ],
  providers: []
})
export class PrimengModule { }