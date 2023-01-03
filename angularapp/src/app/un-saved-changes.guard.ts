import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component';

@Injectable({
  providedIn: 'root'
})
export class UnSavedChangesGuard implements CanDeactivate<AdduserComponent> {
  
  canDeactivate(component: AdduserComponent){
    if (component.userName.dirty) {
      return window.confirm('you have unsaved changes. Are you sure want to navigate?');
    } else {
      return true;
    }
  }
}
