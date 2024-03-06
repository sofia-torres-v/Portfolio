import "./Home.css";

const Home = () => {
    return (
        <section id="Home">
            <section className="home__content">
                <div className="container-hello">
                    <span className="span-hello">Hola, mi nombre es</span>
                    <h1 className="title-home">Sofia Torres</h1>
                    <span className="span-frontend">
                        &gt; Frontend Developer
                    </span>
                    <p className="text-home">
                        Apasionada por el diseño visual y fascinada por el css.
                    </p>
                    <div className="about__image-social">
                        {/* <p className='text-home'>Si buscas talento comprometido, hablemos</p> */}
                        <a href="#" className="about__social-link">
                            <i className="bx bxs-envelope"></i>
                        </a>
                        <a href="#" className="about__social-link">
                            <i className="bx bxl-linkedin"></i>
                        </a>
                        <a href="#" className="about__social-link">
                            <i className="bx bxl-github"></i>
                        </a>
                    </div>
                </div>

                {/* <Button linkTo='./projects' descriptionButton='view-projects'/> */}
            </section>
        </section>
    );
};

export default Home;
