import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  theadStyle: {
    border: "1px solid black",
    textAlign: "center",
  },
  tCellStyle: {
    border: "1px solid rgba(0, 0, 0, .3);",
    textAlign: "center",
  },
});

export const ProductCountTable = (props) => {
  const { propData } = props;

  const classes = useStyles();

  function createCellData(propData) {
    let singleYear = propData
      .filter((row) => row.fy === 2020)
      .filter((row) => row.productAbbrev !== "missing");

    let productCount = singleYear.length;

    let decreasedCount = 0;
    let missedTarget = 0;

    for (let i = 0; i < singleYear.length; i++) {
      const currentRow = singleYear[i];
      if (currentRow.pctOnTime - currentRow.target < 0) {
        missedTarget += 1;
      }
      if (decreasedThisYear(currentRow.productId)) {
        decreasedCount += 1;
      }
    }

    const rez = [productCount, missedTarget, decreasedCount];

    return rez;
  }

  function decreasedThisYear(productId) {
    const thisProduct = propData.filter((row) => row.productId === productId);

    const thisYearScore = thisProduct.filter((row) => row.fy === 2020)[0]
      .pctOnTime;
    const lastYearScore = thisProduct.filter((row) => row.fy === 2019)[0]
      .pctOnTime;

    return thisYearScore < lastYearScore;
  }

  const cellData = createCellData(propData);

  const cellCode = cellData.map((el, ind) => (
    <TableCell align="right" key={`cell${ind}`} className={classes.tCellStyle}>
      {el}
    </TableCell>
  ));
  const tableBody = <TableRow>{cellCode}</TableRow>;
  const tableHead = (
    <TableHead>
      <TableRow>
        <TableCell className={classes.theadStyle}>Product Count</TableCell>
        <TableCell className={classes.theadStyle} align="right">
          Products Missed Target
        </TableCell>
        <TableCell className={classes.theadStyle} align="right">
          Products Decreased This Year
        </TableCell>
      </TableRow>
    </TableHead>
  );

  return (
    <TableContainer>
      <Table>
        {tableHead}
        <TableBody>{tableBody}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductCountTable;
