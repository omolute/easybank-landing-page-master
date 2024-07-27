const hambugger = document.querySelector('.hambugger');
const navigation =  document.querySelector('.mob_nav');

hambugger.onclick =()=>{
    if(navigation.style.display == 'block'){
        navigation.style.display =  'none'
        hambugger.src = './images/icon-hamburger.svg'
    }
    else{
        navigation.style.display = 'block'
        hambugger.src = './images/icon-close.svg'
    }
}