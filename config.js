//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://niko:1674@cluster0.cv6o3.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "94704020146";
global.owner = process.env.OWNER_NUMBER || "94704020146";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0lZUkVCVGtlMFl1YlA3bTVxUVpUMlJNTzV5dW52bUZGQUJVUWVOanhtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXRMa0NoNmx5VXJXUGpKcTBiWEdDcURGUDJudEFOalBsQlpEMzlOY3ZnMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUCs3T0VNbElZWjk3NFVCbi90ZEo2N1ZaMGdlSUxQMjlRR0s0SjJ6OFdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmZk9yNWppSWJFcUp1NEFxRmx5YzRnL05YNzVDS3dzQ1o4Tm9hbnlQTkJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRPSzJJMmltaGNGV210U3ZuenMzNVJQZjRKMmNaWmFRYWtyQ0VPekxvVlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkM0aFlLU05EQkUrdlRpOTJ0VDVuVUdoYXFYV1NCQU5FdDdLbVZPeFFkUTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUlnRFU2dlpoa0E1U2R6MXE5dktIMnM5T3ZFSXU5L0lLRVhZOTMxTkxYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickJyMTZBVld2Wm5IMy9JTFAyR2RZUE5NeWZPOXRud1V0UGc2SXcxaWlXVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjcvZmVQOHZsTnFZT2JYMXVBaDhZckR2S0hySlpYV0s1eDYzelFWSkVieHBaUDBvS1FsYVJqM1FUWTlSTFJSbnQxYVYrMk9oM2RUejRpMng3aCtVM2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzMsImFkdlNlY3JldEtleSI6IjN0aG9BOVk5VWFiZmNEdmY1Qk8yc2IyQkVNVWpTVThQQ1RBY3NWalQrYzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZiOGlRcFM5UVJTZUNRQ0dhN2duLXciLCJwaG9uZUlkIjoiNjZjZmUyZmQtNGE5YS00MWYxLWE3YjItNWU1Y2JmM2RmMmM0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB6cWNkZHBIOGVtMC9mdnFDTWY5Z3Zja0FNdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOUkxhSmM0cjNiWjM3dzltTktlK0piN2c4OXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVlISEE0NzYiLCJtZSI6eyJpZCI6Ijk0NzA0MDIwMTQ2OjEyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPaUNtK29FRU5hcDVMWUdHQzRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxVGJjTWFkTXB3KzlkUDlLSzNSbmpaSk9sOGJvU29pN253eVhtSG91RWpFPSIsImFjY291bnRTaWduYXR1cmUiOiJXZStIYXVmNmNBejVoN2VadE01eVMybDkrdEt5TWhBMk4vcWpVT2JvZWZCU2dKSUs1aWFSNVBWc3dYZVI2TTZQRWJKMS83M1JNelFOYmtoYUZmZ21Edz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiU3JzZHJ5cVJsclZKeHJreitrNGhNSkY3SVlEZm5HbVgwajF0R3Z3V1VRR0ZGY21EclV2YmQyclhqaTZGY1dSb1I3Q1BHcE84RFdMRWJ5S295OXpkZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwNDAyMDE0NjoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhazIzREduVEtjUHZYVC9TaXQwWjQyU1RwZkc2RXFJdTU4TWw1aDZMaEl4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NTAyNjkxfQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
