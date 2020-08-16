(() => {
    console.log('The team described in this page is totally real and not at all invented for this assignment');

    let sigils = document.querySelectorAll('.iconContainer'),
        houseImages = document.querySelector('#profileImages'),
        houseBio = document.querySelector('.teamMemberInfo'),
        houseName = document.querySelector('.teamMemberName');

    const houseInfo = [
        ["Sandro Guedes", `The brain behind this whole operation that was performed by a team composed of members that absolutely exist.
        `],
        ["Johnny", `The heart of the party, he unites the whole team with his magnificent bark. Kidding, this dog is mad and you shouldn't give him treats.
        `],
        ["Dinosaur", `There are those who insist it is nothing but an oversized chicken that lived a long time ago. They are wrong.
        `]
    ];

    function animatePicture()
    {
        houseImages.style.right = `${this.dataset.offset * 600}px`;
        houseName.textContent = `${houseInfo[this.dataset.offset][0]}`;
        houseBio.textContent = `${houseInfo[this.dataset.offset][1]}`;
    }

    sigils.forEach(sigil => sigil.addEventListener('click', animatePicture));
})();