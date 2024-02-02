import axios from 'axios';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Users() {

    let [val, setval] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setval(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }, [])

    return (
        <>

            <table border={2} >
                <tr style={{ fontWeight: "bold", textAlign: "center" }}>
                    <td>Id</td>
                    <td>Name</td>
                    <td>UserName</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Company</td>
                </tr>
                {
                    val.map((ele, ind) => {
                        return (
                            <>
                                <tr>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>
                                    <td>
                                        <table>
                                            <tr>
                                                <th>Street</th>
                                                <th>Suite</th>
                                                <th>City</th>
                                                <th>Geo</th>
                                            </tr>
                                            <tr>
                                                <td>{ele.address.street}</td>
                                                <td>{ele.address.suite}</td>
                                                <td>{ele.address.city}</td>
                                                <td>
                                                    <table>
                                                        <tr><th>Lat</th><th>Lng</th></tr>
                                                        <tr>
                                                            <td>{ele.address.geo.lat}</td>
                                                            <td>{ele.address.geo.lng}</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>
                                        <table>
                                            <tr>
                                                <th>Name</th>
                                                <th>CatchPhrase</th>
                                                <th>Bs</th>
                                            </tr>
                                            <tr>
                                                <td>{ele.company.name}</td>
                                                <td>{ele.company.catchPhrase}</td>
                                                <td>{ele.company.bs}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>

        </>
    )
}
export default Users;