// Śrī Rāmāyaṇa — Sundara Kāṇḍa. Retold by Hari Pokkuluri.
// Told fresh from Vālmīki's Sundara Kāṇḍa (68 sargas). Block format: see the top of ramayana.js.
window.RMY_PLAN = Object.assign(window.RMY_PLAN || {}, { sundara: [
  ["The Great Leap", "Sarga 1"],
  ["Laṅkā by Moonlight", "Sargas 2–3"],
  ["Searching Rāvaṇa's Palace", "Sargas 4–11"],
  ["The Aśoka Grove", "Sargas 12–17"],
  ["Rāvaṇa at Dawn", "Sargas 18–22"],
  ["Trijaṭā's Dream", "Sargas 23–30"],
  ["Rāma's Story in the Treetop", "Sargas 31–34"],
  ["Rāma's Ring", "Sargas 35–36"],
  ["The Crow and the Crest-Jewel", "Sargas 37–40"],
  ["Breaking the Grove", "Sargas 41–43"],
  ["Akṣa and the Warriors", "Sargas 44–47"],
  ["Bound by Indrajit", "Sargas 48–50"],
  ["Hanumān Before Rāvaṇa", "Sargas 50–52"],
  ["Laṅkā on Fire", "Sargas 53–55"],
  ["The Flight Home and the Honey Garden", "Sargas 56–63"],
  ["'I Have Seen Sītā'", "Sargas 64–68"]
] });
window.RMY_WHO = Object.assign(window.RMY_WHO || {}, {
 "mainaka": { "av": "⛰️", "en": "Maināka", "te": "మైనాకుడు",
  "d": "A golden mountain hiding under the ocean, son of Himavān. Vāyu once saved him from Indra, so he rose up to give Vāyu's son Hanumān a rest.",
  "dt": "సముద్రం అడుగున దాగిన బంగారు పర్వతం, హిమవంతుని కుమారుడు. ఒకప్పుడు వాయువు ఇంద్రుని నుండి కాపాడినందువల్ల, వాయుపుత్రుడైన హనుమంతునికి విశ్రాంతి ఇవ్వడానికి పైకి లేచాడు." },
 "surasa": { "av": "🐍", "en": "Surasā", "te": "సురస",
  "d": "Mother of the serpents. The gods sent her to test Hanumān's strength and wisdom on his way to Laṅkā.",
  "dt": "నాగుల తల్లి. లంకకు వెళ్ళే దారిలో హనుమంతుని బలాన్నీ బుద్ధినీ పరీక్షించడానికి దేవతలు ఆమెను పంపారు." },
 "simhika": { "av": "🌑", "en": "Siṃhikā", "te": "సింహిక",
  "d": "A rākṣasī living in the ocean who caught flying creatures by seizing their shadows.",
  "dt": "సముద్రంలో ఉండే రాక్షసి; ఎగిరే జీవుల నీడను పట్టుకుని వాటిని లాగి తినేది." },
 "lankini": { "av": "🏯", "en": "Laṅkā (the city's guardian)", "te": "లంకిణి",
  "d": "The guardian spirit of the city of Laṅkā, who stopped Hanumān at the gate. Brahmā had told her that when a vānara defeated her, Laṅkā's end would be near.",
  "dt": "లంకా నగరానికి కావలి దేవత; ద్వారం దగ్గర హనుమంతుణ్ణి అడ్డగించింది. ఒక వానరుడు తనను ఓడించిన రోజు లంకకు అంతం దగ్గర పడుతుందని బ్రహ్మ ఆమెకు చెప్పాడు." },
 "mandodari": { "av": "👑", "en": "Mandodarī", "te": "మండోదరి",
  "d": "Rāvaṇa's chief queen, daughter of the architect Maya. Beautiful and good, she often advised Rāvaṇa to return Sītā.",
  "dt": "రావణుని పట్టమహిషి, శిల్పి మయుని కుమార్తె. అందమైనది, మంచిది; సీతను తిరిగి ఇచ్చేయమని రావణునికి చాలాసార్లు సలహా ఇచ్చింది." },
 "aksha": { "av": "🏹", "en": "Akṣa", "te": "అక్షయకుమారుడు",
  "d": "A young son of Rāvaṇa, brave and skilled, who fought Hanumān in the Aśoka grove.",
  "dt": "రావణుని చిన్న కుమారుడు; ధైర్యవంతుడు, నైపుణ్యం గలవాడు. అశోకవనంలో హనుమంతునితో యుద్ధం చేశాడు." },
 "indrajit": { "av": "⚡", "en": "Indrajit (Meghanāda)", "te": "ఇంద్రజిత్తు (మేఘనాదుడు)",
  "d": "Rāvaṇa's eldest son, a master of magic who could fight hidden in the clouds. He won the name Indrajit, 'conqueror of Indra', by capturing Indra.",
  "dt": "రావణుని పెద్ద కుమారుడు; మేఘాల చాటున కనిపించకుండా యుద్ధం చేయగల మాయావి. ఇంద్రుణ్ణి బంధించినందుకు 'ఇంద్రజిత్తు' అనే పేరు వచ్చింది." },
 "jambumali": { "av": "🗡️", "en": "Jambumālī", "te": "జంబుమాలి",
  "d": "A mighty rākṣasa, son of Prahasta, sent by Rāvaṇa against Hanumān.",
  "dt": "ప్రహస్తుని కుమారుడైన మహాబలుడైన రాక్షసుడు; హనుమంతునిపైకి రావణుడు పంపాడు." },
 "dadhimukha": { "av": "🍯", "en": "Dadhimukha", "te": "దధిముఖుడు",
  "d": "Sugrīva's uncle, the old keeper of Madhuvana, the king's honey garden.",
  "dt": "సుగ్రీవుని మేనమామ; రాజు తేనెతోట అయిన మధువనానికి వృద్ధ కాపలాదారు." },
 "prahasta": { "av": "🛡️", "en": "Prahasta", "te": "ప్రహస్తుడు",
  "d": "Rāvaṇa's chief minister and commander of his army.",
  "dt": "రావణుని ముఖ్యమంత్రి, సేనాధిపతి." }
});
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "sundara-1", kanda: "sundara", n: 1, order: 501, date: "2026-10-21",
 title: "The Great Leap", titleTe: "మహా లంఘనం", sargas: "1", scene: "sky",
 who: ["hanuman", "mainaka", "surasa", "simhika"],
 pages: [
  [
   ["p", "On the peak of Mount Mahendra, {hanuman|Hanumān} bowed to the Sun, to Indra, to Brahmā, to his father the Wind and to all beings. Then he pressed the mountain with his hands and feet. The mountain groaned. Springs burst from its sides, frightened birds rose screaming, and the snakes in its caves hissed and spat fire. The sages and gandharvas who lived there flew up into the sky to watch, for they knew something wonderful was about to happen.",
    "మహేంద్ర పర్వత శిఖరం మీద {hanuman|హనుమంతుడు} సూర్యునికి, ఇంద్రునికి, బ్రహ్మకు, తన తండ్రి వాయుదేవునికి, సమస్త జీవులకు నమస్కరించాడు. తర్వాత చేతులతో, కాళ్ళతో పర్వతాన్ని గట్టిగా అదిమాడు. పర్వతం మూలిగింది. దాని పక్కల నుండి నీటి ఊటలు చిమ్మాయి, భయపడిన పక్షులు అరుస్తూ పైకి లేచాయి, గుహల్లోని పాములు బుసకొట్టి నిప్పులు కక్కాయి. అక్కడ ఉండే మునులు, గంధర్వులు ఏదో అద్భుతం జరగబోతోందని తెలిసి చూడడానికి ఆకాశంలోకి ఎగిరారు."],
   ["p", "‘As an arrow shot by Rāma flies,’ Hanumān told the vānaras, ‘so shall I fly to Laṅkā. If I do not find Sītā there, I will go to the world of the gods. And if I do not find her even there, I will pull up Laṅkā and bring it back with Rāvaṇa tied up!’ With that he crouched, swung his tail, and sprang. Trees were torn from the mountain by the rush of his leap and followed him for a while through the air, then dropped into the sea like flowers.",
    "‘రాముడు వదిలిన బాణం ఎలా దూసుకుపోతుందో, అలా నేను లంకకు ఎగురుతాను,’ అని హనుమంతుడు వానరులతో చెప్పాడు. ‘అక్కడ సీత కనిపించకపోతే దేవలోకానికి వెళ్తాను. అక్కడా కనిపించకపోతే లంకనే పెకలించి, రావణుణ్ణి కట్టేసి తీసుకొస్తాను!’ అంటూ వంగి, తోక విదిలించి, ఎగిరాడు. ఆ దూకు వేగానికి పర్వతం మీది చెట్లు పెకలుకుని కొంతదూరం అతని వెంటే గాలిలో ఎగిరి, తర్వాత పూలలాగా సముద్రంలో రాలిపోయాయి."]
  ],
  [
   ["p", "Halfway across, the Ocean remembered that Rāma's ancestor Sagara had dug out his bed, and wished to honour Rāma's messenger. So the golden mountain {mainaka|Maināka} rose up out of the water, shining like the sun. ‘Rest on my peaks for a while,’ said Maināka. ‘Long ago, when Indra was cutting off the wings of the flying mountains, your father the Wind carried me into the sea and saved me. Let me repay him by serving you.’ Hanumān touched the mountain gently with his hand, thanked him, and said, ‘I have made a promise and I cannot stop until it is done.’ And he flew on.",
    "సగం దూరం వెళ్ళాక, తన గర్భాన్ని తవ్వించినది రాముని పూర్వికుడైన సగరుడేనని సముద్రుడు గుర్తుచేసుకుని, రాముని దూతను గౌరవించాలనుకున్నాడు. అప్పుడు బంగారు పర్వతం {mainaka|మైనాకుడు} సూర్యునిలా మెరుస్తూ నీటి నుండి పైకి లేచాడు. ‘నా శిఖరాల మీద కాసేపు విశ్రాంతి తీసుకో,’ అన్నాడు మైనాకుడు. ‘చాలా కాలం క్రితం ఇంద్రుడు ఎగిరే పర్వతాల రెక్కలు నరుకుతున్నప్పుడు, నీ తండ్రి వాయువు నన్ను సముద్రంలోకి తోసి కాపాడాడు. నీకు సేవ చేసి ఆ రుణం తీర్చుకోనీ.’ హనుమంతుడు చేత్తో పర్వతాన్ని మెల్లగా తాకి, కృతజ్ఞతలు చెప్పి, ‘నేను మాట ఇచ్చాను; అది పూర్తయ్యేవరకు ఆగలేను,’ అని ముందుకు ఎగిరాడు."],
   ["p", "Next the gods sent {surasa|Surasā}, mother of the serpents, to test him. She rose from the sea in a terrible form and said, ‘The gods have given you to me as food. Enter my mouth!’ Hanumān said, ‘I am on Rāma's work. Let me finish it; then I will come back and enter your mouth, I promise.’ But she would not let him pass. So Hanumān grew bigger and bigger, and she opened her mouth wider and wider, until it was a hundred yojanas wide. Then, in a flash, Hanumān shrank to the size of a thumb, darted into her mouth and out again, and said with folded hands, ‘I have entered your mouth, as you asked. Now let me go.’ Surasā smiled and blessed him: ‘Go, wise one. May you bring Sītā and Rāma together.’",
    "తర్వాత దేవతలు అతన్ని పరీక్షించడానికి నాగమాత {surasa|సురస}ను పంపారు. ఆమె భయంకర రూపంతో సముద్రం నుండి లేచి, ‘దేవతలు నిన్ను నాకు ఆహారంగా ఇచ్చారు. నా నోట్లోకి దూరు!’ అంది. హనుమంతుడు, ‘నేను రామకార్యం మీద వెళ్తున్నాను. అది ముగించనీ; తర్వాత తిరిగొచ్చి నీ నోట్లోకి దూరతాను, మాట ఇస్తున్నాను,’ అన్నాడు. కానీ ఆమె దారి ఇవ్వలేదు. హనుమంతుడు పెరుగుతూ పోయాడు, ఆమె నోరు తెరుస్తూ పోయింది — వంద యోజనాల వెడల్పు అయ్యేవరకు. అప్పుడు క్షణంలో హనుమంతుడు బొటనవేలంత చిన్నవాడై, ఆమె నోట్లోకి దూరి బయటకు వచ్చేసి, చేతులు జోడించి, ‘నువ్వు అడిగినట్టే నీ నోట్లోకి దూరాను. ఇప్పుడు నన్ను పోనీ,’ అన్నాడు. సురస నవ్వి, ‘వెళ్ళు బుద్ధిమంతుడా. సీతారాములను కలుపు,’ అని దీవించింది."]
  ],
  [
   ["p", "Then something strange happened: Hanumān felt himself pulled backwards, as if a great hand had caught him. Looking down, he saw the rākṣasī {simhika|Siṃhikā} in the water. She had seized his shadow and was dragging him towards her open jaws. Hanumān made himself huge; she opened her mouth wide to swallow him. At once he shrank, dived straight into her body like lightning, tore at her from within, and burst out again. Siṃhikā sank dead into the sea, and the beings watching in the sky cried, ‘Well done! Whoever has courage, foresight, wisdom and skill, as you do, never fails.’",
    "అంతలో ఒక వింత జరిగింది: ఎవరో పెద్ద చేత్తో పట్టుకున్నట్టు హనుమంతుడు వెనక్కి లాగబడ్డాడు. కిందకు చూస్తే నీటిలో {simhika|సింహిక} అనే రాక్షసి కనిపించింది. ఆమె అతని నీడను పట్టుకుని, తెరిచిన తన నోటివైపు లాగుతోంది. హనుమంతుడు భారీగా పెరిగాడు; అతన్ని మింగడానికి ఆమె నోరు బాగా తెరిచింది. వెంటనే అతను చిన్నవాడై, మెరుపులా ఆమె శరీరంలోకి దూకి, లోపలినుండి చీల్చి, బయటకు వచ్చేశాడు. సింహిక చచ్చి సముద్రంలో మునిగిపోయింది. ఆకాశంలో చూస్తున్నవారు, ‘భళా! నీలాగా ధైర్యం, దూరదృష్టి, బుద్ధి, నేర్పు ఉన్నవాడు ఎన్నడూ ఓడిపోడు,’ అని పొగిడారు."],
   ["p", "At last the far shore appeared: green forests, mountains, and on the peaks of Mount Trikūṭa, the golden city of Laṅkā. Hanumān had flown a hundred yojanas and was not even out of breath. But he thought, ‘If the rākṣasas see a giant vānara land, they will raise an alarm.’ So he came down quietly on a hill called Lamba, as small as an ordinary monkey, and looked at Laṅkā with wonder.",
    "చివరికి అవతలి తీరం కనిపించింది: పచ్చని అడవులు, పర్వతాలు, త్రికూట పర్వత శిఖరాల మీద బంగారు లంకా నగరం. హనుమంతుడు వంద యోజనాలు ఎగిరినా కొంచెమైనా ఆయాసపడలేదు. కానీ, ‘ఒక పెద్ద వానరుడు దిగడం రాక్షసులు చూస్తే అలజడి చేస్తారు,’ అని ఆలోచించి, మామూలు కోతి అంత చిన్నవాడై, లంబ అనే కొండ మీద నెమ్మదిగా దిగి, ఆశ్చర్యంతో లంకను చూశాడు."],
   ["dyk", "📖", "‘Sundara’ means beautiful. Some say this kāṇḍa is so named because Hanumān was called Sundara by his mother; others because everything in it — Sītā, Laṅkā, Rāma's message, the good news — is beautiful. Many families read the Sundara Kāṇḍa as a prayer in hard times.",
    "‘సుందర’ అంటే అందమైనది. హనుమంతుణ్ణి తల్లి ‘సుందరుడు’ అని పిలిచేదని, అందుకే ఈ కాండకు ఆ పేరు అని కొందరు అంటారు; ఇందులో అన్నీ — సీత, లంక, రాముని సందేశం, శుభవార్త — అందమైనవే కాబట్టి అని మరికొందరు అంటారు. కష్ట సమయాల్లో చాలా కుటుంబాలు సుందరకాండను పారాయణం చేస్తాయి."]
  ]
 ],
 remember: [
  ["Hanumān leapt from Mount Mahendra, swift as an arrow shot by Rāma.", "హనుమంతుడు రాముడు వదిలిన బాణంలా మహేంద్ర పర్వతం నుండి ఎగిరాడు."],
  ["He politely declined Maināka's rest and outwitted Surasā by becoming tiny.", "మైనాకుని విశ్రాంతిని వినయంగా వద్దన్నాడు; చిన్నవాడై సురసను తెలివిగా దాటాడు."],
  ["He killed Siṃhikā, who caught him by his shadow, and landed quietly near Laṅkā.", "నీడను పట్టి లాగిన సింహికను చంపి, లంక దగ్గర నెమ్మదిగా దిగాడు."]
 ],
 think: ["With Surasā, Hanumān won not by fighting but by being clever and polite. When have you solved a problem with wisdom instead of force?", "సురస దగ్గర హనుమంతుడు యుద్ధంతో కాదు, తెలివితో, వినయంతో గెలిచాడు. మీరు బలం బదులు బుద్ధితో సమస్యను ఎప్పుడు పరిష్కరించారు?"]
},
{
 id: "sundara-2", kanda: "sundara", n: 2, order: 502, date: "2026-10-21",
 title: "Laṅkā by Moonlight", titleTe: "వెన్నెలలో లంక", sargas: "2–3", scene: "lanka",
 who: ["hanuman", "lankini"],
 pages: [
  [
   ["p", "Laṅkā stood on the top of Mount Trikūṭa like a city floating in the sky. It had walls of gold, gates set with jewels, wide moats full of lotuses, and tall white mansions that shone like autumn clouds. Huge rākṣasa guards with spears and clubs watched every gate. Hanumān thought, ‘Even the gods could not take this city by force. And how will I find Sītā here without being seen? If I am caught, all of Rāma's work will be ruined. I must go in at night, small and silent.’",
    "లంక త్రికూట పర్వత శిఖరం మీద ఆకాశంలో తేలుతున్న నగరంలా ఉంది. బంగారు ప్రాకారాలు, రత్నాలు పొదిగిన ద్వారాలు, తామరలతో నిండిన విశాలమైన అగడ్తలు, శరత్కాల మేఘాల్లా మెరిసే ఎత్తైన తెల్లని భవనాలు ఉన్నాయి. ప్రతి ద్వారం దగ్గర శూలాలు, గదలు పట్టిన భారీ రాక్షస కావలివాళ్ళు ఉన్నారు. హనుమంతుడు ఆలోచించాడు: ‘దేవతలు కూడా ఈ నగరాన్ని బలంతో గెలవలేరు. ఎవరికీ కనబడకుండా ఇక్కడ సీతను ఎలా వెతకాలి? పట్టుబడితే రాముని పనంతా పాడైపోతుంది. రాత్రివేళ, చిన్నగా, చప్పుడు లేకుండా లోపలికి వెళ్ళాలి.’"],
   ["p", "He waited until the sun had set. Then the moon rose, flooding the city with silver light, ‘as if to help him,’ says Vālmīki. Hanumān shrank to the size of a cat and crept towards the great northern gate.",
    "సూర్యుడు అస్తమించే వరకు ఎదురుచూశాడు. తర్వాత చంద్రుడు ఉదయించి నగరాన్ని వెండి వెలుగుతో నింపాడు — ‘అతనికి సాయం చేయడానికే అన్నట్టు’ అంటాడు వాల్మీకి. హనుమంతుడు పిల్లి అంత చిన్నవాడై, పెద్ద ఉత్తర ద్వారం వైపు నక్కి నక్కి వెళ్ళాడు."]
  ],
  [
   ["p", "Suddenly a fearsome figure blocked his way. It was {lankini|Laṅkā} herself — the guardian spirit of the city — with flashing eyes and a terrible roar. ‘Who are you, monkey? Why have you come? Tell me the truth, or you will not leave alive!’ Hanumān answered calmly, ‘I only want to see this beautiful city, its gardens and its mansions. When I have seen it, I will go back as I came.’",
    "ఇంతలో భయంకరమైన ఒక ఆకారం దారికి అడ్డొచ్చింది. అది స్వయంగా {lankini|లంకిణి} — నగర కావలి దేవత — మెరిసే కళ్ళతో, భీకర గర్జనతో. ‘ఎవరు నువ్వు కోతీ? ఎందుకొచ్చావు? నిజం చెప్పు, లేకపోతే ప్రాణాలతో పోవు!’ హనుమంతుడు ప్రశాంతంగా, ‘ఈ అందమైన నగరాన్ని, దాని తోటలను, భవనాలను చూడాలని మాత్రమే వచ్చాను. చూసి వచ్చినట్టే వెళ్ళిపోతాను,’ అన్నాడు."],
   ["p", "Laṅkinī laughed and struck him hard with her hand. Hanumān roared, but he remembered she was a woman and did not use his full strength. He made a fist of his left hand and gave her a single blow. She fell to the ground, dazed. Rising slowly, she spoke in a changed voice: ‘Spare me, mighty one. Long ago Brahmā told me: “When a vānara overcomes you, know that the time of fear has come for the rākṣasas.” That day has come. Because of Sītā, Rāvaṇa and his city will be destroyed. Go in, and find what you seek.’",
    "లంకిణి నవ్వి అతన్ని చేత్తో గట్టిగా కొట్టింది. హనుమంతుడు గర్జించాడు, కానీ ఆమె స్త్రీ అని గుర్తుంచుకుని పూర్తి బలం వాడలేదు. ఎడమ చేతి పిడికిలి బిగించి ఒక్క దెబ్బ కొట్టాడు. ఆమె తల తిరిగి నేల మీద పడింది. నెమ్మదిగా లేచి, మారిన గొంతుతో అంది: ‘నన్ను క్షమించు మహాబలా. చాలా కాలం క్రితం బ్రహ్మ నాతో చెప్పాడు: “ఒక వానరుడు నిన్ను జయించినప్పుడు, రాక్షసులకు భయం వచ్చే కాలం వచ్చిందని తెలుసుకో.” ఆ రోజు వచ్చింది. సీత కారణంగా రావణుడు, అతని నగరం నాశనం అవుతాయి. లోపలికి వెళ్ళు, నువ్వు వెతుకుతున్నది కనుక్కో.’"]
  ],
  [
   ["p", "Hanumān did not enter by the gate. He leapt over the wall and set his left foot first into Laṅkā — as one does when entering an enemy's land. Then, staying small, he moved from rooftop to rooftop under the moon. He heard music and laughter from the mansions, the chanting of Vedas from some houses, the clash of weapons in the drill-grounds. He saw rākṣasas of every kind — some handsome, some frightening, some wise, some foolish. But nowhere did he see the one he was looking for.",
    "హనుమంతుడు ద్వారం గుండా వెళ్ళలేదు. ప్రాకారం మీదుగా దూకి, శత్రుదేశంలో ప్రవేశించేటప్పుడు చేసినట్టే ఎడమ పాదం ముందు లంకలో మోపాడు. తర్వాత చిన్నగానే ఉండి, వెన్నెల్లో ఇంటి కప్పు నుండి కప్పుకు కదిలాడు. భవనాల నుండి సంగీతం, నవ్వులు; కొన్ని ఇళ్ళ నుండి వేదపఠనం; కవాతు మైదానాల్లో ఆయుధాల చప్పుడు వినిపించాయి. అన్ని రకాల రాక్షసులను చూశాడు — కొందరు అందగాళ్ళు, కొందరు భయంకరులు, కొందరు జ్ఞానులు, కొందరు మూర్ఖులు. కానీ తాను వెతుకుతున్నవారు ఎక్కడా కనిపించలేదు."],
   ["dyk", "🌕", "Vālmīki spends many beautiful verses describing the moon over Laṅkā — rising ‘like a swan swimming in a silver lake’. Even in an enemy's city, the poet stops to see beauty.",
    "లంక మీద చంద్రుణ్ణి వర్ణించడానికి వాల్మీకి ఎన్నో అందమైన శ్లోకాలు రాశాడు — ‘వెండి సరస్సులో ఈదే హంసలా’ ఉదయించాడని. శత్రువు నగరంలో కూడా కవి ఆగి అందాన్ని చూస్తాడు."]
  ]
 ],
 remember: [
  ["Hanumān waited for night and entered Laṅkā as small as a cat.", "హనుమంతుడు రాత్రి వరకు ఆగి, పిల్లి అంత చిన్నగా లంకలో ప్రవేశించాడు."],
  ["He overcame Laṅkinī, the city's guardian, with one blow of his left fist.", "నగర కావలి దేవత లంకిణిని ఎడమ పిడికిలి ఒక్క దెబ్బతో జయించాడు."],
  ["Laṅkinī said Brahmā had foretold this was the sign of Laṅkā's end.", "ఇది లంక అంతానికి గుర్తు అని బ్రహ్మ ముందే చెప్పాడని లంకిణి చెప్పింది."]
 ],
 think: ["Hanumān was strong enough to fight his way in, but he chose patience and stealth. Why is it sometimes wiser not to show all your strength?", "హనుమంతుడు బలంతో లోపలికి వెళ్ళగలడు, కానీ ఓర్పు, రహస్యం ఎంచుకున్నాడు. కొన్నిసార్లు మన బలమంతా చూపించకపోవడం ఎందుకు తెలివైన పని?"]
},
{
 id: "sundara-3", kanda: "sundara", n: 3, order: 503, date: "2026-10-21",
 title: "Searching Rāvaṇa's Palace", titleTe: "రావణుని భవనంలో వెతుకులాట", sargas: "4–11", scene: "palace",
 who: ["hanuman", "ravana", "mandodari"],
 pages: [
  [
   ["p", "Hanumān searched house after house — the mansions of Prahasta, Kumbhakarṇa, Vibhīṣaṇa, Indrajit and many other great rākṣasas. Then he came to {ravana|Rāvaṇa}'s own palace, which filled a whole hill and was guarded by thousands. Inside stood a flying chariot so beautiful that it looked as if Viśvakarmā had made it for the gods. It was the Puṣpaka, which Rāvaṇa had taken from his brother Kubera. Its walls were painted with birds and lotus pools, and it could fly wherever its owner wished.",
    "హనుమంతుడు ఒక్కొక్క ఇల్లూ వెతికాడు — ప్రహస్తుడు, కుంభకర్ణుడు, విభీషణుడు, ఇంద్రజిత్తు మొదలైన గొప్ప రాక్షసుల భవనాలు. తర్వాత {ravana|రావణుని} సొంత అంతఃపురానికి వచ్చాడు; అది ఒక కొండంతా నిండి ఉంది, వేలమంది కాపలా కాస్తున్నారు. లోపల ఒక విమానం ఉంది — దేవతల కోసం విశ్వకర్మ చేసినట్టు అంత అందమైన ఎగిరే రథం. అదే పుష్పక విమానం; రావణుడు తన అన్న కుబేరుని నుండి లాక్కున్నాడు. దాని గోడల మీద పక్షులు, తామర కొలనులు చిత్రించి ఉన్నాయి; యజమాని కోరిన చోటికి అది ఎగురుతుంది."],
   ["p", "In the great hall Hanumān saw Rāvaṇa asleep on a crystal bed, breathing like a hissing snake, his arms heavy with golden bands, scarred by Indra's thunderbolt and by the tusks of Airāvata. Around him slept hundreds of women — princesses of gandharvas, nāgas, daityas and humans — who had come to him won by his wealth and fame. On a separate bed slept a queen more beautiful than all the rest, shining like a golden statue.",
    "పెద్ద సభామందిరంలో రావణుడు స్ఫటిక మంచం మీద నిద్రపోతూ కనిపించాడు — బుసకొట్టే పాములా ఊపిరి తీస్తూ, బంగారు కంకణాలతో బరువైన చేతులతో, ఇంద్రుని వజ్రాయుధం, ఐరావతం దంతాలు చేసిన మచ్చలతో. అతని చుట్టూ వందలాది స్త్రీలు నిద్రపోతున్నారు — గంధర్వ, నాగ, దైత్య, మానవ రాజకుమార్తెలు — అతని సంపదకు, కీర్తికి ఆకర్షితులై వచ్చినవారు. వేరే మంచం మీద అందరికంటే అందమైన ఒక రాణి బంగారు విగ్రహంలా మెరుస్తూ నిద్రపోతోంది."]
  ],
  [
   ["p", "Hanumān's heart leapt. ‘This must be Sītā!’ he thought, and in his joy he slapped his arms, kissed his tail, ran up the pillars and jumped down again — being, for a moment, just a happy monkey. But then he stopped and thought carefully. ‘No. Sītā, parted from Rāma, would never sleep peacefully, never wear jewels or flowers, never eat or drink or rest in another man's palace. This cannot be she.’ He was right: the queen was {mandodari|Mandodarī}, Rāvaṇa's chief wife.",
    "హనుమంతుని గుండె ఎగిరింది. ‘ఈమె సీతే అయి ఉండాలి!’ అనుకుని ఆనందంలో భుజాలు చరుచుకుని, తోకను ముద్దాడి, స్తంభాలు ఎక్కి మళ్ళీ దూకాడు — ఒక్క క్షణం సంతోషంగా ఉన్న కోతిలాగే. కానీ ఆగి జాగ్రత్తగా ఆలోచించాడు. ‘కాదు. రాముని నుండి విడిపోయిన సీత ప్రశాంతంగా నిద్రపోదు; ఆభరణాలు, పూలు ధరించదు; పరపురుషుని భవనంలో తినదు, తాగదు, విశ్రాంతి తీసుకోదు. ఈమె సీత కాలేదు.’ అతని ఆలోచన సరైనదే: ఆ రాణి రావణుని పట్టమహిషి {mandodari|మండోదరి}."],
   ["p", "Then a new worry came. ‘I have looked at the wives of another man while they slept. Have I done wrong?’ Hanumān examined his own mind and said to himself, ‘My mind is not disturbed at all. I looked only to find Sītā — and where else would one search for a lost woman, except among women? My heart is pure.’ Vālmīki shows us that Hanumān was not only strong but also careful about what was right.",
    "అంతలో కొత్త చింత వచ్చింది. ‘నిద్రపోతున్న పరపురుషుని భార్యలను చూశాను. తప్పు చేశానా?’ హనుమంతుడు తన మనస్సును పరిశీలించుకుని తనలో తాను అనుకున్నాడు: ‘నా మనస్సు కొంచెమైనా చలించలేదు. సీతను వెతకడానికే చూశాను — తప్పిపోయిన స్త్రీని స్త్రీల మధ్య కాక ఇంకెక్కడ వెతుకుతారు? నా హృదయం పవిత్రంగానే ఉంది.’ హనుమంతుడు బలవంతుడే కాదు, ధర్మం గురించి జాగ్రత్త గలవాడని వాల్మీకి మనకు చూపిస్తాడు."]
  ],
  [
   ["p", "He searched the drinking-halls, the kitchens, the store-rooms, the picture galleries, the pleasure-gardens, the underground rooms, even the spaces between walls. Hours passed. The night was ending, and Sītā was nowhere. Hanumān sat down on a wall, sad and weary. ‘Perhaps Rāvaṇa killed her when she refused him. Perhaps she fell into the sea from his chariot. How can I go back and tell Rāma that I failed? Rāma will die of grief, then Lakṣmaṇa, then Bharata and Śatrughna, then the queens, then Sugrīva…’",
    "మద్యశాలలు, వంటశాలలు, ధాన్యాగారాలు, చిత్రశాలలు, విహార ఉద్యానాలు, భూగృహాలు, గోడల మధ్య ఖాళీలు కూడా వెతికాడు. గంటలు గడిచాయి. రాత్రి ముగుస్తోంది, సీత ఎక్కడా లేదు. హనుమంతుడు విచారంగా, అలసటగా ఒక గోడ మీద కూర్చున్నాడు. ‘ఆమె ఒప్పుకోనందుకు రావణుడు చంపేశాడేమో. అతని రథం నుండి సముద్రంలో పడిపోయిందేమో. విఫలమయ్యానని రాముడికి ఎలా చెప్పాలి? రాముడు దుఃఖంతో చనిపోతాడు, తర్వాత లక్ష్మణుడు, భరతశత్రుఘ్నులు, తల్లులు, సుగ్రీవుడు…’"],
   ["more", "Why Hanumān did not give up", "హనుమంతుడు ఎందుకు ఆశ వదులుకోలేదు", "His thoughts in Sargas 12–13", "12–13 సర్గల్లో అతని ఆలోచనలు", [
    ["p", "Hanumān even thought of staying in the forest as a hermit rather than return with bad news. Then he shook himself. ‘Despair is the root of ruin. Enthusiasm is the root of success. One who does not lose heart achieves everything.’ He bowed to Rāma, Lakṣmaṇa, Sītā, to Rudra, Indra, Yama and the Wind, and decided to search again — this time in the one place he had not yet looked: a grove of aśoka trees beyond the palace walls.",
     "చెడు వార్తతో తిరిగి వెళ్ళే బదులు అడవిలో తపస్విగా ఉండిపోదామని కూడా హనుమంతుడు ఆలోచించాడు. తర్వాత తనను తాను కుదుపుకున్నాడు. ‘నిరాశే నాశనానికి మూలం. ఉత్సాహమే విజయానికి మూలం. మనసు కోల్పోనివాడు అన్నీ సాధిస్తాడు.’ రామలక్ష్మణులకు, సీతకు, రుద్రునికి, ఇంద్రునికి, యమునికి, వాయువుకు నమస్కరించి, మళ్ళీ వెతకాలని నిశ్చయించుకున్నాడు — ఈసారి ఇంకా చూడని ఒకే ఒక చోట: అంతఃపుర ప్రాకారాల అవతల ఉన్న అశోక వృక్షాల వనంలో."]
   ]]
  ]
 ],
 remember: [
  ["Hanumān searched every mansion in Laṅkā and saw Rāvaṇa's flying chariot, the Puṣpaka.", "హనుమంతుడు లంకలోని ప్రతి భవనం వెతికి, రావణుని పుష్పక విమానాన్ని చూశాడు."],
  ["He first mistook Mandodarī for Sītā, then reasoned that Sītā would never be at ease there.", "మొదట మండోదరిని సీత అనుకున్నాడు; సీత అక్కడ సుఖంగా ఉండదని ఆలోచించి గ్రహించాడు."],
  ["When he felt like giving up, he told himself: enthusiasm is the root of success.", "ఆశ వదులుకోవాలనిపించినప్పుడు ‘ఉత్సాహమే విజయానికి మూలం’ అని తనకు తాను చెప్పుకున్నాడు."]
 ],
 think: ["Hanumān almost gave up — and then the very next place he searched held the answer. Have you ever nearly stopped just before success?", "హనుమంతుడు దాదాపు ఆశ వదిలేశాడు — తర్వాత వెతికిన చోటే జవాబు ఉంది. విజయానికి సరిగ్గా ముందు మీరు ఎప్పుడైనా ఆగిపోబోయారా?"]
},
{
 id: "sundara-4", kanda: "sundara", n: 4, order: 504, date: "2026-10-21",
 title: "The Aśoka Grove", titleTe: "అశోకవనం", sargas: "12–17", scene: "night",
 who: ["hanuman", "sita"],
 pages: [
  [
   ["p", "Hanumān leapt over the wall into the Aśoka grove. It was like a garden of the gods — trees heavy with flowers and fruit, golden creepers, ponds with steps of jewels, peacocks and cuckoos everywhere. As he jumped from branch to branch, showers of blossoms fell, so that he looked ‘like a mountain made of flowers’. He climbed a tall, leafy śiṃśapā tree near a pool and thought, ‘If Sītā is here, she will surely come to this clear pool at dawn to say her prayers. From here I can see everything.’",
    "హనుమంతుడు ప్రాకారం దూకి అశోకవనంలోకి వచ్చాడు. అది దేవతల ఉద్యానంలా ఉంది — పూలు, పండ్లతో వంగిన చెట్లు, బంగారు తీగలు, రత్నాల మెట్లున్న కొలనులు, ఎక్కడ చూసినా నెమళ్ళు, కోయిలలు. అతను కొమ్మ నుండి కొమ్మకు దూకుతుంటే పూలవాన కురిసి, అతను ‘పూలతో చేసిన పర్వతంలా’ కనిపించాడు. ఒక కొలను దగ్గర ఉన్న ఎత్తైన, దట్టమైన శింశుపా వృక్షం ఎక్కి, ‘సీత ఇక్కడ ఉంటే, తెల్లవారుజామున సంధ్యావందనానికి ఈ స్వచ్ఛమైన కొలను దగ్గరకు తప్పక వస్తుంది. ఇక్కడినుండి అంతా కనిపిస్తుంది,’ అనుకున్నాడు."],
   ["p", "Looking around, he saw a white temple-like building with a thousand pillars. And near it, under a tree, sat a woman. She wore a single soiled yellow cloth. She was thin from fasting, her hair hung in one long braid, and her face was wet with tears. She looked ‘like the thin crescent moon at the start of the bright fortnight’, like a flame hidden in smoke. Around her stood rākṣasīs with terrible faces — some with one eye, some with ears like elephants, some with heads of animals — holding spears and axes.",
    "చుట్టూ చూస్తే వెయ్యి స్తంభాల తెల్లని గుడిలాంటి భవనం కనిపించింది. దాని దగ్గర, ఒక చెట్టు కింద, ఒక స్త్రీ కూర్చుని ఉంది. మాసిపోయిన ఒకే పసుపు వస్త్రం కట్టుకుంది. ఉపవాసాలతో చిక్కిపోయింది, జుట్టు ఒకే పొడవాటి జడగా వేలాడుతోంది, ముఖం కన్నీళ్ళతో తడిసి ఉంది. ఆమె ‘శుక్లపక్షం మొదట్లో సన్నని చంద్రరేఖలా’, పొగలో దాగిన జ్వాలలా ఉంది. ఆమె చుట్టూ భయంకర ముఖాల రాక్షసులు — కొందరికి ఒకే కన్ను, కొందరికి ఏనుగు చెవులు, కొందరికి జంతువుల తలలు — శూలాలు, గొడ్డళ్ళు పట్టుకుని నిలబడ్డారు."]
  ],
  [
   ["p", "Hanumān studied her carefully. On her body he saw a few ornaments — and he remembered the bundle of jewels that Sītā had dropped on Ṛṣyamūka, which Rāma had wept over. These were the same kind; the ones missing from her were the very ones that had fallen. Her yellow cloth was the twin of the piece the vānaras had found. Her beauty matched every word of Rāma's description. ‘This is she,’ Hanumān said to himself, and tears of joy filled his eyes. ‘This is {sita|Sītā}, for whom Rāma killed Vāli and Khara, for whom the whole world is being searched.’",
    "హనుమంతుడు ఆమెను జాగ్రత్తగా పరిశీలించాడు. ఆమె ఒంటి మీద కొన్ని ఆభరణాలు కనిపించాయి — ఋష్యమూకం మీద సీత జారవిడిచిన, రాముడు చూసి ఏడ్చిన నగల మూట గుర్తొచ్చింది. ఇవి అలాంటివే; ఆమె ఒంటి మీద లేనివి సరిగ్గా అక్కడ పడినవే. ఆమె పసుపు వస్త్రం వానరులకు దొరికిన ముక్కకు జంట. ఆమె అందం రాముడు చెప్పిన ప్రతి మాటకూ సరిపోయింది. ‘ఈమే,’ అనుకున్నాడు హనుమంతుడు, ఆనందబాష్పాలతో. ‘ఈమే {sita|సీత} — ఈమె కోసమే రాముడు వాలిని, ఖరుణ్ణి చంపాడు, ఈమె కోసమే లోకమంతా వెతుకుతున్నారు.’"],
   ["p", "Then he wept again, but with sorrow. ‘How hard is fate! The daughter of King Janaka, the daughter-in-law of King Daśaratha, the wife of Rāma — sitting on the ground among demons. Rāma is the most worthy husband for her, and she the most worthy wife for him. For her, Rāma would be right to turn the whole world upside down. And she, though surrounded by every luxury Rāvaṇa can offer, sees none of it. She sees only Rāma in her heart.’",
    "తర్వాత మళ్ళీ ఏడ్చాడు, ఈసారి బాధతో. ‘విధి ఎంత కఠినమైనది! జనకమహారాజు కూతురు, దశరథమహారాజు కోడలు, రాముని భార్య — రాక్షసుల మధ్య నేల మీద కూర్చుంది. ఆమెకు రాముడే తగిన భర్త, అతనికి ఆమే తగిన భార్య. ఈమె కోసం రాముడు లోకాన్నే తలకిందులు చేసినా తప్పు లేదు. రావణుడు ఇవ్వగల సుఖాలన్నీ చుట్టూ ఉన్నా, ఆమె వాటిలో దేన్నీ చూడదు. ఆమె హృదయంలో రాముడొక్కడినే చూస్తుంది.’"]
  ],
  [
   ["p", "Hanumān stayed hidden among the leaves for the rest of the night, watching. He could not go to her yet: the rākṣasīs were all around her, and if she screamed in fright at a strange monkey, everything would be lost. So he waited and planned, while the moon set and the sky began to grow pale over Laṅkā.",
    "రాత్రి మిగిలిన సమయమంతా హనుమంతుడు ఆకుల మధ్య దాక్కుని చూస్తూనే ఉన్నాడు. ఇంకా ఆమె దగ్గరకు వెళ్ళలేడు: రాక్షసులు చుట్టూ ఉన్నారు; తెలియని కోతిని చూసి ఆమె భయంతో అరిస్తే అంతా పోతుంది. చంద్రుడు అస్తమించి, లంక మీద ఆకాశం తెల్లబడుతుంటే, అతను ఎదురుచూస్తూ ఆలోచిస్తూ ఉన్నాడు."],
   ["dyk", "🌳", "The śiṃśapā tree is the Indian rosewood (శింశుపా / సిసుపాల). Today a temple in Sri Lanka called Sītā Eliya is traditionally remembered as the site of the Aśoka grove.",
    "శింశుపా వృక్షం అంటే మన ఇరుగుడు/సిసు చెట్టు జాతి. శ్రీలంకలోని ‘సీతా ఎలియా’ అనే ఆలయాన్ని అశోకవనం ఉన్న చోటుగా సంప్రదాయంగా గుర్తుంచుకుంటారు."]
  ]
 ],
 remember: [
  ["Hanumān hid in a śiṃśapā tree in the Aśoka grove, near a pool.", "హనుమంతుడు అశోకవనంలో కొలను దగ్గర ఒక శింశుపా చెట్టులో దాక్కున్నాడు."],
  ["He found Sītā thin and tearful, guarded by fearsome rākṣasīs.", "చిక్కిపోయి కన్నీళ్ళతో ఉన్న సీతను, భయంకర రాక్షసుల కాపలాలో, చూశాడు."],
  ["He recognised her by her jewels, her yellow cloth and Rāma's description.", "ఆమె ఆభరణాలు, పసుపు వస్త్రం, రాముడి వర్ణన బట్టి ఆమెను గుర్తించాడు."]
 ],
 think: ["Hanumān checked many signs before he was sure it was Sītā. Why is it important to check carefully before acting, even when we feel very sure?", "అది సీతే అని నిర్ధారించుకోవడానికి హనుమంతుడు చాలా గుర్తులు చూశాడు. మనకు ఎంత నమ్మకంగా అనిపించినా, పని చేసే ముందు జాగ్రత్తగా సరిచూసుకోవడం ఎందుకు ముఖ్యం?"]
}
]);
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "sundara-5", kanda: "sundara", n: 5, order: 505, date: "2026-10-21",
 title: "Rāvaṇa at Dawn", titleTe: "తెల్లవారుజామున రావణుడు", sargas: "18–22", scene: "night",
 who: ["ravana", "sita", "hanuman"],
 pages: [
  [
   ["p", "As dawn broke, Hanumān heard the chanting of the Vedas from the brāhmaṇas of Laṅkā, and music to wake the king. Soon {ravana|Rāvaṇa} came into the grove, still heavy with sleep, surrounded by a hundred women carrying golden lamps, fans and a white parasol. From his hiding place among the leaves, Hanumān made himself even smaller and watched. When Sītā saw Rāvaṇa coming, she trembled like a plantain tree in a storm, drew up her knees and covered herself with her arms, and sat weeping.",
    "తెల్లవారుతుంటే లంకలోని బ్రాహ్మణుల వేదఘోష, రాజును మేల్కొలిపే సంగీతం హనుమంతునికి వినిపించాయి. కాసేపటికి ఇంకా నిద్రమత్తులోనే ఉన్న {ravana|రావణుడు}, బంగారు దీపాలు, వింజామరలు, తెల్లని గొడుగు పట్టిన వంద మంది స్త్రీలతో కలిసి వనంలోకి వచ్చాడు. ఆకుల చాటు నుండి హనుమంతుడు ఇంకా చిన్నవాడై చూస్తున్నాడు. రావణుడు రావడం చూసి సీత తుఫానులో అరటిచెట్టులా వణికిపోయింది; మోకాళ్ళు ముడుచుకుని, చేతులతో తనను కప్పుకుని, ఏడుస్తూ కూర్చుంది."],
   ["p", "Rāvaṇa spoke sweetly. ‘Why do you hide from me, beautiful one? Do not be afraid. Be my chief queen; all my wives will serve you. All my wealth, all of Laṅkā, is yours. Forget Rāma — he is a beggar in the forest, he may not even be alive. Even if he lives, he will never reach this city. Put on silks and jewels, eat, drink, enjoy life with me.’",
    "రావణుడు తియ్యగా మాట్లాడాడు. ‘నా నుండి ఎందుకు దాక్కుంటావు సుందరీ? భయపడకు. నా పట్టమహిషివి అవు; నా భార్యలంతా నీకు సేవ చేస్తారు. నా సంపదంతా, లంకంతా నీదే. రాముణ్ణి మరచిపో — అతను అడవిలో తిరిగే బిచ్చగాడు, బతికి ఉన్నాడో లేదో కూడా. బతికున్నా ఈ నగరాన్ని ఎన్నడూ చేరలేడు. పట్టుబట్టలు, నగలు ధరించు, తిను, తాగు, నాతో సుఖపడు.’"]
  ],
  [
   ["p", "Sītā picked up a blade of grass and placed it between herself and Rāvaṇa — as if to say, ‘You are worth no more than this to me; I will not even speak to you directly.’ Then she answered, ‘Turn your mind away from me and towards your own wives. I am the wife of another and I belong to a noble family. I cannot be yours, as the light of the sun cannot be separated from the sun. If you wish to live, return me to Rāma and become his friend. He is known for his kindness to anyone who comes to him for shelter. Otherwise, nothing will save you from his arrows — not even Indra himself.’",
    "సీత ఒక గడ్డిపోచ తీసి తనకూ రావణునికీ మధ్య పెట్టింది — ‘నా దృష్టిలో నువ్వు దీనికంటే విలువ లేనివాడివి; నీతో నేరుగా మాట్లాడను కూడా’ అన్నట్టు. తర్వాత జవాబిచ్చింది: ‘నీ మనసు నా నుండి మళ్ళించి నీ భార్యల వైపు పెట్టుకో. నేను మరొకరి భార్యను, గొప్ప వంశంలో పుట్టినదాన్ని. సూర్యుని నుండి సూర్యకాంతిని విడదీయలేనట్టే, నేను నీదాన్ని కాలేను. బతకాలనుకుంటే నన్ను రామునికి అప్పగించి అతనితో స్నేహం చేసుకో. శరణు కోరి వచ్చినవారిపై దయ చూపడంలో అతను ప్రసిద్ధుడు. లేకపోతే అతని బాణాల నుండి నిన్నెవరూ కాపాడలేరు — స్వయంగా ఇంద్రుడు కూడా.’"],
   ["p", "Rāvaṇa's eyes turned red with rage. ‘I have been patient only because I love you. I give you two more months. If by then you do not come to my bed willingly, you will be killed.’ The women of his own household were ashamed; some made signs of comfort to Sītā with their eyes and lips. Sītā was not afraid. ‘Rāvaṇa, you have stolen me like a thief while Rāma was away. If I wished, I could burn you to ashes by the power of my faithfulness. But I have no order from Rāma to do so, and I keep my strength for him.’",
    "రావణుని కళ్ళు కోపంతో ఎర్రబడ్డాయి. ‘నిన్ను ప్రేమిస్తున్నందుకే ఇంతవరకు ఓపిక పట్టాను. ఇంకా రెండు నెలలు గడువు ఇస్తున్నాను. అప్పటికి నువ్వు ఇష్టపడి రాకపోతే చంపబడతావు.’ అతని ఇంటి స్త్రీలే సిగ్గుపడ్డారు; కొందరు కళ్ళతో, పెదవులతో సీతకు ధైర్యం చెప్పారు. సీత భయపడలేదు. ‘రావణా, రాముడు లేనప్పుడు దొంగలా నన్ను ఎత్తుకొచ్చావు. నేను కోరుకుంటే నా పాతివ్రత్య శక్తితో నిన్ను బూడిద చేయగలను. కానీ అలా చేయమని రాముని ఆజ్ఞ లేదు; నా శక్తిని అతని కోసమే దాచుకుంటున్నాను.’"]
  ],
  [
   ["p", "Rāvaṇa hissed like a snake and raised his hand, but one of his wives, Dhānyamālinī, held him and said, ‘Why trouble yourself with this sad human woman, my lord? Come, enjoy yourself with us.’ Laughing loudly, Rāvaṇa turned away. As he left he told the rākṣasī guards, ‘Use every means — threats, kindness, gifts, fear — to make this woman agree.’ Then he walked off, and the earth seemed to shake under his feet.",
    "రావణుడు పాములా బుసకొట్టి చెయ్యెత్తాడు, కానీ అతని భార్యల్లో ఒకతె, ధాన్యమాలిని, అతన్ని పట్టుకుని, ‘ప్రభూ, ఈ దుఃఖంలో ఉన్న మనిషి స్త్రీతో ఎందుకు శ్రమ? రండి, మాతో సుఖపడండి,’ అంది. బిగ్గరగా నవ్వుతూ రావణుడు వెనుదిరిగాడు. వెళ్తూ రాక్షసి కావలివారితో, ‘బెదిరింపు, బుజ్జగింపు, కానుకలు, భయం — ఏ ఉపాయమైనా వాడి ఈమెను ఒప్పించండి,’ అని చెప్పాడు. అతను నడుస్తుంటే భూమి కంపించినట్టు అనిపించింది."],
   ["dyk", "🌾", "The blade of grass between Sītā and Rāvaṇa (tṛṇam antarataḥ kṛtvā) has become a famous picture in Indian art and poetry: the strongest king in the world, kept away by a single blade of grass and a woman's courage.",
    "సీతకూ రావణునికీ మధ్య గడ్డిపోచ (తృణమంతరతః కృత్వా) భారతీయ కళ, కవిత్వంలో ప్రసిద్ధ చిత్రంగా మారింది: లోకంలోనే బలవంతుడైన రాజును ఒక గడ్డిపోచ, ఒక స్త్రీ ధైర్యం దూరంగా ఉంచాయి."]
  ]
 ],
 remember: [
  ["At dawn Rāvaṇa came and tempted Sītā with wealth and power.", "తెల్లవారుజామున రావణుడు వచ్చి సంపద, అధికారంతో సీతను ప్రలోభపెట్టాడు."],
  ["Sītā put a blade of grass between them and told him to return her to Rāma.", "సీత మధ్యలో గడ్డిపోచ పెట్టి, తనను రామునికి అప్పగించమని చెప్పింది."],
  ["Rāvaṇa gave her two months and ordered the rākṣasīs to break her will.", "రావణుడు రెండు నెలల గడువు ఇచ్చి, ఆమె మనసు మార్చమని రాక్షసులకు ఆజ్ఞాపించాడు."]
 ],
 think: ["Sītā had no weapon and no army, yet Rāvaṇa could not make her bend. Where does that kind of strength come from?", "సీత దగ్గర ఆయుధం లేదు, సైన్యం లేదు; అయినా రావణుడు ఆమెను లొంగదీయలేకపోయాడు. అలాంటి బలం ఎక్కడి నుండి వస్తుంది?"]
},
{
 id: "sundara-6", kanda: "sundara", n: 6, order: 506, date: "2026-10-21",
 title: "Trijaṭā's Dream", titleTe: "త్రిజట స్వప్నం", sargas: "23–30", scene: "night",
 who: ["sita", "trijata", "hanuman"],
 pages: [
  [
   ["p", "As soon as Rāvaṇa had gone, the rākṣasīs crowded round Sītā, shouting. ‘Foolish woman! Rāvaṇa, grandson of the sage Pulastya, conqueror of the gods, wants you, and you refuse?’ ‘Marry him and be happy!’ ‘If you don't, we will tear you to pieces and eat you!’ They brandished their weapons and shook their fists. Sītā ran weeping to the śiṃśapā tree — the very tree where Hanumān sat hidden — and held on to a branch.",
    "రావణుడు వెళ్ళగానే రాక్షసులు అరుస్తూ సీత చుట్టూ గుమిగూడారు. ‘మూర్ఖురాలా! పులస్త్య మహర్షి మనవడు, దేవతలను జయించిన రావణుడు నిన్ను కోరుకుంటే నువ్వు కాదంటావా?’ ‘అతన్ని పెళ్ళాడి సుఖంగా ఉండు!’ ‘లేకపోతే నిన్ను ముక్కలు చేసి తినేస్తాం!’ ఆయుధాలు ఊపుతూ, పిడికిళ్ళు బిగించారు. సీత ఏడుస్తూ శింశుపా చెట్టు దగ్గరకు పరుగెత్తింది — హనుమంతుడు దాక్కున్న ఆ చెట్టే — ఒక కొమ్మను పట్టుకుంది."],
   ["p", "‘A human woman cannot be the wife of a rākṣasa,’ she said. ‘Eat me if you like; I will not do what you ask. Rāma is my husband, whether he is a king or a beggar, and I will stay faithful to him as Śacī is to Indra, as Arundhatī is to Vasiṣṭha.’ Then, alone in her sorrow, she cried out for Rāma, for Lakṣmaṇa, for her mother-in-law Kausalyā. Her grief was so great that she felt she could not go on living.",
    "‘మనిషి స్త్రీ రాక్షసునికి భార్య కాలేదు,’ అంది ఆమె. ‘కావాలంటే నన్ను తినేయండి; మీరు అడిగింది మాత్రం చేయను. రాముడు రాజైనా బిచ్చగాడైనా నా భర్త; శచీదేవి ఇంద్రునికి, అరుంధతి వసిష్ఠునికి ఉన్నట్టే నేను అతనికి నిష్ఠగా ఉంటాను.’ తర్వాత ఒంటరిగా దుఃఖంలో రాముణ్ణి, లక్ష్మణుణ్ణి, అత్తగారు కౌసల్యను తలచుకుని ఏడ్చింది. ఇక బతకలేనేమో అనిపించేంత దుఃఖం ఆమెది."]
  ],
  [
   ["p", "Just then an old rākṣasī named {trijata|Trijaṭā} woke from sleep and said, ‘Stop! Do not threaten her any more. I have had a terrible dream, and it makes my hair stand on end. I saw Rāma and Lakṣmaṇa dressed in white, riding through the sky in an ivory palanquin drawn by a thousand horses — and Sītā, in white, sitting on a white mountain by the sea, joining Rāma as the sun's light joins the sun. And I saw Rāvaṇa, shaved and smeared with oil, wearing red, riding south on a donkey, falling into mud. His sons and Kumbhakarṇa went the same way. Only Vibhīṣaṇa stood under a white umbrella, with white garlands.’",
    "సరిగ్గా అప్పుడు {trijata|త్రిజట} అనే వృద్ధ రాక్షసి నిద్రలేచి, ‘ఆగండి! ఆమెను ఇంకా బెదిరించకండి. నాకు భయంకరమైన కల వచ్చింది, తలచుకుంటేనే వెంట్రుకలు నిక్కబొడుచుకుంటున్నాయి. తెల్లని వస్త్రాలు ధరించిన రామలక్ష్మణులను వెయ్యి గుర్రాలు లాగే దంతపు పల్లకిలో ఆకాశంలో వెళ్ళడం చూశాను. తెల్లని వస్త్రంలో సీత సముద్రం దగ్గర తెల్లని పర్వతం మీద కూర్చుని, సూర్యకాంతి సూర్యుని చేరినట్టు రాముని చేరడం చూశాను. రావణుడు గుండు కొట్టించుకుని, నూనె పూసుకుని, ఎర్రని బట్టలతో గాడిద మీద దక్షిణం వైపు వెళ్తూ బురదలో పడడం చూశాను. అతని కొడుకులు, కుంభకర్ణుడు అదే దారిలో వెళ్ళారు. విభీషణుడు ఒక్కడే తెల్లని గొడుగు కింద, తెల్లని మాలలతో నిలబడ్డాడు.’"],
   ["p", "‘And I saw a vānara, sent by Rāma, set all of Laṅkā on fire, and the city sink into the sea. Listen to me: Rāma's victory is certain. Instead of threatening this lady, bow to her and ask for her protection. She will save us when the time comes.’ The rākṣasīs fell silent and afraid. And Sītā, at that moment, felt her left eye throb, then her left arm, then her left side — good signs for a woman — and her heart grew lighter, ‘like a seed sprouting in the rain’.",
    "‘రాముడు పంపిన ఒక వానరుడు లంకనంతా తగలబెట్టడం, నగరం సముద్రంలో మునిగిపోవడం చూశాను. నా మాట వినండి: రాముని విజయం ఖాయం. ఈమెను బెదిరించే బదులు ఈమెకు నమస్కరించి రక్షణ కోరండి. సమయం వచ్చినప్పుడు ఈమె మనల్ని కాపాడుతుంది.’ రాక్షసులు భయంతో మౌనంగా ఉండిపోయారు. ఆ క్షణంలో సీతకు ఎడమ కన్ను అదిరింది, తర్వాత ఎడమ భుజం, ఎడమ పక్క — స్త్రీకి శుభ శకునాలు — ఆమె మనసు తేలికపడింది, ‘వానలో మొలకెత్తిన విత్తనంలా’."]
  ],
  [
   ["p", "High in the tree, Hanumān had heard everything. Now he faced his hardest problem: how to speak to Sītā without frightening her. ‘If I speak in refined Sanskrit like a learned brāhmaṇa, she may think I am Rāvaṇa in disguise and be terrified. If she cries out, the guards will come, there will be a fight, and I may never get to give her Rāma's message. I must speak gently, in the everyday language of the people, and first speak about Rāma, so that she trusts me before she sees me.’",
    "చెట్టు పైన హనుమంతుడు అంతా విన్నాడు. ఇప్పుడు అతని ముందు అన్నిటికంటే కష్టమైన సమస్య: సీతను భయపెట్టకుండా ఆమెతో ఎలా మాట్లాడాలి. ‘పండితుడైన బ్రాహ్మణుడిలా శుద్ధ సంస్కృతంలో మాట్లాడితే, మారువేషంలో వచ్చిన రావణుడని భయపడవచ్చు. ఆమె అరిస్తే కావలివాళ్ళు వస్తారు, యుద్ధం జరుగుతుంది, రాముని సందేశం ఇవ్వలేకపోవచ్చు. మెల్లగా, సామాన్య ప్రజల భాషలో మాట్లాడాలి; ముందు రాముని గురించి చెప్పాలి — నన్ను చూడకముందే ఆమె నన్ను నమ్మేలా.’"],
   ["dyk", "🗣️", "This is one of the earliest places in literature where someone carefully chooses which language and style to speak in, so as to be understood and trusted. Hanumān is remembered as the perfect messenger — wise in words as well as strong.",
    "అర్థం కావాలని, నమ్మకం కలగాలని ఏ భాషలో, ఏ తీరులో మాట్లాడాలో జాగ్రత్తగా ఎంచుకున్న తొలి సందర్భాల్లో ఇది ఒకటి. బలంలోనే కాదు, మాటలో కూడా నేర్పరి అయిన ఆదర్శ దూతగా హనుమంతుణ్ణి గుర్తుంచుకుంటారు."]
  ]
 ],
 remember: [
  ["The rākṣasīs threatened Sītā, but she stayed faithful to Rāma.", "రాక్షసులు సీతను బెదిరించారు, కానీ ఆమె రామునికే నిష్ఠగా ఉంది."],
  ["Trijaṭā dreamed of Rāma's victory, Rāvaṇa's fall and Laṅkā burning.", "త్రిజటకు రాముని విజయం, రావణుని పతనం, లంక కాలిపోవడం కలలో కనిపించాయి."],
  ["Hanumān planned to speak gently, in the people's language, about Rāma first.", "హనుమంతుడు ప్రజల భాషలో, మెల్లగా, ముందు రాముని గురించి మాట్లాడాలని నిర్ణయించుకున్నాడు."]
 ],
 think: ["Hanumān thought about how his words would sound to Sītā before he spoke. How can thinking about the listener make our words kinder and clearer?", "మాట్లాడే ముందు తన మాటలు సీతకు ఎలా వినిపిస్తాయో హనుమంతుడు ఆలోచించాడు. వినేవారి గురించి ఆలోచిస్తే మన మాటలు ఎలా మరింత దయగా, స్పష్టంగా అవుతాయి?"]
},
{
 id: "sundara-7", kanda: "sundara", n: 7, order: 507, date: "2026-10-21",
 title: "Rāma's Story in the Treetop", titleTe: "చెట్టుపై రామకథ", sargas: "31–34", scene: "night",
 who: ["hanuman", "sita", "rama", "dasaratha"],
 pages: [
  [
   ["p", "So, softly, from among the leaves, Hanumān began to tell a story. ‘There was a king named {dasaratha|Daśaratha}, of the Ikṣvāku line, rich and righteous. His eldest and dearest son was {rama|Rāma}, the best of archers, a protector of all. To keep his father's word, Rāma went to the forest with his wife and his brother Lakṣmaṇa. There he killed many rākṣasas. Then, to avenge them, Rāvaṇa came with a magic deer, tricked Rāma away, and carried off Sītā. Searching for her, Rāma made friends with Sugrīva, killed Vāli, and gave Sugrīva the kingdom. Now thousands of vānaras search for her in every direction. I am one of them. I crossed the sea, and I have found the one I sought.’",
    "అలా ఆకుల మధ్య నుండి మెల్లగా హనుమంతుడు ఒక కథ చెప్పడం మొదలుపెట్టాడు. ‘ఇక్ష్వాకు వంశంలో {dasaratha|దశరథుడు} అనే ధనవంతుడు, ధర్మాత్ముడైన రాజు ఉండేవాడు. అతని పెద్ద కొడుకు, ప్రియమైనవాడు {rama|రాముడు} — విలుకాళ్ళలో శ్రేష్ఠుడు, అందరికీ రక్షకుడు. తండ్రి మాట నిలబెట్టడానికి రాముడు భార్యతో, తమ్ముడు లక్ష్మణునితో అడవికి వెళ్ళాడు. అక్కడ ఎందరో రాక్షసులను చంపాడు. వారి పగ తీర్చుకోవడానికి రావణుడు మాయలేడితో వచ్చి, రాముణ్ణి దూరంగా పంపి, సీతను ఎత్తుకుపోయాడు. ఆమెను వెతుకుతూ రాముడు సుగ్రీవునితో స్నేహం చేసి, వాలిని చంపి, సుగ్రీవునికి రాజ్యం ఇచ్చాడు. ఇప్పుడు వేలాది వానరులు అన్ని దిక్కులా ఆమెను వెతుకుతున్నారు. నేను వారిలో ఒకణ్ణి. సముద్రం దాటి వచ్చాను; వెతుకుతున్నవారిని కనుగొన్నాను.’"],
   ["p", "Sītā lifted her face in amazement. She looked up into the tree — and saw a small vānara, dressed in white, golden-brown like lightning, sitting among the branches with folded hands. She was frightened and wondered, ‘Is this a dream? I have dreamed of a monkey, and that is a bad omen. But I have hardly slept for months — how can I dream? Perhaps I am thinking of Rāma so much that I imagine this. O gods, let this be true!’",
    "సీత ఆశ్చర్యంగా ముఖం ఎత్తింది. చెట్టులోకి చూసింది — కొమ్మల మధ్య చేతులు జోడించి కూర్చున్న ఒక చిన్న వానరుడు, తెల్లని వస్త్రంతో, మెరుపులా బంగారు రంగుతో కనిపించాడు. ఆమె భయపడి ఆలోచించింది: ‘ఇది కలా? కలలో కోతిని చూడడం అశుభం అంటారు. కానీ నెలల తరబడి నిద్రే పోలేదు — కల ఎలా వస్తుంది? రాముని గురించి ఎక్కువగా ఆలోచించడం వల్ల ఇలా ఊహించుకుంటున్నానేమో. దేవతలారా, ఇది నిజం కావాలి!’"]
  ],
  [
   ["p", "Hanumān came down slowly, bowed low, and asked respectfully, ‘Who are you, lady, standing here in a faded silk, holding the branch of this tree, with tears like water falling from a lotus? Are you a goddess? Or — if I may ask — are you Sītā, whom Rāvaṇa carried away from Janasthāna?’ Hearing Rāma's name and her own, Sītā answered, ‘I am the daughter of King Janaka of Videha, and the wife of Rāma. For twelve years I lived happily in Ayodhyā. When Rāma was to be crowned, Queen Kaikeyī demanded his exile, and I followed him to the forest with Lakṣmaṇa. There Rāvaṇa stole me. He has given me two months to live.’",
    "హనుమంతుడు నెమ్మదిగా దిగివచ్చి, వంగి నమస్కరించి, గౌరవంగా అడిగాడు: ‘అమ్మా, వెలిసిపోయిన పట్టుచీరతో, ఈ చెట్టు కొమ్మ పట్టుకుని, తామర నుండి నీరు జారినట్టు కన్నీళ్ళు కారుస్తూ నిలబడ్డ మీరెవరు? దేవతా? లేక — అడగవచ్చంటే — జనస్థానం నుండి రావణుడు ఎత్తుకొచ్చిన సీతాదేవి మీరేనా?’ రాముని పేరు, తన పేరు విని సీత జవాబిచ్చింది: ‘నేను విదేహ రాజు జనకుని కూతురిని, రాముని భార్యను. పన్నెండేళ్ళు అయోధ్యలో సుఖంగా ఉన్నాను. రామునికి పట్టాభిషేకం జరగాల్సిన సమయంలో కైకేయి అతని వనవాసం కోరింది; లక్ష్మణునితో పాటు నేనూ అతని వెంట అడవికి వెళ్ళాను. అక్కడ రావణుడు నన్ను దొంగిలించాడు. బతకడానికి నాకు రెండు నెలలు ఇచ్చాడు.’"],
   ["p", "‘I am Rāma's messenger, my lady,’ said Hanumān. ‘Rāma is well, and so is Lakṣmaṇa. Rāma asks after you, and Lakṣmaṇa bows to you.’ Sītā's whole body thrilled with joy. ‘There is an old saying,’ she said, ‘that joy comes to a living person even after a hundred years. I see now it is true.’"
   , "‘అమ్మా, నేను రాముని దూతను,’ అన్నాడు హనుమంతుడు. ‘రాముడు క్షేమంగా ఉన్నాడు, లక్ష్మణుడూ క్షేమమే. రాముడు మీ క్షేమం అడిగాడు; లక్ష్మణుడు మీకు నమస్కారం చెప్పాడు.’ సీత ఒళ్ళంతా ఆనందంతో పులకించింది. ‘బతికి ఉన్నవాడికి వంద సంవత్సరాల తర్వాతైనా ఆనందం వస్తుంది అని ఒక పాత సామెత ఉంది,’ అంది. ‘అది నిజమని ఇప్పుడు చూస్తున్నాను.’"]
  ],
  [
   ["p", "But as Hanumān stepped closer, a doubt struck her and she drew back. ‘Oh, what have I done! You are Rāvaṇa himself, in the form of a monkey, come to trick me again — just as he came before in the form of a holy man! Go away!’ She covered her face and sank down. Hanumān stood still, hands folded. ‘My lady, I am not who you fear. I am Hanumān, son of the Wind god, minister of the vānara king Sugrīva. I will prove it to you.’",
    "కానీ హనుమంతుడు దగ్గరకు రాగానే ఆమెకు అనుమానం వచ్చి వెనక్కి తగ్గింది. ‘అయ్యో, ఏం చేశాను! నువ్వు కోతి రూపంలో వచ్చిన రావణుడివే, నన్ను మళ్ళీ మోసం చేయడానికి — ఇంతకుముందు సన్యాసి రూపంలో వచ్చినట్టే! వెళ్ళిపో!’ ముఖం కప్పుకుని కూలబడింది. హనుమంతుడు చేతులు జోడించి కదలకుండా నిలబడ్డాడు. ‘అమ్మా, మీరు భయపడుతున్నవాణ్ణి కాను. నేను హనుమంతుణ్ణి, వాయుపుత్రుణ్ణి, వానరరాజు సుగ్రీవుని మంత్రిని. రుజువు చూపిస్తాను.’"]
  ]
 ],
 remember: [
  ["Hanumān softly told Rāma's story so that Sītā would trust him.", "సీత నమ్మేలా హనుమంతుడు మెల్లగా రామకథ చెప్పాడు."],
  ["Sītā told him who she was and that Rāvaṇa had given her two months.", "సీత తానెవరో, రావణుడు రెండు నెలల గడువు ఇచ్చాడని చెప్పింది."],
  ["Afraid of another trick, she first thought Hanumān was Rāvaṇa in disguise.", "మళ్ళీ మోసం జరుగుతుందని భయపడి, మొదట హనుమంతుణ్ణి మారువేషంలో రావణుడని అనుకుంది."]
 ],
 think: ["Sītā had been tricked once by a disguise, so she was careful now. How do we learn from past mistakes without becoming afraid of everyone?", "ఒకసారి మారువేషంతో మోసపోయిన సీత ఇప్పుడు జాగ్రత్తగా ఉంది. అందరినీ చూసి భయపడకుండా గత తప్పుల నుండి ఎలా నేర్చుకోవాలి?"]
},
{
 id: "sundara-8", kanda: "sundara", n: 8, order: 508, date: "2026-10-21",
 title: "Rāma's Ring", titleTe: "రాముని ఉంగరం", sargas: "35–36", scene: "night",
 who: ["sita", "hanuman", "rama", "sugriva"],
 pages: [
  [
   ["p", "‘If you are truly Rāma's messenger,’ said Sītā, ‘tell me about him. What does he look like? How did you, a vānara, meet him? Tell me about Lakṣmaṇa too.’ Hanumān answered with love. ‘Rāma has eyes like lotus petals and a face like the full moon. He is broad-shouldered, long-armed, with a voice deep as a drum. He is truthful, generous, learned in the Vedas and in archery, a protector of his people and of all who come to him. Lakṣmaṇa is like him in form, golden in colour, and devoted to him like a shadow.’",
    "‘నువ్వు నిజంగా రాముని దూతవైతే,’ అంది సీత, ‘అతని గురించి చెప్పు. అతను ఎలా ఉంటాడు? వానరుడివైన నువ్వు అతన్ని ఎలా కలిశావు? లక్ష్మణుని గురించి కూడా చెప్పు.’ హనుమంతుడు ప్రేమతో జవాబిచ్చాడు. ‘రామునివి తామర రేకుల్లాంటి కళ్ళు, పున్నమి చంద్రుని వంటి ముఖం. విశాలమైన భుజాలు, మోకాళ్ళ వరకు చేతులు, డోలులా గంభీరమైన కంఠం. సత్యవంతుడు, దాత, వేదాల్లోనూ ధనుర్విద్యలోనూ పండితుడు, తన ప్రజలకు, ఆశ్రయించినవారికి రక్షకుడు. లక్ష్మణుడు రూపంలో అతనిలాగే ఉంటాడు, బంగారు రంగు, నీడలా అతన్ని అంటిపెట్టుకుని ఉంటాడు.’"],
   ["p", "Then he told her how he had met the two brothers at Ṛṣyamūka, how Rāma and {sugriva|Sugrīva} had become friends before the fire, how the vānaras had seen her dropping her jewels from Rāvaṇa's chariot, and how Rāma had held those jewels to his heart and wept. ‘Rāma does not eat properly, or sleep, or enjoy anything,’ said Hanumān. ‘Even when he wakes from a moment's sleep, he cries, “Sītā!” If he sees a flower or a fruit or anything beautiful, he sighs and calls your name.’",
    "తర్వాత ఋష్యమూకం దగ్గర ఇద్దరు అన్నదమ్ములను ఎలా కలిశాడో, అగ్నిసాక్షిగా రాముడు, {sugriva|సుగ్రీవుడు} ఎలా స్నేహితులయ్యారో, రావణుని రథం నుండి ఆమె నగలు జారవిడవడం వానరులు ఎలా చూశారో, రాముడు ఆ నగలను గుండెకు హత్తుకుని ఎలా ఏడ్చాడో చెప్పాడు. ‘రాముడు సరిగ్గా తినడు, నిద్రపోడు, దేనిలోనూ ఆనందం పొందడు,’ అన్నాడు హనుమంతుడు. ‘క్షణం కునుకు తీసి లేచినా “సీతా!” అని పిలుస్తాడు. ఏ పువ్వును, పండును, అందమైన దేన్ని చూసినా నిట్టూర్చి మీ పేరు తలుస్తాడు.’"]
  ],
  [
   ["p", "‘And now, my lady, here is a sign that Rāma gave me himself, so that you will know me.’ Hanumān held out a golden ring engraved with Rāma's name. Sītā took it in her hands and gazed at it. It was as if Rāma himself had come. Her face, pale with grief, suddenly shone ‘like the moon set free from an eclipse’. She laughed and wept at once, and pressed the ring to her eyes.",
    "‘ఇప్పుడు అమ్మా, మీరు నన్ను నమ్మడానికి రాముడు స్వయంగా ఇచ్చిన గుర్తు ఇదిగో.’ హనుమంతుడు రాముని పేరు చెక్కిన బంగారు ఉంగరం చూపించాడు. సీత దాన్ని చేతుల్లోకి తీసుకుని చూసింది. రాముడే స్వయంగా వచ్చినట్టు అనిపించింది. దుఃఖంతో పాలిపోయిన ఆమె ముఖం ఒక్కసారిగా ‘గ్రహణం విడిచిన చంద్రునిలా’ ప్రకాశించింది. ఒకేసారి నవ్వింది, ఏడ్చింది; ఉంగరాన్ని కళ్ళకు అద్దుకుంది."],
   ["p", "‘You are brave, wise and capable, best of vānaras,’ she said, ‘since you alone crossed the hundred-yojana ocean and entered this city. Rāma would not send an ordinary messenger. But tell me — if Rāma is well, why does he not come and burn this whole place with his arrows? Has he stopped loving me? Is he angry with me?’ Hanumān said gently, ‘Rāma does not know where you are, my lady. The moment I tell him, he will come with an army of vānaras and bears, cross the ocean somehow, and destroy Laṅkā. I swear it by the mountains, the roots and fruits I live on.’",
    "‘వానరోత్తమా, నువ్వు ధైర్యవంతుడివి, తెలివైనవాడివి, సమర్థుడివి,’ అంది ఆమె, ‘నువ్వు ఒక్కడివే వంద యోజనాల సముద్రం దాటి ఈ నగరంలో ప్రవేశించావు. రాముడు సామాన్య దూతను పంపడు. కానీ చెప్పు — రాముడు క్షేమంగా ఉంటే వచ్చి తన బాణాలతో ఈ చోటంతా ఎందుకు కాల్చేయడం లేదు? నాపై ప్రేమ తగ్గిందా? నాపై కోపంగా ఉన్నాడా?’ హనుమంతుడు మెల్లగా అన్నాడు: ‘అమ్మా, మీరెక్కడున్నారో రామునికి తెలియదు. నేను చెప్పిన వెంటనే వానర భల్లూక సేనతో వస్తాడు, ఎలాగైనా సముద్రం దాటి లంకను నాశనం చేస్తాడు. నేను బతికే కొండల మీద, దుంపల మీద, పండ్ల మీద ఒట్టు.’"]
  ],
  [
   ["p", "Sītā was comforted, but her heart was still heavy. ‘Your words are like nectar mixed with poison,’ she said. ‘Nectar, because you say Rāma will come. Poison, because I do not know whether he will come in time. Rāvaṇa's two months are passing. Tell Rāma to hurry.’ She told Hanumān that Rāvaṇa's own brother Vibhīṣaṇa had advised Rāvaṇa to return her, and that a wise old rākṣasa named Avindhya had said the same — but Rāvaṇa would not listen. ‘Death has hold of him,’ she said.",
    "సీతకు ఊరట కలిగింది, కానీ మనసు ఇంకా బరువుగానే ఉంది. ‘నీ మాటలు విషం కలిసిన అమృతంలా ఉన్నాయి,’ అంది. ‘రాముడు వస్తాడని చెప్పావు కాబట్టి అమృతం. సమయానికి వస్తాడో లేదో తెలియదు కాబట్టి విషం. రావణుని రెండు నెలల గడువు గడిచిపోతోంది. త్వరగా రమ్మని రామునికి చెప్పు.’ రావణుని తమ్ముడు విభీషణుడు, అవింధ్యుడు అనే వృద్ధ జ్ఞాని రాక్షసుడు కూడా తనను తిరిగి ఇచ్చేయమని రావణునికి సలహా ఇచ్చారని, కానీ అతను వినలేదని హనుమంతునికి చెప్పింది. ‘మృత్యువు అతన్ని పట్టుకుంది,’ అంది."],
   ["dyk", "💍", "Telugu families still sing of this moment — ‘Rāma's ring’ (రామ ముద్రిక) — in folk songs and in Tyāgarāja's and Annamayya's devotional songs, as the sign of faith rewarded.",
    "ఈ సన్నివేశాన్ని — ‘రామ ముద్రిక’ — తెలుగు కుటుంబాలు ఇప్పటికీ జానపద పాటల్లో, త్యాగరాజు అన్నమయ్యల కీర్తనల్లో, నమ్మకానికి దక్కిన ఫలానికి గుర్తుగా పాడుకుంటారు."]
  ]
 ],
 remember: [
  ["Hanumān described Rāma and told Sītā how Rāma longs for her.", "హనుమంతుడు రాముని రూపం వర్ణించి, రాముడు ఆమె కోసం ఎలా తపిస్తున్నాడో చెప్పాడు."],
  ["He gave her Rāma's ring, engraved with his name, and her face shone with joy.", "రాముని పేరు చెక్కిన ఉంగరం ఇవ్వగానే ఆమె ముఖం ఆనందంతో వెలిగింది."],
  ["Sītā asked Hanumān to tell Rāma to come quickly, before the two months ended.", "రెండు నెలలు ముగిసేలోపు త్వరగా రమ్మని రామునికి చెప్పమని సీత కోరింది."]
 ],
 think: ["A small ring brought Sītā great comfort, because it came from someone she loved. What small object reminds you of someone you love?", "ప్రియమైనవారి నుండి వచ్చినందుకు ఒక చిన్న ఉంగరం సీతకు గొప్ప ఊరట ఇచ్చింది. మీకు ప్రియమైనవారిని గుర్తుచేసే చిన్న వస్తువు ఏది?"]
}
]);
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "sundara-9", kanda: "sundara", n: 9, order: 509, date: "2026-10-21",
 title: "The Crow and the Crest-Jewel", titleTe: "కాకి కథ, చూడామణి", sargas: "37–40", scene: "night",
 who: ["sita", "hanuman", "rama", "indra"],
 pages: [
  [
   ["p", "Hanumān could not bear to see Sītā suffer. ‘My lady, why wait? Sit on my back and I will carry you across the ocean to Rāma this very day. I can carry all of Laṅkā with Rāvaṇa if I wish!’ Sītā smiled through her tears. ‘You are so small, little vānara. How could you carry me so far?’ At once Hanumān grew — taller than the trees, like a mountain of copper, with a face like fire and teeth like diamonds. ‘Now do you believe me?’",
    "సీత బాధ చూసి హనుమంతుడు తట్టుకోలేకపోయాడు. ‘అమ్మా, ఎందుకు ఆగడం? నా వీపు మీద కూర్చోండి; ఈ రోజే సముద్రం దాటి రాముని దగ్గరకు తీసుకెళ్తాను. కావాలంటే రావణుడితో సహా లంకనంతా మోయగలను!’ సీత కన్నీళ్ళ మధ్య నవ్వింది. ‘చిన్న వానరా, నువ్వు ఇంత చిన్నగా ఉన్నావు. నన్ను అంత దూరం ఎలా మోస్తావు?’ వెంటనే హనుమంతుడు పెరిగాడు — చెట్ల కంటే ఎత్తుగా, రాగి పర్వతంలా, అగ్నిలాంటి ముఖంతో, వజ్రాల్లాంటి దంతాలతో. ‘ఇప్పుడు నమ్ముతారా?’"],
   ["p", "‘I believe you,’ said Sītā, ‘but I will not go. If you fly fast, I may faint and fall into the sea. The rākṣasas will chase you, and while you fight them, how will you protect me? And I will not willingly touch any man but Rāma — Rāvaṇa touched me only by force. Most of all, Rāma must win me back himself, by destroying Rāvaṇa. That is what is worthy of him. Bring Rāma here.’ Hanumān bowed, full of admiration. ‘Your words are worthy of you, my lady.’",
    "‘నమ్ముతాను,’ అంది సీత, ‘కానీ నేను రాను. నువ్వు వేగంగా ఎగిరితే నేను స్పృహ తప్పి సముద్రంలో పడిపోవచ్చు. రాక్షసులు నిన్ను వెంటాడతారు; వారితో యుద్ధం చేస్తూ నన్నెలా కాపాడతావు? అంతేకాదు, రాముడు తప్ప మరే పురుషుణ్ణీ ఇష్టపూర్వకంగా తాకను — రావణుడు బలవంతంగానే తాకాడు. అన్నిటికంటే ముఖ్యంగా, రాముడే రావణుణ్ణి సంహరించి నన్ను తిరిగి పొందాలి. అదే అతనికి తగినది. రాముణ్ణి ఇక్కడికి తీసుకురా.’ హనుమంతుడు ఆరాధనతో నమస్కరించాడు. ‘అమ్మా, మీ మాటలు మీకు తగినట్టే ఉన్నాయి.’"]
  ],
  [
   ["p", "‘Then give me a sign for Rāma,’ said Hanumān, ‘something only he will understand.’ Sītā told him a story that no one else knew. ‘Once, at Citrakūṭa, Rāma was resting with his head in my lap. A crow kept pecking at me and scratching me until I bled. Rāma woke and saw it. In anger he picked up a blade of grass, charged it with the power of the Brahmāstra, and sent it after the crow. The crow — it was the son of {indra|Indra} — fled through all the worlds, but no god could protect it from Rāma's grass. At last it came back and fell at Rāma's feet. Rāma forgave it, but the weapon could not be wasted, so it took the crow's right eye.’",
    "‘అయితే రామునికి ఒక గుర్తు ఇవ్వండి,’ అన్నాడు హనుమంతుడు, ‘అతనొక్కడికే అర్థమయ్యేది.’ ఇంకెవరికీ తెలియని ఒక కథ సీత చెప్పింది. ‘ఒకసారి చిత్రకూటంలో రాముడు నా ఒడిలో తల పెట్టుకుని విశ్రాంతి తీసుకుంటున్నాడు. ఒక కాకి నన్ను పదే పదే పొడిచి, రక్తం వచ్చేలా గీరింది. రాముడు లేచి చూశాడు. కోపంతో ఒక గడ్డిపోచ తీసి, దానిలో బ్రహ్మాస్త్ర శక్తిని నింపి, కాకి మీదకు వదిలాడు. ఆ కాకి — అది {indra|ఇంద్రుని} కొడుకు — లోకాలన్నీ పారిపోయింది, కానీ ఏ దేవుడూ రాముని గడ్డిపోచ నుండి కాపాడలేకపోయాడు. చివరికి తిరిగి వచ్చి రాముని పాదాల మీద పడింది. రాముడు క్షమించాడు, కానీ అస్త్రం వృథా కాకూడదు కాబట్టి అది కాకి కుడి కన్ను తీసుకుంది.’"],
   ["p", "‘Ask him: “You used the Brahmāstra on a crow for my sake — why do you forgive the one who has stolen me?”’ Then she untied from her hair a precious jewel, the cūḍāmaṇi, which she had kept hidden in her cloth all this time. ‘Give this to Rāma. He will know it. My father gave it to me at our wedding, in Rāma's presence. Tell him I will live one more month. After that, I will not live without him.’",
    "‘అతన్ని అడుగు: “నా కోసం ఒక కాకి మీద బ్రహ్మాస్త్రం వేశావు — నన్ను దొంగిలించినవాణ్ణి ఎందుకు క్షమిస్తున్నావు?”’ తర్వాత ఇంతకాలం తన వస్త్రంలో దాచుకున్న విలువైన ఆభరణం, చూడామణిని, జుట్టు నుండి విప్పింది. ‘దీన్ని రామునికి ఇవ్వు. అతను గుర్తుపడతాడు. మా పెళ్ళిలో, రాముని ఎదుటే, మా నాన్న ఇచ్చాడు. ఇంకా ఒక్క నెల బతుకుతానని చెప్పు. ఆ తర్వాత అతను లేకుండా బతకను.’"]
  ],
  [
   ["p", "Hanumān took the jewel, placed it on his head, then wrapped it safely and put it on his finger. He walked round Sītā in reverence and bowed. ‘Do not grieve, my lady. Very soon you will see Rāma and Lakṣmaṇa at the gates of Laṅkā, with Sugrīva and an army of vānaras as tall as mountains. Rāma will kill Rāvaṇa and take you home.’",
    "హనుమంతుడు ఆ మణిని తీసుకుని తల మీద పెట్టుకున్నాడు, తర్వాత భద్రంగా చుట్టి వేలికి పెట్టుకున్నాడు. సీత చుట్టూ ప్రదక్షిణ చేసి నమస్కరించాడు. ‘అమ్మా, దుఃఖించకండి. అతి త్వరలో లంక ద్వారాల దగ్గర రామలక్ష్మణులను, సుగ్రీవుణ్ణి, పర్వతాలంత ఎత్తైన వానర సేనను చూస్తారు. రాముడు రావణుణ్ణి చంపి మిమ్మల్ని ఇంటికి తీసుకెళ్తాడు.’"],
   ["p", "As he turned to go, Sītā said one more thing, softly. ‘Tell Rāma and Lakṣmaṇa and Sugrīva that I asked after their health. And Hanumān — be careful on your way back.’ Hanumān's heart was full. He had done what he came for. But a brave messenger, he thought, does more than carry a message.",
    "అతను వెళ్ళబోతుంటే సీత మెల్లగా ఇంకో మాట చెప్పింది. ‘రామలక్ష్మణులను, సుగ్రీవుణ్ణి నేను క్షేమం అడిగానని చెప్పు. హనుమా — తిరుగు ప్రయాణంలో జాగ్రత్త.’ హనుమంతుని మనసు నిండిపోయింది. వచ్చిన పని పూర్తయింది. కానీ ధైర్యవంతుడైన దూత కేవలం సందేశం మోసి ఊరుకోడు అనుకున్నాడు."]
  ]
 ],
 remember: [
  ["Sītā refused to be carried away by Hanumān; Rāma must win her back himself.", "హనుమంతుని వీపు మీద వెళ్ళడానికి సీత ఒప్పుకోలేదు; రాముడే స్వయంగా తనను గెలుచుకోవాలంది."],
  ["She told the secret story of the crow and Rāma's blade of grass.", "కాకి, రాముని గడ్డిపోచ గురించిన రహస్య కథ చెప్పింది."],
  ["She gave Hanumān her cūḍāmaṇi (crest-jewel) as a sign for Rāma.", "రామునికి గుర్తుగా తన చూడామణిని హనుమంతునికి ఇచ్చింది."]
 ],
 think: ["Sītā could have escaped quickly, but she chose what was right for Rāma's honour and her own. Is the quickest way always the best way?", "సీత త్వరగా తప్పించుకోవచ్చు, కానీ రాముని గౌరవానికి, తన గౌరవానికి సరైనదాన్ని ఎంచుకుంది. త్వరగా అయ్యే దారే ఎప్పుడూ మంచి దారా?"]
},
{
 id: "sundara-10", kanda: "sundara", n: 10, order: 510, date: "2026-10-21",
 title: "Breaking the Grove", titleTe: "వన భంగం", sargas: "41–43", scene: "lanka",
 who: ["hanuman", "ravana", "sita"],
 pages: [
  [
   ["p", "Hanumān thought, ‘I have found Sītā. But a good messenger should also learn the enemy's strength. If I go back now, I will know nothing about Rāvaṇa's army. Let me make Rāvaṇa angry, so that he sends his warriors against me and I can see what they are worth. And let me meet Rāvaṇa face to face.’ So he began to destroy the beautiful Aśoka grove — uprooting trees, smashing pleasure-houses, breaking the jewelled steps of the ponds, scattering the birds. Only the śiṃśapā tree where Sītā sat he left untouched.",
    "హనుమంతుడు ఆలోచించాడు: ‘సీతను కనుగొన్నాను. కానీ మంచి దూత శత్రువు బలాన్ని కూడా తెలుసుకోవాలి. ఇప్పుడే వెళ్ళిపోతే రావణుని సైన్యం గురించి ఏమీ తెలియదు. రావణునికి కోపం తెప్పిస్తాను; అప్పుడు అతను తన వీరులను నా మీదకు పంపుతాడు, వారి సత్తా ఏమిటో చూడవచ్చు. రావణుణ్ణి ముఖాముఖి కలవనూవచ్చు.’ అలా అతను అందమైన అశోకవనాన్ని ధ్వంసం చేయడం మొదలుపెట్టాడు — చెట్లు పెకలించాడు, విహార గృహాలు పగలగొట్టాడు, కొలనుల రత్నాల మెట్లు విరిచాడు, పక్షులు చెల్లాచెదురయ్యాయి. సీత కూర్చున్న శింశుపా వృక్షాన్ని మాత్రం ముట్టుకోలేదు."],
   ["p", "The rākṣasīs woke in terror and saw a giant vānara on the gateway. ‘Who is he? What does he want? Why was he talking to you?’ they asked Sītā. She answered wisely, ‘How should I know? You rākṣasas can take any form you like. Only a snake knows the track of a snake. I am as frightened as you.’ The rākṣasīs ran to {ravana|Rāvaṇa} and told him that a strange vānara had destroyed the grove — everything except the tree where Sītā sat.",
    "రాక్షసులు భయంతో నిద్రలేచి ద్వారం మీద ఒక భారీ వానరుణ్ణి చూశారు. ‘అతనెవరు? ఏం కావాలి? నీతో ఎందుకు మాట్లాడుతున్నాడు?’ అని సీతను అడిగారు. ఆమె తెలివిగా జవాబిచ్చింది: ‘నాకెలా తెలుస్తుంది? రాక్షసులైన మీరు కోరిన రూపం ధరించగలరు. పాము అడుగుజాడ పాముకే తెలుస్తుంది. నేనూ మీలాగే భయపడుతున్నాను.’ రాక్షసులు {ravana|రావణుని} దగ్గరకు పరుగెత్తి, ఒక వింత వానరుడు వనాన్నంతా ధ్వంసం చేశాడని — సీత కూర్చున్న చెట్టు తప్ప — చెప్పారు."]
  ],
  [
   ["p", "Rāvaṇa's eyes blazed like funeral fires. He sent eighty thousand Kiṅkaras — his own household warriors, armed with clubs, iron bars and swords. They surrounded Hanumān. Hanumān lashed his tail on the ground, grew huge, and roared so loudly that birds fell from the sky. He grabbed an iron bar from the gateway and whirled it, and the Kiṅkaras fell like trees in a storm. Then, standing on the gateway, he shouted his famous war-cry:",
    "రావణుని కళ్ళు చితి మంటల్లా రగిలాయి. తన సొంత అంతఃపుర వీరులైన ఎనభై వేల మంది కింకరులను గదలు, ఇనుప కడ్డీలు, కత్తులతో పంపాడు. వారు హనుమంతుణ్ణి చుట్టుముట్టారు. హనుమంతుడు తోకను నేలకేసి కొట్టి, భారీగా పెరిగి, పక్షులు ఆకాశం నుండి రాలిపడేంత బిగ్గరగా గర్జించాడు. ద్వారం దగ్గరి ఇనుప కడ్డీని లాగి తిప్పాడు; తుఫానులో చెట్లలా కింకరులు కూలిపోయారు. తర్వాత ద్వారం మీద నిలబడి తన ప్రసిద్ధ రణనాదం చేశాడు:"],
   ["sloka", ["జయత్యతిబలో రామో లక్ష్మణశ్చ మహాబలః ।", "రాజా జయతి సుగ్రీవో రాఘవేణాభిపాలితః ॥", "దాసోఽహం కోసలేంద్రస్య రామస్యాక్లిష్టకర్మణః ।", "హనుమాన్ శత్రుసైన్యానాం నిహంతా మారుతాత్మజః ॥"],
    ["jayatyatibalo rāmo lakṣmaṇaśca mahābalaḥ |", "rājā jayati sugrīvo rāghaveṇābhipālitaḥ ||", "dāso'haṃ kosalendrasya rāmasyākliṣṭakarmaṇaḥ |", "hanumān śatrusainyānāṃ nihantā mārutātmajaḥ ||"],
    "‘Victory to Rāma, the mighty! Victory to Lakṣmaṇa, the strong! Victory to King Sugrīva, protected by Rāma! I am the servant of Rāma, lord of Kosala, whose deeds are effortless — I am Hanumān, son of the Wind, destroyer of enemy armies!’",
    "‘అతిబలుడైన రామునికి జయం! మహాబలుడైన లక్ష్మణునికి జయం! రాముని రక్షణలో ఉన్న సుగ్రీవ మహారాజుకు జయం! అలవోకగా మహాకార్యాలు చేసే కోసలేశ్వరుడైన రాముని దాసుణ్ణి నేను — శత్రుసేనలను సంహరించే వాయుపుత్రుడైన హనుమంతుణ్ణి!’"]
  ],
  [
   ["p", "‘A thousand Rāvaṇas could not stand against me in battle,’ Hanumān went on. ‘I will crush Laṅkā, bow to Sītā, and go back as I came, while all of you watch.’ Then he leapt onto a tall temple-palace (caitya) beside the grove, as high as Mount Meru, and broke it apart. When a hundred guards rushed at him with spears, he pulled out a golden pillar and spun it until it struck sparks and set the building ablaze, and the guards fell.",
    "‘వెయ్యి మంది రావణులు కూడా యుద్ధంలో నా ముందు నిలవలేరు,’ అన్నాడు హనుమంతుడు. ‘మీరందరూ చూస్తుండగానే లంకను నలిపి, సీతకు నమస్కరించి, వచ్చినట్టే వెళ్ళిపోతాను.’ తర్వాత వనం పక్కనే మేరు పర్వతమంత ఎత్తైన చైత్య ప్రాసాదం మీదకు దూకి దాన్ని పగలగొట్టాడు. వంద మంది కావలివాళ్ళు శూలాలతో దూసుకురాగా, ఒక బంగారు స్తంభం పెకలించి నిప్పురవ్వలు రాలేలా తిప్పాడు; భవనం మంటల్లో చిక్కుకుంది, కావలివాళ్ళు కూలిపోయారు."],
   ["dyk", "🙏", "These four lines are among the most loved verses of the Rāmāyaṇa. Many people recite them for courage before a difficult task, just as Hanumān shouted them on the gate of Laṅkā.",
    "ఈ నాలుగు పంక్తులు రామాయణంలో అత్యంత ప్రియమైన శ్లోకాల్లో ఒకటి. లంక ద్వారం మీద హనుమంతుడు గర్జించినట్టే, కష్టమైన పని ముందు ధైర్యం కోసం చాలామంది వీటిని పఠిస్తారు."]
  ]
 ],
 remember: [
  ["Hanumān destroyed the Aśoka grove on purpose, to test Rāvaṇa's strength — sparing Sītā's tree.", "రావణుని బలం పరీక్షించడానికి హనుమంతుడు కావాలనే అశోకవనాన్ని ధ్వంసం చేశాడు — సీత చెట్టును వదిలి."],
  ["He defeated eighty thousand Kiṅkaras with an iron bar.", "ఇనుప కడ్డీతో ఎనభై వేల కింకరులను ఓడించాడు."],
  ["He shouted ‘jayatyatibalo rāmaḥ…’ — ‘I am the servant of Rāma!’", "‘జయత్యతిబలో రామః…’ — ‘నేను రాముని దాసుణ్ణి!’ అని గర్జించాడు."]
 ],
 think: ["Hanumān called himself Rāma's servant even at his moment of greatest strength. Why might the strongest people also be the humblest?", "తన బలం అత్యున్నతంగా ఉన్న క్షణంలో కూడా హనుమంతుడు తనను రాముని దాసుడని చెప్పుకున్నాడు. అత్యంత బలవంతులే అత్యంత వినయంగా ఎందుకు ఉంటారు?"]
},
{
 id: "sundara-11", kanda: "sundara", n: 11, order: 511, date: "2026-10-21",
 title: "Akṣa and the Warriors", titleTe: "అక్షయకుమారుడు, వీరులు", sargas: "44–47", scene: "lanka",
 who: ["hanuman", "jambumali", "prahasta", "aksha", "ravana"],
 pages: [
  [
   ["p", "Next Rāvaṇa sent {jambumali|Jambumālī}, the son of his commander {prahasta|Prahasta} — a huge rākṣasa with red garlands and a great bow, riding a chariot drawn by donkeys. He shot arrows into Hanumān's face and arms. Hanumān, bleeding but laughing, tore up a sāla tree and threw it, then picked up an iron bar and struck Jambumālī down, chariot, donkeys and all.",
    "తర్వాత రావణుడు తన సేనాధిపతి {prahasta|ప్రహస్తుని} కుమారుడు {jambumali|జంబుమాలిని} పంపాడు — ఎర్రని మాలలు, పెద్ద విల్లు ధరించి గాడిదలు లాగే రథం మీద వచ్చిన భారీ రాక్షసుడు. అతను హనుమంతుని ముఖం మీద, భుజాల మీద బాణాలు వేశాడు. రక్తం కారుతున్నా నవ్వుతూ హనుమంతుడు ఒక సాల వృక్షాన్ని పెకలించి విసిరాడు; తర్వాత ఇనుప కడ్డీతో జంబుమాలిని రథం, గాడిదలతో సహా నేలకూల్చాడు."],
   ["p", "Then came the seven sons of Rāvaṇa's ministers, shining in golden armour, eager for glory, with a great army. Their mothers and friends wept as they rode out. Hanumān leapt into the sky, dodged their arrows, then came down among them, striking with hands and feet and roaring. All seven fell. After them Rāvaṇa sent five of his finest generals — Virūpākṣa, Yūpākṣa, Durdhara, Praghasa and Bhāsakarṇa. ‘Be careful,’ Rāvaṇa warned them. ‘This is no ordinary monkey. Perhaps Indra has created him to fight me.’ But all five were killed too, with their soldiers."
   , "తర్వాత రావణుని మంత్రుల ఏడుగురు కుమారులు బంగారు కవచాలతో మెరుస్తూ, కీర్తి కోసం ఉత్సాహంతో, పెద్ద సైన్యంతో వచ్చారు. వారు బయలుదేరుతుంటే వారి తల్లులు, స్నేహితులు ఏడ్చారు. హనుమంతుడు ఆకాశంలోకి ఎగిరి వారి బాణాలను తప్పించుకుని, తర్వాత వారి మధ్య దిగి, చేతులతో, కాళ్ళతో కొడుతూ గర్జించాడు. ఏడుగురూ పడిపోయారు. వారి తర్వాత రావణుడు తన ఉత్తమ సేనానులు ఐదుగురిని — విరూపాక్షుడు, యూపాక్షుడు, దుర్ధరుడు, ప్రఘసుడు, భాసకర్ణుడు — పంపాడు. ‘జాగ్రత్త,’ హెచ్చరించాడు రావణుడు. ‘ఇది సామాన్య కోతి కాదు. నాతో యుద్ధం చేయడానికి ఇంద్రుడే సృష్టించాడేమో.’ కానీ ఆ ఐదుగురూ తమ సైనికులతో సహా హతులయ్యారు."]
  ],
  [
   ["p", "Then Rāvaṇa looked at his young son {aksha|Akṣa}, who stood ready with his bow. Akṣa rode out in a golden chariot drawn by eight horses, flying a banner, and shot three arrows at Hanumān's head. Hanumān looked at the boy with admiration: ‘He shines like the young sun. He is brave, steady and skilled — a true warrior. I do not want to kill him. But if I let him grow stronger, he will defeat me. A fire that is ignored grows into a forest fire.’",
    "అప్పుడు రావణుడు విల్లుతో సిద్ధంగా నిలబడ్డ తన చిన్న కొడుకు {aksha|అక్షయకుమారుని} వైపు చూశాడు. అక్షుడు ఎనిమిది గుర్రాల బంగారు రథంలో, ధ్వజం ఎగురుతుండగా బయలుదేరి, హనుమంతుని తలపై మూడు బాణాలు వేశాడు. హనుమంతుడు ఆ బాలుణ్ణి ఆరాధనతో చూశాడు: ‘ఉదయ సూర్యునిలా ప్రకాశిస్తున్నాడు. ధైర్యవంతుడు, స్థిరచిత్తుడు, నేర్పరి — నిజమైన వీరుడు. ఇతన్ని చంపాలని లేదు. కానీ ఇంకా బలపడనిస్తే నన్ను ఓడిస్తాడు. పట్టించుకోని నిప్పు కార్చిచ్చుగా మారుతుంది.’"],
   ["p", "The fight was long and fierce. Akṣa's arrows came like rain, and the gods and sages in the sky watched in wonder. At last Hanumān struck down the eight horses with his palm, broke the chariot, and when Akṣa leapt into the sky with his sword, Hanumān caught him by the feet, whirled him round and round, and dashed him to the ground. Rāvaṇa's young son was dead. Hanumān went back to the gateway and sat waiting, like Yama waiting for the souls of the dying.",
    "యుద్ధం దీర్ఘంగా, భయంకరంగా సాగింది. అక్షుని బాణాలు వానలా కురిశాయి; ఆకాశంలో దేవతలు, మునులు ఆశ్చర్యంగా చూశారు. చివరికి హనుమంతుడు అరచేతితో ఎనిమిది గుర్రాలను కొట్టి, రథాన్ని విరగ్గొట్టాడు; అక్షుడు కత్తితో ఆకాశంలోకి ఎగరగా, హనుమంతుడు అతని కాళ్ళు పట్టుకుని గిరగిరా తిప్పి నేలకేసి కొట్టాడు. రావణుని చిన్న కొడుకు మరణించాడు. హనుమంతుడు మళ్ళీ ద్వారం దగ్గరకు వెళ్ళి, మరణించేవారి ప్రాణాల కోసం ఎదురుచూసే యమునిలా కూర్చుని ఎదురుచూశాడు."]
  ],
  [
   ["p", "In the palace, Rāvaṇa heard the news. For the first time a cold fear touched his heart, though he hid it. The proud king of Laṅkā had lost his household guards, his commander's son, his ministers' sons, five generals and his own son — all to a single vānara. He called for the one warrior he trusted above all: his eldest son, Indrajit.",
    "అంతఃపురంలో రావణుడు ఆ వార్త విన్నాడు. మొదటిసారి అతని గుండెను చల్లని భయం తాకింది, అయినా దాచుకున్నాడు. గర్విష్ఠుడైన లంకేశ్వరుడు తన అంతఃపుర కావలివారిని, సేనాధిపతి కొడుకును, మంత్రుల కొడుకులను, ఐదుగురు సేనానులను, తన సొంత కొడుకును — అందరినీ ఒకే ఒక వానరుని చేతిలో పోగొట్టుకున్నాడు. తాను అందరికంటే ఎక్కువగా నమ్మే వీరుణ్ణి పిలిపించాడు: తన పెద్ద కొడుకు ఇంద్రజిత్తు."],
   ["dyk", "⚖️", "Vālmīki lets Hanumān admire his enemy Akṣa's courage and skill. In the Rāmāyaṇa, even enemies are often shown with respect — bravery is praised wherever it is found.",
    "తన శత్రువైన అక్షుని ధైర్యాన్ని, నైపుణ్యాన్ని హనుమంతుడు మెచ్చుకునేలా వాల్మీకి చూపిస్తాడు. రామాయణంలో శత్రువులను కూడా తరచుగా గౌరవంతో చూపిస్తారు — ధైర్యం ఎక్కడ ఉన్నా పొగడబడుతుంది."]
  ]
 ],
 remember: [
  ["Hanumān defeated Jambumālī, the seven ministers' sons and five generals.", "హనుమంతుడు జంబుమాలిని, మంత్రుల ఏడుగురు కొడుకులను, ఐదుగురు సేనానులను ఓడించాడు."],
  ["He admired Rāvaṇa's young son Akṣa as a true warrior, but had to kill him.", "రావణుని చిన్న కొడుకు అక్షుణ్ణి నిజమైన వీరుడిగా మెచ్చుకున్నాడు, కానీ చంపక తప్పలేదు."],
  ["Afraid for the first time, Rāvaṇa called his eldest son Indrajit.", "మొదటిసారి భయపడిన రావణుడు పెద్ద కొడుకు ఇంద్రజిత్తును పిలిచాడు."]
 ],
 think: ["Hanumān said that a small fire ignored becomes a forest fire. What small problems are better solved early, before they grow?", "పట్టించుకోని చిన్న నిప్పు కార్చిచ్చు అవుతుందని హనుమంతుడు అన్నాడు. ఏ చిన్న సమస్యలను పెరగకముందే పరిష్కరించడం మంచిది?"]
},
{
 id: "sundara-12", kanda: "sundara", n: 12, order: 512, date: "2026-10-21",
 title: "Bound by Indrajit", titleTe: "ఇంద్రజిత్తు బంధం", sargas: "48–50", scene: "weapons",
 who: ["indrajit", "hanuman", "ravana", "brahma"],
 pages: [
  [
   ["p", "Rāvaṇa said to {indrajit|Indrajit}, ‘You have defeated Indra and the gods; you know every divine weapon. Go, but do not underestimate this vānara. Do not rely on numbers; his power is like fire.’ Indrajit walked round his father in respect, mounted his chariot drawn by four tigers, and drove out, twanging his bow like thunder. Hanumān grew huge with joy at seeing a worthy opponent.",
    "రావణుడు {indrajit|ఇంద్రజిత్తుతో} అన్నాడు: ‘నువ్వు ఇంద్రుణ్ణి, దేవతలను జయించావు; అన్ని దివ్యాస్త్రాలూ నీకు తెలుసు. వెళ్ళు, కానీ ఈ వానరుణ్ణి తక్కువ అంచనా వేయకు. సంఖ్య మీద ఆధారపడకు; అతని శక్తి అగ్ని వంటిది.’ ఇంద్రజిత్తు తండ్రికి ప్రదక్షిణ చేసి, నాలుగు పులులు లాగే రథం ఎక్కి, ఉరుములా విల్లు టంకారం చేస్తూ బయలుదేరాడు. తగిన ప్రత్యర్థిని చూసి హనుమంతుడు ఆనందంతో భారీగా పెరిగాడు."],
   ["p", "The battle between the two was a wonder to watch. Indrajit's arrows flew like lightning; Hanumān dodged them all, darting through the air faster than thought. Neither could wound the other. Indrajit realised, ‘This vānara cannot be killed, but perhaps he can be captured.’ So he invoked the Brahmāstra — the weapon of Brahmā himself — and bound Hanumān with it. Hanumān fell to the ground, unable to move.",
    "ఇద్దరి యుద్ధం చూడడానికి అద్భుతంగా ఉంది. ఇంద్రజిత్తు బాణాలు మెరుపుల్లా దూసుకొచ్చాయి; ఆలోచన కంటే వేగంగా గాలిలో కదులుతూ హనుమంతుడు వాటన్నిటినీ తప్పించుకున్నాడు. ఎవరూ ఎవరినీ గాయపరచలేకపోయారు. ఇంద్రజిత్తు గ్రహించాడు: ‘ఈ వానరుణ్ణి చంపలేం, కానీ బంధించవచ్చేమో.’ అలా స్వయంగా బ్రహ్మదేవుని అస్త్రమైన బ్రహ్మాస్త్రాన్ని ప్రయోగించి హనుమంతుణ్ణి బంధించాడు. హనుమంతుడు కదలలేక నేల మీద పడిపోయాడు."]
  ],
  [
   ["p", "Bound by the weapon, Hanumān thought calmly, ‘This is the Brahmāstra. Out of respect for {brahma|Brahmā}, I will not struggle against it. And Brahmā himself once gave me a boon that his weapon would hold me only for a short while. Besides — if I am taken prisoner, I will be brought before Rāvaṇa. That is exactly what I want! Let them take me.’ So he lay still and let the rākṣasas come near.",
    "అస్త్రంతో బంధించబడిన హనుమంతుడు ప్రశాంతంగా ఆలోచించాడు: ‘ఇది బ్రహ్మాస్త్రం. {brahma|బ్రహ్మ} మీద గౌరవంతో దీనితో పోరాడను. అంతేకాదు, తన అస్త్రం నన్ను కొద్దిసేపే బంధిస్తుందని బ్రహ్మ స్వయంగా నాకు వరమిచ్చాడు. పైగా — బందీగా దొరికితే నన్ను రావణుని ముందుకు తీసుకెళ్తారు. నాకు కావలసింది అదే! తీసుకెళ్ళనీ.’ అలా కదలకుండా పడుకుని రాక్షసులను దగ్గరకు రానిచ్చాడు."],
   ["p", "The rākṣasas rushed up and tied him with ropes of hemp and strips of bark. But the moment they tied him with ordinary ropes, the Brahmāstra let go — for that weapon will not stay where another bond is used. Indrajit saw this and was dismayed: ‘These fools have undone my work! Now he is held only by ropes.’ Hanumān, of course, could have broken free whenever he wished. But he let them drag him, beating him and shouting, to Rāvaṇa's hall.",
    "రాక్షసులు పరుగెత్తుకొచ్చి జనపనార తాళ్ళతో, నారపట్టీలతో అతన్ని కట్టేశారు. కానీ మామూలు తాళ్ళతో కట్టిన క్షణమే బ్రహ్మాస్త్రం విడిపోయింది — ఇంకో బంధం వేసిన చోట ఆ అస్త్రం నిలవదు. ఇంద్రజిత్తు చూసి నిరాశపడ్డాడు: ‘ఈ మూర్ఖులు నా పని చెడగొట్టారు! ఇప్పుడు అతను తాళ్ళతోనే కట్టబడి ఉన్నాడు.’ హనుమంతుడు ఎప్పుడు కావాలంటే అప్పుడు విడిపించుకోగలడు. అయినా వారు కొడుతూ, అరుస్తూ రావణుని సభకు ఈడ్చుకెళ్ళనిచ్చాడు."]
  ],
  [
   ["p", "And so Hanumān came face to face with {ravana|Rāvaṇa}. The king sat on a crystal throne set with jewels, wearing a golden crown and garlands, his ten heads shining like mountain peaks, surrounded by his ministers. Even Hanumān was amazed. ‘What beauty, what strength, what splendour!’ he thought. ‘If only this king of the rākṣasas were not unrighteous, he could be the protector of heaven itself, even of Indra. But because of his cruel and wicked deeds, the whole world fears him.’",
    "అలా హనుమంతుడు {ravana|రావణునితో} ముఖాముఖి అయ్యాడు. రాజు రత్నాలు పొదిగిన స్ఫటిక సింహాసనం మీద, బంగారు కిరీటం, మాలలు ధరించి, పర్వత శిఖరాల్లా మెరిసే పది తలలతో, మంత్రుల మధ్య కూర్చున్నాడు. హనుమంతుడు కూడా ఆశ్చర్యపోయాడు. ‘ఎంత అందం, ఎంత బలం, ఎంత తేజస్సు!’ అనుకున్నాడు. ‘ఈ రాక్షసరాజు అధర్మపరుడు కాకపోతే, స్వర్గానికే, ఇంద్రునికే రక్షకుడు కాగలిగేవాడు. కానీ క్రూరమైన, దుష్టమైన పనుల వల్ల లోకమంతా అతనికి భయపడుతోంది.’"],
   ["dyk", "🪢", "Hanumān's respect for the Brahmāstra shows a rule of the old stories: even the mightiest honour the gods' weapons and boons. Hanumān chose to be captured — it was part of his plan.",
    "బ్రహ్మాస్త్రం పట్ల హనుమంతుని గౌరవం పాత కథల ఒక నియమాన్ని చూపిస్తుంది: మహాబలులు కూడా దేవతల అస్త్రాలను, వరాలను గౌరవిస్తారు. హనుమంతుడు కావాలనే బందీ అయ్యాడు — అది అతని ఉపాయంలో భాగం."]
  ]
 ],
 remember: [
  ["Indrajit bound Hanumān with the Brahmāstra after a long, equal fight.", "సమానంగా సాగిన దీర్ఘ యుద్ధం తర్వాత ఇంద్రజిత్తు బ్రహ్మాస్త్రంతో హనుమంతుణ్ణి బంధించాడు."],
  ["Hanumān let himself be captured so he could meet Rāvaṇa.", "రావణుణ్ణి కలవడానికి హనుమంతుడు కావాలనే బందీ అయ్యాడు."],
  ["When the rākṣasas tied him with ropes, the Brahmāstra let him go.", "రాక్షసులు తాళ్ళతో కట్టగానే బ్రహ్మాస్త్రం అతన్ని విడిచిపెట్టింది."]
 ],
 think: ["Hanumān admired Rāvaṇa's greatness but saw that his wrong deeds ruined everything. Can great talent be wasted by bad choices?", "హనుమంతుడు రావణుని గొప్పతనాన్ని మెచ్చుకున్నాడు, కానీ అతని దుష్కర్మలు అన్నిటినీ పాడుచేశాయని చూశాడు. చెడ్డ ఎంపికల వల్ల గొప్ప ప్రతిభ వృథా అవుతుందా?"]
}
]);
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "sundara-13", kanda: "sundara", n: 13, order: 513, date: "2026-10-21",
 title: "Hanumān Before Rāvaṇa", titleTe: "రావణుని సభలో హనుమంతుడు", sargas: "50–52", scene: "palace",
 who: ["hanuman", "ravana", "prahasta", "vibhishana"],
 pages: [
  [
   ["p", "{prahasta|Prahasta} questioned Hanumān at Rāvaṇa's command. ‘Do not be afraid, vānara. Who sent you — Indra, Kubera, Yama, Varuṇa, or Viṣṇu? Tell the truth and you will be set free.’ Hanumān answered, ‘No god sent me. I am a vānara, and I have come as the messenger of Rāma. I wanted to see the king of the rākṣasas, so I broke the grove. When your warriors attacked me, I defended myself. I let myself be bound by the Brahmāstra only so that I could stand here before you.’",
    "రావణుని ఆజ్ఞ మేరకు {prahasta|ప్రహస్తుడు} హనుమంతుణ్ణి ప్రశ్నించాడు. ‘వానరా, భయపడకు. నిన్ను పంపింది ఎవరు — ఇంద్రుడా, కుబేరుడా, యముడా, వరుణుడా, విష్ణువా? నిజం చెప్పు, విడిచిపెడతాం.’ హనుమంతుడు జవాబిచ్చాడు: ‘నన్నే దేవుడూ పంపలేదు. నేను వానరుణ్ణి, రాముని దూతగా వచ్చాను. రాక్షసరాజును చూడాలని వనాన్ని ధ్వంసం చేశాను. మీ వీరులు దాడి చేస్తే నన్ను నేను రక్షించుకున్నాను. మీ ముందు నిలబడడానికే బ్రహ్మాస్త్రానికి బంధీనయ్యాను.’"],
   ["p", "Then Hanumān spoke to {ravana|Rāvaṇa} directly, as an ambassador. ‘King Sugrīva asks after your health and sends you this advice, for your own good. You know what is right and what is wrong. You have earned great powers by long tapas. Do not throw them away by holding another man's wife. Rāma killed Vāli with one arrow; he destroyed fourteen thousand rākṣasas in Janasthāna. Return Sītā to him with honour, and save yourself, your family and your city. Otherwise neither gods nor demons, not even Brahmā, Śiva or Indra, will be able to protect you from Rāma.’",
    "తర్వాత హనుమంతుడు రాయబారిగా నేరుగా {ravana|రావణునితో} మాట్లాడాడు. ‘సుగ్రీవ మహారాజు మీ క్షేమం అడిగాడు, మీ మేలు కోసమే ఈ సలహా పంపాడు. ధర్మం ఏదో అధర్మం ఏదో మీకు తెలుసు. దీర్ఘ తపస్సుతో గొప్ప శక్తులు సంపాదించారు. పరస్త్రీని పట్టుకుని వాటిని పోగొట్టుకోకండి. రాముడు ఒక్క బాణంతో వాలిని చంపాడు; జనస్థానంలో పద్నాలుగు వేల రాక్షసులను నాశనం చేశాడు. సీతను గౌరవంగా అతనికి అప్పగించి మిమ్మల్ని, మీ కుటుంబాన్ని, మీ నగరాన్ని కాపాడుకోండి. లేకపోతే దేవతలు, దానవులు, చివరికి బ్రహ్మ, శివుడు, ఇంద్రుడు కూడా రాముని నుండి మిమ్మల్ని కాపాడలేరు.’"]
  ],
  [
   ["p", "Rāvaṇa's ten faces grew dark with fury. ‘Kill this monkey!’ he roared. The executioners came forward. But Rāvaṇa's younger brother {vibhishana|Vibhīṣaṇa}, wise and just, stood up. ‘Forgive me, my king, but this is against dharma. A messenger must never be killed, whatever he says. That is the law of all kings everywhere. You may punish him in other ways — mark him, shave him, whip him — but not death. And think: if you kill the messenger, who will carry your answer back to Rāma? Who will bring Rāma here so that you can fight him?’",
    "రావణుని పది ముఖాలూ కోపంతో నల్లబడ్డాయి. ‘ఈ కోతిని చంపండి!’ అని గర్జించాడు. తలారులు ముందుకు వచ్చారు. కానీ రావణుని తమ్ముడు, జ్ఞాని, ధర్మాత్ముడైన {vibhishana|విభీషణుడు} లేచి నిలబడ్డాడు. ‘రాజా, క్షమించండి, ఇది ధర్మానికి విరుద్ధం. దూత ఏం చెప్పినా అతన్ని ఎప్పుడూ చంపకూడదు. ఇది అన్ని దేశాల రాజుల నియమం. వేరే విధంగా శిక్షించవచ్చు — గుర్తు వేయడం, గుండు కొట్టించడం, కొరడాతో కొట్టడం — కానీ మరణశిక్ష కాదు. ఆలోచించండి: దూతను చంపితే మీ జవాబును రామునికి ఎవరు చేరుస్తారు? మీరు యుద్ధం చేయడానికి రాముణ్ణి ఇక్కడికి ఎవరు రప్పిస్తారు?’"],
   ["p", "Rāvaṇa calmed a little. ‘You are right. A messenger should not be killed. But he must be punished. A monkey's tail is his greatest pride. Set his tail on fire, and parade him through the streets, so that all of Laṅkā sees him. Let him go back to his friends with a burnt tail.’",
    "రావణుడు కొంచెం శాంతించాడు. ‘నువ్వు చెప్పింది సరే. దూతను చంపకూడదు. కానీ శిక్షించాలి. కోతికి తోకే గొప్ప గర్వం. దాని తోకకు నిప్పు పెట్టి, లంక అంతా చూసేలా వీధుల్లో ఊరేగించండి. కాలిన తోకతో తన స్నేహితుల దగ్గరకు వెళ్ళనీ.’"]
  ],
  [
   ["p", "Hanumān heard this and smiled to himself. ‘Good. In daylight I will see every street, every gate and every wall of Laṅkā. When Rāma comes, I will know exactly how to attack this city.’ He let the rākṣasas lead him out of the hall.",
    "ఇది విని హనుమంతుడు తనలో తాను నవ్వుకున్నాడు. ‘మంచిది. పగటి వెలుగులో లంకలోని ప్రతి వీధినీ, ద్వారాన్నీ, ప్రాకారాన్నీ చూస్తాను. రాముడు వచ్చినప్పుడు ఈ నగరంపై ఎలా దాడి చేయాలో సరిగ్గా తెలుస్తుంది.’ రాక్షసులు తనను సభ నుండి బయటకు తీసుకెళ్ళనిచ్చాడు."],
   ["dyk", "🕊️", "Vibhīṣaṇa's rule — ‘a messenger must never be killed’ — is one of the oldest statements of what we now call diplomatic immunity. It is still the law between nations today.",
    "విభీషణుడు చెప్పిన నియమం — ‘దూతను ఎన్నడూ చంపకూడదు’ — ఈ రోజు మనం దౌత్య రక్షణ (డిప్లొమాటిక్ ఇమ్యూనిటీ) అని పిలిచేదానికి అతి ప్రాచీన రూపాల్లో ఒకటి. ఇప్పటికీ దేశాల మధ్య ఇదే చట్టం."]
  ]
 ],
 remember: [
  ["Hanumān spoke as Rāma's ambassador and advised Rāvaṇa to return Sītā.", "హనుమంతుడు రాముని రాయబారిగా మాట్లాడి, సీతను అప్పగించమని రావణునికి సలహా ఇచ్చాడు."],
  ["Vibhīṣaṇa stopped Rāvaṇa from killing him: a messenger must never be killed.", "దూతను చంపకూడదని చెప్పి విభీషణుడు రావణుణ్ణి ఆపాడు."],
  ["Rāvaṇa ordered Hanumān's tail to be set on fire instead.", "బదులుగా హనుమంతుని తోకకు నిప్పు పెట్టమని రావణుడు ఆజ్ఞాపించాడు."]
 ],
 think: ["Vibhīṣaṇa spoke up for what was right, even though his angry brother was king. Why is it hard, and important, to speak up when someone powerful is wrong?", "కోపంలో ఉన్న అన్న రాజు అయినా విభీషణుడు ధర్మం కోసం మాట్లాడాడు. శక్తిమంతులు తప్పు చేస్తున్నప్పుడు మాట్లాడడం ఎందుకు కష్టం, ఎందుకు ముఖ్యం?"]
},
{
 id: "sundara-14", kanda: "sundara", n: 14, order: 514, date: "2026-10-21",
 title: "Laṅkā on Fire", titleTe: "లంకా దహనం", sargas: "53–55", scene: "lanka",
 who: ["hanuman", "sita", "agni", "vibhishana"],
 pages: [
  [
   ["p", "The rākṣasas wrapped Hanumān's tail in old cotton cloths, soaked them in oil, and set them alight. Then they paraded him through the streets with drums and conch-shells, shouting, ‘Look at the spy!’ Women, children and old people came out to see. Hanumān went along quietly, looking carefully at the city's roads, crossroads, walls and gates, while his tail blazed behind him.",
    "రాక్షసులు హనుమంతుని తోకకు పాత నూలు గుడ్డలు చుట్టి, నూనెలో ముంచి, నిప్పు అంటించారు. తర్వాత డప్పులు, శంఖాలతో, ‘గూఢచారిని చూడండి!’ అని అరుస్తూ వీధుల్లో ఊరేగించారు. స్త్రీలు, పిల్లలు, వృద్ధులు బయటకు వచ్చి చూశారు. తోక వెనకాల మండుతుండగా హనుమంతుడు నెమ్మదిగా వెంట నడుస్తూ నగరంలోని దారులను, కూడళ్ళను, ప్రాకారాలను, ద్వారాలను జాగ్రత్తగా గమనించాడు."],
   ["p", "The rākṣasīs ran to tell {sita|Sītā}, ‘The red-faced monkey who talked with you — they have set his tail on fire!’ Sītā was filled with grief. She purified herself and prayed to the god of fire: ‘O {agni|Agni}, if I have served my husband faithfully, if I have done any tapas, if I am truly devoted to Rāma, be cool to Hanumān.’ At once the flames on Hanumān's tail burned bright but gentle, and the wind blew cool and fragrant, like snow and sandalwood."
   , "రాక్షసులు పరుగెత్తి {sita|సీతకు} చెప్పారు: ‘నీతో మాట్లాడిన ఎర్రమొహం కోతి — దాని తోకకు నిప్పు పెట్టారు!’ సీత దుఃఖంతో నిండిపోయింది. శుచిగా అయి అగ్నిదేవుని ప్రార్థించింది: ‘ఓ {agni|అగ్నిదేవా}, నేను నా భర్తకు నిష్ఠగా సేవ చేసి ఉంటే, ఏదైనా తపస్సు చేసి ఉంటే, నిజంగా రామునికి అంకితమై ఉంటే, హనుమంతునికి చల్లగా ఉండు.’ వెంటనే హనుమంతుని తోక మీది జ్వాలలు ప్రకాశంగానే కానీ మృదువుగా మండాయి; గాలి మంచు, గంధంలా చల్లగా, సువాసనగా వీచింది."]
  ],
  [
   ["p", "Hanumān felt no heat and was amazed. ‘The fire burns, yet it does not hurt me. It must be the power of Sītā, of Rāma, and of my father the Wind, who is Agni's friend.’ He shrank suddenly; the ropes slipped off. Then he grew huge again, seized an iron bar from a gate, and struck down the guards. Leaping up onto the rooftops with his burning tail, he went from mansion to mansion — Prahasta's, Mahāpārśva's, Kumbhakarṇa's, Indrajit's, and all the others — setting each one ablaze. Only the house of Vibhīṣaṇa he did not touch.",
    "హనుమంతునికి వేడి తగలలేదు, ఆశ్చర్యపోయాడు. ‘నిప్పు మండుతోంది, కానీ నన్ను బాధించడం లేదు. ఇది సీతాదేవి శక్తి, రాముని శక్తి, అగ్నికి మిత్రుడైన నా తండ్రి వాయువు శక్తి అయి ఉండాలి.’ ఒక్కసారిగా చిన్నవాడయ్యాడు; తాళ్ళు జారిపోయాయి. మళ్ళీ భారీగా పెరిగి, ద్వారం దగ్గరి ఇనుప కడ్డీతో కావలివాళ్ళను కూల్చాడు. మండుతున్న తోకతో ఇంటి కప్పుల మీదకు దూకి, భవనం నుండి భవనానికి — ప్రహస్తుని, మహాపార్శ్వుని, కుంభకర్ణుని, ఇంద్రజిత్తు, ఇంకా ఎందరిదో — వెళ్తూ ఒక్కొక్కటీ తగలబెట్టాడు. విభీషణుని ఇంటిని మాత్రం ముట్టుకోలేదు."],
   ["p", "The wind fanned the fire, and soon all of Laṅkā was burning. Golden walls melted, jewels cracked, towers crashed down. Rākṣasas ran screaming, ‘This is no monkey — this is Agni himself, or Yama, or the fire at the end of the world!’ Hanumān stood on top of a tall tower, his tail blazing, and roared. Then he went to the sea and put out the fire in his tail."
   , "గాలి మంటలను ఎగదోసింది; కాసేపటికి లంక అంతా మండిపోయింది. బంగారు ప్రాకారాలు కరిగాయి, రత్నాలు పగిలాయి, గోపురాలు కూలాయి. రాక్షసులు, ‘ఇది కోతి కాదు — స్వయంగా అగ్ని, లేదా యముడు, లేదా ప్రళయాగ్ని!’ అని అరుస్తూ పరుగెత్తారు. హనుమంతుడు ఒక ఎత్తైన గోపురం మీద మండే తోకతో నిలబడి గర్జించాడు. తర్వాత సముద్రం దగ్గరకు వెళ్ళి తోక మంటను ఆర్పుకున్నాడు."]
  ],
  [
   ["p", "Then, looking at the burning city, a terrible thought struck him. ‘What have I done! In my anger I have burned all of Laṅkā. What if Sītā was burned too? Then all my work is for nothing — I have killed the very one I came to save!’ He was ready to give up his own life in grief. But just then he heard the celestial beings in the sky saying, ‘How wonderful! All Laṅkā is burned, but Sītā is untouched.’ And he remembered: ‘The fire did not burn me, because of her. How could it burn her?’",
    "తర్వాత మండుతున్న నగరాన్ని చూస్తుంటే భయంకరమైన ఆలోచన వచ్చింది. ‘ఏం చేశాను! కోపంలో లంకనంతా కాల్చేశాను. సీతాదేవి కూడా కాలిపోయి ఉంటే? అప్పుడు నా శ్రమంతా వృథా — కాపాడడానికి వచ్చినవారినే చంపేశాను!’ దుఃఖంతో తన ప్రాణం విడిచిపెట్టడానికి కూడా సిద్ధపడ్డాడు. కానీ సరిగ్గా అప్పుడు ఆకాశంలో దివ్యజీవులు, ‘ఎంత అద్భుతం! లంక అంతా కాలిపోయింది, కానీ సీతాదేవికి ఏమీ కాలేదు,’ అనడం వినిపించింది. అతనికి గుర్తొచ్చింది: ‘ఆమె వల్లే నిప్పు నన్ను కాల్చలేదు. ఆమెను ఎలా కాలుస్తుంది?’"],
   ["p", "Hanumān rushed back to the Aśoka grove and found Sītā safe under the śiṃśapā tree. With great joy he bowed to her again. ‘By good fortune I see you unhurt, my lady.’ Sītā said, ‘If you wish, stay here hidden for a day and rest, then go. While you are here, my grief is less.’ Hanumān comforted her once more: ‘Rāma will come very soon, my lady, with the vānara army. Wait for him.’ And he took his leave.",
    "హనుమంతుడు పరుగెత్తి అశోకవనానికి వెళ్ళి, శింశుపా చెట్టు కింద సీతాదేవి క్షేమంగా ఉండడం చూశాడు. ఎంతో ఆనందంతో మళ్ళీ నమస్కరించాడు. ‘అదృష్టవశాత్తు మీరు క్షేమంగా ఉండడం చూస్తున్నాను అమ్మా.’ సీత అంది: ‘కావాలంటే ఒక రోజు ఇక్కడ దాక్కుని విశ్రాంతి తీసుకుని వెళ్ళు. నువ్వు ఇక్కడ ఉంటే నా దుఃఖం తగ్గుతుంది.’ హనుమంతుడు మళ్ళీ ఊరడించాడు: ‘అమ్మా, వానర సేనతో రాముడు అతి త్వరలో వస్తాడు. అతని కోసం ఎదురుచూడండి.’ సెలవు తీసుకున్నాడు."]
  ]
 ],
 remember: [
  ["Rāvaṇa's men set Hanumān's tail on fire; Sītā prayed to Agni to keep him cool.", "రావణుని మనుషులు హనుమంతుని తోకకు నిప్పు పెట్టారు; అతనికి చల్లగా ఉండమని సీత అగ్నిని ప్రార్థించింది."],
  ["Hanumān burned all of Laṅkā, sparing only Vibhīṣaṇa's house.", "హనుమంతుడు విభీషణుని ఇల్లు తప్ప లంకనంతా తగలబెట్టాడు."],
  ["Fearing he had harmed Sītā, he rushed back and found her safe.", "సీతకు హాని జరిగిందేమోనని భయపడి, తిరిగి వెళ్ళి ఆమె క్షేమంగా ఉండడం చూశాడు."]
 ],
 think: ["After acting in anger, Hanumān suddenly worried he had hurt the person he loved most. Why is it good to pause and think before acting in anger?", "కోపంలో పని చేశాక, తనకు అత్యంత ప్రియమైనవారికి హాని చేశానేమోనని హనుమంతుడు భయపడ్డాడు. కోపంలో పని చేసే ముందు ఆగి ఆలోచించడం ఎందుకు మంచిది?"]
},
{
 id: "sundara-15", kanda: "sundara", n: 15, order: 515, date: "2026-10-21",
 title: "The Flight Home and the Honey Garden", titleTe: "తిరుగు ప్రయాణం, మధువనం", sargas: "56–63", scene: "sky",
 who: ["hanuman", "angada", "jambavan", "dadhimukha", "sugriva"],
 pages: [
  [
   ["p", "Hanumān climbed Mount Ariṣṭa, which sank into the earth under his weight, and leapt into the sky. He flew north over the ocean like a great cloud, roaring with joy. On the far shore, the vānaras waiting on Mount Mahendra heard the roar. {jambavan|Jāmbavān} cried, ‘Listen! That is Hanumān, and he roars with joy. He has surely succeeded!’ The vānaras jumped from peak to peak, waving branches and cloths, and when Hanumān landed on Mahendra, they crowded round him with fruits and roots, touching him to be sure he was real.",
    "హనుమంతుడు అరిష్ట పర్వతం ఎక్కాడు — అతని బరువుకు అది భూమిలోకి కుంగిపోయింది — ఆకాశంలోకి ఎగిరాడు. ఆనందంతో గర్జిస్తూ పెద్ద మేఘంలా సముద్రం మీదుగా ఉత్తరం వైపు ఎగిరాడు. అవతలి తీరంలో మహేంద్ర పర్వతం మీద ఎదురుచూస్తున్న వానరులకు ఆ గర్జన వినిపించింది. {jambavan|జాంబవంతుడు}, ‘వినండి! అది హనుమంతుడు, ఆనందంతో గర్జిస్తున్నాడు. తప్పకుండా విజయం సాధించాడు!’ అని అరిచాడు. వానరులు కొమ్మలు, బట్టలు ఊపుతూ శిఖరం నుండి శిఖరానికి దూకారు; హనుమంతుడు మహేంద్రం మీద దిగగానే పండ్లు, దుంపలతో అతని చుట్టూ చేరి, నిజమేనా అని తాకి చూశారు."],
   ["p", "‘I have seen Sītā,’ said Hanumān, and the vānaras shouted for joy. He told them everything — Maināka, Surasā, Siṃhikā, Laṅkā by night, Sītā in the Aśoka grove, Rāvaṇa's threats, Trijaṭā's dream, the ring, the crest-jewel, the fight, the fire. Then {angada|Aṅgada} said boldly, ‘Why go back and trouble Rāma? We are strong enough. Let us go to Laṅkā ourselves, kill Rāvaṇa and bring Sītā home!’ But wise Jāmbavān said, ‘No, prince. Our orders were to find Sītā, not to rescue her. And Rāma has vowed to win her back himself. Let us go to Rāma and Sugrīva.’"
   , "‘సీతాదేవిని చూశాను,’ అన్నాడు హనుమంతుడు; వానరులు ఆనందంతో కేకలు వేశారు. అతను అంతా చెప్పాడు — మైనాకుడు, సురస, సింహిక, రాత్రిపూట లంక, అశోకవనంలో సీత, రావణుని బెదిరింపులు, త్రిజట స్వప్నం, ఉంగరం, చూడామణి, యుద్ధం, అగ్ని. అప్పుడు {angada|అంగదుడు} ధైర్యంగా అన్నాడు: ‘వెళ్ళి రాముణ్ణి ఎందుకు శ్రమపెట్టడం? మనం చాలినంత బలవంతులం. మనమే లంకకు వెళ్ళి, రావణుణ్ణి చంపి, సీతను తీసుకొద్దాం!’ కానీ జ్ఞాని జాంబవంతుడు, ‘వద్దు యువరాజా. మనకు ఇచ్చిన ఆజ్ఞ సీతను కనుక్కోవడం, విడిపించడం కాదు. పైగా తానే స్వయంగా ఆమెను గెలుచుకుంటానని రాముడు ప్రతిజ్ఞ చేశాడు. రామసుగ్రీవుల దగ్గరకు వెళ్దాం,’ అన్నాడు."]
  ],
  [
   ["p", "On the way back to Kiṣkindhā they came to Madhuvana, King Sugrīva's own honey garden, which no one was allowed to enter. Wild with happiness, the vānaras begged Aṅgada for permission, and he gave it. They rushed in, drank the honey, ate the fruit, danced, sang, wrestled, and rolled on the ground. The old keeper of the garden, Sugrīva's uncle {dadhimukha|Dadhimukha}, tried to stop them — and got knocked over and dragged by the feet for his trouble!",
    "కిష్కింధకు తిరిగి వెళ్ళే దారిలో, ఎవరూ ప్రవేశించకూడని సుగ్రీవుని సొంత తేనెతోట మధువనానికి వచ్చారు. ఆనందంతో ఉప్పొంగిన వానరులు అనుమతి కోసం అంగదుణ్ణి బతిమాలారు; అతను ఇచ్చాడు. లోపలికి దూసుకెళ్ళి తేనె తాగారు, పండ్లు తిన్నారు, నాట్యం చేశారు, పాడారు, కుస్తీ పట్టారు, నేల మీద దొర్లారు. తోట వృద్ధ కాపలాదారు, సుగ్రీవుని మేనమామ {dadhimukha|దధిముఖుడు} ఆపబోయాడు — అందుకు బదులుగా కింద పడేసి కాళ్ళు పట్టుకుని ఈడ్చారు!"],
   ["p", "Dadhimukha flew angrily to {sugriva|Sugrīva} and complained, ‘Your Majesty, Aṅgada and his vānaras have destroyed Madhuvana!’ Lakṣmaṇa, who was there, asked what had happened. But Sugrīva's face lit up with joy. ‘Lakṣmaṇa, do you see? Their time limit is long past. They would never dare to enter my garden unless they had succeeded. They have found Sītā — and it must be Hanumān who did it!’ He told Dadhimukha, ‘I am pleased with them. Go back and send them to me quickly.’",
    "దధిముఖుడు కోపంగా {sugriva|సుగ్రీవుని} దగ్గరకు ఎగిరి, ‘మహారాజా, అంగదుడు, అతని వానరులు మధువనాన్ని నాశనం చేశారు!’ అని ఫిర్యాదు చేశాడు. అక్కడే ఉన్న లక్ష్మణుడు ఏమైందని అడిగాడు. కానీ సుగ్రీవుని ముఖం ఆనందంతో వెలిగింది. ‘లక్ష్మణా, చూశావా? వారి గడువు ఎప్పుడో దాటిపోయింది. విజయం సాధించకపోతే నా తోటలోకి అడుగుపెట్టే ధైర్యం చేయరు. వారు సీతను కనుగొన్నారు — అది తప్పకుండా హనుమంతుడే!’ దధిముఖునితో, ‘వారిపై నాకు సంతోషంగా ఉంది. వెళ్ళి వారిని త్వరగా నా దగ్గరకు పంపు,’ అన్నాడు."]
  ],
  [
   ["p", "Dadhimukha went back, bowed to Aṅgada and apologised for his anger. Then all the vānaras rose into the sky, led by Aṅgada and Hanumān, and flew to Mount Prasravaṇa, where Rāma and Lakṣmaṇa waited with Sugrīva. They came down like a flood of joy, their tails held high.",
    "దధిముఖుడు తిరిగి వెళ్ళి, అంగదునికి నమస్కరించి తన కోపానికి క్షమాపణ చెప్పాడు. తర్వాత అంగద హనుమంతుల నాయకత్వంలో వానరులంతా ఆకాశంలోకి లేచి, సుగ్రీవునితో రామలక్ష్మణులు ఎదురుచూస్తున్న ప్రస్రవణ పర్వతానికి ఎగిరారు. తోకలు పైకెత్తి ఆనంద ప్రవాహంలా దిగివచ్చారు."],
   ["dyk", "🍯", "The Madhuvana scene is one of the funniest in the Rāmāyaṇa — after all the danger and sorrow, Vālmīki lets the vānaras simply be happy. Sugrīva is clever enough to read good news in the ‘bad’ news.",
    "మధువన సన్నివేశం రామాయణంలో అత్యంత హాస్యభరితమైన వాటిలో ఒకటి — ప్రమాదం, దుఃఖం తర్వాత వాల్మీకి వానరులను సంతోషంగా ఉండనిస్తాడు. ‘చెడు’ వార్తలో శుభవార్తను చదవగల తెలివి సుగ్రీవునిది."]
  ]
 ],
 remember: [
  ["Hanumān flew back roaring with joy and told the vānaras everything.", "హనుమంతుడు ఆనందంగా గర్జిస్తూ తిరిగి ఎగిరివచ్చి వానరులకు అంతా చెప్పాడు."],
  ["Jāmbavān reminded them their task was to find Sītā, not to rescue her alone.", "మన పని సీతను కనుక్కోవడమే, ఒంటరిగా విడిపించడం కాదని జాంబవంతుడు గుర్తుచేశాడు."],
  ["The vānaras feasted in Madhuvana, and Sugrīva guessed they had found Sītā.", "వానరులు మధువనంలో విందు చేసుకున్నారు; సీత దొరికిందని సుగ్రీవుడు ఊహించాడు."]
 ],
 think: ["Aṅgada wanted to rush off and finish the job himself, but Jāmbavān reminded him of the real task. Why should we sometimes stick to the plan, even when we feel strong?", "అంగదుడు వెంటనే వెళ్ళి పని ముగించాలనుకున్నాడు, కానీ జాంబవంతుడు అసలు పని గుర్తుచేశాడు. బలంగా అనిపించినా కొన్నిసార్లు ప్రణాళికకు ఎందుకు కట్టుబడి ఉండాలి?"]
},
{
 id: "sundara-16", kanda: "sundara", n: 16, order: 516, date: "2026-10-21",
 title: "'I Have Seen Sītā'", titleTe: "‘సీతను చూశాను’", sargas: "64–68", scene: "hill",
 who: ["hanuman", "rama", "lakshmana", "sugriva", "sita"],
 pages: [
  [
   ["p", "The vānaras bowed to {rama|Rāma}, {lakshmana|Lakṣmaṇa} and {sugriva|Sugrīva}. Then {hanuman|Hanumān} stepped forward, bowed his head to the south, the direction where Sītā was, and said, ‘I have seen her. Sītā is alive, faithful to you, and well in body, though her heart is full of grief.’ It is said that Hanumān began with the word ‘seen’ (dṛṣṭā), so that Rāma would not be afraid even for a moment before hearing the good news. Rāma's eyes filled with tears of joy.",
    "వానరులు {rama|రామునికి}, {lakshmana|లక్ష్మణునికి}, {sugriva|సుగ్రీవునికి} నమస్కరించారు. తర్వాత {hanuman|హనుమంతుడు} ముందుకొచ్చి, సీత ఉన్న దక్షిణ దిక్కుకు తల వంచి నమస్కరించి, ‘చూశాను. సీతాదేవి బతికే ఉంది, మీకు నిష్ఠగా ఉంది; మనసు దుఃఖంతో నిండి ఉన్నా శరీరం క్షేమంగా ఉంది,’ అన్నాడు. శుభవార్త వినేముందు ఒక్క క్షణం కూడా రాముడు భయపడకూడదని హనుమంతుడు ‘చూశాను’ (దృష్టా) అనే మాటతో మొదలుపెట్టాడని చెబుతారు. రాముని కళ్ళు ఆనందబాష్పాలతో నిండాయి."],
   ["p", "Then Hanumān told the whole story: the leap, the search, the Aśoka grove, Rāvaṇa's two-month threat, the rākṣasīs, how Sītā had refused to be carried away because Rāma himself must free her. Finally he held out the cūḍāmaṇi. ‘Sītā sent you this, my lord, as a sign.’",
    "తర్వాత హనుమంతుడు కథంతా చెప్పాడు: లంఘనం, వెతుకులాట, అశోకవనం, రావణుని రెండు నెలల బెదిరింపు, రాక్షసులు, రాముడే స్వయంగా విడిపించాలని తన వీపు మీద రావడానికి సీత ఎలా నిరాకరించిందో. చివరికి చూడామణిని చూపించాడు. ‘ప్రభూ, గుర్తుగా సీతాదేవి ఇది పంపింది.’"]
  ],
  [
   ["p", "Rāma took the jewel and pressed it to his heart. He wept aloud, and Lakṣmaṇa wept with him. ‘As a cow longs for her calf, so my heart longs at the sight of this jewel,’ Rāma said. ‘King Janaka gave it to Sītā at our wedding; it shone on her head. Seeing it, I feel I have seen her father, and Sītā herself. Tell me again, Hanumān — what did she say? Her words will keep me alive, like medicine to a sick man.’",
    "రాముడు ఆ మణిని తీసుకుని గుండెకు హత్తుకున్నాడు. బిగ్గరగా ఏడ్చాడు; లక్ష్మణుడూ అతనితో పాటు ఏడ్చాడు. ‘ఆవు దూడ కోసం తపించినట్టు ఈ మణిని చూసి నా మనసు తపిస్తోంది,’ అన్నాడు రాముడు. ‘మా పెళ్ళిలో జనకమహారాజు దీన్ని సీతకు ఇచ్చాడు; ఆమె తల మీద ఇది మెరిసేది. దీన్ని చూస్తుంటే ఆమె తండ్రిని, సీతనే చూసినట్టు ఉంది. హనుమా, మళ్ళీ చెప్పు — ఆమె ఏమంది? రోగికి మందులా ఆమె మాటలు నన్ను బతికిస్తాయి.’"],
   ["p", "Hanumān repeated Sītā's message: the story of the crow at Citrakūṭa and the blade of grass; her question — ‘You used the Brahmāstra on a crow for my sake; why do you forgive the one who stole me?’; her greetings to Lakṣmaṇa; and her words, ‘I will live one more month. After that, I will not live.’ ‘But I told her,’ said Hanumān, ‘that you would come very soon with the army, and she was comforted.’",
    "హనుమంతుడు సీత సందేశాన్ని మళ్ళీ చెప్పాడు: చిత్రకూటంలో కాకి, గడ్డిపోచ కథ; ఆమె ప్రశ్న — ‘నా కోసం కాకి మీద బ్రహ్మాస్త్రం వేశావు; నన్ను దొంగిలించినవాణ్ణి ఎందుకు క్షమిస్తున్నావు?’; లక్ష్మణునికి ఆమె క్షేమ సమాచారం; ‘ఇంకా ఒక్క నెల బతుకుతాను. ఆ తర్వాత బతకను’ అన్న ఆమె మాటలు. ‘కానీ మీరు సేనతో అతి త్వరలో వస్తారని నేను ఆమెకు చెప్పాను,’ అన్నాడు హనుమంతుడు, ‘ఆమెకు ఊరట కలిగింది.’"]
  ],
  [
   ["p", "Rāma listened, his eyes shining. Grief and hope mixed in his heart, and from them a new resolve was born. The search was over. Now it was time to cross the ocean and bring Sītā home.",
    "రాముడు మెరిసే కళ్ళతో విన్నాడు. అతని మనసులో దుఃఖం, ఆశ కలిశాయి; వాటి నుండి కొత్త సంకల్పం పుట్టింది. వెతుకులాట ముగిసింది. ఇప్పుడు సముద్రం దాటి సీతను ఇంటికి తీసుకొచ్చే సమయం వచ్చింది."],
   ["dyk", "🌺", "Here ends the Sundara Kāṇḍa. Next comes the Yuddha Kāṇḍa — the Book of the War — in which Rāma builds a bridge across the sea and fights Rāvaṇa.",
    "ఇక్కడితో సుందరకాండ ముగుస్తుంది. తర్వాత యుద్ధకాండ — రాముడు సముద్రం మీద వారధి కట్టి రావణునితో యుద్ధం చేసే కాండ."]
  ]
 ],
 remember: [
  ["Hanumān's first words to Rāma were ‘I have seen her’ — Sītā is alive and faithful.", "రామునితో హనుమంతుని మొదటి మాట ‘చూశాను’ — సీత బతికే ఉంది, నిష్ఠగా ఉంది."],
  ["Rāma wept as he held Sītā's crest-jewel to his heart.", "సీత చూడామణిని గుండెకు హత్తుకుని రాముడు ఏడ్చాడు."],
  ["Hanumān gave Sītā's message, including the secret story of the crow.", "కాకి రహస్య కథతో సహా సీత సందేశాన్ని హనుమంతుడు అందించాడు."]
 ],
 think: ["Hanumān chose the order of his words so that Rāma would not worry for even a moment. How can we share news in a way that is kind to the listener?", "రాముడు ఒక్క క్షణం కూడా బాధపడకూడదని హనుమంతుడు తన మాటల క్రమాన్ని ఎంచుకున్నాడు. వినేవారికి దయగా ఉండేలా వార్తను ఎలా చెప్పవచ్చు?"]
}
]);
