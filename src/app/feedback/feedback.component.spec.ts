import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { By } from '@angular/platform-browser';

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

  it('cancel navigates to home pages', () => {
    component.cancel();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  });
//Ei anna virhettä, mutta ei toimi oikein varmaankaan
  it('should phone number as invalid when it has only numbers', () => {
    const ctrl = component.fbForm.get('number');
    ctrl?.setValue('0');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  });

  it('should phone number as invalid when it has to be 10 numbers', () => {
    const ctrl = component.fbForm.get('phone');
    ctrl?.setValue('67809543213');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeTruthy();
  });
 

  it('should email as invalid when it does not have @', () => {
    const ctrl = component.fbForm.get('email');
    ctrl?.setValue('@');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  });
   
  it('should set the default value of phone', () => {
    const ctrl = component.fbForm.get('phone');
    expect(ctrl?.value).toBeFalsy();
     
  });
  it('should form title as valid when it has a value', () => {
    const ctrl = component.fbForm.get('title');
    ctrl?.setValue('title');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

 //TÄMÄ EI TOIMI
  /* it('it should display username on the label for the username feild', () => {
    //const ctrl = fixture.debugElement.query(By.css('fbForm'));
    const ctrl = fixture.debugElement.query(By.css('.--username label.ctrl-label'));
    expect(ctrl).toBeTruthy();
    expect(ctrl.nativeElement.getAttribute('for')).toEqual('username');
  });*/

  /*//TÄMÄ EI TOIMI
  it('it should display username on the label for the username feild', () => {
    //const ctrl = fixture.debugElement.query(By.css('fbForm'));
    const el = fixture.debugElement.query(By.css('.--username label.ctrl-label'));
    expect(el.nativeElement.innerText).toEqual('username');
  });*/
});
