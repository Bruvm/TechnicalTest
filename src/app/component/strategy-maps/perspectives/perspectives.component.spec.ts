import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerspectivesComponent } from './perspectives.component';

describe('PerspectivesComponent', () => {
  let component: PerspectivesComponent;
  let fixture: ComponentFixture<PerspectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerspectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerspectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
