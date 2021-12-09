import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Table = () => {

    const [data, setData] = useState([]);
    const [currentSort, setCurrentSort] = useState();
    const [sortDirectionAsc, setSortDirectionAsc] = useState(false)

    useEffect(() => {
        pullData();
    }, [])

    const pullData = () => {
        axios.get('api')
        .then(res => {
            setData(res.data.contacts);
        })
        .catch(err => {
            console.log(err)
        });
    }

    const handleDelete = (id) => {
        axios.post(`api/delete/${id}`)
            .then(() => handleListRemove(id))
            .catch(err => console.log(err));
    }

    const handleListRemove = (id) => {
        const newList = data.filter((row) => row.id !== id);
        setData(newList);
    }


    function compare(a, b) {

        let stringA = "";
        let stringB = "";

        switch (currentSort) {
            case "name":
                stringA = a.firstname.toUpperCase() + " " + a.lastname.toUpperCase();
                stringB = b.firstname.toUpperCase() + " " + b.lastname.toUpperCase();
                break;
            case "email":
                stringA = a.email.toUpperCase();
                stringB = b.email.toUpperCase();
                break;
            case "company_name":
                stringA = a.company.name.toUpperCase();
                stringB = b.company.name.toUpperCase();
                break;
            case "company_postcode":
                stringA = a.company.postcode.toUpperCase();
                stringB = b.company.postcode.toUpperCase();
                break;
            default:
                stringA = a.id;
                stringB = b.id;
                break;
        }
      
        if (sortDirectionAsc) {
            let comparison = 0;
            if (stringA > stringB) {
              comparison = 1;
            } else if (stringA < stringB) {
              comparison = -1;
            }
            return comparison;
        } else if (!sortDirectionAsc) {
            let comparison = 0;
            if (stringA < stringB) {
              comparison = 1;
            } else if (stringA > stringB) {
              comparison = -1;
            }
            return comparison;
        }

      }

    const sortHandler = (sortBy) => {
        setCurrentSort(sortBy);
        setSortDirectionAsc(!sortDirectionAsc);
    }

    useEffect(() => {
        setData(data.sort(compare))
        setData([...data]);
    }, [currentSort, sortDirectionAsc])

    const buttonStyle = {
        background: "none",
        border: "none",
        paddingRight: "1rem",
        font: "inherit",
        cursor: "pointer",
        outline: "inherit",
        position: "relative"
    }

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">
                        <button 
                            style={buttonStyle}
                            onClick={e => sortHandler('name')}>
                                Name
                                {currentSort === "name" ? sortDirectionAsc
                                    ? <FontAwesomeIcon icon={faAngleDown} style={{position: "absolute", right: 0, top: "17%"}}/>
                                    : <FontAwesomeIcon icon={faAngleUp} style={{position: "absolute", right: 0, top: "17%"}}/>
                                    : ""
                                }
                        </button>
                    </th>
                    <th scope="col">
                        <button
                            style={buttonStyle}
                            onClick={e => sortHandler('email')}>
                                Email
                                {currentSort === "email" ? sortDirectionAsc
                                    ? <FontAwesomeIcon icon={faAngleDown} style={{position: "absolute", right: 0, top: "17%"}}/>
                                    : <FontAwesomeIcon icon={faAngleUp} style={{position: "absolute", right: 0, top: "17%"}}/>
                                    : ""
                                }
                        </button>
                    </th>
                    <th scope="col">
                        <button
                            style={buttonStyle}
                            onClick={e => sortHandler('company_name')}>
                                Company Name
                                {currentSort === "company_name" ? sortDirectionAsc
                                    ? <FontAwesomeIcon icon={faAngleDown} style={{position: "absolute", right: 0, top: "17%"}}/>
                                    : <FontAwesomeIcon icon={faAngleUp} style={{position: "absolute", right: 0, top: "17%"}}/>
                                    : ""
                                }
                        </button>
                    </th>
                    <th scope="col">
                        <button
                            style={buttonStyle}
                            onClick={e => sortHandler('company_postcode')}>
                                Company Postcode
                                {currentSort === "company_postcode" ? sortDirectionAsc
                                    ? <FontAwesomeIcon icon={faAngleDown} style={{position: "absolute", right: 0, top: "17%"}}/>
                                    : <FontAwesomeIcon icon={faAngleUp} style={{position: "absolute", right: 0, top: "17%"}}/>
                                    : ""
                                }
                        </button>
                    </th>
                    <th className="text-center">
                        Action
                    </th>
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
                                        <Link to={`/edit/${row.id}`} className="px-2" style={{ color: "#4a8fff" }}>
                                            <FontAwesomeIcon icon={faPen} />
                                        </Link>
                                        <button
                                            className="px-2"
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
