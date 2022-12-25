import styles from './MocApi.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const MocApi = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        axios.get('https://6375371508104a9c5f95411e.mockapi.io/Bascet')
        .then(responce => setState(responce.data))
    }, [])

    return (
        <>
            <h1>Привет</h1>
            {
                state.map((state, index) => {
                    return (
                        <div key={index} className={styles}>
                            <img src={state.avatar}/>
                        </div>
                    )
                })
            }
        </>
    )
}