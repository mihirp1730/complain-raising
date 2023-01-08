import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { ComplainService } from 'src/app/shared/complain-service.service';
import { ComplainFields, complainStatus } from '../../shared/complain-fields';

@Component({
  selector: 'app-complain-review',
  templateUrl: './complain-review.component.html',
  styleUrls: ['./complain-review.component.scss'],
})
export class ComplainReviewComponent {
  complains: any;
  currentComplain = null;
  currentIndex = -1;
  title = '';

  displayedColumns: string[] = [
    'complainId',
    'customerName',
    'status',
    'complainReason',
  ];
  dataSource: MatTableDataSource<ComplainFields>;
  clickedRows = new Set<ComplainFields>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public complainService: ComplainService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit() {
    this.retriveAllComplains();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  refreshList(): void {
    this.currentComplain = null;
    this.currentIndex = -1;
    this.retriveAllComplains();
  }

  retriveAllComplains(): void {
    this.complainService
      .getAllComplains()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.complains = data;
        console.log(this.complains);
        this.dataSource = new MatTableDataSource(this.complains);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  setActiveComplain(complain: any, index: any): void {
    this.currentComplain = complain;
    this.currentIndex = index;
  }
}
