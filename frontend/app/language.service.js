(function() {
	"use strict";

	angular
		.module("app")
		.factory("languageService", function() {

			const data = {
				"en": {
					info: "english info",
					infoTitle: "Information",
					langTitle: "Languages",
					langSubtitle: "Programming languages",
					projectsTitle: "Projects"
				},
				"de": {
					info: "Ich bin ein Informatik Student an der Hochschule Trier fast am Ende meines Studiums. Ich programmiere schon seit fast 5 Jahre und interesiere mich über die Entwicklung von Spiele, sowie Web-Entwicklung und 3D basierte Web-Anwendungen.",
					infoTitle: "Information",
					langTitle: "Sprachen",
					langSubtitle: "Programmiersprachen",
					projectsTitle: "Projekte"
				},
				"es": {
					info: "información en espanol",
					infoTitle: "Información",
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