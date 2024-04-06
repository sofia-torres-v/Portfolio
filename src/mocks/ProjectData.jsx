const data = {
    projectsData: [
        {
            id: 1,
            name: "BrownAutoCare",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FbrownAutoCare.jpg?alt=media&token=8d9543c9-9d5c-481f-907e-f79c9391b86b",
            liveLink: "",
            githubLink: "",
            description:
                "Desarrollamos el sitio web para un cliente en el sector automotriz en Estados Unidos. Abordamos desafíos técnicos en Shopify, liderando diseño e interacciones. Implementamos ajustes personalizados con CSS para mejorar la presencia en línea del cliente.El proyecto involucró la creación de una tienda en línea altamente personalizada.",
            skills: ["HTML", "CSS-Vanilla", "shopify"],
        },
        {
            id: 2,
            name: "JS Motos",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FjsMotosImport.jpg?alt=media&token=7a74b3fa-1937-4d82-a7a5-1654416104de",
            description:
                "JS Motos, es un proyecto dedicado a la fabricación y venta de empaquetaduras para motocicletas en Perú. Este sitio web fue desarrollado con React y Bootstrap, ofreciendo una interfaz moderna y atractiva. Además, cuenta con funcionalidades como conexión directa a WhatsApp, Facebook Messenger y TikTok, junto con un formulario de contacto que dirige a Gmail.",
            liveLink: "",
            githubLink: "",
            skills: ["html", "css", "JavaScript", "React", "firebase"],
        },

        {
            id: 3,
            name: "BlackJack Chauffeurs",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FblackJack.jpg?alt=media&token=a731fffe-6ec4-4e06-aee2-71fb393dce55",
            description:
                " Este proyecto ofrece una plataforma para adquirir una amplia variedad de ropa para dama. Está desarrollado exclusivamente con tecnologías nativas como JavaScript, CSS, Flexbox, Grid. Además de integrar SweetAlert para notificaciones y mensajes de confirmación personalizados, mejorando así la experiencia del usuario ",
            liveLink: "",
            githubLink: "",
            skills: ["HTML", "CSS-vanilla", "Wordpress"],
        },

        {
            id: 4,
            name: "GlamStore",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FshoppingCar.jpg?alt=media&token=52ce9cbf-1535-403d-9144-7868e92e8c30",
            description:
                " Este proyecto ofrece una plataforma para adquirir una amplia variedad de ropa para dama. Está desarrollado exclusivamente con tecnologías nativas como JavaScript, CSS, Flexbox, Grid. Además de integrar SweetAlert para notificaciones y mensajes de confirmación personalizados, mejorando así la experiencia del usuario",
            liveLink: "",
            githubLink: "",
            skills: ["HTML", "CSS", "JavaScript", "sweetalert2"],
        },

        {
            id: 5,
            name: "Juego Número secreto",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FnumeroSecreto.jpg?alt=media&token=432675ba-e3ef-4ded-a477-52e6bcd9fe37",

            description:
                "Este proyecto interactivo, desarrollado con HTML, CSS y JavaScript, desafía a los usuarios a adivinar un número aleatorio del 1 al 10.A medida que el usuario introduce un número, el programa proporciona indicadores como demasiado alto o demasiado bajo, lo que les permite ajustar su siguiente intento de manera inteligente.",
            liveLink: "",
            githubLink: "",
            skills: ["HTML", "CSS", "JavaScript-vanilla"],
        },
        {
            id: 6,
            name: "Encriptador de textos",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fencriptador.jpg?alt=media&token=89a1c0a1-7b15-47b5-abd8-6e042ca44fd6",
            description:
                "El Encriptador de Texto, desarrollado en JavaScript, te permite cifrar y descifrar texto de forma eficiente. Con esta herramienta, puedes proteger mensajes confidenciales mediante el cifrado y restaurarlos a su forma original cuando lo necesites. Simplemente ingresa el texto que deseas encriptar, y la herramienta generará automáticamente una versión cifrada. ",
            liveLink: "",
            githubLink: "",
            skills: ["HTML", "CSS", "JavaScript-vanilla"],
        },
        {
            id: 7,
            name: "Burger Queen  ",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fweb-burger.jpg?alt=media&token=ebea70aa-6e3e-4f38-9eb2-cb8f0244522d",
            description:
                " cincoLanding page para negocio dedicado a la venta de repuestos para motos, integrando Gmail para formularios y habilitamos conexión a WhatsApp.",
            liveLink: "",
            githubLink: "",
            skills: ["HTML", "CSS", "JavaScript", "React"],
        },
        {
            id: 8,
            name: "Social Network ",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FwebSocial.jpg?alt=media&token=bd29f270-ddac-440a-92a6-872ddd0d03c7",
            description:
                " cincoLanding page para negocio dedicado a la venta de repuestos para motos, integrando Gmail para formularios y habilitamos conexión a WhatsApp.",
            liveLink: "",
            githubLink: "",
            skills: ["HTML", "CSS", "JavaScript", "firebase"],
        },
        {
            id: 9,
            name: "Data Lovers ",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FwebData.jpg?alt=media&token=a0379cd3-b8f7-4d8e-9923-0db7b6f8ffe0",
            description:
                " cincoLanding page para negocio dedicado a la venta de repuestos para motos, integrando Gmail para formularios y habilitamos conexión a WhatsApp.",
            liveLink: "",
            githubLink: "",
            skills: ["HTML", "CSS", "JavaScript"],
        },
        {
            id: 10,
            name: "Card Validation",
            date: "October 2023",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2FcardValidation.jpeg?alt=media&token=95f3acdb-4814-4502-b87c-9ea6da5f5556",
            description:
                " cincoLanding page para negocio dedicado a la venta de repuestos para motos, integrando Gmail para formularios y habilitamos conexión a WhatsApp.",
            liveLink: "",
            githubLink: "",
            skills: ["HTML", "CSS", "JavaScript"],
        },
    ],
    aboutData: {
        name: "Sofia Torres",
        image: "",
        description: "",
        email: "sofy.torresv@gmail.com",
        linkedin:
            "https://www.linkedin.com/in/sofia-torres-v-front-end-developer/",
        gitHub: "https://github.com/sofia-torres-v",
        skillsWithImages: [
            {
                name: "React",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Freact-portfolio.png?alt=media&token=b4580ea4-a159-4d9c-8fda-eec0aca00c4d",
            },
            {
                name: "JavaScript",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fjs.png?alt=media&token=1d623a88-38fb-4c6b-a8a3-bbd542b16520",
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
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fgit-fork-outline.png?alt=media&token=bfe020ac-4db2-4614-9137-718197fb127f",
            },
            {
                name: "Wordpress",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fwordpress-about.png?alt=media&token=f24795f8-621d-428c-9320-ed229c511d0d",
            },
            {
                name: "Shopify",
                image: "https://firebasestorage.googleapis.com/v0/b/portfolio-97384.appspot.com/o/project-images%2Fshopify-portfolio.png?alt=media&token=cafbab83-d401-4613-8e7e-38b53267c25a",
            },
        ],
    },
};

export default data;
