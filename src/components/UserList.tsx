import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';
import { useActions } from '../hooks/useActions';


const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.userReducer)
    console.log(users);

    const {fetchUsers} = useActions()
    
    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>Произошла ошибка</h1>
    }

    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UserList;