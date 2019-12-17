"use strict"

window.addEventListener('load', function () {

    // DECLARATION DES VARIABLES

    var voitureRouge = window.document.getElementById('vVoitureMoi');
    var boutonStart = document.getElementById('start');
    var fenetreDeJeu = document.getElementById('fondroute');
    var contenantRoute = document.getElementById('cadreroute');
    var bandeau = document.getElementById('barrelogos');
    var caillou = document.getElementById('rocher');
    var barriere = document.getElementById('travaux');
    var VoitureBleu1 = document.getElementById('vVoitureBleu1');
    var VoitureBleu2 = document.getElementById('vVoitureBleu2');
    var VoitureBleu3 = document.getElementById('vVoitureBleu3');
    var comp = document.getElementById('competences');
    var positionVoitureRouge = 295;
    var xRoute = 5;
    var score = 0;
    var tailleRoute = 700;
    var tailleVoiture = 125;
    var monInterval;


    // GESTION DU SCORE

    var monScore = function () {
        monInterval = setInterval(function () {
            score += 200;
            document.getElementById("score").value = score;
        }, 1500);
    };

    //--------------------------------------------------------------------------------

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    // ACTION TOUCHES DIRECTIONNELLES

    var animation = function () {

        window.onkeydown = function (event) {

            var code = event.keyCode;
            switch (code) {

                case 37:

                    if (xRoute <= positionVoitureRouge) {

                        positionVoitureRouge -= 20;

                    }
                    voitureRouge.style.left = positionVoitureRouge + "px";

                    break;

                case 39:
                    if (xRoute + tailleRoute >= positionVoitureRouge + tailleVoiture) {
                        positionVoitureRouge += 20;
                    }
                    voitureRouge.style.left = positionVoitureRouge + "px";

                    break;
            }
        };



        //AFFICHAGE LOGOS COMPETENCE TOUS LES 1000PTS 



        if (score == 1000) {
            document.getElementById("icone1").style.display = "block";
        }
        if (score == 2000) {
            document.getElementById("icone2").style.display = "block";
        }
        if (score == 3000) {
            document.getElementById("icone3").style.display = "block";
        }
        if (score == 4000) {
            document.getElementById("icone4").style.display = "block";
        }
        if (score == 5000) {
            document.getElementById("icone5").style.display = "block";
        }
        if (score == 6000) {
            document.getElementById("icone6").style.display = "block";
        }
        if (score == 7000) {
            document.getElementById("icone7").style.display = "block";
        }
        if (score == 8000) {
            document.getElementById("icone8").style.display = "block";
        }
        if (score == 10000) {
            document.getElementById("youwin").style.display = "block";

            clearInterval(monInterval);

        // OUVERTURE DU CV JUSTE APRES LE YOU WIN     

            setTimeout(function () {
                open('img/cvsebastien.jpg');

            }, 1000);
        };

        // COLLISIONS 

        var coorVoitureRouge = voitureRouge.getBoundingClientRect();
        var coorVoitureBleu1 = VoitureBleu1.getBoundingClientRect();
        var coorVoitureBleu2 = VoitureBleu2.getBoundingClientRect();
        var coorVoitureBleu3 = VoitureBleu3.getBoundingClientRect();
        var coorcaillou = caillou.getBoundingClientRect();
        var coorBarriere = barriere.getBoundingClientRect();


        if (coorVoitureRouge.x < coorVoitureBleu1.x + coorVoitureBleu1.width &&
            coorVoitureRouge.x + coorVoitureRouge.width > coorVoitureBleu1.x &&
            coorVoitureRouge.y < coorVoitureBleu1.y + coorVoitureBleu1.height &&
            coorVoitureRouge.height + coorVoitureRouge.y > coorVoitureBleu1.y ||

            coorVoitureRouge.x < coorVoitureBleu2.x + coorVoitureBleu2.width &&
            coorVoitureRouge.x + coorVoitureRouge.width > coorVoitureBleu2.x &&
            coorVoitureRouge.y < coorVoitureBleu2.y + coorVoitureBleu2.height &&
            coorVoitureRouge.height + coorVoitureRouge.y > coorVoitureBleu2.y ||

            coorVoitureRouge.x < coorVoitureBleu3.x + coorVoitureBleu3.width &&
            coorVoitureRouge.x + coorVoitureRouge.width > coorVoitureBleu3.x &&
            coorVoitureRouge.y < coorVoitureBleu3.y + coorVoitureBleu3.height &&
            coorVoitureRouge.height + coorVoitureRouge.y > coorVoitureBleu3.y ||

            coorVoitureRouge.x < coorcaillou.x + coorcaillou.width &&
            coorVoitureRouge.x + coorVoitureRouge.width > coorcaillou.x &&
            coorVoitureRouge.y < coorcaillou.y + coorcaillou.height &&
            coorVoitureRouge.height + coorVoitureRouge.y > coorcaillou.y ||

            coorVoitureRouge.x < coorBarriere.x + coorBarriere.width &&
            coorVoitureRouge.x + coorVoitureRouge.width > coorBarriere.x &&
            coorVoitureRouge.y < coorBarriere.y + coorBarriere.height &&
            coorVoitureRouge.height + coorVoitureRouge.y > coorBarriere.y


        ) {
            document.getElementById("youlose").style.display = "block";
            clearInterval(monInterval);


        }
        if (document.getElementById("youwin").style.display != "block") {
            requestAnimationFrame(animation);
        }
    }

    animation();


    //AU CLICK SUR PLAY! LANCE ANIMATION 


    boutonStart.addEventListener("click", function () {
        fenetreDeJeu.style.display = "none";
        if (fenetreDeJeu.style.display == 'none') {
            contenantRoute.style.display = 'block';
            caillou.style.display = 'block';
            barriere.style.display = 'block';
            boutonStart.style.display = 'none';
            fenetreDeJeu.style.display = 'block';
            voitureRouge.style.display = 'block';
            bandeau.style.display = 'block';
            VoitureBleu1.style.display = 'block';
            VoitureBleu2.style.display = 'block';
            VoitureBleu3.style.display = 'block';
            comp.style.display = 'block';
            monScore();
        }


    });


});

//ANIMATION ROUTE / VOITURES / ROCHER ET BARRIERE 

window.addEventListener('load', function () {

    var monImage = document.getElementById('fondroute');
    monImage.style.top = '-18040px';
    var topImage = parseInt(monImage.style.top);

    var monImageVoitureBleu1 = document.getElementById('vVoitureBleu1');
    monImageVoitureBleu1.style.top = '-600px';
    var topImageVoitureBleu1 = parseInt(monImageVoitureBleu1.style.top);

    var monImageVoitureBleu2 = document.getElementById('vVoitureBleu2');
    monImageVoitureBleu2.style.top = '-1200px';
    var topImageVoitureBleu2 = parseInt(monImageVoitureBleu2.style.top);

    var monImageVoitureBleu3 = document.getElementById('vVoitureBleu3');
    monImageVoitureBleu3.style.top = '-1800px';
    var topImageVoitureBleu3 = parseInt(monImageVoitureBleu3.style.top);

    var monImageRocher = document.getElementById('rocher');
    monImageRocher.style.top = '-900px';
    var topImageRocher = parseInt(monImageRocher.style.top);

    var monImageBarriere = document.getElementById('travaux');
    monImageBarriere.style.top = '-100px';
    var topImageBarriere = parseInt(monImageBarriere.style.top);


    var animate = function () {

        if (topImage == 0) {
            topImage = -18040;
        }
        topImage += 10;
        monImage.style.top = topImage + 'px';

        if (topImageVoitureBleu1 == 2300) {
            topImageVoitureBleu1 = -600;
        }
        topImageVoitureBleu1 += 5;
        monImageVoitureBleu1.style.top = topImageVoitureBleu1 + 'px';

        if (topImageVoitureBleu2 == 2900) {
            topImageVoitureBleu2 = -1200;
        }
        topImageVoitureBleu2 += 5;
        monImageVoitureBleu2.style.top = topImageVoitureBleu2 + 'px';

        if (topImageVoitureBleu3 == 2900) {
            topImageVoitureBleu3 = -1800;
        }
        topImageVoitureBleu3 += 5;
        monImageVoitureBleu3.style.top = topImageVoitureBleu3 + 'px';

        if (topImageRocher == 2300) {
            topImageRocher = -900;
        }
        topImageRocher += 5;
        monImageRocher.style.top = topImageRocher + 'px';

        if (topImageBarriere == 1700) {
            topImageBarriere = -100;
        }
        topImageBarriere += 5;
        monImageBarriere.style.top = topImageBarriere + 'px';

        requestAnimationFrame(animate);
    };

    animate();
});
