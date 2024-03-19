import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponentMilosComponent } from './new-component-milos.component';

describe('NewComponentMilosComponent', () => {
  let component: NewComponentMilosComponent;
  let fixture: ComponentFixture<NewComponentMilosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewComponentMilosComponent]
    });
    fixture = TestBed.createComponent(NewComponentMilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
