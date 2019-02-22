import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuledemoComponent } from './moduledemo.component';

describe('ModuledemoComponent', () => {
  let component: ModuledemoComponent;
  let fixture: ComponentFixture<ModuledemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuledemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuledemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
