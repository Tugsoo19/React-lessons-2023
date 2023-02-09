console.log("it's my app.js");

// import necessary module
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { response } = require("express");

/// configuration of modules

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/users/add", (request, response) => {
  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
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

app.post("/users/add", (request, response) => {
  const body = request.body;
  console.log(request);
  console.log(body);

  const newUser = {
    id: Date.now().toString(),
    firstname: body.firstname,
    lastname: body.lastname,
    phoneNumber: body.phoneNumber,
    email: body.email,
    password: body.password,
    role: body.role,
    isDisable: body.isDisable,
  };

  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
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
    dataObject.push(newUser);
    console.log(dataObject);

    fs.writeFile(
      "./public/data/users.json",
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

app.delete("/users/add", (request, response) => {
  const body = request.body;

  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }
    const dataObject = JSON.parse(readData);
    const filteredObjects = dataObject.filter((e) => e.id !== body.id);

    fs.writeFile(
      "./public/data/users.json",
      JSON.stringify(filteredObjects),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObjects,
        });
      }
    );
  });
});

app.put("/users", (request, response) => {
  const body = request.body;
  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
    const savedData = JSON.parse(readData);
    if (readError) {
      response.json({
        status: "read file error",
        data: [],
      });
    }
    const updatedData = savedData.map((d) => {
      if (d.id === body.id) {
        (d.firstname = body.firstname),
          (d.lastname = body.lastname),
          (d.phoneNumber = body.phoneNumber),
          (d.email = body.email),
          (d.password = body.password),
          (d.role = body.role),
          (d.isDisable = body.isDisable);
      }
      return d;
    });
    fs.writeFile(
      "./data/users.json",
      JSON.stringify(updatedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error during the file write",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: updatedData,
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is runngin on http://localhost:${PORT}`);
});
