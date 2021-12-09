import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Table = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        pullData();
    }, [])

    const pullData = () => {
        axios.get('api')
        .then(res => {
            console.log("returned data: ", res.data.contacts)
            setData(res.data.contacts);
        })
        .catch(err => {
            console.log(err)
        });
    }

    const handleDelete = (id) => {
        axios.post(`api/delete/${id}`)
            .then(res => console.log(res))
            .then(err => console.log(err))
            .then(() => handleListRemove(id));
    }

    const handleListRemove = (id) => {
        const newList = data.filter((row) => row.id !== id);
        setData(newList);
    }

    console.log("rerendered")

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
                                        <Link to={`/edit/${row.id}`} className="p-2" style={{ color: "#4a8fff" }}>
                                            <FontAwesomeIcon icon={faPen} />
                                        </Link>
                                        <button
                                            className="p-2"
                                            onClick={ () => handleDelete(row.id) }
                                            style={{
                                                background: "none",
                                                color: "#4a8fff",
                                                border: "none",
                                                padding: 0,
                                                font: "inherit",
                                                cursor: "pointer",
                                                outline: "inherit",
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faTimes}/>
                                        </button>
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
