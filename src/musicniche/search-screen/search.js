import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";

const CLIENT_ID = "0e2a3e40589e4864a245fd95433a3374";
const CLIENT_SECRET = "b3cd4ec1803547bda3b0582b9216c99b";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
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
  }, []);

  // Search
  async function search() {
    console.log("Search for " + searchInput); // Bruno Mars
    console.log("Token is: " + accessToken);

    // Get request using search to get the Artist ID
    var searchArtistParameters = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    };
    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchArtistParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data.artists.items[0].id;
      });
    console.log("Artist ID is " + artistID);

    // Get request with Artist ID grab all the albums from that artist
    var returnAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=US&limit=50",
      searchArtistParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("This is Data ------");
        console.log(data);
        setAlbums(data.items);
      });

    // Display
  }

  console.log(albums);

  return (
    <div className="container">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search"
            type="input"
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button onClick={search}>Search</Button>
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
                        fontSize: "20px",
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
