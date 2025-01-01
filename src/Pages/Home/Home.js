import "./Home.scss";

export const Home = () => {
  return (
    <section className="home">
      <div className="home__info">
        <div className="home__description">
          <h1 className="home__name">Hanna Vasylieva</h1>
          <p className="home__about">
            Detail-oriented front-end developer with a passion for creating
            functional and visually appealing websites. Have a proven track
            record of building impactful projects using a variety of
            technologies. What drives me is the joy of solving complex problems,
            crafting intuitive user interfaces, and pushing the boundaries of
            what's possible.
          </p>
        </div>

        <div className="home__photo">
          <img className="home__img" src="1.jpg" alt="myPhoto" />
        </div>
      </div>

      <div className="home__worked">
        <p className="home__worked-text">Worked with</p>

        <ul className="home__list">
          <li className="home__li">
            <img src="react.png" alt="react" className="home__icon"/>
            <span className="home__li-text">React & Redux</span>
          </li>

          <li className="home__li">
            <img src="java-script.png" alt="javascript" className="home__icon"/>
            <span className="home__li-text">Javascript</span>
          </li>

          <li className="home__li">
            <img src="typescript.png" alt="typescript" className="home__icon"/>
            <span className="home__li-text">Typescript</span>
          </li>

          <li className="home__li">
            <img src="figma.png" alt="Figma" className="home__icon"/>
            <span className="home__li-text">Figma</span>
          </li>

          <li className="home__li">
            <img src="node-js.png" alt="react" className="home__icon"/>
            <span className="home__li-text">Node</span>
          </li>

          <li className="home__li">
            <img src="mongo.png" alt="react" className="home__icon"/>
            <span className="home__li-text">MongoDB</span>
          </li>

          <li className="home__li">
            <img src="postman.png" alt="react" className="home__icon"/>
            <span className="home__li-text">Postman</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
