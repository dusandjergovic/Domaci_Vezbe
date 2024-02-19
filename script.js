let img = document.querySelectorAll('.slika');
for(slika of img) {

    slika.addEventListener('click', (e) => {
        e.target.classList.toggle('zoom');
    })

}