import React, { useState } from 'react'
import StudentHeader from './StudentHeader'
import axios from 'axios'

const SearchStudent = () => {
    const [result,changeResult]=useState([])


    const [inputfield,changeinputfield]=useState({"admissionno":""}
    )




    const inputHandler=(event)=>{
        changeinputfield({...inputfield,[event.target.name]:event.target.value})
    }
    







const readvalue = () => {
    console.log(inputfield)
    axios.post("http://127.0.0.1:8000/api/searchall/",inputfield).then(
        (response)=>{
            changeResult(response.data)
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
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 cool-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Admission number</label>
                                <input type="text" className="form-control" name='admissionno' value={inputfield.admissionno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 cool-xl-12 col-xxl-12">
                                <button onClick={readvalue} className="btn btn-dark">Search</button>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
            {result.map(
                (value,i)=>{
                    return <div className="row ">
                    <div className="col col-12 col-sm-6 col-lg-6 col-md-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name: </label>
                        <input type="text" className="form-control" value={value.name}  />
    
                    </div>
                    <div className="col col-12 col-sm-6 col-lg-6 col-md-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">admisno: </label>
                        <input type="text" className="form-control" value={value.admissionno}  />
    
    
    
                    </div>
                    <div className="col col-12 col-sm-6 col-lg-6 col-md-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">college: </label>
                        <input type="text" className="form-control" value={value.clg}  />
                        </div>
                    <div className="col col-12 col-sm-6 col-lg-6 col-md-6 col-xl-6 col-xxl-6">
    
                        <label htmlFor="" className="form-label">roll no: </label>
                        <input type="text" className="form-control"  value={value.rollno} /></div>
                </div>
    
                }
            )}

            




        </div>
    )
    }

export default SearchStudent