import {Navigate} from "react-router";

export const getError = (error) => {
    if (error === 404)
        return <Navigate to='/404' />
}