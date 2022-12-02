import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { FeedbackComponent } from './feedback.component';

//ng test --include=src/app/feedback/feedback.component.spec.ts

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  //let router = { navigate: jasmine.createSpy('navigate') };
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackComponent ],
      providers: [{provide: Router, useValue: routerSpy}]
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


  it('should mark name as invalid when it has only character', () => {
    const ctrl = component.fbForm.get('number');
    ctrl?.setValue('0');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  });

  it('cancel navigates to home pages', () => {
    //const routerSpy = spyOn(router, 'navigate');
    component.cancel();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should phone number as invalid when it has only numbers', () => {
    const ctrl = component.fbForm.get('number');
    ctrl?.setValue('0');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  });
  it('should phone number as invalid when it has to be 11 numbers', () => {
    const ctrl = component.fbForm.get('phone');
    ctrl?.setValue('11');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  });

  it('should email as invalid when it has only character @', () => {
    const ctrl = component.fbForm.get('email');
    ctrl?.setValue('@');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  });
   
  it('should set the default value of subcription to true', () => {
    const ctrl = component.fbForm.get('subscription');
    expect(ctrl?.value).toBeFalsy();
  });

  it('should set the default value of phone', () => {
    const ctrl = component.fbForm.get('phone');
    expect(ctrl?.value).toBeFalsy();
     
  });
});
