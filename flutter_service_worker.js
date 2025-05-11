'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "d72a9684f085ebe7c4b393895be41bc0",
"/": "d72a9684f085ebe7c4b393895be41bc0",
"GitaPower/old/app/release/output.json": "eb8d95bf5cc66f1903041f16228621df",
"GitaPower/old/app/proguard-rules.pro": "260a8ec65e9b4dae7c04f3c1f3565e88",
"GitaPower/old/app/build.gradle": "02eff29d16dd45fcdbd5fb362a49f40e",
"GitaPower/old/app/src/test/java/com/gita/sudeep/gitahtml/ExampleUnitTest.java": "748903a76efc7e3738281143ae5fd8ae",
"GitaPower/old/app/src/androidTest/java/com/gita/sudeep/gitahtml/ExampleInstrumentedTest.java": "9a86750339d0becf09b41c9a30f77c86",
"GitaPower/old/app/src/main/java/com/gita/sudeep/gitahtml/MainActivity.java": "2f1ecbecb44c7916cfe1214aabbf44ec",
"GitaPower/old/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "4ad08251ddecfdd6e2a2c53e79b8d8de",
"GitaPower/old/app/src/main/res/layout/activity_main.xml": "46928178f353c3676952eddc7389e485",
"GitaPower/old/app/src/main/res/mipmap-mdpi/ic_launcher.png": "5ff8945dee0f56d079db8ce6691aaaeb",
"GitaPower/old/app/src/main/res/values/dimens.xml": "77708536bdf75969da02b4a5687d1a9b",
"GitaPower/old/app/src/main/res/values/colors.xml": "38cf6e35d68dac323a16767a95b6fc6c",
"GitaPower/old/app/src/main/res/values/styles.xml": "29b4ef1f713d0138e1dad6f8e587bff3",
"GitaPower/old/app/src/main/res/values/strings.xml": "8d1e35f32fa895e8b20e5a16dca32278",
"GitaPower/old/app/src/main/res/mipmap-xxhdpi/lordfeet.png": "619ddb2c8691292ee78f224dba583884",
"GitaPower/old/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "40d69d20dd057b4a331d03f2f3f2667e",
"GitaPower/old/app/src/main/res/values-w820dp/dimens.xml": "f06a662d076312e2271749c093cf40d3",
"GitaPower/old/app/src/main/res/mipmap-hdpi/ic_launcher.png": "357539403cded61d96161198a0773ffc",
"GitaPower/old/app/src/main/res/xml/searchable.xml": "4ea9aab6289fb4b208f175ef3d38cf74",
"GitaPower/old/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "93fd2eadf162fd41695cab262540184f",
"GitaPower/old/app/src/main/AndroidManifest.xml": "e5d73c02ce6a359da5056f60f2a3ddfa",
"GitaPower/old/settings.gradle": "a7fe1ac39169b5e5285a5e53662f251b",
"GitaPower/old/build.gradle": "b9f77848d199d4f5e7308533193442d4",
"GitaPower/old/.idea/gradle.xml": "3bd26642ee5ffb41cad3e18b15737ff8",
"GitaPower/old/.idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
"GitaPower/old/.idea/modules.xml": "1a764374b6a4d915ac381cc4cb52e5d4",
"GitaPower/old/.idea/runConfigurations.xml": "e9e1b64a01daa4c987b8fb1e927d8273",
"GitaPower/old/.idea/compiler.xml": "b1e2d88063e7fa8bdd1b2bb48e5f4f40",
"GitaPower/old/.idea/copyright/profiles_settings.xml": "b1e0b181e080c28b1d116582290e6e97",
"GitaPower/old/.idea/misc.xml": "656c4cdb5ed6d53f6d5b37b183a724b9",
"GitaPower/old/gradle.properties": "b48d5e13d6f588e25dc853e045d865ae",
"GitaPower/old/gradle/wrapper/gradle-wrapper.properties": "f6af0a266afbc5ec3297a3f5f6d47262",
"GitaPower/old/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"GitaPower/old/gradlew.bat": "0ea6d812cf51675a8503fe23ae178996",
"GitaPower/old/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"GitaPower/feeder/macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"GitaPower/feeder/macos/Runner.xcodeproj/project.pbxproj": "ef7364ac03296a3a98e85390ca229b7b",
"GitaPower/feeder/macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "0e8db34e27c12e86442be880a11f4e7e",
"GitaPower/feeder/macos/Runner/Info.plist": "9ffcbec0a18fdad9d3d606656fd46f9a",
"GitaPower/feeder/macos/Runner/Base.lproj/MainMenu.xib": "85bdf02ea39336686f2e0ff5f52137cc",
"GitaPower/feeder/macos/Runner/Release.entitlements": "fc4ad575c1efec3d097fb9d40a0f702f",
"GitaPower/feeder/macos/Runner/Configs/Debug.xcconfig": "783e2b0e2aa72d8bc215462bb8d1569d",
"GitaPower/feeder/macos/Runner/Configs/Release.xcconfig": "709485d8ea7b78479bf23eb64281287d",
"GitaPower/feeder/macos/Runner/Configs/Warnings.xcconfig": "bbde97fb62099b5b9879fb2ffeb1a0a0",
"GitaPower/feeder/macos/Runner/Configs/AppInfo.xcconfig": "9c56c27700c5950b231ef8e7f08df4be",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "586d6c7e93b7f746e6e94e35a7dbb6a5",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "64b46626103336f80c23fc64656272a1",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8a4fb0d67f0ecf1865d9d9f97e0f449a",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "b7da05eb1e3dde358fb6591cf3a29348",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "1d48e925145d4b573a3b5d7960a1c585",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "e3516d01efaafaf34ca2ee2142181cad",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "9e943798973d8337e94637a639bf1a57",
"GitaPower/feeder/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "4a7edbb5a7b3072d6452de36331bb2a8",
"GitaPower/feeder/macos/Runner/DebugProfile.entitlements": "4ad77e84621dc5735c16180a0934fcde",
"GitaPower/feeder/macos/Runner/MainFlutterWindow.swift": "25da60ddd7c7148c2a40dc3194b8ddca",
"GitaPower/feeder/macos/Runner/AppDelegate.swift": "f35757566ef1832592cec47b89197f94",
"GitaPower/feeder/macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"GitaPower/feeder/macos/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"GitaPower/feeder/macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "e95fd130db8d5337aaaa5903d117f130",
"GitaPower/feeder/macos/Flutter/ephemeral/flutter_export_environment.sh": "7c614591fba065e3a8ff2810029bb4b0",
"GitaPower/feeder/macos/Flutter/Flutter-Release.xcconfig": "f6991d7432e1664af118cc9531127016",
"GitaPower/feeder/macos/Flutter/GeneratedPluginRegistrant.swift": "2f95b9022395f541646ffbcab4b82512",
"GitaPower/feeder/macos/Flutter/Flutter-Debug.xcconfig": "f6991d7432e1664af118cc9531127016",
"GitaPower/feeder/gita-begin-offline.sh": "5c239f77d0a05e43b21d48152ac986ed",
"GitaPower/feeder/test/search_test.dart": "06ddc4d443a8906b00a0765451d69311",
"GitaPower/feeder/test/home_test.dart": "3de43dcb28c54462abe7a047ea6e48b1",
"GitaPower/feeder/test/note_test.dart": "9e02bbff9407cb76652183c55c9837f6",
"GitaPower/feeder/test/moving_subtitles_test.dart": "aed5146931c57090ab2c1bd5e8a5fe0e",
"GitaPower/feeder/test/chapter_shloka_test.dart": "77c5117f3d0aea7421ebcb2cd2dea5f6",
"GitaPower/feeder/test/guided_tour_test.dart": "88d0a69285a275b36d6ab04d9dfec593",
"GitaPower/feeder/test/guided_tour_test.mocks.dart": "eade1f7cbb2733db00acd6a74d2a4537",
"GitaPower/feeder/test/begin_test.dart": "a39ee1e71a55cdf0719fc0aeb6d72bca",
"GitaPower/feeder/test/error_test.dart": "53ce6447a5e82416074de0fd46ec8ce4",
"GitaPower/feeder/test/feed_test.dart": "d84000cffb7f0e50e27d3e5a03321b03",
"GitaPower/feeder/test/notescontent_test.dart": "df6bb5266d328ff9721ed249c135103c",
"GitaPower/feeder/test/feed_shloka_test.dart": "09a77823e6ccee887ae3b52cfe80c935",
"GitaPower/feeder/test/choice_test.dart": "1c418cae6a7a4078d48fe998a6a4d04e",
"GitaPower/feeder/test/content_test.dart": "abc3914a924f469bbd8fe602770f750e",
"GitaPower/feeder/test/chapterstoc_test.dart": "ef30268cfdc7c41561e582ba03a41c79",
"GitaPower/feeder/test/gherrors_test.dart": "3350a2f71486d7a58475838bb82d8955",
"GitaPower/feeder/test/chapters_test.dart": "f005d39628a59aee6ac278020eedb723",
"GitaPower/feeder/samples/begin.dart": "03ba791b206cd13dc3dfbb089c526bfa",
"GitaPower/feeder/pubspec.yaml": "e9cf078acab02550c710ea695a8a5ba9",
"GitaPower/feeder/integration_test/integ_test.dart": "2305f30a09081636111bd790b197a992",
"GitaPower/feeder/android/Gemfile.lock": "ecdac65d8bc5f19e2fa6116c0a8ee1de",
"GitaPower/feeder/android/app/build.gradle": "19a01acb18c76e35f8b46e5b5ab3964f",
"GitaPower/feeder/android/app/src/debug/AndroidManifest.xml": "c7877ab4a09d05fd90440952e2ff5a12",
"GitaPower/feeder/android/app/src/main/kotlin/com/example/askys/MainActivity.kt": "ef57867bff768dad2180a0de99ae8787",
"GitaPower/feeder/android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "f88ccac8c4a25b3e699d52c824571336",
"GitaPower/feeder/android/app/src/main/res/mipmap-xxxhdpi/launcher_icon.png": "25df87b1f03aa79bfe24339f81558a28",
"GitaPower/feeder/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"GitaPower/feeder/android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"GitaPower/feeder/android/app/src/main/res/mipmap-mdpi/launcher_icon.png": "884cedefad0ebc440ce41ec50052ac4e",
"GitaPower/feeder/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"GitaPower/feeder/android/app/src/main/res/values/styles.xml": "f8b8cfbf977690d117f4dade5d27a789",
"GitaPower/feeder/android/app/src/main/res/mipmap-xxhdpi/launcher_icon.png": "fcf4fb368926d982fb102d5d0b72b3e0",
"GitaPower/feeder/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"GitaPower/feeder/android/app/src/main/res/values-night/styles.xml": "c22fb29c307f2a6ae4317b3a5e577688",
"GitaPower/feeder/android/app/src/main/res/mipmap-hdpi/launcher_icon.png": "1b323f2b2070e4c82eb0d1e27e8bb9f1",
"GitaPower/feeder/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"GitaPower/feeder/android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"GitaPower/feeder/android/app/src/main/res/mipmap-xhdpi/launcher_icon.png": "7f617bb811f162034652e6066d14f7a4",
"GitaPower/feeder/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"GitaPower/feeder/android/app/src/main/AndroidManifest.xml": "48de261cd79286841c1a5a3263b30472",
"GitaPower/feeder/android/app/src/profile/AndroidManifest.xml": "c7877ab4a09d05fd90440952e2ff5a12",
"GitaPower/feeder/android/app/google-services.json": "073c11bef88943ce726541e4df6487aa",
"GitaPower/feeder/android/local.properties": "181c1282c69966010c6b1084b7d38a2c",
"GitaPower/feeder/android/settings.gradle": "41b2ddf4fbf95c6cce9fa9fd15401752",
"GitaPower/feeder/android/build.gradle": "49bd0f7b88d0a680032394990a85627f",
"GitaPower/feeder/android/Gemfile": "d3b031c4d3ca93d1a3a280bf91b62451",
"GitaPower/feeder/android/gradle.properties": "4b01dcf11166d04a1ee03bc0bac87b2a",
"GitaPower/feeder/android/gradle/wrapper/gradle-wrapper.properties": "e814f6caf2e5451383d0db7de003e9c6",
"GitaPower/feeder/android/fastlane/Appfile": "825e49dd2f63f58704c22a2ea8cbf37f",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/full_description.txt": "797419c5aebe93e9bc50e864b97796bc",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/title.txt": "e76f68dab5371c38a1e06ff307afbf34",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/short_description.txt": "8905e81314e803d5be7eadf443c8c369",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/changelogs/247.txt": "1b107bba010c4d780eb0cb9bddb32f25",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/icon.png": "d50a81fd73c530aecf164726dbbd309b",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/2_en-US.png": "59c0e1226b2089103da7c77d8aa989a4",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/3_en-US.png": "5405089807726833cd188a5598c4470f",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/8_en-US.png": "edcf3bd11ac59c99b3752a77bc89755f",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/1_en-US.png": "7d78d8d41928c22b8d4ee3ca738b0336",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/7_en-US.png": "8734a7ed347bad693852d00924212d99",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/6_en-US.png": "afc5b84fc9ba7763100a7875f94c9245",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/4_en-US.png": "ac5497b8c74ba84470ab9ecef1b937bf",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/phoneScreenshots/5_en-US.png": "34b91b1106de0807a6dfb6fb2c19d667",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/images/featureGraphic.png": "eed832d5171244a22cb317dc8cf4e82b",
"GitaPower/feeder/android/fastlane/metadata/android/en-US/video.txt": "d41d8cd98f00b204e9800998ecf8427e",
"GitaPower/feeder/android/fastlane/README.md": "fd894031e10d5751a08fb278dd8cdc4b",
"GitaPower/feeder/android/fastlane/report.xml": "433b3db423c6c7f09783ef490d99995f",
"GitaPower/feeder/android/fastlane/Fastfile": "2c7eb0386f664c5e56a02d91c9b080f2",
"GitaPower/feeder/pubspec.lock": "703772ae16c6411d488064a9f7d3741a",
"GitaPower/feeder/audio/background.m4a": "0ca2b29a19f612bcc0f2e4cc73cfe31c",
"GitaPower/feeder/screenshots-to-fastlane.sh": "b2ce5c79d18adf4b9aba4111a67be927",
"GitaPower/feeder/README.md": "56d81291e2c00ca3efec38e37c2d130d",
"GitaPower/feeder/images/opener_cover.png": "4b96349c149a12ce2944b12acf666ddd",
"GitaPower/feeder/images/lordfeet.png": "619ddb2c8691292ee78f224dba583884",
"GitaPower/feeder/images/left-foot.png": "f5dbf828e0d0e664c847e37ddc4b0826",
"GitaPower/feeder/images/darkpaper.png": "0c39e473164e47ab9c9179b21e9293af",
"GitaPower/feeder/images/one-step.png": "96b2f2452fa36421acac0e2658b57b5f",
"GitaPower/feeder/images/once-again.png": "48eec03ce78c873f94d59f93aedced2b",
"GitaPower/feeder/images/lightpaper.png": "9cbc4a0c9252eee16de27728e012bb5c",
"GitaPower/feeder/images/expand_meaning_light.png": "2aab4b2d20857e0b3f5336a1f0987179",
"GitaPower/feeder/images/shloka_visible_dark.png": "92fa7f69a7e15573afc9492fbec3f32e",
"GitaPower/feeder/images/begin-chapters.png": "4a63a6417a4fe4027ba4f3283eff1bea",
"GitaPower/feeder/images/ramanuja3.png": "b4778f2c42a7a09c69e9ba341a4d8a7a",
"GitaPower/feeder/images/shloka_visible_light.png": "3b741fe4f043f3fa2a83372af6656cf5",
"GitaPower/feeder/images/begin-feed3.png": "cb6e8bfec4618109fbaa5432fd8641a9",
"GitaPower/feeder/images/right-foot.png": "1b923ad2db17756a097b0c925bbddc64",
"GitaPower/feeder/images/sunidhi-krishna.png": "cde9417b61ea8fbcb5a33f87aa9f0a0c",
"GitaPower/feeder/images/bothfeet.png": "5a4038b1cf7ace32fdd6ba053038a9fa",
"GitaPower/feeder/images/expand_meaning_dark.png": "88bfd2b3aad9fc02232e2974cbb09a4f",
"GitaPower/feeder/lib/build_ident_widget.dart": "c7d9fe0612543df812a2b6fe8e90b5cc",
"GitaPower/feeder/lib/guided_tour.dart": "35e78ff98ce95a3e7b7a19661eab3825",
"GitaPower/feeder/lib/choice_bindings.dart": "132570a363c87189ce4d04a55249a6a6",
"GitaPower/feeder/lib/shloka_headers.dart": "c8c1e5a5f2b54f99fd5e413df96d3698",
"GitaPower/feeder/lib/feed_widget.dart": "6c07c6bea764182bd709c9b5423278a8",
"GitaPower/feeder/lib/tell_if_error.dart": "9cdfaf545433ed5e89cd8f880b95adf6",
"GitaPower/feeder/lib/chapter_headers.dart": "47ca20c2e4d9fc8a38347cd6f4cd5552",
"GitaPower/feeder/lib/mdcontent.dart": "79b61684f6da26917c6ece9274a67dfd",
"GitaPower/feeder/lib/home.dart": "cdfb4b71c49294f3796180c2b9965b5c",
"GitaPower/feeder/lib/notes_widget.dart": "71ba15cb9b5e0165cee1a9d3089efe92",
"GitaPower/feeder/lib/chapters_widget.dart": "6de0622f693368a4cf562c87adb36f60",
"GitaPower/feeder/lib/moving_subtitles.dart": "2e5e1f14f96de96a4647dc70eb7b7b6a",
"GitaPower/feeder/lib/content_actions.dart": "9ac60e2490a1c923ea8d4dcbe6baf192",
"GitaPower/feeder/lib/content_themes.dart": "06558214bf1de166aa3754f2ba6013be",
"GitaPower/feeder/lib/feedplay_icon.dart": "2129cb64139fe07da3d79681d10e0ab7",
"GitaPower/feeder/lib/chapter_shloka_widget.dart": "5d9a2a4072756d45851cf70f9ab1bc31",
"GitaPower/feeder/lib/feed_shloka.dart": "4889cf09e42f62d2f5f5abc938666c55",
"GitaPower/feeder/lib/firebase_options.dart": "91587982be808285fc453611cf363838",
"GitaPower/feeder/lib/choices_row.dart": "8396510e720c613d85d98d1902094392",
"GitaPower/feeder/lib/personal_widget.dart": "8bf9b02f96067b182aeee74c3b52512f",
"GitaPower/feeder/lib/expandable_span.dart": "29003e167fabbdcafac95b8ecb4e73d2",
"GitaPower/feeder/lib/matter_forinline.dart": "2ad86eadc991f537460a5ee4b34994e6",
"GitaPower/feeder/lib/search_screen.dart": "a68ca7a4c9582e67b3adfaf6641a8e51",
"GitaPower/feeder/lib/chaptercontent.dart": "5899df854b6b6986b21451f99b4e1d53",
"GitaPower/feeder/lib/main.dart": "128448573f01acb60ff1a353b1609db0",
"GitaPower/feeder/lib/content_source.dart": "056f688037bdcd17de9664b5ded2b682",
"GitaPower/feeder/lib/screenify.dart": "9523837ff54889fc03be4e71d089d120",
"GitaPower/feeder/lib/tours_widget.dart": "4ea0fc71b2469d12c0411371be36e7e5",
"GitaPower/feeder/lib/content_widget.dart": "af4d901642b2eb5c0c7ba8b38865b458",
"GitaPower/feeder/lib/feedcontent.dart": "bff18b8e607e9187cee585b6844cbad9",
"GitaPower/feeder/lib/choice_selector.dart": "da0e71f6720a3a9c46b6695c722fdd86",
"GitaPower/feeder/lib/begin_widget.dart": "fccbbd1a1398464df24766257d7bdff1",
"GitaPower/feeder/lib/notecontent.dart": "184a416e2575dd0a1043da35b71f8f08",
"GitaPower/feeder/.dart_tool/flutter_build/95f54c4e1814457854efcab0eabdb108/web_release_bundle.stamp": "2cad9d258f016be64fb0d560671ada74",
"GitaPower/feeder/.dart_tool/flutter_build/95f54c4e1814457854efcab0eabdb108/app.dill": "856fb66eb1febba8deb4e1fbbaea2d03",
"GitaPower/feeder/.dart_tool/flutter_build/95f54c4e1814457854efcab0eabdb108/main.dart.js": "d92ca734f7fac2eb90f63070744df2de",
"GitaPower/feeder/.dart_tool/flutter_build/95f54c4e1814457854efcab0eabdb108/dart2js.stamp": "89673be273585c3453651282530cfbfb",
"GitaPower/feeder/.dart_tool/flutter_build/95f54c4e1814457854efcab0eabdb108/flutter_assets.d": "42c46ead911b5be70d43ab3a19ac31fa",
"GitaPower/feeder/.dart_tool/flutter_build/95f54c4e1814457854efcab0eabdb108/web_entrypoint.stamp": "d3e6c23f5559b9a0795715671e2e2bee",
"GitaPower/feeder/.dart_tool/flutter_build/95f54c4e1814457854efcab0eabdb108/dart2js.d": "eb3d95336f7c54094cd3d6b3b33a3f33",
"GitaPower/feeder/.dart_tool/flutter_build/95f54c4e1814457854efcab0eabdb108/web_resources.d": "5e6ab2a84db61d9b44652269323e535f",
"GitaPower/feeder/.dart_tool/flutter_build/95f54c4e1814457854efcab0eabdb108/web_static_assets.stamp": "1998faa4baf45f3148fab021cba578ef",
"GitaPower/feeder/.dart_tool/flutter_build/95f54c4e1814457854efcab0eabdb108/main.dart.js.deps": "acf8cf27a26dd69b56466c1621e15e30",
"GitaPower/feeder/.dart_tool/flutter_build/95f54c4e1814457854efcab0eabdb108/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"GitaPower/feeder/.dart_tool/flutter_build/95f54c4e1814457854efcab0eabdb108/main.dart": "8d4474751abd912e018239a3d6ba7da2",
"GitaPower/feeder/.dart_tool/flutter_build/95f54c4e1814457854efcab0eabdb108/web_templated_files.stamp": "305f76e1bc5f0e36e5363ff4b6b0ba0c",
"GitaPower/feeder/.dart_tool/flutter_build/95f54c4e1814457854efcab0eabdb108/app.dill.deps": "6305c5854012fba9b7419a0f86c0d3ec",
"GitaPower/feeder/.dart_tool/flutter_build/95f54c4e1814457854efcab0eabdb108/web_plugin_registrant.dart": "b5d3cfecbf835640c14b80347001a01e",
"GitaPower/feeder/.dart_tool/package_config.json": "47b67fb0a0aa24c4bd447383bc50520f",
"GitaPower/feeder/.dart_tool/dartpad/web_plugin_registrant.dart": "b5d3cfecbf835640c14b80347001a01e",
"GitaPower/feeder/.dart_tool/version": "acddc7c6e3afc19f02129e4a3be7b884",
"GitaPower/feeder/.dart_tool/package_config_subset": "dc978853f31aadc0a2ee7d5f243e9f19",
"GitaPower/feeder/test_driver/screenshot_driver.dart": "967c92d125b1b97273d5a06b5348490d",
"GitaPower/feeder/google_fonts/Caveat-Regular.ttf": "7c66865f58afc98e72e69633ba374178",
"GitaPower/feeder/google_fonts/OFL.txt": "b16e4340d325fa7943922c3561137cda",
"GitaPower/feeder/tools/generate_headers.dart": "af9e4db35bacb983a35df7e7fe772ec7",
"GitaPower/feeder/tools/generate_headers.sh": "4fd972afb2880ca0b0c1636a98346cea",
"GitaPower/feeder/tools/pics-making.pptx": "649a5f17e284490cf974b1bbae7c50e1",
"GitaPower/feeder/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"GitaPower/feeder/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"GitaPower/feeder/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"GitaPower/feeder/ios/Runner.xcodeproj/project.pbxproj": "637f4e65191732b478d14f5b158722ce",
"GitaPower/feeder/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "7721d249fd3216036344543336caee67",
"GitaPower/feeder/ios/Runner/Info.plist": "6a6805b630366fa6ca03fc2e2c4fe85f",
"GitaPower/feeder/ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"GitaPower/feeder/ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"GitaPower/feeder/ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"GitaPower/feeder/ios/Runner/GeneratedPluginRegistrant.m": "669cef1a318ed1403ef6316d58994b5c",
"GitaPower/feeder/ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "08cbfa0084ca7dc01b683eb45b74b056",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "adeb744cf098646d5e056356915b83f2",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "e35796d2f3eeaa19b75fb19dfdcf7768",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-72x72@1x.png": "1b323f2b2070e4c82eb0d1e27e8bb9f1",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7ddc966ef972c3b3ebc47e45cc69e420",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "5dd5a96ea44e05e0122902a6edfe74d5",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-57x57@2x.png": "fde3b51e52ea870f47ceeffceb9006f4",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "e7d6d960820bd451b4b9c83346f17d06",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "e35796d2f3eeaa19b75fb19dfdcf7768",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "18819bc417c6ba3702ecd5a22178effe",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "8475e474875c689ad50d67c464cb7508",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-72x72@2x.png": "fcf4fb368926d982fb102d5d0b72b3e0",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "8475e474875c689ad50d67c464cb7508",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-57x57@1x.png": "719c65f5f2aec01bdbfb00b4b68b4ea2",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "ff750a04e98a0a8ee0cd2f99ac88aca4",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "e3b3ed2ac55d2cfbaed57e474129280d",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "095c74f33cd3000055c5a0dbbe9fe524",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "233c905237709bda9e74455369333e78",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-50x50@2x.png": "c9b27efc6a503d6badbcbee3432ae229",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "215a88d3f40946ac7013bb01e3237d35",
"GitaPower/feeder/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-50x50@1x.png": "80fb1fdac0b1e5de1141041e819393de",
"GitaPower/feeder/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"GitaPower/feeder/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"GitaPower/feeder/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"GitaPower/feeder/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"GitaPower/feeder/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"GitaPower/feeder/ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"GitaPower/feeder/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"GitaPower/feeder/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"GitaPower/feeder/ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"GitaPower/feeder/ios/Flutter/AppFrameworkInfo.plist": "db12a133dfacff2c7ffcdfe99a669634",
"GitaPower/feeder/ios/Flutter/Generated.xcconfig": "f176ebee8c9af0d31f63b3b5d15476ab",
"GitaPower/feeder/ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"GitaPower/feeder/ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"GitaPower/feeder/ios/Flutter/flutter_export_environment.sh": "9c2185aca2164a67696b09a7a3312f9d",
"GitaPower/feeder/checkmycode.sh": "f4cd6a63014a02180e1da9724d85fd8c",
"GitaPower/feeder/analysis_options.yaml": "5df212687f3997ccd1310b5b19ebfb78",
"GitaPower/feeder/firebase.json": "e9d3981d52a47f6ee64ffd7e25e76c60",
"GitaPower/feeder/web/index.html": "575cdcd2b2c345b19078168918f8779b",
"GitaPower/feeder/web/manifest.json": "61beb3da402979c33b46048d3288bbde",
"GitaPower/feeder/web/favicon.png": "46ac1870ee544ef38fec3b3735fa4011",
"GitaPower/feeder/web/icons/Icon-512.png": "3a07d694f6ebd05f086c559d0cb0e9c3",
"GitaPower/feeder/web/icons/Icon-maskable-192.png": "25df87b1f03aa79bfe24339f81558a28",
"GitaPower/feeder/web/icons/Icon-192.png": "25df87b1f03aa79bfe24339f81558a28",
"GitaPower/feeder/web/icons/Icon-maskable-512.png": "3a07d694f6ebd05f086c559d0cb0e9c3",
"GitaPower/LICENSE": "1cd5b0240bfeff139430ed819afe7a01",
"GitaPower/privacy-policy.md": "a8e77f6e0373f47f132f77b299d7d169",
"GitaPower/.git/HEAD": "dfebbe193e255e26c1b45fa445375b01",
"GitaPower/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"GitaPower/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"GitaPower/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"GitaPower/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"GitaPower/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"GitaPower/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"GitaPower/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"GitaPower/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"GitaPower/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"GitaPower/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"GitaPower/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"GitaPower/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"GitaPower/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"GitaPower/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"GitaPower/.git/logs/HEAD": "d3e7e3befbd0bb4c7e966a377be64e1b",
"GitaPower/.git/logs/refs/remotes/origin/HEAD": "d3e7e3befbd0bb4c7e966a377be64e1b",
"GitaPower/.git/logs/refs/heads/release": "d3e7e3befbd0bb4c7e966a377be64e1b",
"GitaPower/.git/objects/pack/pack-279c4441859f02837be85d39dd6c8a03f0f90445.pack": "f1d47976f98727a8a77c280a5e92308e",
"GitaPower/.git/objects/pack/pack-279c4441859f02837be85d39dd6c8a03f0f90445.rev": "31c6442fa47249fd5445eb40af999275",
"GitaPower/.git/objects/pack/pack-279c4441859f02837be85d39dd6c8a03f0f90445.idx": "b4cd2883ce4a293ffc21d757a6904331",
"GitaPower/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"GitaPower/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"GitaPower/.git/refs/remotes/origin/HEAD": "5dfced0e681541e0b20bfb6b0e4c55fe",
"GitaPower/.git/refs/heads/release": "af755d8db272bbacd653098214b995b5",
"GitaPower/.git/index": "41d80066ad32a2029971d23cbb9a8796",
"GitaPower/.git/packed-refs": "f3b64e18917c70ffd624c5506378b6e7",
"GitaPower/.git/config": "10a4b5af9e20d084e886a68d0b05dd9f",
"GitaPower/htmlapp/jnanayoga.html": "ea4eed67f0a2fc37ee8b0b8eb2b47100",
"GitaPower/htmlapp/rightfoot.png": "4be22d8c05cab72e9eae740b5b1822ce",
"GitaPower/htmlapp/step_down.png": "f12e14e0e92a9fbc70747bd6bd81db5b",
"GitaPower/htmlapp/step_1.png": "7bf2cca9941426320a74e1b2067bdff2",
"GitaPower/htmlapp/Chapter%202.html": "8598f835de07a176fc560ca0f9c0c639",
"GitaPower/htmlapp/step_up.png": "fc1f4a2054048397198d1298bbb0ce3b",
"GitaPower/htmlapp/ACover.html": "9358e0a0d7042e434214e71fed91c572",
"GitaPower/htmlapp/Chapter%2011.html": "1dd65ec242721773fe667e0e36612abc",
"GitaPower/htmlapp/step_3.png": "9c0bd72ef19051b4c1188e9ee0c643d4",
"GitaPower/htmlapp/features.xml": "2f3af66669d9b60f296c56017eca8b33",
"GitaPower/htmlapp/appic.png": "3ff6555bf73fcaab02c918ac6379adb7",
"GitaPower/htmlapp/Chapter%204.html": "d9f055815eba734b580f3b506476b750",
"GitaPower/htmlapp/Chapter%203.html": "1f556396bfd15aa6d488babad4484c10",
"GitaPower/htmlapp/step_0.png": "8671fe2ef71c93011d2c3e81f9cb1478",
"GitaPower/htmlapp/Chapter%208.html": "76970da9d6ba714f07a57f6278d1696d",
"GitaPower/htmlapp/Chapter%2017.html": "bfde9445f041dda67d76e1c5ebed571c",
"GitaPower/htmlapp/snskrtstationary.png": "a01bf3ba0e9da99cfcc24ebd5f2eceb4",
"GitaPower/htmlapp/Transliteration%20notes.html": "508317cc59fb9c5e37f3837f56adc948",
"GitaPower/htmlapp/Chapter%205.html": "e0eea56c47e16c24ddaf66dc07f7ce3c",
"GitaPower/htmlapp/Chapter%209.html": "43583d181fee3ad0390b2182a760523e",
"GitaPower/htmlapp/Chapter%2018.html": "4c4f22646ca7c5e2b369426409d86adb",
"GitaPower/htmlapp/Chapter%201.html": "0a3546ac00dcf2f1c0a7da2e286f2f10",
"GitaPower/htmlapp/Chapter%206.html": "36316ccaa96626b502c870e10bccd23f",
"GitaPower/htmlapp/karmayoga.html": "cc8cf789d8ce1035ca48dcd0229496ce",
"GitaPower/htmlapp/The%20Beginning%20of%20Joy.html": "34f1be1f1cf1b2f8c9537166b60ecf15",
"GitaPower/htmlapp/Chapter%2012.html": "d1021eb33e9b08f55bc22e3da11cc0a8",
"GitaPower/htmlapp/Back%20to%20Basics.html": "6b9218b46866e5cbc8c0154884b85a8c",
"GitaPower/htmlapp/sanskrtphrasetgl.png": "e72cd12d04e2ce8b9438561b603b4e48",
"GitaPower/htmlapp/Chapter%2015.html": "fc511544abca6e309aa3d26c2eff421f",
"GitaPower/htmlapp/Chapter%2016.html": "1189bcad32a6f1f3055aff4038e608c4",
"GitaPower/htmlapp/Chapter%207.html": "a3c83f990e14b56f7d4dd939f585a4c2",
"GitaPower/htmlapp/search.png": "369e9ca83c36c4c3cb2df29efa8dc19b",
"GitaPower/htmlapp/Chapter%2013.html": "6095bb9a2e490e6d08fab168f6f37913",
"GitaPower/htmlapp/step_2.png": "17f79414f5b77aaa44e93dd1ca0e44cc",
"GitaPower/htmlapp/Chapter%2010.html": "81c20970fec9763918c37d3cd0bbdf92",
"GitaPower/htmlapp/Chapter%2014.html": "592332576763485e34fa8ed517af8bd0",
"GitaPower/htmlapp/leftfoot.png": "58fa9baaa75b976d3efd2dffbd46e977",
"GitaPower/.vscode/settings.json": "e29621877329b826362fd60f2ff53c39",
"GitaPower/.github/dependabot.yml": "386d851f7226b291a95093c5554e8761",
"GitaPower/.github/workflows/screenshots.yml": "a2d22528d81e65531c0daaf53a6b43a3",
"GitaPower/.github/workflows/compile-headers.yml": "2906841404a233c5ba906fcf6739187e",
"GitaPower/.github/workflows/checkmycode.yml": "fb47870f4346c33d5174ae6a60835ff7",
"GitaPower/.github/workflows/build-apk.yml": "ed75d2f26800bd9d96a3ccfbcaa0f7cf",
"GitaPower/.github/workflows/format.yml": "cb8ca51646d12e5e2e90ef35a9275289",
"LICENSE": "e4320891b86a8439120666dcfd719caf",
"manifest.json": "61beb3da402979c33b46048d3288bbde",
"main.dart.js": "d92ca734f7fac2eb90f63070744df2de",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/logs/HEAD": "875b6b69c142f8820d1147c40c3b71f2",
".git/logs/refs/remotes/origin/HEAD": "3771c561dce6f43cc223ba313ddb14e3",
".git/logs/refs/remotes/origin/main": "a7527f98daf56c02dff31360042e9370",
".git/logs/refs/heads/main": "5727c7bdc1ff9898966ea469c0dd0f7a",
".git/objects/pack/pack-7b730882af4133883b4c384843dfaf3ca0f9e088.pack": "ec1f211322fb7f723f399a46d89dcda7",
".git/objects/pack/pack-7b730882af4133883b4c384843dfaf3ca0f9e088.rev": "5b9e7b30554fd68f6b7dc4e94a1b22ff",
".git/objects/pack/pack-7b730882af4133883b4c384843dfaf3ca0f9e088.idx": "ff249449ec8f9b3c5f6c4f67bab8464d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config.worktree": "f0198bfdba75fcb121daecc3fa77420b",
".git/FETCH_HEAD": "1e038e452274a45bb11a0a56b3c84cbf",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a396ded540dce3d4c071bb216514e871",
".git/refs/heads/main": "a396ded540dce3d4c071bb216514e871",
".git/shallow": "a396ded540dce3d4c071bb216514e871",
".git/index": "596df8f9482981e9f6492f981e96a46a",
".git/config": "8c42de46f507a6ecabf3b26d6fd7ccb3",
"flutter_bootstrap.js": "ebbf6f6ac2c93eaca78dd12275726af5",
".vscode/settings.json": "e9cf0eda383756f81f5af167add6d8d6",
"flutter.js": "76f08d47ff9f5715220992f993002504",
".github/workflows/build.yml": "79447bb3db209266dca12179eca6d68e",
"favicon.png": "46ac1870ee544ef38fec3b3735fa4011",
"icons/Icon-512.png": "3a07d694f6ebd05f086c559d0cb0e9c3",
"icons/Icon-maskable-192.png": "25df87b1f03aa79bfe24339f81558a28",
"icons/Icon-192.png": "25df87b1f03aa79bfe24339f81558a28",
"icons/Icon-maskable-512.png": "3a07d694f6ebd05f086c559d0cb0e9c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "f92d9aa7ff871257f459b7f713d30b8f",
"assets/audio/background.m4a": "0ca2b29a19f612bcc0f2e4cc73cfe31c",
"assets/fonts/MaterialIcons-Regular.otf": "89433efb6dbfeb7407883412da363087",
"assets/images/opener_cover.png": "4b96349c149a12ce2944b12acf666ddd",
"assets/images/lordfeet.png": "619ddb2c8691292ee78f224dba583884",
"assets/images/left-foot.png": "f5dbf828e0d0e664c847e37ddc4b0826",
"assets/images/darkpaper.png": "0c39e473164e47ab9c9179b21e9293af",
"assets/images/one-step.png": "96b2f2452fa36421acac0e2658b57b5f",
"assets/images/once-again.png": "48eec03ce78c873f94d59f93aedced2b",
"assets/images/lightpaper.png": "9cbc4a0c9252eee16de27728e012bb5c",
"assets/images/expand_meaning_light.png": "2aab4b2d20857e0b3f5336a1f0987179",
"assets/images/shloka_visible_dark.png": "92fa7f69a7e15573afc9492fbec3f32e",
"assets/images/begin-chapters.png": "4a63a6417a4fe4027ba4f3283eff1bea",
"assets/images/ramanuja3.png": "b4778f2c42a7a09c69e9ba341a4d8a7a",
"assets/images/shloka_visible_light.png": "3b741fe4f043f3fa2a83372af6656cf5",
"assets/images/begin-feed3.png": "cb6e8bfec4618109fbaa5432fd8641a9",
"assets/images/right-foot.png": "1b923ad2db17756a097b0c925bbddc64",
"assets/images/sunidhi-krishna.png": "cde9417b61ea8fbcb5a33f87aa9f0a0c",
"assets/images/bothfeet.png": "5a4038b1cf7ace32fdd6ba053038a9fa",
"assets/images/expand_meaning_dark.png": "88bfd2b3aad9fc02232e2974cbb09a4f",
"assets/google_fonts/Caveat-Regular.ttf": "7c66865f58afc98e72e69633ba374178",
"assets/google_fonts/OFL.txt": "b16e4340d325fa7943922c3561137cda",
"assets/AssetManifest.bin": "f31eff46e2c1be9e3dd6165220967697",
"assets/AssetManifest.bin.json": "039a5a4786f7fa1bc4fbb92f28a8dcfb",
"assets/NOTICES": "fe6c839b3be789b8994a38cc6ba62b05",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "5c5bda83d1c9e52c9962324ac65baa82",
"version.json": "525004ac0404533f3cb7c46272d630e1"};
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
