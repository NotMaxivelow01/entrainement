// const carre = document.getElementById('carre');
// const carrebleu = document.getElementById('carrebleu')
const Paragraph = document.getElementById('Paragraph')
const ParagraphCache = document.getElementById('ParagraphCache')
// carre.addEventListener('click');
// function sayhello() {
//     console.log("hello")
// }

// carre.addEventListener('click', () => {
//     console.log("je suis rouge")

// })
// carre.addEventListener('mouseenter', () => {
//     console.log("je suis entré dans rouge")
// })
// carre.addEventListener('mouseleave', () => {
//     console.log("je suis sortie de rouge")
// })

// carrebleu.addEventListener('click', () => {
//     console.log('je suis bleu')
// })
// carrebleu.addEventListener('mouseenter', () => {
//     console.log('je suis entré dans le bleu')
// })
// carrebleu.addEventListener('mouseleave', () => {
//     console.log('je suis sortie du bleu')
// })

// // const Paragraph = document.getElementById('Paragraph')

// // Paragraph.addEventListener('click', () => {
// //     console.log(Paragraph.innerText )
// // })

// Paragraph.addEventListener('click', () => {
//     if (getComputedStyle(ParagraphCache).display != 'none') {
//         ParagraphCache.style.display = 'none'
//     } else {
//         ParagraphCache.style.display = 'block'
//     }
// })

// ParagraphCache.addEventListener('click', () => {
//     if (getComputedStyle(Paragraph).visibility != 'visible') {
//         Paragraph.style.visibility = 'visible'
//     } else {
//         Paragraph.style.visibility = 'hidden'
//     }
// }) 



const label = document.getElementById('label')
const plus = document.getElementById('plus');
const moin = document.getElementById('moin');
const reset = document.getElementById('reset');

function passerEnNoir () {
    label.style.color = 'black';
}

let counter = 0;
let maximume = 30;
let minimume = -10;

plus.addEventListener('click', () => {
    if (counter === minimume) {
        moin.disabled = false;
    }
    if (counter < maximume) {
        counter++;
        label.textContent = counter;
        if (counter === 0) {
            label.style.color = 'red';
        } else if (counter === 1 || counter === -1) {
            label.style.color = 'orange';
        }else {
            passerEnNoir();
        }
    }
    if (counter === maximume) {
        plus.disabled = true;
    }
})

moin.addEventListener('click', () => {
    if (counter === maximume) {
        plus.disabled = false;
    }
    if (counter > minimume) {
        counter--;
        label.textContent = counter;
        if (counter === 0) {
            label.style.color = 'red';
        } else if (counter === 1 || counter === -1){
            label.style.color = 'orange';
        }else {
            passerEnNoir();
        }
        if (counter === minimume) {
            moin.disabled = true;
        }
    }
})

reset.addEventListener('click', () => {
    if (label !== 0) {
        label.textContent = counter = 0;
    }
    if (counter == 0) {
        label.style.color = 'red';
    }
})














const seg = document.getElementById('seg')