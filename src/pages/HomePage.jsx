import NavBar from "../components/NavBar";

const HomePage = () => {
    return (
        <>
            <NavBar />
            <p>
                This is Home Page
            </p>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">SignUp</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/income">Income</a></li>
                <li><a href="/expense">Expense</a></li>
                <li><a href="/transaction">Transaction</a></li>
            </ul>
        </>
    )
}

export default HomePage;