import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from "@mui/material";

function ProductGrid() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products")
      .then(res => {
        setProducts(res.data)
      })
  }, [])

  const handleDeleteClick = async (id) => {
    const ff = "northwind"
    await axios.delete(`https://${ff}.vercel.app/api/products/${id}`);


    setProducts(products.filter((product) => product.id !== id));

      

  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'unitPrice', headerName: 'Unit Price', type: 'number', width: 200 },
    { field: 'unitsInStock', headerName: 'Units In Stock', type: 'number', width: 200 },
    {
      field: "delete",
      headerName: "Delete",
      width: 250,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDeleteClick(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div>
    
      <DataGrid
        columns={columns}
        rows={products}
        sx={{
          "& .bg-red": {
            backgroundColor: "red",
          }}}
        getRowClassName={(params) => {
          if (params.row.unitsInStock === 0) {
            return "bg-red";
          }
        }}
      />
    </div>
  )
}

export default ProductGrid;
