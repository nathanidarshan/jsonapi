import axios from 'axios';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Posts() {

    let [val, setval] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
                <tr style={{fontWeight:"bold" , textAlign:"center"}}>
                    <td>User Id</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Body</td>
                </tr>
                {
                    val.map((ele, ind) => {
                        return (
                            <>
                                <tr>
                                    <td>{ele.userId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
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
export default Posts;