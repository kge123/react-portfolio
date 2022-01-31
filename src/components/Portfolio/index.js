import { Container, Col, Row } from "react-bootstrap";

export default function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          <a href="https://github.com/kge123/crypto-dashboard">
            Crypto Dashboard Repo
          </a>
          <p><a href="https://tranquil-everglades-59089.herokuapp.com/">Visit Deployed</a></p>
        </Col>
        <Col xs={6}>
          <a href="https://github.com/djdyer/pokego-weather-companion">
            PokeGo Weather Companion Repo
          </a>
          <p><a href="https://djdyer.github.io/pokego-weather-companion">Visit Deployed</a></p>
        </Col>
        <Col>
          <a href="https://github.com/kge123/text-editor">PWA Text Editor Repo</a>
          <p><a href="https://rocky-mesa-83954.herokuapp.com/">Visit Deployed</a></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="https://github.com/kge123/note-jotter">Note Jotter Repo</a>
          <p><a href="https://pacific-crag-86545.herokuapp.com/">Visit Deployed</a></p>
        </Col>
        <Col xs={6}>
          <a href="https://github.com/kge123/work-day-schedule-planner">
            Day Planner Repo
          </a>
          <p><a href="https://kge123.github.io/work-day-schedule-planner/">Visit Deployed</a></p>
        </Col>
        <Col>
          <a href="https://github.com/kge123/random-password-generator">
            Password Generator Repo
          </a>
          <p><a href="https://kge123.github.io/random-password-generator/">Visit Deployed</a></p>
        </Col>
      </Row>
    </Container>
  );
}
