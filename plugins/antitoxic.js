let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
_*⚠Jangan Toxic ya*_
_*mau matikan? ketik  .disable antitoxic*_
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /anjing|memek|kontol|goblok|goblog|asu|bangsat|ngentot|ngentod|koncol|babi|anjg|ajg|anjing/i
handler.command = new RegExp

module.exports = handler