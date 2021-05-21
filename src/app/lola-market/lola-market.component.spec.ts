import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolaMarketComponent } from './lola-market.component';

describe('LolaMarketComponent', () => {
  let component: LolaMarketComponent;
  let fixture: ComponentFixture<LolaMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LolaMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LolaMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
