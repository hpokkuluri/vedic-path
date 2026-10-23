// Great Sages — Mārkaṇḍeya. Retold by Hari Pokkuluri.
// Told from the Bhāgavata (Skandha 12), the Mahābhārata (Āraṇyaka Parva), the Viṣṇu and Mārkaṇḍeya Purāṇas
// and the Śaiva Purāṇic tradition, with later tellings marked, in fresh original wording.
// Block format: see the top of ramayana.js and sages.js.
window.SAGE_PLAN = Object.assign(window.SAGE_PLAN || {}, { markandeya: [
  ["Mṛkaṇḍu's Choice", "Viṣṇu Purāṇa 1.10 · Śaiva Purāṇic tellings"],
  ["The Boy Who Held On — Śiva Conquers Death", "Śaiva Purāṇic tellings · temple tradition"],
  ["The Tapas Kāma Could Not Break", "Bhāgavata 12.8"],
  ["The Child on the Banyan Leaf", "Bhāgavata 12.9 · Mahābhārata, Āraṇyaka Parva"],
  ["Stories for the Pāṇḍavas in the Forest", "Mahābhārata, Āraṇyaka Parva (Mārkaṇḍeya-samāsyā)"],
  ["The Purāṇa of His Name — and the Devī Māhātmyam", "Mārkaṇḍeya Purāṇa"],
  ["The Sage Who Does Not Die", "Ciranjīvi verse · living tradition"]
] });
window.RMY_WHO = Object.assign({
  "markandeya": { "av": "🔱", "en": "Mārkaṇḍeya", "te": "మార్కండేయుడు", "d": "Son of the sage Mṛkaṇḍu, of Bhṛgu's family. Saved from death by Śiva and blessed to remain forever young; he saw the infant Viṣṇu on a banyan leaf at the end of the world.", "dt": "భృగు వంశంలోని మృకండు మహర్షి కుమారుడు. శివుడు మృత్యువు నుండి కాపాడి చిరయౌవనం ప్రసాదించాడు; ప్రళయంలో వటపత్రంపై బాల విష్ణువును దర్శించాడు." },
  "mrikandu": { "av": "🧘", "en": "Mṛkaṇḍu", "te": "మృకండు మహర్షి", "d": "A sage of Bhṛgu's line and father of Mārkaṇḍeya.", "dt": "భృగు వంశపు ముని, మార్కండేయుని తండ్రి." },
  "yama": { "av": "🐃", "en": "Yama", "te": "యముడు", "d": "The god of death, lord of the departed, who rides a buffalo and carries a noose.", "dt": "మృత్యుదేవత, మరణించినవారికి అధిపతి; దున్నపోతుపై తిరుగుతూ పాశం పట్టుకునేవాడు." },
  "naranarayana": { "av": "🙏", "en": "Nara and Nārāyaṇa", "te": "నరనారాయణులు", "d": "Twin sages, forms of Viṣṇu, who do tapas forever at Badarī in the Himālaya.", "dt": "హిమాలయాల్లోని బదరిలో నిరంతరం తపస్సు చేసే విష్ణురూపులైన జంట మునులు." },
  "dharmavyadha": { "av": "🔪", "en": "The Dharma-vyādha", "te": "ధర్మవ్యాధుడు", "d": "A meat-seller of Mithilā in the Mahābhārata who taught a proud brāhmaṇa the meaning of dharma.", "dt": "మహాభారతంలో గర్విష్ఠుడైన ఒక బ్రాహ్మణునికి ధర్మం అర్థం బోధించిన మిథిలా నగరపు మాంస విక్రేత." },
  "durga": { "av": "🦁", "en": "Durgā", "te": "దుర్గాదేవి", "d": "The Great Goddess who rides a lion and destroys the demon Mahiṣa — the heroine of the Devī Māhātmyam.", "dt": "సింహవాహిని, మహిషాసురమర్దిని — దేవీ మాహాత్మ్యపు కథానాయిక అయిన ఆదిశక్తి." }
}, window.RMY_WHO || {});
window.SAGE_CHAPTERS = (window.SAGE_CHAPTERS || []).concat([
{
 id: "mk-1", sage: "markandeya", n: 1, order: 1401, date: "2026-10-23",
 title: "Mṛkaṇḍu's Choice", titleTe: "మృకండుని ఎంపిక",
 src: "Viṣṇu Purāṇa 1.10 · Śaiva Purāṇic tellings",
 who: ["markandeya", "mrikandu", "bhrigu", "shiva"],
 pages: [
  [
   ["p", "{markandeya|Mārkaṇḍeya} came from the great family of {bhrigu|Bhṛgu}. The Viṣṇu Purāṇa traces the line: Bhṛgu's sons Dhātā and Vidhātā married Āyati and Niyati, and from them came Prāṇa and {mrikandu|Mṛkaṇḍu}; Mṛkaṇḍu's son was Mārkaṇḍeya — “the son of Mṛkaṇḍu.”", "{markandeya|మార్కండేయుడు} {bhrigu|భృగు} మహర్షి మహావంశం నుండి వచ్చాడు. విష్ణు పురాణం ఆ వంశాన్ని ఇలా చెబుతుంది: భృగువు కుమారులు ధాత, విధాత ఆయతి, నియతులను పెళ్ళాడారు; వారి నుండి ప్రాణుడు, {mrikandu|మృకండుడు} పుట్టారు; మృకండుని కుమారుడు మార్కండేయుడు — “మృకండుని పుత్రుడు.”"],
   ["p", "The most loved story of his birth comes from the Śaiva Purāṇic tradition. Mṛkaṇḍu and his wife had no children. They grew old in prayer, and at last did tapas to {shiva|Śiva}, asking for a son. Śiva appeared — and offered them a strange choice.", "ఆయన జన్మ గురించి అత్యంత ప్రియమైన కథ శైవ పురాణ సంప్రదాయం నుండి వస్తుంది. మృకండునికి, ఆయన భార్యకు సంతానం లేదు. ప్రార్థనల్లోనే వృద్ధులయ్యారు; చివరికి కుమారుని కోసం {shiva|శివునికై} తపస్సు చేశారు. శివుడు ప్రత్యక్షమై — ఒక విచిత్రమైన ఎంపికను ముందుంచాడు."]
  ],
  [
   ["h", "Sixteen Years or a Hundred", "పదహారేళ్ళా, వందేళ్ళా"],
   ["p", "“You may have a son who will live a very long life — but he will be dull, without wisdom or goodness. Or you may have a son who is wise, pure, devoted and brilliant — but he will live only sixteen years. Choose.”", "“చాలా కాలం జీవించే కుమారుణ్ణి పొందవచ్చు — కానీ అతను మందబుద్ధి, జ్ఞానమూ మంచితనమూ లేనివాడు అవుతాడు. లేదా జ్ఞాని, పవిత్రుడు, భక్తుడు, ప్రతిభావంతుడైన కుమారుణ్ణి పొందవచ్చు — కానీ అతను పదహారేళ్ళే జీవిస్తాడు. ఎంచుకోండి.”"],
   ["p", "The old couple did not take long. “Give us the good son,” said Mṛkaṇḍu. “Better a short life well lived than a long one wasted.” So Mārkaṇḍeya was born — a beautiful, bright child who learned the Vedas almost as soon as he could speak, and who loved Śiva with all his heart. His parents watched him grow with joy — and with a quiet grief they never let him see, as each birthday brought the sixteenth closer.", "ఆ వృద్ధ దంపతులు ఎక్కువసేపు ఆలోచించలేదు. “మంచి కుమారుణ్ణే ఇవ్వండి. వృథా అయిన సుదీర్ఘ జీవితం కంటే చక్కగా గడిపిన చిన్న జీవితమే మేలు” అన్నాడు మృకండుడు. అలా మార్కండేయుడు పుట్టాడు — మాటలు రాగానే వేదాలు నేర్చుకున్న, శివుణ్ణి మనస్ఫూర్తిగా ప్రేమించిన అందమైన, తెలివైన బాలుడు. తల్లిదండ్రులు ఆనందంతో అతను పెరగడం చూశారు — ప్రతి పుట్టినరోజూ పదహారో ఏటిని దగ్గర చేస్తుంటే, అతనికి ఎన్నడూ కనబడనీయని మౌన దుఃఖంతో కూడా."]
  ],
  [
   ["h", "The Secret Told", "బయటపడిన రహస్యం"],
   ["p", "In his sixteenth year, the boy noticed his parents weeping and asked why. At last they told him. Mārkaṇḍeya was not frightened. “Do not grieve,” he said. “I will worship Śiva, the conqueror of death. Let us see what happens.” And he went to the bank of a river, set up a Śiva-liṅga, and began to worship it day and night.", "పదహారో ఏట తల్లిదండ్రులు ఏడవడం చూసి బాలుడు కారణం అడిగాడు. చివరికి వారు చెప్పారు. మార్కండేయుడు భయపడలేదు. “దుఃఖించకండి. మృత్యుంజయుడైన శివుణ్ణి ఆరాధిస్తాను. ఏం జరుగుతుందో చూద్దాం” అన్నాడు. ఒక నది ఒడ్డుకు వెళ్ళి శివలింగాన్ని ప్రతిష్ఠించి రాత్రింబవళ్ళు పూజించసాగాడు."],
   ["sglink", "Bhṛgu's children and grandchildren", "భృగువు సంతానం, మనుమలు", "bh-4"],
   ["src", "Viṣṇu Purāṇa 1.10 (Bhṛgu's line: Dhātā and Vidhātā, Mṛkaṇḍu, Mārkaṇḍeya). The choice between a long-lived dull son and a wise son of sixteen years is told in the Śaiva Purāṇic tradition and in temple and folk tellings; the Bhāgavata gives a different account of his early life.", "విష్ణు పురాణం 1.10 (భృగు వంశం: ధాత, విధాత, మృకండుడు, మార్కండేయుడు). దీర్ఘాయుష్షు కల మందబుద్ధి కుమారుడా, పదహారేళ్ళ జ్ఞాని కుమారుడా అనే ఎంపిక శైవ పురాణ సంప్రదాయంలో, ఆలయ, జానపద కథనాలలో చెప్పబడుతుంది; ఆయన బాల్యం గురించి భాగవతం వేరే కథనం ఇస్తుంది."]
  ]
 ],
 remember: [
  ["{markandeya|Mārkaṇḍeya} was the son of {mrikandu|Mṛkaṇḍu}, of {bhrigu|Bhṛgu}'s family.", "{markandeya|మార్కండేయుడు} {bhrigu|భృగు} వంశంలోని {mrikandu|మృకండుని} కుమారుడు."],
  ["{shiva|Śiva} offered a long-lived dull son or a wise son of sixteen years; they chose the wise one.", "{shiva|శివుడు} దీర్ఘాయుష్షు కల మందబుద్ధి కుమారుడినో, పదహారేళ్ళ జ్ఞాని కుమారుడినో ఎంచుకోమన్నాడు; వారు జ్ఞానినే ఎంచుకున్నారు."],
  ["Told his fate, the boy calmly began to worship Śiva.", "తన విధి తెలిశాక బాలుడు ప్రశాంతంగా శివారాధన మొదలుపెట్టాడు."]
 ],
 think: ["Mṛkaṇḍu chose a short, good life for his son over a long, empty one. Would you have chosen the same? Why?", "మృకండుడు కుమారునికి సుదీర్ఘమైన శూన్య జీవితం కంటే చిన్నదైన మంచి జీవితాన్ని ఎంచుకున్నాడు. మీరైతే అదే ఎంచుకునేవారా? ఎందుకు?"]
},
{
 id: "mk-2", sage: "markandeya", n: 2, order: 1402, date: "2026-10-23",
 title: "The Boy Who Held On — Śiva Conquers Death", titleTe: "పట్టు విడవని బాలుడు — శివుడు మృత్యువును జయించడం",
 src: "Śaiva Purāṇic tellings · temple tradition",
 who: ["markandeya", "shiva", "yama"],
 pages: [
  [
   ["p", "On the last day of his sixteenth year, the messengers of death came for {markandeya|Mārkaṇḍeya}. But when they reached him, they found a boy so absorbed in prayer, so blazing with devotion, that they could not go near him. They went back afraid. So {yama|Yama}, lord of death, came himself, riding his buffalo, his noose in his hand.", "పదహారో ఏటి చివరి రోజున యమదూతలు {markandeya|మార్కండేయుని} కోసం వచ్చారు. కానీ ప్రార్థనలో ఎంతగా లీనమై, భక్తితో ఎంతగా జ్వలిస్తున్నాడంటే వారు దగ్గరికి వెళ్ళలేకపోయారు. భయంతో వెనక్కి వెళ్ళిపోయారు. అప్పుడు మృత్యుదేవత {yama|యముడు} స్వయంగా దున్నపోతుపై, చేతిలో పాశంతో వచ్చాడు."],
   ["p", "“Your time has come,” said Yama. Mārkaṇḍeya threw both his arms around the Śiva-liṅga and held on with all his strength. “I will not leave my Lord,” he cried. Yama threw his noose. It fell around the boy — and around the liṅga too.", "“నీ సమయం వచ్చింది” అన్నాడు యముడు. మార్కండేయుడు రెండు చేతులతో శివలింగాన్ని కౌగిలించుకుని శక్తినంతా పెట్టి పట్టుకున్నాడు. “నా స్వామిని విడవను” అని అరిచాడు. యముడు పాశం విసిరాడు. అది బాలుని చుట్టూ — లింగం చుట్టూ కూడా — పడింది."]
  ],
  [
   ["h", "Kālāntaka", "కాలాంతకుడు"],
   ["p", "At that moment the liṅga split open, and {shiva|Śiva} burst out of it in fury. How dare Death put his noose on Śiva himself, and on a child who had taken refuge in him? Śiva struck Yama down — the tellings say he kicked him with his left foot — and Death lay helpless on the ground. From that day Śiva is called Kālāntaka, “the ender of Death,” and Mṛtyuñjaya, “the conqueror of death.”", "ఆ క్షణంలో లింగం చీలిపోయి, శివుడు కోపంతో దాని నుండి బయటకు దూకాడు. స్వయంగా శివుని మీదా, ఆయనను శరణు వేడిన ఒక బాలుని మీదా పాశం వేయడానికి మృత్యువుకు ఎంత ధైర్యం? శివుడు యముణ్ణి పడగొట్టాడు — ఎడమ కాలితో తన్నాడని కథనాలు చెబుతాయి — మృత్యువు నిస్సహాయంగా నేలపై పడ్డాడు. అప్పటి నుండి శివుణ్ణి కాలాంతకుడు — “మృత్యువును అంతం చేసినవాడు” — అనీ, మృత్యుంజయుడు — “మృత్యువును జయించినవాడు” — అనీ అంటారు."],
   ["p", "Then the gods pleaded: without death, the world would fill up and lose its balance. Śiva restored Yama to life and his work — but Mārkaṇḍeya he blessed to remain sixteen forever, untouched by death, for as long as the world lasts.", "అప్పుడు దేవతలు వేడుకున్నారు: మృత్యువు లేకపోతే లోకం నిండిపోయి సమతుల్యం కోల్పోతుంది. శివుడు యముణ్ణి తిరిగి బతికించి అతని పనిని అతనికి ఇచ్చాడు — కానీ మార్కండేయుణ్ణి మాత్రం లోకం ఉన్నంతవరకూ మృత్యువు తాకకుండా ఎప్పటికీ పదహారేళ్ళవాడిగా ఉండమని ఆశీర్వదించాడు."]
  ],
  [
   ["h", "Where It Is Remembered", "ఎక్కడ గుర్తుంచుకుంటారు"],
   ["p", "In Tamil Nadu, the temple at Thirukkadaiyur shows Śiva as Kālasaṃhāramūrti — the form that struck down Death — and many families celebrate a sixtieth or eightieth birthday there, praying for long life. Across India, people chant the Mahāmṛtyuñjaya mantra from the Ṛgveda and Yajurveda — “We worship the three-eyed one… may he free us from death, as a ripe cucumber is freed from its stem” — and tradition links it with Mārkaṇḍeya's escape.", "తమిళనాడులోని తిరుక్కడైయూర్ ఆలయం శివుణ్ణి కాలసంహారమూర్తిగా — మృత్యువును పడగొట్టిన రూపంగా — చూపిస్తుంది; చాలా కుటుంబాలు దీర్ఘాయుష్షు కోసం ప్రార్థిస్తూ అక్కడ షష్టిపూర్తి, శతాభిషేకం జరుపుకుంటాయి. భారతదేశమంతటా జనం ఋగ్వేద, యజుర్వేదాలలోని మహామృత్యుంజయ మంత్రాన్ని జపిస్తారు — “త్రినేత్రుణ్ణి ఆరాధిస్తున్నాం… పండిన దోసపండు తొడిమ నుండి విడినట్టు మమ్మల్ని మృత్యువు నుండి విడిపించుగాక” — సంప్రదాయం దాన్ని మార్కండేయుని విముక్తితో జోడిస్తుంది."],
   ["dyk", "🕉️", "The Mahāmṛtyuñjaya mantra itself is much older than these stories — it is in the Ṛgveda (7.59.12), seen by the family of Vasiṣṭha. The link with Mārkaṇḍeya is a later devotional tradition.", "మహామృత్యుంజయ మంత్రం ఈ కథల కంటే చాలా ప్రాచీనమైనది — ఋగ్వేదంలో (7.59.12) వసిష్ఠ వంశం దర్శించినది. మార్కండేయునితో దాని సంబంధం తరువాతి భక్తి సంప్రదాయం."],
   ["src", "The story of Mārkaṇḍeya embracing the liṅga and Śiva striking down Yama is told in the Śaiva Purāṇic tradition and in temple tradition (Thirukkadaiyur). The Mahāmṛtyuñjaya mantra is Ṛgveda 7.59.12, repeated in the Yajurveda.", "మార్కండేయుడు లింగాన్ని కౌగిలించుకోవడం, శివుడు యముణ్ణి పడగొట్టడం శైవ పురాణ సంప్రదాయంలో, ఆలయ సంప్రదాయంలో (తిరుక్కడైయూర్) చెప్పబడుతుంది. మహామృత్యుంజయ మంత్రం ఋగ్వేదం 7.59.12; యజుర్వేదంలో మళ్ళీ వస్తుంది."]
  ]
 ],
 remember: [
  ["When {yama|Yama} came, {markandeya|Mārkaṇḍeya} embraced the Śiva-liṅga, and the noose fell on both.", "{yama|యముడు} వచ్చినప్పుడు {markandeya|మార్కండేయుడు} శివలింగాన్ని కౌగిలించుకున్నాడు; పాశం రెండింటిపైనా పడింది."],
  ["{shiva|Śiva} burst from the liṅga and struck down Death — Kālāntaka, Mṛtyuñjaya.", "{shiva|శివుడు} లింగం నుండి బయటకు వచ్చి మృత్యువును పడగొట్టాడు — కాలాంతకుడు, మృత్యుంజయుడు."],
  ["Mārkaṇḍeya was blessed to stay sixteen forever.", "మార్కండేయుడు ఎప్పటికీ పదహారేళ్ళవాడిగా ఉండేలా ఆశీర్వదించబడ్డాడు."]
 ],
 think: ["When the worst came, Mārkaṇḍeya did not run — he held on to what he loved most. What do you hold on to when you are afraid?", "అత్యంత కష్టం వచ్చినప్పుడు మార్కండేయుడు పారిపోలేదు — తనకు అత్యంత ప్రియమైనదాన్ని పట్టుకున్నాడు. మీరు భయపడినప్పుడు దేన్ని పట్టుకుంటారు?"]
},
{
 id: "mk-3", sage: "markandeya", n: 3, order: 1403, date: "2026-10-23",
 title: "The Tapas Kāma Could Not Break", titleTe: "కాముడు భంగపరచలేని తపస్సు",
 src: "Bhāgavata 12.8",
 who: ["markandeya", "mrikandu", "indra", "kama", "naranarayana", "vishnu"],
 pages: [
  [
   ["p", "The Bhāgavata tells Mārkaṇḍeya's life differently. There, {mrikandu|Mṛkaṇḍu} performs the rites for his son, and young {markandeya|Mārkaṇḍeya} becomes a lifelong student, worshipping the Lord in the fire, the sun, the teacher, the brāhmaṇas, his own heart and all creatures. He does tapas for so long — the Bhāgavata says through six of the great ages of Manu — that he overcomes death simply by his devotion.", "భాగవతం మార్కండేయుని జీవితాన్ని వేరేలా చెబుతుంది. అక్కడ {mrikandu|మృకండుడు} కుమారునికి సంస్కారాలు చేస్తాడు; యువకుడైన {markandeya|మార్కండేయుడు} జీవితాంతం బ్రహ్మచారిగా అగ్నిలో, సూర్యునిలో, గురువులో, బ్రాహ్మణులలో, తన హృదయంలో, సకల ప్రాణులలో భగవంతుణ్ణి ఆరాధిస్తాడు. ఎంతకాలం తపస్సు చేస్తాడంటే — ఆరు మన్వంతరాల పాటు అని భాగవతం చెబుతుంది — కేవలం భక్తితోనే మృత్యువును జయిస్తాడు."],
   ["p", "{indra|Indra} grew afraid. A sage this powerful might take his throne! So he sent {kama|Kāma}, the god of desire, with the spring season, the gandharvas singing, the apsarases dancing, and the cool south wind full of the scent of flowers, to the sage's āśrama in the Himālaya, by the river Puṣpabhadrā.", "{indra|ఇంద్రుడు} భయపడ్డాడు. ఇంత శక్తిమంతుడైన ముని తన సింహాసనం తీసుకుంటాడేమో! అందుకే వసంత ఋతువు, పాడుతున్న గంధర్వులు, నాట్యం చేస్తున్న అప్సరసలు, పూల పరిమళంతో నిండిన చల్లని దక్షిణ గాలితో సహా మన్మథుడైన {kama|కాముణ్ణి} హిమాలయాల్లో పుష్పభద్రా నది ఒడ్డున ఉన్న ముని ఆశ్రమానికి పంపాడు."]
  ],
  [
   ["h", "Scorched by Calm", "ప్రశాంతతకు కాలిపోయిన దాడి"],
   ["p", "The whole forest burst into bloom out of season. Birds sang, bees hummed, an apsaras played with a ball until her garment slipped, and Kāma stood with his flower-bow drawn. Mārkaṇḍeya sat with his eyes closed, his mind fixed on the Lord, and did not notice any of it. The power of his stillness was so great that the whole party felt as if they were being burned by it — and they fled, like children running from a fire.", "అడవంతా అకాలంగా పూచింది. పక్షులు పాడాయి, తుమ్మెదలు ఝంకరించాయి, ఒక అప్సరస బంతితో ఆడుతుంటే ఆమె వస్త్రం జారింది; కాముడు పూలవిల్లు ఎక్కుపెట్టి నిలబడ్డాడు. మార్కండేయుడు కళ్ళు మూసుకుని, మనసు భగవంతునిపై నిలిపి కూర్చున్నాడు; వీటిలో దేన్నీ గమనించలేదు. ఆయన నిశ్చలత్వపు శక్తి ఎంత గొప్పదంటే ఆ బృందమంతా దానికి కాలిపోతున్నట్టు అనిపించి — నిప్పు నుండి పారిపోయే పిల్లల్లా — పారిపోయారు."],
   ["p", "Indra was astonished. The Bhāgavata notes that the sage did not even get angry at them — and that is the greatest wonder. Anger, it says, is easy for great ascetics; to be untouched by both desire and anger is the real victory.", "ఇంద్రుడు ఆశ్చర్యపోయాడు. ముని వారిపై కనీసం కోపం కూడా తెచ్చుకోలేదని భాగవతం గమనిస్తుంది — అదే గొప్ప అద్భుతం. మహాతపస్వులకు కోపం సులభమే; కామానికీ కోపానికీ రెండింటికీ అతీతంగా ఉండడమే అసలు విజయం అంటుంది."]
  ],
  [
   ["h", "“Show Me Your Māyā”", "“నీ మాయను చూపించు”"],
   ["p", "Then {naranarayana|Nara and Nārāyaṇa}, the twin sages who are forms of {vishnu|Viṣṇu}, appeared before him — one fair, one dark, wearing deerskin and bark, shining like the sun. Mārkaṇḍeya fell at their feet and sang their praise. Pleased, they offered him any boon.", "అప్పుడు విష్ణురూపులైన జంట మునులు {naranarayana|నరనారాయణులు} ఆయన ఎదుట ప్రత్యక్షమయ్యారు — ఒకరు తెల్లగా, ఒకరు నల్లగా, జింకచర్మం, నారబట్టలు ధరించి, సూర్యునిలా ప్రకాశిస్తూ. మార్కండేయుడు వారి పాదాలపై పడి స్తుతించాడు. ప్రసన్నులై ఏ వరమైనా కోరుకోమన్నారు."],
   ["p", "Mārkaṇḍeya had already conquered death; what else could he want? He said: “I have seen you. That is enough. But I wish to see your māyā — the power by which the whole world, and the gods with it, mistake the unreal for the real.” The twin sages smiled — “So be it” — and went away to Badarī. And the sage went back to his worship, waiting to see what would happen.", "మార్కండేయుడు అప్పటికే మృత్యువును జయించాడు; ఇంకేం కోరుకుంటాడు? “మిమ్మల్ని దర్శించాను. అది చాలు. కానీ మీ మాయను చూడాలనుకుంటున్నాను — దేవతలతో సహా లోకమంతా అసత్యాన్ని సత్యంగా భ్రమపడే ఆ శక్తిని” అన్నాడు. జంట మునులు నవ్వి — “అలాగే” — బదరికి వెళ్ళిపోయారు. ముని ఏం జరుగుతుందో అని ఎదురుచూస్తూ తన ఆరాధనకు తిరిగి వెళ్ళాడు."],
   ["src", "Bhāgavata Purāṇa 12.8 (Mārkaṇḍeya's lifelong vow and tapas; Indra sends Kāma, spring, gandharvas and apsarases to the Puṣpabhadrā; they flee, scorched by his power; Nara-Nārāyaṇa appear; his wish to see the Lord's māyā).", "భాగవత పురాణం 12.8 (మార్కండేయుని జీవితకాల వ్రతం, తపస్సు; పుష్పభద్రా తీరానికి ఇంద్రుడు కాముణ్ణి, వసంతాన్ని, గంధర్వ అప్సరసలను పంపడం; ఆయన తేజస్సుకు కాలిపోయి వారు పారిపోవడం; నరనారాయణుల ప్రత్యక్షం; భగవంతుని మాయను చూడాలనే ఆయన కోరిక)."]
  ]
 ],
 remember: [
  ["{indra|Indra} sent {kama|Kāma} and the apsarases to break {markandeya|Mārkaṇḍeya}'s tapas.", "{markandeya|మార్కండేయుని} తపస్సు భంగపరచడానికి {indra|ఇంద్రుడు} {kama|కాముణ్ణి}, అప్సరసలను పంపాడు."],
  ["The sage never noticed; scorched by his calm, they fled — and he felt no anger.", "ముని అసలు గమనించలేదు; ఆయన ప్రశాంతతకు కాలిపోయి వారు పారిపోయారు — ఆయనకు కోపం కూడా రాలేదు."],
  ["{naranarayana|Nara and Nārāyaṇa} offered a boon; he asked to see the Lord's māyā.", "{naranarayana|నరనారాయణులు} వరం ఇవ్వబోయారు; భగవంతుని మాయను చూడాలని కోరాడు."]
 ],
 think: ["The Bhāgavata says not getting angry was a greater victory than resisting temptation. Why might calm be harder than strength?", "ప్రలోభాన్ని ఎదిరించడం కంటే కోపం తెచ్చుకోకపోవడం గొప్ప విజయమని భాగవతం అంటుంది. బలం కంటే ప్రశాంతత ఎందుకు కష్టం కావచ్చు?"]
},
{
 id: "mk-4", sage: "markandeya", n: 4, order: 1404, date: "2026-10-23",
 title: "The Child on the Banyan Leaf", titleTe: "వటపత్రశాయి",
 src: "Bhāgavata 12.9 · Mahābhārata, Āraṇyaka Parva",
 who: ["markandeya", "vishnu", "naranarayana"],
 pages: [
  [
   ["p", "One evening, as {markandeya|Mārkaṇḍeya} sat in worship by the river, a terrible wind began to blow. Black clouds piled up, lightning cracked, and rain fell in torrents as thick as chariot-axles. The seas rose on every side. Water swallowed the earth, the islands, the mountains, the sky — until there was nothing anywhere but one dark, roaring ocean, and the sage alone in it.", "ఒక సాయంత్రం {markandeya|మార్కండేయుడు} నది ఒడ్డున పూజలో కూర్చుని ఉండగా భయంకరమైన గాలి వీచసాగింది. నల్లని మేఘాలు కమ్ముకున్నాయి, మెరుపులు మెరిశాయి, రథపు ఇరుసులంత లావైన ధారలుగా వాన కురిసింది. నలువైపులా సముద్రాలు పొంగాయి. నీరు భూమినీ, ద్వీపాలనూ, పర్వతాలనూ, ఆకాశాన్నీ మింగేసింది — ఎక్కడా ఒక చీకటి, గర్జించే సముద్రం, అందులో ఒంటరిగా ముని తప్ప ఏమీ లేదు."],
   ["p", "He was tossed by the waves, hungry, thirsty, frightened, attacked by sea creatures, tired beyond words — for what felt like millions of years. He lost all sense of direction, of day or night. Sometimes he thought he was drowning, sometimes that he had been eaten.", "అలలు ఆయనను విసిరేశాయి; ఆకలి, దాహం, భయం, సముద్ర జీవుల దాడులు, మాటల్లో చెప్పలేని అలసట — లక్షల సంవత్సరాలనిపించేంత కాలం. దిక్కులు, పగలూ రాత్రీ తెలియకుండా పోయాయి. ఒక్కోసారి మునిగిపోతున్నాననుకున్నాడు, ఒక్కోసారి ఏదో జీవి మింగేసిందనుకున్నాడు."]
  ],
  [
   ["h", "A Tree in the Endless Water", "అనంత జలంలో ఒక చెట్టు"],
   ["p", "Then, on a little rise of land, he saw a young banyan tree, green and fresh, full of leaves and fruit. On one branch, on a single leaf, lay a baby — dark and glowing like an emerald, his face shining, his little eyes like lotus petals. With both his tiny hands the child held one of his own feet and was sucking his toe, as babies do. And the darkness all around grew light from him.", "అప్పుడు ఒక చిన్న నేల మిట్టపై ఆకులతో, పండ్లతో నిండిన లేత పచ్చని మర్రిచెట్టు కనిపించింది. ఒక కొమ్మపై, ఒక్క ఆకుపై ఒక పసిబిడ్డ పడుకుని ఉన్నాడు — మరకతంలా నల్లగా మెరుస్తూ, ముఖం వెలిగిపోతూ, కళ్ళు తామర రేకుల్లా. పసిపిల్లలు చేసినట్టే రెండు చిట్టి చేతులతో ఒక పాదాన్ని పట్టుకుని బొటనవేలు చీకుతున్నాడు. చుట్టూ ఉన్న చీకటంతా ఆయన వల్ల వెలుగుగా మారింది."],
   ["p", "Mārkaṇḍeya came near in wonder, his weariness forgotten. As he did, the baby breathed in — and the sage was drawn into the child's body like a tiny insect on a breath. Inside, he saw the whole universe just as it had been before the flood: the sky, the stars, the mountains, the oceans, the islands and cities, the gods and people and animals — and even his own āśrama by the river, and himself in it. Then the child breathed out, and the sage was thrown back into the dark ocean, and saw again the baby on the banyan leaf, smiling at him.", "అలసట మరచి ఆశ్చర్యంతో మార్కండేయుడు దగ్గరికి వచ్చాడు. అప్పుడే ఆ బిడ్డ ఊపిరి పీల్చాడు — ఊపిరితో కొట్టుకుపోయే చిన్న పురుగులా ముని ఆ బిడ్డ శరీరంలోకి లాగబడ్డాడు. లోపల ప్రళయానికి ముందున్నట్టే సమస్త విశ్వాన్నీ చూశాడు: ఆకాశం, నక్షత్రాలు, పర్వతాలు, సముద్రాలు, ద్వీపాలు, నగరాలు, దేవతలు, మనుషులు, జంతువులు — నది ఒడ్డున తన ఆశ్రమాన్నీ, అందులో తననూ కూడా. తర్వాత బిడ్డ ఊపిరి వదిలాడు; ముని మళ్ళీ చీకటి సముద్రంలోకి విసిరేయబడి, వటపత్రంపై తనను చూసి నవ్వుతున్న బిడ్డను మళ్ళీ చూశాడు."],
   ["p", "He rushed forward to embrace the child — and everything vanished. The flood, the tree, the baby, all were gone. Mārkaṇḍeya was sitting in his own āśrama by the river, just as before, his worship in front of him. It had all been the Lord's māyā, which he had asked to see.", "బిడ్డను కౌగిలించుకోవాలని ముందుకు దూకాడు — అంతా మాయమైపోయింది. ప్రళయం, చెట్టు, బిడ్డ — అన్నీ పోయాయి. మార్కండేయుడు నది ఒడ్డున తన ఆశ్రమంలో, ముందున్నట్టే, ఎదుట పూజాసామగ్రితో కూర్చుని ఉన్నాడు. అదంతా ఆయన చూడాలని కోరిన భగవంతుని మాయే."]
  ],
  [
   ["h", "Bāla Mukunda", "బాల ముకుందుడు"],
   ["p", "This picture of the infant Lord on a banyan leaf — Vaṭapatraśāyī — became one of the best-loved images of Kṛṣṇa. A famous devotional verse, traditionally sung by the poet Bilvamaṅgala, begins:", "వటపత్రంపై పసిబిడ్డగా ప్రభువు — వటపత్రశాయి — అనే ఈ దృశ్యం శ్రీకృష్ణుని అత్యంత ప్రియమైన రూపాలలో ఒకటైంది. సంప్రదాయం బిల్వమంగళ కవికి ఆపాదించే ప్రసిద్ధ భక్తి శ్లోకం ఇలా మొదలవుతుంది:"],
   ["sloka", ["కరారవిందేన పదారవిందం", "ముఖారవిందే వినివేశయంతమ్ ।", "వటస్య పత్రస్య పుటే శయానం", "బాలం ముకుందం మనసా స్మరామి ॥"], ["karāravindena padāravindaṃ", "mukhāravinde viniveśayantam |", "vaṭasya patrasya puṭe śayānaṃ", "bālaṃ mukundaṃ manasā smarāmi ||"], "“With his lotus hand he puts his lotus foot into his lotus mouth, as he lies in the fold of a banyan leaf — I remember in my heart the child Mukunda.”", "“పద్మం వంటి చేతితో పద్మం వంటి పాదాన్ని పద్మం వంటి నోటిలో ఉంచుకుంటూ, మర్రి ఆకు దొన్నెలో పడుకున్న బాల ముకుందుని మనసులో స్మరిస్తున్నాను.”"],
   ["dyk", "🌿", "The Mahābhārata tells the same vision in Mārkaṇḍeya's own words to the Pāṇḍavas: inside the child he saw the universe, and the child told him, “I am Nārāyaṇa.”", "ఇదే దర్శనాన్ని మహాభారతం మార్కండేయుని సొంత మాటల్లో పాండవులకు చెబుతుంది: ఆ బిడ్డ లోపల విశ్వాన్ని చూశాననీ, “నేను నారాయణుణ్ణి” అని బిడ్డ చెప్పాడనీ."],
   ["src", "Bhāgavata Purāṇa 12.9 (the flood, the banyan, the infant, the universe inside him, and the return to the āśrama). Mahābhārata, Āraṇyaka Parva (Mārkaṇḍeya tells the Pāṇḍavas of the child at the dissolution). The verse “karāravindena…” is from the Bāla-mukunda-aṣṭaka, traditionally attributed to Bilvamaṅgala (Līlāśuka).", "భాగవత పురాణం 12.9 (ప్రళయం, మర్రిచెట్టు, బిడ్డ, ఆయనలోని విశ్వం, ఆశ్రమానికి తిరిగి రావడం). మహాభారతం, ఆరణ్యక పర్వం (ప్రళయంలోని బిడ్డ గురించి మార్కండేయుడు పాండవులకు చెప్పడం). “కరారవిందేన…” శ్లోకం బాలముకుందాష్టకం నుండి; సంప్రదాయం దీన్ని బిల్వమంగళునికి (లీలాశుకునికి) ఆపాదిస్తుంది."]
  ]
 ],
 remember: [
  ["In a great flood, {markandeya|Mārkaṇḍeya} found an infant lying on a banyan leaf, sucking his toe.", "మహాప్రళయంలో {markandeya|మార్కండేయుడు} వటపత్రంపై బొటనవేలు చీకుతూ పడుకున్న పసిబిడ్డను చూశాడు."],
  ["Breathed into the child, he saw the whole universe — even himself — inside.", "బిడ్డ ఊపిరితో లోపలికి వెళ్ళి, అక్కడ సమస్త విశ్వాన్నీ — తననూ — చూశాడు."],
  ["It was the Lord's māyā, which he had asked to see; he woke in his own āśrama.", "అది ఆయన చూడాలని కోరిన భగవంతుని మాయ; తన ఆశ్రమంలోనే మేల్కొన్నాడు."]
 ],
 think: ["The whole universe was inside a baby small enough to lie on a leaf. What do you think the story is saying about how big and how small God can be?", "ఒక ఆకుపై పడుకునేంత చిన్న బిడ్డలో సమస్త విశ్వం ఉంది. దేవుడు ఎంత పెద్దవాడు, ఎంత చిన్నవాడు కాగలడని ఈ కథ చెబుతోందని మీరనుకుంటున్నారు?"]
},
{
 id: "mk-5", sage: "markandeya", n: 5, order: 1405, date: "2026-10-23",
 title: "Stories for the Pāṇḍavas in the Forest", titleTe: "అడవిలో పాండవులకు కథలు",
 src: "Mahābhārata, Āraṇyaka Parva (Mārkaṇḍeya-samāsyā)",
 who: ["markandeya", "yudhishthira", "krishna", "manu", "dharmavyadha", "savitri", "satyavan"],
 pages: [
  [
   ["p", "During their years of exile, the Pāṇḍavas were living in the Kāmyaka forest when {markandeya|Mārkaṇḍeya} came to visit them, with {krishna|Kṛṣṇa} also present. The sage was thousands of years old, yet looked like a young man of twenty-five. {yudhishthira|Yudhiṣṭhira} asked him: “Why do good people suffer, and the wicked prosper? How do our deeds follow us?” The long conversation that followed is one of the treasure-houses of the Mahābhārata — a whole book of stories within the epic.", "అరణ్యవాస సమయంలో పాండవులు కామ్యక వనంలో ఉండగా {markandeya|మార్కండేయుడు} వారిని దర్శించడానికి వచ్చాడు; {krishna|శ్రీకృష్ణుడు} కూడా అక్కడ ఉన్నాడు. ముని వేల సంవత్సరాల వయసువాడు; అయినా ఇరవై ఐదేళ్ళ యువకునిలా కనిపించాడు. {yudhishthira|ధర్మరాజు} అడిగాడు: “మంచివాళ్ళు ఎందుకు బాధపడతారు, చెడ్డవాళ్ళు ఎందుకు వర్ధిల్లుతారు? మన కర్మలు మనల్ని ఎలా వెంటాడతాయి?” తర్వాత జరిగిన సుదీర్ఘ సంభాషణ మహాభారతపు నిధుల్లో ఒకటి — ఇతిహాసంలోనే ఒక కథల గ్రంథం."],
   ["h", "The Little Fish", "చిన్న చేప"],
   ["p", "He told of {manu|Manu}, who found a tiny fish in a river that begged him to protect it from bigger fish. Manu put it in a jar; it outgrew the jar. He moved it to a pond, then to the Gaṅgā, then to the ocean, and still it grew. Then the fish warned him: “The flood is coming. Build a ship, take the seven sages and the seeds of all things.” When the waters rose, the great fish, horned, towed the ship to the peak of the Himālaya. The fish was Brahmā, the Mahābhārata says — later tellings make it Viṣṇu's Matsya avatāra.", "ఒక నదిలో చిన్న చేప దొరికిన {manu|మనువు} గురించి చెప్పాడు; పెద్ద చేపల నుండి కాపాడమని అది వేడుకుంది. మనువు దాన్ని కుండలో ఉంచాడు; కుండ కంటే పెద్దదైంది. చెరువుకు, తర్వాత గంగకు, తర్వాత సముద్రానికి మార్చాడు; అయినా పెరుగుతూనే ఉంది. అప్పుడు ఆ చేప హెచ్చరించింది: “ప్రళయం వస్తోంది. ఒక నావ కట్టు; సప్తర్షులనూ అన్ని విత్తనాలనూ తీసుకో.” నీరు పెరిగినప్పుడు కొమ్ము ఉన్న ఆ మహా మత్స్యం నావను హిమాలయ శిఖరానికి లాక్కెళ్ళింది. ఆ చేప బ్రహ్మ అని మహాభారతం చెబుతుంది — తరువాతి కథనాలు దాన్ని విష్ణువు మత్స్యావతారంగా చెబుతాయి."]
  ],
  [
   ["h", "The Crane, the Housewife and the Butcher", "కొంగ, గృహిణి, మాంసం అమ్మేవాడు"],
   ["p", "He told of a proud young brāhmaṇa named Kauśika. Sitting under a tree reciting the Veda, he was soiled by a crane above him; he glared at it in anger, and the bird fell dead. Then he went to beg for food. The lady of the house asked him to wait while she served her tired husband first. When at last she came out, he was furious. She said calmly: “I am no crane, to be killed by your anger. And you do not yet know dharma. Go to Mithilā and learn it from the {dharmavyadha|meat-seller} there.”", "కౌశికుడు అనే గర్విష్ఠుడైన యువ బ్రాహ్మణుని గురించి చెప్పాడు. చెట్టు కింద వేదం వల్లిస్తుండగా పైనుండి ఒక కొంగ రెట్ట వేసింది; కోపంగా దాని వైపు చూశాడు; ఆ పక్షి చచ్చి పడిపోయింది. తర్వాత భిక్ష కోసం వెళ్ళాడు. అలసిపోయిన భర్తకు ముందు వడ్డించేవరకు ఆగమని ఆ ఇంటి గృహిణి చెప్పింది. చివరికి ఆమె బయటకు వచ్చేసరికి అతను మండిపడ్డాడు. ఆమె ప్రశాంతంగా అంది: “నీ కోపానికి చచ్చిపోవడానికి నేను కొంగను కాను. నీకు ఇంకా ధర్మం తెలియదు. మిథిలకు వెళ్ళి అక్కడి {dharmavyadha|మాంసం అమ్మేవాని} దగ్గర నేర్చుకో.”"],
   ["p", "Astonished that she knew about the crane, Kauśika went. The meat-seller greeted him: “The lady sent you.” Then this humble man of a low trade taught the brāhmaṇa the deepest truths of dharma — that a person's goodness lies in honest work, in caring for one's parents, in truthfulness and non-harming, not in birth or pride. Kauśika went home a changed man, and served his own neglected parents.", "కొంగ గురించి ఆమెకు ఎలా తెలిసిందో అని ఆశ్చర్యపోయి కౌశికుడు వెళ్ళాడు. మాంసం అమ్మేవాడు “ఆ ఇల్లాలు పంపారు కదా” అని పలకరించాడు. తర్వాత నిమ్నవృత్తిలోని ఆ వినయుడు బ్రాహ్మణునికి ధర్మంలోని లోతైన సత్యాలను బోధించాడు — మనిషి మంచితనం జన్మలోనో గర్వంలోనో కాదు, నిజాయితీగా చేసే పనిలో, తల్లిదండ్రుల సేవలో, సత్యంలో, అహింసలో ఉంటుందని. కౌశికుడు మారిన మనిషిగా ఇంటికి వెళ్ళి, తాను నిర్లక్ష్యం చేసిన తల్లిదండ్రులకు సేవ చేశాడు."]
  ],
  [
   ["h", "Sāvitrī — and Rāma", "సావిత్రి — రాముడు"],
   ["p", "When Yudhiṣṭhira asked whether there had ever been a woman as devoted as Draupadī, Mārkaṇḍeya told the story of {savitri|Sāvitrī}, who followed Yama himself as he carried away the soul of her husband {satyavan|Satyavān}, and by her wisdom and steadiness won him back from death. And when Yudhiṣṭhira asked whether any king had suffered as he was suffering, Mārkaṇḍeya told him the whole story of Rāma — the Rāmopākhyāna, the Rāmāyaṇa in brief, told inside the Mahābhārata.", "ద్రౌపది అంత పతివ్రత ఇంకెవరైనా ఉన్నారా అని ధర్మరాజు అడిగినప్పుడు, భర్త {satyavan|సత్యవంతుని} ప్రాణాన్ని తీసుకుపోతున్న యముని వెంటే నడిచి, తన తెలివితో, స్థిరత్వంతో అతన్ని మృత్యువు నుండి తిరిగి గెలుచుకున్న {savitri|సావిత్రి} కథను మార్కండేయుడు చెప్పాడు. తనలా బాధపడిన రాజు ఇంకెవరైనా ఉన్నారా అని అడిగినప్పుడు రాముని కథనంతా — రామోపాఖ్యానం, మహాభారతంలోనే చెప్పిన సంక్షిప్త రామాయణం — చెప్పాడు."],
   ["dyk", "📚", "So Mārkaṇḍeya, who had seen the end of the world, became the Pāṇḍavas' storyteller. His lesson in every tale: suffering passes; dharma held firmly carries you through.", "ప్రళయాన్ని చూసిన మార్కండేయుడు అలా పాండవులకు కథకుడయ్యాడు. ప్రతి కథలోనూ ఆయన పాఠం: కష్టం గడిచిపోతుంది; గట్టిగా పట్టుకున్న ధర్మం మిమ్మల్ని దాటిస్తుంది."],
   ["src", "Mahābhārata, Āraṇyaka Parva, the Mārkaṇḍeya-samāsyā section (Mārkaṇḍeya's visit to the Kāmyaka forest; Manu and the fish; Kauśika, the devoted housewife and the dharma-vyādha of Mithilā; the story of Sāvitrī; the Rāmopākhyāna).", "మహాభారతం, ఆరణ్యక పర్వం, మార్కండేయ సమాస్యా భాగం (కామ్యక వనానికి మార్కండేయుని రాక; మనువు, చేప; కౌశికుడు, పతివ్రత గృహిణి, మిథిలా ధర్మవ్యాధుడు; సావిత్రి కథ; రామోపాఖ్యానం)."]
  ]
 ],
 remember: [
  ["{markandeya|Mārkaṇḍeya}, ever young, visited the Pāṇḍavas in the forest with {krishna|Kṛṣṇa}.", "నిత్యయౌవనుడైన {markandeya|మార్కండేయుడు} {krishna|కృష్ణునితో} కలిసి అడవిలో పాండవులను దర్శించాడు."],
  ["He told of {manu|Manu} and the fish, and of the {dharmavyadha|meat-seller} who taught a proud brāhmaṇa dharma.", "{manu|మనువు}, చేప కథ, గర్విష్ఠుడైన బ్రాహ్మణునికి ధర్మం నేర్పిన {dharmavyadha|ధర్మవ్యాధుని} కథ చెప్పాడు."],
  ["He told the stories of {savitri|Sāvitrī} and of Rāma to comfort {yudhishthira|Yudhiṣṭhira}.", "{yudhishthira|ధర్మరాజును} ఓదార్చడానికి {savitri|సావిత్రి} కథ, రాముని కథ చెప్పాడు."]
 ],
 think: ["A proud scholar learned dharma from a housewife and a meat-seller. Who in your life has taught you something important without being a “teacher”?", "గర్విష్ఠుడైన పండితుడు ఒక గృహిణి, ఒక మాంసం అమ్మేవాని నుండి ధర్మం నేర్చుకున్నాడు. “గురువు” కాకుండానే మీకు ముఖ్యమైనదేదైనా నేర్పినవారు మీ జీవితంలో ఎవరు?"]
},
{
 id: "mk-6", sage: "markandeya", n: 6, order: 1406, date: "2026-10-23",
 title: "The Purāṇa of His Name — and the Devī Māhātmyam", titleTe: "ఆయన పేరిటి పురాణం — దేవీ మాహాత్మ్యం",
 src: "Mārkaṇḍeya Purāṇa",
 who: ["markandeya", "jaimini", "durga", "vishnu"],
 pages: [
  [
   ["p", "One of the eighteen great Purāṇas bears Mārkaṇḍeya's name. It opens with {jaimini|Jaimini}, Vyāsa's disciple, coming to {markandeya|Mārkaṇḍeya} with four hard questions about the Mahābhārata — why Draupadī had five husbands, why Balarāma did penance, why Draupadī's sons died unmarried, and how the Lord took a human body. Mārkaṇḍeya, busy with his rites, sends him to four wise birds in the Vindhya hills, and the birds answer.", "పద్దెనిమిది మహాపురాణాలలో ఒకటి మార్కండేయుని పేరుతో ఉంది. వ్యాసుని శిష్యుడైన {jaimini|జైమిని} మహాభారతం గురించి నాలుగు కష్టమైన ప్రశ్నలతో {markandeya|మార్కండేయుని} దగ్గరికి రావడంతో అది మొదలవుతుంది — ద్రౌపదికి ఐదుగురు భర్తలు ఎందుకు, బలరాముడు ప్రాయశ్చిత్తం ఎందుకు చేశాడు, ద్రౌపది కుమారులు పెళ్ళి కాకుండానే ఎందుకు చనిపోయారు, భగవంతుడు మానవ శరీరం ఎలా దాల్చాడు. క్రతువుల్లో తీరిక లేని మార్కండేయుడు ఆయనను వింధ్య కొండల్లోని నాలుగు జ్ఞాన పక్షుల దగ్గరికి పంపుతాడు; పక్షులు జవాబిస్తాయి."],
   ["sglink", "Who those birds were — Durvāsa and Vapu", "ఆ పక్షులు ఎవరు — దుర్వాసుడు, వపువు", "dv-10"],
   ["p", "Later in the Purāṇa, Mārkaṇḍeya himself speaks to his disciple Krauṣṭuki, telling of the Manus and their ages — and within that telling lies the most famous part of the whole book.", "పురాణంలో తరువాత మార్కండేయుడే స్వయంగా తన శిష్యుడు క్రౌష్టుకితో మనువుల గురించి, వారి యుగాల గురించి చెబుతాడు — ఆ కథనంలోనే గ్రంథమంతటిలో అత్యంత ప్రసిద్ధ భాగం ఉంది."]
  ],
  [
   ["h", "The Glory of the Goddess", "దేవీ మహిమ"],
   ["p", "A king named Suratha has lost his kingdom; a merchant named Samādhi has been thrown out by his own family. Both meet in the forest āśrama of a sage named Medhas, and both ask the same question: “We have been betrayed — why do our minds still cling to those who hurt us?” Medhas answers: “That is the power of Mahāmāyā, the Great Goddess.” And he tells them her story in three parts — the Devī Māhātmyam, seven hundred verses also called the Durgā Saptaśatī or Caṇḍī.", "రాజ్యం కోల్పోయిన సురథుడు అనే రాజు, సొంత కుటుంబమే వెళ్ళగొట్టిన సమాధి అనే వర్తకుడు — ఇద్దరూ మేధసుడు అనే ముని ఆశ్రమంలో కలుసుకుని ఒకే ప్రశ్న అడుగుతారు: “మమ్మల్ని మోసం చేశారు — మమ్మల్ని బాధపెట్టినవారి మీదే మా మనసు ఇంకా ఎందుకు అంటిపెట్టుకుంటోంది?” మేధసుడు జవాబిస్తాడు: “అదే మహామాయ — ఆదిశక్తి శక్తి.” ఆమె కథను మూడు భాగాలుగా చెబుతాడు — దేవీ మాహాత్మ్యం; దుర్గా సప్తశతి, చండీ అని కూడా పిలిచే ఏడు వందల శ్లోకాలు."],
   ["p", "In the first part, she wakes Viṣṇu from his sleep on the ocean so he can kill the demons Madhu and Kaiṭabha. In the second, the gods pour out their powers, and from their united light {durga|Durgā} is born, riding a lion, holding all their weapons — and she destroys the buffalo-demon Mahiṣa, who had driven the gods from heaven. In the third, she defeats Śumbha and Niśumbha and their generals; as Kālī she slays Caṇḍa and Muṇḍa, and so is called Cāmuṇḍā; and she drinks up the blood of Raktabīja, from every drop of which a new demon sprang.", "మొదటి భాగంలో మధు కైటభ రాక్షసులను సంహరించడానికి సముద్రంపై నిద్రిస్తున్న విష్ణువును ఆమె మేల్కొలుపుతుంది. రెండో భాగంలో దేవతలు తమ శక్తులను వెలువరిస్తారు; వారి సమైక్య తేజస్సు నుండి సింహవాహినిగా, అందరి ఆయుధాలనూ ధరించి {durga|దుర్గాదేవి} ఆవిర్భవిస్తుంది — దేవతలను స్వర్గం నుండి తరిమిన మహిషాసురుణ్ణి సంహరిస్తుంది. మూడో భాగంలో శుంభ నిశుంభులనూ వారి సేనాపతులనూ ఓడిస్తుంది; కాళిగా చండ ముండులను సంహరించి చాముండిగా పేరు పొందుతుంది; ప్రతి నెత్తుటి చుక్క నుండీ కొత్త రాక్షసుడు పుట్టే రక్తబీజుని రక్తాన్ని తాగేస్తుంది."]
  ],
  [
   ["h", "Recited Every Navarātri", "ప్రతి నవరాత్రికీ పారాయణ"],
   ["p", "Suratha and Samādhi worshipped the Goddess for three years. She appeared and gave each what he asked: Suratha, his kingdom back and a future as a Manu; Samādhi, who no longer wanted anything of the world, the knowledge that sets one free.", "సురథుడు, సమాధి మూడేళ్ళు దేవిని ఆరాధించారు. ఆమె ప్రత్యక్షమై ఒక్కొక్కరు కోరినది ఇచ్చింది: సురథునికి రాజ్యం తిరిగి, భవిష్యత్తులో మనువు అయ్యే వరం; లోకంలో ఇక ఏమీ కోరని సమాధికి విముక్తినిచ్చే జ్ఞానం."],
   ["p", "To this day, in homes and temples all over India — and in Telugu homes during Dasarā — the Devī Māhātmyam is recited during the nine nights of Navarātri. So every year, when families sing of Durgā's victory over Mahiṣa, they are reciting a part of the Purāṇa that carries Mārkaṇḍeya's name.", "ఈ రోజుకీ భారతదేశమంతటా ఇళ్ళలో, ఆలయాలలో — తెలుగు ఇళ్ళలో దసరా సమయంలో — నవరాత్రుల తొమ్మిది రాత్రులూ దేవీ మాహాత్మ్యాన్ని పారాయణ చేస్తారు. కాబట్టి ప్రతి ఏడాదీ మహిషునిపై దుర్గ విజయాన్ని కుటుంబాలు గానం చేసినప్పుడు, మార్కండేయుని పేరుతో ఉన్న పురాణంలోని భాగాన్నే పఠిస్తున్నారు."],
   ["src", "Mārkaṇḍeya Purāṇa: the opening (Jaimini's four questions; the wise birds); the Manvantara sections told by Mārkaṇḍeya to Krauṣṭuki; the Devī Māhātmyam (Medhas, Suratha and Samādhi; Madhu-Kaiṭabha, Mahiṣāsura, Śumbha-Niśumbha, Caṇḍa-Muṇḍa and Raktabīja). Navarātri recitation is living practice.", "మార్కండేయ పురాణం: ప్రారంభం (జైమిని నాలుగు ప్రశ్నలు; జ్ఞాన పక్షులు); మార్కండేయుడు క్రౌష్టుకికి చెప్పిన మన్వంతర భాగాలు; దేవీ మాహాత్మ్యం (మేధసుడు, సురథుడు, సమాధి; మధుకైటభులు, మహిషాసురుడు, శుంభనిశుంభులు, చండముండులు, రక్తబీజుడు). నవరాత్రి పారాయణ సజీవ ఆచారం."]
  ]
 ],
 remember: [
  ["The Mārkaṇḍeya Purāṇa opens with {jaimini|Jaimini}'s questions, answered by four wise birds.", "జైమిని ప్రశ్నలతో, నాలుగు జ్ఞాన పక్షుల జవాబులతో మార్కండేయ పురాణం మొదలవుతుంది."],
  ["It contains the Devī Māhātmyam — {durga|Durgā}'s victories over Madhu-Kaiṭabha, Mahiṣa and Śumbha-Niśumbha.", "అందులో దేవీ మాహాత్మ్యం ఉంది — మధుకైటభులు, మహిషుడు, శుంభనిశుంభులపై {durga|దుర్గ} విజయాలు."],
  ["Its seven hundred verses are recited every Navarātri.", "దాని ఏడు వందల శ్లోకాలు ప్రతి నవరాత్రికీ పారాయణ చేయబడతాయి."]
 ],
 think: ["Suratha and Samādhi both asked the Goddess for help — and asked for very different things. If you could ask for one gift, would it be something for this world or something beyond it?", "సురథుడు, సమాధి ఇద్దరూ దేవిని సహాయం అడిగారు — కానీ చాలా భిన్నమైనవి కోరారు. మీకు ఒక్క వరం దొరికితే, ఈ లోకానికి సంబంధించినది కోరతారా, దానికి అతీతమైనదా?"]
},
{
 id: "mk-7", sage: "markandeya", n: 7, order: 1407, date: "2026-10-23",
 title: "The Sage Who Does Not Die", titleTe: "మరణం లేని ముని",
 src: "Ciranjīvi verse · living tradition",
 who: ["markandeya", "shiva", "vishnu"],
 pages: [
  [
   ["p", "Our tradition remembers seven Ciranjīvīs — “long-lived ones” who are said to remain on earth until the end of this age. A verse that many recite every morning names them — and then adds an eighth: Mārkaṇḍeya.", "ఈ యుగాంతం వరకు భూమిపై ఉంటారని చెప్పే ఏడుగురు చిరంజీవులను మన సంప్రదాయం గుర్తుచేసుకుంటుంది. చాలామంది ప్రతి ఉదయం పఠించే ఒక శ్లోకం వారి పేర్లు చెప్పి — ఎనిమిదవవానిగా మార్కండేయుణ్ణి కలుపుతుంది."],
   ["sloka", ["అశ్వత్థామా బలిర్వ్యాసో హనూమాంశ్చ విభీషణః ।", "కృపః పరశురామశ్చ సప్తైతే చిరజీవినః ॥", "సప్తైతాన్ సంస్మరేన్నిత్యం మార్కండేయమథాష్టమమ్ ।", "జీవేద్వర్షశతం సోఽపి సర్వవ్యాధివివర్జితః ॥"], ["aśvatthāmā balir vyāso hanūmāṃś ca vibhīṣaṇaḥ |", "kṛpaḥ paraśurāmaś ca saptaite cirajīvinaḥ ||", "saptaitān saṃsmaren nityaṃ mārkaṇḍeyam athāṣṭamam |", "jīved varṣa-śataṃ so 'pi sarva-vyādhi-vivarjitaḥ ||"], "“Aśvatthāmā, Bali, Vyāsa, Hanumān, Vibhīṣaṇa, Kṛpa and Paraśurāma — these seven are the long-lived. Whoever remembers these seven daily, with Mārkaṇḍeya as the eighth, will live a hundred years, free from all disease.”", "“అశ్వత్థామ, బలి, వ్యాసుడు, హనుమంతుడు, విభీషణుడు, కృపుడు, పరశురాముడు — ఈ ఏడుగురు చిరంజీవులు. ఈ ఏడుగురినీ, ఎనిమిదవవానిగా మార్కండేయుణ్ణీ నిత్యం స్మరించేవాడు సకల వ్యాధులూ లేకుండా నూరేళ్ళు జీవిస్తాడు.”"]
  ],
  [
   ["h", "The Sage Who Belongs to Everyone", "అందరికీ చెందిన ముని"],
   ["p", "What makes Mārkaṇḍeya special is that he belongs to every tradition. To the devotees of Śiva, he is the boy who embraced the liṅga and saw Death defeated. To the devotees of Viṣṇu, he is the sage who saw the infant on the banyan leaf. To the devotees of the Goddess, he is the voice of the Purāṇa that holds the Devī Māhātmyam. One sage, one life — and every path finds its own Lord in it.", "మార్కండేయుని ప్రత్యేకత ఏమిటంటే ఆయన ప్రతి సంప్రదాయానికీ చెందుతాడు. శైవులకు లింగాన్ని కౌగిలించుకుని మృత్యువు ఓడిపోవడం చూసిన బాలుడు. వైష్ణవులకు వటపత్రంపై పసిబిడ్డను దర్శించిన ముని. శాక్తేయులకు దేవీ మాహాత్మ్యాన్ని కలిగిన పురాణపు స్వరం. ఒకే ముని, ఒకే జీవితం — ప్రతి మార్గమూ అందులో తన ప్రభువును కనుగొంటుంది."],
   ["p", "At Purī in Odisha there is a sacred tank called Mārkaṇḍeya Sarovara, where tradition says he did tapas. In the Telugu lands, many families of the Padmaśālī weaving community honour Mārkaṇḍeya as their ancestor and celebrate Mārkaṇḍeya Jayantī with great love.", "ఒడిశాలోని పూరీలో మార్కండేయ సరోవరం అనే పవిత్ర కోనేరు ఉంది; ఆయన అక్కడ తపస్సు చేశాడని సంప్రదాయం. తెలుగు ప్రాంతాలలో పద్మశాలి నేత సమాజానికి చెందిన చాలా కుటుంబాలు మార్కండేయుణ్ణి తమ పూర్వీకునిగా గౌరవించి మార్కండేయ జయంతిని ఎంతో ప్రేమతో జరుపుకుంటాయి."]
  ],
  [
   ["h", "Forever Sixteen", "ఎప్పటికీ పదహారు"],
   ["p", "And so the boy who was given only sixteen years became the one who lives longest of all — not by escaping death, but by holding on to what is beyond it. His story reminds us that a life is measured not by its length but by what it holds on to.", "అలా పదహారేళ్ళే ఇవ్వబడిన బాలుడు అందరికంటే ఎక్కువ కాలం జీవించేవాడయ్యాడు — మృత్యువు నుండి తప్పించుకోవడం వల్ల కాదు, దానికి అతీతమైనదాన్ని పట్టుకోవడం వల్ల. జీవితాన్ని దాని పొడవుతో కాదు, అది దేన్ని పట్టుకుంటుందనే దానితో కొలవాలని ఆయన కథ గుర్తుచేస్తుంది."],
   ["dyk", "🎂", "In some Telugu and Tamil homes, a long-life blessing for children is “Mārkaṇḍeya āyuṣmān bhava” — may you live long like Mārkaṇḍeya.", "కొన్ని తెలుగు, తమిళ ఇళ్ళలో పిల్లలకు ఇచ్చే దీర్ఘాయుష్షు ఆశీర్వాదం — మార్కండేయునిలా చిరాయువుగా ఉండు అని."],
   ["src", "The Ciranjīvi verse (“aśvatthāmā balir vyāso…”) is a traditional morning prayer; the line adding Mārkaṇḍeya as the eighth is found in common recitation. The Mārkaṇḍeya Sarovara at Purī, the Padmaśālī tradition and the Mārkaṇḍeya Jayantī are living traditions.", "చిరంజీవి శ్లోకం (“అశ్వత్థామా బలిర్వ్యాసో…”) సంప్రదాయ ప్రాతఃస్మరణ; మార్కండేయుణ్ణి ఎనిమిదవవానిగా చేర్చే పంక్తి సాధారణ పఠనంలో ఉంది. పూరీలోని మార్కండేయ సరోవరం, పద్మశాలి సంప్రదాయం, మార్కండేయ జయంతి సజీవ సంప్రదాయాలు."]
  ]
 ],
 remember: [
  ["{markandeya|Mārkaṇḍeya} is remembered as the eighth Ciranjīvī in a morning prayer.", "ప్రాతఃస్మరణ శ్లోకంలో {markandeya|మార్కండేయుణ్ణి} ఎనిమిదవ చిరంజీవిగా స్మరిస్తారు."],
  ["Śaivas, Vaiṣṇavas and devotees of the Goddess all claim his story.", "శైవులు, వైష్ణవులు, శాక్తేయులు — అందరూ ఆయన కథను తమదిగా భావిస్తారు."],
  ["Telugu Padmaśālī families honour him as their ancestor.", "తెలుగు పద్మశాలి కుటుంబాలు ఆయనను తమ పూర్వీకునిగా గౌరవిస్తాయి."]
 ],
 think: ["If a life is measured by what it holds on to rather than how long it lasts, what would you want your life to hold on to?", "జీవితాన్ని దాని పొడవుతో కాకుండా అది దేన్ని పట్టుకుంటుందనే దానితో కొలిస్తే, మీ జీవితం దేన్ని పట్టుకోవాలని కోరుకుంటారు?"]
}
]);
