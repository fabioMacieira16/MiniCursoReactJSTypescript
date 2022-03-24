import React from "react";

interface HeaderProps {
    title: string;
    subtitle?: string;
}

const Home: React.FC<HeaderProps> = () => {
    return(
        <h1>Hello dev o melho em react</h1>
    );
}

export default Home;