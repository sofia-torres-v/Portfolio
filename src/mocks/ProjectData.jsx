const data = {
    projectsData: [
        {
            id: 1,
            name: "JS Motos",
            category: "web con código",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FjsMotosImport.jpg?alt=media&token=7a74b3fa-1937-4d82-a7a5-1654416104de",
            description:
                "JS Motos, es un proyecto dedicado a la fabricación y venta de empaquetaduras para motocicletas en Perú. Este sitio web fue desarrollado con React y Bootstrap, ofreciendo una interfaz moderna y atractiva. Además, cuenta con funcionalidades como conexión directa a WhatsApp, Facebook Messenger y TikTok, junto con un formulario de contacto que dirige a Gmail.",
            liveLink: "https://jsmotos.com/",
            githubLink: "https://github.com/sofia-torres-v/Js-Motos",
            skills: ["html", "css", "JavaScript", "React", "firebase"],
        },

        {
            id: 2,
            name: "GlamStore",
            category: "web con código",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FshoppingCar.jpg?alt=media&token=52ce9cbf-1535-403d-9144-7868e92e8c30",
            description:
                "Este proyecto ofrece una plataforma para adquirir una amplia variedad de ropa para dama. Está desarrollado exclusivamente con tecnologías nativas como JavaScript, CSS, Flexbox, Grid. Además de integrar SweetAlert para notificaciones y mensajes de confirmación personalizados, mejorando así la experiencia del usuario",
            liveLink: "https://shopping-cart-nu-three.vercel.app/",
            githubLink: "https://github.com/sofia-torres-v/Shopping-Cart-App",
            skills: ["HTML", "CSS", "JavaScript", "sweetalert2"],
        },

        {
            id: 3,
            name: "Juego Número secreto",
            category: "web con código",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FnumeroSecreto.jpg?alt=media&token=432675ba-e3ef-4ded-a477-52e6bcd9fe37",

            description:
                "Este proyecto interactivo, desarrollado con HTML, CSS y JavaScript, desafía a los usuarios a adivinar un número aleatorio del 1 al 10.A medida que el usuario introduce un número, el programa proporciona indicadores como demasiado alto o demasiado bajo, lo que les permite ajustar su siguiente intento de manera inteligente.",
            liveLink: "https://sofia-torres-v.github.io/Juego-Numero-Secreto/",
            githubLink:
                "https://github.com/sofia-torres-v/Juego-Numero-Secreto",
            skills: ["HTML", "CSS", "JavaScript-vanilla"],
        },
        {
            id: 4,
            name: "Encriptador de textos",
            category: "web con código",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fencriptador.jpg?alt=media&token=89a1c0a1-7b15-47b5-abd8-6e042ca44fd6",
            description:
                "El Encriptador de Texto, desarrollado en JavaScript, te permite cifrar y descifrar texto de forma eficiente. Con esta herramienta, puedes proteger mensajes confidenciales mediante el cifrado y restaurarlos a su forma original cuando lo necesites. Simplemente ingresa el texto que deseas encriptar, y la herramienta generará automáticamente una versión cifrada. ",
            liveLink: "https://sofia-torres-v.github.io/Encriptador-de-texto/",
            githubLink:
                "https://github.com/sofia-torres-v/Encriptador-de-texto",
            skills: ["HTML", "CSS", "JavaScript-vanilla"],
        },
        {
            id: 5,
            name: "Burger Queen",
            category: "web con código",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fweb-burger.jpg?alt=media&token=ebea70aa-6e3e-4f38-9eb2-cb8f0244522d",
            description:
                "Proyecto desarrollado con React que ofrece una interfaz para restaurantes. Permite a los meseros tomar pedidos de manera eficiente mediante tablet y enviarlos a la cocina en tiempo real. El sistema garantiza una organización óptima de los pedidos. Además, el administrador tiene acceso completo para gestionar productos y usuarios..",
            liveLink: "https://burger-queen-api-client-henna.vercel.app/",
            githubLink: "https://github.com/sofia-torres-v/Burger-Queen",
            skills: ["HTML", "CSS", "JavaScript", "React"],
        },
        {
            id: 6,
            name: "Social Network",
            category: "web con código",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FwebSocial.jpg?alt=media&token=bd29f270-ddac-440a-92a6-872ddd0d03c7",
            description:
                "Se creó una red social para jugadores, donde los usuarios pueden iniciar sesión con una nueva cuenta o a través de Google. Pueden crear, editar y eliminar publicaciones, además de dar 'me gusta'. Esta plataforma promueve la interacción y la conexión entre la comunidad de jugadores.",
            liveLink: "https://social-network-8a6da.web.app/",
            githubLink: "https://github.com/sofia-torres-v/Social-Network",
            skills: ["HTML", "CSS", "JavaScript", "firebase"],
        },

        {
            id: 7,
            name: "Card Validation",
            category: "web con código",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FcardValidation.jpeg?alt=media&token=95f3acdb-4814-4502-b87c-9ea6da5f5556",
            description:
                "Aplicación web que permite a los usuarios verificar su número de tarjeta de crédito. Su función principal es ocultar todos los dígitos excepto los últimos cuatro. Esta herramienta ofrece una forma segura y conveniente para que los usuarios verifiquen sus números de tarjeta de crédito sin comprometer su seguridad.",
            liveLink:
                "https://sofia-torres-v.github.io/Card-validation/src/index.html",
            githubLink: "https://github.com/sofia-torres-v/Card-validation",
            skills: ["HTML", "CSS", "JavaScript"],
        },
        {
            id: 8,
            name: "BlackJack Chauffeurs",
            category: "web con WordPress",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FblackJack.jpg?alt=media&token=a731fffe-6ec4-4e06-aee2-71fb393dce55",
            description:
                "Este sitio web desarrollado en WordPress ofrece servicios de taxi. Cuenta con un formulario que permite a los usuarios hacer reservas por ruta o viaje, brindando flexibilidad en la planificación de sus desplazamientos. Además, el sitio ofrece conexión directa a WhatsApp . Cuenta con una sección de reseñas, los usuarios pueden ver las experiencias de otros clientes, lo que añade credibilidad y confianza.",
            liveLink: "https://www.blackjackchauffeurs.com/",     
            skills: ["HTML", "CSS-vanilla", "Wordpress"],
        },
        
        {
            id: 9,
            name: "HomeShop",
            category: "web con WordPress",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FhomeShop.jpg?alt=media&token=d3bdf80c-92b2-43fe-8bbd-e8ebe432777c",
            description:
                "He desarrollado una tienda en línea en Shopify que ofrece productos para el hogar, tecnología y cocina. Utilicé CSS para personalizar el diseño, asegurando una experiencia de usuario atractiva. La tienda incluye un formulario de compra intuitivo y permite la interacción directa con clientes a través de WhatsApp para una atención rápida y eficiente.",
            liveLink: "https://homeshop593.com/",
            skills: ["HTML", "CSS-vanilla", "Wordpress"],
        },
        {
            id: 10,
            name: "LolyFernandez Nails",
            category: "web con WordPress",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2F2dbafe61-3659-491b-bae6-80de187ecea9.jpg?alt=media&token=6392ed40-099e-480c-91f6-a0a4b9360746",
            description:
                "He desarrollado un sitio web para un spa especializado en manicura, pedicura y masajes de manos y pies, utilizando WordPress.El diseño está personalizado con CSS para ofrecer una experiencia visual atractiva. El sitio incluye redirecciones a redes sociales y llamadas directas a celular, además de un formulario de contacto integrado para facilitar la comunicación con los clientes.",
            liveLink: "https://lolyfernandez.es/",       
            skills: ["HTML", "CSS-vanilla", "Wordpress"],
        },
        {
            id: 11,
            name: "BrownAutoCare",
            category: "web con WordPress",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FbrownAutoCare.jpg?alt=media&token=8d9543c9-9d5c-481f-907e-f79c9391b86b",
            liveLink: "https://brownautocarefl.com/",
            description:
                "Desarrollamos el sitio web para un cliente en el sector automotriz en Estados Unidos. Abordamos desafíos técnicos en Shopify, liderando diseño e interacciones. Implementamos ajustes personalizados con CSS para mejorar la presencia en línea del cliente.El proyecto involucró la creación de una tienda en línea altamente personalizada.",
            skills: ["HTML", "CSS-Vanilla", "shopify"],
        },
     
       

    ],
    aboutData: {
        name: "Sofia Torres",
        email: "sofy.torresv@gmail.com",
        linkedin:
            "https://www.linkedin.com/in/sofia-torres-v-front-end-developer/",
        gitHub: "https://github.com/sofia-torres-v",
        studiesWithImages: [
            {
                name: "Bootcamp de Desarrollo Web Front-End | Febrero 2023",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Flogo-labo.jpg?alt=media&token=24e9c81c-e01e-416a-aa9b-133d9c1996ae",
            },
            {
                name: "Bootcamp de Desarrollo Web Front-End | Actualmente",
                image: "src/assets/images/codeable.jpg",
            },
            {
                name: "CoderHouse",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fcoderhouse.jpeg?alt=media&token=40976d05-dcbd-4e04-ac24-d9369c56f910",
            },
            {
                name: "Platzi",
                image: "../assets/images/platzi-logo.jpg",
            },
        ],
        skillsWithImages: [
            {
                name: "React",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Freact2.png?alt=media&token=57202567-da84-4c93-a487-a5f0e0d66e7a",
            },
            {
                name: "JavaScript",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fjs-figma.png?alt=media&token=404382fd-2301-48d3-875d-643afbc397cc",
            },
            {
                name: "HTML",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fhtml-portfolio.png?alt=media&token=51566a46-1392-47f1-bb44-3dd1db1b8cdf",
            },
            {
                name: "Css",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fcss-portfolio.png?alt=media&token=21571067-f65e-4e6c-85ee-ffce0d619a33",
            },
            {
                name: "Material UI",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fmaterialui-porfolio.png?alt=media&token=58dcd1f0-c618-422e-805d-b0eed43022aa",
            },
            {
                name: "Firebase",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Ffirebase.png?alt=media&token=d5168f94-5e82-4f40-9c05-69866eb3f009",
            },
            {
                name: "Git",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fgit-portfolio.png?alt=media&token=c6f757b4-694a-468c-b9f2-a2cc7c906617",
            },
            {
                name: "Wordpress",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fgrommet-icons_wordpress.png?alt=media&token=e1afdf72-25cc-4a94-b0aa-dfe4a3b3d94a",
            },
            {
                name: "Shopify",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fshopify-portfolio.png?alt=media&token=cafbab83-d401-4613-8e7e-38b53267c25a",
            },
        ],
    },
};

export default data;
