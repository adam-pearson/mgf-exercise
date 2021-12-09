import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Edit = () => {

    const [pulledData, setPulledData] = useState({});
    const [updatedData, setUpdatedData] = useState({});
    const [companiesList, setCompaniesList] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [companyId, setCompanyId] = useState(0);

    let { id } = useParams();

    useEffect(() => {
        axios.get(`/api/show/${id}`)
        .then(res => {
            let contact = res.data.contact[0];
            setPulledData(contact);
            setCompaniesList(res.data.companies);

            setFirstName(contact.firstname)
            setLastName(contact.lastname)
            setEmail(contact.email)
            setCompanyId(contact.company.id)
            
        })
        .catch(err => {
            console.log(err);
        });
    }, [])

    // console.group("Individual")
    // console.log("first: ", firstName)
    // console.log("last: ", lastName)
    // console.log("email: ", email)
    // console.log("company id: ", companyId)
    // console.groupEnd();

    const handleFirstNameChange = useCallback(e => {
        setFirstName(e.target.value)
    }, []);

    const handleLastNameChange = useCallback(e => {
        setLastName(e.target.value)
    }, []);

    const handleEmailChange = useCallback(e => {
        setEmail(e.target.value)
    }, []);

    const handleCompanyChange = useCallback(e => {
        setCompanyId(e.target.value)
    }, []);

    console.log(pulledData)

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/update/${id}`, {
            firstname: firstName,
            lastname: lastName,
            email: email,
            company_id: companyId
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    };

    return (
        <div style={{  padding: 100 }}>
            <h1>Update Data</h1>
            <hr />
            {pulledData &&
            <form className="container">
                <div className="mb-3">
                    <label htmlFor="first-name" className="form-label">First Name</label>
                    <input 
                        type="text"
                        className="form-control mb-3"
                        id="first-name"
                        value={firstName}
                        placeholder="Enter First Name"
                        onChange={ handleFirstNameChange }
                    />

                    <label htmlFor="last-name" className="form-label">Last Name</label>
                    <input 
                        type="text"
                        className="form-control mb-3"
                        id="last-name"
                        value={lastName}
                        placeholder="Enter Last Name"
                        onChange={ handleLastNameChange }
                    />

                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email"
                        className="form-control mb-3"
                        id="email"
                        value={email}
                        placeholder="Enter Email"
                        onChange={ handleEmailChange }
                    />

                    <label htmlFor="company" className="form-label">Company</label>
                    <select 
                        className="form-control mb-3"
                        id="company"
                        value={companyId}
                        onChange={ handleCompanyChange }
                    >
                        { companiesList && companiesList.map(company => {
                            return (
                                <option key={company.id} value={company.id}>{company.name}</option>
                            )
                        }) }
                        
                    </select>

                    <button type="submit" className="btn btn-primary mb-3 col-3" onClick={handleSubmit}>Submit</button>


                </div>
            </form>
            }

        </div>
    )
}

export default Edit
