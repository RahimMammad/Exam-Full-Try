import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import "./index.scss";
import UseFetchData from "../../hooks/UseFetchData";

const Add = () => {
  const [inpValue, setInpValue] = useState("");
  const [sortedData, setSortedData] = useState("default")

  const { data } = UseFetchData();

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(inpValue)
  )
  filteredData.sort((a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()
    const priceA = a.price
    const priceB = b.price

    if(sortedData === "asc") {
      return nameA.localeCompare(nameB)
    } else if(sortedData === "desc") {
      return nameB.localeCompare(nameA)
    } else if(sortedData === "High to Low") {
      return priceB - priceA
    } else if(sortedData === "Low To High") {
      return priceA - priceB
    } else {
      return 0
    }
  })

  const url =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

  const handleDelete = async (productId) => {
    await axios.delete(`http://localhost:8000/${productId}`);
  };
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Formik
        initialValues={{ name: "", price: "", image: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          price: Yup.number().required("Required"),
          image: Yup.string().matches(url).required("Required"),
        })}
        onSubmit={async (values, { resetForm }) => {
          await axios.post("http://localhost:8000", values);
          resetForm();
        }}
      >
        <Form>
          <Field name="name" type="text" placeholder="Name" />
          <ErrorMessage name="name" />

          <Field name="price" type="text" placeholder="Price" />
          <ErrorMessage name="price" />

          <Field name="image" type="text" placeholder="Image URL" />
          <ErrorMessage name="image" />

          <button type="submit">Create Product</button>
        </Form>
      </Formik>
      <div className="sort-filter">
        <input type="text" placeholder="Search" value={inpValue} onChange={(e) => setInpValue(e.target.value)} />
        <select onChange={(e) => setSortedData(e.target.value)} value={sortedData}>
          <option value="default">Default</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
          <option value="High to Low">High to Low</option>
          <option value="Low To High">Low To High</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <td>Image</td>
            <td>Name</td>
            <td>Price</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {filteredData &&
            filteredData.map((item) => {
              return (
                <tr key={item._id}>
                  <td style={{ width: "150px", height: "150px" }}>
                    <img src={item.image} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td style={{ width: "150px", height: "150px" }}>
                    <button onClick={() => handleDelete(item._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Add;
