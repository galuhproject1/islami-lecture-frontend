import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";

type Student = {
  id: number;
  name: string;
  type: string;
  price: number;
  date: string;
  email: string;
  status: string;
};
const TableStudents = () => {
  const students: Student[] = [];

  const styleTH = {
    fontWeight: 700,
    fontSize: "14px",
    color: "#292D32",
  };
  return (
    <Box>
      <Table>
        <TableHead sx={{ backgroundColor: "white", fontFamily: "Mulish" }}>
          <TableRow sx={{ borderBottom: "4px solid #F7F7FC" }}>
            <TableCell sx={styleTH} align="center">
              Nomor
            </TableCell>
            <TableCell sx={styleTH} align="center">
              Nama Murid
            </TableCell>
            <TableCell sx={styleTH} align="center">
              Tipe Kelas
            </TableCell>
            <TableCell sx={styleTH} align="center">
              Harga kelas
            </TableCell>
            <TableCell sx={styleTH} align="center">
              Tanggal Pembelian
            </TableCell>
            <TableCell sx={styleTH} align="center">
              Email
            </TableCell>
            <TableCell sx={styleTH} align="center">
              Status
            </TableCell>
            <TableCell sx={styleTH} align="center">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ fontFamily: "Mulish", bgcolor: "white" }}>
          {students.map((data, index) => (
            <TableRow key={data.id}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{data.name}</TableCell>
              <TableCell align="center">{data.type}</TableCell>
              <TableCell align="center">{data.price}</TableCell>
              <TableCell align="center">{data.date}</TableCell>
              <TableCell align="center">{data.email}</TableCell>
              <TableCell align="center">{data.status}</TableCell>
              <TableCell align="center">
                <IconButton>
                  <BsThreeDotsVertical size={24} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {students.length === 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            bgcolor: "white",
          }}
        >
          <Typography>No students found.</Typography>
        </Box>
      )}
    </Box>
  );
};

export default TableStudents;
