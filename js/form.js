var selector = document.querySelectorAll("input[type='tel']");
var im = Inputmask("+7(999) 999-99-99");

im.mask(selector);



new JustValidate('.form', {
  colorWrong: '#ff5c00',
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 20
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      mail: {
        required: true,
        email: true
      }
    },

    messages: {

      name: {
        required: 'Вы не ввели имя',
        minLength: 'Недостаточно символов',
        maxLength: 'Слишком много символов'
      },

      mail: 'Вы не ввели e-mail',

      tel: {
        required: 'Вы не ввели телефон'
      }
    }
  });
