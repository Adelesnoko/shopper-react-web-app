import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import * as service from "../services/spotify-service";

const CLIENT_ID = "0e2a3e40589e4864a245fd95433a3374";
const CLIENT_SECRET = "b3cd4ec1803547bda3b0582b9216c99b";

function Search() {
  const { searchTerm } = useParams();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState(searchTerm);
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  // Search
  async function search() {
    console.log("Search for " + searchInput); // Bruno Mars
    const albumsResult = await service.getAlbumsByArtistName(searchInput);
    setAlbums(albumsResult);
  }
  useEffect(() => {
    if (searchTerm) {
      setSearchInput(searchTerm);
      search();
    }
    // API Access Token
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, [searchTerm]);

  return (
    <div className="container">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder={searchTerm}
            type="input"
            // onKeyUp={(event) => {
            //   if (event.key === "Enter") {
            //     search();
            //   }
            // }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button onClick={() => navigate(`/musicniche/search/${searchInput}`)}>
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {albums.map((album, i) => {
            console.log(album);
            return (
              <Link to={`/musicniche/detail-screen/${album.id}`}>
                <Card>
                  <Card.Img src={album.images[0].url} />
                  <Card.Body>
                    <Card.Title
                      style={{
                        fontSize: "15px",
                        color: "blue",
                      }}
                    >
                      {album.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
export default Search;
