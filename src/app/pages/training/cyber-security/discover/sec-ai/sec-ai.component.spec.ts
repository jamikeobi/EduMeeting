import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAIComponent } from './sec-ai.component';

describe('SecAIComponent', () => {
  let component: SecAIComponent;
  let fixture: ComponentFixture<SecAIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecAIComponent]
    });
    fixture = TestBed.createComponent(SecAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
