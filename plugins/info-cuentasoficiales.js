let media = imagen10; // Asegúrate de que imagen10 contenga la ruta de la imagen que deseas enviar
let handler = async (m, { conn, command }) => {
    let fkontak = {
        "key": {
            "participants": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    };

    let str = `𝖡𝗂𝖾𝗇𝗏𝖾𝗇𝖽𝗂𝗈 𝖠 𝖫𝖺𝗌 𝖢𝗎𝖾𝗇𝗍𝖺𝗌 𝖮𝖿𝗂𝖼𝗂𝖺𝗅𝖾𝗌 😻
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚡️ *Propietario:*
Wa.me/50248010799
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
❤️‍🔥 *emer*
wa.me/51984368849
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌹 *Colaborador 1:*
Wa.me/51984368849
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌹 *Colaborador 2:*
wa.me/56999631797
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🧩 *Grupos Oficiales:*
1) *${gp1}*\n
2) *${gp2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
📍 *Canal De Youtube:*
${yt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`;

    // Enviar la imagen como documento con el mensaje estructurado
    await conn.sendFile(m.chat, media, 'imagen.jpg', str, fkontak, true);
};

handler.command = ['cuentas','cuentasoficiales'];
handler.exp = 35;
handler.register = true;

export default handler;