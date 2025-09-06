'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"LICENSE": "e4320891b86a8439120666dcfd719caf",
".git/refs/remotes/origin/main": "5a91150d907d3baebd3b7f3cd95b8da7",
".git/refs/heads/main": "5a91150d907d3baebd3b7f3cd95b8da7",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/ee/e51ce0b23cf7610e4fc84f70ceaae05abb0e0d": "8095bd6570cafe377619ab3351baf9df",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/fd/6ae2397be3e324a831506c103dabbedda1688d": "917a43edc3f66eb2febdeb1f65b43b95",
".git/objects/f7/d1c774cc90bb46c707c3015d72f465875199a6": "781f1e99235bdffdbef083be33dd6821",
".git/objects/8f/8be19d0411ce6b2b3ad79ad7198d0011a958e0": "9f161ef3ba679f64c63de376d6ef2c16",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/96/714c18c62d3c4a442b510711cfbbaf494737d7": "865c5a4e5a694b0bb88edb6f3d847bed",
".git/objects/d0/71808eb38ace5818f15ecd97ce91f93d8b64d2": "937b97e84a1a5d395c7c6f637bc376c7",
".git/objects/5b/36b572d6eed9a629252fceebbc41ac418c2926": "b2c733a18fddaf020f5ce9d21d190d15",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/7e/5877ed9112358d5d107c193a2a564455c78782": "974591656c5d85e5b4111c35338e8e2c",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/d6248aaa29780712cfeafdd0905f64cec0e9d3": "b9334387ef2616e732d73cc41f0b1d37",
".git/objects/22/7decc5ad24717349e1898a3479dfb2e2055cc1": "4149ba0e8fcbbc7b68db315587fa7e26",
".git/objects/ff/02b0c3e24dad6919eed6b05bdb290a24c8bf81": "a9165cb89ec36310e97c621258f0870e",
".git/objects/a6/e851311d3ca21357420a1db1b00633ea551500": "29ec62003e174858d3649aaec285e29e",
".git/objects/a6/74538519a680d5e4de8d8ab05d33148b1d0dbf": "e18054ca090dfc91ec3fc707b50976e6",
".git/objects/34/25d24295894ca2f79cd8eb9adc7bea744a78dd": "55fdbe67a40f71a39a0b2742ee04bfa7",
".git/objects/e6/879eac53922bb1e812c1fee8c33960f1cdf4a3": "9f7b04bb85ec3d753cc5d22a130412e9",
".git/objects/dd/7bb4d6460b2d37ecdb72c7a513577808c34045": "4735d26fcf8a254af3fd3f7d14976802",
".git/objects/60/1fda247ef9e91d7fb0e41c61a214d227d95efa": "3f975ada7e1103184728f4411baf2cc4",
".git/objects/4a/db0436d63b1029cc8c59bdd97730181a41ca8c": "fd025f61e40ee4e0a54b5c66e7fafe4a",
".git/objects/8c/7cc2a7760bca90bc08d6cdc604860b0eef2be2": "f6f17da6b29c41321b33c8bfc634347c",
".git/objects/69/2066b10c503510ab979bca97cda15b2fe3e328": "cbfe585284f42c3c988c20b227d3830e",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/7c/ae36185c8282692c7662f509ee87d81724ff50": "916da0d93c2699a694ab4800ce16d3dd",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/d1/02bc12b9635dfbcb36dbd6288d1b29111dbb8b": "10c20afa04a4a8dc5a4e27833382a79f",
".git/objects/d1/e575137f67ea181e70dc5cd95b712d83186c19": "ad952fd6247d2647a2249a11dd3ce14f",
".git/objects/1d/5e36efda6a62f6afd5e4c4c5c42a295dab9bb2": "20d5d080d30ce835540ef3ce41f12342",
".git/objects/57/5304b1eeb1f1de03f56804eae9036e0f50b0a9": "ec27f020122ff9c1dd9d44133cb3c63d",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/27/82e053bfb6fcee2efbc7993a48d8cbba612fbc": "20dfe1f7ae5cdd0e3c1485112addbb77",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/f8/c6b6e95d952bc4ea9fb7d5104e9e0540f183db": "6942e2d1251a993633d866bde74ac61d",
".git/objects/1f/ebd9f1acf349dcb85c7a3f44d25072e6a60e1e": "76a327662b0346ea890700edaf5dfed6",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/73/d6f9dba7b99034df0a1d7a0762b8277dc91207": "35fa026fc524cbe500b4307f1a19753f",
".git/objects/92/5296dd51b8b5163c3247de69af08a5e0f03ee9": "4eab417a38574f80da0cd48ebf9a75e2",
".git/objects/99/1d556d56865a53c27daebdddbd7b3366847c52": "71269b2b29a9fbd15a0e8bc27068b427",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/37/41f701fdeb5a6cedc2947be163eb47e6bc2683": "496f2b7aee19c4574d69b7181f4f5fd9",
".git/objects/06/3dcf82eb069f6f91a47e5a47f0ca19198aab30": "98d87f9a4bdac7a33ec336e10eea5a35",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ae/14df890e14a5b3ba7d4358815186e0cc22bc45": "f4ad080a18b4139cac75018c504c34df",
".git/objects/ae/e02703f2b7ac0a6a6040758c5892ef340025ed": "238175a77ce3ef4f120e824e24723a04",
".git/objects/3a/cb495188d830558c14f4663d73c5488b8186b8": "e5cca1d67d69c8ed553897d4835a38af",
".git/objects/97/c943b7811dc4c5b94c5db34bbd4d1f770629ca": "00aa7b8ea331ae627f0ca496cbd145a7",
".git/objects/e2/33f2b74ad675305d36d8d6e10f27b9e7e62613": "802fc9a182ad1092ef045f46321ba7fd",
".git/objects/7f/8020abb6779b8f9e56f18c09a93fec2eb0535a": "2ec1855161bff52e42fd7eb85bf163f5",
".git/objects/cd/84d0345a7da8d27d59dbc4353da8f06647b858": "c305a8b78172d1bc169adf2d94bef9b4",
".git/objects/23/1540da2cd3bc7393eadac2ae9e59681319d6b3": "409ee79bc0a3cab9f6a0569ac0f815ba",
".git/objects/6d/6f277a05d01a3181327ce032bb0a13bcf069b0": "a660c0ef8958c5a7c7a6462502f13057",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/24/7007765060562bebe70fcba331298beeb32456": "41fbbc4a4cdcc495b8c3fb33ab37b590",
".git/objects/eb/d12eff0b1470e38333166f874683b1cc501875": "ac1f45294067799f920b5b65a52ff4bc",
".git/objects/a4/cb2fde68af64832e141ad9dc0d033f3d626c82": "ad1f8d43c50091a2059cbaf236401569",
".git/objects/90/bbbaee4cc2bafd1d123c61499ed04542bce822": "47f31b40869db8fdf0cacd9faf109321",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/c2/7c53f4ecc6913a7360c83505f89de9b43b1461": "06ae0ff793277f71ebe40e296d84b8a1",
".git/objects/50/d02de9578e5d04f381ab16c03036b920556f0d": "7da54db9e897f6194bda7af0e964d4bd",
".git/objects/0a/af8a966702e83ebb23f02c0f24488bcb513848": "f53b7e9ce81c466d316d1d33dc677795",
".git/objects/18/dd0971cc0cd583fc4c208fc63cae907bd342d1": "871d9bb0f691448e39ea71b4a1805708",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/89/236a2d1cacf49c8d33953877e122cf5e5f13be": "1ae18d8f94c90e6931bf8433970371b2",
".git/objects/14/948891a28228a13cdba76d95355261c4b27ddd": "187ce33dec291d711f2169478b9c390e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/shallow": "5a91150d907d3baebd3b7f3cd95b8da7",
".git/config.worktree": "f0198bfdba75fcb121daecc3fa77420b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "7e3e45653e7d5fa66a93265680844d6a",
".git/logs/refs/remotes/origin/main": "175a164c4bfad1db583b423eefb637ef",
".git/logs/refs/heads/main": "b57ecfc361d74cf6e7485c605aacf4c3",
".git/logs/HEAD": "a47554a8930a05b7acaf5ac746a8d045",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/FETCH_HEAD": "caf8dbfb9ce646e311ed47df0aae3a6e",
".git/index": "1862f06c55d52b74fb44507a579c7a4e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"manifest.json": "61beb3da402979c33b46048d3288bbde",
".github/workflows/build.yml": "0bd4095ea2a61a8afda6626cc2a49678",
".github/workflows/build-page.sh": "30ac75d021b09547924ea0ae61b22850",
"icons/Icon-192.png": "25df87b1f03aa79bfe24339f81558a28",
"icons/Icon-maskable-512.png": "3a07d694f6ebd05f086c559d0cb0e9c3",
"icons/Icon-maskable-192.png": "25df87b1f03aa79bfe24339f81558a28",
"icons/Icon-512.png": "3a07d694f6ebd05f086c559d0cb0e9c3",
"main.dart.js": "fb976d724d77e21f8f1a4d4d0a2c5d53",
"version.json": "525004ac0404533f3cb7c46272d630e1",
"GitaPower/old/gradle/wrapper/gradle-wrapper.properties": "f6af0a266afbc5ec3297a3f5f6d47262",
"GitaPower/old/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"GitaPower/old/app/release/output.json": "eb8d95bf5cc66f1903041f16228621df",
"GitaPower/old/app/proguard-rules.pro": "260a8ec65e9b4dae7c04f3c1f3565e88",
"GitaPower/old/app/src/main/AndroidManifest.xml": "e5d73c02ce6a359da5056f60f2a3ddfa",
"GitaPower/old/app/src/main/res/xml/searchable.xml": "4ea9aab6289fb4b208f175ef3d38cf74",
"GitaPower/old/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "4ad08251ddecfdd6e2a2c53e79b8d8de",
"GitaPower/old/app/src/main/res/values-w820dp/dimens.xml": "f06a662d076312e2271749c093cf40d3",
"GitaPower/old/app/src/main/res/layout/activity_main.xml": "46928178f353c3676952eddc7389e485",
"GitaPower/old/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "40d69d20dd057b4a331d03f2f3f2667e",
"GitaPower/old/app/src/main/res/mipmap-xxhdpi/lordfeet.png": "619ddb2c8691292ee78f224dba583884",
"GitaPower/old/app/src/main/res/mipmap-hdpi/ic_launcher.png": "357539403cded61d96161198a0773ffc",
"GitaPower/old/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "93fd2eadf162fd41695cab262540184f",
"GitaPower/old/app/src/main/res/values/dimens.xml": "77708536bdf75969da02b4a5687d1a9b",
"GitaPower/old/app/src/main/res/values/styles.xml": "29b4ef1f713d0138e1dad6f8e587bff3",
"GitaPower/old/app/src/main/res/values/strings.xml": "8d1e35f32fa895e8b20e5a16dca32278",
"GitaPower/old/app/src/main/res/values/colors.xml": "38cf6e35d68dac323a16767a95b6fc6c",
"GitaPower/old/app/src/main/res/mipmap-mdpi/ic_launcher.png": "5ff8945dee0f56d079db8ce6691aaaeb",
"GitaPower/old/app/src/main/java/com/gita/sudeep/gitahtml/MainActivity.java": "2f1ecbecb44c7916cfe1214aabbf44ec",
"GitaPower/old/app/src/test/java/com/gita/sudeep/gitahtml/ExampleUnitTest.java": "748903a76efc7e3738281143ae5fd8ae",
"GitaPower/old/app/src/androidTest/java/com/gita/sudeep/gitahtml/ExampleInstrumentedTest.java": "9a86750339d0becf09b41c9a30f77c86",
"GitaPower/old/app/build.gradle": "02eff29d16dd45fcdbd5fb362a49f40e",
"GitaPower/old/gradle.properties": "b48d5e13d6f588e25dc853e045d865ae",
"GitaPower/old/gradlew.bat": "0ea6d812cf51675a8503fe23ae178996",
"GitaPower/old/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"GitaPower/old/.idea/compiler.xml": "b1e2d88063e7fa8bdd1b2bb48e5f4f40",
"GitaPower/old/.idea/misc.xml": "656c4cdb5ed6d53f6d5b37b183a724b9",
"GitaPower/old/.idea/runConfigurations.xml": "e9e1b64a01daa4c987b8fb1e927d8273",
"GitaPower/old/.idea/copyright/profiles_settings.xml": "b1e0b181e080c28b1d116582290e6e97",
"GitaPower/old/.idea/gradle.xml": "3bd26642ee5ffb41cad3e18b15737ff8",
"GitaPower/old/.idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
"GitaPower/old/.idea/modules.xml": "1a764374b6a4d915ac381cc4cb52e5d4",
"GitaPower/old/settings.gradle": "a7fe1ac39169b5e5285a5e53662f251b",
"GitaPower/old/build.gradle": "b9f77848d199d4f5e7308533193442d4",
"GitaPower/LICENSE": "1cd5b0240bfeff139430ed819afe7a01",
"GitaPower/.git/refs/remotes/origin/HEAD": "5dfced0e681541e0b20bfb6b0e4c55fe",
"GitaPower/.git/refs/heads/release": "db222ef84e574d16e3f29f4ce5c20ce2",
"GitaPower/.git/objects/pack/pack-a473fc87b204514d7fd22d751a183fc7248705dc.rev": "e2e71d1578ae524f390bfc0d7e4ea642",
"GitaPower/.git/objects/pack/pack-a473fc87b204514d7fd22d751a183fc7248705dc.pack": "ba0aa90e3c7280e4189c8905b5166f29",
"GitaPower/.git/objects/pack/pack-a473fc87b204514d7fd22d751a183fc7248705dc.idx": "822725d4f3d6ad99ac9e13e00626e301",
"GitaPower/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"GitaPower/.git/HEAD": "dfebbe193e255e26c1b45fa445375b01",
"GitaPower/.git/config": "10a4b5af9e20d084e886a68d0b05dd9f",
"GitaPower/.git/logs/refs/remotes/origin/HEAD": "de82b7da0168bd8968369353fa6f7d3a",
"GitaPower/.git/logs/refs/heads/release": "de82b7da0168bd8968369353fa6f7d3a",
"GitaPower/.git/logs/HEAD": "de82b7da0168bd8968369353fa6f7d3a",
"GitaPower/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"GitaPower/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"GitaPower/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"GitaPower/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"GitaPower/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"GitaPower/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"GitaPower/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"GitaPower/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"GitaPower/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"GitaPower/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"GitaPower/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"GitaPower/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"GitaPower/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"GitaPower/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"GitaPower/.git/index": "ad33e13aabd49721bd2cf25e326115b9",
"GitaPower/.git/packed-refs": "edfc750837eabef9095831ca5933f140",
"GitaPower/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"GitaPower/.github/copilot-instructions.md": "6a466ad6b4610007da978c5f85b19506",
"GitaPower/.github/workflows/compile-headers.yml": "2906841404a233c5ba906fcf6739187e",
"GitaPower/.github/workflows/screenshots.yml": "09361ae6f715168cb0bfab2a3be5dddb",
"GitaPower/.github/workflows/build-apk.yml": "ed75d2f26800bd9d96a3ccfbcaa0f7cf",
"GitaPower/.github/workflows/checkmycode.yml": "fb47870f4346c33d5174ae6a60835ff7",
"GitaPower/.github/workflows/format.yml": "cb8ca51646d12e5e2e90ef35a9275289",
"GitaPower/.github/dependabot.yml": "386d851f7226b291a95093c5554e8761",
"GitaPower/tools/generate_headers.sh": "4fd972afb2880ca0b0c1636a98346cea",
"GitaPower/tools/generate_headers.dart": "c601b61e384feddb2ade172f44c91181",
"GitaPower/tools/pics-making.pptx": "1ba3d42ed5b3f32b23060703b9d37084",
"GitaPower/.vscode/settings.json": "ed9ba2d1541761b05cc5a344d7d72163",
"GitaPower/privacy-policy.md": "a8e77f6e0373f47f132f77b299d7d169",
"GitaPower/feeder/.dart_tool/dartpad/web_plugin_registrant.dart": "b5d3cfecbf835640c14b80347001a01e",
"GitaPower/feeder/.dart_tool/package_graph.json": "94219ea35413144c3ec813f4f782a13e",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/dart2js.d": "47c03c5bb5e2e62af08e66a99a636fed",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/web_plugin_registrant.dart": "b5d3cfecbf835640c14b80347001a01e",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/web_resources.d": "e82f33fd4ce11078b2d1217da06ef027",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/main.dart": "8d4474751abd912e018239a3d6ba7da2",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/main.dart.js": "fb976d724d77e21f8f1a4d4d0a2c5d53",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/app.dill.deps": "3e46c1a0912e8f8519b04573e6ea5c03",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/web_static_assets.stamp": "5f146da3b82e2ddfbb5e394761ae5f92",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/dart2js.stamp": "c74fccb22079c31821da9c18d6aa4fb9",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/web_release_bundle.stamp": "89a77cb3b11ad003e8345aeaa18691af",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/app.dill": "ded8b3fdefb102841586c0f9308af8a1",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/main.dart.js.deps": "80c9da6648906173906e3c47a0512eae",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/dart2wasm.stamp": "db247c808a3fad56f7264a9371fc763b",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/web_entrypoint.stamp": "428b7e69b4522dd2a2b96760d89f44d9",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/flutter_assets.d": "23ffddb1ed6ef46a692b83ed1ee929c4",
"GitaPower/feeder/.dart_tool/flutter_build/140c1495b30e48015f2bae7286bcc053/web_templated_files.stamp": "858f7ee4460f2ab3cf11248738d261b4",
"GitaPower/feeder/.dart_tool/package_config.json": "c15d7d0083a2dc5eb9bff4aa56c77795",
"GitaPower/feeder/.dart_tool/version": "8221ba5c3d872e59f434017acc99acde",
"GitaPower/feeder/README.md": "56d81291e2c00ca3efec38e37c2d130d",
"GitaPower/feeder/screenshots-to-fastlane.sh": "b2ce5c79d18adf4b9aba4111a67be927",
"GitaPower/feeder/pubspec.yaml": "eb3fc40a17056e5c4ac8a74759aaa04b",
"GitaPower/feeder/test_driver/screenshot_driver.dart": "967c92d125b1b97273d5a06b5348490d",
"GitaPower/feeder/integration_test/integ_test.dart": "2305f30a09081636111bd790b197a992",
"GitaPower/feeder/macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"GitaPower/feeder/macos/Runner.xcodeproj/project.pbxproj": "ef7364ac03296a3a98e85390ca229b7b",
"GitaPower/feeder/macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "0e8db34e27c12e86442be880a11f4e7e",
"GitaPower/feeder/macos/Runner/Configs/Release.xcconfig": "709485d8ea7b78479bf23eb64281287d",
"GitaPower/feeder/macos/Runner/Configs/Debug.xcconfig": "783e2b0e2aa72d8bc215462bb8d1569d",
"GitaPower/feeder/macos/Runner/Configs/AppInfo.xcconfig": "9c56c27700c5950b231ef8e7f08df4be",
"GitaPower/feeder/macos/Runner/Configs/Warnings.xcconfig": "bbde97fb62099b5b9879fb2ffeb1a0a0",
"GitaPower/feeder/macos/Runner/Base.lproj/MainMenu.xib": "85bdf02ea39336686f2e0ff5f52137cc",
"GitaPower/feeder/macos/Runner/Release.entitlements": "fc4ad575c1efec3d097fb9d40a0f702f",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "b7da05eb1e3dde358fb6591cf3a29348",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "1d48e925145d4b573a3b5d7960a1c585",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "4a7edbb5a7b3072d6452de36331bb2a8",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "64b46626103336f80c23fc64656272a1",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "e3516d01efaafaf34ca2ee2142181cad",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8a4fb0d67f0ecf1865d9d9f97e0f449a",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "9e943798973d8337e94637a639bf1a57",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "586d6c7e93b7f746e6e94e35a7dbb6a5",
"GitaPower/feeder/macos/Runner/DebugProfile.entitlements": "4ad77e84621dc5735c16180a0934fcde",
"GitaPower/feeder/macos/Runner/Info.plist": "9ffcbec0a18fdad9d3d606656fd46f9a",
"GitaPower/feeder/macos/Runner/AppDelegate.swift": "f35757566ef1832592cec47b89197f94",
"GitaPower/feeder/macos/Runner/MainFlutterWindow.swift": "25da60ddd7c7148c2a40dc3194b8ddca",
"GitaPower/feeder/macos/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"GitaPower/feeder/macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"GitaPower/feeder/macos/Flutter/ephemeral/flutter_export_environment.sh": "2cc4c1cc2696cc93b58ddc0022fc2acb",
"GitaPower/feeder/macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "6773e5a0e096b993f7317e3892991f7b",
"GitaPower/feeder/macos/Flutter/Flutter-Debug.xcconfig": "f6991d7432e1664af118cc9531127016",
"GitaPower/feeder/macos/Flutter/Flutter-Release.xcconfig": "f6991d7432e1664af118cc9531127016",
"GitaPower/feeder/macos/Flutter/GeneratedPluginRegistrant.swift": "2f95b9022395f541646ffbcab4b82512",
"GitaPower/feeder/samples/begin.dart": "03ba791b206cd13dc3dfbb089c526bfa",
"GitaPower/feeder/analysis_options.yaml": "5df212687f3997ccd1310b5b19ebfb78",
"GitaPower/feeder/pubspec.lock": "02af4c909bc6b4e60cc39bb3cc1c2fcf",
"GitaPower/feeder/audio/bell_background.m4a": "782130b1517f715a5e8d5913d8df1802",
"GitaPower/feeder/firebase.json": "e9d3981d52a47f6ee64ffd7e25e76c60",
"GitaPower/feeder/images/Chapter_6.png": "3260e6f47078c92ba3b2181033689511",
"GitaPower/feeder/images/expand_meaning_light.png": "2aab4b2d20857e0b3f5336a1f0987179",
"GitaPower/feeder/images/Chapter_9.png": "e1cdb2debbb56bfcab54e71c927f2710",
"GitaPower/feeder/images/shloka_visible_dark.png": "92fa7f69a7e15573afc9492fbec3f32e",
"GitaPower/feeder/images/Chapter_11.png": "8f4e986adb954636cd3a03fb250cebd4",
"GitaPower/feeder/images/ramanuja3.png": "b4778f2c42a7a09c69e9ba341a4d8a7a",
"GitaPower/feeder/images/Chapter_3.png": "b59ba9c3bb82ad28a6755b70bb6a56f3",
"GitaPower/feeder/images/right-foot.png": "1b923ad2db17756a097b0c925bbddc64",
"GitaPower/feeder/images/Chapter_7.png": "0380461b549dde6640cb52758c409313",
"GitaPower/feeder/images/darkpaper.png": "0c39e473164e47ab9c9179b21e9293af",
"GitaPower/feeder/images/Chapter_10.png": "f75844dcf0c63ba40e4ff821c5c34777",
"GitaPower/feeder/images/Chapter_1.png": "a35ba751992495908e8da891cb11a5ef",
"GitaPower/feeder/images/look-listen.png": "1686b096ce168aa4590a05d23dd901b6",
"GitaPower/feeder/images/shloka_visible_light.png": "3b741fe4f043f3fa2a83372af6656cf5",
"GitaPower/feeder/images/begin-feed3.png": "cb6e8bfec4618109fbaa5432fd8641a9",
"GitaPower/feeder/images/Chapter_15.png": "746d67e48e9ac651879ddca4af85220f",
"GitaPower/feeder/images/Chapter_14.png": "032beda9f6ccf07ac515d766e4a89378",
"GitaPower/feeder/images/expand_meaning_dark.png": "88bfd2b3aad9fc02232e2974cbb09a4f",
"GitaPower/feeder/images/Chapter_8.png": "5e3a0acc7ec367824657661037363885",
"GitaPower/feeder/images/Back-to-Basics.png": "cde9417b61ea8fbcb5a33f87aa9f0a0c",
"GitaPower/feeder/images/one-step.png": "96b2f2452fa36421acac0e2658b57b5f",
"GitaPower/feeder/images/Chapter_13.png": "7d06063a9b4c88232589964ee2d61b1f",
"GitaPower/feeder/images/opener_cover.png": "4b96349c149a12ce2944b12acf666ddd",
"GitaPower/feeder/images/sunidhi-krishna.png": "cde9417b61ea8fbcb5a33f87aa9f0a0c",
"GitaPower/feeder/images/left-foot.png": "f5dbf828e0d0e664c847e37ddc4b0826",
"GitaPower/feeder/images/Chapter_18.png": "5bc082a66ae8923deb8829b75d2b0a03",
"GitaPower/feeder/images/Chapter_17.png": "9d2a5a0e841d163dd9e18f3ad17ea50f",
"GitaPower/feeder/images/lightpaper.png": "9cbc4a0c9252eee16de27728e012bb5c",
"GitaPower/feeder/images/Chapter_2.png": "d3b5d393bac91f5c93d0482fd13b094c",
"GitaPower/feeder/images/Chapter_12.png": "b02a3798cb56ce66790ca52742baf6c0",
"GitaPower/feeder/images/Chapter_16.png": "4a7a6a3d5195e02e7a6d54944360feca",
"GitaPower/feeder/images/lordfeet.png": "619ddb2c8691292ee78f224dba583884",
"GitaPower/feeder/images/Chapter_4.png": "6a3d90472db8fd3e14de7aa58cc91c71",
"GitaPower/feeder/images/The_Beginning_of_Joy.png": "cde9417b61ea8fbcb5a33f87aa9f0a0c",
"GitaPower/feeder/images/once-again.png": "48eec03ce78c873f94d59f93aedced2b",
"GitaPower/feeder/images/begin-chapters.png": "4a63a6417a4fe4027ba4f3283eff1bea",
"GitaPower/feeder/images/Chapter_5.png": "1a5f179ae56eef1ab12b04ec6cfed34e",
"GitaPower/feeder/images/bothfeet.png": "5a4038b1cf7ace32fdd6ba053038a9fa",
"GitaPower/feeder/gita-begin-offline.sh": "5c239f77d0a05e43b21d48152ac986ed",
"GitaPower/feeder/test/feed_shloka_test.dart": "09a77823e6ccee887ae3b52cfe80c935",
"GitaPower/feeder/test/begin_test.dart": "89aa1a312400bc87cac98322fb987077",
"GitaPower/feeder/test/home_test.dart": "b855aa52a4ade797b6a41493b9a74b3f",
"GitaPower/feeder/test/guided_tour_test.mocks.dart": "eade1f7cbb2733db00acd6a74d2a4537",
"GitaPower/feeder/test/search_test.dart": "14eb69738c7b95fbfa236d144ed66e9c",
"GitaPower/feeder/test/gherrors_test.dart": "3350a2f71486d7a58475838bb82d8955",
"GitaPower/feeder/test/choice_test.dart": "1c418cae6a7a4078d48fe998a6a4d04e",
"GitaPower/feeder/test/error_test.dart": "53ce6447a5e82416074de0fd46ec8ce4",
"GitaPower/feeder/test/content_test.dart": "d05e4305cf4e7b1da704a415ffdb9a3e",
"GitaPower/feeder/test/guided_tour_test.dart": "88d0a69285a275b36d6ab04d9dfec593",
"GitaPower/feeder/test/matter_forinline_test.dart": "7eb7451f9c56a9c9c766c6d159f89784",
"GitaPower/feeder/test/chapterstoc_test.dart": "ef30268cfdc7c41561e582ba03a41c79",
"GitaPower/feeder/test/moving_subtitles_test.dart": "aed5146931c57090ab2c1bd5e8a5fe0e",
"GitaPower/feeder/test/notescontent_test.dart": "df6bb5266d328ff9721ed249c135103c",
"GitaPower/feeder/test/chapter_shloka_test.dart": "77c5117f3d0aea7421ebcb2cd2dea5f6",
"GitaPower/feeder/test/feed_test.dart": "305cad0d8959b741c9a256838ca4fe1e",
"GitaPower/feeder/test/browse_test.dart": "9e1185ddf1963af484e91a4786064f7a",
"GitaPower/feeder/google_fonts/Caveat-Regular.ttf": "7c66865f58afc98e72e69633ba374178",
"GitaPower/feeder/google_fonts/OFL.txt": "b16e4340d325fa7943922c3561137cda",
"GitaPower/feeder/web/manifest.json": "61beb3da402979c33b46048d3288bbde",
"GitaPower/feeder/web/icons/Icon-192.png": "25df87b1f03aa79bfe24339f81558a28",
"GitaPower/feeder/web/icons/Icon-maskable-512.png": "3a07d694f6ebd05f086c559d0cb0e9c3",
"GitaPower/feeder/web/icons/Icon-maskable-192.png": "25df87b1f03aa79bfe24339f81558a28",
"GitaPower/feeder/web/icons/Icon-512.png": "3a07d694f6ebd05f086c559d0cb0e9c3",
"GitaPower/feeder/web/favicon.png": "46ac1870ee544ef38fec3b3735fa4011",
"GitaPower/feeder/web/index.html": "575cdcd2b2c345b19078168918f8779b",
"GitaPower/feeder/android/gradle/wrapper/gradle-wrapper.properties": "e814f6caf2e5451383d0db7de003e9c6",
"GitaPower/feeder/android/app/src/main/kotlin/com/example/askys/MainActivity.kt": "ef57867bff768dad2180a0de99ae8787",
"GitaPower/feeder/android/app/src/main/AndroidManifest.xml": "48de261cd79286841c1a5a3263b30472",
"GitaPower/feeder/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"GitaPower/feeder/android/app/src/main/res/mipmap-xxxhdpi/launcher_icon.png": "25df87b1f03aa79bfe24339f81558a28",
"GitaPower/feeder/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"GitaPower/feeder/android/app/src/main/res/mipmap-xxhdpi/launcher_icon.png": "fcf4fb368926d982fb102d5d0b72b3e0",
"GitaPower/feeder/android/app/src/main/res/values-night/styles.xml": "c22fb29c307f2a6ae4317b3a5e577688",
"GitaPower/feeder/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"GitaPower/feeder/android/app/src/main/res/mipmap-hdpi/launcher_icon.png": "1b323f2b2070e4c82eb0d1e27e8bb9f1",
"GitaPower/feeder/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"GitaPower/feeder/android/app/src/main/res/mipmap-xhdpi/launcher_icon.png": "7f617bb811f162034652e6066d14f7a4",
"GitaPower/feeder/android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"GitaPower/feeder/android/app/src/main/res/values/styles.xml": "f8b8cfbf977690d117f4dade5d27a789",
"GitaPower/feeder/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"GitaPower/feeder/android/app/src/main/res/mipmap-mdpi/launcher_icon.png": "884cedefad0ebc440ce41ec50052ac4e",
"GitaPower/feeder/android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"GitaPower/feeder/android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "081bea18f06954d1895c6372c6139ae0",
"GitaPower/feeder/android/app/src/profile/AndroidManifest.xml": "c7877ab4a09d05fd90440952e2ff5a12",
"GitaPower/feeder/android/app/src/debug/AndroidManifest.xml": "c7877ab4a09d05fd90440952e2ff5a12",
"GitaPower/feeder/android/app/google-services.json": "073c11bef88943ce726541e4df6487aa",
"GitaPower/feeder/android/app/build.gradle": "4b8f3614eab0f7a4226f34b3359bf60d",
"GitaPower/feeder/android/gradle.properties": "8310bd8843f3cf1a38c0f0f870b1e8cd",
"GitaPower/feeder/android/settings.gradle": "41b2ddf4fbf95c6cce9fa9fd15401752",
"GitaPower/feeder/android/fastlane/README.md": "fd894031e10d5751a08fb278dd8cdc4b",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/title.txt": "e76f68dab5371c38a1e06ff307afbf34",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/featureGraphic.png": "eed832d5171244a22cb317dc8cf4e82b",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/icon.png": "d50a81fd73c530aecf164726dbbd309b",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/5_en-US.png": "395c993a217944ac657e918190094d8e",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/2_en-US.png": "ef1fd0fee71b0db20116bb8aaf3adce1",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/1_en-US.png": "bf205fcde65d511e7b88e17800ee3b7b",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/7_en-US.png": "a286e5375035b2825df26129cdd01df9",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/4_en-US.png": "58f4029f82b5f333d8655407c773b2a3",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/8_en-US.png": "82213412dda4cc534f80704062e6b901",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/3_en-US.png": "a8c0f8edf76da88cab325c80ba316a4f",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/6_en-US.png": "c00e8acacb4af53fad1856407182d44d",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/video.txt": "d41d8cd98f00b204e9800998ecf8427e",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/short_description.txt": "8905e81314e803d5be7eadf443c8c369",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/changelogs/247.txt": "1b107bba010c4d780eb0cb9bddb32f25",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/full_description.txt": "797419c5aebe93e9bc50e864b97796bc",
"GitaPower/feeder/android/fastlane/report.xml": "433b3db423c6c7f09783ef490d99995f",
"GitaPower/feeder/android/fastlane/Appfile": "825e49dd2f63f58704c22a2ea8cbf37f",
"GitaPower/feeder/android/fastlane/Fastfile": "2c7eb0386f664c5e56a02d91c9b080f2",
"GitaPower/feeder/android/Gemfile": "d3b031c4d3ca93d1a3a280bf91b62451",
"GitaPower/feeder/android/local.properties": "557f1846dadd8498df62671422c792d5",
"GitaPower/feeder/android/Gemfile.lock": "ecdac65d8bc5f19e2fa6116c0a8ee1de",
"GitaPower/feeder/android/build.gradle": "49bd0f7b88d0a680032394990a85627f",
"GitaPower/feeder/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"GitaPower/feeder/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"GitaPower/feeder/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"GitaPower/feeder/ios/Runner.xcodeproj/project.pbxproj": "637f4e65191732b478d14f5b158722ce",
"GitaPower/feeder/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "7721d249fd3216036344543336caee67",
"GitaPower/feeder/ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"GitaPower/feeder/ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"GitaPower/feeder/ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"GitaPower/feeder/ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "e35796d2f3eeaa19b75fb19dfdcf7768",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "e35796d2f3eeaa19b75fb19dfdcf7768",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-72x72@2x.png": "fcf4fb368926d982fb102d5d0b72b3e0",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-50x50@2x.png": "c9b27efc6a503d6badbcbee3432ae229",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "18819bc417c6ba3702ecd5a22178effe",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "8475e474875c689ad50d67c464cb7508",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7ddc966ef972c3b3ebc47e45cc69e420",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "5dd5a96ea44e05e0122902a6edfe74d5",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "8475e474875c689ad50d67c464cb7508",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "ff750a04e98a0a8ee0cd2f99ac88aca4",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-57x57@2x.png": "fde3b51e52ea870f47ceeffceb9006f4",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "e7d6d960820bd451b4b9c83346f17d06",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "e3b3ed2ac55d2cfbaed57e474129280d",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-50x50@1x.png": "80fb1fdac0b1e5de1141041e819393de",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "233c905237709bda9e74455369333e78",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "adeb744cf098646d5e056356915b83f2",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-72x72@1x.png": "1b323f2b2070e4c82eb0d1e27e8bb9f1",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "08cbfa0084ca7dc01b683eb45b74b056",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "095c74f33cd3000055c5a0dbbe9fe524",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-57x57@1x.png": "719c65f5f2aec01bdbfb00b4b68b4ea2",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "215a88d3f40946ac7013bb01e3237d35",
"GitaPower/feeder/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"GitaPower/feeder/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"GitaPower/feeder/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"GitaPower/feeder/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"GitaPower/feeder/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"GitaPower/feeder/ios/Runner/Info.plist": "6a6805b630366fa6ca03fc2e2c4fe85f",
"GitaPower/feeder/ios/Runner/GeneratedPluginRegistrant.m": "669cef1a318ed1403ef6316d58994b5c",
"GitaPower/feeder/ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"GitaPower/feeder/ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"GitaPower/feeder/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"GitaPower/feeder/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"GitaPower/feeder/ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"GitaPower/feeder/ios/Flutter/Generated.xcconfig": "7fd8351a49f4518247a944cbc70c415d",
"GitaPower/feeder/ios/Flutter/flutter_export_environment.sh": "2d79565603272662cf01cdb35bd990ad",
"GitaPower/feeder/ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"GitaPower/feeder/ios/Flutter/ephemeral/flutter_lldb_helper.py": "98fc75412162af387e2e3461e4e58094",
"GitaPower/feeder/ios/Flutter/ephemeral/flutter_lldbinit": "4c0c8550624ce117572c484ae3e7d9ce",
"GitaPower/feeder/ios/Flutter/AppFrameworkInfo.plist": "db12a133dfacff2c7ffcdfe99a669634",
"GitaPower/feeder/checkmycode.sh": "9ab74b1ee062d3070aad0f2958b31925",
"GitaPower/feeder/lib/shloka_headers.dart": "c8c1e5a5f2b54f99fd5e413df96d3698",
"GitaPower/feeder/lib/search_screen.dart": "3ff7067a862f8c9e42ed8f50ebe14a0a",
"GitaPower/feeder/lib/tours_widget.dart": "9a8633da2b2e73f8f24e0e5d1510853a",
"GitaPower/feeder/lib/content_source.dart": "056f688037bdcd17de9664b5ded2b682",
"GitaPower/feeder/lib/feedcontent.dart": "d9bc48da9a8a5e825ca1c6e6ba82ca9a",
"GitaPower/feeder/lib/main.dart": "128448573f01acb60ff1a353b1609db0",
"GitaPower/feeder/lib/begin_widget.dart": "e0fc77478c83f4064064833d957f9995",
"GitaPower/feeder/lib/choice_selector.dart": "0e4237a62b666eeacce2ab964d110fa8",
"GitaPower/feeder/lib/chapter_headers.dart": "47ca20c2e4d9fc8a38347cd6f4cd5552",
"GitaPower/feeder/lib/choices_row.dart": "8396510e720c613d85d98d1902094392",
"GitaPower/feeder/lib/matter_forinline.dart": "fd6dd94e808a55c68baa6beb5971354f",
"GitaPower/feeder/lib/moving_subtitles.dart": "69232f6721b96072c6c82b089c23790c",
"GitaPower/feeder/lib/expandable_span.dart": "19a3996036cb00ab61dea26d996e1da1",
"GitaPower/feeder/lib/tell_if_error.dart": "9cdfaf545433ed5e89cd8f880b95adf6",
"GitaPower/feeder/lib/feed_widget.dart": "6c07c6bea764182bd709c9b5423278a8",
"GitaPower/feeder/lib/chapter_shloka_widget.dart": "5d9a2a4072756d45851cf70f9ab1bc31",
"GitaPower/feeder/lib/content_widget.dart": "c378336509d9d8a7c0c6214429a7cac6",
"GitaPower/feeder/lib/choice_bindings.dart": "c5f4a23869a1dbae111bf0bc3ed5212d",
"GitaPower/feeder/lib/guided_tour.dart": "8ff92f475f7b14dc93c79e63d23ca6e6",
"GitaPower/feeder/lib/chaptercontent.dart": "5899df854b6b6986b21451f99b4e1d53",
"GitaPower/feeder/lib/firebase_options.dart": "91587982be808285fc453611cf363838",
"GitaPower/feeder/lib/personal_widget.dart": "04c854f2e36485a9bcbafaa0674cb324",
"GitaPower/feeder/lib/content_themes.dart": "06558214bf1de166aa3754f2ba6013be",
"GitaPower/feeder/lib/home.dart": "5585111d616089cc0c62946f4a6fceda",
"GitaPower/feeder/lib/screenify.dart": "9523837ff54889fc03be4e71d089d120",
"GitaPower/feeder/lib/content_actions.dart": "9ac60e2490a1c923ea8d4dcbe6baf192",
"GitaPower/feeder/lib/notecontent.dart": "184a416e2575dd0a1043da35b71f8f08",
"GitaPower/feeder/lib/browse_toc.dart": "b14dde39ca2ef7122af26928ed9f3520",
"GitaPower/feeder/lib/build_ident_widget.dart": "c7d9fe0612543df812a2b6fe8e90b5cc",
"GitaPower/feeder/lib/mdcontent.dart": "79b61684f6da26917c6ece9274a67dfd",
"GitaPower/feeder/lib/feedplay_icon.dart": "2129cb64139fe07da3d79681d10e0ab7",
"GitaPower/feeder/lib/feed_shloka.dart": "4889cf09e42f62d2f5f5abc938666c55",
"GitaPower/htmlapp/step_up.png": "fc1f4a2054048397198d1298bbb0ce3b",
"GitaPower/htmlapp/ACover.html": "9358e0a0d7042e434214e71fed91c572",
"GitaPower/htmlapp/Chapter%205.html": "e0eea56c47e16c24ddaf66dc07f7ce3c",
"GitaPower/htmlapp/Chapter%2012.html": "d1021eb33e9b08f55bc22e3da11cc0a8",
"GitaPower/htmlapp/Chapter%2013.html": "6095bb9a2e490e6d08fab168f6f37913",
"GitaPower/htmlapp/Chapter%2016.html": "1189bcad32a6f1f3055aff4038e608c4",
"GitaPower/htmlapp/step_2.png": "17f79414f5b77aaa44e93dd1ca0e44cc",
"GitaPower/htmlapp/step_0.png": "8671fe2ef71c93011d2c3e81f9cb1478",
"GitaPower/htmlapp/Chapter%2018.html": "4c4f22646ca7c5e2b369426409d86adb",
"GitaPower/htmlapp/jnanayoga.html": "ea4eed67f0a2fc37ee8b0b8eb2b47100",
"GitaPower/htmlapp/rightfoot.png": "4be22d8c05cab72e9eae740b5b1822ce",
"GitaPower/htmlapp/snskrtstationary.png": "a01bf3ba0e9da99cfcc24ebd5f2eceb4",
"GitaPower/htmlapp/Transliteration%20notes.html": "508317cc59fb9c5e37f3837f56adc948",
"GitaPower/htmlapp/The%20Beginning%20of%20Joy.html": "34f1be1f1cf1b2f8c9537166b60ecf15",
"GitaPower/htmlapp/karmayoga.html": "cc8cf789d8ce1035ca48dcd0229496ce",
"GitaPower/htmlapp/Chapter%207.html": "a3c83f990e14b56f7d4dd939f585a4c2",
"GitaPower/htmlapp/step_1.png": "7bf2cca9941426320a74e1b2067bdff2",
"GitaPower/htmlapp/appic.png": "3ff6555bf73fcaab02c918ac6379adb7",
"GitaPower/htmlapp/Chapter%2014.html": "592332576763485e34fa8ed517af8bd0",
"GitaPower/htmlapp/step_3.png": "9c0bd72ef19051b4c1188e9ee0c643d4",
"GitaPower/htmlapp/Chapter%208.html": "76970da9d6ba714f07a57f6278d1696d",
"GitaPower/htmlapp/Back%20to%20Basics.html": "6b9218b46866e5cbc8c0154884b85a8c",
"GitaPower/htmlapp/Chapter%2017.html": "bfde9445f041dda67d76e1c5ebed571c",
"GitaPower/htmlapp/Chapter%2011.html": "1dd65ec242721773fe667e0e36612abc",
"GitaPower/htmlapp/Chapter%2010.html": "81c20970fec9763918c37d3cd0bbdf92",
"GitaPower/htmlapp/Chapter%204.html": "d9f055815eba734b580f3b506476b750",
"GitaPower/htmlapp/step_down.png": "f12e14e0e92a9fbc70747bd6bd81db5b",
"GitaPower/htmlapp/Chapter%209.html": "43583d181fee3ad0390b2182a760523e",
"GitaPower/htmlapp/features.xml": "2f3af66669d9b60f296c56017eca8b33",
"GitaPower/htmlapp/Chapter%206.html": "36316ccaa96626b502c870e10bccd23f",
"GitaPower/htmlapp/sanskrtphrasetgl.png": "e72cd12d04e2ce8b9438561b603b4e48",
"GitaPower/htmlapp/Chapter%202.html": "8598f835de07a176fc560ca0f9c0c639",
"GitaPower/htmlapp/Chapter%203.html": "1f556396bfd15aa6d488babad4484c10",
"GitaPower/htmlapp/Chapter%201.html": "0a3546ac00dcf2f1c0a7da2e286f2f10",
"GitaPower/htmlapp/Chapter%2015.html": "fc511544abca6e309aa3d26c2eff421f",
"GitaPower/htmlapp/leftfoot.png": "58fa9baaa75b976d3efd2dffbd46e977",
"GitaPower/htmlapp/search.png": "369e9ca83c36c4c3cb2df29efa8dc19b",
"assets/NOTICES": "43bae478aa7ebccf32df9d553a4b5c34",
"assets/fonts/MaterialIcons-Regular.otf": "3b28afe9e8031e994f805dd1357d735c",
"assets/AssetManifest.json": "1986d33de8117a5d08e030b92c00c16d",
"assets/audio/bell_background.m4a": "782130b1517f715a5e8d5913d8df1802",
"assets/images/Chapter_6.png": "3260e6f47078c92ba3b2181033689511",
"assets/images/expand_meaning_light.png": "2aab4b2d20857e0b3f5336a1f0987179",
"assets/images/Chapter_9.png": "e1cdb2debbb56bfcab54e71c927f2710",
"assets/images/shloka_visible_dark.png": "92fa7f69a7e15573afc9492fbec3f32e",
"assets/images/Chapter_11.png": "8f4e986adb954636cd3a03fb250cebd4",
"assets/images/ramanuja3.png": "b4778f2c42a7a09c69e9ba341a4d8a7a",
"assets/images/Chapter_3.png": "b59ba9c3bb82ad28a6755b70bb6a56f3",
"assets/images/right-foot.png": "1b923ad2db17756a097b0c925bbddc64",
"assets/images/Chapter_7.png": "0380461b549dde6640cb52758c409313",
"assets/images/darkpaper.png": "0c39e473164e47ab9c9179b21e9293af",
"assets/images/Chapter_10.png": "f75844dcf0c63ba40e4ff821c5c34777",
"assets/images/Chapter_1.png": "a35ba751992495908e8da891cb11a5ef",
"assets/images/look-listen.png": "1686b096ce168aa4590a05d23dd901b6",
"assets/images/shloka_visible_light.png": "3b741fe4f043f3fa2a83372af6656cf5",
"assets/images/begin-feed3.png": "cb6e8bfec4618109fbaa5432fd8641a9",
"assets/images/Chapter_15.png": "746d67e48e9ac651879ddca4af85220f",
"assets/images/Chapter_14.png": "032beda9f6ccf07ac515d766e4a89378",
"assets/images/expand_meaning_dark.png": "88bfd2b3aad9fc02232e2974cbb09a4f",
"assets/images/Chapter_8.png": "5e3a0acc7ec367824657661037363885",
"assets/images/Back-to-Basics.png": "cde9417b61ea8fbcb5a33f87aa9f0a0c",
"assets/images/one-step.png": "96b2f2452fa36421acac0e2658b57b5f",
"assets/images/Chapter_13.png": "7d06063a9b4c88232589964ee2d61b1f",
"assets/images/opener_cover.png": "4b96349c149a12ce2944b12acf666ddd",
"assets/images/sunidhi-krishna.png": "cde9417b61ea8fbcb5a33f87aa9f0a0c",
"assets/images/left-foot.png": "f5dbf828e0d0e664c847e37ddc4b0826",
"assets/images/Chapter_18.png": "5bc082a66ae8923deb8829b75d2b0a03",
"assets/images/Chapter_17.png": "9d2a5a0e841d163dd9e18f3ad17ea50f",
"assets/images/lightpaper.png": "9cbc4a0c9252eee16de27728e012bb5c",
"assets/images/Chapter_2.png": "d3b5d393bac91f5c93d0482fd13b094c",
"assets/images/Chapter_12.png": "b02a3798cb56ce66790ca52742baf6c0",
"assets/images/Chapter_16.png": "4a7a6a3d5195e02e7a6d54944360feca",
"assets/images/lordfeet.png": "619ddb2c8691292ee78f224dba583884",
"assets/images/Chapter_4.png": "6a3d90472db8fd3e14de7aa58cc91c71",
"assets/images/The_Beginning_of_Joy.png": "cde9417b61ea8fbcb5a33f87aa9f0a0c",
"assets/images/once-again.png": "48eec03ce78c873f94d59f93aedced2b",
"assets/images/begin-chapters.png": "4a63a6417a4fe4027ba4f3283eff1bea",
"assets/images/Chapter_5.png": "1a5f179ae56eef1ab12b04ec6cfed34e",
"assets/images/bothfeet.png": "5a4038b1cf7ace32fdd6ba053038a9fa",
"assets/FontManifest.json": "f92d9aa7ff871257f459b7f713d30b8f",
"assets/AssetManifest.bin.json": "1acc81649a8b63c84a56fce0bcaf92bd",
"assets/AssetManifest.bin": "c9c8c18ff8b0248f473e2221ce9fdb03",
"assets/google_fonts/Caveat-Regular.ttf": "7c66865f58afc98e72e69633ba374178",
"assets/google_fonts/OFL.txt": "b16e4340d325fa7943922c3561137cda",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"flutter_bootstrap.js": "d24be19b8985190107951d00339dc535",
".vscode/settings.json": "e9cf0eda383756f81f5af167add6d8d6",
"favicon.png": "46ac1870ee544ef38fec3b3735fa4011",
"index.html": "d72a9684f085ebe7c4b393895be41bc0",
"/": "d72a9684f085ebe7c4b393895be41bc0"};
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
