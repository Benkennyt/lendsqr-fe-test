import './Users.scss'

import UserStatIcon1 from '../../assets/svg/users1.svg';
import UserStatIcon2 from '../../assets/svg/users2.svg';
import UserStatIcon3 from '../../assets/svg/users3.svg';
import UserStatIcon4 from '../../assets/svg/users4.svg';
import FilterResultIcon from '../../assets/svg/filter-results-button.svg';
import EyeIcon from '../../assets/svg/eyeIcon.svg';
import BlackListIcon from '../../assets/svg/blacklist.svg';
import ActivateUser from '../../assets/svg/activateuser.svg';
import TableMoreIcon from '../../assets/svg/three dots.svg';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUsers } from '../../app/api/userSlice';
import { useAppDispatch } from '../../app/stores/stores';
import Pagination from '../../common/Pagination';
import useWindowResize from '../../hooks/useWindowResize';
import UserDetails from './userDetails/UserDetails';


const Users = () => {
    const { data } = useSelector((state: any) => state.users);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const [data1, setData1] = useState<User[]>(data);
    const [isPanelVisible, setIsPanelVisible] = useState(false)
    const [userId, setUserId] = useState('')
    const [rowIndex, setRowIndex] = useState<null | number>(null)
    const [showUserDetails, setShowUserDetails] = useState<null | boolean>(false)
    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });
    const dispatch = useAppDispatch()
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data1.slice(firstPostIndex, lastPostIndex)
    const { width } = useWindowResize();


    useEffect(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => {
        setShowUserDetails(getBoolean('showDetails'))
    }, [userId])


    useEffect(() => {
        sortData('date_joined')
    }, [data])


    useEffect(() => {
        if (width! <= 530) {
            setPostsPerPage(5)
        } else {
            setPostsPerPage(9)
        }
    }, [width])


    const capitalizeFirstLetter = (status: string) => {
        if (!status) return '';
        return status.charAt(0).toUpperCase() + status.slice(1);
    };

    const sortData = (key: string) => {
        let direction = 'ascending';

        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }

        const sortedData = [...data].sort((a, b) => {

            if (key === 'date_joined') {
                const dateA = new Date(Date.parse(a[key]));
                const dateB = new Date(Date.parse(b[key]));
                if (direction === 'ascending') {
                    return dateA > dateB ? 1 : -1;
                } else {
                    return dateA < dateB ? 1 : -1;
                }
            } else {
                if (a[key] < b[key]) {
                    return direction === 'ascending' ? -1 : 1;
                }
                if (a[key] > b[key]) {
                    return direction === 'ascending' ? 1 : -1;
                }
                return 0;
            }
        });

        setData1(sortedData);
        setSortConfig({ key, direction });
        setCurrentPage(1)
    };

    const handleUserManagementPanelVisibility = (id: number | null) => {
        setIsPanelVisible(true)
        setRowIndex(id)

    }

    const handleUserDetails = (id: string) => {
        localStorage.setItem('showDetails', JSON.stringify(true));
        setUserId(id)
        setIsPanelVisible(false)


    }

    const getBoolean = (key: string): boolean | null => {
        const value = localStorage.getItem(key);
        return value !== null ? JSON.parse(value) : null;
    }


    const UsersDetailsTable = (data: any) => (
        <table>
            <thead>
                <tr>
                    <th>
                        <button onClick={() => sortData('organization')}>
                            <p>Organization</p>
                            <FilterResultIcon />
                        </button>
                    </th>
                    <th>
                        <button onClick={() => sortData('username')}>
                            <p>Username</p>
                            <FilterResultIcon />
                        </button>
                    </th>
                    <th>
                        <button onClick={() => sortData('email')}>
                            <p>Email</p>
                            <FilterResultIcon />
                        </button>
                    </th>
                    <th>
                        <button onClick={() => sortData('phoneNumber')}>
                            <p>Phone Number</p>
                            <FilterResultIcon />
                        </button>
                    </th>
                    <th>
                        <button onClick={() => sortData('date_joined')}>
                            Date Joined
                            <FilterResultIcon />
                        </button>
                    </th>
                    <th>
                        <button onClick={() => sortData('status')}>
                            <p>Status</p>
                            <FilterResultIcon />
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((row: User, index: number) => (
                    <tr key={index}>
                        <td>{row.organization}</td>
                        <td>{row.username}</td>
                        <td>{row.email}</td>
                        <td>{row.phoneNumber}</td>
                        <td>{row.dateJoined}</td>
                        <td className='status'><div className={row.status === 'inactive' ? 'dark-blue' : row.status === 'blacklisted' ? 'red' : row.status === 'pending' ? 'yellow' : 'green'}>{capitalizeFirstLetter(row.status)}</div></td>
                        <td>
                            <button onClick={() => handleUserManagementPanelVisibility(index)}>
                                <TableMoreIcon />
                            </button>

                            {isPanelVisible && rowIndex === index && <div onMouseLeave={() => setIsPanelVisible(false)} className="user-m-p">
                                <button onClick={() => handleUserDetails(row.id)}><EyeIcon /> View Details</button>
                                <button onClick={() => setIsPanelVisible(false)}><BlackListIcon /> Blacklist User</button>
                                <button onClick={() => setIsPanelVisible(false)}><ActivateUser /> Activate User</button>
                            </div>}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );


    return (
        <div className="content-display">
            {showUserDetails ? <UserDetails setShowUserDetails={setShowUserDetails} userId={userId} setUserId={setUserId} /> :
                <div className='users-content'>
                    <h1>Users</h1>
                    <div className="users-stats">
                        <div className="stat">
                            <div className='stat-icon'>
                                <UserStatIcon1 />
                            </div>
                            <p className='stat-name'>USERS</p>
                            <p className='stat-total'>2,453</p>
                        </div>
                        <div className="stat">

                            <UserStatIcon2 />
                            <p className='stat-name'>ACTIVE USERS</p>
                            <p className='stat-total'>2,453</p>
                        </div>
                        <div className="stat">
                            <UserStatIcon3 />
                            <p className='stat-name'>USERS WITH LOANS</p>
                            <p className='stat-total'>12,453</p>
                        </div>
                        <div className="stat">
                            <UserStatIcon4 />
                            <p className='stat-name'>USERS WITH SAVINGS</p>
                            <p className='stat-total'>2,453</p>
                        </div>
                    </div>
                    <div className="users-table">
                        <div className="table-d">
                            {UsersDetailsTable(currentPosts)}
                        </div>
                        <div className="table-pagination">

                            <Pagination
                                totalPosts={data.length}
                                setCurrentPage={setCurrentPage}
                                postsPerPage={postsPerPage}
                                currentPage={currentPage}
                            />

                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Users