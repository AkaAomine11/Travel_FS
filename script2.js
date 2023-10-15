 document.addEventListener("DOMContentLoaded", function () {
    // --- Language translation logic ---
    const translations = {
        "Welcome": {
          fr: "Bienvenue",
          ita: "Benvenuti",
          ger: "Willkommen",
          por: "Bem-vindo",
          spa: "Bienvenido",
        },
        "to our travel itinerary generator!": {
          fr: "dans notre générateur d'itinéraire de voyage!",
          ita: "nel nostro generatore di itinerari di viaggio!",
          ger: "bei unserem Reiseplan-Generator!",
          por: "ao nosso gerador de itinerários de viagem!",
          spa: "a nuestro generador de itinerarios de viaje!",
        },
        "Crafting Journeys for Adventurers": {
          fr: "Création de voyages pour les aventuriers",
          ita: "Creazione di viaggi per avventurieri",
          ger: "Handwerkliche Reisen für Abenteurer",
          por: "Criando jornadas para aventureiros",
          spa: "Creación de viajes para aventureros",
        },
    "Our own experiences": {
      fr: "Nos propres expériences",
      ita: "Le nostre esperienze",
      ger: "Unsere eigenen Erfahrungen",
      por: "Nossas próprias experiências",
      spa: "Nuestras propias experiencias",
    },
    "Services": {
      fr: "Services",
      ita: "Servizi",
      ger: "Dienstleistungen",
      por: "Serviços",
      spa: "Servicios",
    },
    "About us": {
      fr: "À propos de nous",
      ita: "Chi siamo",
      ger: "Über uns",
      por: "Sobre nós",
      spa: "Sobre nosotros",
    },
    "Discover Unique Experiences": {
    fr: "Découvrez des Expériences Uniques",
    ita: "Scoprire esperienze uniche",
    ger: "Einzigartige Erlebnisse entdecken",
    por: "Descubra experiências únicas",
    spa: "Descubra experiencias únicas",
  },
  "Embark on unforgettable adventures with our handpicked collection of experiences. From cultural tours and thrilling activities to hidden gems, we curate experiences that create lasting memories.": {
    fr: "Embarquez pour des aventures inoubliables grâce à notre collection d'expériences triées sur le volet. Des visites culturelles aux activités palpitantes en passant par les joyaux cachés, nous sélectionnons des expériences qui créent des souvenirs inoubliables.",
    ita: "Partite per avventure indimenticabili con la nostra collezione di esperienze selezionate. Da tour culturali e attività emozionanti a gemme nascoste, curiamo esperienze che creano ricordi duraturi.",
    ger: "Begeben Sie sich mit unserer handverlesenen Sammlung von Erlebnissen auf unvergessliche Abenteuer. Von kulturellen Touren über aufregende Aktivitäten bis hin zu versteckten Juwelen - wir kuratieren Erlebnisse, die bleibende Erinnerungen schaffen",
    por: "Embarque em aventuras inesquecíveis com a nossa coleção de experiências escolhidas a dedo. entsprechende Förderung Geflügel Unterste Position jein Freund Büber 7 se ausdrücklich eine hinteraisse Hur",
    spa: "Embárquese en aventuras inolvidables con nuestra selecta colección de experiencias. Desde visitas culturales y actividades emocionantes hasta joyas ocultas, seleccionamos experiencias que crean recuerdos imborrables.",
  },
  "Explore new horizons and immerse yourself in the essence of each destination. Get ready for an extraordinary journey!": {
    fr: "Explorez de nouveaux horizons et imprégnez-vous de l'essence de chaque destination. Préparez-vous à un voyage extraordinaire !",
    ita: "Esplorate nuovi orizzonti e immergetevi nell'essenza di ogni destinazione. Preparatevi a un viaggio straordinario!",
    ger: "Erforschen Sie neue Horizonte und tauchen Sie ein in die Essenz eines jeden Reiseziels. Machen Sie sich bereit für eine außergewöhnliche Reise!",
    por: "Explore novos horizontes e mergulhe na essência de cada destino. Transmission collective.",
    spa: "Explore nuevos horizontes y sumérjase en la esencia de cada destino. ¡Prepárate para un viaje extraordinario!",
},
    "Your Personal Travel Guide": {
    fr: "Votre guide de voyage personnel",
    ita: "La vostra guida turistica personale",
    ger: "Ihr persönlicher Reiseführer",
    por: "O seu guia de viagem pessoal",
    spa: "Su guía personal de viajes",
  },
  "Our services go beyond creating itineraries. We're your personal travel guide, assisting you at every step of the journey. We provide recommendations, tips, and local insights to enhance your trip.": {
    fr: "Nos services vont au-delà de la création d'itinéraires. Nous sommes votre guide personnel et vous assistons à chaque étape de votre voyage. Nous vous fournissons des recommandations, des conseils et des informations locales pour améliorer votre voyage.",
    ita: "I nostri servizi vanno oltre la creazione di itinerari. Siamo la vostra guida personale, che vi assiste in ogni fase del viaggio. Forniamo raccomandazioni, consigli e approfondimenti locali per migliorare il vostro viaggio.",
    ger: "Unsere Dienstleistungen gehen über die Erstellung von Reiseplänen hinaus. Wir sind Ihr persönlicher Reiseführer, der Ihnen bei jedem Schritt Ihrer Reise zur Seite steht. Wir geben Empfehlungen, Tipps und lokale Einblicke, um Ihre Reise zu bereichern.",
    por: "Os nossos serviços vão para além da criação de itinerários. Somos o seu guia de viagem pessoal, ajudando-o em cada passo da viagem. Fornecemos recomendações, dicas e informações locais para melhorar a sua viagem.",
    spa: "Nuestros servicios van más allá de la creación de itinerarios. Somos su guía de viaje personal, le asistimos en cada paso del viaje. Le ofrecemos recomendaciones, consejos e información local para mejorar su viaje.",
  },
  "Whether you're looking for accommodations, transportation, or dining options, we've got the expertise to make your travel experience seamless and enjoyable.": {
    fr: "Que vous soyez à la recherche d'un hébergement, d'un moyen de transport ou d'un restaurant, nous disposons de l'expertise nécessaire pour rendre votre voyage agréable et sans encombre.",
    ita: "Che si tratti di alloggi, trasporti o ristoranti, abbiamo l'esperienza necessaria per rendere la vostra esperienza di viaggio piacevole e senza interruzioni.",
    ger: "Ganz gleich, ob Sie nach Unterkünften, Transportmöglichkeiten oder gastronomischen Angeboten suchen, wir verfügen über das nötige Fachwissen, um Ihre Reise reibungslos und angenehm zu gestalten.",
    por: "Quer esteja à procura de alojamento, transporte ou opções de restauração, temos os conhecimentos necessários para tornar a sua experiência de viagem perfeita e agradável.",
    spa: "Tanto si busca alojamiento como transporte u opciones gastronómicas, contamos con los conocimientos necesarios para que su experiencia de viaje sea fluida y agradable.",
  },
  "Meet the Team": {
    fr: "Rencontrer l'équipe",
    ita: "Incontrare il team",
    ger: "Treffen Sie das Team",
    por: "Conheça a equipa",
    spa: "Conoce al equipo",
  },
  "We're a passionate couple, Sindì and Francesco, who share a love for travel and exploration. Our own journeys have inspired us to create a platform that simplifies travel planning for fellow adventurers.": {
    fr: "Nous sommes un couple de passionnés, Sindì et Francesco, qui partagent l'amour du voyage et de l'exploration. Nos propres voyages nous ont inspirés pour créer une plateforme qui simplifie la planification des voyages pour les autres aventuriers.",
    ita: "Siamo una coppia di appassionati, Sindì e Francesco, che condividono l'amore per i viaggi e l'esplorazione. I nostri viaggi ci hanno ispirato a creare una piattaforma che semplifica la pianificazione dei viaggi per gli altri avventurieri.",
    ger: "Wir sind ein leidenschaftliches Paar, Sindì und Francesco, das die Liebe zum Reisen und Entdecken teilt. Unsere eigenen Reisen haben uns dazu inspiriert, eine Plattform zu schaffen, die die Reiseplanung für andere Abenteurer vereinfacht.",
    por: "Somos um casal apaixonado, Sindì e Francesco, que partilham o amor pelas viagens e pela exploração. As nossas próprias viagens inspiraram-nos a criar uma plataforma que simplifica o planeamento de viagens para outros aventureiros.",
    spa: "Somos una pareja apasionada, Sindì y Francesco, que comparten el amor por los viajes y la exploración. Nuestros propios viajes nos han inspirado para crear una plataforma que simplifica la planificación de viajes para otros aventureros.",
  },
  "We believe that every journey should be unique and memorable. With our expertise and dedication, we're committed to helping you create extraordinary travel experiences.": {
    fr: "Nous pensons que chaque voyage doit être unique et mémorable. Grâce à notre expertise et à notre dévouement, nous nous engageons à vous aider à créer des expériences de voyage extraordinaires.",
    ita: "Crediamo che ogni viaggio debba essere unico e memorabile. Con la nostra esperienza e dedizione, ci impegniamo ad aiutarvi a creare esperienze di viaggio straordinarie.",
    ger: "Wir glauben, dass jede Reise einzigartig und unvergesslich sein sollte. Mit unserer Expertise und unserem Engagement helfen wir Ihnen, außergewöhnliche Reiseerlebnisse zu schaffen.",
    por: "Acreditamos que cada viagem deve ser única e memorável. Com a nossa experiência e dedicação, estamos empenhados em ajudá-lo a criar experiências de viagem extraordinárias.",
    spa: "Creemos que cada viaje debe ser único y memorable. Con nuestra experiencia y dedicación, nos comprometemos a ayudarle a crear experiencias de viaje extraordinarias.",
  },
  "🌍✈️ Welcome to our vibrant travel world! ✈️🌍": {
    fr: "🌍✈️ Bienvenue dans notre monde de voyage dynamique ! ✈️🌍",
    ita: "🌍✈️ Benvenuti nel nostro vivace mondo dei viaggi! ✈️🌍",
    ger: "🌍✈️ Willkommen in unserer lebendigen Reisewelt! ✈️🌍",
    por: "🌍✈️ Bem-vindo ao nosso vibrante mundo das viagens! ✈️🌍",
    spa: "🌍✈️ ¡Bienvenido a nuestro vibrante mundo de viajes! ✈️🌍",
  },
  "As fellow adventurers and a passionate couple who've explored the world together, we understand the joy of discovering new places and cultures. Our shared experiences have inspired us to create this website, aiming to make your travel planning journey as exciting as your actual trip.": {
    fr: "En tant que compagnons d'aventure et couple passionné qui a exploré le monde ensemble, nous comprenons la joie de découvrir de nouveaux endroits et de nouvelles cultures. Nos expériences partagées nous ont inspirés pour créer ce site web, dans le but de rendre votre voyage aussi passionnant que votre voyage lui-même.",
    ita: "Come compagni di avventura e coppia appassionata che ha esplorato il mondo insieme, comprendiamo la gioia di scoprire nuovi luoghi e culture. Le nostre esperienze comuni ci hanno ispirato a creare questo sito web, con l'obiettivo di rendere il vostro viaggio di pianificazione emozionante quanto il vostro viaggio vero e proprio.",
    ger: "Als Abenteurer und leidenschaftliches Paar, das gemeinsam die Welt erkundet hat, wissen wir, wie viel Freude es macht, neue Orte und Kulturen zu entdecken. Unsere gemeinsamen Erfahrungen haben uns dazu inspiriert, diese Website zu erstellen, um Ihre Reiseplanung so aufregend wie Ihre eigentliche Reise zu gestalten.",
    por: "Como companheiros de aventura e um casal apaixonado que explorou o mundo juntos, compreendemos a alegria de descobrir novos lugares e culturas. As nossas experiências comuns inspiraram-nos a criar este sítio Web, com o objetivo de tornar a sua viagem de planeamento de viagens tão emocionante como a sua própria viagem.",
    spa: "Como compañeros de aventuras y pareja apasionada que ha explorado el mundo juntos, comprendemos el placer de descubrir nuevos lugares y culturas. Nuestras experiencias compartidas nos han inspirado para crear este sitio web, con el objetivo de hacer que su viaje sea tan emocionante como su propio viaje.",
  },
  "Are you tired of spending hours researching and planning your itinerary? We're here to help! With our easy-to-use tool, you can create a personalized travel plan that suits your preferences and saves you precious time. Whether it's a romantic getaway, an adventurous expedition, or a relaxing escape, we've got you covered.": {
    fr: "Vous en avez assez de passer des heures à rechercher et à planifier votre itinéraire ? Nous sommes là pour vous aider ! Grâce à notre outil facile à utiliser, vous pouvez créer un plan de voyage personnalisé qui correspond à vos préférences et vous fait gagner un temps précieux. Qu'il s'agisse d'une escapade romantique, d'une expédition aventureuse ou d'une évasion relaxante, nous avons ce qu'il vous faut.",
    ita: "Siete stanchi di passare ore a cercare e pianificare il vostro itinerario? Siamo qui per aiutarvi! Con il nostro strumento facile da usare, potete creare un piano di viaggio personalizzato che si adatti alle vostre preferenze e vi faccia risparmiare tempo prezioso. Che si tratti di una fuga romantica, di una spedizione avventurosa o di una fuga rilassante, abbiamo pensato a voi.",
    ger: "Sind Sie es leid, stundenlang zu recherchieren und Ihre Reiseroute zu planen? Wir sind hier, um Ihnen zu helfen! Mit unserem benutzerfreundlichen Tool können Sie einen persönlichen Reiseplan erstellen, der Ihren Vorlieben entspricht und Ihnen wertvolle Zeit spart. Egal, ob es sich um einen romantischen Ausflug, eine abenteuerliche Expedition oder eine entspannende Flucht handelt, wir haben alles für Sie.",
    por: "Está cansado de passar horas a pesquisar e a planear o seu itinerário? Estamos aqui para o ajudar! Com a nossa ferramenta fácil de utilizar, pode criar um plano de viagem personalizado que se adapte às suas preferências e lhe poupe tempo precioso. Quer se trate de uma escapadela romântica, de uma expedição aventureira ou de uma escapadela relaxante, temos tudo o que precisa.",
    spa: "¿Está cansado de pasar horas investigando y planificando su itinerario? Estamos aquí para ayudarle. Con nuestra sencilla herramienta, puede crear un plan de viaje personalizado que se adapte a sus preferencias y le ahorre un tiempo precioso. Tanto si se trata de una escapada romántica, una expedición llena de aventuras o una escapada relajante, tenemos todo lo que necesita.",
  },
  "Let's embark on this journey together, one destination at a time. Let us take care of the planning, so you can focus on making memories that last a lifetime.": {
    fr: "Embarquons ensemble pour ce voyage, une destination à la fois. Laissez-nous nous occuper de la planification, pour que vous puissiez vous concentrer sur la création de souvenirs qui dureront toute une vie.",
    ita: "Intraprendiamo questo viaggio insieme, una destinazione alla volta. Lasciate che ci occupiamo noi della pianificazione, così potrete concentrarvi sulla creazione di ricordi che dureranno per tutta la vita.",
    ger: "Lassen Sie uns diese Reise gemeinsam antreten, ein Ziel nach dem anderen. Überlassen Sie uns die Planung, damit Sie sich darauf konzentrieren können, Erinnerungen zu schaffen, die ein Leben lang halten.",
    por: "Vamos embarcar juntos nesta viagem, um destino de cada vez. Deixe-nos tratar do planeamento, para que se possa concentrar em criar memórias que durem uma vida inteira.",
    spa: "Embarquémonos juntos en este viaje, destino a destino. Deje que nosotros nos encarguemos de la planificación, para que usted pueda centrarse en crear recuerdos que duren toda la vida.",
  },
  "Safe travels and happy exploring!": {
    fr: "Bon voyage et bonne exploration!",
    ita: "Buon viaggio e buona esplorazione!",
    ger: "Gute Reise und viel Spaß beim Erkunden!",
    por: "Boa viagem e boas explorações!",
    spa: "Buen viaje y feliz exploración!",
  },
  "Select Your Preferences": {
    fr: "Sélectionnez vos préférences",
    ita: "Selezionare le preferenze",
    ger: "Wählen Sie Ihre Präferenzen",
    por: "Seleccione as suas preferências",
    spa: "Seleccione sus preferencias",
  },
  "Country": {
    fr: "Pays",
    ita: "Paese",
    ger: "Land",
    por: "País",
    spa: "País",
  },
  "City": {
    fr: "Cité",
    ita: "Città",
    ger: "Stadt",
    por: "Cidade",
    spa: "Ciudad",
  },
  "How long (in days)": {
    fr: "Combien de temps (en jours)",
    ita: "Quanto tempo (in giorni)",
    ger: "Wie lange (in Tagen)",
    por: "Quanto tempo (em dias)",
    spa: "Cuánto tiempo (en días)",
  },
  "What kind of travel": {
    fr: "Quel type de voyage",
    ita: "Che tipo di viaggio",
    ger: "Welche Art von Reise",
    por: "Que tipo de viagem",
    spa: "Qué tipo de viaje",
  },
  "Busy": {
    fr: "Occupé",
    ita: "Intenso",
    ger: "Beschäftigt",
    por: "Ocupado",
    spa: "Ocupado",
  },
  "Relax": {
    fr: "Relaxe",
    ita: "Rilassarsi",
    ger: "Entspannen",
    por: "Relaxar",
    spa: "Relájese",
  },
  "Half & Half": {
    fr: "Moitié-moitié",
    ita: "Metà e metà",
    ger: "Halb und halb",
    por: "Metade e metade",
    spa: "Mitad y mitad",
  },
  "Cheap": {
    fr: "Bon marché",
    ita: "Economico",
    ger: "Günstig",
    por: "Barato",
    spa: "Barato",
  },
  "Normal": {
    fr: "Normal",
    ita: "Normale",
    ger: "Normal",
    por: "Normal",
    spa: "Normal",
  },
  "Expensive": {
    fr: "Coûteux ",
    ita: "Costoso",
    ger: "Teuer",
    por: "Caro",
    spa: "Caro",
  },
  "Generate Itinerary": {
    fr: "Générer l'itinéraire",
    ita: "Genera itinerario",
    ger: "Reiseplan generieren",
    por: "Gerar itinerário",
    spa: "Generar itinerario",
  },
  "assitance": {
    fr: "Besoin d'aide ? a href=mailto:info@travelitinerary.com Contactez-nous",
    ita: "Avete bisogno di assistenza? a href=mailto:info@travelitinerary.com Contattateci",
    ger: "Benötigen Sie Hilfe? a href=mailto:info@travelitinerary.com Kontakt",
    por: "Precisa de ajuda? a href=mailto:info@travelitinerary.com Contacte-nos",
    spa: "¿Necesita ayuda? a href=mailto:info@travelitinerary.com Póngase en contacto con nosotros",
  },
      };  
      function testClick() {
        console.log('Inline handler worked');
    }        
// Function to open the lightbox
function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  
  lightboxImg.src = imageSrc;
  lightbox.style.display = 'block';
}
// Function to close the lightbox
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}
document.querySelectorAll('.images-wrapper img').forEach(img => {
  img.addEventListener('click', function() {
      openLightbox(this.src);
  });
});
document.body.addEventListener('click', function(event) {
  if (event.target.matches('.close-btn')) {
      console.log("Close button clicked");
      document.querySelector('.lightbox').style.display = 'none';
  }
});
// Event listener for the "Esc" key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
      function setLanguage(lang) {
        for (const [key, value] of Object.entries(translations)) {
            const translatedText = value[lang] || key;
            document.querySelectorAll(`[data-translate="${key}"]`).forEach((element) => {
                element.textContent = translatedText;
            });
        }
    }
    const languageDropdown = document.getElementById("language-dropdown");
    languageDropdown.addEventListener("change", function () {
        setLanguage(this.value);
    });

    setLanguage(languageDropdown.value); // Set initial language

    // Tab switching logic
    const tabItems = document.querySelectorAll(".tab-item");
    const tabContents = document.querySelectorAll('.tab-content');

    const video = document.getElementById('intro-video');
    const overlay = document.getElementById('video-overlay');
    const replayButton = document.getElementById('replay-button');
    
// Video ending logic
    video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
    });
    tabItems.forEach(tab => {
      tab.addEventListener('click', () => {
          tabContents.forEach(content => {
              content.style.display = 'none';
          });
          const tabId = tab.getAttribute('data-for');
          const content = document.querySelector(`#${tabId}`);
          content.style.display = 'block';
          resetFadeInForImages();
  
          if (tabId === "services-content") {
              document.getElementById('video-overlay').classList.remove('video-hidden');
          } else {
              document.getElementById('video-overlay').classList.add('video-hidden');
          }
      });
  }); 
    // Skip button logic
    const skipButton = document.getElementById('skip-button');
    skipButton.addEventListener('click', function () {
        video.pause(); // Pause the video
        overlay.style.display = 'none'; // Hide the video overlay
    });
});
const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const experienceInfo = this.parentElement;
            const title = experienceInfo.querySelector('h3').innerText;
            const description = experienceInfo.querySelector('p').innerText;

            // Perform actions like displaying a modal with the full description
            alert(`Title: ${title}\nDescription: ${description}`);
        });
    });
    document.querySelectorAll('.images-wrapper img').forEach(img => {
      img.addEventListener('load', function() {
          // Add the 'loaded' class to the image after it has loaded
          this.classList.add('loaded');
      });
  });
  function resetFadeInForImages() {
    document.querySelectorAll('.images-wrapper img').forEach(img => {
        img.classList.remove('loaded');
        
        // Re-add the 'loaded' class with a slight delay to trigger the fade-in effect
        setTimeout(() => img.classList.add('loaded'), 100);
    });
}
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function handleScrollEvent() {
  document.querySelectorAll('.images-wrapper img').forEach(img => {
      if (isElementInViewport(img) && !img.classList.contains('loaded')) {
          // Delay the addition of 'loaded' class for better effect
          setTimeout(() => img.classList.add('loaded'), 100);
      }
  });
}
// Attach the scroll event listener
window.addEventListener('scroll', handleScrollEvent);
// Trigger the scroll event listener once on page load or tab switch to handle cases where the images are already in the viewport
handleScrollEvent();