import Link from "next/link";
import { UserCardType } from "../../types";

const UserCard = (props: UserCardType) => {
    return (
        <Link href={`/user/${props.user.login}`} className={'user-card'}>
            <span className={'type'}>{props.user.type}</span>
            <span className={'name'}>{props.user.login}</span>
            <div className={'avatar'} style={{backgroundImage: `url(${props.user.avatar_url})`}} />
        </Link>
    )
}

export default UserCard