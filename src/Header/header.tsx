/**
 * Libraries
 */

 import * as React from 'react';

/**
 * Styles
 */

import './header.scss';

type HeaderProps = {
   fruits: Array<string>
}

/**
 * Header component definition and export
 */

export const Header = (props: HeaderProps) => {

    /**
     * State
     */


    /**
     * Methods
     */
   

    /**
     * Markup
     */

    return(
        <ul className="header">
            {props.fruits.map((el, i) => {
                let color : string = ""
                color = el;
                return <li key={i} style={{color : el}}>{el}</li>
            })}
        </ul>
    );
}

export default Header;
 