import './Users.scss'

import UserStatIcon1 from '../../assets/svg/users1.svg';
import UserStatIcon2 from '../../assets/svg/users2.svg';
import UserStatIcon3 from '../../assets/svg/users3.svg';
import UserStatIcon4 from '../../assets/svg/users4.svg';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../../app/api/userSlice';
import { useAppDispatch } from '../../app/stores/stores';

// const UsersDetailsTable = () => (
//     <table>
//         <thead>
//           <tr>
//             <th>Organization</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Phone Number</th>
//             <th>Date Joined</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index}>
//               <td>{row.organization}</td>
//               <td>{row.username}</td>
//               <td>{row.email}</td>
//               <td>{row.phoneNumber}</td>
//               <td>{row.dateJoined}</td>
//               <td>{row.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// )

const Users = () => {
    const { data } = useSelector((state: any) => state.users);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    console.log(data)
  return (
    <div className="content-display">
          <div className='users-content'>
            <h1>Users</h1>
            <div className="users-stats">
                <div className="stat">
                    <div className='stat-icon'>
                    <UserStatIcon1/>
                    </div>
                    <p className='stat-name'>USERS</p>
                    <p className='stat-total'>2,453</p>
                </div>
                <div className="stat">
                    
                    <UserStatIcon2/>
                    <p className='stat-name'>ACTIVE USERS</p>
                    <p className='stat-total'>2,453</p>
                </div>
                <div className="stat">
                    <UserStatIcon3/>
                    <p className='stat-name'>USERS WITH LOANS</p>
                    <p className='stat-total'>12,453</p>
                </div>
                <div className="stat">
                    <UserStatIcon4/>
                    <p className='stat-name'>USERS WITH SAVINGS</p>
                    <p className='stat-total'>2,453</p>
                </div>
            </div>
          </div>
        </div>
  )
}

export default Users