window.addEventListener('DOMContentLoaded', function () {
  // сюда запишется часть пути к финальной фото
  let photo = ""; 
  
  // здесь каждой закрытой фотке добавляется клик по ней
  document.querySelectorAll('.picture-back').forEach(function(item) {
    item.addEventListener('click', function() {
      // и вывод собственно фото из под рубашки (заднего фона)
      item.firstElementChild.classList.toggle('is-visible')
    });
  });

  // здесь все кнопки добавляются в нодлист
  document.querySelectorAll('.btn').forEach(function(item) {
    // el - имя класса который задаёт фото
    const el = item.previousElementSibling.firstElementChild.className.split(' ')[1];

    // здесь каждой кнопке добавляется клик
    item.addEventListener('click', function(event) {

      // q - нодлист классов у скрытой фотки
      const q = item.previousElementSibling.firstElementChild.className.split(' ');
      // condition - флаг говорящий есть ли у фото класс "is-visible"
      let condition = false;

      // проверка condition
      q.forEach(function(item) {
        if(item == "is-visible") {
          condition = true;
        }
      });

      // только если фото открыто, его можно выбрать по клику кнопки
      if(condition) {
        let bestFoto = document.querySelector('#bestphoto');
        bestFoto.classList.toggle(el); // добавляем в верхний див класс с выбранным фото
        
        // нодлист классов у верхнего дива с выбранной фото
        let bestFotoVisible = bestFoto.className.split(' ');
        // флаг показывает выбрана лучшая фото или нет
        let flag = false; 

        bestFotoVisible.forEach(function(item) {
          if(item == el) {
            flag = true;
            photo = el; // в photo записывается название класса показывающего выбранное фото
            // если фото выбрано показывет нод ним кнопку "Подтвердить"
            document.querySelector('.show-selected-photo__btn-confirm').style.visibility = 'visible';
          }
        });
        if(!flag) {
          document.querySelector('.show-selected-photo__btn-confirm').style.visibility = 'hidden';
          photo = "";
        }
      }
    });
  });

  // добавляется клик на кнопку "подтвердить"
  document.querySelector('.show-selected-photo__btn-confirm').addEventListener('click', function() {
    // по клику скрываются все элементы на странице
    document.querySelectorAll('section').forEach(function(item) {
      item.classList.add('is-none');
    });
    // и выбранное фото выводится в более крупном виде на весь экран
    let nameBestPhoto ="img/" + photo + "best.jpg";
    document.querySelector('.best-of-the-best').style.backgroundImage = "url(" + nameBestPhoto + ")";
    document.querySelector('.best-of-the-best').style.display = "block";
  });

});