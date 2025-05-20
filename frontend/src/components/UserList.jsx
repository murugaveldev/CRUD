import React from 'react';
import { useUserContext } from '../context/UserContext';

const UserList = () => {
    const { users, setEditingUser, deleteUser,} = useUserContext();
    // 
    return (
        <div className="space-y-2">
            {users.map((user) => (
                <div key={user._id} className="flex justify-between items-center border p-3 rounded bg-gray-100">
                    <div>
                        <p className="font-semibold">{user.name}</p>
                        <p>{user.email}</p>
                        <p className="text-sm text-gray-600">{user.location}</p>
                    </div>
                    <div className="space-x-2">
                        <button
                            onClick={() => setEditingUser(user)}
                            className="bg-yellow-500 text-white px-2 py-1 rounded"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteUser(user._id)}
                            className="bg-red-600 text-white px-2 py-1 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
