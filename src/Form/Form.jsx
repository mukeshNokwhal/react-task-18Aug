import React, { useState } from 'react'
import "../Form/Form.css"
function Form() {
    const [inputValue, setValue] = useState({
        FirstName: "",
        LastName: "",
        email: "",
        phonenumber: "",
        password: "",
        dob: "",
        gender: ""

    })
    const [store, setStore] = useState([])

    // handale change 
    const Regex = /^[0-9]*$/; // check phone number
    let regexemail = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/; // check email
    const handleChange = (e) => {
        let { name, value } = e.target;

        if (name === "phonenumber" && !Regex.test(value)) {

            console.log("please fill valid number")
            alert("please fill valid number")
        } else {


            setValue({ ...inputValue, [name]: value });
        }
    }

    const submitData = (e) => {
        e.preventDefault()
        const id = new Date().getTime().toString()
        console.log({ inputValue })
        const objectdata = ({ ...inputValue, id: id })
        if (!regexemail.test(inputValue.email)) {
          return  alert("please inter valid email")
        }
        setStore([...store, objectdata])
    

    setValue({
        FirstName: "",
        LastName: "",
        email: "",
        phonenumber: "",
        password: "",
        dob: "",
        gender: ""
    })

    }

    return (
        <div className='container'>
            <div className='main-box d-flex justify-content-between'>

                <div className='form-box '>
                    <form  >
                        <div className="mb-3">
                            <label for="FirstName" className="form-label">FirstName</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp"
                                name='FirstName' value={inputValue.FirstName} onChange={handleChange}
                            />

                        </div>
                        <div className="mb-3">
                            <label for="LastName" className="form-label">LastName</label>
                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp"
                                name='LastName' value={inputValue.LastName} onChange={handleChange}
                            />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                name='email' value={inputValue.email} onChange={handleChange}
                            />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputNumber" className="form-label">PhoneNumber</label>
                            <input type="text" className="form-control"
                                name='phonenumber' value={inputValue.phonenumber} onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                name='password' value={inputValue.password} onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputNumber" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" name='dob'
                                value={inputValue.dob} onChange={handleChange} />
                        </div>
                        <div className="mb-3 form-check">
                            <label htmlFor="gender">Gender</label><br />
                            Male <input type="radio" className="form-radio" name='gender'
                                value="male" onChange={handleChange}
                            /><br />
                            Famle <input type="radio" className="form-radio" name='gender' value="female" onChange={handleChange} /><br />
                            Other <input type="radio" className="form-radio" name='gender' value="other" onChange={handleChange} /><br />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={submitData}>Submit</button>
                    </form>
                </div>
                <div className='tables'>
                    <table className="table">
                        <thead className="thead1">
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>email</th>
                            <th>phonenumber</th>
                            <th>password</th>
                            <th>dob</th>
                            <th>gender</th>

                        </thead>
                        <tbody>
                            {store.map((ele, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{ele.FirstName}</td>
                                        <td>{ele.LastName}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.phonenumber}</td>
                                        <td>{ele.password}</td>
                                        <td>{ele.dob}</td>
                                        <td>{ele.gender}</td>

                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>

    )
}

export default Form