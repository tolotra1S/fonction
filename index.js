
var button = document.querySelector('#btn');
var reponse = document.querySelector('.reponse');
y = button.addEventListener('click', function (){
    document.getElementById("btn").onclick = document.getElementById("a").value;
    var nombrako_a = document.getElementById("a").value;
    var nombrako_b = document.getElementById("b").value;
    var nombrako_c = document.getElementById("c").value;

    console.log(nombrako_a)
    console.log(nombrako_b)
    console.log(nombrako_c)
    a = nombrako_a
    b = nombrako_b
    c = nombrako_c
    delta=(b*b)-4*(a*c);
    racineDelta = Math.sqrt(delta);
    if(delta>0){
        x1 = ((-1*b)-(racineDelta))/(2*a)
        x2 = ((-1*b)+(racineDelta))/(2*a)
        console.log(x1 + "," + x2)
        reponse.innerHTML = 
        reponse.innerHTML = "<br/>"+"Δ = b² - 4ac" + "<br/>" 
                            + "Δ =" +b+ "*" + b + " -4(" +a +"*"+c +")" + 
                            "<br/>"+ "Δ ="+ delta + 
                            "<br/>" +"la Δ>0 , alors l'équation "+a+"x² +"+b+"x +"+c+"=0 admet deux solutions distinctes" + 
                            "<br/>"+ "x'=(-b-√Δ)/2a"+
                            "<br/>"+" et x''=(-b+√Δ)/2a"+
                            "<br/>"+ "x'=(-"+b+" - "+racineDelta+")/(2* "+a+")"+
                            "<br/>"+ "x''=(-"+b+" + "+racineDelta+")/(2* "+a+")"+
                            "<br/>"+ "La solution est " + "x'=" + x1 + ", x''= " + x2;
        
        }
    if(delta==0){
        x1= (-1*b)/(2*a)
        x2= (-1*b)/(2*a)
        console.log(x1 + "," + x2)
        reponse.innerHTML = "<br/>"+"Δ = b² - 4ac" + "<br/>" 
                            + "Δ =" +b+ "*" + b + " -4(" +a +"*"+c +")" + 
                            "<br/>"+ "Δ ="+ delta + 
                            "<br/>" +"la Δ=0 , alors l'équation "+a+"x² +"+b+"x +"+c+"=0 admet une solution unique" + 
                            "<br/>"+ "x=-b/2a"+
                            "<br/>"+ "x=-"+b+"(/2* "+a+" )"+
                            "<br/>"+ "La solution est " + "x= " + x1 ;

    }
    if(delta<0){
        console.log("Math error")
        reponse.innerHTML = "<br/>"+"Δ = b² - 4ac" + "<br/>" +
                            "Δ =" +b+ "*" + b + " -4(" +a +"*"+c +")" + 
                            "<br/>"+ "Δ = "+ delta + 
                            "<br/>"+"y a pas de solution";
    }

}
)