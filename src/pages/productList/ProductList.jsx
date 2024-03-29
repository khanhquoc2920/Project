import './productList.css'
import { DataGrid } from "@mui/x-data-grid";
import  DeleteOutlineIcon  from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../Data";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Sản phẩm",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Số lượng", width: 200 },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 120,
    },
    {
      field: "price",
      headerName: "Giá",
      width: 160,
    },
    {
      field: "action",
      headerName: "Hành động",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Cập nhật</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList" >
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
       
      />
    </div>
  );
}