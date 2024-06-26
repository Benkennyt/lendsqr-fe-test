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
import { useEffect, useRef, useState } from 'react';
import { getUsers } from '../../app/api/userSlice';
import { useAppDispatch } from '../../app/stores/stores';
import Pagination from '../../common/Pagination';
import useWindowResize from '../../hooks/useWindowResize';
import { BiFilterAlt } from 'react-icons/bi';
import { Tooltip } from 'react-tooltip';
import Loading from '../../common/loading/Loading';
import Filter from '../../common/filter/Filter';
import useClickOutside from '../../hooks/useClickOutside';
import { useNavigate } from 'react-router-dom';

interface UsersProps {
    showFilter: boolean;
    handleFilter: () => void;
    Topref: any;
}

const Users = (props: UsersProps) => {
    const { showFilter, handleFilter } = props;
    const {data, isLoading, isError, errorMessage } = useSelector((state: any) => state.users);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const [data1, setData1] = useState<User[]>([]);
    const [isPanelVisible, setIsPanelVisible] = useState(false)
    const [rowIndex, setRowIndex] = useState<null | number>(null)
    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'descending' });
    const [inverseSortIcon, setInverseSortIcon] = useState('');
    const dispatch = useAppDispatch()
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data1.slice(firstPostIndex, lastPostIndex)
    const { width } = useWindowResize();
    const panelRef = useRef<HTMLDivElement>(null);
    useClickOutside(panelRef, () => setIsPanelVisible(false));
    const navigate = useNavigate()



    useEffect(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => {
        sortData('dateJoined')
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
        let direction = 'descending';

        if (sortConfig.key === key && sortConfig.direction === 'descending') {
            direction = 'ascending';
        }

       
            const sortedData = [...data].sort((a, b) => {

                if (key === 'dateJoined') {
                    const dateA = new Date(Date.parse(a[key]));
                    const dateB = new Date(Date.parse(b[key]));
                    if (direction === 'descending') {
                        return dateA > dateB ? -1 : 1;
                    } else {
                        return dateA < dateB ? -1 : 1;
                    }
                } else {
                    if (a[key] < b[key]) {
                        return direction === 'descending' ? -1 : 1;
                    }
                    if (a[key] > b[key]) {
                        return direction === 'descending' ? 1 : -1;
                    }
                    return 0;
                }
            });
            setData1(sortedData);
            setSortConfig({ key, direction });
            setCurrentPage(1)
     

    };

    const handleDataSorting = (key: string, name: string) => {
        sortData(key)
        if (inverseSortIcon === name) {
            setInverseSortIcon('')
        } else {
            setInverseSortIcon(name)
        }
    }

    const handleUserManagementPanelVisibility = (id: number | null) => {
        setIsPanelVisible(true)
        setRowIndex(id)

    }

    const handleUserDetails = (id: string) => {
        localStorage.setItem('userId', (id));
        setIsPanelVisible(false)
        navigate(`/users/${id}`)
        
    }



    const UsersDetailsTable = (data: any) => (
        <table>
            <thead>
                <tr>
                    <th>
                        <button className={inverseSortIcon === 'org1' ? inverseSortIcon : ''} onClick={() => handleDataSorting('organization', 'org1')}>
                            <p>Organization</p>
                            <FilterResultIcon />
                        </button>
                    </th>
                    <th>
                        <button className={inverseSortIcon === 'ursn1' ? inverseSortIcon : ''} onClick={() => handleDataSorting('username', 'ursn1')}>
                            <p>Username</p>
                            <FilterResultIcon />
                        </button>
                    </th>
                    <th>
                        <button className={inverseSortIcon === 'mail' ? inverseSortIcon : ''} onClick={() => handleDataSorting('email', 'mail')}>
                            <p>Email</p>
                            <FilterResultIcon />
                        </button>
                    </th>
                    <th>
                        <button className={inverseSortIcon === 'num' ? inverseSortIcon : ''} onClick={() => handleDataSorting('phoneNumber', 'num')}>
                            <p>Phone Number</p>
                            <FilterResultIcon />
                        </button>
                    </th>
                    <th>
                        <button className={inverseSortIcon === 'date' ? inverseSortIcon : ''} onClick={() => handleDataSorting('dateJoined', 'date')}>
                            Date Joined
                            <FilterResultIcon />
                        </button>
                    </th>
                    <th>
                        <button className={inverseSortIcon === 'stts' ? inverseSortIcon : ''} onClick={() => handleDataSorting('status', 'stts')}>
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

                            {isPanelVisible && rowIndex === index && <div ref={panelRef} className="user-m-p">
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

    console.log(data1)

    return (
        <div className="content-display">
            <div className='users-content'>
                <h1>Users</h1>
                <div className="users-stats">
                    <div className="stat">
                        <div className='stat-icon'>
                            <UserStatIcon1 />
                        </div>
                        <p className='stat-name'>USERS</p>
                        <p className='stat-total'>{isLoading || data1.length === 0 || isError ? 0 : data?.length}</p>
                    </div>
                    <div className="stat">

                        <UserStatIcon2 />
                        <p className='stat-name'>ACTIVE USERS</p>
                        <p className='stat-total'>{isLoading || data1.length === 0 || isError ? 0 : data?.filter((user: any) => user.status === 'active').length}</p>
                    </div>
                    <div className="stat">
                        <UserStatIcon3 />
                        <p className='stat-name'>USERS WITH LOANS</p>
                        <p className='stat-total'>{isLoading || data1.length === 0 || isError ? 0 : data?.filter((user: any) => user.additionalDetails.loanRepayment >= 1).length}</p>
                    </div>
                    <div className="stat">
                        <UserStatIcon4 />
                        <p className='stat-name'>USERS WITH SAVINGS</p>
                        <p className='stat-total'>{isLoading || data1.length === 0 || isError ? 0 : data?.filter((user: any) => user.additionalDetails.savings >= 1).length}</p>
                    </div>
                </div>
                <div className="users-table">
                    <div className="filter">

                        <button
                            data-tooltip-id="filter-tooltip"
                            data-tooltip-content="filter"
                            data-tooltip-place="top"
                            onClick={handleFilter}
                        >
                            <BiFilterAlt />
                            <Tooltip id="filter-tooltip" />
                        </button>
                    </div>
                    <div table-loading={isLoading || data1.length === 0 ? 'true' : 'false'} className={"table-d"}>
                        {isLoading || data1.length < 1 && !isError ? <Loading /> : isError ? <p>{errorMessage}</p> : (UsersDetailsTable(currentPosts))}
                        {width! > 530 && (showFilter && <Filter handleFilter={handleFilter} />)}
                    </div>
                    {!isLoading && !isError && data1.length > 0 && <div className="table-pagination">

                        <Pagination
                            totalPosts={data.length}
                            setCurrentPage={setCurrentPage}
                            postsPerPage={postsPerPage}
                            currentPage={currentPage}
                        />

                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Users