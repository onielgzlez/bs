import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  loginPageRendered = new BehaviorSubject<boolean>(false);
}
