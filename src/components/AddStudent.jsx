import React, { useState } from 'react'
import StudentHeader from './StudentHeader'
import axios from 'axios'

const AddStudent = () => {
    const [inputfield, changeinputfield] = useState(
        {

            "name": "",
            "admissionno": "",
            "rollno": "",
            "clg": ""

        }
    )

    const inputHandler = (event) => {
        changeinputfield({ ...inputfield, [event.target.name]: event.target.value })
    }

    const readvalue = () => {
        console.log(inputfield)
        axios.post("http://127.0.0.1:8000/api/add/", inputfield).then(
            (response) => {
                alert(response.data.status)
            }
        )
    }


    return (
        <div>
            <StudentHeader />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={inputfield.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Roll No </label>
                                <input type="text" className="form-control" name='rollno' value={inputfield.rollno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Addmission number </label>
                                <input type="text" className="form-control" name='admissionno' value={inputfield.admissionno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">College</label>
                                <input type="text" className="form-control" name='clg' value={inputfield.clg} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button onClick={readvalue} className="btn btn-dark">Submit</button>
                            </div>
                        </div>



                    </div>
                </div>
            </div>




        </div>
    )
}

export default AddStudent