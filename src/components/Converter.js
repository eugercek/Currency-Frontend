import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import ConverterUnit from "../components/ConverterUnit";

const Converter = ({ currencies }) => {
  const [valA, setValA] = useState(0);
  const [valB, setValB] = useState(0);
  const [selA, setSelA] = useState(currencies[0].buyingPrice);
  const [selB, setSelB] = useState(currencies[1].buyingPrice);

  return (
    <Container maxWidth="xs">
      <form noValidate autoComplete="off" align="center">
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="space-around"
        >
          <ConverterUnit
            currencies={currencies}
            value={valA}
            setValue={setValA}
            selectValue={selA}
            setSelectValue={setSelA}
            ratio={selA / selB}
            setOthersValue={setValB}
          />
          <ConverterUnit
            currencies={currencies}
            value={valB}
            setValue={setValB}
            selectValue={selB}
            setSelectValue={setSelB}
            ratio={selB / selA}
            setOthersValue={setValA}
          />
        </Grid>
      </form>
    </Container>
  );
};

Converter.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
};

export default Converter;
