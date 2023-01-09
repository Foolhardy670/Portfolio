const open = document.querySelector('.open');
const close = document.querySelector('.close');
const toggle = document.getElementById('Toggle');
//const toggle_2 = document.getElementById('toggle-2');

const light = document.querySelector('.light');
const night = document.querySelector('.night');

const body = document.querySelector('body');

night.addEventListener('click', ()=>{
    light.style.display = 'block'
    night.style.display = 'none'

    if (body.classList == 'light_mode'){
        body.classList.add('dark-mode')
        body.classList.remove('light_mode')
    }


})

light.addEventListener('click', ()=>{
    light.style.display = 'none'
    night.style.display = 'block'

    if (body.classList == 'dark-mode'){
        body.classList.add('light_mode')
        body.classList.remove('dark-mode')
    }

})

open.addEventListener('click',()=>{
    
    open.style.display = 'none'
    close.style.display = 'block'
    toggle.classList.add('nav-items-shrink')
    toggle.classList.remove('nav-items')

    let avaible_class_list = toggle.classList;

    if (avaible_class_list == 'nav-items-shrink'){

        toggle.classList.add('nav-items')
        toggle.classList.remove('nav-items-shrink')
        document.querySelector('.nav-items').style.height = '500px'
    } 
    
     
})

close.addEventListener('click', ()=>{
    
    toggle.classList.add('nav-items')

    const class_list = toggle.classList;

    if (class_list == 'nav-items'){
        toggle.classList.remove('nav-items')
        toggle.classList.add('nav-items-shrink')
        document.querySelector('.nav-items-shrink').style.height = '0'

    } 
  
    open.style.display = 'block'
    close.style.display = 'none'
})



const animation_1 = document.querySelector('.transition')
const animation_2 = document.querySelector('.transition_2')

const time_out_1 =  () => {

    animation_1.style.display = 'block';

}

const time_out_2 = () => {
    animation_2.style.display = 'block';

}

const animation_Timeout_1 = setTimeout(time_out_1, 2000)
const animation_Timeout_2 = setTimeout(time_out_2, 4000)


/*
 document.getElementById('dark_light').addEventListener('click', function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 })

 */


    
