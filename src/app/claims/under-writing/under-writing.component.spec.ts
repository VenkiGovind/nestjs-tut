import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderWritingComponent } from './under-writing.component';

describe('UnderWritingComponent', () => {
  let component: UnderWritingComponent;
  let fixture: ComponentFixture<UnderWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderWritingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
