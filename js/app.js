// const carre = document.getElementById('carre');
// const carrebleu = document.getElementById('carrebleu')
// const Paragraph = document.getElementById('Paragraph')
// const ParagraphCache = document.getElementById('ParagraphCache')
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
// const label = document.getElementById('label')
// const plus = document.getElementById('plus');
// const moin = document.getElementById('moin');
// const reset = document.getElementById('reset');

// function passerEnNoir() {
//     label.style.color = 'black';
// }
// function passerEnOrange() {
//     label.style.color = 'orange';
// }
// function ChangeColor(color) {
//     label.style.color = color;
// }
// function ChangeFontSize(size) {
//     label.style.fontSize = (24 - Math.abs(size) * 2) + "px"
// }
// function ChangeBorder(border) {
//     if (counter % 2 === 0) {
//         label.style.border = "solid black 1px"
//     } else {
//         label.style.border = "none"
//     }
// }
// let counter = 0;
// let maximume = 5;
// let minimume = -10;

// plus.addEventListener('click', () => {
//     if (counter === minimume) {
//         moin.disabled = false;
//     }
//     if (counter < maximume) {
//         counter++;
//         label.textContent = counter;
//         ChangeFontSize(counter);
//         ChangeBorder(label);
//         if (counter === 0) {
//             ChangeColor('red');
//             ChangeFontSize('20px')
//         } else if (counter === 1 || counter === -1) {
//             ChangeColor('orange');
//         } else {
//             passerEnNoir();
//         }
//         if (counter !== 0) {
//             ChangeFontSize('18px')
//         }
//     }
//     if (counter === maximume) {
//         plus.disabled = true;
//     }
// })

// moin.addEventListener('click', () => {
//     if (counter === maximume) {
//         plus.disabled = false;
//     }
//     if (counter > minimume) {
//         counter--;
//         label.textContent = counter;
//         ChangeFontSize(counter);
//         ChangeBorder(counter);
//         if (counter === 0) {
//             ChangeColor('red');
//             ChangeFontSize('20px')
//         } else if (counter === 1 || counter === -1) {
//             ChangeColor('orange');
//         } else {
//             passerEnNoir();
//         }
//         if (counter !== 0) {
//             ChangeFontSize('18px')
//         }
//         if (counter === minimume) {
//             moin.disabled = true;
//         }
//     }
// })

// reset.addEventListener('click', () => {
//     if (label !== 0) {
//         label.textContent = counter = 0;
//     }
//     if (counter == 0) {
//         label.style.color = 'red';
//     }
// })

let prenom = "Maxime"
let age = 24
let message;

function fabriquerMessage() {
    console.log("je fabrique le message")
}
function afficherFinDeTraitement() {
    console.log("j'ai fini de fabrique le message")
}
function afficherLeNombreDeLettres(longueur) {
    console.log(longueur);
    if (longueur > 30) {
        console.log("Ah le message est long")
    }
}
function afficherDeuxiemeLettre(deuxieme) {
    console.log(message[1]);
}
if (age >= 21) {
    fabriquerMessage();
    message = ("vous etes majeur partout (normalement) et vous avez ");
    afficherLeNombreDeLettres(message.length);
    afficherDeuxiemeLettre();
    afficherFinDeTraitement();
} else if (age >= 18) {
    fabriquerMessage();
    message = ("vous etes majeur en france mais pas au Etat Unis");
    afficherLeNombreDeLettres(message.length);
    afficherDeuxiemeLettre();
    afficherFinDeTraitement();
} else {
    fabriquerMessage();
    message = ("vous etes mineur");
    afficherLeNombreDeLettres(message.length);
    afficherDeuxiemeLettre();
    afficherFinDeTraitement();
}

console.log("Bonjour " + prenom + " tu as " + age + " ans " + message + " et vous etes née en 2007");