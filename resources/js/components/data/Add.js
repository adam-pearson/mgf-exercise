import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const Add = () => {

    const [companiesList, setCompaniesList] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [companyId, setCompanyId] = useState(1);
    const [errorState, setErrorState] = useState(false);


    let navigate = useNavigate();


    useEffect(() => {
        axios.get(`/api/show/`)
            .then(res => {
                setCompaniesList(res.data.companies);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName && email) {
            axios.put(`/api/add/`, {
                firstname: firstName,
                lastname: lastName,
                email: email,
                company_id: companyId
            })
                .then(res => {
                    navigate("/");
                })
                .catch(err => {
                console.log(err)
                })
        } else {
            setErrorState(true);
        }
    };

    return (
        <div className="px-5 py-5">
            <h1>Create a Contact</h1>
            <hr />

            {errorState &&
                <div className="alert alert-warning fade show" role="alert">
                <strong>Error: </strong>Please ensure that all fields are filled out
              </div>
            }

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

                    <button type="submit" className="btn btn-primary mb-3 col-3" onClick={handleFormSubmit}>Submit</button>


                </div>
            </form>

        </div>
    )
}

export default Add
