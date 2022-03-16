// link: https://docs.google.com/document/d/1n_FboXM_rDxpZGoIQObSeOT_KopTrBBq26xKmfIdNbg/edit# //

let edad=21;
 
if(edad<0)
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
else
if(edad<18)
    console.log("No puede pasar");
else
if(edad<21)
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
else
    console.log("Puede pasar al bar y tomar alcohol. Felicitaciones alcanzaste la mayoria de edad y estas viejo");
 
 if(edad%2!=0 && edad>0)
     console.log("¿Sabías que tu edad es impar?");

     // Ejercicio II //

     function totalAPagar(vehiculo,litrosConsumidos){
        let total;
     
        switch (vehiculo){
     
            case "coche":
                total=86;
                break;
            case "moto":
                total=70;
                break;
            case "autobus":
                total=55;
                break;
        }
     
        if(litrosConsumidos>=0 && litrosConsumidos<=25)
            total=total+50;
        else
        if(litrosConsumidos>25)
            total=total+25;
     
        console.log("El total a pagar es de $"+total);
     
    }
     
    totalAPagar("coche",15);
    

    // Ejercicio 3 // 

    function localDeSandwiches(sandwichBase,panDeseado, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
 
        let total=0;
     
        switch (sandwichBase){
     
            case "pollo":
                total=150;
                break;
            
            case "carne":
                total=200;
                break;
     
            case "veggie":
                total=100;
                break;
     
     
        }
     
        switch (panDeseado){
     
            case "blanco":
                total=total+50;
                break;
            
            case "negro":
                total+=60;
                break;
     
            case "s/gluten":
                total+=75;
                break;
     
     
        }
     
        if(queso===true)
            total+=20;
        
        if(tomate===true)
            total+=15;
        
        if(lechuga===true)
            total+=10;
     
        if(cebolla===true)
            total+=15;
     
        if(mayonesa===true)
            total+=5;
     
        if(mostaza===true)
            total+=5;
     
        console.log("El cliente debera pagar $"+total);
     
    }
     
    localDeSandwiches("carne","blanco",true,true,true,false,true,false);
    