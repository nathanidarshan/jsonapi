import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Todos() {

    let [val, setval] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
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

            <table className='table'>
                <tr style={{ fontWeight: "bold", textAlign: "center" }}>
                    <td>User Id</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Completed</td>
                </tr>
                {
                    val.map((ele, ind) => {
                        return (
                            <>
                                <tr>
                                    <td>{ele.userId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.completed}</td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>

        </>
    )
}
export default Todos;