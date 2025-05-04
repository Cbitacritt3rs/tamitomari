function heartsgenerator() {
    let mari = Math.floor(Math.random() * 9) + 1;
    let mari2 = Math.floor(Math.random() * 5) + 1;

    document.getElementsByClassName('gatitonormal')[0].classList.add('desaparecer');
    document.getElementsByClassName('gatitogolpe')[0].classList.add('aparecer'); 

    function crearCorazon() {
        let corazon = null;

        switch (mari) {
            case 1:
                corazon = document.getElementsByClassName('teadoro')[0];
                break;
            case 2:
                corazon = document.getElementsByClassName('kieromucho')[0];
                break;
            case 3:
                corazon = document.getElementsByClassName('perfeccion')[0];
                break;
            case 4:
                corazon = document.getElementsByClassName('amosalesita')[0];
                break;
            case 5:
                if (mari2 == 1) {
                corazon = document.getElementsByClassName('maltratame')[0];
                } else {
                    corazon = document.getElementsByClassName('kieromucho')[0];
                }
                break;
            case 6:
                corazon = document.getElementsByClassName('hablarcontigo')[0];
                break;
            case 7:
                corazon = document.getElementsByClassName('graciaspor')[0];
                break;
            case 8:
                corazon = document.getElementsByClassName('siemprecontigo')[0];
                break;
            case 9:
                corazon = document.getElementsByClassName('voz')[0];
                break;
        }

        if (!corazon.classList.contains('animacioncora')) { 
            let fremitop = Math.floor(Math.random() * 220) + 1 -100;
            let fremileft = Math.floor(Math.random() * 210) + 1 + 450;
            corazon.style.top = `${fremitop}px`; 
            corazon.style.left = `${fremileft}px`; 

            corazon.classList.add('aparecer');
            corazon.classList.add('animacioncora');

            setTimeout(() => {
                corazon.classList.remove('aparecer');
                corazon.classList.remove('animacioncora');
            }, 2250);
        }
    }
    
    crearCorazon();

    setTimeout(() => {
        document.getElementsByClassName('gatitonormal')[0].classList.remove('desaparecer');
        document.getElementsByClassName('gatitogolpe')[0].classList.remove('aparecer');
    }, 500);
}

function aparecermensajito() {
    document.getElementsByClassName('galaxiaroja')[0].classList.add('aparecerrojo1')
    setTimeout(() => {
        document.getElementsByClassName('mensajitorojo')[0].classList.add('aparecerrojo2')
        document.getElementsByClassName('galaxiacora')[0].classList.add('desvanecer')
        document.getElementsByClassName('galaxiapolvo')[0].classList.add('desvanecer')
        document.getElementsByClassName('galaxia')[0].classList.add('desvanecer')
        document.getElementsByClassName('clickea')[0].classList.add('desvanecer2')
    }, 1500);
    setTimeout(() => {
        document.getElementsByClassName('clickea')[0].classList.add('desaparecer')
    }, 3000);
    setTimeout(() => {
        document.getElementsByClassName('galaxiapolvo')[0].classList.add('desaparecer')
        document.getElementsByClassName('galaxiacora')[0].classList.add('desaparecer')
        document.getElementsByClassName('galaxia')[0].classList.add('desaparecer')
    }, 4500);
}