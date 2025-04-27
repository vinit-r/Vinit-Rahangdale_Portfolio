import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const membersData = [
  {
    id: "1",
    name: "Abc",
    email: "abc@gmail.com",
    age: "23",
  },
  {
    id: "2",
    name: "Def",
    email: "def@gmail.com",
    age: "29",
  },
  {
    id: "3",
    name: "Ghi",
    email: "ghi@gmail.com",
    age: "13",
  },
  {
    id: "4",
    name: "Jkl",
    email: "jkl@gmail.com",
    age: "33",
  },
];

const AllMember = () => {
  const [memberData, setMemberData] = useState(membersData);
  return (
    <div className="text-white p-3">
      <p className="fs-3 pb-2">All Members</p>
      <div className="pb-2 d-flex justify-content-between">
        <input
          className="form-control mr-sm-2 w-25"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="w-25 bg-success py-2 rounded">Add New Member</button>
      </div>
      <div className="d-flex flex-col items-center">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Member Name</th>
              <th scope="col">Member Email</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {memberData?.map((member, index) => {
              return (
                <tr key={index}>
                  <th>{member?.id}</th>
                  <td>{member?.name}</td>
                  <td>{member?.email}</td>
                  <td>{member?.age}</td>
                  <td>
                    <MdDelete className="text-danger fs-3" />
                  </td>
                </tr>
              );
            })}

            {/* <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr> */}
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-50 bg-white p-3 rounded">
        <div>
          <p className="fs-5 fw-semibold text-dark pb-4">Add New Member</p>
        </div>
        <hr />

        <div>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1" className="text-dark fw-semibold">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1" className="text-dark fw-semibold">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1" className="text-dark fw-semibold">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1" className="text-dark fw-semibold">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AllMember;
