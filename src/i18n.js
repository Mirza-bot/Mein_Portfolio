import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "de",
  fallbackLocale: "en",
  globalInjection: true,
  messages: {
    de: {
      header: {
        projects: "Projekte",
        contact: "Kontakt",
      },
      welcome: {
        headline: "Mirza Malkoc",
        headline2: "Webentwickler",
        headline3:
          "Das entwickeln und gestalten von Webseiten ist meine Leidenschaft. Mich jeden Tag neuen Herausforderungen zu stellen motiviert mich dabei mein Wissen und meine Fähigkeiten auszubauen.",
        button: "Projekte",
      },
      projects: {
        headline: "Projekte",
        latest: "Neuestes",
        description: "Beschreibung:",
        projectHightlight: {
          description1: "Diese Applikation ist mit",
          description2:
            "gemacht worden, ein Toolkit zur Entwicklung nativer Desktop-Anwendungen mit JavaScript-Frontend-Frameworks. Es erstellt eine Webview-Anwendung, die sich wie ein Browser verhält, uns jedoch die Verwendung nativer Funktionen wie den Zugriff auf das Dateisystem ermöglicht. Es ist ein direkter Konkurrent von Electron, hat aber den Vorteil, dass es nicht auf chromium/node.js angewiesen ist. Rust wird stattdessen als leichtgewichtiges Backend und Tao/Wry als Frontend verwendet. Dadurch können wir leistungsstarke, kleine Apps erstellen.",
          description3:
            "Ich habe eine App erstellt, um meine Bewerbungen zu verwalten. Es hilft mir dabei einen Überblick zu behalten, bei welchen Unternehmen und Stellen ich mich beworben habe und wie viel Zeit seitdem vergangen ist.",
          description4:
            "Diesmal war React mein gewähltes Frontend-Framework. Nicht aus einem bestimmten Grund, nur aus Neugier wegen seiner Popularität. Kombiniert mit den CSS-Bibliotheken Tailwind CSS und DaisyUI für gute/s UI/UX.",
          description5:
            "Mit der Dokumentation von Tauri habe ich mir etwas schwer getan, da sie nicht so detailliert ist wie ich es von z.B. Vue.js oder React.js gewohnt bin. Die Verwaltung von Tauris-API-Abhängigkeiten und die Festlegung des Zugriffsrechts/Berechtigungen für das Dateisystemmodul war eine kleine Hürde. Aber alles andere war ziemlich intuitiv und es machte Spaß damit zu arbeiten. Ich freue mich darauf wieder mit Tauri zu arbeiten, ich denke es ist ein erstaunliches Stück Software.",
          description6:
            "Die App ist derzeit nur für Apple Silicon Macs verfügbar. Plattformübergreifende Unterstützung folgt in Kürze.",
        },
        project1: {
          descriptionContent:
            'Eine Web-App welche mittels JavaScript, Vue3, Vue-Router und VueX erstellt wurde. Als Backend wird Firebase mit ihrer Realtime-Database genutzt, dies ermöglicht Authentifizierungsfunktionen und das Speichern der eigenen "Task-Karten", für jeden Nutzer der sich registriert. Mittels der "Drag & Drop"-API können die Karten zwischen den einzelnen Kategorien verschoben werden. Das Löschen und Editieren der Karten ist ebenfalls möglich.',
          responsive: "Nein",
        },
        project2: {
          descriptionContent:
            "Eine simple Pizzeria-Webseite welche mittels JavaScript, Vue.js, Vue-Router und Sass erstellt wurde. Das Design der Hauptseite, sowie der Galerie wurden mit einem CSS-Grid erstellt um ein symmetrisches Layout zu erzielen.",
          responsive: "Ja",
        },
        project3: {
          title: "Lohnrechner (Schichtarbeit)",
          descriptionContent:
            "Diese Web-App dient dazu den Monatslohn anhand des Stundenlohns, unter Berücksichtigung der gearbeiteten Schicht, zu berechnen. Es werden Schichtzulagen, Überstunden, Gefahren und Schmutzzulagen, sowie Urlaubsstunden und Feiertage zur Berechnung mit einbezogen. Durch Einsatz des Ionic-Frameworks und Vue.js wurde eine Webseite erstellt die gezielt an Mobile-Endgeräte angepasst sein soll, damit so die Berechnung des Monatslohnes einfach und für jeden auch unterwegs möglich gemacht wird.",
          responsive: "Ja",
        },
        project4: {
          title: "Portfolio Webseite",
          descriptionContent:
            "Die Portfolio-Webseite auf der Sie sich befinden wurde mit JavaScript, Vue.js, Vue-Router, Sass und Wave-UI erstellt.",
          responsive: "Ja",
        },
        project5: {
          title: "PixelArt Zeichenbrett",
          descriptionContent:
            "Ein Zeichenbrett mit Raster welches mit JavaScript, HTML und CSS gemacht wurde. Es diente als gute Übung dieses Projekt ohne Framework zu erstellen. Die Anzahl an Elementen im Raster vom Nutzer bestimmen zu lassen war die einzige kleine Hürde an diesem Projekt.",
          responsive: "Nein",
        },
      },
      aboutMe: {
        headline: "Zur Person",
        headline2: "Erfahrung in",
        age: "Alter: 27",
        livingIn: "Wohnort: Wien",
        skills: {
          headline: "FÄHIGKEITEN:",
          skill1: "Analytisches Denken",
          skill2: "Hohe Lernbereitschaft",
          skill3: "Teamplayer",
          skill4: "Strukturiertes Arbeiten",
        },
        languages: {
          title: "SPRACHEN:",
          german: "Deutsch",
          english: "Englisch",
          bosnian: "Bosnisch",
        },
        personalText:
          "Von dem Moment an dem ich “Hallo Welt” in der Konsole meiner ersten Applikation ausgab wusste ich, dass der Weg der Softwareentwicklung der meiner Wahl werden würde. Doch Softwareentwicklung war nie einfach nur ein Karriereweg für mich, sondern eine Leidenschaft welche mir die Herausforderung bietet mich stetig weiter zu entwickeln und meine Fähigkeiten in der Entwicklung hoch qualitativer Software zu verbessern.",
        resume: "Lebenslauf",
      },
      contact: {
        headline: "Kontaktieren Sie mich.",
        textContent1:
          "Sie können mir direkt über das Online-Formular schreiben oder Sie senden mir eine Nachricht via ",
        textContent2: "Ich werde mich um eine schnelle Antwort bemühen.",
        messageLabel: "Nachricht*",
        submitButton: "Senden",
        thanksHeadline: "Nachricht gesendet.",
        thanksText:
          "Vielen Dank für ihre Nachricht. Ich werde schnellstmöglich antworten.",
      },
    },
    en: {
      header: {
        projects: "Projects ",
        contact: "Contact",
      },
      welcome: {
        headline: "Mirza Malkoc",
        headline2: "web developer",
        headline3:
          "Developing and designing websites is my passion. Facing new challenges every day motivates me to expand my knowledge and skills.",
        button: "Projects",
      },
      projects: {
        headline: "Projects",
        latest: "Latest",
        description: "Description:",
        projectHightlight: {
          description1: "This application is made with",
          description2:
            "a toolkit for developing native desktop applications with JavaScript frontend frameworks. It makes a webview application which behaves like a browser but enables us to use native functionalities, like accessing the file system. It's a direct competitor to Electron but has the  advantage that it doesn't rely on chromium/node.js. Rust is used as a  lightweight backend and Tao/Wry as frontend instead. That allows us to make performant, small sized apps.",
          description3:
            "I've made an app to manage my job applications. It helps me to keep an overview of the companies and job positions I've applied to and how much time passed since.",
          description4:
            "This time React was my chosen frontend framework. Not for any particular reason, just curiosity because of its popularity. Combined with the CSS libraries Tailwind CSS and DaisyUI for a good UI/UX.",
          description5:
            "I struggled a bit with the documentation of Tauri, because it isn't as detailed as I'm used to from for exapmle Vue.js or React.js. To manage Tauris API dependencies and set the scope/allowances for the filesystem module was a little hurdle. But everything else was pretty intuitive and fun to work with. I'm looking forward to work again with Tauri, I think it is an amazing piece of software.",
          description6:
            "The App is currently only available for Apple Silicon Macs. Cross platform support coming soon.",
        },
        project1: {
          descriptionContent:
            'A web-app that was created using JavaScript ,Vue3, Vue-Router and VueX. Firebase with its real-time database is used as the backend, this enables authentification functions and the saving of individual "task-cards", for each user who registers. The cards can be moved between the individual categories using the "Drag & Drop"-API. It is also possible to delete and edit the cards.',
          responsive: "No",
        },
        project2: {
          descriptionContent:
            "A simple pizzeria-website which was created using JavaScript, Vue.js, Vue-Router and Sass. The design of the main page together with the gallery page were created with a CSS-grid to ensure a symmetrical layout.",
          responsive: "Yes",
        },
        project3: {
          title: "Salary Calculator (shift work)",
          descriptionContent:
            "This web-app serves the purpose to calculate the salary considering the worked shift as well as shift allowances, overtime, hazard allowance, dirt allowance, vacation hours and holidays. Using the Ionic framework and Vue.js, a website was created that should be specifically adapted to mobile devices. This makes it easy as possible for everyone to calculate their salary on the go.",
          responsive: "Yes",
        },
        project4: {
          title: "Portfolio Website",
          descriptionContent:
            "The portfolio-website you are currently on was created using JavaScript, Vue.js, Vue-Router, Sass and Wave-UI.",
          responsive: "Yes",
        },
        project5: {
          title: "PixelArt Drawingboard",
          descriptionContent:
            "A grid drawing board made with JavaScript, HTML and CSS. It served as good practice to create this project without a framework. Letting the user choose the number of elements in the grid was the only minor hurdle in this project.",
          responsive: "No",
        },
      },
      aboutMe: {
        headline: "About me",
        headline2: "Experience in",
        age: "Age: 27",
        livingIn: "Location: Vienna",
        skills: {
          headline: "SKILLS:",
          skill1: "Analytical thinking",
          skill2: "Willingness to learn",
          skill3: "Teamplayer",
          skill4: "Structured working",
        },
        languages: {
          title: "LANGUAGES:",
          german: "German",
          english: "English",
          bosnian: "Bosnian",
        },
        personalText:
          "From the moment I typed out 'Hello World' in the console of my first application, I knew that the path of software development would become my choice. However, software development was never just a career path for me, but a passion that offers me the challenge of constantly developing myself and improving my skills in the development of high-quality software.",
        resume: "Resume",
      },
      contact: {
        headline: "Contact me.",
        textContent1:
          "You can message me directly from the online-form or you reach out to me via",
        textContent2: "I'm looking forward to hear from you.",
        messageLabel: "Message*",
        submitButton: "Send",
        thanksHeadline: "Message sent.",
        thanksText: "Thanks for your message. I'll answer as soon as possible.",
      },
    },
  },
});

export default i18n;
