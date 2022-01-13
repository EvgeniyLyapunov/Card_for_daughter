window.addEventListener('DOMContentLoaded', function () {

  let photo = ""; 

  document.querySelectorAll('.picture-back').forEach(function(item) {
    item.addEventListener('click', function() {
      item.firstElementChild.classList.toggle('is-visible')
    });
  });

  document.querySelectorAll('.btn').forEach(function(item) {
    let el = item.previousElementSibling.firstElementChild.className.split(' ')[1];
    item.addEventListener('click', function(event) {

      let q = item.previousElementSibling.firstElementChild.className.split(' ');
      console.log(q);
      let condition = false;
      q.forEach(function(item) {
        if(item == "is-visible") {
          condition = true;
        }
      });

      if(condition) {
        let bestFoto = document.querySelector('#bestphoto');
        bestFoto.classList.toggle(el);
  
        let bestFotoVisible = bestFoto.className.split(' ');
        let flag = false;
        bestFotoVisible.forEach(function(item) {
          if(item == el) {
            flag = true;
            photo = el;
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

  document.querySelector('.show-selected-photo__btn-confirm').addEventListener('click', function() {
    document.querySelectorAll('section').forEach(function(item) {
      item.classList.add('is-none');
    });
    let nameBestPhoto ="img/" + photo + "best.jpg";
    document.querySelector('.best-of-the-best').style.backgroundImage = "url(" + nameBestPhoto + ")";
    document.querySelector('.best-of-the-best').style.display = "block";
  });

});