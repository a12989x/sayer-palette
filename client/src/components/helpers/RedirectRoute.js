import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RedirectRoute = ({ user, signPath, children, ...rest }) => (
    <Route
        {...rest}
        render={() => {
            if (!user) return children;
            else if (user) {
                return <Redirect to={{ pathname: signPath }} />;
            }

            return null;
        }}
    />
);

export { RedirectRoute };
