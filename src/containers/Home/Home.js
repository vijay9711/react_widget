import React from 'react';
import styled from "styled-components";
import Button from "../../Widgets/Button/Button.js";

const Wrapper = styled.div`
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`

const Home = () => {
    return (
        <div>
            <Button 
                label='click me'
                class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            />
        </div>
    )
}
export default Home;