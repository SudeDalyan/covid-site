import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHome } from "../store/actions";
import { Card, Form, Button } from "react-bootstrap";

const Home = () => {
  const { homeData, loading } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedCountry) {
      dispatch(fetchHome(selectedCountry));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center p-2 row">
      <h5 className="text-center">
        Please Select the Country You Want to See Covid-19 Data
      </h5>
      <div className="grid-col-12 d-flex justify-content-center align-items-center">
        <Form onSubmit={handleSubmit} className="d-flex">
          <Form.Select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="m-2"
            size="sm"
          >
            <option>Select Country</option>
            <option value="World">World</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Brazil">Brazil</option>
            <option value="S. Korea">S. Korea</option>
            <option value="Japan">Japan</option>
            <option value="Italy">Italy</option>
            <option value="UK">UK</option>
            <option value="Russia">Russia</option>
            <option value="Turkey">Turkey</option>
            <option value="Spain">Spain</option>
            <option value="Australia">Australia</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Argentina">Argentina</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Mexico">Mexico</option>
            <option value="Iran">Iran</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Poland">Poland</option>
            <option value="Colombia">Colombia</option>
            <option value="Greece">Greece</option>
            <option value="Austria">Austria</option>
            <option value="Portugal">Portugal</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Chile">Chile</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Canada">Canada</option>
            <option value="Belgium">Belgium</option>
            <option value="Israel">Israel</option>
            <option value="DPRK">DPRK</option>
            <option value="Thailand">Thailand</option>
            <option value="Czechia">Czechia</option>
            <option value="Peru">Peru</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Philippines">Philippines</option>
            <option value="South Africa">South Africa</option>
            <option value="Romania">Romania</option>
            <option value="Denmark">Denmark</option>
            <option value="Singapore">Singapore</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Sweden">Sweden</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Serbia">Serbia</option>
            <option value="Iraq">Iraq</option>
            <option value="Hungary">Hungary</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Georgia">Georgia</option>
            <option value="Jordan">Jordan</option>
            <option value="Ireland">Ireland</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Finland">Finland</option>
            <option value="Norway">Norway</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Croatia">Croatia</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Morocco">Morocco</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Cuba">Cuba</option>
            <option value="Ecuador">Ecuador</option>
            <option value="UAE">UAE</option>
            <option value="Panama">Panama</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Nepal">Nepal</option>
            <option value="Belarus">Belarus</option>
            <option value="Latvia">Latvia</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Moldova">Moldova</option>
            <option value="Estonia">Estonia</option>
            <option value="Palestine">Palestine</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Egypt">Egypt</option>
            <option value="Qatar">Qatar</option>
            <option value="Libya">Libya</option>
            <option value="China">China</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Réunion">Réunion</option>
            <option value="Honduras">Honduras</option>
            <option value="Armenia">Armenia</option>
            <option value="Bosnia and Herzegovina">
              Bosnia and Herzegovina
            </option>
            <option value="Oman">Oman</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="North Macedonia">North Macedonia</option>
            <option value="Zambia">Zambia</option>
            <option value="Kenya">Kenya</option>
            <option value="Brunei">Brunei</option>
            <option value="Albania">Albania</option>
            <option value="Botswana">Botswana</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Algeria">Algeria</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Zimbabwe">Zimbabwe</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Martinique">Martinique</option>
            <option value="Laos">Laos</option>
            <option value="Iceland">Iceland</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Maldives">Maldives</option>
            <option value="Namibia">Namibia</option>
            <option value="Uganda">Uganda</option>
            <option value="Ghana">Ghana</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Malta">Malta</option>
          </Form.Select>
          <Button variant="info" type="submit" className="m-2 text-white">
            Select
          </Button>
        </Form>
      </div>

      <div className="grid-col-12 d-flex justify-content-center align-items-center">
        <Card style={{ width: "18rem" }} className="text-center">
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
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
