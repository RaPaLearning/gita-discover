'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "3a07d694f6ebd05f086c559d0cb0e9c3",
"icons/Icon-maskable-512.png": "3a07d694f6ebd05f086c559d0cb0e9c3",
"icons/Icon-192.png": "25df87b1f03aa79bfe24339f81558a28",
"icons/Icon-maskable-192.png": "25df87b1f03aa79bfe24339f81558a28",
"LICENSE": "e4320891b86a8439120666dcfd719caf",
"manifest.json": "61beb3da402979c33b46048d3288bbde",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/shallow": "bfbb8fd90805277d1cfe98f7bb1cb032",
".git/refs/remotes/origin/main": "bfbb8fd90805277d1cfe98f7bb1cb032",
".git/refs/heads/main": "bfbb8fd90805277d1cfe98f7bb1cb032",
".git/index": "cefe6ee7acc91e85caec41e4c263b7ee",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/logs/HEAD": "fc284c4fbbd8242feda4c3f1afa967e5",
".git/logs/refs/remotes/origin/main": "da0d041699f111618d44886575b6bb37",
".git/logs/refs/heads/main": "dddd63a918bbb644f318d1b0d2b2dd6b",
".git/objects/d4/1afea68af6ce10c350c37dd40d0f126d9cfc5e": "6f1d0a042e1c2c1493fbb7031767e044",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d1/e575137f67ea181e70dc5cd95b712d83186c19": "ad952fd6247d2647a2249a11dd3ce14f",
".git/objects/d1/02bc12b9635dfbcb36dbd6288d1b29111dbb8b": "10c20afa04a4a8dc5a4e27833382a79f",
".git/objects/6d/6f277a05d01a3181327ce032bb0a13bcf069b0": "a660c0ef8958c5a7c7a6462502f13057",
".git/objects/bf/d6e88ef673ec1d85280bc797df5d9b03128cf0": "4cbb270d6f867a86abd1bf5476c6f700",
".git/objects/ee/e51ce0b23cf7610e4fc84f70ceaae05abb0e0d": "8095bd6570cafe377619ab3351baf9df",
".git/objects/92/5296dd51b8b5163c3247de69af08a5e0f03ee9": "4eab417a38574f80da0cd48ebf9a75e2",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/7f/242542c5a4dc334104790c62e7e05b195bed15": "121b3aa27f22068f55e3efd57d72e805",
".git/objects/cd/84d0345a7da8d27d59dbc4353da8f06647b858": "c305a8b78172d1bc169adf2d94bef9b4",
".git/objects/b1/d0a89bfe1122562f81e59acc35a540e3a0f32e": "e79f9f739f8e9f66eb1cb537d3c9649b",
".git/objects/18/dd0971cc0cd583fc4c208fc63cae907bd342d1": "871d9bb0f691448e39ea71b4a1805708",
".git/objects/19/ab1c764b5ab7aab91882ef2bd0d4674bb47d5a": "210146b4fb2418a385c4481c5ba77280",
".git/objects/83/d883affb5c5dacbad310b2963b41115ccf5da1": "418c1167c7f3973fd66aec569ca470b1",
".git/objects/fd/6ae2397be3e324a831506c103dabbedda1688d": "917a43edc3f66eb2febdeb1f65b43b95",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f8/c6b6e95d952bc4ea9fb7d5104e9e0540f183db": "6942e2d1251a993633d866bde74ac61d",
".git/objects/7d/36cfa64f0238993c5da7288abf7bb86cbacfa2": "62a608720862bb43793756016bc3de2b",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/ff/02b0c3e24dad6919eed6b05bdb290a24c8bf81": "a9165cb89ec36310e97c621258f0870e",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/1f/ebd9f1acf349dcb85c7a3f44d25072e6a60e1e": "76a327662b0346ea890700edaf5dfed6",
".git/objects/8f/8be19d0411ce6b2b3ad79ad7198d0011a958e0": "9f161ef3ba679f64c63de376d6ef2c16",
".git/objects/27/82e053bfb6fcee2efbc7993a48d8cbba612fbc": "20dfe1f7ae5cdd0e3c1485112addbb77",
".git/objects/8b/83ea63b24c3130adbf26d07eab28f510857b1a": "cbd6d27a9f66a6576ff5f7bba5009d12",
".git/objects/89/236a2d1cacf49c8d33953877e122cf5e5f13be": "1ae18d8f94c90e6931bf8433970371b2",
".git/objects/23/1540da2cd3bc7393eadac2ae9e59681319d6b3": "409ee79bc0a3cab9f6a0569ac0f815ba",
".git/objects/73/d6f9dba7b99034df0a1d7a0762b8277dc91207": "35fa026fc524cbe500b4307f1a19753f",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/46/a4b6e559f7548107b2d3941dda121da8dbe8fd": "6bbfcc65766f177c5d43f0f01f60900c",
".git/objects/d0/71808eb38ace5818f15ecd97ce91f93d8b64d2": "937b97e84a1a5d395c7c6f637bc376c7",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/97/c943b7811dc4c5b94c5db34bbd4d1f770629ca": "00aa7b8ea331ae627f0ca496cbd145a7",
".git/objects/f4/3c127827aab198765a481ef0fa93c8a0492604": "68a9eff247106f1c25b287c61ff0292f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/d12eff0b1470e38333166f874683b1cc501875": "ac1f45294067799f920b5b65a52ff4bc",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ef/d6248aaa29780712cfeafdd0905f64cec0e9d3": "b9334387ef2616e732d73cc41f0b1d37",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/99/42dd6f029be9c59bb28bc606e92169c35c40b6": "e88a7a03fa571674fbea58ccf365a44c",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/0a/af8a966702e83ebb23f02c0f24488bcb513848": "f53b7e9ce81c466d316d1d33dc677795",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/06/3dcf82eb069f6f91a47e5a47f0ca19198aab30": "98d87f9a4bdac7a33ec336e10eea5a35",
".git/objects/5b/98d09bc7ee8ecb262dce1494b4036ea445cab1": "fb40fb6210c30a07455636c2490de8ed",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ae/14df890e14a5b3ba7d4358815186e0cc22bc45": "f4ad080a18b4139cac75018c504c34df",
".git/objects/ae/e18f0a86ce71ee4c7351759033fcd949c34b1e": "9b9d967e77ba5f6a9d383742630d520a",
".git/objects/e2/33f2b74ad675305d36d8d6e10f27b9e7e62613": "802fc9a182ad1092ef045f46321ba7fd",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/ab/dea33c36293894ff6c81d807a4c27768ff85e5": "5f6102dc3e420cdd176a3186f9f7f723",
".git/objects/24/7007765060562bebe70fcba331298beeb32456": "41fbbc4a4cdcc495b8c3fb33ab37b590",
".git/objects/24/cfc7334f9a49c03a29d7303aede118091cd770": "958b6c427347c5483c17cd4954cac163",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/14bcb95fe8737663c2f7d15ae5f9dd8479cd35": "a38308b46fffe87be6b1c170cf9bb92e",
".git/objects/90/60fa8cc956f5764509684de0638081ec2c72a1": "9589b9310c269a05f88a41cba7afdd01",
".git/objects/96/714c18c62d3c4a442b510711cfbbaf494737d7": "865c5a4e5a694b0bb88edb6f3d847bed",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/1b/1ca21122443b9dec625c2e4f0e7a13d5baf6d9": "4663714dba3d7bc55321bc48e881f578",
".git/objects/3d/6a53c0a287ce4f231eb0177775168cea84e52a": "98f7489d4b07ef9f24f4fb860d02b131",
".git/objects/3d/f4605809b83be7d4be6b68949f56c698a9fc7a": "50b8abe9ffdb6a38b404d5199df594f5",
".git/objects/3d/48ab8b0aaf4e41efaf6d54552e5b0b05d51d55": "724c4ea2ef825ab3f041584cbbdb71f5",
".git/objects/78/a55185ccdeca0b45ef18ed1b9d7b0df1e0d8b5": "4e3a299dda381b384a267d83ccf99021",
".git/objects/69/2066b10c503510ab979bca97cda15b2fe3e328": "cbfe585284f42c3c988c20b227d3830e",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/60/1fda247ef9e91d7fb0e41c61a214d227d95efa": "3f975ada7e1103184728f4411baf2cc4",
".git/objects/d6/8def3fe13dd6e37ac85f407a36aecc15fbcdc8": "93f55b713b6b6b0c13d8ae2ef78e5104",
".git/objects/d2/8207f9409e6cd95c3f5bec6ed0ab9f98687cba": "36180ad7cc5fc94bac7f5f9b36ace11e",
".git/objects/9e/0a01ec17f159060ea8f75d6ce81accc3e7ee8d": "c5b1bd0f4978a330687244f0a1ef92bd",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/95/a34181ad7eec18ce4bbdc52fa1a5159269228b": "4fe12ee6b79b6f6951a294ede4d8bb94",
".git/objects/f7/d1c774cc90bb46c707c3015d72f465875199a6": "781f1e99235bdffdbef083be33dd6821",
".git/objects/d3/1ad023b0da3599595683d244526d0d6bde69cc": "afb6746e3dcba48b436991974fa6734d",
".git/objects/4d/3063e7d9baf84d35bce855247a3c35570f33c3": "cb5a2f459c93876ada4af71efaacec94",
".git/objects/50/d02de9578e5d04f381ab16c03036b920556f0d": "7da54db9e897f6194bda7af0e964d4bd",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/ac/65a9259baf5deabe6369b48c5f19b18a66c950": "5eb7b287af898b9286d021bdc7cc6e14",
".git/objects/2a/44c7e2679243a099885a857d1e8456606f0c04": "234d4171be8f7e9ad3af2d9bba485007",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/edb25f63dd340b0779679cb437ee9e4c1c079c": "25f4f14ccbe9a4d9f78a87538d85c299",
".git/objects/c6/e9e0f5b4f2e8d2f672ab4de704af542c127161": "0eefc7639952c51f396ccd52bada62cf",
".git/objects/17/29ca7c185889a8aefcd06336541b27c039e0ec": "1440af6d1224fa5e3465702e1f4e50dd",
".git/objects/14/948891a28228a13cdba76d95355261c4b27ddd": "187ce33dec291d711f2169478b9c390e",
".git/objects/a6/e851311d3ca21357420a1db1b00633ea551500": "29ec62003e174858d3649aaec285e29e",
".git/objects/a6/909046538bde0eccb08dea6ee4f0da56baedd5": "873a8428289b15466d18c36e2c748247",
".git/objects/aa/4dcad1a9379a70447a5645c30007c3c695fe56": "f20bdc13db1edb34e30860e83220774d",
".git/objects/45/959384970dd37a1a98e2987060d596d0118c25": "2c410568ee07606640d7dc4c33253411",
".git/objects/37/41f701fdeb5a6cedc2947be163eb47e6bc2683": "496f2b7aee19c4574d69b7181f4f5fd9",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/config.worktree": "f0198bfdba75fcb121daecc3fa77420b",
".git/config": "4d7e050b90226745a0d2472c9c755762",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a994d718853eddc76b36e521797bdf75",
".vscode/settings.json": "e9cf0eda383756f81f5af167add6d8d6",
".github/workflows/build-page.sh": "30ac75d021b09547924ea0ae61b22850",
".github/workflows/build.yml": "0bd4095ea2a61a8afda6626cc2a49678",
"index.html": "d72a9684f085ebe7c4b393895be41bc0",
"/": "d72a9684f085ebe7c4b393895be41bc0",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "37cb699f049cb4ed099c0c447538754f",
"assets/google_fonts/OFL.txt": "b16e4340d325fa7943922c3561137cda",
"assets/google_fonts/Caveat-Regular.ttf": "7c66865f58afc98e72e69633ba374178",
"assets/images/Chapter_5.png": "1a5f179ae56eef1ab12b04ec6cfed34e",
"assets/images/Chapter_3.png": "b59ba9c3bb82ad28a6755b70bb6a56f3",
"assets/images/bothfeet.png": "5a4038b1cf7ace32fdd6ba053038a9fa",
"assets/images/Chapter_8.png": "5e3a0acc7ec367824657661037363885",
"assets/images/darkpaper.png": "0c39e473164e47ab9c9179b21e9293af",
"assets/images/Chapter_7.png": "0380461b549dde6640cb52758c409313",
"assets/images/Chapter_13.png": "7d06063a9b4c88232589964ee2d61b1f",
"assets/images/Chapter_15.png": "746d67e48e9ac651879ddca4af85220f",
"assets/images/Chapter_6.png": "3260e6f47078c92ba3b2181033689511",
"assets/images/Chapter_12.png": "b02a3798cb56ce66790ca52742baf6c0",
"assets/images/left-foot.png": "f5dbf828e0d0e664c847e37ddc4b0826",
"assets/images/Chapter_17.png": "9d2a5a0e841d163dd9e18f3ad17ea50f",
"assets/images/The_Beginning_of_Joy.png": "8ad12916702a250410a0eae25242312b",
"assets/images/Chapter_10.png": "f75844dcf0c63ba40e4ff821c5c34777",
"assets/images/shloka_visible_light.png": "9e2b713b147f46665e921ad6cee95d0b",
"assets/images/begin-feed3.png": "cb6e8bfec4618109fbaa5432fd8641a9",
"assets/images/once-again.png": "48eec03ce78c873f94d59f93aedced2b",
"assets/images/look-listen.png": "1686b096ce168aa4590a05d23dd901b6",
"assets/images/begin-chapters.png": "4a63a6417a4fe4027ba4f3283eff1bea",
"assets/images/sunidhi-krishna.png": "8ad12916702a250410a0eae25242312b",
"assets/images/Chapter_2.png": "d3b5d393bac91f5c93d0482fd13b094c",
"assets/images/lightpaper.png": "9cbc4a0c9252eee16de27728e012bb5c",
"assets/images/expand_meaning_dark.png": "88bfd2b3aad9fc02232e2974cbb09a4f",
"assets/images/Chapter_14.png": "032beda9f6ccf07ac515d766e4a89378",
"assets/images/Chapter_4.png": "6a3d90472db8fd3e14de7aa58cc91c71",
"assets/images/Chapter_1.png": "a35ba751992495908e8da891cb11a5ef",
"assets/images/expand_meaning_light.png": "2aab4b2d20857e0b3f5336a1f0987179",
"assets/images/lordfeet.png": "619ddb2c8691292ee78f224dba583884",
"assets/images/Chapter_9.png": "e1cdb2debbb56bfcab54e71c927f2710",
"assets/images/Chapter_18.png": "5bc082a66ae8923deb8829b75d2b0a03",
"assets/images/one-step.png": "96b2f2452fa36421acac0e2658b57b5f",
"assets/images/shloka_visible_dark.png": "92fa7f69a7e15573afc9492fbec3f32e",
"assets/images/ramanuja3.png": "b4778f2c42a7a09c69e9ba341a4d8a7a",
"assets/images/right-foot.png": "1b923ad2db17756a097b0c925bbddc64",
"assets/images/Back-to-Basics.png": "8ad12916702a250410a0eae25242312b",
"assets/images/Chapter_16.png": "4a7a6a3d5195e02e7a6d54944360feca",
"assets/images/Chapter_11.png": "8f4e986adb954636cd3a03fb250cebd4",
"assets/fonts/MaterialIcons-Regular.otf": "aaff8ad1a92132e09de8a230abe7f7f8",
"assets/audio/bell_background.m4a": "782130b1517f715a5e8d5913d8df1802",
"assets/NOTICES": "d70be4f2d5028a62941e06043cb37731",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "f92d9aa7ff871257f459b7f713d30b8f",
"assets/AssetManifest.bin": "2ac45ac2a7432cc980657904f248d471",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "46ac1870ee544ef38fec3b3735fa4011",
"GitaPower/LICENSE": "1cd5b0240bfeff139430ed819afe7a01",
"GitaPower/.git/HEAD": "dfebbe193e255e26c1b45fa445375b01",
"GitaPower/.git/refs/remotes/origin/HEAD": "5dfced0e681541e0b20bfb6b0e4c55fe",
"GitaPower/.git/refs/heads/release": "67820d2f62d683c5f896db8f60156026",
"GitaPower/.git/index": "a8fb348aee6f51721dcebdd5b6649812",
"GitaPower/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"GitaPower/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"GitaPower/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"GitaPower/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"GitaPower/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"GitaPower/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"GitaPower/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"GitaPower/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"GitaPower/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"GitaPower/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"GitaPower/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"GitaPower/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"GitaPower/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"GitaPower/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"GitaPower/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"GitaPower/.git/logs/HEAD": "ff8530f299840804a7da9feda15258f8",
"GitaPower/.git/logs/refs/remotes/origin/HEAD": "ff8530f299840804a7da9feda15258f8",
"GitaPower/.git/logs/refs/heads/release": "ff8530f299840804a7da9feda15258f8",
"GitaPower/.git/objects/pack/pack-3aa40ff648dfa8eceec82e227588c869eb4641bc.rev": "676461e9fbe7b673097314fdeb023f3e",
"GitaPower/.git/objects/pack/pack-3aa40ff648dfa8eceec82e227588c869eb4641bc.pack": "32bc85b16ca763660aac2cca06034464",
"GitaPower/.git/objects/pack/pack-3aa40ff648dfa8eceec82e227588c869eb4641bc.idx": "402fc9ddf4071fcd499b234e7defaedb",
"GitaPower/.git/packed-refs": "bac360f05347a90c582c461f0f425055",
"GitaPower/.git/config": "10a4b5af9e20d084e886a68d0b05dd9f",
"GitaPower/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"GitaPower/.vscode/settings.json": "1e1ac668485aeaa12d3563ffdf080069",
"GitaPower/.github/copilot-instructions.md": "6a466ad6b4610007da978c5f85b19506",
"GitaPower/.github/dependabot.yml": "386d851f7226b291a95093c5554e8761",
"GitaPower/.github/workflows/screenshots.yml": "984e555ae182627c4915fe64d9bbca95",
"GitaPower/.github/workflows/format.yml": "cb8ca51646d12e5e2e90ef35a9275289",
"GitaPower/.github/workflows/compile-headers.yml": "2906841404a233c5ba906fcf6739187e",
"GitaPower/.github/workflows/build-apk.yml": "994da036f4e17721d86f3d2ae3b678a0",
"GitaPower/.github/workflows/checkmycode.yml": "fb47870f4346c33d5174ae6a60835ff7",
"GitaPower/old/build.gradle": "b9f77848d199d4f5e7308533193442d4",
"GitaPower/old/app/release/output.json": "eb8d95bf5cc66f1903041f16228621df",
"GitaPower/old/app/build.gradle": "02eff29d16dd45fcdbd5fb362a49f40e",
"GitaPower/old/app/proguard-rules.pro": "260a8ec65e9b4dae7c04f3c1f3565e88",
"GitaPower/old/app/src/test/java/com/gita/sudeep/gitahtml/ExampleUnitTest.java": "748903a76efc7e3738281143ae5fd8ae",
"GitaPower/old/app/src/androidTest/java/com/gita/sudeep/gitahtml/ExampleInstrumentedTest.java": "9a86750339d0becf09b41c9a30f77c86",
"GitaPower/old/app/src/main/java/com/gita/sudeep/gitahtml/MainActivity.java": "2f1ecbecb44c7916cfe1214aabbf44ec",
"GitaPower/old/app/src/main/res/xml/searchable.xml": "4ea9aab6289fb4b208f175ef3d38cf74",
"GitaPower/old/app/src/main/res/values/styles.xml": "29b4ef1f713d0138e1dad6f8e587bff3",
"GitaPower/old/app/src/main/res/values/dimens.xml": "77708536bdf75969da02b4a5687d1a9b",
"GitaPower/old/app/src/main/res/values/strings.xml": "8d1e35f32fa895e8b20e5a16dca32278",
"GitaPower/old/app/src/main/res/values/colors.xml": "38cf6e35d68dac323a16767a95b6fc6c",
"GitaPower/old/app/src/main/res/mipmap-mdpi/ic_launcher.png": "5ff8945dee0f56d079db8ce6691aaaeb",
"GitaPower/old/app/src/main/res/mipmap-hdpi/ic_launcher.png": "357539403cded61d96161198a0773ffc",
"GitaPower/old/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "93fd2eadf162fd41695cab262540184f",
"GitaPower/old/app/src/main/res/mipmap-xxhdpi/lordfeet.png": "619ddb2c8691292ee78f224dba583884",
"GitaPower/old/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "40d69d20dd057b4a331d03f2f3f2667e",
"GitaPower/old/app/src/main/res/values-w820dp/dimens.xml": "f06a662d076312e2271749c093cf40d3",
"GitaPower/old/app/src/main/res/layout/activity_main.xml": "46928178f353c3676952eddc7389e485",
"GitaPower/old/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "4ad08251ddecfdd6e2a2c53e79b8d8de",
"GitaPower/old/app/src/main/AndroidManifest.xml": "e5d73c02ce6a359da5056f60f2a3ddfa",
"GitaPower/old/gradle.properties": "b48d5e13d6f588e25dc853e045d865ae",
"GitaPower/old/settings.gradle": "a7fe1ac39169b5e5285a5e53662f251b",
"GitaPower/old/gradle/wrapper/gradle-wrapper.properties": "f6af0a266afbc5ec3297a3f5f6d47262",
"GitaPower/old/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"GitaPower/old/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"GitaPower/old/.idea/compiler.xml": "b1e2d88063e7fa8bdd1b2bb48e5f4f40",
"GitaPower/old/.idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
"GitaPower/old/.idea/copyright/profiles_settings.xml": "b1e0b181e080c28b1d116582290e6e97",
"GitaPower/old/.idea/misc.xml": "656c4cdb5ed6d53f6d5b37b183a724b9",
"GitaPower/old/.idea/modules.xml": "1a764374b6a4d915ac381cc4cb52e5d4",
"GitaPower/old/.idea/runConfigurations.xml": "e9e1b64a01daa4c987b8fb1e927d8273",
"GitaPower/old/.idea/gradle.xml": "3bd26642ee5ffb41cad3e18b15737ff8",
"GitaPower/old/gradlew.bat": "0ea6d812cf51675a8503fe23ae178996",
"GitaPower/feeder/checkmycode.sh": "9ab74b1ee062d3070aad0f2958b31925",
"GitaPower/feeder/web/icons/Icon-512.png": "3a07d694f6ebd05f086c559d0cb0e9c3",
"GitaPower/feeder/web/icons/Icon-maskable-512.png": "3a07d694f6ebd05f086c559d0cb0e9c3",
"GitaPower/feeder/web/icons/Icon-192.png": "25df87b1f03aa79bfe24339f81558a28",
"GitaPower/feeder/web/icons/Icon-maskable-192.png": "25df87b1f03aa79bfe24339f81558a28",
"GitaPower/feeder/web/manifest.json": "61beb3da402979c33b46048d3288bbde",
"GitaPower/feeder/web/index.html": "575cdcd2b2c345b19078168918f8779b",
"GitaPower/feeder/web/favicon.png": "46ac1870ee544ef38fec3b3735fa4011",
"GitaPower/feeder/.dart_tool/dartpad/web_plugin_registrant.dart": "b5d3cfecbf835640c14b80347001a01e",
"GitaPower/feeder/.dart_tool/package_graph.json": "cae761857648746e74026854e56d89ff",
"GitaPower/feeder/.dart_tool/package_config.json": "aace32a9bef8f41351299f4a8f807003",
"GitaPower/feeder/.dart_tool/version": "e8896a46519236f2f706a0505f215c24",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/web_static_assets.stamp": "ac0ff52957089098ff26322dbf6174d1",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/web_entrypoint.stamp": "08effc3aefdca2a6550b8d777a43b68d",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/dart_build.stamp": "8d253ebe7ab7946eaa9df0bf8a9d1080",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/dart2js.stamp": "70463699806bebef0bc2a8110cad6baa",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/dart_build_result.json": "cb58ef3e0cdf9c034d8813d273ae0d24",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/app.dill": "881700afde676a0493c42d7e1aba9f2f",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/web_resources.d": "19a84e285e2ea5cef63dca7c0b4f23c4",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/dart2wasm.stamp": "c99655f3f90eb3cf516379191e6c404c",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/web_plugin_registrant.dart": "b5d3cfecbf835640c14b80347001a01e",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/main.dart.js.deps": "bcc2617f6cee3d46b0a12f728d5b2dc6",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/web_templated_files.stamp": "26880229bce85ef1a8bdf1349b8eda74",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/web_release_bundle.stamp": "f104b46e506a32449183901c6086bee5",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/app.dill.deps": "8c6820369b0e273fc340cbd7065e2f86",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/main.dart": "8d4474751abd912e018239a3d6ba7da2",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/dart_build.d": "cd0f32451bf1af10c0157db0663dede4",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/dart2js.d": "08a8d2e3c94106c190b62fd9374f0c45",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/flutter_assets.d": "6a901836e73cbd33021a2cf46974ce2f",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/main.dart.js": "1176b4feb49bd593aae07fa9f4a3a211",
"GitaPower/feeder/.dart_tool/flutter_build/fc60d3529a92e53b9d75191f635722db/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"GitaPower/feeder/android/build.gradle": "49bd0f7b88d0a680032394990a85627f",
"GitaPower/feeder/android/fastlane/Fastfile": "2c7eb0386f664c5e56a02d91c9b080f2",
"GitaPower/feeder/android/fastlane/Appfile": "825e49dd2f63f58704c22a2ea8cbf37f",
"GitaPower/feeder/android/fastlane/README.md": "fd894031e10d5751a08fb278dd8cdc4b",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/full_description.txt": "797419c5aebe93e9bc50e864b97796bc",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/icon.png": "d50a81fd73c530aecf164726dbbd309b",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/8_en-US.png": "82213412dda4cc534f80704062e6b901",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/6_en-US.png": "c00e8acacb4af53fad1856407182d44d",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/5_en-US.png": "395c993a217944ac657e918190094d8e",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/7_en-US.png": "a286e5375035b2825df26129cdd01df9",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/4_en-US.png": "58f4029f82b5f333d8655407c773b2a3",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/2_en-US.png": "ef1fd0fee71b0db20116bb8aaf3adce1",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/3_en-US.png": "a8c0f8edf76da88cab325c80ba316a4f",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/1_en-US.png": "bf205fcde65d511e7b88e17800ee3b7b",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/featureGraphic.png": "eed832d5171244a22cb317dc8cf4e82b",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/title.txt": "e76f68dab5371c38a1e06ff307afbf34",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/changelogs/247.txt": "1b107bba010c4d780eb0cb9bddb32f25",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/video.txt": "d41d8cd98f00b204e9800998ecf8427e",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/short_description.txt": "8905e81314e803d5be7eadf443c8c369",
"GitaPower/feeder/android/fastlane/report.xml": "433b3db423c6c7f09783ef490d99995f",
"GitaPower/feeder/android/Gemfile": "d3b031c4d3ca93d1a3a280bf91b62451",
"GitaPower/feeder/android/Gemfile.lock": "e7728f75bf6b190ea2027f98e1b729c8",
"GitaPower/feeder/android/app/google-services.json": "073c11bef88943ce726541e4df6487aa",
"GitaPower/feeder/android/app/build.gradle": "4b8f3614eab0f7a4226f34b3359bf60d",
"GitaPower/feeder/android/app/src/profile/AndroidManifest.xml": "c7877ab4a09d05fd90440952e2ff5a12",
"GitaPower/feeder/android/app/src/debug/AndroidManifest.xml": "c7877ab4a09d05fd90440952e2ff5a12",
"GitaPower/feeder/android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "081bea18f06954d1895c6372c6139ae0",
"GitaPower/feeder/android/app/src/main/res/values/styles.xml": "f8b8cfbf977690d117f4dade5d27a789",
"GitaPower/feeder/android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"GitaPower/feeder/android/app/src/main/res/mipmap-mdpi/launcher_icon.png": "884cedefad0ebc440ce41ec50052ac4e",
"GitaPower/feeder/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"GitaPower/feeder/android/app/src/main/res/mipmap-hdpi/launcher_icon.png": "1b323f2b2070e4c82eb0d1e27e8bb9f1",
"GitaPower/feeder/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"GitaPower/feeder/android/app/src/main/res/mipmap-xhdpi/launcher_icon.png": "7f617bb811f162034652e6066d14f7a4",
"GitaPower/feeder/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"GitaPower/feeder/android/app/src/main/res/mipmap-xxhdpi/launcher_icon.png": "fcf4fb368926d982fb102d5d0b72b3e0",
"GitaPower/feeder/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"GitaPower/feeder/android/app/src/main/res/values-night/styles.xml": "c22fb29c307f2a6ae4317b3a5e577688",
"GitaPower/feeder/android/app/src/main/res/mipmap-xxxhdpi/launcher_icon.png": "25df87b1f03aa79bfe24339f81558a28",
"GitaPower/feeder/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"GitaPower/feeder/android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"GitaPower/feeder/android/app/src/main/kotlin/com/example/askys/MainActivity.kt": "ef57867bff768dad2180a0de99ae8787",
"GitaPower/feeder/android/app/src/main/AndroidManifest.xml": "48de261cd79286841c1a5a3263b30472",
"GitaPower/feeder/android/gradle.properties": "8310bd8843f3cf1a38c0f0f870b1e8cd",
"GitaPower/feeder/android/settings.gradle": "41b2ddf4fbf95c6cce9fa9fd15401752",
"GitaPower/feeder/android/gradle/wrapper/gradle-wrapper.properties": "e814f6caf2e5451383d0db7de003e9c6",
"GitaPower/feeder/android/local.properties": "4e75e725585b01d46c13faf965c20311",
"GitaPower/feeder/integration_test/integ_test.dart": "2305f30a09081636111bd790b197a992",
"GitaPower/feeder/firebase.json": "e9d3981d52a47f6ee64ffd7e25e76c60",
"GitaPower/feeder/lib/chapter_shloka_widget.dart": "12d140232b3e333cd856ab135b9a58ad",
"GitaPower/feeder/lib/choice_selector.dart": "4c6397341e825a39193c79964781b063",
"GitaPower/feeder/lib/content_widget.dart": "f93b778a9397882b94ef0b3cfaa0e313",
"GitaPower/feeder/lib/chapter_headers.dart": "47ca20c2e4d9fc8a38347cd6f4cd5552",
"GitaPower/feeder/lib/mdcontent.dart": "79b61684f6da26917c6ece9274a67dfd",
"GitaPower/feeder/lib/begin_widget.dart": "2e13b12e931718457b75d94820c7d055",
"GitaPower/feeder/lib/feedplay_icon.dart": "475653cde366f7b729e44ad08e6034a4",
"GitaPower/feeder/lib/guided_tour.dart": "ec2341b598f826b0b76d1697f098d8f2",
"GitaPower/feeder/lib/firebase_options.dart": "91587982be808285fc453611cf363838",
"GitaPower/feeder/lib/search_screen.dart": "e6ff5b9ef852d9b26e7d0087517ebdb2",
"GitaPower/feeder/lib/chaptercontent.dart": "3d70cec5c11d00e08650715cc19dae00",
"GitaPower/feeder/lib/notecontent.dart": "184a416e2575dd0a1043da35b71f8f08",
"GitaPower/feeder/lib/feedcontent.dart": "5be58540be8b240090cf1e72bbb34d71",
"GitaPower/feeder/lib/moving_subtitles.dart": "69232f6721b96072c6c82b089c23790c",
"GitaPower/feeder/lib/choice_bindings.dart": "c5f4a23869a1dbae111bf0bc3ed5212d",
"GitaPower/feeder/lib/tours_widget.dart": "7fc24c7673f0e6d56688d15e5db26324",
"GitaPower/feeder/lib/screenify.dart": "226645bc220eda44472a3a439ab99881",
"GitaPower/feeder/lib/home.dart": "20bcf538608ef8614c669752d3cd9ea3",
"GitaPower/feeder/lib/content_themes.dart": "06558214bf1de166aa3754f2ba6013be",
"GitaPower/feeder/lib/matter_forinline.dart": "72a0d1562241ced4bc898986a33b29e3",
"GitaPower/feeder/lib/browse_toc.dart": "93350feb9cece814cedf85ccd7243409",
"GitaPower/feeder/lib/choices_row.dart": "dc6fef20ce92c24f9999fa7ca3cc3d6b",
"GitaPower/feeder/lib/content_source.dart": "056f688037bdcd17de9664b5ded2b682",
"GitaPower/feeder/lib/build_ident_widget.dart": "c7d9fe0612543df812a2b6fe8e90b5cc",
"GitaPower/feeder/lib/main.dart": "128448573f01acb60ff1a353b1609db0",
"GitaPower/feeder/lib/shloka_headers.dart": "a5e66e8b0732cb2f85c1d3127a52ac4d",
"GitaPower/feeder/lib/content_actions.dart": "9ac60e2490a1c923ea8d4dcbe6baf192",
"GitaPower/feeder/lib/feed_widget.dart": "d2c0d9b1b72affe1655562c687783c55",
"GitaPower/feeder/lib/feed_shloka.dart": "4889cf09e42f62d2f5f5abc938666c55",
"GitaPower/feeder/lib/expandable_span.dart": "19a3996036cb00ab61dea26d996e1da1",
"GitaPower/feeder/lib/prompt_widget.dart": "a183b4d2e13fe9b864249c82de8366dc",
"GitaPower/feeder/lib/tell_if_error.dart": "f4486caa9d24bab4e18b4c9b26b3cca4",
"GitaPower/feeder/lib/personal_widget.dart": "1d67df42853738fe0129f0572565f41e",
"GitaPower/feeder/google_fonts/OFL.txt": "b16e4340d325fa7943922c3561137cda",
"GitaPower/feeder/google_fonts/Caveat-Regular.ttf": "7c66865f58afc98e72e69633ba374178",
"GitaPower/feeder/samples/begin.dart": "03ba791b206cd13dc3dfbb089c526bfa",
"GitaPower/feeder/images/Chapter_5.png": "1a5f179ae56eef1ab12b04ec6cfed34e",
"GitaPower/feeder/images/Chapter_3.png": "b59ba9c3bb82ad28a6755b70bb6a56f3",
"GitaPower/feeder/images/bothfeet.png": "5a4038b1cf7ace32fdd6ba053038a9fa",
"GitaPower/feeder/images/Chapter_8.png": "5e3a0acc7ec367824657661037363885",
"GitaPower/feeder/images/darkpaper.png": "0c39e473164e47ab9c9179b21e9293af",
"GitaPower/feeder/images/Chapter_7.png": "0380461b549dde6640cb52758c409313",
"GitaPower/feeder/images/Chapter_13.png": "7d06063a9b4c88232589964ee2d61b1f",
"GitaPower/feeder/images/Chapter_15.png": "746d67e48e9ac651879ddca4af85220f",
"GitaPower/feeder/images/Chapter_6.png": "3260e6f47078c92ba3b2181033689511",
"GitaPower/feeder/images/Chapter_12.png": "b02a3798cb56ce66790ca52742baf6c0",
"GitaPower/feeder/images/left-foot.png": "f5dbf828e0d0e664c847e37ddc4b0826",
"GitaPower/feeder/images/Chapter_17.png": "9d2a5a0e841d163dd9e18f3ad17ea50f",
"GitaPower/feeder/images/The_Beginning_of_Joy.png": "8ad12916702a250410a0eae25242312b",
"GitaPower/feeder/images/Chapter_10.png": "f75844dcf0c63ba40e4ff821c5c34777",
"GitaPower/feeder/images/shloka_visible_light.png": "9e2b713b147f46665e921ad6cee95d0b",
"GitaPower/feeder/images/begin-feed3.png": "cb6e8bfec4618109fbaa5432fd8641a9",
"GitaPower/feeder/images/once-again.png": "48eec03ce78c873f94d59f93aedced2b",
"GitaPower/feeder/images/look-listen.png": "1686b096ce168aa4590a05d23dd901b6",
"GitaPower/feeder/images/begin-chapters.png": "4a63a6417a4fe4027ba4f3283eff1bea",
"GitaPower/feeder/images/sunidhi-krishna.png": "8ad12916702a250410a0eae25242312b",
"GitaPower/feeder/images/Chapter_2.png": "d3b5d393bac91f5c93d0482fd13b094c",
"GitaPower/feeder/images/lightpaper.png": "9cbc4a0c9252eee16de27728e012bb5c",
"GitaPower/feeder/images/expand_meaning_dark.png": "88bfd2b3aad9fc02232e2974cbb09a4f",
"GitaPower/feeder/images/Chapter_14.png": "032beda9f6ccf07ac515d766e4a89378",
"GitaPower/feeder/images/Chapter_4.png": "6a3d90472db8fd3e14de7aa58cc91c71",
"GitaPower/feeder/images/Chapter_1.png": "a35ba751992495908e8da891cb11a5ef",
"GitaPower/feeder/images/expand_meaning_light.png": "2aab4b2d20857e0b3f5336a1f0987179",
"GitaPower/feeder/images/lordfeet.png": "619ddb2c8691292ee78f224dba583884",
"GitaPower/feeder/images/Chapter_9.png": "e1cdb2debbb56bfcab54e71c927f2710",
"GitaPower/feeder/images/Chapter_18.png": "5bc082a66ae8923deb8829b75d2b0a03",
"GitaPower/feeder/images/one-step.png": "96b2f2452fa36421acac0e2658b57b5f",
"GitaPower/feeder/images/shloka_visible_dark.png": "92fa7f69a7e15573afc9492fbec3f32e",
"GitaPower/feeder/images/ramanuja3.png": "b4778f2c42a7a09c69e9ba341a4d8a7a",
"GitaPower/feeder/images/right-foot.png": "1b923ad2db17756a097b0c925bbddc64",
"GitaPower/feeder/images/Back-to-Basics.png": "8ad12916702a250410a0eae25242312b",
"GitaPower/feeder/images/Chapter_16.png": "4a7a6a3d5195e02e7a6d54944360feca",
"GitaPower/feeder/images/Chapter_11.png": "8f4e986adb954636cd3a03fb250cebd4",
"GitaPower/feeder/README.md": "56d81291e2c00ca3efec38e37c2d130d",
"GitaPower/feeder/tools/generate_headers.dart": "c601b61e384feddb2ade172f44c91181",
"GitaPower/feeder/tools/generate_headers.sh": "4fd972afb2880ca0b0c1636a98346cea",
"GitaPower/feeder/tools/pics-making.pptx": "0165076214b9141a70f286d2b7e72aaf",
"GitaPower/feeder/analysis_options.yaml": "5df212687f3997ccd1310b5b19ebfb78",
"GitaPower/feeder/audio/bell_background.m4a": "782130b1517f715a5e8d5913d8df1802",
"GitaPower/feeder/pubspec.lock": "54d3110b3d1bc3dd57667c04affce63e",
"GitaPower/feeder/screenshots-to-fastlane.sh": "b2ce5c79d18adf4b9aba4111a67be927",
"GitaPower/feeder/gita-begin-offline.sh": "5c239f77d0a05e43b21d48152ac986ed",
"GitaPower/feeder/test/guided_tour_test.dart": "a1f0b534273b5756a76201de156cc239",
"GitaPower/feeder/test/screenify_test.dart": "43f20542e177e426f94e7435b178034b",
"GitaPower/feeder/test/feed_test.dart": "5c17e48578bd30c5e2764ca4dbc4e1a2",
"GitaPower/feeder/test/notescontent_test.dart": "df6bb5266d328ff9721ed249c135103c",
"GitaPower/feeder/test/home_test.dart": "6acbf03f426d0dcec002ef53ca8f5624",
"GitaPower/feeder/test/begin_test.dart": "89aa1a312400bc87cac98322fb987077",
"GitaPower/feeder/test/error_test.dart": "bf1cad7ac380cf9fc279282f1891d4d5",
"GitaPower/feeder/test/browse_test.dart": "9e1185ddf1963af484e91a4786064f7a",
"GitaPower/feeder/test/feed_shloka_test.dart": "09a77823e6ccee887ae3b52cfe80c935",
"GitaPower/feeder/test/search_test.dart": "86a69f68e2a5c4f84f148bbfe40a8828",
"GitaPower/feeder/test/choice_test.dart": "f42e66e44125e108d47e18d2cfc65c78",
"GitaPower/feeder/test/content_test.dart": "abe08eeac770678b43cd92c575205161",
"GitaPower/feeder/test/moving_subtitles_test.dart": "aed5146931c57090ab2c1bd5e8a5fe0e",
"GitaPower/feeder/test/chapter_shloka_test.dart": "77c5117f3d0aea7421ebcb2cd2dea5f6",
"GitaPower/feeder/test/guided_tour_test.mocks.dart": "eade1f7cbb2733db00acd6a74d2a4537",
"GitaPower/feeder/test/chapterstoc_test.dart": "ef30268cfdc7c41561e582ba03a41c79",
"GitaPower/feeder/test/matter_forinline_test.dart": "32cc8426853f96aa7d1e4fab5b730eb8",
"GitaPower/feeder/test/gherrors_test.dart": "3350a2f71486d7a58475838bb82d8955",
"GitaPower/feeder/pubspec.yaml": "892ed795858a689ffd93cfc37ad3579b",
"GitaPower/feeder/test_driver/screenshot_driver.dart": "967c92d125b1b97273d5a06b5348490d",
"GitaPower/feeder/ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"GitaPower/feeder/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"GitaPower/feeder/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"GitaPower/feeder/ios/Runner.xcodeproj/project.pbxproj": "637f4e65191732b478d14f5b158722ce",
"GitaPower/feeder/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"GitaPower/feeder/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"GitaPower/feeder/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"GitaPower/feeder/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "7721d249fd3216036344543336caee67",
"GitaPower/feeder/ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"GitaPower/feeder/ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"GitaPower/feeder/ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"GitaPower/feeder/ios/Runner/Info.plist": "6a6805b630366fa6ca03fc2e2c4fe85f",
"GitaPower/feeder/ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"GitaPower/feeder/ios/Runner/GeneratedPluginRegistrant.m": "669cef1a318ed1403ef6316d58994b5c",
"GitaPower/feeder/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"GitaPower/feeder/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"GitaPower/feeder/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"GitaPower/feeder/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"GitaPower/feeder/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "233c905237709bda9e74455369333e78",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-57x57@2x.png": "fde3b51e52ea870f47ceeffceb9006f4",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "08cbfa0084ca7dc01b683eb45b74b056",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "e35796d2f3eeaa19b75fb19dfdcf7768",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "5dd5a96ea44e05e0122902a6edfe74d5",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-72x72@1x.png": "1b323f2b2070e4c82eb0d1e27e8bb9f1",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7ddc966ef972c3b3ebc47e45cc69e420",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-50x50@1x.png": "80fb1fdac0b1e5de1141041e819393de",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "e7d6d960820bd451b4b9c83346f17d06",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "18819bc417c6ba3702ecd5a22178effe",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "e35796d2f3eeaa19b75fb19dfdcf7768",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "e3b3ed2ac55d2cfbaed57e474129280d",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-57x57@1x.png": "719c65f5f2aec01bdbfb00b4b68b4ea2",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "215a88d3f40946ac7013bb01e3237d35",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "adeb744cf098646d5e056356915b83f2",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "8475e474875c689ad50d67c464cb7508",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "8475e474875c689ad50d67c464cb7508",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-72x72@2x.png": "fcf4fb368926d982fb102d5d0b72b3e0",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "095c74f33cd3000055c5a0dbbe9fe524",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "ff750a04e98a0a8ee0cd2f99ac88aca4",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-50x50@2x.png": "c9b27efc6a503d6badbcbee3432ae229",
"GitaPower/feeder/ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"GitaPower/feeder/ios/Flutter/ephemeral/flutter_lldbinit": "4c0c8550624ce117572c484ae3e7d9ce",
"GitaPower/feeder/ios/Flutter/ephemeral/flutter_lldb_helper.py": "98fc75412162af387e2e3461e4e58094",
"GitaPower/feeder/ios/Flutter/Generated.xcconfig": "a150d8ca987d28615178858cdb197727",
"GitaPower/feeder/ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"GitaPower/feeder/ios/Flutter/flutter_export_environment.sh": "6671f62a3d2a4dedded68fe89f089803",
"GitaPower/feeder/ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"GitaPower/feeder/ios/Flutter/AppFrameworkInfo.plist": "db12a133dfacff2c7ffcdfe99a669634",
"GitaPower/feeder/macos/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"GitaPower/feeder/macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"GitaPower/feeder/macos/Runner.xcodeproj/project.pbxproj": "ef7364ac03296a3a98e85390ca229b7b",
"GitaPower/feeder/macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"GitaPower/feeder/macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "0e8db34e27c12e86442be880a11f4e7e",
"GitaPower/feeder/macos/Runner/MainFlutterWindow.swift": "25da60ddd7c7148c2a40dc3194b8ddca",
"GitaPower/feeder/macos/Runner/DebugProfile.entitlements": "4ad77e84621dc5735c16180a0934fcde",
"GitaPower/feeder/macos/Runner/Base.lproj/MainMenu.xib": "85bdf02ea39336686f2e0ff5f52137cc",
"GitaPower/feeder/macos/Runner/Configs/AppInfo.xcconfig": "9c56c27700c5950b231ef8e7f08df4be",
"GitaPower/feeder/macos/Runner/Configs/Debug.xcconfig": "783e2b0e2aa72d8bc215462bb8d1569d",
"GitaPower/feeder/macos/Runner/Configs/Release.xcconfig": "709485d8ea7b78479bf23eb64281287d",
"GitaPower/feeder/macos/Runner/Configs/Warnings.xcconfig": "bbde97fb62099b5b9879fb2ffeb1a0a0",
"GitaPower/feeder/macos/Runner/Info.plist": "9ffcbec0a18fdad9d3d606656fd46f9a",
"GitaPower/feeder/macos/Runner/AppDelegate.swift": "f35757566ef1832592cec47b89197f94",
"GitaPower/feeder/macos/Runner/Release.entitlements": "fc4ad575c1efec3d097fb9d40a0f702f",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "9e943798973d8337e94637a639bf1a57",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "4a7edbb5a7b3072d6452de36331bb2a8",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "1d48e925145d4b573a3b5d7960a1c585",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "e3516d01efaafaf34ca2ee2142181cad",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "586d6c7e93b7f746e6e94e35a7dbb6a5",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "64b46626103336f80c23fc64656272a1",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8a4fb0d67f0ecf1865d9d9f97e0f449a",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "b7da05eb1e3dde358fb6591cf3a29348",
"GitaPower/feeder/macos/Flutter/Flutter-Release.xcconfig": "f6991d7432e1664af118cc9531127016",
"GitaPower/feeder/macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "e258764829e348ec7a4406a556f52c4a",
"GitaPower/feeder/macos/Flutter/ephemeral/flutter_export_environment.sh": "fd854d46373a0df07ac292824a251e89",
"GitaPower/feeder/macos/Flutter/GeneratedPluginRegistrant.swift": "2f95b9022395f541646ffbcab4b82512",
"GitaPower/feeder/macos/Flutter/Flutter-Debug.xcconfig": "f6991d7432e1664af118cc9531127016",
"GitaPower/privacy-policy.md": "a8e77f6e0373f47f132f77b299d7d169",
"GitaPower/htmlapp/Chapter%2016.html": "1189bcad32a6f1f3055aff4038e608c4",
"GitaPower/htmlapp/Chapter%2012.html": "d1021eb33e9b08f55bc22e3da11cc0a8",
"GitaPower/htmlapp/Transliteration%20notes.html": "508317cc59fb9c5e37f3837f56adc948",
"GitaPower/htmlapp/search.png": "369e9ca83c36c4c3cb2df29efa8dc19b",
"GitaPower/htmlapp/step_1.png": "7bf2cca9941426320a74e1b2067bdff2",
"GitaPower/htmlapp/Chapter%209.html": "43583d181fee3ad0390b2182a760523e",
"GitaPower/htmlapp/Chapter%2010.html": "81c20970fec9763918c37d3cd0bbdf92",
"GitaPower/htmlapp/leftfoot.png": "58fa9baaa75b976d3efd2dffbd46e977",
"GitaPower/htmlapp/Back%20to%20Basics.html": "6b9218b46866e5cbc8c0154884b85a8c",
"GitaPower/htmlapp/Chapter%203.html": "1f556396bfd15aa6d488babad4484c10",
"GitaPower/htmlapp/The%20Beginning%20of%20Joy.html": "34f1be1f1cf1b2f8c9537166b60ecf15",
"GitaPower/htmlapp/Chapter%207.html": "a3c83f990e14b56f7d4dd939f585a4c2",
"GitaPower/htmlapp/rightfoot.png": "4be22d8c05cab72e9eae740b5b1822ce",
"GitaPower/htmlapp/Chapter%205.html": "e0eea56c47e16c24ddaf66dc07f7ce3c",
"GitaPower/htmlapp/Chapter%202.html": "8598f835de07a176fc560ca0f9c0c639",
"GitaPower/htmlapp/Chapter%204.html": "d9f055815eba734b580f3b506476b750",
"GitaPower/htmlapp/Chapter%2018.html": "4c4f22646ca7c5e2b369426409d86adb",
"GitaPower/htmlapp/snskrtstationary.png": "a01bf3ba0e9da99cfcc24ebd5f2eceb4",
"GitaPower/htmlapp/appic.png": "3ff6555bf73fcaab02c918ac6379adb7",
"GitaPower/htmlapp/Chapter%2017.html": "bfde9445f041dda67d76e1c5ebed571c",
"GitaPower/htmlapp/step_up.png": "fc1f4a2054048397198d1298bbb0ce3b",
"GitaPower/htmlapp/step_2.png": "17f79414f5b77aaa44e93dd1ca0e44cc",
"GitaPower/htmlapp/features.xml": "2f3af66669d9b60f296c56017eca8b33",
"GitaPower/htmlapp/karmayoga.html": "cc8cf789d8ce1035ca48dcd0229496ce",
"GitaPower/htmlapp/Chapter%2013.html": "6095bb9a2e490e6d08fab168f6f37913",
"GitaPower/htmlapp/ACover.html": "9358e0a0d7042e434214e71fed91c572",
"GitaPower/htmlapp/step_down.png": "f12e14e0e92a9fbc70747bd6bd81db5b",
"GitaPower/htmlapp/sanskrtphrasetgl.png": "e72cd12d04e2ce8b9438561b603b4e48",
"GitaPower/htmlapp/jnanayoga.html": "ea4eed67f0a2fc37ee8b0b8eb2b47100",
"GitaPower/htmlapp/Chapter%208.html": "76970da9d6ba714f07a57f6278d1696d",
"GitaPower/htmlapp/step_0.png": "8671fe2ef71c93011d2c3e81f9cb1478",
"GitaPower/htmlapp/Chapter%2015.html": "fc511544abca6e309aa3d26c2eff421f",
"GitaPower/htmlapp/Chapter%206.html": "36316ccaa96626b502c870e10bccd23f",
"GitaPower/htmlapp/step_3.png": "9c0bd72ef19051b4c1188e9ee0c643d4",
"GitaPower/htmlapp/Chapter%201.html": "0a3546ac00dcf2f1c0a7da2e286f2f10",
"GitaPower/htmlapp/Chapter%2011.html": "1dd65ec242721773fe667e0e36612abc",
"GitaPower/htmlapp/Chapter%2014.html": "592332576763485e34fa8ed517af8bd0",
"flutter_bootstrap.js": "f00e6b1daf7e323ebcfd2445a84e05c3",
"version.json": "525004ac0404533f3cb7c46272d630e1",
"main.dart.js": "1176b4feb49bd593aae07fa9f4a3a211"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
