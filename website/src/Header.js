const Intro = () => {

    const Link = "https://react.org"
    return (

       

    <div>
        <header>
            <h1>Welcome to my website!</h1>
            <nav>
            <ul>
                <li><a href={Link}>Home</a></li>
                <li><a href={Link}>About</a></li>
                <li><a href={Link}>Services</a></li>
                <li><a href={Link}>Contact</a></li>
            </ul>
            </nav>
        </header>

    </div>
    )
}

export default Intro;