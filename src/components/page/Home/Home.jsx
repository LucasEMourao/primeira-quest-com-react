import logo from "../../../assets/imagens/logo.svg";
import mockups from "../../../assets/imagens/illustration-mockups.svg";
import { Body, Header, Main, Info, Footer } from "./style";

const Page = () => {
  return (
    <Body>
      <Header>
        <img src={logo} alt="Imagem logo" />
      </Header>

      <Main>
        <div>
          <img src={mockups} alt="imagem mockups" />
        </div>

        <Info>
          <h1>
            Build The Community <br /> Your Fans Will Love
          </h1>

          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>

          <button>
            <a href="/">Register</a>
          </button>
        </Info>
      </Main>

      <Footer>
        <ul>
          <li>
            <i className="fab fa-facebook"></i>
          </li>
          <li>
            <i className="fab fa-twitter"></i>
          </li>
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </ul>
      </Footer>
    </Body>
  );
};

export default Page;
