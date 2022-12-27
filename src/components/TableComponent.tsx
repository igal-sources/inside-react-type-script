import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import spotifyData from "../mock-data/my-spotify-library.json";

const TableComponent = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Artist</TableCell>
              <TableCell>Album</TableCell>
              <TableCell>Track</TableCell>
              <TableCell>uri</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {spotifyData.tracks.map((row: any) => (
              <TableRow key={row.uri} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{row.artist}</TableCell>
                <TableCell>{row.album}</TableCell>
                <TableCell>{row.track}</TableCell>
                <TableCell>{row.uri}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
