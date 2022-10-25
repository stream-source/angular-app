import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateobjectComponent } from './createobject.component';

describe('CreateobjectComponent', () => {
  let component: CreateobjectComponent;
  let fixture: ComponentFixture<CreateobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateobjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
