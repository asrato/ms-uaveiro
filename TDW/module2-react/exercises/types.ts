export type ButtonType = {
    children: any
    onClick?: Function
    type?: "button" | "submit" | "reset" | undefined
}

export type IconType = {
    width?: number
    height?: number
    color?: string
}

export type PaginationType = {
    onChange: Function
    maxPages: number
    page: number
}

export type SearchType = {
    setSearchTerm: Function
}

export type UserType = {
    avatar_url: string
    login: string
    type: string
}

export type UsersListType = {
    users: UserType[]
}

export type UserCardType = {
    user: UserType
}