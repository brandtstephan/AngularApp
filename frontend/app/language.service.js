(function() {
	"use strict";

	angular
		.module("app")
		.factory("languageService", function() {

			const data = {
				"en": {
					info: "Im an Informatic student at the University of applied sciences in Trier at the end of my studies. I have been programming for almost 5 years and i'm interested on game development, as in web development and 3D web application development.",
					infoTitle: "Information",
					infoDescription:"Here you can find personal informations about me.",
					/////////////////
					personalInfo:"Personal Information",
					adressTitle:"Adress",
					adressContent:"Kochstrasse 5, 54290 Trier",
					birthTitle:"Birth date",
					birthContent:"12.07.1993 in Caracas, Venezuela",
					telefonTitle:"Phone",
					telefonContent:"+49 17631185631",
					emailTitle:"Email",
					emailContent:"stephan.alexander.brandt@gmail.com",
					nationalityTitle:"Nationality",
					nationalityContent:"German",
					/////////////////
					formationTitle:"Formation",
					jetztTitle:"2014-Jetzt",
					jetztContent:"Formation at the university of applied sciences Trier. Branch of Study: Informatic. Focus: Digital Media and Games",
					kollegeTitle:"2013-2014",
					kollegeContent:"International Collegue at the university of applied sciences in Kaiserslautern. Focus: Sciences",
					sprachTitle:"2011-2012",
					sprachContent:"Language school. Focus: German as foreign language",
					schoolTitle:"2000-2011",
					schoolContent:"Primary and secundary school at the Champagnat school in Caracas, Venezuela",
					/////////////////
					detailsTitle:"Technical Details",
					programmTitle:"Programming Languages",
					programmContent:"Java, C++, C#, JavaScript, HTML, CSS, Python",
					toolsTitle:"Tools",
					toolsContent:"Android Studios, Unity3D, Node.js and npm, Angular.js, D3.js, P5.js , Repository, Adobe XD, Bash for Linux, variaty of IDEs",
					/////////////////
					workTitle:"Work experience",
					currentTitle:"2016-2017",
					currentContent:"Icecream dealer Christis Trier: Street seller",
					lastTitle:"2012-2014",
					lastContent:"Coffee Nr. 15 in Kaiserslautern: Waiter and Barkeeper",
					/////////////////
					abilityTitle:"Abilities",
					webTitle:"Web Development",
					webContent:"Client with LESS to CSS; backend with Express, Node.js and npm; modular development with help from Common.js and RESTful API; development of web applications with the help of Angular.js for the Frontend and Express Sockets in the Backend.",
					googleTitle:"Google Chrome Extension",
					googleContent:"Development of Google Chrome Extensions",
					androidTitle:"Android development",
					androidContent:"Development of applications for Android with help of Android Studios",
					gameTitle:"Game development",
					gameContent:"Development of games and applications with help of Unity3D",
					threadingTitle:"Multithreading",
					threadingContent:"Good understanding of the synchronization of processes",
					////////////////
					languageTitle:"Linguistical Abilities",
					spanishTitle:"Spanish",
					spanishContent:"Mother tongue",
					englishTitle:"English",
					englishContent:"C1 Level",
					germanTitle:"German",
					germanContent:"C1 Level",
					///////////////
					langTitle: "Languages",
					langSubtitle: "Programming languages",
					projectsTitle: "Projects"
				},
				"de": {
					info: "Ich bin ein Informatik Student an der Hochschule Trier fast am Ende meines Studiums. Ich programmiere schon seit fast 5 Jahre und interesiere mich über die Entwicklung von Spiele, sowie Web-Entwicklung und 3D basierte Web-Anwendungen.",
					infoTitle: "Information",
					infoDescription:"Hier finden Sie übliche Informationen über meine Person.",
					/////////////////
					personalInfo:"Persönliche Information",
					adressTitle:"Adresse",
					adressContent:"Kochstrasse 5, 54290 Trier",
					birthTitle:"Geburtsdatum",
					birthContent:"12.07.1993 in Caracas, Venezuela",
					telefonTitle:"Telefon",
					telefonContent:"+49 17631185631",
					emailTitle:"Email",
					emailContent:"stephan.alexander.brandt@gmail.com",
					nationalityTitle:"Staatsangehörigkeit",
					nationalityContent:"Deutsch",
					/////////////////
					formationTitle:"Bildung",
					jetztTitle:"2014-Jetzt",
					jetztContent:"Hochschulebildung an der Hochschule Trier Fachrichtung: Informatik. Schwerpunkt: Digitale Medien und Spiele",
					kollegeTitle:"2013-2014",
					kollegeContent:"Internationale Studienkolleg an der Hochschule Kaiserslautern Schwerpunkt: Naturwissenschaft",
					sprachTitle:"2011-2012",
					sprachContent:"Sprachschule Schwerpunkt: Deutsch als Fremdsprache",
					schoolTitle:"2000-2011",
					schoolContent:"Primar-und Sekundarschule an der Champagnat Schule in Caracas, Venezuela",
					/////////////////
					detailsTitle:"Technische Details",
					programmTitle:"Programmiere Sprachen",
					programmContent:"Java, C++, C#, JavaScript, HTML, CSS, Python",
					toolsTitle:"Werkzeuge",
					toolsContent:"Android Studios, Unity3D, Node.js und npm, Angular.js, D3.js, P5.js , Repository, Adobe XD, Bash für Linux, Verschidene IDEs",
					/////////////////
					workTitle:"Arbeitserfahrung",
					currentTitle:"2016-2017",
					currentContent:"Eiskaffe Christis Trier: Verkäufer",
					lastTitle:"2012-2014",
					lastContent:"Kaffe Nr. 15 Kaiserslautern: Kellner und Barkeeper",
					/////////////////
					abilityTitle:"Fähigkeiten",
					webTitle:"Webentwicklung",
					webContent:"Client mit LESS nach CSS; backend mit Express, Node.js und npm; modulare Entwicklung mit Hilfe von Common.js und RESTful API; entwicklung von Web-Anwendung mit Hilfe von Angular.js für die Frontend und Express Sockets in der Backend.",
					googleTitle:"Google Chrome Erweiterungen",
					googleContent:"Entwicklung von Google Chrome Erweiterungen",
					androidTitle:"Entwicklung mobile Anwendungen",
					androidContent:"Entwicklung von Anwendungen für Android mit Hilfe von Android Studios",
					gameTitle:"Spielentwicklung",
					gameContent:"Entwicklung von Spiele und Andwendungen mit Hilfe von Unity3D",
					threadingTitle:"Multithreading",
					threadingContent:"Gute Kenntnisse der Parallelisierug von Prozessen",
					////////////////
					languageTitle:"Sprachliche Fähigkeiten",
					spanishTitle:"Spanisch",
					spanishContent:"Muttersprache",
					englishTitle:"Englisch",
					englishContent:"C1 Niveau",
					germanTitle:"Deutsch",
					germanContent:"C1 Niveau",
					///////////////
					langTitle: "Sprachen",
					langSubtitle: "Programmiersprachen",
					projectsTitle: "Projekte"
				},
				"es": {
					info: "Soy un estudiante de informatica en la universidad de ciencias aplicadas en Trier y estoy al final de mi carrera. He programado ya por casi 5 años y estoy interesado en el desarrollo de juegos, asi como el desarrollo web y desarrollo de aplicaciones web 3D.",
					infoTitle: "Información",
					infoDescription:"Aquí encontraras informaciones sobre mi persona.",
					/////////////////
					personalInfo:"Información personal",
					adressTitle:"Dirección",
					adressContent:"Kochstrasse 5, 54290 Trier",
					birthTitle:"Fecha de nacimiento",
					birthContent:"12.07.1993 en Caracas, Venezuela",
					telefonTitle:"Teléfono",
					telefonContent:"+49 17631185631",
					emailTitle:"Email",
					emailContent:"stephan.alexander.brandt@gmail.com",
					nationalityTitle:"Nacionalidad",
					nationalityContent:"Alemán",
					/////////////////
					formationTitle:"Formación",
					jetztTitle:"2014-Ahora",
					jetztContent:"Formación universitaria en la universidad de ciencias aplicadas de Trier. Carrera: Informática. Foco: Media digital y juegos",
					kollegeTitle:"2013-2014",
					kollegeContent:"Collegue internacional en la universidad de ciencias aplicadas de Kaiserslautern. Foco: Ciencias",
					sprachTitle:"2011-2012",
					sprachContent:"Escuela de idiomas. Foco: Alemán como idioma extranjero",
					schoolTitle:"2000-2011",
					schoolContent:"Escuala primaria y secundaria en el colegio Champagnat en Caracas, Venezuela",
					/////////////////
					detailsTitle:"Detalles técnicos",
					programmTitle:"Lenguajas de programación",
					programmContent:"Java, C++, C#, JavaScript, HTML, CSS, Python",
					toolsTitle:"Herramientas",
					toolsContent:"Android Studios, Unity3D, Node.js y npm, Angular.js, D3.js, P5.js , Repository, Adobe XD, Bash para Linux, Diferentes IDEs",
					/////////////////
					workTitle:"Experiencia laboral",
					currentTitle:"2016-2017",
					currentContent:"Heladeria Christis Trier: Vendedor",
					lastTitle:"2012-2014",
					lastContent:"Café Nr. 15 en Kaiserslautern: Mesero y Barista",
					/////////////////
					abilityTitle:"Habilidades",
					webTitle:"Desarrollo web",
					webContent:"Cliente con LESS hacia CSS; backend con Express, Node.js und npm; desarrollo modular con ayuda de Common.js y RESTful API; desarrollo de aplicaciones web con ayuda de Angular.js para el Frontend y Express Sockets en el Backend.",
					googleTitle:"Extención para Google Chrome",
					googleContent:"Desarrollo de extenciones para Google Chrome ",
					androidTitle:"Android desarrollo para Android",
					androidContent:"Desarrollo de aplicaciones para Android con ayuda de Android Studios",
					gameTitle:"Desarrollo de juegos",
					gameContent:"Desarrollo de juegos y aplicaciones con ayuda de Unity3D",
					threadingTitle:"Multithreading",
					threadingContent:"Buen entendimiento a nivel teorético de paralelización de procesos",
					////////////////
					languageTitle:"Habilidades lingüisticas",
					spanishTitle:"Español",
					spanishContent:"Lengua materna",
					englishTitle:"Inglés",
					englishContent:"Nivel C1",
					germanTitle:"Alenmán",
					germanContent:"Nivel C1",
					///////////////
					langTitle: "Lenguajes",
					langSubtitle: "Lenguajes de programación",
					projectsTitle: "Proyectos"
				}
			}

			const service = { 
				getDataByLanguage: getDataByLanguage
			};

			return service;

			//////////

			function getDataByLanguage(lang) {
				let dataByLenguage = null;
				//
				if (typeof lang === "number") {
					switch(lang) {
					    case 0: dataByLenguage = data["en"]; break;
					    case 1: dataByLenguage = data["de"]; break;
					    case 2: dataByLenguage = data["es"]; break;
					    default:
					}
				} else 
				if (typeof lang === "string") {
					dataByLenguage = data[lang.toLowerCase()];
				}
				//
				return dataByLenguage;
			}

		});

})();