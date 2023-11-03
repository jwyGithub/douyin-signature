# DouYin Sign

## 获取 signaure

### Method: POST

> ```
> https://douyin-signature-delta.vercel.app/getSingature
> ```

### Body (**raw**)

```json
{
    "location": "https://www.iesdouyin.com/share/video/7296353628263140620/?region=CN&mid=7296353681744726793&u_code=l7665j8k&did=MS4wLjABAAAAVbQA55vA0iRm1pbUprb_Nclc0FZwD_HURHyDsc6aIfPxoE_w43guh0L8v94j80l_&iid=MS4wLjABAAAAbvLI3Z-1dv5A4iwdbF4Aal5H29-kI2dI641Wjzm1OVABS6q8xC2V0dnRnehCZhX4&with_sec_did=1&titleType=title&share_sign=PCi8yPNX9JjpYVslnMrQXoYphHkRHv2WPfQOwExJmpo-&share_version=270400&ts=1698823547&from_ssr=1&timestamp=1698824000&utm_campaign=client_share&app=aweme&utm_medium=ios&tt_from=copy&utm_source=copy"
}
```

### Response

```json
{
    "xbogus": "DFSzswSLsJxANnEftFdmKU9WcBnW"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 获取 location

### Method: POST

> ```
> https://douyin-signature-delta.vercel.app/getLocation
> ```

### Body (**raw**)

```json
{
    "url": "https://v.douyin.com/idEAEkV8/"
}
```

### Response

```json
{
    "location": "https://www.iesdouyin.com/share/video/7296353628263140620/?region=CN&mid=7296353681744726793&u_code=l7665j8k&did=MS4wLjABAAAAVbQA55vA0iRm1pbUprb_Nclc0FZwD_HURHyDsc6aIfPxoE_w43guh0L8v94j80l_&iid=MS4wLjABAAAAbvLI3Z-1dv5A4iwdbF4Aal5H29-kI2dI641Wjzm1OVABS6q8xC2V0dnRnehCZhX4&with_sec_did=1&titleType=title&share_sign=PCi8yPNX9JjpYVslnMrQXoYphHkRHv2WPfQOwExJmpo-&share_version=270400&ts=1698823547&from_ssr=1&timestamp=1698824000&utm_campaign=client_share&app=aweme&utm_medium=ios&tt_from=copy&utm_source=copy"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 获取 item_ids

### Method: POST

> ```
> https://douyin-signature-delta.vercel.app/getItemIds
> ```

### Body (**raw**)

```json
{
    "location": "https://www.iesdouyin.com/share/video/7296353628263140620/?region=CN&mid=7296353681744726793&u_code=l7665j8k&did=MS4wLjABAAAAVbQA55vA0iRm1pbUprb_Nclc0FZwD_HURHyDsc6aIfPxoE_w43guh0L8v94j80l_&iid=MS4wLjABAAAAbvLI3Z-1dv5A4iwdbF4Aal5H29-kI2dI641Wjzm1OVABS6q8xC2V0dnRnehCZhX4&with_sec_did=1&titleType=title&share_sign=PCi8yPNX9JjpYVslnMrQXoYphHkRHv2WPfQOwExJmpo-&share_version=270400&ts=1698823547&from_ssr=1&timestamp=1698824000&utm_campaign=client_share&app=aweme&utm_medium=ios&tt_from=copy&utm_source=copy"
}
```

### Response

```json
{
    "item_ids": "7296353628263140620"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 获取 video_info_url

### Method: POST

> ```
> https://douyin-signature-delta.vercel.app/getVideoInfoUrl
> ```

### Body (**raw**)

```json
{
    "location": "https://www.iesdouyin.com/share/video/7296353628263140620/?region=CN&mid=7296353681744726793&u_code=l7665j8k&did=MS4wLjABAAAAVbQA55vA0iRm1pbUprb_Nclc0FZwD_HURHyDsc6aIfPxoE_w43guh0L8v94j80l_&iid=MS4wLjABAAAAbvLI3Z-1dv5A4iwdbF4Aal5H29-kI2dI641Wjzm1OVABS6q8xC2V0dnRnehCZhX4&with_sec_did=1&titleType=title&share_sign=PCi8yPNX9JjpYVslnMrQXoYphHkRHv2WPfQOwExJmpo-&share_version=270400&ts=1698823547&from_ssr=1&timestamp=1698824000&utm_campaign=client_share&app=aweme&utm_medium=ios&tt_from=copy&utm_source=copy",
    "item_ids": "7296353628263140620"
}
```

### Response

```json
{
    "video_info_url": "https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?reflow_source=reflow_page&item_ids=7296353628263140620&a_bogus=DFSzswSLsJxANnEftFdz1U9WcBrN"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 获取 video_info

### Method: POST

> ```
> https://douyin-signature-delta.vercel.app/getVideoInfo
> ```

### Body (**raw**)

```json
{
    "video_url": "https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?reflow_source=reflow_page&item_ids=7296353628263140620&a_bogus=DFSzswSLsJxANnEftFlS0U9WcBrU"
}
```

### Response

```json
{
    "status_code": 0,
    "item_list":...,
    "filter_list": [],
    "extra": {
        "now": 1698993810101,
        "logid": "2023110314432947D61B4A38A4FA4FB046"
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 获取无水印视频地址

### Method: POST

> ```
> https://douyin-signature-delta.vercel.app/getVideoUrl
> ```

### Body (**raw**)

```json
{
    "video_url": "https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?reflow_source=reflow_page&item_ids=7296353628263140620&a_bogus=DFSzswSLsJxANnEftFltzz9WcBJl"
}
```

### Response

```json
{
    "video_url": "https://v11-hl-o.zjcdn.com/daf46f002a278107273bdc33a52e855c/6544a4e0/video/tos/cn/tos-cn-ve-15c001-alinc2/og41LQDzyB2NiiNfhCXOiAI1AAmBtodgOeExRB/?a=1128&ch=0&cr=0&dr=0&cd=0%7C0%7C0%7C0&cv=1&br=2031&bt=2031&cs=0&ds=3&ft=F-_ezGTe0BN16UvjVQaSpv.7usnJ9ydmaglc&mime_type=video_mp4&qs=0&rc=NzZmZTo5OGc7ODlmZzY1O0BpMzVybWc6ZjN3bzMzNGkzM0A2NGBiYF80XzAxNjRiLmNjYSNwb2hucjRvaS1gLS1kLTBzcw%3D%3D&btag=e00088000&dy_q=1698993863&feature_id=f0150a16a324336cda5d6dd0b69ed299&l=20231103144423B7C6ED08F0E3B252EE83",
    "video_title": "...."
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 直接获取无水印视频地址

### Method: POST

> ```
> https://douyin-signature-delta.vercel.app/getRealVideoUrl
> ```

### Body (**raw**)

```json
{
    "url": "https://v.douyin.com/idEAEkV8/"
}
```

### Response

```json
{
    "video_url": "https://v11-hl-o.zjcdn.com/daf46f002a278107273bdc33a52e855c/6544a4e0/video/tos/cn/tos-cn-ve-15c001-alinc2/og41LQDzyB2NiiNfhCXOiAI1AAmBtodgOeExRB/?a=1128&ch=0&cr=0&dr=0&cd=0%7C0%7C0%7C0&cv=1&br=2031&bt=2031&cs=0&ds=3&ft=F-_ezGTe0BN16UvjVQaSpv.7usnJ9ydmaglc&mime_type=video_mp4&qs=0&rc=NzZmZTo5OGc7ODlmZzY1O0BpMzVybWc6ZjN3bzMzNGkzM0A2NGBiYF80XzAxNjRiLmNjYSNwb2hucjRvaS1gLS1kLTBzcw%3D%3D&btag=e00088000&dy_q=1698993863&feature_id=f0150a16a324336cda5d6dd0b69ed299&l=20231103144423B7C6ED08F0E3B252EE83",
    "video_title": "...."
}
```

