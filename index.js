// example import from a library
const hamburger = document.querySelector('.hamburger')
const linksTag = document.querySelectorAll('.links .pageLink')
const modal = document.querySelector('.bar')
const sidebar = document.querySelectorAll('#side-bar ul li')
console.log(sidebar)

// active link tag
linksTag.forEach(tab => {
    // console.log(tab)
    tab.addEventListener('click', event => {

        document.querySelector('li.pageLink.active').classList.remove('active')

        event.currentTarget.classList.add('active')
        console.log('clicked')
    })
})

// modal toggle

const toggle = () => {
    modal.addEventListener('click', event => {
        document.querySelector('.side-links').classList.toggle('show')
    })
}

toggle()

sidebar.forEach(sideLink => {
    sideLink.addEventListener('click', event => {
        console.log('click')
        document.querySelector('.side-links').classList.toggle('show')
    })
})



