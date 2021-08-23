import data from "../Data/quarterlyData.json";

import ProductGraph from "../DashComponents/ProductGraph";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const ProductPage = (props) => {
  const { selectedProductId } = props;

  let productId = parseInt(selectedProductId);

  const productData = data.filter((row) => row.productId === productId);

  let renderedProduct;

  let renderedSection;

  if (productId && productId !== 0) {
    renderedSection = (
      <ProductPageFull productId={productId} productData={productData} />
    );
  } else {
    renderedSection = <EmptyProductPage />;
  }

  return <div>{renderedSection}</div>;
};

const useStyles = makeStyles((theme) => ({
  fullProductContainer: {
    marginTop: "3%",
    backgroundColor: "black",
  },
  quarterlyContainer: {
    // marginTop: "2%",
  },
  fullProductContainer: {
    // marginTop: "2%",
  },
}));

const ProductPageFull = (props) => {
  const classes = useStyles();

  const { productId, productData } = props;

  return (
    <div style={{ marginTop: "2%" }}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper>
            <p>{productData[0].product}</p>
            <ProductGraph propData={productData} />
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper>quarterly graph component</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const EmptyProductPage = () => {
  return <></>;
};

export default ProductPage;
