const seachInput = document.querySelector('.seach-input');
const userInfo = document.querySelector('.user-info');


function showUserInfo (){
    if (!seachInput.value){
        userInfo.style.display = 'none'
    }
}

showUserInfo()

let user = seachInput.value;
seachInput.addEventListener('keyup', () =>{
console.log('hi')

fetch('https://api.github.com/users/${user}')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(response);
  });
})
