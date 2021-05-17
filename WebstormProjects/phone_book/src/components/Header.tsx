import React, {FC} from 'react';

const Header: FC = () => {
    return (
        <header className="header">
            <p>Logo</p>
            <button className="header__log-link">Sign in</button>
        </header>
    )
}

export default Header;