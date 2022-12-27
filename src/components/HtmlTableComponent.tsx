import React from "react";
import spotifyData from "../mock-data/my-spotify-library.json";

const HtmlTableComponent = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Album</th>
            <th>Track</th>
            <th>uri</th>
          </tr>
        </thead>
        <tbody>
          {spotifyData.tracks.map((row: any) => (
            <tr key={row.uri}>
              <td align="left">{row.artist}</td>
              <td align="left">{row.album}</td>
              <td align="left">{row.track}</td>
              <td align="left">{row.uri}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HtmlTableComponent;
