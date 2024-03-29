// UserList.js 
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
    const [listOfUsers, setListOfUsers] =
    useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')

        .then(response => {
            setListOfUsers(response.data);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);

        });
    }, []);

    return (
        <div className="user-list">
            <ui>
                {
                    listOfUsers.map(user =>) (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    )
                }
            </ui>
        </div>
    );
            

        


        
    }

    export default UserList;

    
