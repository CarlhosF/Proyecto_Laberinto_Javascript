window.onload=function(){

    var posX=0;
    var posY=0
    
    var body=document.getElementsByTagName("body");
    var textT= document.getElementById("texto");
    var submit=document.getElementById("aceptar");
    var campo=document.getElementById("campo");
    var volver=document.getElementById("volver");
    var hijos=campo.children[0];
    hijos.children[posY].children[posX].setAttribute("class","avatar");
    
    submit.onclick=Lectura;
    volver.onclick=Volver;
    function Lectura()
    {
        
        var codigo=textT.value;
        codigo=codigo.replace(/\n|\r/g, "");
        codigo=codigo.replace(" ", "");
        var subcodigo=codigo.split(";");
        subcodigo.forEach(function(elemento){
           var lec=elemento.split("(");
           var comando=lec[0];
           var num=lec[1];
           num=parseInt(num.slice(0,-1));

           if(comando=='abajo'){
            
            if(num){
                for(var i=0;i<num;i++){
                    var inspec=Abajo(num);
                    if(inspec==1 || inspec==2){
                        break;
                    }
                }
            }
        }
        if(comando=='arriba'){
            
            if(num){
                for(var i=0;i<num;i++){
                    var inspec=Arriba(num);
                    if(inspec==1 || inspec==2){
                        break;
                    }
                }
            }
        }
        if(comando=='derecha'){
            
            if(num){
                for(var i=0;i<num;i++){
                    var inspec=Derecha(num);
                    if(inspec==1 || inspec==2){
                        break;
                    }
                }
            }
        }
        if(comando=='izquierda'){
            
            if(num){
                for(var i=0;i<num;i++){
                    var inspec=Izquierda(num);
                    if(inspec==1 || inspec==2){
                        break;
                    }
                }
            }
        }
        });
    }

    function Volver(){
        location.replace("../../index.html");
    }

    function Abajo()
    {
        if( hijos.children[posY+1].children[posX].className != "obstaculo")
        {   
            hijos.children[posY].children[posX].setAttribute("class","camino");
            hijos.children[posY+1].children[posX].setAttribute("class","avatar");
            posY=posY+1;

            if(hijos.children[posY].children[posX] == meta){
                alert('has ganado');
                document.location.reload();
                Volver();
                return 1;
            }
        
        }else{
            
            
            document.location.reload();
            alert('has perdido, vuelve a intentarlo');
            return 2;
        
        }
    }

    function Arriba()
    {
        if( hijos.children[posY-1].children[posX].className != "obstaculo")
        {
            hijos.children[posY].children[posX].setAttribute("class","camino");
            hijos.children[posY-1].children[posX].setAttribute("class","avatar");
            posY=posY-1;
            if(hijos.children[posY].children[posX] == meta){
                alert('has ganado');
                document.location.reload();
                Volver();
                return 1;
            }
        }else{
            document.location.reload();
            alert('has perdido, vuelve a intentarlo');
            return 2;
        }
       
    }
    function Derecha()
    {
        if( hijos.children[posY].children[posX+1].className != "obstaculo")
        {      
            hijos.children[posY].children[posX].setAttribute("class","camino");
            hijos.children[posY].children[posX+1].setAttribute("class","avatar");
            posX=posX+1;
            if(hijos.children[posY].children[posX] == meta){
                alert('has ganado');
                document.location.reload();
                Volver();
                return 1;
            }
        }else{
            document.location.reload();
            alert('has perdido, vuelve a intentarlo');
            return 2;
        }
       
    }
    function Izquierda()
    {
        if( hijos.children[posY].children[posX-1].className != "obstaculo")
        {       hijos.children[posY].children[posX].setAttribute("class","camino");
                hijos.children[posY].children[posX-1].setAttribute("class","avatar");
                posX=posX-1;
                if(hijos.children[posY].children[posX] == meta){
                    alert('has ganado');
                    Volver();
                    document.location.reload();
                    return 1;
                }
        }else{
            document.location.reload();
            alert('has perdido, vuelve a intentarlo');
            return 2;
        }
               
    }

}