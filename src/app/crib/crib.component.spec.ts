import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CribComponent } from './crib.component';

describe('CribComponent', () => {
  let component: CribComponent;
  let fixture: ComponentFixture<CribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CribComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
