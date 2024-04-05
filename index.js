const Discord = require("discord.js-selfbot-v13");
const { Client } = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});
const express = require('express')
const app = express();
const port = 8000;

const largeImages = [
    'https://media.discordapp.net/attachments/1203955104097501254/1225463502760706219/d241a9a505f57d89.gif?ex=662138d3&is=660ec3d3&hm=52c87c26f42c32bcd66b65a53d8f367f31c19a76752414056958252c3408ac6c&=',
    'https://media.discordapp.net/attachments/1203955104097501254/1225463503251308544/Fate_Stay_Night_Heavens_Feel_Ii_Presage_Flower_GIF_-_Fate_Stay_Night_Heavens_Feel_II_Presage_Flower_SABERALTER_-_Discover__Share_GIFs.gif?ex=662138d3&is=660ec3d3&hm=3a01ecf1fdfdca468b2a188ead8768a0a79cc717e1cb49a2ecc0761a96687fd4&=',
    // Add more large image URLs as needed
];

const stateTexts = [
    '「 𝙽𝙸𝙶𝙷𝚃 𝙸𝙽 𝚃𝙷𝙴 𝚂𝙺𝚈 」',
    '「 𝚃𝙷𝙴 𝙾𝙽𝙻𝚈 𝙻𝙸𝙵𝙴 」',
    '「 𝙹𝙾𝙸𝙽 𝙳𝙸𝚂𝙲𝙾𝚁𝙳 」',
    // Add more state texts as needed
];

let currentStateIndex = 0; // Index to track the current state text

let currentLargeImageIndex = 0;

app.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว'))
app.listen(port, () =>
    console.log(`Your app is listening at http://localhost:${port}`)
);

client.on("ready", async () => {
    var startedAt = Date.now();
    console.log(`${client.user.username} เม็ดม่วงทำงานเรียบร้อยแล้ว !`);

    setInterval(() => {
        const currentTime = getCurrentTime();
        const currentDate = getCurrentDate();

        const r = new Discord.RichPresence()
            .setApplicationId('1121867777867788309')
            .setType('STREAMING')
            .setURL('https://www.youtube.com/watch?v=AuI3W-H8j7Q')
            .setState(stateTexts[currentStateIndex])
            .setName('۞ 𝙰𝚂𝚃𝚁𝙾 𝙵𝙰𝙼')
            .setDetails(` ﹝ ⌚${currentTime} | 🖤 Ka  Ting - 𝓐$t๏r ﹞ `)
            .setStartTimestamp(startedAt)
            .setAssetsLargeText(`﹝ 📅 ${currentDate}  |  🛸 0 m/s ﹞`)
            .setAssetsLargeImage(largeImages[currentLargeImageIndex])
            .setAssetsSmallText('A$t๏r 🖤')
            .addButton('🆔 Ting-𝓐$t๏r 👻  🛜', 'https://wetv.vip/th')
            .addButton('🔱 👑  A$t๏r  👑 🔱', 'https://www.twitch.tv/discord')

        client.user.setActivity(r);

      currentLargeImageIndex = (currentLargeImageIndex + 1) % largeImages.length;
      currentStateIndex = (currentStateIndex + 1) % stateTexts.length;
    }, 1000); // Change large image and state text every 1 second
});

function getCurrentDate() {
    const a = new Date(Date.now());
    const c = { timeZone: "Asia/Bangkok", day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = a.toLocaleDateString("en-US", c);
    const [month, day, year] = formattedDate.split('/');
    return `${day}/${month}/${year}`;
}

function getCurrentTime() {
    const a = new Date(Date.now());
    const c = { timeZone: "Asia/Bangkok", hour: "numeric", minute: "numeric", hour12: false };
    return a.toLocaleTimeString("th-TH", c);
}

client.login(process.env.token);
