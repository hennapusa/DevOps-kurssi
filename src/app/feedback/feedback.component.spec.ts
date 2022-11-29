import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { FeedbackComponent } from './feedback.component';

//ng test --include=src/app/feedback/feedback.component.spec.ts

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('shoukd mark name as invalid when it has only one character', () => {
    const ctrl = component.fbForm.get('name');
    ctrl?.setValue('A');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  });

  

 /* it('cancel navigates to home pages', () => {
    const routerSpy = spyOn(router, 'navigate');
    component.cancel();
    expect(routerSpy).toHaveBeenCalledWith(['home']);
  });*/
});
