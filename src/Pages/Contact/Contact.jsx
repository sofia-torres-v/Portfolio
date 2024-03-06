import './Contact.css'

const Contact = () => {
    return (
        <section id="contact">
                <section className='container-main-home'>
            <div className='box'>

              <div className='container-hello'>
                <span className='span-hello'>Hola. mi nombre es</span>
                <h1 className='title-home'>Sofia Torres</h1>
                <span className='span-frontend'>  &gt; Frontend Developer</span>
               
                <p className='text-home'> Apasionada por el diseño visual y fascinada por el css.</p>
                <div className="about__image-social">
                <p className='text-home'>Si buscas talento comprometido, hablemos</p>
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

              <div className='container-github-profile'>
                {/* <p className='titleGithubProfile'>//Find my profile on Github:</p> */}
                <div className='containerGithubLink'>
                  <p>
                    {/* <span className='githubLinkCode'>const </span> */}
                    {/* <span className='githubLinkVariable'>githubLink </span> */}
                    {/* <span className='githubLinkOperator'>= </span> */}
                    {/* <a className='githubLinkURL' href='https://github.com/andrenavas' target='_blank'>'https://github.com/andrenavas'</a> */}
                    {/* <span className='githubLinkOperator'>;</span> */}
                  </p>
                </div>
              </div>
            </div>
            {/* <Button linkTo='./projects' descriptionButton='view-projects'/> */}
          </section>
        </section>
    );
};

export default Contact;
