const toggleContent = document.querySelectorAll('.toggle-content');
const hiddenContent = document.querySelectorAll('.hidden-content')
const pointer = document.querySelectorAll('.pointer')


// function revealContent() {
//     if (hiddenContent.classList.contains('toggle-content')) {
//         hiddenContent.classList.remove('toggle-content')
//     } else {
//         hiddenContent.classList.add('toggle-content');
//     }
//     console.log('Something is happening!')
// }

// function hover() {
//     pointer.style.cursor = "pointer";
//     console.log('HOVER');
// }

// pointer.addEventListener('click', revealContent);
// pointer.addEventListener('mouseover', hover);

// pointer.forEach(function (pointer, i) {
//     pointer.addEventListener('click', function () {
//         if (hiddenContent[i].classList.contains('toggle-content')) {
//             hiddenContent[i].classList.remove('toggle-content')
//         } else {
//             hiddenContent[i].classList.add('toggle-content');
//         }
//         console.log('Something is happening!')
//     });
//     pointer.addEventListener('mouseover', function () {
//         pointer.style.cursor = "pointer";
//         console.log('HOVER');
//     });
// });

pointer.forEach(function (pointer, i) {
    pointer.addEventListener('click', function () {
        if (hiddenContent[i]) {
            if (hiddenContent[i].classList.contains('toggle-content')) {
                hiddenContent[i].classList.remove('toggle-content')
            } else {
                hiddenContent[i].classList.add('toggle-content');
            }
            console.log('Something is happening!')
        }
    });
    pointer.addEventListener('mouseover', function () {
        pointer.style.cursor = "pointer";
        console.log('HOVER');
    });
});
