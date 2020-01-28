import { Injectable, Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';



@Directive({
    selector: '[ExistingEmailValidator][ngModel],[ExistingEmailValidator][FormControl]',
    providers: [
        {provide: NG_ASYNC_VALIDATORS, useExisting: ExistingEmailValidator, multi: true}
    ]
})
export class ExistingEmailValidator implements AsyncValidator {
  constructor(private userService: UserService) {}

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.userService.isEmailTaken(ctrl.value).pipe(
      map(isTaken => (isTaken ? { isEmailTaken: true } : null)),
      catchError(() => null)
    );
  }
}