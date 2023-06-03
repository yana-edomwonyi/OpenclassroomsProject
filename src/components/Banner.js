import logo from '../images/logo.png'
import '../styles/Banner.css'
function Banner(){
    const title = "United Developers' Team"
    return (
        <div className='udt-banner'>
            <img src={logo} alt='United Developers' className='udt-logo' />
            <h1 className='jh-title'>{title}</h1>
        </div>
    )
}

export default Banner
