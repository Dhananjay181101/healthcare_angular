import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blood1Component } from './blood1.component';

describe('Blood1Component', () => {
  let component: Blood1Component;
  let fixture: ComponentFixture<Blood1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blood1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Blood1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
