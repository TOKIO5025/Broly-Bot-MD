let media = './src/Grupo.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
let str = `*📍 GRUPO OFICIAL*

   *_〾̷̸‣⃝⃨⃛⃰⁝̵̓ᝒ̷̸͙🌸̶̩ܻᝒ̷̸꯭͙𝘽𝙍𝙊𝙇𝙔𝘽𝙊𝙏-𝙈𝘿𓆩֟֯፝𓆪𝝣⃯ᵴͦ𝛒⃨ᷫ𝛆ͨ🄲⃪⃯𝛊ᷨ𝛂⃨ͦꝆ᷽ͭ🍁⃝⃙̻⃮̋⃛⃰⁌̷̸̊͟⿻᳔̶̷̸_*
  ┃🧸❏ ${gp4}

   *_ ͟͞〾⃝̵͡𝑬⃗ꭙȾ⃯𝑟𝘦𝑚⃖𝚎֟֯፝͜❀̵⃕ ̤🄷𝕖ᷨɳͦᵵͭ𝐚͢𝖏♡̵̭̭̎͟͞ ₂₀፝֟֯࣪࣪࣪₁₂_*
┃🧸❏ https://chat.whatsapp.com/J9gyFJLbhVIJXaUZlpo8Xt
   
   *_Grupo de antojar 3.0_*
┃🧸❏ https://chat.whatsapp.com/J9gyFJLbhVIJXaUZlpo8Xt

   *_Grupo del bot - Team _*
┃❤️‍🔥❏ https://chat.whatsapp.com/LlFFxtM3eLILL6GhuFlQiP

   *_Canal Oficial_*
┃❤️‍🔥❏ https://whatsapp.com/channel/0029Vaqe1Iv65yDAKBYr6z0A

   *_Grupo Broly Bot - Team_*
┃❤️‍🔥❏ https://chat.whatsapp.com/LlFFxtM3eLILL6GhuFlQiP
*_╰━━━━━━━━━━━━━━━━⊜_*
`
await conn.sendButton(m.chat, str, `͟͞ 𓆩ꪶꪾ𝘿᪶𝙞ᷨ𝙖ᷞ𝙢ͣ𝙤᪶ͨ𝙣ᷜ𝙙ꫂৎ୭࠱࠭ ͟͞\n` + wm, media, [
['Menu Lista 💖', '/lista']], null, [
['⏤͟͞ू⃪ ፝͜⁞brolyBot-MD✰⃔࿐', `${md}`]], fkontak)}
                      
handler.command = ['grupos','linksk','gruposofc','gruposoficiales']
handler.register = true
handler.exp = 33

export default handler