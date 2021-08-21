import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Typography } from "@material-ui/core";
import { Switch, Route, Link } from "react-router-dom";
import ProductPage from "../mailClassComponents/ProductPage";

export const ProductDropdown = (props) => {
  const { propData } = props;

  console.log(propData);

  const productList = propData.filter((row) => row.fy === 2020);

  console.log(productList);

  const menuItems = productList.map((el) => (
    <Link to={`product/${el.productId}`}>
      {" "}
      <MenuItem value={el.product}>{el.product}</MenuItem>{" "}
    </Link>
  ));

  return (
    <div>
      <Typography>
        View Prouct Level Data <Select>{menuItems}</Select>
      </Typography>

      <Switch>
        <Route exact path="/product/:id">
          <ProductPage />
        </Route>
      </Switch>
    </div>
  );
};

export default ProductDropdown;
