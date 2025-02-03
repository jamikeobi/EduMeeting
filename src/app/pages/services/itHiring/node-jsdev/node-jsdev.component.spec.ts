import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeJSDevComponent } from './node-jsdev.component';

describe('NodeJSDevComponent', () => {
  let component: NodeJSDevComponent;
  let fixture: ComponentFixture<NodeJSDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodeJSDevComponent]
    });
    fixture = TestBed.createComponent(NodeJSDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
