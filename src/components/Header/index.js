import React from 'react';
//import logo from '../../images/logo.png';

const Header = () => {
    return(
        <section className="header">
            <span>
                {
                    //<img src={logo} alt="HBO GO" />
                }
            </span>
        </section>
    );
}

const ConditionalHeader = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return (<Header />);
    }
    return (<div></div>);
}

export default ConditionalHeader;