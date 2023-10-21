import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState('Marco');

    const [age, setAge ] = useState(25);

    const hancleClick = () => {
        setName('Polo');
        setAge(18);
    }

    return (
        <div className="home">
            <h2>Home</h2>
            <p>{name} is {age} years old!</p>
            <button onClick={hancleClick} type="button">Click Me</button>
        </div>
    );
}

export default Home;