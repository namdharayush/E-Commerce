import React, { useState } from "react";
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  Box,
  Slider,
} from "@mui/material";



const Filter = () => {
  const marks = [
    {
        value: 7999,
        label: "7999",
      },
      {
        value: 189999,
        label: "1,89,999",
      }
  ];
  function valuetext(value) {
    return `${value}`;
  }
  const [value, setValue] = useState([7999, 189999]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="filter_product">
          <h3>Brands</h3>
          <div className="brands-name-checkbox">
            <div>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Apple" />
              </FormGroup>
            </div>
            <div>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Mi" />
              </FormGroup>
            </div>
            <div>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Samsung" />
              </FormGroup>
            </div>
            <div>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="POCO" />
              </FormGroup>
            </div>
            <div>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="OnePlus" />
              </FormGroup>
            </div>
            <div>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="realme" />
              </FormGroup>
            </div>
            <div>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Lenovo" />
              </FormGroup>
            </div>
          </div>
          <div className="brands-price-range">
            <h3 className="mb-5">Price Range</h3>
            <Box sx={{ width: 170 }}>
              <Slider
                // aria-label="Always visible"
                defaultValue={80}
                onChange={handleChange}
                getAriaValueText={valuetext}
                step={1}
                value={value}
                min={7999}
                max={189999}
                marks={marks}
                valueLabelDisplay="on"
              />
            </Box>
          </div>
        </div>
    </>
  );
};

export default Filter;
