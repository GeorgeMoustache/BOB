/**
 * 常見問題
 *
 * @url problem
 *
 */

module.exports = ({ method, query, body }) => {
  return {
    data: [
      {
        id: 59,
        cateTitle: '账号问题',
        img: 'https://static.eosyg.com/imgs/banner/97065fd22bc0ba2f316c825ad715c01e6f540993.png',
        description: '登录名不存在或密码错误等问题',
        problem: [{
            id: 220,
            cate: '账号问题',
            sort: '1',
            cate_desc: '如何开户？',
            cate_answer: '<p>1.点击网站右上角&ldquo;注册&rdquo;的功能键；</p>\r\n<p>2.进入注册页面，填写用户名和密码信息即可成功注册；</p>\r\n<p>3.注册前请确保您已满18周岁并已阅读过我们规则与条款。</p>\r\n<p>APP请点击登录页面的&ldquo;注册&rdquo;的功能键；</p>',
            useful: '378',
            un_useful: '82'
          },
          {
            id: 227,
            cate: '账号问题',
            sort: '2',
            cate_desc: '注册时注意事项有什么？',
            cate_answer: '<p>1.为了规范网站游戏账户管理，每一位会员只允许注册一个游戏账户；</p>\r\n<p>2.同一用户名，邮箱以及电话只能注册一个游戏账户，如果该信息已被使用，将无法再次被用于注册新账户。</p>',
            useful: '56',
            un_useful: '4'
          },
          {
            id: 234,
            cate: '账号问题',
            sort: '3',
            cate_desc: '在网站注册之后，我的个人资料信息安全有保障吗？',
            cate_answer: '<p>关于客户账户资料安全以及客户隐私权，请参考隐私保护规则。</p>',
            useful: '7',
            un_useful: '0'
          },
          {
            id: 241,
            cate: '账号问题',
            sort: '4',
            cate_desc: '忘记已注册的用户名怎么办？',
            cate_answer: '<p>PC：点击网站最上端&ldquo;在线客服&rdquo;联系我司24小时在线客服团队，为您提供必要协助。</p>\r\n<p>H5：点击下方&ldquo;客服&rdquo;联系我司24小时在线客服团队，为您提供必要协助。</p>\r\n<p>APP：点击登录界面&ldquo;先去逛逛&rdquo;进入主界面，联系我司24小时在线客服团队，为您提供必要协助。</p>',
            useful: '6',
            un_useful: '7'
          },
          {
            id: 248,
            cate: '账号问题',
            sort: '5',
            cate_desc: '忘记密码怎么办？',
            cate_answer: '<p>1.在登录页面，点击&ldquo;忘记密码&rdquo;按钮；</p>\r\n<p>2.进入找回密码页面，填写您的用户名，通过您预留的电话或者邮箱获取新密码。</p>\r\n<p>注：如未绑定手机号码与邮箱可联系我司24小时在线客服团队提供相关信息重置密码。</p>',
            useful: '2',
            un_useful: '0'
          },
          {
            id: 255,
            cate: '账号问题',
            sort: '6',
            cate_desc: '如何更改账户密码？',
            cate_answer: '<p>PC：</p>\r\n<p>1.登录账户点击用户名，进入&ldquo;个人中心&rdquo;.</p>\r\n<p>2.点击页面的&ldquo;个人资料&rdquo;--&ldquo;密码管理&rdquo;填写新旧密码.</p>\r\n<p>3.点击&ldquo;完成&rdquo;即可完成修改。</p>\r\n<p>H5：</p>\r\n<p>1.登录账号点击APP右下角&ldquo;我的&rdquo;，进入后 点击&ldquo;个人资料&rdquo;--&ldquo;个人设置&rdquo;.</p>\r\n<p>2.点击&ldquo;修改密码&rdquo;，输入&ldquo;原密码&rdquo;与&ldquo;新密码&rdquo;后确认.</p>\r\n<p>3.点击:&ldquo;提交&rdquo;即可完成修改。</p>\r\n<p>APP：</p>\r\n<p>1.登录账号点击APP右下角&ldquo;我的&rdquo;，进入后 点击&ldquo;个人资料&rdquo;--&ldquo;个人设置&rdquo;.</p>\r\n<p>2.点击&ldquo;修改密码&rdquo;，输入&ldquo;原密码&rdquo;与&ldquo;新密码&rdquo;后确认.</p>\r\n<p>3.点击:&ldquo;提交&rdquo;即可完成修改。</p>',
            useful: '3',
            un_useful: '3'
          },
          {
            id: 262,
            cate: '账号问题',
            sort: '7',
            cate_desc: '登录账户提示被锁是什么原因？',
            cate_answer: '<p>会员输入错误密码20次以上，为了保障会员账号的安全，系统自动锁定会员账号，可以联系我司24小时在线客服团队进行沟通解除锁定。</p>',
            useful: '3',
            un_useful: '0'
          },
          {
            id: 269,
            cate: '账号问题',
            sort: '8',
            cate_desc: '我可以申请注销账户吗？',
            cate_answer: '<p>暂时不暂时不接受任何理由注销会员账户，您可以联系我司24小时在线客服团队申请冻结/停用您的会员账户。</p>',
            useful: '12',
            un_useful: '4'
          },
          {
            id: 276,
            cate: '账号问题',
            sort: '9',
            cate_desc: '怎么申请更改个人资料信息？',
            cate_answer: '<p>客户成功注册后，可以通过手机、PC或其他设备登录账号，修改个人基本资料信息。如过程中遇任何问题，请直接与7*24小时在线客服联系。</p>',
            useful: '17',
            un_useful: '0'
          },
          {
            id: 941,
            cate: '账号问题',
            sort: '11',
            cate_desc: '怎么修改银行卡？',
            cate_answer: '<p>联系7*24小时在线客服同时请您提供以下信息。</p>\r\n<p>&nbsp; &nbsp; 1.真实姓名</p>\r\n<p>&nbsp; &nbsp; 2.手机号码</p>\r\n<p>&nbsp; &nbsp; 3.常登陆地址</p>\r\n<p>&nbsp; &nbsp; 4.倒数第二笔存款成功的页面截图</p>',
            useful: '0',
            un_useful: '0'
          },
          {
            id: 948,
            cate: '账号问题',
            sort: '2',
            cate_desc: '我的银行卡失窃了，账号能重新注册一个吗？',
            cate_answer: '<p>1.一张银行卡只能绑定一个账户，一个账户可以绑定三张银行卡，因此您可以选择再次绑定一张新的银行卡，出款时选择正常使用银行卡即可。</p>\r\n<p>2.账号是可以申请冻结后重新注册，但电话、银行卡、邮箱信息只要绑定在账号内后是无法再次进行绑定的。</p>\r\n<p>3.如果一个人有多个账号，提款时会检测到，您只需冻结不使用的账号即可，不会影响正常提款。</p>',
            useful: '37',
            un_useful: '7'
          },
          {
            id: 955,
            cate: '账号问题',
            sort: '3',
            cate_desc: '怎么删除绑定银行卡?',
            cate_answer: '<p>只有未出款过的绑定银行卡才可以删除，您可以联系24小时在线客服，同时提供以下信息进行申请。</p>\r\n<p>&nbsp; &nbsp; 1.真实姓名</p>\r\n<p>&nbsp; &nbsp; 2.手机号码</p>\r\n<p>&nbsp; &nbsp; 3.删除的银行卡</p>\r\n<p>&nbsp; &nbsp; 4.常登陆地址</p>\r\n<p>&nbsp; &nbsp; 5.倒数第一笔存款成功的页面截图</p>\r\n<p>&nbsp; &nbsp; 核实无误后为您删除银行卡号</p>',
            useful: '3',
            un_useful: '3'
          },
          {
            id: 962,
            cate: '账号问题',
            sort: '15',
            cate_desc: '钱包被锁定怎么办？',
            cate_answer: '<p>您提交提款后您的资金会先进行锁定，该笔资金暂时不可进行游戏。</p>',
            useful: '0',
            un_useful: '0'
          },
          {
            id: 969,
            cate: '账号问题',
            sort: '9',
            cate_desc: '提供这么多信息你泄露了怎么办？',
            cate_answer: '<p>&nbsp; 我公司系统绝对安全，我们决不泄漏客户的个人资料给任何商业机构，此外，我们也会要求有交易往来的银行、中转、代理等严格保密客户的资料。所有的存款将视为贸易户口，并不会交给其它的人士进行交易呢。</p>',
            useful: '0',
            un_useful: '0'
          },
          {
            id: 976,
            cate: '账号问题',
            sort: '21',
            cate_desc: '可以帮我解绑卡号和手机号码？',
            cate_answer: '<p>银行卡已经提款成功后是无法进行解绑的，绑定成功的手机号码也无法进行解绑，可以进行更换。</p>',
            useful: '4',
            un_useful: '1'
          },
          {
            id: 983,
            cate: '账号问题',
            sort: '14',
            cate_desc: '这个账号可以冻结下吗？',
            cate_answer: '<p>请联系24小时在线客服，同时提供以下信息。</p>\r\n<p>&nbsp; &nbsp; 1.您的注册姓名</p>\r\n<p>&nbsp; &nbsp; 2.绑定的手机号码</p>\r\n<p>&nbsp; &nbsp; 3.登录地区</p>\r\n<p>&nbsp; &nbsp; 4.第一笔存款截图</p>\r\n<p>为了节省您的时间，请一次完成以上信息。</p>',
            useful: '1',
            un_useful: '0'
          },
          {
            id: 990,
            cate: '账号问题',
            sort: '11',
            cate_desc: '我可以查看一下我的盈利情况吗？',
            cate_answer: '<p>系统只能查询三个月内的总存、提款，请联系7*24小时在线客服提供以下信息。</p>\r\n<p>&nbsp; &nbsp; 1.真实姓名</p>\r\n<p>&nbsp; &nbsp; 2.手机号码</p>\r\n<p>&nbsp; &nbsp; 3.绑定银行卡后四位数</p>',
            useful: '0',
            un_useful: '0'
          },
          {
            id: 997,
            cate: '账号问题',
            sort: '18',
            cate_desc: '可以帮我账号余额转到另一个账号吗？',
            cate_answer: '<p>两个账户的余额无法共享，且原则一个用户我们只允许使用一个账户，您可以注销一个账户，用一个账户进行游戏。</p>',
            useful: '0',
            un_useful: '0'
          },
          {
            id: 1004,
            cate: '账号问题',
            sort: '19',
            cate_desc: '我要注销我的账号！',
            cate_answer: '<p>账号只能申请冻结不能进行注销，账号一经冻结就无法再次使用，冻结的账号内的信息不能再次进行绑定。</p>\r\n<p>冻结账号需要联系7*24小时在线客服同时提供以下几项资料。</p>\r\n<p>&nbsp; &nbsp; 1.会员账号</p>\r\n<p>&nbsp; &nbsp; 2.姓名</p>\r\n<p>&nbsp; &nbsp; 3.手机号码</p>\r\n<p>&nbsp; &nbsp; 4.常登陆地址</p>\r\n<p>&nbsp; &nbsp; 5.存款成功的页面截图：</p>',
            useful: '3',
            un_useful: '1'
          }
        ]
      },
      {
        id: 66,
        cateTitle: '存款问题',
        img: 'https://static.eosyg.com/imgs/banner/5764b56a7e795913f534d92f6136e30abcbafd95.png',
        description: '存款方式或存款失败等问题',
        problem: [{
            id: 283,
            cate: '存款问题',
            sort: '1',
            cate_desc: '支持哪些支付方式？',
            cate_answer: '<p>1.目前支持：网银转账、网银支付、银联扫码、银联快捷、京东支付、微信、支付宝</p>\r\n<p>2.网站会根据会员存款实时更改充值通道，请以当前显示存款方式为准。</p>',
            useful: '55',
            un_useful: '47'
          },
          {
            id: 290,
            cate: '存款问题',
            sort: '2',
            cate_desc: '为什么我存款成功但未到账？',
            cate_answer: '<p>1.10分钟内未到账：请稍等片刻。</p>\r\n<p>2.10分钟后未到账：联系7*24小时在线客服同时提供以下信息。</p>\r\n<p>&nbsp; &nbsp; &nbsp;1.会员账号</p>\r\n<p>&nbsp; &nbsp; &nbsp;2.存款方式</p>\r\n<p>&nbsp; &nbsp; &nbsp;3.支付人姓名</p>\r\n<p>&nbsp; &nbsp; &nbsp;4.存款成功截图</p>',
            useful: '135',
            un_useful: '122'
          },
          {
            id: 297,
            cate: '存款问题',
            sort: '3',
            cate_desc: '存款至旧的银行卡账户怎么办？',
            cate_answer: '<p>每次存款前请登录官网获取最新的银行卡账户，存至旧的银行卡账户将导致存款无法到账。</p>',
            useful: '2',
            un_useful: '3'
          },
          {
            id: 304,
            cate: '存款问题',
            sort: '4',
            cate_desc: '我没有存款成功，怎么回事？',
            cate_answer: '<p>1.可换其它存款方式。</p>\r\n<p>2.联系24小时在线同时提供以下信息：</p>\r\n<p>&nbsp; &nbsp; &nbsp;1.会员账号</p>\r\n<p>&nbsp; &nbsp; &nbsp;2.充值方式</p>\r\n<p>&nbsp; &nbsp; &nbsp;3.充值失败截图</p>',
            useful: '5',
            un_useful: '6'
          },
          {
            id: 311,
            cate: '存款问题',
            sort: '5',
            cate_desc: '为什么没有我要的存款选项？',
            cate_answer: '<p>联系24小时在线客服同时提供以下信息：</p>\r\n<p>&nbsp; &nbsp; &nbsp;1.会员账号</p>\r\n<p>&nbsp; &nbsp; &nbsp;2.需要充值的方式</p>',
            useful: '4',
            un_useful: '7'
          },
          {
            id: 318,
            cate: '存款问题',
            sort: '6',
            cate_desc: '附言是什么？为什么一定要填？',
            cate_answer: '<p>附言是系统识别对应款项的依据，转账时只有填写附言才能第一时间到账。</p>',
            useful: '0',
            un_useful: '1'
          },
          {
            id: 325,
            cate: '存款问题',
            sort: '7',
            cate_desc: '存款一般多久到账？',
            cate_answer: '<p>获取相应的支付方式，并且按照操作进行付款成功后1-3分钟到账。</p>',
            useful: '1',
            un_useful: '3'
          },
          {
            id: 1011,
            cate: '存款问题',
            sort: '8',
            cate_desc: '微信为什么转不了钱了?',
            cate_answer: '<p>请您退出存款通道后刷新页面再次进行尝试，更换其他金额后再次进行存款，如还是出现该情况请联系7*24小时在线客服，同时提供转账不了该页面截图。</p>',
            useful: '1',
            un_useful: '0'
          },
          {
            id: 1018,
            cate: '存款问题',
            sort: '9',
            cate_desc: '金额输入完”立即存款“按钮是黑色？',
            cate_answer: '<p>1.退出存款通道后刷新页面即可。</p>\r\n<p>2.请您更换其他金额在进行尝试，如还是无法存款，请将该页面进行截图提供给7*24小时在线客服。</p>',
            useful: '3',
            un_useful: '1'
          },
          {
            id: 1025,
            cate: '存款问题',
            sort: '10',
            cate_desc: '微信转账不显示金额？',
            cate_answer: '<p>若出现无法存款的情况，建议您退出APP重新登入，重新提交一笔不是整数的订单，比如您存款200.可以选择存213或者197。</p>',
            useful: '1',
            un_useful: '0'
          },
          {
            id: 1032,
            cate: '存款问题',
            sort: '11',
            cate_desc: '微信充值没有二维码？',
            cate_answer: '<p>如您微信存款时无法正常存款，请您刷新页面更换金额进行存款，当前受到微信官方风控影响导致存款会有一定的限制。若还无法存款您可以选择其它方式进行存款。</p>',
            useful: '0',
            un_useful: '0'
          },
          {
            id: 1039,
            cate: '存款问题',
            sort: '12',
            cate_desc: '微信扫码没有我要的那个存款金额?',
            cate_answer: '<p>1.建议您可以使用网银转账进行存款，方便又快捷。</p>\r\n<p>2.若您坚持使用微信存款，可在存款界面选择&ldquo;网银转账&rdquo;填写正确信息，并获取BOB入款账号，拿到入款卡号后，在微信转账界面选择&ldquo;转银行卡&rdquo;即可进行微信转银行卡操作。（注：若&ldquo;网银转账&rdquo;界面提示暂不可使用微信转账，请勿进行微信转银行卡操作，以免造成不必要的损失）。</p>',
            useful: '1',
            un_useful: '1'
          }
        ]
      },
      {
        id: 73,
        cateTitle: '取款问题',
        img: 'https://static.eosyg.com/imgs/banner/d4625e1f2e1edfb6a0931615246198a62065d572.png',
        description: '取款失败或取款不到账等问题',
        problem: [{
            id: 332,
            cate: '取款问题',
            sort: '1',
            cate_desc: '我取款未到账？',
            cate_answer: '<p>1.30分钟以内未到账：请稍等片刻。</p>\r\n<p>2.30分钟以后未到账：请联系我司24小时在线客服团队同时提供以下信息。</p>\r\n<p>&nbsp; &nbsp; &nbsp;1.会员账号</p>\r\n<p>&nbsp; &nbsp; &nbsp;2.出款时间</p>\r\n<p>&nbsp; &nbsp; &nbsp;3.出款金额</p>',
            useful: '58',
            un_useful: '89'
          },
          {
            id: 339,
            cate: '取款问题',
            sort: '2',
            cate_desc: '为什么取款失败？',
            cate_answer: '<p>1.点击账号用户名进入“个人中心”——投注记录，查看是否满足对应流水。</p>\r\n<p>2.点击查看提款银行信息是否错误。</p>\r\n<p>3.绑定的银行卡是否为我司支持的出款银行卡。</p>\r\n<p>注：*网站目前支持提款的银行：中国银行、建设银行、农业银行、邮政银行、交通银行、招商银行、工商银行、中信银行、平安银行、光大银行、浦发银行、广发银行、华夏银行、兴业银行。 仍无法解决联系7*24小时在线客服同时提供以下信息。</p>\r\n<p>     1.会员账号</p>\r\n<p>     2.出款金额</p>',
            useful: '18',
            un_useful: '49'
          },
          {
            id: 346,
            cate: '取款问题',
            sort: '3',
            cate_desc: '取款输入金额无法提交申请？',
            cate_answer: '<p>1.金额是否从场馆成功转出。</p>\r\n<p>2.是否申请活动未完成所需流水。</p>\r\n<p>3.若提示“您有订单尚未核实成功”请联系客服进行咨询。 若有其他提款问题请与7*24小时客服团队联系。</p>',
            useful: '7',
            un_useful: '0'
          },
          {
            id: 353,
            cate: '取款问题',
            sort: '4',
            cate_desc: '可以使用别人的银行卡进行取款吗？',
            cate_answer: '<p>不可以，为确保客户的账户资金安全，提款需使用游戏账号本人的银行卡才可提款，且提款银行卡姓名必须与注册姓名一致。</p>',
            useful: '6',
            un_useful: '6'
          },
          {
            id: 360,
            cate: '取款问题',
            sort: '5',
            cate_desc: '申请取款需要注意些什么？',
            cate_answer: '<p>1.取款绑定的银行卡姓名需与游戏账户的注册姓名一致。</p>\r\n<p>2.取款绑定的银行卡信息需要正确。</p>\r\n<p>3.若您未申请任何红利优惠，投注满一倍流水即可申请提款。</p>\r\n<p>4.若申请首存红利，则需要满足优惠活动写明的有效投注额要求。</p>\r\n<p>5.全天24小时都可进行取款申请。</p>',
            useful: '17',
            un_useful: '0'
          },
          {
            id: 367,
            cate: '取款问题',
            sort: '6',
            cate_desc: '游戏账户里有钱为什么无法取款？',
            cate_answer: '<p>确认场馆余额是否转账至中心账户，只有主账户有对应余额才可进行取款。</p>',
            useful: '43',
            un_useful: '2'
          },
          {
            id: 374,
            cate: '取款问题',
            sort: '7',
            cate_desc: '可以绑定多张银行卡吗？',
            cate_answer: '<p>一个用户最多可绑定三张银行卡进行提款操作，在账户中心选择&ldquo;银行卡管理&rdquo;进行新增添加即可。</p>',
            useful: '2',
            un_useful: '0'
          },
          {
            id: 381,
            cate: '取款问题',
            sort: '8',
            cate_desc: '取款为什么还需要审核？',
            cate_answer: '<p>审核是相关部门在给您办理出款之前的一个简单步骤，为了确保客户资金安全，所以需要核实相关信息。</p>',
            useful: '2',
            un_useful: '4'
          },
          {
            id: 1046,
            cate: '取款问题',
            sort: '9',
            cate_desc: '提款失败而且钱变少了？',
            cate_answer: '<p>如违反我司游戏规则，系统检测后会扣除您的盈利金额以及彩金，保留本金，提款后冻结账户。如有异议可随时联系7*24小时在线客服</p>',
            useful: '0',
            un_useful: '7'
          },
          {
            id: 1053,
            cate: '取款问题',
            sort: '10',
            cate_desc: '我流水还差多少啊？',
            cate_answer: '<p>首先确认自己是否有申请优惠活动，找到对应优惠活动查看所需流水，再点击右下&ldquo;我的&rdquo;--&ldquo;投注记录&rdquo;查看已打流水，无申请优惠活动情况下1倍流水即可出款。</p>\r\n<p>若无法确认自己所需流水倍数，可直接联系7*24小时在线客服。</p>',
            useful: '0',
            un_useful: '0'
          }
        ]
      },
      {
        id: 80,
        cateTitle: '转账问题',
        img: 'https://static.eosyg.com/imgs/banner/e9aff42ea715408a88a80d978687679bc0bdaa05.png',
        description: '转账失败或转账成功金额消失等问题',
        problem: [{
            id: 388,
            cate: '转账问题',
            sort: '1',
            cate_desc: '主账户/场馆，转场馆/主账户失败？',
            cate_answer: '<p>1.查看场馆是否处于维护当中。</p>\r\n<p>2.是否存在频繁转账操作。</p>\r\n<p>3.请尝试转入整数。</p>\r\n<p>4.联系24小时在线客服进行咨询。</p>',
            useful: '59',
            un_useful: '32'
          },
          {
            id: 395,
            cate: '转账问题',
            sort: '2',
            cate_desc: '转账没有成功，但是钱却没了怎么办？',
            cate_answer: '<p>1.转账时请先退出游戏平台再操作。</p>\r\n<p>2.如转账出现金额丢失,及时联系24小时在线客服，并提供以下信息。</p>\r\n<p>&nbsp; &nbsp; &nbsp;1.会员账号</p>\r\n<p>&nbsp; &nbsp; &nbsp;2.出现的疑问</p>',
            useful: '7',
            un_useful: '19'
          },
          {
            id: 402,
            cate: '转账问题',
            sort: '3',
            cate_desc: '转账到场馆金额变少？',
            cate_answer: '<p>大部分金额变少或金额变负数是系统二次结算导致的结果，若对该部分有异议可联系7*24小时在线客服进行详细咨询。</p>',
            useful: '4',
            un_useful: '1'
          },
          {
            id: 1613,
            cate: '转账问题',
            sort: '555',
            cate_desc: '维护不给通告、维护期间钱转不出来',
            cate_answer: '<p class="MsoNormal"><span style="font-family: Arial; letter-spacing: 0pt; font-size: 9.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 宋体;">如果正常维护情况下，</span>我司<span style="font-family: 宋体;">会提前</span><span style="font-family: Arial;">2</span><span style="font-family: 宋体;">两个小时在前台滚动公告提前告知，如果是紧急维护，请您待维护完成之后再进行转账，给您带来不便十分抱歉</span></span><span style="font-family: 宋体; letter-spacing: 0pt; font-size: 9.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 宋体;">。</span></span></p>',
            useful: '0',
            un_useful: '0'
          }
        ]
      },
      {
        id: 122,
        cateTitle: '其它问题',
        img: 'https://static.eosyg.com/imgs/banner/97ac218af72e2d7f8525877a4c855917629eee00.png',
        description: '申请代理或其他问题',
        problem: [{
            id: 570,
            cate: '其它问题.',
            sort: '1',
            cate_desc: '我怎么没有收到验证码？',
            cate_answer: '<p>1.请检查手机号码是否支持接收验证码</p>\r\n<p>2.请查看短信是否被拦截</p>\r\n<p>若以上方式无法接收验证码请及时联系7*24小时客服团队为您解决。</p>',
            useful: '39',
            un_useful: '3'
          },
          {
            id: 577,
            cate: '其它问题.',
            sort: '2',
            cate_desc: '我余额怎么变成负数了？',
            cate_answer: '<p>出于客户至上的理念，很多赛事会在官方宣布赛果前就进行结算，若是在得到官方数据后结算错误，我司会根据正确的赛果重新结算，导致负数的原因是，会员将错误结算注单金额转出或下注，所以二次结算后可能会为负数；若该笔金额没有使用则不会产生负数。 账户遇到负数问题可及时与7*24小时客服团队联系。</p>',
            useful: '0',
            un_useful: '0'
          },
          {
            id: 584,
            cate: '其它问题.',
            sort: '3',
            cate_desc: '如何申请成为代理？',
            cate_answer: '<p>请您点击首页合营伙伴进行申请，申请成功后请点击相应的联系方式与我们的合营部专员直接取得联系。</p>',
            useful: '2',
            un_useful: '1'
          },
          {
            id: 591,
            cate: '其它问题.',
            sort: '4',
            cate_desc: '如何防DNS网络劫持？',
            cate_answer: '<p>PC端：</p>\r\n<p>1.单击任务栏右边网络小图标，找到“打开网络和共享中心”点击打开</p>\r\n<p>2.左边菜单栏中找到“更改适配器设置”。</p>\r\n<p>3.使用鼠标右键点击正在使用的“本地链接”，打开“属性”。</p>\r\n<p>4.选中“Internet协议版本4(TCP/IPv4)”--点击打开“属性”。</p>\r\n<p>5.点击“使用下面的DNS服务器地址”，修改首选DNS服务器：144.144.144.144 备用DNS服务器：8.8.8.8</p>\r\n<p>移动端：</p>\r\n<p>4G切换WIFI，WIFI切换4G进行尝试。</p>\r\n<p>若还是无法解决，请联系7*24小时在线客服进行咨询。</p>',
            useful: '18',
            un_useful: '6'
          },
          {
            id: 1116,
            cate: '其它问题.',
            sort: '5',
            cate_desc: '我是否可以成为代理？',
            cate_answer: '<p>代理问题您可以联系我们的代理专员进行咨询，代理QQ：345371000、1505856777。</p>',
            useful: '1',
            un_useful: '0'
          },
          {
            id: 1123,
            cate: '其它问题.',
            sort: '6',
            cate_desc: '网站成立多久了？',
            cate_answer: '<p>BOB（Best of Best）体育是全球知名娱乐平台，成立于2008年。持有菲律宾PAGCOR正规牌照，牌照全称为Philippine Amusement and Gaming Corporation BOB体育保持在信息安全，移动投注与技术方面的领先，只为给您营造最优质的游戏体验。</p>',
            useful: '10',
            un_useful: '6'
          },
          {
            id: 1410,
            cate: '其它问题.',
            sort: '12',
            cate_desc: '我们是否有APP?',
            cate_answer: '<p>我司目前可PC端、APP、H5进行游戏。APP分为综合APP、体育APP两种，喜欢多种玩法可下载我司综合APP，若只进行体育投注可下载我司原生体育APP。 注：首页菜单栏点击&ldquo;手机APP&rdquo;即可进行APP下载。</p>',
            useful: '2',
            un_useful: '0'
          },
          {
            id: 1452,
            cate: '其它问题.',
            sort: '12',
            cate_desc: '网页版的网址打不开是否跟浏览器有关？',
            cate_answer: '<p>请切换其它网址进行尝试，同时使用谷歌浏览器进行访问。</p>',
            useful: '1',
            un_useful: '1'
          },
          {
            id: 1494,
            cate: '其它问题.',
            sort: '12',
            cate_desc: '综合APP为何会出现两个选择，一个是WAP一个是APP？',
            cate_answer: '<p class="MsoNormal"><span style="font-family: 微软雅黑; font-size: 10.5pt;"><span style="font-family: 微软雅黑;">两者游戏内容没有区别，</span>WAP模式与APP模式只是不同的端口进入，旨在预防任何一方出现问题，另一方还可正常运行，不影响玩家游戏。</span></p>',
            useful: '0',
            un_useful: '0'
          },
          {
            id: 1522,
            cate: '其它问题.',
            sort: '12',
            cate_desc: '为什么我WIFI可以登陆，4G没办法登陆账号？',
            cate_answer: '<p class="MsoNormal"><span style="font-family: 微软雅黑; font-size: 10.5pt;"><span style="font-family: 微软雅黑;">最大可能是您的一些行为对我公司造成了一定影响，例如恶意冻结我司账号，恶意投诉我司商户等等行为，因此您的设备可能会被风控部门限制。</span></span></p>',
            useful: '1',
            un_useful: '0'
          }
        ]
      },
    ],
    message: '获取成功',
    status_code: 6000
  }
}