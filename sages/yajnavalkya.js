// Great Sages — Yājñavalkya. Retold by Hari Pokkuluri.
// Told from the Bṛhadāraṇyaka Upaniṣad, the Śatapatha Brāhmaṇa, the Viṣṇu and Bhāgavata Purāṇas,
// the Yājñavalkya Smṛti and later tradition, in fresh original wording.
// Block format: see the top of ramayana.js and sages.js.
window.SAGE_PLAN = Object.assign(window.SAGE_PLAN || {}, { yajnavalkya: [
  ["The Student Who Gave Back the Veda", "Viṣṇu Purāṇa 3.5 · Bhāgavata 12.6"],
  ["The Sun as a Horse — the White Yajurveda", "Viṣṇu Purāṇa 3.5 · Bhāgavata 12.6 · Śatapatha Brāhmaṇa"],
  ["A Thousand Cows with Golden Horns", "Bṛhadāraṇyaka Upaniṣad 3.1–3.5, 3.7"],
  ["Gārgī's Two Arrows", "Bṛhadāraṇyaka Upaniṣad 3.6, 3.8"],
  ["How Many Gods? — “Not This, Not This”", "Bṛhadāraṇyaka Upaniṣad 3.9"],
  ["“What Is the Light of a Person?” — Teaching Janaka", "Bṛhadāraṇyaka Upaniṣad 4.1–4.4"],
  ["Maitreyī's Question", "Bṛhadāraṇyaka Upaniṣad 2.4, 4.5"],
  ["The Lawgiver — and the Sage Who Walked Away", "Yājñavalkya Smṛti · Mitākṣarā · later tradition"]
] });
window.RMY_WHO = Object.assign({
  "yajnavalkya": { "av": "☀️", "en": "Yājñavalkya", "te": "యాజ్ఞవల్క్యుడు", "d": "Disciple of Vaiśampāyana who received the White Yajurveda from the Sun; the great teacher of the Bṛhadāraṇyaka Upaniṣad in King Janaka's court; husband of Maitreyī and Kātyāyanī.", "dt": "సూర్యుని నుండి శుక్ల యజుర్వేదాన్ని పొందిన వైశంపాయనుని శిష్యుడు; జనకుని సభలో బృహదారణ్యక ఉపనిషత్తు మహాగురువు; మైత్రేయి, కాత్యాయనిల భర్త." },
  "gargi": { "av": "🏹", "en": "Gārgī Vācaknavī", "te": "గార్గి వాచక్నవి", "d": "A woman philosopher of the Upaniṣads who questioned Yājñavalkya fearlessly in Janaka's assembly.", "dt": "జనకుని సభలో యాజ్ఞవల్క్యుణ్ణి నిర్భయంగా ప్రశ్నించిన ఉపనిషత్తుల స్త్రీ తత్త్వవేత్త." },
  "maitreyi": { "av": "🪷", "en": "Maitreyī", "te": "మైత్రేయి", "d": "Yājñavalkya's wife, a seeker of truth, who asked him for wisdom instead of wealth.", "dt": "సంపదకు బదులు జ్ఞానాన్ని కోరిన యాజ్ఞవల్క్యుని భార్య, సత్యాన్వేషి." },
  "katyayani": { "av": "🏡", "en": "Kātyāyanī", "te": "కాత్యాయని", "d": "Yājñavalkya's other wife.", "dt": "యాజ్ఞవల్క్యుని మరో భార్య." },
  "shakalya": { "av": "📜", "en": "Vidagdha Śākalya", "te": "విదగ్ధ శాకల్యుడు", "d": "A learned brāhmaṇa who challenged Yājñavalkya last and most fiercely in Janaka's court.", "dt": "జనకుని సభలో చివరగా, అత్యంత తీవ్రంగా యాజ్ఞవల్క్యుణ్ణి సవాలు చేసిన పండిత బ్రాహ్మణుడు." },
  "uddalaka": { "av": "🧂", "en": "Uddālaka Āruṇi", "te": "ఉద్దాలక ఆరుణి", "d": "A great teacher of the Upaniṣads, father of Śvetaketu, who taught “tat tvam asi — you are That.”", "dt": "“తత్త్వమసి — నువ్వే అది” అని బోధించిన ఉపనిషత్తుల మహాగురువు, శ్వేతకేతుని తండ్రి." }
}, window.RMY_WHO || {});
window.SAGE_CHAPTERS = (window.SAGE_CHAPTERS || []).concat([
{
 id: "yj-1", sage: "yajnavalkya", n: 1, order: 1801, date: "2026-10-23",
 title: "The Student Who Gave Back the Veda", titleTe: "వేదాన్ని తిరిగిచ్చిన శిష్యుడు",
 src: "Viṣṇu Purāṇa 3.5 · Bhāgavata 12.6",
 who: ["yajnavalkya", "vaishampayana", "vyasa"],
 pages: [
  [
   ["p", "When {vyasa|Vyāsa} divided the Veda into four, he gave the Yajurveda — the Veda of the sacrificial formulas — to his disciple {vaishampayana|Vaiśampāyana}. Vaiśampāyana taught it to many students, and one of the most brilliant was a young man named {yajnavalkya|Yājñavalkya}. He was quick, deep, fearless — and, as the story shows, a little too sure of himself.", "{vyasa|వ్యాసుడు} వేదాన్ని నాలుగుగా విభజించినప్పుడు యజుర్వేదాన్ని — యజ్ఞ మంత్రాల వేదాన్ని — తన శిష్యుడు {vaishampayana|వైశంపాయనునికి} ఇచ్చాడు. వైశంపాయనుడు దాన్ని ఎంతోమంది శిష్యులకు నేర్పాడు; వారిలో అత్యంత ప్రతిభావంతులలో {yajnavalkya|యాజ్ఞవల్క్యుడు} అనే యువకుడు ఒకడు. చురుకైనవాడు, లోతైనవాడు, నిర్భయుడు — కథ చూపిస్తున్నట్టు, కొంచెం అతి ఆత్మవిశ్వాసం కలవాడు."],
   ["sglink", "Vyāsa divides the Veda", "వ్యాసుడు వేదాన్ని విభజించడం", "vy-2"],
   ["p", "The Viṣṇu Purāṇa says the sages once agreed that whoever failed to attend a great assembly on Mount Meru within seven nights would bear the sin of killing a brāhmaṇa. Vaiśampāyana alone did not go — and, by mischance, he also caused the death of his sister's young son. Heavy with this sin, he called his students: “Perform the penance for me, all of you, to free me.”", "మేరు పర్వతంపై జరిగే మహాసభకు ఏడు రాత్రులలోపు ఎవరు రాకపోతే వారికి బ్రహ్మహత్యా పాపం అంటుతుందని మునులు ఒకసారి నిర్ణయించుకున్నారని విష్ణు పురాణం చెబుతుంది. వైశంపాయనుడు ఒక్కడే వెళ్ళలేదు — దురదృష్టవశాత్తు తన సోదరి చిన్న కుమారుని మరణానికి కూడా కారణమయ్యాడు. ఆ పాపభారంతో శిష్యులను పిలిచాడు: “మీరందరూ నా కోసం ప్రాయశ్చిత్తం చేసి నన్ను విముక్తుణ్ణి చేయండి.”"]
  ],
  [
   ["h", "“Why Bother with These Weaklings?”", "“ఈ బలహీనులతో పనేమిటి?”"],
   ["p", "Yājñavalkya spoke up. “Master, why trouble all these feeble brāhmaṇas? I alone will do the whole penance for you.” He meant it as devotion. But it came out as contempt for his fellow students — and his teacher heard it that way.", "యాజ్ఞవల్క్యుడు మాట్లాడాడు. “గురువుగారూ, ఈ బలహీన బ్రాహ్మణులందరినీ ఎందుకు శ్రమపెట్టడం? నేనొక్కణ్ణే మీ కోసం ప్రాయశ్చిత్తమంతా చేస్తాను.” భక్తితోనే అన్నాడు. కానీ అది తోటి శిష్యుల పట్ల తిరస్కారంగా ధ్వనించింది — గురువూ అలాగే విన్నాడు."],
   ["p", "Vaiśampāyana was furious. “You insult the brāhmaṇas, your own brothers in learning! I want no such student. Give back everything you have learned from me!” Yājñavalkya, proud and stung, answered: “Very well. I want nothing from you either.” And by his yogic power, he brought up out of himself all the Yajurveda he had learned, in bodily form, and left it on the ground — and walked away.", "వైశంపాయనుడు మండిపడ్డాడు. “నువ్వు బ్రాహ్మణులను — విద్యలో నీ సొంత సోదరులను — అవమానిస్తున్నావు! నాకు అలాంటి శిష్యుడు వద్దు. నా దగ్గర నేర్చుకున్నదంతా తిరిగి ఇచ్చెయ్!” గర్వంతో, నొచ్చుకుని యాజ్ఞవల్క్యుడు జవాబిచ్చాడు: “సరే. నాకూ మీ నుండి ఏమీ వద్దు.” తన యోగశక్తితో నేర్చుకున్న యజుర్వేదాన్నంతా మూర్తి రూపంలో తనలోంచి బయటకు కక్కి నేలపై విడిచి — వెళ్ళిపోయాడు."]
  ],
  [
   ["h", "The Partridges", "తిత్తిరి పక్షులు"],
   ["p", "The other students did not want that precious knowledge to be lost. At their teacher's word, they took the form of partridges — *tittiri* birds — and picked up the Yajus from the ground. That is how, the Purāṇas say, the Taittirīya branch of the Yajurveda got its name: the Veda of the partridges. It is the Kṛṣṇa (“black”) Yajurveda, the branch most widely followed in South India, including the Telugu lands — the one in which the Śrī Rudram is found.", "ఆ విలువైన జ్ఞానం పోకూడదని మిగతా శిష్యులు అనుకున్నారు. గురువు మాటపై వారు తిత్తిరి పక్షుల రూపం దాల్చి నేలపై ఉన్న యజుస్సును ఏరుకున్నారు. అలా యజుర్వేదపు తైత్తిరీయ శాఖకు ఆ పేరు వచ్చిందని పురాణాలు చెబుతాయి: తిత్తిరుల వేదం. అదే కృష్ణ యజుర్వేదం — తెలుగు ప్రాంతాలతో సహా దక్షిణ భారతంలో విస్తృతంగా అనుసరించే శాఖ — శ్రీరుద్రం ఉన్నది అందులోనే."],
   ["dyk", "🐦", "So every time someone chants the Śrī Rudram from the Taittirīya Saṃhitā, they are chanting from the Veda the partridges picked up when Yājñavalkya gave it back.", "అంటే తైత్తిరీయ సంహిత నుండి శ్రీరుద్రాన్ని ఎవరు పఠించినా, యాజ్ఞవల్క్యుడు తిరిగి ఇచ్చినప్పుడు తిత్తిరి పక్షులు ఏరుకున్న వేదం నుండే పఠిస్తున్నారు."],
   ["src", "Viṣṇu Purāṇa 3.5 (the assembly on Meru; Vaiśampāyana's sin; Yājñavalkya's offer and his teacher's anger; the Yajus given back; the students as partridges — Taittirīya). Bhāgavata Purāṇa 12.6 (the same story). The Śrī Rudram is in the Taittirīya Saṃhitā (4.5).", "విష్ణు పురాణం 3.5 (మేరుపై సభ; వైశంపాయనుని పాపం; యాజ్ఞవల్క్యుని మాట, గురువు కోపం; తిరిగి ఇచ్చిన యజుస్సు; తిత్తిరి పక్షులుగా శిష్యులు — తైత్తిరీయం). భాగవత పురాణం 12.6 (అదే కథ). శ్రీరుద్రం తైత్తిరీయ సంహిత (4.5)లో ఉంది."]
  ]
 ],
 remember: [
  ["{yajnavalkya|Yājñavalkya} offered to do his teacher's penance alone, scorning the other students.", "తోటి శిష్యులను తక్కువచేస్తూ గురువు ప్రాయశ్చిత్తాన్ని తానొక్కడే చేస్తానన్నాడు {yajnavalkya|యాజ్ఞవల్క్యుడు}."],
  ["Angry, {vaishampayana|Vaiśampāyana} told him to give back the Veda; he brought it up and left.", "కోపంతో {vaishampayana|వైశంపాయనుడు} వేదాన్ని తిరిగి ఇవ్వమన్నాడు; ఆయన దాన్ని కక్కి వెళ్ళిపోయాడు."],
  ["The students, as partridges (tittiri), picked it up — the Taittirīya Yajurveda.", "శిష్యులు తిత్తిరి పక్షులుగా దాన్ని ఏరుకున్నారు — తైత్తిరీయ యజుర్వేదం."]
 ],
 think: ["Yājñavalkya meant to help, but his words hurt others. Has something you meant kindly ever come out sounding proud? What could he have said instead?", "యాజ్ఞవల్క్యుడు సహాయం చేయాలనుకున్నాడు; కానీ అతని మాటలు ఇతరులను బాధించాయి. మీరు దయతో అన్న మాట గర్వంగా ధ్వనించిన సందర్భం ఉందా? ఆయన బదులుగా ఏమనవచ్చు?"]
},
{
 id: "yj-2", sage: "yajnavalkya", n: 2, order: 1802, date: "2026-10-23",
 title: "The Sun as a Horse — the White Yajurveda", titleTe: "గుర్రపు రూపంలో సూర్యుడు — శుక్ల యజుర్వేదం",
 src: "Viṣṇu Purāṇa 3.5 · Bhāgavata 12.6 · Śatapatha Brāhmaṇa",
 who: ["yajnavalkya", "surya"],
 pages: [
  [
   ["p", "{yajnavalkya|Yājñavalkya} had given away all he knew. Now he wanted a Veda that no teacher on earth possessed. So he turned to the one teacher who sees everything — the {surya|Sun}. He stood facing the rising Sun and praised him with deep devotion: “You are the gateway of liberation; you are the eye of the world; you hold the Yajus that no one else knows. Teach me.”", "{yajnavalkya|యాజ్ఞవల్క్యుడు} తనకు తెలిసినదంతా ఇచ్చేశాడు. ఇప్పుడు భూమిపై ఏ గురువు దగ్గరా లేని వేదం కావాలనుకున్నాడు. అందుకే అన్నిటినీ చూసే ఏకైక గురువు వైపు — {surya|సూర్యుని} వైపు — తిరిగాడు. ఉదయిస్తున్న సూర్యునికి అభిముఖంగా నిలబడి గాఢమైన భక్తితో స్తుతించాడు: “నువ్వే మోక్ష ద్వారం; లోకానికి నేత్రం; ఇంకెవరికీ తెలియని యజుస్సులను నువ్వే ధరించావు. నాకు బోధించు.”"],
   ["p", "The Sun was pleased. He came to Yājñavalkya in the form of a horse — a *vājin* — and taught him Yajus formulas that even Vaiśampāyana did not know, fresh and bright as morning light.", "సూర్యుడు ప్రసన్నుడయ్యాడు. *వాజి* — గుర్రం — రూపంలో యాజ్ఞవల్క్యుని దగ్గరికి వచ్చి వైశంపాయనునికి కూడా తెలియని, ఉదయకాంతిలా కొత్తగా, ప్రకాశవంతంగా ఉన్న యజుర్మంత్రాలను బోధించాడు."]
  ],
  [
   ["h", "White and Black", "శుక్లం, కృష్ణం"],
   ["p", "This new Yajurveda is called the Vājasaneyi Saṃhitā — from *vāji*, the horse whose mane gave it — and also the Śukla, or “White,” Yajurveda. In it, the mantras are kept separate and clear from the prose explanations, like light; while in the older Kṛṣṇa, or “Black,” Yajurveda of the Taittirīyas, mantras and explanations are mixed together. (Some explain the name Vājasaneya differently, as “son of Vājasani,” after his father.)", "ఈ కొత్త యజుర్వేదాన్ని వాజసనేయి సంహిత — దాన్ని ఇచ్చిన *వాజి* (గుర్రం) నుండి — అనీ, శుక్ల (“తెల్ల”) యజుర్వేదం అనీ అంటారు. ఇందులో మంత్రాలు గద్య వివరణల నుండి వెలుగులా స్పష్టంగా వేరుగా ఉంటాయి; తైత్తిరీయుల పాత కృష్ణ (“నల్ల”) యజుర్వేదంలో మంత్రాలు, వివరణలు కలిసిపోయి ఉంటాయి. (వాజసనేయ అనే పేరుకు కొందరు వేరే అర్థం చెబుతారు — తండ్రి వాజసని పేరు మీద “వాజసని కుమారుడు” అని.)"],
   ["p", "Yājñavalkya taught it to fifteen disciples, and two of its branches, the Mādhyandina and the Kāṇva, are recited to this day — the Mādhyandina widely in North India, the Kāṇva in parts of the South, including Karnataka and the Telugu lands. With it came its great prose commentary, the Śatapatha Brāhmaṇa, “the Brāhmaṇa of a hundred paths,” and at its very end, the Bṛhadāraṇyaka Upaniṣad — the “Great Forest Teaching,” in which Yājñavalkya himself is the hero.", "యాజ్ఞవల్క్యుడు దాన్ని పదిహేను మంది శిష్యులకు బోధించాడు; దాని రెండు శాఖలు — మాధ్యందిన, కాణ్వ — ఈ రోజుకీ పఠించబడుతున్నాయి; మాధ్యందినం ఉత్తర భారతంలో విస్తృతంగా, కాణ్వం కర్ణాటక, తెలుగు ప్రాంతాలతో సహా దక్షిణంలోని కొన్ని ప్రాంతాల్లో. దానితో పాటు దాని మహా గద్య వ్యాఖ్యానం శతపథ బ్రాహ్మణం — “వంద దారుల బ్రాహ్మణం” — వచ్చింది; దాని చివరిలో బృహదారణ్యక ఉపనిషత్తు — “మహారణ్య బోధ” — ఉంది; అందులో కథానాయకుడు స్వయంగా యాజ్ఞవల్క్యుడే."],
   ["dyk", "🐎", "The famous peace chant “Om pūrṇam adaḥ pūrṇam idam…” (“That is whole, this is whole…”) comes from the Śukla Yajurveda — from the Bṛhadāraṇyaka and the Īśa Upaniṣads.", "ప్రసిద్ధ శాంతి మంత్రం “ఓం పూర్ణమదః పూర్ణమిదం…” శుక్ల యజుర్వేదం నుండి — బృహదారణ్యక, ఈశావాస్య ఉపనిషత్తుల నుండి — వచ్చింది."],
   ["src", "Viṣṇu Purāṇa 3.5 and Bhāgavata Purāṇa 12.6 (Yājñavalkya's hymn to the Sun; the Sun as a horse; the Vājasaneyi Yajus; the Kāṇva and Mādhyandina schools). The Śatapatha Brāhmaṇa and Bṛhadāraṇyaka Upaniṣad belong to the Śukla Yajurveda; the Bṛhadāraṇyaka names Yājñavalkya as teacher, and its closing lineage traces the White Yajus back to the Sun.", "విష్ణు పురాణం 3.5, భాగవత పురాణం 12.6 (సూర్యునిపై యాజ్ఞవల్క్యుని స్తోత్రం; గుర్రంగా సూర్యుడు; వాజసనేయి యజుస్సులు; కాణ్వ, మాధ్యందిన శాఖలు). శతపథ బ్రాహ్మణం, బృహదారణ్యక ఉపనిషత్తు శుక్ల యజుర్వేదానికి చెందినవి; బృహదారణ్యకం యాజ్ఞవల్క్యుణ్ణి గురువుగా చెబుతుంది; దాని చివరి గురుపరంపర శుక్ల యజుస్సును సూర్యుని వరకు చేరుస్తుంది."]
  ]
 ],
 remember: [
  ["{yajnavalkya|Yājñavalkya} prayed to the {surya|Sun} for a Veda no teacher knew.", "ఏ గురువుకూ తెలియని వేదం కోసం {yajnavalkya|యాజ్ఞవల్క్యుడు} {surya|సూర్యుని} ప్రార్థించాడు."],
  ["The Sun came as a horse (vājin) and taught him the Vājasaneyi, or White, Yajurveda.", "సూర్యుడు గుర్రం (వాజి) రూపంలో వచ్చి వాజసనేయి — శుక్ల — యజుర్వేదాన్ని బోధించాడు."],
  ["Its Kāṇva and Mādhyandina branches, the Śatapatha Brāhmaṇa and the Bṛhadāraṇyaka live on.", "దాని కాణ్వ, మాధ్యందిన శాఖలు, శతపథ బ్రాహ్మణం, బృహదారణ్యకం నిలిచి ఉన్నాయి."]
 ],
 think: ["After losing everything he had learned, Yājñavalkya found a new teacher in the Sun. When one door closes, where else might we learn from?", "నేర్చుకున్నదంతా పోగొట్టుకున్నాక యాజ్ఞవల్క్యుడు సూర్యునిలో కొత్త గురువును కనుగొన్నాడు. ఒక తలుపు మూసుకుంటే మనం ఇంకెక్కడి నుండి నేర్చుకోవచ్చు?"]
},
{
 id: "yj-3", sage: "yajnavalkya", n: 3, order: 1803, date: "2026-10-23",
 title: "A Thousand Cows with Golden Horns", titleTe: "బంగారు కొమ్ముల వెయ్యి ఆవులు",
 src: "Bṛhadāraṇyaka Upaniṣad 3.1–3.5, 3.7",
 who: ["yajnavalkya", "janaka", "uddalaka"],
 pages: [
  [
   ["p", "King {janaka|Janaka} of Videha performed a great sacrifice and invited all the learned brāhmaṇas of the Kuru and Pañcāla lands. Then he wondered: “Which of these is the most learned?” He had a thousand cows brought into an enclosure, and to the horns of each he tied ten pieces of gold. “Venerable brāhmaṇas,” he announced, “whoever among you is the greatest knower of Brahman — let him drive these cows home.”", "విదేహ రాజు {janaka|జనకుడు} మహాయాగం చేసి కురు, పాంచాల దేశాల పండిత బ్రాహ్మణులందరినీ ఆహ్వానించాడు. తర్వాత ఆలోచించాడు: “వీరిలో అత్యంత పండితుడు ఎవరు?” వెయ్యి ఆవులను ఒక దొడ్డిలోకి తెప్పించి, ఒక్కో ఆవు కొమ్ములకు పది బంగారు ముక్కలు కట్టించాడు. “పూజ్య బ్రాహ్మణులారా, మీలో బ్రహ్మను తెలిసినవారిలో శ్రేష్ఠుడెవరో వారు ఈ ఆవులను ఇంటికి తోలుకువెళ్ళండి” అని ప్రకటించాడు."],
   ["p", "No one dared move. Then {yajnavalkya|Yājñavalkya} said to his student: “Sāmaśravas, my dear, drive them home.” The boy began driving the cows away. The other brāhmaṇas were outraged: “How dare he call himself the most learned among us!”", "ఎవరూ కదలడానికి సాహసించలేదు. అప్పుడు యాజ్ఞవల్క్యుడు తన శిష్యునితో అన్నాడు: “సామశ్రవా, నాయనా, వీటిని ఇంటికి తోలుకుపో.” బాలుడు ఆవులను తోలసాగాడు. మిగతా బ్రాహ్మణులు మండిపడ్డారు: “మనందరిలో తానే గొప్ప పండితుడినని ఎలా అనుకుంటాడు!”"],
   ["p", "The king's own priest, Aśvala, challenged him: “Yājñavalkya, are you really the most learned of us all?” And Yājñavalkya replied, with a twinkle: “I bow to the most learned. I just want the cows.”", "రాజు పురోహితుడు అశ్వలుడే సవాలు చేశాడు: “యాజ్ఞవల్క్యా, నువ్వు నిజంగా మనందరిలో గొప్ప పండితుడివా?” యాజ్ఞవల్క్యుడు చిరునవ్వుతో జవాబిచ్చాడు: “గొప్ప పండితునికి నేను నమస్కరిస్తాను. నాకు ఆవులు కావాలంతే.”"]
  ],
  [
   ["h", "The Questioners", "ప్రశ్నకర్తలు"],
   ["p", "So began the greatest debate in the Upaniṣads. One by one the brāhmaṇas rose to test him. Aśvala asked about the sacrifice, and Yājñavalkya answered. Ārtabhāga asked: “When a person dies, and his speech goes into fire, his breath into wind, his eye into the sun — what remains of him?” Yājñavalkya took him by the hand: “Come, let us discuss this alone, not in a crowd.” And alone, they spoke of karma: “One becomes good by good action, bad by bad action.”", "అలా ఉపనిషత్తులలోని అతిపెద్ద వాదం మొదలైంది. ఒక్కొక్కరుగా బ్రాహ్మణులు లేచి ఆయనను పరీక్షించారు. అశ్వలుడు యజ్ఞం గురించి అడిగాడు; యాజ్ఞవల్క్యుడు జవాబిచ్చాడు. ఆర్తభాగుడు అడిగాడు: “మనిషి మరణించినప్పుడు వాక్కు అగ్నిలోకి, ప్రాణం గాలిలోకి, కన్ను సూర్యునిలోకి వెళ్తాయి — అతనిలో ఏం మిగులుతుంది?” యాజ్ఞవల్క్యుడు అతని చేయి పట్టుకున్నాడు: “రా, దీన్ని గుంపులో కాదు, ఏకాంతంగా చర్చిద్దాం.” ఏకాంతంగా కర్మ గురించి మాట్లాడుకున్నారు: “మంచి కర్మతో మనిషి మంచివాడవుతాడు, చెడు కర్మతో చెడ్డవాడు.”"],
   ["p", "Uṣasta demanded: “Show me the Self as plainly as you would point at a cow.” Yājñavalkya answered: “You cannot see the seer of seeing, or hear the hearer of hearing. That which sees through your eyes is your Self — it is within all.” Kahola asked, and was told that the Self is beyond hunger and thirst, grief and confusion, old age and death.", "ఉషస్తుడు డిమాండ్ చేశాడు: “ఆవును చూపినంత స్పష్టంగా ఆత్మను నాకు చూపించు.” యాజ్ఞవల్క్యుడు జవాబిచ్చాడు: “చూపును చూసేవాణ్ణి నువ్వు చూడలేవు; వినికిడిని వినేవాణ్ణి వినలేవు. నీ కళ్ళ ద్వారా చూసేదే నీ ఆత్మ — అది అందరిలోనూ ఉంది.” కహోలుడు అడిగాడు; ఆత్మ ఆకలి దప్పులకూ, దుఃఖ మోహాలకూ, ముసలితనం మృత్యువులకూ అతీతమని జవాబు పొందాడు."]
  ],
  [
   ["h", "The Inner Controller", "అంతర్యామి"],
   ["p", "Then the great teacher {uddalaka|Uddālaka Āruṇi} rose and asked about the thread that holds all worlds together, and the “inner controller” that rules them from within. Yājñavalkya answered in one of the most beautiful passages in all the Upaniṣads: “He who dwells in the earth, yet is other than the earth, whom the earth does not know, whose body the earth is, who controls the earth from within — he is your Self, the inner controller, the immortal.” And so on through water, fire, sky, wind, sun, the stars, the breath, the eye, the mind: in each, the same unseen Self.", "అప్పుడు మహాగురువు {uddalaka|ఉద్దాలక ఆరుణి} లేచి లోకాలన్నిటినీ కలిపి ఉంచే సూత్రం గురించి, లోపలి నుండి వాటిని నియంత్రించే “అంతర్యామి” గురించి అడిగాడు. ఉపనిషత్తులన్నిటిలో అత్యంత అందమైన భాగాలలో ఒకదానితో యాజ్ఞవల్క్యుడు జవాబిచ్చాడు: “భూమిలో నివసిస్తూ భూమి కానివాడు, భూమికి తెలియనివాడు, భూమి ఎవరి శరీరమో, భూమిని లోపలి నుండి నియంత్రించేవాడు — అతడే నీ ఆత్మ, అంతర్యామి, అమృతుడు.” అలాగే నీరు, అగ్ని, ఆకాశం, గాలి, సూర్యుడు, నక్షత్రాలు, ప్రాణం, కన్ను, మనసు — ప్రతిదానిలోనూ అదే కనబడని ఆత్మ."],
   ["dyk", "🐄", "Yājñavalkya's joke — “I just want the cows” — is one of the oldest jokes in Indian literature, and it shows a great sage who did not take himself too seriously.", "యాజ్ఞవల్క్యుని చమత్కారం — “నాకు ఆవులు కావాలంతే” — భారతీయ సాహిత్యంలో అతి ప్రాచీన హాస్యాలలో ఒకటి; తనను తాను మరీ గంభీరంగా తీసుకోని ఒక మహర్షిని అది చూపిస్తుంది."],
   ["src", "Bṛhadāraṇyaka Upaniṣad 3.1 (Janaka's thousand cows; Sāmaśravas; Aśvala), 3.2 (Ārtabhāga; karma discussed in private), 3.4 (Uṣasta: “you cannot see the seer of seeing”), 3.5 (Kahola), 3.7 (Uddālaka Āruṇi; the antaryāmin).", "బృహదారణ్యక ఉపనిషత్తు 3.1 (జనకుని వెయ్యి ఆవులు; సామశ్రవుడు; అశ్వలుడు), 3.2 (ఆర్తభాగుడు; ఏకాంతంలో కర్మ చర్చ), 3.4 (ఉషస్తుడు: “చూపును చూసేవాణ్ణి చూడలేవు”), 3.5 (కహోలుడు), 3.7 (ఉద్దాలక ఆరుణి; అంతర్యామి)."]
  ]
 ],
 remember: [
  ["{janaka|Janaka} offered a thousand gold-horned cows to the greatest knower of Brahman.", "బ్రహ్మను తెలిసినవారిలో శ్రేష్ఠునికి {janaka|జనకుడు} బంగారు కొమ్ముల వెయ్యి ఆవులను సమర్పించాడు."],
  ["{yajnavalkya|Yājñavalkya} had them driven home — “I just want the cows!” — and answered every challenger.", "{yajnavalkya|యాజ్ఞవల్క్యుడు} వాటిని తోలించాడు — “నాకు ఆవులు కావాలంతే!” — ప్రతి సవాలుకూ జవాబిచ్చాడు."],
  ["To {uddalaka|Uddālaka} he taught the inner controller — the Self within all things.", "{uddalaka|ఉద్దాలకునికి} అంతర్యామిని — అన్నిటిలోని ఆత్మను — బోధించాడు."]
 ],
 think: ["Yājñavalkya said you cannot see the one who sees through your eyes. Try it: can you look at your own looking?", "మీ కళ్ళ ద్వారా చూసేవాణ్ణి మీరు చూడలేరని యాజ్ఞవల్క్యుడు అన్నాడు. ప్రయత్నించండి: మీ చూపునే మీరు చూడగలరా?"]
},
{
 id: "yj-4", sage: "yajnavalkya", n: 4, order: 1804, date: "2026-10-23",
 title: "Gārgī's Two Arrows", titleTe: "గార్గి రెండు బాణాలు",
 src: "Bṛhadāraṇyaka Upaniṣad 3.6, 3.8",
 who: ["yajnavalkya", "gargi", "janaka"],
 pages: [
  [
   ["p", "In that assembly of learned men stood a woman: {gargi|Gārgī Vācaknavī}. She was a philosopher, and she was not afraid of anyone. She began with a question that went straight to the foundations: “Yājñavalkya, everything here is woven, warp and woof, on water. On what, then, is water woven?”", "పండితులతో నిండిన ఆ సభలో ఒక స్త్రీ నిలబడింది: {gargi|గార్గి వాచక్నవి}. ఆమె తత్త్వవేత్త; ఎవరికీ భయపడేది కాదు. పునాదులనే తాకే ప్రశ్నతో మొదలుపెట్టింది: “యాజ్ఞవల్క్యా, ఇక్కడ ఉన్నదంతా పడుగు పేకలుగా నీటిపై అల్లబడింది. మరి నీరు దేనిపై అల్లబడింది?”"],
   ["p", "“On air,” said {yajnavalkya|Yājñavalkya}. “And air?” “On the sky.” And on she went, step by step, higher and higher — the worlds of the gandharvas, the sun, the moon, the stars, the gods, Indra, Prajāpati — until she asked: “And on what are the worlds of Brahmā woven?”", "“గాలిపై” అన్నాడు {yajnavalkya|యాజ్ఞవల్క్యుడు}. “మరి గాలి?” “ఆకాశంపై.” అలా ఆమె అడుగడుగునా పైపైకి వెళ్ళింది — గంధర్వ లోకాలు, సూర్యుడు, చంద్రుడు, నక్షత్రాలు, దేవతలు, ఇంద్రుడు, ప్రజాపతి — చివరికి అడిగింది: “మరి బ్రహ్మలోకాలు దేనిపై అల్లబడ్డాయి?”"],
   ["p", "Yājñavalkya stopped her. “Gārgī, do not ask beyond the limit, or your head may fall off. You are asking about the one beyond which no question can go.” Gārgī fell silent — for now.", "యాజ్ఞవల్క్యుడు ఆమెను ఆపాడు. “గార్గీ, హద్దు దాటి అడగకు; నీ తల రాలిపోవచ్చు. ఏ ప్రశ్నా దాటలేని దాని గురించి అడుగుతున్నావు.” గార్గి మౌనం వహించింది — ప్రస్తుతానికి."]
  ],
  [
   ["h", "“Like a Warrior with Two Arrows”", "“రెండు బాణాలతో యోధునిలా”"],
   ["p", "Later, after others had questioned him, Gārgī rose again, and spoke to the whole assembly: “Venerable brāhmaṇas, I will ask him two questions. If he answers them, none of you will ever defeat him in talk of Brahman.” Then, turning to Yājñavalkya: “As a warrior of Kāśī or Videha strings his bow and takes two sharp arrows in hand, so I rise against you with two questions. Answer them.”", "తర్వాత, ఇతరులు ప్రశ్నించాక, గార్గి మళ్ళీ లేచి సభనంతటినీ ఉద్దేశించి మాట్లాడింది: “పూజ్య బ్రాహ్మణులారా, ఆయనను రెండు ప్రశ్నలు అడుగుతాను. వాటికి జవాబిస్తే మీలో ఎవరూ బ్రహ్మ చర్చలో ఆయనను ఎన్నడూ ఓడించలేరు.” తర్వాత యాజ్ఞవల్క్యుని వైపు తిరిగి: “కాశీ లేదా విదేహ యోధుడు విల్లుకు నారి ఎక్కించి రెండు పదునైన బాణాలు చేత పట్టినట్టు, రెండు ప్రశ్నలతో నీపై లేస్తున్నాను. జవాబివ్వు.”"],
   ["p", "“What is above the sky and below the earth, and between the two — what they call past, present and future — on what is all that woven?” “On space,” said Yājñavalkya. Gārgī bowed: “That was the first arrow. Now the second. On what, then, is space woven?”", "“ఆకాశం పైన, భూమి కింద, రెండింటి మధ్య ఉన్నది — భూత, వర్తమాన, భవిష్యత్తులని దేన్ని అంటారో — అదంతా దేనిపై అల్లబడింది?” “ఆకాశంపై (అవకాశంపై)” అన్నాడు యాజ్ఞవల్క్యుడు. గార్గి నమస్కరించింది: “అది మొదటి బాణం. ఇప్పుడు రెండోది. మరి ఆకాశం దేనిపై అల్లబడింది?”"]
  ],
  [
   ["h", "The Imperishable", "అక్షరం"],
   ["p", "And Yājñavalkya answered: “That, Gārgī, is what the knowers call the *Akṣara* — the Imperishable. It is not big and not small, not short and not long, without shadow, without darkness, without air, without space, without taste or smell, without eyes or ears, without voice or mind. It eats nothing, and nothing eats it. At its command, Gārgī, the sun and the moon stand apart in their places; at its command the earth and sky hold firm; the moments, the days, the months, the seasons and the years stand in order; the rivers flow east and west from the snowy mountains. It sees, but is not seen; hears, but is not heard. On this Imperishable, Gārgī, space is woven, warp and woof.”", "యాజ్ఞవల్క్యుడు జవాబిచ్చాడు: “గార్గీ, జ్ఞానులు దాన్నే *అక్షరం* — నశించనిది — అంటారు. అది పెద్దదీ కాదు, చిన్నదీ కాదు; పొట్టిదీ కాదు, పొడవైనదీ కాదు; నీడ లేనిది, చీకటి లేనిది, గాలి లేనిది, ఆకాశం లేనిది, రుచి వాసన లేనిది, కళ్ళు చెవులు లేనిది, వాక్కు మనసు లేనిది. అది దేన్నీ తినదు; దాన్ని ఏదీ తినదు. గార్గీ, దాని ఆజ్ఞతోనే సూర్యచంద్రులు తమ స్థానాల్లో వేరుగా నిలుస్తారు; దాని ఆజ్ఞతోనే భూమ్యాకాశాలు స్థిరంగా ఉంటాయి; క్షణాలు, రోజులు, నెలలు, ఋతువులు, సంవత్సరాలు క్రమంలో ఉంటాయి; మంచు కొండల నుండి నదులు తూర్పుకూ పడమరకూ ప్రవహిస్తాయి. అది చూస్తుంది, కనబడదు; వింటుంది, వినబడదు. గార్గీ, ఈ అక్షరంపైనే ఆకాశం పడుగు పేకలుగా అల్లబడింది.”"],
   ["p", "Gārgī turned to the assembly. “Venerable brāhmaṇas, count yourselves lucky if you get away from him with a bow. None of you will ever defeat him in talk of Brahman.” And she sat down.", "గార్గి సభ వైపు తిరిగింది. “పూజ్య బ్రాహ్మణులారా, ఆయనకు ఒక నమస్కారం చేసి బయటపడగలిగితే అదృష్టవంతులనుకోండి. బ్రహ్మ చర్చలో మీలో ఎవరూ ఆయనను ఎన్నడూ ఓడించలేరు.” అని కూర్చుంది."],
   ["dyk", "👩‍🏫", "Gārgī is remembered as one of the great women thinkers of ancient India — the only person in the debate who questioned Yājñavalkya twice, and the one who declared the winner.", "ప్రాచీన భారతదేశపు గొప్ప స్త్రీ ఆలోచనాపరులలో ఒకరిగా గార్గిని గుర్తుంచుకుంటారు — వాదంలో యాజ్ఞవల్క్యుణ్ణి రెండుసార్లు ప్రశ్నించిన ఏకైక వ్యక్తి, విజేతను ప్రకటించినదీ ఆమెనే."],
   ["src", "Bṛhadāraṇyaka Upaniṣad 3.6 (Gārgī's first questioning: on what is each woven; “do not ask too much, lest your head fall”) and 3.8 (the two arrows; space; the Akṣara; her verdict).", "బృహదారణ్యక ఉపనిషత్తు 3.6 (గార్గి మొదటి ప్రశ్నలు: ప్రతిదీ దేనిపై అల్లబడింది; “అతిగా అడగకు, తల రాలుతుంది”), 3.8 (రెండు బాణాలు; ఆకాశం; అక్షరం; ఆమె తీర్పు)."]
  ]
 ],
 remember: [
  ["{gargi|Gārgī} asked on what each layer of the world is woven, up to the worlds of Brahmā.", "ప్రపంచంలోని ప్రతి పొర దేనిపై అల్లబడిందని {gargi|గార్గి} బ్రహ్మలోకాల వరకు అడిగింది."],
  ["She returned with “two arrows”: all is woven on space — and space on the Imperishable, the Akṣara.", "“రెండు బాణాలతో” తిరిగి వచ్చింది: అంతా ఆకాశంపై — ఆకాశం అక్షరంపై అల్లబడింది."],
  ["She declared that no one would defeat {yajnavalkya|Yājñavalkya}.", "{yajnavalkya|యాజ్ఞవల్క్యుణ్ణి} ఎవరూ ఓడించలేరని ఆమె ప్రకటించింది."]
 ],
 think: ["Gārgī kept asking “and on what is that woven?” What is a question you could keep asking “and why?” about, until you reach the end?", "“మరి అది దేనిపై అల్లబడింది?” అని గార్గి అడుగుతూనే ఉంది. చివరికి చేరేవరకు “మరి ఎందుకు?” అని అడుగుతూనే ఉండగల ప్రశ్న ఏది?"]
},
{
 id: "yj-5", sage: "yajnavalkya", n: 5, order: 1805, date: "2026-10-23",
 title: "How Many Gods? — “Not This, Not This”", titleTe: "దేవతలు ఎంతమంది? — “ఇది కాదు, ఇది కాదు”",
 src: "Bṛhadāraṇyaka Upaniṣad 3.9",
 who: ["yajnavalkya", "shakalya", "janaka"],
 pages: [
  [
   ["p", "The last and fiercest challenger was {shakalya|Vidagdha Śākalya}. He began with a question that sounds simple: “Yājñavalkya, how many gods are there?”", "చివరి, అత్యంత తీవ్రమైన ప్రత్యర్థి {shakalya|విదగ్ధ శాకల్యుడు}. సులభంగా వినిపించే ప్రశ్నతో మొదలుపెట్టాడు: “యాజ్ఞవల్క్యా, దేవతలు ఎంతమంది?”"],
   ["p", "“Three hundred and three, and three thousand and three,” said {yajnavalkya|Yājñavalkya}, quoting the old sacrificial count. “Yes,” said Śākalya. “But really, how many?” “Thirty-three.” “Yes — but really, how many?” “Six.” “Really?” “Three.” “Really?” “Two.” “Really?” “One and a half.” “Really, how many?” “One.” “And who is that one god?” “The breath — prāṇa. They call it Brahman, and *tyat* — That.”", "“మూడు వందల మూడు, మూడు వేల మూడు” అని పాత యజ్ఞ లెక్కను ఉదహరిస్తూ {yajnavalkya|యాజ్ఞవల్క్యుడు} అన్నాడు. “సరే. కానీ నిజానికి ఎంతమంది?” అన్నాడు శాకల్యుడు. “ముప్పై ముగ్గురు.” “సరే — కానీ నిజానికి ఎంతమంది?” “ఆరుగురు.” “నిజానికి?” “ముగ్గురు.” “నిజానికి?” “ఇద్దరు.” “నిజానికి?” “ఒకటిన్నర.” “నిజానికి ఎంతమంది?” “ఒక్కరు.” “ఆ ఒక్క దేవుడు ఎవరు?” “ప్రాణం. దాన్నే బ్రహ్మం అనీ, *త్యత్* — అది — అనీ అంటారు.”"],
   ["p", "Then Yājñavalkya explained: the thirty-three are the eight Vasus, the eleven Rudras, the twelve Ādityas, Indra and Prajāpati; the six are fire, earth, wind, sky, sun and heaven; the three are the three worlds; the two are food and breath; the “one and a half” is the wind, in which everything grows; and the one is breath — the life in all. All the many gods are powers of the One.", "తర్వాత యాజ్ఞవల్క్యుడు వివరించాడు: ముప్పై ముగ్గురు అంటే ఎనిమిది మంది వసువులు, పదకొండు మంది రుద్రులు, పన్నెండు మంది ఆదిత్యులు, ఇంద్రుడు, ప్రజాపతి; ఆరుగురు అంటే అగ్ని, భూమి, వాయువు, అంతరిక్షం, సూర్యుడు, ద్యులోకం; ముగ్గురు అంటే మూడు లోకాలు; ఇద్దరు అంటే అన్నం, ప్రాణం; “ఒకటిన్నర” అంటే అన్నీ పెరిగే వాయువు; ఒక్కరు అంటే ప్రాణం — అందరిలోని జీవం. అనేక దేవతలందరూ ఆ ఒక్కరి శక్తులే."]
  ],
  [
   ["h", "A Question Too Many", "ఒక ప్రశ్న ఎక్కువైంది"],
   ["p", "Śākalya pressed on and on, harsh and angry, trying to trip him up. At last Yājñavalkya turned the tables and asked him one question: “Tell me about the Person taught in the Upaniṣads, who gathers all these and goes beyond them. If you cannot tell me, your head will fall.” Śākalya could not answer. And the Upaniṣad says plainly that his head fell — and that even his bones, as they were carried home, were taken by robbers who thought they were something valuable.", "శాకల్యుడు కటువుగా, కోపంగా, ఆయనను తడబెట్టాలని మళ్ళీ మళ్ళీ అడుగుతూనే ఉన్నాడు. చివరికి యాజ్ఞవల్క్యుడు పరిస్థితిని తిప్పి అతన్నే ఒక ప్రశ్న అడిగాడు: “ఉపనిషత్తులు బోధించే, వీటన్నిటినీ ఏకం చేసి వాటికి అతీతుడైన పురుషుని గురించి చెప్పు. చెప్పలేకపోతే నీ తల రాలుతుంది.” శాకల్యుడు జవాబివ్వలేకపోయాడు. అతని తల రాలిపోయిందనీ, ఇంటికి తీసుకువెళ్తుంటే విలువైనవనుకుని అతని ఎముకలను కూడా దొంగలు ఎత్తుకుపోయారనీ ఉపనిషత్తు సూటిగా చెబుతుంది."],
   ["p", "The story is a stern warning, told in the strong language of old debates: to argue about the highest truth out of pride and hostility, rather than to learn, is dangerous. Śākalya wanted to win; Gārgī, who had asked just as hard questions, wanted to know.", "పాత వాదాల తీవ్రమైన భాషలో చెప్పిన కఠిన హెచ్చరిక ఈ కథ: పరమ సత్యం గురించి నేర్చుకోవాలని కాకుండా గర్వంతో, శత్రుత్వంతో వాదించడం ప్రమాదకరం. శాకల్యుడు గెలవాలనుకున్నాడు; అంతే కఠినమైన ప్రశ్నలు అడిగిన గార్గి తెలుసుకోవాలనుకుంది."]
  ],
  [
   ["h", "Neti, Neti", "నేతి, నేతి"],
   ["p", "In the middle of this debate, Yājñavalkya gave one of the most famous descriptions of the Self in all of Indian thought: *sa eṣa neti neti ātmā* — “That Self is: not this, not this.” It cannot be grasped, for it is not something to be grasped; it does not decay; it does not cling; it is not bound; it does not tremble, and it is not harmed.", "ఈ వాదం మధ్యలోనే యాజ్ఞవల్క్యుడు భారతీయ చింతనమంతటిలో ఆత్మకు అత్యంత ప్రసిద్ధ వర్ణనలలో ఒకటి ఇచ్చాడు: *స ఏష నేతి నేత్యాత్మా* — “ఆ ఆత్మ: ఇది కాదు, ఇది కాదు.” దాన్ని పట్టుకోలేం, ఎందుకంటే అది పట్టుకునే వస్తువు కాదు; అది జీర్ణించదు; అంటుకోదు; బంధించబడదు; చలించదు, హాని పొందదు."],
   ["dyk", "🚫", "“Neti neti” — “not this, not this” — means: whatever you can point to and name, the Self is beyond that. Later Vedānta teachers made it a whole method of meditation.", "“నేతి నేతి” — “ఇది కాదు, ఇది కాదు” — అంటే: మీరు వేలెత్తి చూపి పేరు పెట్టగలిగేదేదైనా, ఆత్మ దానికి అతీతం. తరువాతి వేదాంత గురువులు దీన్ని ఒక సంపూర్ణ ధ్యాన పద్ధతిగా చేశారు."],
   ["src", "Bṛhadāraṇyaka Upaniṣad 3.9 (Śākalya: the number of gods from 3,306 down to one; Yājñavalkya's explanation; the final question; Śākalya's head falls; “sa eṣa neti neti ātmā” at 3.9.26).", "బృహదారణ్యక ఉపనిషత్తు 3.9 (శాకల్యుడు: 3,306 నుండి ఒక్కరి వరకు దేవతల సంఖ్య; యాజ్ఞవల్క్యుని వివరణ; చివరి ప్రశ్న; శాకల్యుని తల రాలడం; 3.9.26లో “స ఏష నేతి నేత్యాత్మా”)."]
  ]
 ],
 remember: [
  ["{shakalya|Śākalya} asked how many gods there are; {yajnavalkya|Yājñavalkya} counted down from 3,306 to one — breath, Brahman.", "దేవతలు ఎంతమంది అని {shakalya|శాకల్యుడు} అడిగాడు; {yajnavalkya|యాజ్ఞవల్క్యుడు} 3,306 నుండి ఒక్కరి వరకు — ప్రాణం, బ్రహ్మం — లెక్కించాడు."],
  ["Śākalya, arguing to win rather than to learn, could not answer the final question.", "నేర్చుకోవడానికి కాక గెలవడానికి వాదించిన శాకల్యుడు చివరి ప్రశ్నకు జవాబివ్వలేకపోయాడు."],
  ["Yājñavalkya taught: the Self is “neti neti” — not this, not this.", "ఆత్మ “నేతి నేతి” — ఇది కాదు, ఇది కాదు — అని యాజ్ఞవల్క్యుడు బోధించాడు."]
 ],
 think: ["Gārgī and Śākalya both asked hard questions, but one asked to learn and one to win. Can you tell the difference when you ask questions?", "గార్గి, శాకల్యుడు ఇద్దరూ కఠిన ప్రశ్నలు అడిగారు; కానీ ఒకరు నేర్చుకోవడానికి, ఒకరు గెలవడానికి. మీరు ప్రశ్నలు అడిగేటప్పుడు ఆ తేడా గుర్తించగలరా?"]
},
{
 id: "yj-6", sage: "yajnavalkya", n: 6, order: 1806, date: "2026-10-23",
 title: "“What Is the Light of a Person?” — Teaching Janaka", titleTe: "“మనిషికి వెలుగు ఏది?” — జనకునికి బోధ",
 src: "Bṛhadāraṇyaka Upaniṣad 4.1–4.4",
 who: ["yajnavalkya", "janaka"],
 pages: [
  [
   ["p", "After the great debate, {yajnavalkya|Yājñavalkya} became the teacher of King {janaka|Janaka} himself. The fourth book of the Bṛhadāraṇyaka is their conversation — one of the deepest dialogues in the world. It begins with a simple question.", "మహావాదం తర్వాత {yajnavalkya|యాజ్ఞవల్క్యుడు} స్వయంగా {janaka|జనక} మహారాజుకు గురువయ్యాడు. బృహదారణ్యకం నాలుగవ అధ్యాయం వారి సంభాషణే — ప్రపంచంలోని అత్యంత లోతైన సంవాదాలలో ఒకటి. ఒక సరళమైన ప్రశ్నతో అది మొదలవుతుంది."],
   ["p", "“Yājñavalkya,” asked Janaka, “what is the light of a person — by what light does he sit, go out, work and come home?” “By the light of the sun, great king.” “And when the sun has set?” “By the light of the moon.” “And when the sun and moon have both set?” “By the light of fire.” “And when the fire, too, has gone out?” “By the light of speech — when it is so dark you cannot see your own hand, you go towards a voice.” “And when speech is silent, Yājñavalkya — what then is the light of a person?”", "“యాజ్ఞవల్క్యా, మనిషికి వెలుగు ఏది — ఏ వెలుగుతో అతను కూర్చుంటాడు, బయటకు వెళ్తాడు, పని చేస్తాడు, ఇంటికి వస్తాడు?” అని జనకుడు అడిగాడు. “సూర్యుని వెలుగుతో, మహారాజా.” “సూర్యుడు అస్తమించాక?” “చంద్రుని వెలుగుతో.” “సూర్యచంద్రులిద్దరూ అస్తమించాక?” “అగ్ని వెలుగుతో.” “అగ్ని కూడా ఆరిపోయాక?” “వాక్కు వెలుగుతో — సొంత చేయి కనబడనంత చీకటిలో ఒక స్వరం వైపు నడుస్తాం.” “వాక్కు కూడా మౌనమైతే, యాజ్ఞవల్క్యా — అప్పుడు మనిషికి వెలుగు ఏది?”"],
   ["p", "“The Self, great king, is his light. By the light of the Self he sits, goes out, works and comes home.”", "“మహారాజా, ఆత్మే అతనికి వెలుగు. ఆత్మ వెలుగుతోనే అతను కూర్చుంటాడు, బయటకు వెళ్తాడు, పని చేస్తాడు, ఇంటికి వస్తాడు.”"]
  ],
  [
   ["h", "Dreams and Deep Sleep", "కలలు, గాఢనిద్ర"],
   ["p", "Then Yājñavalkya led the king through the three states we all pass through every day. In waking, we live in the world. In dreaming, the Self makes its own world — chariots, roads, joys, fears — out of nothing, shining by its own light. And in deep, dreamless sleep, like a tired eagle folding its wings and gliding home to its nest, the Self rests where it desires nothing and sees no dream. There, a father is no longer a father, a thief no longer a thief; there is no sorrow at all.", "తర్వాత మనమందరం ప్రతిరోజూ దాటే మూడు అవస్థల గుండా యాజ్ఞవల్క్యుడు రాజును నడిపించాడు. జాగ్రదవస్థలో లోకంలో జీవిస్తాం. స్వప్నంలో ఆత్మ శూన్యం నుండే తన లోకాన్ని — రథాలు, దారులు, ఆనందాలు, భయాలు — సృష్టించుకుంటుంది, తన సొంత వెలుగుతో ప్రకాశిస్తూ. గాఢమైన, కలలు లేని నిద్రలో, అలసిన గద్ద రెక్కలు ముడుచుకుని గూటికి జారుకున్నట్టు, ఆత్మ ఏమీ కోరని, ఏ కలా చూడని చోట విశ్రమిస్తుంది. అక్కడ తండ్రి తండ్రి కాదు, దొంగ దొంగ కాదు; ఏ దుఃఖమూ లేదు."],
   ["p", "Again and again, moved by the teaching, Janaka said: “I give you a thousand cows, sir. Teach me further, for my freedom.” And at the end of one teaching, Yājñavalkya told him: *abhayaṃ vai janaka prāpto 'si* — “Janaka, you have reached fearlessness.”", "బోధకు చలించిపోయి జనకుడు మళ్ళీ మళ్ళీ అన్నాడు: “స్వామీ, మీకు వెయ్యి ఆవులు ఇస్తున్నాను. నా విముక్తి కోసం ఇంకా బోధించండి.” ఒక బోధ చివర యాజ్ఞవల్క్యుడు ఆయనతో అన్నాడు: *అభయం వై జనక ప్రాప్తోఽసి* — “జనకా, నువ్వు అభయాన్ని పొందావు.”"]
  ],
  [
   ["h", "“I Give You My Kingdom”", "“నా రాజ్యాన్నే ఇస్తున్నాను”"],
   ["p", "At the end, Janaka bowed and said: “Sir, I give you the kingdom of Videha — and myself with it, to be your servant.” But Yājñavalkya did not want a kingdom. He had come to give, not to take. The great truth he had taught — that the Self is fearless, deathless, beyond all sorrow — could not be paid for with land or cows.", "చివరికి జనకుడు నమస్కరించి అన్నాడు: “స్వామీ, విదేహ రాజ్యాన్ని మీకు ఇస్తున్నాను — దానితో పాటు మీ సేవకుడిగా నన్ను నేనే.” కానీ యాజ్ఞవల్క్యునికి రాజ్యం అక్కర్లేదు. ఆయన తీసుకోవడానికి కాదు, ఇవ్వడానికి వచ్చాడు. ఆయన బోధించిన మహా సత్యం — ఆత్మ అభయమైనది, మరణం లేనిది, సకల దుఃఖాలకూ అతీతమైనది — భూమితోనో ఆవులతోనో కొనలేనిది."],
   ["dyk", "🦅", "The image of the Self in deep sleep as a tired eagle gliding home to its nest is one of the most loved pictures in the Upaniṣads.", "గాఢనిద్రలోని ఆత్మను గూటికి జారుకునే అలసిన గద్దతో పోల్చడం ఉపనిషత్తులలోని అత్యంత ప్రియమైన చిత్రాలలో ఒకటి."],
   ["src", "Bṛhadāraṇyaka Upaniṣad 4.1–4.2 (Janaka's earlier teachers; “abhayaṃ vai janaka prāpto 'si” at 4.2.4), 4.3 (the light of a person; dreams; the eagle and deep sleep), 4.4 (Janaka offers Videha and himself at 4.4.23).", "బృహదారణ్యక ఉపనిషత్తు 4.1–4.2 (జనకుని పూర్వ గురువులు; 4.2.4లో “అభయం వై జనక ప్రాప్తోఽసి”), 4.3 (మనిషి వెలుగు; కలలు; గద్ద, గాఢనిద్ర), 4.4 (4.4.23లో జనకుడు విదేహాన్నీ తననూ సమర్పించడం)."]
  ]
 ],
 remember: [
  ["{janaka|Janaka} asked: what is the light of a person when sun, moon, fire and speech are gone?", "సూర్యుడు, చంద్రుడు, అగ్ని, వాక్కు లేనప్పుడు మనిషికి వెలుగు ఏది అని {janaka|జనకుడు} అడిగాడు."],
  ["{yajnavalkya|Yājñavalkya} answered: the Self is his light — in waking, dream and deep sleep.", "{yajnavalkya|యాజ్ఞవల్క్యుడు} జవాబిచ్చాడు: జాగ్రత్, స్వప్న, సుషుప్తులలో ఆత్మే అతనికి వెలుగు."],
  ["“Janaka, you have reached fearlessness”; the king offered his kingdom and himself.", "“జనకా, నువ్వు అభయాన్ని పొందావు”; రాజు రాజ్యాన్నీ తననూ సమర్పించాడు."]
 ],
 think: ["When there is no sun, no moon, no fire and no voice, what light is still with you? Close your eyes and look for it.", "సూర్యుడు, చంద్రుడు, అగ్ని, స్వరం ఏవీ లేనప్పుడు ఏ వెలుగు ఇంకా మీతో ఉంటుంది? కళ్ళు మూసుకుని దాని కోసం వెతకండి."]
},
{
 id: "yj-7", sage: "yajnavalkya", n: 7, order: 1807, date: "2026-10-23",
 title: "Maitreyī's Question", titleTe: "మైత్రేయి ప్రశ్న",
 src: "Bṛhadāraṇyaka Upaniṣad 2.4, 4.5",
 who: ["yajnavalkya", "maitreyi", "katyayani"],
 pages: [
  [
   ["p", "{yajnavalkya|Yājñavalkya} had two wives. {maitreyi|Maitreyī}, the Upaniṣad says, was one who loved to talk of Brahman; {katyayani|Kātyāyanī} had the ordinary wisdom of a woman of the household. When the time came for him to leave home and become a wandering renunciant, he said: “Maitreyī, I am going to leave this life. Let me divide what I have between you and Kātyāyanī.”", "{yajnavalkya|యాజ్ఞవల్క్యునికి} ఇద్దరు భార్యలు. {maitreyi|మైత్రేయి} బ్రహ్మ చర్చను ఇష్టపడేదని ఉపనిషత్తు చెబుతుంది; {katyayani|కాత్యాయనికి} గృహిణి సాధారణ జ్ఞానం ఉంది. గృహం విడిచి సన్యాసిగా సంచరించే సమయం రాగానే ఆయన అన్నాడు: “మైత్రేయీ, నేను ఈ జీవితాన్ని విడిచి వెళ్ళబోతున్నాను. నా దగ్గర ఉన్నదాన్ని నీకూ కాత్యాయనికీ పంచుతాను.”"],
   ["p", "Maitreyī asked one question: “Sir, if this whole earth, full of wealth, were mine — would I become immortal by it?” “No,” said Yājñavalkya. “Your life would be like the life of the rich. There is no hope of immortality through wealth.” And Maitreyī said: “What would I do with that which will not make me immortal? Tell me instead what you know.”", "మైత్రేయి ఒకే ప్రశ్న అడిగింది: “స్వామీ, సంపదతో నిండిన ఈ భూమంతా నాదైతే — దానితో నేను అమృతత్వం పొందుతానా?” “లేదు. ధనవంతుల జీవితం లాగే నీ జీవితమూ ఉంటుంది. సంపద ద్వారా అమృతత్వం ఆశ లేదు” అన్నాడు యాజ్ఞవల్క్యుడు. మైత్రేయి అంది: “నన్ను అమృతురాలిని చేయనిదాన్ని నేనేం చేసుకోను? బదులుగా మీకు తెలిసినది చెప్పండి.”"]
  ],
  [
   ["h", "For the Love of the Self", "ఆత్మ కోసమే"],
   ["p", "Yājñavalkya was delighted. “You have always been dear to me, and now you speak what is dearer still. Come, sit, and I will explain.” And he taught her: “It is not for the love of the husband that a husband is dear, but for the love of the Self. It is not for the love of the wife that a wife is dear, but for the love of the Self. Not for love of sons are sons dear, nor wealth, nor the worlds, nor the gods — but for the love of the Self are they dear. So it is the Self that should be seen, heard, reflected on and meditated upon, Maitreyī. When the Self is seen and known, all this is known.”", "యాజ్ఞవల్క్యుడు సంతోషించాడు. “నువ్వు ఎప్పుడూ నాకు ప్రియమైనదానివి; ఇప్పుడు ఇంకా ప్రియమైన మాట చెబుతున్నావు. రా, కూర్చో, వివరిస్తాను.” ఆమెకు బోధించాడు: “భర్త కోసం భర్త ప్రియుడు కాడు; ఆత్మ కోసమే భర్త ప్రియుడు. భార్య కోసం భార్య ప్రియురాలు కాదు; ఆత్మ కోసమే భార్య ప్రియురాలు. కుమారుల కోసం కుమారులు, సంపద, లోకాలు, దేవతలు ప్రియమైనవి కావు — ఆత్మ కోసమే అవి ప్రియమైనవి. కాబట్టి మైత్రేయీ, ఆత్మనే చూడాలి, వినాలి, మననం చేయాలి, ధ్యానించాలి. ఆత్మను చూసి తెలుసుకుంటే ఇదంతా తెలుస్తుంది.”"],
   ["p", "The love we feel for anyone, he was saying, is really the Self shining through them — the one Self that is in all.", "మనం ఎవరి పట్ల చూపే ప్రేమైనా నిజానికి వారి ద్వారా ప్రకాశించే ఆత్మే — అందరిలో ఉన్న ఒకే ఆత్మ — అని ఆయన చెబుతున్నాడు."]
  ],
  [
   ["h", "“By What Would One Know the Knower?”", "“తెలుసుకునేవాణ్ణి దేనితో తెలుసుకోవాలి?”"],
   ["p", "He ended with words that have echoed for three thousand years: “Where there seems to be two, one sees another, one hears another, one thinks of another. But where everything has become one's own Self — by what, and whom, would one see? By what would one know That by which all this is known? By what, Maitreyī, would one know the knower?” And having said this, Yājñavalkya went away into the forest.", "మూడు వేల సంవత్సరాలుగా ప్రతిధ్వనిస్తున్న మాటలతో ముగించాడు: “ద్వైతం ఉన్నట్టు అనిపించినచోట ఒకరు మరొకరిని చూస్తారు, వింటారు, తలుస్తారు. కానీ అంతా తన ఆత్మే అయినచోట — దేనితో, ఎవరిని చూస్తారు? దేని వల్ల ఇదంతా తెలుస్తుందో దాన్ని దేనితో తెలుసుకోవాలి? మైత్రేయీ, తెలుసుకునేవాణ్ణి దేనితో తెలుసుకోవాలి?” ఇలా చెప్పి యాజ్ఞవల్క్యుడు అడవికి వెళ్ళిపోయాడు."],
   ["dyk", "💎", "The four steps Yājñavalkya named — hearing, reflecting, meditating, and so seeing (śravaṇa, manana, nididhyāsana) — became the basic method of study in the whole Vedānta tradition.", "యాజ్ఞవల్క్యుడు చెప్పిన దశలు — శ్రవణం, మననం, నిదిధ్యాసనం, తద్వారా దర్శనం — వేదాంత సంప్రదాయమంతటిలో అధ్యయనానికి మౌలిక పద్ధతి అయ్యాయి."],
   ["src", "Bṛhadāraṇyaka Upaniṣad 2.4 and 4.5 (the two tellings of Yājñavalkya and Maitreyī: the division of property; “what would I do with that which will not make me immortal?”; “for the love of the Self”; “ātmā vā are draṣṭavyaḥ śrotavyo mantavyo nididhyāsitavyaḥ”; “by what would one know the knower?”).", "బృహదారణ్యక ఉపనిషత్తు 2.4, 4.5 (యాజ్ఞవల్క్య మైత్రేయి సంవాదపు రెండు కథనాలు: ఆస్తి పంపకం; “అమృతురాలిని చేయనిదాన్ని నేనేం చేసుకోను?”; “ఆత్మ కోసమే”; “ఆత్మా వా అరే ద్రష్టవ్యః శ్రోతవ్యో మంతవ్యో నిదిధ్యాసితవ్యః”; “తెలుసుకునేవాణ్ణి దేనితో తెలుసుకోవాలి?”)."]
  ]
 ],
 remember: [
  ["Before leaving home, {yajnavalkya|Yājñavalkya} offered to divide his wealth between {maitreyi|Maitreyī} and {katyayani|Kātyāyanī}.", "గృహం విడిచే ముందు {yajnavalkya|యాజ్ఞవల్క్యుడు} తన సంపదను {maitreyi|మైత్రేయి}, {katyayani|కాత్యాయనిలకు} పంచబోయాడు."],
  ["Maitreyī asked: what would I do with what cannot make me immortal?", "“అమృతురాలిని చేయనిదాన్ని నేనేం చేసుకోను?” అని మైత్రేయి అడిగింది."],
  ["He taught: all are dear for the love of the Self; the Self should be heard, reflected on and meditated upon.", "ఆత్మ కోసమే అందరూ ప్రియమైనవారు; ఆత్మనే వినాలి, మననం చేయాలి, ధ్యానించాలి అని బోధించాడు."]
 ],
 think: ["Offered wealth, Maitreyī asked for wisdom instead. If someone offered you either a great fortune or a great truth, which would you choose?", "సంపద ఇవ్వబోతే మైత్రేయి జ్ఞానాన్ని కోరింది. మీకు గొప్ప సంపదో, గొప్ప సత్యమో ఎంచుకోమంటే దేన్ని ఎంచుకుంటారు?"]
},
{
 id: "yj-8", sage: "yajnavalkya", n: 8, order: 1808, date: "2026-10-23",
 title: "The Lawgiver — and the Sage Who Walked Away", titleTe: "ధర్మశాస్త్రకర్త — వెళ్ళిపోయిన ముని",
 src: "Yājñavalkya Smṛti · Mitākṣarā · later tradition",
 who: ["yajnavalkya", "janaka", "bharadvajamuni"],
 pages: [
  [
   ["p", "Yājñavalkya's name is carried by one of the most important law books of India, the *Yājñavalkya Smṛti*. It opens in Mithilā, where sages come to the master and ask him to teach them the dharma of all the classes and stages of life. Its three books cover right conduct, the law of disputes and courts, and atonement — clearly and briefly, in a little over a thousand verses.", "భారతదేశపు అత్యంత ముఖ్యమైన ధర్మశాస్త్రాలలో ఒకటి — *యాజ్ఞవల్క్య స్మృతి* — ఆయన పేరుతో ఉంది. అది మిథిలలో మొదలవుతుంది; మునులు గురువు దగ్గరికి వచ్చి అన్ని వర్ణాల, ఆశ్రమాల ధర్మాన్ని బోధించమని అడుగుతారు. దాని మూడు కాండాలు సదాచారం, వ్యవహారం (వివాదాలు, న్యాయస్థానాలు), ప్రాయశ్చిత్తం — వెయ్యికి కొంచెం పైగా శ్లోకాలలో స్పష్టంగా, సంక్షిప్తంగా — చెబుతాయి."],
   ["p", "In the twelfth century, the scholar Vijñāneśvara, at the Cālukya court of Kalyāṇa in the Deccan, wrote a commentary on it called the *Mitākṣarā*. That commentary became the most influential law book in India. For centuries, and right up to the modern codification of Hindu law in the 1950s, courts across most of India decided questions of family property and inheritance by the Mitākṣarā — the law of Yājñavalkya, explained by a Deccan scholar.", "పన్నెండవ శతాబ్దంలో దక్కన్‌లోని కళ్యాణ చాళుక్య ఆస్థానంలో పండితుడు విజ్ఞానేశ్వరుడు దానిపై *మితాక్షర* అనే వ్యాఖ్యానం రాశాడు. ఆ వ్యాఖ్యానం భారతదేశంలో అత్యంత ప్రభావవంతమైన ధర్మశాస్త్ర గ్రంథమైంది. శతాబ్దాల పాటు — 1950లలో హిందూ చట్టాలు ఆధునికంగా క్రోడీకరించబడేవరకు — భారతదేశంలో చాలా ప్రాంతాల న్యాయస్థానాలు కుటుంబ ఆస్తి, వారసత్వ ప్రశ్నలను మితాక్షర ప్రకారమే — దక్కన్ పండితుడు వివరించిన యాజ్ఞవల్క్య ధర్మం ప్రకారమే — నిర్ణయించాయి."]
  ],
  [
   ["h", "In Later Stories", "తరువాతి కథలలో"],
   ["p", "Later tradition gave him still more. A text on yoga, the *Yoga Yājñavalkya*, is presented as his teaching to his wife Gārgī. And in Tulasīdās's Hindi Rāmcaritmānas, it is Yājñavalkya who tells the whole story of Rāma to the sage {bharadvajamuni|Bharadvāja} at Prayāga during the Māgha festival — the frame in which millions hear the Rāmāyaṇa in North India. These are later tellings, but they show how the tradition saw him: as a teacher who could explain anything.", "తరువాతి సంప్రదాయం ఆయనకు ఇంకా ఎన్నో ఆపాదించింది. యోగ గ్రంథమైన *యోగ యాజ్ఞవల్క్యం* ఆయన తన భార్య గార్గికి చేసిన బోధగా చెప్పబడుతుంది. తులసీదాసు హిందీ రామచరితమానస్‌లో మాఘ మేళా సమయంలో ప్రయాగలో {bharadvajamuni|భరద్వాజ} మహర్షికి రాముని కథనంతా చెప్పేది యాజ్ఞవల్క్యుడే — ఉత్తర భారతంలో కోట్లాది మంది రామాయణాన్ని ఆ చట్రంలోనే వింటారు. ఇవి తరువాతి కథనాలు; కానీ ఏదైనా వివరించగల గురువుగా సంప్రదాయం ఆయనను ఎలా చూసిందో అవి చూపిస్తాయి."]
  ],
  [
   ["h", "From Pride to Peace", "గర్వం నుండి శాంతికి"],
   ["p", "Look at the whole arc of his life. He began as a brilliant student who spoke too proudly and lost all he had learned. He found a new teacher in the Sun. He drove home a thousand cows with a joke, and answered every challenge in Janaka's court. He taught a king fearlessness and a wife immortality. And at the end, having given away all he owned, he walked into the forest with nothing — the clever debater become a silent renunciant, free.", "ఆయన జీవిత ప్రయాణమంతటినీ చూడండి. మరీ గర్వంగా మాట్లాడి నేర్చుకున్నదంతా పోగొట్టుకున్న ప్రతిభావంతుడైన శిష్యునిగా మొదలయ్యాడు. సూర్యునిలో కొత్త గురువును కనుగొన్నాడు. ఒక చమత్కారంతో వెయ్యి ఆవులను తోలించి, జనకుని సభలో ప్రతి సవాలుకూ జవాబిచ్చాడు. ఒక రాజుకు అభయాన్నీ, ఒక భార్యకు అమృతత్వాన్నీ బోధించాడు. చివరికి తనకున్నదంతా ఇచ్చేసి ఏమీ లేకుండా అడవికి నడిచి వెళ్ళాడు — చతురుడైన వాదకుడు మౌనమైన, స్వేచ్ఛాయుత సన్యాసి అయ్యాడు."],
   ["dyk", "⚖️", "Vijñāneśvara, who wrote the Mitākṣarā, ended his book with a famous verse praising the city of Kalyāṇa — saying there never was, is, or will be on earth a city like it, a king like Vikramārka, or a scholar like himself!", "మితాక్షర రాసిన విజ్ఞానేశ్వరుడు కళ్యాణ నగరాన్ని పొగుడుతూ ఒక ప్రసిద్ధ శ్లోకంతో తన గ్రంథాన్ని ముగించాడు — అలాంటి నగరం, విక్రమార్కుని వంటి రాజు, తన వంటి పండితుడు భూమిపై ఎన్నడూ లేరు, లేరు, ఉండబోరని!"],
   ["src", "Yājñavalkya Smṛti (ācāra, vyavahāra and prāyaścitta books). Vijñāneśvara's Mitākṣarā commentary (12th century, Kalyāṇa), the basis of the Mitākṣarā school of Hindu law until the codifications of the 1950s. The Yoga Yājñavalkya and the frame of Tulasīdās's Rāmcaritmānas are later traditions. Bṛhadāraṇyaka Upaniṣad 4.5.15 (Yājñavalkya departs).", "యాజ్ఞవల్క్య స్మృతి (ఆచార, వ్యవహార, ప్రాయశ్చిత్త కాండాలు). విజ్ఞానేశ్వరుని మితాక్షర వ్యాఖ్యానం (12వ శతాబ్దం, కళ్యాణ) — 1950ల క్రోడీకరణల వరకు హిందూ చట్టంలోని మితాక్షర శాఖకు ఆధారం. యోగ యాజ్ఞవల్క్యం, తులసీదాసు రామచరితమానస్ చట్రం తరువాతి సంప్రదాయాలు. బృహదారణ్యక ఉపనిషత్తు 4.5.15 (యాజ్ఞవల్క్యుని నిష్క్రమణ)."]
  ]
 ],
 remember: [
  ["The Yājñavalkya Smṛti is one of India's great law books.", "యాజ్ఞవల్క్య స్మృతి భారతదేశపు గొప్ప ధర్మశాస్త్రాలలో ఒకటి."],
  ["Vijñāneśvara's Mitākṣarā on it governed Hindu family law across most of India until the 1950s.", "దానిపై విజ్ఞానేశ్వరుని మితాక్షర 1950ల వరకు భారతదేశంలో చాలా ప్రాంతాల హిందూ కుటుంబ చట్టాన్ని నడిపింది."],
  ["In Tulasīdās, {yajnavalkya|Yājñavalkya} tells the Rāmāyaṇa to {bharadvajamuni|Bharadvāja} at Prayāga.", "తులసీదాసులో {yajnavalkya|యాజ్ఞవల్క్యుడు} ప్రయాగలో {bharadvajamuni|భరద్వాజునికి} రామాయణం చెబుతాడు."]
 ],
 think: ["Yājñavalkya began proud and ended free, owning nothing. What do you think changed in him along the way?", "యాజ్ఞవల్క్యుడు గర్వంతో మొదలై, ఏమీ లేకుండా స్వేచ్ఛగా ముగించాడు. దారిలో ఆయనలో ఏం మారిందని మీరనుకుంటున్నారు?"]
}
]);
