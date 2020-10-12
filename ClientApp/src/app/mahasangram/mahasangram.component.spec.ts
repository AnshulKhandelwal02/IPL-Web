import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasangramComponent } from './mahasangram.component';

describe('MahasangramComponent', () => {
  let component: MahasangramComponent;
  let fixture: ComponentFixture<MahasangramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahasangramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahasangramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
