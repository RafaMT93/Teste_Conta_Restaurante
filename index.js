let items, mail, clients, total, shared, diff, resultDiv;

//obj for Items

items = [
  { prod: '', qty: 50, vUnit: 5 },
  { prod: '', qty: 10, vUnit: 20 },
  { prod: '', qty: 5, vUnit: 10 },
  { prod: '', qty: 587, vUnit: 255 },
  { prod: '', qty: 100, vUnit: 232 },
  { prod: '', qty: 52, vUnit: 1001 },
];

//obj for client data

mail = [
  { name: '', email: 'cliente1@prov.com', value: null },
  { name: '', email: 'cliente2@prov.com.br', value: null },
  { name: '', email: 'cliente3@prov.com', value: null },
  { name: '', email: 'cliente4@prov.com', value: null },
  { name: '', email: 'cliente5@prov.com.br', value: null },
  { name: '', email: 'cliente6@prov.com', value: null },
  { name: '', email: '', value: null },
  { name: '', email: '', value: null },
  { name: '', email: 'cliente9@prov.com', value: null },
  { name: '', email: 'cliente10@prov.com', value: null },
];

//Filter obj with value of email without characters

const wMail = mail.filter((x) => {
  return x.email != '';
});

//Function for sum items obj values

const addQty = () => {
  total = items.reduce(function getTotal(total, item) {
    return total + item.qty * item.vUnit;
  }, 0);
  return total;
};

//Print mail and value

const mailDelivery = () => {
  if (!wMail) {
    mail.forEach(({ email, value }) => {
      console.log(
        email +
          ' deve pagar ' +
          Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(value / 100),
      );
    });
  } else {
    wMail.forEach(({ email, value }) => {
      console.log(
        email +
          ' deve pagar ' +
          Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(value / 100),
      );
    });
  }
};

//Calc for share difference

const difference = (x) => {
  if (!wMail) {
    for (let i = 1; i <= x; i++) {
      mail[mail.length - i].value++;
    }
  } else {
    for (let i = 1; i <= x; i++) {
      wMail[wMail.length - i].value++;
    }
  }
};

//share value between clients

const sharedValue = () => {
  if (!wMail) {
    clients = mail.length;
    total = addQty();
    shared = total / clients;
    diff = total - parseInt(shared) * clients;
    mail.forEach((x) => {
      x.value = parseInt(shared);
    });
    if (total === parseInt(shared) * clients) {
      return mailDelivery();
    } else {
      difference(diff);
      return mailDelivery();
    }
  } else {
    clients = wMail.length;
    total = addQty();
    shared = total / clients;
    diff = total - parseInt(shared) * clients;
    wMail.map((x) => {
      x.value = parseInt(shared);
    });
    if (total === parseInt(shared) * clients) {
      return mailDelivery();
    } else {
      difference(diff);
      return mailDelivery();
    }
  }
};

//Validate lists

const validate = () => {
  arrI = items.length;
  arrM = mail.length;
  if (arrI) {
    if (arrM) {
      sharedValue();
    } else {
      console.log('Lista de emails não preenchida');
    }
  } else {
    console.log('Lista de itens não preenchida');
  }
};

//Execute the function
validate();
