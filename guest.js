(function () {
  // 1. Read URL param on arrival
  const params = new URLSearchParams(window.location.search);
  const paramGuest = params.get('guest');
  const stored = localStorage.getItem('guestType');

  if (paramGuest === 'dinner') {
    localStorage.setItem('guestType', 'dinner');
  } else if (paramGuest === 'apero' && stored !== 'dinner') {
    localStorage.setItem('guestType', 'apero');
  }

  // 2. Per-page fallbacks for bookmarked direct links
  const page = window.location.pathname.split('/').pop();
  if (page === 'apero.html' && !localStorage.getItem('guestType')) {
    localStorage.setItem('guestType', 'apero');
  }
  if (page === 'dinner.html') {
    localStorage.setItem('guestType', 'dinner');
  }

  // 3. Apply nav visibility
  const guestType = localStorage.getItem('guestType');

  const navApero  = document.querySelector('.nav-apero');
  const navDinner = document.querySelector('.nav-dinner');
  const navWunsch = document.querySelector('.nav-wunsch');

  if (navApero)  navApero.style.display  = 'none';
  if (navDinner) navDinner.style.display = 'none';
  if (navWunsch) navWunsch.style.display = 'none';

  if (guestType === 'apero' || guestType === 'dinner') {
    if (navApero)  navApero.style.display  = 'inline';
    if (navWunsch) navWunsch.style.display = 'inline';
  }
  if (guestType === 'dinner') {
    if (navDinner) navDinner.style.display = 'inline';
  }
})();
