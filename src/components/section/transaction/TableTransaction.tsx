import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { CiFilter } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { TransactionData } from "../../../libs/Data/TransactionsData";
import { priceFormat } from "../../../utils/priceFormat";
import { BsThreeDotsVertical } from "react-icons/bs";
import PopperAction from "../../reusable/Popper/PopperAction";
import { TransactionType } from "../../../libs/Types/transaction.type";

const TableTransaction = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [filteredData, setFilteredData] =
    useState<TransactionType[]>(TransactionData);

  //popper action
  const [openPopper, setOpenPopper] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClickPopper = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenPopper((previousOpen) => !previousOpen);
  };

  const canBeOpen = openPopper && Boolean(anchorEl);
  const id = canBeOpen ? "spring-popper" : undefined;

  const styleTH = {
    fontWeight: 700,
    fontSize: "14px",
    color: "#292D32",
  };

  // Handle search with debouncing
  useEffect(() => {
    const handler = setTimeout(() => {
      const filtered = TransactionData.filter((data) =>
        data.courseName.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filtered);
      setPage(0); // Reset to first page on search
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  // Handle pagination
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    if (event) {
      event.preventDefault();
    }
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box sx={{ display: "flex", gap: 2, width: "90%" }}>
        <Button
          sx={{
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 600,
            color: "#616161",
            backgroundColor: "#C4C4C4",
            borderRadius: "8px",
            padding: "8px 16px",
            "&:hover": {
              backgroundColor: "grey",
              color: "white",
            },
          }}
          startIcon={<CiFilter size={24} />}
        >
          Filter
        </Button>
        <TextField
          variant="outlined"
          placeholder="Search"
          sx={{
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #7340E5",
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "1px solid #7340E5",
              },
              "&.Mui-focused fieldset": {
                border: "1px solid #7340E5",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GoSearch size={24} />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </Box>
      <Box>
        <Table>
          <TableHead sx={{ backgroundColor: "white", fontFamily: "Mulish" }}>
            <TableRow sx={{ borderBottom: "4px solid #F7F7FC" }}>
              <TableCell sx={styleTH} align="center">
                Nomor
              </TableCell>
              <TableCell sx={styleTH} align="center">
                Course Title & Author
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
                Status
              </TableCell>
              <TableCell sx={styleTH} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ fontFamily: "Mulish", bgcolor: "white" }}>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data, index) => (
                <TableRow key={data.id}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">
                    <Typography sx={{ color: "#7340E5" }}>
                      {data.courseName}
                    </Typography>
                    <Typography sx={{ color: "#292D32" }}>
                      Author: {data.authorName}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">{data.type}</TableCell>
                  <TableCell align="center">
                    Rp. {priceFormat(data.price)}
                  </TableCell>
                  <TableCell align="center">{data.purchaseDate}</TableCell>
                  <TableCell align="center">
                    <Chip
                      label={data.status}
                      sx={{
                        borderRadius: "4px",
                        backgroundColor:
                          data.status === "Active" ? "#DFF0D8" : "#F2DEDE",
                        border:
                          data.status === "Active"
                            ? "1px solid #28A845"
                            : "1px solid #D32F2F",
                        color: data.status === "Active" ? "#28A845" : "#D32F2F",
                        textTransform: "capitalize",
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <IconButton onClick={handleClickPopper}>
                      <BsThreeDotsVertical size={24} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ fontFamily: "Mulish", backgroundColor: "white" }}
        />
      </Box>
      <PopperAction id={id} openPopper={openPopper} anchorEl={anchorEl} />
    </Box>
  );
};

export default TableTransaction;
