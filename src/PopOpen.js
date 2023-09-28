import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Formik, Form, Field } from "formik";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "./PopOpen.css";
import { FcAddImage } from "react-icons/fc";

import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
//import { Uploader } from "uploader"; // Installed by "react-uploader".
//import { UploadButton } from "react-uploader";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { addTasks } from "./reducers/detailedSlice";


const SchemaValidation = Yup.object().shape({
    task:Yup.string("Not valid String")
        .min(2,'Too Short')
        .max(30,'Too Long')
        .required('task name should not be empty'),
    desc:Yup.string().required("Enter a description")
    
    
          
});


const options = [
  { value: "Work", label: "Work" },
  { value: "Personal", label: "Personal" },
  { value: "Temp", label: "Temp" },
];

function PopOpen({ detailed, setDetailed, itemPresent, setItemPresent}) {
  const handleClose = () => setDetailed(false);
  const [imgUrl,setImageUrl]= useState(null)
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);


  // // Initialize once (at the start of your app).
  // const uploader = Uploader({
  //   apiKey: "free", // Get production API keys from Bytescale
  // });

  const [initialInpValues] = useState({
    task: "",
    deadline: "",
    desc: "",
    prority: false,
    tags: [],
    img: "",
  });

  function handleSubmit(values) {
    console.log(values);
    console.log(imgUrl)
    values.imgUrl=imgUrl;
    console.log(values);
    dispatch(addTasks(values));
    setItemPresent(true)
    handleClose();

  }

  function handleImage(e){
    console.log(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <>
      <Modal show={detailed} onHide={handleClose}>
        <Modal.Header className="heading-mod" closeButton>
          <Modal.Title className="heading-text">Create Task</Modal.Title>
        </Modal.Header>
        <Formik validationSchema={SchemaValidation} initialValues={initialInpValues} onSubmit={handleSubmit}>
          {({setFieldValue,errors,touched}) => (
            <Form>
              <Modal.Body>
                <div className="mb-3">
                  <label>
                    Task
                    <Field
                      className="form-control inpLen"
                      name="task"
                      type="text"
                    />
                  </label>
                  {errors.task && touched.task?<p className="err">{errors.task}</p>:null}
                </div>
                
                <div className="mb-3">
                  <label>Deadline</label>
                  <DatePicker
                    className="form-control inpLen"
                    showTimeSelect
                    dateFormat="Pp"
                    onSelect={(date) => setFieldValue("deadline", date)}
                    onChange={setStartDate}
                    selected={startDate}
                  />
                </div>
                
                <div className="mb-3">
                  <label>
                    Description
                    <Field
                      className="form-control inpLen"
                      name="desc"
                      type="text"
                    />
                  </label>
                  {errors.desc && touched.desc?<p className="err">{errors.desc}</p>:null}
                </div>
                
                <div>
                  <Field name="Priority" type="checkbox" />
                  <label className="inpLen">Prority</label>
                </div>
                <div>
                  <label>
                    Tags
                    <Select
                      className="inpLen"
                      //defaultValue={selectedOption}
                      isMulti="true"
                      onChange={(val) => setFieldValue("tags", val)}
                      options={options}
                    />
                  </label>
                </div>
                <div>
                  <div >
                    <label >
                    Image
                    <FcAddImage
                     className="img-alt"/>
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control"
                     
                      onChange={(handleImage)}
                      name="img"
                    />
                  </div>
                  
                  {/* <UploadButton  
                    uploader={uploader}
                    options={options}
                    onComplete={(files) =>
                      alert(files.map((x) => x.fileUrl).join("\n"))
                    }
                  >
                    {({ onClick }) => (
                      
                      <MdImage className="img-alt" onClick={onClick}>Upload</MdImage>
                      
                    )}
                  </UploadButton> */}
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" type="submit">
                  Create
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default PopOpen;
