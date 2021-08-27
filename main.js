console.log('Hello World!')

let menueItems = document.querySelectorAll('#menu-items')
menueItems.forEach(function(item){
    item.addEventListener('mouseenter', function(e){
        console.log('You hovered over a thing!')
        e.target.style.color = '#D9CEC7'
    })

    item.addEventListener('mouseleave', function(e){
        console.log('You unhovered a thing!')
        e.target.style.color = 'black'
    })
})
