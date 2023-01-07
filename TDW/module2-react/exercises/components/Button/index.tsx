import { ButtonType } from "../../types"

const Button = (props: ButtonType) => {
    return (
        <button className={'btn'} type={props.type || 'button'} onClick={() => props.onClick != null ? props.onClick() : null}>{props.children}</button>
    )
}

export default Button