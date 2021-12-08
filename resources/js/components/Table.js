import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

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
