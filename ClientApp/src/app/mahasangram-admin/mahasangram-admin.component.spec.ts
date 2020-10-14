import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasangramAdminComponent } from './mahasangram-admin.component';

describe('MahasangramAdminComponent', () => {
  let component: MahasangramAdminComponent;
  let fixture: ComponentFixture<MahasangramAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahasangramAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahasangramAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
