import React from "react";
// import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";

const MoreInformation = (props) => {
  const movie = props.location.state.movie;
  const history = useHistory();
  return (
    <div>
      <Card className="description-card" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text calssName="description">{movie.description}</Card.Text>
          <video src={movie.video} width="320" height="240" controls></video>
          <button
            style={{
              color: "white",
              backgroundColor: "Highlight",
              marginTop: "2%",
            }}
            onClick={() => history.goBack()}
          >
            Home
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default MoreInformation;
