

const user = fetch('https:/api.github.com/users/vasusharrma')

user
  .then((userData) => {
    return userData.json();
  })
  .then((data) => {
    console.log(dat);
  })


