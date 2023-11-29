
/* FUNZIONE CHE GENERA LA GRIGLIA */
function creazioneGriglia(num){
    /* GENERO UN DIV */
    const elem_griglia = document.createElement(`div`);
    /* GLI ASSOCIO LA CLASS SQUARE */
    elem_griglia.classList.add(`square`);
    /* LO NUMERO */
    elem_griglia.innerText = num;
  

    
    let livello = document.getElementById(`difficulty`);
    let difficolta = parseInt(livello.value);
    

    let num_cells;
    let side_cells;

    switch(difficolta){
        case 1:
            num_cells = 100;
            side_cells = 10;
            break;
        case 2:
            num_cells = 81;
            side_cells = 9;
            break;
        case 3:
            num_cells = 49;
            side_cells = 7
            break;
            
    }
  


/* VARIABILE BOTTONE CHE ANDRA A GENERARE LA GRIGLIA E LE CELLE */
    let button = document.getElementById(`button`);
        /* BOTTONE CON EVENTO CLICK */
        button.addEventListener(`click`, function(){
            /* PRENDIAMO LA GRIGLIA DAL DOM */
            let griglia = document.getElementById(`grid`);
            griglia.innerHTML = ""
                /* CICLO FOR PER CREARE I VARI QUADRATI */
                for(let i=1; i<=num_cells; i++){
                    /* RICHIAMO LA FUNZIONE creazioneGriglia */
                    let square = creazioneGriglia(i);
                    
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
creazioneGriglia(button)
    




