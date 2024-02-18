import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [allData, setAllData] = useState([]);
  const [filterByStatus, setFilterByStatus] = useState([]);

  const handleForm = () => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      status: event.target.status.value,
    };

    setAllData((prev) => [...prev, formData]);
  };


  const handleClick = (val) => {
    setShow(val);
    let filteredData = [];
      filteredData = allData.filter(
        (data) => data.status.toLowerCase() === val
      );
      if (filteredData.length === 0) {
        filteredData.push({ name: 'No project found', status: val });
    }
    if(val==="all"){
        filteredData =allData
    }
    
    setFilterByStatus(filteredData);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleForm}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                name="status"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filterByStatus.length === 0 &&
                allData.length > 0 &&
                allData.map((data, index) => (
                  <tr key={index}>
                    <th scope="col">{data.name}</th>
                    <th scope="col">{data.status}</th>
                  </tr>
                ))}
              {filterByStatus.length > 0 &&
                allData.length >0 &&
                filterByStatus.map((data, index) => (
                  <tr key={index}>
                    <th scope="col">{data.name}</th>
                    <th scope="col">{data.status}</th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
