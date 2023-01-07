'use client'

import { useEffect } from "react";
import Footer from "../components/Footer";

export default function Error(props: { type?: 'page' | 'user' }) {
    useEffect(() => {
        document.title = "404 | GitHub Users"
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let msg = ''

    switch (props.type) {
        case 'user':
            msg = "Oops! This user doesn't existe"
            break
        default:
            msg = "Oops! This page doesn't exist"
    }

    return (
        <div className={'page-content'}>
            <h1>{msg}</h1>
            <Footer />
        </div>
    )
}
