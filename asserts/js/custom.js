const userIconOption = document.getElementById("userIcon__option")
const backdrop = document.getElementById("backdrop")
const userIcon  = document.getElementById("userIcon")

const header = document.getElementById("header")

const notification = document.getElementById("notification")
const panel = document.getElementById("panel")



userIcon.addEventListener('click', function(e){
  // userIconOption.classList.toggle('show')

  e.stopPropagation()

  if(userIconOption.classList.contains('hide')){
    backdrop.classList.remove('hide')
    backdrop.classList.add('show')

    userIconOption.classList.remove('hide')
    userIconOption.classList.add('show')

    // if panel shown / it hide
    panel.classList.add('hide')
    panel.classList.remove('show')

  } else{
    backdrop.classList.remove('show')
    userIconOption.classList.add('hide')
    backdrop.classList.add('hide')

    // if panel shown / it hide
    panel.classList.add('hide')
    panel.classList.remove('show')
  }
})

backdrop.addEventListener('click', function(e){

  if(backdrop.classList.contains('show')){
    userIconOption.classList.add('hide')
    panel.classList.add('hide')
    panel.classList.remove('show')

    backdrop.classList.add('hide')
  }

})



// Notification Toggle

notification.addEventListener('click', function(e){

  e.stopPropagation()

  if(panel.classList.contains('hide')){

    backdrop.classList.remove('hide')
    backdrop.classList.add('show')
    userIconOption.classList.remove('show')
    userIconOption.classList.add('hide')

    panel.classList.remove('hide')
    panel.classList.add('show')
  }

  else {
    backdrop.classList.remove('show')
    backdrop.classList.add('hide')
  
    panel.classList.add('hide')
    panel.classList.remove('show')
  }

})


