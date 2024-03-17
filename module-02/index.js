// NOTE: CommonJS

// const notifications = require("./notifications");
// notifications.success(`Operacja udana!`);

// NOTE: ES module

import { notifications } from "./notifications.js";
notifications.success(`Operacja udana!`);
