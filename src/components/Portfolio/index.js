import { Container, Col, Row, Image } from "react-bootstrap";
import Crypto from "../../images/CryptoDashboard.png";
import Poke from "../../images/PokeGoMobile.png";
import Jate from "../../images/JustAnotherTextEditor.jpg";
import Note from "../../images/NoteTaker.jpg";
import Ecommerce from "../../images/ECommerceBackend.jpg";
import Socialmedia from "../../images/SocialMediaAPI.jpg";

export default function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          <Image thumbnail src={Crypto}></Image>
          <div>
            <a href="https://github.com/kge123/crypto-dashboard">
              Crypto Dashboard Repo
            </a>
            <br />
            <a href="https://tranquil-everglades-59089.herokuapp.com/">
              Visit Deployed
            </a>
            <p>
              The Crypto Dashboard was a project I worked on with my fellow
              partners. With it you see updated pricing and more on some of the
              most popular crypto. It also features a Crypto Encyclopedia with
              hundreds of different coins and some information about them.
            </p>
          </div>
        </Col>
        <Col xs={6}>
          <Image thumbnail src={Poke}></Image>
          <div>
            <a href="https://github.com/djdyer/pokego-weather-companion">
              PokeGo Weather Companion Repo
            </a>
            <br />
            <a href="https://djdyer.github.io/pokego-weather-companion">
              Visit Deployed
            </a>
            <p>
              The PokeGo Weather Companion App was made for the fanatics of
              Pokemon Go by my fellow teammates and I! By entering your location
              you can find out what Pokemon are boosted in your area based on
              the current weather. This app is a must for Pokemon Go fans.
            </p>
          </div>
        </Col>
        <Col>
          <Image thumbnail src={Jate}></Image>
          <a href="https://github.com/kge123/text-editor">
            PWA Text Editor Repo
          </a>
          <p>
            <a href="https://rocky-mesa-83954.herokuapp.com/">Visit Deployed</a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image thumbnail src={Note}></Image>
          <a href="https://github.com/kge123/note-jotter">Note Jotter Repo</a>
          <p>
            <a href="https://pacific-crag-86545.herokuapp.com/">
              Visit Deployed
            </a>
          </p>
        </Col>
        <Col xs={6}>
          <Image thumbnail src={Ecommerce}></Image>
          <a href="https://github.com/kge123/e-commerce-back-end">
            E-Commerce Back End
          </a>
          <p>
            <a href="https://watch.screencastify.com/v/Tr9gdJeGSzxk8NQUfQnA">
              Watch Demonstration
            </a>
          </p>
        </Col>
        <Col>
          <Image thumbnail src={Socialmedia}></Image>
          <a href="https://github.com/kge123/random-password-generator">
            Password Generator Repo
          </a>
          <p>
            <a href="https://kge123.github.io/random-password-generator/">
              Watch Demonstration
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
