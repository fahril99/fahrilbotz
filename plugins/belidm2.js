let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `store fahrilbotz

β­ββ ππππ’π€π£π ππ
ββΎ *12 diamond = 3k via dana*
ββΎ *50 diamond = 9k*
ββΎ *70 diamond = 10k*
ββΎ *140 diamond = 21k*
ββΎ *185 diamond = 25k*
ββΎ *170 diamond = 49k*
ββΎ *355 diamond = 50k*
ββΎ *720 diamond = 110k*
ββΎ *1450 diamond = 210k*
ββΎ *7290 diamond = 1jt*
ββΎ *36500 diamond = 5jt*
ββγ PEMBAYARAN γ β
ββΎ hanya via dana murah
β 100% amanah
ββΎ Tertarik Untuk Beli diamond ?
ββΎKetuk Tombol Di Bawah Ya
β
ββΎ Β© fahril ahmad
ββΎ shop by fahril ahmad
ββΎγ ${namabot} γ
β°β
`.trim()
  const button = {
        buttonText: 'via',
        description: kontol,
        sections:  [{title: "silahkan di pilih", rows: [
        {title: 'dana', description: "100% amanah", rowId:"#viadana"},
        {title: 'pulsa', description: "100% amanah", rowId:"#viapulsa"},
        {title: 'Owner', description: "", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['info', 'tools']
handler.command = /^(diamond ff|dmff)$/i
handler.help = ['dmff']
module.exports = handler

//ubah aja