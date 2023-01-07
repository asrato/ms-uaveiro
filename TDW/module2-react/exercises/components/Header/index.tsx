import Link from "next/link"
import { DownloadIcon, LogoIcon } from "../Icons"

const Header = () => {
    return (
        <nav>
            <Link href={'/'}>
                <LogoIcon width={80} height={80} />
            </Link>
            <Link href={"/"} className={'option'}>Home</Link>
            <Link href={"/about"} className={'option'}>About</Link>
            <Link target={'_blank'} href={"assets/tdw-mp2-rato-report.pdf"} download={true} className={'option downlaod desktop'}><DownloadIcon width={16} height={16} color={'#ffffff'} /> Project Report</Link>
            <Link target={'_blank'} href={"assets/tdw-mp2-rato-report.pdf"} download={true} className={'option downlaod mobile'}><DownloadIcon width={16} height={16} color={'#ffffff'} /></Link>
        </nav>
    )
}

export default Header