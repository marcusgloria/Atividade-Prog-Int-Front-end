

function paginar(id) {
    var pagina = document.getElementById(id);
    if(pagina.id == "pag1"){
        document.getElementById('pag2').classList.remove('active');
        document.getElementById('pag3').classList.remove('active');
        document.getElementById('bp1').classList.add('active');
        document.getElementById('bp2').classList.remove('active');
        document.getElementById('bp3').classList.remove('active');
    }
    else if(pagina.id == "pag2"){
        document.getElementById('pag1').classList.remove('active');
        document.getElementById('pag3').classList.remove('active');
        document.getElementById('bp2').classList.add('active');
        document.getElementById('bp1').classList.remove('active');
        document.getElementById('bp3').classList.remove('active');
    }
    else if(pagina.id == "pag3"){
        document.getElementById('pag2').classList.remove('active');
        document.getElementById('pag1').classList.remove('active');
        document.getElementById('bp3').classList.add('active');
        document.getElementById('bp2').classList.remove('active');
        document.getElementById('bp1').classList.remove('active');
    }
    pagina.classList.add('active');


}