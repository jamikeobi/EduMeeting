import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberDefenseComponent } from './cyber-defense.component';

describe('CyberDefenseComponent', () => {
  let component: CyberDefenseComponent;
  let fixture: ComponentFixture<CyberDefenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberDefenseComponent]
    });
    fixture = TestBed.createComponent(CyberDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
