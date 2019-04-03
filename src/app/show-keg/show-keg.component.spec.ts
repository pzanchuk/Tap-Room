import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowKegComponent } from './show-keg.component';

describe('ShowKegComponent', () => {
  let component: ShowKegComponent;
  let fixture: ComponentFixture<ShowKegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowKegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
