import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
function Dropdown({ options, setUnselectedOptions, setSelectedOptions }) {
  const [value, setValue] = useState("");
  const [optn,setOptn] = useState({})


  const handleChange= (event)=> {
    let unfil = options.filter((option) => option.value !== event.target.value);
    setUnselectedOptions(unfil);
    let fil = options.filter((option) => option.value === event.target.value);
    setSelectedOptions((pre) => [...pre, fil[0]]);
    setValue(event.target.value);
  }

  return (
    <div className="options_container">
      <Form.Select
        className="option_padding"
        value={value}
        onChange={handleChange}
      >
        <option value="">select a Schema</option>
        {options.map((option) => {
          return (
            <>
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            </>
          );
        })}
      </Form.Select>
    </div>
  );
}

function AddSegment({ fun }) {
  const [divContent, setDivContent] = useState([]);
  const [segmentName, setSegmentName] = useState("");

  const options = [
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ];
  const [unselectedOptions, setUnselectedOptions] = useState(options);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSegmentNameChange = (event) => {
    setSegmentName(event.target.value);
  };


  console.log("unselectedOptions",unselectedOptions)
  const handleAddDropdown = () => {
    const newContent = [
      ...divContent,
      <Dropdown
        options={unselectedOptions}
        setUnselectedOptions={setUnselectedOptions}
        setSelectedOptions={setSelectedOptions}
      />,
    ];
    setDivContent(newContent);
  };

  const onSubmit = async() => {
    try{
    const d = {
      segment_name: segmentName,
      schema: selectedOptions.map((schema) => ({
        [schema.value]: schema.label,
      })),
    };
    let data = await axios.post("https://webhook.site/032e288d-e697-4470-b814-af1a952e5949",d)
     
    console.log("d---->",data)
  }catch(err){
    console.log("err---->",err)
  }
  };

  const handleClose = () => {
    fun();
  };

  return (
    <div>
      <Form.Label htmlFor="inputPassword5">Segment Name:</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Segment Name"
        id="segmentName"
        value={segmentName}
        onChange={handleSegmentNameChange}
      />
      <br />

    {divContent.length >0 &&(  
    <div className="dropdown_container">
        {divContent.map((content) => {
          return <div key={content.value}>{content}</div>; 
        })}
      </div>)}

      <div className="addSchema">
        <a onClick={handleAddDropdown}>+ Add new schema</a>
      </div>

      <br />
      <div className="btns">
        <button class="btn btn-outline-danger"onClick={handleClose}>
          Close
        </button>
        <button class="btn btn-outline-primary" onClick={onSubmit}>
          Save Segment
        </button>
      </div>
    </div>
  );
}

export default AddSegment;
