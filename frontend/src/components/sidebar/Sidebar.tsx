import './Sidebar.scss';
import DropDownIcon2 from '../../assets/svg/dropdown2.svg';
import SwitchORGIcon from '../../assets/svg/switch.svg';
import DashboardIcon from '../../assets/svg/dashboard.svg';
import UsersIcon from '../../assets/svg/users.svg';
import GuarantorsIcon from '../../assets/svg/guarantors.svg';
import LoansIcon from '../../assets/svg/loans.svg';
import DecisionMIcon from '../../assets/svg/decisionM.svg';
import SavingsIcon from '../../assets/svg/savings.svg';
import LoanRIcon from '../../assets/svg/loanR.svg';
import WhitelistIcon from '../../assets/svg/whitelist.svg';
import KarmaIcon from '../../assets/svg/karma.svg';
import SavingsP from '../../assets/svg/savingsP.svg';
import FeesCIcon from '../../assets/svg/fees.svg';
import TransactionsIcon from '../../assets/svg/transactions.svg';
import ServicesIcon from '../../assets/svg/services.svg';
import ServiceAIcon from '../../assets/svg/serviceA.svg';
import SettlementsIcon from '../../assets/svg/settlements.svg';
import ReportsIcon from '../../assets/svg/reports.svg';
import PreferencesIcon from '../../assets/svg/preferences.svg';
import FeesPIcon from '../../assets/svg/feesP.svg';
import AuditLIcon from '../../assets/svg/audit.svg';
import Logo from '../../assets/svg/logo2.svg';



interface SidebarProps {
    showMobileNav: boolean
}
const Sidebar = (props: SidebarProps) => {
    const {showMobileNav} = props;

  return (
    <nav id='sidebar' className='sidebar' data-visible={showMobileNav ? 'true' : 'false'}>
                    <div className="switch-dash">
                        <div className="logo">
                            <Logo/>
                        </div>
                        
                    <div 
                    className="switch-organization">
                        <SwitchORGIcon />
                        <p>Switch Organization</p>
                        <DropDownIcon2 />
                    </div>
                        <div className="dashboard">
                            <DashboardIcon /> <p>Dashboard</p>
                        </div> 
                    </div>
                    

                    <div className="customers hds">
                        <p>CUSTOMERS</p>
                        <ul>
                            <li><UsersIcon /><a href="">Users</a></li>
                            <li><GuarantorsIcon /><a >Guarantors</a></li>
                            <li><LoansIcon /><a >Loans</a></li>
                            <li><DecisionMIcon /><a >Decision Models</a></li>
                            <li><SavingsIcon /><a >Savings</a></li>
                            <li><LoanRIcon /><a>Loan Request</a></li>
                            <li><WhitelistIcon /><a >Whitelist</a></li>
                            <li><KarmaIcon /><a>Karma</a></li>
                        </ul>
                    </div>
                    <div className="businesses hds">
                        <p>BUSINESSES</p>
                        <ul>
                            <li><SwitchORGIcon /><a >Orgnanisation</a></li>
                            <li><LoanRIcon /><a >Loan Product</a></li>
                            <li><SavingsP /><a >Savings Products</a></li>
                            <li><FeesCIcon /><a>Fees and Charges</a></li>
                            <li><TransactionsIcon /><a >Transactions</a></li>
                            <li><ServicesIcon /><a >Services</a></li>
                            <li><ServiceAIcon /><a>Service Amount</a></li>
                            <li><SettlementsIcon /><a >Settlements</a></li>
                            <li><ReportsIcon /><a >Reports</a></li>
                        </ul>
                    </div>

                    <div className="settings hds">
                        <p>SETTINGS</p>
                        <ul>
                            <li><PreferencesIcon /><a >Preferences</a></li>
                            <li><FeesPIcon /><a>Fees and Pricing</a></li>
                            <li><AuditLIcon /><a >Audit Logs</a></li>
                        </ul>
                    </div>
                </nav>
  )
}

export default Sidebar