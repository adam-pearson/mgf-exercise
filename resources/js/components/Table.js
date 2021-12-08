import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Table = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('api')
        .then(res => {
            console.log(res)
            setData(res.data.contacts);
        })
        .catch(err => {
            console.log(err)
        });
    }, [])

    data.length > 0 && console.log("returned data: ", data);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Company Postcode</th>
                    <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 && data.map(row => {
                            return(
                                <tr key={row.id}>
                                    <th scope="row">{row.firstname} {row.lastname}</th>
                                    <td>{row.email}</td>
                                    <td>{row.company.name}</td>
                                    <td>{row.company.postcode}</td>
                                    <td className="text-center">
                                        <Link to={`/edit/${row.id}`} className="p-2">
                                            <FontAwesomeIcon icon={faPen}/>
                                        </Link>
                                        <Link to="#" className="p-2">
                                            <FontAwesomeIcon icon={faTimes}/>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Table
