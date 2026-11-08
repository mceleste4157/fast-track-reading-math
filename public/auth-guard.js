// auth-guard.js — kid pages rely on the PARENT's Firebase sign-in, because that is what the database
// security rules check (a child's data is only readable/writable by the parent who owns the child).
// If that sign-in has expired or been cleared on this device, send everyone to the sign-in screen
// instead of letting progress silently fail to save.
(function () {
  if (typeof firebase === 'undefined' || !firebase.auth) return;
  var unsub = firebase.auth().onAuthStateChanged(function (user) {
    if (typeof unsub === 'function') unsub();
    if (!user && !/login\.html$/.test(location.pathname)) location.replace('login.html?signin=1');
  });
})();
