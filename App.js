import React from "react";
import ReactDOM from "react-dom/client";
const Parent = React.createElement("div", { id: parent }, [
	React.createElement("h1", { key: "1" }, "This is an h1 tag fats"),
	React.createElement("h1", { key: "2" }, "This is an h1 tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);
