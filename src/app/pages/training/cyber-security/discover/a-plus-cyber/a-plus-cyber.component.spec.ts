import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APlusCyberComponent } from './a-plus-cyber.component';

describe('APlusCyberComponent', () => {
  let component: APlusCyberComponent;
  let fixture: ComponentFixture<APlusCyberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APlusCyberComponent]
    });
    fixture = TestBed.createComponent(APlusCyberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
