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
            liveLink: "https://jsmotos-e4995.web.app/",
            githubLink: "https://github.com/sofia-torres-v/Js-Motos",
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
        },
        {
            id: 4,
            name: "Burger Queen",
            category: "web con código",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fweb-burger.jpg?alt=media&token=ebea70aa-6e3e-4f38-9eb2-cb8f0244522d",
            description:
                "Proyecto desarrollado con React que ofrece una interfaz para restaurantes. Permite a los meseros tomar pedidos de manera eficiente mediante tablet y enviarlos a la cocina en tiempo real. El sistema garantiza una organización óptima de los pedidos. Además, el administrador tiene acceso completo para gestionar productos y usuarios..",
            liveLink: "https://burger-queen-api-client-henna.vercel.app/",
            githubLink: "https://github.com/sofia-torres-v/Burger-Queen",
        },
        {
            id: 5,
            name: "Social Network",
            category: "web con código",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FwebSocial.jpg?alt=media&token=bd29f270-ddac-440a-92a6-872ddd0d03c7",
            description:
                "Se creó una red social para jugadores, donde los usuarios pueden iniciar sesión con una nueva cuenta o a través de Google. Pueden crear, editar y eliminar publicaciones, además de dar 'me gusta'. Esta plataforma promueve la interacción y la conexión entre la comunidad de jugadores.",
            liveLink: "https://social-network-8a6da.web.app/",
            githubLink: "https://github.com/sofia-torres-v/Social-Network",
        },

        {
            id: 6,
            name: "Card Validation",
            category: "web con código",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FcardValidation.jpeg?alt=media&token=95f3acdb-4814-4502-b87c-9ea6da5f5556",
            description:
                "Aplicación web que permite a los usuarios verificar su número de tarjeta de crédito. Su función principal es ocultar todos los dígitos excepto los últimos cuatro. Esta herramienta ofrece una forma segura y conveniente para que los usuarios verifiquen sus números de tarjeta de crédito sin comprometer su seguridad.",
            liveLink:
                "https://sofia-torres-v.github.io/Card-validation/src/index.html",
            githubLink: "https://github.com/sofia-torres-v/Card-validation",
        },
        {
            id: 7,
            name: "BlackJack Chauffeurs",
            category: "web con ecommerce",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FblackJack.jpg?alt=media&token=a731fffe-6ec4-4e06-aee2-71fb393dce55",
            description:
                "Sitio web desarrollado en WordPress ofrece servicios de taxi. Cuenta con un formulario que permite a los usuarios hacer reservas por ruta o viaje, brindando flexibilidad en la planificación de sus desplazamientos. Además, el sitio ofrece conexión directa a WhatsApp . Cuenta con una sección de reseñas, los usuarios pueden ver las experiencias de otros clientes, lo que añade credibilidad y confianza.",
            liveLink: "https://www.blackjackchauffeurs.com/",
        },

        {
            id: 8,
            name: "Talks 40",
            category: "web con ecommerce",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Ftalks.jpg?alt=media&token=256f8587-ffdd-469c-b537-b78776c16878",
            description:
                "Sitio web creado para una plataforma de empoderamiento femenino en Uruguay. Ofrece charlas inspiradoras, artículos en el blog y una opción de suscripción para mantenerse al día con nuevos contenidos. El diseño es limpio, profesional y enfocado en la accesibilidad y la conexión con la comunidad.",
            liveLink: "https://talksplus40.com/",
        },
        {
            id: 9,
            name: "HomeShop",
            category: "web con ecommerce",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FhomeShop.jpg?alt=media&token=d3bdf80c-92b2-43fe-8bbd-e8ebe432777c",
            description:
                "Tienda en línea en Shopify que ofrece productos para el hogar, tecnología y cocina. Utilicé CSS para personalizar el diseño, asegurando una experiencia de usuario atractiva. La tienda incluye un formulario de compra intuitivo y permite la interacción directa con clientes a través de WhatsApp para una atención rápida y eficiente.",
            liveLink: "https://homeshop593.com/",
        },
        {
            id: 10,
            name: "JR Plumbing",
            category: "web con ecommerce",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fju-plumbing.jpg?alt=media&token=2f300008-c6f7-4019-a3f6-266dbfa67f9b",
            description:
                "Sitio web para empresa de plomería ubicada en Estados Unidos. Ofrece servicios tanto residenciales como comerciales, incluyendo gasfitería, reparaciones e instalaciones. Presenta un diseño funcional y directo, con formulario de contacto y secciones claras que facilitan la solicitud de servicios.",
            liveLink: "https://jrplumbingva.com/",
        },
        {
            id: 11,
            name: "Luxury Driver Service",
            category: "web con ecommerce",
            date: "December 2024",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fluxury.jpg?alt=media&token=2053c016-2c34-4b2b-bcaf-6bc8885f0f3b",
            description:
                "Página web para un servicio de transporte privado de lujo en el sur de Florida. Los usuarios pueden agendar traslados con chofer para distintas ocasiones, desde viajes ejecutivos hasta eventos especiales. Cuenta con formularios personalizados y diseño elegante que resalta la experiencia premium.",
            liveLink: "https://luxurydriverservice.com/",
        },
        {
            id: 12,
            name: "Flora Pharma",
            category: "web con ecommerce",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fflora.jpg?alt=media&token=ab459d4b-9db6-4a4d-83a5-8c01424e55dc",
            description:
                "Tienda en línea para una farmacia natural en Ecuador. Ofrece productos de salud y bienestar con enfoque en medicina natural. El sitio fue desarrollado en Shopify con personalización en CSS para reflejar una imagen profesional, cercana y confiable. Incluye carrito de compras, buscador y atención vía WhatsApp.",
            liveLink: "https://www.florapharmaec.com/",
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
                name: "Bootcamp Front End - Febrero 2023",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Flogo-labo.jpg?alt=media&token=24e9c81c-e01e-416a-aa9b-133d9c1996ae",
            },
            {
                name: "Bootcamp Full Stack - Noviembre 2024",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fcodeable.jpg?alt=media&token=6a65f45b-7e3f-447d-b198-4064b77be916",
            },
        ],
        skillsWithImages: [
            {
                name: "HTML",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fhtml-portfolio.png?alt=media&token=51566a46-1392-47f1-bb44-3dd1db1b8cdf",
            },
            {
                name: "Css",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fcss-portfolio.png?alt=media&token=21571067-f65e-4e6c-85ee-ffce0d619a33",
            },
            {
                name: "JavaScript",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fjs-figma.png?alt=media&token=404382fd-2301-48d3-875d-643afbc397cc",
            },
            {
                name: "React",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Freact2.png?alt=media&token=57202567-da84-4c93-a487-a5f0e0d66e7a",
            },
            {
                name: "TypeScript",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Ficons_typescript1.png?alt=media&token=1d0668be-3808-403b-9699-35d4c757ebf3",
            },
            {
                name: "Tailwind CSS",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Ficon_tailwindcss.png?alt=media&token=ec1b1f5d-8732-4187-b70d-739169b390f7",
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
