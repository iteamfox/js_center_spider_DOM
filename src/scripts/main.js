'use strict';

// Pobieramy elementy: ścianę i pająka
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// Nasłuchujemy na kliknięcie w dokumencie
document.addEventListener('click', (e) => {
  // Sprawdzamy, czy kliknięcie miało miejsce w obrębie ściany
  const clickLocation = e.target.closest('.wall');

  // Jeśli kliknięcie nie było w obrębie ściany, nic nie robimy
  if (!clickLocation) {
    return;
  }

  // Obliczamy odległości (odstępy) od krawędzi ściany do środka pająka
  const topGap = wall.offsetTop + wall.clientTop + spider.clientHeight / 2;
  const leftGap = wall.offsetLeft + wall.clientLeft + spider.clientWidth / 2;

  // Ustalanie ograniczeń ruchu pająka wewnątrz ściany
  const topLimit = wall.clientHeight - spider.clientHeight;
  const leftLimit = wall.clientWidth - spider.clientWidth;

  // Obliczamy pozycję pająka w oparciu o położenie kliknięcia
  let y = e.clientY - topGap;
  let x = e.clientX - leftGap;

  // Ograniczamy pozycję pająka, aby nie wychodził poza granice ściany
  y = Math.max(y, 0); // Nie może być mniejsze niż 0 (górna granica)
  y = Math.min(y, topLimit); // Nie może być większe niż dolna granica

  x = Math.max(x, 0); // Nie może być mniejsze niż 0 (lewa granica)
  x = Math.min(x, leftLimit); // Nie może być większe niż prawa granica

  // Ustawiamy nową pozycję pająka
  spider.style.position = 'absolute';
  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
