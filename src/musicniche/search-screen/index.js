import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as service from "../services/spotify-service";

function SearchScreen() {
  const { searchTerm } = useParams();

  const navigate = useNavigate();
  const [results, setResults] = useState();
  const [query, setQuery] = useState(searchTerm);
  const search = async () => {
    const response = await service.fullTextSearch(query);
    setResults(response);
  };
  useEffect(() => {
    if (searchTerm) {
      setQuery(searchTerm);
      search();
    }
  }, [searchTerm]);
  return (
    <div>
      <h1>Search Screen</h1>
      <button
        className="w-25 float-end btn btn-primary"
        onClick={() => navigate(`/project/search/${query}`)}
      >
        Search
      </button>
      <input
        className="form-control w-75"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className="list-group">
        {results &&
          results.search.data.albums.map((album) => (
            <li className="list-group-item" key={album.id}>
              <h2>
                <Link to={`/project/details/${album.id}`}>{album.name}</Link>
              </h2>
              <img src={service.albumImageUrl(album)} />
            </li>
          ))}
      </ul>

      {/* <pre>{JSON.stringify(Object.keys(results.search.data), null, 2)}</pre> */}

      {/* <pre>{JSON.stringify(results.search.data.albums, null, 2)}</pre> */}
    </div>
  );
}

export default SearchScreen;
