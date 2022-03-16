// ejercicio ONE //

pupino = [ 50, 118, 46 ];
pocoyo = [ 145, 118, 32];

    function encontrarGanador (participante1, participante2) {
        let victoriaParticipanteA = 0
        let victoriaParticipanteB = 0
        for (let i = 0; i < participante1.length; i++) {
             if (participante1[i] > participante2[i]) {
            victoriaParticipanteA += 1;
        } else if (participante2[i] > participante1[i]) {
            victoriaParticipanteB += 1;
        }
    } 
    if ( victoriaParticipanteA > victoriaParticipanteB) {
        return 'El ganador es el participante A , en este caso pupino con '+victoriaParticipanteA+' votos!'
    } 
    else if (victoriaParticipanteA < victoriaParticipanteB) {
        return 'El ganador es el participante B , en este caso pocoyo con '+victoriaParticipanteB+' votos!'
    }
        else {
        return 'ESTO ES UN EMPATE!'
        }
    }

console.log(encontrarGanador(pupino,pocoyo));

// ejercicio TWO //

function digitalHouse (a, b) {

    for (let i = 1; i <= 10; i++) {

        if (i%a == 0) {
        console.log ('Digital')
        }
        else if(i&b == 0) {
            console.log('House')
        }
        else {
            console.log (i);
    }
    
}
}
console.log (digitalHouse(2,2));