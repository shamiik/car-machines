import React from 'react';
import { Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    const { } = useAuth();
    return (
        <Route>
            {...rest}
            render={({ location }) =>
                auth.user ?
                    children
                    : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
        </Route>
    );
};

export default PrivateRoute;