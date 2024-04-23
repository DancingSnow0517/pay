// 配置文件

const basic = { // 基础设置
    favicon: 'https://blog.dancingsnow.xyz/images/avatar.png', // 页面图标
    title: '(～￣▽￣)～', // 页面标题
    avatar: 'https://gravatar.loli.net/avatar/', // 头像 URL
    name: 'DancingSnow', // 头像下的昵称
    sign: '快给我打钱~', // 个性签名或提示文字，可使用 HTML 格式
    user_page: 'https://blog.dancingsnow.xyz/', // 非支付软件点击头像或名字时跳转链接。留空或删除则不跳转
    footer: '', // 页脚文字，可使用 HTML 格式
    uri_redirect: false // 若收款码 URL 是网址，是否直接跳转而不显示二维码
}

const theme = { // 主题设置
    page_bg: '#c3d7df', // 网页背景（十六进制，或图片 URL）
    card_bg: '#ffffffcc', // 卡片背景色（十六进制，可带透明度，不能是 URL）
    qrcode_bg: '#eaeffde6', // 二维码背景色（十六进制，可带透明度，不能是 URL）
    qrcode_fg: '#335eea' // 二维码颜色（十六进制，可带透明度，不能是 URL）
}

const tools = { // 右上角小工具设置
    dl_btn: true, // 二维码下载
    badge_generator: true // 徽章生成器
}

const urls = [ // 付款方式列表
    {
        name: '支付宝', // 名称
        ua: 'Alipay', // User-Agent 正则表达式
        addr: 'https://qr.alipay.com/fkx13158ykg6exwh3ncxm7d' // 收款码 URL
    },
    {
        name: '微信',
        ua: 'MicroMessenger\/',
        img: 'wechat.png' // 使用 img 而非 addr 参数以使用赞赏码
    }
]
