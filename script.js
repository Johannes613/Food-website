let toggleIcon = document.getElementById('toggle-icon');
let isLight = true;

toggleIcon.onclick = changeTheme;

function changeTheme(){
    if(isLight){
        // document.body.className = 'dark-theme';
        // document.body.classList.toggle("light-theme")
        document.body.classList.replace('light-theme','dark-theme')
        toggleIcon.src = 'Food-website-images/sun.png'
        isLight = false;
    }
    else{
        // document.body.className = '';
        document.body.classList.replace('dark-theme','light-theme')
        toggleIcon.src = 'Food-website-images/moon.png'
        isLight = true;

    }

}

