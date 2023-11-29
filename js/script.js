/* FUNZIONE CHE GENERA LA GRIGLIA */
function creazioneGriglia(num){
    /* GENERO UN DIV */
    const elem_griglia = document.createElement(`div`);
    /* GLI ASSOCIO LA CLASS SQUARE */
    elem_griglia.classList.add(`square`);
    /* LO NUMERO */
    elem_griglia.innerText = num;
    /* RITORNO IL RISULTATO */
    return elem_griglia
}

/* VARIABILE BOTTONE CHE ANDRA A GENERARE LA GRIGLIA E LE CELLE */
let button = document.getElementById(`button`);

/* FUNZIONE GENERA CELLA */
function creazioneCella(){
    /* BOTTONE CON EVENTO CLICK */
    button.addEventListener(`click`, function(){
        /* PRENDIAMO LA GRIGLIA DAL DOM */
        let griglia = document.getElementById(`grid`);
        griglia.innerHTML = ""
            /* CICLO FOR PER CREARE I VARI QUADRATI */
            for(let i=0; i<100; i++){
                /* RICHIAMO LA FUNZIONE creazioneGriglia */
                let square = creazioneGriglia(i+1);
                
                /* EVENTO CAMBIO COLORE CELLA AL CLICK */
                square.addEventListener(`click`, function(){
                    this.classList.toggle(`cliccato`);
                    console.log(`Hai cliccato la cella numero ${i+1}`)
                })
                /* APPENDO LO SQUARE ALLA GRIGLIA */
                griglia.appendChild(square);
            }    
    })
}
/* RICHIAMO FUNZIONE creazioneCella */
creazioneCella(button)
    

