import React from "react";
import Button from "./Button";

const Undo = ({ onUndo }) => {
	return <Button color="gray" text="Undo" onClick={onUndo} />;
};

export default Undo;
