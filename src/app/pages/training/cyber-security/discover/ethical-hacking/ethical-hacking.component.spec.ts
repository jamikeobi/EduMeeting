import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicalHackingComponent } from './ethical-hacking.component';

describe('EthicalHackingComponent', () => {
  let component: EthicalHackingComponent;
  let fixture: ComponentFixture<EthicalHackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EthicalHackingComponent]
    });
    fixture = TestBed.createComponent(EthicalHackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
