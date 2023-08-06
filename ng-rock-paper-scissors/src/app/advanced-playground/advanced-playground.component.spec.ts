import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedPlaygroundComponent } from './advanced-playground.component';

describe('AdvancedPlaygroundComponent', () => {
  let component: AdvancedPlaygroundComponent;
  let fixture: ComponentFixture<AdvancedPlaygroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancedPlaygroundComponent]
    });
    fixture = TestBed.createComponent(AdvancedPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
