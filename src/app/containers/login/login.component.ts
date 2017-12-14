import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'ms-login',
  template: `
    <div class="box">
      <h1 class="title is-1">Welcome</h1>
      <h6 class="subtitle is-6">Sign in as administrator</h6>
      <cp-login-form [successRedirectUrl]="loginSuccessRedirectUrl"></cp-login-form>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  loginSuccessRedirectUrl = '/admin'
}
