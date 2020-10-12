import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GokuldhamComponent } from './gokuldham.component';

describe('GokuldhamComponent', () => {
  let component: GokuldhamComponent;
  let fixture: ComponentFixture<GokuldhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GokuldhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GokuldhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
