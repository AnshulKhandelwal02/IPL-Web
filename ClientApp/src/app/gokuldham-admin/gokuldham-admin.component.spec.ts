import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GokuldhamAdminComponent } from './gokuldham-admin.component';

describe('GokuldhamAdminComponent', () => {
  let component: GokuldhamAdminComponent;
  let fixture: ComponentFixture<GokuldhamAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GokuldhamAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GokuldhamAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
