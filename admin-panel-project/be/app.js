import express from "express";
// import cors from "cors";
// import user_router from "./routes/users.js";

console.log("it's my app.js");

// import necessary module
// const express = require("express");
// const cors = require("cors");
const fs = require("fs");

/// configuration of modules

const app = express();
const PORT = 8080;

// app.use(cors());
// app.use(express.json());

// app.use(user_router);

app.get("/products/add", (request, response) => {
  fs.readFile("./public/data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const objectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: objectData,
    });
  });
});

app.post("/products/add", (request, response) => {
  const body = request.body;
  console.log(request);
  console.log(body);

  const newProduct = {
    id: Date.now().toString(),
    img: body.img,
    title: body.title,
    subtitle: body.subtitle,
    price: body.price,
    discount: body.discount,
    desc1: body.des1,
    desc2: body.desc2,
    code: body.code,
    hashtag: body.hashtag,
    technology: body.technology,
    rating: body.rating,
  };

  fs.readFile("./public/data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }
    // console.log(readData);
    // console.log(typeof readData);

    const dataObject = JSON.parse(readData);
    // console.log(typeof dataObject);
    console.log(dataObject);
    console.log("======");
    dataObject.push(newProduct);
    console.log(dataObject);

    fs.writeFile(
      "./public/data/products.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: dataObject,
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is runngin on http://localhost:${PORT}`);
});
