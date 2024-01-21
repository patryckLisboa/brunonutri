import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PNavigationComponent } from './p-navigation.component';

describe('PNavigationComponent', () => {
  let component: PNavigationComponent;
  let fixture: ComponentFixture<PNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PNavigationComponent]
    });
    fixture = TestBed.createComponent(PNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
