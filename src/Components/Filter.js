import React, { useState } from "react";
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  Box,
  Slider,
} from "@mui/material";
import { Button } from "react-bootstrap";
import { useFilterContext } from "../Context/FilterContext";

const Filter = () => {
  const {
    all_products,
    updateFilterValue,
    filters: { Brand },
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((ele) => {
      return ele[property];
    });
    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryOnlyData = getUniqueData(all_products, "Brand");
  // console.log(categoryOnlyData)

  const marks = [
    {
      value: 7999,
      label: "7999",
    },
    {
      value: 189999,
      label: "1,89,999",
    },
  ];
  function valuetext(valuef) {
    return `${valuef}`;
  }
  const [valuef, setValue] = useState([7999, 189999]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="filter_product">
        <h3>Brands</h3>
        <div className="brands-name-checkbox">
          {categoryOnlyData.map((ele, index) => {
            return (
              <>
                <FormGroup>
                  <FormControlLabel
                    className="filterValue"
                    control={<Checkbox />}
                    label={ele}
                    key={index}
                    value={ele}
                    name='Brand'
                    onClick={updateFilterValue}
                  />
                </FormGroup>
              </>
            );
          })}
        </div>
        <div className="brands-price-range">
          <h3 className="mb-5">Price Range</h3>
          <div className="price_range">
          <Box>
            <Slider
              // aria-label="Always visible"
              defaultValue={80}
              onChange={handleChange}
              getAriaValueText={valuetext}
              step={1}
              value={valuef}
              min={7999}
              max={189999}
              marks={marks}
              valueLabelDisplay="on"
            />
          </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
