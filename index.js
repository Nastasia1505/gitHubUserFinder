const seachInput = document.querySelector('.seach-input');
const userInfo = document.querySelector('.user-info');


function showUserInfo(response) {
  if (!seachInput.value) {
    userInfo.style.display = 'none'
  } else {
    userInfo.style.display = 'flex'
    userInfo.innerHTML = `<img src="${response.avatar_url}"> 
      BIO:  ${response.bio}  
      Followers: ${response.followers}`
    
    console.log(response)
  }
}

showUserInfo()


seachInput.addEventListener('keyup', () => {
  console.log('hi')
  let user = seachInput.value;
  fetch(`https://api.github.com/users/${user}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      // console.log(response)
      // console.log(response.bio)
      showUserInfo(response)
    })

})
