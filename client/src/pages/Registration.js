import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Registration() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
    });
  };

 
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema} 
      >
       
        <Form className="registerContainer"><br/>
          
          <label>Username: </label> <br/>
          <ErrorMessage name="username" component="span" /><br/>
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="user name"
          /> <br/>

          <label>Password: </label> <br/>
          <ErrorMessage name="password" component="span" /><br/>
          <Field
            autocomplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="password"
          /> <br/>

          <button type="submit"> Register</button>
        
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
