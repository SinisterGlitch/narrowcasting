'use strict';

import React from 'react';
import ReactRouter from 'react-router';
import Routes from 'routes';

ReactRouter.run(Routes,
    Handler => React.render(<Handler/>, document.getElementById('container'))
);