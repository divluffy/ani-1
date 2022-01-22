const paths = document.querySelectorAll('.username svg path')
const animates = document.querySelectorAll('.animate')
const btns = document.querySelectorAll('.btns button')
const lineo = document.querySelectorAll('.lineo')


for (let i = 0; i < paths.length; i++) {
    paths[i].style.strokeDasharray = paths[i].getTotalLength()
    paths[i].style.strokeDashoffset = paths[i].getTotalLength()
}




observer = new IntersectionObserver(boxs => {
    boxs.forEach((box) => {
        let { intersectionRatio } = box
        if (intersectionRatio > 0) {
            if (box.target.dataset.name === 'img') {
                box.target.style.animation = `imgTbTb 1.4s forwards ease-out`
                lineo[0].style.animation = `lineo 1.3s ease-in-out forwards calc(0.7s * var(--i))`
                lineo[1].style.animation = `lineo 1.3s ease-in-out forwards calc(0.7s * var(--i))`
            }

            if (box.target.dataset.name === 'info') {
                box.target.style.animation = `boxAnimat 1s ease-in-out forwards 0.2s`
                btns[0].style.animation = `btnToTop 2s ease-in-out`
                btns[1].style.animation = `btnToTop 2s ease-in-out`
                document.documentElement.style.setProperty('--animat', 'lineH2 0.6s ease-in-out forwards 1.1s');
            }

        }
    })
})




animates.forEach(el => observer.observe(el))
