import { LogoIcon, NextIcon } from "../Icons"

const Footer = () => {
    return (
        <>
            <div style={{ flexGrow: 1 }} />
            <div className="footer">
                <span className={'content'}>
                    Implemented by André <LogoIcon width={16} color={'#4e4e4e'} height={16} />ato using <NextIcon width={16} height={16} color={'#4e4e4e'} />ext.js
                </span>
            </div>
        </>
    )
}

export default Footer