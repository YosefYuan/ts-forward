import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import "./controller/LoginController";
import { router } from "./controller/decorator";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "session",
    keys: ["student yosef"],
    maxAge: 24 * 3600 * 1000
  })
);

app.use(router);

app.listen(7001, () => {
  console.log("app is running!");
});
