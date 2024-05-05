import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { worldMill } from "@react-jvectormap/world";
import { fetchHome } from "../store/actions";
import { Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Country = () => {
  const { countryCode } = useParams();
  const { homeData } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const countryData = worldMill.content.paths[countryCode];
    dispatch(fetchHome(countryData.name));
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [dispatch, countryCode]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="border" role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Card
          style={{ width: "18rem" }}
          className="d-flex justify-content-center align-items-center text-center"
        >
          <Card.Header style={{ backgroundColor: "white" }}>
            <h3>{homeData["Country_text"]}</h3>
          </Card.Header>
          <Card.Img
            variant="top"
            src="https://openwho-public.s3.openhpicloud.de/courses/2HZbOU4WYXwjTbONm1kSZB/visual_v6.PNG"
            style={{ maxHeight: "140px", maxWidth: "100%", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Text>
              <a>Total Confirmed : {homeData["Total Cases_text"]}</a>
              <br />
              <a>Total Deaths : {homeData["Total Deaths_text"]}</a>
              <br />
              <a>Total Recovered : {homeData["Total Recovered_text"]}</a>
              <br />
              <a>Last Update : {homeData["Last Update"]}</a>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Country;
