import { UsersListType, UserType } from "../../types"
import UserCard from "../UserCard";

const UsersList = (props: UsersListType) => {
    return (
        <div className={'users-list'}>
            {
                props.users.map((user: UserType, index: number) => {
                    return (
                        <UserCard key={index} user={user} />
                    )
                })
            }
        </div>
    )
}

export default UsersList