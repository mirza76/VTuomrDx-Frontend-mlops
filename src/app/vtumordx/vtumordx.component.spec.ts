import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtumordxComponent } from './vtumordx.component';

describe('VtumordxComponent', () => {
  let component: VtumordxComponent;
  let fixture: ComponentFixture<VtumordxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VtumordxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VtumordxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
