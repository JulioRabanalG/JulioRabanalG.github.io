(function() {

    var flag = 0;
    document.getElementById("btn").onclick = function() {

        var pokeballImg = document.getElementById("icon01");

        if (flag == 0) {
            pokeballImg.src = "/JulioRabanalG.github.io/imagenes/pokebola2.jpg";
            flag = 1;
        } else {
            pokeballImg.src = " /JulioRabanalG.github.io/imagenes/pokebola1.jpg";
            flag = 0;
        }

    }

}());