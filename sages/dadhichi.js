// Great Sages — Dadhīci. Retold by Hari Pokkuluri.
// Told from the Ṛgveda, the Śatapatha Brāhmaṇa and Bṛhadāraṇyaka Upaniṣad, the Mahābhārata (Āraṇyaka, Śalya and
// Śānti Parvas), the Bhāgavata, the Śiva, Liṅga and Brahma Purāṇas and the Praśna Upaniṣad, with later tellings
// marked, in fresh original wording. Block format: see the top of ramayana.js and sages.js.
window.SAGE_PLAN = Object.assign(window.SAGE_PLAN || {}, { dadhichi: [
  ["Son of Atharvan — the Sage by the Sarasvatī", "Ṛgveda · Bhāgavata 4.1 · Mahābhārata, Śalya Parva"],
  ["The Horse's Head — the Honey-Knowledge", "Ṛgveda 1.116–1.119 · Śatapatha Brāhmaṇa 14.1 · Bṛhadāraṇyaka 2.5"],
  ["King Kṣuva and the Bones of Diamond", "Śiva Purāṇa, Rudra Saṃhitā · Liṅga Purāṇa"],
  ["The Voice at Dakṣa's Sacrifice", "Mahābhārata, Śānti Parva · Śiva Purāṇa"],
  ["The Gift of His Bones", "Mahābhārata, Āraṇyaka Parva · Bhāgavata 6.9–6.10 · Ṛgveda 1.84"],
  ["Pippalāda, Son of the Fig Tree", "Brahma Purāṇa (Gautamī Māhātmya) · Praśna Upaniṣad · later tellings"],
  ["The Greatest Gift — What Dadhīci Leaves Us", "Living tradition"]
] });
window.RMY_WHO = Object.assign({
  "dadhichi": { "av": "⚔️", "en": "Dadhīci (Dadhyañc)", "te": "దధీచి మహర్షి", "d": "Son of the sage Atharvan, who taught the Aśvins the honey-knowledge with a horse's head, and gave his own bones to make Indra's thunderbolt.", "dt": "అథర్వ మహర్షి కుమారుడు; గుర్రపు తలతో అశ్వినీ దేవతలకు మధువిద్య బోధించాడు; ఇంద్రుని వజ్రాయుధం కోసం తన ఎముకలనే దానమిచ్చాడు." },
  "atharvan": { "av": "🔥", "en": "Atharvan", "te": "అథర్వ మహర్షి", "d": "An ancient sage, the first to kindle the sacred fire, whose name the Atharvaveda bears; father of Dadhīci.", "dt": "పవిత్రాగ్నిని మొదట రగిల్చిన ప్రాచీన ముని; అథర్వవేదం ఆయన పేరుతో ఉంది; దధీచి తండ్రి." },
  "sarasvata": { "av": "🐟", "en": "Sārasvata", "te": "సారస్వతుడు", "d": "Son of Dadhīci, born of the river Sarasvatī, who kept the Vedas alive through a twelve-year famine.", "dt": "సరస్వతీ నది నుండి పుట్టిన దధీచి కుమారుడు; పన్నెండేళ్ళ కరువులో వేదాలను నిలిపి ఉంచాడు." },
  "kshuva": { "av": "👑", "en": "Kṣuva", "te": "క్షువుడు", "d": "A king, once Dadhīci's friend, who quarrelled with him over whether a king or a sage is greater.", "dt": "ఒకప్పుడు దధీచి మిత్రుడైన రాజు; రాజు గొప్పవాడా, ముని గొప్పవాడా అని ఆయనతో గొడవపడ్డాడు." },
  "pippalada": { "av": "🌳", "en": "Pippalāda", "te": "పిప్పలాదుడు", "d": "Dadhīci's son, raised by a pippala (sacred fig) tree after his parents' death. Tradition links him with the teacher of the Praśna Upaniṣad.", "dt": "తల్లిదండ్రులు గతించాక రావిచెట్టు పెంచిన దధీచి కుమారుడు. ప్రశ్నోపనిషత్తులోని గురువుగా సంప్రదాయం ఆయనను గుర్తిస్తుంది." },
  "tvashta": { "av": "🛠️", "en": "Tvaṣṭṛ", "te": "త్వష్ట", "d": "The divine craftsman of the Veda, who shaped the thunderbolt from Dadhīci's bones.", "dt": "దధీచి ఎముకలతో వజ్రాయుధాన్ని మలిచిన వేదపు దివ్య శిల్పి." }
}, window.RMY_WHO || {});
window.SAGE_CHAPTERS = (window.SAGE_CHAPTERS || []).concat([
{
 id: "dd-1", sage: "dadhichi", n: 1, order: 1501, date: "2026-10-23",
 title: "Son of Atharvan — the Sage by the Sarasvatī", titleTe: "అథర్వ పుత్రుడు — సరస్వతీ తీరపు ముని",
 src: "Ṛgveda · Bhāgavata 4.1 · Mahābhārata, Śalya Parva",
 who: ["dadhichi", "atharvan", "sarasvati", "indra", "sarasvata"],
 pages: [
  [
   ["p", "In the Ṛgveda he is called Dadhyañc Ātharvaṇa — Dadhyañc, son of {atharvan|Atharvan}. In the Purāṇas and the Mahābhārata he becomes Dadhīca or {dadhichi|Dadhīci}. His father Atharvan was one of the most ancient sages of all, remembered as the first to bring the sacred fire into use — the fourth Veda, the Atharvaveda, carries his name. The Bhāgavata says Dadhīci's mother was Citti, a daughter of Kardama.", "ఋగ్వేదంలో ఆయనను దధ్యఙ్ ఆథర్వణుడు — {atharvan|అథర్వుని} కుమారుడు దధ్యఙ్ — అంటారు. పురాణాలలో, మహాభారతంలో ఆయన దధీచుడు లేదా {dadhichi|దధీచి} అవుతాడు. ఆయన తండ్రి అథర్వుడు అందరికంటే ప్రాచీన మునులలో ఒకడు; పవిత్రాగ్నిని మొదట వాడుకలోకి తెచ్చినవాడిగా గుర్తుంచుకోబడతాడు — నాలుగవ వేదం అథర్వవేదం ఆయన పేరుతో ఉంది. దధీచి తల్లి కర్దముని కుమార్తె చిత్తి అని భాగవతం చెబుతుంది."],
   ["p", "Dadhīci lived on the banks of the holy river {sarasvati|Sarasvatī}, so great in tapas that, the Mahābhārata says, {indra|Indra} himself was afraid of him — afraid, as he was of every great ascetic, that such power might one day reach his own throne.", "దధీచి పవిత్ర {sarasvati|సరస్వతీ} నది ఒడ్డున నివసించాడు; మహాభారతం ప్రకారం ఆయన తపస్సు ఎంత గొప్పదంటే స్వయంగా {indra|ఇంద్రుడు} ఆయనకు భయపడేవాడు — ప్రతి మహాతపస్విని చూసినట్టే, ఆ శక్తి ఎప్పుడో తన సింహాసనాన్ని చేరుతుందేమోనని."]
  ],
  [
   ["h", "The Son of the River", "నది కుమారుడు"],
   ["p", "So Indra sent the apsaras Alambuṣā to distract him. As she came near while he was offering water to the gods by the river, the sage was stirred, and his seed fell into the Sarasvatī. The river herself held it, and in time bore a son, whom she brought to Dadhīci. He named the boy {sarasvata|Sārasvata}, “son of the Sarasvatī,” and blessed him: “In a time of great drought, you will teach the Vedas to the brāhmaṇas.”", "అందుకే ఆయనను మళ్ళించడానికి ఇంద్రుడు అలంబుస అనే అప్సరసను పంపాడు. నది ఒడ్డున ఆయన దేవతలకు తర్పణం విడుస్తుండగా ఆమె దగ్గరికి రావడంతో ముని చలించాడు; ఆయన వీర్యం సరస్వతిలో పడింది. నదే దాన్ని ధరించి, కాలక్రమంలో కుమారుణ్ణి కని దధీచి దగ్గరికి తెచ్చింది. ఆ బాలునికి {sarasvata|సారస్వతుడు} — “సరస్వతి కుమారుడు” — అని పేరు పెట్టి ఆశీర్వదించాడు: “తీవ్రమైన కరువు కాలంలో నువ్వు బ్రాహ్మణులకు వేదాలు బోధిస్తావు.”"],
   ["p", "The blessing came true. Later there was a famine of twelve years. The sages scattered in search of food and, in their hunger, forgot the Vedas. But the river Sarasvatī fed her son with fish, and Sārasvata kept reciting and remembering. When the famine ended, sixty thousand sages came to him, and he taught them the Vedas again. The Veda survived because of Dadhīci's son.", "ఆ ఆశీర్వాదం నిజమైంది. తరువాత పన్నెండేళ్ళ కరువు వచ్చింది. మునులు ఆహారం కోసం చెల్లాచెదురైపోయి, ఆకలిలో వేదాలు మరచిపోయారు. కానీ సరస్వతీ నది తన కుమారునికి చేపలతో ఆహారమిచ్చింది; సారస్వతుడు వల్లిస్తూ, గుర్తుంచుకుంటూ ఉన్నాడు. కరువు ముగిశాక అరవై వేల మంది మునులు ఆయన దగ్గరికి వచ్చారు; వారికి మళ్ళీ వేదాలు బోధించాడు. దధీచి కుమారుని వల్లే వేదం నిలిచింది."],
   ["dyk", "🐟", "A young teacher instructing sixty thousand old sages — the Mahābhārata uses this story to say that learning, not age, makes someone a teacher.", "అరవై వేల మంది వృద్ధ మునులకు బోధించిన యువ గురువు — వయసు కాదు, విద్యే గురువును చేస్తుందని చెప్పడానికి మహాభారతం ఈ కథను వాడుతుంది."],
   ["src", "Ṛgveda (Dadhyañc Ātharvaṇa). Bhāgavata Purāṇa 4.1 (Atharvan and Citti, parents of Dadhyañc). Mahābhārata, Śalya Parva, the Sārasvata tīrtha (Alambuṣā, the son of the Sarasvatī, the twelve-year famine and the sixty thousand sages).", "ఋగ్వేదం (దధ్యఙ్ ఆథర్వణుడు). భాగవత పురాణం 4.1 (దధ్యఙ్ తల్లిదండ్రులు అథర్వుడు, చిత్తి). మహాభారతం, శల్య పర్వం, సారస్వత తీర్థం (అలంబుస, సరస్వతి కుమారుడు, పన్నెండేళ్ళ కరువు, అరవై వేల మునులు)."]
  ]
 ],
 remember: [
  ["{dadhichi|Dadhīci} (Dadhyañc) was the son of {atharvan|Atharvan} and lived by the {sarasvati|Sarasvatī}.", "{dadhichi|దధీచి} (దధ్యఙ్) {atharvan|అథర్వుని} కుమారుడు; {sarasvati|సరస్వతీ} తీరాన నివసించాడు."],
  ["The river bore his son {sarasvata|Sārasvata}.", "నది ఆయన కుమారుడు {sarasvata|సారస్వతుని} కన్నది."],
  ["In a twelve-year famine Sārasvata kept the Vedas and taught sixty thousand sages.", "పన్నెండేళ్ళ కరువులో సారస్వతుడు వేదాలను కాపాడి అరవై వేల మునులకు బోధించాడు."]
 ],
 think: ["Sārasvata kept reciting the Vedas even when everyone else had forgotten them. What is something worth keeping alive even in hard times?", "అందరూ మరచిపోయినప్పుడు కూడా సారస్వతుడు వేదాలు వల్లిస్తూనే ఉన్నాడు. కష్టకాలంలో కూడా నిలిపి ఉంచాల్సిన విలువైనది ఏది?"]
},
{
 id: "dd-2", sage: "dadhichi", n: 2, order: 1502, date: "2026-10-23",
 title: "The Horse's Head — the Honey-Knowledge", titleTe: "గుర్రపు తల — మధువిద్య",
 src: "Ṛgveda 1.116–1.119 · Śatapatha Brāhmaṇa 14.1 · Bṛhadāraṇyaka 2.5",
 who: ["dadhichi", "indra", "ashvins"],
 pages: [
  [
   ["p", "{indra|Indra} once taught {dadhichi|Dadhyañc} a secret — the *madhu-vidyā*, the “honey-knowledge,” a deep teaching about how all things are honey to each other: the earth to all beings and all beings to the earth, the waters, the fire, the wind, the sun, all sweet to one another, because the same Self shines in all. But Indra gave it with a terrible condition. “If you ever teach this to anyone else,” he said, “I will cut off your head.”", "{indra|ఇంద్రుడు} ఒకసారి {dadhichi|దధ్యఙ్‌కు} ఒక రహస్యాన్ని — *మధువిద్యను*, “తేనె విద్యను” — బోధించాడు; అన్ని వస్తువులూ ఒకదానికొకటి తేనె వంటివని చెప్పే లోతైన బోధ: భూమి సకల జీవులకు, సకల జీవులు భూమికి; నీరు, అగ్ని, గాలి, సూర్యుడు — అన్నీ ఒకదానికొకటి మధురం; ఎందుకంటే అందరిలోనూ ఒకే ఆత్మ ప్రకాశిస్తుంది. కానీ ఇంద్రుడు భయంకరమైన షరతుతో ఇచ్చాడు. “దీన్ని నువ్వు ఎప్పుడైనా ఇంకెవరికైనా నేర్పితే నీ తల నరికేస్తాను” అన్నాడు."],
   ["p", "The twin {ashvins|Aśvins}, the physicians of the gods, longed to learn the honey-knowledge. They came to Dadhyañc and asked to be his students. The sage told them honestly: “If I teach you, Indra will cut off my head.”", "దేవ వైద్యులైన కవల {ashvins|అశ్వినీ దేవతలు} మధువిద్య నేర్చుకోవాలని తపించారు. దధ్యఙ్ దగ్గరికి వచ్చి శిష్యులుగా స్వీకరించమన్నారు. ముని నిజాయితీగా చెప్పాడు: “మీకు నేర్పితే ఇంద్రుడు నా తల నరికేస్తాడు.”"]
  ],
  [
   ["h", "The Physicians' Plan", "వైద్యుల పథకం"],
   ["p", "The Aśvins were doctors, and they had a plan. “We will take off your head and keep it safe,” they said, “and put the head of a horse on your neck. With the horse's head you will teach us. When Indra comes and cuts off that head, we will put your own head back.” Dadhyañc agreed. They did exactly that — and with a horse's head, the sage taught them the honey-knowledge.", "అశ్వినీ దేవతలు వైద్యులు; వారి దగ్గర ఒక పథకం ఉంది. “మీ తలను తీసి భద్రంగా ఉంచుతాం. మీ మెడపై గుర్రపు తల పెడతాం. ఆ గుర్రపు తలతో మాకు బోధించండి. ఇంద్రుడు వచ్చి ఆ తల నరికితే, మీ సొంత తలను మళ్ళీ పెడతాం” అన్నారు. దధ్యఙ్ ఒప్పుకున్నాడు. వారు సరిగ్గా అలాగే చేశారు — గుర్రపు తలతో ముని వారికి మధువిద్య బోధించాడు."],
   ["p", "Indra found out, as he had sworn, and struck off the horse's head. And the Aśvins, as they had promised, put Dadhyañc's own head back on his shoulders, alive and well. The Ṛgveda praises the Aśvins for this again and again: “Through the horse's head, Dadhyañc taught you the honey.”", "ఇంద్రుడు తెలుసుకుని, ప్రమాణం చేసినట్టే గుర్రపు తలను నరికేశాడు. అశ్వినీ దేవతలు మాట ఇచ్చినట్టే దధ్యఙ్ సొంత తలను మళ్ళీ ఆయన భుజాలపై పెట్టారు; ఆయన క్షేమంగా ఉన్నాడు. ఇందుకు ఋగ్వేదం అశ్వినీ దేవతలను మళ్ళీ మళ్ళీ స్తుతిస్తుంది: “గుర్రపు తల ద్వారా దధ్యఙ్ మీకు మధువును బోధించాడు.”"]
  ],
  [
   ["h", "Honey for All", "అందరికీ మధువు"],
   ["p", "The Bṛhadāraṇyaka Upaniṣad preserves the teaching itself, in a section called the Madhu Brāhmaṇa. It ends with the story of Dadhyañc and the Aśvins, and with this thought: this Self is the honey of all beings, and all beings are the honey of this Self. It is the same in the sun, in the wind, in the waters, in you. To know this is to know everything.", "బృహదారణ్యక ఉపనిషత్తు ఆ బోధనే మధు బ్రాహ్మణం అనే భాగంలో భద్రపరిచింది. అది దధ్యఙ్, అశ్వినీ దేవతల కథతోనూ ఈ ఆలోచనతోనూ ముగుస్తుంది: ఈ ఆత్మ సకల ప్రాణులకూ మధువు; సకల ప్రాణులూ ఈ ఆత్మకు మధువు. సూర్యునిలో, గాలిలో, నీటిలో, మీలో — అంతటా అదే. దీన్ని తెలుసుకోవడమే అన్నిటినీ తెలుసుకోవడం."],
   ["dyk", "🐴", "Dadhyañc risked his own head rather than refuse sincere students. In the Indian tradition, a teacher who hides knowledge from a worthy student is counted as failing his duty.", "నిజాయితీ గల శిష్యులను తిరస్కరించడం కంటే దధ్యఙ్ తన తలనే పణంగా పెట్టాడు. యోగ్యుడైన శిష్యునికి జ్ఞానాన్ని దాచే గురువు తన ధర్మంలో విఫలమైనట్టేనని భారతీయ సంప్రదాయం భావిస్తుంది."],
   ["src", "Ṛgveda 1.116.12, 1.117.22 and 1.119.9 (the Aśvins and Dadhyañc's horse's head). Śatapatha Brāhmaṇa 14.1.1 (Indra's threat and the Aśvins' plan). Bṛhadāraṇyaka Upaniṣad 2.5 (the Madhu Brāhmaṇa, ending with the verses on Dadhyañc).", "ఋగ్వేదం 1.116.12, 1.117.22, 1.119.9 (అశ్వినీ దేవతలు, దధ్యఙ్ గుర్రపు తల). శతపథ బ్రాహ్మణం 14.1.1 (ఇంద్రుని బెదిరింపు, అశ్వినుల పథకం). బృహదారణ్యక ఉపనిషత్తు 2.5 (మధు బ్రాహ్మణం; దధ్యఙ్ గురించిన మంత్రాలతో ముగుస్తుంది)."]
  ]
 ],
 remember: [
  ["{indra|Indra} taught {dadhichi|Dadhyañc} the honey-knowledge and threatened to cut off his head if he taught it.", "{indra|ఇంద్రుడు} {dadhichi|దధ్యఙ్‌కు} మధువిద్య బోధించి, ఇతరులకు నేర్పితే తల నరుకుతానని బెదిరించాడు."],
  ["The {ashvins|Aśvins} gave him a horse's head, and with it he taught them.", "{ashvins|అశ్వినీ దేవతలు} ఆయనకు గుర్రపు తల పెట్టారు; దానితో ఆయన వారికి బోధించాడు."],
  ["Indra cut off the horse's head; the Aśvins restored his own.", "ఇంద్రుడు గుర్రపు తల నరికాడు; అశ్వినులు ఆయన సొంత తలను మళ్ళీ పెట్టారు."]
 ],
 think: ["Dadhyañc risked his head to share what he knew. Is knowledge meant to be kept or shared? Why?", "తనకు తెలిసినదాన్ని పంచుకోవడానికి దధ్యఙ్ తన తలను పణంగా పెట్టాడు. జ్ఞానం దాచుకోవడానికా, పంచుకోవడానికా? ఎందుకు?"]
},
{
 id: "dd-3", sage: "dadhichi", n: 3, order: 1503, date: "2026-10-23",
 title: "King Kṣuva and the Bones of Diamond", titleTe: "క్షువ మహారాజు — వజ్రం వంటి ఎముకలు",
 src: "Śiva Purāṇa, Rudra Saṃhitā · Liṅga Purāṇa",
 who: ["dadhichi", "kshuva", "shukracharya", "shiva", "vishnu", "brahma"],
 pages: [
  [
   ["p", "The Śiva Purāṇa and the Liṅga Purāṇa tell of a quarrel between two old friends. {dadhichi|Dadhīci} and King {kshuva|Kṣuva} had grown up together. One day they began to argue: which is greater, a king or a brāhmaṇa sage? Kṣuva said: “The king holds the power of the eight guardians of the world. All bow to him.” Dadhīci said: “The sage is greater; even kings worship him.” Neither would give way. In a rage, Kṣuva struck Dadhīci with his thunderbolt-weapon, and the sage fell.", "ఇద్దరు పాత మిత్రుల మధ్య గొడవ గురించి శివ పురాణం, లింగ పురాణం చెబుతాయి. {dadhichi|దధీచి}, {kshuva|క్షువ} మహారాజు కలిసి పెరిగారు. ఒకరోజు వాదం మొదలైంది: రాజు గొప్పవాడా, బ్రాహ్మణ ముని గొప్పవాడా? “రాజులో అష్టదిక్పాలకుల శక్తి ఉంటుంది. అందరూ అతనికి తలవంచుతారు” అన్నాడు క్షువుడు. “ముని గొప్పవాడు; రాజులే ఆయనను పూజిస్తారు” అన్నాడు దధీచి. ఎవరూ తగ్గలేదు. కోపంతో క్షువుడు తన వజ్రాయుధంతో దధీచిని కొట్టాడు; ముని నేలకొరిగాడు."],
   ["p", "Dying, Dadhīci thought of {shukracharya|Śukrācārya}, the master of the secret that brings the dead back. Śukra came, healed him, and taught him the Mahāmṛtyuñjaya — the prayer to Śiva that conquers death. “Worship Śiva with this,” he said, “and you will never fear death again.”", "మరణిస్తూ దధీచి మృతులను బతికించే రహస్య విద్య తెలిసిన {shukracharya|శుక్రాచార్యుని} తలచుకున్నాడు. శుక్రుడు వచ్చి ఆయనను బాగుచేసి మహామృత్యుంజయ మంత్రాన్ని — మృత్యువును జయించే శివ ప్రార్థనను — ఉపదేశించాడు. “దీనితో శివుణ్ణి ఆరాధించు; ఇక ఎన్నడూ మృత్యువుకు భయపడవు” అన్నాడు."]
  ],
  [
   ["h", "Three Boons", "మూడు వరాలు"],
   ["p", "Dadhīci went into the forest and worshipped {shiva|Śiva} with that mantra until Śiva appeared. He asked for three boons: that his bones would become as hard as diamond — as hard as the thunderbolt itself; that no one could ever kill him; and that he would never be humbled. Śiva granted all three. Dadhīci went straight to Kṣuva's court and, in front of everyone, kicked the king on the head.", "దధీచి అడవికి వెళ్ళి శివుడు ప్రత్యక్షమయ్యేవరకు ఆ మంత్రంతో {shiva|శివుణ్ణి} ఆరాధించాడు. మూడు వరాలు కోరాడు: తన ఎముకలు వజ్రంలా — వజ్రాయుధమంతగా — గట్టిగా కావాలి; ఎవరూ తనను చంపలేకూడదు; తాను ఎన్నడూ అవమానించబడకూడదు. శివుడు మూడూ ఇచ్చాడు. దధీచి నేరుగా క్షువుని సభకు వెళ్ళి, అందరి ఎదుట రాజు తలపై తన్నాడు."],
   ["p", "Kṣuva struck back with his weapon, but now it could not harm the sage at all. Humiliated, Kṣuva went and worshipped {vishnu|Viṣṇu}, and asked for his help against Dadhīci.", "క్షువుడు తిరిగి ఆయుధంతో కొట్టాడు; కానీ ఇప్పుడు అది మునికి ఏమాత్రం హాని చేయలేకపోయింది. అవమానించబడిన క్షువుడు వెళ్ళి {vishnu|విష్ణువును} ఆరాధించి దధీచికి వ్యతిరేకంగా సహాయం కోరాడు."]
  ],
  [
   ["h", "A Curse on the Gods", "దేవతలకు శాపం"],
   ["p", "Viṣṇu came to Dadhīci disguised as a brāhmaṇa and asked him to grant Kṣuva a favour. Dadhīci saw through the disguise at once and refused. The tellings say a battle followed in which even Viṣṇu's discus could not cut the sage, and Dadhīci showed the whole universe within his own body. At last {brahma|Brahmā} came between them and made peace. Kṣuva bowed to the sage, and Dadhīci forgave him.", "విష్ణువు బ్రాహ్మణ వేషంలో దధీచి దగ్గరికి వచ్చి క్షువునికి ఒక సహాయం చేయమని అడిగాడు. దధీచి వెంటనే ఆ వేషాన్ని గుర్తుపట్టి నిరాకరించాడు. తర్వాత జరిగిన యుద్ధంలో విష్ణువు చక్రం కూడా మునిని ఛేదించలేకపోయిందనీ, దధీచి తన శరీరంలోనే సమస్త విశ్వాన్నీ చూపించాడనీ కథనాలు చెబుతాయి. చివరికి {brahma|బ్రహ్మ} మధ్యలో వచ్చి సంధి చేశాడు. క్షువుడు మునికి నమస్కరించాడు; దధీచి అతన్ని క్షమించాడు."],
   ["p", "But Dadhīci was angry with the gods who had sided with the king against a devotee of Śiva, and he cursed them: “One day you will all be burned by the fire of Rudra's anger.” That curse, the Śiva Purāṇa says, came true at Dakṣa's sacrifice.", "కానీ శివభక్తునికి వ్యతిరేకంగా రాజు పక్షం వహించిన దేవతలపై దధీచికి కోపం వచ్చి శపించాడు: “ఒకరోజు మీరందరూ రుద్రుని కోపాగ్నిలో దహించుకుపోతారు.” ఆ శాపం దక్షయజ్ఞంలో నెరవేరిందని శివ పురాణం చెబుతుంది."],
   ["dyk", "💎", "The word *vajra* means both “thunderbolt” and “diamond.” Dadhīci's boon of vajra-hard bones prepares us for the day those very bones would become Indra's vajra.", "*వజ్రం* అంటే “పిడుగు” అనీ “వజ్రపు రాయి” అనీ రెండు అర్థాలు. వజ్రం వంటి ఎముకల వరం — అవే ఎముకలు ఇంద్రుని వజ్రాయుధమయ్యే రోజుకు మనల్ని సిద్ధం చేస్తుంది."],
   ["src", "Śiva Purāṇa, Rudra Saṃhitā (the quarrel of Kṣuva and Dadhīci; Śukra and the Mahāmṛtyuñjaya; Śiva's boons; Viṣṇu's intervention; Dadhīci's curse on the gods). Liṅga Purāṇa (the same story). These Purāṇas tell it from a Śaiva point of view.", "శివ పురాణం, రుద్ర సంహిత (క్షువ దధీచుల గొడవ; శుక్రుడు, మహామృత్యుంజయం; శివుని వరాలు; విష్ణువు జోక్యం; దేవతలకు దధీచి శాపం). లింగ పురాణం (అదే కథ). ఈ పురాణాలు దీన్ని శైవ దృష్టితో చెబుతాయి."]
  ]
 ],
 remember: [
  ["{kshuva|Kṣuva} and {dadhichi|Dadhīci} quarrelled over whether king or sage is greater; Kṣuva struck him down.", "రాజు గొప్పా, ముని గొప్పా అని {kshuva|క్షువుడు}, {dadhichi|దధీచి} గొడవపడ్డారు; క్షువుడు ఆయనను పడగొట్టాడు."],
  ["{shukracharya|Śukra} revived him; {shiva|Śiva} gave him diamond-hard bones.", "{shukracharya|శుక్రుడు} ఆయనను బతికించాడు; {shiva|శివుడు} వజ్రం వంటి ఎముకలు ఇచ్చాడు."],
  ["He cursed the gods who sided against him to be burned by Rudra's anger.", "తనకు వ్యతిరేకంగా నిలిచిన దేవతలను రుద్రుని కోపాగ్నిలో దహించుకుపోతారని శపించాడు."]
 ],
 think: ["Two friends lost their friendship over the question “who is greater?” Why do you think arguments about who is greater so often go wrong?", "“ఎవరు గొప్ప?” అనే ప్రశ్నపై ఇద్దరు మిత్రులు స్నేహాన్ని కోల్పోయారు. ఎవరు గొప్ప అనే వాదాలు తరచూ ఎందుకు చెడిపోతాయని మీరనుకుంటున్నారు?"]
},
{
 id: "dd-4", sage: "dadhichi", n: 4, order: 1504, date: "2026-10-23",
 title: "The Voice at Dakṣa's Sacrifice", titleTe: "దక్షయజ్ఞంలో ఒక స్వరం",
 src: "Mahābhārata, Śānti Parva · Śiva Purāṇa",
 who: ["dadhichi", "daksha", "shiva", "sati", "virabhadra"],
 pages: [
  [
   ["p", "{daksha|Dakṣa}, the great Prajāpati, held an enormous sacrifice. He invited every god, every sage, every celestial being — everyone except his son-in-law {shiva|Śiva}, whom he despised. The hall was full. The fires were lit. And one sage stood up to speak.", "మహా ప్రజాపతి {daksha|దక్షుడు} ఒక బ్రహ్మాండమైన యజ్ఞం తలపెట్టాడు. ప్రతి దేవుణ్ణీ, ప్రతి మునినీ, ప్రతి దివ్యజీవినీ ఆహ్వానించాడు — తాను ద్వేషించిన తన అల్లుడు {shiva|శివుణ్ణి} తప్ప. యజ్ఞశాల నిండిపోయింది. అగ్నులు రగిలాయి. ఒక ముని లేచి నిలబడి మాట్లాడాడు."],
   ["p", "It was {dadhichi|Dadhīci}. The Mahābhārata gives his words: “Why is Maheśvara not given his share in this sacrifice? A sacrifice in which the Lord of all is not worshipped is no sacrifice at all.” Dakṣa answered coldly: “I have eleven Rudras here already, with their matted hair and their tridents. I do not know any other Maheśvara.”", "అతను {dadhichi|దధీచి}. మహాభారతం ఆయన మాటలను ఇలా చెబుతుంది: “ఈ యజ్ఞంలో మహేశ్వరునికి హవిర్భాగం ఎందుకు లేదు? సర్వేశ్వరుణ్ణి పూజించని యజ్ఞం యజ్ఞమే కాదు.” దక్షుడు చల్లగా జవాబిచ్చాడు: “జటలు, త్రిశూలాలు ధరించిన పదకొండు మంది రుద్రులు ఇప్పటికే ఇక్కడ ఉన్నారు. మరే మహేశ్వరుడూ నాకు తెలియదు.”"]
  ],
  [
   ["h", "The Sage Who Walked Out", "బయటకు నడిచిన ముని"],
   ["p", "Dadhīci looked around the great assembly. Not one of the gods or sages had spoken with him. “Then hear this,” he said. “Since you have all agreed to leave out Śiva, this sacrifice will never be completed.” The Śiva Purāṇa adds that he walked out of the hall, and that a few others who honoured Śiva followed him.", "దధీచి ఆ మహాసభ చుట్టూ చూశాడు. దేవతలలో గానీ మునులలో గానీ ఒక్కరూ ఆయనతో గొంతు కలపలేదు. “అయితే ఇది వినండి. శివుణ్ణి వదిలేయడానికి మీరందరూ ఒప్పుకున్నారు కాబట్టి ఈ యజ్ఞం ఎన్నటికీ పూర్తి కాదు” అన్నాడు. ఆయన యజ్ఞశాల నుండి బయటకు నడిచి వెళ్ళాడనీ, శివుణ్ణి గౌరవించే మరికొందరు ఆయనను అనుసరించారనీ శివ పురాణం జోడిస్తుంది."],
   ["p", "And so it happened. {sati|Satī}, Śiva's wife and Dakṣa's own daughter, came to the sacrifice uninvited, was insulted by her father, and gave up her body in the fire of her own yoga. In his grief and fury Śiva created {virabhadra|Vīrabhadra}, who destroyed the sacrifice. The gods who had sat silent were punished — just as Dadhīci had once cursed.", "అలాగే జరిగింది. శివుని భార్య, దక్షుని సొంత కుమార్తె {sati|సతి} ఆహ్వానం లేకుండా యజ్ఞానికి వచ్చి, తండ్రి చేతిలో అవమానించబడి, తన యోగాగ్నిలో శరీరాన్ని విడిచింది. దుఃఖంతో, కోపంతో శివుడు {virabhadra|వీరభద్రుణ్ణి} సృష్టించాడు; అతను యజ్ఞాన్ని ధ్వంసం చేశాడు. మౌనంగా కూర్చున్న దేవతలు శిక్షించబడ్డారు — దధీచి ఒకప్పుడు శపించినట్టే."],
   ["sglink", "Bhṛgu at Dakṣa's sacrifice", "దక్షయజ్ఞంలో భృగువు", "bh-7"]
  ],
  [
   ["h", "Standing Alone", "ఒంటరిగా నిలబడడం"],
   ["p", "What is remarkable about Dadhīci here is not his power but his courage. In a hall full of gods and great sages, every one of whom knew that leaving out Śiva was wrong, he alone said so — out loud, to the face of the most powerful Prajāpati — and then left rather than be part of it.", "ఇక్కడ దధీచిలో గొప్ప విషయం ఆయన శక్తి కాదు, ధైర్యం. శివుణ్ణి వదిలేయడం తప్పని ప్రతి ఒక్కరికీ తెలిసిన దేవతలు, మహర్షులతో నిండిన సభలో, ఆయన ఒక్కడే — బిగ్గరగా, అత్యంత శక్తిమంతుడైన ప్రజాపతి ముఖం మీదే — ఆ మాట చెప్పాడు; దానిలో భాగం కావడం కంటే బయటకు వెళ్ళిపోవడాన్నే ఎంచుకున్నాడు."],
   ["dyk", "🗣️", "Silence can be a choice too. In this story, the gods who said nothing shared in the wrong — and in the punishment.", "మౌనం కూడా ఒక ఎంపికే. ఈ కథలో ఏమీ అనని దేవతలు తప్పులోనూ పాలుపంచుకున్నారు — శిక్షలోనూ."],
   ["src", "Mahābhārata, Śānti Parva (the destruction of Dakṣa's sacrifice: Dadhīca's question and Dakṣa's reply about the eleven Rudras; Dadhīca's warning). Śiva Purāṇa, Rudra Saṃhitā (Dadhīci leaves the sacrifice; Satī's death; Vīrabhadra).", "మహాభారతం, శాంతి పర్వం (దక్షయజ్ఞ ధ్వంసం: దధీచుని ప్రశ్న, పదకొండు రుద్రుల గురించి దక్షుని జవాబు; దధీచుని హెచ్చరిక). శివ పురాణం, రుద్ర సంహిత (దధీచి యజ్ఞం విడిచి వెళ్ళడం; సతీదేవి దేహత్యాగం; వీరభద్రుడు)."]
  ]
 ],
 remember: [
  ["At {daksha|Dakṣa}'s sacrifice, {dadhichi|Dadhīci} alone asked why {shiva|Śiva} was left out.", "{daksha|దక్షుని} యజ్ఞంలో {shiva|శివుణ్ణి} ఎందుకు వదిలేశారని {dadhichi|దధీచి} ఒక్కడే అడిగాడు."],
  ["He warned that the sacrifice would never be completed, and walked out.", "ఆ యజ్ఞం ఎన్నటికీ పూర్తి కాదని హెచ్చరించి బయటకు నడిచాడు."],
  ["{sati|Satī} gave up her body; {virabhadra|Vīrabhadra} destroyed the sacrifice.", "{sati|సతి} దేహత్యాగం చేసింది; {virabhadra|వీరభద్రుడు} యజ్ఞాన్ని ధ్వంసం చేశాడు."]
 ],
 think: ["When everyone around you stays quiet about something wrong, how hard is it to be the one who speaks? What makes it possible?", "ఒక తప్పు గురించి మీ చుట్టూ అందరూ మౌనంగా ఉన్నప్పుడు మాట్లాడేది మీరే కావడం ఎంత కష్టం? దాన్ని సాధ్యం చేసేది ఏమిటి?"]
},
{
 id: "dd-5", sage: "dadhichi", n: 5, order: 1505, date: "2026-10-23",
 title: "The Gift of His Bones", titleTe: "ఎముకల దానం",
 src: "Mahābhārata, Āraṇyaka Parva · Bhāgavata 6.9–6.10 · Ṛgveda 1.84",
 who: ["dadhichi", "indra", "vritra", "tvashta", "vishnu", "brahma"],
 pages: [
  [
   ["p", "A terrible asura named {vritra|Vṛtra} rose against the gods. He was so vast that he seemed to swallow the sky; he held back the waters of the world, and no weapon the gods had could harm him. {indra|Indra}'s thunderbolt broke against him. The gods fled in terror, and went for help — in the Mahābhārata to {brahma|Brahmā}, in the Bhāgavata to {vishnu|Viṣṇu}.", "{vritra|వృత్రుడు} అనే భయంకర అసురుడు దేవతలపై లేచాడు. ఆకాశాన్నే మింగుతున్నట్టు అంత పెద్దవాడు; లోకంలోని నీటిని అడ్డుకున్నాడు; దేవతల దగ్గరి ఏ ఆయుధమూ అతన్ని గాయపరచలేకపోయింది. {indra|ఇంద్రుని} వజ్రం అతనికి తగిలి విరిగిపోయింది. భయంతో దేవతలు పారిపోయి సహాయం కోసం వెళ్ళారు — మహాభారతంలో {brahma|బ్రహ్మ} దగ్గరికి, భాగవతంలో {vishnu|విష్ణువు} దగ్గరికి."],
   ["p", "The answer was the same in both: “There is only one weapon that can kill Vṛtra — a thunderbolt made from the bones of the sage {dadhichi|Dadhīci}. Go to him and ask for his body. He will not refuse.”", "రెండింటిలోనూ జవాబు ఒకటే: “వృత్రుణ్ణి చంపగల ఆయుధం ఒక్కటే — దధీచి మహర్షి ఎముకలతో చేసిన వజ్రం. ఆయన దగ్గరికి వెళ్ళి ఆయన శరీరాన్ని అడగండి. ఆయన కాదనడు.”"]
  ],
  [
   ["h", "Asking for a Life", "ప్రాణాన్ని అడగడం"],
   ["p", "The gods came to Dadhīci's āśrama by the Sarasvatī, ashamed of what they had to ask. The Bhāgavata says the sage, knowing why they had come, first teased them: “Do you not know how much every creature loves its body? Even the gods could not easily give theirs.” The gods replied: “Those who are truly great think only of others. They do not count their own bodies.”", "అడగాల్సిన దాని గురించి సిగ్గుపడుతూ దేవతలు సరస్వతీ తీరాన దధీచి ఆశ్రమానికి వచ్చారు. వారెందుకు వచ్చారో తెలిసిన ముని మొదట వారిని ఆటపట్టించాడని భాగవతం చెబుతుంది: “ప్రతి ప్రాణికీ తన శరీరం అంటే ఎంత ప్రేమో మీకు తెలియదా? దేవతలు కూడా తమ శరీరాలను సులభంగా ఇవ్వలేరు.” దేవతలు జవాబిచ్చారు: “నిజంగా గొప్పవాళ్ళు ఇతరుల గురించే ఆలోచిస్తారు. తమ శరీరాలను లెక్కచేయరు.”"],
   ["p", "Then Dadhīci smiled and spoke from his heart: “This body will perish one day anyway. It belongs to the dogs and jackals in the end. If it cannot be used for the good of others, what is the use of it? The one who does not use his perishable body to help others is truly to be pitied. Take it.”", "అప్పుడు దధీచి నవ్వి మనస్ఫూర్తిగా అన్నాడు: “ఈ శరీరం ఎలాగూ ఒకరోజు నశిస్తుంది. చివరికి కుక్కలకూ నక్కలకూ చెందుతుంది. ఇతరుల మేలుకు ఉపయోగపడకపోతే దాని వల్ల ఏం ప్రయోజనం? నశించే శరీరాన్ని ఇతరులకు సహాయం చేయడానికి వాడనివాడే నిజంగా జాలిపడదగినవాడు. తీసుకోండి.”"],
   ["p", "He sat in yoga, fixed his mind on the Lord, drew his breath and life upward — and left his body of his own will, as easily as setting down a garment. The Mahābhārata says the same: Dadhīci gave up his life for the gods with a glad heart.", "యోగంలో కూర్చుని, మనసును భగవంతునిపై నిలిపి, ప్రాణాన్ని పైకి లాక్కుని — ఒక వస్త్రాన్ని పక్కన పెట్టినంత సులభంగా — స్వచ్ఛందంగా శరీరాన్ని విడిచాడు. దధీచి సంతోషకరమైన హృదయంతో దేవతల కోసం ప్రాణం విడిచాడని మహాభారతం కూడా చెబుతుంది."]
  ],
  [
   ["h", "The Vajra", "వజ్రాయుధం"],
   ["p", "From the sage's bones, the divine craftsman {tvashta|Tvaṣṭṛ} — in the Bhāgavata, Viśvakarmā — shaped a new thunderbolt, the *vajra*, blazing and unbreakable. With it, Indra went out against Vṛtra, and after a long and terrible battle, killed him. The waters were set free, and the world was saved.", "ఆ ముని ఎముకల నుండి దివ్యశిల్పి {tvashta|త్వష్ట} — భాగవతంలో విశ్వకర్మ — జ్వలించే, విరగని కొత్త వజ్రాయుధాన్ని మలిచాడు. దానితో ఇంద్రుడు వృత్రునిపై దండెత్తి సుదీర్ఘ భయంకర యుద్ధం తర్వాత అతన్ని సంహరించాడు. నీరు విముక్తమైంది; లోకం రక్షించబడింది."],
   ["p", "Even the Ṛgveda remembers it, in an old verse: with the bones of Dadhyañc, Indra struck down the Vṛtras ninety-nine times. And it adds a strange, lovely detail — Indra sought out the horse's head of Dadhyañc, hidden in the mountains, and found it at the lake Śaryaṇāvat.", "ఋగ్వేదం కూడా ఒక ప్రాచీన మంత్రంలో దీన్ని గుర్తుచేస్తుంది: దధ్యఙ్ ఎముకలతో ఇంద్రుడు తొంభై తొమ్మిదిసార్లు వృత్రులను పడగొట్టాడు. ఒక విచిత్రమైన, అందమైన వివరాన్ని కూడా జోడిస్తుంది — పర్వతాలలో దాగిన దధ్యఙ్ గుర్రపు తలను ఇంద్రుడు వెతికి శర్యణావత్ సరస్సు దగ్గర కనుగొన్నాడు."],
   ["dyk", "⚡", "The same Indra who once threatened to cut off Dadhyañc's head now owed his greatest victory to that sage's bones.", "ఒకప్పుడు దధ్యఙ్ తల నరుకుతానని బెదిరించిన అదే ఇంద్రుడు ఇప్పుడు తన గొప్ప విజయానికి ఆ ముని ఎముకలకే ఋణపడ్డాడు."],
   ["src", "Mahābhārata, Āraṇyaka Parva (the killing of Vṛtra: Brahmā's advice, Dadhīca gives up his body, Tvaṣṭṛ makes the vajra). Bhāgavata Purāṇa 6.9–6.10 (Viṣṇu's advice; Dadhīci's words on the perishable body; Viśvakarmā makes the vajra; the battle). Ṛgveda 1.84.13–14 (with the bones of Dadhyañc Indra slew the Vṛtras ninety-nine times; the horse's head found at Śaryaṇāvat).", "మహాభారతం, ఆరణ్యక పర్వం (వృత్రవధ: బ్రహ్మ సలహా, దధీచుడు శరీరం విడవడం, త్వష్ట వజ్రం చేయడం). భాగవత పురాణం 6.9–6.10 (విష్ణువు సలహా; నశించే శరీరం గురించి దధీచి మాటలు; విశ్వకర్మ వజ్రం చేయడం; యుద్ధం). ఋగ్వేదం 1.84.13–14 (దధ్యఙ్ ఎముకలతో ఇంద్రుడు తొంభై తొమ్మిదిసార్లు వృత్రులను సంహరించడం; శర్యణావత్ దగ్గర గుర్రపు తల)."]
  ]
 ],
 remember: [
  ["No weapon could kill {vritra|Vṛtra} except a thunderbolt from {dadhichi|Dadhīci}'s bones.", "{dadhichi|దధీచి} ఎముకలతో చేసిన వజ్రం తప్ప ఏ ఆయుధమూ {vritra|వృత్రుణ్ణి} చంపలేదు."],
  ["Dadhīci said a body not used to help others is wasted, and gave up his life by yoga.", "ఇతరులకు సహాయపడని శరీరం వ్యర్థమని చెప్పి దధీచి యోగంతో ప్రాణం విడిచాడు."],
  ["{tvashta|Tvaṣṭṛ} made the vajra, and {indra|Indra} killed Vṛtra and freed the waters.", "{tvashta|త్వష్ట} వజ్రం చేశాడు; {indra|ఇంద్రుడు} వృత్రుణ్ణి చంపి నీటిని విడిపించాడు."]
 ],
 think: ["Dadhīci gave the most precious thing he had so that others could live. What is something you could give — not your bones! — to help someone else?", "ఇతరులు బతకడానికి దధీచి తన దగ్గరి అత్యంత విలువైనదాన్ని ఇచ్చాడు. ఇతరులకు సహాయం చేయడానికి మీరు ఏం ఇవ్వగలరు — ఎముకలు కాదు!?"]
},
{
 id: "dd-6", sage: "dadhichi", n: 6, order: 1506, date: "2026-10-23",
 title: "Pippalāda, Son of the Fig Tree", titleTe: "పిప్పలాదుడు — రావిచెట్టు బిడ్డ",
 src: "Brahma Purāṇa (Gautamī Māhātmya) · Praśna Upaniṣad · later tellings",
 who: ["pippalada", "dadhichi", "shiva"],
 pages: [
  [
   ["p", "The Brahma Purāṇa, in its book on the Godāvarī, tells what happened to Dadhīci's family after he gave his body. His wife was away when the gods came. When she returned and found that her husband had given up his life, she was overcome with grief. She was carrying his child. She resolved to follow her husband — but first, so that the child would live, she placed her baby in the care of a great pippala tree, the sacred fig, and asked the trees and the plants of the forest to look after him. Then she entered the fire.", "దధీచి శరీరం దానం చేశాక ఆయన కుటుంబానికి ఏం జరిగిందో బ్రహ్మ పురాణం గోదావరి గురించిన భాగంలో చెబుతుంది. దేవతలు వచ్చినప్పుడు ఆయన భార్య అక్కడ లేదు. తిరిగి వచ్చి భర్త ప్రాణం విడిచాడని తెలిసి దుఃఖంలో మునిగిపోయింది. ఆమె ఆయన బిడ్డను మోస్తోంది. భర్తను అనుసరించాలని నిశ్చయించుకుంది — కానీ ముందు, బిడ్డ బతకాలని, తన పసివాణ్ణి ఒక పెద్ద రావిచెట్టు సంరక్షణలో ఉంచి, అడవిలోని చెట్లనూ మొక్కలనూ అతన్ని చూసుకోమని వేడుకుంది. తర్వాత అగ్నిలో ప్రవేశించింది."],
   ["p", "The trees heard her. They sheltered the child, and the Moon, lord of plants, fed him with nectar. Because he grew up under the pippala, he was called {pippalada|Pippalāda} — “the one who ate pippala fruits.”", "చెట్లు ఆమె మాట విన్నాయి. బిడ్డకు ఆశ్రయమిచ్చాయి; ఓషధీశుడైన చంద్రుడు అమృతంతో అతన్ని పోషించాడు. రావిచెట్టు కింద పెరిగాడు కాబట్టి అతనికి {pippalada|పిప్పలాదుడు} — “రావి పండ్లు తిన్నవాడు” — అని పేరు వచ్చింది."]
  ],
  [
   ["h", "A Child's Anger", "ఒక బిడ్డ కోపం"],
   ["p", "When Pippalāda grew up, he asked the trees who his parents were and why he was alone. They told him everything. The boy was filled with anger at the gods who had taken his father's life for their own sake. He did fierce tapas to {shiva|Śiva} and wanted to destroy the gods in return. But in the end his anger was calmed — the Purāṇa tells that he was shown his father and mother shining in heaven, at peace and honoured, and his heart grew quiet. He forgave the gods.", "పిప్పలాదుడు పెద్దయ్యాక తన తల్లిదండ్రులు ఎవరనీ, తాను ఎందుకు ఒంటరిగా ఉన్నాననీ చెట్లను అడిగాడు. అవి అంతా చెప్పాయి. తమ స్వార్థం కోసం తండ్రి ప్రాణం తీసుకున్న దేవతలపై బాలుడు కోపంతో నిండిపోయాడు. {shiva|శివునికై} ఘోర తపస్సు చేసి ప్రతీకారంగా దేవతలను నాశనం చేయాలనుకున్నాడు. కానీ చివరికి అతని కోపం చల్లారింది — స్వర్గంలో ప్రశాంతంగా, గౌరవంగా ప్రకాశిస్తున్న తన తల్లిదండ్రులను అతనికి చూపించారనీ, అతని హృదయం శాంతించిందనీ పురాణం చెబుతుంది. అతను దేవతలను క్షమించాడు."],
   ["p", "Later tellings add another story: that Pippalāda blamed the planet Śani (Saturn) for his family's misfortune, and struck him so that Śani has walked with a limp ever since — and that Śani promised not to trouble young children. This is a later folk telling.", "తరువాతి కథనాలు మరో కథ జోడిస్తాయి: తన కుటుంబ దురదృష్టానికి శని గ్రహమే కారణమని పిప్పలాదుడు అతన్ని కొట్టాడనీ, అప్పటి నుండి శని కుంటుతూ నడుస్తాడనీ, చిన్నపిల్లలను బాధించనని శని మాట ఇచ్చాడనీ. ఇది తరువాతి జానపద కథనం."]
  ],
  [
   ["h", "The Teacher of Six Questions", "ఆరు ప్రశ్నల గురువు"],
   ["p", "The Praśna Upaniṣad — the “Upaniṣad of Questions” — opens with six seekers who come to a sage named Pippalāda, fuel in hand, to ask about Brahman. He tells them: “Live here with me for one more year, in tapas, self-control and faith. Then ask whatever you wish.” After the year, each asks one question — where do creatures come from? what holds up the body? where does breath come from? what sleeps and what wakes? what is Om? and who is the Person of sixteen parts? — and Pippalāda answers each. Tradition sees this teacher as Dadhīci's son.", "ప్రశ్నోపనిషత్తు — “ప్రశ్నల ఉపనిషత్తు” — బ్రహ్మ గురించి అడగడానికి సమిధలు పట్టుకుని పిప్పలాదుడు అనే ముని దగ్గరికి వచ్చిన ఆరుగురు జిజ్ఞాసువులతో మొదలవుతుంది. ఆయన వారితో అంటాడు: “తపస్సు, ఇంద్రియనిగ్రహం, శ్రద్ధతో ఇంకో ఏడాది నా దగ్గర ఉండండి. తర్వాత ఏదైనా అడగండి.” ఏడాది తర్వాత ఒక్కొక్కరూ ఒక్కో ప్రశ్న అడుగుతారు — ప్రాణులు ఎక్కడి నుండి వస్తాయి? శరీరాన్ని ఏది నిలుపుతుంది? ప్రాణం ఎక్కడి నుండి వస్తుంది? ఏది నిద్రిస్తుంది, ఏది మేల్కొంటుంది? ఓం అంటే ఏమిటి? పదహారు కళల పురుషుడు ఎవరు? — పిప్పలాదుడు ప్రతి ప్రశ్నకూ జవాబిస్తాడు. ఈ గురువును సంప్రదాయం దధీచి కుమారునిగా చూస్తుంది."],
   ["dyk", "🌳", "A boy raised by trees, whose first feeling was anger, became the patient teacher who made his students wait a year before he would answer. Anger, tamed, can become wisdom.", "చెట్లు పెంచిన బాలుడు, మొదట కోపంతో రగిలినవాడు, జవాబివ్వడానికి ముందు శిష్యులను ఏడాది వేచి ఉంచే ఓర్పు గల గురువయ్యాడు. అదుపులోకి వచ్చిన కోపం జ్ఞానంగా మారగలదు."],
   ["src", "Brahma Purāṇa, Gautamī Māhātmya (the Pippala tīrtha: Dadhīci's wife leaves her child to the pippala tree and enters the fire; the Moon feeds him; Pippalāda's anger and its calming). Praśna Upaniṣad 1.1–1.2 and its six questions (the teacher Pippalāda; his identity with Dadhīci's son is traditional). The story of Pippalāda and Śani is a later folk telling.", "బ్రహ్మ పురాణం, గౌతమీ మాహాత్మ్యం (పిప్పల తీర్థం: దధీచి భార్య బిడ్డను రావిచెట్టుకు అప్పగించి అగ్నిలో ప్రవేశించడం; చంద్రుడు పోషించడం; పిప్పలాదుని కోపం, శాంతి). ప్రశ్నోపనిషత్తు 1.1–1.2, ఆరు ప్రశ్నలు (గురువు పిప్పలాదుడు; ఆయన దధీచి కుమారుడనేది సంప్రదాయం). పిప్పలాదుడు, శని కథ తరువాతి జానపద కథనం."]
  ]
 ],
 remember: [
  ["{dadhichi|Dadhīci}'s widow left their baby under a pippala tree; the trees and the Moon raised him.", "దధీచి భార్య బిడ్డను రావిచెట్టు కింద ఉంచింది; చెట్లు, చంద్రుడు అతన్ని పెంచారు."],
  ["{pippalada|Pippalāda} grew angry at the gods, but his anger was calmed and he forgave them.", "{pippalada|పిప్పలాదుడు} దేవతలపై కోపగించాడు; కానీ కోపం చల్లారి క్షమించాడు."],
  ["Tradition sees him as the teacher of the Praśna Upaniṣad's six questions.", "ప్రశ్నోపనిషత్తులోని ఆరు ప్రశ్నల గురువుగా సంప్రదాయం ఆయనను చూస్తుంది."]
 ],
 think: ["Pippalāda made his students wait a whole year before answering their questions. Why might a teacher ask students to wait?", "ప్రశ్నలకు జవాబివ్వడానికి ముందు పిప్పలాదుడు శిష్యులను ఏడాదంతా వేచి ఉంచాడు. గురువు శిష్యులను ఎందుకు ఆగమనవచ్చు?"]
},
{
 id: "dd-7", sage: "dadhichi", n: 7, order: 1507, date: "2026-10-23",
 title: "The Greatest Gift — What Dadhīci Leaves Us", titleTe: "గొప్ప దానం — దధీచి మనకిచ్చేది",
 src: "Living tradition",
 who: ["dadhichi", "indra"],
 pages: [
  [
   ["p", "Of all the sages in this book, Dadhīci is remembered above all for one thing: *deha-dāna*, the gift of his own body. In Sanskrit and in many Indian languages, to call someone “a Dadhīci” is to say that they gave everything they had for others.", "ఈ గ్రంథంలోని మునులందరిలో దధీచి ముఖ్యంగా ఒక్క విషయానికే గుర్తుండిపోతాడు: *దేహదానం* — తన శరీరాన్నే దానం చేయడం. సంస్కృతంలో, ఎన్నో భారతీయ భాషల్లో ఎవరినైనా “దధీచి” అనడం అంటే — తమకున్నదంతా ఇతరుల కోసం ఇచ్చేశారని చెప్పడం."],
   ["p", "Near Naimiṣāraṇya, in Uttar Pradesh, the town of Misrikh keeps a tank called Dadhīci Kuṇḍ. Local tradition says that before he gave up his body, the sage wished to bathe in every holy river, and the gods brought the waters of all the tīrthas to this one place for him.", "ఉత్తరప్రదేశ్‌లో నైమిశారణ్యం దగ్గర మిస్రిఖ్ పట్టణంలో దధీచి కుండం అనే కోనేరు ఉంది. శరీరం విడిచే ముందు ముని అన్ని పుణ్యనదుల్లో స్నానం చేయాలనుకున్నాడనీ, దేవతలు అన్ని తీర్థాల జలాలను ఆయన కోసం ఈ ఒక్కచోటికే తెచ్చారనీ స్థానిక సంప్రదాయం చెబుతుంది."]
  ],
  [
   ["h", "On a Soldier's Medal", "సైనికుని పతకంపై"],
   ["p", "India's highest award for bravery in war, the Param Vir Chakra, carries on its face four images of Indra's vajra — chosen in honour of Dadhīci, whose self-sacrifice made the vajra possible. It is given to those who show the greatest courage and self-sacrifice in the face of the enemy, very often at the cost of their own lives.", "యుద్ధంలో శౌర్యానికి భారతదేశపు అత్యున్నత పురస్కారమైన పరమవీర చక్రంపై ఇంద్రుని వజ్రాయుధపు నాలుగు చిత్రాలు ఉంటాయి — ఆత్మత్యాగంతో వజ్రాన్ని సాధ్యం చేసిన దధీచి గౌరవార్థం ఎంచుకున్నవి. శత్రువు ఎదుట అత్యున్నత ధైర్యాన్నీ ఆత్మత్యాగాన్నీ చూపినవారికి — చాలాసార్లు ప్రాణాలు అర్పించినవారికి — దాన్ని ప్రదానం చేస్తారు."],
   ["p", "In modern India, too, people who pledge to donate their organs or their bodies after death to save lives or help medical students learn have often taken Dadhīci's name for their societies and campaigns — because he gave his body so that others might live.", "ఆధునిక భారతదేశంలో కూడా, ప్రాణాలు కాపాడడానికి లేదా వైద్య విద్యార్థుల చదువుకు సహాయపడడానికి మరణానంతరం అవయవాలనూ శరీరాన్నీ దానం చేస్తామని ప్రతిజ్ఞ చేసేవారు తరచూ తమ సంస్థలకూ ఉద్యమాలకూ దధీచి పేరే పెట్టుకున్నారు — ఇతరులు బతకాలని ఆయన తన శరీరాన్ని ఇచ్చాడు కాబట్టి."]
  ],
  [
   ["h", "A Life of Giving", "దానమయ జీవితం"],
   ["p", "Look back over his life. He gave knowledge, risking his head. He gave his voice for what was right, in a hall full of silent gods. He gave his body to save the world. Even his son, raised by trees, became a giver of answers. Dadhīci's story asks each of us the question he answered so simply: what is this life for, if not to be of use to others?", "ఆయన జీవితాన్ని వెనక్కి చూడండి. తల పణంగా పెట్టి జ్ఞానాన్ని ఇచ్చాడు. మౌనంగా ఉన్న దేవతలతో నిండిన సభలో సత్యం కోసం తన గొంతునిచ్చాడు. లోకాన్ని కాపాడడానికి శరీరాన్నిచ్చాడు. చెట్లు పెంచిన ఆయన కుమారుడు కూడా జవాబులు ఇచ్చే గురువయ్యాడు. ఆయన ఎంతో సరళంగా జవాబిచ్చిన ప్రశ్నను దధీచి కథ మనలో ప్రతి ఒక్కరినీ అడుగుతుంది: ఇతరులకు ఉపయోగపడకపోతే ఈ జీవితం దేనికోసం?"],
   ["dyk", "🎖️", "The Param Vir Chakra was designed in 1950 by Savitri Khanolkar, who chose the vajra of Dadhīci for its face.", "పరమవీర చక్రాన్ని 1950లో సావిత్రి ఖానోల్కర్ రూపొందించారు; దాని ముఖంపై దధీచి వజ్రాన్ని ఆమె ఎంచుకున్నారు."],
   ["src", "Living tradition: the Dadhīci Kuṇḍ at Misrikh near Naimiṣāraṇya (local tradition); the Param Vir Chakra and its vajra design (1950); body- and organ-donation societies named after Dadhīci.", "సజీవ సంప్రదాయం: నైమిశారణ్యం దగ్గర మిస్రిఖ్‌లోని దధీచి కుండం (స్థానిక సంప్రదాయం); పరమవీర చక్రం, దాని వజ్ర రూపకల్పన (1950); దధీచి పేరుతో ఉన్న దేహ, అవయవ దాన సంస్థలు."]
  ]
 ],
 remember: [
  ["{dadhichi|Dadhīci} is remembered above all for deha-dāna, the gift of his body.", "{dadhichi|దధీచి} ముఖ్యంగా దేహదానానికే గుర్తుండిపోతాడు."],
  ["India's Param Vir Chakra bears {indra|Indra}'s vajra in his honour.", "ఆయన గౌరవార్థం భారత పరమవీర చక్రంపై {indra|ఇంద్రుని} వజ్రం ఉంటుంది."],
  ["Organ- and body-donation societies in India have taken his name.", "భారతదేశంలో అవయవ, దేహ దాన సంస్థలు ఆయన పేరు పెట్టుకున్నాయి."]
 ],
 think: ["Dadhīci asked: “What is this life for, if not to be of use to others?” How would you answer him?", "“ఇతరులకు ఉపయోగపడకపోతే ఈ జీవితం దేనికోసం?” అని దధీచి అడిగాడు. మీరు ఆయనకు ఏం జవాబిస్తారు?"]
}
]);
