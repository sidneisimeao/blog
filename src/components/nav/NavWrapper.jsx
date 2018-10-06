import React from 'react';

import NavHeader from 'components/nav/NavHeader';
import Navigation from 'components/nav/Navigation';
import NavFooter from 'components/nav/NavFooter';

const NavWrapper = () => (
    <div className="column is-full-mobile is-one-third-tablet">
        <NavHeader />
        <Navigation />
        <NavFooter />
    </div>
);

export default NavWrapper;