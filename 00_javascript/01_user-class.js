/*
  Goal: Review code and identify issues.
  Must Support:
  - ES6
 */
import { authService } from "auth";

class user {
  //Constructor.
  constructor(username, roles = []) {
    this.username = username;
    this.roles = roles;
    this.isAuthenticated = false;
  }

  // Signs a user in using the auth service.
  signIn(password) {
    if (this.isAuthenticated == true)
        return;

    var me = this;
    // Returns a promise.
    authService.signIn({ username: this.username, password: password })
      .then(function(roles) {
        me.isAuthenticated = true;
        me.roles = roles;
      })
      .fails(err => console.loger(err));
  }
}