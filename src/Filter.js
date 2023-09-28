import { useDispatch } from "react-redux";
import "./Filter.css";
import { setAllFilter } from "./reducers/filterSlice";

function Filter() {

  const dispatch = useDispatch();
  

  function handleFilter1(e){
    const selectedFilterValue = e.target.value;
    dispatch(setAllFilter(selectedFilterValue));
  }
  // function handleFilter2(e){
  //   const selectedFilterValue2 = e.target.value;
  //   dispatch(setTag(selectedFilterValue2));
  // }

  return (
    <div className="filterPart">
      <h2 id="taskHead">Tasks</h2>
      <div className="taskFilters">
        <h3>Filters:</h3>
        <div>
          <h5 className="optionTitle">By Status:</h5>
          <select className="form-select selectSize" aria-label="Default select example" onChange={handleFilter1}>
            <option>Select...</option>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        {/* <div>
          <h5 className="optionTitle">By Tags:</h5>
          <select className="form-select selectSize" aria-label="Default select example" onChange={handleFilter2}>
            <option>Select...</option>
            <option value="Important">Important</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>  
          </select>
        </div> */}
        {/* <div>
          <h5 className="optionTitle">Sort By:</h5>
          <select className="form-select selectSize" aria-label="Default select example">
            <option>Select...</option>
            <option value="Asc">Asc</option>
            <option value="Desc">Desc</option>
          </select>
        </div> */}
      </div>
    </div>
  );
}

export default Filter;

// import React, { useState } from 'react';
// import Select from 'react-select';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

// export default function Filter() {
//   const [selectedOption, setSelectedOption] = useState(null);

//   return (
//     <div className="App">
//       <Select
//         defaultValue={selectedOption}
//         onChange={setSelectedOption}
//         options={options}
//       />
//     </div>
//   );
// }
