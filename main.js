const LinksSocialMidia = {
  github: 'tiagonevestec',
  twitter: 'tiagosingle',
  youtube: 'exodocultural',
  facebook: 'exodoculturaloficial',
  instagram: 'exodoculturaloficial'        
}

function changeSocialMediaLinks() {
  for (let li of SocialLinks.children){
    const social = li.getAttribute('class')
    
    li.children[0].href = `https://${social}.com/${LinksSocialMidia[social]}`
  }        
}

changeSocialMediaLinks()

function GetGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMidia.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    UserName.textContent = data.name
    UserBio.textContent = data.bio
    UserLink.href = data.html_url
    UserImage.src = data.avatar_url
    UserNickName.textContent = data.login

  })

}

GetGitHubProfileInfos()