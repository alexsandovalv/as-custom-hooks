import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        });

        const rest = await fetch(url);
        const data = await rest.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        })
        // console.log(data[0])
    }

    useEffect(() => {
        getFetch()
    }, [url]);

    return ({
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    });
}

// export default useFetch;
