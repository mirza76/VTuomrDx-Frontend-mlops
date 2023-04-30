import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgaocComponent } from './rgaoc.component';

describe('RgaocComponent', () => {
  let component: RgaocComponent;
  let fixture: ComponentFixture<RgaocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgaocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgaocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
