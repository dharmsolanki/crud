import React, { useState } from 'react';
import '../App.css';

export default function Form() {
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState('');
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    post: '',
    salary: '',
  });

  const style = {
    width: '300px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any input value is falsy (empty or null)
    if (
      !inputs.name ||
      !inputs.email ||
      !inputs.phone ||
      !inputs.post ||
      !inputs.salary
    ) {
      alert('Please fill in all fields before adding.');
      return; // Prevent submission if any field is empty
    }

    if (editClick) {
      const edittableData = tableData;
      Object.assign(edittableData[editIndex], inputs);
      setTableData([...edittableData]);
      setInputs({
        name: '',
        email: '',
        phone: '',
        post: '',
        salary: '',
      });

      setEditClick(false);
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: '',
        email: '',
        phone: '',
        post: '',
        salary: '',
      });
    }
  };

  const handleDelete = (index) => {
    const deleteData = tableData.filter((item, i) => i !== index);
    setTableData(deleteData);
  };

  const handleEdit = (index) => {
    const editData = tableData[index];
    setInputs({
      name: editData.name,
      email: editData.email,
      phone: editData.phone,
      post: editData.post,
      salary: editData.salary,
    });
    setEditClick(true);
    setEditIndex(index);
  };

  // Check if any input value is falsy to disable the "Add" button
  const isAddButtonDisabled =
    !inputs.name || !inputs.email || !inputs.phone || !inputs.post || !inputs.salary;

  return (
    <div className='container mt-5'>
        
      <h1 className='text-center'>Employee Management</h1>
      <div className='container mt-3'>
        <form onSubmit={handleSubmit} style={containerStyle}>
          <div className='mb-3'>
            <input
              type='text'
              name='name'
              value={inputs.name}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter name'
              style={style}
              required
            />
          </div>

          <div className='mb-3'>
            <input
              type='email'
              name='email'
              value={inputs.email}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter email'
              style={style}
              required
            />
          </div>

          <div className='mb-3'>
            <input
              type='tel'
              name='phone'
              value={inputs.phone}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter Mobile No'
              style={style}
              required
            />
          </div>

          <div className='mb-3'>
            <input
              type='text'
              name='post'
              value={inputs.post}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter Designation'
              style={style}
              required
            />
          </div>

          <div className='mb-3'>
            <input
              type='number'
              name='salary'
              value={inputs.salary}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter Salary'
              style={style}
              required
            />
          </div>

          <button
            type='submit'
            className='d-flex btn btn-primary'
            disabled={isAddButtonDisabled} // Disable the button if any input is empty
          >
            {editClick ? 'Update' : 'Add'}
          </button>
        </form>
      </div>

      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.post}</td>
                <td>{item.salary}</td>
                <td>
                  <button
                    className='btn btn-primary'
                    onClick={() => handleEdit(i)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className='d-flex btn btn-danger'
                    onClick={() => handleDelete(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
