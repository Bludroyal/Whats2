//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2347053192517";
global.owner = process.env.OWNER_NUMBER || "2349164718113";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVyNklJMVVKTmdjYzVNNnVjV1FrdWcxRndhR2FKU3dLbVA0ZTFabWlsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMCtaVjh0UUVhZWNDWDlWa0Rsb0dlUWdjYVVHV0hFN040UEhkTkNTUlNncz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTcvV0N5R0x5OHVuQUJTMTA5bmJHOUUxMkUxVnc3eHY0eU82RW5aZm1BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhM2trcHZNbDEyL0phOG5hUkUwWnNveURSaDJSV0NDTUdBQ1JQcVJHNmc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDclhNVjNiZ2M3alNhL2dCWGZuRHg1bXJqZW4xVHRRZ3p0dDJSTWF3bEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN0Z0FGNm13b0RhbC9DV3VzY1NjK0s5M3RkV0VrOUF3WUk0L3Y3aDhwZ2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJNVm11TWs5eGZGNDFabHQwbzU4N2tueE1URVNJMGlYOE9DcXBXMzJtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTk9EeDkvTHcxNEtlNCtLM3o3SDdSQkJQREhJQnJEMDErUUt0cXRIR2JuOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKV0xPaHZNY3JvVFVxU2V1WHRyTXFnc0oxNFczaWp4bTFHTWl3S2FaV0ZwWlU1SEE0a2hCejBBbjYyTUYzL05TanRIckhwQXJmT1hJeFgyWHJlb0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiJ1YnU4UHRLL2hoQW90WEp3VEJla0dNYVlwbmprNk1DeHZBN0d3Wmg1cjBBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZbFA4X0pJeFNHLTdYVVIxSHZTamZBIiwicGhvbmVJZCI6IjQxNjZjZDBmLTI5OTktNDIyNi04MDI3LTViMzFiYWFiYTcwNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsNkRZdG9GcnRHdzNwa2FQRThPSTZCNG5QYjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVBFdFNoME1MQkpsT25ocXUyZTRUd3VzSjU4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdNVzZKRVZYIiwibWUiOnsiaWQiOiIyMzQ5MTY0NzE4MTEzOjU0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InNoaSAgICAgTmUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lyUXo3SUlFTWVWaTd3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjhrUUV1V2pOSDcwWXhyWjBxSVhISXJDZlU5VVVMSlhDU1cvSVlzS3paQTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjhDUU1ZM25oOXptOVA0OUtweExIdHBMMVVzdFdGRS8vQmNhcFB3YUI3a2ZDSXRSNElJQm1OQmpWL254ajd6UGNFUE10SEtQODMwU2ZFdTh4dlUxakNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYOVg2b2hTVmxLOWNBWWtBRDFUcGtZcnBRbllWbjByY0thNGtEdHhVZXBUaFJKNW14SnZreFZudlNDZmdMdXJQQlNyQ0kvdm9jOCtPbHdlaXFkZHRCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNjQ3MTgxMTM6NTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZkpFQkxsb3pSKzlHTWEyZEtpRnh5S3duMVBWRkN5VndrbHZ5R0xDczJRTyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjYyNDg1Mn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
