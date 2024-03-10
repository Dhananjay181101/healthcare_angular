import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilComponent } from './dil.component';

describe('DilComponent', () => {
  let component: DilComponent;
  let fixture: ComponentFixture<DilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
