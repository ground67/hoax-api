__path = process.cwd()

// Jan asal ubah ngab
var express = require('express');
var db = require(__path + '/database/db');
try {
var kuhong = db.get('ojan'); // jan diubah
} catch (e) {
	console.log('WELCOME TO GX API!') // boleh diubah
}

var listkey = ['sayahafiz', 'GRATISAN'];
var creatorList = ['Hafidz Abdillah']; // Nama Lu Ngab
var creator = creatorList[Math.floor(Math.random() * creatorList.length)]; // Ini jan diubah
var key = 'sayahafiz' // Apikey Lu Ngab

// Required Modules :
var ffmpeg = require('fluent-ffmpeg');
var _url = require('url')
var brainly = require('brainly-scraper-v2');
var imageToBase64 = require('image-to-base64');
var upload = require(__path + '/lib/upload.js');
var axios = require('axios');
var FormData = require('form-data');
var yt = require('ytdl-core');
var ytpl = require('ytpl');
var qrcode = require('qrcode');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require('scrape-yt');
var gtts = require('node-gtts');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var yts = require('yt-search');
var fs = require('fs');
var util = require('util');
var qs = require('qs');
var router  = express.Router();

var { tts, wait, simih, getBuffer, h2k, banner, getRandom, start, info, success, close, pickRandom } = require(__path + '/lib/functions.js');
var { RemoveBg } = require('remove.bg');
var { tahta } = require(__path + '/lib/tahta.js');
var { createHash } = require('crypto')
var { spawn, exec } = require('child_process');
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var { recognize } = require(__path + '/lib/ocr.js')
var options = require(__path + '/lib/options.js');
var { Vokal, Base, Searchnabi, Gempa } = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

// loghandler :
loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter apikey!'
    },
    notnama: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter nama'
    },
    notimg: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter img'
    },
    notemoji: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter emoji'
    },
    notangka: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter angka'
    },
    notnomor: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter nomor'
    },
    notjumlah: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter jumlah'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter url'
    },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter query'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter kata'
    },
    notlang: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter bahasa'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Tema tidak tersedia silahkan masukkan texmaker/list atau baca dokumentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: `Apikey tidak ditemukan! Silahkan kontak Owner untuk dapatkan Apikey wa.me/62895337278647`
    },
    invalidLink: {
        status: false,
        creator: `${creator}`,
        message: 'Masukan link yang valid!'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'Kata tidak valid'
    },
    invalidtext: {
    	status: false,
        creator: `${creator}`,
        message: 'Teks tidak valid'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    notbase64: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter teks base64'
    },
    number: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Teks harus berupa angka!'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'Erorr! Mungkin Sedang dalam perbaikan'
    }
}

var error = __path + '/views/error.html' // Error
var invalidKey = __path + '/views/invalidKey.html' // Apikey Invalid

// Api Features :
        var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------kuhong-api-storage'+'ojan';

// DATA CEK APIKEY
router.get('/cekapikey', async (req, res, next) => {
    var apikeyInput = req.query.apikey;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
	var limit = 'undefined'
        if (apikeyInput == `${key}`) { limit = 'Unlimited!' }

try {
	res.json({
               status : `active`,
                apikey : apikeyInput,
                limit : limit
            })
 
} catch (e) {
	res.sendFile(error)
   }
})

router.get('/changekey', (req, res, next) => {
    var apikeyInput = req.query.apikey;

    if (!apikeyInput) return res.json(loghandler.notparam)
    if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)

    try {
        kuhong.insert({
            apikey: apikeyInput
        })
        .then(() => {
              res.json({
                  status: true,
                  result: `Apikey "${apikeyInput}" Berhasil ditambahkan!`
              })
        })
    } catch (e) {
        console.log(e)
        res.sendFile(error)
    }
})

router.get('/removekey', (req, res, next) => {
    var apikeyInput = req.query.apikey;

    if (!apikeyInput) return res.json(loghandler.notparam)
    if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)

    try {
        kuhong.remove({
            apikey: apikeyInput
        })
        .then(() => {
             res.json({
                  status: true,
                  result: `Apikey "${apikeyInput}" Berhasil dihapus!`
              })
        })
    } catch (e) {
        console.log(e)
        res.sendFile(error)
    }
})


// DATA API DOWNLOADER
router.get('/downloader/mediafiredl', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter url"})

       if(listkey.includes(apikeyInput)){
       

            function mediafire(query) {
	return new Promise((resolve, reject) => {
		axios.get(query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').text();
				const size = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-info > ul > li:nth-child(1) > span').text();
				const upload_date = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
				const link = $('#downloadButton').attr('href')
				const hsil = {
					judul: link.split('/')[5],
					upload_date: upload_date,
					size: size,
					type: link.split('/')[5].split('.')[1],
					link: link
				}
				resolve(hsil)
			})
			.catch(reject)
	})
}

          mediafire(url)
        .then((data) => {
        	 var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/downloader/ytmp3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter url"})

       if(listkey.includes(apikeyInput)){
       

            async function ytDonlodMp3(url) {
  return new Promise((resolve, reject) => {
    try {
      const id = yt.getVideoID(url)
      const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
      .then((data) => {
        let pormat = data.formats
        let audio = []
        for (let i = 0; i < pormat.length; i++) {
          if (pormat[i].mimeType == 'audio/webm; codecs=\"opus\"') {
            let aud = pormat[i]
            audio.push(aud.url)
          }
        }
        const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
        const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
        const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
        const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
        const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
        
        const result = {
          title: title,
          thumb: thumb,
          channel: channel,
          published: published,
          views: views,
          url: audio[1]
        }
        return(result)
      })
      resolve(yutub)
    } catch (error) {
        reject(error);
      }
      console.log(error)
  })
}

          ytDonlodMp3(url)
        .then((data) => {
        	 var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/downloader/ytmp4', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter url"})

      if(listkey.includes(apikeyInput)){
             
         async function ytDonlodMp4(url) {
  return new Promise((resolve, reject) => {
    try {
      const id = yt.getVideoID(url)
      const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
      .then((data) => {
        let pormat = data.formats
        let video = []
        for (let i = 0; i < pormat.length; i++) {
          if (pormat[i].container == 'mp4' && pormat[i].hasVideo == true && pormat[i].hasAudio == true) {
            let vid = pormat[i]
            video.push(vid.url)
          }
        }
        const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
        const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
        const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
        const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
        const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
        
        const result = {
          title: title,
          thumb: thumb,
          channel: channel,
          published: published,
          views: views,
          url: video[0]
        }
        return(result)
      })
      resolve(yutub)
    } catch (error) {
        reject(error);
      }
      console.log(error)
  })
}

          ytDonlodMp4(url)
        .then((data) => {
        var result = data;
             res.json({
                 	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
             })
         })
} else {
res.sendFile(invalidKey)
}
})

router.get('/downloader/igdl', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
                  url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if(!url) return res.json(loghandler.noturl)

       if(listkey.includes(apikeyInput)){      
       	
       	function igDownload(url) {
  return new Promise((resolve, reject) => {
    const baseUrl = 'https://keeppost.com'
    fetch(baseUrl, {
      method: 'GET',
      headers: {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'
      }
    })
    .then(rsp => rsp.text())
    .then((data) => {
      const $ = cheerio.load(data)
      const build_id = $('input[name="build_id"]').attr('value')
      const build_key = $('input[name="build_key"]').attr('value')
      const bodyForm = new FormData()
      bodyForm.append('url', url)
      bodyForm.append('build_id', build_id)
      bodyForm.append('build_key', build_key)
      fetch(baseUrl + '/process.php', {
        method: 'POST',
        body: bodyForm,
        headers: {
          'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'
        }
      })
      .then(rsp => rsp.text())
      .then((data) => {
        const $$ = cheerio.load(data)
        resolve({
          url: $$('.success > a').attr('href')
        })
      })
      .catch(reject)
    })
    .catch(reject)
  })
}
                
         igDownload(url)
      .then(data => {
      	var result = data;
                 res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
             })
          })
          .catch(e => {
         	res.json(loghandler.error)
})
    } else {
res.sendFile(invalidKey)
}
})

router.get('/downloader/igstory', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter Username"})

       if(listkey.includes(apikeyInput)){
       

            function igStory(username) {
  return new Promise((resolve, reject) => {
    const baseUrl = 'https://igmp4.com'
    fetch(baseUrl + '/download-stories.php', {
      method: 'GET',
      headers: {
        'cookie': 'PHPSESSID=ccb3ar0ul5jiu3knt2rh7pv4g4',
        'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'
      }
    })
    .then(rsp => rsp.text())
    .then((data) => {
      const $ = cheerio.load(data)
      const token = $('input[name="token"]').attr('value')
      const bodyForm = new FormData()
      bodyForm.append('url', 'https://www.instagram.com/' + username)
      bodyForm.append('action', 'story')
      bodyForm.append('token', token)
      bodyForm.append('json', '')
      fetch(baseUrl + '/system/action.php', {
        method: 'POST',
        body: bodyForm,
        headers: {
          'cookie': 'PHPSESSID=ccb3ar0ul5jiu3knt2rh7pv4g4',
          'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'
        }
      })
      .then(v => v.json())
      .then((data) => {
        resolve({
          url_data: data.medias[0]
        })
      })
      .catch(reject)
    })
    .catch(reject)
  })
}

          igStory(username)
        .then((data) => {
        	 var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/downloader/twdl', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter Url"})

       if(listkey.includes(apikeyInput)){
       

            function twitterDown(url) {
  return new Promise((resolve, reject) => {
    const bodyForm = new FormData()
    bodyForm.append('url', url)
    fetch('https://www.savetweetvid.com/downloader', {
      method: 'POST',
      body: bodyForm,
      headers: {
        'cookie': '_ga=GA1.2.1410189489.1630650655; _gid=GA1.2.95965189.1630650656; __gads=ID=8c5bb9c8c08571ab-22722b8c84cb001c:T=1630650656:RT=1630650656:S=ALNI_MYuAHfO543UXBFcCKILbqjWCEhpSg; XSRF-TOKEN=eyJpdiI6Im1UXC8zemE0UXFlYmJEbXoyNm1BeG5BPT0iLCJ2YWx1ZSI6InFNc0xOV0kxUHRaUG53VHdybHhOYnhPaTVMRWo5UExEVTJNSG4xOUFCQ2JEdjBvcGJGMUswS0pUZzNYTDAzNGFPUCtNMDFNOVp5REw2K3dTdUt5NG13PT0iLCJtYWMiOiIzODk5ZGVkM2I2ZjdjMTJhY2Y4NWI2MDY1OTc4OTVkZjFkMjhkOThhYmIyYzU5MzMxZjA0ZDEwNmQyZDViZDRlIn0%3D; laravel_session=eyJpdiI6IkRYK2M3U0VLSGxSQkFGTzRkdW9IeHc9PSIsInZhbHVlIjoiSEVMaUEyWTZUclU2MVN3NzFWdTQ0K2pQbFwvVVQ1d3gzTXJzakRYVFJtQlJvamwxczJnc2VqMHhid1QwdityMGJpd3J0M0h4bFI4RFA2Z09vUkg3T1BBPT0iLCJtYWMiOiJjN2U0ZDYzMTc3Zjg2OTEyOTVlNzgwNWRiMjZjNjMzMWM1NWMxODk3MTY2NjdhNTQ2Zjc0NzU5NTQzNGFjYzBiIn0%3D; __atuvc=5%7C35; __atuvs=6131c11f7c1d0b45004',
        'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'
      }
    })
    .then(rsp => rsp.text())
    .then((data) => {
      const $ = cheerio.load(data)
      resolve({
          title: $('.card > .row > .col-md-4.col-sm-4').text().trim().replace(/\n/g, ' '),
          url: $('.col-md-8.col-sm-8.col-table').find('a').eq(0).attr('href')
      })
    })
    .catch(reject)
  })
}

          twitterDown(url)
        .then((data) => {
        	 var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/downloader/tiktokdl', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter url"})

        if(listkey.includes(apikeyInput)){
       	
async function TiktokDownloader (Url) {
    return new Promise (async (resolve, reject) => {
    let get_data = await axios.get(Url, {
        headers: {
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
            'Cookie': 'tt_webid_v2=6986233640163411458; tt_webid=6986233640163411458; MONITOR_WEB_ID=6986233640163411458; passport_csrf_token_default=6c4582eb39e3a918b79bf19883e0383a; passport_csrf_token=6c4582eb39e3a918b79bf19883e0383a; passport_auth_status=b129aac2144e7d181e9206c77b829f33%2C; passport_auth_status_ss=b129aac2144e7d181e9206c77b829f33%2C; sid_guard=59bce8b9c36fd2ae7c65dc9ed1e57f4b%7C1626609635%7C5184000%7CThu%2C+16-Sep-2021+12%3A00%3A35+GMT; uid_tt=10f21da80e938dc4c74ac772a612ac900db73a510dce996f1e87038ed113d3b0; uid_tt_ss=10f21da80e938dc4c74ac772a612ac900db73a510dce996f1e87038ed113d3b0; sid_tt=59bce8b9c36fd2ae7c65dc9ed1e57f4b; sessionid=59bce8b9c36fd2ae7c65dc9ed1e57f4b; sessionid_ss=59bce8b9c36fd2ae7c65dc9ed1e57f4b; store-idc=alisg; store-country-code=id; tt_csrf_token=K1up8j9z7OmTrSfmvmoO1JP2; R6kq3TV7=AF7-iQB7AQAAqk-Wy_M1HqFLRc1VQ_I-5EkI1mYmYzKL9Nb5BnYDd5zx0dym|1|0|c5260d1687443f9982544406597db77fb23ffc52; s_v_web_id=verify_krsv2o62_iDlMefgy_hytF_4I87_9jYh_Ujpnwxam1TNO; cmpl_token=AgQQAPOgF-RMpbDNIuufsZ04-pWPSIhMP4ArYP5gWA; odin_tt=04cf5d9f07b62e050c679ab203370816484a861d3efc80bd5d0db6fd4b0c4a6018acdd2d4b2b814e487f25ba678a53103e29abb336446c456ee9dfff04a0a789bdc6b29b4685b81aa50161179b68c98b; ttwid=1%7C5hEmJiL5W2c3q3WVqHbF85173NjIdJm9ZJJPEvxQeyI%7C1627801693%7C48ff7670e842ddd8b838a35541a94891eb144539cba2b0cb308b20254e6fe089; passport_fe_beating_status=false'
        }
    })

    //Getting the element
    let $ = require('cheerio').load(get_data.data)
    let jsnya = JSON.parse($('script').eq(6).get()[0].children[0].data)
    let t = jsnya.props.pageProps.itemInfo.itemStruct

	await axios.request({
	    url: "https://ttdownloader.com/",
	    method: "GET",
	    headers: {
		"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"accept-language": "en-US,en;q=0.9,id;q=0.8",
		"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
		"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
	    }
	}).then( respon => {
	    const $ = cheerio.load(respon.data)
	    const token = $('#token').attr('value')
	    axios({
		url: "https://ttdownloader.com/req/",
		method: "POST",
		data: new URLSearchParams(Object.entries({url: Url, format: "", token: token})),
		headers: {
		    "accept": "*/*",
		    "accept-language": "en-US,en;q=0.9,id;q=0.8",
		    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
		    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
		    "cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
		}
	    }).then( res => {
		const ch = cheerio.load(res.data)
		const result = {
		    username: t.author.uniqueId,
		    nickname: t.author.nickname,
        description: t.desc,
        views: t.stats.playCount,
        likes: t.stats.diggCount,
        comments: t.stats.commentCount,
        shares: t.stats.shareCount,
           thumbnail: t.video.cover,
			     nowatermark: ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href'),
			     watermark: ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href'),
			     audio: t.music.playUrl
		}
		resolve(result)
	    }).catch(reject)
	}).catch(reject)
    })
}
            TiktokDownloader(url)
            .then((result) => {
                res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
            })
         })
} else {
res.sendFile(invalidKey)
}
})

// TEXTPRO FEATURES
router.get('/textpro/blackpink', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.lolhuman.xyz/api/textprome/blackpink?apikey=YTRAMLANID&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/blekpink.png', hasil)

         res.sendFile(__path + '/tmp/blekpink.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/neon', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.lolhuman.xyz/api/textprome/neon?apikey=YTRAMLANID&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/neon.png', hasil)

         res.sendFile(__path + '/tmp/neon.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/greenneon', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.lolhuman.xyz/api/textprome/greenneon?apikey=YTRAMLANID&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/greenneon.png', hasil)

         res.sendFile(__path + '/tmp/greenneon.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/blueneon', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.zeks.me/api/bneon?apikey=alpin1234567&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/bneon.png', hasil)

         res.sendFile(__path + '/tmp/bneon.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/matrix', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.zeks.me/api/matrix?apikey=alpin1234567&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/matrix.png', hasil)

         res.sendFile(__path + '/tmp/matrix.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/dropwater', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.zeks.me/api/dropwater?apikey=alpin1234567&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/drop.png', hasil)

         res.sendFile(__path + '/tmp/drop.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/neonlight', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.lolhuman.xyz/api/textprome/neonlight?apikey=YTRAMLANID&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/neonlight.png', hasil)

         res.sendFile(__path + '/tmp/neonlight.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/naruto', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.zeks.me/api/naruto?apikey=alpin1234567&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/naruto.png', hasil)

         res.sendFile(__path + '/tmp/naruto.png')
} else {
res.sendFile(invalidKey)
}
})

// ANIME FEATURES
router.get('/downloader/igstory', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){      
       	
       	function dewabatch(query) {
	return new Promise((resolve, reject) => {
		axios.get('https://dewabatch.com/?s=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const result = [];
				const linkk = [];
				const judull = [];
				const thumb = [];
				const rating = [];
				$('div.thumb > a').each(function(a, b) {
					linkk.push($(b).attr('href'))
					judull.push($(b).attr('title'))
					thumb.push($(b).find('img').attr('src').split('?resize')[0])
				})
				$('#content > div.postbody > div > div > ul > li > div.dtl > div.footer-content-post.fotdesktoppost > div.contentleft > span:nth-child(1) > rating > ratingval > ratingvalue').each(function(c, d) {
					rate = $(d).text();
					rating.push(rate.split(' ')[0])
				})
				for (let i = 0; i < linkk.length; i++) {
					result.push({
						judul: judull[i],
						rating: rating[i],
						thumb: thumb[i],
						link: linkk[i]
					})
				}
				resolve(result)
			})
			.catch(reject)
	})
}

      dewabatch(query)
      .then((result) => {
     res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
             })
          })
          .catch(e => {
         	res.json({ status : false, creator : `${creator}`, message : "Mungkin Username Tersebut Tidak Menggunggah Story"})
})
    } else {
res.sendFile(invalidKey)
}
})

router.get('/anime/manga', async (req, res, next) => {
        var apikeyInput = req.query.apikey
                query = req.query.query
                
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(!query) return res.json(loghandler.notquery)
	
       if(listkey.includes(apikeyInput)){
       fetch(encodeURI(`https://myanimelist.net/search/prefix.json?type=manga&keyword=${query}&v=1`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
             })
         })
} else {
res.sendFile(invalidKey)
}
})

router.get('/anime/loli', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
      	
     const neko = () => new Promise((resolve, reject) => {
                    const Arr = ["Loli", "Anime Loli", "Loli Anime"];
                    const query = Arr[Math.floor(Math.random() * (Arr.length))]
                    fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                        "headers": {
                            "accept": "application/json, text/javascript, */*, q=0.01",
                            "accept-language": "en-US,en;q=0.9",
                            "cache-control": "no-cache",
                            "pragma": "no-cache",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "sec-gpc": "1",
                            "x-app-version": "9a236a4",
                            "x-pinterest-appstate": "active",
                            "x-requested-with": "XMLHttpRequest"
                        },
                        "referrer": "https://www.pinterest.com/",
                        "referrerPolicy": "origin",
                        "body": null,
                        "method": "GET",
                        "mode": "cors"
                    }).then((res) => res.json())
                        .then((json) => {
                            const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                            resolve({
                                status: 200,
                                link: generatepin.images.orig.url
                            })
                        })
                })

        neko()
         .then(async (data) => {
         	var hasil = await getBuffer(`${data.link}`)
       await fs.writeFileSync(__path + '/tmp/neko.png', hasil)

         res.sendFile(__path + '/tmp/neko.png')
    })
} else {
res.sendFile(invalidKey)
}
})

router.get('/anime/neko', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
      	
     const neko = () => new Promise((resolve, reject) => {
                    const Arr = ["nekonime", "neko anime", "anime neko"];
                    const query = Arr[Math.floor(Math.random() * (Arr.length))]
                    fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                        "headers": {
                            "accept": "application/json, text/javascript, */*, q=0.01",
                            "accept-language": "en-US,en;q=0.9",
                            "cache-control": "no-cache",
                            "pragma": "no-cache",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "sec-gpc": "1",
                            "x-app-version": "9a236a4",
                            "x-pinterest-appstate": "active",
                            "x-requested-with": "XMLHttpRequest"
                        },
                        "referrer": "https://www.pinterest.com/",
                        "referrerPolicy": "origin",
                        "body": null,
                        "method": "GET",
                        "mode": "cors"
                    }).then((res) => res.json())
                        .then((json) => {
                            const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                            resolve({
                                status: 200,
                                link: generatepin.images.orig.url
                            })
                        })
                })

        neko()
         .then(async (data) => {
         	var hasil = await getBuffer(`${data.link}`)
       await fs.writeFileSync(__path + '/tmp/neko.png', hasil)

         res.sendFile(__path + '/tmp/neko.png')
    })
} else {
res.sendFile(invalidKey)
}
})

router.get('/anime/waifu', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
      	
     const neko = () => new Promise((resolve, reject) => {
                    const Arr = ["waifu anime", "waifu", "waifu cecan"];
                    const query = Arr[Math.floor(Math.random() * (Arr.length))]
                    fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                        "headers": {
                            "accept": "application/json, text/javascript, */*, q=0.01",
                            "accept-language": "en-US,en;q=0.9",
                            "cache-control": "no-cache",
                            "pragma": "no-cache",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "sec-gpc": "1",
                            "x-app-version": "9a236a4",
                            "x-pinterest-appstate": "active",
                            "x-requested-with": "XMLHttpRequest"
                        },
                        "referrer": "https://www.pinterest.com/",
                        "referrerPolicy": "origin",
                        "body": null,
                        "method": "GET",
                        "mode": "cors"
                    }).then((res) => res.json())
                        .then((json) => {
                            const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                            resolve({
                                status: 200,
                                link: generatepin.images.orig.url
                            })
                        })
                })

        neko()
         .then(async (data) => {
         	var hasil = await getBuffer(`${data.link}`)
       await fs.writeFileSync(__path + '/tmp/neko.png', hasil)

         res.sendFile(__path + '/tmp/neko.png')
    })
} else {
res.sendFile(invalidKey)
}
})

router.get('/anime/megumin', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
      	
     const neko = () => new Promise((resolve, reject) => {
                    const Arr = ["megumin", "megumin anime", "anime megumin"];
                    const query = Arr[Math.floor(Math.random() * (Arr.length))]
                    fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                        "headers": {
                            "accept": "application/json, text/javascript, */*, q=0.01",
                            "accept-language": "en-US,en;q=0.9",
                            "cache-control": "no-cache",
                            "pragma": "no-cache",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "sec-gpc": "1",
                            "x-app-version": "9a236a4",
                            "x-pinterest-appstate": "active",
                            "x-requested-with": "XMLHttpRequest"
                        },
                        "referrer": "https://www.pinterest.com/",
                        "referrerPolicy": "origin",
                        "body": null,
                        "method": "GET",
                        "mode": "cors"
                    }).then((res) => res.json())
                        .then((json) => {
                            const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                            resolve({
                                status: 200,
                                link: generatepin.images.orig.url
                            })
                        })
                })

        neko()
         .then(async (data) => {
         	var hasil = await getBuffer(`${data.link}`)
       await fs.writeFileSync(__path + '/tmp/neko.png', hasil)

         res.sendFile(__path + '/tmp/neko.png')
    })
} else {
res.sendFile(invalidKey)
}
})

router.get('/anime/planetanime', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){      
       	
       	function anime(query) {
	return new Promise((resolve, reject) => {
		axios.get(`https://www.anime-planet.com/anime/all?name=${query}`)
			.then((data) => {
				const $ = cheerio.load(data.data)
				const result = [];
				const judul = [];
				const link = [];
				const thumb = [];
				$('#siteContainer > ul.cardDeck.cardGrid > li > a > h3').each(function(a, b) {
					deta = $(b).text();
					judul.push(deta)
				})
				$('#siteContainer > ul.cardDeck.cardGrid > li > a').each(function(a, b) {
					link.push('https://www.anime-planet.com' + $(b).attr('href'))
				})
				$('#siteContainer > ul.cardDeck.cardGrid > li > a > div.crop > img').each(function(a, b) {
					thumb.push('https://www.anime-planet.com' + $(b).attr('src'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
						judul: judul[i],
						thumb: thumb[i],
						link: link[i]
					})
				}
				resolve(result)
			})
			.catch(reject)
	})
}

      anime(query)
      .then((result) => {
     res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
             })
          })
    } else {
res.sendFile(invalidKey)
}
})

// SEARCH FEATURES
router.get('/search/palingmurah', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){
       

         async function palingmurah(produk) {
	if (!produk) {
		return new TypeError("No Querry Input! Bakaaa >\/\/<")
	}
	try {
		const res = await axios.get(`https://palingmurah.net/pencarian-produk/?term=` + produk)
		const hasil = []
		const $ = cheerio.load(res.data)
		$('div.ui.card.wpj-card-style-2 ').each(function(a, b) {
			let url = $(b).find('a.image').attr('href')
			let img = $(b).find('img.my_image.lazyload').attr('data-src')
			let title = $(b).find('a.list-header').text().trim()
			let product_desc = $(b).find('div.description.visible-on-list').text().trim()
			let price = $(b).find('div.flex-master.card-job-price.text-right.text-vertical-center').text().trim()
			const result = {
				product: title,
				product_desc: product_desc,
				product_image: img,
				product_url: url,
				price
			}
			hasil.push(result)
		})
		return hasil
	} catch (error404) {
		return new Error("=> Error =>" + error404)
	}
}

          palingmurah(query)
        .then((result) => {
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/search/wikipedia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            q = req.query.q
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!q) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter q"})

       if(listkey.includes(apikeyInput)){
       

            function wikiPedia(query) {
  return new Promise((resolve, reject) => {
    fetch('https://id.m.wikipedia.org/w/index.php?search=' + query, {
      method: 'GET',
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
      }
    })
    .then(rsp => rsp.text())
    .then((data) => {
      const $ = cheerio.load(data)
      let thumb = $('.thumb.tright > .thumbinner > a').find('img').attr('src')
      if (thumb === undefined) thumb = '//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png'
      thumb = 'https:' + thumb
      resolve({
        title: $('.pre-content.heading-holder > .page-heading > h1').text(),
        thumb: thumb,
        result: $('.mw-parser-output > #mf-section-0 > p').text().trim()
      })
    })
    .catch(reject)
  })
}

          wikiPedia(q)
        .then((data) => {
        	 var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/search/trendtwit', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
             negara = req.query.negara
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!negara) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter negara"})

       if(listkey.includes(apikeyInput)){
       

            function trendtw(country) {
  return new Promise((resolve, reject) => {
		axios.get(`https://getdaytrends.com/${country}/`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const hastag = [];
				const tweet = [];
				const result = [];
				$('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr> td.main > a').each(function(a, b) {
					deta = $(b).text()
					hastag.push(deta)
				})
				$('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr > td.main > div > span').each(function(a, b) {
					deta = $(b).text()
					tweet.push(deta)
				})
				num = 1
				for (let i = 0; i < hastag.length; i++) {
					result.push({
						rank: num,
						hastag: hastag[i],
						tweet: tweet[i]
					})
					num += 1
				}
				resolve({
					country: country,
					result: result
				})
			})
			.catch(reject)
	})
}

          trendtw(negara)
        .then((data) => {
        	 var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 country : result.country,
                result : result.result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/search/hapymod', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
             query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){
       

            function mody(query) {
  return new Promise((resolve, reject) => {
		axios.get('https://apkmody.io/?s=' + query)
			.then(({
				data
			}) => {
				//console.log(data)
				const $ = cheerio.load(data)
				const nama = [];
				const link = [];
				const mod = [];
				const thumb = [];
				const format = [];
				$('#primary > section:nth-child(3) > div > div > div > article > a > div > div > div > h2').each(function(a, b) {
					nem = $(b).text();
					nama.push(nem)
				})
				$('#primary > section:nth-child(3) > div > div > div > article > a > div > div > p').each(function(c, d) {
					modd = $(d).text();
					mod.push(modd.split('\n')[1])
				})
				$('#primary > section:nth-child(3) > div > div > div > article > a > div > img').each(function(e, f) {
					thumb.push($(f).attr('src'))
				})
				$('#primary > section:nth-child(3) > div > div > div > article > a').each(function(g, h) {
					link.push($(h).attr('href'))
				})
				for (let i = 0; i < link.length; i++) {
					format.push({
						judul: nama[i],
						infomod: mod[i],
						thumb: thumb[i],
						link: link[i]
					})
				}
				const result = {
					data: format
				}
				resolve(result)
			})
			.catch(reject)
	})
}

          mody(query)
        .then((result) => {
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                result : result.data
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

     
router.get('/search/lirik', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){      
       	
       	function getUrl(query){
    return new Promise((resolve, reject) => {
        axios.get(`https://www.musixmatch.com/search/${query}`)
        .then(({data}) => {
            const $ = cheerio.load(data)
            const res = $('#site').find('div > div > div > div > ul > li:nth-child(1) > div > div > div')
            //resolve($('#site').find('search-results > div > div > tab-content > div > div > box box-style-plain > box-content > ul'))
            resolve(`https://www.musixmatch.com` + $(res).find('h2 > a').attr('href'))
        })
        .catch(reject)
    })
}

function getLirik(query) {
    return new Promise(async(resolve, reject) => {
        const link = await getUrl(query)
        axios.get(link)
        .then(({data}) => {
            const $ = cheerio.load(data)
            const lirik = $('#site').find('.mxm-lyrics__content > .lyrics__content__ok').text()
            const title = $('div.mxm-track-title > h1').text().replace(/Lyrics/gi, '')
            const author = $('div.mxm-track-title > h2').text()
            const thumb = 'https:'+$('div.banner-album-image-desktop > img').attr('src')
            resolve({
                    title,
                    author,
                    thumb,
                    lirik
            })
        })
        .catch(reject)
    })
}

      getLirik(query)
      .then((data) => {
      	var result = data;
     res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
             })
          })
    } else {
res.sendFile(invalidKey)
}
})

router.get('/search/kodepos', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){      
       	
       	async function searchCodePos(keywords) {
                    return new Promise((resolve, reject) => {

                        let carikodepos = "https://carikodepos.com/"
                        let url = carikodepos + "?s=" + keywords

                        axios({
                            method: "GET",
                            url: url,
                            headers: {
                                "Accept": "application/json, text/javascript, /;",
                                "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4209.3 Mobile Safari/537.36",
                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                                "Origin": carikodepos,
                                "Referer": carikodepos
                            }
                        }).then((response) => {
                            const $ = cheerio.load(response.data)
                            let search = $("tr")

                            if (search.length > 0) {
                                let results = []

                                search.each((number, element) => {
                                    if (number !== 0) {
                                        let td = $(element).find("td")
                                        let result = {}

                                        td.each((index, html) => {
                                            let value = $(html).find("a").html()
                                            let key = index === 0 ? "province" :
                                                (index === 1 ? "city" :
                                                    (index === 2 ? "subdistrict" :
                                                        (index === 3 ? "urban" : "postalcode")))

                                            result[key] = value
                                        })

                                        results.push(result)
                                    }
                                })

                                resolve({
                                    data: results
                                })
                            } else {
                                reject("No result could be found")
                            }
                        }).catch(reject)

                    })
                }
                
      searchCodePos(query)
      .then((data) => {
      	var result = data;
     res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
             })
          })
    } else {
res.sendFile(invalidKey)
}
})

router.get('/search/grupwa', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){      
       	
       	function linkwa(nama){
	return new Promise((resolve,reject) => {
		axios.get('http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search='+ nama +'&searchby=name')
		.then(({ data }) => {
			const $ = cheerio.load(data);
			const result = [];
			const lnk = [];
			const nm = [];
		$('div.wa-chat-title-container').each(function(a,b){
			const limk = $(b).find('a').attr('href');
			lnk.push(limk)
			})
		$('div.wa-chat-title-text').each(function(c,d) {
			const name = $(d).text();
			nm.push(name)
			})
		for( let i = 0; i < lnk.length; i++){
			result.push({
				nama: nm[i].split('. ')[1],
				link: lnk[i].split('?')[0]
			})
		}
		resolve(result)
		})
	.catch(reject)
	})
}

      linkwa(query)
      .then((result) => {
     res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
             })
          })
    } else {
res.sendFile(invalidKey)
}
})

router.get('/search/pinterestimage', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	            query = req.query.query
	
  if(!apikeyInput) return res.json(loghandler.notparam)
      if(!query) return res.json(loghandler.notquery)

      if(listkey.includes(apikeyInput)){
      	
     const quotes = () => new Promise((resolve, reject) => {
                    fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                        "headers": {
                            "accept": "application/json, text/javascript, */*, q=0.01",
                            "accept-language": "en-US,en;q=0.9",
                            "cache-control": "no-cache",
                            "pragma": "no-cache",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "sec-gpc": "1",
                            "x-app-version": "9a236a4",
                            "x-pinterest-appstate": "active",
                            "x-requested-with": "XMLHttpRequest"
                        },
                        "referrer": "https://www.pinterest.com/",
                        "referrerPolicy": "origin",
                        "body": null,
                        "method": "GET",
                        "mode": "cors"
                    }).then((res) => res.json())
                        .then((json) => {
                            const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                            resolve({
                                status: 200,
                                link: generatepin.images.orig.url
                            })
                        })
                })

        quotes()
         .then(async (data) => {
         	var hasil = await getBuffer(`${data.link}`)
       await fs.writeFileSync(__path + '/tmp/quotes.png', hasil)

         res.sendFile(__path + '/tmp/quotes.png')
    })
} else {
res.sendFile(invalidKey)
}
})

router.get('/search/pinterest', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){      
       	
       	function pinterest(query){
	return new Promise(async (resolve, reject) => {
		axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + query, {
			headers: {
				"cookie": "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
			}
		}).then(({
			data
		}) => {
			const $ = cheerio.load(data)
			const result = [];
			const hasil = [];
			$('div > a').get().map(b => {
				const link = $(b).find('img').attr('src')
				result.push(link)
			});
			result.forEach(v => {
				if (v == undefined) return
				hasil.push(v.replace(/236/g, '736'))
			})
			hasil.shift();
			resolve(hasil)
		})
	})
}

      pinterest(query)
      .then((result) => {
     res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
             })
          })
    } else {
res.sendFile(invalidKey)
}
})

router.get('/search/infoloker', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){      
       	
       	function loker(query){
	return new Promise((resolve, reject) => {
		axios.get(`https://www.jobstreet.co.id/id/job-search/${query}-jobs/`)
			.then((data) => {
				//console.log(data.data)
				const $ = cheerio.load(data.data)
				const job = [];
				const perusahaan = [];
				const daerah = [];
				const format = [];
				const link = [];
				const upload = [];
				$('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > div > h1 > a > div').each(function(a, b) {
					deta = $(b).text();
					job.push(deta)
				})
				$('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > div > span').each(function(a, b) {
					deta = $(b).text();
					perusahaan.push(deta)
				})
				$('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > span > span').each(function(a, b) {
					deta = $(b).text();
					daerah.push(deta)
				})
				$('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > div > h1 > a').each(function(a, b) {
					link.push($(b).attr('href'))
				})
				$('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div.sx2jih0.zcydq852.zcydq842.zcydq872.zcydq862.zcydq82a.zcydq832.zcydq8d2.zcydq8cq > div.sx2jih0.zcydq832.zcydq8cq.zcydq8c6.zcydq882 > time > span').each(function(a, b) {
					deta = $(b).text();
					upload.push(deta)
				})
				for (let i = 0; i < job.length; i++) {
					format.push({
						job: job[i],
						perusahaan: perusahaan[i],
						daerah: daerah[i],
						upload: upload[i],
						link_Detail: 'https://www.jobstreet.co.id' + link[i]
					})
				}
				resolve(format)
			})
			.catch(reject)
	})
}

      loker(query)
      .then((data) => {
      	var result = data;
     res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
             })
          })
    } else {
res.sendFile(invalidKey)
}
})

// GAME FEATURES
router.get('/game/caklontong', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	
      if(listkey.includes(apikeyInput)){
       
       var cak =
       [
    {
        "soal": "Selain mobil, bus, pesawat, orang pergi dari Jakarta ke Surabaya biasanya menggunakan?",
        "jawaban": "Celana"
    },
    {
        "soal": "Di rumah makan padang, selain pakai sendok kita makan pakai?",
        "jawaban": "Tenaga"
    },
    {
        "soal": "Biasa digunakan untuk menyalakan atau mematikan TV dan AC?",
        "jawaban": "Tolong"
    },
    {
        "soal": "Seseorang yang memimpin sebuah desa, biasanya dipanggil pak?",
        "jawaban": "Noleh"
    },
    {
        "soal": "Senikmat-nikmatnya makan diluar lebih nikmat makan di?",
        "jawaban": "Telan"
    },
    {
        "soal": "Makan duit rakyat disebut?",
        "jawaban": "Debus"
    },
    {
        "soal": "Ikan bernafas di air dengan?",
        "jawaban": "Tenang"
    },
    {
        "soal": "Binatang yang hinggap di makanan?",
        "jawaban": "Lapar"
    },
    {
        "soal": "Di dalam perpustakaan tidak boleh?",
        "jawaban": "Keramas"
    },
    {
        "soal": "Saat sukuran biasanya kita menyediakan?",
        "jawaban": "Ruangan"
    },
    {
        "soal": "Hewan laut yang jalannya miring dan bersembunyi di batu atau pasir biasanya?",
        "jawaban": "Lagi malu"
    },
    {
        "soal": "Kerbau adalah binatang yang memiliki?",
        "jawaban": "Huruf k"
    },
    {
        "soal": "Saat naik pesawat kita dilarang membawa..?",
        "jawaban": "Sendiri"
    },
    {
        "soal": "Seorang istri akan merasa terkejut bila di hari ulang tahun dibelikan?",
        "jawaban": "Beruang"
    },
    {
        "soal": "Seorang barber mencukur rambut pelanggan dengan?",
        "jawaban": "Gantian"
    },
    {
        "soal": "Buah yang dipotong-potong, diuleg campur gula jawa dan cabai, jadinya?",
        "jawaban": "Rusak"
    },
    {
        "soal": "Lorenzo, Marquez, rossi kejar-kejaran, salip menyalip di?",
        "jawaban": "Biarkan"
    },
    {
        "soal": "Mie ramen adalah makanan khas yang berasal dari?",
        "jawaban": "Mentah"
    },
    {
        "soal": "Hewan yang sehari-harinya memakan daging, dan hidup di rawa-rawa, namanya?",
        "jawaban": "Butuh"
    },
    {
        "soal": "Nasi yang enak buat sarapan, biasanya nasi?",
        "jawaban": "Matang"
    },
    {
        "soal": "Permen apa yang bagian gulanya ada di luar, tapi bungkusnya justru di dalam?",
        "jawaban": "Permen salah bikin"
    },
    {
        "soal": "Apa yang bulat, kecil, kadang hitam, kadang putih, terus kalau dipencet bisa keluar orangnya?",
        "jawaban": "Bel rumah"
    },
    {
        "soal": "Pintu apa yang didorong lima orang tetap tidak mau terbuka?",
        "jawaban": "Pintu yang tulisannya TARIK"
    },
    {
        "soal": "Jauh di mata, tapi dekat di hati, apakah itu?",
        "jawaban": "Usus"
    },
    {
        "soal": "Gajah naik motor keliatan apanya?",
        "jawaban": "Bohongnya"
    },
    {
        "soal": "Cermin jika di lap jadi…?",
        "jawaban": "Cermin"
    },
    {
        "soal": "Pedagang kaki lima bubar karena ada…?",
        "jawaban": "Macan"
    },
    {
        "soal": "Buah buah apa yang tua?",
        "jawaban": "Singkong"
    },
    {
        "soal": "Salah satu contoh hewan yang jalannya lambat?",
        "jawaban": "Serigala",
        "deskripsi": "Serigala kalau lagi jalan ya pelan-pelan, kalau lari baru cepet"
    },
    {
        "soal": "Lawannya gemuk?",
        "jawaban": "Takut",
        "deskripsi": "lah, takut kalau lawannya gemuk"
    },
    {
        "soal": "Koran disebut surat ?",
        "jawaban": "Salah",
        "deskripsi": "Masa koran disebut surat, salah dong"
    },
    {
        "soal": "Sebelum jadi katak, anak katak disebut ?",
        "jawaban": "Remaja",
        "deskripsi": "Nah proses sebelum menjadi katak dewasa, anak katak harus melalui masa-masa remaja dulu kan..."
    },
    {
        "soal": "Hewan berkaki delapan, yang bergelantungan ke sana kemari dengan jaring, namanya?",
        "jawaban": "Olahraga"
    },
    {
        "soal": "Burung bisa terbang karena memiliki?",
        "jawaban": "Bakat"
    },
    {
        "soal": "Kita tidak bisa menelepon, kalau handphonenya ngga ada?",
        "jawaban": "Angka"
    },
    {
        "soal": "Yang dibeli seorang cowok untuk pasangannya di saat Valentine biasanya?",
        "jawaban": "Bayar"
    },
    {
        "soal": "Saat ke Jakarta naik kereta, selain Stasiun Jatinegara, Stasiun Juanda, dan Pasar Senen, kita bisa turun di?",
        "jawaban": "Lantai"
    },
    {
        "soal": "Seorang pejabat akan terkena masalah kalau tersangkut?",
        "jawaban": "Jemuran"
    },
    {
        "soal": "Hewan yang sering digunakan petani untuk membajak sawah?",
        "jawaban": "Pasrah"
    },
    {
        "soal": "Neil Amstrong adalah astronot yang pernah menginjakkan kakinya di?",
        "jawaban": "Rumah"
    },
    {
        "soal": "Cuci piring harus?",
        "jawaban": "Sadar"
    },
    {
        "soal": "Setelah lulus SMA biasanya lanjut?",
        "jawaban": "Pulang"
    },
    {
        "soal": "Kalau semut kecil, gajah...?",
        "jawaban": "hewan"
    },
    {
        "soal": "Bertamu lebih dari 2x24 jam harus?",
        "jawaban": "Makan"
    },
    {
        "soal": "Yang dilakukan atlet sebelum bertanding?",
        "jawaban": "Pamitan"
    },
    {
        "soal": "Mulutmu ………..",
        "jawaban": "Hanyasatu",
        "deskripsi": "Mulut kan emang cuma satu"
    },
    {
        "soal": "Ada udang di balik…",
        "jawaban": "Gnadu",
        "deskripsi": "Itu fakta"
    },
    {
        "soal": "Es es apa yang bisa jalan?",
        "jawaban": "Eskalator",
        "deskripsi": "Kalau ga jalan bukan es kalator tapi tangga kalator"
    },
    {
        "soal": "Hati senang walaupun tak punya...",
        "jawaban": "Kaca",
        "deskripsi": "Kaca juga gak penting penting amat"
    },
    {
        "soal": "Suami bu camat?",
        "jawaban": "Laki",
        "deskripsi": "Karena kalo gak laki lesbi, dosa…"
    },
    {
        "soal": "Yang menyebabkan haus saat romadhon?",
        "jawaban": "Cuaca",
        "deskripsi": "Kalo panas pasti bikin haus, kalau puasa laper juga yah…"
    },
    {
        "soal": "Kirimin uang lewat atm?",
        "jawaban": "Thanksya",
        "deskripsi": "Thanks ya sudah diterima"
    },
    {
        "soal": "Rizky febian lahir di...",
        "jawaban": "Gendong",
        "deskripsi": "Ya di gendong dulu lah masa langsung di mandiin"
    },
    {
        "soal": "Para pejuang melawan penjajah dengan senjata?",
        "jawaban": "Bikin sendiri",
        "deskripsi": "Klo gak bikin sendiri lah trus dibikinin siapa?"
    },
    {
        "soal": "Apa yang tidak boleh di bawa ke pesawat?",
        "jawaban": "Sendiri",
        "deskripsi": "Karena kalo kita bawa sendiri nanti jatuh"
    },
    {
        "soal": "Tak kenal maka tak...",
        "jawaban": "Undang",
        "deskripsi": "Orang tidak kenal masak di undang"
    },
    {
        "soal": "Hewan yang melolong dimalam hari…",
        "jawaban": "Terinjak",
        "deskripsi": "Kasian kaki nya keinjak"
    },
    {
        "soal": "Api dipegang terasa?",
        "jawaban": "Susah",
        "deskripsi": "Api dipegang susah lah panas lagi"
    },
    {
        "soal": "Di akuarium ada ikan 10 mati 2 tinggal",
        "jawaban": "Dibuang",
        "deskripsi": "Kalo tidak dibuang, ikan yang laen jadi ikutan mati"
    },
    {
        "soal": "Tidak masuk kerja karena hari...",
        "jawaban": "DiPHK",
        "deskripsi": "Ya kan si hari kalo di phk ga usah masuk kerja lagi..."
    },
    {
        "soal": "Tinky winky...",
        "jawaban": "Tenar sekali",
        "deskripsi": "Nama nama tersebut sudah terkenal di semua kalangan"
    },
    {
        "soal": "Cicak jatuh ke…",
        "jawaban": "Bacok",
        "deskripsi": "Di bacok mah jatuh"
    },
    {
        "soal": "Dalam permainan bulutangkis",
        "jawaban": "Iya",
        "deskripsi": "Coba nonton bulutangkis pasti nama indonesia disingkat"
    },
    {
        "soal": "Ada guling ada…",
        "jawaban": "Benang",
        "deskripsi": "Kalo ga ada benang jahitnya pake apa?"
    },
    {
        "soal": "Andi basah kuyup karena?",
        "jawaban": "Husen",
        "deskripsi": "Karena diceburin si husen ke kolam, nakal banget yah…"
    },
    {
        "soal": "Matahari terbenam hari mulai",
        "jawaban": "Pulang",
        "deskripsi": "Udah malam kalo gak pulang, hari dicariin ibunya"
    },
    {
        "soal": "Hewan pemakan segala?",
        "jawaban": "Rakus",
        "deskripsi": "Semuanya dimakan"
    },
    {
        "soal": "Burung terbang menggunakan..",
        "jawaban": "Semangat",
        "deskripsi": "Kalau tidak semangat pasti lemes tuh.."
    },
    {
        "soal": "Beli lampu biasanya di...",
        "jawaban": "Coba",
        "deskripsi": "Anda kalau beli lampu pasti dicoba dulu"
    },
    {
        "soal": "Jangan berteman dengan orang...",
        "jawaban": "Hilang",
        "deskripsi": "Gimana caranya?"
    },
    {
        "soal": "Alpukat",
        "jawaban": "Bisa",
        "deskripsi": "Memang bisa disebut"
    },
    {
        "soal": "Bekas pacar disebut...",
        "jawaban": "Jangan",
        "deskripsi": "Nanti pacar yang sekarang marah"
    },
    {
        "soal": "Orang sakit minum?",
        "jawaban": "Oiya",
        "deskripsi": "Sakit minum yang banyak yah, biar cepet sembuh"
    },
    {
        "soal": "Pelat nomer kendaraan A berasal dari?",
        "jawaban": "Samsat",
        "deskripsi": "Karena samsat merupakan institusi yg berhak mengeluarkan plat kendaraan bermotor"
    },
    {
        "soal": "Hujan deres bikin …",
        "jawaban": "Basah",
        "deskripsi": "Kalau panas pasti kering"
    },
    {
        "soal": "Makan dianjurkan pakai tangan…",
        "jawaban": "Benar",
        "deskripsi": "Kanan atau kiri boleh kok, kanan lebih bagus sih katanya"
    },
    {
        "soal": "Pesawat mendarat di…",
        "jawaban": "Bantuin",
        "deskripsi": "Pilot, co-pilot, operator bandara, dan lain-lain.."
    },
    {
        "soal": "Di rumah ada adik",
        "jawaban": "Masak",
        "deskripsi": "Hmm kira kira lagi masak apa yah…"
    },
    {
        "soal": "Kakak mengantar adik sekolah sampai",
        "jawaban": "Capek",
        "deskripsi": "Nganter nya di gendong"
    },
    {
        "soal": "Galang menyimpan buku di…",
        "jawaban": "Mas",
        "deskripsi": "Bukunya dimas dipinjam galang kemarin sore"
    },
    {
        "soal": "Matahari tenggelam di sebelah…",
        "jawaban": "Gawat",
        "deskripsi": "Gawat kalau matahari tenggelam di sebelah kita"
    },
    {
        "soal": "Apabila mengendarai mobil wajib bawa",
        "jawaban": "Satu",
        "deskripsi": "Kalo bawa 2 gimana mengendarainya"
    },
    {
        "soal": "Mawar melati semuanya…",
        "jawaban": "Bunga",
        "deskripsi": "Kalo bukan bunga apa coba, hewan?"
    },
    {
        "soal": "Jangan membuang tisu di…",
        "jawaban": "Tempatnya",
        "deskripsi": "Masih di tempatnya kok di buang"
    },
    {
        "soal": "Ketika _____ orang biasanya makan",
        "jawaban": "Marah",
        "deskripsi": "Orang marah apa enggak ya pasti makan"
    },
    {
        "soal": "Burung adalah hewan yang bisa..",
        "jawaban": "Temenan",
        "deskripsi": "Kan kalo terbang rame-rame kan sama temennya.."
    },
    {
        "soal": "Hewan yang suka buka mulut lebar",
        "jawaban": "Kenaflu",
        "deskripsi": "Itu karena ga bisa napas idungnya mampet.."
    },
    {
        "soal": "Hewan yang berubah warna kalau ada musuhnya?",
        "jawaban": "Bengong",
        "deskripsi": "Karena, musuhnya bengong lihat hewan berubah warna"
    },
    {
        "soal": "Artis wanita yang punya kumis tipis",
        "jawaban": "Ihkumisan",
        "deskripsi": "Ih kok kumisan sih.."
    },
    {
        "soal": "Pintu biasa di….",
        "jawaban": "Tekan",
        "deskripsi": "Kalau anda biasa ke atm kan pin ditekan"
    },
    {
        "soal": "Lebak bulus",
        "jawaban": "Terkenal",
        "deskripsi": " Karena lebak bulus,cililitan semua orang tau maka nya terkenal"
    },
    {
        "soal": "Seorang matador bisa terluka karena diseruduk..",
        "jawaban": "Biskota",
        "deskripsi": "Mau banteng, mau bis kota, tetep aja bisa terluka.."
    },
    {
        "soal": "Cermin jika di lap jadi…",
        "jawaban": "Cermin",
        "deskripsi": "Ya masa berubah, yaal tetap cermin"
    },
    {
        "soal": "Batik merupakan produk asli dari…",
        "jawaban": "Manusia",
        "deskripsi": "Sejauh ini belum ada mahluk lain yang bisa"
    },
    {
        "soal": "Kendaraan yang suka dipake tukang ojek?",
        "jawaban": "Mogok",
        "deskripsi": "Motor emang suka mogok"
    },
    {
        "soal": "Binatang apa yang ga bisa bergerak?",
        "jawaban": "Paus",
        "deskripsi": "Kalau game di paus(e) kan berhenti main nya"
    },
    {
        "soal": "Sehabis olahraga",
        "jawaban": "Air minum",
        "deskripsi": "Abis olahraga pasti haus kan"
    },
    {
        "soal": "Di tiup angin berkibar di setiap negara",
        "jawaban": "Jemuran",
        "deskripsi": "Disetiap negara orang menjemur pakaiannya"
    },
    {
        "soal": "Kalo haus minum",
        "jawaban": "Aja",
        "deskripsi": "Minum aja ntar juga ga aus"
    },
    {
        "soal": "Hayam wuruk memerintah kerajaan?",
        "jawaban": "Jamandulu",
        "deskripsi": "Ya iyalah… masa jaman sekarang"
    },
    {
        "soal": "Jawab dengan benar. dunia ini terdiri dari lima …",
        "jawaban": "Benar",
        "deskripsi": "Kan sudah saya bilang jawab dengan benar"
    }
]

           var lontong = cak[Math.floor(Math.random() * cak.length)]
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 soal: `${lontong.soal}`,
                 jawaban: `${lontong.jawaban}`,
                 keterangan: `${lontong.deskripsi}`
             })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/game/tebakgambar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	
      if(listkey.includes(apikeyInput)){
       
       function tebakGambar() {
  return new Promise((resolve, reject) => {
    const baseUrl = 'https://jawabantebakgambar.net'
    fetch(baseUrl + '/all-answers/', {
      method: 'GET',
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
      }
    })
    .then(rsp => rsp.text())
    .then((data) => {
      const $ = cheerio.load(data)
      const result = []
      $('ul.images > li > a').each(function() {
        result.push({
          image: baseUrl + $(this).find('img').attr('data-src'),
          answer: $(this).find('span').text()
        })
      })
      const query = result[Math.floor(Math.random() * result.length)]
      resolve({
        result: random
      })
    })
    .catch(reject)
  })
}

           tebakGambar()
               .then((data) => {
               	var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result: {
                 	image: result.image,
                    jawaban: result.answer
                 }
             })
           })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/game/family100', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikeyInput) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikeyInput)){
       
           var fam = [
{
    "result": {
        "Author": "zxagung",
        "soal": "Apa yang menarik dari film india?",
        "jawaban": "Tarian\nLagu\nCerita\nPakian"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa yang membuat pelayan di tempat fotokopi lambat?",
        "jawaban": "mesin rusak / rusak\nantri\nmati lampu\nkurang orang / kekurangan karyawan\nkertas habis\nmesin sedikit"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Jenis-jenis cewek yang didemenin para cowok?",
        "jawaban": "Cantik\nSeksi\nManis\nManja"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Sampah apa yang sering ditemukan dijalan?",
        "jawaban": "Kertas\nPlastik\nDaun\nPuntun\nRokok"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa yang dilakukan orang kalau kecapean?",
        "jawaban": "tidur\nmakan\nminum\nistirahat\nspa\nmandi "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "benda apa didalam rumah yang berwarna putih?",
        "jawaban": "lantai\ntembok\nlampu\nkulkas\nplastik\ntoples\nsofa / sofa putih"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "sebutkan sesuatu yang memiliki tali?",
        "jawaban": "sepatu\npakaian dalam\ntas\ncelana\npulpen"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa penyebab pinggang menjadi terkilir?",
        "jawaban": "angkat beban berat\nolahraga\njatuh\nsalah duduk "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "bagian/part dari komputer umum?",
        "jawaban": "ram\ncpu\nmouse\nkeyboard\nmonitor\nprinter\nscanner"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "suara yang ditakuti anak2?",
        "jawaban": "anjing\nhantu\npetir\nharimau"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Perasaan apa yang ada bila mau kencan pertama?",
        "jawaban": "\nSenang\nGrogi\nGembira\nDag dig dug"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "selain kacang hijau, sebutkan ragam isi bakpau ?",
        "jawaban": "kacang hitam\ncoklat / cokelat\ndaging\nkentang "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "sebutkan sesuatu yang sekali pakai langsung buang?",
        "jawaban": "pembalut\ntisu\npopok bayi / popok\nkorek api / korek\nteh celup\nkondom"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa yang biasa dijadikan kado ulang tahun anak kecil?",
        "jawaban": "boneka\nsepeda\nkue\nbaju\ncelana\nmainan "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "sebutkan sesuatu yang kamu beli dari uang jajan sendiri?",
        "jawaban": "makanan\nmainan\nminuman\nalat tulis "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "bagian/part dari komputer umum?",
        "jawaban": "ram\ncpu\nmouse\nkeyboard\nmonitor\nprinter\nscanner"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "alasan apa yang orang katakan untuk menyudahi pembicaran di telepon?",
        "jawaban": "baterai habis\nmau ke toilet\npulsa habis\nsibuk\ntelepon masuk\nmau istirahat\nada tamu "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "gaya/ model berenang?",
        "jawaban": "punggung\ndada\nkupu-kupu\nkatak\nbebas "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Bekal makan anak sekolah?",
        "jawaban": "Mie\nNasi goreng\nRoti\nNasi uduk"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "sebutkan warna-warna bunga mawar?",
        "jawaban": "merah\nputih\nkuning\njingga\norange\nmaroon\nmerah muda\nungu "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa yang tidak perlu dimiliki orang yang botak?",
        "jawaban": "sisir\nsampo / shampo\ngel / minyak rambut\npengering rambut "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "hal yang menakutkan bagi anak-anak?",
        "jawaban": "petir\nhantu\ngelap\norang marah / marah\nmimpi buruk / mimpi\npolisi"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Apa yang menyebabkan suara serak?",
        "jawaban": "Teriak\nBatuk\nNangis\nNgedem"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa reaksi kamu jika mainan kamu tiba-tiba hidup?",
        "jawaban": "main bersama\ntakut\nsenang\nkaget\nbuang\nkasih tahu teman"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa penyebab pinggang menjadi terkilir?",
        "jawaban": "angkat beban berat\nolahraga\njatuh\nsalah duduk "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa yg biasanya sering lupa dibawa ?",
        "jawaban": "uang\ndompet\nhandphone\nkunci\nkacamata\nrokok\nstnk\nkorek"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "hal yang menakutkan bagi anak-anak?",
        "jawaban": "petir\nhantu\ngelap\norang marah / marah\nmimpi buruk / mimpi\npolisi"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Jenis-jenis cewek yang didemenin para cowok?",
        "jawaban": "Cantik\nSeksi\nManis\nManja"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Sifat yang dimiliki anak-anak",
        "jawaban": "Manja\nCengeng\nNakal\nPemalu"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Apa yang dilakukan jika tersesat dihutan",
        "jawaban": "Menangis\nTeriak\nBerdoa\nDileme"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "kota di usa?",
        "jawaban": "new york\nlos angeles\norlando\nlas vegas\ntexas\nseattle\nboston "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa yang identik dengan bajaj?",
        "jawaban": "berisik / ribut\nroda tiga\noranye\nasap / polusi\nbergetar / getar\njakarta"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "ditoko apa orang lebih sering  melihat-lihat daripada membeli?",
        "jawaban": "baju\nperhiasan / emas\nkendaraan\nbuku\nsepatu\nelektronik "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "hewan tak berkaki?",
        "jawaban": "ular\ncacing\nbelut\nlintah\nsiput "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Sifat yang dimiliki anak-anak",
        "jawaban": "Manja\nCengeng\nNakal\nPemalu"
    }
}
]

           var imly = fam[Math.floor(Math.random() * fam.length)]
             res.json({
             	 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 soal : `${imly.result.soal}`,
                jawaban: `${imly.result.jawaban}`
             })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/game/tebaklirik', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikeyInput) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikeyInput)){
    
     var tebak =
       [
    {
        "soal": "Kupetik bintang, untuk kau simpan, Cahayanya tenang, berikan kau perlindungan, sebagai pengingat teman, juga sebagai ______ semua tantangan",
        "jawaban": "Jawaban"
    },
    {
        "soal": "Berada di pelukanmu mengajarkanku apa artinya______ kesempurnaan cinta",
        "jawaban": "Kenyamanan"
    },
    {
        "soal": "Cinta itu ruang dan waktu, tak sekejap harus mau. Cinta butuh ruang yang sepi, tuk______ hati",
        "jawaban": "Mengutarakan"
    },
    {
        "soal": "Tak bisa tuk teruskan, Dunia kita_____, Bila memang ini ujungnya",
        "jawaban": "Berbeda"
    },
    {
        "soal": "Aku lah yang tetap memelukmu erat, saat kau berfikir______ berpaling",
        "jawaban": "Mungkinkah"
    },
    {
        "soal": "Kau harus bisa berlapang dada. Kau harus bisa ambil______",
        "jawaban": "Hikmahnya"
    },
    {
        "soal": "Untuk apa? Untuk apa cinta tanpa_____, untuk apa cinta tanpa perbuatan. Tak ada artinya",
        "jawaban": "Kejujuran"
    },
    {
        "soal": "Ku bisa hadapi_____ terluka, yang pernah kurasa di waktu dulu",
        "jawaban": "Perihnya"
    },
    {
        "soal": "Ada yang lain, di senyummu, yang_____ lidahku gugup tak bergerak",
        "jawaban": "Membuat"
    },
    {
        "soal": "Aku sayang padamu, aku cinta padamu, semua kan ku_____ demi kebahagiaanmu",
        "jawaban": "Lakukan"
    },
    {
        "soal": "Bila rindu ini, masih milkmu, ______ sebuah tanya untukmu, harus berapa lama aku menunggumu",
        "jawaban": "Kuhadirkan"
    },
    {
        "soal": "Ada ruang hatiku kini kau sentuh, aku bukan jatuh _____ namun aku jatuh hati",
        "jawaban": "Kau adalah yang terindah, yang membuat hatiku tenang, mencintai kamu takkan pernah takut, sebab kau _____ segala kurangku"
    },
    {
        "soal": "Ku cinta kau, ku cinta kau, hanya kamu di hatiku, takkan pernah kan ______, sampai kau jadi milikku",
        "jawaban": "Terganti"
    },
    {
        "soal": "Ku suka dirinya, mungkin aku sayang, namun _____ mungkin, kau menjadi milikku",
        "jawaban": "Apakah"
    },
    {
        "soal": "Dia dia dia cinta yang kutunggu tunggu tunggu, dia dia dia _____ hidupku",
        "jawaban": "Lengkapi"
    },
    {
        "soal": "Dengar laraku, suara hati ini _____ namamu, karna separuh aku, dirimu",
        "jawaban": "Memanggil"
    },
    {
        "soal": "Ayo putra bangsa, harumkan negeri ini, ____ kita bangga, Indonesia",
        "jawaban": "Jadikan"
    },
    {
        "soal": "Cinta jangan pernah kau coba _____ karna disini ku butuh kamu",
        "jawaban": "Pergi"
    },
    {
        "soal": "Untuk apa? Untuk apa cinta tanpa_____, untuk apa cinta tanpa perbuatan",
        "jawaban": "Kejujuran"
    },
    {
        "soal": "Bila memang harus berpisah, aku akan tetap ceria, bila memang ini______, kau kan tetap ada dalam jiwa",
        "jawaban": "Ujungnya"
    },
    {
        "soal": "Kau tau sejak pertama bertemu, terbayang _____ indah di matamu, kau berikan tatapan cinta untukku",
        "jawaban": "Senyum"
    },
    {
        "soal": "Kau dan aku tercipta oleh waktu, hanya untuk saling mencintai, mungkin di_____ bersama, rajut kasih jalin cinta",
        "jawaban": "Takdirkan"
    },
    {
        "soal": "Apa yang salah dengan lagu ini, kenapa _____ ku mengingatmu, seperti aku bisa merasakan getaran jantung dan langkah kakimu",
        "jawaban": "Kembali"
    },
    {
        "soal": "Akulah serpihan kisah masa lalumu, yang ____ ingin tau keadaanmu",
        "jawaban": "Sekedar"
    },
    {
        "soal": "Mungkin suatu saat nanti, kau _____ bahagia meski tak bersamaku",
        "jawaban": "Temukan"
    },
    {
        "soal": "Kau yang kuinginkan, meski tak ku____, kau yang kubayangkan, yang slalu kuimpikan",
        "jawaban": "Ungkapkan"
    },
    {
        "soal": "Terlalu manis untuk dilupakan, kenangan yang indah _____ tinggalah mimpi",
        "jawaban": "Bersamamu"
    },
    {
        "soal": "Mana mungkin selimut tetangga, hangati _____ dalam kedinginan, malam-malam panjang, setiap tidurku selalu kesepian",
        "jawaban": "Tubuhku"
    },
    {
        "soal": "Dan terjadi lagi, kisah lama yang _____ kembali, kau terluka lagi, dari cinta yang rumit kau jalani",
        "jawaban": "Terulang"
    },
    {
        "soal": "Garuda di dadaku, garuda kebanggaanku, ku yakin hari ini pasti menang, kobarkan ______, tunjukkan keinginanmu, ku yakin hari ini pasti menang",
        "jawaban": "Semangatmu"
    },
    {
        "soal": "Sampai saat ini, rasaku ______ di sini, rasa yang tak akan hilang oleh waktu",
        "jawaban": "Bertahan"
    },
    {
        "soal": "Aku tak bisa _____, bila kau tak ada di sini, aku tak habis pikirkan, bila kau tak lagi temani aku",
        "jawaban": "Bayangkan"
    },
    {
        "soal": "Ada pelangi, di bola matamu, dan _____ diri tuk bilang aku sayang padamu",
        "jawaban": "Memaksa"
    },
    {
        "soal": "Setidaknya diriku pernah berjuang, meski tak pernah ternilai di matamu, setidaknya ku pernah menanti, _____ melawan sepi hatiku",
        "jawaban": "Terkapar"
    },
    {
        "soal": "Bawalah aku ke dalam, ke dalam hangat dirimu, bawalah aku _____ menari dalam pelukanmu",
        "jawaban": "Kesana"
    },
    {
        "soal": "Mengapa kau pergi, mengapa kau pergi, di saat aku mulai mencintaimu, berharap engkau jadi ____ hatiku, malah kau pergi jauh dari hidupku",
        "jawaban": "Kekasih"
    },
    {
        "soal": "Sepenuhnya akuuu, ingin memelukmuuu, _____ penuh harapan, tuk mencintaimu",
        "jawaban": "Mendekap"
    },
    {
        "soal": "Bila tak selamanya kita bisa bersama, haruskah _____ di sini, dan bila selamanya kita bisa bersama, kusimpan cinta ini",
        "jawaban": "Menunggumu"
    }
]

           var lirik = tebak[Math.floor(Math.random() * tebak.length)]
             res.json({
             	 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 soal: `${lirik.soal}`,
                 jawaban: `${lirik.jawaban}`
             })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/game/susunkata', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)

       if(listkey.includes(apikeyInput)){
       	
       var url = 
       
       [
    {
        "pertanyaan": "Profesi : O-D-T-R-E-K",
        "jawaban": "DOKTER"
    },
    {
        "pertanyaan": "Kendaraan : L-I-M-B-O",
        "jawaban": "MOBIL"
    },
    {
        "pertanyaan": "Profesi : A-K-H-I-M",
        "jawaban": "HAKIM"
    },
    {
        "pertanyaan": "Benda : T-R-A-G-I",
        "jawaban": "GITAR"
    },
    {
        "pertanyaan": "Benda : A-P-S-U-I",
        "jawaban": "PISAU"
    },
    {
        "pertanyaan": "Benda : A-P-I-P",
        "jawaban": "PIPA"
    },
    {
        "pertanyaan": "Hewan : M-A-Y-A",
        "jawaban": "AYAM"
    },
    {
        "pertanyaan": "Tubuh : A-K-P-L-E-A",
        "jawaban": "KEPALA"
    },
    {
        "pertanyaan": "Benda : E-O-N-K-A-R-Y",
        "jawaban": "KERAYON"
    },
    {
        "pertanyaan": "Benda : G-U-N-A",
        "jawaban": "UANG"
    },
    {
        "pertanyaan": "Hewan : D-A-K-U",
        "jawaban": "KUDA"
    },
    {
        "pertanyaan": "Makanan : A-T-D-O-N",
        "jawaban": "DONAT"
    },
    {
        "pertanyaan": "Benda : E-P-I-C",
        "jawaban": "PECI"
    },
    {
        "pertanyaan": "Kota : G-N-U-L-A-M-P",
        "jawaban": "LAMPUNG"
    },
    {
        "pertanyaan": "Benda : S-A-M-U-K",
        "jawaban": "KAMUS"
    },
    {
        "pertanyaan": "Benda : B-A-R-D-E-E-N",
        "jawaban": "BENDERA"
    },
    {
        "pertanyaan": "Benda : A-N-I-P-O",
        "jawaban": "PIANO"
    },
    {
        "pertanyaan": "Buah : A-B-R-A-N-T-U-M",
        "jawaban": "RAMBUTAN"
    },
    {
        "pertanyaan": "Hewan : A-N-G-E-R-U-B",
        "jawaban": "BERUANG"
    },
    {
        "pertanyaan": "Benda : J-A-M-E",
        "jawaban": "MEJA"
    },
    {
        "pertanyaan": "Hewan : B-U-R-N-G-U",
        "jawaban": "BURUNG"
    },
    {
        "pertanyaan": "Hewan : B-E-N-G-N-A-T",
        "jawaban": "BANTENG"
    },
    {
        "pertanyaan": "Buah : A-N-S-A-N",
        "jawaban": "NANAS"
    },
    {
        "pertanyaan": "Buah : A-I-R-D-U-N",
        "jawaban": "DURIAN"
    },
    {
        "pertanyaan": "Hewan : K-A-I-N",
        "jawaban": "IKAN"
    },
    {
        "pertanyaan": "Benda : I-N-P-U-T",
        "jawaban": "PINTU"
    },
    {
        "pertanyaan": "Hewan : A-N-U-M-K-Y",
        "jawaban": "NYAMUK"
    },
    {
        "pertanyaan": "Benda : A-D-L-A-N-S",
        "jawaban": "SANDAL"
    },
    {
        "pertanyaan": "Hewan : A-K-E-B-U-R",
        "jawaban": "KERBAU"
    },
    {
        "pertanyaan": "Benda : S-T-R-E-A-K",
        "jawaban": "KERTAS"
    },
    {
        "pertanyaan": "Benda : G-E-N-P-O-T",
        "jawaban": "TOPENG"
    },
    {
        "pertanyaan": "Benda : A-S-B-U-N",
        "jawaban": "SABUN"
    },
    {
        "pertanyaan": "Hewan : A-U-N-T",
        "jawaban": "UNTA"
    },
    {
        "pertanyaan": "Benda : I-L-N-I-L",
        "jawaban": "LILIN"
    },
    {
        "pertanyaan": "Benda : M-A-J",
        "jawaban": "JAM"
    },
    {
        "pertanyaan": "Benda : A-K-U-P",
        "jawaban": "PAKU"
    },
    {
        "pertanyaan": "Buah : A-P-I-N-G-S",
        "jawaban": "PISANG"
    },
    {
        "pertanyaan": "Benda : A-T-S",
        "jawaban": "TAS"
    },
    {
        "pertanyaan": "Benda : I-R-K-U-S",
        "jawaban": "KURSI"
    },
    {
        "pertanyaan": "Hewan : I-P-S-A",
        "jawaban": "SAPI"
    },
    {
        "pertanyaan": "Hewan : B-A-N-G-K-I-M",
        "jawaban": "KAMBING"
    },
    {
        "pertanyaan": "Hewan : R-A-U-L",
        "jawaban": "ULAR"
    },
    {
        "pertanyaan": "Benda : A-L-B-T-A-N",
        "jawaban": "BANTAL"
    },
    {
        "pertanyaan": "Benda : E-L-M-I-R-A",
        "jawaban": "LEMARI"
    },
    {
        "pertanyaan": "Benda : S-U-I-T",
        "jawaban": "TISU"
    },
    {
        "pertanyaan": "Benda :G-I-N-R-I-P",
        "jawaban": "PIRING"
    },
    {
        "pertanyaan": "Tempat : A-L-B-I",
        "jawaban": "BALI"
    },
    {
        "pertanyaan": "Benda : S-P-I-N-E-L",
        "jawaban": "PENSIL"
    },
    {
        "pertanyaan": "Benda : T-U-B-A",
        "jawaban": "BATU"
    },
    {
        "pertanyaan": "Benda : A-T-A-B",
        "jawaban": "BATA"
    },
    {
        "pertanyaan": "Benda : A-P-U-S",
        "jawaban": "SAPU"
    },
    {
        "pertanyaan": "Kota : B-R-O-G-O",
        "jawaban": "BOGOR"
    },
    {
        "pertanyaan": "Benda : A-N-I-S-U-L-K",
        "jawaban": "LUKISAN"
    },
    {
        "pertanyaan": "Benda : K-U-S-A-L-K",
        "jawaban": "KULKAS"
    },
    {
        "pertanyaan": "Hewan : A-K-D-A-B",
        "jawaban": "BADAK"
    },
    {
        "pertanyaan": "Hewan : A-H-J-A-G",
        "jawaban": "GAJAH"
    },
    {
        "pertanyaan": "Benda : A-N-Y-P-U-G",
        "jawaban": "PAYUNG"
    },
    {
        "pertanyaan": "Benda : A-D-H-U-N-K",
        "jawaban": "HANDUK"
    },
    {
        "pertanyaan": "Buah : A-S-M-A-N-G-E",
        "jawaban": "SEMANGKA"
    },
    {
        "pertanyaan": "Benda : A-S-E-T-U-P",
        "jawaban": "SEPATU"
    },
    {
        "pertanyaan": "Benda : G-U-R-A-P",
        "jawaban": "GARPU"
    },
    {
        "pertanyaan": "Hewan : C-U-K-I-N-G",
        "jawaban": "KUCING"
    },
    {
        "pertanyaan": "Hewan : B-A-M-O-D",
        "jawaban": "DOMBA"
    },
    {
        "pertanyaan": "Tempat : T-H-O-L-E",
        "jawaban": "HOTEL"
    },
    {
        "pertanyaan": "Hewan : H-E-A-P-J-A-R",
        "jawaban": "JERAPAH"
    },
    {
        "pertanyaan": "Tempat : L-A-T-H-E",
        "jawaban": "HALTE"
    },
    {
        "pertanyaan": "Benda : E-R-I-C-M-N",
        "jawaban": "CERMIN"
    },
    {
        "pertanyaan": "Benda : M-O-P-E-T-U-R-K",
        "jawaban": "KOMPUTER"
    },
    {
        "pertanyaan": "Benda : M-E-T-R-O-S",
        "jawaban": "TERMOS"
    },
    {
        "pertanyaan": "Benda : A-C-L-E-A-N",
        "jawaban": "CELANA"
    },
    {
        "pertanyaan": "Benda : A-I-R-I-T",
        "jawaban": "TIRAI"
    },
    {
        "pertanyaan": "Tempat : A-N-D-R-A-B-A",
        "jawaban": "BANDARA"
    },
    {
        "pertanyaan": "Organ : S-U-U-S",
        "jawaban": "USUS"
    },
    {
        "pertanyaan": "Hewan : A-K-A-D-B",
        "jawaban": "BADAK"
    },
    {
        "pertanyaan": "Buah : E-M-N-O-L",
        "jawaban": "LEMON"
    },
    {
        "pertanyaan": "Tempat : D-A-N-N-A-K-G",
        "jawaban": "KANDANG"
    },
    {
        "pertanyaan": "Buah : A-P-S-I-N-G",
        "jawaban": "PISANG"
    },
    {
        "pertanyaan": "Benda : L-I-S-E-T-T-A",
        "jawaban": "SATELIT"
    },
    {
        "pertanyaan": "Kendaraan : A-K-E-B-C",
        "jawaban": "BECAK"
    },
    {
        "pertanyaan": "Hewan : A-N-A-B-U-G",
        "jawaban": "BANGAU"
    },
    {
        "pertanyaan": "Tumbuhan : A-N-B-U-G",
        "jawaban": "BUNGA"
    },
    {
        "pertanyaan": "Benda : I-P-T-U-N",
        "jawaban": "PINTU"
    },
    {
        "pertanyaan": "Minuman : I-P-K-O",
        "jawaban": "KOPI"
    },
    {
        "pertanyaan": "Hewan : A-K-R-U-B-E",
        "jawaban": "KERBAU"
    },
    {
        "pertanyaan": "Bagian Tubuh : D-I-N-G-U-H",
        "jawaban": "HIDUNG"
    },
    {
        "pertanyaan": "Pekerjaan : L-I-P-T-O",
        "jawaban": "PILOT"
    },
    {
        "pertanyaan": "Benda : A-C-L-E-A-N",
        "jawaban": "CELANA"
    },
    {
        "pertanyaan": "Benda : H-A-N-A-L-A-M",
        "jawaban": "HALAMAN"
    },
    {
        "pertanyaan": "Tumbuhan : G-A-B-W-A-N",
        "jawaban": "BAWANG"
    },
    {
        "pertanyaan": "Benda : U-C-T-A-R",
        "jawaban": "CATUR"
    },
    {
        "pertanyaan": "Benda : M-R-T-O-O",
        "jawaban": "MOTOR"
    },
    {
        "pertanyaan": "Tempat : L-E-A-K-S",
        "jawaban": "KELAS"
    },
    {
        "pertanyaan": "Tempat : A-K-E-H-O-L-S",
        "jawaban": "SEKOLAH"
    },
    {
        "pertanyaan": "Hewan : J-I-G-N-A-N",
        "jawaban": "ANJING"
    },
    {
        "pertanyaan": "Benda : S-A-B-E-R",
        "jawaban": "BERAS"
    },
    {
        "pertanyaan": "Hewan : M-U-T-E-S",
        "jawaban": "SEMUT"
    },
    {
        "pertanyaan": "Benda : D-A-K-U-H-N",
        "jawaban": "HANDUK"
    },
    {
        "pertanyaan": "Benda : A-L-E-N-E-D-J",
        "jawaban": "JENDELA"
    },
    {
        "pertanyaan": "Tempat : A-U-G-I-N-S",
        "jawaban": "SUNGAI"
    },
    {
        "pertanyaan": "Buah : A-K-P-E-A-L",
        "jawaban": "KELAPA"
    },
    {
        "pertanyaan": "Hewan : G-L-U-O-N-N-B",
        "jawaban": "BUNGLON"
    },
    {
        "pertanyaan": "Makanan : A-A-R-C",
        "jawaban": "ACAR"
    },
    {
        "pertanyaan": "Tempat : E-L-H-A-T",
        "jawaban": "HALTE"
    },
    {
        "pertanyaan": "Tempat : A-H-A-W-S",
        "jawaban": "SAWAH"
    },
    {
        "pertanyaan": "Tempat : D-A-R-A-B-A-N",
        "jawaban": "BANDARA"
    },
    {
        "pertanyaan": "Hewan : U-H-I",
        "jawaban": "HIU"
    },
    {
        "pertanyaan": "Sayuran : L-O-K",
        "jawaban": "KOL"
    },
    {
        "pertanyaan": "Benda : N-A-B",
        "jawaban": "BAN"
    },
    {
        "pertanyaan": "Benda : B-R-O",
        "jawaban": "BOR"
    },
    {
        "pertanyaan": "Benda : E-R-P",
        "jawaban": "PER"
    },
    {
        "pertanyaan": "Tempat : A-U-J-B",
        "jawaban": "BAJU"
    },
    {
        "pertanyaan": "Buah : P-E-A-L",
        "jawaban": "APEL"
    },
    {
        "pertanyaan": "Benda : K-U-B-U",
        "jawaban": "BUKU"
    },
    {
        "pertanyaan": "Benda : B-A-L-O",
        "jawaban": "BOLA"
    },
    {
        "pertanyaan": "Sayuran : A-C-B-E",
        "jawaban": "CABE"
    },
    {
        "pertanyaan": "Benda : Y-O-O-Y",
        "jawaban": "YOYO"
    },
    {
        "pertanyaan": "Benda : F-A-S-O",
        "jawaban": "SOFA"
    },
    {
        "pertanyaan": "Benda : I-L-T-A",
        "jawaban": "TALI"
    },
    {
        "pertanyaan": "Hewan : S-U-R-A",
        "jawaban": "RUSA"
    },
    {
        "pertanyaan": "Benda : P-A-U-L",
        "jawaban": "PALU"
    },
    {
        "pertanyaan": "Hewan : E-L-E-L",
        "jawaban": "LELE"
    },
    {
        "pertanyaan": "Benda : P-I-T-O",
        "jawaban": "TOPI"
    },
    {
        "pertanyaan": "Sayuran : A-B-U-L",
        "jawaban": "LABU"
    },
    {
        "pertanyaan": "Benda : A-Y-U-K",
        "jawaban": "KAYU"
    },
    {
        "pertanyaan": "Buah : L-I-C-E",
        "jawaban": "LECI"
    },
    {
        "pertanyaan": "Benda : L-A-J-A",
        "jawaban": "JALA"
    },
    {
        "pertanyaan": "Benda : S-A-U-K",
        "jawaban": "KUAS"
    },
    {
        "pertanyaan": "Benda : D-I-A-S",
        "jawaban": "DASI"
    },
    {
        "pertanyaan": "Hewan : L-A-U-T",
        "jawaban": "ULAT"
    },
    {
        "pertanyaan": "Benda : G-A-N-T",
        "jawaban": "TANG"
    },
    {
        "pertanyaan": "Hewan : A-P-U-S",
        "jawaban": "PAUS"
    },
    {
        "pertanyaan": "Hewan : U-U-Y-Y",
        "jawaban": "YUYU"
    },
    {
        "pertanyaan": "Sayuran : A-W-I-S",
        "jawaban": "SAWI"
    },
    {
        "pertanyaan": "Sayuran : E-T-G-O",
        "jawaban": "TOGE"
    },
    {
        "pertanyaan": "Buah : A-S-O-W",
        "jawaban": "SAWO"
    },
    {
        "pertanyaan": "Buah : R-I-C-E",
        "jawaban": "CERI"
    },
    {
        "pertanyaan": "Benda : I-K-A-L",
        "jawaban": "KAIL"
    },
    {
        "pertanyaan": "Sayuran : A-R-E-P",
        "jawaban": "PARE"
    },
    {
        "pertanyaan": "Benda : D-A-R-O",
        "jawaban": "RODA"
    },
    {
        "pertanyaan": "Benda : L-E-M-H",
        "jawaban": "HELM"
    },
    {
        "pertanyaan": "Buah : P-A-L-E",
        "jawaban": "APEL"
    },
    {
        "pertanyaan": "Benda : R-U-M-D",
        "jawaban": "DRUM"
    },
    {
        "pertanyaan": "Hewan : A-R-E-K",
        "jawaban": "KERA"
    },
    {
        "pertanyaan": "Kendaraan : K-A-N-T",
        "jawaban": "TANK"
    },
    {
        "pertanyaan": "Pekerjaan : U-R-U-G",
        "jawaban": "GURU"
    },
    {
        "pertanyaan": "Pekerjaan : K-O-I-K",
        "jawaban": "KOKI"
    },
    {
        "pertanyaan": "Benda : A-M-P-U-L",
        "jawaban": "LAMPU"
    },
    {
        "pertanyaan": "Buah : J-R-U-K-E",
        "jawaban": "JERUK"
    },
    {
        "pertanyaan": "Hewan : G-A-L-E-N",
        "jawaban": "ELANG"
    },
    {
        "pertanyaan": "Benda : B-E-R-E-M",
        "jawaban": "EMBER"
    },
    {
        "pertanyaan": "Benda : B-E-G-O-N",
        "jawaban": "OBENG"
    },
    {
        "pertanyaan": "Benda : A-A-L-I-P",
        "jawaban": "PIALA"
    },
    {
        "pertanyaan": "Benda : H-A-R-U-M",
        "jawaban": "RUMAH"
    },
    {
        "pertanyaan": "Hewan : G-A-I-N-S",
        "jawaban": "SINGA"
    },
    {
        "pertanyaan": "Hewan : K-U-S-I-T",
        "jawaban": "TIKUS"
    },
    {
        "pertanyaan": "Benda : J-A-W-N-A",
        "jawaban": "WAJAN"
    },
    {
        "pertanyaan": "Hewan : B-R-A-Z-E",
        "jawaban": "ZEBRA"
    },
    {
        "pertanyaan": "Benda : L-I-T-O-R",
        "jawaban": "TROLI"
    },
    {
        "pertanyaan": "Hewan : A-C-M-A-N",
        "jawaban": "MACAN"
    },
    {
        "pertanyaan": "Sayuran : M-I-N-U-T",
        "jawaban": "TIMUN"
    },
    {
        "pertanyaan": "Benda : B-A-N-O-L",
        "jawaban": "BALON"
    },
    {
        "pertanyaan": "Benda : P-A-N-I-C",
        "jawaban": "PANCI"
    },
    {
        "pertanyaan": "Benda : C-U-I-N-K",
        "jawaban": "KUNCI"
    },
    {
        "pertanyaan": "Hewan : A-P-A-N-D",
        "jawaban": "PANDA"
    },
    {
        "pertanyaan": "Benda : A-D-N-E-T",
        "jawaban": "TENDA"
    },
    {
        "pertanyaan": "Hewan : N-O-B-I-S",
        "jawaban": "BISON"
    },
    {
        "pertanyaan": "Buah : E-L-M-O-N",
        "jawaban": "MELON"
    },
    {
        "pertanyaan": "Hewan : A-T-R-I-P",
        "jawaban": "TAPIR"
    },
    {
        "pertanyaan": "Benda : S-I-R-S-I",
        "jawaban": "SISIR"
    },
    {
        "pertanyaan": "Benda : R-U-S-A-K",
        "jawaban": "KASUR"
    },
    {
        "pertanyaan": "Benda : P-O-K-E-R",
        "jawaban": "KOPER"
    },
    {
        "pertanyaan": "Benda : A-L-E-G-S",
        "jawaban": "GELAS"
    },
    {
        "pertanyaan": "Hewan : A-D-G-U-N",
        "jawaban": "UDANG"
    },
    {
        "pertanyaan": "Benda : S-P-I-N-O",
        "jawaban": "SPION"
    },
    {
        "pertanyaan": "Hewan : A-T-A-L-L",
        "jawaban": "LALAT"
    },
    {
        "pertanyaan": "Buah : J-A-B-M-U",
        "jawaban": "JAMBU"
    },
    {
        "pertanyaan": "Benda : A-P-O-M-P",
        "jawaban": "POMPA"
    },
    {
        "pertanyaan": "Benda : A-M-U-J-R",
        "jawaban": "JARUM"
    },
    {
        "pertanyaan": "Benda : S-K-E-E-T",
        "jawaban": "KESET"
    },
    {
        "pertanyaan": "Hewan : A-U-B-A-Y",
        "jawaban": "BUAYA"
    },
    {
        "pertanyaan": "Benda : I-T-A-S-K",
        "jawaban": "SIKAT"
    },
    {
        "pertanyaan": "Buah : M-O-T-A-T",
        "jawaban": "TOMAT"
    },
    {
        "pertanyaan": "Benda : K-E-R-T-O",
        "jawaban": "ROKET"
    },
    {
        "pertanyaan": "Benda :T-A-K-E-R",
        "jawaban": "RAKET"
    },
    {
        "pertanyaan": "Benda : M-E-T-R-O",
        "jawaban": "REMOT"
    },
    {
        "pertanyaan": "Hewan : B-E-L-A-H",
        "jawaban": "LEBAH"
    },
    {
        "pertanyaan": "Hewan : C-I-A-K-C",
        "jawaban": "CICAK"
    },
    {
        "pertanyaan": "Hewan : A-K-G-A-G",
        "jawaban": "GAGAK"
    },
    {
        "pertanyaan": "Buah : L-A-S-K-A",
        "jawaban": "SALAK"
    },
    {
        "pertanyaan": "Benda : B-A-S-K-A",
        "jawaban": "ASBAK"
    },
    {
        "pertanyaan": "Benda : L-O-B-T-O",
        "jawaban": "BOTOL"
    },
    {
        "pertanyaan": "Hewan : G-A-B-O-N",
        "jawaban": "BANGO"
    },
    {
        "pertanyaan": "Hewan : C-O-K-E-A",
        "jawaban": "KECOA"
    },
    {
        "pertanyaan": "Hewan : P-U-T-I-A",
        "jawaban": "TUPAI"
    },
    {
        "pertanyaan": "Benda : B-A-O-I-L",
        "jawaban": "BIOLA"
    },
    {
        "pertanyaan": "Hewan : A-K-A-L-O",
        "jawaban": "KOALA"
    },
    {
        "pertanyaan": "Sayuran : S-I-B-U-K",
        "jawaban": "KUBIS"
    },
    {
        "pertanyaan": "Sayuran : A-B-A-M-Y",
        "jawaban": "BAYAM"
    },
    {
        "pertanyaan": "Sayuran : M-U-R-A-J",
        "jawaban": "JAMUR"
    },
    {
        "pertanyaan": "Hewan : S-A-G-A-N",
        "jawaban": "ANGSA"
    },
    {
        "pertanyaan": "Benda : N-A-B-O-D",
        "jawaban": "BANDO"
    },
    {
        "pertanyaan": "Benda : S-T-A-K-E",
        "jawaban": "KASET"
    },
    {
        "pertanyaan": "Benda : G-A-P-A-R",
        "jawaban": "PAGAR"
    },
    {
        "pertanyaan": "Hewan : K-U-R-A-N",
        "jawaban": "RAKUN"
    },
    {
        "pertanyaan": "Benda : B-L-A-K-E",
        "jawaban": "KABEL"
    },
    {
        "pertanyaan": "Benda : B-R-O-T-O",
        "jawaban": "ROBOT"
    },
    {
        "pertanyaan": "Benda : G-A-E-L-S",
        "jawaban": "GELAS"
    },
    {
        "pertanyaan": "Benda : P-I-S-K-A",
        "jawaban": "KIPAS"
    },
    {
        "pertanyaan": "Benda : K-E-R-O-K",
        "jawaban": "KOREK"
    },
    {
        "pertanyaan": "Benda : A-L-O-N-G",
        "jawaban": "GALON"
    },
    {
        "pertanyaan": "Benda : A-C-I-N-D",
        "jawaban": "CANDI"
    },
    {
        "pertanyaan": "Hewan : E-N-Y-U-P",
        "jawaban": "PENYU"
    },
    {
        "pertanyaan": "Pekerjaan : R-U-R-I-K",
        "jawaban": "KURIR"
    },
    {
        "pertanyaan": "Pekerjaan : P-U-S-R-I",
        "jawaban": "SUPIR"
    },
    {
        "pertanyaan": "Pekerjaan : A-K-R-I-S",
        "jawaban": "KASIR"
    },
    {
        "pertanyaan": "Profesi : L-A-T-T-E",
        "jawaban": "ATLET"
    },
    {
        "pertanyaan": "Profesi : P-I-K-E-R",
        "jawaban": "KIPER"
    },
    {
        "pertanyaan": "Profesi : W-A-I-T-S",
        "jawaban": "WASIT"
    },
    {
        "pertanyaan": "Tempat : H-A-N-T-U",
        "jawaban": "HUTAN"
    },
    {
        "pertanyaan": "Tempat : D-R-A-U-P",
        "jawaban": "DAPUR"
    },
    {
        "pertanyaan": "Tempat : M-A-N-T-A",
        "jawaban": "TAMAN"
    },
    {
        "pertanyaan": "Tempat : P-A-R-A-S",
        "jawaban": "PASAR"
    },
    {
        "pertanyaan": "Benda : B-A-K-E-O-N",
        "jawaban": "BONEKA"
    },
    {
        "pertanyaan": "Benda : J-A-K-E-M-E",
        "jawaban": "KEMEJA"
    },
    {
        "pertanyaan": "Hewan : G-I-A-N-U-A",
        "jawaban": "IGUANA"
    },
    {
        "pertanyaan": "Benda : H-A-R-E-U-P",
        "jawaban": "PERAHU"
    },
    {
        "pertanyaan": "Benda : A-M-A-K-E-R",
        "jawaban": "KAMERA"
    },
    {
        "pertanyaan": "Benda : D-A-P-E-S-E",
        "jawaban": "SEPEDA"
    },
    {
        "pertanyaan": "Benda : R-E-T-A-K-E",
        "jawaban": "KERETA"
    },
    {
        "pertanyaan": "Hewan : G-U-I-T-A-R",
        "jawaban": "GURITA"
    },
    {
        "pertanyaan": "Buah : A-P-E-P-A-Y",
        "jawaban": "PEPAYA"
    },
    {
        "pertanyaan": "Benda : A-K-L-U-N-G",
        "jawaban": "ANGKLUNG"
    },
    {
        "pertanyaan": "Benda : N-A-T-A-N-E",
        "jawaban": "ANTENA"
    },
    {
        "pertanyaan": "Buah : G-R-A-N-G-U",
        "jawaban": "ANGGUR"
    },
    {
        "pertanyaan": "Benda : C-R-A-S-K-I",
        "jawaban": "KARCIS"
    },
    {
        "pertanyaan": "Benda : P-E-G-S-E-R",
        "jawaban": "GESPER"
    },
    {
        "pertanyaan": "Makanan : A-G-N-A-K-C",
        "jawaban": "KACANG"
    },
    {
        "pertanyaan": "Hewan : J-I-G-K-A-N",
        "jawaban": "KIJANG"
    },
    {
        "pertanyaan": "Benda : N-A-G-W-A-G",
        "jawaban": "GAWANG"
    },
    {
        "pertanyaan": "Hewan : K-O-D-O-M-O",
        "jawaban": "KOMODO"
    },
    {
        "pertanyaan": "Benda : G-L-U-I-N-G",
        "jawaban": "GULING"
    },
    {
        "pertanyaan": "Benda : A-N-G-Y-G-U",
        "jawaban": "GAYUNG"
    },
    {
        "pertanyaan": "Sayuran : G-E-R-N-O-T",
        "jawaban": "TERONG"
    },
    {
        "pertanyaan": "Benda : N-A-T-I-N-G",
        "jawaban": "ANTING"
    },
    {
        "pertanyaan": "Benda : K-R-O-O-M-P",
        "jawaban": "KOMPOR"
    },
    {
        "pertanyaan": "Benda : M-U-S-P-I-T",
        "jawaban": "SUMPIT"
    },
    {
        "pertanyaan": "Benda : D-E-M-O-P-T",
        "jawaban": "DOMPET"
    },
    {
        "pertanyaan": "Hewan : A-G-N-I-C-C",
        "jawaban": "CACING"
    },
    {
        "pertanyaan": "Hewan : C-U-P-A-N-G",
        "jawaban": "CAPUNG"
    },
    {
        "pertanyaan": "Benda : G-M-K-O-B-E",
        "jawaban": "GEMBOK"
    },
    {
        "pertanyaan": "Benda : G-A-N-B-U-K",
        "jawaban": "BANGKU"
    },
    {
        "pertanyaan": "Benda : C-C-I-I-N-N",
        "jawaban": "CINCIN"
    },
    {
        "pertanyaan": "Benda : D-O-S-K-E-N",
        "jawaban": "SENDOK"
    },
    {
        "pertanyaan": "Benda : G-R-O-LO-B",
        "jawaban": "BORGOL"
    },
    {
        "pertanyaan": "Hewan : C-A-L-K-I-N",
        "jawaban": "KANCIL"
    },
    {
        "pertanyaan": "Sayuran : L-O-W-E-R-T",
        "jawaban": "WORTEL"
    },
    {
        "pertanyaan": "Hewan : E-T-O-N-M-Y",
        "jawaban": "MONYET"
    },
    {
        "pertanyaan": "Benda : A-N-I-T-R-A",
        "jawaban": "RANTAI"
    },
    {
        "pertanyaan": "Sayuran : J-U-G-N-A-G",
        "jawaban": "JAGUNG"
    },
    {
        "pertanyaan": "Hewan : A-R-I-P-K-T",
        "jawaban": "PARKIT"
    },
    {
        "pertanyaan": "Hewan : G-U-S-M-A-N",
        "jawaban": "MUSANG"
    },
    {
        "pertanyaan": "Hewan : A-N-D-A-K-L",
        "jawaban": "LANDAK"
    },
    {
        "pertanyaan": "Sayuran : B-I-C-N-U-S",
        "jawaban": "BUNCIS"
    },
    {
        "pertanyaan": "Buah : M-E-D-I-A-L",
        "jawaban": "DELIMA"
    },
    {
        "pertanyaan": "Buah : M-A-R-C-I-E",
        "jawaban": "CERMAI"
    },
    {
        "pertanyaan": "Buah : G-A-N-G-M-A",
        "jawaban": "MANGGA"
    },
    {
        "pertanyaan": "Hewan : A-K-B-A-W-I",
        "jawaban": "BIAWAK"
    },
    {
        "pertanyaan": "Benda : C-A-K-E-P-I",
        "jawaban": "KECAP"
    },
    {
        "pertanyaan": "Benda : E-L-G-A-N-G",
        "jawaban": "GELANG"
    },
    {
        "pertanyaan": "Buah : A-N-N-A-K-G",
        "jawaban": "NANGKA"
    },
    {
        "pertanyaan": "Buah : S-K-A-S-R-I",
        "jawaban": "SIRSAK"
    },
    {
        "pertanyaan": "Benda : R-E-S-E-N-T",
        "jawaban": "SENTER"
    },
    {
        "pertanyaan": "Benda : P-A-N-G-E-D",
        "jawaban": "PEDANG"
    },
    {
        "pertanyaan": "Benda : G-A-T-A-N-G",
        "jawaban": "TANGGA"
    },
    {
        "pertanyaan": "Benda : H-E-A-R-U-P",
        "jawaban": "PERAHU"
    },
    {
        "pertanyaan": "Benda : A-K-A-K-P-M",
        "jawaban": "KAMPAK"
    },
    {
        "pertanyaan": "Profesi : I-S-P-O-I-L",
        "jawaban": "POLISI"
    },
    {
        "pertanyaan": "Profesi : A-W-L-P-O-N",
        "jawaban": "POLWAN"
    },
    {
        "pertanyaan": "Profesi : R-U-S-S-E-T",
        "jawaban": "SUSTER"
    },
    {
        "pertanyaan": "Tempat : I-L-K-I-N-K",
        "jawaban": "KLINIK"
    },
    {
        "pertanyaan": "Tempat : T-O-P-E-K-A",
        "jawaban": "APOTEK"
    },
    {
        "pertanyaan": "Tempat : K-A-R-T-O-N",
        "jawaban": "KANTOR"
    },
    {
        "pertanyaan": "Tempat : G-U-N-W-A-R",
        "jawaban": "WARUNG"
    },
    {
        "pertanyaan": "Tempat : G-U-N-G-U-N",
        "jawaban": "GUNUNG"
    },
    {
        "pertanyaan": "Tempat : B-A-R-K-I-P",
        "jawaban": "BAPRIK"
    },
    {
        "pertanyaan": "Hewan : I-C-E-L-I-N-K",
        "jawaban": "KELINCI"
    },
    {
        "pertanyaan": "Benda : K-I-R-A-S-E-T",
        "jawaban": "SETRIKA"
    },
    {
        "pertanyaan": "Sayuran : G-A-N-T-K-E-N",
        "jawaban": "KENTANG"
    },
    {
        "pertanyaan": "Benda : G-I-N-G-U-T-N",
        "jawaban": "GUNTING"
    },
    {
        "pertanyaan": "Benda : G-A-N-G-N-E-D",
        "jawaban": "GENDANG"
    },
    {
        "pertanyaan": "Tempat : A-H-A-W-S",
        "jawaban": "SAWAH"
    },
    {
        "pertanyaan": "Hewan : B-U-N-G-K-A-M",
        "jawaban": "KUMBANG"
    },
    {
        "pertanyaan": "Benda : CANGKING",
        "jawaban": "KANCING"
    },
    {
        "pertanyaan": "Buah : G-A-S-M-I-N-G",
        "jawaban": "MANGGIS"
    },
    {
        "pertanyaan": "Benda : R-A-C-K-I-N-G",
        "jawaban": "CANGKIR"
    },
    {
        "pertanyaan": "Benda : G-L-E-N-N-C-O",
        "jawaban": "LONCENG"
    },
    {
        "pertanyaan": "Benda : A-S-A-W-E-P-T",
        "jawaban": "PESAWAT"
    },
    {
        "pertanyaan": "Benda : B-R-O-K-A-G-E",
        "jawaban": "GEROBAK"
    },
    {
        "pertanyaan": "Benda : L-U-C-K-N-A-G",
        "jawaban": "CANGKUL"
    },
    {
        "pertanyaan": "Hewan : D-E-I-A-L-E-K",
        "jawaban": "KELEDAI"
    },
    {
        "pertanyaan": "Benda : A-L-P-O-M-I-N",
        "jawaban": "LAMPION"
    },
    {
        "pertanyaan": "Sayuran : K-A-R-A-P-I-P",
        "jawaban": "PAPRIKA"
    },
    {
        "pertanyaan": "Sayuran : K-O-L-O-R-I-B",
        "jawaban": "BROKOLI"
    },
    {
        "pertanyaan": "Hewan : A-I-A-R-H-U-M",
        "jawaban": "HARIMAU"
    },
    {
        "pertanyaan": "Sayuran : J-O-I-N-M-E-L",
        "jawaban": "MELINJO"
    },
    {
        "pertanyaan": "Buah : M-A-R-I-S-K-A",
        "jawaban": "MARKISA"
    },
    {
        "pertanyaan": "Benda : J-A-G-K-N-A-R",
        "jawaban": "JANGKAR"
    },
    {
        "pertanyaan": "Buah : E-K-E-K-M-S-E",
        "jawaban": "KESEMEK"
    },
    {
        "pertanyaan": "Buah : R-I-S-A-Y-A-K",
        "jawaban": "SRIKAYA"
    },
    {
        "pertanyaan": "Benda : N-O-M-I-T-O-R",
        "jawaban": "MONITOR"
    },
    {
        "pertanyaan": "Benda : G-A-N-K-M-U-K",
        "jawaban": "MANGKUK"
    },
    {
        "pertanyaan": "Benda : T-A-N-A-G-E-R",
        "jawaban": "GERANAT"
    },
    {
        "pertanyaan": "Benda : A-J-I-G-G-E-R",
        "jawaban": "GERGAJI"
    },
    {
        "pertanyaan": "Profesi : L-E-A-N-A-N-Y",
        "jawaban": "NELAYAN"
    },
    {
        "pertanyaan": "Profesi : L-U-K-E-P-I-S",
        "jawaban": "PELUKIS"
    },
    {
        "pertanyaan": "Profesi : S-I-M-I-A-N-S",
        "jawaban": "MASINIS"
    },
    {
        "pertanyaan": "Profesi : I-N-K-I-E-S-T",
        "jawaban": "TEKNISI"
    },
    {
        "pertanyaan": "Profesi : E-T-A-T-R-A-N",
        "jawaban": "TENTARA"
    },
    {
        "pertanyaan": "Profesi : P-E-T-A-W-A-R",
        "jawaban": "PERAWAT"
    },
    {
        "pertanyaan": "Pekerjaan : A-L-A-N-Y-EP",
        "jawaban": "PELAYAN"
    },
    {
        "pertanyaan": "Pekerjaan : A-D-A-H-K-O-N",
        "jawaban": "NAHKODA"
    },
    {
        "pertanyaan": "Profesi : J-E-N-I-P-U-T",
        "jawaban": "PETINJU"
    },
    {
        "pertanyaan": "Tempat : A-D-I-T-N-O-S",
        "jawaban": "STADION"
    },
    {
        "pertanyaan": "Hewan : A-K-A-K-A-T-K-U",
        "jawaban": "KAKATUA"
    },
    {
        "pertanyaan": "Buah : O-R-B-I-T-E-R-S",
        "jawaban": "STROBERI"
    },
    {
        "pertanyaan": "Benda : A-C-T-A-K-A-M-A",
        "jawaban": "KACAMATA"
    },
    {
        "pertanyaan": "Benda : L-E-V-I-T-I-E-S",
        "jawaban": "TELEVISI"
    },
    {
        "pertanyaan": "Sayuran : G-U-N-K-K-N-A-G",
        "jawaban": "KANGKUNG"
    },
    {
        "pertanyaan": "Hewan : L-A-B-E-L-N-A-G",
        "jawaban": "BELALANG"
    },
    {
        "pertanyaan": "Hewan : A-J-A-W-L-I-A-R",
        "jawaban": "RAJAWALI"
    },
    {
        "pertanyaan": "Hewan : G-I-T-I-N-P-E-K",
        "jawaban": "KEPITING"
    },
    {
        "pertanyaan": "Benda : G-R-U-S-L-I-N-E",
        "jawaban": "SERULING"
    },
    {
        "pertanyaan": "Benda : C-O-N-G-M-E-E-K",
        "jawaban": "KEMOCENG"
    },
    {
        "pertanyaan": "Benda : M-E-T-P-E-R-O-T",
        "jawaban": "TEROMPET"
    },
    {
        "pertanyaan": "Benda : G-U-N-K-L-A-N-G",
        "jawaban": "ANGKLUNG"
    },
    {
        "pertanyaan": "Profesi : A-N-N-Y-Y-I-P-E",
        "jawaban": "PENYANYI"
    },
    {
        "pertanyaan": "Pekerjaan : D-A-N-G-P-A-G-E",
        "jawaban": "PEDAGANG"
    },
    {
        "pertanyaan": "Profesi : D-R-U-K-I-T-E-R",
        "jawaban": "DIREKTUR"
    },
    {
        "pertanyaan": "Profesi : D-E-N-E-P-R-I-S",
        "jawaban": "PRESIDEN"
    },
    {
        "pertanyaan": "Profesi : S-I-N-N-Y-U-R-I",
        "jawaban": "INSINYUR"
    },
    {
        "pertanyaan": "Tempat : A-R-E-L-M-I-N-T",
        "jawaban": "TERMINAL"
    },
    {
        "pertanyaan": "Tempat : A-R-N-I-P-A-R-K",
        "jawaban": "PARKIRAN"
    },
    {
        "pertanyaan": "Tempat : A-N-T-R-O-R-S-E",
        "jawaban": "RESTORAN"
    }
]
    
          var upan = url[Math.floor(Math.random() * url.length)]
          res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result: {
                 	question: `${upan.pertanyaan}`,
                     answer: `${upan.jawaban}`
                   }
             })
} else {
res.sendFile(invalidKey)
}
})

router.get('/game/truth', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)

       if(listkey.includes(apikeyInput)){
       	
       var url = 
       
       [
        "menurut kamu crush kamu sekarang itu cocok gak sama kamu?",
        "pencapaian yang udah didapet apa aja ditahun ini?",
        "telpon crush kamu, kalo ditanya bilang aja kepencet",
        "kalo kamu diputusin sama mantan,apa yang kamu lakuin?",
        "pencapaian yang udah didapet apa aja ditahun ini?",
        "siapa yang sempet bikin lu kecewa?",
        "hal yang bikin kecewa?",
        "yang paling pendek menurut kamu tapi imut siapa?",
        "seberapa sayang kmu pada bumi?",
        "lagu yang akhir2 ini di denger?",
        "siapa nama artis yang pernah kamu bucinin diam-diam?",
        "tujuan yang lagi dipengen itu apa?",
        "punya berapa akun ig? sebutin smua",
        "kebiasaan terburuk lo pas di sekolah apa?",
        "pencapaian yang udah didapet apa aja ditahun ini?",
        "apa ketakutan terbesar kamu?",
        "Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget",
        "pernah nolak orang? alasannya kenapa?",
        "suka mabar(main bareng)sama siapa?",
        "Siapa yang paling mendekati tipe pasangan idealmu di sini",
        "(bgi yg muslim) pernah ga solat seharian?",
        "hal yang paling ditakutin?",
        "pernah jadi selingkuhan orang?",
        "pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?",
        "suka sayur gak?",
        "hal yang bikin seneng pas lu lagi sedih apa?",
        "pernah gak nyuri uang nyokap atau bokap? Alesanya?",
        "Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",
        "siapa first love mu?",
        "apa ketakutan terbesar kamu?",
        "Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)",
        "Pernah suka sama siapa aja? berapa lama?"
        ]
    
          var upan = url[Math.floor(Math.random() * url.length)]
          res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result: {
                 	truth: `${upan}`
                   }
             })
} else {
res.sendFile(invalidKey)
}
})

router.get('/game/dare', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)

       if(listkey.includes(apikeyInput)){
       	
       var url = 
       
[
 "makan 2 sendok nasi tanpa lauk apapun, kalo seret boleh minum",
        "spill orang yang bikin kamu jedag jedug",
        "telfon crush/pacar sekarang dan ss ke pemain",
        "drop emot \"🦄💨\" setiap ngetik di gc/pc selama 1 hari.",
        "ucapin kata \"Selamat datang di Who Wants To Be a Millionaire!\" ke semua grup yang kamu punya",
        "marah² ga jelas ke penonton sw kamu urutan 30",
        "telfon mantan bilang kangen",
        "yanyiin reff lagu yang terakhir kamu setel",
        "vn mantan/crush/pacar kamu, bilang \"hi (namanya), mau telfon dong, bentar ajaa. aku kangen🥺👉🏼👈\"🏼",
        "kletekan di meja (yg ada dirumah) sampe lo dimarahin karena berisik",
        "belanjain (grab/gofood) buat salah satu pemain disini, terserah siapa. budget dibawah 25k",
        "Bilang ke random people  \"Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling ciyussss \"",
        "sebutin nama nama mantan",
        "buatin 1 pantun untuk pemain pertama!",
        "ss chat wa",
        "chat random people dengan bahasa alay lalu ss kesini",
        "ceritain hal memalukan versi diri sendiri",
        "tag orang yang dibenci",
        "Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll.",
        "ganti nama jadi \" BOWO \" selama 24 jam",
        "teriak \" anjimm gabutt anjimmm \" di depan rumah mu",
        "snap/post foto pacar/crush",
        "sebutkan tipe pacar mu!",
        "bilang \"i hv crush on you, mau jadi pacarku gak?\" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini",
        "record voice baca surah al-kautsar",
        "prank chat mantan dan bilang \" i love u, pgn balikan. \" Tanpa ada kata dare!",
        "chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia \"i lucky to hv you!\"",
        "ganti nama menjadi \"gue anak lucinta luna\" selama 5 jam",
        "ketik pake bahasa sunda 24 jam",
        "pake foto sule sampe 3 hari",
        "drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu",
        "kirim voice note bilang can i call u baby?",
        "ss recent call whatsapp",
        "Bilang \"KAMU CANTIK BANGET NGGAK BOHONG\" ke cowo!",
        "pap ke salah satu anggota grup"
]
    
          var upan = url[Math.floor(Math.random() * url.length)]
          res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result: {
                 	dare:`${upan}`
                   }
             })
} else {
res.sendFile(invalidKey)
}
})

router.get('/random/quotes', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	
      if(listkey.includes(apikeyInput)){
       
       var quo = 
       [
    {
      "author": "A. France",
      "quotes": "Lebih baik mengerti sedikit daripada salah mengerti."
    },
    {
      "author": "Abraham Lincoln",
      "quotes": "Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan."
    },
    {
      "author": "Aeschylus",
      "quotes": "Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya."
    },
    {
      "author": "Aesop",
      "quotes": "Penderitaan adalah pelajaran."
    },
    {
      "author": "Albert Einstein",
      "quotes": "Ilmu pengetahuan tanpa agama adalah pincang."
    },
    {
      "author": "Albert Einstein",
      "quotes": "Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak."
    },
    {
      "author": "Albert Einstein",
      "quotes": "Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala."
    },
    {
      "author": "Albert Einstein",
      "quotes": "Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?."
    },
    {
      "author": "Albert Enstein",
      "quotes": "Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri."
    },
    {
      "author": "Alex Osborn",
      "quotes": "Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri."
    },
    {
      "author": "Alexander A. Bogomoletz",
      "quotes": "Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama."
    },
    {
      "author": "Alexander Solzhenitsyn",
      "quotes": "Manusia akan bahagia selama ia memilih untuk bahagia."
    },
    {
      "author": "Ali Javan",
      "quotes": "Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang."
    },
    {
      "author": "Ali bin Abi Thalib",
      "quotes": "Apabila sempurna akal seseorang, maka sedikit perkataannya."
    },
    {
      "author": "Ali bin Abi Thalib",
      "quotes": "Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya."
    },
    {
      "author": "Ali bin Abi Thalib",
      "quotes": "Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang."
    },
    {
      "author": "Anne M. Lindbergh",
      "quotes": "Yang palin melelahkan dalam hidup adalah menjadi orang yang tidak tulus."
    },
    {
      "author": "Anonim",
      "quotes": "Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup."
    },
    {
      "author": "Anonim",
      "quotes": "Penundaan adalah kuburan dimana peluang dikuburkan."
    },
    {
      "author": "Antonie De Saint",
      "quotes": "Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama."
    },
    {
      "author": "Aristoteles",
      "quotes": "Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan."
    },
    {
      "author": "Arnold Glasow",
      "quotes": "Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja."
    },
    {
      "author": "Art Buchwald",
      "quotes": "Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan."
    },
    {
      "author": "Artemus Ward",
      "quotes": "Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi."
    },
    {
      "author": "Ashleigh Brilliant",
      "quotes": "Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan."
    },
    {
      "author": "Augustine",
      "quotes": "Kesabaran adalah teman dari kebijaksanaan."
    },
    {
      "author": "Ayn Rand",
      "quotes": "Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain."
    },
    {
      "author": "B. J. Habibie",
      "quotes": "Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan."
    },
    {
      "author": "Balzac",
      "quotes": "Kebencian seperti halnya cinta, berkobar karena hal-hal kecil."
    },
    {
      "author": "Barbara Sher",
      "quotes": "Anda tidak perlu harus berhasil pada kali pertama."
    },
    {
      "author": "Beecher",
      "quotes": "Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung."
    },
    {
      "author": "Benjamin Disraeli",
      "quotes": "Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri."
    },
    {
      "author": "Bill Clinton",
      "quotes": "Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan."
    },
    {
      "author": "Bill Cosby",
      "quotes": "Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang."
    },
    {
      "author": "Bill Gates",
      "quotes": "Konsumen yang paling tidak puas adalah sumber berharga untuk belajar."
    },
    {
      "author": "Bill Mccartney",
      "quotes": "Kita ada disini bukan untuk saling bersaing. Kita ada disini untuk saling melengkapi."
    },
    {
      "author": "Brian Koslow",
      "quotes": "Semakin kita bersedia bertanggung jawab atas perbuatan-perbuatan kita, semakin banyak kredibilitas yang kita miliki."
    },
    {
      "author": "Browning",
      "quotes": "Selalu baik untuk memaafkan, tapi yang paling baik adalah melupakan sebuah kesalahan."
    },
    {
      "author": "Bruce Lee",
      "quotes": "Jangan menjadi pohon kaku yang mudah patah. Jadilah bambu yang mampu bertahan melengkung melawan terpaan angin."
    },
    {
      "author": "Budha Gautama",
      "quotes": "Jangan menangis karena kegagalan cinta, sebab manusia akan meninggalkan semua yang dicintainya."
    },
    {
      "author": "Bunda Teresa",
      "quotes": "Jika Anda mengadili orang lain, Anda tak punya waktu untuk mencintai mereka."
    },
    {
      "author": "Bunda Teresa",
      "quotes": "Jika tidak ada perdamaian, hal itu disebabkan kita telah lupa bahwa kita saling membutuhkan."
    },
    {
      "author": "Bung Hatta",
      "quotes": "Kurang cerdas dapat diperbaiki dengan belajar, kurang cekatan dapat diperbaiki dengan pengalaman, kurang jujur sulit memperbaikinya."
    },
    {
      "author": "Burn",
      "quotes": "Banyak orang sukses berkat banyaknya kesulitan dan kesukaran yang mesti dihadapi."
    },
    {
      "author": "Carol Burnet",
      "quotes": "Hanya aku yang bisa merubah hidupku, tak ada seorang pun yang dapat melakukannya untukku."
    },
    {
      "author": "Charles Darwin",
      "quotes": "Yang bisa bertahan hidup bukan spesies yang paling kuat. Bukan juga spesies yang paling cerdas. Tapi spesies yang paling responsif terhadap perubahan."
    },
    {
      "author": "Charles R. Swindoll",
      "quotes": "Hidup adalah 10 persen yang terjadi kepada Anda, 90 persen bagaimana cara Anda menyikapinya."
    },
    {
      "author": "Ching Hai",
      "quotes": "Memperbaiki diri kita adalah memperbaiki dunia."
    },
    {
      "author": "Ching Hai",
      "quotes": "Jangan membeda-bedakan pekerjaan mana yang baik dan mana yang buruk. Masalah muncul jika kita membeda-bedakan dan memihak sesuatu."
    },
    {
      "author": "Ching Hai",
      "quotes": "Kita bekerja harus tanpa pamrih. Itu berlaku untuk segala pekerjaan. Pengabdian tanpa syarat adalah yang terbaik."
    },
    {
      "author": "Ching Hai",
      "quotes": "Kita harus menemukan kekuatan cinta dalam diri kita terlebih dahulu, barulah kita dapat benar-benar mencintai orang lain."
    },
    {
      "author": "Ching Hai",
      "quotes": "Carilah uang secukupnya saja untuk membiayai kehidupan, agar dapat menyisihkan waktu dan tenaga untuk melatih spiritual."
    },
    {
      "author": "Christopher Colombus",
      "quotes": "Harta benda tak membuat seseorang menjadi kaya raya, mereka hanya membuatnya lebih sibuk."
    },
    {
      "author": "Cicero",
      "quotes": "Hati yang penuh syukur, bukan saja merupakan kebajikan terbesar, melainkan induk dari segala kebajikan yang lain."
    },
    {
      "author": "Cicero",
      "quotes": "Hati yang penuh syukur, bukan saja merupakan kebajikan terbesar, melainkan juga induk dari segala kebajikan yang lain."
    },
    {
      "author": "Clarence Darrow",
      "quotes": "Kebebasan itu berasal dari manusia, tidak dari undang-undang atau institusi."
    },
    {
      "author": "Confucius",
      "quotes": "Hidup ini benar-benar sederhana, tapi kita malah bersikeras membuatnya menjadi rumit."
    },
    {
      "author": "Confucius",
      "quotes": "Kemana pun Anda pergi, pergilah dengan sepenuh hati."
    },
    {
      "author": "Confucius",
      "quotes": "Orang yang melakukan kesalahan dan tidak memperbaiki kesalahannya, melalakukan kesalahan yang lainnya."
    },
    {
      "author": "Confucius",
      "quotes": "Kebanggaan kita yang terbesar bukan karena tidak pernah gagal, tetapi bangkit kembali setiap kita jatuh."
    },
    {
      "author": "Cowper",
      "quotes": "Bunga yang tidak akan pernah layu dibumi adalah kebajikan."
    },
    {
      "author": "Cynthia Ozick",
      "quotes": "Untuk membayangkan hal yang tak dapat dibayangkan, dibutuhkan imajinasi yang luar biasa."
    },
    {
      "author": "D. J. Schwartz",
      "quotes": "Kesulitan apapun tidak tahan terhadap keuletan dan ketekunan. Tanpa keuletan, orang yang paling pintar dan paling berbakat sering gagal dalam hidupnya."
    },
    {
      "author": "Dale Carnegie",
      "quotes": "Satu-satunya cara agar kita memperoleh kasih sayang, adalah jangan menuntut agar kita dicintai, tetapi mulailah memberi kasih sayang kepada orang lain tanpa mengharapkan balasan."
    },
    {
      "author": "Dale Carnegie",
      "quotes": "Bila orang yang kuatir akan kekurangannya mau mensyukuri kekayaan yang mereka miliki, mereka akan berhenti kuatir."
    },
    {
      "author": "Dale Carnegie",
      "quotes": "Usahakan membentuk suatu hubungan \"kawat\" antara otak dan hati Anda."
    },
    {
      "author": "Dale Carnegie",
      "quotes": "Senyuman akan membuat kaya jiwa seseorang yang menerimanya, tanpa membuat miskin seseorang yang memberikannya."
    },
    {
      "author": "Dale Carnegie",
      "quotes": "Orang jarang sukses kecuali jika mereka senang dengan apa yang dikerjakannya."
    },
    {
      "author": "David Livingston",
      "quotes": "Saya akan pergi kemanapun selama itu arahnya ke depan."
    },
    {
      "author": "David V. Ambrose",
      "quotes": "Jika Anda punya kemauan untuk menang, Anda sudah mencapai separuh sukses. Jika Anda tidak punya kemauan untuk menang, Anda sudah mencapai separuh kegagalan."
    },
    {
      "author": "David Weinbaum",
      "quotes": "Rahasia menuju hidup kaya adalah mempunyai lebih banyak awal ketimbang akhir."
    },
    {
      "author": "Desbarolles",
      "quotes": "Kebenaran yang tidak dimengerti akan menjadi kesalahan."
    },
    {
      "author": "Descrates",
      "quotes": "Saya berpikir, karena itu saya ada."
    },
    {
      "author": "Djamaludin Abassy",
      "quotes": "Mental yang lemah lebih parah dari fisik yang lemah."
    },
    {
      "author": "Donald Kendall",
      "quotes": "Satu-satunya sukses yang diraih sebelum bekerja hanyalah ada di kamus saja."
    },
    {
      "author": "Dr. Frank Crane",
      "quotes": "Sahabat terbaik dan musuh terburuk kita adalah pikiran-pikiran kita. Pikiran dapat lebih baik dari seorang dokter atau seorang bankir atau seorang teman kepercayaan. Juga dapat lebih berbahaya dadi penjahat."
    },
    {
      "author": "Dr. Ronald Niednagel",
      "quotes": "Pergilah sejauh Anda bisa memandang, dan ketika Anda tiba disana, Anda akan memandang lebih jauh."
    },
    {
      "author": "Dr.\u00a0Johnnetta Cole",
      "quotes": "Jika kamu ingin pergi cepat, pergilah sendiri. Jika kamu ingin pergi jauh, pergilah bersama-sama."
    },
    {
      "author": "Dwigt D. Esenhower",
      "quotes": "Seorang intelektual tidak akan pernah mengatakan lebih daripada apa yang diketahuinya."
    },
    {
      "author": "Earl Campbell",
      "quotes": "Persoalan-persoalan adalah harga yang Anda bayar untuk kemajuan."
    },
    {
      "author": "Earl Campbell",
      "quotes": "Persoalan-persoalan adalah harga yang harus Anda bayar untuk kemajuan."
    },
    {
      "author": "Edgar Alnsel",
      "quotes": "Hidup manusia penuh dengan bahaya, tetapi disitulah letak daya tariknya."
    },
    {
      "author": "Edmund Burke",
      "quotes": "Anda tidak dapat merencanakan masa yang akan datang berdasarkan masa lalu."
    },
    {
      "author": "Edward L. Curtis",
      "quotes": "Optimisme yang tidak disertai dengan usaha hanya merupakan pemikiran semata yang tidak menghasilkan buah."
    },
    {
      "author": "Edward de Bono",
      "quotes": "Jika Anda termasuk orang yang senang menunggu datangnya peluang, Anda adalah bagian dari manusia pada umumnya."
    },
    {
      "author": "Edy Murphy",
      "quotes": "Aku menghabiskan usia 30-an untuk memperbaiki segala kesalahanku di usia 20-an."
    },
    {
      "author": "Einstein",
      "quotes": "Berusaha untuk tidak menjadi manusia yang berhasil tapi berusahalah menjadi manusia yang berguna."
    },
    {
      "author": "Eisenhower",
      "quotes": "Mulai sekarang kita tidak usah membuang-buang waktu barang semenit pun untuk memikirkan orang-orang yang tidak kita sukai."
    },
    {
      "author": "Elanor Roosevelt",
      "quotes": "Ketika kita berhenti membuat kontribusi, kita mulai mati."
    },
    {
      "author": "Elbert Hubbad",
      "quotes": "Kesalahan terbesar yang dibuat manusia dalam kehidupannya adalah terus-menerus merasa takut bahwa mereka akan melakukan kesalahan."
    },
    {
      "author": "Elizabeth Browning",
      "quotes": "Janganlah menyebut orang tidak bahagia sebelum dia mati. Jangan menilai pekerjaan seseorang sebelum pekerjaannya berakhir."
    },
    {
      "author": "Emerson",
      "quotes": "Percaya pada diri sendiri adalah rahasia utama mencapai sukses."
    },
    {
      "author": "Engelbert Huperdinck",
      "quotes": "Anda harus waspada dengan kesenangan. Pastikan bahwa Anda menikmatinya dan bukan dikendalikannya."
    },
    {
      "author": "Erich Watson",
      "quotes": "Kehilangan kekayaan masih dapat dicari kembali, kehilangan kepercayaan sulit didapatkan kembali."
    },
    {
      "author": "Francois De La Roche",
      "quotes": "Bila tidak mampu menemukan kedamaian dalam diri sendiri, tak ada gunanya mencari di tempat lain."
    },
    {
      "author": "Francois De La Roche",
      "quotes": "Kita terbiasa menyembunyikan diri dari orang lain, sampai akhirnya kita sendiri tersembunyi dari diri kita."
    },
    {
      "author": "Francois Roche",
      "quotes": "Kita lebih sibuk menyakinkan orang lain bahwa kita bahagia ketimbang benar-benar merasakan bahagia itu sendiri."
    },
    {
      "author": "Frank Crane",
      "quotes": "Anda mungkin ditipu jika terlalu mempercayai, tetapi hidup Anda akan tersiksa jika tidak cukup mempercayai."
    },
    {
      "author": "Frank Giblin",
      "quotes": "Jadilah diri Anda sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri Anda sendiri?."
    },
    {
      "author": "Franklin",
      "quotes": "Bila Anda ingin dicintai, cintailah dan bersikaplah sebagai orang yang patut dicintai."
    },
    {
      "author": "Fuller",
      "quotes": "Contoh yang baik adalah nasihat terbaik."
    },
    {
      "author": "Galileo Galilei",
      "quotes": "Rumput yang paling kuat tumbuhnya terdapat di atas tanah yang paling keras."
    },
    {
      "author": "Galileo Galilei",
      "quotes": "Kamu tidak dapat mengajari seseorang apa pun, kamu hanya bisa membantunyanya menemukan apa yang ada dalam dirinya sendiri."
    },
    {
      "author": "Gandhi",
      "quotes": "Mereka yang berjiwa lemah tak akan mampu memberi seuntai maaf tulus. Pemaaf sejati hanya melekat bagi mereka yang berjiwa tangguh."
    },
    {
      "author": "Gandhi",
      "quotes": "Kebahagiaan tergantung pada apa yang dapat Anda berikan, bukan pada apa yang Anda peroleh."
    },
    {
      "author": "Gen Collin Powel",
      "quotes": "Tak ada rahasia untuk menggapai sukses. Sukses itu dapat terjadi karena persiapan, kerja keras dan mau belajar dari kegagalan."
    },
    {
      "author": "George B. Shaw",
      "quotes": "Hidup bukanlah tentang menemukan dirimu sendiri. Hidup adalah tentang menciptakan dirimu sendiri."
    },
    {
      "author": "George III",
      "quotes": "Saya lebih baik kehilangan mahkota daripada melakukan tindakan yang menurut saya memalukan."
    },
    {
      "author": "George Santayana",
      "quotes": "Tidak ada obat untuk kelahiran dan kematian, kecuali menikmati yang ada di antara keduanya."
    },
    {
      "author": "George W.",
      "quotes": "Harapan tak pernah meninggalkan kita, kita yang meninggalkan harapan."
    },
    {
      "author": "Gilbert Chesterton",
      "quotes": "Agar bisa menjadi cukup cerdas untuk meraih semua uang yang diinginkan, kita harus cukup bodoh untuk menginginkannya."
    },
    {
      "author": "Gothe",
      "quotes": "Semua pengetahuan yang kumiliki bisa orang lain peroleh, tapi hatiku hanyalah untuk diriku sendiri."
    },
    {
      "author": "H. N. Spieghel",
      "quotes": "Betapapun tingginya burung terbang, toh dia harus mencari dan mendapatkan makanannya di bumi juga."
    },
    {
      "author": "H.L Hunt",
      "quotes": "Tetapkan apa yang Anda inginkan. Putuskan Anda ingin menukarnya dengan apa. Tentukan prioritas dan laksanakan."
    },
    {
      "author": "Hal Borland",
      "quotes": "Melihat pohon, saya jadi mengerti tentang kesabaran. Memandang rumput, saya jadi menghargai ketekunan."
    },
    {
      "author": "Hamka",
      "quotes": "Kecantikan yang abadi terletak pada keelokan adab dan ketinggian ilmu seseorang, bukan terletak pada wajah dan pakaiannya."
    },
    {
      "author": "Hamka",
      "quotes": "Kita harus yakin bahwa apa yang ditentukan oleh Tuhan untuk kita, itulah yang terbaik."
    },
    {
      "author": "Hamka",
      "quotes": "Berani menegakkan keadilan, walaupun mengenai diri sendiri, adalah puncak segala keberanian."
    },
    {
      "author": "Hamka",
      "quotes": "Hawa nafsu membawa kesesatan dan tidak berpedoman. Sementara akal menjadi pedoman menuju keutamaan. Hawa nafsu menyuruhmu berangan-angan, tetapi akal menyuruhmu menimbang."
    },
    {
      "author": "Harriet Braiker",
      "quotes": "Berusaha berhasil untuk memotivasi dirimu, tapi berusaha untuk selalu sempurna akan membuat tertekan."
    },
    {
      "author": "Helen Keller",
      "quotes": "Kita tidak akan belajar berani dan sabar jika di dunia ini hanya ada kegembiraan."
    },
    {
      "author": "Henri Ford",
      "quotes": "Kegagalan hanyalah kesempatan untuk memulai lagi dengan lebih pandai."
    },
    {
      "author": "Henry David Thoreau",
      "quotes": "Kebaikan adalah satu-satunya investasi yang tidak akan merugikan."
    },
    {
      "author": "Henry Ford",
      "quotes": "Idealis adalah orang yang membantu orang lain untuk makmur."
    },
    {
      "author": "Henry Ford",
      "quotes": "Berpikir itu adalah pekerjaan yang berat di antara segala jenis pekerjaan. Itulah sebabnya sedikit sekali orang yang senang melakukannya."
    },
    {
      "author": "Henry Ford",
      "quotes": "Persaingan yang tujuannya hanya untuk bersaing, untuk mengalahkan orang lain, tak pernah mendatangkan banyak manfaat."
    },
    {
      "author": "Henry Longfellow",
      "quotes": "Kehidupan orang-orang besar mengingatkan kita bahwa kita bisa membuat kehidupan kita luhur."
    },
    {
      "author": "Henry Thoreau",
      "quotes": "Hidupku menjadi hiburanku dan tak hentinya memberikan kejutan. Hidupku bagaikan drama dengan begitu banyak babak tanpa adegan penutup."
    },
    {
      "author": "Hubert Humprey",
      "quotes": "Apa yang Anda lihat adalah apa yang Anda capai."
    },
    {
      "author": "Imam Al-Ghazali",
      "quotes": "Kebahagiaan terletak pada kemenangan memerangi hawa nafsu dan menahan keinginan yang berlebih-lebihan."
    },
    {
      "author": "Imam Ghazali",
      "quotes": "Caci maki dari seorang penjahat merupakan kehormatan bagi seorang yang jujur."
    },
    {
      "author": "J.C.F von Schiller",
      "quotes": "Orang yang terlalu banyak merenung akan meraih sedikit."
    },
    {
      "author": "Jack Hyles",
      "quotes": "Jangan gunakan orang-orang untuk membangun pekerjaan besar, gunakan pekerjaan Anda untuk membangun orang-orang besar."
    },
    {
      "author": "Jackson Brown",
      "quotes": "Kesalahaan terbesar yang mungkin Anda buat adalah mempercayai bahwa Anda bekerja untuk orang lain."
    },
    {
      "author": "Jacques Audiberti",
      "quotes": "Kepengecutan yang paling besar adalah ketika kita membuktikan kekuatan kita kepada kelemanan orang lain."
    },
    {
      "author": "James Thurber",
      "quotes": "Jangan lihat masa lalu dengan penyesalan, jangan pula lihat masa depan dengan ketakutan, tapi lihatlah sekitar Anda dengan penuh kesadaran."
    },
    {
      "author": "Janet Erskine",
      "quotes": "Jangan menunggu keadaan yang ideal. Jangan juga menunggu peluang-peluang terbaik. Keduanya tak akan pernah datang."
    },
    {
      "author": "Jeff Goins",
      "quotes": "Kebanyakan orang sukses yang saya kenal bukan orang yang sibuk, mereka orang yang focus."
    },
    {
      "author": "Jerry West",
      "quotes": "Anda tidak dapat melakukan banyak hal di hidup Anda, jika Anda hanya bekerja di hari-hari yang Anda rasakan baik."
    },
    {
      "author": "Jim Rohn",
      "quotes": "Tembok yang kita bangun untuk menghambat kesedihan, juga membuat kita tertutup dari kebahagiaan."
    },
    {
      "author": "Jim Rohn",
      "quotes": "Jika Anda tidak merancang hidup Anda sendiri, kemungkinan Anda akan menjalani rencana orang lain. Apa yang mereka rencanakan untuk Anda? Tidak banyak."
    },
    {
      "author": "Jim Ryan",
      "quotes": "Motivasi adalah sesuatu yang membuat Anda memulai. Kebiasaan adalah sesuatu yang membuat Anda melanjutkan."
    },
    {
      "author": "Jimi Hendrix",
      "quotes": "Ketika kekuatan akan cinta melebihi kecintaan akan kekuasaan, maka dunia pun menemukan kedamaian."
    },
    {
      "author": "Jimmy Dean",
      "quotes": "Aku tak bisa merubah arah angin, tapi aku bisa menyesuaikan layarku untuk tetap bisa mencapai tujuanku."
    },
    {
      "author": "Joan Baez",
      "quotes": "Kita tak bisa memilih bagaimana kita meninggal atau kapan. Kita hanya bisa memutuskan bagaimana kita hidup. Sekarang."
    },
    {
      "author": "John B. Gough",
      "quotes": "Jika Anda ingin sukses, Anda harus menciptakan peluang untuk diri sendiri."
    },
    {
      "author": "John C. Maxwell",
      "quotes": "Bekerja keras sekarang, merasakan hasilnya nanti; bermalas-malasan sekarang, merasakan akibatnya nanti."
    },
    {
      "author": "John C. Maxwell",
      "quotes": "Untuk menangani diri Anda sendiri, gunakan kepala Anda. Untuk menangani orang lain, gunakan hati Anda."
    },
    {
      "author": "John C. Maxwell",
      "quotes": "Bekerja keras sekarang, merasakannya nanti. Bermalas-malas sekarang, merasakan akibatnya nanti."
    },
    {
      "author": "John Craig",
      "quotes": "Tidak peduli seberapa banyak yang dapat Anda lakukan, tidak peduli seberapa menarik hati kepribadian Anda, Anda tidak dapat melangkah jauh jika Anda tidak dapat bekerja bersama orang lain."
    },
    {
      "author": "John D. Rockefeller",
      "quotes": "Orang termiskin adalah orang yang tidak mempunyai apa-apa kecuali uang."
    },
    {
      "author": "John Gardne",
      "quotes": "Jika kita melayani, maka hidup akan lebih berarti."
    },
    {
      "author": "John Gray",
      "quotes": "Sebenarnya semua kesulitan merupakan kesempatan bagi jiwa yang tumbuh."
    },
    {
      "author": "John Manson",
      "quotes": "Anda dilahirkan orisinal, jadi tidak perlu setengah mati meniru orang lain."
    },
    {
      "author": "John Maxwell",
      "quotes": "Seberapa jauh Anda gagal, tidak masalah, tetapi yang penting seberapa sering Anda bangkit kembali."
    },
    {
      "author": "John Q. Adams",
      "quotes": "Jika tindakan-tindakan Anda mengilhami orang lain untuk bermimpi lebih, belajar lebih, bekerja lebih, dan menjadi lebih baik, Anda adalah seorang pemimpin."
    },
    {
      "author": "John Ruskin",
      "quotes": "Saya yakin, ujian pertama bagi orang besar ialah kerendahan hati."
    },
    {
      "author": "John Ruskin",
      "quotes": "Penghargaan tertinggi untuk kerja keras seseorang bukanlah apa yang ia hasilkan, tapi bagaimana ia berkembang karenanya."
    },
    {
      "author": "John Ruskin",
      "quotes": "Penghargaan tertinggi untuk kerja keras seseorang bukanlah apa yang ia hasilkan, tetapi bagaimana ia berkembang karenanya."
    },
    {
      "author": "John Wolfgang",
      "quotes": "Perbuatan-perbuatan salah adalah biasa bagi manusia, tetapi perbuatan pura-pura itulah sebenarnya yang menimbulkan permusuhan dan pengkhianatan."
    },
    {
      "author": "Joseph Addison",
      "quotes": "Rahmat sering datang kepada kita dalam bentuk kesakitan, kehilangan dan kekecewaan; tetapi kalau kita sabar, kita segera akan melihat bentuk aslinya."
    },
    {
      "author": "Julia Roberts",
      "quotes": "Cinta sejati tidak datang kepadamu, tetapi harus datang dari dalam dirimu."
    },
    {
      "author": "Junius",
      "quotes": "Integritas seseorang diukur dengan tingkah lakunya bukan profesinya."
    },
    {
      "author": "Kahlil Gibran",
      "quotes": "Kita berdoa kalau kesusahan dan membutuhkan sesuatu, mestinya kita juga berdoa dalam kegembiraan besar dan saat rezeki melimpah."
    },
    {
      "author": "Kahlil Gibran",
      "quotes": "Untuk memahami hati dan pikiran seseorang, jangan lihat apa yang sudah dia capai, tapi lihat apa yang dia cita-citakan."
    },
    {
      "author": "Keri Russel",
      "quotes": "Kadang kala, justru keputusan kecil yang akan mampu merubah hidup kita selamanya."
    },
    {
      "author": "Knute Rockne",
      "quotes": "Apabila perjalanan menjadi sulit, orang ulet akan berjalan terus."
    },
    {
      "author": "Kong Hu Cu",
      "quotes": "Orang yang berbudi tinggi selalu berpedoman pada keadilan dan selalu berusaha menjalankan kewajiban."
    },
    {
      "author": "Konrad Adenauer",
      "quotes": "Kita semua hidup di bawah langit yang sama, tetapi tidak semua orang punya cakrawala yang sama."
    },
    {
      "author": "Kung Fu-Tze",
      "quotes": "Ia yang bijak akan merasa malu, jika kata-katanya lebih baik daripada tindakannya."
    },
    {
      "author": "Lao Tzu",
      "quotes": "Saat sadar bahwa kau tidak kekurangan suatu apa pun, seisi dunia menjadi milikku."
    },
    {
      "author": "Lao Tzu",
      "quotes": "Saat sadar bahwa kau tidak kekurangan suatu apa pun, seisi dunia menjadi milikmu."
    },
    {
      "author": "Les Brown",
      "quotes": "Terima tanggung jawab untuk diri Anda sendiri. Sadari bahwa hanya Anda sendiri, bukan orang lain, yang bisa membuat Anda pergi ke tempat yang Anda inginkan."
    },
    {
      "author": "Louis Gittner",
      "quotes": "Meski yang kita hadapi adalah jalan buntu, namun cinta akan membangun jalan layang di atasnya."
    },
    {
      "author": "Louis Pasteur",
      "quotes": "Tahukah Anda rahasia sukses saya dalam mencapai tujuan? Cuma keuletan, tak lebih dan tak kurang."
    },
    {
      "author": "Mahatma Gandhi",
      "quotes": "Kepuasan terletak pada usaha, bukan pada hasil. Berusaha dengan keras adalah kemenangan yang hakiki."
    },
    {
      "author": "Marcel Ayme",
      "quotes": "Kerendahan hati merupakan ruang tunggu bagi kesempurnaan."
    },
    {
      "author": "Maria Sharapova",
      "quotes": "Saya belajar banyak dari kekalahan. Dan kekalahan-kekalahan itu, membuat saya semakin tabah."
    },
    {
      "author": "Mark Cuban",
      "quotes": "Buatlah usaha Anda berhasil dengan satu-satunya cara: kerja keras!."
    },
    {
      "author": "Mark Twain",
      "quotes": "Kebaikan adalah bahasa yang dapat didengar si tuli dan bisa dilihat si buta."
    },
    {
      "author": "Marsha Sinetar",
      "quotes": "Lakukan apa yang Anda senangi, uang akan mengikuti."
    },
    {
      "author": "Martin Luther King",
      "quotes": "Tak ada waktu yang tidak tepat untuk melakukan sesuatu yang benar."
    },
    {
      "author": "Mary McCarthy",
      "quotes": "Kendatipun Anda berada di jalur yang tepat, Anda akan tetap terkejar jika hanya duduk-duduk saja disana."
    },
    {
      "author": "Maxim Gorky",
      "quotes": "Kebahagiaan selalu tampak kecil saat berada dalam genggaman. Tapi coba lepaskan dan Anda akan langsung tahu, betapa besar dan berhargannya kebahagiaan."
    },
    {
      "author": "Mery Hemingway",
      "quotes": "Latih diri Anda untuk tidak khawatir. Kekhawatiran tak pernah memperbaiki apa-apa."
    },
    {
      "author": "Michael Drury",
      "quotes": "Kematangan bukanlah suatu keadaan yang dicapai dengan usia. Dia merupakan perkembangan dari cinta, belajar, membaca dan berpikir hingga menghasilkan kemampuan."
    },
    {
      "author": "Michael Pritchard",
      "quotes": "Anda berhenti tertawa bukan karena bertambah tua. Sebaliknya Anda bertambah tua justru karena berhenti tertawa."
    },
    {
      "author": "Miguel de Cervantes",
      "quotes": "Pepatah adalah kalimat singkat berdasarkan pengalaman panjang."
    },
    {
      "author": "Miguel de Unamuno",
      "quotes": "Tidak dicintai orang lain memang menyedihkan, tapi lebih menyedihkan lagi kalau tidak bisa mencintai orang lain."
    },
    {
      "author": "N. H. Casson",
      "quotes": "Kemiskinan jiwa lebih mengerikan daripada kemiskinan jasmani atau materi."
    },
    {
      "author": "Natalie Portman",
      "quotes": "Anda belum bisa dibilang kaya sampai Anda memiliki sesuatu yang tidak dapat dibeli uang."
    },
    {
      "author": "Nelson Mandela",
      "quotes": "Pendidikan adalah senjata paling ampuh dimana kau dapat menggunakannya untuk merubah dunia."
    },
    {
      "author": "Norman Peale",
      "quotes": "Campakanlah jauh-jauh pikiran murung dan kesal itu, lalu bangkitkanlah."
    },
    {
      "author": "Nunse",
      "quotes": "Bukanlah yang kuat, tetapi yang uletlah yang menjadikan mereka manusia yang besar."
    },
    {
      "author": "O. S. Marden",
      "quotes": "Kemajuan adalah hasil dari memusatkan seluruh kekuatan jiwa dan pikiran pada cita-cita yang dituju."
    },
    {
      "author": "Oliver W. Holmes",
      "quotes": "Semakin lama kita hidup, semakin kita menemukan bahwa kita mirip dengan orang lain."
    },
    {
      "author": "Oprah Winfrey",
      "quotes": "Melakukan yang terbaik pada saat ini akan menempatkan Anda ke tempat terbaik pada saat berikutnya."
    },
    {
      "author": "Oscar Wilde",
      "quotes": "Jika seseorang menyatakan kebenaran, dia yakin; cepat atau lambat; akan mendapatkannya."
    },
    {
      "author": "Pablo Picasso",
      "quotes": "Bila semangat Anda menurun, lakukanlah sesuatu. Kalau Anda telah melakukan sesuatu keadaan tidak berubah, lakukanlah sesuatu yang berbeda."
    },
    {
      "author": "Paul Galvin",
      "quotes": "Jangan takut dengan kesalahan. Kebijaksanaan biasanya lahir dari kesalahan."
    },
    {
      "author": "Paul Harvey",
      "quotes": "Saya tidak pernah melihat suatu monumen didirikan bagi orang pesimis."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Beranilah menyadari kesalahan dan mulai lagi."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Benar jadi berani."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Orang yang bertanya, bodoh dalam 5 menit. Dan orang yang tidak bertanya akan tetap bodoh untuk selamanya."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Bila saya mendengar, saya akan lupa. Setelah melihat saya bisa mengerti. Dan setelah mengerjakan, barulah saya bisa memahami."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Orang yang tersenyum selalu lebih kuat dari orang yang marah."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Orang yang memindahkan gunung memulai dengan memindahkan batu-batu kecil."
    },
    {
      "author": "Pepatah Inggris",
      "quotes": "Orang yang mencari masalah akan selalu mendapatkannya."
    },
    {
      "author": "Pepatah Inggriss",
      "quotes": "Keterampilan dan keyakinan merupakan pasukan bersenjata yang tidak dapat dikalahkan."
    },
    {
      "author": "Pepatah Jepang",
      "quotes": "Sebatang anak panah mudah dipatahkan, tetapi tidak demikian dengan sepuluh anak panah yang disatukan."
    },
    {
      "author": "Pepatah Jepang",
      "quotes": "Visi tanpa aksi adalah mimpi di siang bolong. Aksi tanpa visi adalah mimpi buruk."
    },
    {
      "author": "Pepatah Jerman",
      "quotes": "Orang yang tak pernah mencicipi pahit tak akan tahu apa itu manis."
    },
    {
      "author": "Pepatah Latin",
      "quotes": "Dengan belajar Anda bisa mengajar. Dengan mengajar, Anda belajar."
    },
    {
      "author": "Pepatah Persia",
      "quotes": "Saya menangis karena tak punya sepatu, sampai saya melihat orang tak punya kaki."
    },
    {
      "author": "Pepatah Roma",
      "quotes": "Kesengsaraan menghasilkan ketekunan. Ketekunan menghasilkan watak, dan watak menghasilkan harapan."
    },
    {
      "author": "Pepatah Skotlandia",
      "quotes": "Bila kemauan siap, kaki menjadi ringan."
    },
    {
      "author": "Pepatah Spanyol",
      "quotes": "Mengenal diri sendiri adalah awal dari perbaikan diri."
    },
    {
      "author": "Pepatah Tibet",
      "quotes": "Jangan meremehkan raja yang picik, seperti halnya jangan meremehkan sungai yang kecil."
    },
    {
      "author": "Pepatah Tibet",
      "quotes": "Apabila seseorang mengajarkan sesuatu, dia sendiri harus melaksanakan ajaran itu."
    },
    {
      "author": "Peter Sinclair",
      "quotes": "Kehidupan yang hebat adalah kulminasi dari pemikiran-pemikiran hebat disertai dengan tindakan-tindakan hebat."
    },
    {
      "author": "Phyllis Bottome",
      "quotes": "Ada dua cara mengatasi kesulitan, Anda mengubah kesulitan-kesulitan atau Anda mengubah diri sendiri untuk mengatasinya."
    },
    {
      "author": "Plato",
      "quotes": "Orang bijak berbicara karena mereka mempunyai sesuatu untuk dikatakan, orang bodoh berbicara karena mereka ingin mengatakan sesuatu."
    },
    {
      "author": "Plato",
      "quotes": "Orang bijak berbicara karena ia memiliki sesuatu untuk dikatakan. Orang bodoh berbicara karena ia atau dia harus mengatakan sesuatu."
    },
    {
      "author": "Plato",
      "quotes": "Berbuat tidak adil lebih memalukan daripada menderita ketidakadilan."
    },
    {
      "author": "Plato",
      "quotes": "Siapa yang tidak bisa memimpin dirinya sendiri, tidak akan bisa memimpin orang."
    },
    {
      "author": "Plautus",
      "quotes": "Kesabaran adalah obat terbaik untuk semua masalah."
    },
    {
      "author": "Plautus",
      "quotes": "Jauh lebih mudah memulai secara baik daripada mengakhiri secara baik."
    },
    {
      "author": "Pliny The Elder",
      "quotes": "Harapan adalah tiang yang menyangga dunia."
    },
    {
      "author": "R. A. Kartini",
      "quotes": "Kemenangan gemilang tidak diperoleh dari medan pertempuran saja, tetapi sering diperoleh dari hati."
    },
    {
      "author": "R. Browning",
      "quotes": "kita jatuh untuk bangun, berhenti untuk berjalan, dan tidur untuk bangun."
    },
    {
      "author": "R. W. Shephred",
      "quotes": "Kamu harus menghadapi depresi, sama seperti kamu menghadapi seekor harimau."
    },
    {
      "author": "R.H. Grant",
      "quotes": "Jika Anda mempekerjakan orang-orang yang lebih pintar dari Anda, Anda membuktikan Anda lebih pintar dari mereka."
    },
    {
      "author": "Rabbi Schachtel",
      "quotes": "Kebahagiaan bukanlah memiliki apa yang kita inginkan, melainkan menginginkan apa yang kita miliki."
    },
    {
      "author": "Ralph W. Emerson",
      "quotes": "Satu ons aksi jauh lebih berharga daripada satu ton teori."
    },
    {
      "author": "Ralph W. Emerson",
      "quotes": "Seseorang itu sukses besar jika dia sadar, kegagalan-kegagalannya adalah persiapan untuk kemenangan-kemenangannya."
    },
    {
      "author": "Ralph Waldo Emerson",
      "quotes": "Kedamaian tidak terdapat di dunia luar, melainkan terdapat dalam jiwa manusia itu sendiri."
    },
    {
      "author": "Ralph Waldo Emerson",
      "quotes": "Percayalah kepada orang lain, dan mereka akan tulus kepada Anda. Perlakukan mereka seperti orang besar dan mereka akan memperlihatkan dirinya sebagai orang besar."
    },
    {
      "author": "Rene Descartes",
      "quotes": "Tidak cukup hanya punya otak yang baik. Yang penting adalah menggunakannya secara baik."
    },
    {
      "author": "Richard Bach",
      "quotes": "Tanyakan pada diri sendiri rahasia sukses. Dengarkan jawaban Anda, dan lakukan."
    },
    {
      "author": "Richard C. Miller",
      "quotes": "Jika rumput tetangga lebih hijau, bersyukurlah Anda masih bisa berpijak di tanah untuk melihatnya."
    },
    {
      "author": "Robert Collier",
      "quotes": "Kesempatan Anda untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan Anda pada diri sendiri."
    },
    {
      "author": "Robert F. Kennedy",
      "quotes": "Kemajuan merupakan kata-kata merdu, tetapi perubahanlah penggerakknya dan perubahan mempunyai banyak musuh."
    },
    {
      "author": "Robert Frost",
      "quotes": "Dua jalan dipisahkan pohon, dan saya mengambil jalan yang jarang ditempuh orang. Dan itulah yang membuat perubahan."
    },
    {
      "author": "Robert Frost",
      "quotes": "Alasan mengapa kecemasan membunuh lebih banyak orang dibanding kerja adalah, lebih banyak orang cemas dibanding bekerja."
    },
    {
      "author": "Robert G. Ingersoll",
      "quotes": "Sedikit orang kaya yang memiliki harta. Kebanyakan harta yang memiliki mereka."
    },
    {
      "author": "Robert Half",
      "quotes": "Ketekunan bisa membuat yang tidak mungkin jadi mungkin, membuat kemungkinan jadi kemungkinan besar, dan kemungkinan besar menjadi pasti."
    },
    {
      "author": "Robert S. Lynd",
      "quotes": "Hanya ikan yang bodoh yang bisa dua kali kena pancing dengan umpan yang sama."
    },
    {
      "author": "Robert Von Hartman",
      "quotes": "Ambisi seperti air laut, semakin banyak orang meminumnya semakin orang menjadi haus."
    },
    {
      "author": "Robinsori",
      "quotes": "Cemas dan ketakutan adalah akibat kebodohan dan keraguan."
    },
    {
      "author": "Romand Rolland",
      "quotes": "Pahlawan adalah seseorang yang melakukan apa yang mampu dia lakukan."
    },
    {
      "author": "Roosevelt",
      "quotes": "Jika Anda ingin menjadi orang besar, janganlah suka beromong besar, kerjakanlah hal-hal yang kecil dahulu."
    },
    {
      "author": "Ross Cooper",
      "quotes": "Satu-satunya cara untuk mengubah hidup kita adalah dengan mengubah pikiran kita."
    },
    {
      "author": "Ruth P. Freedman",
      "quotes": "Perubahan terjadi ketika seseorang menjadi dirinya sendiri, bukan ketika ia mencoba menjadi orang lain."
    },
    {
      "author": "Salanter Lipkin",
      "quotes": "Perbaiki diri Anda, tetapi jangan jatuhkan orang lain."
    },
    {
      "author": "Samuel Smiles",
      "quotes": "Cara tercepat untuk menuntaskan banyak hal adalah dengan menyelesaikannya satu demi satu."
    },
    {
      "author": "Satya Sai Baba",
      "quotes": "Dua hal yang harus dilupakan, kebaikan yang telah kita lakukan kepada orang lain dan kesalahan orang lain kepada kita."
    },
    {
      "author": "Scott Fitzgerald",
      "quotes": "Ingatlah, jika Anda menutup mulut sebenarnya Anda telah melakukan pilihan."
    },
    {
      "author": "Seneca",
      "quotes": "Hati manusia tidak akan pernah tenteram sebelum berdamai dengan diri sendiri."
    },
    {
      "author": "Seneca",
      "quotes": "Hidup berarti berjuang. Hidup nikmat tanpa badai topan adalah laksana laut yang mati."
    },
    {
      "author": "Shackespeare",
      "quotes": "Kesedihan hanya bisa ditanggulangi oleh orang yang mengalaminya sendiri."
    },
    {
      "author": "Shirley Briggs",
      "quotes": "Beranikan diri untuk menjadi dirimu sendiri, karena kita bisa melakukan hal itu lebih baik daripada orang lain."
    },
    {
      "author": "Soe Hok Gie",
      "quotes": "Lebih baik diasingkan daripada menyerah kepada kemunafikan."
    },
    {
      "author": "Soemantri Metodipuro",
      "quotes": "Langkah pertama untuk memilih keyakinan pada diri sendiri adalah mengenal diri kita sendiri."
    },
    {
      "author": "Sophocles",
      "quotes": "Bila seseorang kehilangan segala sumber kebahagiaan, dia tidak lagi hidup, tapi mayat yang bernafas."
    },
    {
      "author": "St. Jerome",
      "quotes": "Baik, lebih baik, terbaik. Jangan pernah berhenti sampai baik menjadi lebih baik, dan lebih baik menjadi terbaik."
    },
    {
      "author": "Stephen R. Covey",
      "quotes": "Motivasi adalah api dari dalam. Jika orang lain mencoba menyalakannya untuk Anda, kemungkinan apinya hanya menyala sebentar."
    },
    {
      "author": "Steve Jobs",
      "quotes": "Saya bangga, baik pada hal yang tidak kami lakukan maupun pada hal yang kami lakukan."
    },
    {
      "author": "Sujiwo Tejo",
      "quotes": "Cinta tak perlu pengorbanan. Pada saat kau merasa berkorban, pada saat itu cintamu mulai pudar."
    },
    {
      "author": "Sydney Harris",
      "quotes": "Ancaman nyata sebenarnya bukan pada saat komputer mulai bisa berpikir seperti manusia, tetapi ketika manusia mulai berpikir seperti komputer."
    },
    {
      "author": "Theodore Rosevelt",
      "quotes": "Lakukan apa yang dapat Anda lakukan dengan apa yang Anda miliki dan tempat Anda berada."
    },
    {
      "author": "Thomas Alva Edison",
      "quotes": "Banyak kegagalan dalam ini dikarenakan orang-orang tidak menyadari betapa dekatnya mereka dengan keberhasilan saat mereka menyerah."
    },
    {
      "author": "Thomas Carlyle",
      "quotes": "Pergilah sejauh mungkin yang bisa Anda lihat dan Anda akan bisa melihat lebih jauh."
    },
    {
      "author": "Thomas Fuller",
      "quotes": "Orang yang tidak bisa memaafkan orang lain sama saja dengan orang yang memutuskan jembatan yang harus dilaluinya, karena semua orang perlu dimaafkan."
    },
    {
      "author": "Thomas Fuller",
      "quotes": "Menyaksikan adalah mempercayai, tapi merasakan adalah kebenaran."
    },
    {
      "author": "Thomas Jefferson",
      "quotes": "Dalam hal prinsip, usahakan kukuh seperti batu karang. Dalam hal selera, coba berenang mengikuti arus."
    },
    {
      "author": "Tung Desem Waringin",
      "quotes": "Setiap badai pasti berlalu dan saya akan tumbuh semakin kuat."
    },
    {
      "author": "Tyler Durden",
      "quotes": "Setelah kehilangan segalanya, barulah kita bebas melakukan apa saja."
    },
    {
      "author": "Umar bin Khattab",
      "quotes": "Raihlah ilmu dan untuk meraih ilmu belajarlah untuk tenang dan sabar."
    },
    {
      "author": "Vicosta Efran",
      "quotes": "Hiduplah seperti lilin yang menerangi orang lain. Jangan hidup seperti duri yang mencucuk diri dan menyakiti orang lain."
    },
    {
      "author": "Victor Hugo",
      "quotes": "Kesedihan adalah buah. Tuhan tak pernah membiarkannya tumbuh dicabang yang terlalu lemah untuk menanggungnya."
    },
    {
      "author": "Victor Hugo",
      "quotes": "Kebahagian tertinggi dalam kehidupan adalah kepastian bahwa Anda dicintai apa adanya, atau lebih tepatnya dicintai walaupun Anda seperti diri Anda adanya."
    },
    {
      "author": "Victor Hugo",
      "quotes": "Masalahnya bukan kurangnya tenaga, tetapi kurangnya daya kemauan."
    },
    {
      "author": "Vince Lambardi",
      "quotes": "Kemenangan bukanlah segala-galanya, tetapi perjuangan untuk menang adalah segala-galanya."
    },
    {
      "author": "Virginia Wolf",
      "quotes": "Jika Anda tak bisa mengatakan hal yang benar dari diri Anda, maka Anda pun tak bisa mengatakan hal yang benar dari orang lain."
    },
    {
      "author": "W. Camden",
      "quotes": "Burung yang terbang pagi akan memperoleh cacing paling banyak."
    },
    {
      "author": "Walt Disney",
      "quotes": "Cara untuk memulai adalah berhenti berbicara dan mulai lakukan sesuatu."
    },
    {
      "author": "Walter Cronkite",
      "quotes": "Sukses akan lebih permanen jika Anda meraihnya tanpa menghancurkan prinsip-prinsip Anda."
    },
    {
      "author": "Warren Buffett",
      "quotes": "Dari dulu saya selalu yakin saya akan kaya. Saya kira saya tak pernah meragukannya, satu menit pun."
    },
    {
      "author": "Whitney Young",
      "quotes": "Lebih baik menyiapkan diri untuk sebuah peluang dan tidak mendapatkannya daripada punya peluang dan tidak menyiapkan diri."
    },
    {
      "author": "William A. W.",
      "quotes": "Satu-satunya yang bisa menghalangi kita adalah keyakinan yang salah dan sikap yang negatif."
    },
    {
      "author": "William Allen White",
      "quotes": "Saya tidak takut pada hari esok karena saya sudah melihat hari kemarin dan saya mencintai hari ini."
    },
    {
      "author": "William Arthur",
      "quotes": "Guru yang biasa-biasa, berbicara. Guru yang bagus, menerangkan. Guru yang hebat, mendemonstrasikan. Guru yang agung, memberi inspirasi."
    },
    {
      "author": "William F. Halsey",
      "quotes": "Semua masalah menjadi lebih kecil jika Anda tidak mengelaknya, tapi menghadapinya."
    },
    {
      "author": "William J. Johnston",
      "quotes": "Perubahan yang paling bermakna dalam hidup adalah perubahan sikap. Sikap yang benar akan menghasilkan tindakan yang benar."
    },
    {
      "author": "William James",
      "quotes": "Jika Anda harus membuat pilihan dan Anda tidak melakukannya, itu saja sudah pilihan."
    },
    {
      "author": "William James",
      "quotes": "Percaya bahwa hidup itu berharga, dan kepercayaan Anda akan membantu menciptakan hidup yang berharga."
    },
    {
      "author": "William Ralph Inge",
      "quotes": "Kuatir sama seperti membayar bunga untuk uang yang mungkin tak pernah Anda pinjam."
    },
    {
      "author": "William Shakespeare",
      "quotes": "Jangan sering menyalakan api kebencian terhadap musuhmu, karena nanti akan membakar dirimu sendiri."
    },
    {
      "author": "William Shakespeare",
      "quotes": "Bila kamu jujur kepada dirimu sendiri, bagai siang pasti berganti malam, kamu takkan pernah berdusta kepada orang lain."
    },
    {
      "author": "William Shakespeare",
      "quotes": "Kutu yang berani adalah kutu yang bisa berani mendapatkan sarapannya pada bibir seekor singa."
    },
    {
      "author": "Winston Churchill",
      "quotes": "Kita menyambung hidup dengan apa yang kita peroleh, tapi kita menghadirkan kehidupkan dengan apa yang kita berikan."
    },
    {
      "author": "Wolfgang von Gothe",
      "quotes": "Pengetahuan tidaklah cukup, kita harus mengamalkannya. Niat tidak cukup, kita harus melakukannya."
    },
    {
      "author": "Zachary Scott",
      "quotes": "Ketika Anda bertambah tua, Anda akan menemukan satu-satunya hal yang Anda sesali adalah hal-hal yang tidak Anda lakukan."
    },
    {
      "author": "Zig Zaglar",
      "quotes": "Batu fondasi untuk sukses yang seimbang adalah kejujuran, watak, integritas, iman, cinta dan kesetiaan."
    },
    {
      "author": "Zig Zaglar",
      "quotes": "Kebanyakan orang gagal meraih cita-citanya bukan karena mereka tidak mampu, tetapi karena tidak berkomitmen."
    },
    {
      "author": "Zig Zaglar",
      "quotes": "Kita tidak harus hebat saat memulai, tapi kita harus memulai untuk menjadi hebat."
    }
  ]
  
    var tes = quo[Math.floor(Math.random() * quo.length)]
             res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 quote: `${tes.quotes}`
             })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/random/quotesad', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	
      if(listkey.includes(apikeyInput)){
             var quote = 
[
        "Aku berharap kamu menjadi pelangi yang muncul setelah hujan, tapi nyatanya kamu malah pergi bahkan sebelum hujan datang",
        "Kau tau perbedaan aku dan kamu? Kau yang suka melukai dan aku yang suka memaklumi.",
        "Sebelum kau sedingin hamparan hujan deras. Kau pernah sehangat hembusan nafas.",
        "Pernah berjuang untuk sebuah senyuman, hingga akhirnya tinggal kenangan. Pernah menjadi bayangan, lalu hilang terbawa angan",
        "Menyapamu, aku lupa diri. Diabaikanmu, aku tahu diri. Hati bilang gas pol. Otak bilang rem.- Fiersa Besari",
        "Kau bisa melakukan kesalahan sama berulang kali. Bisa meminta maaf berulang kali. Tapi, seseorang belum tentu bisa memaafkanmu berulang kali. - Fiersa Besari",
        "Kalau membunuh perasaan sendiri kena pidana, sudah sejak lama saya dipenjara. - Fiersa Besari",
        "Di sudut rasa bersalah yang kusesali, aku betul-betul menunggumu kembali.- Wira Nagara",
        "Baru kusesali setelah ia pergi, dan menginginkannya kembali setelah ia menemukan pujaan hati",
        "Kita adalah sisa-sisa kepastian yang tak dipastikan",
        "Aku tahu, hidupmu memang bukan tentang aku saja. Tapi mengertilah, aku cemburu jika kamu terlalu asik dengan yang lain dibanding aku",
        "Cemburu adalah cinta yang sedang khawatir. Benci adalah cinta yang pernah tersakiti. Tapi semua itu dasarnya tetap satu yaitu cinta. - Cak Nun",
        "Terlalu sayang pangkal kehilangan. - Rintik Sedu",
        "Bertahan tapi tak ditahan. Menunggu tapi tak ditunggu.",
        "Ku memberimu yang terbaik, mengapa Ia yang mendapatkan yang terbaik darimu.- Fiersa Besari",
        "Tapi...yang kamu kodein juga lagi kodein orang lain.- Rintik Sedu",
        "Mungkin akhirnya kita tak akan bersama. Setidaknya, pernah saling berbagi cerita. Tentang lelahmu mengikuti dia. Tentang sedihku mendengar sedihmu sepanjang usia. - Boy Candra",
        "Saya tetap sama. Masih sayang kamu. Bedanya, rasa sayang itu hadir dalam bentuk bahagia melihatmu dengan yang lain. Mengertilah, teguhkan hatimu padanya.- Boy Candra",
        "Tak ada hubungan tanpa pertengkaran. Hanya saja, ada yang berhasil meredam dan ada yang membakar hangus",
        "Dulu saling sapa. Sekarang masih saling sapa. Bedanya, dulu kau sendiri. Sekarang di sebelah dia kau berdiri. Hai, katamu senang. Hai juga, jawabku berusaha tenang.  Boy Candra",
        "Kenapa harus membawa nama lain untuk hal-hal tentang kita? - Wira Nagara",
        "Harus sampai berapa dini hari hingga aku tak merasa berjuang sendiri? - Wira Nagara",
        "Kau tak sungguh. Hanya aku yang bertaruh. Kau tak ikut bertarung. Kau menanti saja, melihat aku yang terluka.- Boy Candra",
        "Kita tidak dirasuki apa pun. Hanya pemilik harapan yang tak pernah siap akan hal-hal di luar ekspektasi, bahagia yang akhirnya kembali ditangisi",
        "Jangan sengaja pergi agar dicari. Jangan sengaja lari agar dikejar. Berjuang tak sebercanda itu.- Sudjiwo Tejo",
        "Tukeran hati yuk. Biar kamu bisa ngerasain apa yang aku rasain",
        "Mencintaimu adalah hal yang paling mudah untuk aku lakukan, tetapi untuk mendapatkan cintamu itu lah hal yang paling sulit untuk aku lakukan",
        "Berhentilah memakerkan seseorang yang ternyata adalah jodoh orang lain. Kau hanya sekadar tukang temani makan, temani jalan, dan nutupi kekurangan uang jajan - Boy Candra",
        "Aku pernah mencintaimu hingga hancur lebur hingga jadi humus dan tumbuh dalam bentuk lain. Itulah kenapa sekarang kamu asing bagiku. Aku tidak mengenali lagi aroma yang kau bawa. Kita tak bisa lagi merawat batang pohon yang sama.- Boy Candra",
        "Aku adalah seseorang yang mencintaimu secara utuh meski dicintai secara separuh",
        "Jika perempuan dan laki-laki bersahabat, ujian terberatnya adalah perasaan - Rintik Sedu",
        "Dulu 'jangan pilih-pilih teman' sekarang, 'jangan bawa perasaan ke dalam pertemanan- Rintik Sedu",
        "Kalau cuma ingin mengusir sepi, mari bertukar cerita saja. Jangan sampai mengajak bertukar hati.",
        "Karena terlalu nyaman, aku lupa bahwa kita hanya sebatas teman.",
        "Ada rindu yang tak sempat tersalurkan. Ada kebersamaan yang hilang tanpa sempat ada hubungan",
        "Hindari pertemanan rasa pacaran. Sebab seerat apapun perasaannya, ujung-ujungnya tetap cuma teman.",
        "Dia dekat denganmu, tapi belum tentu mendekatimu. Dia bahagia bersamamu, tapi belum tentu jatuh cintanya denganmu. Bawa perasaan boleh, asal tahu waktu dan tempatnya",
        "Sering ngobrol, sering curhat, lalu nyaman itu bukan berarti sayang. Hati-hati dengan jebakan friend-zone",
        "Bila kau butuh telinga tuk mendengar. Bahu tuk bersandar. Raga tuk berlindung. Akulah orang yang selalu ada untukmu, walau hanya sebatas teman",
        "Beberapa orang diciptakan menjadi terlalu dekat untuk dipandangi namun terlalu jauh untuk digapai.",
        "Akan ada saatnya di mana percayamu dikecewakan. Lalu hatimu dengan sengaja dipatahkan. Dan saat itu kamu akan tahu apa maksud dari keikhlasan"
]
            var quotes = quote[Math.floor(Math.random() * quote.length)]
             res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 quote: `${quotes}`
           })
} else {
res.sendFile(invalidKey)
}
})

router.get('/random/quotesanime', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	
      if(listkey.includes(apikeyInput)){
       
       var anime = 
       [
    

         
         "Cinta tak pernah salah dan cinta tak pernah menyakiti. - Belle (Beauty and the Beast)",
    


         
         "Manusia pasti akan berubah selama mereka hidup, belajarlah untuk menghargai dirimu sendiri. - Fujiwara (Code Breaker)",
    

     
         
         "Cinta itu dapat mengubah seseorang menjadi baik atau buruk. - Misawa (Tonari no Kaibutsu-Kun)",
    

     
         
         "Berbohong itu adalah awal dari kejahatan. - Yamamoto (Katekyo Hitman Reborn)",
    

     
         
         "Aku lebih baik percaya dan menyesal daripada ragu tapi menyesal. - Kirito (Sword Art Online)",
    

     
         
         "Cinta harus berasal dari hati. Maka jika tidak dari hati, jangan pernah berucap bahwa kamu menCintai. -Faye Valentine ~ Cowboy Bebop",
    

     
         
         "Kupikir seorang gadis terlihat lucu saat dia sedang senang ataupun sedih. - Youto (Hentai Ouji to Warawanai Neko)",
    

     
         
         "Yang lebih kuat bertanggung jawab pada yg lemah. - Maou (Hataraku Maou-sama)",
    

     
         
         "Jika aku bisa berguna, matipun tak masalah. - Armin (Shingeki no Kyojin)",
    

     
         
         "Ada Teori bahwa hati adalah yg menentukan kecepatan proses berpikir manusia. - Kuroyuki (Accel World)",
    

     
         
         "Aku tidak suka hubungan yg tidak jelas. - Senjougahara (Bakemonogatari)",
    

     
         
         "Hanya orang bodoh yang mati demi Cinta, aku akan bertahan hidup untuk Cinta. -Ryo Saeba ~ City Hunter]",
    

     
         
         "Laki-laki yg baik itu terbentuk karna ada perempuan yg baik di sebelahnya. - Hotaru (Kagetora)",
    

     
         
         "Saat aku mulai mencintaimu, saat itulah aku mulai belajar mencintai diriku sendiri. (Charming Junkie)",
    

     
         
         "Apa yg indah bukanlah dunia, tapi matamu yg mempunyai keindahan itu. - Kuran (Vampire Knight)",
    

     
         
         "Cinta adalah sesuatu yang harusnya kau bagikan ke semua orang. -Yuuri Shibuya ~ Kyou kara Maou!]",
    

     
         
         "Lebih baik sendiri, daripada bersama seseorang yang membuatmu merasa kesepian. -Mira",
    

     
         
         "Aku selalu berpikir Cinta itu artinya ingin selalu bersama seseorang, yg sebenarnya sangat berharga dalam hidupku. - Itsuki (Spas-Pa)",
    

     
         
         "Menyakitkan saat seseorang yang kamu perjuangkan tidak kembali memperjuangkanmu. -Kaito Daimon ~ Phi Brain",
    


         
         "Hidup terlalu singkat jika terus mengenang Cintamu di masa lalu, disaat kamu bisa menciptakan cerita baru dengan yang menCintaimu. -Dio",
   


         
         "Orang yg berpengetahuan luas selalu ingin membagikan pengetahuannya. - Profesor (Gash Bell)",
   


          
          "Kamu tidak bisa menilai buku hanya dari sampulnya. - Naito (Persona 4 The Animation)",
   


          
          "Betapa teganya seseorang yang membangkitkan perasaan Cinta tanpa membangkitkan kesungguhan untuk menCintainya. -Momo",
   


          
          "Seseorang yang patah hati bukanlah menjadi sendiri, tetapi menjadi orang asing untuk seseorang yang pernah kamu Cintai. -Mona",
   


          
          "Cewek itu seharusnya lembut dan baik, dan bisa menyembuhkan luka dihati. - Yoshii (Baka to Test)",
   


          
          "Jika udah ada satu yg tercepat, tidak diperlukan lagi yg kedua. - Takaba (Let's and Go)",
   


          
          "Cinta yg sejati adalah ketika kamu buta akan sekelilingmu. - Eikichi (GTO)",
   


          
          "Mencintai itu mudah, yg sulit adalah menerimanya. - Yoh (Shaman King)",
   


          
          "Mendo'akan orang yg kita cintai agar selalu bahagia, itulah arti cinta sejati. - Hanasaki (Wedding Peach)",
   


          
          "Manusia akan menjadi lebih berarti ketika mereka menjalani hidupnya yg terbatas, bersama dengan orang yg mereka cintai. - Alviss (MAR)",
   


          
          "Kamu tak bisa maju jika terus melihat kebelakang. - Guy (Tales of the Abyss)",
   


          
          "Lelaki itu punya impian yg tidak mungkin dimengerti perempuan. - Kayoko (Bakuman)",
   

         
          
          "Tidak peduli apa yg kita lihat. Agar orang didekat kita tetap bahagia, kita harus tersenyum. - Aria (Katekyo Hitman Reborn)",
   


          
          "Bukan menang atau kalah, tapi kesolidaritasan kita lah yg paling penting. - Mamoru (Inazuma Eleven)",
   


          
          "Kita banyak membuang waktu mencari kekasih yg sempurna dari pada menciptakan cinta yg sempurna. - BlackCat (Black Cat)",
   


          
          "Karena tau rasa kesepian, manusia akan menjadi lebih baik. Karena tau rasa sedih, manusia akan menjadi kuat. - Myuto (Princess Tutu)",
   


          
          "Jika kamu menCintai seseorang, jangan pernah membuat hatinya menangis meskipun hanya beberapa menit. -Novu]",
   


          
          "Saat kamu harus memilih satu cinta aja, pasti ada orang lain yg menangis. - Tsubame (Ai Kora)",
   


          
          "Seberapa banyak lagi cinta yg kamu butuhkan untuk menerima aku? - Masamune (Sekai Ichi Hatsukoi)"
   

]
         var anim = anime[Math.floor(Math.random() * anime.length)]
             res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 quote: `${anim}`
             
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/random/quotesmaker', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
      	
     const quotes = () => new Promise((resolve, reject) => {
                    const Arr = ["quotes indonesia", "quotes aesthetic"];
                    const query = Arr[Math.floor(Math.random() * (Arr.length))]
                    fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                        "headers": {
                            "accept": "application/json, text/javascript, */*, q=0.01",
                            "accept-language": "en-US,en;q=0.9",
                            "cache-control": "no-cache",
                            "pragma": "no-cache",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "sec-gpc": "1",
                            "x-app-version": "9a236a4",
                            "x-pinterest-appstate": "active",
                            "x-requested-with": "XMLHttpRequest"
                        },
                        "referrer": "https://www.pinterest.com/",
                        "referrerPolicy": "origin",
                        "body": null,
                        "method": "GET",
                        "mode": "cors"
                    }).then((res) => res.json())
                        .then((json) => {
                            const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                            resolve({
                                status: 200,
                                link: generatepin.images.orig.url
                            })
                        })
                })

        quotes()
         .then(async (data) => {
         	var hasil = await getBuffer(`${data.link}`)
       await fs.writeFileSync(__path + '/tmp/quotes.png', hasil)

         res.sendFile(__path + '/tmp/quotes.png')
    })
} else {
res.sendFile(invalidKey)
}
})

// ASUPAN FEATURES
router.get('/asupan/asupan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
     var asupan = JSON.parse(fs.readFileSync(__path +'/lib/utils/asupan.json'))
    var Asupan = asupan[Math.floor(Math.random() * asupan.length)]
    let hasil = Asupan.asupan
     var data = await fetch(hasil).then(v => v.buffer())
       await fs.writeFileSync(__path + '/tmp/asupan.mp4', data)

         res.sendFile(__path + '/tmp/asupan.mp4')
} else {
res.sendFile(invalidKey)
}
})

router.get('/asupan/santuy', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)

       if(listkey.includes(apikeyInput)){
       	
       var url = 
       [
"https://e.top4top.io/m_1930ns2zo0.mp4",
"https://k.top4top.io/m_1930j9i810.mp4",
"https://f.top4top.io/m_1930wtj580.mp4",
"https://d.top4top.io/m_1930a2isv0.mp4",
"https://e.top4top.io/m_1930wbgc41.mp4",
"https://f.top4top.io/m_1930urbj02.mp4",
"https://b.top4top.io/m_1930ceiqv0.mp4",
"https://i.top4top.io/m_1931a0z6o0.mp4",
"https://a.top4top.io/m_193190b500.mp4",
"https://b.top4top.io/m_1931dcixz1.mp4",
"https://g.top4top.io/m_19317gpjp0.mp4",
"https://i.top4top.io/m_1931cc22w1.mp4",
"https://j.top4top.io/m_1931xn6412.mp4",
"https://g.top4top.io/m_1931silxz0.mp4",
"https://h.top4top.io/m_1931as4mg1.mp4",
"https://i.top4top.io/m_1931p9j5v0.mp4",
"https://e.top4top.io/m_1931mgeuy0.mp4",
"https://f.top4top.io/m_1931lw9381.mp4",
"https://g.top4top.io/m_1931vm0dk2.mp4",
"https://h.top4top.io/m_1931fiv8x3.mp4",
"https://b.top4top.io/m_1931jm3dt0.mp4",
"https://e.top4top.io/m_1931i7yag1.mp4",
"https://f.top4top.io/m_1931dr5ya2.mp4",
"https://g.top4top.io/m_193172kpg3.mp4",
"https://h.top4top.io/m_1931j3b224.mp4",
"https://j.top4top.io/m_19317ykt25.mp4",
"https://k.top4top.io/m_1931o0vh16.mp4",
"https://l.top4top.io/m_1931ssfbn7.mp4",
"https://a.top4top.io/m_19318t7458.mp4",
"https://b.top4top.io/m_1931vhu759.mp4"
]
    
          var upan = url[Math.floor(Math.random() * url.length)]
          var data = await getBuffer(`${upan}`)
            await fs.writeFileSync(__path + '/tmp/asupansantuy.mp4', data)
            res.sendFile(__path + '/tmp/asupansantuy.mp4')
} else {
res.sendFile(invalidKey)
}
})

router.get('/asupan/ukhty', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)

       if(listkey.includes(apikeyInput)){
       	
       var url = 
 [
{"url":"https://e.top4top.io/m_1930ns2zo0.mp4"},
{"url":"https://k.top4top.io/m_1930j9i810.mp4"},
{"url":"https://f.top4top.io/m_1930wtj580.mp4"},
{"url":"https://d.top4top.io/m_1930a2isv0.mp4"},
{"url":"https://e.top4top.io/m_1930wbgc41.mp4"},
{"url":"https://f.top4top.io/m_1930urbj02.mp4"},
{"url":"https://b.top4top.io/m_1930ceiqv0.mp4"},
{"url":"https://i.top4top.io/m_1931a0z6o0.mp4"},
{"url":"https://a.top4top.io/m_193190b500.mp4"},
{"url":"https://b.top4top.io/m_1931dcixz1.mp4"},
{"url":"https://g.top4top.io/m_19317gpjp0.mp4"},
{"url":"https://i.top4top.io/m_1931cc22w1.mp4"},
{"url":"https://j.top4top.io/m_1931xn6412.mp4"},
{"url":"https://g.top4top.io/m_1931silxz0.mp4"},
{"url":"https://h.top4top.io/m_1931as4mg1.mp4"},
{"url":"https://i.top4top.io/m_1931p9j5v0.mp4"},
{"url":"https://e.top4top.io/m_1931mgeuy0.mp4"},
{"url":"https://f.top4top.io/m_1931lw9381.mp4"},
{"url":"https://g.top4top.io/m_1931vm0dk2.mp4"},
{"url":"https://h.top4top.io/m_1931fiv8x3.mp4"},
{"url":"https://b.top4top.io/m_1931jm3dt0.mp4"},
{"url":"https://e.top4top.io/m_1931i7yag1.mp4"},
{"url":"https://f.top4top.io/m_1931dr5ya2.mp4"},
{"url":"https://g.top4top.io/m_193172kpg3.mp4"},
{"url":"https://h.top4top.io/m_1931j3b224.mp4"},
{"url":"https://j.top4top.io/m_19317ykt25.mp4"},
{"url":"https://k.top4top.io/m_1931o0vh16.mp4"},
{"url":"https://l.top4top.io/m_1931ssfbn7.mp4"},
{"url":"https://a.top4top.io/m_19318t7458.mp4"},
{"url":"https://b.top4top.io/m_1931vhu759.mp4"}
]
    
          var upan = url[Math.floor(Math.random() * url.length)]
          var data = await getBuffer(`${upan.url}`)
            await fs.writeFileSync(__path + '/tmp/asupansantuy.mp4', data)
            res.sendFile(__path + '/tmp/asupansantuy.mp4')
} else {
res.sendFile(invalidKey)
}
})

router.get('/asupan/bocil', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)

       if(listkey.includes(apikeyInput)){
       	
       var url = 
       
       [
{"url":"https://b.top4top.io/m_1931yxodg0.mp4"},
{"url":"https://k.top4top.io/m_193161p380.mp4"},
{"url":"https://l.top4top.io/m_1931i4g3p1.mp4"},
{"url":"https://a.top4top.io/m_1931tjlio2.mp4"},
{"url":"https://g.top4top.io/m_1931z2mc40.mp4"},
{"url":"https://h.top4top.io/m_1931auyof1.mp4"},
{"url":"https://i.top4top.io/m_19315hrle2.mp4"},
{"url":"https://j.top4top.io/m_1931xul5a3.mp4"},
{"url":"https://l.top4top.io/m_1931o92nr0.mp4"},
{"url":"https://a.top4top.io/m_1931j1rh21.mp4"},
{"url":"https://b.top4top.io/m_1931iaqpg2.mp4"},
{"url":"https://c.top4top.io/m_1931s5zlj3.mp4"},
{"url":"https://d.top4top.io/m_1931x0g5a4.mp4"},
{"url":"https://i.top4top.io/m_1931oj76n0.mp4"},
{"url":"https://j.top4top.io/m_19319gl3d1.mp4"},
{"url":"https://k.top4top.io/m_1931u52cq2.mp4"},
{"url":"https://l.top4top.io/m_1931mvgj73.mp4"},
{"url":"https://a.top4top.io/m_1931u07oz4.mp4"},
{"url":"https://j.top4top.io/m_1931h1fo60.mp4"},
{"url":"https://k.top4top.io/m_1931mro3u1.mp4"},
{"url":"http://sansekai.my.id/ptl_repost/120664457_338629710563119_6615226849280369453_n.mp4"},
{"url":"https://l.top4top.io/m_1931kx0ac2.mp4"},
{"url":"https://a.top4top.io/m_1931g9ezq3.mp4"},
{"url":"https://b.top4top.io/m_1931plin14.mp4"},
{"url":"https://c.top4top.io/m_1931aaxri5.mp4"},
{"url":"https://d.top4top.io/m_1931ijzzn6.mp4"},
{"url":"https://e.top4top.io/m_1931ugycd7.mp4"},
{"url":"https://f.top4top.io/m_1931l14nk8.mp4"},
{"url":"https://g.top4top.io/m_1931crgqt9.mp4"}
]
    
          var upan = url[Math.floor(Math.random() * url.length)]
          var data = await getBuffer(`${upan.url}`)
            await fs.writeFileSync(__path + '/tmp/asupansantuy.mp4', data)
            res.sendFile(__path + '/tmp/asupansantuy.mp4')
} else {
res.sendFile(invalidKey)
}
})

// OTHERS FEATURES
router.get('/others/fakedata', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
      	axios.get('https://randomuser.me/api/?results=50').then(r => {
          var random_pict = r.data.results[Math.floor(Math.random() * r.data.results.length)];
          res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result: {
                 	FirstName: random_pict.name.first,
                     LastName: random_pict.name.last,
                     Gender: random_pict.gender,
                     Location: random_pict.location.street.name,
                     StreetNumber: random_pict.location.street.number,
                     City: random_pict.location.city,
                     State: random_pict.location.state,
                     Country: random_pict.location.country,
                     Postcode: random_pict.location.postcode,
                     Latitude: random_pict.location.coordinates.latitude,
                     TimeZone: random_pict.location.timezone.offset,
                     Email: random_pict.email,
                     Uuid: random_pict.login.uuid,
                     Username: random_pict.login.username,
                     Password: random_pict.login.password,
                     Salt: random_pict.login.salt,
                     Md5: random_pict.login.md5,
                     Sha1: random_pict.login.sha1,
                     Sha256: random_pict.login.sha256,
                     Phone: random_pict.phone,
                     Cell: random_pict.cell
                   }
             })
         })           
} else {
res.sendFile(invalidKey)
}
})

router.get('/others/cogan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
      	
     const neko = () => new Promise((resolve, reject) => {
                    const Arr = ["pap cowok", "cowo ganteng", "cowok pap"];
                    const query = Arr[Math.floor(Math.random() * (Arr.length))]
                    fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                        "headers": {
                            "accept": "application/json, text/javascript, */*, q=0.01",
                            "accept-language": "en-US,en;q=0.9",
                            "cache-control": "no-cache",
                            "pragma": "no-cache",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "sec-gpc": "1",
                            "x-app-version": "9a236a4",
                            "x-pinterest-appstate": "active",
                            "x-requested-with": "XMLHttpRequest"
                        },
                        "referrer": "https://www.pinterest.com/",
                        "referrerPolicy": "origin",
                        "body": null,
                        "method": "GET",
                        "mode": "cors"
                    }).then((res) => res.json())
                        .then((json) => {
                            const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                            resolve({
                                status: 200,
                                link: generatepin.images.orig.url
                            })
                        })
                })

        neko()
         .then(async (data) => {
         	var hasil = await getBuffer(`${data.link}`)
       await fs.writeFileSync(__path + '/tmp/neko.png', hasil)

         res.sendFile(__path + '/tmp/neko.png')
    })
} else {
res.sendFile(invalidKey)
}
})

router.get('/others/cecan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
      	
     const neko = () => new Promise((resolve, reject) => {
                    const Arr = ["pap cewek", "cewe cantik", "cewe hijab"];
                    const query = Arr[Math.floor(Math.random() * (Arr.length))]
                    fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                        "headers": {
                            "accept": "application/json, text/javascript, */*, q=0.01",
                            "accept-language": "en-US,en;q=0.9",
                            "cache-control": "no-cache",
                            "pragma": "no-cache",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "sec-gpc": "1",
                            "x-app-version": "9a236a4",
                            "x-pinterest-appstate": "active",
                            "x-requested-with": "XMLHttpRequest"
                        },
                        "referrer": "https://www.pinterest.com/",
                        "referrerPolicy": "origin",
                        "body": null,
                        "method": "GET",
                        "mode": "cors"
                    }).then((res) => res.json())
                        .then((json) => {
                            const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                            resolve({
                                status: 200,
                                link: generatepin.images.orig.url
                            })
                        })
                })

        neko()
         .then(async (data) => {
         	var hasil = await getBuffer(`${data.link}`)
       await fs.writeFileSync(__path + '/tmp/neko.png', hasil)

         res.sendFile(__path + '/tmp/neko.png')
    })
} else {
res.sendFile(invalidKey)
}
})

router.get('/others/ucapan', async (req, res) => {
        timeZone = req.query.timeZone
    if (!timeZone) return res.json({ status : false, creator : `Hafidz Abdillah`, message : "masukan parameter timeZone"})

    try {
     WaktuJKt = new Date().toLocaleString("en-US", {timeZone: timeZone});

		function tamHari(WaktuJKt){
            var date = new Date(WaktuJKt);
            var waktoo = date.getHours();
            switch(waktoo){
                case 0: waktoo = "Tengah Malam🌚"; break;
                case 1: waktoo = "Tengah Malam🌒"; break;
                case 2: waktoo = "Dini Hari🌒"; break;
                case 3: waktoo = "Dini Hari🌓"; break;
                case 4: waktoo = "Subuh🌔"; break;
                case 5: waktoo = "Subuh🌔"; break;
                case 6: waktoo = "Pagi🌝"; break;
                case 7: waktoo = "Pagi🌝"; break;
                case 8: waktoo = "Pagi🌝"; break;
                case 9: waktoo = "Pagi"; break;
                case 10: waktoo = "Pagi🌞"; break;
                case 11: waktoo = "Siang🌞"; break;
                case 12: waktoo = "Siang🌞"; break;
                case 13: waktoo = "Siang🌞"; break;
                case 14: waktoo = "Siang🌞"; break;
                case 15: waktoo = "Sore🌝"; break;
                case 16: waktoo = "Sore🌝"; break;
                case 17: waktoo = "Sore🌖"; break;
                case 18: waktoo = "Magrib🌘"; break;
                case 19: waktoo = "Magrib🌚"; break;
                case 20: waktoo = "Malam🌚"; break;
                case 21: waktoo = "Malam🌚"; break;
                case 22: waktoo = "Malam🌚"; break;
                case 23: waktoo = "Tengah Malam🌚"; break;
            }
            var tampilHari = "" + waktoo;
            return `${tampilHari}`
        }

    res.json({
        creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result : tamHari(WaktuJKt)
    })
    } catch (e) {
        console.log(e)
        res.json({ status : false, creator : `Hafidz Abdillah`, message : "Eror Bang, Report Cepat Ke Owner"})
    }

})

router.get('/others/hitungmundur', async (req, res) => {
        bulan = req.query.bulan
        tanggal = req.query.tanggal

    if (!bulan) return res.json({ status : false, creator : `Hafidz Abdillah`, message : "masukan parameter bulan"})
    if (!tanggal) return res.json({ status : false, creator : `Hafidz Abdillah`, message : "masukan parameter tanggal"})

    try {
    var countDownDate = new Date(`${bulan} ${tanggal}, 2021 00:00:00`).getTime();
        var now = new Date().getTime();

		function kurangwaktu(waktunya, waktuskrg){
			var distance = waktunya - waktuskrg;
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
		}

    res.json({
         creator: 'Hafidz Abdillah',
         status: true,
         code: 200,
          message: 'Jangan ditembak bang',
        result : kurangwaktu(countDownDate, now)
    })
    } catch (e) {
        console.log(e)
        res.json({ status : false, creator : `Hafidz Abdillah`, message : "Eror, Harap Report Ke Owner"})
    }
})

router.get('/others/heroml', async (req, res, next) => {
        var apikeyInput = req.query.apikey
                query = req.query.query
                
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(!query) return res.json(loghandler.notquery)
	
       if(listkey.includes(apikeyInput)){
       	
     function herodetails(name) {
                    return new Promise((resolve, reject) => {
                        var splitStr = name.toLowerCase().split(' ');
                        for (let i = 0; i < splitStr.length; i++) {
                            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
                        }
                        var que = splitStr.join(' ')
                        axios.get('https://mobile-legends.fandom.com/wiki/' + que)
                            .then(({ data }) => {
                                var $ = cheerio.load(data)
                                var mw = []
                                var attrib = []
                                var skill = []
                                var name = $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > table > tbody > tr > td > font > b').text()
                                $('.mw-headline').get().map((res) => {
                                    var mwna = $(res).text()
                                    mw.push(mwna)
                                })
                                $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td').get().map((rest) => {
                                    var haz = $(rest).text().replace(/\n/g, '')
                                    attrib.push(haz)
                                })
                                $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > div.progressbar-small.progressbar > div').get().map((rest) => {
                                    skill.push($(rest).attr('style').replace('width:', ''))
                                })
                                axios.get('https://mobile-legends.fandom.com/wiki/' + que + '/Story')
                                    .then(({ data }) => {
                                        var $ = cheerio.load(data)
                                        var pre = []
                                        $('#mw-content-text > div > p').get().map((rest) => {
                                            pre.push($(rest).text())
                                        })
                                        var story = pre.slice(3).join('\n')
                                        var items = []
                                        var character = []
                                        $('#mw-content-text > div > aside > section > div').get().map((rest) => {
                                            character.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g, '').replace(/\n/g, ''))
                                        })
                                        $('#mw-content-text > div > aside > div').get().map((rest) => {
                                            items.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g, '').replace(/\n/g, ''))
                                        })
                                        var img = $('#mw-content-text > div > aside > figure > a').attr('href')
                                        var chara = character.slice(0, 2)
                                        var result = {
                                            hero_name: name + ` ( ${mw[0].replace('CV:', ' CV:')} )`,
                                            entrance_quotes: attrib[2].replace('Entrance Quotes', '').replace('\n', ''),
                                            hero_feature: attrib[attrib.length - 1].replace('Hero Feature', ''),
                                            image: img,
                                            items: items,
                                            character: {
                                                chara
                                            },
                                            attributes: {
                                                movement_speed: attrib[12].replace('● Movement Speed', ''),
                                                physical_attack: attrib[13].replace('● Physical Attack', ''),
                                                magic_power: attrib[14].replace('● Magic Power', ''),
                                                attack_speed: attrib[15].replace('● Attack Speed', ''),
                                                physical_defense: attrib[16].replace('● Physical Defense', ''),
                                                magic_defense: attrib[17].replace('● Magic Defense', ''),
                                                basic_atk_crit_rate: attrib[18].replace('● Basic ATK Crit Rate', ''),
                                                hp: attrib[19].replace('● HP', ''),
                                                mana: attrib[20].replace('● Mana', ''),
                                                ability_crit_rate: attrib[21].replace('● Ability Crit Rate', ''),
                                                hp_regen: attrib[22].replace('● HP Regen', ''),
                                                mana_regen: attrib[23].replace('● Mana Regen', '')
                                            },
                                            price: {
                                                battle_point: mw[1].split('|')[0].replace(/ /g, ''),
                                                diamond: mw[1].split('|')[1].replace(/ /g, ''),
                                                hero_fragment: mw[1].split('|')[2] ? mw[1].split('|')[2].replace(/ /g, '') : 'none'
                                            },
                                            role: mw[2],
                                            skill: {
                                                durability: skill[0],
                                                offense: skill[1],
                                                skill_effects: skill[2],
                                                difficulty: skill[3]
                                            },
                                            speciality: mw[3],
                                            laning_recommendation: mw[4],
                                            release_date: mw[5],
                                            background_story: story
                                        }
                                        resolve(result)
                                    }).catch((e) => reject({ status: 404, message: e.message }))
                            }).catch((e) => reject({ status: 404, message: e.message }))
                    })
                }

           
        herodetails(query)
       .then(async(data) => {
        var result = data;
             res.json({
             	 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
             })
         })
} else {
res.sendFile(invalidKey)
}
})

router.get('/others/qrcode', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	           text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.zeks.me/api/qrencode?apikey=alpin1234567&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/meme.png', hasil)

         res.sendFile(__path + '/tmp/meme.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/others/tts', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
              text = req.query.text
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.zeks.me/api/tts?apikey=alpin1234567&code=id&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/tts.mp3', hasil)

         res.sendFile(__path + '/tmp/tts.mp3')
} else {
res.sendFile(invalidKey)
}
})

router.get('/others/hartacustom', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	           text = req.query.text
	
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.zeks.me/api/hartatahta?apikey=alpin1234567&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/hartacustom.png', hasil)

         res.sendFile(__path + '/tmp/hartacustom.png')
} else {
res.sendFile(invalidKey)
}
})



router.get('/others/meme', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=YTRAMLANID`)
       await fs.writeFileSync(__path + '/tmp/meme.png', hasil)

         res.sendFile(__path + '/tmp/meme.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/others/darkjokes', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=YTRAMLANID`)
       await fs.writeFileSync(__path + '/tmp/darkjokes.png', hasil)

         res.sendFile(__path + '/tmp/darkjokes.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/others/estetik', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/estetic?apikey=YTRAMLANID`)
       await fs.writeFileSync(__path + '/tmp/estetik.png', hasil)

         res.sendFile(__path + '/tmp/estetik.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/others/attp', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.notparam)
  
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`http://zekais-api.herokuapp.com/attg?text=${text}&apikey=pYgYfvYo`)
       await fs.writeFileSync(__path + '/tmp/attp.gif', hasil)

         res.sendFile(__path + '/tmp/attp.gif')
} else {
res.sendFile(invalidKey)
}
})

router.get('/others/ttp', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.notparam)
  
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=YTRAMLANID&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/ttp.png', hasil)

         res.sendFile(__path + '/tmp/ttp.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/others/emojiscrape', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter Text"})

       if(listkey.includes(apikeyInput)){
      
            function emojiScraper(emoji) {
  return new Promise((resolve, reject) => {
    if(emoji.match(/[a-z|0-9]/gi)) {
      resolve('Jangan huruf/angka bjir')
    }
    fetch('https://emojipedia.org/search?q=' + encodeURI(emoji), {
      method: 'GET',
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
      }
    })
    .then(rsp => rsp.text())
    .then((data) => {
      const $ = cheerio.load(data)
      resolve({
        hasil: $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(0).attr('srcset').replace(/ 2x/gi, '')
      })
    })
    .catch(reject)
  })
}

          emojiScraper(text)
        .then(data => {
        	 var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

// CREATOR FEATURES
router.get('/creator/buriq', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          url = req.query.url
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!url) return res.json(loghandler.noturl)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://nekobot.xyz/api/imagegen?type=jpeg&url=${link}&raw=1`)
       await fs.writeFileSync(__path + '/tmp/buriq.jpg', hasil)

         res.sendFile(__path + '/tmp/buriq.jpg')
} else {
res.sendFile(invalidKey)
}
})

router.get('/creator/deep', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          url = req.query.url
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!url) return res.json(loghandler.noturl)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${url}&raw=1`)
       await fs.writeFileSync(__path + '/tmp/creator.jpg', hasil)

         res.sendFile(__path + '/tmp/creator.jpg')
} else {
res.sendFile(invalidKey)
}
})

router.get('/creator/magic', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          url = req.query.url
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!url) return res.json(loghandler.noturl)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://nekobot.xyz/api/imagegen?type=magik&image=${url}&raw=1`)
       await fs.writeFileSync(__path + '/tmp/creator.jpg', hasil)

         res.sendFile(__path + '/tmp/creator.jpg')
} else {
res.sendFile(invalidKey)
}
})

router.get('/creator/blurpify', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          url = req.query.url
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!url) return res.json(loghandler.noturl)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${url}&raw=1`)
       await fs.writeFileSync(__path + '/tmp/creator.jpg', hasil)

         res.sendFile(__path + '/tmp/creator.jpg')
} else {
res.sendFile(invalidKey)
}
})

router.get('/creator/ytcomment', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          url = req.query.url,
	         username = req.query.username,
	        text = req.query.text
	
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!url) return res.json(loghandler.noturl)
   if(!username) return res.json(loghandler.notusername)
   if(!text) return res.json(loghandler.nottext)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${url}&username=${username}&comment=${text}`)
       await fs.writeFileSync(__path + '/tmp/creator.jpg', hasil)

         res.sendFile(__path + '/tmp/creator.jpg')
} else {
res.sendFile(invalidKey)
}
})

router.get('/creator/twitcomment', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          url = req.query.url,
	         username = req.query.username,
	        text = req.query.text,
	       displayname = req.query.displayname
	
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!url) return res.json(loghandler.noturl)
   if(!username) return res.json(loghandler.notusername)
   if(!text) return res.json(loghandler.nottext)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://some-random-api.ml/canvas/tweet?avatar=${url}&username=${username}&displayname=${displayname}&comment=${text}`)
       await fs.writeFileSync(__path + '/tmp/creator.jpg', hasil)

         res.sendFile(__path + '/tmp/creator.jpg')
} else {
res.sendFile(invalidKey)
}
})

router.get('/creator/blur', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          url = req.query.url
	         
	        
	
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!url) return res.json(loghandler.noturl)

   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://some-random-api.ml/canvas/blur?avatar=${url}`)
       await fs.writeFileSync(__path + '/tmp/creator.jpg', hasil)

         res.sendFile(__path + '/tmp/creator.jpg')
} else {
res.sendFile(invalidKey)
}
})

router.get('/creator/phcomment', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          url = req.query.url,
	         username = req.query.username,
	         text = req.query.text
	
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!url) return res.json(loghandler.noturl)
  if(!username) return res.json(loghandler.notusername)
  if(!text) return res.json(loghandler.nottext)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${url}&raw=1&username=${username}&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/creator.jpg', hasil)

         res.sendFile(__path + '/tmp/creator.jpg')
} else {
res.sendFile(invalidKey)
}
})

router.get('/creator/glass', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          url = req.query.url
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!url) return res.json(loghandler.noturl)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${url}`)
       await fs.writeFileSync(__path + '/tmp/creator.jpg', hasil)

         res.sendFile(__path + '/tmp/creator.jpg')
} else {
res.sendFile(invalidKey)
}
})

router.get('/creator/greyscale', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          url = req.query.url
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!url) return res.json(loghandler.noturl)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://some-random-api.ml/canvas/greyscale?avatar=${url}`)
       await fs.writeFileSync(__path + '/tmp/creator.jpg', hasil)

         res.sendFile(__path + '/tmp/creator.jpg')
} else {
res.sendFile(invalidKey)
}
})

//PRIMBON FEATURES
router.get('/primbon/artinama', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){      
       	
       	function artinama(query){
	return new Promise((resolve, reject) => {
		queryy = query.replace(/ /g, '+')
		axios.get('https://www.primbon.com/arti_nama.php?nama1=' + query + '&proses=+Submit%21+')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const result = $('#body').text();
				const result2 = result.split('\n      \n        \n        \n')[0]
				const result4 = result2.split('ARTI NAMA')[1]
				const result5 = result4.split('.\n\n')
				const result6 = result5[0] + '\n\n' + result5[1]
				resolve(result6)
			})
			.catch(reject)
	})
}

      artinama(query)
      .then((data) => {
      	var result = data;
     res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
             })
          })
    } else {
res.sendFile(invalidKey)
}
})

router.get('/primbon/artimimpi', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){      
       	
       function artimimpi(katakunci) {
                    return new Promise((resolve, reject) => {
                        axios.get('https://www.primbon.com/tafsir_mimpi.php?mimpi=' + katakunci + '&submit=+Submit+')
                            .then(({ data }) => {
                                var $ = cheerio.load(data)
                                var detect = $('#body > font > i').text()
                                var isAva = /Tidak ditemukan/g.test(detect) ? false : true
                                if (isAva) {
                                    var isi = $('#body').text().split(`Hasil pencarian untuk kata kunci: ${katakunci}`)[1].replace(/\n\n\n\n\n\n\n\n\n/gi, '\n')
                                    var res = {
                                        result: isi
                                    }
                                    resolve(res)
                                } else {
                                    var res = {
                                        result: `Data tidak ditemukan! Gunakan kata kunci.`
                                    }
                                    resolve(res)
                                }
                            })
                            .catch(reject)
                    })
                }

      artimimpi(query)
      .then((data) => {
      	var result = data;
     res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
             })
          })
    } else {
res.sendFile(invalidKey)
}
})

router.get('/primbon/ramaljodoh', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
	    pasangan = req.query.pasangan;

if(listkey.includes(apikeyInput)){
  if(!apikeyInput) return res.json(loghandler.notparam)
  if (!nama) return res.json(loghandler.notnama)
  if (!pasangan) return res.json({ message : `Masukan nama pacarmu,, ehh pasangan :v` })

 request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url: 'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1=' + nama + '&nama2='+ pasangan +'&proses=+Submit%21+',

    }, function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')

var result = `Kecocokan Berdasarkan Nama :\n\n${d}`
         res.json({
	        creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                result : result
             })
   })

} else {
res.sendFile(invalidKey)
}
})

router.get('/primbon/nomorhoki', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){
       	
      const nomorhoki = (no) => new Promise((resolve, reject) => {
                    fetch("https://www.primbon.com/no_hoki_bagua_shuzi.php", {
                        "headers": {
                            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                            "accept-language": "en-US,en;q=0.9",
                            "cache-control": "max-age=0",
                            "content-type": "application/x-www-form-urlencoded",
                            "sec-fetch-dest": "document",
                            "sec-fetch-mode": "navigate",
                            "sec-fetch-site": "same-origin",
                            "sec-fetch-user": "?1",
                            "sec-gpc": "1",
                            "upgrade-insecure-requests": "1"
                        },
                        "referrer": "https://www.primbon.com/no_hoki_bagua_shuzi.htm",
                        "referrerPolicy": "strict-origin-when-cross-origin",
                        "body": `nomer=${no}&submit=+Submit%21+`,
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "omit"
                    }).then((res) => res.text())
                        .then((text) => {
                            const $ = cheerio.load(text)
                            $('#body').each((i, el) => {
                                const energipositif = $(el).find('table:nth-child(9) > tbody > tr:nth-child(1) > td:nth-child(1)').text().replace('ENERGI POSITIF', '');
                                const energinegatif = $(el).find('table:nth-child(9) > tbody > tr:nth-child(1) > td:nth-child(3)').text().replace('ENERGI NEGATIF', '');
                                const ratenomer = $(el).find('b:nth-child(6)').text().replace('% Angka Bagua Shuzi : ', '')
                                resolve({
                                    status: 200,
                                    energipositif: energipositif,
                                    energinegatif: energinegatif,
                                    rate: ratenomer
                                })
                            })
                        })
                })

           nomorhoki(query)
           .then(async(data) => {      
             res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result: {
                 	positif: data.energipositif,
                     negatif: data.energinegatif,
                     rate: data.rate
                     }
             })
        })
} else {
res.sendFile(invalidKey)
}
})

router.get('/nulis', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!text) return res.json(loghandler.nottext)

  if(listkey.includes(apikeyInput)){
   try {
	   var fontPath = __path + '/lib/font/Zahraaa.ttf'
           var inputPath = __path + '/lib/sebelumkanan.jpg'
           var outputPath = __path + '/tmp/hasil.jpg'
           var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
      spawn('convert', [
                    inputPath,
                    '-font',
                    fontPath,
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    outputPath
                ])
         .on('error', () => console.log('Error Nulis'))
         .on('exit', () =>
         {
	         res.sendFile(outputPath)
        })
   } catch (e) {
      console.log(e);
	 res.json(loghandler.erorr)
   }
 }
})
// End of script
module.exports = router
