/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_html__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_html__);
__webpack_require__(1);


var link1 = document.querySelector('#assoc_link');
var link2 = document.querySelector('#programme_link');
var link3 = document.querySelector('#offre_link');
var link4 = document.querySelector('#partenaires_link');
var link5 = document.querySelector('#agenda_link');
var link6 = document.querySelector('#contact_link');
var div1 = document.querySelector('#mission');
var div2 = document.querySelector('#programme');
var div3 = document.querySelector('#offres');
var div4 = document.querySelector('#agenda');
var div5 = document.querySelector('#partenaires');
var div6 = document.querySelector('#contact');

link1.addEventListener("click", function () {
    window.scroll({
        top: div1.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
});

link1.addEventListener("click", function () {
    window.scroll({
        top: div1.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
});

link2.addEventListener("click", function () {
    window.scroll({
        top: div2.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
});

link3.addEventListener("click", function () {
    window.scroll({
        top: div3.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
});

link4.addEventListener("click", function () {
    window.scroll({
        top: div4.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
});

link5.addEventListener("click", function () {
    window.scroll({
        top: div5.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
});

link6.addEventListener("click", function () {
    window.scroll({
        top: div6.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\"\r\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <link href=\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,600\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" href=\"styles.css\">\r\n    <title>Document</title>\r\n</head>\r\n<body>\r\n\r\n<header>\r\n    <div id=\"header_overlay\">\r\n        <nav>\r\n            <div id=\"nav_bg\">\r\n                <h3 id=\"logo_mobile\">\r\n                    laken <br> Découverte\r\n                </h3>\r\n                <ul id=\"menu\">\r\n                    <li id=\"assoc_link\">L'association</li>\r\n                    <li id=\"programme_link\">Programme</li>\r\n                    <li id=\"offre_link\">Offres</li>\r\n                    <li id=\"logo\"><h2>Laeken <br> Découverte</h2></li>\r\n                    <li id=\"partenaires_link\">Partenaires</li>\r\n                    <li id=\"agenda_link\">Agenda</li>\r\n                    <li id=\"contact_link\">Contact</li>\r\n                </ul>\r\n            </div>\r\n        </nav>\r\n        <div id=\"content\">\r\n            <h1>Découvrez la commune de Laeken</h1>\r\n            <p>L’association « Laeken Découverte », créée en 2000, se donne pour objectif de faire découvrir à ses\r\n                habitants et à tout visiteur l’extraordinaire diversité et richesse du patrimoine présent sur le\r\n                territoire de l’ancienne commune de Laeken.</p>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</header>\r\n\r\n<div id=\"mission\">\r\n    <h2 class=\"title\">L'association</h2>\r\n    <p>Ce patrimoine justifie une visite à plus d’un titre. De l’Atomium aux Serres royales, en passant par le\r\n        familistère Godin, l’hôpital Brugmann, des parcs et espaces verts en nombre et les Palais du Heysel,\r\n        c’est une diversité de lieux, de bâtiments, d’anecdotes et de styles architecturaux qui illustrent toute\r\n        l’histoire\r\n        locale, régionale, nationale, sociale, industrielle et économique. Une telle concentration de patrimoine est\r\n        unique en Belgique.\r\n        Nos visites, menées de main de maître par une équipe de guides compétents et motivés, vous dévoileront les\r\n        secrets les mieux gardés de Laeken. Alors, n’hésitez plus, venez nous suivre !</p>\r\n</div>\r\n\r\n<div id=\"programme\">\r\n    <div class=\"bg\">\r\n        <h2 class=\"title\">Programme 2017</h2>\r\n        <div class=\"content\">\r\n            <div class=\"item\">\r\n                <div class=\"ctn-img\">\r\n                    <img src=\"http://www.architecture-hospitaliere.fr/wp-content/uploads/2013/10/CHU-Brugmann.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"text\">\r\n                    <h3>Aux bons soins du Dr Horta</h3>\r\n                    <p>L'hôpital Brugmann et la Fondation Reine Elisabeth</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"item\">\r\n                <div class=\"ctn-img\">\r\n                    <img src=\"http://www.laekendecouverte.be/sites/www.laekendecouverte.be/IMG/jpg/fresque_de_wand_018.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"text\">\r\n                    <h3>Aux confins de Laeken</h3>\r\n                    <p>À la découverte du quartier De Wand</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"item\">\r\n                <div class=\"ctn-img\">\r\n                    <img src=\"https://www.cehibrux.be/images/siParc_Leopold.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"text\">\r\n                    <h3>Le Roi Jardinier</h3>\r\n                    <p>Les parcs et jardins privés de Léopold II</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"item\">\r\n                <div class=\"ctn-img\">\r\n                    <img src=\"http://horsdutemps.h.o.pic.centerblog.net/laeken-domaine-royal.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"text\">\r\n                    <h3>Spécial Serres</h3>\r\n                    <p>Le Domaine royal de Laeken</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"item\">\r\n                <div class=\"ctn-img\">\r\n                    <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Cimeti%C3%A8re_de_Laeken_01.JPG/260px-Cimeti%C3%A8re_de_Laeken_01.JPG\" alt=\"\">\r\n                </div>\r\n                <div class=\"text\">\r\n                    <h3>Une nécropole romantique</h3>\r\n                    <p>Le cimetière de Laeken, ses deux églises et la Crypte royale.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"item\">\r\n                <div class=\"ctn-img\">\r\n                    <img src=\"http://www.rue89strasbourg.com/wp-content/uploads/2013/09/130915_EES_Image_02-514x259.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"text\">\r\n                    <h3>Le chemin des écoliers</h3>\r\n                    <p>De l'école communale à l'Ecole européenne</p>\r\n                </div>\r\n            </div>\r\n            <button>Voir Tout Le Programme</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"offres\">\r\n    <h2 class=\"title\">Offres Pour Groupes</h2>\r\n    <div class=\"content\">\r\n        <h3>Vous êtes un groupe ou un particulier qui désirez une visite à la carte</h3>\r\n        <p>\r\n            Toutes nos visites sont disponibles à la carte, au prix de 120 € la visite, en semaine ou le week-end. Tarif\r\n            pour 25 personnes maximum par guide, sous réserve de disponibilité des guides et de l’accès éventuel au\r\n            bâtiment souhaité. Nous pouvons aussi vous faire un parcours sur mesure, en fonction de vos souhaits.</p>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div id=\"agenda\">\r\n    <div id=\"ctn_title\">\r\n        <h2 class=\"title\">Agenda</h2>\r\n    </div>\r\n    <div class=\"content\">\r\n        <div class=\"item\">\r\n            <h3>Novembre</h3>\r\n            <ul>\r\n                <li><span class=\"lieu\">Expo DinoWorld </span> 22 novembre 2017</li>\r\n                <li><span class=\"lieu\">Exposition. Panorama </span> 23 novembre 2017</li>\r\n                <li><span class=\"lieu\">Exposition. Baudelaire </span> 24 novembre 2017</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"item\">\r\n            <h3>Decembre</h3>\r\n            <ul>\r\n                <li><span class=\"lieu\">Visite Atomium </span> 09 Decembre 2017</li>\r\n                <li><span class=\"lieu\">Palais Royale</span> 15 Decembre 2017</li>\r\n                <li><span class=\"lieu\">Exposition Laeken</span> 20 Decembre 2017</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"item\">\r\n            <h3>Janvier</h3>\r\n            <ul>\r\n                <li><span class=\"lieu\">Visite Cimtière</span> 22 novembre 2017</li>\r\n                <li><span class=\"lieu\">Parc de Laeken </span> 23 novembre 2017</li>\r\n                <li><span class=\"lieu\">Bruxelles expo</span> 24 novembre 2017</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"partenaires\">\r\n    <h2 class=\"title\">Partenaires</h2>\r\n    <div class=\"content\">\r\n        <div class=\"img_ctn\"><img src=\"img/logos/Atomium.png\" alt=\"\"></div>\r\n        <div class=\"img_ctn\"><img src=\"img/logos/brosella_500.jpg\" alt=\"\"></div>\r\n        <div class=\"img_ctn\"><img src=\"img/logos/bruzz.png\" alt=\"\"></div>\r\n        <div class=\"img_ctn\"><img src=\"img/logos/logomdcbxlnord.gif\" alt=\"\"></div>\r\n        <div class=\"img_ctn\"><img src=\"img/logos/bx1.png\" alt=\"\"></div>\r\n        <div class=\"img_ctn\"><img src=\"img/logos/ieb.gif\" alt=\"\"></div>\r\n        <div class=\"img_ctn\"><img src=\"img/logos/picol.png\" alt=\"\"></div>\r\n        <div class=\"img_ctn\"><img src=\"img/logos/visitbrussels.png\" alt=\"\"></div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"contact\">\r\n    <h2 class=\"title\">Contact</h2>\r\n    <div class=\"content\">\r\n        <div class=\"text\">\r\n            Envoyez nous votre message, nous le traiterons dans les meilleurs délais.\r\n            Vous pouvez également nous contacter par téléphone pendant les heures de bureau du lundi au vendredi.\r\n        </div>\r\n        <div class=\"infos\">\r\n            <div class=\"infosKey\">\r\n                <ul>\r\n                    <li>Email</li>\r\n                    <li>Tel</li>\r\n                    <li>Adresse</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"infosValue\">\r\n                <ul>\r\n                    <li><span>laeken.decouverte@gmail.com</span></li>\r\n                    <li><span>0479/39.77.15</span></li>\r\n                    <li><span>rue du Champ de l’église 2, 1020 Laeken</span></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<script src=\"./bundle.js\"></script>\r\n</body>\r\n</html>"

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map