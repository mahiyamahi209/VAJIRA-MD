const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
global.email = 'mahenbro372@gmail.com'
global.github = 'https://github.com/VajirTech/VAJIRA-MD'
global.location = 'Srilanka Colombo'
global.packname = '𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚋𝚢-ᵀʰᵉ 𝒮𝓅𝑒𝑒𝒹 𝑅𝒾𝒹𝑒𝓇';
global.author = '𝓛𝓸𝓻𝓭 𝓜𝓪𝓱𝓲';
global.mess = {
    banned: '`You are *Banned* fron using commands!`',
    bangc: '`This Group is *Banned* from using Commands!`',
    success: '`✓ Success`',
    admin: '`This feature is only for group admins`',
    botAdmin: '`I am not an admin!`',
    owner: '`You are not my owner`',
    group: '`You can use this command only in groups ❌`',
    private: '`Feature is used only for private chats!`',
    bot: '`Bot number user special features`',
    wait: '*Processing Your request*',
    endLimit: '`Your daily limit has expired, the limit will be reset every 12 hours`',
}

global.owner = [process.env.OWNER_NUMBER] || ['94721400708'] // Owner number , (අයිතිකරුගේ නම්බර් එක )

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'VAJIRA-MD=7QtWGYCZ#lv9V6ceRPd_boNmHlsoXMqR-zzYaQmbwp9qnlGfVwbE',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://izumimd_meje_user:0Vhm5vKGZ7ORt2FlJBQf4d6EtRdeuE8z@dpg-cn0o2imn7f5s73fa46q0-a.frankfurt-postgres.render.com/izumimd_meje',
PREFIX:  process.env.PREFIX || ['.'] ,
LANG:  process.env.LANG || 'SI' ,    
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || true  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || true  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || true  ,
AUTO_READ:  process.env.AUTO_READ  || true  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,    
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || true  ,            
WORK_TYPE: process.env.WORK_TYPE || 'public'  ,
ANTI_LINK: process.env.ANTI_LINK || true  ,
ANTI_BOT: process.env.ANTI_BOT || true  ,
OWNER_NUMBER: process.env.OWNER_NUMBER || '94721400708'  ,    
ALIVE: process.env.ALIVE || `default`,
OWNER_NAME: process.env.OWNER_NAME || '𝓛𝓸𝓻𝓭 𝓜𝓪𝓱𝓲' ,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || true  ,
AUTO_STICKER: process.env.AUTO_STICKER || true  ,
WELCOME:  process.env.WELCOME  || true ,    
NUMBER_212_BLOCK: process.env.NUMBER_212_BLOCK || true  ,
FOOTER: process.env.FOOTER ||  '©ᵀʰᵉ 𝒮𝓅𝑒𝑒𝒹 𝑅𝒾𝒹𝑒𝓇 - ＭＤ',
LOGO: process.env.LOGO || `<a href="https://ibb.co/pRzrVkV"><img src="https://i.ibb.co/Sdn7YZY/Untitled-1.png" alt="Untitled-1" border="0"></a>` ,
IMAGE: process.env.IMAGE || `<a href="https://ibb.co/pRzrVkV"><img src="https://i.ibb.co/Sdn7YZY/Untitled-1.png" alt="Untitled-1" border="0"></a>`     
};
