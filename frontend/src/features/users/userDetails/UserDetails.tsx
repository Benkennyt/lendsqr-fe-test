import './UserDetails.scss';
import ProfileP from '../../../assets/svg/profile-p.svg';
import StarF from '../../../assets/svg/star-f.svg';
import StarH from '../../../assets/svg/star-h.svg';
import BackIcon from '../../../assets/svg/back.svg';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../../sidebar/Sidebar';
import Header from '../../../app/general/Header';
import { useNavigate } from 'react-router-dom';


const UserDetails = () => {
    const [pageNum, setPageNum] = useState<number>(0)
    const [userData, setUserData] = useState<null | User>(null)
    const { data } = useSelector((state: any) => state.users);
    let user = data.find((user: User) => user.id ===  localStorage.getItem('userId'))
    const navigate= useNavigate()

    useEffect(() => {
        if (user && user.id != '') {
            localStorage.setItem('userData', JSON.stringify(user))
            setUserData(getObject('userData'))
        } else {
            setUserData(getObject('userData'))
        }

        
    }, [])

    const formatNumber = (num: any) => {
        if (num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return ''
        }
    }

    const capitalizeFirstLetter = (status: string | undefined) => {
        if (!status) return '';
        return status.charAt(0).toUpperCase() + status.slice(1);
    };

    const getObject = <T extends unknown>(key: string): T | null => {
        const value = localStorage.getItem(key);
        return value !== null ? (JSON.parse(value) as T) : null;
    };

    const handleBackButton = () => {
        localStorage.clear()
        navigate('/dashboard')
    }

    const renderGeneralDetails = () => (
        <div className="general-details">

            <div className="infos personal">
                <p className="hdn">Personal Infomation</p>
                <div className="details p-infos">
                    <div className="info">
                        <p>FULL NAME</p>
                        <p>{userData?.fullName}</p>
                    </div>

                    <div className="info">
                        <p>PHONE NUMBER</p>
                        <p>{userData?.phoneNumber}</p>
                    </div>

                    <div className="info">
                        <p>EMAIL ADDRESS</p>
                        <p>{userData?.email}</p>
                    </div>

                    <div className="info">
                        <p>BNV</p>
                        <p>{userData?.bvn}</p>
                    </div>

                    <div className="info">
                        <p>GENDER</p>
                        <p>{capitalizeFirstLetter(userData?.gender)}</p>
                    </div>

                    <div className="info">
                        <p>MARITAL STATUS</p>
                        <p>{capitalizeFirstLetter(userData?.maritalStatus)}</p>
                    </div>

                    <div className="info">
                        <p>CHILDREN</p>
                        <p>{userData && userData.children > 0 ? 'None' : userData?.children}</p>
                    </div>

                    <div className="info">
                        <p>TYPE OF RESIDENCE</p>
                        <p>{capitalizeFirstLetter(userData?.typeOfResidence)}</p>
                    </div>
                </div>
            </div>

            <div className="infos education-employment">
                <p className="hdn">Education and Employment</p>
                <div className="details ee-infos">
                    <div className="info">
                        <p>LEVEL EDUCATION</p>
                        <p>{userData?.additionalDetails.educationLevel}</p>
                    </div>

                    <div className="info">
                        <p>EMPLOYMENT STATUS</p>
                        <p>{capitalizeFirstLetter(userData?.additionalDetails.employmentStatus)}</p>
                    </div>

                    <div className="info">
                        <p>SECTOR OF EMPLOYMENT</p>
                        <p>{capitalizeFirstLetter(userData?.additionalDetails.employmentSector)}</p>
                    </div>

                    <div className="info">
                        <p>DURATION OF EMPLOYMENT</p>
                        <p>{capitalizeFirstLetter(userData?.additionalDetails.employmentDuration)}</p>
                    </div>

                    <div className="info">
                        <p>OFFICE EMAIL</p>
                        <p>{userData?.additionalDetails.officeMail}</p>
                    </div>

                    <div className="info">
                        <p>MONTHLY INCOME</p>
                        <p>{userData?.additionalDetails.monthlyIncome}</p>
                    </div>

                    <div className="info">
                        <p>LOAN REPAYMENT</p>
                        <p>{userData?.additionalDetails.loanRepayment}</p>
                    </div>
                </div>
            </div>

            <div className="infos">
                <p className="hdn">Social</p>
                <div className="details s-infos">
                    <div className="info">
                        <p>TWITTER</p>
                        <p>{userData?.socials.twitter}</p>
                    </div>

                    <div className="info">
                        <p>FACEBOOK</p>
                        <p>{userData?.socials.facebook}</p>
                    </div>

                    <div className="info">
                        <p>INSTAGRAM</p>
                        <p>{userData?.socials.instagram}</p>
                    </div>
                </div>
            </div>

            <div className="infos">
                <p className="hdn">Gurantor</p>
                <div className="details g-infos">
                    <div className="info">
                        <p>FULL NAME</p>
                        <p>{userData?.guarantor.fullName}</p>
                    </div>

                    <div className="info">
                        <p>PHONE NUMBER</p>
                        <p>{userData?.guarantor.phoneNumber}</p>
                    </div>

                    <div className="info">
                        <p>EMAIL ADDRESS</p>
                        <p>{userData?.guarantor.email}</p>
                    </div>

                    <div className="info">
                        <p>RELATIONSHIP</p>
                        <p>{capitalizeFirstLetter(userData?.guarantor?.relationship)}</p>
                    </div>


                </div>
            </div>
        </div>
    )

    const handleTiers =(tier: number | undefined) => {
        if(tier === 3) {
            return <p><StarF /> <StarF /> <StarF /></p>
        }else if(tier === 2) {
            return <p><StarF /> <StarF /> <StarH /></p>
        }else if(tier === 1) {
            return <p><StarF /> <StarH /> <StarH /></p>
        }
        else if(tier === 0) {
            return <p><StarH /> <StarH /> <StarH /></p>
        }
    }

    return (
        <div className='user-details-container'>
            <Header/>
            <div className="user-details-body">
                <Sidebar/>
                <div className="user-details-content">
                    <button className='back-btn' onClick={handleBackButton}><BackIcon /> Back to Users</button>
                    <div className="hdn">
                        <h1>User Details</h1>
                        <div className="blacklist-activate">
                            <button className='red'>BLACKLIST USER</button>
                            <button className='teal'>ACTIVATE USER</button>
                        </div>
                    </div>
                    <div className="profile-sum">
                        <div className="top">
                            <div className="name-p">
                                <div className="pic-d">
                                    <ProfileP />
                                </div>
                                <div className="name-id">
                                    <p>{userData?.fullName}</p>
                                    <p>{userData?.id}</p>
                                </div>
                            </div>

                            <div className="bank-tier">
                                <div className="tier">
                                    <p>User's Tier</p>
                                    {handleTiers(userData?.userTier)}
                                </div>
                                <div className="bank-details">
                                    <p>₦{formatNumber(userData?.balance)}</p>
                                    <p>{userData?.accountNumber}/{userData?.bankName}</p>
                                </div>
                            </div>
                            <div className="blacklist-activate in">
                                <button className='red'>BLACKLIST USER</button>
                                <button className='teal'>ACTIVATE USER</button>
                            </div>
                        </div>


                        <nav>
                            <ul>
                                <li className={pageNum === 0 ? 'active' : ''} onClick={() => setPageNum(0)}>General Details</li>

                                <li className={pageNum === 1 ? 'active' : ''} onClick={() => setPageNum(1)}>Documents</li>

                                <li className={pageNum === 2 ? 'active' : ''} onClick={() => setPageNum(2)}>Bank Details</li>

                                <li className={pageNum === 3 ? 'active' : ''} onClick={() => setPageNum(3)}>Loans</li>

                                <li className={pageNum === 4 ? 'active' : ''} onClick={() => setPageNum(4)}>Savings</li>

                                <li className={pageNum === 5 ? 'active' : ''} onClick={() => setPageNum(5)}>App and System</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="other-details">
                        {pageNum === 0 ?
                            renderGeneralDetails() : <p>Current Not Available</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails