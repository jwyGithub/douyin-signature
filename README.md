# 抖音签名接口

## 获取 location

### Method: POST

> ```
> https://douyin-signature-delta.vercel.app/api/getLocation
> ```

### Body (**raw**)

```json
{
    "url": "7.17 复制打开抖音，看看【山见的图文作品】# 这个就是爱情  https://v.douyin.com/iNRCnswj/ 12/04 xFH:/ C@h.ba "
}
```

### Response

```typescript
interface Response {
    code: number;
    message: string;
    data: {
        location: string;
        short_url: string;
    };
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 获取 签名 xbogus

### Method: POST

> ```
> https://douyin-signature-delta.vercel.app/api/getSingature
> ```

### Body (**raw**)

```json
{
    "location": "https://www.iesdouyin.com/share/note/7331995262476422412/?region=CN&mid=7312724381656943410&u_code=l7665j8k&did=MS4wLjABAAAAVbQA55vA0iRm1pbUprb_Nclc0FZwD_HURHyDsc6aIfPxoE_w43guh0L8v94j80l_&iid=MS4wLjABAAAA99zrjTlWUmxKuGCKA_3KiQ6PazBcEN96YfHq7Wxa-qs6Wt5j78RDN8xpD1eTafOH&with_sec_did=1&titleType=title&schema_type=37&share_sign=jqS2uL_t5xUfwML9QiH_XqZwwgVi3uZgiSJhGkLMMnY-&share_version=280400&ts=1707180558&from_aid=1128&from_ssr=1&timestamp=1707187425&utm_campaign=client_share&app=aweme&utm_medium=ios&tt_from=copy&utm_source=copy"
}
```

### Response

```typescript
interface Response {
    code: number;
    message: string;
    data: {
        xbogus: string;
    };
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 获取 视频详情

### Method: POST

> ```
> https://douyin-signature-delta.vercel.app/api/getVideoDetail
> ```

### Body (**raw**)

```json
{
    "url": "7.17 复制打开抖音，看看【山见的图文作品】# 这个就是爱情  https://v.douyin.com/iNRCnswj/ 12/04 xFH:/ C@h.ba "
}
```

### Response

```typescript
interface Response {
    code: number;
    message: string;
    data: {
        item_list: any[];
        filter_list: any[];
        [x: string]: any;
    };
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 获取 视频 url

### Method: POST

> ```
> https://douyin-signature-delta.vercel.app/api/getVideoUrl
> ```

### Body (**raw**)

```json
{
    "url": "1.56 mdN:/ 复制打开抖音，看看【夜夜资讯的作品】用魔法打败魔法# 动物的迷惑行为 # 路边抓拍 #... https://v.douyin.com/BdUBdnV/"
}
```

### Response

```typescript
interface Response {
    code: number;
    message: string;
    data: {
        video_title: string;
        video_url: string;
        play_url: string;
    };
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 下载视频

### Method: GET

> ```
> https://douyin-signature-delta.vercel.app/api/downloadVideo?url=1.56 mdN:/ 复制打开抖音，看看【夜夜资讯的作品】用魔法打败魔法%23 动物的迷惑行为 %23 路边抓拍 %23... https://v.douyin.com/BdUBdnV/
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

