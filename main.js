console.log('Hello World!')

let movingMenu = document.querySelector('.moving-menu')

let menuItems = document.querySelectorAll('#menu-items')
menuItems.forEach(function(item){
    item.addEventListener('mouseenter', function(e){
        console.log('You hovered over a thing!')
        e.target.style.color = '#C30F2E'
        e.target.style.textDecoration = 'underline'
        e.target.style.fontSize = '25px'
        e.target.style.borderRadius = '3px'
        e.target.style.padding = '10px'
        e.target.style.borderLeft = 'solid gray 2px'
        e.target.style.borderRight = 'solid gray 2px'
        movingMenu.style.height = '55px'
        movingMenu.style.backgroundColor = 'lightgray'
    })

    item.addEventListener('mouseleave', function(e){
        console.log('You unhovered a thing!')
        e.target.style.color = 'gray'
        e.target.style.textDecoration = 'none'
        e.target.style.fontSize = '20px'
        movingMenu.style.height = '50px'
        movingMenu.style.backgroundColor = 'white'
        e.target.style.borderLeft = 'none'
        e.target.style.borderRight = 'none'
    })
})

let mainImages = document.querySelectorAll('.main-image')
mainImages.forEach(function(pic){
    pic.addEventListener('click', function(e){
        console.log('You\'re hovering over an image')
        e.target.style.width = '60vw'
        e.target.style.height = '60vh'
    })

    pic.addEventListener('mouseleave', function(e){
        console.log('You\'ve unhovered an image')
        e.target.style.width = '45vw'
        e.target.style.height = '45vh'
        
    })
})

let buttons = document.querySelectorAll('button')
buttons.forEach(function(button){
    button.addEventListener('mouseenter', function(e){
        e.target.style.color = '#002a54'
        e.target.style.width = '200px'
        e.target.style.height = '60px'
    })

    button.addEventListener('mouseleave', function(e){
        e.target.style.color = 'white'
        e.target.style.width = '150px'
        e.target.style.height = '40px'
    })
})