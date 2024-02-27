const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const VOL= document.getElementById('vol');
const SUP1 =document.getElementById('sup1');
const SUP2 =document.getElementById('sup2');


CALCULAR.addEventListener('click', () => {
    ERROR.style.display = 'none'
    const DATO = document.getElementById('peso').valueAsNumber
    if (DATO <= 0){
        ERROR.style.display = 'block';
        VOL.style.display = 'none';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        SUP1.style.display='none';
        SUP2.style.display='none';

    }else {
        if (DATO > 30){
            VOL.style.display = 'none';
            FLU.style.display = 'none';
            MAN.style.display = 'none';
            ERROR.style.display = 'none'
            let sup_cor= sup_corporal(DATO);
            let res1= Math.round((sup_cor*1500));
            let res2= Math.round((sup_cor*2000));
            SUP1.innerHTML = 'Superficie corporal*1500 ' + res1;
            SUP2.innerHTML = 'Superficie corporal*2000 ' + res2;
            SUP1.style.display='block';
            SUP2.style.display='block';

        }else {
            ERROR.style.display = 'none'
            let volumen= Math.round(Holliday_segar(DATO));
            let flujo= Math.round((volumen/24));
            let mantenimiento= Math.round(flujo*1.5);
            VOL.innerHTML = volumen + 'cc';
            FLU.innerHTML = flujo + ' cc/hr';
            MAN.innerHTML= 'm + m/2 ' + mantenimiento + 'cc/hr';
            VOL.style.display = 'block';
            FLU.style.display = 'block';
            MAN.style.display='block';
            SUP1.style.display='none';
            SUP2.style.display='none';
        }
    }
})


function Holliday_segar(peso){
    let volDiario;
    if (peso<= 10){
        volDiario= (peso*100);
    }else if (peso <= 20){
        volDiario= (((peso-10)*50) + (10*100));
    }else{
        volDiario= (((peso-20)*20) + (10*50) + (10*100));
    }
    return volDiario;
}



function sup_corporal(peso){
    return (((peso*4) +7)/(peso+90));
}


