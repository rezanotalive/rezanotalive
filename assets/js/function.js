const pictures = [{
        url: '/assets/img/1.jpg'
    },
    {
        url: '/assets/img/3.jpg'
    },
    {
        url: '/assets/img/2.jpg'
    },
    {
        url: '/assets/img/4.jpg'
    },
    {
        url: '/assets/img/1.jpg'
    },
    {
        url: '/assets/img/3.jpg'
    },
    {
        url: '/assets/img/2.jpg'
    },
    {
        url: '/assets/img/4.jpg'
    },
];

let gallery = '';
let numberPict = 1;

for (let pict of pictures) {
    gallery += '<div class="col-md-3 mb-4"><img src="' + pict.url + '" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="'+pict.url+'" class="w-100 shadow-sm rounded"></div>\n';
    numberPict += 1;
}

document.getElementById('gallery').innerHTML = gallery;

const exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal',(event) => {
    let button = event.relatedTarget;
    let img = button.getAttribute('data-bs-whatever');

    let modalBody = exampleModal.querySelector('.modal-body img');
    modalBody.src = img;
});