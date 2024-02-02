import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Comments() {

    let [val, setval] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
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
                    <td>User Id</td>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Body</td>
                </tr>
                {
                    val.map((ele, ind) => {
                        return (
                            <>
                                <tr>
                                    <td>{ele.postId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.body}</td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>

        </>
    )
}
export default Comments;