import React from "react";
import "./button.css";

// HINT: Use this in ButtonProps to determine how the button is styled
export enum ButtonType {
    GREEN = "button-green",
    WHITE = "button-white",
    CLEAR = "button-clear",
    CLEAR_ALT = "button-clearAlt",
}

// HINT: Use this in ButtonProps to determine how the button text is styled
export enum ButtonTextType {
    WHITE = "button-text-white",
    GREEN = "button-text-green",
    GREY = "button-text-grey",
}

interface ButtonProps {
    text: string;
    buttonType: ButtonType;
    textType: ButtonTextType;
    onPress: any;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button
            onClick={props.onPress}
            className="App-button"
            id={props.buttonType}
        >
            <p className="App-button-text" id={props.textType}>
                {props.text}
            </p>
        </button>
    );
};

export default Button;
