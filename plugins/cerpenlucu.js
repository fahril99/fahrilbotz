let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Teman yang Baik*

Rina dan Dini dikenal sebagai sahabat baik yang populer di sekolah. Meskipun berbeda kelas, tapi mereka selalu menghabiskan waktu istirahat bersama. Tidak ada yang meragukan eratnya persahabatan di antara mereka.

Meski berbeda karakter, tetap tidak menghalangi kedekatan mereka. Rina merupakan seorang siswi pendiam yang tidak akan populer jika tidak bersama Dini. Sedangkan Dini cenderung seperti seorang pembual yang hobi memamerkan barang-barang milik Rina.

Suatu hari pada sebuah acara pengundian hadiah, Rina terpilih menjadi salah satu pemenang. Ia datang bersama Dini. Di sana para pemenang diperbolehkan untuk memilih sendiri hadiah berupa voucher belanja dengan berbagai nominal.

Dari lima pemenang terpilih, Rina mendapat giliran keempat untuk mengambil hadiah. Rina melihat pemenang yang akan mengambil hadiah setelahnya, yaitu seorang ibu berpakaian lusuh dengan keempat anaknya yang masih kecil. Ia kemudian melihat voucher yang tersisa.

Melihat nominal pada voucher yang tinggal dua pilihan, ia memilih voucher belanja dengan nominal paling rendah kemudian berbalik dan tersenyum pada ibu dan empat anaknya. Hal ini membuat Dini terkejut dan menganggapnya bodoh.

Dini kemudian mencoba menguji Rina dengan uang yang ia bawa. Ia meminta Rina untuk mengambil salah satu uang yang ia sodorkan. Sedikit bingung, Rina mengambil uang dengan nominal paling rendah.

Keesokan harinya Dini bercerita kepada teman-temannya tentang kebodohan Rina. Untuk membuktikannya, Dini memanggil Rina ke hadapan teman-teman kelasnya.

“Hai, Rin, aku ada uang nganggur nih. Kamu pilih yang mana? Aku kasih buat kamu.” Dini menyodorkan uang sejumlah Rp10.000 dan Rp20.000 kepada Rina.

Rina pun mengambil Rp10.000 dari Dini. Dini dan teman-temannya tertawa dan mengatakan bahwa Rina bodoh. Peristiwa ini tidak hanya terjadi satu atau dua kali. Beberapa teman Dini juga ikut-ikutan melakukan hal itu.

Rina tetap diam dipermalukan seperti itu. Dan setiap kali dipaksa untuk memilih, ia selalu bersikap tenang dan memilih uang dengan nominal yang paling rendah. Ia juga ikut tertawa ketika orang-orang menertawakannya.

Hingga suatu hari ketika Dini memamerkan kebodohan Rina pada salah seorang kakak kelas terpopuler bernama Rifki dihadapan teman-teman kelasnya. Dini kembali menyodorkan uang, kali ini bernominal Rp50.000 dan Rp100.000, kepada Rina dan memintanya memilih.

Lagi-lagi Rina memilih uang dengan nominal terendah. Semua orang tertawa, menertawakan Rina yang hanya tertunduk, kecuali Rifki. Ia tertegun mengamati siapa sebenarnya yang sedang membodohi siapa.

“Lihat, Kak. Teman baikku yang satu ini unik kan?” kata Dini kembali mulai mempermalukan Rina.

“Ya, dia memang unik dan cerdas. Jika saja ia memilih uang dengan nominal tertinggi dari awal, maka kalian tidak akan mau bermain dengannya bukan? Cobalah kalian hitung berapa ratus ribu yang sudah kalian keluarkan cuma-cuma,” kata Rifki.

Dia pintar, memilih bersabar untuk mengambil keuntungan lebih. Jadi, sebenarnya siapa yang sedang membodohi siapa?” lanjut Rifki tertawa.

Semua orang terdiam mendengar penjelasan dari Kak Rifki. Seketika mereka merasa telah melakukan hal bodoh yang sia-sia. Sedangkan Rina tersenyum memandang Kak Rifki yang berbalik menertawakan Dini dan teman-temannya.

Pada akhirnya, bagi Rina teman yang baik itu selalu ada memberikan tambahan penghasilan tak terduga meski harus dibayar dengan kesabarannya. Tapi tidak apa-apa, setiap perbuatan pasti ada bayarannya dan perbuatan Dini dibayar dengan uang serta rasa malu.
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*cerpenlucu*', 'status@broadcast')
}
handler.help = ['cerpenlucu']
handler.tags = ['fun']
handler.command = /^(cerpenlucu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler 