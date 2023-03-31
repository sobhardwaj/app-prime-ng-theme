import { Component, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
// import { FilterMatchMode } from './filtermatchmode';
import { product } from './proudct'
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  @ViewChild('userTable') userTable: any;
  totalHours: number = 0;
  Day = Object.freeze({
    monday: 0,
    tuesday: 1,
    wednesday: 2,
    thursday: 3,
    friday: 4,
    saturday: 5,
    sunday: 6
  });
  total = 23;
  users: any = [
    {
      name: "test",
      cId: "akaskdasda",
      email: "test@test.com",
      platformUser: "akakaksda",
      days: [
        { weekday: 'MONDAY', hoursLogged: 5 },
        { weekday: 'TUESDAY', hoursLogged: 8 },
        { weekday: 'SUNDAY', hoursLogged: 5 }
      ]
    },
    {
      name: "user 2",
      cId: "bdisoen",
      email: "user2@test.com",
      platformUser: "dskeobks",
      days: [
        { weekday: 'MONDAY', hoursLogged: 6 },
        { weekday: 'TUESDAY', hoursLogged: 8 },
        { weekday: 'SUNDAY', hoursLogged: 8 }
      ]
    },
    {
      name: "user 3",
      cId: "sdksdu",
      email: "user3@test.com",
      platformUser: "sdksdu",
      days: [
        { weekday: 'MONDAY', hoursLogged: 9 },
        { weekday: 'TUESDAY', hoursLogged: 5 },
        { weekday: 'SUNDAY', hoursLogged: 7 }
      ]
    },
  ]
  selectedUser: any;
  checkedUser: any;
  statuses = [
    { name: 'Unqualified', value: 'unqualified' },
    { name: 'Qualified', value: 'qualified' },
    { name: 'New', value: 'new' },
    { name: 'Negotiation', value: 'negotiation' },
    { name: 'Renewal', value: 'renewal' },
    { name: 'Proposal', value: 'proposal' }
  ]
  days = [
    { label: 'Monday', value: 'monday' },
    { label: 'Tuesday', value: 'tuesday' },
    { label: 'Wednesday', value: 'wednesday' },
    { label: 'Thursday', value: 'thursday' },
    { label: 'Friday', value: 'friday' },
    { label: 'Saturday', value: 'saturday' },
    { label: 'Sunday', value: 'sunday' }
  ]
  searchUser: string = ''
  productData = product
  constructor(private config: PrimeNGConfig) { }

  ngOnInit() {

    // this.config.filterMatchModeOptions = {
    //   text: [
    //     FilterMatchMode.STARTS_WITH,
    //     FilterMatchMode.CONTAINS,
    //     FilterMatchMode.NOT_CONTAINS,
    //     FilterMatchMode.ENDS_WITH,
    //     FilterMatchMode.EQUALS,
    //     FilterMatchMode.NOT_EQUALS
    //   ],
    //   numeric: [
    //     FilterMatchMode.EQUALS,
    //     FilterMatchMode.NOT_EQUALS,
    //     FilterMatchMode.LESS_THAN,
    //     FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
    //     FilterMatchMode.GREATER_THAN,
    //     FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
    //   ],
    //   date: [
    //     FilterMatchMode.DATE_IS,
    //     FilterMatchMode.DATE_IS_NOT,
    //     FilterMatchMode.DATE_BEFORE,
    //     FilterMatchMode.DATE_AFTER
    //   ]
    // }
    // }
    // this.configService.getUsers().subscribe(users => {
    //   this.user = users[0];
    // });
    this.getTotalHours();
  }
  private getTotalHours() {
    // this.users['days'].forEach(day => (this.totalHours += day.hoursLogged));
  }

  filterGlobal() {
    this.userTable.filterGlobal(this.searchUser, 'contains')
  }

  exportPdf() {
    // import("jspdf").then(jsPDF => {
    //   import("jspdf-autotable").then(x => {
    //     const doc = new jsPDF.default(0, 0);
    //     doc.autoTable(this.columns, this.cars);
    //     doc.save('primengTable.pdf');
    //   })
    // })
  }

  exportExcel() {
    // import("xlsx").then(xlsx => {
    //   const worksheet = xlsx.utils.json_to_sheet(this.getCars());
    //   const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    //   const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
    //   this.saveAsExcelFile(excelBuffer, "primengTable");
    // });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    // import("file-saver").then(FileSaver => {
    //   let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    //   let EXCEL_EXTENSION = '.xlsx';
    //   const data: Blob = new Blob([buffer], {
    //     type: EXCEL_TYPE
    //   });
    //   FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    // });
  }

}
