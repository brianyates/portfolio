import { https } from 'firebase-functions';
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import contactUsFunction from './contactUs';

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/', contactUsFunction);

export const contactUs = https.onRequest(app);