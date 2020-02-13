import { Injectable, Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';



@Directive({
    selector: '[ExistingUsernameValidator][ngModel],[ExistingUsernameValidator][FormControl]',
    providers: [
        {provide: NG_ASYNC_VALIDATORS, useExisting: ExistingUsernameValidator, multi: true}
    ]
})
export class ExistingUsernameValidator implements AsyncValidator {
  constructor(private userService: UserService) {}

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.userService.isUsernameTaken(ctrl.value).pipe(
      map(isTaken => (isTaken ? { isUsernameTaken: true } : null)),
      catchError(() => null)
    );
  }
}