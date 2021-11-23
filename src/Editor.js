import React, { useEffect, useState } from "react";
// import { EditorState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
// import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import htmlToDraft from 'html-to-draftjs';
// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import axios from "axios";

const EditorConvertToHTML = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "  Ravi",
      emailId: "ravi@gmail.com",
      aboutMe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eros vitae enim mollis molestie. Morbi malesuada laoreet felis fringilla dignissim. Cras gravida quis augue et pellentesque. Integer fermentum ante in hendrerit tincidunt.",
      location: ["Bangalore"],
      department: ["Development"],
      age: 24,
      gender: "M",
      joiningDate: "24/9/2019",
    },
    {
      id: 2,
      name: "  Ankita",
      emailId: "  ankita@gmail.com ",
      aboutMe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eros vitae enim mollis molestie. Morbi malesuada laoreet felis fringilla dignissim. Cras gravida quis augue et pellentesque. Integer fermentum ante in hendrerit tincidunt.",
      location: ["Kolkata"],
      department: ["Design "],
      age: 24,
      gender: "F",
      joiningDate: "12/1/2015",
    },
    {
      id: 3,
      name: " Balaji ",
      emailId: "  balaji@gmail.com",
      aboutMe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eros vitae enim mollis molestie. Morbi malesuada laoreet felis fringilla dignissim. Cras gravida quis augue et pellentesque. Integer fermentum ante in hendrerit tincidunt.",
      location: [" Kolkata"],
      department: ["Design"],
      age: 24,
      gender: "F",
      joiningDate: "1/12/2020",
    },
  ]);

  // const f = async () => {
  //   const resp = await axios.get("https://jsonkeeper.com/b/07NH");
  //   console.log(resp);
  // };

  // useEffect(() => {
  //   f();
  // }, []);

  return (
    <div>
      {" "}
      {data.map((el) => (
        <div className="flex1">
          <div className="flex2" >
            <div>
              <div>{el.id}</div>
              <div>{el.name}</div>
              <div>{el.emailId}</div>
              <div>{el.gender}</div>
            </div>
            <div>
              <div>{el.joiningDate}</div>
              <div>{el.location}</div>
              <div>{el.department}</div>
            </div>
          </div>
          <div>
            <div>{el.aboutMe}</div>
          </div>
        </div>
      ))}
      <div>
        <div>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <input type="text" placeholder="About Me" />
        </div>
        <div>
          <input type="number" placeholder="Age" />
        </div>
        <div>
          <select name="age" >
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="Location" />
        </div>
        <div>
          <input type="text" placeholder="Department" />
        </div>
        <div>
          <input type="submit"/>
        </div>
      </div>
    </div>
  );
};

export default EditorConvertToHTML;
