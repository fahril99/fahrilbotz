let handler = async (m, { conn }) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.qouted ? m.quoted.sender : ''
await conn.groupRemove(m.chat, [who || m.quoted.sender])
}
handler.help = ['kick @tag atau reply chat']
handler.tags = ['admin']
handler.command = /^(kick|rk|k|\-)$/i

handler.group = true
handler.botAdmin = true
handler.admin = true

handler.limit = false

module.exports = handler

