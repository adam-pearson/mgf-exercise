import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Edit = (props) => {

    const [pulledData, setPulledData] = useState();
    const [companiesList, setCompaniesList] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [companyId, setCompanyId] = useState();


    let { id } = useParams();

    useEffect(() => {
        axios.get(`/api/show/${id}`)
        .then(res => {
            setPulledData(res.data.contact[0]);
            setCompaniesList(res.data.companies);
            setCompanyId(res.data.contact[0].company.id)
        })
        .catch(err => {
            console.log("Error with API request");
        });
    }, [])

    companiesList && console.log(companyId);

    const handleCompanyChange = useCallback(e => {
        setCompanyId(e.target.value)
    }, []);

    return (
        <div style={{  padding: 100 }}>
            <h1>Update Data</h1>
            <hr />

            <form className="container">
                <div className="mb-3">
                    <label htmlFor="first-name" className="form-label">First Name</label>
                    <input 
                        type="text"
                        className="form-control mb-3"
                        id="first-name"
                        value={pulledData ? `${pulledData.firstname}` : ""}
                        placeholder="Enter First Name"
                    />

                    <label htmlFor="last-name" className="form-label">Last Name</label>
                    <input 
                        type="text"
                        className="form-control mb-3"
                        id="last-name"
                        value={pulledData ? `${pulledData.lastname}` : ""}
                        placeholder="Enter Last Name"
                    />

                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email"
                        className="form-control mb-3"
                        id="email"
                        value={pulledData ? pulledData.email : ""}
                        placeholder="Enter Email"
                    />

                    <label htmlFor="company" className="form-label">Company</label>
                    <select 
                        className="form-control"
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

                </div>
            </form>

        </div>
    )
}

export default Edit
