(function() {
	"use strict";

	angular
		.module("app")
		.factory("languageService", function() {

			const data = {
				"en": {
					info: "I am a computer science student  at the Trier University of Applied Sciences and close to acquiring my Bachelor degree. I have been programming for almost five years now and my fields of interest lie in game development as well as in web development and 3D web application development.",
					infoTitle: "Information",
					infoDescription:"Below you can find some personal information about me.",
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
					formationTitle:"Education",
					jetztTitle:"since 2014",
					jetztContent:"Trier University of Applied Sciences. Bachelor of Sciences Branch of Study: Computer Sciences. Focus: Digital Media and Games",
					kollegeTitle:"2013-2014",
					kollegeContent:"International College at Kaiserslautern University of Applied Sciences. Focus: Sciences",
					sprachTitle:"2011-2012",
					sprachContent:"Language school at Kaiserslautern Volkshochschule. Focus: German as foreign language",
					schoolTitle:"2000-2011",
					schoolContent:"Primary and secondary school at Caracas Champagnat school",
					/////////////////
					detailsTitle:"Technical Skills",
					programmTitle:"Programming Languages",
					programmContent:"Java, C++, C#, JavaScript, HTML, CSS, Python",
					toolsTitle:"Tools",
					toolsContent:"Android Studios, Unity3D, Node.js and npm, Angular.js, D3.js, P5.js , Repository, Adobe XD, Bash for Linux, variaty of IDEs",
					/////////////////
					workTitle:"Work experience",
					currentTitle:"2016-2017",
					currentContent:"Christis, Trier: Waiter",
					lastTitle:"2012-2014",
					lastContent:"Cafe-Bar No. 15 in Kaiserslautern: Waiter",
					/////////////////
					abilityTitle:"Abilities",
					webTitle:"Web Development",
					webContent:"Client with LESS to CSS // Backend with Express, Node.js and npm // Modular development with help from Common.js and RESTful API // Development of web applications with the help of Angular.js for the Frontend and Express Sockets in the Backend // Electron.js for Desktop based web applications.",
					googleTitle:"Google Chrome Extension",
					googleContent:"Development of Google Chrome Extensions",
					androidTitle:"Android Development",
					androidContent:"Development of applications for Android with help of Android Studios",
					gameTitle:"Game Development",
					gameContent:"Development of games and applications with help of Unity3D",
					threadingTitle:"Multithreading",
					threadingContent:"Good understanding of the synchronization of processes",
					////////////////
					languageTitle:"Language Skills",
					spanishTitle:"Spanish",
					spanishContent:"Mother tongue",
					englishTitle:"English",
					englishContent:"CEFR: C1",
					germanTitle:"German",
					germanContent:"CEFR: C1",
					////////////////
					langTitle: "Languages",
					langSubtitle: "Programming languages",
					graphParagraph:"This graphs shows the actual level in the different programming languages, it was made with help of D3.js",
					////////////////
					projectsTitle: "Projects",
					projectSubtitle:"Below you find all the projects that I've done for university as well as my personal projects. You may also find GitHub links  with the corresponding documentation for each of the projects.",
					firstProjektTitle:"1. Occlusion Culling in Unity3D",
					firstProjektA:"The idea behind is for optimization purposes. Oclusion Culling is a well known and used technique in game development in order to efficiently create various objects without damaging the game's performance.",
					firstProjektB:"Only the objects needed will be rendered, meaning only those that are in front of the main camera. This way a lot of memory can be saved resulting in an increased performance and thus more smootly running game.",
					firstProjektC:"By testing the demo below, you could try it yourself. Alternatively you could directly look at the project at this GitHub link:",
					secondProjektTitle:"2. Rubiks Cube for the Sony PSVita",
					secondProjektA:"Here's a small game for the Sony PSVita. To make this game run you'll need the Sony API as well as a PSVita. Sadly it isn't easy to get the licences for it, but you can check the code nonetheless at this GitHub link:",
					thirdProjektTitle:"3. Web application for Trier and sorroundings",
					thirdProjektA:"A small modular Web application with RESTful API for the Backend. With the help of Leaflet (Open Source Maps) you can navigate around the region and look at the height profile of the different cities.",
					thirdProjektB:"This web application contains a couple of important APIs as well as Best-Practices. It was created modularly utilizing the concept of Common.js, the Backend uses RESTful API for structuring the server requests and Leaflet is used as an Open-Source Map display. GitHub link:",
					forthProjektTitle:"4. Google Chrome Extension: Browsing timekeeper",
					forthProjektA:"This small extention shows you how much time you've spent browsing the web. Althought it has a couple of Bugs, it functions quite well.",
					forthProjektB:"It was created utilizing Google's Developer API and Chart.js for data representation. GitHub link:",
					fifthProjektTitle:"6. Angular.js: Résumé as a web application",
					fifthProjektA:"Lastly we have this very own web application as Open-Source.",
					fifthProjektB:"It contains some technologies, that are relevant for web development today. Node Package Manager and Node.js are the basis of the server, managing the dependencies needed, while Bower manages the dependencies that the client needs. For the client I used Angular.js for the DOM-Manipulation and D3.js for the graphical representation of data. For the backend express and socket.io was utilized for sending and requesting data from the server, that is then used on the client. GitHub link:",
					volvoTitle:"5. CAD file visualization application for the Microsoft Hololens",
					volvoA:"This project was a team project for university together with Volvo Konz. We created an application to be able to visualize CAD archives for the Hololens. It was created with help with Unity3D and Vuforia. For licence reasons the code cannot be shown, but is important to know about my ability to create augmented/virtual reality applications.",
					linkOcclusion:"Unity3D Project",
					linkCube:"Rubiks Cube",
					linkMap:"Trier Map",
					linkExtension:"Timekeeping Extension",
					unityDemo:"This application wasn't originally made to be run on a browser, please wait a minute for Unity to load its components!",
					unityDemoInfo:"Controls: A S W D. Choose a desired amount of AI and activate FoV (Field of View), as well as Struct and Sphere to test the effects more accurately."
				},
				"de": {
					info: "Ich bin ein Informatikstudent an der Hochschule Trier und mittlerweile fast am Ende meines Bachelorstudiums angelangt. Ich programmiere schon seit fast fünf Jahren und interessiere mich für die Entwicklung von Spielen sowie Web-Entwicklung und 3D-basierte Web-Anwendungen.",
					infoTitle: "Information",
					infoDescription:"Auf dieser Seite finden Sie Informationen zur meiner Person.",
					/////////////////
					personalInfo:"Persönliche Informationen",
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
					jetztTitle:"seit 2014",
					jetztContent:"Hochschule Trier, Bachelor of Sciences Fachrichtung: Informatik. Schwerpunkt: Digitale Medien und Spiele",
					kollegeTitle:"2013-2014",
					kollegeContent:"Hochschule Kaiserslautern, Internationales Studienkolleg, Schwerpunkt: Naturwissenschaften",
					sprachTitle:"2011-2012",
					sprachContent:"Volkshochschule Kaiserslautern, Sprachschule, Schwerpunkt: Deutsch als Fremdsprache",
					schoolTitle:"2000-2011",
					schoolContent:"Champagnat Schule in Caracas, Venezuela Primär-und Sekundarschule",
					/////////////////
					detailsTitle:"Technische Fähigkeiten",
					programmTitle:"Programmiersprachen",
					programmContent:"Java, C++, C#, JavaScript, HTML, CSS, Python",
					toolsTitle:"Tools",
					toolsContent:"Android Studios, Unity3D, Node.js und npm, Angular.js, D3.js, P5.js , Repository, Adobe XD, Bash für Linux, Verschidene IDEs",
					/////////////////
					workTitle:"Arbeitserfahrung",
					currentTitle:"2016-2017",
					currentContent:"Christis, Trier: Servicekraft",
					lastTitle:"2012-2014",
					lastContent:"Cafe-Bar No. 15, Kaiserslautern: Servicekraft",
					/////////////////
					abilityTitle:"Fähigkeiten",
					webTitle:"Webentwicklung",
					webContent:"Client mit LESS nach CSS // Backend mit Express, Node.js und npm // Modulare Entwicklung mit Hilfe von Common.js und RESTful API // Entwicklung von Web-Anwendung mit Hilfe von Angular.js für die Frontend und Express Sockets in der Backend.",
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
					englishContent:"GER: C1",
					germanTitle:"Deutsch",
					germanContent:"GER: C1",
					///////////////
					langTitle: "Sprachen",
					langSubtitle: "Programmiersprachen",
					graphParagraph:"Dieser Graph zeigt mein aktuelles Niveau in den verschiedenen Programmieresprachen. Er wurde mithilfe von D3.js erstellt",
					//////////////
					projectsTitle: "Projekte",
					projectSubtitle:"Untenstehen sind alle die Projekte, die ich in den vergangene Jahren an der Hochschule oder aus Eigeninteresse bearbeitet habe aufgelistet. Au­ßer­dem sind alle die github links dabei mit entsprechender Dokumentation.",
					firstProjektTitle:"1. Occlusion Culling in Unity3D",
					firstProjektA:"Occlusion culling ist eine sehr bekannte und oft benutzte Technik in der Spielentwicklung, um auf effiziente Weise viele Objekte erzeugen zu können ohne die gesamte Performance des Spiels zu beschädigen.",
					firstProjektB:"Man rendert nur solche Objekte, die gerade gebraucht werden, d.h, nur solche, die sivh vor der Kamera befinden. Damit spart man Speicher, sodass das Spiel besser laufen kann.",
					firstProjektC:"Probieren Sie es mit der folgenden Demo selbst oder besuchen Sie meinen GitHub-Link:",
					secondProjektTitle:"2. Rubiks Cube für die Sony PSVita",
					secondProjektA:"Hier finden Sie ein kleines Spiel für die PSVita. Um es ausführen zu können, bedarf es einer Sony PSVita und der Installation von Sony API auf einem Rechner, Leider ist nicht einfach, eine Lizenz bekommen. Das Projekt kann dennoch unter folgendem GitHub-Link eingesehen werden:",
					thirdProjektTitle:"3. Web-Anwendungen für den Bezirk Trier und Umgebung",
					thirdProjektA:"Eine kleine modulare Web-Anwendung mit RESTful API für das Backend. Mithilfe von Leaflet (Open Source Karteanzeige) kann man durch die Region navigieren und sich deren Höhenprofil anschauen.",
					thirdProjektB:"Diese Web-Anwendung beinhaltet verschiede wichtige APIs sowie Best-Practices. Es wurde modular mithilfe von Common.js konstruiert, das Backend benutzt RESTful API für die Strukturierung von Serveranfragen und Leaflet als Open-Source Karteanzeige. Github:",
					forthProjektTitle:"4. Google Chrome Erweiterung: Zeitmessung für die Browser",
					forthProjektA:"Diese kleine Erweiterung zeigt an, wie viel Zeit ein Nutzer auf verschiedenen Websites verbracht hat. Obwohl es ein paar Bugs hat, funktioniert einwandfrei.",
					forthProjektB:"Diese Erweiterung wurde mithilfe von Google Developer API und Chart.js erstellt. Github:",
					fifthProjektTitle:"6. Angular.js: Lebenslauf als Web-Anwendung",
					fifthProjektA:"Diese Website steht auch als Open Source zu Verfügung.",
					fifthProjektB:"Dahinter stecken viele Technologien, die heutezutage von Relevanz sind. Node Package Manager und Node sind die Gründsteine des Servers und verwalten alle die Abhängigkeiten (Dependencies), während Bower die Abhängigkeiten des Client verwaltet. Für den Client habe ich Angular.js für DOM-Manipulation benutzt und D3.js für die graphische Darstellung von Daten. Im Backend wurde Express für die Server benutzt sowie Socket.io für das Abfragen und Abschicken von Daten, die der Client benutzt. Github:",
					volvoTitle:"5. CAD Visualisierungsanwendung für die Microsoft-Hololens",
					volvoA:"Dieses Projekt war ein Teamprojekt für die Hochschule zusammen mit Volvo Konz. Wir haben eine Anwendung erstellt, mit der CAD-Datein in der Hololens visualisiert werden könnte. Sie wurde mit Unity3D und Vuforia konstruiert. Aus Lizenzgründen kann der Code veröffentlicht werden, das genannte Beispiel soll aber dennoch verdeutlichen, dass ich mich bereits mit AR/VR Anwendendungen auseinandergesetzt habe.",
					linkOcclusion:"Unity3D Project",
					linkCube:"Rubiks Cube",
					linkMap:"Trier Karte",
					linkExtension:"Zeitmessung Erweiterung",
					//////////////
					unityDemo:" Diese Anwendung würde ursprünglich nicht für die Ausführung innerhalb eines Browsers gedacht, bitte Warten Sie eine Augenblick, Unity muss zuerst laden!",
					unityDemoInfo:"Steuerung: A S W D. Wählen Sie bitte eine belibige Anzahl von AI und aktivieren Sie die FoV (Field of View) sowie Struct und Sphere, um die Effekte deutlicher zu testen."
				},
				"es": {
					/////////////////Informacion general
					info: "Soy un estudiante de informatica en la universidad de ciencias aplicadas en Trier y estoy al final de mi carrera. He programado ya por casi 5 años y estoy interesado en el desarrollo de juegos, asi como el desarrollo web y desarrollo de aplicaciones web 3D.",
					infoTitle: "Información",
					infoDescription:"Aquí encontraras informaciones sobre mi persona.",
					/////////////////Informacion personal
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
					/////////////////Formacion academica
					formationTitle:"Formación Académica",
					jetztTitle:"2014-Ahora",
					jetztContent:"Formación universitaria en la universidad de ciencias aplicadas de Trier. Carrera: Informática. Foco: Media digital y juegos",
					kollegeTitle:"2013-2014",
					kollegeContent:"Collegue internacional en la universidad de ciencias aplicadas de Kaiserslautern. Foco: Ciencias",
					sprachTitle:"2011-2012",
					sprachContent:"Escuela de idiomas. Foco: Alemán como idioma extranjero",
					schoolTitle:"2000-2011",
					schoolContent:"Escuala primaria y secundaria en el colegio Champagnat en Caracas, Venezuela",
					/////////////////Detalles tecnicos
					detailsTitle:"Detalles técnicos",
					programmTitle:"Lenguajas de programación",
					programmContent:"Java, C++, C#, JavaScript, HTML, CSS, Python",
					toolsTitle:"Herramientas",
					toolsContent:"Android Studios, Unity3D, Node.js y npm, Angular.js, D3.js, P5.js , Repository, Adobe XD, Bash para Linux, Diferentes IDEs",
					/////////////////Experiencia laboral
					workTitle:"Experiencia laboral",
					currentTitle:"2016-2017",
					currentContent:"Heladeria Christis Trier: Vendedor",
					lastTitle:"2012-2014",
					lastContent:"Café Nr. 15 en Kaiserslautern: Mesero y Barista",
					/////////////////Habilidades
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
					////////////////Idiomas
					languageTitle:"Habilidades lingüisticas",
					spanishTitle:"Español",
					spanishContent:"Lengua materna",
					englishTitle:"Inglés",
					englishContent:"Nivel C1",
					germanTitle:"Alenmán",
					germanContent:"Nivel C1",
					///////////////Lenguajes de Program
					langTitle: "Lenguajes",
					langSubtitle: "Lenguajes de programación",
					graphParagraph:"Este gráfico fue muestra el nivel en los diferentes lenguajes de programación. Fue hecho con ayuda de D3.js",
					///////////////Proyectos
					projectsTitle: "Proyectos",
					projectSubtitle:"Aquí encontraras todos los proyectos universitarios, así como proyectos personales que hecho en los ultimos años. También encontraras los enlaces de mi GitHub así como las documentaciones correspondientes.",
					firstProjektTitle:"1. Oclusión Culling en Unity3D",
					firstProjektA:"La idea detrás es para motivos de optimización. Oclusión culling es una ténica muy conocida empleada en el desarrollo de juegos, para poder crear muchos objetos sin necesidad de deteriorar el rendimiento del juego. ",
					firstProjektB:"Uno representa en la pantalla solo aquellos objetos, que en son necesarios en cada momento, es decir, solo los objetos encontrados al frente de la cámara. Así se puede ahorrar memoria para que el juego corra mejor.",
					firstProjektC:"Pruébelo usted mismo, aquí hay una pequeña demostración: Con las teclas A S D W se controla al jugador. O puede visitar directamente el enlace de GitHub:",
					secondProjektTitle:"2. Cubo de Rubiks para el PSVita de Sony",
					secondProjektA:"Aquí hay un pequeño juego para el PSVita de Sony. Para poder correr este juego, es necesario poseer en tu sistema el API de Sony y un PSVita. Lastimosamente no es fácil conseguir la licencia necesaria para poderlo utilizar, pero de todos modos usted podrá ver este proyecto en este enlace de GitHub:",
					thirdProjektTitle:"3. Aplicación web para la región de Trier y sus alrededores",
					thirdProjektA:"Una pequeña aplicación de web modular con RESTful API para el Backend. Con ayuda de Leaflet(Mapa Open Source) se podrá navegar por la región y al mismo tiempo ver el perfil de altitud que esta posee.",
					thirdProjektB:"Esta aplicación web contiene varios API importantes, así como Best Practices. Fue hecho de forma modular con la ayuda de Common.js, el Backend utiliza RESTful API para estructurar los pedidos del servidor y Leaflet como mapa Open Source. Enlace de GitHub:",
					forthProjektTitle:"4. Extensión para Google Chrome: Contador de tiempo en la web",
					forthProjektA:"Esta extensión nos muestra, cuanto tiempo se a invertido navegando la web. Fue un pequeño y divertido experimento. Aunque posee un par de Bugs, funciona correctamente.",
					forthProjektB:"Fue creado con ayuda de el API de Google para desarrolladores y Chart.js para la creación de gráficos. Enlace de GitHub:",
					fifthProjektTitle:"6. Angular.js: Curriculum Vitae en forma de aplicación web",
					fifthProjektA:"Por ultimo se encuentra también esta página web en Open Source.",
					fifthProjektB:"Detrás de la fachada se encuentra varias tecnologías, que hoy en día son relevantes para el desarrollo web. Node Package Manager y Node.js son la base para el servidor, ya que ellas adminitran las dependencias necesarias y también se utilizó Bower para administrar las dependencias necesarias en el cliente. Para el cliente utilicé Angular.js para manipular el DOM y D3.js para la representación gráfia de datos. En el Backend utilicé Express para la creación del servidor, así como Socket.io para la consulta y envío de datos necesarios para el cliente. Enlace de GitHub:",
					volvoTitle:"5. Visualización de archivos CAD para Hololens de Microsoft",
					volvoA:"Este proyecto fue un proyecto en equipo para la universidad en conjunto con Volvo en Konz. Creamos una aplicación, donde se puede visualizar archivos CAD en los lentes de realidad aumentada Hololens. Fue creado con Unity3D y Vuforia. Por razones de licencia no puedo mostrar codigo, pero es importante saber que soy capaz de realizar aplicaciones para realidad aumentada/virtual.",
					linkOcclusion:"Proyecto en Unity3D",
					linkCube:"Cubo de Rubiks",
					linkMap:"Mapa de Trier",
					linkExtension:"Extensión contador de tiempo",
					///////////////Unity Demo
					unityDemo:"Esta aplicación no fue creada originalmente para ser utilizada en una página web, porfavor espere un momento mientras Unity se carga!",
					unityDemoInfo:"Controles: A S W D. Elija la cantidad de AI deseada y active FoV (Field of View), Struct y Sphere para probar los efectos mejor."
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