import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Safari } from './safari';

describe('Safari', () => {
  let component: Safari;
  let fixture: ComponentFixture<Safari>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Safari]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Safari);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
