import type {IconButtonProps} from "../../types.ts";

const IconButton = ({onClick, disabled=false, icon, addClasses=""} : IconButtonProps)  => {
    return (
        <>
            <button className={`hovver:opacity ${addClasses}`}
            onClick={onClick}
            disabled={disabled}>

                {icon}


            </button>
        </>
    )
}

export default IconButton;