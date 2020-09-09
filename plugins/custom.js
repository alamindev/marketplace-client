let bar__click = document.querySelector('.bars--click');
let side_bar = document.querySelector('.sidebar--click');
let parent = document.querySelector('.main--parent');
if(bar__click){
    bar__click.addEventListener('click', clickShowNav);

    function clickShowNav(){
        side_bar.classList.toggle('showing')
        parent.classList.toggle('showing')
    }
}
