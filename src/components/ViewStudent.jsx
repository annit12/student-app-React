import React, { useEffect, useState } from 'react'
import StudentHeader from './StudentHeader'
import axios from 'axios'

const ViewStudent = () => {


  const [data,changeData]=useState([] )
  
  const fetchaData=()=>{
    axios.post("http://127.0.0.1:8000/api/viewall/").then(
      (response)=>{
          changeData(response.data)
      }
    )
  }
  
  useEffect(()=>{fetchaData()},[])
  return (






    <div>
<StudentHeader/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    

                <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Admission no</th>
      <th scope="col">College</th>
      <th scope="col">roll no</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
      (value,index)=>{
        return <tr>
        <td >{value.name}</td>
        <td>{value.admissionno}</td>
        <td>{value.clg}</td>
        <td>{value.rollno}</td>
        
      </tr>
      }


    )}
    



  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default ViewStudent








