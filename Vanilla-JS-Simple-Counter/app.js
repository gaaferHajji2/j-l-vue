(() => {

    let count = document.querySelector('#count');

    let add = document.querySelector('#add');

    let sub = document.querySelector('#sub');

    add.addEventListener('click', () => {

        let t1 = parseInt(count.innerHTML) + 1;

        console.log('t1 is: ' , t1)

        count.innerHTML = t1;

    });

    sub.addEventListener('click', () => {

        let t1 = parseInt(count.innerHTML) - 1;

        count.innerHTML = t1;

    });

})();