import React, { useState } from "react";

const formDefault = {
  height: 0,
  width: 0,
  depth: 0,
  price: 0,
  input_price: 0,
  computed_price: 0,
};
const CalculatorArea = () => {
  const [form, setForm] = useState(formDefault);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculate = () => {
    let height = form.height;
    let width = form.width;
    let depth = form.depth;

    let newPrice = parseFloat(height * width * depth);

    return (form.price = newPrice.toFixed(2));
  };

  const calculateComputedPrice = () => {
    let price = form.price;
    let input_price = form.input_price;

    let calculate = input_price * price;

    return (form.computed_price = calculate.toFixed(2));
  };
  return (
    <div className="container-fluid mb-3">
      <div className="col-md-12">
        <h2>Task 3 : Calculator Area</h2>
        <label htmlFor="" className="mb-3">
          This Calculator will automatic{" "}
          <span className="text-danger">
            <b>multiply</b>
          </span>{" "}
          the inputted value.
        </label>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="">Enter Height</label>
              <input
                type="number"
                name="height"
                className="form-control"
                value={form.height}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="">Enter Width</label>
              <input
                type="number"
                name="width"
                className="form-control"
                value={form.width}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="">Enter Depth</label>
            </div>
            <input
              type="number"
              name="depth"
              className="form-control"
              value={form.depth}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="">Computed Value</label>
              <input
                type="number"
                className="form-control"
                value={calculate()}
                name="price"
                onChange={handleChange}
                readOnly
              />
            </div>
          </div>
          <div className="mt-3"></div>
          {/* <div className="straight-bar"></div> */}
          <hr />
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="">Price Per</label>
              <input
                type="number"
                className="form-control"
                value={form.input_price}
                name="input_price"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="">Total Computed Value</label>
            </div>
            <input
              type="number"
              className="form-control"
              value={calculateComputedPrice()}
              name="computed_price"
              onChange={handleChange}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorArea;
