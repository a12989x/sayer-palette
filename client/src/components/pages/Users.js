import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiCheck } from 'react-icons/fi';
import { ClipLoader } from 'react-spinners';

import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../contexts/AuthContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { notifySuccess, notifyError } from '../Toastify';

toast.configure();

const User = (props) => {
    const { user } = useContext(AuthContext);
    const { t } = useContext(LanguageContext);

    const [roles, setRoles] = useState(['user', 'admin', 'superadmin']);
    const { username, role, _id, deleteUser } = props;
    const [roleLocal, setRoleLocal] = useState(role);
    const [roleSelect, setRoleSelect] = useState(role);

    const updateUser = async (roleSelect) => {
        try {
            const params = { role: roleSelect };
            await axios.patch(`/api/users/${_id}`, params);
            setRoleLocal(roleSelect);
            notifySuccess(t('notify.updateUser.success'));
        } catch (error) {
            notifyError(t('notify.updateUser.error'));
        }
    };

    return (
        <article className='user'>
            <h3>{username}</h3>
            <div className='select-wrapper'>
                <select
                    name='role'
                    id='role'
                    defaultValue={role}
                    onChange={(e) => setRoleSelect(e.target.value)}
                >
                    {roles.map((name, key) => (
                        <option
                            key={key}
                            value={name}
                            disabled={
                                user.username === username
                                    ? true
                                    : false || name === 'superadmin'
                                    ? true
                                    : false
                            }
                        >
                            {name}
                        </option>
                    ))}
                </select>
            </div>
            {user.username !== username && (
                <button
                    className='delete-button'
                    onClick={() => deleteUser(_id)}
                >
                    <AiOutlineDelete />
                </button>
            )}
            {roleSelect !== roleLocal && (
                <button
                    className='success-button'
                    onClick={() => updateUser(roleSelect)}
                >
                    <FiCheck />
                </button>
            )}
        </article>
    );
};

const Users = () => {
    const { t } = useContext(LanguageContext);

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await axios.get('/api/users/');
                setUsers(data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        };

        getUsers();
    }, []);

    const deleteUser = async (id) => {
        try {
            await axios.delete(`/api/users/${id}`);
            setUsers(users.filter((user) => user._id !== id));
            notifySuccess(t('notify.deleteUser.success'));
        } catch (error) {
            notifyError(t('notify.deleteUser.error'));
        }
    };

    return (
        <main className='users'>
            <div className='container'>
                <h1 className='title'>{t('users.title')}</h1>
                <h4 className='description'>{t('users.description')}</h4>

                {!isLoading ? (
                    <section className='users__wrapper'>
                        <div className='users__wrapper-header'>
                            <h2>{t('users.username')}</h2>
                            <h2>{t('users.role')}</h2>
                        </div>
                        <hr />
                        {users.map((user) => (
                            <React.Fragment key={user._id}>
                                <User {...user} deleteUser={deleteUser} />
                                <hr />
                            </React.Fragment>
                        ))}
                    </section>
                ) : (
                    <ClipLoader size={100} color='#1a8ccb' loading={true} />
                )}
            </div>
        </main>
    );
};

export default Users;
