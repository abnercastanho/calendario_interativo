function clorirDia(){ //pega o valor do campo dia
    let days = document.getElementById('days').
    ariaValueMax;

    //pega o valor do campo de cor
    let color = document.getElementById('color').
    value;

    //pega os elementos da tabela calendario
    let calendar = document.getElementById('calendar')

    //ver se o campo de dia foi preenchido
    if('days'){
        alert('Favor informar o DIA');
    } else if ((days > 0) && (days < 31)){
        //se o numero de dias está no internvalo 
        //aplicara a cor na celula de calendario 
        let td = calendar.getElementsByTagName
        ('td') [parseInt(days)];
        td.style.backgroundColor = color;
    } else{
        alert("Favor informar um dia do calendario");
    }
    
    //Guarda a celula da tebela
    let elementos = document.querySelectorAll('td');

    //declara e inicializa os contadores
    let contadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorRoxo = 0;

    //loop para verificar o estilo de cada celula e contar quantas tem cor 
    for(let i = 0; i < elementos.length; i++){
        // Obtem o estilo computado do elemento atual
        var estilo = window.getComputedStyle(elementos[i]);

        // Obtem a cor de fundo atual da celula
        var corEstilo = estilo.backgroundColor;

        //verifica a cor e incrementa contador correspondente
        if (corEstilo === "rgb(173, 216, 230)" || corEstilo === "lightblue"){
            contadorAzul++;
        } else if(corEstilo === "rgb(152, 215, 152)" || corEstilo === "palegreen"){
            contadorVerde++;
        } else if(corEstilo === "rgb(255, 182, 193)" || corEstilo === "lightpink"){
            contadorRosa++; 
        } else if(corEstilo === "rgb(106 , 90, 205)" || corEstilo === "slateblue"){
            contadorRoxo++;
        } 
    }

}