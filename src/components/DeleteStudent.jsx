import React from 'react'
import StudentHeader from './StudentHeader'

const DeleteStudent = () => {
  return (
    <div>
        <StudentHeader />

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 div-md-12 div-lg-12 div-xl-12 div-xxl-12">
<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">Admission number</label>
        <input type="text" className="form-control" />
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <button className="btn btn-dark">Delete</button>
    </div>
</div>

        </div>
    </div>
</div>



    </div>
  )
}

export default DeleteStudent