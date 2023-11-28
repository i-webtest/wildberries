const getGoods = () => {
  // const GOODS_DATA = 'https://wildberries-63d51-default-rtdb.firebaseio.com/db.json';

  const links = document.querySelectorAll('.navigation-link');

  const getData = () => {
    fetch('/db/db.json')
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('goods', JSON.stringify(data));
        const goods = JSON.parse(localStorage.getItem('goods'));
      });
  };

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      getData();
    });
  });
};

getGoods();
