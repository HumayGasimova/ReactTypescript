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


    /**
     * Methods
     */
   
    // useInterval(() => {
    // }, [])

    /**
     * Markup
     */

    return(
        <div className="header">
           {props.text}
        </div>
    );
}

export default Header;
 