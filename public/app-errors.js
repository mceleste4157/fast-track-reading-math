// Shared "a save failed" reporter.
// Pages used to end writes with .catch(() => {}), which hid real failures — e.g. SpellingProgress and
// StoryRatings had no security rule, so every save was rejected and nobody ever knew.
// Usage:  docRef.set(data).catch(reportSaveError('spelling quiz'));
(function () {
  var lastToast = 0;
  window.reportSaveError = function (context) {
    return function (err) {
      console.error('[save failed] ' + context, err);
      try {
        var log = JSON.parse(localStorage.getItem('saveErrors') || '[]');
        log.push({ t: Date.now(), ctx: context, code: err && err.code, msg: err && err.message });
        localStorage.setItem('saveErrors', JSON.stringify(log.slice(-20)));
      } catch (e) {}
      if (Date.now() - lastToast < 15000 || !document.body) return;   // at most one banner per 15s
      lastToast = Date.now();
      var t = document.createElement('div');
      t.setAttribute('role', 'status');
      t.textContent = '⚠️ Some progress may not have saved. Check your internet connection.';
      t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#b45309;color:#fff;' +
        'padding:12px 18px;border-radius:12px;font:700 0.85rem Inter,system-ui,sans-serif;z-index:99999;' +
        'box-shadow:0 4px 16px rgba(0,0,0,0.25);max-width:90vw;text-align:center;';
      document.body.appendChild(t);
      setTimeout(function () { t.remove(); }, 6000);
    };
  };
})();
