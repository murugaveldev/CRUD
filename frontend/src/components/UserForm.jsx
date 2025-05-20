import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';

const UserForm = () => {
    const {
        createUser,
        updateUser,
        editingUser,
    } = useUserContext();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        location: '',
    });

    useEffect(() => {
        if (editingUser) {
            setFormData(editingUser);
        } else {
            setFormData({ name: '', email: '', location: '' });
        }
    }, [editingUser]);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingUser) {
            await updateUser(editingUser._id, formData);
        } else {
            await createUser(formData);
        }
        setFormData({ name: '', email: '', location: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 space-y-3">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border p-2 rounded"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border p-2 rounded"
                required
            />
            <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full border p-2 rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                {editingUser ? 'Update User' : 'Create User'}
            </button>
        </form>
    );
};

export default UserForm;
