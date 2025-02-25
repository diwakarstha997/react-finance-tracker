import Button from "./Button"
import Logo from "./Logo";

const NavBar = () => {
    return(
        <>
            <div className="flex-container navbar">
                <Logo className="logo-sm"/>
                <div className="menu">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="call-to-action">
                    <Button link="/login" className="login-btn" text="Login"/>
                    <Button link="/signup" className="get-started-btn get-started-btn-sm" text="Get Started"/>
                </div>
            </div>
        </>
    )
}

export default NavBar;