const LinksSocialMedia = {
  github: 'felipecrsilva',
  youtube: '',
  facebook: '',
  instagram: 'fxlipecrs',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

const sr = ScrollReveal({ duration: 2000 })

sr.reveal('.avatar', { delay: 0 });
sr.reveal('#userName', { delay: 250 });
sr.reveal('#userLink', { delay: 500 });
sr.reveal('#userBio', { delay: 750 });
sr.reveal('#socialLinks', { delay: 1000 });