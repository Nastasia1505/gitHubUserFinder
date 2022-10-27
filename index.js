const seachInput = document.querySelector('.seach-input');
const userInfo = document.querySelector('.user-info');

seachInput.addEventListener('keyup', () => {
  console.log('hi')
  let user = seachInput.value;
  fetch(`https://api.github.com/users/${user}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      showUserInfo(response)
    })
})

function showUserInfo(response) {
  if (!seachInput.value) {
    userInfo.style.display = 'none'
  } else {
    userInfo.style.display = 'flex'

    userInfo.innerHTML = `<img src="${response.avatar_url}" class = "user-img"> <br>
      BIO:  ${response.bio}  <br>
      Followers: ${response.followers} <br>
      Location: ${response.location}`

    console.log(response)
  }
}

showUserInfo()
