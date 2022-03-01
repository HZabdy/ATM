function agregarBilletes(cantidad, valor){
    disponibleATM.push(new Billete(cantidad, valor));
}

function imprimirBilletesDados(){
    for (const i of retirable) {

        if(i.valor == 500){
            document.write("De Quinientos pesos: " + i.cantidad);
        }
        else if(i.valor == 200){
            document.write("De Doscientos pesos: " + i.cantidad);
        }
        else if(i.valor == 100){
            document.write("De Cien pesos: " + i.cantidad);
        }
        else if(i.valor == 50){
            document.write("De Cincuenta pesos: " + i.cantidad);
        }
        else if(i.valor == 20){
            document.write("De Veinte pesos: " + i.cantidad);
        }
        
        document.write("<hr>");

    }
}

function entregarDinero(){

    var retiroInput = document.getElementById("retiro");
    var retiro = parseInt(retiroInput.value);

    if(retiro >= 20 && retiro <= 8000){ 

        if(retiro%10 == 0){

            //Algoritmo principal para calcular los billetes a entregar.
            for (const i of disponibleATM) {  

                retiroEntreValor = retiro/i.valor;

                if(retiroEntreValor >= 1){
                    division = Math.floor(retiroEntreValor);
                    //console.log(division, retiro);

                    if(division <= i.cantidad && division != 0){
                        retirable.push(new Billete(division, i.valor));
                        retiro = retiro -  (division * i.valor);
                        i.cantidad = i.cantidad - division;
                    }
                    else if(division > i.cantidad && division !=0){
                        retirable.push(new Billete(i.cantidad, i.valor));
                        retiro = retiro - (i.cantidad * i.valor);
                        i.cantidad = 0;   
                    }
                }
            }
            
            if(retiro == 10){

                var ultimo;

                for (const i in retirable) {
                var ultimo = i;
                }

                var ultimoBillete = retirable[ultimo];

                if(ultimoBillete.valor == 20 && ultimoBillete.cantidad >= 1){
                    retirable[ultimo].cantidad = retirable[ultimo].cantidad - 1;
                    disponibleATM[4].cantidad = disponibleATM[4].cantidad +1;
                    retiro = retiro + 20;
                    ultimo1 = ultimo - 1;
                    ultimoBillete1 = retirable[ultimo1];

                    if(ultimoBillete1.valor == 50){
                        retirable[ultimo1].cantidad = retirable[ultimo1].cantidad - 1;
                        disponibleATM[3].cantidad = disponibleATM[3].cantidad +1;
                        retiro = retiro + 50;
                        if(retiro == 80){
                            retirable[ultimo].cantidad = retirable[ultimo].cantidad + 4;
                            retiro = 0;
                        }
                    }

                    if(ultimoBillete1.valor == 100){
                        retirable[ultimo1].cantidad = retirable[ultimo1].cantidad - 1;
                        disponibleATM[2].cantidad = disponibleATM[2].cantidad +1;
                        retiro = retiro + 100;
                        if(retiro == 130 && disponibleATM[3].cantidad >= 1){
                            disponibleATM[3].cantidad = disponibleATM[3].cantidad - 1;
                            retirable.push(new Billete(1, 50));
                            retiro = retiro - 50;
                            if(disponibleATM[4].cantidad >= 4){
                                disponibleATM[4].cantidad = disponibleATM[4].cantidad - 4;
                                retirable[ultimo].cantidad = retirable[ultimo].cantidad + 4;
                                retiro = 0;
                            }
                        }
                    }

                    if(ultimoBillete1.valor == 200){
                        disponibleATM[1].cantidad = disponibleATM[1].cantidad + 1;
                        retirable[ultimo1].cantidad = retirable[ultimo1].cantidad -1;
                        retiro = retiro + 200;
                        if(disponibleATM[2].cantidad >= 1){
                            disponibleATM[2].cantidad = disponibleATM[2].cantidad - 1;
                            retirable.push(new Billete(1, 100));
                            retiro = retiro - 100;
                            if(retiro == 130 && disponibleATM[3].cantidad >= 1){
                                disponibleATM[3].cantidad = disponibleATM[3].cantidad - 1;
                                retirable.push(new Billete(1, 50));
                                retiro = retiro - 50;
                                if(disponibleATM[4].cantidad >= 4){
                                    disponibleATM[4].cantidad = disponibleATM[4].cantidad - 4;
                                    retirable[ultimo].cantidad = retirable[ultimo].cantidad + 4;
                                    retiro = 0
                                }
                            }
                        }
                    }

                    if(ultimoBillete1.valor == 500){
                        disponibleATM[0].cantidad = disponibleATM[0].cantidad + 1;
                        retirable[ultimo1].cantidad = retirable[ultimo1].cantidad -1;
                        retiro = retiro + 500;
                        if(disponibleATM[1].cantidad >= 2){
                            disponibleATM[1].cantidad = disponibleATM[1].cantidad -2;
                            retirable.push(new Billete(2, 200));
                            retiro = retiro - 400;
                            if(retiro == 130 && disponibleATM[3].cantidad >= 1){
                                disponibleATM[3].cantidad = disponibleATM[3].cantidad - 1;
                                retirable.push(new Billete(1, 50));
                                retiro = retiro - 50;
                                if(disponibleATM[4].cantidad >= 4){
                                    disponibleATM[4].cantidad = disponibleATM[4].cantidad - 4;
                                    retirable[ultimo].cantidad = retirable[ultimo].cantidad + 4;
                                    retiro = 0;
                                }
                            }
                        }
                    }
                }

                if(ultimoBillete.valor == 50 && ultimoBillete.cantidad >= 1){

                    retirable[ultimo].cantidad = retirable[ultimo].cantidad - 1;
                    disponibleATM[3].cantidad = disponibleATM[3].cantidad + 1;
                    retiro = retiro + retirable[ultimo].valor;

                    if(disponibleATM[4].cantidad >= 3){
                        disponibleATM[4].cantidad = disponibleATM[4].cantidad - 3;
                        retirable.push(new Billete(3, disponibleATM[4].valor));
                        retiro = retiro - (3 * disponibleATM[4].valor);
                    }
                    else{
                        r.innerHTML = "Lo siento compa, no me quedan billetes de $20";
                    }

                }

                if(ultimoBillete.valor == 100 && ultimoBillete.cantidad >= 1){

                    retirable[ultimo].cantidad = retirable[ultimo].cantidad - 1;
                    disponibleATM[2].cantidad = disponibleATM[2].cantidad + 1;
                    retiro = retiro + retirable[ultimo].valor;

                    if(disponibleATM[3].cantidad >= 1){
                        disponibleATM[3].cantidad = disponibleATM[3].cantidad - 1;
                        retirable.push(new Billete(1, 50));
                        retiro = retiro - 50;
                    }
                    else{
                        r.innerHTML = "Lo siento compa, no me quedan billetes de $50";
                    }

                    if(disponibleATM[4].cantidad >= 3){
                        disponibleATM[4].cantidad = disponibleATM[4].cantidad -3;
                        retirable.push(new Billete(3, 20));
                        retiro = retiro - 60;
                    }
                    else{
                        r.innerHTML = "Lo siento compa, no me quedan billetes de $20";
                    }
                }

                if(ultimoBillete.valor == 200 && ultimoBillete.cantidad >= 1){

                    retirable[ultimo].cantidad = retirable[ultimo].cantidad - 1;
                    disponibleATM[1].cantidad = disponibleATM[1].cantidad + 1;
                    retiro = retiro + retirable[ultimo].valor;

                    if(disponibleATM[2].cantidad >= 1){
                        disponibleATM[2].cantidad = disponibleATM[2].cantidad - 1;
                        retirable.push(new Billete(1, 100));
                        retiro = retiro - 100;
                    }
                    else{
                        r.innerHTML = "Lo siento compa, no me quedan billetes de $100";
                    }

                    if(disponibleATM[3].cantidad >= 1){
                        disponibleATM[3].cantidad = disponibleATM[3].cantidad -1;
                        retirable.push(new Billete(1, 50));
                        retiro = retiro - 50;
                    }
                    else{
                        r.innerHTML = "Lo siento compa, no me quedan billetes de $50";
                    }

                    if(disponibleATM[4].cantidad >= 3){
                        disponibleATM[4].cantidad = disponibleATM[4].cantidad -3;
                        retirable.push(new Billete(3, 20));
                        retiro = retiro - 60;
                    }
                    else{
                        r.innerHTML = "Lo siento compa, no me quedan billetes de $20";
                    }
                }

                if(ultimoBillete.valor == 500 && ultimoBillete.cantidad >= 1){

                    retirable[ultimo].cantidad = retirable[ultimo].cantidad - 1;
                    disponibleATM[0].cantidad = disponibleATM[0].cantidad + 1;
                    retiro = retiro + retirable[ultimo].valor;

                    if(disponibleATM[1].cantidad >= 2){
                        disponibleATM[1].cantidad = disponibleATM[1].cantidad - 2;
                        retirable.push(new Billete(2, 200));
                        retiro = retiro - 400;
                    }
                    else{
                        r.innerHTML = "Lo siento compa, no me quedan billetes de $200";
                    }

                    if(disponibleATM[3].cantidad >= 1){
                        disponibleATM[3].cantidad = disponibleATM[3].cantidad - 1;
                        retirable.push(new Billete(1, 50));
                        retiro = retiro - 50;
                    }
                    else{
                        r.innerHTML = "Lo siento compa, no me quedan billetes de $50";
                    }

                    if(disponibleATM[4].cantidad >= 3){
                        disponibleATM[4].cantidad = disponibleATM[4].cantidad - 3;
                        retirable.push(new Billete(3, 20));
                        retiro = retiro -60;
                    }
                    else{
                        r.innerHTML = "Lo siento compa, no me quedan billetes de $20";
                    }


                }

                console.log("datos actualizados " + retiro, retirable);
            }

            if(retiro >= 10){
                r.innerHTML = "Lo siento krnal, se me acabó la feria";
            }
            else if(retiro == 0){

                r.innerHTML = r.innerHTML + "<strong>Tu retiro en Billetes</strong> <br>";

                for (const i of retirable) {

                    if(i.cantidad > 0){
                        r.innerHTML = r.innerHTML + "Billetes de $" + i.valor + ": " + i.cantidad + "<br>";

                        var numeroDeCopias = i.cantidad
                        document.body.appendChild(i.imagen);
                    }   
                }
                r.innerHTML = r.innerHTML + "<hr>";
            }
        }
        else{
            r.innerHTML = "No puedo darte monedas, akazo no bez?";
        }
    }
    else if(retiro < 20){
        r.innerHTML = "Retiro mínimo: $20 MXN"
    }
    else if(retiro > 8000){
        r.innerHTML = "Retiro Máximo: $8,000 MXN";
    }
}


function entregarDinero2(lastX, retiroX){

    //Quitar el último billete dado.
    if(retiroX == 10 || retiroX == 30){

        console.log("entra a la funcion");
        var ultimo;

        for (const i in retirable) {
            var ultimo = i;
        }

        console.log("último índice " + ultimo);

        if(lastX.valor == 50 && lastX.cantidad >= 1){
            
            for (const i of retirable) {

                if(i.valor == 50 && i.valor >= 1){
                    console.log("ENTRA");
                    i.cantidad = i.cantidad -1;
                    disponibleATM[3].cantidad = disponibleATM[3].cantidad + 1
                    retiroX = retiroX + 50;
                }
            }

            console.log("En retirable hay + ", retirable);
            retiro + 50;

            if(disponibleATM[4].cantidad >= 4){
                division = retiro / disponibleATM[4].valor;
                retirable.push(new Billete(division, disponibleATM[4].valor))
                disponibleATM[4].cantidad - division;
            }
        }
    }
}



var a;

        /*var division = retiro / disponibleATM[4].valor


        if(disponibleATM[4].cantidad >= division){

            for (const i of retirable) {
                if(i.valor == 20){
                    i.cantidad = i.cantidad + division;
                    disponibleATM[4].cantidad - division;
                    retiro - disponibleATM[4].valor * division;
                }
                else{
                    retirable.push(new Billete(division, 20))
                    disponibleATM[4].cantidad - division;
                    retiro - disponibleATM[4].valor * division
                }
            }
           
        }
        else if(disponibleATM[4].cantidad < division){
            document.write("Lo siento, no me quedan billetes de $20 :(");
        }
    }

    /*console.log(retiro);

    if(retiro != 0){
        document.write("Lo siento, no te puedo entregar tal cantidad. <br> Dispongo sólo de billetes de $20, $50, $100, $200 y $500.");
    }
    else{
        for (const e of retirable) {
            document.write(e.cantidad + " Billetes de $" + e.valor + " entregados. <br>");
        }
    }  */
