import logoImg from "../assets/logo.webp"

const Logo = (props) => {
    const { className } = props
    return (
        <>
            <div className={"flex-container logo "+{className}}>
                    <div className="logo-box">
                        <img src={logoImg} alt="logo" width="100%"/>
                    </div>
                    <a href="#" className="logo-text">
                        FinanceTracker
                    </a>
            </div>
        </>
    )
}

export default Logo;