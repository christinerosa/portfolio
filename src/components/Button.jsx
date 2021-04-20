import React, {useState} from "react";
    
function Button(props) {
    const [rotation, setRotation] = useState({});

    function handleOver() {
        setRotation({
            transform:"rotate(90deg)",
            transition: "300ms ease"
        });
    }

    function handleOut() {
        setRotation({
            transform: "rotate(0deg)",
            transition: "500ms ease"
        });
    }

    function handleClick() {
        const element = document.getElementById("about");

        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

    }

    return (
        <div className={props.Classes} onMouseOver={handleOver} onMouseOut={handleOut} onClick={handleClick}>
            {props.ButtonName} <img style={rotation} className="btn-icon" src={props.Icon} alt="Next Arrow"></img>
        </div>
    );
}

export default Button;