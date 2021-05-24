/**
 * Libraries
 */

 import * as React from 'react';

/**
 * Styles
 */

import './header.scss';

type HeaderProps = {
    text: string
}

/**
 * Header component definition and export
 */

export const Header = (props: HeaderProps) => {

    /**
     * State
     */

    let fruits: Array<string> = [
        "red",
        "green",
        "blue",
        "yellow"
    ]

    /**
     * Methods
     */
   

    /**
     * Markup
     */

    return(
        <ul className="header">
            {fruits.map((el, i) => {
                return <li key={i}>{el}</li>
            })}
        </ul>
    );
}

export default Header;
 