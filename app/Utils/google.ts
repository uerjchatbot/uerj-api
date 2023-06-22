import Env from "@ioc:Adonis/Core/Env";
import { google } from "googleapis";

const auth = new google.auth.OAuth2({
  clientId: Env.get("GOOGLE_CLIENT_ID"),
  clientSecret: Env.get("GOOGLE_CLIENT_SECRET"),
  redirectUri: Env.get("GOOGLE_CALLBACK_URL"),
});

auth.setCredentials({
  refresh_token: Env.get("GOOGLE_REFRESH_TOKEN"),
});

export const { forms: FormAPI } = google.forms({ version: "v1", auth });
export const { spreadsheets: SheetAPI } = google.sheets({
  version: "v4",
  auth,
});
