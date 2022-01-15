// Получение доступа к холсту и его настройка.
var htmlCanvas001 = document.getElementById("canvas001");
var canvas001 = htmlCanvas001.getContext(`2d`);
htmlCanvas001.style.backgroundColor = `black`;
htmlCanvas001.width = window.innerWidth - 4;
htmlCanvas001.height = window.innerHeight - 4;

// Уравнивание размера холста в соответсвии с размерами окна браузера.
window.addEventListener(`resize`, function () {
  htmlCanvas001.width = window.innerWidth;
  htmlCanvas001.height = window.innerHeight;
});

// Переменные.
var mouse = {
  x: htmlCanvas001.width / 4,
  y: htmlCanvas001.height / 4,
};
// Переменные управления гравитацией и кол-вом генерируемых шаров.
addEventListener(`mousemove`, function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
// Получение случайного числа min max.
function randomIntFromRage(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Рекурсионная функция отрисовки кадров.
function animate() {
  var staticColorRect = '#92ABEA';
  var dynamicColorRect = '#E86262';
  const staticRectX = htmlCanvas001.width / 2 - 50;
  const staticRectY = htmlCanvas001.height / 2 - 50;
  canvas001.clearRect(0, 0, htmlCanvas001.width, htmlCanvas001.height);
  // Добавление ширины динамического квадрата к координате точке x(перемещение указателя с левого верхнего угла на правый верхний угол).
  // Добавление ширины статического квадрата к координате точке x(перемещение указателя с левого верхнего угла на правый верхний угол).
  if (mouse.x + 100 >= staticRectX 
    && mouse.x <= staticRectX  + 100
    && mouse.y + 100 >= staticRectY 
    && mouse.y <= staticRectY  + 100
  ) {
    staticColorRect = 'yellow';
  }

  // Квадрат с фиксированными координатами.
  canvas001.fillStyle = staticColorRect;
  canvas001.fillRect(staticRectX, staticRectY, 100, 100);

  canvas001.fillStyle = dynamicColorRect;
  canvas001.fillRect(mouse.x, mouse.y, 100, 100);
  requestAnimationFrame(animate);
}
animate();
