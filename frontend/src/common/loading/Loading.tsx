import './Loading.scss';
import Logo from '../../assets/svg/logosign.svg'

const Loading = () => {

  return (
    <div className='loading-overlay'>
        <div className="lds-dual-ring"></div>
        <Logo/>
        <div className="lds-dual-ring-2"></div>
    </div>
  )
}

export default Loading