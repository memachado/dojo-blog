const Home = () => {

    const hancleClick = (e) => {
        console.log('Hello World', e);
    }

    const hancleClickAgain = (name, e) => {
        console.log(`Hello ${name}`, e.target);
    }

    return (
        <div className="home">
            <h2>Home</h2>
            <button onClick={hancleClick} type="button">Click Me</button>
            <button onClick={(e) => hancleClickAgain('Marco!', e)}>Click Me Again</button>
        </div>
    );
}

export default Home;