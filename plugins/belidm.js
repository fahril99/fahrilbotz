let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `store fahrilbotz

β­ββ ππππ’π€π£π π’π‘
ββΎ *12 diamond = 4k via dana*
ββΎ *19 diamond = 6k*
ββΎ *44 diamond = 13k*
ββΎ *60 diamond = 17k*
ββΎ *85 diamond = 25k*
ββΎ *170 diamond = 49k*
ββΎ *240 diamond = 69k*
ββΎ *296 diamond = 85k*
ββΎ *875 diamond = 243k*
ββΎ *2010 diamond = 523k*
ββΎ *4830 diamond = 1.3jt*
ββγ PEMBAYARAN γ β
ββΎ hanya via dana murah
β 100% amanah
ββΎ Tertarik Untuk Beli diamond ?
ββΎKetuk Tombol Di Bawah Ya
β
ββΎ Β© fahril ahmad
ββΎ shop by fahril ahmad
ββΎγ ${namabot} 
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
handler.command = /^(diamond ml|dmml)$/i
handler.help = ['dmml']
module.exports = handler

//ubah aja