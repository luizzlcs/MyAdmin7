'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b6bc6023b4d621a7ba280dbc62de564e",
".git/config": "f765b2a390304b46da10ba27dbfcb476",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bd9157434cb083f6a0ed759e199b830c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4a86c353cc1ae772827a5d61cb7bdb7b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fcfe061c4a0083d8c2442a29c76c8a4b",
".git/logs/refs/heads/luiz/routes": "49927a19b0d489e0dfd54beee290bc37",
".git/logs/refs/heads/main": "fa462effe62848bd505168d833a3179b",
".git/logs/refs/remotes/origin/main": "ade00e5cd449cfb5c38fb519c3948a25",
".git/objects/03/d413fd6e6937b1dbd85d86625405b8c384e965": "54dd21cee143a06d3870a5fbc7589acb",
".git/objects/04/aa91d08a3b08acc46cf6ca7f0fce1566c53ea1": "0a59f248cdb9d5e1b5f5a59185991cbc",
".git/objects/07/16c52ef8cfb14dd2c65831457e8068ca5f6c93": "9a349e075e912b2c8dd5e00147fddfb1",
".git/objects/08/41e0853d60252088e5f6d389822d6d797d80f4": "e3b8c930613a2787d1af41229c5fcbcd",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/0c/4ec6047740ad655d23c70f4236a1f474874b35": "d924543c9d35e647304cbb1a1f910b00",
".git/objects/0c/5a59a03892670b9b539e4ce3d05b7c00e73c77": "e81496ff4218baacf7bbdbe3fae3859c",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/aa204e26713b6a5fa3747c86b4cf5959da88b2": "488092a025de0b0a6d4ad7afda3521cf",
".git/objects/14/9cbcb22a701aa0cfce3f22bcc35356456d6263": "da7fc08bc120bd90c1079474d94f359b",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/17/cd503e944f106334800385a88b2f9d4f3524c1": "6e7af6ada580b6c184509fac1c7ca06f",
".git/objects/18/b160caf6325d1ac92ff0d6621db96844478c01": "f1b883df3f4e06eabfae25f0248c7eac",
".git/objects/19/ab4fcbbc03d528bdd8626f243b3b6fd0a7aae5": "a41289205e64b0b91a3da5c3fcdfb825",
".git/objects/1e/2d4561b2f30f05d78374400290e64ee3e6d509": "d4b636d14ad706f9464ade10acac6864",
".git/objects/20/1a827f75b752e2300fb6b76c67258c1cf71b3d": "fdb6112c73e7f5327157622ec4ddf4eb",
".git/objects/21/7e89d346bdafb3647e8a41471177020941701c": "df37678ec1f941411c3a566d4af25a3e",
".git/objects/21/c6c45118624dc09fb809caf5aea9b4ae02e55f": "f34625d8b56085882e72f02b61a74b6f",
".git/objects/28/aff98119481debd4a93fba875516a46f0b1a79": "fad8b8e4b6693b4917371f34a3567567",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/2a/d332096621345a5a2617ebd207fcd075019f00": "0df91b73cf8355ab2465303fc495b6a3",
".git/objects/30/1f6becdb950a768597b742b3d98f2d8ba8774a": "cee6044293bb9564806bfdfb2a6ed3bd",
".git/objects/30/abaf6f13199a289f237fa6d3180aa5faa10e07": "3c10429f1e7352c2cc5fec24d2c623ad",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3a/9e3c7820c4082a154f01f31a86d8c0b6c40fe5": "953e71d7de94390e4d6a36f921821e38",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3d/1385a8e5e6965148578a5ef02b1ab4b1efa921": "e28af3698d2416fa8bac0593bf28f2fb",
".git/objects/3e/aa1f98dfb4f6bfb01db318f01d81e0e129d35d": "f75052fe581a52b85229b2f55fd62340",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/adf628d58ef2442de1a2f9a09f7137742c5349": "2e70efbe45da13617a353e3438baa522",
".git/objects/46/c66d66b7805c4868ba0f27f4927a052c6d4518": "a3d86f828325438030e7619e7af0ac07",
".git/objects/47/2b6fb4d18a0261920840dc546348743ef097db": "11948a92de4e381b95ecb021ecdb2960",
".git/objects/49/2bf00d5331bfc88d0707193463fd4746ff94fb": "8b7f3ad77ac5880e08270bc37335f6c4",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4a/325912efce83a53e087f5c8c233c6accbac705": "cdd539b6b5a45e1adf18d9aecd75741c",
".git/objects/4a/826bb5a2fdf21e0c11bf7dfcade3e2ba439a69": "615cb7f4ea76b1f33c73500cf5e1906c",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/662082fe88774ea3d456c56c89246020e3e4f6": "51c6b0604ae0a01c53965592c54af99e",
".git/objects/50/f51e95d1896f63f1a11c5412d1ab40c6b37d6b": "e4629f8a9fb5982f95e269bcd2ee9c9b",
".git/objects/52/3c9ba88f34dad7e978eb2e8159c1235f4b70af": "47259018fbcfd3b65fcb7d27c6704e68",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/abd9063648867d5884a726059e88a024f30a78": "c8d195b520837c62632a374070adc827",
".git/objects/5c/433618ab9eec1eb68d0e0ed63afbf0bd821b99": "f002c173fee9f6c4566b61cb2273dd45",
".git/objects/5f/d3a132cbcbbd6e7103fda1c46e3bad833c0193": "948c00d50251085116cda2e17d752477",
".git/objects/5f/d8cdb7fc1f6babf47fb6f3607e6486dde413bd": "1d06165fb876bedc41810688c4559ffc",
".git/objects/64/d5d0e9551a8e58c90fb23b33a1cf169144c4fb": "f22af38f8004ad4d81f87ac5dddd2653",
".git/objects/66/95fe0face4ede677b311d42554c64c1c15c9e7": "c86d7d406e84cde6811447b72be78a62",
".git/objects/68/c3d8dfe19212d446fb5397034c8b38ecca9f75": "800ecbedb78ac74c27d3cf25dfaa31b5",
".git/objects/69/897608d749dbc908513a57b1075057c958ec84": "3d79e1cf64f2727d3ba5bb8ed44aa35b",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/66a06f1dd9cf5ebaf50d29136093f10e797e0f": "bb1794b5e3355911d04ebc812dbae6af",
".git/objects/6c/b3d2bc967630bdcc7b3b3edb9f7afc1ecd6409": "6680e19cfa2b35a8e5b41b3a2374df8d",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/71/4c090ee78340f60f1832b852aae75b1b092d85": "776c27a34ed159cb39592a8526de1d91",
".git/objects/72/38e695940428f952550097c1f8df8937d9bef1": "3d40a524b445cc13f0f16ce1a1f92a9e",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/74/7e1fc56d24f1afec9074fda0920608679d5702": "d298ff9bb3cd0f9cc346ef33bf1f1094",
".git/objects/77/2af8f7e9e2f223614838f9a2b84b034e052e32": "ac300219762e7806ac52fc0b23884587",
".git/objects/78/4d8756509f1036fd6a68da28be59cd1a80b5f0": "35242f5b6c7ef43f25242dc1ed79fa57",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/2d79faa7da604f53e29b310bd7d72478dd5a3d": "bdb81847bea940f7362c1ba6f699d92e",
".git/objects/7b/2b254a0577a0de8b298cc123a56b716d063ef9": "2266c815794771d5fcf68b63b0edae15",
".git/objects/7d/06d1c718c581fc2845b3c37b4602744a6cb28e": "37dc7830482a97023fd31100f51f7fbb",
".git/objects/7f/8f022ba302b4c7d0c578f4071176841cf91978": "b7a8ff1a6a8bf56ed354fe4dc9f25448",
".git/objects/82/3ef0d418c4688c9ad914c7d94b5577db9c987a": "72fe36f712498a0dc455b7ee74506f94",
".git/objects/82/bc44217d005f1ac2e8c3e95681496e776da12b": "b6a1810a59f3a361ea3cd8088901eead",
".git/objects/83/82165d0b24de9b6e5c9a4f9e572d510a49f9bf": "0c869bad66ddf14e57695885bf53576f",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "9c7bb9c736b80fd0388611991ef894bc",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/93/5f724ce281d69557e45e404902687353fe8876": "c11f300a4842fd224f9a6723e4d2bf80",
".git/objects/94/084a881ccc4ccb0643bbd5c494b35f8dfb6004": "2e6623a50704ff1b363f3705631ea249",
".git/objects/97/800f6a35a5085fbeaaac81ba21dfb67884e0b1": "55feff0a6d07628d8cf5ee409065c850",
".git/objects/98/a17a649b7e35326bd7b94ed0d0198969206c22": "3379a10a87e0c370488fb30fbe27fd6e",
".git/objects/9b/5e4109c0c8ef1b4bbbb080ed82ee09b9141126": "470cab8c7905a0dc98321bdb44c9456a",
".git/objects/9c/e06d2dd9252950557a37a45022f88ee3151738": "634e1cb8e13a6076dd4a7ce9982081ad",
".git/objects/9e/2b0cd801468b6f862cc60779d884d616791d61": "1f45dada3719b113972aedf0dc67b8a9",
".git/objects/a0/c1ea822e833a69fcdb0034491fa4ac1111d808": "5369c1bd34051b167592a1603ac7cb21",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/e910c73b6d1a3db108dcf45e49693e3939af59": "5cdbe137815cc75716fb5ad12b2f3a7d",
".git/objects/a3/8ed9a4b8070c0887e31e294f9cdbe30edb61c5": "ad99a581a9239232a9f54fb67560165c",
".git/objects/a3/bd7953fc0568e247e2b72b4671fe22ac4a8d80": "87f1fb778ae600412e684113b890e260",
".git/objects/a3/f87e13b346d68017c099c71e76877e7f712f49": "2e8afd2ae10212ab5212333a66eebd23",
".git/objects/a5/cdfe7e7fcdb49f9d4ce1872badbee40e074701": "04ebc9b2fb44135f40733e8e4ed5141c",
".git/objects/a7/6047d6f7eef9191efa71649fc0ef7a1d3afe3a": "25588d4edd9186ba0174e67f8eeee07b",
".git/objects/a9/61bf70f0936b645dea295671d420fa391642f6": "b84de6eb3f8201c3855e183c880db1ce",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/ac/0c81f84d5f18b8979f6705b4c49cbcbc6ff604": "6b1c0edbef07d5b5b86df9284d126199",
".git/objects/ad/f70de602bc29028033555fe17d201ed767351b": "91eb7b5f6dc978b25a8477955068cce1",
".git/objects/ae/0072e055b0056f7885b3836c12582ec91bec73": "a0c05bb866a10357fa87262376678172",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/b0/01e257e0cacdff3e405955f5175693ad451777": "5988c44d91d20fdb56c841de749259c6",
".git/objects/b3/9a432fa2c723557f702748d43756a45f0d3981": "99dccca73b685156138bcbd196b764bc",
".git/objects/b4/31bf8fbccf868184d0302e018e5c91be53dc5c": "8c2bf3f78bf55d38aef5afeea7e794ea",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b6/b26237926c56d6d3692662669867fd367e65c7": "7dc86d4fae4ba43ffc370b10cb8aed86",
".git/objects/b8/63f8c540d368f2d45391559d0580322faecfae": "9b65fe0d52247a00b3deeedc4557037a",
".git/objects/bb/7d07199f3c083e27764bcf5372b464f49c5d12": "75cce0f6ef6d620d224c695abaaaec8b",
".git/objects/bd/58cd92d3267338c52c5b0a59e5efa24fd89a4e": "220c34df0d82ec98fe558f71e5a6cc27",
".git/objects/bd/dd7f161169df123d6beb7238abbf1dbdb96ca1": "9a93ae103be6a30a5688553e648ff135",
".git/objects/be/9a50a1f06c2722fc99edf4caa3077bfe261438": "31521919e8cfaec659688fa8ad9f8cde",
".git/objects/c3/17aa895c5d043fb2fc104e6dde28cbbbe5affe": "ce4e39b0204f13a31e91f64e906893fb",
".git/objects/c3/89a3ba47f4eb2e1a29ba6afbf6aabb49dcfa41": "b84ff3f8f37f4c09155c9b6654125c0d",
".git/objects/c5/0938c47e92f55df90b299cd61df7f3b75d41a8": "9a7ccb81a1bad12d9e0ba2f6c4d0c0bb",
".git/objects/c8/28b74175214c0dc71ac71a385d6261d2012c2c": "5b8300ef1ff0bb87202a552c442b000b",
".git/objects/c9/543458560f3095039fbd6a92726c0faf0dc438": "75474261660675106c81a9141d1e277b",
".git/objects/ca/0a1954eb802f2f6280254a33681f26f2cca82f": "647416e3670dd151a2a2fbb059017ace",
".git/objects/cb/0635529bbe240a9fd60c1a253a2d6c203a32a9": "6d4674dc38d2150956971fe0afaad956",
".git/objects/cd/f352a1201a666d32f454e6f70cc567cefb3f2d": "e89ce7b87b29e6a9aefba3ceb7553c74",
".git/objects/ce/302ace8ef9d488aae7eb916163b0b2baed1de3": "2c792e1f60dbc9bdfd692ebae9e6804c",
".git/objects/d2/f6a6daf693810bc16580f9bb9a2d8c48b71269": "6e3d9611cb72aaee62b0e7d8a3359120",
".git/objects/d3/a765a0b43331a6c88f8b24df0cfea22c8d3ec9": "73fc0311ad536cf030585eaef5009c5c",
".git/objects/d4/c5873bc8980fb3e4ae184c16df5d8d759a421a": "907656e7cee62236f9ff7e8d59e1ae94",
".git/objects/d4/e43e25aaa95a4aa5d037ae64e7671f8ca6ef06": "09d148fb45394cd9244a739c7f854056",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/d8/6f58260d3ecd29a9bb3fa1e3d7b119fed18992": "b0ea5a159a0d0a78a338d356904a2424",
".git/objects/d8/d9685d598c0d18dac4ee619c500b16f2120e30": "fe3e8fa8d265385f1cf20ab04d0b553f",
".git/objects/d9/0b3c0cb088bce8c93ed9de73f9983c3901fb8b": "d20259402886b3038e52f8a22dfa9fbe",
".git/objects/d9/f3cae5eba5bc299273e05d20d73fa048d38d1e": "9eb3760962a616c85086421467253fa7",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/de/156288ea1bf44398017060472db395961f5b61": "d9b7bc4e71b95807adf430126149b0b7",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/e3/4db2e4ccdf1b2a3eb2e8ca3bdce35fd015a1d5": "1ef4af636e1086015f04b6abe2fc873e",
".git/objects/e3/7046ed56a7a3647ea663427b801a030cd62151": "4f81126b32ae83719fdb7718c3a79f74",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/e4/b408351f3c1e380ffe1cbd9a4b70afeb1c9455": "b7d848fd763d3d7ce8e2305ee5935b36",
".git/objects/e5/633f9fb03d35cc5c071b30a99f599fc411d79b": "38bc0b3c2df8aa5329e90f4e6a799a56",
".git/objects/e5/6d1cab09f32ff2aebf6cad46857782f5684f5a": "1d8c54fa2d4bcec539ea0f137d54f1e2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/37443222578d010176639725a67330ea3d6c63": "95ad2c4a6a40dd34ec46f2aef517c13a",
".git/objects/e7/42c2e07220ed67b5f2890a12848d4f7f9e9849": "b07002351cd51b43bf688722ad0f8531",
".git/objects/eb/90f06b652c7ebdae409c41f49830bf7adb737f": "d8e74a79a90f1c1af9acec2ca8ffa5f3",
".git/objects/ee/3861623ddee02b2346f93deefd212649fac38e": "cab50409ec3db2125cdcbe6213014895",
".git/objects/f5/973b604ad7eeda7923bf646afe080081cac113": "2476ec3841d0f82fd89ae5173471f1bc",
".git/objects/f5/b103624a7ce63cb5cbcf3b9a6d99337d1e0567": "dae1e3155e648424c384720954db59fe",
".git/objects/f8/57c45c65b7dcd61b0910d5d6ee73ffdf78e571": "642a066012b3a14dad30a734200acf43",
".git/objects/f9/b23d5935127887472c75cd5b9cb9b1f5bf941f": "55363fe623980c60a58ec33aa62c53c2",
".git/objects/fd/34425e76d8e0e11433b812d16376c6060484c1": "12a3ba043d50d119dc3a7f9002a5b590",
".git/objects/fd/703d1f36b3ab7ec34deeb0dcf04e867db75265": "2bf9e456605aa1d76e5f42ef8aadcdae",
".git/ORIG_HEAD": "e1ff32d37c1c3b2cc59ac1f27d35a222",
".git/refs/heads/luiz/routes": "9195f0852db07737259647ba9db7fce5",
".git/refs/heads/main": "7d4542779c98ff9614d7a37981a23832",
".git/refs/remotes/origin/main": "7d4542779c98ff9614d7a37981a23832",
"assets/AssetManifest.json": "93646fb818aa644b3660b082fab19129",
"assets/assets/icons/chat.svg": "6147989a378d194412a8ab46b074b828",
"assets/assets/icons/Documents.svg": "0d66436fde3818811c82319665ef91fd",
"assets/assets/icons/doc_file.svg": "c6c3abe38f2b4e22ab33399b26966b1f",
"assets/assets/icons/drop_box.svg": "d427e188a7aee4612446d0e9d26e76f1",
"assets/assets/icons/excel_file.svg": "9986607c30659e3d222f9908141884f9",
"assets/assets/icons/facebook-logo-2019.svg": "542eadfc2b26568af290d3eccfe39eb6",
"assets/assets/icons/facebook.svg": "e44d4dd6594e6ae6718a89059f29cdc7",
"assets/assets/icons/Figma_file.svg": "90224db6835092a278153e0f60e8c203",
"assets/assets/icons/folder.svg": "8c11f522cd36f0cbd9c02eb2b689cbb9",
"assets/assets/icons/google-plus.svg": "3f71987b1e86c1f980e19a685acd040c",
"assets/assets/icons/google_drive.svg": "a4cd4325c28cee54264a4942fcf6ef48",
"assets/assets/icons/instagram.svg": "98762113a6b923c188926f9a3542a595",
"assets/assets/icons/instagram_black.svg": "b776ea706b986e757f80a48404884547",
"assets/assets/icons/login.svg": "29789505ffbeb46eb1b684cd50dab810",
"assets/assets/icons/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/assets/icons/media.svg": "e790cb1d2138f7a9d1b404abf8346eb1",
"assets/assets/icons/media_file.svg": "5b8f2b094278f5d9378bca249cf80fc1",
"assets/assets/icons/menu_dashbord.svg": "5e8d164243b3e28c22a8a5e35719c96e",
"assets/assets/icons/menu_doc.svg": "c5a576281e34f54d9e041410d002443c",
"assets/assets/icons/menu_notification.svg": "f49436dd0acd00dc43ab287c7ac3ff4f",
"assets/assets/icons/menu_profile.svg": "134c2274ffaca9441fe7523b2f476608",
"assets/assets/icons/menu_setting.svg": "32ab0402dc07a66d078c758ddb0aa798",
"assets/assets/icons/menu_store.svg": "45f31f1388616a22053ea6a99ed5904a",
"assets/assets/icons/menu_task.svg": "fa731cbcb073759bd82c699331ef7e93",
"assets/assets/icons/menu_tran.svg": "acdaeac5ea677c4a479a1d656ea3d5c1",
"assets/assets/icons/one_drive.svg": "0b0ca635ef35ec9beebb18aaf20cd5d9",
"assets/assets/icons/pdf_file.svg": "4ea6d2b9e631ee54164987b57fa240c7",
"assets/assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/icons/signup.svg": "5f366fc66557521e8664354e8dd00b98",
"assets/assets/icons/sound_file.svg": "d346e8558ced623138787011e0ca7e88",
"assets/assets/icons/twitter.svg": "7e145c9eb60da95379f070be9920eca5",
"assets/assets/icons/unknown.svg": "2fc91e195e7a0d6279c01552403c3b89",
"assets/assets/icons/whatsapp.svg": "1d07b29e886d2867fc5e79a3e2dd5ac5",
"assets/assets/icons/xd_file.svg": "fd95a4cd96e6c7251ebeac76b7b7c8b9",
"assets/assets/icons/youtub.svg": "03bdcff4c0a95cc0b220838437f5f0c8",
"assets/assets/icons/youtube.svg": "63e492bf957a83380549a485ddf85222",
"assets/assets/icons/youtube_activity-48px.xml": "fedc7160b46d824041a07535cc23640a",
"assets/assets/images/logo-iasd.jpeg": "e6466bacc65ae075428fe9bdd626a93b",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/logo_iasd.png": "e3471cc1375f328e544e0443e7bf4e3e",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1b89042fb8d06193938f5a15624a0321",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "16b1bbc23c94b858e993ba98aeff96ab",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "a4d79ef4e55cbf6a0aef3892e71dcb9d",
"icons/Icon-512.png": "3ca84e2f8fea28d6ae7b0af01f7079e6",
"icons/Icon-maskable-192.png": "a4d79ef4e55cbf6a0aef3892e71dcb9d",
"icons/Icon-maskable-512.png": "3ca84e2f8fea28d6ae7b0af01f7079e6",
"index.html": "952e142d001c7f2cf36edddce1568230",
"/": "952e142d001c7f2cf36edddce1568230",
"main.dart.js": "65698c3873ce497e5c363619d05ef509",
"manifest.json": "ad5c2db49ae5a624d54c8b34a810d9c9",
"splash/img/dark-1x.png": "1f9ad232bef12a4afad3f1342bc53cf3",
"splash/img/dark-2x.png": "49a6d75f3d751adf7a6131fd8a5efeb7",
"splash/img/dark-3x.png": "62949644a55d36410525aedcc3bf129c",
"splash/img/dark-4x.png": "6b1dfd49a1be60d9c9a0e4e48369b5a2",
"splash/img/light-1x.png": "1f9ad232bef12a4afad3f1342bc53cf3",
"splash/img/light-2x.png": "49a6d75f3d751adf7a6131fd8a5efeb7",
"splash/img/light-3x.png": "62949644a55d36410525aedcc3bf129c",
"splash/img/light-4x.png": "6b1dfd49a1be60d9c9a0e4e48369b5a2",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "e09e4345c11f845a7d013e81e2f76c2a",
"version.json": "315701c10bfb3aa7deda2e0d6968c0b1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
