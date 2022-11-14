const carre = document.getElementById('carre');
const carrebleu = document.getElementById('carrebleu')
const Paragraph = document.getElementById('Paragraph')
const ParagraphCache = document.getElementById('ParagraphCache')
// carre.addEventListener('click');
// function sayhello() {
//     console.log("hello")
// }

carre.addEventListener('click', () => {
    console.log("je suis rouge")

})
carre.addEventListener('mouseenter', () => {
    console.log("je suis entré dans rouge")
})
carre.addEventListener('mouseleave', () => {
    console.log("je suis sortie de rouge")
})





carrebleu.addEventListener('click', () => {
    console.log('je suis bleu')
})
carrebleu.addEventListener('mouseenter', () => {
    console.log('je suis entré dans le bleu')
})
carrebleu.addEventListener('mouseleave', () => {
    console.log('je suis sortie du bleu')
})

// const Paragraph = document.getElementById('Paragraph')

// Paragraph.addEventListener('click', () => {
//     console.log(Paragraph.innerText )
// })

Paragraph.addEventListener('click', () => {
    if (getComputedStyle(ParagraphCache).display != 'none') {
        ParagraphCache.style.display = 'none'
    } else {
        ParagraphCache.style.display = 'block'
    }
})

ParagraphCache.addEventListener('click', () => {
    if (getComputedStyle(Paragraph).visibility != 'visible') {
        Paragraph.style.visibility = 'visible'
    } else {
        Paragraph.style.visibility = 'hidden'
    }
})

const compteur = document.getElementById('compteur');
const plus = document.getElementById('plus');
const moin = document.getElementById('moin');

