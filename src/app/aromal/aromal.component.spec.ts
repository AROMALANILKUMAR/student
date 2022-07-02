import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AromalComponent } from './aromal.component';

describe('AromalComponent', () => {
  let component: AromalComponent;
  let fixture: ComponentFixture<AromalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AromalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AromalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
