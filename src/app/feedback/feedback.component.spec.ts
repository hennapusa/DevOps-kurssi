import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
//import { Subscription } from 'rxjs';
//import { By } from '@angular/platform-browser';

import { FeedbackComponent } from './feedback.component';
//import { Component } from '@angular/core';

//ng test --include=src/app/feedback/feedback.component.spec.ts
//npm run lint

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  const routerSpy = { navigate: jasmine.createSpy('navigate') };
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
  it('should mark name as invalid when it has only one character', () => {
    const ctrl = component.fbForm.get('name');
    ctrl?.setValue('A');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  });

  it('cancel navigates to home pages', () => {
    component.cancel();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should display email on the label for the email feild', () => {
    const ctrl = component.fbForm.get('email');
    ctrl?.setValue('matti.meikalainen@student.lab.fi');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeTruthy();
  });

  it('should phone number as invalid when it has to be 10 numbers', () => {
    const ctrl = component.fbForm.get('phone');
    ctrl?.setValue('67809543213');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeTruthy();
  });
 
  it('should display email on the label for the email feild', () => {
    const email =component.fbForm.get('email');
    const feedback =fixture.componentInstance;
    expect (feedback.email).toEqual(email);
    
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

  it('form invalid when empty', () => {
    expect(component.fbForm.valid).toBeFalsy();
  });

  it('should mark as invalid when its value is less than 10 characters', () => {
    const ctrl = component.fbForm.get('phone');
    ctrl?.setValue('34789765');
    fixture.detectChanges();
    expect(ctrl?.invalid).toBeTruthy();
  });

 
it('it should display name on the label for the name feild', () => {
  const name =component.fbForm.get('name');
  const feedback =fixture.componentInstance;
  expect (feedback.name).toEqual(name);
  });

  it('it should display description on the label for the description feild', () => {
    const description =component.fbForm.get('description');
    const feedback =fixture.componentInstance;
    expect (feedback.description).toEqual(description);
  
    });
  
});
