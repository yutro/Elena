import {Db} from "@elena:db";
import {DataContext} from "../handlers";
import React, {MouseEventHandler, useContext} from "react";

export const ModalWindow = () => {
    const {text, displayPopUp} = useContext(DataContext)
    const saveButtonClickHandler: MouseEventHandler<HTMLButtonElement> = async () => {
        await Db.addWord({text})
        displayPopUp(false)
    }

    return(
        <div className="shadow-xl rounded-lg p-4 bg-white border border-gray-500">
            <div>
                <span className="font-bold">Text:</span> {text}
            </div>
            <button onClick={saveButtonClickHandler} className="p-2 my-2 bg-gray-300 rounded-lg border border-gray-500">save to Deck</button>
        </div>
    )
}