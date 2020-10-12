import React from "react";
import "./App.css";
import Button, { ButtonTextType, ButtonType } from "./components/button/button";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Button
                    text="LOG IN"
                    buttonType={ButtonType.CLEAR}
                    textType={ButtonTextType.WHITE}
                    onPress={() => console.log("I'm the first button.")}
                />
                <Button
                    text="CONTINUE"
                    buttonType={ButtonType.GREEN}
                    textType={ButtonTextType.WHITE}
                    onPress={() => console.log("I'm the second.")}
                />
                <Button
                    text="SKIP"
                    buttonType={ButtonType.WHITE}
                    textType={ButtonTextType.GREY}
                    onPress={() => console.log("Third.")}
                />
                <Button
                    text="ONCE A DAY"
                    buttonType={ButtonType.CLEAR_ALT}
                    textType={ButtonTextType.GREEN}
                    onPress={() => console.log("Hello! I'm the last button!")}
                />
            </header>
        </div>
    );
}

export default App;
