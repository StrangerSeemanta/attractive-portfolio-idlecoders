const menu = document.querySelector('.humberg');
menu.addEventListener('click',handleDrawer)
function handleDrawer(){
    menu.classList.toggle('open')
    document.querySelector('.sidebar-container').classList.toggle('show')
    
}

const links = document.querySelectorAll('li');
links.forEach((link)=>{
    link.addEventListener('click',function(){
        handleDrawer()
    })
})
const progressBars = document.querySelectorAll('.progress');
progressBars.forEach((progress)=>{
    const percentage = progress.getAttribute('data-progress');
    progress.setAttribute('style',`width:${percentage}`)
})