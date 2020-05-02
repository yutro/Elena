import React from 'react';
import ReactDom from 'react-dom'
import { extId } from "@elena:consts";

import "./style.less";
import {PopUpApp} from "./PopUpApp";

let container = document.getElementById(extId);

if (!container) {
  container = document.createElement("div");
  container.id = extId;
  document.body.appendChild(container);
}

ReactDom.render(<PopUpApp />, container)
