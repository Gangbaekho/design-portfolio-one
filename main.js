
const imageSrcList = ['./asset/phone2-1.png','./asset/phone3-1.png','./asset/phone1-1.png']
//  3-1 두번쨰로 1-1 세번쨰로 2-1 첫 번쨰로

const phoneImageElement = document.querySelector('.main-phone-image')

const circleButtonList = document.querySelectorAll('.circle-button__item')

const learnButton = document.querySelector('.specific-button')

for(let i = 0 ; i < circleButtonList.length ; i++){
    
    const circleButton = circleButtonList[i]
    circleButton.addEventListener('click',function(){
        phoneImageElement.src=imageSrcList[i]
    })     
}

const hamberger = document.querySelector('.hamberger')
const sideMenu = document.querySelector('.side-menu')
const backdrop = document.querySelector('.backdrop')

console.dir(backdrop)


hamberger.addEventListener('click',function(){
    sideMenu.style.display='block'
    backdrop.style.display='block'
})

backdrop.addEventListener('click',function(){
    sideMenu.style.display='none'
    backdrop.style.display='none'
})


