# [YouTube](https://youtube.com)

* <https://developers.google.com/youtube/v3/docs>

## `/channels`

The URL with the `@` prefix id NOT channel ID. It is a Handle that should use `forHandle` to call.

For example, `https://www.youtube.com/@TokinoSora`, the channel's ID id NOT `TokinoSora` -- How do we get the channel's ID, then?

https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=@TokinoSora&key={API_KEY}

You will get:

```json
{
  "kind": "youtube#channelListResponse",
  "etag": "udGJXlfQ9xJ8KIXDBWvmSRD-ssA",
  "pageInfo": {
    "totalResults": 1,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#channel",
      "etag": "8YLouGU0DuJ0_e57br-tsXKwF-g",
      "id": "UCp6993wxpyDPHUpavwDFqgg"
    }
  ]
}
```

The `items[0].id` is what you need. You can use `https://www.youtube.com/channel/UCp6993wxpyDPHUpavwDFqgg` to access the channel.

What else we can do? How about the info of the channel?

https://www.googleapis.com/youtube/v3/channels?part=id&part=brandingSettings&forHandle=@TokinoSora&key={API_KEY}

It returns:

```json
{
  "kind": "youtube#channelListResponse",
  "etag": "jPo6QoD0_IN3PIrs4PeVyax9Ars",
  "pageInfo": {
    "totalResults": 1,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#channel",
      "etag": "X-ajgIcrC68_2y2OxqgdjtQ_3q4",
      "id": "UCp6993wxpyDPHUpavwDFqgg",
      "brandingSettings": {
        "channel": {
          "title": "SoraCh. ときのそらチャンネル",
          "description": "☆ホロライブ所属バーチャルアイドル、ときのそらです！\n横浜アリーナでの単独ライブを目標に活動しています！！絶対に！行きたいので！！応援よろしくおねがいします！！！！\n\nいいなと思ったら、ぜひチャンネル登録よろしくお願いします୧(๑•̀ㅁ•́๑)૭✧\n\n\n★オフィシャルファンクラブ★\nhttps://tokinosora-fc.com/\n\n★ときのそら『5th Anniversary』特設サイト★\nhttps://www.jvcmusic.co.jp/tokinosora/5th/\n\n★ときのそら 4th ALBUM『Sign』特設サイト★\nhttps://www.jvcmusic.co.jp/tokinosora/65715/\n\n[Sounds] ポケットサウンド,DOVA-SYNDROME,魔王魂,OtoLogic\n[System] HoloLive (COVER Inc.)",
          "keywords": "ホロライブ hololive Vtuber VTuber ときのそら",
          "trackingAnalyticsAccountId": "UA-139849386-4",
          "unsubscribedTrailer": "VCsWgOMu4_8",
          "country": "JP"
        },
        "image": {
          "bannerExternalUrl": "https://lh3.googleusercontent.com/UTtaagGOKC2SdUTqTORLP_GQwAZMLonU-SHWJ08NWCPdsJeTt9pCpytJ6derR5jIaacgWfAV4w"
        }
      }
    }
  ]
}
```

There are 10 values avaiable for `part`. Only `auditDetails` needs Google OAuth 2.0.

## `/videos`

Call the info of the video `https://www.youtube.com/watch?v=Zg3SEaYLq5Y` by `https://www.googleapis.com/youtube/v3/videos?id=Zg3SEaYLq5Y&part=snippet&key={API_KEY}`:

```json
{
  "kind": "youtube#videoListResponse",
  "etag": "_Z2K7bZlhsdS77az8I6_8BP1fa8",
  "items": [
    {
      "kind": "youtube#video",
      "etag": "UySgCj3hQTlqhsUODJgctfOsL-I",
      "id": "Zg3SEaYLq5Y",
      "snippet": {
        "publishedAt": "2015-01-07T09:28:47Z",
        "channelId": "UCirguiAzkqU24_-h1zafCcA",
        "title": "江蕙 -夢中的情話 MENG CHUNG DE CHING HUA(Official Music Video)",
        "description": "夢 中 的 情 話─傳奇新人阿杜V.S金曲天后江蕙再掀男女對唱KTV點播\n熱潮。江蕙加阿杜的新鮮組合，有一種傳承的喜悅和新\n意。\n去年造成銷售旋風的阿杜在姚謙及江蕙的推薦及背書下\n，首度嘗試台語歌男女對唱。",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Zg3SEaYLq5Y/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Zg3SEaYLq5Y/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Zg3SEaYLq5Y/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Zg3SEaYLq5Y/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "阿爾發音樂",
        "tags": [
          "Chiang Hwei (Musical Artist)",
          "夢中的情話 (Musical Recording)",
          "Music (TV Genre)",
          "Music Video (TV Genre)",
          "江蕙",
          "二姐",
          "阿爾發"
        ],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "江蕙 -夢中的情話 MENG CHUNG DE CHING HUA(Official Music Video)",
          "description": "夢 中 的 情 話─傳奇新人阿杜V.S金曲天后江蕙再掀男女對唱KTV點播\n熱潮。江蕙加阿杜的新鮮組合，有一種傳承的喜悅和新\n意。\n去年造成銷售旋風的阿杜在姚謙及江蕙的推薦及背書下\n，首度嘗試台語歌男女對唱。"
        }
      }
    }
  ],
  "pageInfo": {
    "totalResults": 1,
    "resultsPerPage": 1
  }
}
```

## `/playlistItems`

Call the info of the list `https://www.youtube.com/playlist?list=PLYrA-SsMvTPMP87KURCziHOlOCmzkDXvF` by `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLYrA-SsMvTPMP87KURCziHOlOCmzkDXvF&part=snippet&key={API_KEY}`:

```json
{
  "kind": "youtube#playlistItemListResponse",
  "etag": "3xZ8b2JdTkkh4T-egg5Si_FCOS4",
  "items": [
    {
      "kind": "youtube#playlistItem",
      "etag": "nAMALwTuvG_M1yhfRgMYHHX7m74",
      "id": "UExZckEtU3NNdlRQTVA4N0tVUkN6aUhPbE9DbXprRFh2Ri4yODlGNEE0NkRGMEEzMEQy",
      "snippet": {
        "publishedAt": "2023-10-11T08:31:49Z",
        "channelId": "UC-b2nGm0xLzic38Byti0VjA",
        "title": "筆電買前必看！Mac、Ｗindows 大比拼！｜預算、CPU、記憶體 校長教你怎麼配｜程式小萌新  EP1  @hexschool",
        "description": "終於要買\\換筆電了！\n上網爬文比較 Mac、Ｗindows 優缺點，看完還是一頭霧水？\n今天幫大家拉出最在意也很重要的幾點來 PK 分析\n如果你或身邊的朋友剛好要購入新筆電\n那這集一定不能錯過～\n#六角學院 #mac #windows #筆電 \n#推薦 #工程師  #cpu  #記憶體 #預算\n\n｜時間軸｜\n00:00 正片開始\n00:28 開發環境的穩定度 PK\n02:37 安全性與穩定性 PK\n04:43 客製化設備 PK\n06:00 洧杰校長推薦筆電配置（重要！必看）\n08:58 大家最在意的預算 PK  🤑\n10:54 筆電要買幾寸比較適合？\n（尤其筆電要帶來帶去的同學，重量也須列入考量）\n11:50 洧杰校長筆電分享\n13:26 如果你有這幾個需求，建議買 Ｗindows\n15:30 總結＋小彩蛋＋重點整理表格❤️\n\n\n｜追蹤六角學院 掌握最新消息｜\n官網➡️\nhttps://www.hexschool.com\nFB  ➡️\nhttps://www.facebook.com/hexschool\nIG   ➡️\nhttps://www.instagram.com/hexschool",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/h-zvB9uIe0M/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/h-zvB9uIe0M/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/h-zvB9uIe0M/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/h-zvB9uIe0M/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/h-zvB9uIe0M/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "六角學院",
        "playlistId": "PLYrA-SsMvTPMP87KURCziHOlOCmzkDXvF",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "h-zvB9uIe0M"
        },
        "videoOwnerChannelTitle": "六角學院",
        "videoOwnerChannelId": "UC-b2nGm0xLzic38Byti0VjA"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "pgUhHJytMQnbi7wZflL6iNrLn1g",
      "id": "UExZckEtU3NNdlRQTVA4N0tVUkN6aUhPbE9DbXprRFh2Ri4wOTA3OTZBNzVEMTUzOTMy",
      "snippet": {
        "publishedAt": "2024-01-02T05:59:21Z",
        "channelId": "UC-b2nGm0xLzic38Byti0VjA",
        "title": "掌握這 3 招，成為老闆暖心夥伴！沒有 Mentor 引路也不用怕｜程式小萌新 EP2  @hexschool",
        "description": "你的公司有提供教育訓練、Team Building，甚至是部門 Mentor 嗎？\n其實會提供以上輔助的公司，算是很少數\n與其等公司給，不如創造自己的更多可能性！\n\n如果你也正在煩惱，如何在職場中精進自我、又贏得老闆的心🤭\n那這集一定不能錯過～\n聰明一石兩鳥！\n\n#六角學院 #Mentor #職場  #SideProject \n#推薦 #工程師  #小聚  #技術文 #新手\n#主管  #老闆\n\n｜時間軸｜\n00:00 卡斯伯小劇場\n00:19 正片開始\n02:43 第一名\n03:48 第二名\n05:02 第三名\n\n歡迎和我們分享你的想法～\n\n｜追蹤六角學院 得到最新消息｜\n官網➡️ https://www.hexschool.com\n FB  ➡️ https://www.facebook.com/hexschool\n IG   ➡️ https://www.instagram.com/hexschool",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/PnubfPPy4Lw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/PnubfPPy4Lw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/PnubfPPy4Lw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/PnubfPPy4Lw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/PnubfPPy4Lw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "六角學院",
        "playlistId": "PLYrA-SsMvTPMP87KURCziHOlOCmzkDXvF",
        "position": 1,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "PnubfPPy4Lw"
        },
        "videoOwnerChannelTitle": "六角學院",
        "videoOwnerChannelId": "UC-b2nGm0xLzic38Byti0VjA"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "2s_WVS90wnioYu7VC5ObahQg8Lg",
      "id": "UExZckEtU3NNdlRQTVA4N0tVUkN6aUhPbE9DbXprRFh2Ri41MzJCQjBCNDIyRkJDN0VD",
      "snippet": {
        "publishedAt": "2024-02-23T05:45:30Z",
        "channelId": "UC-b2nGm0xLzic38Byti0VjA",
        "title": "【看完豁然開朗】工程師寫技術文章的優點？面試靠它好加分｜程式小萌新 EP3   @hexschool",
        "description": "你有嘗試過「寫技術文章」嗎？\n說到寫文，我們都知道好處多多\n（例如：累積程式知識、賺取額外的廣告費、建立個人品牌等等）\n但要開始第一步，總是這 麽 難 (›´ω`‹ )\n\n如果你也正在煩惱\n該如何開始寫文、擔心沒有人會看\n那這集一定不能錯過～\n「3個心魔、6個技巧」卡斯伯老師無私分享！\n希望對你會有幫助 ٩(๑•̀ω•́๑)۶\n\n#六角學院 #推薦  #面試  #求職  \n#技術 #工程師  #技巧   #新手\n#完美主義   #iThome #鐵人賽\n\n｜時間軸｜\n00:00 工程師寫技術文的優點\n01:55 為什麼一直無法完成一篇文\n02:34 卡斯伯的寫文經驗\n05:17 方法一\n06:08 方法二\n07:57 方法三\n08:26 撰文的 6 個步驟！完成率大大上升！\n10:55 寫文還可以賺廣告費\n\n喜歡這集的內容嗎\n歡迎和我們分享你的想法～\n點讚、分享給需要的朋友 ლ(╹◡╹ლ)\n\n｜本集相關連結｜\n✨ 卡斯伯 部落格：https://www.casper.tw/\n✨ 卡斯伯  iThome 鐵人賽文章區： https://ithelp.ithome.com.tw/users/20083608/ironman\n\n｜追蹤六角學院 獲得最新消息｜\n官網➡️ https://www.hexschool.com\n FB  ➡️ https://www.facebook.com/hexschool\n IG   ➡️ https://www.instagram.com/hexschool",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/lXRe2DYQ3qg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/lXRe2DYQ3qg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/lXRe2DYQ3qg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/lXRe2DYQ3qg/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/lXRe2DYQ3qg/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "六角學院",
        "playlistId": "PLYrA-SsMvTPMP87KURCziHOlOCmzkDXvF",
        "position": 2,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "lXRe2DYQ3qg"
        },
        "videoOwnerChannelTitle": "六角學院",
        "videoOwnerChannelId": "UC-b2nGm0xLzic38Byti0VjA"
      }
    }
  ],
  "pageInfo": {
    "totalResults": 3,
    "resultsPerPage": 5
  }
}
```

Use `nextPageToken` and `prevPageToken` and attaching `pageToken` to get the next/previous page.

## `/captions`

`https://www.youtube.com/watch?v=kztiUwZIITA` => `https://www.googleapis.com/youtube/v3/captions?videoId=kztiUwZIITA&part=id&part=snippet&key={API_KEY}`:

```json
{
  "kind": "youtube#captionListResponse",
  "etag": "KeYJvZvG5iXVKT_JXuyfVFhSE4Q",
  "items": [
    {
      "kind": "youtube#caption",
      "etag": "WR4peQkL5qQhtZKXnysv91g258g",
      "id": "AUieDaY0Y0KRrzJhPLk9B3AbzWJw5Gr61s2z_qxPLO2l",
      "snippet": {
        "videoId": "kztiUwZIITA",
        "lastUpdated": "2024-04-26T02:54:59.880474Z",
        "trackKind": "standard",
        "language": "en",
        "name": "",
        "audioTrackType": "unknown",
        "isCC": false,
        "isLarge": false,
        "isEasyReader": false,
        "isDraft": false,
        "isAutoSynced": false,
        "status": "serving"
      }
    },
    {
      "kind": "youtube#caption",
      "etag": "WqTwmVHbOojtrO_3qTeyv9eiiDU",
      "id": "AUieDabjHPZhVYqm4bFvmbwgMySnRiV8UT5j-F6PMu82OtHm",
      "snippet": {
        "videoId": "kztiUwZIITA",
        "lastUpdated": "2024-04-26T02:54:47.222011Z",
        "trackKind": "standard",
        "language": "zh-TW",
        "name": "",
        "audioTrackType": "unknown",
        "isCC": false,
        "isLarge": false,
        "isEasyReader": false,
        "isDraft": false,
        "isAutoSynced": false,
        "status": "serving"
      }
    }
  ]
}
```

### `/captions/{ID}`

## References

* [#101 使用 YouTube Data API 抓取有趣的 Youtuber 影片 & MV](https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84%E8%A9%A6%E7%85%89-%E5%8B%87%E8%80%85%E7%9A%84-100-%E9%81%93-swift-ios-app-%E8%AC%8E%E9%A1%8C/101-%E4%BD%BF%E7%94%A8-youtube-data-api-%E6%8A%93%E5%8F%96%E6%9C%89%E8%B6%A3%E7%9A%84-youtuber-%E5%BD%B1%E7%89%87-mv-d05c3a0c70aa)
* [Implementation: Captions](https://developers.google.com/youtube/v3/guides/implementation/captions)
