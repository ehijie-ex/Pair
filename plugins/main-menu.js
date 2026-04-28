const axios = require('axios');

module.exports = {
    name: 'menu',
    description: 'Show available bot commands',

    async execute(sock, m) {
        const prefix = '.';

        const menuText = `
            Dom-X *ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ*  

  ┌─ム *Available Commands*
  ┃ ᪣  ${prefix}alive
  ┃ ᪣  arise
  ┃ ᪣  ${prefix}poll
  ┃ ᪣  ${prefix}couplepp
  ┃ ᪣  ${prefix}owner
  ┃ ᪣   >
  ┃ ᪣  ${prefix}ping
  ┃ ᪣  ${prefix}sticker
  ┃ ᪣  ${prefix}tagall
  ┃ ᪣  ${prefix}tagme
  ┃ ᪣  ${prefix}uptime
  ┃ ᪣  ${prefix}tts
  ╰─────────◆────────╯
> 「 𝙏𝙞𝙢𝙚 - 𝙏𝙞𝙢𝙚𝙡𝙚𝙨𝙨 」
        `.trim();

        const imgUrl = 'https://eliteprotech-url.zone.id/1777114610844fy4lq6.jpg';
        const author = 'Dom-X V2';
        const botname = 'XLICON ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ';
        const sourceUrl = 'https://abztech.my.id/';

        try {
            const thumbnailBuffer = (await axios.get(imgUrl, { responseType: 'arraybuffer' })).data;

            await m.send(menuText, {
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    externalAdReply: {
                        title: author,
                        body: botname,
                        thumbnail: thumbnailBuffer,
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        sourceUrl
                    }
                }
            });
        } catch (err) {
            console.error('❌ Error sending menu:', err);
            await m.reply('⚠️ Failed to send menu.');
        }
    }
};
