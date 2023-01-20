document.getElementById('name').addEventListener('blur', validadeName);
document.getElementById('zip').addEventListener('blur', validadeZip);
document.getElementById('email').addEventListener('blur', validadeEmail);
document.getElementById('phone').addEventListener('blur', validadePhone);


function validadeName() {
  const name = document.getElementById('name');
  const re = /^[a-z]{2,10}$/i;

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validadeZip() {
  const zip = document.getElementById('zip');
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if(!re.test(zip.value)){
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validadeEmail() {
  const email = document.getElementById('email');
  const re = /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/i;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validadePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}