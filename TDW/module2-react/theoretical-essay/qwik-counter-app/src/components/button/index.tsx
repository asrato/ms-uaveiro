import { component$, PropFunction, useStylesScoped$ } from "@builder.io/qwik";
import styles from './button.css?inline';

interface ButtonType {
    label: string,
    onClick$: PropFunction<() => void>
}

const Button = component$((props: ButtonType) => {
    useStylesScoped$(styles)

    return (
        <button class='btn' onClick$={props.onClick$}>{props.label}</button>
    )
})

export default Button