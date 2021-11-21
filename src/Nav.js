import React from 'react';

function Nav ({disabled, title}) {
    return (
            <button disabled={disabled}>
                    {title}
            </button>
    );
}

export default Nav;