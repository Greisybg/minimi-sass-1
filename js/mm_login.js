

  function closeSession(){
    localStorage.removeItem('mmiLocalStoreUserName');
    location.reload();
  }

  function startSession(){
    let user=null;
    let userMail=$("#userMail").val();
    let userPass=$("#userPass").val();
    console.log("userMail:"+userMail+"userPass"+userPass);
    let defaultValue = '[{"mail":"","pass":""}]';
    let listUser =JSON.parse(localStorage.getItem('users') || defaultValue);
    listUser.forEach(function(userStorage){
        if (userStorage.mail === userMail && userStorage.pass == userPass){
          localStorage.setItem('mmiLocalStoreUserName',userStorage.name);
        }
    });
  }

  let exampleForm =  document.querySelector('form');
exampleForm.addEventListener('submit', event => {
  event.preventDefault();

  let inputElements = exampleForm.querySelectorAll("input");

  inputElements.forEach(function(input) {
    console.log(input.value);
  });

});