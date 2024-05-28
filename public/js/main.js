

   const menu__mobile = document.querySelector('.menu__mobile');
   const menu__list = document.querySelector('header nav  div');
   const body = document.querySelector('body');

   menu__mobile.addEventListener('click', () => {
       menu__list.classList.toggle('active');
       menu__mobile.classList.toggle('active');
       body.classList.toggle('active');
   })


   window.addEventListener('resize', () => {
       if (window.innerWidth > 768) {
           menu__list.classList.remove('active');
           menu__mobile.classList.remove('active');
           body.classList.remove('active');
       }
   })

   const selectLanguage = document.querySelector('.select__language');

   selectLanguage.addEventListener('change', (e) => {
       if (e.target.value === 'en') {
           window.location.href = '/'
       }

       if (e.target.value === 'pt') {
           window.location.href = '/pt'
       }
   })
