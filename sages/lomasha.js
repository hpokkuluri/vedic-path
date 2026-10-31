// Great Sages — Lomaśa. Retold by Hari Pokkuluri.
// Told from the Mahābhārata (Vana Parva: Indralokābhigamana and Tīrthayātrā sections),
// the Brahmavaivarta Purāṇa, the Skanda Purāṇa and Tulasīdāsa's Rāmacaritamānasa, in fresh original wording.
// Block format: see the top of ramayana.js and sages.js.
window.SAGE_PLAN = Object.assign(window.SAGE_PLAN || {}, { lomasha: [
  ["The Hairy Sage", "Mahābhārata, Vana Parva · Brahmavaivarta Purāṇa · Skanda Purāṇa"],
  ["A Sage in Indra's Hall", "Mahābhārata, Vana Parva (Indralokābhigamana)"],
  ["The Message at Kāmyaka", "Mahābhārata, Vana Parva (Indralokābhigamana, Tīrthayātrā)"],
  ["“Why Do the Wicked Prosper?” — the Road Begins", "Mahābhārata, Vana Parva (Tīrthayātrā)"],
  ["The Eastern Road — Paraśurāma, Ṛṣyaśṛṅga and the Silent Mountain", "Mahābhārata, Vana Parva (Tīrthayātrā)"],
  ["The Southern Shore — the Vṛṣṇis at Prabhāsa and Cyavana on the Narmadā", "Mahābhārata, Vana Parva (Tīrthayātrā)"],
  ["Fathers and Sons — Māndhātā, Somaka and Jantu", "Mahābhārata, Vana Parva (Tīrthayātrā)"],
  ["The Hawk and the Dove — and Stories by the Rivers of the North", "Mahābhārata, Vana Parva (Tīrthayātrā)"],
  ["Into the Himālaya — Until Arjuna Comes Home", "Mahābhārata, Vana Parva (Tīrthayātrā, Yakṣayuddha)"],
  ["One Hair for Each Brahmā — Indra's Palace", "Brahmavaivarta Purāṇa, Kṛṣṇajanma Khaṇḍa (a later telling)"],
  ["The Curse That Made a Crow — Kākabhuśuṇḍi", "Tulasīdāsa, Rāmacaritamānasa, Uttara Kāṇḍa (a later telling)"],
  ["What Lomaśa Leaves Us", "Mahābhārata · Purāṇas · later tradition"]
] });
window.RMY_WHO = Object.assign({
  "nakula": { "av": "🐎", "en": "Nakula", "te": "నకులుడు", "d": "The fourth Pāṇḍava, son of Mādrī by the Aśvins; famed for his beauty and his skill with horses.", "dt": "నాలుగవ పాండవుడు, అశ్వినీదేవతల వల్ల మాద్రికి పుట్టినవాడు; అందానికీ గుర్రాల విద్యకూ పేరుపొందినవాడు." },
  "sahadeva": { "av": "⭐", "en": "Sahadeva", "te": "సహదేవుడు", "d": "The youngest Pāṇḍava, Nakula's twin, wise and learned in the stars.", "dt": "చివరి పాండవుడు, నకులుని కవల తమ్ముడు; జ్ఞాని, జ్యోతిష్యం తెలిసినవాడు." },
  "ghatotkaca": { "av": "🦣", "en": "Ghaṭotkaca", "te": "ఘటోత్కచుడు", "d": "Bhīma's son by the rākṣasī Hiḍimbā; huge and loyal, he came whenever his father called.", "dt": "హిడింబి అనే రాక్షసికి భీమునికి పుట్టిన కొడుకు; పెద్ద శరీరం, అపారమైన భక్తి — తండ్రి తలచుకోగానే వచ్చేవాడు." },
  "satyaki": { "av": "🗡️", "en": "Sātyaki", "te": "సాత్యకి", "d": "A Vṛṣṇi hero, Kṛṣṇa's kinsman and Arjuna's pupil in archery, fiercely loyal to the Pāṇḍavas.", "dt": "వృష్ణి వంశ వీరుడు, శ్రీకృష్ణుని బంధువు, అర్జునుని శిష్యుడు; పాండవుల పట్ల అపారమైన విధేయత కలవాడు." },
  "ushinara": { "av": "🕊️", "en": "Uśīnara", "te": "ఉశీనరుడు", "d": "A righteous king who gave his own flesh to save a dove that had come to him for shelter. Other tellings give the deed to his son Śibi.", "dt": "శరణు కోరి వచ్చిన పావురాన్ని కాపాడడానికి తన మాంసాన్నే ఇచ్చిన ధర్మాత్ముడైన రాజు. కొన్ని కథనాలు ఈ పనిని ఆయన కొడుకు శిబికి ఆపాదిస్తాయి." },
  "shibi": { "av": "⚖️", "en": "Śibi", "te": "శిబి చక్రవర్తి", "d": "Son of Uśīnara, remembered all over India for weighing his own flesh against a dove.", "dt": "ఉశీనరుని కుమారుడు; పావురంతో సమానంగా తన మాంసాన్ని తూచి ఇచ్చిన రాజుగా దేశమంతటా గుర్తుండిపోయినవాడు." },
  "somaka": { "av": "👑", "en": "Somaka", "te": "సోమకుడు", "d": "A king with a hundred wives and only one son, who followed a priest's terrible advice to get more sons.", "dt": "వంద మంది భార్యలు ఉన్నా ఒక్కడే కొడుకు ఉన్న రాజు; ఎక్కువ మంది కొడుకుల కోసం పురోహితుడి భయంకరమైన సలహా పాటించినవాడు." },
  "jantu": { "av": "👶", "en": "Jantu", "te": "జంతువు (రాకుమారుడు)", "d": "King Somaka's only son, offered in a sacrifice and born again as the eldest of a hundred brothers.", "dt": "సోమక మహారాజు ఏకైక పుత్రుడు; యజ్ఞంలో బలి అయి, వంద మంది సోదరులలో పెద్దవాడిగా మళ్ళీ పుట్టినవాడు." },
  "yuvanashva": { "av": "👑", "en": "Yuvanāśva", "te": "యువనాశ్వుడు", "d": "An Ikṣvāku king who by mistake drank the blessed water meant for his queen, and so bore Māndhātā himself.", "dt": "రాణి కోసం మంత్రించిన నీటిని పొరపాటున తానే తాగి, మాంధాతను తానే కన్న ఇక్ష్వాకు రాజు." },
  "gaya": { "av": "🌳", "en": "Gaya", "te": "గయ మహారాజు", "d": "A royal sage of old, son of Amūrtarayas, famed for his many great sacrifices; the holy place Gayā keeps his name.", "dt": "అమూర్తరయసుని కుమారుడైన ప్రాచీన రాజర్షి; ఎన్నో గొప్ప యజ్ఞాలు చేసినవాడు. గయ క్షేత్రానికి ఆయన పేరే." },
  "vishvakarma": { "av": "🛠️", "en": "Viśvakarmā", "te": "విశ్వకర్మ", "d": "The architect of the gods, who builds their palaces, cities and chariots.", "dt": "దేవశిల్పి; దేవతల భవనాలు, నగరాలు, రథాలు నిర్మించేవాడు." },
  "kakabhushundi": { "av": "🐦‍⬛", "en": "Kākabhuśuṇḍi", "te": "కాకభుశుండి", "d": "In Tulasīdāsa's Rāmacaritamānasa, a great devotee of Rāma who lives as a crow on Mount Nīla and tells the Rāma story to Garuḍa. Lomaśa's curse made him a crow.", "dt": "తులసీదాసు రామచరితమానస్ ప్రకారం నీలగిరి మీద కాకి రూపంలో ఉండి గరుడునికి రామకథ చెప్పిన మహాభక్తుడు. లోమశుని శాపం వల్లే కాకి అయ్యాడు." },
  "nivatakavacas": { "av": "🛡️", "en": "Nivātakavacas", "te": "నివాతకవచులు", "d": "A race of dānavas living under the sea who troubled the gods; Arjuna destroyed them as his gift to Indra.", "dt": "సముద్రం అడుగున ఉండి దేవతలను బాధించిన దానవ జాతి; ఇంద్రునికి గురుదక్షిణగా అర్జునుడు వారిని నాశనం చేశాడు." },
  "jatasura": { "av": "👹", "en": "Jaṭāsura", "te": "జటాసురుడు", "d": "A rākṣasa who lived among the Pāṇḍavas disguised as a brāhmaṇa and tried to carry off Yudhiṣṭhira, the twins and Draupadī; Bhīma killed him.", "dt": "బ్రాహ్మణ వేషంలో పాండవులతో ఉండి ధర్మరాజును, కవలలను, ద్రౌపదిని ఎత్తుకుపోవాలని చూసిన రాక్షసుడు; భీముడు అతణ్ణి చంపాడు." },
  "citrasena": { "av": "🎶", "en": "Citrasena", "te": "చిత్రసేనుడు", "d": "King of the gandharvas, who taught Arjuna music and dance in Indra's heaven.", "dt": "గంధర్వ రాజు; ఇంద్రలోకంలో అర్జునునికి సంగీతం, నాట్యం నేర్పినవాడు." }
}, window.RMY_WHO || {});
window.SAGE_CHAPTERS = (window.SAGE_CHAPTERS || []).concat([
{
 id: "lm-1", sage: "lomasha", n: 1, order: 2901, date: "2026-10-31",
 title: "The Hairy Sage", titleTe: "రోమాలతో నిండిన మహర్షి",
 src: "Mahābhārata, Vana Parva · Brahmavaivarta Purāṇa · Skanda Purāṇa",
 who: ["lomasha", "indra", "arjuna", "yudhishthira", "agastya", "rishyashringa", "cyavana"],
 pages: [
  [
   ["p", "Some sages are remembered for one great deed — drinking the ocean, giving away their bones, bringing a river down from the sky. {lomasha|Lomaśa} is remembered for something gentler. He was a guide. For a long and dangerous journey, he walked beside five exiled brothers and their wife, and at every holy river and mountain he stopped and told them the story of the place.", "కొంతమంది మహర్షులు ఒకే ఒక గొప్ప పని వల్ల గుర్తుండిపోతారు — సముద్రాన్ని తాగడం, తమ ఎముకలను దానం చేయడం, ఆకాశం నుండి నదిని దించడం. {lomasha|లోమశ మహర్షి} అంతకంటే మృదువైన ఒక పని వల్ల గుర్తుండిపోయాడు. ఆయన ఒక దారిచూపేవాడు. అడవిలో ప్రవాసంలో ఉన్న ఐదుగురు అన్నదమ్ములతోనూ వారి భార్యతోనూ ఒక పెద్ద, ప్రమాదకరమైన ప్రయాణమంతా కలిసి నడిచి, ప్రతి పుణ్యనది దగ్గర, ప్రతి కొండ దగ్గర ఆగి, ఆ చోటి కథ చెప్పాడు."],
   ["p", "Because of him, the Mahābhārata's Book of the Forest holds a whole library of older tales: {agastya|Agastya} and the ocean, {rishyashringa|Ṛṣyaśṛṅga} and the rain, {cyavana|Cyavana} and the Aśvins, the descent of Gaṅgā, the king who weighed his own flesh against a dove. Many of the stories in this app's other chapters were first heard, in the epic, from Lomaśa's lips.", "ఆయన వల్లే మహాభారతంలోని అరణ్యపర్వంలో పాత కథల పెద్ద భాండాగారమే ఉంది: {agastya|అగస్త్యుడు} సముద్రాన్ని తాగిన కథ, {rishyashringa|ఋష్యశృంగుడు} వర్షం తెచ్చిన కథ, {cyavana|చ్యవనుడు} అశ్వినీదేవతల కథ, గంగావతరణం, పావురం కోసం తన మాంసాన్ని తూచి ఇచ్చిన రాజు కథ. ఈ యాప్‌లోని ఇతర అధ్యాయాలలో ఉన్న ఎన్నో కథలను మహాభారతంలో మొదట చెప్పింది లోమశుడే."]
  ],
  [
   ["h", "A name that means “hairy”", "“రోమాలు కలవాడు” అనే పేరు"],
   ["p", "*Loma* or *roma* is the Sanskrit word for the fine hair of the body, and *Lomaśa* means “the one covered with hair”. The name is all the epic needs to paint him: a very old, very shaggy sage, light-footed and tireless, who goes wherever he likes in the three worlds — even into {indra|Indra}'s heaven.", "సంస్కృతంలో శరీరం మీది సన్నని వెంట్రుకలను *లోమ* లేదా *రోమ* అంటారు; *లోమశుడు* అంటే “ఒంటి నిండా రోమాలు ఉన్నవాడు”. ఆయనను మనకు చూపించడానికి మహాభారతానికి ఆ పేరు చాలు: చాలా వృద్ధుడు, ఒళ్ళంతా రోమాలు, కానీ అలసట తెలియనివాడు, తేలిగ్గా నడిచేవాడు — మూడు లోకాలలో ఎక్కడికి కావాలంటే అక్కడికి వెళ్ళగలడు, {indra|ఇంద్రుని} స్వర్గానికి కూడా."],
   ["p", "Here is something unusual: the old books tell us almost nothing about his birth. We are not told who his father was, or where he grew up. Lomaśa simply walks into the story already ancient, already wise, already a friend of the gods. Later Purāṇas explain why he seems so old: he lives, they say, for an unimaginably long time — a story you will read in chapter ten.", "ఇక్కడ ఒక విశేషం ఉంది: ప్రాచీన గ్రంథాలు ఆయన జననం గురించి దాదాపు ఏమీ చెప్పవు. ఆయన తండ్రి ఎవరో, ఎక్కడ పెరిగాడో మనకు తెలియదు. లోమశుడు కథలోకి అడుగుపెట్టేటప్పటికే చాలా పెద్దవాడు, జ్ఞాని, దేవతలకు స్నేహితుడు. ఆయన ఎందుకు అంత వృద్ధుడిలా కనిపిస్తాడో తర్వాతి పురాణాలు చెబుతాయి: ఊహకందనంత కాలం ఆయన బ్రతుకుతాడట — ఆ కథ పదవ అధ్యాయంలో చదువుతారు."]
  ],
  [
   ["h", "The shape of his life", "ఆయన జీవిత కథ — ఒక చూపులో"],
   ["p", "The epic's story of Lomaśa runs like this. While {arjuna|Arjuna} is in heaven gaining weapons, Lomaśa visits Indra's hall and is sent down to earth with a message for {yudhishthira|Yudhiṣṭhira}. He finds the Pāṇḍavas in the Kāmyaka forest, comforts them with news of Arjuna, and then leads them on a great pilgrimage — east to the sea, down the southern coast, west to Prabhāsa, north across the rivers and up into the Himālaya, until Arjuna comes back to them.", "మహాభారతంలో లోమశుని కథ ఇలా సాగుతుంది. {arjuna|అర్జునుడు} అస్త్రాలు సంపాదించడానికి స్వర్గంలో ఉండగా, లోమశుడు ఇంద్రుని సభకు వెళ్తాడు; {yudhishthira|ధర్మరాజుకు} ఒక సందేశం తీసుకెళ్ళమని ఇంద్రుడు ఆయనను భూమికి పంపిస్తాడు. కామ్యకవనంలో పాండవులను కలిసి, అర్జునుని వార్తతో వారిని ఊరడించి, ఒక గొప్ప తీర్థయాత్రకు తీసుకెళ్తాడు — తూర్పున సముద్రం దాకా, దక్షిణ తీరం వెంబడి, పడమట ప్రభాసం దాకా, ఉత్తరాన నదులు దాటి హిమాలయాల్లోకి — అర్జునుడు తిరిగి వచ్చేదాకా."],
   ["p", "Then the later books add their own Lomaśa. The Brahmavaivarta Purāṇa makes him the sage who humbles Indra's pride. Tulasīdāsa's Hindi Rāmāyaṇa makes him the teacher whose curse turns a proud student into the crow-devotee Kākabhuśuṇḍi. Parts of the Skanda Purāṇa are spoken by him. We will follow the epic first, and then these later tellings, marked as such.", "ఆ తర్వాతి గ్రంథాలు తమదైన లోమశుణ్ణి చూపిస్తాయి. బ్రహ్మవైవర్త పురాణంలో ఆయన ఇంద్రుని గర్వం అణచిన ముని. తులసీదాసు హిందీ రామాయణంలో — ఒక గర్విష్ఠి శిష్యుణ్ణి శపించి కాకభుశుండి అనే కాకి-భక్తుడిగా మార్చిన గురువు. స్కాంద పురాణంలోని కొన్ని భాగాలు ఆయన నోట చెప్పబడ్డాయి. ముందు మహాభారతాన్ని అనుసరిద్దాం; ఆ తర్వాత ఈ తర్వాతి కాలపు కథనాలను — అవి తర్వాతివని చెబుతూనే — చూద్దాం."],
   ["dyk", "🪨", "In the Barābar hills of Bihar there is a cave cut into solid granite in the days of the Maurya emperors, with a beautifully carved doorway. Local people have long called it the “Lomas Ṛṣi cave”. The name was given later; the cave was not carved for him.", "బీహార్‌లోని బరాబర్ కొండలలో మౌర్య చక్రవర్తుల కాలంలో గట్టి గ్రానైట్ రాతిని తొలిచిన ఒక గుహ ఉంది; దాని ద్వారం చాలా అందంగా చెక్కబడింది. అక్కడి ప్రజలు దానిని చాలా కాలంగా “లోమశ ఋషి గుహ” అని పిలుస్తారు. ఆ పేరు తర్వాత వచ్చింది; గుహను ఆయన కోసం తొలవలేదు."],
   ["src", "Mahābhārata, Vana Parva (Lomaśa in the Indralokābhigamana and Tīrthayātrā sections). Brahmavaivarta Purāṇa, Kṛṣṇajanma Khaṇḍa (Indra's pride). Skanda Purāṇa, Māheśvara Khaṇḍa (Lomaśa as a narrator). Tulasīdāsa, Rāmacaritamānasa, Uttara Kāṇḍa (Kākabhuśuṇḍi).", "మహాభారతం, అరణ్య పర్వం (ఇంద్రలోకాభిగమన పర్వం, తీర్థయాత్రా పర్వాలలో లోమశుడు). బ్రహ్మవైవర్త పురాణం, కృష్ణజన్మ ఖండం (ఇంద్రుని గర్వం). స్కాంద పురాణం, మాహేశ్వర ఖండం (కథకుడిగా లోమశుడు). తులసీదాసు, రామచరితమానస్, ఉత్తరకాండ (కాకభుశుండి)."]
  ]
 ],
 remember: [
  ["{lomasha|Lomaśa} means “the hairy one” — a very old, tireless sage.", "{lomasha|లోమశుడు} అంటే “రోమాలు ఉన్నవాడు” — చాలా వృద్ధుడు, అలసట ఎరుగని ముని."],
  ["The old books tell almost nothing of his birth; he enters the story already ancient.", "ప్రాచీన గ్రంథాలు ఆయన జననం గురించి దాదాపు ఏమీ చెప్పవు; కథలోకి వచ్చేటప్పటికే ఆయన చాలా పెద్దవాడు."],
  ["In the Mahābhārata he guides the Pāṇḍavas on their pilgrimage and tells the stories of the holy places.", "మహాభారతంలో పాండవులకు తీర్థయాత్రలో దారి చూపి, పుణ్యక్షేత్రాల కథలు చెబుతాడు."]
 ],
 think: ["Lomaśa is remembered not for a miracle but for telling stories at the right place and time. Why might that be just as important?", "లోమశుడు ఒక అద్భుతం వల్ల కాదు, సరైన చోట సరైన సమయంలో కథలు చెప్పడం వల్ల గుర్తుండిపోయాడు. అది కూడా అంతే గొప్ప పని ఎందుకు కావచ్చు?"]
},
{
 id: "lm-2", sage: "lomasha", n: 2, order: 2902, date: "2026-10-31",
 title: "A Sage in Indra's Hall", titleTe: "ఇంద్రుని సభలో ఒక ముని",
 src: "Mahābhārata, Vana Parva (Indralokābhigamana)",
 who: ["lomasha", "indra", "arjuna", "krishna", "naranarayana", "nivatakavacas", "citrasena", "shiva", "karna", "yudhishthira"],
 pages: [
  [
   ["p", "The Pāṇḍavas had lost everything at the game of dice and were living in the forest. {arjuna|Arjuna} had gone north to win divine weapons. He had fought {shiva|Śiva} disguised as a hunter and received the Pāśupata weapon, and then {indra|Indra}, his own father, had brought him up to heaven in a chariot.", "జూదంలో సర్వస్వం పోగొట్టుకుని పాండవులు అడవిలో ఉంటున్నారు. దివ్యాస్త్రాలు సంపాదించడానికి {arjuna|అర్జునుడు} ఉత్తర దిక్కుకు వెళ్ళాడు. కిరాతుని వేషంలో వచ్చిన {shiva|శివునితో} యుద్ధం చేసి పాశుపతాస్త్రం పొందాడు; తర్వాత తన తండ్రి అయిన {indra|ఇంద్రుడే} రథం పంపి అర్జునుణ్ణి స్వర్గానికి తీసుకెళ్ళాడు."],
   ["p", "There Arjuna learned the weapons of the gods and, from the gandharva king {citrasena|Citrasena}, music and dance. Five years went by. And one day, the epic says, the great sage {lomasha|Lomaśa}, wandering as he pleased, came to Indra's hall to see the king of the gods.", "అక్కడ అర్జునుడు దేవతల అస్త్రాలు నేర్చుకున్నాడు; గంధర్వ రాజు {citrasena|చిత్రసేనుని} దగ్గర సంగీతం, నాట్యం కూడా నేర్చుకున్నాడు. ఐదు సంవత్సరాలు గడిచాయి. ఒక రోజు — మహాభారతం చెబుతుంది — తనకు ఇష్టం వచ్చినట్లు లోకాలు తిరిగే మహర్షి {lomasha|లోమశుడు} దేవేంద్రుని దర్శించడానికి ఇంద్రసభకు వచ్చాడు."]
  ],
  [
   ["h", "A man on half of Indra's throne", "ఇంద్ర సింహాసనంలో సగం మీద ఒక మానవుడు"],
   ["p", "Lomaśa bowed to Indra and then stopped in surprise. Sitting beside the king of the gods, on half of Indra's own throne, was a human being — a kṣatriya, a man of earth. What had this man done, the sage wondered, to win a seat that even the gods could not hope for?", "లోమశుడు ఇంద్రునికి నమస్కరించి, ఆశ్చర్యంతో అలాగే నిలబడిపోయాడు. దేవరాజు పక్కన, ఇంద్రుని స్వంత సింహాసనంలో సగం మీద ఒక మనిషి కూర్చుని ఉన్నాడు — ఒక క్షత్రియుడు, భూలోకవాసి. దేవతలు కూడా ఆశించలేని ఆసనం ఈ మనిషికి ఏ పుణ్యం వల్ల దక్కింది అని ముని ఆలోచనలో పడ్డాడు."],
   ["p", "Indra read his thought and smiled. “This is my son Arjuna, born to Kuntī,” he said. “He is no ordinary man. He and {krishna|Kṛṣṇa} are the ancient sages {naranarayana|Nara and Nārāyaṇa}, born on earth for the good of the world. He has come here for weapons, and now he holds them all.”", "ఇంద్రుడు ఆయన మనసులో మాట గ్రహించి నవ్వాడు. “ఇతడు కుంతికి పుట్టిన నా కొడుకు అర్జునుడు,” అన్నాడు. “ఇతడు సామాన్య మానవుడు కాదు. ఇతడూ {krishna|శ్రీకృష్ణుడూ} పురాతన ఋషులైన {naranarayana|నరనారాయణులు}; లోకహితం కోసం భూమి మీద పుట్టారు. అస్త్రాల కోసం ఇతడు ఇక్కడికి వచ్చాడు; ఇప్పుడు అవన్నీ ఇతని చేతిలో ఉన్నాయి.”"]
  ],
  [
   ["h", "Indra's message", "ఇంద్రుని సందేశం"],
   ["p", "Then Indra gave Lomaśa a task. “Go down to earth, to the Kāmyaka forest, and see {yudhishthira|Yudhiṣṭhira}. Tell him not to worry about his brother. Arjuna is well; he has learned every weapon, and the dance and music of the gandharvas too. He will return soon — but first he must do a service for the gods.”", "అప్పుడు ఇంద్రుడు లోమశునికి ఒక పని అప్పగించాడు. “భూలోకానికి, కామ్యకవనానికి వెళ్ళి {yudhishthira|ధర్మరాజును} కలవండి. తమ్ముడి గురించి దిగులుపడవద్దని చెప్పండి. అర్జునుడు క్షేమంగా ఉన్నాడు; అన్ని అస్త్రాలూ నేర్చుకున్నాడు, గంధర్వుల సంగీతమూ నాట్యమూ కూడా. త్వరలోనే తిరిగి వస్తాడు — కానీ ముందు దేవతల కోసం ఒక పని చేయాలి.”"],
   ["p", "That service was against the {nivatakavacas|Nivātakavacas}, dānavas living in the depths of the sea who had long troubled the gods. Arjuna would destroy them as his gift to his teacher. Indra also asked Lomaśa to go with the Pāṇḍavas on their pilgrimage to the holy places and guard them, for the forests were full of rākṣasas.", "ఆ పని {nivatakavacas|నివాతకవచుల} మీద — సముద్రపు లోతులలో ఉండి చాలా కాలంగా దేవతలను బాధిస్తున్న దానవులు వారు. గురుదక్షిణగా అర్జునుడు వారిని నాశనం చేయాలి. ఇంకా — పాండవులు తీర్థయాత్ర చేసేటప్పుడు వారితో కలిసి వెళ్ళి వారిని కాపాడమని కూడా ఇంద్రుడు లోమశుణ్ణి అడిగాడు; ఎందుకంటే అడవులు రాక్షసులతో నిండి ఉన్నాయి."],
   ["p", "Arjuna, too, folded his hands before the old sage. “Please protect my brother Yudhiṣṭhira,” he said. “Go with him to the tīrthas, and keep him safe as a king keeps his people.” Lomaśa promised. The epic adds that Indra had one more word for Yudhiṣṭhira: he knew the fear the eldest Pāṇḍava carried about {karna|Karṇa}, and he would take that fear away.", "అర్జునుడు కూడా ఆ వృద్ధ మునికి చేతులు జోడించాడు. “మా అన్న ధర్మరాజును కాపాడండి,” అన్నాడు. “తీర్థాలకు ఆయనతో వెళ్ళి, రాజు ప్రజలను కాపాడినట్లు ఆయనను కాపాడండి.” లోమశుడు మాట ఇచ్చాడు. ఇంద్రుడు ధర్మరాజుకు ఇంకొక మాట కూడా చెప్పాడని మహాభారతం అంటుంది: {karna|కర్ణుని} గురించి ధర్మరాజు మనసులో ఉన్న భయం తనకు తెలుసు; ఆ భయాన్ని తాను తొలగిస్తాడు."]
  ],
  [
   ["dyk", "💎", "Indra kept that promise later in the epic: disguised as a brāhmaṇa, he asked Karṇa for his natural armour and earrings, and Karṇa — who never refused a gift — cut them from his body and gave them.", "ఆ మాటను ఇంద్రుడు మహాభారతంలో తర్వాత నిలబెట్టుకున్నాడు: బ్రాహ్మణ వేషంలో వచ్చి కర్ణుని సహజ కవచకుండలాలు అడిగాడు; అడిగినది ఎప్పుడూ కాదనని కర్ణుడు వాటిని తన శరీరం నుండి కోసి ఇచ్చేశాడు."],
   ["p", "So Lomaśa set out from heaven to earth. It is worth noticing what kind of errand this was. The king of the gods did not send a warrior or a god to the Pāṇḍavas. He sent an old sage — someone who could bring news, give comfort, and show them how to turn their years of exile into years of learning.", "అలా లోమశుడు స్వర్గం నుండి భూమికి బయలుదేరాడు. ఇది ఎలాంటి పనో గమనించాలి. దేవేంద్రుడు పాండవుల దగ్గరకు ఒక యోధుణ్ణో, ఒక దేవుణ్ణో పంపలేదు. ఒక వృద్ధ మునిని పంపాడు — వార్త తీసుకెళ్ళగలవాడు, ఓదార్చగలవాడు, ప్రవాస సంవత్సరాలను నేర్చుకునే సంవత్సరాలుగా మార్చడం ఎలాగో చూపగలవాడు."],
   ["src", "Mahābhārata, Vana Parva, Indralokābhigamana section (Arjuna in Indra's heaven; Lomaśa's visit; Indra's and Arjuna's requests to Lomaśa; the Nivātakavacas; Indra's word about Karṇa). The gift of the armour and earrings is told later in the Vana Parva (Kuṇḍalāharaṇa).", "మహాభారతం, అరణ్య పర్వం, ఇంద్రలోకాభిగమన పర్వం (స్వర్గంలో అర్జునుడు; లోమశుని రాక; ఇంద్రుడూ అర్జునుడూ లోమశుని కోరిన కోరికలు; నివాతకవచులు; కర్ణుని గురించి ఇంద్రుని మాట). కవచకుండలాల దానం అరణ్య పర్వంలోనే తర్వాత (కుండలాహరణ పర్వం) చెప్పబడింది."]
  ]
 ],
 remember: [
  ["{lomasha|Lomaśa} saw {arjuna|Arjuna} sharing {indra|Indra}'s throne and was amazed.", "{indra|ఇంద్రుని} సింహాసనాన్ని {arjuna|అర్జునుడు} పంచుకోవడం చూసి {lomasha|లోమశుడు} ఆశ్చర్యపోయాడు."],
  ["Indra explained that Arjuna and Kṛṣṇa are {naranarayana|Nara and Nārāyaṇa}.", "అర్జునుడూ కృష్ణుడూ {naranarayana|నరనారాయణులు} అని ఇంద్రుడు వివరించాడు."],
  ["Indra and Arjuna both asked Lomaśa to carry news to {yudhishthira|Yudhiṣṭhira} and guard him on pilgrimage.", "ధర్మరాజుకు వార్త తీసుకెళ్ళి, తీర్థయాత్రలో ఆయనను కాపాడమని ఇంద్రుడూ అర్జునుడూ లోమశుణ్ణి కోరారు."]
 ],
 think: ["Indra sent a sage, not a warrior, to help the Pāṇḍavas in their worst years. What kind of help do people need most when things go badly?", "పాండవుల కష్టకాలంలో ఇంద్రుడు ఒక యోధుణ్ణి కాదు, ఒక మునిని పంపాడు. పరిస్థితులు బాగాలేనప్పుడు మనుషులకు ఎక్కువగా ఎలాంటి సహాయం కావాలి?"]
},
{
 id: "lm-3", sage: "lomasha", n: 3, order: 2903, date: "2026-10-31",
 title: "The Message at Kāmyaka", titleTe: "కామ్యకవనంలో సందేశం",
 src: "Mahābhārata, Vana Parva (Indralokābhigamana, Tīrthayātrā)",
 who: ["lomasha", "yudhishthira", "bhima", "draupadi", "nakula", "sahadeva", "narada", "pulastya", "vyasa", "parvata", "arjuna"],
 pages: [
  [
   ["p", "Down in the Kāmyaka forest, the Pāṇḍavas were miserable without {arjuna|Arjuna}. {bhima|Bhīma} grumbled that they should stop waiting and fight. {draupadi|Draupadī} grieved. {yudhishthira|Yudhiṣṭhira} sat silent, worrying. To cheer him, sages had begun telling him about the holy places of the land: {narada|Nārada} had repeated the long talk on tīrthas that {pulastya|Pulastya} once gave Bhīṣma, and the family priest Dhaumya had described the tīrthas of each of the four directions.", "కామ్యకవనంలో అర్జునుడు లేక పాండవులు దిగులుతో ఉన్నారు. ఇక ఎదురుచూడడం మాని యుద్ధం చేయాలని {bhima|భీముడు} గొణుగుతున్నాడు. {draupadi|ద్రౌపది} బాధపడుతోంది. {yudhishthira|ధర్మరాజు} చింతతో మౌనంగా కూర్చున్నాడు. ఆయనను ఊరడించడానికి మునులు దేశంలోని పుణ్యక్షేత్రాల గురించి చెప్పడం మొదలుపెట్టారు: ఒకప్పుడు {pulastya|పులస్త్యుడు} భీష్మునికి చెప్పిన తీర్థాల ప్రసంగాన్ని {narada|నారదుడు} మళ్ళీ వినిపించాడు; కులపురోహితుడు ధౌమ్యుడు నాలుగు దిక్కులలోని తీర్థాలను వర్ణించాడు."],
   ["sglink", "Pulastya's talk to Bhīṣma on the tīrthas", "తీర్థాల గురించి పులస్త్యుడు భీష్మునికి చెప్పిన మాటలు", "pl-8"],
   ["p", "Just then, says the epic, {lomasha|Lomaśa} arrived — shining like fire, as if he had stepped out of the sky. The brothers rose, bowed, and seated him with honour, and Yudhiṣṭhira asked why he had come.", "సరిగ్గా అప్పుడే — అని మహాభారతం చెబుతుంది — {lomasha|లోమశుడు} వచ్చాడు; ఆకాశం నుండి దిగివచ్చినట్లు అగ్నిలా వెలిగిపోతూ. అన్నదమ్ములు లేచి నమస్కరించి ఆయనను గౌరవంగా కూర్చోబెట్టారు; ఎందుకు వచ్చారని ధర్మరాజు అడిగాడు."]
  ],
  [
   ["h", "“Your brother is well”", "“మీ తమ్ముడు క్షేమంగా ఉన్నాడు”"],
   ["p", "Lomaśa told them everything. He had seen Arjuna in heaven, seated on half of Indra's throne. Arjuna had won the Pāśupata weapon from Śiva himself, and every divine weapon from the gods of the directions. He had learned gandharva music. He would return after one more task for Indra.", "లోమశుడు అంతా చెప్పాడు. స్వర్గంలో అర్జునుణ్ణి చూశాడు — ఇంద్ర సింహాసనంలో సగం మీద కూర్చుని ఉన్నాడు. స్వయంగా శివుని నుండి పాశుపతాస్త్రం, దిక్పాలకుల నుండి అన్ని దివ్యాస్త్రాలూ పొందాడు. గంధర్వ సంగీతం నేర్చుకున్నాడు. ఇంద్రుని కోసం ఇంకొక్క పని చేసి తిరిగి వస్తాడు."],
   ["p", "Then he gave Arjuna's own message: “Go to the tīrthas with Lomaśa, brother. Bathe in the holy waters and grow strong in merit; I will join you.” And he told them that Indra himself had asked him to guide and protect them along the way.", "తర్వాత అర్జునుని స్వంత సందేశం వినిపించాడు: “అన్నయ్యా, లోమశ మహర్షితో తీర్థాలకు వెళ్ళండి. పుణ్యజలాలలో స్నానం చేసి పుణ్యబలం పెంచుకోండి; నేను మిమ్మల్ని కలుస్తాను.” దారిలో వారికి మార్గం చూపి కాపాడమని స్వయంగా ఇంద్రుడే తనను అడిగాడని కూడా చెప్పాడు."],
   ["p", "Yudhiṣṭhira's sorrow lifted. For the first time in years, the brothers had a plan that was not about waiting or about revenge — and a guide who had seen it all before.", "ధర్మరాజు దుఃఖం తేలికపడింది. ఏళ్ళ తర్వాత మొదటిసారి — ఎదురుచూడడమో, పగ తీర్చుకోవడమో కాని ఒక ప్రణాళిక అన్నదమ్ములకు దొరికింది; ఇదంతా ముందే చూసిన ఒక మార్గదర్శీ దొరికాడు."]
  ],
  [
   ["h", "Travelling light", "తక్కువ భారంతో ప్రయాణం"],
   ["p", "A large crowd had followed the Pāṇḍavas into the forest — brāhmaṇas and citizens who loved them. Yudhiṣṭhira knew the road ahead would be hard: rough paths, hunger, cold, wild animals and rākṣasas. So he gently asked those who could not bear such hardships to turn back, and set out with a small company: his brothers, Draupadī, Dhaumya, a group of hardy brāhmaṇas, and Lomaśa.", "అడవిలోకి పాండవుల వెంట పెద్ద గుంపే వచ్చింది — వారిని ప్రేమించే బ్రాహ్మణులు, పౌరులు. ముందున్న దారి కష్టమైనదని ధర్మరాజుకు తెలుసు: రాళ్ళ దారులు, ఆకలి, చలి, క్రూరమృగాలు, రాక్షసులు. అందుకే ఆ కష్టాలు భరించలేనివారిని తిరిగి వెళ్ళమని మెల్లగా కోరాడు; కొద్దిమందితోనే బయలుదేరాడు: తమ్ముళ్ళు, ద్రౌపది, ధౌమ్యుడు, కష్టాలకు ఓర్చుకోగల కొందరు బ్రాహ్మణులు, లోమశ మహర్షి."],
   ["p", "Before they left, the epic says, {vyasa|Vyāsa}, {parvata|Parvata} and Nārada came to bless the journey. Their advice was simple and deep: the holy waters cleanse the body, but only a pure mind gains the real fruit of a pilgrimage. “Go with your minds made clean,” they said, “and the tīrthas will make you clean.”", "బయలుదేరే ముందు — మహాభారతం చెబుతుంది — {vyasa|వ్యాసుడు}, {parvata|పర్వత మహర్షి}, నారదుడు వచ్చి యాత్రను ఆశీర్వదించారు. వారి సలహా సరళమైనది, లోతైనది: పుణ్యజలాలు శరీరాన్ని శుద్ధి చేస్తాయి; కానీ తీర్థయాత్ర అసలు ఫలం మనసు శుద్ధంగా ఉన్నవారికే దక్కుతుంది. “మనసును శుభ్రం చేసుకుని వెళ్ళండి, అప్పుడు తీర్థాలు మిమ్మల్ని శుభ్రం చేస్తాయి,” అన్నారు."]
  ],
  [
   ["dyk", "🧭", "Lomaśa's journey and Dhaumya's list are two different things. Dhaumya described the tīrthas in a talk; Lomaśa actually walked the road with them, and his stories come at the places themselves.", "లోమశుని యాత్ర, ధౌమ్యుని జాబితా వేర్వేరు. ధౌమ్యుడు ఒక ప్రసంగంలో తీర్థాలను వర్ణించాడు; లోమశుడు నిజంగా వారితో ఆ దారిలో నడిచాడు — ఆయన కథలు ఆ ప్రదేశాలలోనే చెప్పబడ్డాయి."],
   ["src", "Mahābhārata, Vana Parva — end of the Indralokābhigamana section (Lomaśa reaches Kāmyaka and gives the messages of Indra and Arjuna) and the opening of the Tīrthayātrā section (Nārada's and Dhaumya's accounts of the tīrthas; the followers sent home; the blessing of Vyāsa, Parvata and Nārada).", "మహాభారతం, అరణ్య పర్వం — ఇంద్రలోకాభిగమన పర్వం చివరి భాగం (లోమశుడు కామ్యకానికి వచ్చి ఇంద్రుని, అర్జునుని సందేశాలు చెప్పడం), తీర్థయాత్రా పర్వం మొదటి భాగం (నారదుడూ ధౌమ్యుడూ తీర్థాలను వర్ణించడం; అనుచరులను తిరిగి పంపడం; వ్యాస, పర్వత, నారదుల ఆశీర్వాదం)."]
  ]
 ],
 remember: [
  ["{lomasha|Lomaśa} brought the Pāṇḍavas the news that {arjuna|Arjuna} was safe and armed with divine weapons.", "అర్జునుడు క్షేమంగా ఉన్నాడనీ, దివ్యాస్త్రాలు పొందాడనీ {lomasha|లోమశుడు} పాండవులకు చెప్పాడు."],
  ["{yudhishthira|Yudhiṣṭhira} sent home those who could not bear the hardships and set out with a small company.", "కష్టాలు భరించలేనివారిని {yudhishthira|ధర్మరాజు} వెనక్కి పంపి, కొద్దిమందితో బయలుదేరాడు."],
  ["{vyasa|Vyāsa}, Parvata and Nārada taught that a pilgrimage bears fruit only for a pure mind.", "మనసు శుద్ధంగా ఉంటేనే తీర్థయాత్ర ఫలిస్తుందని {vyasa|వ్యాసుడు}, పర్వతుడు, నారదుడు బోధించారు."]
 ],
 think: ["The sages said holy water cleans the body but only a clean mind gains the real fruit. What would it mean to “clean your mind” before a journey?", "పుణ్యజలం శరీరాన్ని శుభ్రం చేస్తుంది, కానీ శుభ్రమైన మనసుకే అసలు ఫలం దక్కుతుంది అని మునులు చెప్పారు. ప్రయాణానికి ముందు “మనసును శుభ్రం చేసుకోవడం” అంటే ఏమిటి?"]
},
{
 id: "lm-4", sage: "lomasha", n: 4, order: 2904, date: "2026-10-31",
 title: "“Why Do the Wicked Prosper?” — the Road Begins", titleTe: "“దుర్మార్గులు ఎందుకు వర్ధిల్లుతారు?” — యాత్ర ప్రారంభం",
 src: "Mahābhārata, Vana Parva (Tīrthayātrā)",
 who: ["lomasha", "yudhishthira", "duryodhana", "lakshmi", "gaya", "agastya", "lopamudra", "ilvala", "vatapi"],
 pages: [
  [
   ["p", "Early on the road, {yudhishthira|Yudhiṣṭhira} put to {lomasha|Lomaśa} the question that had been eating at him for years. “I have tried never to break dharma,” he said, “and yet I live in the forest in rags. {duryodhana|Duryodhana} cheated and lied, and he sits on the throne and grows richer every day. How can that be right?”", "యాత్ర మొదట్లోనే, ఏళ్ళుగా తనను తొలిచేస్తున్న ప్రశ్నను {yudhishthira|ధర్మరాజు} {lomasha|లోమశునికి} అడిగాడు. “నేను ఎప్పుడూ ధర్మం తప్పకుండా ఉండాలని ప్రయత్నించాను,” అన్నాడు, “అయినా నారచీరలు కట్టుకుని అడవిలో బ్రతుకుతున్నాను. {duryodhana|దుర్యోధనుడు} మోసం చేశాడు, అబద్ధాలు ఆడాడు — సింహాసనం మీద కూర్చుని రోజురోజుకూ ఐశ్వర్యం పెంచుకుంటున్నాడు. ఇది ఎలా న్యాయం?”"],
   ["p", "It is the oldest question there is, and Lomaśa did not brush it aside. “Do not grieve over this,” he said. “A man may grow for a while through adharma. He may see good fortune; he may even defeat his enemies. But in the end he is destroyed — root and all.”", "ఇది లోకంలో అన్నిటికంటే పాత ప్రశ్న; లోమశుడు దానిని తేలిగ్గా తోసిపుచ్చలేదు. “దీని గురించి బాధపడకు,” అన్నాడు. “అధర్మంతో కూడా మనిషి కొంతకాలం పెరగవచ్చు. మంచి రోజులు చూడవచ్చు; శత్రువులను కూడా గెలవవచ్చు. కానీ చివరికి వేళ్ళతో సహా నాశనమైపోతాడు.”"]
  ],
  [
   ["h", "The gods and the dānavas", "దేవతలూ దానవులూ"],
   ["p", "Then he told an old story. Long ago, he said, the dānavas grew mighty by living without dharma, while the gods kept to it. For a time the dānavas flourished. But with their wealth came pride, and with pride came cruelty. Then {lakshmi|Śrī} — good fortune herself — left them, and modesty and steadiness went with her. Śrī went to the gods. And the dānavas, empty of everything that had held them up, were destroyed.", "తర్వాత ఒక పాత కథ చెప్పాడు. చాలా కాలం క్రితం దానవులు ధర్మం లేకుండా బ్రతికి బలవంతులయ్యారు; దేవతలు ధర్మాన్ని పట్టుకుని ఉన్నారు. కొంతకాలం దానవులు వర్ధిల్లారు. కానీ సంపదతో గర్వం వచ్చింది, గర్వంతో క్రూరత్వం వచ్చింది. అప్పుడు {lakshmi|శ్రీదేవి} — అదృష్టమే రూపం దాల్చినట్లు — వారిని వదిలి వెళ్ళిపోయింది; సిగ్గూ, ధైర్యస్థైర్యాలూ ఆమె వెంటే వెళ్ళాయి. శ్రీదేవి దేవతల దగ్గరకు వెళ్ళింది. తమను నిలబెట్టినవన్నీ పోయి దానవులు నాశనమయ్యారు."],
   ["p", "“So it will be with the sons of Dhṛtarāṣṭra,” said Lomaśa. “Bear your exile. Your sorrow is not a sign that dharma has failed. It is the season before the fruit.”", "“ధృతరాష్ట్రుని కొడుకుల విషయంలోనూ అలాగే జరుగుతుంది,” అన్నాడు లోమశుడు. “నీ వనవాసాన్ని ఓర్పుతో భరించు. నీ దుఃఖం ధర్మం ఓడిపోయిందనడానికి గుర్తు కాదు. పండు రావడానికి ముందున్న కాలం అది.”"],
   ["dyk", "📖", "The Manu Smṛti has a saying with the same thought: through adharma a man prospers, sees good things and conquers rivals for a time — and then perishes from the root.", "మనుస్మృతిలో ఇదే భావంతో ఒక మాట ఉంది: అధర్మంతో మనిషి కొంతకాలం వర్ధిల్లుతాడు, మంచిని చూస్తాడు, శత్రువులను గెలుస్తాడు — ఆ తర్వాత వేళ్ళతో సహా నశిస్తాడు."]
  ],
  [
   ["h", "Naimiṣa, Prayāga, Gayā", "నైమిశం, ప్రయాగ, గయ"],
   ["p", "The company went east. They bathed at Naimiṣa, the forest of sages, and at Prayāga, where Gaṅgā and Yamunā meet. At Gayā, Lomaśa told them of the royal sage {gaya|Gaya}, who had performed so many great sacrifices there, giving away such mountains of food and gold, that the place still bore his name, and of the undying banyan tree beside the holy lake.", "బృందం తూర్పు దిక్కుకు సాగింది. మునుల అరణ్యమైన నైమిశంలో, గంగా యమునలు కలిసే ప్రయాగలో స్నానం చేశారు. గయలో, అక్కడ ఎన్నో మహాయజ్ఞాలు చేసి కొండలంత అన్నమూ బంగారమూ దానం చేసిన రాజర్షి {gaya|గయుని} గురించి లోమశుడు చెప్పాడు — అందుకే ఆ ప్రదేశానికి ఇప్పటికీ ఆయన పేరు; పవిత్ర సరస్సు పక్కన ఉన్న నశించని మర్రిచెట్టు (అక్షయవటం) గురించీ చెప్పాడు."],
   ["p", "And near the town of Maṇimatī, Lomaśa began the first great cycle of stories on the journey — the life of {agastya|Agastya}. Here, he said, the demon {ilvala|Ilvala} used to feed brāhmaṇas his brother {vatapi|Vātāpi} cooked as meat, then call him back to life to burst out of their bellies — until Agastya ate him and digested him for good.", "మణిమతి పట్టణం దగ్గర, యాత్రలోని మొదటి పెద్ద కథామాలను లోమశుడు మొదలుపెట్టాడు — {agastya|అగస్త్యుని} జీవితం. ఇక్కడే — అన్నాడు — {ilvala|ఇల్వలుడు} అనే రాక్షసుడు తన తమ్ముడు {vatapi|వాతాపిని} మాంసంగా వండి బ్రాహ్మణులకు పెట్టి, తర్వాత పిలిచి వారి కడుపులు చీల్చుకుని బయటకు వచ్చేలా చేసేవాడు — అగస్త్యుడు వాతాపిని తిని శాశ్వతంగా జీర్ణం చేసుకునేదాకా."]
  ],
  [
   ["p", "From that story Lomaśa went on, as the brothers kept asking for more: how Agastya made {lopamudra|Lopāmudrā} and married her; how he humbled the Vindhya mountain; how he drank the ocean so the gods could find the Kālakeyas hiding beneath it. These stories are told in full in Agastya's own chapters.", "అన్నదమ్ములు ఇంకా చెప్పమని అడుగుతూ ఉండగా, లోమశుడు ఆ కథ నుండి ముందుకు సాగాడు: అగస్త్యుడు {lopamudra|లోపాముద్రను} ఎలా సృష్టించి పెళ్ళి చేసుకున్నాడో; వింధ్య పర్వతపు గర్వం ఎలా అణచాడో; సముద్రం అడుగున దాక్కున్న కాలకేయులను దేవతలు కనుక్కోవడానికి సముద్రాన్ని ఎలా తాగాడో. ఈ కథలన్నీ అగస్త్యుని అధ్యాయాలలో పూర్తిగా ఉన్నాయి."],
   ["sglink", "Agastya — “Vātāpi Is Digested!”", "అగస్త్యుడు — “వాతాపి జీర్ణమైపోయాడు!”", "ag-5"],
   ["sglink", "Agastya — Lopāmudrā Is Made", "అగస్త్యుడు — లోపాముద్ర సృష్టి", "ag-3"],
   ["sglink", "Agastya — Drinking the Ocean", "అగస్త్యుడు — సముద్రపానం", "ag-7"],
   ["src", "Mahābhārata, Vana Parva, Tīrthayātrā section (Yudhiṣṭhira's question and Lomaśa's answer about the gods and dānavas; Naimiṣa, Prayāga and Gayā; King Gaya; the Agastya cycle beginning at Maṇimatī). Manu Smṛti, chapter 4 (the saying on adharma).", "మహాభారతం, అరణ్య పర్వం, తీర్థయాత్రా పర్వం (ధర్మరాజు ప్రశ్న, దేవదానవుల గురించి లోమశుని సమాధానం; నైమిశం, ప్రయాగ, గయ; గయ మహారాజు; మణిమతి దగ్గర మొదలైన అగస్త్యుని కథలు). మనుస్మృతి, చతుర్థాధ్యాయం (అధర్మం గురించిన మాట)."]
  ]
 ],
 remember: [
  ["{yudhishthira|Yudhiṣṭhira} asked why the wicked prosper; {lomasha|Lomaśa} said they grow for a time and then perish from the root.", "దుర్మార్గులు ఎందుకు వర్ధిల్లుతారని {yudhishthira|ధర్మరాజు} అడిగాడు; కొంతకాలం పెరిగి తర్వాత వేళ్ళతో సహా నశిస్తారని {lomasha|లోమశుడు} చెప్పాడు."],
  ["When the dānavas became proud, {lakshmi|Śrī} left them and went to the gods.", "దానవులు గర్వపడినప్పుడు {lakshmi|శ్రీదేవి} వారిని విడిచి దేవతల దగ్గరకు వెళ్ళింది."],
  ["Near Maṇimatī Lomaśa began the stories of {agastya|Agastya}.", "మణిమతి దగ్గర లోమశుడు {agastya|అగస్త్యుని} కథలు మొదలుపెట్టాడు."]
 ],
 think: ["Lomaśa called Yudhiṣṭhira's suffering “the season before the fruit”. Have you ever had to keep doing the right thing before you saw any reward?", "ధర్మరాజు కష్టాన్ని లోమశుడు “పండుకు ముందున్న కాలం” అన్నాడు. ఏ ఫలితమూ కనిపించకముందే సరైన పనిని చేస్తూ ఉండవలసి వచ్చిన సందర్భం మీకు ఎప్పుడైనా వచ్చిందా?"]
},
{
 id: "lm-5", sage: "lomasha", n: 5, order: 2905, date: "2026-10-31",
 title: "The Eastern Road — Paraśurāma, Ṛṣyaśṛṅga and the Silent Mountain", titleTe: "తూర్పు దారి — పరశురాముడు, ఋష్యశృంగుడు, మౌన పర్వతం",
 src: "Mahābhārata, Vana Parva (Tīrthayātrā)",
 who: ["lomasha", "yudhishthira", "parashurama", "rama", "sagara", "bhagiratha", "ganga", "rishyashringa", "vibhandaka", "akritavrana", "kartavirya"],
 pages: [
  [
   ["h", "Where Paraśurāma lost his fire", "పరశురాముడు తన తేజస్సు కోల్పోయిన చోటు"],
   ["p", "At a place called Bhṛgutīrtha, {lomasha|Lomaśa} told a story about two Rāmas. When {rama|Rāma}, son of Daśaratha, broke Śiva's bow and was walking home with Sītā, {parashurama|Paraśurāma} the son of Jamadagni met him on the road and challenged him with Viṣṇu's bow. Rāma strung that bow with ease — and with it took away Paraśurāma's fiery power.", "భృగుతీర్థం అనే చోట {lomasha|లోమశుడు} ఇద్దరు రాముల కథ చెప్పాడు. దశరథ పుత్రుడు {rama|రాముడు} శివధనుస్సు విరిచి సీతతో ఇంటికి తిరిగి వస్తుండగా, జమదగ్ని కుమారుడు {parashurama|పరశురాముడు} దారిలో ఎదురై విష్ణుధనుస్సుతో సవాలు చేశాడు. రాముడు ఆ విల్లును అవలీలగా ఎక్కుపెట్టి — దానితోనే పరశురాముని తేజస్సును తీసేసుకున్నాడు."],
   ["p", "In the epic's telling, the dimmed Paraśurāma was told to bathe at this very tīrtha, and there he won his brightness back. That is why, Lomaśa said, the Pāṇḍavas should bathe here too: a person who has lost his strength can find it again.", "మహాభారత కథనంలో, తేజస్సు తగ్గిపోయిన పరశురాముణ్ణి ఇదే తీర్థంలో స్నానం చేయమని చెప్పారు; అక్కడే ఆయన తన కాంతిని తిరిగి పొందాడు. అందుకే — అన్నాడు లోమశుడు — పాండవులు కూడా ఇక్కడ స్నానం చేయాలి: బలం కోల్పోయినవాడు దాన్ని మళ్ళీ పొందగలడు."],
   ["link", "Rāma meets Paraśurāma — Bāla Kāṇḍa", "రాముడు పరశురాముని కలవడం — బాలకాండ", "bala-14"]
  ],
  [
   ["h", "How the ocean was filled again", "సముద్రం మళ్ళీ ఎలా నిండింది"],
   ["p", "After hearing how Agastya drank the ocean, {yudhishthira|Yudhiṣṭhira} asked the obvious question: “Then how did the sea fill up again?” Lomaśa answered with the long story of King {sagara|Sagara} and his sixty thousand sons, who dug the dry ocean bed looking for a stolen horse and were burned to ashes by the sage Kapila; and of {bhagiratha|Bhagīratha}, who brought {ganga|Gaṅgā} down from heaven to purify their ashes and so filled the ocean once more.", "అగస్త్యుడు సముద్రాన్ని తాగిన కథ విన్న తర్వాత {yudhishthira|ధర్మరాజు} సహజంగానే అడిగాడు: “మరి సముద్రం మళ్ళీ ఎలా నిండింది?” దానికి సమాధానంగా లోమశుడు పెద్ద కథ చెప్పాడు: {sagara|సగర} మహారాజు, ఆయన అరవై వేల మంది కొడుకులు దొంగిలించబడిన యజ్ఞాశ్వం కోసం ఎండిపోయిన సముద్రపు అడుగు తవ్వి కపిల మహర్షి కోపానికి బూడిదయ్యారు; వారి బూడిదను పవిత్రం చేయడానికి {bhagiratha|భగీరథుడు} స్వర్గం నుండి {ganga|గంగను} దించి, అలా సముద్రాన్ని మళ్ళీ నింపాడు."],
   ["sglink", "Kapila — Sagara's Sixty Thousand Sons", "కపిలుడు — సగరుని అరవై వేల కొడుకులు", "kp-6"],
   ["sglink", "Kapila — Gaṅgā Reaches the Ashes", "కపిలుడు — బూడిదను చేరిన గంగ", "kp-7"]
  ],
  [
   ["h", "The mountain where you must not speak", "మాట్లాడకూడని పర్వతం"],
   ["p", "Further on, by the rivers Nandā and Aparanandā, they came to Mount Hemakūṭa. Here, Lomaśa warned, they must keep silent. Long ago a sage named Ṛṣabha had done tapas on this mountain, and people kept chattering around him. In anger he laid a curse on the place: whoever spoke there would be struck by stones and storm. So the Pāṇḍavas climbed in silence — a pilgrimage of the tongue as much as of the feet.", "ఇంకా ముందుకు వెళ్ళి, నందా, అపరనందా నదుల దగ్గర హేమకూట పర్వతానికి చేరుకున్నారు. ఇక్కడ మౌనంగా ఉండాలని లోమశుడు హెచ్చరించాడు. చాలా కాలం క్రితం ఋషభుడు అనే ముని ఈ పర్వతం మీద తపస్సు చేస్తుండగా, చుట్టూ జనం గలగలా మాట్లాడుతూనే ఉండేవారు. కోపంతో ఆయన ఆ ప్రదేశాన్ని శపించాడు: అక్కడ ఎవరు మాట్లాడినా రాళ్ళూ తుఫానూ వారి మీద విరుచుకుపడతాయి. అందుకే పాండవులు మౌనంగా ఆ కొండ ఎక్కారు — అది కాళ్ళకే కాదు, నాలుకకూ తీర్థయాత్ర."],
   ["h", "The boy with a deer's horn", "జింక కొమ్ము ఉన్న బాలుడు"],
   ["p", "At the river Kauśikī, near the old āśrama of Viśvāmitra, Lomaśa showed them the hermitage of {vibhandaka|Vibhāṇḍaka} and told the tale of his son {rishyashringa|Ṛṣyaśṛṅga} — the forest boy who had never seen a woman, who was drawn away to the drought-struck kingdom of Aṅga and brought the rain with him. That story, too, has its own chapters.", "కౌశికీ నది దగ్గర, విశ్వామిత్రుని పాత ఆశ్రమం సమీపంలో, లోమశుడు {vibhandaka|విభాండకుని} ఆశ్రమాన్ని చూపించి, ఆయన కుమారుడు {rishyashringa|ఋష్యశృంగుని} కథ చెప్పాడు — స్త్రీని ఎప్పుడూ చూడని అడవి బాలుడు, కరువుతో ఎండిపోయిన అంగ రాజ్యానికి తీసుకుపోబడి, తనతో పాటు వర్షాన్ని తెచ్చిన కథ. ఆ కథకూ ఇక్కడ వేరే అధ్యాయాలు ఉన్నాయి."],
   ["sglink", "Ṛṣyaśṛṅga — The Boy with a Deer's Horn", "ఋష్యశృంగుడు — జింక కొమ్ము బాలుడు", "rs-1"]
  ],
  [
   ["h", "To the sea, and Mahendra mountain", "సముద్రం వైపు, మహేంద్ర పర్వతం"],
   ["p", "They reached the place where Gaṅgā meets the sea and bathed in five hundred streams of the delta, then went south through Kaliṅga to the river Vaitaraṇī. On Mount Mahendra lived the disciples of Paraśurāma, and one of them, {akritavrana|Akṛtavraṇa}, told the brothers the whole story of his master — how {kartavirya|Kārtavīrya} took Jamadagni's calf, and how Paraśurāma cleared the earth of kṣatriyas.", "గంగ సముద్రంలో కలిసే చోటికి చేరి, ముఖద్వారంలోని ఐదువందల ప్రవాహాలలో స్నానం చేశారు; తర్వాత కళింగం మీదుగా దక్షిణంగా వైతరణీ నదికి వెళ్ళారు. మహేంద్ర పర్వతం మీద పరశురాముని శిష్యులు ఉండేవారు; వారిలో ఒకడైన {akritavrana|అకృతవ్రణుడు} తన గురువు కథంతా అన్నదమ్ములకు చెప్పాడు — {kartavirya|కార్తవీర్యుడు} జమదగ్ని లేగను ఎలా తీసుకెళ్ళాడో, పరశురాముడు భూమిని క్షత్రియులు లేకుండా ఎలా చేశాడో."],
   ["p", "On the fourteenth day of the moon, says the epic, Paraśurāma himself appeared to the sages there, and Yudhiṣṭhira and his brothers bowed to him. Then the company turned down the southern coast.", "చతుర్దశి రోజున — మహాభారతం చెబుతుంది — స్వయంగా పరశురాముడే అక్కడి మునులకు దర్శనం ఇచ్చాడు; ధర్మరాజు, తమ్ముళ్ళు ఆయనకు నమస్కరించారు. తర్వాత బృందం దక్షిణ తీరం వెంబడి సాగింది."],
   ["sglink", "Jamadagni & Paraśurāma — The King Who Took the Calf", "జమదగ్ని, పరశురాముడు — లేగను ఎత్తుకుపోయిన రాజు", "jp-4"],
   ["src", "Mahābhārata, Vana Parva, Tīrthayātrā section (Bhṛgutīrtha and Paraśurāma's lost power; the story of Sagara and Bhagīratha; Nandā, Aparanandā and Hemakūṭa; the Kauśikī and Ṛṣyaśṛṅga; Gaṅgāsāgara, Kaliṅga and the Vaitaraṇī; Mahendra, Akṛtavraṇa and the appearance of Paraśurāma).", "మహాభారతం, అరణ్య పర్వం, తీర్థయాత్రా పర్వం (భృగుతీర్థం, పరశురాముని తేజస్సు; సగర భగీరథుల కథ; నందా, అపరనందా, హేమకూటం; కౌశికీ నది, ఋష్యశృంగుడు; గంగాసాగరం, కళింగం, వైతరణి; మహేంద్ర పర్వతం, అకృతవ్రణుడు, పరశురాముని దర్శనం)."]
  ]
 ],
 remember: [
  ["At Bhṛgutīrtha, {parashurama|Paraśurāma} regained the power that {rama|Rāma} had taken from him.", "{rama|రాముడు} తీసుకున్న తేజస్సును {parashurama|పరశురాముడు} భృగుతీర్థంలో తిరిగి పొందాడు."],
  ["On Mount Hemakūṭa the pilgrims had to keep silent because of the sage Ṛṣabha's curse.", "ఋషభ ముని శాపం వల్ల హేమకూట పర్వతం మీద యాత్రికులు మౌనంగా ఉండాలి."],
  ["{lomasha|Lomaśa} told the tales of Sagara, Bhagīratha and {rishyashringa|Ṛṣyaśṛṅga} at the places where they happened.", "సగరుడు, భగీరథుడు, {rishyashringa|ఋష్యశృంగుడు} కథలను అవి జరిగిన చోట్లలోనే {lomasha|లోమశుడు} చెప్పాడు."]
 ],
 think: ["On Hemakūṭa the pilgrims had to be silent. Why might silence be part of a holy journey?", "హేమకూటం మీద యాత్రికులు మౌనంగా ఉండవలసి వచ్చింది. పవిత్ర యాత్రలో మౌనం ఎందుకు ఒక భాగం కావచ్చు?"]
},
{
 id: "lm-6", sage: "lomasha", n: 6, order: 2906, date: "2026-10-31",
 title: "The Southern Shore — the Vṛṣṇis at Prabhāsa and Cyavana on the Narmadā", titleTe: "దక్షిణ తీరం — ప్రభాసంలో వృష్ణులు, నర్మదా తీరాన చ్యవనుడు",
 src: "Mahābhārata, Vana Parva (Tīrthayātrā)",
 who: ["lomasha", "yudhishthira", "krishna", "balarama", "satyaki", "duryodhana", "cyavana", "sukanya", "sharyati", "ashvins", "indra", "mada"],
 pages: [
  [
   ["p", "Down the coast they went — to the Godāvarī, to the land of the Draviḍas, to the holy bathing places of Agastya in the far south, and to Śūrpāraka on the western sea. At last they came to Prabhāsa, the great tīrtha by the ocean in the west. And there news of their coming reached Dvārakā.", "తీరం వెంబడి సాగిపోయారు — గోదావరికి, ద్రావిడ దేశానికి, దక్షిణాన దూరంగా ఉన్న అగస్త్య తీర్థాలకు, పడమటి సముద్ర తీరాన ఉన్న శూర్పారకానికి. చివరికి పడమటి సముద్రం దగ్గరి మహాతీర్థమైన ప్రభాసానికి చేరుకున్నారు. వారు వచ్చారన్న వార్త ద్వారకకు చేరింది."],
   ["h", "The cousins come", "బంధువుల రాక"],
   ["p", "{krishna|Kṛṣṇa}, {balarama|Balarāma} and the Vṛṣṇi heroes came to meet them. When they saw Yudhiṣṭhira thin and dusty, Draupadī worn out, the mighty brothers living on forest food, they wept. Balarāma spoke angrily: “Look at this! {duryodhana|Duryodhana} rules in silk, and the man who follows dharma lives in bark. People will start to think that wrongdoing pays.”", "{krishna|శ్రీకృష్ణుడు}, {balarama|బలరాముడు}, వృష్ణి వీరులు వారిని కలవడానికి వచ్చారు. బక్కచిక్కి దుమ్ము కొట్టుకున్న ధర్మరాజును, అలసిపోయిన ద్రౌపదిని, అడవి ఆహారంతో బ్రతుకుతున్న మహావీరులైన అన్నదమ్ములను చూసి వారు కన్నీళ్ళు పెట్టుకున్నారు. బలరాముడు కోపంగా అన్నాడు: “చూడండి! {duryodhana|దుర్యోధనుడు} పట్టుబట్టలలో రాజ్యం ఏలుతున్నాడు, ధర్మం పాటించేవాడు నారచీరలలో బ్రతుకుతున్నాడు. తప్పు చేస్తేనే లాభం అని జనం అనుకోవడం మొదలుపెడతారు.”"]
  ],
  [
   ["p", "Fiery {satyaki|Sātyaki} went further. “Why wait thirteen years? Let the Vṛṣṇis march on Hastināpura now. We will defeat the Kauravas, and the kingdom will be waiting when the exile ends.”", "ఆవేశపరుడైన {satyaki|సాత్యకి} ఇంకా ముందుకు వెళ్ళాడు. “పదమూడేళ్ళు ఎందుకు ఆగాలి? వృష్ణులు ఇప్పుడే హస్తినాపురం మీదకు దండెత్తుదాం. కౌరవులను ఓడిస్తాం; వనవాసం ముగిసేసరికి రాజ్యం సిద్ధంగా ఉంటుంది.”"],
   ["p", "Kṛṣṇa listened, and then said that Yudhiṣṭhira would never accept a kingdom won by others while his own promise was still running. Yudhiṣṭhira agreed at once. “Truth matters more to me than a kingdom,” he said. “Kṛṣṇa knows me. When the time comes, we will act.” The Vṛṣṇis went home, and the pilgrims went on.", "కృష్ణుడు అంతా విని, తన మాట ఇంకా అమలులో ఉండగా ఇతరులు గెలిచి ఇచ్చిన రాజ్యాన్ని ధర్మరాజు ఎప్పటికీ ఒప్పుకోడని చెప్పాడు. ధర్మరాజు వెంటనే అంగీకరించాడు. “నాకు రాజ్యం కంటే సత్యమే ముఖ్యం,” అన్నాడు. “కృష్ణుడికి నేను తెలుసు. సమయం వచ్చినప్పుడు మేము చేయవలసింది చేస్తాం.” వృష్ణులు ఇంటికి వెళ్ళారు; యాత్రికులు ముందుకు సాగారు."],
   ["dyk", "🤝", "This meeting at Prabhāsa is one of the few times in the forest years when the Pāṇḍavas are offered an easy way out — and refuse it. Lomaśa's lesson about dharma bearing fruit in its own season had sunk in.", "అరణ్యవాస సంవత్సరాలలో పాండవులకు సులభమైన దారి ఎదురై, వారు దానిని కాదన్న అతి కొద్ది సందర్భాలలో ప్రభాసంలోని ఈ కలయిక ఒకటి. ధర్మం తన కాలంలో ఫలిస్తుందన్న లోమశుని పాఠం వారి మనసులో నాటుకుంది."]
  ],
  [
   ["h", "On the Narmadā — Cyavana and Sukanyā", "నర్మదా తీరాన — చ్యవనుడు, సుకన్య"],
   ["p", "Turning inland, they reached the Vaiḍūrya mountain and the river Narmadā. Here Lomaśa told one of his longest and most loved stories: of the old sage {cyavana|Cyavana}, so still in tapas that an anthill grew over him; of Princess {sukanya|Sukanyā}, daughter of King {sharyati|Śaryāti}, who poked his shining eyes with a thorn by mistake; of how she married him to save her father's people and stayed faithful even when the {ashvins|Aśvins} tested her.", "లోపలికి తిరిగి వైడూర్య పర్వతానికి, నర్మదా నదికి చేరుకున్నారు. ఇక్కడ లోమశుడు తన కథలన్నిటిలో పెద్దదీ, అందరికీ ఇష్టమైనదీ అయిన ఒక కథ చెప్పాడు: తపస్సులో కదలకుండా ఉండడం వల్ల ఒంటి మీద పుట్ట పెరిగిన వృద్ధ ముని {cyavana|చ్యవనుడు}; పొరపాటున ఆయన మెరిసే కళ్ళను ముల్లుతో పొడిచిన {sharyati|శర్యాతి} మహారాజు కుమార్తె {sukanya|సుకన్య}; తండ్రి ప్రజలను కాపాడడానికి ఆమె ఆయనను పెళ్ళాడి, {ashvins|అశ్వినీదేవతలు} పరీక్షించినప్పుడు కూడా పతివ్రతగా నిలిచిన కథ."],
   ["p", "He told how the Aśvins made Cyavana young again, how Cyavana in thanks gave them a share of soma, how {indra|Indra} raised his thunderbolt in fury and found his arm frozen, and how the sage created the monster {mada|Mada} to make Indra give way.", "అశ్వినులు చ్యవనుణ్ణి మళ్ళీ యువకుణ్ణి ఎలా చేశారో, కృతజ్ఞతగా చ్యవనుడు వారికి సోమరసంలో భాగం ఎలా ఇచ్చాడో, {indra|ఇంద్రుడు} కోపంతో వజ్రాయుధం ఎత్తగానే చేయి ఎలా బిగుసుకుపోయిందో, ఇంద్రుడు దిగిరావడానికి ముని {mada|మదుడు} అనే భయంకర రాక్షసుణ్ణి ఎలా సృష్టించాడో చెప్పాడు."]
  ],
  [
   ["sglink", "Cyavana — Sukanyā's Thorn", "చ్యవనుడు — సుకన్య ముల్లు", "cy-2"],
   ["sglink", "Cyavana — Soma for the Aśvins", "చ్యవనుడు — అశ్వినులకు సోమం", "cy-5"],
   ["p", "Notice how Lomaśa chose his stories. On the coast, after the Vṛṣṇis offered to win the kingdom for Yudhiṣṭhira, he told of a princess who kept her word to an old, blind husband through every test. The places gave him the stories — but he chose which ones to tell, and when.", "లోమశుడు కథలను ఎలా ఎంచుకున్నాడో గమనించండి. రాజ్యం గెలిచి ఇస్తామని వృష్ణులు ముందుకు వచ్చిన తర్వాత, వృద్ధుడూ అంధుడూ అయిన భర్తకు ఇచ్చిన మాటను ప్రతి పరీక్షలోనూ నిలబెట్టుకున్న రాకుమారి కథ చెప్పాడు. ప్రదేశాలు ఆయనకు కథలు ఇచ్చాయి — కానీ ఏ కథ, ఎప్పుడు చెప్పాలో ఎంచుకున్నది ఆయనే."],
   ["src", "Mahābhārata, Vana Parva, Tīrthayātrā section (the southern and western tīrthas; the meeting with Kṛṣṇa, Balarāma, Sātyaki and the Vṛṣṇis at Prabhāsa; the Vaiḍūrya mountain and the Narmadā; the story of Cyavana, Sukanyā, the Aśvins, Indra and Mada).", "మహాభారతం, అరణ్య పర్వం, తీర్థయాత్రా పర్వం (దక్షిణ, పశ్చిమ తీర్థాలు; ప్రభాసంలో కృష్ణ బలరాములు, సాత్యకి, వృష్ణులతో కలయిక; వైడూర్య పర్వతం, నర్మద; చ్యవనుడు, సుకన్య, అశ్వినులు, ఇంద్రుడు, మదుని కథ)."]
  ]
 ],
 remember: [
  ["At Prabhāsa, {balarama|Balarāma} and {satyaki|Sātyaki} wanted to win back the kingdom at once.", "ప్రభాసంలో {balarama|బలరాముడు}, {satyaki|సాత్యకి} వెంటనే రాజ్యం గెలిచి ఇవ్వాలనుకున్నారు."],
  ["{yudhishthira|Yudhiṣṭhira} refused: truth mattered more than a kingdom, and {krishna|Kṛṣṇa} understood.", "రాజ్యం కంటే సత్యమే ముఖ్యమని {yudhishthira|ధర్మరాజు} కాదన్నాడు; {krishna|కృష్ణుడు} అర్థం చేసుకున్నాడు."],
  ["On the Narmadā, {lomasha|Lomaśa} told the story of {cyavana|Cyavana} and {sukanya|Sukanyā}.", "నర్మదా తీరాన {lomasha|లోమశుడు} {cyavana|చ్యవనుడు}, {sukanya|సుకన్య} కథ చెప్పాడు."]
 ],
 think: ["Sātyaki's offer would have ended the Pāṇḍavas' suffering years early. Why did Yudhiṣṭhira say no? Would you have?", "సాత్యకి మాట ఒప్పుకుంటే పాండవుల కష్టాలు ఏళ్ళ ముందే తీరిపోయేవి. ధర్మరాజు ఎందుకు కాదన్నాడు? మీరైతే ఏం చేసేవారు?"]
},
{
 id: "lm-7", sage: "lomasha", n: 7, order: 2907, date: "2026-10-31",
 title: "Fathers and Sons — Māndhātā, Somaka and Jantu", titleTe: "తండ్రులూ కొడుకులూ — మాంధాత, సోమకుడు, జంతువు",
 src: "Mahābhārata, Vana Parva (Tīrthayātrā)",
 who: ["lomasha", "yudhishthira", "yuvanashva", "mandhata", "indra", "somaka", "jantu", "yama"],
 pages: [
  [
   ["p", "Somewhere on the road north, by the Yamunā, {lomasha|Lomaśa} told two strange stories about kings who longed for sons. One is wonderful; the other is one of the hardest stories in the whole epic. The Mahābhārata tells both, and so we do too.", "ఉత్తరానికి వెళ్ళే దారిలో, యమునా తీరాన, కొడుకుల కోసం తపించిన రాజుల గురించి {lomasha|లోమశుడు} రెండు విచిత్రమైన కథలు చెప్పాడు. ఒకటి అద్భుతమైనది; రెండోది మొత్తం మహాభారతంలోనే అతి కఠినమైన కథలలో ఒకటి. మహాభారతం రెండూ చెబుతుంది; మనమూ చెబుదాం."],
   ["h", "The king who bore a son", "కొడుకును తానే కన్న రాజు"],
   ["p", "King {yuvanashva|Yuvanāśva} of the Ikṣvāku line had no son. He went to the forest, and the sages there performed a rite for him and set aside a pot of water filled with the power of their mantras, meant for his queen to drink. But in the night Yuvanāśva woke up burning with thirst, found the pot, and drank it all himself.", "ఇక్ష్వాకు వంశపు {yuvanashva|యువనాశ్వ} మహారాజుకు కొడుకు లేడు. ఆయన అడవికి వెళ్ళగా, అక్కడి మునులు ఆయన కోసం ఒక యజ్ఞం చేసి, తమ మంత్రశక్తితో నిండిన నీటి కుండను రాణి తాగడానికి పక్కన పెట్టారు. కానీ రాత్రి యువనాశ్వుడు దాహంతో మేల్కొని, ఆ కుండ కనిపించగానే నీరంతా తానే తాగేశాడు."],
   ["p", "The water did its work all the same. In time a child was born from the king's own side, and Yuvanāśva lived. The gods came to see this wonder. “What will he drink?” they asked, for there was no mother. {indra|Indra} put his own finger into the baby's mouth and said, “*Māṃ dhāsyati* — he will drink from me.” So the child was named {mandhata|Māndhātā}, and he grew up to rule the whole earth.", "అయినా ఆ నీరు తన పని తాను చేసింది. కొంతకాలానికి రాజు పక్కటెముకల నుండే ఒక బిడ్డ పుట్టాడు; యువనాశ్వుడు బ్రతికే ఉన్నాడు. ఈ అద్భుతం చూడడానికి దేవతలు వచ్చారు. తల్లి లేదు కదా — “ఈ బిడ్డ ఏం తాగుతాడు?” అని అడిగారు. {indra|ఇంద్రుడు} తన వేలిని బిడ్డ నోట్లో పెట్టి, “*మాం ధాస్యతి* — నా నుండి తాగుతాడు,” అన్నాడు. అందుకే ఆ బిడ్డకు {mandhata|మాంధాత} అని పేరు వచ్చింది; పెరిగి పెద్దయ్యాక భూమండలమంతా ఏలాడు."]
  ],
  [
   ["h", "King Somaka's one son", "సోమక మహారాజుకు ఒక్కడే కొడుకు"],
   ["p", "The second story is about King {somaka|Somaka}. He had a hundred wives, and for many years no child at all. At last, when he was old, one son was born: {jantu|Jantu}. All hundred queens loved the boy as their own and doted on him.", "రెండో కథ {somaka|సోమక} మహారాజుది. ఆయనకు వంద మంది భార్యలు; ఎన్నో ఏళ్ళు ఒక్క సంతానమూ లేదు. చివరికి వృద్ధాప్యంలో ఒక కొడుకు పుట్టాడు: {jantu|జంతువు}. వంద మంది రాణులూ ఆ బిడ్డను తమ స్వంత బిడ్డలా ప్రేమించి గారాబం చేశారు."],
   ["p", "One day an ant bit the little prince and he cried out. At once all hundred mothers rushed to him crying too, and the noise filled the palace. The king, sitting with his ministers and his priest, ran in and saw it all. He thought: “One son is a terrible thing. A single ant bite and the whole house is in grief. Is there any way to have a hundred sons?”", "ఒక రోజు చిన్న రాకుమారుణ్ణి ఒక చీమ కుట్టింది; బిడ్డ ఏడ్చాడు. వెంటనే వంద మంది తల్లులూ ఏడుస్తూ అతని దగ్గరకు పరుగెత్తారు; ఆ ఏడుపుతో భవనమంతా నిండిపోయింది. మంత్రులతో, పురోహితుడితో కూర్చుని ఉన్న రాజు లోపలికి పరుగెత్తి అదంతా చూశాడు. ఇలా అనుకున్నాడు: “ఒక్కడే కొడుకు ఉండడం ఎంత భయంకరం. ఒక చీమ కుడితే ఇల్లంతా దుఃఖంలో మునిగిపోతుంది. వంద మంది కొడుకులు పుట్టే ఉపాయం ఏదైనా ఉందా?”"]
  ],
  [
   ["h", "A terrible rite", "భయంకరమైన యజ్ఞం"],
   ["p", "The priest said there was a way, but a cruel one: if Jantu were offered in a sacrifice, and the queens breathed the smoke of the offering, each of them would bear a son, and Jantu himself would be born again as the eldest. The king, desperate for sons, agreed. The mothers begged and wept and tried to hold on to the boy, but the priest took him, and the rite was done.", "ఉపాయం ఉంది, కానీ అది క్రూరమైనది అన్నాడు పురోహితుడు: జంతువును యజ్ఞంలో బలి ఇచ్చి, ఆ హోమ ధూమాన్ని రాణులు ఆఘ్రాణిస్తే, ప్రతి రాణికీ ఒక కొడుకు పుడతాడు; జంతువే మళ్ళీ పెద్దవాడిగా పుడతాడు. కొడుకుల కోసం తపిస్తున్న రాజు ఒప్పుకున్నాడు. తల్లులు ప్రాధేయపడ్డారు, ఏడ్చారు, బిడ్డను పట్టుకుని వదలకుండా ఉండాలని చూశారు; కానీ పురోహితుడు బిడ్డను తీసుకెళ్ళాడు; యజ్ఞం జరిగిపోయింది."],
   ["p", "It happened as he had said. The queens bore a hundred sons, and Jantu was born again as the eldest, from his own mother, with a golden mark on his side. But the story does not end on that happy note. The epic goes on to say what the deed cost.", "ఆయన చెప్పినట్లే జరిగింది. రాణులకు వంద మంది కొడుకులు పుట్టారు; జంతువు తన తల్లికే పెద్ద కొడుకుగా, పక్క మీద బంగారు గుర్తుతో మళ్ళీ పుట్టాడు. కానీ కథ ఆ సంతోషంతో ముగియదు. ఆ పనికి ఎంత మూల్యం చెల్లించవలసి వచ్చిందో మహాభారతం చెబుతుంది."]
  ],
  [
   ["h", "The king who would not leave his priest", "పురోహితుణ్ణి వదలని రాజు"],
   ["p", "When the priest died, he went to a place of torment for what he had done. When King Somaka died, he saw his priest suffering there. “He did this for me,” said Somaka to Dharmarāja, the lord of the dead. “Let me suffer in his place.” {yama|Yama} answered that no one can eat the fruit of another's deeds. “Then let me stay here with him,” said the king, “for as long as he must.”", "పురోహితుడు చనిపోయాక, తాను చేసిన పనికి నరకానికి వెళ్ళాడు. సోమక మహారాజు చనిపోయాక, తన పురోహితుడు అక్కడ బాధపడుతుండడం చూశాడు. “ఇతడు ఈ పని నా కోసమే చేశాడు,” అని సోమకుడు యమధర్మరాజుతో అన్నాడు. “ఇతని బదులు నన్ను శిక్షించండి.” ఒకరి కర్మఫలాన్ని ఇంకొకరు అనుభవించలేరని {yama|యముడు} చెప్పాడు. “అయితే ఇతను ఉండవలసినంత కాలం నేనూ ఇతనితో ఇక్కడే ఉంటాను,” అన్నాడు రాజు."],
   ["p", "So the king shared the priest's suffering until it was over, and then both went to the worlds of the good. Lomaśa showed the Pāṇḍavas the place of Somaka's sacrifice. It is a story without heroes — a priest who gave cruel advice, a king who took it — yet it ends with a man who would not abandon the one who had sinned for his sake.", "అలా ఆ బాధ తీరేదాకా రాజు పురోహితుడితో కలిసి అనుభవించాడు; తర్వాత ఇద్దరూ పుణ్యలోకాలకు వెళ్ళారు. సోమకుడు యజ్ఞం చేసిన చోటును లోమశుడు పాండవులకు చూపించాడు. ఇది వీరులు లేని కథ — క్రూరమైన సలహా ఇచ్చిన పురోహితుడు, దానిని పాటించిన రాజు — అయినా తన కోసం పాపం చేసినవాణ్ణి వదిలిపెట్టని ఒక మనిషితో ఇది ముగుస్తుంది."],
   ["src", "Mahābhārata, Vana Parva, Tīrthayātrā section (the birth of Māndhātā from Yuvanāśva and Indra's finger; the story of Somaka, Jantu and the priest, and their fate after death).", "మహాభారతం, అరణ్య పర్వం, తీర్థయాత్రా పర్వం (యువనాశ్వుని నుండి మాంధాత జననం, ఇంద్రుని వేలు; సోమకుడు, జంతువు, పురోహితుని కథ, మరణం తర్వాత వారి గతి)."]
  ]
 ],
 remember: [
  ["{yuvanashva|Yuvanāśva} drank the blessed water by mistake and bore {mandhata|Māndhātā}, who drank from {indra|Indra}'s finger.", "{yuvanashva|యువనాశ్వుడు} పొరపాటున మంత్రజలం తాగి {mandhata|మాంధాతను} కన్నాడు; ఆ బిడ్డ {indra|ఇంద్రుని} వేలి నుండి పాలు తాగాడు."],
  ["King {somaka|Somaka} let his only son {jantu|Jantu} be offered in a rite to get a hundred sons.", "వంద మంది కొడుకుల కోసం {somaka|సోమక} మహారాజు తన ఏకైక పుత్రుడు {jantu|జంతువును} యజ్ఞంలో బలి ఇవ్వనిచ్చాడు."],
  ["The priest suffered for it after death, and Somaka chose to share his suffering.", "ఆ పనికి పురోహితుడు మరణానంతరం శిక్ష అనుభవించాడు; సోమకుడు ఆ శిక్షను తానూ పంచుకున్నాడు."]
 ],
 think: ["Both Somaka and his priest did wrong, but Somaka would not leave his priest alone in punishment. What do you think of what he did?", "సోమకుడూ పురోహితుడూ ఇద్దరూ తప్పు చేశారు; కానీ శిక్షలో పురోహితుణ్ణి ఒంటరిగా వదలడానికి సోమకుడు ఒప్పుకోలేదు. ఆయన చేసిన పని గురించి మీరేమనుకుంటున్నారు?"]
},
{
 id: "lm-8", sage: "lomasha", n: 8, order: 2908, date: "2026-10-31",
 title: "The Hawk and the Dove — and Stories by the Rivers of the North", titleTe: "డేగా పావురమూ — ఉత్తర నదుల తీరాన కథలు",
 src: "Mahābhārata, Vana Parva (Tīrthayātrā)",
 who: ["lomasha", "yudhishthira", "ushinara", "shibi", "indra", "agni", "markandeya", "ashtavakra", "yavakri", "raibhya", "bharadvajamuni"],
 pages: [
  [
   ["p", "Where the Yamunā flows, {lomasha|Lomaśa} showed the brothers the place where King {ushinara|Uśīnara} once did his sacrifices, and told them of the day the king was tested by two gods.", "యమునా నది ప్రవహించే చోట, ఒకప్పుడు {ushinara|ఉశీనర} మహారాజు యజ్ఞాలు చేసిన ప్రదేశాన్ని {lomasha|లోమశుడు} అన్నదమ్ములకు చూపించి, ఇద్దరు దేవతలు ఆ రాజును పరీక్షించిన రోజు కథ చెప్పాడు."],
   ["p", "{indra|Indra} took the form of a hawk, and {agni|Agni} the form of a dove. The hawk chased the dove, and the terrified dove flew straight into the king's lap for shelter. Then the hawk landed and spoke. “King, that dove is my food. Hunger is killing me. You know dharma — will you take a hungry creature's meal away?”", "{indra|ఇంద్రుడు} డేగ రూపం, {agni|అగ్నిదేవుడు} పావురం రూపం ధరించారు. డేగ పావురాన్ని తరిమింది; భయపడిన పావురం శరణు కోసం నేరుగా రాజు ఒడిలోకి వచ్చి వాలింది. అప్పుడు డేగ దిగి మాట్లాడింది. “రాజా, ఆ పావురం నా ఆహారం. ఆకలితో చచ్చిపోతున్నాను. నీకు ధర్మం తెలుసు — ఆకలితో ఉన్న ప్రాణి ఆహారాన్ని లాక్కుంటావా?”"]
  ],
  [
   ["h", "Flesh on the scales", "త్రాసులో మాంసం"],
   ["p", "The king answered, “This bird came to me in fear and asked for shelter. I cannot give it up. Take any other food you want — a bull, a deer, whatever you like.” The hawk said it wanted only fresh flesh, and if the king would not give the dove, then the king's own flesh, equal in weight to the dove.", "రాజు జవాబిచ్చాడు: “ఈ పక్షి భయంతో నన్ను శరణు కోరింది. దీన్ని నేను వదలలేను. నీకు ఏ ఆహారం కావాలంటే అది తీసుకో — ఎద్దు, జింక, ఏదైనా సరే.” తనకు తాజా మాంసమే కావాలనీ, పావురాన్ని ఇవ్వకపోతే పావురం బరువుకు సమానంగా రాజు తన మాంసాన్నే ఇవ్వాలనీ డేగ అంది."],
   ["p", "The king agreed gladly. A pair of scales was brought; the dove sat on one side, and the king cut flesh from his own body and placed it on the other. But however much he cut, the dove was always heavier. At last the king climbed onto the scale himself, whole.", "రాజు సంతోషంగా ఒప్పుకున్నాడు. త్రాసు తెప్పించారు; ఒక పళ్ళెంలో పావురం కూర్చుంది; రాజు తన శరీరం నుండి మాంసం కోసి రెండో పళ్ళెంలో పెట్టాడు. కానీ ఎంత కోసినా పావురమే బరువుగా ఉంది. చివరికి రాజు తానే పూర్తిగా త్రాసులోకి ఎక్కి కూర్చున్నాడు."],
   ["p", "Then the hawk and the dove showed their true forms. “We are Indra and Agni,” they said. “We came to test you. Your fame will shine as long as the worlds last.” And the king went to heaven.", "అప్పుడు డేగా పావురమూ తమ నిజరూపాలు చూపించాయి. “మేము ఇంద్రుడూ అగ్నీ,” అన్నారు. “నిన్ను పరీక్షించడానికి వచ్చాము. లోకాలు ఉన్నంత కాలం నీ కీర్తి వెలుగుతుంది.” రాజు స్వర్గానికి వెళ్ళాడు."]
  ],
  [
   ["more", "Uśīnara or Śibi?", "ఉశీనరుడా, శిబి చక్రవర్తా?", "Two tellings in the same book", "ఒకే గ్రంథంలో రెండు కథనాలు", [
    ["p", "In Lomaśa's telling the king is Uśīnara. Later in the same Vana Parva, the sage {markandeya|Mārkaṇḍeya} tells a very similar story, and there the king is {shibi|Śibi}, son of Uśīnara. Most people in India today know it as the story of Śibi Cakravarti. Buddhist Jātaka tales also tell of a generous King Śibi.", "లోమశుని కథనంలో రాజు ఉశీనరుడు. అదే అరణ్య పర్వంలో తర్వాత {markandeya|మార్కండేయ} మహర్షి దాదాపు ఇలాంటి కథే చెబుతాడు; అక్కడ రాజు ఉశీనరుని కుమారుడైన {shibi|శిబి}. ఈ రోజు మన దేశంలో చాలామందికి ఇది శిబి చక్రవర్తి కథగానే తెలుసు. బౌద్ధ జాతక కథలు కూడా దానశీలుడైన శిబి రాజు గురించి చెబుతాయి."]
   ]],
   ["h", "A debate and a broken pride", "ఒక వాదం, ఒక విరిగిన గర్వం"],
   ["p", "Further north, by the river Samaṅgā, Lomaśa told the story of {ashtavakra|Aṣṭāvakra}, the boy bent in eight places, who defeated the great debater Bandin at King Janaka's court and freed his father — and who was made straight by bathing in this very river.", "ఇంకా ఉత్తరాన, సమంగా నది దగ్గర, లోమశుడు {ashtavakra|అష్టావక్రుని} కథ చెప్పాడు — ఎనిమిది వంకరలతో పుట్టిన బాలుడు జనకుని సభలో మహావాది బందిని ఓడించి తన తండ్రిని విడిపించాడు; ఇదే నదిలో స్నానం చేసి శరీరం తిన్నగా అయింది."],
   ["sglink", "Aṣṭāvakra — The Boy at the Gate", "అష్టావక్రుడు — ద్వారం దగ్గర బాలుడు", "ak-3"]
  ],
  [
   ["p", "And near Gaṅgādvāra, at the old āśrama of {raibhya|Raibhya}, he told the sad tale of {yavakri|Yavakrīta}, son of {bharadvajamuni|Bharadvāja}, who forced the Vedas out of Indra by tapas instead of learning them from a teacher, grew proud, wronged Raibhya's daughter-in-law, and was killed by a demon Raibhya raised in anger. It is a warning Lomaśa chose with care: knowledge without humility destroys its owner.", "గంగాద్వారం దగ్గర, {raibhya|రైభ్యుని} పాత ఆశ్రమంలో, {bharadvajamuni|భరద్వాజుని} కుమారుడు {yavakri|యవక్రీతుని} విషాద కథ చెప్పాడు — గురువు దగ్గర నేర్చుకోకుండా తపస్సుతో ఇంద్రుని నుండి వేదాలను బలవంతంగా పొంది, గర్వించి, రైభ్యుని కోడలి పట్ల తప్పుగా ప్రవర్తించి, కోపంతో రైభ్యుడు సృష్టించిన రాక్షసుని చేతిలో చనిపోయాడు. లోమశుడు జాగ్రత్తగా ఎంచుకున్న హెచ్చరిక ఇది: వినయం లేని విద్య దానిని కలిగినవాణ్ణే నాశనం చేస్తుంది."],
   ["sglink", "Bharadvāja — Yavakrīta, the Son Who Wanted Knowledge Without a Teacher", "భరద్వాజుడు — గురువు లేకుండా విద్య కోరిన యవక్రీతుడు", "bd-10"],
   ["dyk", "🗺️", "Lomaśa's stories follow the land. Almost every tale in this part of the epic begins, “Here, O king…” — the river or hill in front of the listeners is the first witness of the story.", "లోమశుని కథలు నేలను అనుసరిస్తాయి. మహాభారతంలోని ఈ భాగంలో దాదాపు ప్రతి కథా “రాజా, ఇక్కడే…” అని మొదలవుతుంది — వినేవారి ఎదుట ఉన్న నదీ కొండా ఆ కథకు మొదటి సాక్షి."],
   ["src", "Mahābhārata, Vana Parva, Tīrthayātrā section (Uśīnara, the hawk and the dove; Aṣṭāvakra and the Samaṅgā; Yavakrīta and Raibhya's āśrama). The Śibi telling is in the Vana Parva's Mārkaṇḍeya section.", "మహాభారతం, అరణ్య పర్వం, తీర్థయాత్రా పర్వం (ఉశీనరుడు, డేగ, పావురం; అష్టావక్రుడు, సమంగా నది; యవక్రీతుడు, రైభ్యుని ఆశ్రమం). శిబి కథనం అరణ్య పర్వంలోని మార్కండేయ సమాస్యా పర్వంలో ఉంది."]
  ]
 ],
 remember: [
  ["{indra|Indra} as a hawk and {agni|Agni} as a dove tested King {ushinara|Uśīnara}.", "{indra|ఇంద్రుడు} డేగగా, {agni|అగ్ని} పావురంగా వచ్చి {ushinara|ఉశీనర} మహారాజును పరీక్షించారు."],
  ["The king gave his own flesh, and finally his whole self, to save the bird that sought shelter.", "శరణు కోరిన పక్షిని కాపాడడానికి రాజు తన మాంసాన్ని, చివరికి తననే ఇచ్చాడు."],
  ["{lomasha|Lomaśa} also told of {ashtavakra|Aṣṭāvakra} and {yavakri|Yavakrīta} at their own rivers.", "{ashtavakra|అష్టావక్రుడు}, {yavakri|యవక్రీతుడు} కథలను కూడా {lomasha|లోమశుడు} వారి వారి నదుల దగ్గర చెప్పాడు."]
 ],
 think: ["The king could have given the hawk another animal, but the hawk refused. Was the king right to give himself instead of giving up the dove?", "రాజు డేగకు వేరే జంతువును ఇవ్వగలిగేవాడు, కానీ డేగ ఒప్పుకోలేదు. పావురాన్ని వదలకుండా తననే ఇచ్చుకోవడం సరైన పనేనా?"]
},
{
 id: "lm-9", sage: "lomasha", n: 9, order: 2909, date: "2026-10-31",
 title: "Into the Himālaya — Until Arjuna Comes Home", titleTe: "హిమాలయాల్లోకి — అర్జునుడు తిరిగి వచ్చేదాకా",
 src: "Mahābhārata, Vana Parva (Tīrthayātrā, Yakṣayuddha)",
 who: ["lomasha", "yudhishthira", "bhima", "draupadi", "ghatotkaca", "naranarayana", "hanuman", "jatasura", "arjuna", "matali", "indra"],
 pages: [
  [
   ["p", "Past Gaṅgādvāra and Kanakhala, the road climbed into the mountains. {lomasha|Lomaśa} warned them plainly: the way ahead was harder than anything they had seen — cold, steep, guarded by yakṣas and rākṣasas. Only those with self-control and courage should go further.", "గంగాద్వారం, కనఖలం దాటాక దారి కొండల్లోకి ఎక్కింది. {lomasha|లోమశుడు} సూటిగా హెచ్చరించాడు: ముందున్న దారి వారు ఇప్పటిదాకా చూసిన అన్నిటికంటే కష్టమైనది — చలి, నిటారు కొండలు, యక్షులూ రాక్షసులూ కాపలా. ఇంద్రియనిగ్రహం, ధైర్యం ఉన్నవారే ముందుకు రావాలి."],
   ["p", "{yudhishthira|Yudhiṣṭhira} was afraid for {draupadi|Draupadī} and thought of leaving her and the others behind with {bhima|Bhīma}. But Bhīma would not hear of it. “Draupadī will not stay behind,” he said, “and neither will I. Where the path is too hard, I will carry her — and the twins too.”", "{draupadi|ద్రౌపది} గురించి భయపడిన {yudhishthira|ధర్మరాజు} ఆమెనూ మిగిలినవారినీ {bhima|భీమునితో} వెనకే ఉంచి వెళ్ళాలనుకున్నాడు. కానీ భీముడు ఒప్పుకోలేదు. “ద్రౌపది వెనక ఉండదు,” అన్నాడు, “నేనూ ఉండను. దారి కష్టమైన చోట ఆమెను నేను మోసుకెళ్తాను — కవలలను కూడా.”"]
  ],
  [
   ["h", "The storm on Gandhamādana", "గంధమాదనం మీద తుఫాను"],
   ["p", "On the slopes of Mount Gandhamādana a terrible storm broke over them — wind, darkness, rain and hail. Draupadī, worn out by the long journey, fainted. The brothers held her and rubbed her cold hands, and Yudhiṣṭhira wept that he had brought her to this.", "గంధమాదన పర్వతపు వాలుల మీద వారి మీద భయంకరమైన తుఫాను విరుచుకుపడింది — గాలి, చీకటి, వాన, వడగళ్ళు. సుదీర్ఘ ప్రయాణంతో అలసిపోయిన ద్రౌపది సొమ్మసిల్లి పడిపోయింది. అన్నదమ్ములు ఆమెను పట్టుకుని చల్లబడిన చేతులు రుద్దారు; ఆమెను ఈ స్థితికి తెచ్చానని ధర్మరాజు కన్నీళ్ళు పెట్టుకున్నాడు."],
   ["p", "Then Bhīma thought of his son {ghatotkaca|Ghaṭotkaca}, and at once the huge rākṣasa came with his companions. They lifted the Pāṇḍavas, Draupadī and the brāhmaṇas onto their shoulders and carried them across the mountains. Lomaśa, the epic says, needed no one to carry him: he went ahead along the path of the siddhas by his own power, like a second sun in the sky.", "అప్పుడు భీముడు తన కొడుకు {ghatotkaca|ఘటోత్కచుని} తలచుకున్నాడు; వెంటనే ఆ మహాకాయుడైన రాక్షసుడు తన అనుచరులతో వచ్చాడు. వారు పాండవులనూ ద్రౌపదినీ బ్రాహ్మణులనూ భుజాల మీదకు ఎత్తుకుని కొండలు దాటించారు. లోమశుణ్ణి మాత్రం ఎవరూ మోయవలసిన అవసరం లేకపోయింది — మహాభారతం చెబుతుంది — ఆయన తన శక్తితోనే సిద్ధుల మార్గంలో, ఆకాశంలో రెండో సూర్యునిలా ముందు వెళ్ళాడు."]
  ],
  [
   ["h", "At Badarī, and the dangers there", "బదరిలో — అక్కడి ఆపదలు"],
   ["p", "They came to Badarī, the āśrama of {naranarayana|Nara and Nārāyaṇa}, and rested there among the sages. From there Bhīma went off alone to find a golden saugandhika flower that Draupadī longed for — and met his elder brother {hanuman|Hanumān} on the way, lying across the path as an old monkey whose tail Bhīma could not lift.", "{naranarayana|నరనారాయణుల} ఆశ్రమమైన బదరికి వచ్చి, మునుల మధ్య విశ్రాంతి తీసుకున్నారు. అక్కడి నుండి ద్రౌపది కోరిన సౌగంధిక పుష్పం కోసం భీముడు ఒంటరిగా వెళ్ళాడు — దారిలో ముసలి కోతిలా దారికి అడ్డంగా పడుకుని ఉన్న తన అన్న {hanuman|హనుమంతుని} కలిశాడు; ఆ తోకను భీముడు ఎత్తలేకపోయాడు."],
   ["p", "The mountains held other dangers too. A rākṣasa named {jatasura|Jaṭāsura} had joined the company disguised as a brāhmaṇa. One day, while Bhīma was away hunting, he seized Yudhiṣṭhira, the twins and Draupadī and tried to carry them off. Bhīma came back in time, fought him, and killed him. Lomaśa had warned that the forest was full of such beings; Indra's request that the sage guard them had not been idle.", "కొండలలో ఇతర ఆపదలు కూడా ఉన్నాయి. {jatasura|జటాసురుడు} అనే రాక్షసుడు బ్రాహ్మణ వేషంలో బృందంలో చేరాడు. ఒక రోజు భీముడు వేటకు వెళ్ళినప్పుడు, వాడు ధర్మరాజునూ కవలలనూ ద్రౌపదినీ పట్టుకుని ఎత్తుకుపోవాలని చూశాడు. భీముడు సమయానికి తిరిగి వచ్చి వాడితో పోరాడి చంపేశాడు. అడవి ఇలాంటివాళ్ళతో నిండి ఉందని లోమశుడు ముందే హెచ్చరించాడు; మునిని కాపలాగా పంపమని ఇంద్రుడు అడగడం వృథా కాలేదు."]
  ],
  [
   ["h", "The chariot from heaven", "స్వర్గం నుండి రథం"],
   ["p", "They climbed on to the āśramas of the royal sages Vṛṣaparvan and Ārṣṭiṣeṇa, high on the mountain, and there they waited. At last, one day, a shining chariot came down out of the sky, driven by {matali|Mātali}, Indra's charioteer. In it stood {arjuna|Arjuna}, wearing a crown and divine ornaments, returning with every weapon of heaven.", "కొండ మీద ఇంకా పైకి, రాజర్షులైన వృషపర్వుడు, ఆర్ష్టిషేణుల ఆశ్రమాలకు ఎక్కి, అక్కడ ఎదురుచూశారు. చివరికి ఒక రోజు {indra|ఇంద్రుని} సారథి {matali|మాతలి} నడుపుతున్న ఒక మెరిసే రథం ఆకాశం నుండి దిగివచ్చింది. అందులో కిరీటం, దివ్యాభరణాలు ధరించి, స్వర్గంలోని అన్ని అస్త్రాలతో {arjuna|అర్జునుడు} నిలబడి ఉన్నాడు."],
   ["p", "The brothers ran to embrace him; Draupadī wept with joy. Lomaśa had done all that Indra and Arjuna had asked of him: he had carried the news, guided the brothers across the land, and brought them safely to the place where they were reunited. The old sage had kept his word as faithfully as any of the heroes in his stories.", "అన్నదమ్ములు పరుగెత్తి అతణ్ణి కౌగిలించుకున్నారు; ద్రౌపది ఆనందంతో కన్నీళ్ళు పెట్టుకుంది. ఇంద్రుడూ అర్జునుడూ అడిగినదంతా లోమశుడు చేశాడు: వార్త అందించాడు, దేశమంతా అన్నదమ్ములకు దారి చూపాడు, వారు మళ్ళీ కలుసుకునే చోటికి క్షేమంగా చేర్చాడు. ఆయన చెప్పిన కథలలోని ఏ వీరునితోనూ సమానంగా ఆ వృద్ధ ముని తన మాట నిలబెట్టుకున్నాడు."],
   ["src", "Mahābhārata, Vana Parva — the end of the Tīrthayātrā section (Lomaśa's warnings; Bhīma's promise; the storm on Gandhamādana; Ghaṭotkaca carries the company; Lomaśa travels by his own power; Badarī), the Jaṭāsuravadha and Yakṣayuddha sections (Jaṭāsura; Vṛṣaparvan and Ārṣṭiṣeṇa), and the Nivātakavacayuddha section (Arjuna's return with Mātali). Bhīma's meeting with Hanumān is in the Vana Parva's Saugandhikāharaṇa.", "మహాభారతం, అరణ్య పర్వం — తీర్థయాత్రా పర్వం చివరి భాగం (లోమశుని హెచ్చరికలు; భీముని మాట; గంధమాదనం మీద తుఫాను; ఘటోత్కచుడు బృందాన్ని మోయడం; లోమశుడు తన శక్తితో వెళ్ళడం; బదరి), జటాసుర వధ, యక్షయుద్ధ పర్వాలు (జటాసురుడు; వృషపర్వ, ఆర్ష్టిషేణులు), నివాతకవచ యుద్ధ పర్వం (మాతలితో అర్జునుని పునరాగమనం). హనుమంతుణ్ణి భీముడు కలవడం అరణ్య పర్వంలోని సౌగంధికాహరణ పర్వంలో ఉంది."]
  ]
 ],
 remember: [
  ["{bhima|Bhīma} refused to leave {draupadi|Draupadī} behind and promised to carry her.", "{draupadi|ద్రౌపదిని} వెనక వదలనని, మోసుకెళ్తానని {bhima|భీముడు} అన్నాడు."],
  ["{ghatotkaca|Ghaṭotkaca} carried the company over the mountains; {lomasha|Lomaśa} travelled by his own power.", "{ghatotkaca|ఘటోత్కచుడు} బృందాన్ని కొండలు దాటించాడు; {lomasha|లోమశుడు} తన శక్తితోనే ప్రయాణించాడు."],
  ["{arjuna|Arjuna} came home in Indra's chariot, and Lomaśa's charge was fulfilled.", "{arjuna|అర్జునుడు} ఇంద్ర రథంలో తిరిగి వచ్చాడు; లోమశునికి అప్పగించిన పని పూర్తయింది."]
 ],
 think: ["Lomaśa was asked to bring news, guide and protect. Which of those three do you think the Pāṇḍavas needed most?", "వార్త తేవడం, దారి చూపడం, కాపాడడం — ఈ మూడూ లోమశునికి అప్పగించారు. పాండవులకు వీటిలో ఏది ఎక్కువ అవసరమైందని మీరనుకుంటున్నారు?"]
},
{
 id: "lm-10", sage: "lomasha", n: 10, order: 2910, date: "2026-10-31",
 title: "One Hair for Each Brahmā — Indra's Palace", titleTe: "ఒక్కో బ్రహ్మకు ఒక్కో రోమం — ఇంద్రుని భవనం",
 src: "Brahmavaivarta Purāṇa, Kṛṣṇajanma Khaṇḍa (a later telling)",
 who: ["lomasha", "indra", "vishvakarma", "brahma", "vishnu", "vritra"],
 pages: [
  [
   ["p", "The Mahābhārata never says how long {lomasha|Lomaśa} has lived. A later Purāṇa, the Brahmavaivarta, answers that question with a story — and it is a story about pride, told to the proudest of the gods.", "లోమశుడు ఎంత కాలంగా బ్రతికి ఉన్నాడో మహాభారతం ఎక్కడా చెప్పదు. తర్వాతి కాలపు బ్రహ్మవైవర్త పురాణం ఆ ప్రశ్నకు ఒక కథతో జవాబిస్తుంది — అది గర్వం గురించిన కథ, దేవతలలో అందరికంటే గర్వించినవానికి చెప్పిన కథ."],
   ["p", "After {indra|Indra} had killed the demon {vritra|Vṛtra} and won back heaven, he called {vishvakarma|Viśvakarmā}, the architect of the gods, and ordered a new palace worthy of his glory. Viśvakarmā built it — towers, gardens, lakes, halls of jewels. Indra looked at it and said, “More.” Viśvakarmā built more. “Bigger. Grander,” said Indra. And so it went on, year after year, until the weary architect went secretly to {brahma|Brahmā} for help, and Brahmā went to {vishnu|Viṣṇu}.", "{vritra|వృత్రాసురుణ్ణి} చంపి స్వర్గాన్ని తిరిగి గెలుచుకున్న తర్వాత {indra|ఇంద్రుడు} దేవశిల్పి {vishvakarma|విశ్వకర్మను} పిలిచి తన వైభవానికి తగిన కొత్త భవనం కట్టమని ఆజ్ఞాపించాడు. విశ్వకర్మ కట్టాడు — గోపురాలు, ఉద్యానవనాలు, సరస్సులు, రత్నమండపాలు. ఇంద్రుడు చూసి, “ఇంకా,” అన్నాడు. విశ్వకర్మ ఇంకా కట్టాడు. “ఇంకా పెద్దగా, ఇంకా వైభవంగా,” అన్నాడు ఇంద్రుడు. అలా ఏళ్ళ తరబడి సాగింది; చివరికి అలసిపోయిన శిల్పి రహస్యంగా {brahma|బ్రహ్మదేవుని} దగ్గరకు సహాయం కోసం వెళ్ళాడు; బ్రహ్మ {vishnu|విష్ణువు} దగ్గరకు వెళ్ళాడు."]
  ],
  [
   ["h", "A boy at the gate, and a line of ants", "ద్వారం దగ్గర ఒక బాలుడు, చీమల వరుస"],
   ["p", "One day a young brāhmaṇa boy, bright as the sun, came to Indra's palace. Indra received him with honour. The boy praised the palace — and then remarked, as if in passing, that no Indra before had ever built one quite so large. “Indras before me?” said Indra. “How many have you seen?”", "ఒక రోజు సూర్యునిలా వెలిగిపోతున్న ఒక బ్రాహ్మణ బాలుడు ఇంద్ర భవనానికి వచ్చాడు. ఇంద్రుడు అతణ్ణి గౌరవంగా ఆహ్వానించాడు. బాలుడు భవనాన్ని పొగిడాడు — తర్వాత మాటల మధ్యలో అన్నట్లు, ఇంతకు ముందు ఏ ఇంద్రుడూ ఇంత పెద్ద భవనం కట్టలేదని అన్నాడు. “నాకు ముందు ఇంద్రులా?” అన్నాడు ఇంద్రుడు. “నువ్వు ఎంతమందిని చూశావు?”"],
   ["p", "The boy laughed and spoke of the endless turning of time: Brahmā after Brahmā, each with his ages, and in each day of each Brahmā a long line of Indras rising and falling. Just then a long procession of ants came marching across the palace floor. “Each of these,” said the boy, “was once an Indra. By their deeds they rose to be king of the gods; by their deeds they have come to this.”", "బాలుడు నవ్వి కాలం అంతులేకుండా తిరుగుతుండడం గురించి చెప్పాడు: బ్రహ్మ తర్వాత బ్రహ్మ, ఒక్కొక్కరికీ ఎన్నో యుగాలు; ప్రతి బ్రహ్మ ఒక్కొక్క రోజులోనూ ఇంద్రుల పెద్ద వరుస — పుట్టడం, పడిపోవడం. సరిగ్గా అప్పుడే భవనపు నేల మీద చీమల పొడవాటి బారు ఒకటి నడుచుకుంటూ వచ్చింది. “ఇందులో ప్రతి చీమా ఒకప్పుడు ఇంద్రుడే,” అన్నాడు బాలుడు. “తమ కర్మల వల్ల దేవరాజులయ్యారు; తమ కర్మల వల్లే ఇప్పుడు ఈ స్థితికి వచ్చారు.”"]
  ],
  [
   ["h", "The old sage with a bald patch", "బట్టతల మచ్చ ఉన్న వృద్ధ ముని"],
   ["p", "While Indra stood shaken, a very old sage walked in, his body covered all over with hair, carrying a little screen of leaves on his head against the sun. On his chest there was a round patch where the hair had fallen out. The boy greeted him and asked, as if for Indra's sake, who he was and why he lived like that.", "ఇంద్రుడు కలవరపడి నిలబడి ఉండగా, ఒంటి నిండా రోమాలతో, ఎండ తగలకుండా తల మీద ఆకుల గొడుగు పెట్టుకుని, చాలా వృద్ధుడైన ఒక ముని లోపలికి వచ్చాడు. ఆయన ఛాతీ మీద రోమాలు రాలిపోయిన ఒక గుండ్రని మచ్చ ఉంది. బాలుడు ఆయనకు నమస్కరించి — ఇంద్రుని కోసమే అన్నట్లు — మీరెవరు, ఇలా ఎందుకు బ్రతుకుతున్నారు అని అడిగాడు."],
   ["p", "“My name is Lomaśa,” said the sage. “Each time a Brahmā's life comes to its end, one hair falls from my body. You see how many have fallen already. When all have fallen, I too shall die. With a life so short, why should I build a house? This leaf is shelter enough.”", "“నా పేరు లోమశుడు,” అన్నాడు ముని. “ఒక్కో బ్రహ్మ ఆయుష్షు ముగిసినప్పుడల్లా నా శరీరం నుండి ఒక రోమం రాలిపోతుంది. ఇప్పటికే ఎన్ని రాలిపోయాయో చూస్తున్నారుగా. అన్నీ రాలిపోయినప్పుడు నేనూ చనిపోతాను. ఇంత చిన్న జీవితానికి ఇల్లు కట్టుకోవడం ఎందుకు? ఈ ఆకు నీడ చాలు.”"]
  ],
  [
   ["p", "Indra understood at last. A life that outlasts countless Brahmās still did not seem long enough to Lomaśa for building a palace — and Indra, whose reign was a moment in that life, had been tormenting an architect for a bigger one. The boy and the sage vanished. Indra paid Viśvakarmā, sent him home with honour, and turned his mind to wiser things.", "ఇంద్రునికి చివరికి అర్థమైంది. లెక్కలేనంత మంది బ్రహ్మలను మించిన జీవితం కూడా భవనం కట్టుకోవడానికి సరిపడా పెద్దదని లోమశునికి అనిపించలేదు — ఆ జీవితంలో ఒక్క క్షణం మాత్రమే అయిన పాలన ఉన్న ఇంద్రుడు ఇంకా పెద్ద భవనం కోసం ఒక శిల్పిని వేధిస్తున్నాడు. బాలుడూ మునీ అదృశ్యమయ్యారు. ఇంద్రుడు విశ్వకర్మకు తగిన బహుమానం ఇచ్చి గౌరవంగా పంపించి, మనసును వివేకవంతమైన విషయాల వైపు మళ్ళించాడు."],
   ["more", "Where this story comes from", "ఈ కథ ఎక్కడిది", "A later Purāṇa, not the epic", "మహాభారతం కాదు — తర్వాతి పురాణం", [
    ["p", "This tale belongs to the Brahmavaivarta Purāṇa, one of the later Purāṇas, in its book on Kṛṣṇa's birth. The boy is Viṣṇu himself. The Mahābhārata's Lomaśa is very old and travels between the worlds, but the epic does not tell of the falling hairs. Read this as the tradition's later way of saying how ancient he is.", "ఈ కథ తర్వాతి కాలపు పురాణాలలో ఒకటైన బ్రహ్మవైవర్త పురాణంలో, కృష్ణజన్మ ఖండంలో ఉంది. ఆ బాలుడు స్వయంగా విష్ణువే. మహాభారతంలోని లోమశుడు చాలా వృద్ధుడు, లోకాల మధ్య తిరిగేవాడు; కానీ రాలిపోయే రోమాల సంగతి మహాభారతం చెప్పదు. ఆయన ఎంత ప్రాచీనుడో చెప్పడానికి సంప్రదాయం తర్వాత కల్పించుకున్న విధానంగా దీనిని చదవండి."]
   ]],
   ["src", "Brahmavaivarta Purāṇa, Kṛṣṇajanma Khaṇḍa (Indra's palace, Viśvakarmā, the brāhmaṇa boy, the ants and the sage Lomaśa).", "బ్రహ్మవైవర్త పురాణం, కృష్ణజన్మ ఖండం (ఇంద్రుని భవనం, విశ్వకర్మ, బ్రాహ్మణ బాలుడు, చీమలు, లోమశ ముని)."]
  ]
 ],
 remember: [
  ["{indra|Indra} kept ordering {vishvakarma|Viśvakarmā} to make his palace grander.", "{indra|ఇంద్రుడు} తన భవనాన్ని ఇంకా వైభవంగా కట్టమని {vishvakarma|విశ్వకర్మను} వేధిస్తూనే ఉన్నాడు."],
  ["A boy — {vishnu|Viṣṇu} — showed him a line of ants, each once an Indra.", "ఒక బాలుడు — {vishnu|విష్ణువు} — ఒకప్పుడు ఇంద్రులైన చీమల వరుసను చూపించాడు."],
  ["{lomasha|Lomaśa} said one hair falls from him at the end of each Brahmā's life, so he builds no house.", "ఒక్కో బ్రహ్మ ఆయుష్షు ముగిసినప్పుడు తనకు ఒక రోమం రాలుతుందనీ, అందుకే ఇల్లు కట్టుకోననీ {lomasha|లోమశుడు} చెప్పాడు."]
 ],
 think: ["Lomaśa lives longer than countless Brahmās but still thinks life is too short to build a house. What does that make you think about the things we work so hard to own?", "లోమశుడు లెక్కలేనంత మంది బ్రహ్మలకంటే ఎక్కువ కాలం బ్రతుకుతాడు; అయినా ఇల్లు కట్టుకోవడానికి జీవితం చాలదంటాడు. మనం కష్టపడి సంపాదించుకోవాలనుకునే వస్తువుల గురించి ఇది మీకు ఏం ఆలోచింపజేస్తుంది?"]
},
{
 id: "lm-11", sage: "lomasha", n: 11, order: 2911, date: "2026-10-31",
 title: "The Curse That Made a Crow — Kākabhuśuṇḍi", titleTe: "కాకిగా మార్చిన శాపం — కాకభుశుండి",
 src: "Tulasīdāsa, Rāmacaritamānasa, Uttara Kāṇḍa (a later telling)",
 who: ["lomasha", "kakabhushundi", "rama", "shiva", "garuda"],
 pages: [
  [
   ["p", "Some six hundred years ago the poet Tulasīdāsa wrote the Rāma story in Avadhī, a form of Hindi, as the *Rāmacaritamānasa*. Near its end he tells how the story was handed down — and one link in that chain is {lomasha|Lomaśa}, appearing here in a role the Mahābhārata never gives him: an angry teacher whose curse becomes a blessing.", "సుమారు ఆరువందల సంవత్సరాల క్రితం తులసీదాసు అనే కవి రామకథను హిందీ భాషలోని ఒక రూపమైన అవధిలో *రామచరితమానస్* గా రాశాడు. దాని చివరలో ఆ కథ ఒకరి నుండి ఒకరికి ఎలా అందిందో చెబుతాడు — ఆ గొలుసులోని ఒక కొండి {lomasha|లోమశుడు}; మహాభారతం ఎప్పుడూ ఇవ్వని పాత్రలో ఇక్కడ కనిపిస్తాడు: శాపమే వరంగా మారిన ఒక కోపిష్ఠి గురువు."],
   ["p", "The teller of this part is a crow — {kakabhushundi|Kākabhuśuṇḍi}, who lives on a blue mountain and recites the Rāma story to the birds. {garuda|Garuḍa}, king of birds, comes to him with a doubt, and the crow explains how he came to be a crow at all.", "ఈ భాగాన్ని చెప్పేది ఒక కాకి — {kakabhushundi|కాకభుశుండి}; నీలగిరి మీద ఉంటూ పక్షులకు రామకథ వినిపిస్తుంటాడు. పక్షిరాజు {garuda|గరుత్మంతుడు} ఒక సందేహంతో ఆయన దగ్గరకు వస్తాడు; తాను అసలు కాకిగా ఎలా మారాడో ఆ కాకి వివరిస్తుంది."]
  ],
  [
   ["h", "The student who would not stop arguing", "వాదించడం ఆపని శిష్యుడు"],
   ["p", "In an earlier life, Bhuśuṇḍi said, he had been a brāhmaṇa who loved {rama|Rāma} in his form as a person — dark-skinned, bow in hand, a child in Kausalyā's lap. Wanting to learn more, he went to the great sage Lomaśa on Mount Meru.", "పూర్వజన్మలో — అన్నాడు భుశుండి — తాను ఒక బ్రాహ్మణుడు; రూపం ఉన్న రాముణ్ణి — నల్లని శరీరంతో, చేతిలో విల్లుతో, కౌసల్య ఒడిలోని బిడ్డగా — ప్రేమించేవాడు. ఇంకా తెలుసుకోవాలని మేరు పర్వతం మీద ఉన్న మహర్షి లోమశుని దగ్గరకు వెళ్ళాడు."],
   ["p", "Lomaśa began to teach him about Brahman without form or qualities — beyond all shapes, beyond all names. But the student kept interrupting. “I want the Lord with form,” he said. “Tell me of Rāma.” Lomaśa explained again; the student argued again. Again and again it went on.", "లోమశుడు అతనికి రూపం లేని, గుణాలు లేని పరబ్రహ్మం గురించి బోధించడం మొదలుపెట్టాడు — అన్ని రూపాలకూ అన్ని నామాలకూ అతీతమైనది. కానీ శిష్యుడు మధ్యలోనే అడ్డుపడుతూ ఉన్నాడు. “నాకు రూపం ఉన్న భగవంతుడు కావాలి,” అన్నాడు. “రాముని గురించి చెప్పండి.” లోమశుడు మళ్ళీ వివరించాడు; శిష్యుడు మళ్ళీ వాదించాడు. ఇలా మళ్ళీ మళ్ళీ సాగింది."]
  ],
  [
   ["h", "The curse, and what the student did", "శాపం — శిష్యుడు ఏం చేశాడు"],
   ["p", "At last the old sage lost his temper. “You are like a crow,” he cried, “who keeps cawing his own opinion and will not listen. Become a crow, then!” And at once the brāhmaṇa became a crow.", "చివరికి వృద్ధ మునికి కోపం వచ్చింది. “నువ్వు కాకిలా ఉన్నావు,” అని గట్టిగా అన్నాడు, “నీ అభిప్రాయమే కావుకావుమని అరుస్తూ, ఏమీ వినవు. అయితే కాకివై పో!” వెంటనే ఆ బ్రాహ్మణుడు కాకి అయిపోయాడు."],
   ["p", "But the student was neither afraid nor angry. He bowed to his teacher and accepted the curse calmly, saying in his heart that even this was Rāma's will. Seeing that, Lomaśa's anger melted into wonder and regret. He called the crow back, gave him the Rāma mantra, and taught him the whole Rāma story, which, says Tulasīdāsa, Śiva himself had first composed and kept in his heart.", "కానీ శిష్యుడు భయపడలేదు, కోపగించుకోలేదు. గురువుకు నమస్కరించి, ఇది కూడా రాముని సంకల్పమే అని మనసులో అనుకుంటూ శాపాన్ని ప్రశాంతంగా స్వీకరించాడు. అది చూసి లోమశుని కోపం ఆశ్చర్యంగా, పశ్చాత్తాపంగా మారింది. కాకిని మళ్ళీ దగ్గరకు పిలిచి, రామ మంత్రం ఉపదేశించి, రామకథంతా నేర్పించాడు — మొదట స్వయంగా {shiva|శివుడే} రచించి తన హృదయంలో దాచుకున్న కథ అని తులసీదాసు అంటాడు."],
   ["p", "And he blessed him: “Love for Rāma will never leave you. You will live long, and wherever you live, no illusion will touch you.” So the crow kept his crow's body by choice, for it was in that body that he had received his greatest gift.", "ఆశీర్వదించాడు కూడా: “రాముని మీద నీ భక్తి ఎప్పటికీ నిన్ను వదలదు. చాలా కాలం బ్రతుకుతావు; నువ్వు ఎక్కడ ఉన్నా మాయ నిన్ను తాకదు.” అందుకే ఆ కాకి తన కాకి శరీరాన్నే ఇష్టంగా ఉంచుకుంది — తనకు దక్కిన గొప్ప వరం ఆ శరీరంలోనే దక్కింది మరి."]
  ],
  [
   ["more", "A later telling", "తర్వాతి కాలపు కథనం", "From Tulasīdāsa, not the epics", "ఇది తులసీదాసు కథ — ఇతిహాసాలది కాదు", [
    ["p", "This story is from the Rāmacaritamānasa (sixteenth century). It is not in Vālmīki's Rāmāyaṇa or the Mahābhārata. It has become very well known in North India, and through Hindi Rāmāyaṇa recitations, among Telugu families too.", "ఈ కథ రామచరితమానస్ (పదహారవ శతాబ్దం) లోనిది. వాల్మీకి రామాయణంలో గానీ మహాభారతంలో గానీ లేదు. ఉత్తర భారతదేశంలో ఇది బాగా ప్రసిద్ధి; హిందీ రామాయణ పారాయణాల ద్వారా తెలుగు కుటుంబాలకూ పరిచయమే."]
   ]],
   ["p", "It is a curious portrait: the sage of patient storytelling losing patience with a student. Yet it fits the old pattern of Indian tales, where the anger of a sage is often the door to something greater. And the student teaches the teacher something too — that devotion can bow even to a curse.", "ఇది ఒక విచిత్రమైన చిత్రం: ఓపికగా కథలు చెప్పే ముని ఒక శిష్యుని మీద ఓపిక కోల్పోవడం. అయినా మన కథల పాత పద్ధతికి ఇది సరిపోతుంది — ముని కోపం తరచూ ఇంకా గొప్ప దానికి ద్వారం అవుతుంది. శిష్యుడు కూడా గురువుకు ఒకటి నేర్పాడు — భక్తి శాపానికి కూడా తల వంచగలదు అని."],
   ["src", "Tulasīdāsa, Rāmacaritamānasa, Uttara Kāṇḍa (Kākabhuśuṇḍi tells Garuḍa of his earlier life, his arguments with Lomaśa, the curse and the blessing).", "తులసీదాసు, రామచరితమానస్, ఉత్తరకాండ (కాకభుశుండి తన పూర్వజన్మ, లోమశునితో వాదం, శాపం, ఆశీర్వాదం గురించి గరుత్మంతునికి చెప్పడం)."]
  ]
 ],
 remember: [
  ["In Tulasīdāsa's telling, {lomasha|Lomaśa} taught the formless Brahman to a student who wanted only {rama|Rāma} with form.", "తులసీదాసు కథనంలో, రూపం ఉన్న {rama|రాముణ్ణే} కోరిన శిష్యునికి {lomasha|లోమశుడు} నిరాకార బ్రహ్మం బోధించాడు."],
  ["Angered by his arguing, Lomaśa cursed him to become a crow.", "అతని వాదనలకు కోపం వచ్చి లోమశుడు అతణ్ణి కాకివి కమ్మని శపించాడు."],
  ["The student accepted the curse calmly, and Lomaśa blessed him — he became {kakabhushundi|Kākabhuśuṇḍi}.", "శిష్యుడు శాపాన్ని ప్రశాంతంగా స్వీకరించాడు; లోమశుడు ఆశీర్వదించాడు — అతడే {kakabhushundi|కాకభుశుండి}."]
 ],
 think: ["The student was cursed, yet he did not get angry back. What changed in Lomaśa when he saw that?", "శిష్యుడు శాపం పొందినా తిరిగి కోపగించుకోలేదు. అది చూసినప్పుడు లోమశునిలో ఏం మారింది?"]
},
{
 id: "lm-12", sage: "lomasha", n: 12, order: 2912, date: "2026-10-31",
 title: "What Lomaśa Leaves Us", titleTe: "లోమశుడు మనకు ఇచ్చినది",
 src: "Mahābhārata · Purāṇas · later tradition",
 who: ["lomasha", "yudhishthira", "indra", "agastya", "pulastya", "markandeya"],
 pages: [
  [
   ["p", "Look back over the life of {lomasha|Lomaśa} and you find a sage unlike most others. He fights no demon, founds no family, writes down no Veda. He is a messenger, a guide, a guardian — and above all a teller of stories in the places where they happened.", "{lomasha|లోమశుని} జీవితాన్ని ఒకసారి వెనక్కి చూస్తే, చాలామంది మునులకు భిన్నమైన ఒక ముని కనిపిస్తాడు. ఆయన ఏ రాక్షసుడితోనూ యుద్ధం చేయడు, ఏ వంశాన్నీ స్థాపించడు, ఏ వేదాన్నీ దర్శించడు. ఆయన ఒక దూత, ఒక మార్గదర్శి, ఒక రక్షకుడు — అన్నిటికంటే మించి, కథలు జరిగిన చోట్లలోనే ఆ కథలను చెప్పేవాడు."],
   ["p", "In the Mahābhārata, he is part of a family of such tellers. {pulastya|Pulastya} explained the tīrthas to Bhīṣma; Nārada repeated it; Dhaumya listed them; {markandeya|Mārkaṇḍeya} later came with stories of the ages. But Lomaśa was the one who walked the road. His teaching is the teaching of the journey itself.", "మహాభారతంలో ఇలాంటి కథకుల కుటుంబంలో ఆయన ఒకడు. {pulastya|పులస్త్యుడు} భీష్మునికి తీర్థాల గురించి వివరించాడు; నారదుడు దానిని మళ్ళీ చెప్పాడు; ధౌమ్యుడు జాబితా ఇచ్చాడు; తర్వాత {markandeya|మార్కండేయుడు} యుగాల కథలతో వచ్చాడు. కానీ ఆ దారిలో నడిచింది లోమశుడే. ఆయన బోధ ప్రయాణమే బోధగా ఉన్న బోధ."]
  ],
  [
   ["h", "Lomaśa in the later books", "తర్వాతి గ్రంథాలలో లోమశుడు"],
   ["p", "Later writers kept giving him the storyteller's seat. In parts of the Skanda Purāṇa's Māheśvara Khaṇḍa, it is Lomaśa who tells the sages the tales of Śiva and the holy places. A work on astrology, the *Lomaśa Saṃhitā*, is traditionally attributed to him. And the Brahmavaivarta Purāṇa and Tulasīdāsa, as we saw, made him a figure of endless age and of fierce but generous teaching.", "తర్వాతి రచయితలు కూడా ఆయనకు కథకుని ఆసనమే ఇస్తూ వచ్చారు. స్కాంద పురాణంలోని మాహేశ్వర ఖండంలో కొన్ని భాగాలలో శివుని కథలనూ పుణ్యక్షేత్రాల కథలనూ మునులకు చెప్పేది లోమశుడే. జ్యోతిష్యానికి సంబంధించిన *లోమశ సంహిత* అనే గ్రంథాన్ని సంప్రదాయం ఆయనకు ఆపాదిస్తుంది. మనం చూసినట్లు, బ్రహ్మవైవర్త పురాణం, తులసీదాసు ఆయనను అంతులేని ఆయుష్షు కలవానిగా, కోపంగా అయినా ఉదారంగా బోధించే గురువుగా చూపించారు."],
   ["dyk", "🌤️", "Like Nārada, Lomaśa is one of the few sages in the epic who moves freely between heaven and earth — he can stand in Indra's hall one day and in a forest on earth the next.", "నారదుని లాగే, మహాభారతంలో స్వర్గానికీ భూమికీ మధ్య స్వేచ్ఛగా తిరిగే అతి కొద్దిమంది మునులలో లోమశుడు ఒకడు — ఒక రోజు ఇంద్రసభలో, మరుసటి రోజు భూలోకంలోని అడవిలో ఉండగలడు."]
  ],
  [
   ["h", "Four things to carry home", "ఇంటికి తీసుకెళ్ళవలసిన నాలుగు మాటలు"],
   ["p", "First: hard times are not proof that dharma has failed. Lomaśa told {yudhishthira|Yudhiṣṭhira} that wrongdoing may flourish for a season, but it falls from the root. Second: a journey cleans the body; only a clean mind gains its fruit.", "మొదటిది: కష్టకాలం ధర్మం ఓడిపోయిందనడానికి రుజువు కాదు. అధర్మం ఒక కాలం వర్ధిల్లవచ్చు, కానీ వేళ్ళతో సహా కూలిపోతుందని లోమశుడు {yudhishthira|ధర్మరాజుకు} చెప్పాడు. రెండోది: ప్రయాణం శరీరాన్ని శుభ్రం చేస్తుంది; శుభ్రమైన మనసుకే దాని ఫలం దక్కుతుంది."],
   ["p", "Third: the land itself remembers. Every river and hill Lomaśa passed carried a story of courage, faith or folly, and he taught the brothers to listen to it. Fourth, from his later legend: even a life longer than many Brahmās is too short for pride — so build no palace you do not need, and spend the time on what lasts.", "మూడోది: నేలే గుర్తుంచుకుంటుంది. లోమశుడు దాటిన ప్రతి నదీ, ప్రతి కొండా ధైర్యానికో, విశ్వాసానికో, మూర్ఖత్వానికో సంబంధించిన ఒక కథను మోస్తోంది; దానిని వినడం ఆయన అన్నదమ్ములకు నేర్పాడు. నాలుగోది, ఆయన తర్వాతి కాలపు కథ నుండి: ఎంతోమంది బ్రహ్మల కంటే పెద్ద జీవితం కూడా గర్వానికి చాలా చిన్నది — కాబట్టి అవసరం లేని భవనాలు కట్టకు; కాలాన్ని శాశ్వతమైనవాటి కోసం వెచ్చించు."],
   ["sglink", "Begin again — The Hairy Sage", "మళ్ళీ మొదటి నుండి — రోమాలతో నిండిన మహర్షి", "lm-1"],
   ["src", "Mahābhārata, Vana Parva (Tīrthayātrā). Skanda Purāṇa, Māheśvara Khaṇḍa (Lomaśa as narrator). Lomaśa Saṃhitā (a later astrological work bearing his name). Brahmavaivarta Purāṇa, Kṛṣṇajanma Khaṇḍa. Tulasīdāsa, Rāmacaritamānasa, Uttara Kāṇḍa.", "మహాభారతం, అరణ్య పర్వం (తీర్థయాత్రా పర్వం). స్కాంద పురాణం, మాహేశ్వర ఖండం (కథకుడిగా లోమశుడు). లోమశ సంహిత (ఆయన పేరుతో ఉన్న తర్వాతి కాలపు జ్యోతిష గ్రంథం). బ్రహ్మవైవర్త పురాణం, కృష్ణజన్మ ఖండం. తులసీదాసు, రామచరితమానస్, ఉత్తరకాండ."]
  ]
 ],
 remember: [
  ["{lomasha|Lomaśa} is the sage of the journey — messenger, guide, guardian and storyteller.", "{lomasha|లోమశుడు} యాత్రకు చెందిన ముని — దూత, మార్గదర్శి, రక్షకుడు, కథకుడు."],
  ["Later books make him a narrator of the Skanda Purāṇa and a figure of endless age.", "తర్వాతి గ్రంథాలు ఆయనను స్కాంద పురాణ కథకునిగా, అంతులేని ఆయుష్షు కలవానిగా చూపిస్తాయి."],
  ["His lessons: dharma bears fruit in its season; a pure mind makes a pilgrimage; pride is always too big for life.", "ఆయన పాఠాలు: ధర్మం తన కాలంలో ఫలిస్తుంది; మనసు శుద్ధంగా ఉంటేనే తీర్థయాత్ర; గర్వం ఎప్పుడూ జీవితానికి మించినదే."]
 ],
 think: ["Is there a place near your home that has a story? Who told it to you — and who will you tell it to?", "మీ ఇంటి దగ్గర ఏదైనా కథ ఉన్న ప్రదేశం ఉందా? ఆ కథ మీకు ఎవరు చెప్పారు — మీరు దానిని ఎవరికి చెబుతారు?"]
}
]);
