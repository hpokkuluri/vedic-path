// Śrī Rāmāyaṇa — Yuddha Kāṇḍa. Retold by Hari Pokkuluri.
// Told fresh from Vālmīki's Yuddha Kāṇḍa. Block format: see the top of ramayana.js.
window.RMY_PLAN = Object.assign(window.RMY_PLAN || {}, { yuddha: [
  ["Rāma Embraces Hanumān", "Sargas 1–5"],
  ["Rāvaṇa's Council", "Sargas 6–10"],
  ["Vibhīṣaṇa Leaves Laṅkā", "Sargas 11–16"],
  ["Refuge for All Who Ask", "Sargas 17–19"],
  ["Rāma and the Ocean", "Sargas 20–21"],
  ["Nala's Bridge", "Sarga 22"],
  ["Spies and a False Head", "Sargas 23–35"],
  ["Aṅgada the Envoy", "Sargas 36–41"],
  ["The Battle Begins", "Sargas 42–44"],
  ["The Serpent Arrows", "Sargas 45–50"],
  ["Rāvaṇa's Generals Fall", "Sargas 51–58"],
  ["Rāvaṇa Enters the Battle", "Sarga 59"],
  ["Waking Kumbhakarṇa", "Sargas 60–64"],
  ["The Fall of Kumbhakarṇa", "Sargas 65–67"],
  ["Rāvaṇa's Sons", "Sargas 68–71"],
  ["The Mountain of Herbs", "Sargas 72–74"],
  ["Laṅkā Burns Again", "Sargas 75–79"],
  ["The Magic Sītā", "Sargas 80–83"],
  ["Indrajit at Nikumbhilā", "Sargas 84–91"],
  ["Rāvaṇa's Grief and Fury", "Sargas 92–99"],
  ["Lakṣmaṇa Struck Again", "Sargas 100–102"],
  ["Indra's Chariot and the Hymn to the Sun", "Sargas 103–105"],
  ["Rāma and Rāvaṇa", "Sargas 106–110"],
  ["Mandodarī's Lament; Vibhīṣaṇa Crowned", "Sargas 111–113"],
  ["Sītā's Ordeal by Fire", "Sargas 114–118"],
  ["Daśaratha Appears; the Vānaras Revived", "Sargas 119–120"],
  ["The Flight Home in the Puṣpaka", "Sargas 121–126"],
  ["Rāma's Coronation", "Sargas 127–128"]
] });
window.RMY_WHO = Object.assign(window.RMY_WHO || {}, {
 "kumbhakarna": { "av": "😴", "en": "Kumbhakarṇa", "te": "కుంభకర్ణుడు",
  "d": "Rāvaṇa's giant brother. Because of a boon that went wrong, he slept for six months at a time. He told Rāvaṇa he was wrong, yet fought for him out of loyalty.",
  "dt": "రావణుని భారీ తమ్ముడు. తప్పుగా వచ్చిన వరం వల్ల ఆరు నెలలకోసారి మాత్రమే మేల్కొనేవాడు. రావణుడు తప్పు చేశాడని చెప్పినా, విధేయతతో అతని కోసం యుద్ధం చేశాడు." },
 "malyavan": { "av": "👴", "en": "Mālyavān", "te": "మాల్యవంతుడు",
  "d": "An old and wise rākṣasa, Rāvaṇa's mother's uncle, who advised him to make peace with Rāma.",
  "dt": "వృద్ధుడు, జ్ఞాని అయిన రాక్షసుడు, రావణుని తల్లికి మేనమామ; రామునితో సంధి చేసుకోమని సలహా ఇచ్చాడు." },
 "nala": { "av": "🧱", "en": "Nala", "te": "నలుడు",
  "d": "A vānara engineer, son of Viśvakarmā, the builder of the gods. He built the bridge to Laṅkā.",
  "dt": "దేవశిల్పి విశ్వకర్మ కుమారుడైన వానర శిల్పి. లంకకు వారధి కట్టినవాడు." },
 "samudra": { "av": "🌊", "en": "Samudra (the Ocean)", "te": "సముద్రుడు",
  "d": "The god of the ocean, who rose before Rāma and showed him how the sea could be crossed.",
  "dt": "సముద్ర దేవుడు; రాముని ముందు ప్రత్యక్షమై సముద్రాన్ని ఎలా దాటవచ్చో చెప్పాడు." },
 "shukaspy": { "av": "🕵️", "en": "Śuka (Rāvaṇa's spy)", "te": "శుకుడు (రావణుని గూఢచారి)",
  "d": "A minister and spy of Rāvaṇa who was caught among the vānaras and set free by Rāma.",
  "dt": "రావణుని మంత్రి, గూఢచారి; వానరుల మధ్య పట్టుబడితే రాముడు విడిచిపెట్టాడు." },
 "sarama": { "av": "🌼", "en": "Saramā", "te": "సరమ",
  "d": "A kind rākṣasī, wife of Vibhīṣaṇa, who comforted Sītā in the Aśoka grove.",
  "dt": "విభీషణుని భార్య, దయగల రాక్షసి; అశోకవనంలో సీతను ఊరడించింది." },
 "atikaya": { "av": "🏹", "en": "Atikāya", "te": "అతికాయుడు",
  "d": "A huge and learned son of Rāvaṇa, armed with Brahmā's armour, killed by Lakṣmaṇa.",
  "dt": "రావణుని భారీ, విద్యావంతుడైన కుమారుడు; బ్రహ్మ ఇచ్చిన కవచం గలవాడు; లక్ష్మణుని చేతిలో మరణించాడు." },
 "matali": { "av": "🐎", "en": "Mātali", "te": "మాతలి",
  "d": "Indra's charioteer, who drove Indra's chariot for Rāma in the final battle.",
  "dt": "ఇంద్రుని సారథి; చివరి యుద్ధంలో రాముని కోసం ఇంద్రుని రథం నడిపాడు." },
 "makaraksha": { "av": "🔥", "en": "Makarākṣa", "te": "మకరాక్షుడు",
  "d": "Son of Khara, who came to avenge his father and was killed by Rāma.",
  "dt": "ఖరుని కుమారుడు; తండ్రి పగ తీర్చుకోవడానికి వచ్చి రాముని చేతిలో మరణించాడు." },
 "kumbha": { "av": "⚔️", "en": "Kumbha and Nikumbha", "te": "కుంభ నికుంభులు",
  "d": "The two sons of Kumbhakarṇa. Kumbha was killed by Sugrīva and Nikumbha by Hanumān.",
  "dt": "కుంభకర్ణుని ఇద్దరు కుమారులు. కుంభుణ్ణి సుగ్రీవుడు, నికుంభుణ్ణి హనుమంతుడు సంహరించారు." }
});
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "yuddha-1", kanda: "yuddha", n: 1, order: 601, date: "2026-10-21",
 title: "Rāma Embraces Hanumān", titleTe: "రాముని ఆలింగనం", sargas: "1–5", scene: "ocean",
 who: ["rama", "hanuman", "sugriva", "nila"],
 pages: [
  [
   ["p", "{rama|Rāma} looked at Hanumān with love and said, ‘Hanumān has done what no one else on earth could do — not even in thought. Who but Garuḍa or the Wind could cross that ocean? Who could enter Laṅkā, guarded by Rāvaṇa, and come back alive? He has done more than he was asked, as the best of servants do. He has saved me, Lakṣmaṇa and our whole family today.’ Then Rāma's voice fell. ‘But I have nothing to give him in return. All I have is this embrace.’ And Rāma held Hanumān close to his heart.",
    "{rama|రాముడు} ప్రేమగా హనుమంతుణ్ణి చూసి అన్నాడు: ‘భూమి మీద ఇంకెవరూ చేయలేనిది — ఆలోచనలో కూడా చేయలేనిది — హనుమంతుడు చేశాడు. గరుత్మంతుడు, వాయువు తప్ప ఆ సముద్రాన్ని ఎవరు దాటగలరు? రావణుని కాపలాలో ఉన్న లంకలో ప్రవేశించి ప్రాణాలతో ఎవరు తిరిగి రాగలరు? ఉత్తమ సేవకులు చేసినట్టు, చెప్పినదానికంటే ఎక్కువే చేశాడు. ఈ రోజు నన్ను, లక్ష్మణుణ్ణి, మా వంశాన్నంతా కాపాడాడు.’ తర్వాత రాముని స్వరం తగ్గింది. ‘కానీ ప్రతిగా ఇతనికి ఇవ్వడానికి నా దగ్గర ఏమీ లేదు. నా దగ్గర ఉన్నది ఈ ఆలింగనం ఒక్కటే.’ రాముడు హనుమంతుణ్ణి గుండెకు హత్తుకున్నాడు."],
   ["p", "Then a new worry clouded Rāma's face. ‘But how will this great army cross the ocean?’ {sugriva|Sugrīva} answered firmly, ‘Do not lose heart like an ordinary man, Rāma. Grief destroys courage. We will build a bridge, or find a way. My vānaras will do anything for you. I see good omens everywhere.’ Rāma asked Hanumān about Laṅkā's defences, and Hanumān described its four great gates, its deep moats full of crocodiles, its drawbridges, its catapults, and its armies — and how he had already broken many of them."
   , "అంతలో కొత్త చింత రాముని ముఖాన్ని కమ్మేసింది. ‘కానీ ఈ మహాసేన సముద్రాన్ని ఎలా దాటుతుంది?’ {sugriva|సుగ్రీవుడు} దృఢంగా జవాబిచ్చాడు: ‘రామా, సామాన్యుడిలా మనసు కోల్పోకు. దుఃఖం ధైర్యాన్ని నాశనం చేస్తుంది. వారధి కడదాం, లేదా ఏదో దారి కనుక్కుందాం. నా వానరులు నీ కోసం ఏదైనా చేస్తారు. అన్నిచోట్లా శుభ శకునాలు కనిపిస్తున్నాయి.’ రాముడు లంక రక్షణ ఏర్పాట్ల గురించి అడిగాడు; హనుమంతుడు దాని నాలుగు పెద్ద ద్వారాలు, మొసళ్ళతో నిండిన లోతైన అగడ్తలు, ఎత్తే వంతెనలు, యంత్రాలు, సైన్యాలు వర్ణించాడు — వాటిలో చాలా తాను ఇప్పటికే పగలగొట్టాడని చెప్పాడు."]
  ],
  [
   ["p", "‘Then let us march today,’ said Rāma. ‘The sun is at noon — the moment called Abhijit, the hour of victory. The star Uttara-Phalgunī is in the sky. Let us go!’ The vānara armies rose like the sea at high tide. {nila|Nīla} led the way to find good paths with water and fruit. Rāma rode on Hanumān's shoulders, Lakṣmaṇa on Aṅgada's. The vānaras leapt, roared, played and marched, eating honey and fruits from the forests, and the earth was covered with them like a moving ocean.",
    "‘అయితే ఈ రోజే బయలుదేరుదాం,’ అన్నాడు రాముడు. ‘సూర్యుడు మధ్యాహ్నంలో ఉన్నాడు — విజయ సమయమైన అభిజిత్ ముహూర్తం. ఉత్తర ఫల్గుణీ నక్షత్రం ఉంది. పదండి!’ వానర సేనలు పోటు సముద్రంలా లేచాయి. నీరు, పండ్లు ఉన్న మంచి దారులు కనుక్కుంటూ {nila|నీలుడు} ముందు నడిచాడు. రాముడు హనుమంతుని భుజాల మీద, లక్ష్మణుడు అంగదుని భుజాల మీద కూర్చున్నారు. వానరులు దూకుతూ, గర్జిస్తూ, ఆడుతూ, అడవుల్లోని తేనె, పండ్లు తింటూ నడిచారు; భూమి కదిలే సముద్రంలా వారితో నిండిపోయింది."],
   ["p", "At last they reached the southern shore and camped by the sea. That night Rāma sat alone, looking across the dark water towards Laṅkā. ‘O wind, blow from where Sītā is, and touch me; touch her, then touch me. The moon we both see is a comfort.’ Lakṣmaṇa sat beside him and comforted him, and Rāma did his evening prayers by the shore.",
    "చివరికి దక్షిణ తీరం చేరి సముద్రం దగ్గర విడిది చేశారు. ఆ రాత్రి రాముడు ఒంటరిగా కూర్చుని చీకటి నీటికి అవతల లంక వైపు చూశాడు. ‘ఓ వాయువా, సీత ఉన్న చోటి నుండి వీచి నన్ను తాకు; ఆమెను తాకి, తర్వాత నన్ను తాకు. మేమిద్దరం చూసే ఈ చంద్రుడే ఊరట.’ లక్ష్మణుడు పక్కన కూర్చుని ఊరడించాడు; రాముడు తీరంలో సంధ్యావందనం చేశాడు."]
  ],
  [
   ["p", "Before him the ocean stretched out without end, waves rising like mountains, full of sea monsters and whirlpools, joined to the sky at the horizon so that one could not tell water from sky. The vānaras gazed at it in silence. Somehow they would have to cross it.",
    "అతని ముందు సముద్రం అంతులేకుండా పరుచుకుంది — పర్వతాల్లా లేచే అలలు, జలచరాలు, సుడిగుండాలు; దిగంతంలో ఆకాశాన్ని కలిసిపోయి నీరేదో ఆకాశమేదో తెలియనంత. వానరులు మౌనంగా దాన్ని చూశారు. ఎలాగో ఒకలా దాన్ని దాటాలి."],
   ["dyk", "🤗", "Rāma's embrace of Hanumān is one of the most loved scenes in Indian art. Rāma, a prince who could give kingdoms, said the greatest gift he could give was his embrace — the gift of love itself.",
    "రాముడు హనుమంతుణ్ణి ఆలింగనం చేసుకున్న సన్నివేశం భారతీయ కళలో అత్యంత ప్రియమైనది. రాజ్యాలు ఇవ్వగల రాకుమారుడైన రాముడు, తాను ఇవ్వగల గొప్ప కానుక తన ఆలింగనమే అన్నాడు — ప్రేమ అనే కానుక."]
  ]
 ],
 remember: [
  ["Rāma praised Hanumān's deed and gave him the only gift he had: an embrace.", "రాముడు హనుమంతుని కార్యాన్ని పొగిడి, తన దగ్గర ఉన్న ఏకైక కానుక — ఆలింగనం — ఇచ్చాడు."],
  ["Sugrīva encouraged Rāma not to lose heart about crossing the ocean.", "సముద్రం దాటడం గురించి మనసు కోల్పోవద్దని సుగ్రీవుడు రాముణ్ణి ప్రోత్సహించాడు."],
  ["The vānara army marched south at the hour of victory and camped by the sea.", "విజయ ముహూర్తంలో వానర సేన దక్షిణం వైపు నడిచి సముద్ర తీరంలో విడిది చేసింది."]
 ],
 think: ["Rāma said his greatest gift was a hug of thanks. Why can love and gratitude sometimes mean more than any present?", "తన గొప్ప కానుక కృతజ్ఞతతో కూడిన ఆలింగనమే అన్నాడు రాముడు. ప్రేమ, కృతజ్ఞత కొన్నిసార్లు ఏ బహుమతికంటే ఎందుకు విలువైనవి?"]
},
{
 id: "yuddha-2", kanda: "yuddha", n: 2, order: 602, date: "2026-10-21",
 title: "Rāvaṇa's Council", titleTe: "రావణుని మంత్రాంగం", sargas: "6–10", scene: "palace",
 who: ["ravana", "prahasta", "vibhishana", "indrajit"],
 pages: [
  [
   ["p", "In burnt and smoking Laṅkā, {ravana|Rāvaṇa} sat with his ministers, ashamed. ‘A single monkey entered our city, saw Sītā, killed our warriors and burned Laṅkā. Now Rāma is coming with an army. Advise me. The best kings take counsel from wise friends before they act.’ But his ministers only flattered him. ‘Why worry, great king? You have defeated Indra, Kubera, Yama and Varuṇa. What is a man and a crowd of monkeys to you?’ said {prahasta|Prahasta}. Others jumped up with swords and clubs: ‘I alone will kill Rāma!’ ‘I will eat the monkeys!’ ‘Send me tonight!’",
    "కాలిపోయి పొగలు కక్కుతున్న లంకలో {ravana|రావణుడు} సిగ్గుతో తన మంత్రులతో కూర్చున్నాడు. ‘ఒక్క కోతి మన నగరంలో ప్రవేశించి, సీతను చూసి, మన వీరులను చంపి, లంకను తగలబెట్టింది. ఇప్పుడు సైన్యంతో రాముడు వస్తున్నాడు. సలహా ఇవ్వండి. ఉత్తమ రాజులు పని చేసే ముందు జ్ఞానులైన మిత్రుల సలహా తీసుకుంటారు.’ కానీ అతని మంత్రులు భజన మాత్రమే చేశారు. ‘ఎందుకు చింత మహారాజా? ఇంద్రుణ్ణి, కుబేరుణ్ణి, యముణ్ణి, వరుణుణ్ణి జయించారు. ఒక మనిషి, కోతుల గుంపు మీకు ఏపాటి?’ అన్నాడు {prahasta|ప్రహస్తుడు}. మరికొందరు కత్తులు, గదలతో లేచారు: ‘నేనొక్కణ్ణే రాముణ్ణి చంపుతాను!’ ‘కోతులను తినేస్తాను!’ ‘ఈ రాత్రే నన్ను పంపండి!’"],
   ["p", "Then {vibhishana|Vibhīṣaṇa} stood up and calmed them. ‘Brothers, a wise man uses force only when gentler ways have failed. Rāma is careful, strong and righteous. Did Rāma do us any wrong? He killed Khara only because Khara attacked him first. Sītā is Rāma's wife. Taking her was wrong, and keeping her will destroy us. My king, return Sītā before Rāma's arrows fill Laṅkā.’",
    "అప్పుడు {vibhishana|విభీషణుడు} లేచి వారిని శాంతపరిచాడు. ‘సోదరులారా, మృదువైన మార్గాలు విఫలమైనప్పుడే జ్ఞాని బలం వాడతాడు. రాముడు జాగ్రత్తపరుడు, బలవంతుడు, ధర్మాత్ముడు. రాముడు మనకు ఏదైనా అన్యాయం చేశాడా? ఖరుడు ముందు దాడి చేసినందుకే అతన్ని చంపాడు. సీత రాముని భార్య. ఆమెను తీసుకురావడం తప్పు; ఉంచుకోవడం మనల్ని నాశనం చేస్తుంది. మహారాజా, రాముని బాణాలు లంకను నింపకముందే సీతను అప్పగించండి.’"]
  ],
  [
   ["p", "The next morning Vibhīṣaṇa went to Rāvaṇa's palace alone. ‘Brother, since Sītā came here, there have been terrible omens. The sacred fires do not burn brightly even when fed; snakes are found in the kitchens and in the fire-altars; the cows' milk has dried up; elephants and horses are sick; crows and vultures cry on the roofs; jackals howl at dawn. These are signs of disaster. Please, return Sītā to Rāma.’",
    "మరుసటి ఉదయం విభీషణుడు ఒంటరిగా రావణుని అంతఃపురానికి వెళ్ళాడు. ‘అన్నా, సీత ఇక్కడికి వచ్చినప్పటి నుండి భయంకరమైన అపశకునాలు కనిపిస్తున్నాయి. ఆహుతులు వేసినా యజ్ఞాగ్నులు ప్రకాశంగా మండడం లేదు; వంటశాలల్లో, యజ్ఞవేదికల్లో పాములు కనిపిస్తున్నాయి; ఆవుల పాలు ఎండిపోయాయి; ఏనుగులు, గుర్రాలు జబ్బుపడ్డాయి; కప్పుల మీద కాకులు, గద్దలు అరుస్తున్నాయి; తెల్లవారుజామున నక్కలు ఊళ వేస్తున్నాయి. ఇవన్నీ వినాశన సూచనలు. దయచేసి సీతను రామునికి అప్పగించు.’"],
   ["p", "But Rāvaṇa said coldly, ‘I see no danger from anywhere. Rāma will never get Sītā back, even with Indra and all the gods to help him. Go.’ And he turned away. Rāvaṇa had heard the truth, but pride would not let him accept it.",
    "కానీ రావణుడు చల్లగా అన్నాడు: ‘ఎక్కడి నుండీ నాకు ప్రమాదం కనిపించడం లేదు. ఇంద్రుడు, దేవతలంతా సాయం చేసినా రాముడు సీతను తిరిగి పొందలేడు. వెళ్ళు.’ ముఖం తిప్పుకున్నాడు. రావణుడు నిజం విన్నాడు, కానీ గర్వం దాన్ని ఒప్పుకోనివ్వలేదు."]
  ],
  [
   ["p", "In that council, only one voice spoke for truth and peace. Every other voice told Rāvaṇa what he wanted to hear. Vālmīki shows us how a great king can be led to ruin, not only by his own desires but also by advisers who are afraid to tell him he is wrong.",
    "ఆ సభలో సత్యం కోసం, శాంతి కోసం ఒకే ఒక్క స్వరం మాట్లాడింది. మిగిలిన స్వరాలన్నీ రావణుడు వినాలనుకున్నదే చెప్పాయి. తన సొంత కోరికల వల్లనే కాదు, ‘మీరు తప్పు చేస్తున్నారు’ అని చెప్పడానికి భయపడే సలహాదారుల వల్ల కూడా గొప్ప రాజు ఎలా పతనమవుతాడో వాల్మీకి మనకు చూపిస్తాడు."],
   ["dyk", "🪔", "In the old books on statecraft, a king was expected to listen to three kinds of counsel: from himself, from friends, and from experts — and to beware of flatterers. Rāvaṇa's council is the opposite of good counsel.",
    "పాత రాజనీతి గ్రంథాల ప్రకారం రాజు మూడు రకాల సలహాలు వినాలి: తన ఆలోచన, మిత్రుల సలహా, నిపుణుల సలహా — భజనపరులతో జాగ్రత్తగా ఉండాలి. రావణుని సభ మంచి మంత్రాంగానికి పూర్తి వ్యతిరేకం."]
  ]
 ],
 remember: [
  ["Rāvaṇa's ministers flattered him and boasted they would kill Rāma.", "రావణుని మంత్రులు అతన్ని పొగిడి, రాముణ్ణి చంపుతామని గొప్పలు చెప్పారు."],
  ["Vibhīṣaṇa alone advised him to return Sītā and make peace.", "సీతను అప్పగించి సంధి చేసుకోమని విభీషణుడు ఒక్కడే సలహా ఇచ్చాడు."],
  ["He warned of bad omens in Laṅkā, but Rāvaṇa's pride would not listen.", "లంకలోని అపశకునాల గురించి హెచ్చరించాడు, కానీ రావణుని గర్వం వినలేదు."]
 ],
 think: ["Rāvaṇa preferred advisers who agreed with him. Why is it valuable to have friends who will honestly tell us when we are wrong?", "రావణుడు తనతో ఏకీభవించే సలహాదారులనే ఇష్టపడ్డాడు. మనం తప్పు చేస్తున్నప్పుడు నిజాయితీగా చెప్పే స్నేహితులు ఎందుకు విలువైనవారు?"]
},
{
 id: "yuddha-3", kanda: "yuddha", n: 3, order: 603, date: "2026-10-21",
 title: "Vibhīṣaṇa Leaves Laṅkā", titleTe: "విభీషణుడు లంకను వీడడం", sargas: "11–16", scene: "lanka",
 who: ["ravana", "kumbhakarna", "vibhishana", "indrajit"],
 pages: [
  [
   ["p", "Rāvaṇa called a great assembly. Even his brother {kumbhakarna|Kumbhakarṇa}, who slept for months at a time, was woken to attend. When he heard what had happened, Kumbhakarṇa said bluntly, ‘Brother, you should have asked our advice before you stole Sītā, not after. A king who acts first and thinks later is like a man who eats poison and then asks for medicine. You have done wrong.’ Then he added, ‘But I am your brother. What is done is done. I will fight for you, and I will kill your enemies.’",
    "రావణుడు పెద్ద సభ ఏర్పాటు చేశాడు. నెలల తరబడి నిద్రపోయే తమ్ముడు {kumbhakarna|కుంభకర్ణుణ్ణి} కూడా సభకు రావడానికి మేల్కొలిపారు. జరిగింది విన్నాక కుంభకర్ణుడు నిర్మొహమాటంగా అన్నాడు: ‘అన్నా, సీతను దొంగిలించిన తర్వాత కాదు, ముందే మా సలహా అడగాల్సింది. ముందు పని చేసి తర్వాత ఆలోచించే రాజు, విషం తాగి తర్వాత మందు అడిగేవాడిలాంటివాడు. నువ్వు తప్పు చేశావు.’ తర్వాత అన్నాడు, ‘కానీ నేను నీ తమ్ముణ్ణి. జరిగిందేదో జరిగింది. నీ కోసం యుద్ధం చేస్తాను, నీ శత్రువులను చంపుతాను.’"],
   ["more", "Why Rāvaṇa had not forced Sītā", "రావణుడు సీతను ఎందుకు బలవంతం చేయలేదు", "Rāvaṇa's secret, Sarga 13", "రావణుని రహస్యం, 13వ సర్గ", [
    ["p", "A rākṣasa named Mahāpārśva told Rāvaṇa to simply take Sītā by force. Rāvaṇa then told the assembly a secret. Long ago he had forced himself upon an apsarā named Puñjikasthalā, and Brahmā had cursed him: ‘If you ever again take a woman against her will, your head will split into a hundred pieces.’ ‘That is why,’ said Rāvaṇa, ‘I have not touched Sītā.’",
     "మహాపార్శ్వుడు అనే రాక్షసుడు సీతను బలవంతంగా తీసుకోమని రావణునికి చెప్పాడు. అప్పుడు రావణుడు సభకు ఒక రహస్యం చెప్పాడు. చాలా కాలం క్రితం పుంజికస్థల అనే అప్సరసపై అతను బలాత్కారం చేశాడు; బ్రహ్మ శపించాడు: ‘ఇంకెప్పుడైనా ఒక స్త్రీని ఆమె ఇష్టం లేకుండా తీసుకుంటే నీ తల వంద ముక్కలవుతుంది.’ ‘అందుకే,’ అన్నాడు రావణుడు, ‘నేను సీతను తాకలేదు.’"]
   ]]
  ],
  [
   ["p", "{vibhishana|Vibhīṣaṇa} spoke once more. ‘Sītā is like a poisonous snake you have wrapped around your neck. Rāma's arrows will not spare anyone — not Kumbhakarṇa, not Indrajit, not you. Return her while there is time.’ {indrajit|Indrajit} laughed. ‘Uncle is a coward! I have beaten Indra and his elephant. Shall I fear two humans?’ Vibhīṣaṇa answered, ‘You are only a child, Indrajit, and you speak like one. You are your father's enemy, pretending to be his friend.’",
    "{vibhishana|విభీషణుడు} మరోసారి మాట్లాడాడు. ‘సీత నువ్వు మెడకు చుట్టుకున్న విషసర్పం వంటిది. రాముని బాణాలు ఎవరినీ వదలవు — కుంభకర్ణుణ్ణి, ఇంద్రజిత్తును, నిన్నూ. సమయం ఉండగానే ఆమెను అప్పగించు.’ {indrajit|ఇంద్రజిత్తు} నవ్వాడు. ‘చిన్నాన్న పిరికివాడు! నేను ఇంద్రుణ్ణి, అతని ఏనుగును ఓడించాను. ఇద్దరు మనుషులకు భయపడాలా?’ విభీషణుడు జవాబిచ్చాడు: ‘ఇంద్రజిత్తూ, నువ్వు ఇంకా పిల్లవాడివి, పిల్లవాడిలాగే మాట్లాడుతున్నావు. స్నేహితుడిలా నటించే నీ తండ్రి శత్రువువి నువ్వు.’"],
   ["p", "Then {ravana|Rāvaṇa} turned on his brother in rage. ‘It is better to live with an open enemy than with a so-called friend who is secretly on the enemy's side. You are jealous of my glory. If anyone else had said these words, I would kill him this moment. Shame on you, disgrace of our family!’",
    "అప్పుడు {ravana|రావణుడు} కోపంతో తమ్ముని మీద విరుచుకుపడ్డాడు. ‘రహస్యంగా శత్రువు పక్షాన ఉండే పేరుకి మిత్రుడితో కంటే బహిరంగ శత్రువుతో బతకడమే మేలు. నా వైభవం చూసి నీకు అసూయ. ఈ మాటలు ఇంకెవరైనా అని ఉంటే ఈ క్షణమే చంపేసేవాణ్ణి. ఛీ, మన వంశానికి కళంకం!’"]
  ],
  [
   ["p", "Vibhīṣaṇa rose into the air with four faithful companions and spoke from the sky, sadly but without anger:",
    "విభీషణుడు నలుగురు విశ్వాసపాత్రులైన అనుచరులతో ఆకాశంలోకి లేచి, కోపం లేకుండా విచారంగా ఆకాశం నుండి మాట్లాడాడు:"],
   ["sloka", ["సులభాః పురుషా రాజన్ సతతం ప్రియవాదినః ।", "అప్రియస్య చ పథ్యస్య వక్తా శ్రోతా చ దుర్లభః ॥"],
    ["sulabhāḥ puruṣā rājan satataṃ priyavādinaḥ |", "apriyasya ca pathyasya vaktā śrotā ca durlabhaḥ ||"],
    "‘O king, people who always say pleasant things are easy to find. But one who speaks what is unpleasant yet good for you — and one who will listen to it — are rare.’",
    "‘రాజా, ఎప్పుడూ ఇంపుగా మాట్లాడేవారు సులభంగా దొరుకుతారు. కానీ వినడానికి కటువుగా ఉన్నా మేలు చేసే మాట చెప్పేవాడు, దాన్ని వినేవాడు — ఇద్దరూ దుర్లభం.’"],
   ["p", "‘I spoke for your good, brother, because I love you. You are my elder, so I forgive your harsh words. Protect yourself and Laṅkā as best you can. May you be well. I am going.’ And Vibhīṣaṇa flew across the sea towards Rāma's camp.",
    "‘అన్నా, నిన్ను ప్రేమిస్తున్నాను కాబట్టే నీ మేలు కోసం చెప్పాను. నువ్వు నా పెద్దవాడివి కాబట్టి నీ కటువు మాటలను క్షమిస్తున్నాను. నిన్ను, లంకను శక్తి కొద్దీ కాపాడుకో. నీకు మేలు జరగాలి. నేను వెళ్తున్నాను.’ విభీషణుడు సముద్రం దాటి రాముని శిబిరం వైపు ఎగిరాడు."]
  ]
 ],
 remember: [
  ["Kumbhakarṇa told Rāvaṇa he was wrong, but promised to fight for him.", "రావణుడు తప్పు చేశాడని కుంభకర్ణుడు చెప్పాడు, అయినా అతని కోసం యుద్ధం చేస్తానన్నాడు."],
  ["Rāvaṇa insulted Vibhīṣaṇa for advising him to return Sītā.", "సీతను అప్పగించమని సలహా ఇచ్చినందుకు రావణుడు విభీషణుణ్ణి అవమానించాడు."],
  ["Vibhīṣaṇa said: those who speak unpleasant but good words are rare — and left Laṅkā.", "కటువైనా మేలు చేసే మాట చెప్పేవారు అరుదు అని చెప్పి విభీషణుడు లంకను వీడాడు."]
 ],
 think: ["Vibhīṣaṇa forgave his brother's insults but would not stay with wrongdoing. Can we love someone and still refuse to support what they do wrong?", "విభీషణుడు అన్న అవమానాలను క్షమించాడు, కానీ అధర్మంతో ఉండలేదు. ఒకరిని ప్రేమిస్తూనే వారి తప్పులకు మద్దతు ఇవ్వకుండా ఉండగలమా?"]
},
{
 id: "yuddha-4", kanda: "yuddha", n: 4, order: 604, date: "2026-10-21",
 title: "Refuge for All Who Ask", titleTe: "శరణాగత రక్షణ", sargas: "17–19", scene: "ocean",
 who: ["vibhishana", "sugriva", "hanuman", "rama"],
 pages: [
  [
   ["p", "{vibhishana|Vibhīṣaṇa} hovered in the sky above the vānara camp and called out, ‘I am Vibhīṣaṇa, younger brother of Rāvaṇa. I told him again and again to return Sītā, but he insulted me. I have left my wife, my sons, my home and my wealth, and I come to Rāma for refuge. Please tell him.’ The vānaras seized rocks and trees, ready to attack. {sugriva|Sugrīva} hurried to Rāma: ‘This is Rāvaṇa's brother, a rākṣasa. He has come to spy on us, or to kill us when we trust him. He should be punished.’",
    "{vibhishana|విభీషణుడు} వానర శిబిరం పైన ఆకాశంలో నిలిచి పిలిచాడు: ‘నేను విభీషణుణ్ణి, రావణుని తమ్ముణ్ణి. సీతను అప్పగించమని పదే పదే చెప్పాను, కానీ అతను నన్ను అవమానించాడు. భార్యను, కొడుకులను, ఇంటిని, సంపదను వదిలి రాముని శరణు కోరి వచ్చాను. దయచేసి అతనికి చెప్పండి.’ వానరులు రాళ్ళు, చెట్లు పట్టుకుని దాడికి సిద్ధమయ్యారు. {sugriva|సుగ్రీవుడు} రాముని దగ్గరకు పరుగెత్తాడు: ‘ఇతను రావణుని తమ్ముడు, రాక్షసుడు. మనపై గూఢచర్యం చేయడానికి, లేదా మనం నమ్మినప్పుడు చంపడానికి వచ్చాడు. శిక్షించాలి.’"],
   ["p", "Rāma asked all his counsellors for their views. Aṅgada said, ‘Test him first.’ Śarabha said, ‘Send a spy to watch him.’ Jāmbavān said, ‘He comes at the wrong time and place; be careful.’ Mainda said, ‘Question him gently and judge.’ Then {hanuman|Hanumān} spoke. ‘My lord, I think he is sincere. His face is calm, not frightened or deceitful; his voice is steady. He has seen Rāvaṇa's wickedness and your goodness. He knows that you killed Vāli and crowned Sugrīva, and hopes you will do the same for him. A spy would not come openly like this, announcing his name.’",
    "రాముడు తన సలహాదారులందరి అభిప్రాయం అడిగాడు. ‘ముందు పరీక్షించండి,’ అన్నాడు అంగదుడు. ‘అతన్ని గమనించడానికి గూఢచారిని పంపండి,’ అన్నాడు శరభుడు. ‘తప్పు సమయంలో, తప్పు చోట వచ్చాడు; జాగ్రత్త,’ అన్నాడు జాంబవంతుడు. ‘మెల్లగా ప్రశ్నించి నిర్ణయించండి,’ అన్నాడు మైందుడు. అప్పుడు {hanuman|హనుమంతుడు} మాట్లాడాడు: ‘ప్రభూ, ఇతను నిజాయితీపరుడని నాకు అనిపిస్తోంది. అతని ముఖం ప్రశాంతంగా ఉంది, భయం గానీ మోసం గానీ లేదు; స్వరం స్థిరంగా ఉంది. రావణుని దుష్టత్వాన్ని, మీ మంచితనాన్ని చూశాడు. మీరు వాలిని చంపి సుగ్రీవుణ్ణి రాజును చేశారని తెలుసు; తనకూ అలాగే చేస్తారని ఆశిస్తున్నాడు. గూఢచారి ఇలా బహిరంగంగా పేరు చెప్పి రాడు.’"]
  ],
  [
   ["p", "Then {rama|Rāma} spoke, and his words became one of the most famous promises in the Rāmāyaṇa. ‘I will never turn away anyone who comes to me as a friend, even if he has faults. That is not the way of good people. Even an enemy who comes for shelter must be protected — a person who refuses shelter to one who asks loses all his merit.’ Then he declared his vow:",
    "అప్పుడు {rama|రాముడు} మాట్లాడాడు; అతని మాటలు రామాయణంలోనే అత్యంత ప్రసిద్ధ వాగ్దానాల్లో ఒకటిగా నిలిచాయి. ‘స్నేహితుడిగా నా దగ్గరకు వచ్చినవారిని, వారిలో లోపాలున్నా, ఎన్నడూ తిరస్కరించను. అది సజ్జనుల మార్గం కాదు. శరణు కోరి వచ్చిన శత్రువును కూడా కాపాడాలి — శరణు కోరినవారిని కాదన్నవాడు తన పుణ్యమంతా కోల్పోతాడు.’ తర్వాత తన వ్రతాన్ని ప్రకటించాడు:"],
   ["sloka", ["సకృదేవ ప్రపన్నాయ తవాస్మీతి చ యాచతే ।", "అభయం సర్వభూతేభ్యో దదామ్యేతద్వ్రతం మమ ॥"],
    ["sakṛdeva prapannāya tavāsmīti ca yācate |", "abhayaṃ sarvabhūtebhyo dadāmyetadvrataṃ mama ||"],
    "‘To anyone who comes to me even once, saying “I am yours,” and asks for help, I give freedom from fear from all beings. This is my vow.’",
    "‘ఒక్కసారి నా దగ్గరకు వచ్చి “నేను నీవాణ్ణి” అని శరణు కోరినవారికి సమస్త జీవుల నుండి అభయం ఇస్తాను. ఇది నా వ్రతం.’"],
   ["p", "‘Bring him, Sugrīva — whether he is Vibhīṣaṇa or even Rāvaṇa himself.’ Sugrīva, moved, said, ‘You are right, my lord. I too trust him now.’",
    "‘సుగ్రీవా, అతన్ని తీసుకురా — విభీషణుడైనా సరే, స్వయంగా రావణుడైనా సరే.’ కదిలిపోయిన సుగ్రీవుడు, ‘ప్రభూ, మీరు చెప్పింది నిజం. ఇప్పుడు నేనూ అతన్ని నమ్ముతున్నాను,’ అన్నాడు."]
  ],
  [
   ["p", "Vibhīṣaṇa came down and fell at Rāma's feet. ‘I have abandoned Laṅkā, my friends and my wealth. My life and my kingdom now depend on you.’ Rāma lifted him up and embraced him, and asked him about Rāvaṇa's strength. Vibhīṣaṇa told him everything — Rāvaṇa's boons, Kumbhakarṇa's might, Indrajit's magic, the generals and the armies. Rāma promised, ‘I will kill Rāvaṇa with his sons and his army, and make you king of Laṅkā. I swear it by my three brothers.’",
    "విభీషణుడు దిగివచ్చి రాముని పాదాల మీద పడ్డాడు. ‘లంకను, మిత్రులను, సంపదను వదిలేశాను. నా ప్రాణం, నా రాజ్యం ఇక మీ మీదే ఆధారపడ్డాయి.’ రాముడు అతన్ని లేపి ఆలింగనం చేసుకుని, రావణుని బలం గురించి అడిగాడు. విభీషణుడు అంతా చెప్పాడు — రావణుని వరాలు, కుంభకర్ణుని బలం, ఇంద్రజిత్తు మాయలు, సేనానులు, సైన్యాలు. రాముడు ప్రతిజ్ఞ చేశాడు: ‘రావణుణ్ణి అతని కొడుకులతో, సైన్యంతో సహా చంపి నిన్ను లంకకు రాజును చేస్తాను. నా ముగ్గురు తమ్ముళ్ళ మీద ఒట్టు.’"],
   ["p", "Then Rāma asked Lakṣmaṇa to bring sea-water, and there on the shore, before the battle had even begun, he anointed Vibhīṣaṇa as king of Laṅkā. The vānaras cheered. Vibhīṣaṇa advised, ‘Rāma, ask the Ocean god for help. Your ancestor Sagara dug out the ocean; he will surely help you.’",
    "తర్వాత సముద్రపు నీరు తెమ్మని రాముడు లక్ష్మణునికి చెప్పి, అక్కడే తీరంలో, యుద్ధం మొదలవకముందే, విభీషణుణ్ణి లంకకు రాజుగా అభిషేకించాడు. వానరులు జయజయధ్వానాలు చేశారు. విభీషణుడు సలహా ఇచ్చాడు: ‘రామా, సముద్రుని సాయం కోరండి. మీ పూర్వికుడు సగరుడే సముద్రాన్ని తవ్వించాడు; తప్పకుండా సాయం చేస్తాడు.’"]
  ]
 ],
 remember: [
  ["Sugrīva feared Vibhīṣaṇa was a spy, but Hanumān judged him sincere.", "విభీషణుడు గూఢచారి అని సుగ్రీవుడు భయపడ్డాడు, కానీ హనుమంతుడు అతను నిజాయితీపరుడని అంచనా వేశాడు."],
  ["Rāma vowed to protect anyone who comes to him for refuge, even once — even Rāvaṇa.", "ఒక్కసారి శరణు కోరినవారిని — రావణుడైనా — కాపాడుతానని రాముడు వ్రతం చెప్పాడు."],
  ["Rāma crowned Vibhīṣaṇa king of Laṅkā on the seashore.", "రాముడు సముద్ర తీరంలోనే విభీషణుణ్ణి లంకకు రాజుగా అభిషేకించాడు."]
 ],
 think: ["Rāma listened to every counsellor before deciding. Why is it good to hear different opinions before making a big decision?", "నిర్ణయం తీసుకునే ముందు రాముడు ప్రతి సలహాదారుని మాట విన్నాడు. పెద్ద నిర్ణయం తీసుకునే ముందు వేర్వేరు అభిప్రాయాలు వినడం ఎందుకు మంచిది?"]
}
]);
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "yuddha-5", kanda: "yuddha", n: 5, order: 605, date: "2026-10-21",
 title: "Rāma and the Ocean", titleTe: "రాముడు, సముద్రుడు", sargas: "20–21", scene: "ocean",
 who: ["shukaspy", "rama", "lakshmana", "samudra"],
 pages: [
  [
   ["p", "Rāvaṇa sent a spy named {shukaspy|Śuka} to the vānara camp. Śuka flew over the sea and, hovering in the sky, gave Sugrīva Rāvaṇa's message: ‘Why do you take part in a quarrel between Rāma and me? Go home to Kiṣkindhā. Even the gods cannot take Laṅkā.’ The vānaras leapt up, caught Śuka, pulled him down and began to beat him. ‘Rāma, they are killing a messenger!’ he cried. Rāma at once ordered, ‘Let him go. A messenger must not be harmed.’",
    "రావణుడు {shukaspy|శుకుడు} అనే గూఢచారిని వానర శిబిరానికి పంపాడు. శుకుడు సముద్రం మీదుగా ఎగిరి, ఆకాశంలో నిలిచి, రావణుని సందేశం సుగ్రీవునికి చెప్పాడు: ‘రామునికీ నాకూ మధ్య గొడవలో నువ్వెందుకు? కిష్కింధకు వెళ్ళిపో. దేవతలు కూడా లంకను గెలవలేరు.’ వానరులు ఎగిరి శుకుణ్ణి పట్టుకుని కిందకు లాగి కొట్టడం మొదలుపెట్టారు. ‘రామా, దూతను చంపుతున్నారు!’ అని అతను అరిచాడు. రాముడు వెంటనే, ‘అతన్ని వదలండి. దూతకు హాని చేయకూడదు,’ అని ఆజ్ఞాపించాడు."],
   ["p", "Sugrīva sent back a reply: ‘Tell Rāvaṇa: you are no friend of mine. You are an enemy of Rāma, and so you are my enemy. Not even the gods can save you from Rāma's arrows.’ Then {rama|Rāma} spread darbha grass on the shore, bowed to the Ocean with folded hands, and lay down facing the sea, his head on his arm. ‘Either I will cross the ocean, or the ocean will kill me,’ he said. For three nights he lay there, fasting and silent, waiting for the Ocean god to appear."
   , "సుగ్రీవుడు జవాబు పంపాడు: ‘రావణునికి చెప్పు: నువ్వు నాకు మిత్రుడివి కావు. రాముని శత్రువువి కాబట్టి నా శత్రువువి. రాముని బాణాల నుండి దేవతలు కూడా నిన్ను కాపాడలేరు.’ తర్వాత {rama|రాముడు} తీరంలో దర్భలు పరిచి, చేతులు జోడించి సముద్రునికి నమస్కరించి, చేతిని తలగడగా పెట్టుకుని సముద్రం వైపు తిరిగి పడుకున్నాడు. ‘నేను సముద్రాన్ని దాటుతాను, లేదా సముద్రం నన్ను చంపుతుంది,’ అన్నాడు. మూడు రాత్రులు ఉపవాసంతో, మౌనంగా అక్కడే పడుకుని సముద్రుడు ప్రత్యక్షం కావాలని ఎదురుచూశాడు."]
  ],
  [
   ["p", "But the Ocean did not come. On the fourth morning, Rāma's eyes turned red. ‘Lakṣmaṇa, see — the ocean thinks my patience is weakness. Gentleness, forgiveness and kindness are not respected by the proud. Bring my bow and my arrows like serpents. Today I will dry up this ocean, and the vānaras will walk across on foot!’ He drew his great bow and shot blazing arrows into the water. The sea boiled and roared; waves rose like mountains; whales, sharks and serpents rose up burning; a darkness covered the sky.",
    "కానీ సముద్రుడు రాలేదు. నాలుగో రోజు ఉదయం రాముని కళ్ళు ఎర్రబడ్డాయి. ‘లక్ష్మణా, చూడు — నా ఓర్పును సముద్రుడు బలహీనత అనుకుంటున్నాడు. గర్విష్ఠులు మృదుత్వాన్ని, క్షమను, దయను గౌరవించరు. నా విల్లు, సర్పాల్లాంటి బాణాలు తీసుకురా. ఈ రోజు ఈ సముద్రాన్ని ఎండిపోయేలా చేస్తాను; వానరులు కాలినడకన దాటుతారు!’ తన మహా ధనుస్సును ఎక్కుపెట్టి నీటిలోకి మండే బాణాలు వేశాడు. సముద్రం మరిగి గర్జించింది; అలలు పర్వతాల్లా లేచాయి; తిమింగలాలు, సొరచేపలు, సర్పాలు కాలుతూ పైకి లేచాయి; ఆకాశాన్ని చీకటి కమ్మేసింది."],
   ["p", "{lakshmana|Lakṣmaṇa} caught Rāma's arm. ‘Enough, brother! Great men do not lose themselves in anger. There must be another way.’ But Rāma had already fixed the Brahmāstra to his bow, the most terrible weapon of all, and drawn it back. The earth shook, the mountains trembled, and all beings cried out in fear.",
    "{lakshmana|లక్ష్మణుడు} రాముని చెయ్యి పట్టుకున్నాడు. ‘చాలు అన్నా! మహాత్ములు కోపంలో తమను తాము కోల్పోరు. ఇంకో దారి తప్పక ఉంటుంది.’ కానీ అప్పటికే రాముడు అన్నిటికంటే భయంకరమైన బ్రహ్మాస్త్రాన్ని విల్లుకు సంధించి లాగాడు. భూమి కంపించింది, పర్వతాలు వణికాయి, సమస్త జీవులు భయంతో ఆక్రందించాయి."]
  ],
  [
   ["p", "Then, out of the middle of the sea, rose {samudra|Samudra}, the Ocean god himself — dark like a sapphire, wearing red garlands and jewels, surrounded by the great rivers Gaṅgā and Sindhu and others. He folded his hands before Rāma and said, ‘O Rāma, earth, wind, sky, water and fire each follow their own nature. It is my nature to be deep and impossible to cross. I cannot dry myself up, for that would break the law of nature. But I will tell you how you can cross.’",
    "అప్పుడు సముద్రం మధ్య నుండి స్వయంగా {samudra|సముద్రుడు} లేచాడు — నీలమణిలా నల్లగా, ఎర్రని మాలలు, ఆభరణాలు ధరించి, గంగ, సింధు మొదలైన మహానదులతో కలిసి. రాముని ముందు చేతులు జోడించి అన్నాడు: ‘రామా, భూమి, వాయువు, ఆకాశం, నీరు, అగ్ని — ప్రతిదీ తన సహజ స్వభావాన్ని అనుసరిస్తుంది. లోతుగా, దాటరానిదిగా ఉండడం నా స్వభావం. నన్ను నేను ఎండబెట్టుకోలేను; అది ప్రకృతి నియమాన్ని భంగపరుస్తుంది. కానీ మీరు ఎలా దాటవచ్చో చెబుతాను.’"],
   ["dyk", "🌊", "This scene is often remembered as a lesson: Rāma tried patience first and force only after. Even then, the problem was finally solved not by destroying the ocean but by working with it.",
    "ఈ సన్నివేశాన్ని తరచుగా ఒక పాఠంగా గుర్తుంచుకుంటారు: రాముడు ముందు ఓర్పుతో ప్రయత్నించాడు, తర్వాతే బలం ప్రయోగించాడు. అప్పుడు కూడా సమస్య సముద్రాన్ని నాశనం చేయడం వల్ల కాదు, దానితో కలిసి పని చేయడం వల్లే పరిష్కారమైంది."]
  ]
 ],
 remember: [
  ["Rāma freed Rāvaṇa's spy Śuka, because a messenger must not be harmed.", "దూతకు హాని చేయకూడదని రాముడు రావణుని గూఢచారి శుకుణ్ణి విడిచిపెట్టాడు."],
  ["Rāma lay on darbha grass for three nights praying to the Ocean.", "రాముడు మూడు రాత్రులు దర్భల మీద పడుకుని సముద్రుణ్ణి ప్రార్థించాడు."],
  ["When the Ocean did not come, Rāma shot fiery arrows until Samudra appeared.", "సముద్రుడు రాకపోవడంతో రాముడు అగ్ని బాణాలు వేశాడు; అప్పుడు సముద్రుడు ప్రత్యక్షమయ్యాడు."]
 ],
 think: ["Rāma was patient first, then firm. When is it right to be gentle, and when is it right to be firm?", "రాముడు మొదట ఓర్పుతో, తర్వాత దృఢంగా ఉన్నాడు. ఎప్పుడు మృదువుగా ఉండడం, ఎప్పుడు దృఢంగా ఉండడం సరైనది?"]
},
{
 id: "yuddha-6", kanda: "yuddha", n: 6, order: 606, date: "2026-10-21",
 title: "Nala's Bridge", titleTe: "నలుని వారధి", sargas: "22", scene: "ocean",
 who: ["samudra", "rama", "nala", "hanuman", "angada"],
 pages: [
  [
   ["p", "‘But first,’ said Rāma, ‘this Brahmāstra, once drawn, cannot be wasted. Where shall I send it?’ {samudra|Samudra} answered, ‘In the north there is a place called Drumakulya, where wicked robbers live and drink my waters. Send it there.’ Rāma released the arrow. Where it struck, the land became a desert, and the robbers were destroyed. Then Rāma blessed that desert, and it became a land of healing herbs, sweet fruits and good pasture.",
    "‘కానీ ముందు,’ అన్నాడు రాముడు, ‘ఒకసారి సంధించిన ఈ బ్రహ్మాస్త్రం వృథా కాకూడదు. దాన్ని ఎక్కడికి పంపాలి?’ {samudra|సముద్రుడు} జవాబిచ్చాడు: ‘ఉత్తరాన ద్రుమకుల్యం అనే చోట దుష్టులైన దోపిడీదారులు ఉంటూ నా నీళ్ళు తాగుతున్నారు. అక్కడికి పంపండి.’ రాముడు బాణం వదిలాడు. అది తగిలిన చోట భూమి ఎడారిగా మారింది, దోపిడీదారులు నశించారు. తర్వాత రాముడు ఆ ఎడారిని దీవించాడు; అది ఔషధ మొక్కలు, తియ్యని పండ్లు, మంచి పచ్చిక గల ప్రదేశంగా మారింది."],
   ["p", "Then Samudra said, ‘Among your vānaras is {nala|Nala}, the son of Viśvakarmā, the architect of the gods. He has his father's skill. Let him build a bridge across me, and I will hold it up. I will keep my waves still and my creatures quiet.’ Nala stepped forward. ‘The Ocean speaks the truth. My mother was given a boon that her son would be equal to Viśvakarmā. I did not speak of it until now, because no one asked me. I will build the bridge.’"
   , "తర్వాత సముద్రుడు అన్నాడు: ‘మీ వానరుల్లో దేవశిల్పి విశ్వకర్మ కుమారుడైన {nala|నలుడు} ఉన్నాడు. అతనికి తండ్రి నైపుణ్యం ఉంది. నా మీద వారధి కట్టనివ్వండి; నేను దాన్ని నిలబెడతాను. నా అలలను నిశ్చలంగా, నా జీవులను నిశ్శబ్దంగా ఉంచుతాను.’ నలుడు ముందుకొచ్చాడు. ‘సముద్రుడు నిజం చెప్పాడు. తన కొడుకు విశ్వకర్మకు సమానుడవుతాడని మా అమ్మకు వరం ఉంది. ఎవరూ అడగలేదు కాబట్టి ఇంతవరకు చెప్పలేదు. నేను వారధి కడతాను.’"]
  ],
  [
   ["p", "At once the whole vānara army went to work. Thousands of vānaras rushed into the forests and tore up trees — sāla, palm, coconut, mango, aśoka — and huge rocks and even small mountains, and carried them to the shore. Some held long cords to measure straight lines; some carried poles; Nala placed every tree and stone with skill. The noise of the work drowned out the roar of the sea.",
    "వెంటనే వానర సేన అంతా పనిలో దిగింది. వేలాది వానరులు అడవుల్లోకి పరుగెత్తి చెట్లు పెకలించారు — సాల, తాటి, కొబ్బరి, మామిడి, అశోక — భారీ బండరాళ్ళు, చిన్న కొండలు కూడా తీరానికి మోసుకొచ్చారు. కొందరు సరళ రేఖలు కొలవడానికి పొడవాటి తాళ్ళు పట్టుకున్నారు; కొందరు గడలు మోశారు; నలుడు ప్రతి చెట్టునూ రాయినీ నేర్పుగా పేర్చాడు. పని చప్పుడు సముద్ర ఘోషను మించిపోయింది."],
   ["p", "On the first day they built fourteen yojanas; on the second, twenty; on the third, twenty-one; on the fourth, twenty-two; and on the fifth, twenty-three — until the bridge, ten yojanas wide and a hundred long, reached Laṅkā. It stretched across the sea ‘like the parting line in a woman's hair’. The gods and sages watched from the sky in wonder, and said that such a thing had never been done before.",
    "మొదటి రోజు పద్నాలుగు యోజనాలు కట్టారు; రెండో రోజు ఇరవై; మూడో రోజు ఇరవై ఒకటి; నాలుగో రోజు ఇరవై రెండు; ఐదో రోజు ఇరవై మూడు — పది యోజనాల వెడల్పు, వంద యోజనాల పొడవు గల వారధి లంకను చేరేవరకు. అది ‘స్త్రీ జుట్టులో పాపిడిలా’ సముద్రం మీద పరుచుకుంది. దేవతలు, మునులు ఆకాశం నుండి ఆశ్చర్యంగా చూసి, ఇలాంటిది ఇంతకుముందు ఎన్నడూ జరగలేదన్నారు."]
  ],
  [
   ["p", "Then the army crossed. Rāma rode on {hanuman|Hanumān}'s shoulders and Lakṣmaṇa on {angada|Aṅgada}'s. Some vānaras walked on the bridge, some leapt into the sea and swam, some flew through the air. Their roar shook Laṅkā. On the far shore, Rāma set up camp near a mountain, with good water and fruit, and the vānaras stood ready for war.",
    "తర్వాత సేన దాటింది. రాముడు {hanuman|హనుమంతుని} భుజాల మీద, లక్ష్మణుడు {angada|అంగదుని} భుజాల మీద కూర్చున్నారు. కొందరు వానరులు వారధి మీద నడిచారు, కొందరు సముద్రంలో దూకి ఈదారు, కొందరు ఆకాశంలో ఎగిరారు. వారి గర్జనకు లంక కంపించింది. అవతలి తీరంలో మంచి నీరు, పండ్లు ఉన్న ఒక పర్వతం దగ్గర రాముడు శిబిరం వేశాడు; వానరులు యుద్ధానికి సిద్ధంగా నిలిచారు."],
   ["more", "The squirrel and Rāmeśvaram", "ఉడుత, రామేశ్వరం", "Later tellings", "తర్వాతి కథనాలు", [
    ["p", "The loved story of the little squirrel who rolled in sand to help build the bridge, and whom Rāma stroked, leaving three stripes on its back, is a later folk telling — it is not in Vālmīki. Many later Rāmāyaṇas also say Rāma worshipped Śiva at Rāmeśvaram before crossing. Vālmīki's own text mentions, on the flight home, that this was the place where Mahādeva showed Rāma his grace.",
     "వారధి కట్టడంలో సాయం చేయడానికి ఇసుకలో దొర్లిన చిన్న ఉడుత, దాని వీపు నిమిరిన రాముడు, ఆ వీపు మీది మూడు చారల కథ — ప్రియమైనదే అయినా తర్వాతి జానపద కథనం; వాల్మీకిలో లేదు. దాటే ముందు రాముడు రామేశ్వరంలో శివుణ్ణి పూజించాడని కూడా చాలా తర్వాతి రామాయణాలు చెబుతాయి. తిరుగు ప్రయాణంలో, ఇది మహాదేవుడు రామునిపై అనుగ్రహం చూపిన చోటని వాల్మీకి గ్రంథమే ప్రస్తావిస్తుంది."]
   ]]
  ]
 ],
 remember: [
  ["The Ocean god said Nala, son of Viśvakarmā, could build a bridge.", "విశ్వకర్మ కుమారుడైన నలుడు వారధి కట్టగలడని సముద్రుడు చెప్పాడు."],
  ["The vānaras built the hundred-yojana bridge in five days.", "వానరులు వంద యోజనాల వారధిని ఐదు రోజుల్లో కట్టారు."],
  ["The whole army crossed to Laṅkā; the squirrel story is a later folk telling.", "సేన అంతా లంకకు దాటింది; ఉడుత కథ తర్వాతి జానపద కథనం."]
 ],
 think: ["Nala had a great skill but never mentioned it until he was asked. What talents might people around you have that nobody has asked about?", "నలునికి గొప్ప నైపుణ్యం ఉన్నా అడిగేవరకు చెప్పలేదు. ఎవరూ అడగని ఏ ప్రతిభలు మీ చుట్టూ ఉన్నవారిలో ఉండవచ్చు?"]
},
{
 id: "yuddha-7", kanda: "yuddha", n: 7, order: 607, date: "2026-10-21",
 title: "Spies and a False Head", titleTe: "గూఢచారులు, మాయా శిరస్సు", sargas: "23–35", scene: "night",
 who: ["shukaspy", "vibhishana", "rama", "ravana", "sita", "sarama", "malyavan"],
 pages: [
  [
   ["p", "Rāvaṇa sent two spies, {shukaspy|Śuka} and Sāraṇa, disguised as vānaras, to count Rāma's army. {vibhishana|Vibhīṣaṇa} recognised them and brought them to Rāma. They trembled, expecting death. But {rama|Rāma} smiled. ‘Have you seen everything? If not, Vibhīṣaṇa will show you the rest. Then go back and tell Rāvaṇa: “The strength you trusted when you stole Sītā — show it now. Tomorrow you will see my arrows fall on Laṅkā.”’ The spies went back amazed, and told {ravana|Rāvaṇa}, ‘Make peace with Rāma. His army cannot be defeated.’",
    "రాముని సైన్యాన్ని లెక్కపెట్టడానికి రావణుడు {shukaspy|శుకుడు}, సారణుడు అనే ఇద్దరు గూఢచారులను వానరుల వేషంలో పంపాడు. {vibhishana|విభీషణుడు} వారిని గుర్తించి రాముని దగ్గరకు తీసుకొచ్చాడు. చావు తప్పదని వారు వణికిపోయారు. కానీ {rama|రాముడు} నవ్వాడు. ‘అంతా చూశారా? లేకపోతే మిగిలింది విభీషణుడు చూపిస్తాడు. తర్వాత వెళ్ళి రావణునితో చెప్పండి: “సీతను దొంగిలించినప్పుడు నమ్ముకున్న బలాన్ని ఇప్పుడు చూపించు. రేపు లంక మీద నా బాణాలు పడడం చూస్తావు.”’ గూఢచారులు ఆశ్చర్యంతో తిరిగి వెళ్ళి {ravana|రావణునితో}, ‘రామునితో సంధి చేసుకోండి. అతని సైన్యాన్ని ఓడించలేం,’ అన్నారు."],
   ["p", "Rāvaṇa climbed a tall tower and the spies pointed out the vānara leaders one by one: ‘That is Nīla, the commander; that is Aṅgada, Vāli's son; that is Hanumān who burned Laṅkā; that is old Jāmbavān, king of the bears; there are Sugrīva, Lakṣmaṇa and Rāma, and beside them, your brother Vibhīṣaṇa.’ Rāvaṇa was furious that his spies praised the enemy, and drove them away."
   , "రావణుడు ఎత్తైన గోపురం ఎక్కాడు; గూఢచారులు వానర నాయకులను ఒక్కొక్కరిని చూపించారు: ‘అతను సేనాపతి నీలుడు; అతను వాలి కొడుకు అంగదుడు; అతను లంకను తగలబెట్టిన హనుమంతుడు; అతను భల్లూకరాజు వృద్ధ జాంబవంతుడు; అక్కడ సుగ్రీవుడు, లక్ష్మణుడు, రాముడు; వారి పక్కన మీ తమ్ముడు విభీషణుడు.’ తన గూఢచారులు శత్రువును పొగిడినందుకు రావణుడు కోపించి వారిని వెళ్ళగొట్టాడు."]
  ],
  [
   ["p", "Then Rāvaṇa tried a cruel trick. He called a magician named Vidyujjihva and had him make a false head that looked exactly like Rāma's, and a bow like Rāma's. Rāvaṇa went to {sita|Sītā} and said, ‘Your Rāma is dead. My general Prahasta killed him in his sleep. Here is his head, and his bow.’ When Sītā saw the head, she fell to the ground and wept bitterly. ‘O Rāma, you came all this way for me, and you died for me. Rāvaṇa, kill me too, and put me by my husband's side.’",
    "తర్వాత రావణుడు ఒక క్రూరమైన మాయ పన్నాడు. విద్యుజ్జిహ్వుడు అనే మాయావిని పిలిచి, సరిగ్గా రాముని తలలాగే కనిపించే మాయా శిరస్సును, రాముని విల్లులాంటి విల్లును చేయించాడు. రావణుడు {sita|సీత} దగ్గరకు వెళ్ళి, ‘నీ రాముడు చనిపోయాడు. నా సేనాపతి ప్రహస్తుడు నిద్రలో చంపాడు. ఇదిగో అతని తల, అతని విల్లు,’ అన్నాడు. ఆ తల చూసి సీత నేల మీద పడి వెక్కి వెక్కి ఏడ్చింది. ‘ఓ రామా, నా కోసం ఇంత దూరం వచ్చి, నా కోసం ప్రాణం విడిచావా. రావణా, నన్నూ చంపి నా భర్త పక్కన పెట్టు.’"],
   ["p", "Just then a messenger called Rāvaṇa away to an urgent council, and the moment he left, the head and the bow vanished. Vibhīṣaṇa's kind wife {sarama|Saramā}, who was one of Sītā's companions, hurried to her. ‘Do not grieve, dear Sītā. It was only magic. Rāma is alive and well; he has crossed the sea with his army. Listen — can you hear the drums and the roaring of the vānaras? Rāvaṇa's army is trembling. Soon you will be free.’ Sītā's tears turned to hope."
   , "సరిగ్గా అప్పుడు ఒక దూత అత్యవసర మంత్రాంగానికి రావణుణ్ణి పిలిచాడు; అతను వెళ్ళిన క్షణమే ఆ తల, విల్లు మాయమయ్యాయి. సీత చెలికత్తెల్లో ఒకతె అయిన విభీషణుని దయగల భార్య {sarama|సరమ} ఆమె దగ్గరకు పరుగెత్తింది. ‘సీతమ్మా, దుఃఖించకు. అది కేవలం మాయ. రాముడు బతికే ఉన్నాడు, క్షేమంగా ఉన్నాడు; సైన్యంతో సముద్రం దాటాడు. విను — డప్పులు, వానరుల గర్జనలు వినిపిస్తున్నాయా? రావణుని సైన్యం వణికిపోతోంది. త్వరలోనే నువ్వు విముక్తురాలవుతావు.’ సీత కన్నీళ్ళు ఆశగా మారాయి."]
  ],
  [
   ["p", "Saramā even went secretly to listen at Rāvaṇa's council, and came back to tell Sītā what she had heard. Rāvaṇa's mother and his old minister Aviddha had begged him to return Sītā. And Rāvaṇa's grand-uncle, wise old {malyavan|Mālyavān}, had told him: ‘A king who ignores dharma is destroyed. Since you took Sītā, terrible omens appear everywhere. Make peace with Rāma.’ But Rāvaṇa answered, ‘I would rather break in two than bow to anyone. That is my nature.’",
    "సరమ రహస్యంగా రావణుని మంత్రాంగం దగ్గరకు వెళ్ళి విని, విన్నది సీతకు చెప్పింది. రావణుని తల్లి, వృద్ధ మంత్రి అవిద్ధుడు సీతను అప్పగించమని బతిమాలారు. రావణుని తాత వరుస, వృద్ధ జ్ఞాని {malyavan|మాల్యవంతుడు} అతనితో, ‘ధర్మాన్ని విస్మరించే రాజు నశిస్తాడు. నువ్వు సీతను తెచ్చినప్పటి నుండి అన్నిచోట్లా భయంకర అపశకునాలు కనిపిస్తున్నాయి. రామునితో సంధి చేసుకో,’ అని చెప్పాడు. కానీ రావణుడు, ‘ఎవరికైనా తలవంచడం కంటే రెండు ముక్కలుగా విరిగిపోవడమే మేలు. అది నా స్వభావం,’ అని జవాబిచ్చాడు."],
   ["dyk", "🌼", "Saramā is one of the quiet heroes of the Rāmāyaṇa — a rākṣasī who chose kindness. Not every rākṣasa in the story was wicked: Vibhīṣaṇa, Saramā, Trijaṭā and Mālyavān all spoke for what was right.",
    "సరమ రామాయణంలోని నిశ్శబ్ద వీరుల్లో ఒకతె — దయను ఎంచుకున్న రాక్షసి. కథలో ప్రతి రాక్షసుడూ దుష్టుడు కాదు: విభీషణుడు, సరమ, త్రిజట, మాల్యవంతుడు — అందరూ ధర్మం కోసం మాట్లాడారు."]
  ]
 ],
 remember: [
  ["Rāma freed Rāvaṇa's spies and even let them see his whole army.", "రాముడు రావణుని గూఢచారులను విడిచిపెట్టి, తన సైన్యాన్నంతా చూడనిచ్చాడు."],
  ["Rāvaṇa showed Sītā a magic head of Rāma to break her spirit.", "సీత మనసు విరగ్గొట్టడానికి రావణుడు రాముని మాయా శిరస్సు చూపించాడు."],
  ["Kind Saramā told Sītā it was only magic and that Rāma was near.", "అది కేవలం మాయ అని, రాముడు దగ్గరలోనే ఉన్నాడని దయగల సరమ సీతకు చెప్పింది."]
 ],
 think: ["Saramā lived in Rāvaṇa's city but chose to comfort Sītā. How can one kind person make a difference even in a hard place?", "సరమ రావణుని నగరంలో ఉంటూనే సీతను ఊరడించాలని ఎంచుకుంది. కష్టమైన చోట కూడా ఒక్క దయగల వ్యక్తి ఎలా మార్పు తేగలరు?"]
},
{
 id: "yuddha-8", kanda: "yuddha", n: 8, order: 608, date: "2026-10-21",
 title: "Aṅgada the Envoy", titleTe: "అంగద రాయబారం", sargas: "36–41", scene: "lanka",
 who: ["rama", "sugriva", "ravana", "angada"],
 pages: [
  [
   ["p", "Rāma climbed Mount Suvela with his friends to look at Laṅkā. The city shone on Trikūṭa like a city in the sky, with gardens full of birds and music. And on top of the great gate-tower they saw {ravana|Rāvaṇa} himself, with his ministers, under a white umbrella, his ten heads crowned, like a dark cloud lit by lightning.",
    "లంకను చూడడానికి రాముడు తన మిత్రులతో సువేల పర్వతం ఎక్కాడు. పక్షులు, సంగీతంతో నిండిన తోటలతో త్రికూటం మీద ఆ నగరం ఆకాశంలోని నగరంలా మెరిసింది. పెద్ద ద్వార గోపురం మీద, మంత్రులతో, తెల్లని గొడుగు కింద, కిరీటాలు ధరించిన పది తలలతో, మెరుపులు మెరిసే నల్లని మేఘంలా స్వయంగా {ravana|రావణుడు} కనిపించాడు."],
   ["p", "The moment {sugriva|Sugrīva} saw Rāvaṇa, anger blazed up in him. Without a word he leapt from the mountain straight onto the tower. ‘I am the friend and servant of Rāma! You will not escape me today!’ He knocked Rāvaṇa's crown off and the two wrestled fiercely on the tower top, rolling, grappling, striking. When Rāvaṇa began to use his magic, Sugrīva sprang back into the sky and returned to Rāma's side."
   , "రావణుణ్ణి చూడగానే {sugriva|సుగ్రీవుని}లో కోపం రగిలింది. ఒక్క మాటైనా లేకుండా పర్వతం నుండి నేరుగా గోపురం మీదకు దూకాడు. ‘నేను రాముని మిత్రుణ్ణి, దాసుణ్ణి! ఈ రోజు నువ్వు నా నుండి తప్పించుకోలేవు!’ రావణుని కిరీటం పడగొట్టాడు; ఇద్దరూ గోపురం పైన దొర్లుతూ, పెనుగులాడుతూ, కొట్టుకుంటూ భీకరంగా కుస్తీ పట్టారు. రావణుడు మాయ ప్రయోగించడం మొదలుపెట్టగానే సుగ్రీవుడు ఆకాశంలోకి ఎగిరి రాముని పక్కకు తిరిగి వచ్చాడు."]
  ],
  [
   ["p", "Rāma embraced him but scolded him lovingly. ‘Sugrīva, a king should not take such risks without consulting his friends. If something had happened to you, what use would Sītā, Bharata, Lakṣmaṇa or my own life be to me? I had decided that if you did not return, I would kill Rāvaṇa, crown Vibhīṣaṇa, give your kingdom to Aṅgada and give up my life.’ Sugrīva bowed: ‘When I saw the one who stole your wife, I could not hold myself back.’",
    "రాముడు అతన్ని ఆలింగనం చేసుకుని ప్రేమగా మందలించాడు. ‘సుగ్రీవా, మిత్రులతో చర్చించకుండా రాజు ఇలాంటి సాహసాలు చేయకూడదు. నీకేమైనా అయి ఉంటే సీత, భరతుడు, లక్ష్మణుడు, నా ప్రాణం — ఏం లాభం? నువ్వు తిరిగి రాకపోతే రావణుణ్ణి చంపి, విభీషణుణ్ణి పట్టాభిషిక్తుణ్ణి చేసి, నీ రాజ్యాన్ని అంగదునికి ఇచ్చి, నా ప్రాణం విడవాలని నిర్ణయించుకున్నాను.’ సుగ్రీవుడు నమస్కరించాడు: ‘మీ భార్యను దొంగిలించినవాణ్ణి చూడగానే నన్ను నేను ఆపుకోలేకపోయాను.’"],
   ["p", "Rāma arranged his army around the four gates of Laṅkā — Nīla at the east, Aṅgada at the south, Hanumān at the west, and himself with Lakṣmaṇa at the north, where Rāvaṇa stood. Then, following the old rule that one must offer peace before war, he sent {angada|Aṅgada} as his envoy. Aṅgada leapt over the walls into Rāvaṇa's hall and spoke boldly: ‘Rāma says: you have done great wrong to the sages, the gods and to me. Come out and fight, or return Sītā and beg forgiveness. If not, I will rid the world of rākṣasas, and Vibhīṣaṇa will rule Laṅkā.’",
    "రాముడు తన సైన్యాన్ని లంక నాలుగు ద్వారాల చుట్టూ మోహరించాడు — తూర్పున నీలుడు, దక్షిణాన అంగదుడు, పశ్చిమాన హనుమంతుడు, రావణుడు ఉన్న ఉత్తరాన లక్ష్మణునితో తాను. తర్వాత యుద్ధానికి ముందు సంధి అవకాశం ఇవ్వాలనే ప్రాచీన నియమం ప్రకారం {angada|అంగదుణ్ణి} రాయబారిగా పంపాడు. అంగదుడు ప్రాకారం దూకి రావణుని సభలో ప్రవేశించి ధైర్యంగా చెప్పాడు: ‘రాముడు చెబుతున్నాడు: మునులకు, దేవతలకు, నాకు నువ్వు ఘోర అపచారం చేశావు. బయటకు వచ్చి యుద్ధం చెయ్యి, లేదా సీతను అప్పగించి క్షమాపణ వేడుకో. లేకపోతే లోకాన్ని రాక్షసులు లేకుండా చేస్తాను; లంకను విభీషణుడు పాలిస్తాడు.’"]
  ],
  [
   ["p", "Rāvaṇa shouted, ‘Seize him! Kill him!’ Four rākṣasas grabbed Aṅgada by the arms. Aṅgada let them hold him, then sprang up into the air carrying all four, shook them off so that they fell before Rāvaṇa, and landed on the roof of the palace. With one stamp of his foot he broke off its pinnacle, as Indra once broke the peak of the Himālaya. Then, roaring his name, he flew back to Rāma. The war was about to begin.",
    "‘పట్టుకోండి! చంపండి!’ అని రావణుడు అరిచాడు. నలుగురు రాక్షసులు అంగదుని చేతులు పట్టుకున్నారు. అంగదుడు వారు పట్టుకోనిచ్చి, నలుగురినీ మోసుకుంటూ గాలిలోకి ఎగిరి, వారిని రావణుని ముందు పడేలా విదిలించి, అంతఃపురం కప్పు మీద దిగాడు. ఒకప్పుడు ఇంద్రుడు హిమాలయ శిఖరాన్ని విరిచినట్టు, కాలితో ఒక్కసారి తొక్కి దాని శిఖరాన్ని విరగ్గొట్టాడు. తర్వాత తన పేరు గర్జిస్తూ రాముని దగ్గరకు ఎగిరి వచ్చాడు. యుద్ధం మొదలవబోతోంది."],
   ["dyk", "🦶", "In later Rāmāyaṇas — Kamban's Tamil and Tulasīdās's Hindi — Aṅgada plants his foot in Rāvaṇa's court and challenges anyone to move it, and no one can. Vālmīki's own version is the one told here.",
    "తర్వాతి రామాయణాల్లో — కంబన్ తమిళ, తులసీదాస్ హిందీ రామాయణాల్లో — అంగదుడు రావణుని సభలో పాదం నాటి, దాన్ని కదిలించమని సవాలు చేస్తాడు; ఎవరూ కదిలించలేరు. ఇక్కడ చెప్పింది వాల్మీకి కథనం."]
  ]
 ],
 remember: [
  ["Sugrīva leapt onto Rāvaṇa's tower and wrestled him; Rāma scolded him for the risk.", "సుగ్రీవుడు రావణుని గోపురం మీదకు దూకి కుస్తీ పట్టాడు; ఆ సాహసానికి రాముడు మందలించాడు."],
  ["Rāma placed his army at Laṅkā's four gates.", "రాముడు తన సైన్యాన్ని లంక నాలుగు ద్వారాల దగ్గర మోహరించాడు."],
  ["Aṅgada went as envoy to offer peace one last time, and broke the palace pinnacle.", "చివరిసారి సంధి ప్రతిపాదించడానికి అంగదుడు రాయబారిగా వెళ్ళి, అంతఃపుర శిఖరాన్ని విరగ్గొట్టాడు."]
 ],
 think: ["Even on the edge of war, Rāma sent an envoy to offer peace. Why should we always try to settle a quarrel peacefully first?", "యుద్ధం అంచున ఉన్నప్పుడు కూడా రాముడు సంధి కోసం రాయబారిని పంపాడు. గొడవను ముందు శాంతియుతంగా పరిష్కరించడానికి ఎందుకు ప్రయత్నించాలి?"]
}
]);
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "yuddha-9", kanda: "yuddha", n: 9, order: 609, date: "2026-10-21",
 title: "The Battle Begins", titleTe: "యుద్ధారంభం", sargas: "42–44", scene: "weapons",
 who: ["ravana", "angada", "indrajit", "hanuman", "nila", "lakshmana", "rama"],
 pages: [
  [
   ["p", "When Aṅgada returned, {ravana|Rāvaṇa} ordered his army out. Drums thundered from every gate of Laṅkā; conches blared; the rākṣasas poured out in chariots and on elephants and horses, with swords, spears, maces and axes. The vānaras roared ‘Victory to Rāma! Victory to Lakṣmaṇa! Victory to Sugrīva!’ and rushed at the walls with trees and rocks, climbing the golden ramparts, filling the moats, smashing the gates.",
    "అంగదుడు తిరిగి రాగానే {ravana|రావణుడు} తన సైన్యాన్ని బయటకు పంపాడు. లంక ప్రతి ద్వారం నుండీ డప్పులు ఉరిమాయి; శంఖాలు మోగాయి; రాక్షసులు రథాల మీద, ఏనుగుల మీద, గుర్రాల మీద కత్తులు, శూలాలు, గదలు, గొడ్డళ్ళతో వరదలా బయటకు వచ్చారు. వానరులు ‘రామునికి జయం! లక్ష్మణునికి జయం! సుగ్రీవునికి జయం!’ అని గర్జిస్తూ చెట్లు, రాళ్ళతో ప్రాకారాల వైపు దూసుకెళ్ళి, బంగారు బురుజులు ఎక్కి, అగడ్తలు నింపి, ద్వారాలు పగలగొట్టారు."],
   ["p", "The battle turned into a hundred duels. {angada|Aṅgada} fought {indrajit|Indrajit} and smashed his chariot and horses with a tree. {hanuman|Hanumān} killed a rākṣasa named Jambumālī. {nila|Nīla} fought Nikumbha; Sugrīva fought Praghasa; {lakshmana|Lakṣmaṇa} fought Virūpākṣa. {rama|Rāma} himself cut down four great rākṣasa warriors with arrows like flames. Blood flowed like rivers, and the dust of battle hid the sun.",
    "యుద్ధం వంద ద్వంద్వ యుద్ధాలుగా మారింది. {angada|అంగదుడు} {indrajit|ఇంద్రజిత్తుతో} పోరాడి ఒక చెట్టుతో అతని రథాన్ని, గుర్రాలను నుగ్గునుగ్గు చేశాడు. {hanuman|హనుమంతుడు} జంబుమాలి అనే రాక్షసుణ్ణి చంపాడు. {nila|నీలుడు} నికుంభునితో, సుగ్రీవుడు ప్రఘసునితో, {lakshmana|లక్ష్మణుడు} విరూపాక్షునితో యుద్ధం చేశారు. {rama|రాముడు} స్వయంగా మంటల్లాంటి బాణాలతో నలుగురు గొప్ప రాక్షస వీరులను కూల్చాడు. రక్తం నదుల్లా ప్రవహించింది; యుద్ధ ధూళి సూర్యుణ్ణి కప్పేసింది."]
  ],
  [
   ["p", "The fighting went on even after sunset. In the darkness, the rākṣasas grew stronger, for night is their time. The two armies could only tell friend from enemy by shouting: ‘Are you a rākṣasa?’ ‘Are you a vānara?’ Torches flared, weapons flashed, and the noise was so great that it seemed the whole world was ending. Rāma, unseen in the dark, shot arrows by sound alone and cut down rākṣasa after rākṣasa.",
    "సూర్యాస్తమయం తర్వాత కూడా యుద్ధం కొనసాగింది. చీకటిలో రాక్షసులు మరింత బలపడ్డారు — రాత్రి వారి సమయం. ‘నువ్వు రాక్షసుడివా?’ ‘నువ్వు వానరుడివా?’ అని అరిచి మాత్రమే మిత్రులెవరో శత్రువులెవరో గుర్తుపట్టగలిగారు. కాగడాలు మండాయి, ఆయుధాలు మెరిశాయి; లోకమే అంతమవుతోందా అన్నంత చప్పుడు. చీకటిలో కనబడని రాముడు శబ్దం బట్టే బాణాలు వేసి ఒకరి తర్వాత ఒకరిగా రాక్షసులను కూల్చాడు."],
   ["p", "Indrajit, ashamed that Aṅgada had beaten him, used his magic to become invisible. Hidden in the clouds, he began to rain arrows like thunderbolts on the vānara army. No one could see where they came from. Indrajit was preparing his most terrible trick of all.",
    "అంగదుడు తనను ఓడించినందుకు సిగ్గుపడిన ఇంద్రజిత్తు మాయతో అదృశ్యమయ్యాడు. మేఘాల్లో దాక్కుని వానర సేన మీద పిడుగుల్లాంటి బాణాల వర్షం కురిపించడం మొదలుపెట్టాడు. అవి ఎక్కడి నుండి వస్తున్నాయో ఎవరూ చూడలేకపోయారు. ఇంద్రజిత్తు తన అత్యంత భయంకరమైన మాయకు సిద్ధమవుతున్నాడు."]
  ],
  [
   ["p", "Vālmīki describes the battlefield like a river: the fallen chariots its sandbanks, the elephants its rocks, the spears its fishes, the banners its foam. It is a picture of how terrible war is, even when it is fought for a just cause.",
    "వాల్మీకి యుద్ధభూమిని ఒక నదిలా వర్ణిస్తాడు: కూలిన రథాలే దాని ఇసుకతిన్నెలు, ఏనుగులే బండరాళ్ళు, శూలాలే చేపలు, ధ్వజాలే నురగ. న్యాయమైన కారణం కోసం జరిగినా యుద్ధం ఎంత భయంకరమైనదో చూపే చిత్రం ఇది."],
   ["dyk", "🌙", "In the old rules of war, battles stopped at sunset. But in the Rāmāyaṇa and the Mahābhārata, there are night battles too — and they are always described as the most frightening.",
    "ప్రాచీన యుద్ధ నియమాల ప్రకారం సూర్యాస్తమయంతో యుద్ధం ఆగిపోవాలి. కానీ రామాయణ మహాభారతాల్లో రాత్రి యుద్ధాలు కూడా ఉన్నాయి — వాటిని ఎప్పుడూ అత్యంత భయానకంగా వర్ణిస్తారు."]
  ]
 ],
 remember: [
  ["The vānaras stormed Laṅkā's walls, shouting victory to Rāma.", "వానరులు రాముని జయధ్వానాలతో లంక ప్రాకారాలపై దాడి చేశారు."],
  ["The battle became many duels; Aṅgada smashed Indrajit's chariot.", "యుద్ధం ఎన్నో ద్వంద్వ యుద్ధాలుగా మారింది; అంగదుడు ఇంద్రజిత్తు రథాన్ని నుగ్గు చేశాడు."],
  ["The fighting continued into the night, and Indrajit became invisible.", "యుద్ధం రాత్రి వరకు సాగింది; ఇంద్రజిత్తు అదృశ్యమయ్యాడు."]
 ],
 think: ["Vālmīki shows war as terrible even when the cause is just. Why do you think the poet did not make battle look like fun?", "కారణం న్యాయమైనదైనా యుద్ధం భయంకరమైనదే అని వాల్మీకి చూపిస్తాడు. కవి యుద్ధాన్ని సరదాగా ఎందుకు చూపించలేదని మీరు అనుకుంటున్నారు?"]
},
{
 id: "yuddha-10", kanda: "yuddha", n: 10, order: 610, date: "2026-10-21",
 title: "The Serpent Arrows", titleTe: "నాగపాశం", sargas: "45–50", scene: "night",
 who: ["indrajit", "rama", "lakshmana", "sita", "trijata", "sushena", "garuda"],
 pages: [
  [
   ["p", "From inside the clouds, {indrajit|Indrajit} shot arrows that turned into serpents. They wrapped themselves around {rama|Rāma} and {lakshmana|Lakṣmaṇa}, binding them from head to foot. Pierced all over, the two brothers fell to the ground on a bed of arrows, unconscious. The vānaras gathered round them in despair; Sugrīva wept, and the whole army stood still with grief. Indrajit laughed from the sky: ‘The two who killed Khara and Dūṣaṇa are dead!’ and went back to tell his father.",
    "మేఘాల లోపలి నుండి {indrajit|ఇంద్రజిత్తు} పాములుగా మారే బాణాలు వేశాడు. అవి {rama|రాముని}, {lakshmana|లక్ష్మణుని} చుట్టుకుని తల నుండి కాళ్ళ వరకు బంధించాయి. ఒళ్ళంతా గుచ్చుకుని ఇద్దరు అన్నదమ్ములు బాణాల పాన్పు మీద స్పృహ తప్పి పడిపోయారు. వానరులు నిరాశతో వారి చుట్టూ చేరారు; సుగ్రీవుడు ఏడ్చాడు; సేన అంతా దుఃఖంతో స్తంభించిపోయింది. ‘ఖరదూషణులను చంపిన ఇద్దరూ చచ్చారు!’ అని ఆకాశం నుండి నవ్వుతూ ఇంద్రజిత్తు తండ్రికి చెప్పడానికి వెళ్ళాడు."],
   ["p", "Rāvaṇa was overjoyed. He ordered the rākṣasīs to take {sita|Sītā} in the Puṣpaka chariot over the battlefield, so that she would see her husband lying dead and give up hope. When Sītā saw Rāma and Lakṣmaṇa lying on the ground covered in arrows, she cried out in anguish. ‘The fortune-tellers said I would never be a widow. They said I would be a queen. Were all their words false?’"
   , "రావణుడు ఆనందంతో ఉప్పొంగిపోయాడు. తన భర్త చచ్చిపడి ఉండడం చూసి సీత ఆశ వదులుకోవాలని, ఆమెను పుష్పక విమానంలో యుద్ధభూమి మీదుగా తీసుకెళ్ళమని రాక్షసులకు ఆజ్ఞాపించాడు. బాణాలతో కప్పబడి నేల మీద పడి ఉన్న రామలక్ష్మణులను చూసి సీత ఆవేదనతో అరిచింది. ‘నేను ఎన్నడూ విధవను కానని జ్యోతిష్కులు చెప్పారు. రాణినవుతానన్నారు. వారి మాటలన్నీ అబద్ధమేనా?’"]
  ],
  [
   ["p", "But good {trijata|Trijaṭā}, who was with her, said, ‘Do not grieve, Sītā. Look closely — their faces still shine; they have not lost their colour as the dead do. And see how the vānaras are guarding them, not running away as an army does when its leader is dead. Also, this Puṣpaka chariot would never carry a widow. Rāma and Lakṣmaṇa are alive.’ Sītā folded her hands and prayed that it might be so. Then she was taken back to the Aśoka grove.",
    "కానీ ఆమెతో ఉన్న మంచి {trijata|త్రిజట}, ‘సీతా, దుఃఖించకు. జాగ్రత్తగా చూడు — వారి ముఖాలు ఇంకా ప్రకాశిస్తున్నాయి; చనిపోయినవారిలా రంగు కోల్పోలేదు. నాయకుడు చనిపోతే సైన్యం పారిపోతుంది, కానీ వానరులు వారిని కాపాడుతూ నిలబడ్డారు చూడు. పైగా ఈ పుష్పక విమానం విధవను ఎన్నడూ మోయదు. రామలక్ష్మణులు బతికే ఉన్నారు,’ అంది. ఇది నిజం కావాలని సీత చేతులు జోడించి ప్రార్థించింది. తర్వాత ఆమెను అశోకవనానికి తిరిగి తీసుకెళ్ళారు."],
   ["p", "On the battlefield, Rāma woke first, though still bound. Seeing Lakṣmaṇa lying beside him, he wept: ‘What use is victory, or Sītā, or my life, if Lakṣmaṇa is gone? One can find a wife anywhere, but not a brother like Lakṣmaṇa. He followed me to the forest; I will follow him to the world of Yama.’ Sugrīva and the vānaras wept with him. {sushena|Suṣeṇa}, the wise vānara chief, said, ‘There are healing herbs on the mountains of the milk-ocean. Let Hanumān fetch them.’",
    "యుద్ధభూమిలో బంధంలో ఉన్నా రాముడు ముందుగా మేల్కొన్నాడు. పక్కన పడి ఉన్న లక్ష్మణుణ్ణి చూసి ఏడ్చాడు: ‘లక్ష్మణుడు లేకపోతే విజయం ఎందుకు, సీత ఎందుకు, నా ప్రాణం ఎందుకు? భార్య ఎక్కడైనా దొరకవచ్చు, కానీ లక్ష్మణుడి లాంటి తమ్ముడు దొరకడు. అతను నా వెంట అడవికి వచ్చాడు; నేను అతని వెంట యమలోకానికి వెళ్తాను.’ సుగ్రీవుడు, వానరులు అతనితో పాటు ఏడ్చారు. జ్ఞాని అయిన వానర నాయకుడు {sushena|సుషేణుడు}, ‘క్షీరసముద్రం దగ్గరి పర్వతాల మీద దివ్య ఔషధాలు ఉన్నాయి. హనుమంతుడు వాటిని తెస్తాడు,’ అన్నాడు."]
  ],
  [
   ["p", "Just then a great wind rose, the sea churned, and the mountains shook. Out of the sky came {garuda|Garuḍa}, king of the birds, blazing like fire. The moment the serpents saw their ancient enemy, they let go of Rāma and Lakṣmaṇa and fled. Garuḍa stroked the brothers' faces with his wings, and their wounds healed at once; they rose up stronger and more radiant than before. Garuḍa embraced Rāma. ‘I am your friend, your second life. Do not ask now how we are related — you will know when the battle is won.’ And he flew away.",
    "సరిగ్గా అప్పుడు పెద్ద గాలి లేచింది, సముద్రం అల్లకల్లోలమైంది, పర్వతాలు కంపించాయి. ఆకాశం నుండి అగ్నిలా ప్రకాశిస్తూ పక్షిరాజు {garuda|గరుత్మంతుడు} వచ్చాడు. తమ ప్రాచీన శత్రువును చూడగానే పాములు రామలక్ష్మణులను వదిలి పారిపోయాయి. గరుత్మంతుడు రెక్కలతో అన్నదమ్ముల ముఖాలు నిమరగానే గాయాలు మానిపోయాయి; వారు మునుపటికంటే బలంగా, తేజస్సుతో లేచారు. గరుత్మంతుడు రాముణ్ణి ఆలింగనం చేసుకున్నాడు. ‘నేను నీ మిత్రుణ్ణి, నీ రెండో ప్రాణాన్ని. మన బంధం ఏమిటో ఇప్పుడు అడగకు — యుద్ధం గెలిచాక తెలుస్తుంది.’ ఎగిరిపోయాడు."],
   ["dyk", "🦅", "Garuḍa is the vehicle of Viṣṇu — and Rāma is Viṣṇu on earth. That is the secret Garuḍa hints at but does not tell. The serpents fled because Garuḍa has been their enemy since the days of his mother Vinatā.",
    "గరుత్మంతుడు విష్ణువు వాహనం — రాముడు భూమి మీద విష్ణువే. గరుత్మంతుడు సూచించినా చెప్పని రహస్యం అదే. తల్లి వినత కాలం నుండి గరుత్మంతుడు నాగులకు శత్రువు కాబట్టి పాములు పారిపోయాయి."]
  ]
 ],
 remember: [
  ["Invisible Indrajit bound Rāma and Lakṣmaṇa with serpent arrows.", "అదృశ్యుడైన ఇంద్రజిత్తు నాగాస్త్రాలతో రామలక్ష్మణులను బంధించాడు."],
  ["Sītā was shown them from the Puṣpaka; Trijaṭā comforted her that they lived.", "పుష్పకం నుండి సీతకు వారిని చూపించారు; వారు బతికే ఉన్నారని త్రిజట ఊరడించింది."],
  ["Garuḍa came, the serpents fled, and the brothers were healed.", "గరుత్మంతుడు రాగానే పాములు పారిపోయాయి; అన్నదమ్ములు స్వస్థులయ్యారు."]
 ],
 think: ["Trijaṭā looked carefully at the signs instead of believing the worst at once. How can looking calmly at the facts help when we are frightened?", "త్రిజట వెంటనే చెడునే నమ్మకుండా గుర్తులను జాగ్రత్తగా చూసింది. మనం భయపడినప్పుడు ప్రశాంతంగా వాస్తవాలు చూడడం ఎలా సహాయపడుతుంది?"]
},
{
 id: "yuddha-11", kanda: "yuddha", n: 11, order: 611, date: "2026-10-21",
 title: "Rāvaṇa's Generals Fall", titleTe: "రావణ సేనానుల పతనం", sargas: "51–58", scene: "weapons",
 who: ["ravana", "hanuman", "angada", "prahasta", "nila"],
 pages: [
  [
   ["p", "When {ravana|Rāvaṇa} heard the vānaras roaring with joy and learned that Rāma and Lakṣmaṇa were free, his face went pale. He sent his general Dhūmrākṣa — ‘Smoke-eye’ — with a great army. As Dhūmrākṣa rode out, a vulture landed on his chariot and jackals howled: bad omens. He fought fiercely and killed many vānaras, until {hanuman|Hanumān} lifted a huge rock and hurled it. Dhūmrākṣa jumped from his chariot just in time, but Hanumān then pulled up a mountain peak and struck him down.",
    "వానరులు ఆనందంతో గర్జించడం విని, రామలక్ష్మణులు విముక్తులయ్యారని తెలిసి {ravana|రావణుని} ముఖం పాలిపోయింది. తన సేనాని ధూమ్రాక్షుణ్ణి — ‘పొగ కన్నులవాడు’ — పెద్ద సైన్యంతో పంపాడు. ధూమ్రాక్షుడు బయలుదేరుతుంటే అతని రథం మీద గద్ద వాలింది, నక్కలు ఊళ వేశాయి: అపశకునాలు. అతను భీకరంగా పోరాడి ఎందరో వానరులను చంపాడు; చివరికి {hanuman|హనుమంతుడు} భారీ బండరాయి ఎత్తి విసిరాడు. ధూమ్రాక్షుడు సమయానికి రథం నుండి దూకాడు, కానీ హనుమంతుడు ఒక పర్వత శిఖరం పెకలించి అతన్ని నేలకూల్చాడు."],
   ["p", "Next came Vajradaṃṣṭra — ‘Thunderbolt-tooth’ — riding at the head of a great host. He fought {angada|Aṅgada} with arrows, then with sword and shield. The two fought on foot until both were exhausted and bleeding, and at last Aṅgada struck off Vajradaṃṣṭra's head with his own sword. Then Rāvaṇa sent the old warrior Akampana — ‘the Unshakable’ — and he too was killed by Hanumān, who struck him with a tree."
   , "తర్వాత వజ్రదంష్ట్రుడు — ‘వజ్రాయుధం వంటి కోరలవాడు’ — పెద్ద సైన్యానికి ముందు వచ్చాడు. అంగదునితో బాణాలతో, తర్వాత కత్తి, డాలుతో పోరాడాడు. ఇద్దరూ అలసి రక్తసిక్తమయ్యేవరకు కాలినడకన యుద్ధం చేశారు; చివరికి {angada|అంగదుడు} వజ్రదంష్ట్రుని కత్తితోనే అతని తల నరికాడు. తర్వాత రావణుడు వృద్ధ వీరుడు అకంపనుణ్ణి — ‘కదలనివాడు’ — పంపాడు; అతను కూడా ఒక చెట్టుతో కొట్టిన హనుమంతుని చేతిలో హతమయ్యాడు."]
  ],
  [
   ["p", "Now Rāvaṇa turned to {prahasta|Prahasta}, his commander-in-chief. ‘The city is besieged. Only you, I, Kumbhakarṇa, Indrajit or Nikumbha can bear this burden. Go.’ Prahasta answered, ‘We advised you before to return Sītā, and you did not. But I have eaten your food and been honoured by you; I will give my life for you.’ He rode out with a mighty army, with omens of doom all around him.",
    "ఇప్పుడు రావణుడు తన సర్వసేనాధిపతి {prahasta|ప్రహస్తుని} వైపు తిరిగాడు. ‘నగరం ముట్టడిలో ఉంది. ఈ భారం నువ్వు, నేను, కుంభకర్ణుడు, ఇంద్రజిత్తు, నికుంభుడు మాత్రమే మోయగలం. వెళ్ళు.’ ప్రహస్తుడు జవాబిచ్చాడు: ‘సీతను అప్పగించమని ఇంతకుముందే సలహా ఇచ్చాం, మీరు వినలేదు. కానీ నేను మీ అన్నం తిన్నాను, మీ గౌరవం పొందాను; మీ కోసం ప్రాణం ఇస్తాను.’ చుట్టూ వినాశ శకునాలు కనిపిస్తుండగా మహాసైన్యంతో బయలుదేరాడు."],
   ["p", "Prahasta fought like the god of death, and the vānaras fell before him. Then {nila|Nīla}, the commander of the vānaras, stood up to face him. Prahasta's arrows struck Nīla, who shook them off ‘like a bull in autumn rain’. Nīla smashed Prahasta's chariot with a tree. Prahasta came at him with a club. At last Nīla lifted a huge rock and brought it down on Prahasta's head, and Rāvaṇa's commander fell dead, ‘like a tree cut at the root’.",
    "ప్రహస్తుడు యమునిలా పోరాడాడు; వానరులు అతని ముందు కూలిపోయారు. అప్పుడు వానర సేనాపతి {nila|నీలుడు} అతన్ని ఎదుర్కోవడానికి నిలబడ్డాడు. ప్రహస్తుని బాణాలు తగిలినా నీలుడు ‘శరత్కాల వానలో ఎద్దులా’ విదిలించుకున్నాడు. నీలుడు ఒక చెట్టుతో ప్రహస్తుని రథాన్ని ధ్వంసం చేశాడు. ప్రహస్తుడు గదతో దూసుకొచ్చాడు. చివరికి నీలుడు భారీ బండరాయి ఎత్తి ప్రహస్తుని తల మీద వేశాడు; రావణుని సేనాధిపతి ‘వేరుతో నరికిన చెట్టులా’ చచ్చిపడ్డాడు."]
  ],
  [
   ["p", "The rākṣasa army fled back into Laṅkā like water breaking from a dam. The vānaras gathered round Nīla and praised him. In the palace, Rāvaṇa listened in silence to the news. One by one his great generals had fallen. ‘I have ignored my enemies for too long,’ he said at last. ‘Now I will go out myself.’",
    "ఆనకట్ట తెగిన నీటిలా రాక్షస సైన్యం లంకలోకి పారిపోయింది. వానరులు నీలుని చుట్టూ చేరి పొగిడారు. అంతఃపురంలో రావణుడు మౌనంగా వార్త విన్నాడు. ఒక్కొక్కరుగా అతని గొప్ప సేనానులు పడిపోయారు. ‘శత్రువులను చాలాకాలం నిర్లక్ష్యం చేశాను,’ అన్నాడు చివరికి. ‘ఇప్పుడు నేనే స్వయంగా వెళ్తాను.’"],
   ["dyk", "⚖️", "Prahasta, like Kumbhakarṇa, knew Rāvaṇa was wrong but fought for him out of loyalty. The Rāmāyaṇa asks a hard question: is loyalty a virtue when it serves a wrong cause?",
    "కుంభకర్ణునిలాగే ప్రహస్తునికి కూడా రావణుడు తప్పు చేశాడని తెలుసు, అయినా విధేయతతో అతని కోసం పోరాడాడు. రామాయణం ఒక కఠిన ప్రశ్న అడుగుతుంది: తప్పుడు పక్షానికి సేవ చేసే విధేయత సద్గుణమా?"]
  ]
 ],
 remember: [
  ["Hanumān killed Dhūmrākṣa and Akampana; Aṅgada killed Vajradaṃṣṭra.", "హనుమంతుడు ధూమ్రాక్షుణ్ణి, అకంపనుణ్ణి చంపాడు; అంగదుడు వజ్రదంష్ట్రుణ్ణి చంపాడు."],
  ["Prahasta knew Rāvaṇa was wrong but fought for him out of loyalty.", "రావణుడు తప్పు చేశాడని తెలిసినా ప్రహస్తుడు విధేయతతో పోరాడాడు."],
  ["Nīla killed Prahasta with a huge rock, and Rāvaṇa decided to fight himself.", "నీలుడు భారీ బండరాయితో ప్రహస్తుణ్ణి చంపాడు; రావణుడు స్వయంగా యుద్ధానికి నిశ్చయించుకున్నాడు."]
 ],
 think: ["Prahasta stayed loyal to Rāvaṇa even though he knew Rāvaṇa was wrong. What would you have done in his place?", "రావణుడు తప్పు చేశాడని తెలిసినా ప్రహస్తుడు అతనికి విధేయుడిగానే ఉన్నాడు. అతని స్థానంలో మీరైతే ఏం చేసేవారు?"]
},
{
 id: "yuddha-12", kanda: "yuddha", n: 12, order: 612, date: "2026-10-21",
 title: "Rāvaṇa Enters the Battle", titleTe: "రావణుడు రణరంగంలోకి", sargas: "59", scene: "weapons",
 who: ["ravana", "vibhishana", "hanuman", "nila", "lakshmana", "rama"],
 pages: [
  [
   ["p", "{ravana|Rāvaṇa} rode out in a chariot drawn by eight horses, surrounded by his finest warriors, his ten heads blazing with crowns. {vibhishana|Vibhīṣaṇa} named each of them for Rāma: Akampana's brother, Indrajit, Atikāya, Mahodara, Piśāca, Triśiras, Kumbha, Nikumbha, Narāntaka. ‘And there, in the middle, like the sun among planets, is Rāvaṇa.’ Rāma gazed at him. ‘What splendour! Neither god nor demon shines like this. If he were not wicked, he would be lord of the three worlds.’",
    "{ravana|రావణుడు} ఎనిమిది గుర్రాల రథంలో, తన ఉత్తమ వీరుల మధ్య, కిరీటాలతో వెలిగే పది తలలతో బయటకు వచ్చాడు. {vibhishana|విభీషణుడు} ఒక్కొక్కరి పేరు రామునికి చెప్పాడు: అకంపనుని సోదరుడు, ఇంద్రజిత్తు, అతికాయుడు, మహోదరుడు, పిశాచుడు, త్రిశిరుడు, కుంభుడు, నికుంభుడు, నరాంతకుడు. ‘మధ్యలో గ్రహాల మధ్య సూర్యునిలా ఉన్నవాడు రావణుడు.’ రాముడు అతన్ని తదేకంగా చూశాడు. ‘ఎంత తేజస్సు! దేవుడూ దానవుడూ ఇలా ప్రకాశించరు. దుష్టుడు కాకపోతే ముల్లోకాలకు అధిపతి అయ్యేవాడు.’"],
   ["p", "Rāvaṇa struck down Sugrīva with a spear and scattered the vānara chiefs. Then {hanuman|Hanumān} faced him. ‘You have boons against gods and demons, but not against vānaras. This right hand of mine will take your life.’ Rāvaṇa struck Hanumān so hard on the chest that he reeled; Hanumān struck back with his palm, and Rāvaṇa shook ‘like a mountain in an earthquake’. ‘Well done, vānara! You are a worthy enemy,’ said Rāvaṇa. ‘Shame on my strength,’ answered Hanumān, ‘that you are still alive after my blow!’"
   , "రావణుడు ఈటెతో సుగ్రీవుణ్ణి కూల్చి వానర నాయకులను చెల్లాచెదురు చేశాడు. అప్పుడు {hanuman|హనుమంతుడు} అతన్ని ఎదుర్కొన్నాడు. ‘నీకు దేవతలు, దానవుల నుండి వరాలున్నాయి, కానీ వానరుల నుండి కాదు. నా ఈ కుడిచేయి నీ ప్రాణం తీస్తుంది.’ రావణుడు హనుమంతుని ఛాతీ మీద ఎంత గట్టిగా కొట్టాడంటే అతను తూలాడు; హనుమంతుడు అరచేతితో తిరిగి కొట్టగా రావణుడు ‘భూకంపంలో పర్వతంలా’ కదిలిపోయాడు. ‘భళా వానరా! నువ్వు తగిన శత్రువువి,’ అన్నాడు రావణుడు. ‘నా దెబ్బ తిన్నా నువ్వు ఇంకా బతికి ఉన్నావంటే నా బలానికి సిగ్గు!’ అన్నాడు హనుమంతుడు."]
  ],
  [
   ["p", "{nila|Nīla} made himself tiny and leapt onto Rāvaṇa's banner, then onto his bow, then onto the top of his crown, dancing from point to point while Rāvaṇa tried in vain to hit him. Then {lakshmana|Lakṣmaṇa} came forward and fought Rāvaṇa with arrows. At last Rāvaṇa hurled a mighty spear, a gift from Brahmā, that blazed like fire. It struck Lakṣmaṇa in the chest, and he fell. Rāvaṇa rushed to carry him off — but though he had lifted Mount Kailāsa, he could not lift Lakṣmaṇa, for Lakṣmaṇa remembered that he was a part of Viṣṇu himself.",
    "{nila|నీలుడు} చిన్నవాడై రావణుని ధ్వజం మీదకు, తర్వాత విల్లు మీదకు, తర్వాత కిరీటం శిఖరం మీదకు దూకి, రావణుడు కొట్టడానికి విఫలంగా ప్రయత్నిస్తుంటే ఒక చోటి నుండి మరో చోటికి నాట్యం చేశాడు. తర్వాత {lakshmana|లక్ష్మణుడు} ముందుకొచ్చి బాణాలతో రావణునితో పోరాడాడు. చివరికి రావణుడు బ్రహ్మ ఇచ్చిన, అగ్నిలా మండే మహా శక్తి ఆయుధాన్ని విసిరాడు. అది లక్ష్మణుని ఛాతీకి తగిలి అతను పడిపోయాడు. రావణుడు అతన్ని ఎత్తుకుపోవడానికి పరుగెత్తాడు — కానీ కైలాసాన్నే ఎత్తిన రావణుడు లక్ష్మణుణ్ణి ఎత్తలేకపోయాడు; తాను విష్ణువు అంశ అని లక్ష్మణుడు గుర్తుచేసుకున్నాడు."],
   ["p", "Hanumān rushed at Rāvaṇa and struck him with his fist so hard that Rāvaṇa fell to his knees in his chariot, blood pouring from his mouths. Then Hanumān lifted Lakṣmaṇa — light as a feather in his loving arms — and carried him to Rāma. The spear left Lakṣmaṇa's body and went back to Rāvaṇa's chariot, and Lakṣmaṇa soon recovered."
   , "హనుమంతుడు రావణుని మీదకు దూకి పిడికిలితో ఎంత గట్టిగా కొట్టాడంటే రావణుడు రథంలో మోకాళ్ళ మీద కూలిపోయాడు, నోళ్ళ నుండి రక్తం కారింది. తర్వాత హనుమంతుడు లక్ష్మణుణ్ణి ఎత్తుకున్నాడు — ప్రేమతో నిండిన అతని చేతుల్లో ఈకలా తేలిగ్గా — రాముని దగ్గరకు తీసుకెళ్ళాడు. శక్తి ఆయుధం లక్ష్మణుని శరీరాన్ని విడిచి రావణుని రథానికి తిరిగి వెళ్ళింది; లక్ష్మణుడు త్వరలోనే కోలుకున్నాడు."]
  ],
  [
   ["p", "Now {rama|Rāma} himself went to face Rāvaṇa, riding on Hanumān's shoulders. His arrows broke Rāvaṇa's chariot, killed his horses and charioteer, snapped his bow and knocked the crown from his head. Rāvaṇa stood alone, weaponless and exhausted. Rāma lowered his bow. ‘You have fought bravely today and killed many of my warriors. I will not kill a tired man. Go back to Laṅkā and rest. Come back tomorrow with a new chariot and bow, and then you will see my strength.’",
    "ఇప్పుడు {rama|రాముడు} స్వయంగా హనుమంతుని భుజాల మీద కూర్చుని రావణుణ్ణి ఎదుర్కోవడానికి వెళ్ళాడు. అతని బాణాలు రావణుని రథాన్ని విరిచాయి, గుర్రాలను, సారథిని చంపాయి, విల్లును తుంచాయి, తల మీది కిరీటాన్ని పడగొట్టాయి. ఆయుధం లేకుండా, అలసిపోయి రావణుడు ఒంటరిగా నిలబడ్డాడు. రాముడు విల్లు దించాడు. ‘ఈ రోజు ధైర్యంగా పోరాడి నా వీరులను ఎందరినో చంపావు. అలసిపోయినవాణ్ణి నేను చంపను. లంకకు వెళ్ళి విశ్రాంతి తీసుకో. రేపు కొత్త రథం, విల్లుతో రా; అప్పుడు నా బలం చూస్తావు.’"],
   ["p", "Rāvaṇa went back to Laṅkā, his pride broken, ‘like a snake without its fangs, like an elephant beaten by a lion’. For the first time he remembered the curses of those he had wronged. ‘All my tapas has been in vain,’ he said. ‘Now I must wake Kumbhakarṇa.’",
    "గర్వం భగ్నమై రావణుడు ‘కోరలు లేని పాములా, సింహం చేతిలో ఓడిన ఏనుగులా’ లంకకు తిరిగి వెళ్ళాడు. మొదటిసారి తాను అన్యాయం చేసినవారి శాపాలు అతనికి గుర్తొచ్చాయి. ‘నా తపస్సంతా వృథా అయింది,’ అన్నాడు. ‘ఇప్పుడు కుంభకర్ణుణ్ణి నిద్రలేపాలి.’"]
  ]
 ],
 remember: [
  ["Rāvaṇa fought Hanumān and Nīla, and struck Lakṣmaṇa down with Brahmā's spear.", "రావణుడు హనుమంతుడు, నీలునితో పోరాడి, బ్రహ్మ ఇచ్చిన శక్తితో లక్ష్మణుణ్ణి కూల్చాడు."],
  ["Rāvaṇa could not lift Lakṣmaṇa, but Hanumān carried him easily to Rāma.", "రావణుడు లక్ష్మణుణ్ణి ఎత్తలేకపోయాడు; హనుమంతుడు సులభంగా రాముని దగ్గరకు తీసుకెళ్ళాడు."],
  ["Rāma defeated Rāvaṇa but let him go home to rest: ‘Come back tomorrow.’", "రాముడు రావణుణ్ణి ఓడించి, ‘రేపు రా’ అంటూ విశ్రాంతికి పంపాడు."]
 ],
 think: ["Rāma would not kill an enemy who was tired and unarmed. Why does fairness matter even in a fight?", "అలసిపోయి, ఆయుధం లేని శత్రువును రాముడు చంపలేదు. పోరాటంలో కూడా న్యాయం ఎందుకు ముఖ్యం?"]
}
]);
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "yuddha-13", kanda: "yuddha", n: 13, order: 613, date: "2026-10-21",
 title: "Waking Kumbhakarṇa", titleTe: "కుంభకర్ణుని మేలుకొలుపు", sargas: "60–64", scene: "palace",
 who: ["ravana", "kumbhakarna", "vibhishana", "rama"],
 pages: [
  [
   ["p", "{kumbhakarna|Kumbhakarṇa} had gone back to sleep only nine days earlier, and he usually slept for months. Waking him was a battle in itself. The rākṣasas piled mountains of meat, rice and pots of drink beside him, and smeared him with sandal paste. They blew conches, beat drums, shouted and roared in his ears. Nothing. They beat him with clubs and hammers, pulled his hair, bit his ears, poured water on him. Nothing. At last they drove a thousand elephants over his body — and Kumbhakarṇa stirred, yawned like a cave opening, and sat up, hungry.",
    "{kumbhakarna|కుంభకర్ణుడు} తొమ్మిది రోజుల క్రితమే మళ్ళీ నిద్రపోయాడు; సాధారణంగా అతను నెలల తరబడి నిద్రపోతాడు. అతన్ని మేల్కొలపడమే ఒక యుద్ధం. రాక్షసులు అతని పక్కన మాంసం, అన్నం కొండలు, పానీయాల కుండలు పేర్చి, గంధం పూశారు. చెవుల్లో శంఖాలు ఊదారు, డప్పులు కొట్టారు, అరిచారు, గర్జించారు. ఏమీ కాలేదు. గదలు, సుత్తులతో కొట్టారు, జుట్టు లాగారు, చెవులు కొరికారు, నీళ్ళు పోశారు. ఏమీ కాలేదు. చివరికి వెయ్యి ఏనుగులను అతని శరీరం మీదుగా నడిపించారు — అప్పుడు కుంభకర్ణుడు కదిలి, గుహ తెరుచుకున్నట్టు ఆవలించి, ఆకలితో లేచి కూర్చున్నాడు."],
   ["p", "When the vānaras saw Kumbhakarṇa rise above the walls of Laṅkā like a moving mountain, they fled in terror. Rāma asked in wonder, ‘Who is that giant?’ {vibhishana|Vibhīṣaṇa} explained, ‘That is my brother Kumbhakarṇa. As a child he was so hungry that he devoured thousands of creatures. The gods complained to Brahmā, and Brahmā declared that he would sleep like the dead. Rāvaṇa begged for mercy, so Brahmā allowed him to wake for one day after every six months of sleep.’"
   , "కుంభకర్ణుడు కదిలే పర్వతంలా లంక ప్రాకారాల పైకి లేవడం చూసి వానరులు భయంతో పారిపోయారు. ‘ఆ భారీకాయుడు ఎవరు?’ అని రాముడు ఆశ్చర్యంగా అడిగాడు. {vibhishana|విభీషణుడు} వివరించాడు: ‘అతను నా అన్న కుంభకర్ణుడు. చిన్నప్పుడు ఎంత ఆకలిగా ఉండేవాడంటే వేలాది జీవులను తినేశాడు. దేవతలు బ్రహ్మకు మొరపెట్టుకోగా, అతను చచ్చినవాడిలా నిద్రపోతాడని బ్రహ్మ ప్రకటించాడు. రావణుడు దయ కోసం వేడుకోగా, ప్రతి ఆరు నెలల నిద్ర తర్వాత ఒక్క రోజు మేల్కొనడానికి బ్రహ్మ అనుమతించాడు.’"]
  ],
  [
   ["p", "Vibhīṣaṇa added, ‘Tell the vānaras that it is only a huge machine made to frighten them, so that they do not lose heart.’ And {rama|Rāma} did so. Meanwhile Kumbhakarṇa ate and drank all that had been piled up for him, and went to his brother. {ravana|Rāvaṇa} told him everything: how Rāma had crossed the sea, how the generals had died, how Laṅkā was in danger.",
    "విభీషణుడు ఇంకా అన్నాడు: ‘వానరులు మనసు కోల్పోకుండా, అది వారిని భయపెట్టడానికి చేసిన పెద్ద యంత్రం మాత్రమే అని చెప్పండి.’ {rama|రాముడు} అలాగే చేశాడు. ఇంతలో కుంభకర్ణుడు తన కోసం పేర్చినదంతా తిని తాగి అన్న దగ్గరకు వెళ్ళాడు. {ravana|రావణుడు} అంతా చెప్పాడు: రాముడు సముద్రం ఎలా దాటాడో, సేనానులు ఎలా చనిపోయారో, లంక ఎలాంటి ప్రమాదంలో ఉందో."],
   ["p", "Kumbhakarṇa laughed. ‘Did I not tell you at the council that this would happen? You did not listen to Vibhīṣaṇa or to me. A king who does the wrong thing at the wrong time, without counsel, comes to ruin. You have reaped the fruit of your own deeds.’ Rāvaṇa frowned. ‘I did not wake you for a lecture. Whether I was wrong or right, help me now, as a brother should.’"
   , "కుంభకర్ణుడు నవ్వాడు. ‘ఇలా జరుగుతుందని సభలో నేను చెప్పలేదా? నువ్వు విభీషణుని మాట వినలేదు, నా మాటా వినలేదు. సలహా లేకుండా తప్పు సమయంలో తప్పు పని చేసే రాజు నాశనమవుతాడు. నీ కర్మల ఫలమే నువ్వు అనుభవిస్తున్నావు.’ రావణుడు ముఖం చిట్లించాడు. ‘ఉపన్యాసం కోసం నిన్ను లేపలేదు. నేను తప్పు చేసినా ఒప్పు చేసినా, తమ్ముడిగా ఇప్పుడు సాయం చెయ్యి.’"]
  ],
  [
   ["p", "Kumbhakarṇa saw his brother's distress, and his heart softened. ‘Do not worry, brother. I will crush Rāma and Lakṣmaṇa and eat the vānaras. Today Laṅkā will see what Kumbhakarṇa can do.’ He put on golden armour, took up a huge iron spear, and drank two thousand pots of wine. Then he strode out of the gates of Laṅkā, so tall that his head touched the clouds, roaring so loudly that the sea shook.",
    "అన్న బాధ చూసి కుంభకర్ణుని మనసు కరిగింది. ‘చింతించకు అన్నా. రామలక్ష్మణులను నలిపి, వానరులను తినేస్తాను. కుంభకర్ణుడు ఏం చేయగలడో ఈ రోజు లంక చూస్తుంది.’ బంగారు కవచం ధరించి, భారీ ఇనుప శూలం చేతబట్టి, రెండు వేల కుండల మద్యం తాగాడు. తర్వాత మేఘాలను తాకేంత ఎత్తుతో, సముద్రం కంపించేంత గర్జనతో లంక ద్వారాల నుండి బయటకు నడిచాడు."],
   ["more", "Another telling of Kumbhakarṇa's sleep", "కుంభకర్ణుని నిద్ర గురించి మరో కథనం", "From the Uttara Kāṇḍa", "ఉత్తరకాండ నుండి", [
    ["p", "In the Uttara Kāṇḍa, a different reason is given. When Kumbhakarṇa did tapas and Brahmā offered him a boon, the gods feared what he would ask for. So the goddess Sarasvatī sat on his tongue, and instead of asking for something terrible, he asked for long sleep. Both tellings are in Vālmīki's text.",
     "ఉత్తరకాండలో వేరే కారణం చెప్పబడింది. కుంభకర్ణుడు తపస్సు చేసి బ్రహ్మ వరం ఇవ్వబోతుంటే, అతను ఏం అడుగుతాడోనని దేవతలు భయపడ్డారు. అప్పుడు సరస్వతీదేవి అతని నాలుక మీద కూర్చుంది; ఏదో భయంకరమైనది అడగబోయి, అతను దీర్ఘ నిద్ర అడిగాడు. రెండు కథనాలూ వాల్మీకి గ్రంథంలోనే ఉన్నాయి."]
   ]]
  ]
 ],
 remember: [
  ["It took drums, clubs and a thousand elephants to wake Kumbhakarṇa.", "కుంభకర్ణుణ్ణి లేపడానికి డప్పులు, గదలు, వెయ్యి ఏనుగులు కావలసి వచ్చాయి."],
  ["Vibhīṣaṇa told Rāma why Kumbhakarṇa slept for six months at a time.", "కుంభకర్ణుడు ఆరు నెలలకోసారి ఎందుకు నిద్రపోతాడో విభీషణుడు రామునికి చెప్పాడు."],
  ["Kumbhakarṇa scolded Rāvaṇa for his mistake but agreed to fight for him.", "కుంభకర్ణుడు రావణుని తప్పుకు మందలించినా అతని కోసం యుద్ధానికి ఒప్పుకున్నాడు."]
 ],
 think: ["Kumbhakarṇa told his brother the truth, but still helped him. Is it possible to disagree with someone and still stand by them?", "కుంభకర్ణుడు అన్నకు నిజం చెప్పాడు, అయినా సాయం చేశాడు. ఒకరితో విభేదిస్తూనే వారికి అండగా నిలవడం సాధ్యమేనా?"]
},
{
 id: "yuddha-14", kanda: "yuddha", n: 14, order: 614, date: "2026-10-21",
 title: "The Fall of Kumbhakarṇa", titleTe: "కుంభకర్ణ వధ", sargas: "65–67", scene: "weapons",
 who: ["kumbhakarna", "angada", "sugriva", "hanuman", "lakshmana", "rama"],
 pages: [
  [
   ["p", "{kumbhakarna|Kumbhakarṇa} waded into the vānara army like a giant into a field of grass. He scooped up vānaras by the handful and swallowed them; he crushed them with his feet; his spear smashed through their ranks. The vānaras broke and ran towards the bridge. {angada|Aṅgada} shouted after them, ‘Where are you running? Your wives will laugh at you! Turn and fight! Better to die fighting than to live in shame!’ Ashamed, the vānaras turned back.",
    "{kumbhakarna|కుంభకర్ణుడు} గడ్డి పొలంలోకి దిగిన భారీకాయుడిలా వానర సేనలోకి చొచ్చుకుపోయాడు. గుప్పెళ్ళతో వానరులను ఎత్తి మింగాడు; కాళ్ళతో నలిపాడు; అతని శూలం వారి వరుసలను చీల్చింది. వానరులు చెల్లాచెదురై వారధి వైపు పారిపోయారు. {angada|అంగదుడు} వారి వెనకాల అరిచాడు: ‘ఎక్కడికి పరుగెడుతున్నారు? మీ భార్యలు మిమ్మల్ని చూసి నవ్వుతారు! తిరిగి పోరాడండి! సిగ్గుతో బతకడం కంటే పోరాడుతూ చనిపోవడమే మేలు!’ సిగ్గుపడిన వానరులు వెనుదిరిగారు."],
   ["p", "{sugriva|Sugrīva} hurled a mountain peak at Kumbhakarṇa; it shattered on his chest. Kumbhakarṇa struck Sugrīva senseless, tucked him under his arm and marched back towards Laṅkā, while the rākṣasas cheered. But on the way Sugrīva woke up. With his claws and teeth he tore off Kumbhakarṇa's ears and bit his nose, and when the giant howled in pain, Sugrīva sprang free into the sky and flew back to Rāma."
   , "{sugriva|సుగ్రీవుడు} ఒక పర్వత శిఖరాన్ని కుంభకర్ణుని మీదకు విసిరాడు; అది అతని ఛాతీకి తగిలి ముక్కలైంది. కుంభకర్ణుడు సుగ్రీవుణ్ణి కొట్టి స్పృహ తప్పించి, చంకలో పెట్టుకుని, రాక్షసులు జయధ్వానాలు చేస్తుండగా లంక వైపు నడిచాడు. కానీ దారిలో సుగ్రీవుడు మేల్కొన్నాడు. గోళ్ళతో, పళ్ళతో కుంభకర్ణుని చెవులు చీల్చి, ముక్కు కొరికాడు; భారీకాయుడు నొప్పితో అరవగానే సుగ్రీవుడు ఆకాశంలోకి ఎగిరి రాముని దగ్గరకు వచ్చేశాడు."]
  ],
  [
   ["p", "Furious and bleeding, Kumbhakarṇa came back to the field. {hanuman|Hanumān} struck him with rocks and trees; {lakshmana|Lakṣmaṇa} pierced him with arrows. Kumbhakarṇa said to Lakṣmaṇa, ‘You have shown great courage, young man. But I am looking for Rāma.’ And he strode past him to where {rama|Rāma} stood.",
    "కోపంతో, రక్తం కారుతూ కుంభకర్ణుడు మళ్ళీ రణరంగానికి వచ్చాడు. {hanuman|హనుమంతుడు} రాళ్ళు, చెట్లతో కొట్టాడు; {lakshmana|లక్ష్మణుడు} బాణాలతో గుచ్చాడు. కుంభకర్ణుడు లక్ష్మణునితో, ‘యువకుడా, గొప్ప ధైర్యం చూపించావు. కానీ నేను రాముణ్ణి వెతుకుతున్నాను,’ అని అతన్ని దాటి రాముడు నిలబడ్డ చోటికి నడిచాడు."],
   ["p", "Rāma drew his bow and spoke the mantras of the divine weapons. With the weapon of the Wind he cut off Kumbhakarṇa's right arm, which still held its club; the arm fell and crushed many rākṣasas. With the weapon of Indra he cut off the left arm. With two crescent-shaped arrows he cut off his legs. Still the giant came on, rolling forward with his mouth wide open like the jaws of Death. Rāma filled that mouth with arrows. Then, with an arrow given by Indra, blazing like the sun, he struck off Kumbhakarṇa's head.",
    "రాముడు విల్లు ఎక్కుపెట్టి దివ్యాస్త్ర మంత్రాలు పఠించాడు. వాయవ్యాస్త్రంతో గద పట్టుకున్న కుంభకర్ణుని కుడిచేతిని నరికాడు; ఆ చేయి పడి ఎందరో రాక్షసులను నలిపేసింది. ఐంద్రాస్త్రంతో ఎడమ చేతిని నరికాడు. రెండు అర్ధచంద్రాకార బాణాలతో కాళ్ళను నరికాడు. అయినా ఆ భారీకాయుడు యముని దవడల్లా నోరు తెరుచుకుని దొర్లుకుంటూ ముందుకు వచ్చాడు. రాముడు ఆ నోటిని బాణాలతో నింపాడు. తర్వాత ఇంద్రుడు ఇచ్చిన, సూర్యునిలా మండే బాణంతో కుంభకర్ణుని తల నరికాడు."]
  ],
  [
   ["p", "The great head, with its earrings, flew through the air and fell on Laṅkā, breaking houses and towers. The huge body fell into the sea, crushing fish and sea-creatures. The gods and sages in the sky rejoiced; the vānaras danced and praised Rāma. But in Laṅkā, there was only weeping.",
    "కుండలాలతో ఉన్న ఆ మహా శిరస్సు గాలిలో ఎగిరి లంక మీద పడి ఇళ్ళను, గోపురాలను పగలగొట్టింది. భారీ శరీరం సముద్రంలో పడి చేపలను, జలచరాలను నలిపేసింది. ఆకాశంలో దేవతలు, మునులు ఆనందించారు; వానరులు నాట్యం చేసి రాముణ్ణి పొగిడారు. కానీ లంకలో ఏడుపు మాత్రమే వినిపించింది."],
   ["dyk", "😴", "Kumbhakarṇa is one of the most loved characters of the Rāmāyaṇa in folk theatre — huge, hungry and sleepy, but also honest and loyal. In Kamban's Tamil Rāmāyaṇa, his farewell to Vibhīṣaṇa is one of the most moving scenes.",
    "జానపద నాటకాల్లో కుంభకర్ణుడు రామాయణంలోని అత్యంత ప్రియమైన పాత్రల్లో ఒకటి — భారీకాయుడు, ఆకలిగొన్నవాడు, నిద్రపోతు, కానీ నిజాయితీపరుడు, విధేయుడు. కంబన్ తమిళ రామాయణంలో విభీషణునికి అతను చెప్పే వీడ్కోలు అత్యంత హృదయవిదారక సన్నివేశాల్లో ఒకటి."]
  ]
 ],
 remember: [
  ["Aṅgada shamed the fleeing vānaras into turning back to fight.", "పారిపోతున్న వానరులను అంగదుడు సిగ్గుపడేలా చేసి మళ్ళీ పోరాటానికి మళ్ళించాడు."],
  ["Kumbhakarṇa carried Sugrīva away, but Sugrīva bit his ears and nose and escaped.", "కుంభకర్ణుడు సుగ్రీవుణ్ణి ఎత్తుకుపోయాడు; సుగ్రీవుడు చెవులు, ముక్కు కొరికి తప్పించుకున్నాడు."],
  ["Rāma cut off Kumbhakarṇa's arms, legs and finally his head.", "రాముడు కుంభకర్ణుని చేతులు, కాళ్ళు, చివరికి తల నరికాడు."]
 ],
 think: ["Aṅgada's words turned a running army into a fighting one. How can a few brave words give courage to others?", "అంగదుని మాటలు పారిపోతున్న సైన్యాన్ని పోరాడే సైన్యంగా మార్చాయి. ధైర్యమైన కొన్ని మాటలు ఇతరులకు ఎలా ధైర్యం ఇవ్వగలవు?"]
},
{
 id: "yuddha-15", kanda: "yuddha", n: 15, order: 615, date: "2026-10-21",
 title: "Rāvaṇa's Sons", titleTe: "రావణ పుత్రులు", sargas: "68–71", scene: "weapons",
 who: ["ravana", "angada", "hanuman", "nila", "atikaya", "lakshmana"],
 pages: [
  [
   ["p", "When {ravana|Rāvaṇa} heard that Kumbhakarṇa was dead, he fainted. When he woke, he wept like a child. ‘My right arm is gone. How can I live without my brother? I did not listen to Vibhīṣaṇa, and now I am paying for it.’ His son Triśiras comforted him. ‘Do not grieve, father. You have Brahmā's spear, armour and bow. And we, your sons, will go out and fight.’ So four of Rāvaṇa's sons — Triśiras, Devāntaka, Narāntaka and Atikāya — rode out with his brothers Mahodara and Mahāpārśva.",
    "కుంభకర్ణుడు చనిపోయాడని విని {ravana|రావణుడు} స్పృహ తప్పాడు. మేల్కొన్నాక పిల్లవాడిలా ఏడ్చాడు. ‘నా కుడిభుజం పోయింది. తమ్ముడు లేకుండా ఎలా బతకను? విభీషణుని మాట వినలేదు; ఇప్పుడు అనుభవిస్తున్నాను.’ అతని కొడుకు త్రిశిరుడు ఊరడించాడు: ‘నాన్నా, దుఃఖించకు. నీ దగ్గర బ్రహ్మ ఇచ్చిన శక్తి, కవచం, విల్లు ఉన్నాయి. నీ కొడుకులమైన మేము వెళ్ళి పోరాడతాం.’ అలా రావణుని నలుగురు కొడుకులు — త్రిశిరుడు, దేవాంతకుడు, నరాంతకుడు, అతికాయుడు — అతని సోదరులు మహోదరుడు, మహాపార్శ్వునితో కలిసి బయలుదేరారు."],
   ["p", "Narāntaka rode a white horse and killed vānaras by the hundred with his spear, until {angada|Aṅgada} faced him. Narāntaka's spear broke on Aṅgada's chest; Aṅgada killed his horse with one blow of his palm, then struck Narāntaka on the head with his fist, and he fell dead. Devāntaka and Triśiras attacked together. {hanuman|Hanumān} killed Devāntaka with his fist, then seized Triśiras's own sword and cut off his three heads. {nila|Nīla} crushed Mahodara with a mountain peak, and the vānara Ṛṣabha killed Mahāpārśva with his own mace."
   , "నరాంతకుడు తెల్లని గుర్రం మీద వచ్చి శూలంతో వందలాది వానరులను చంపాడు — {angada|అంగదుడు} ఎదురయ్యేవరకు. నరాంతకుని శూలం అంగదుని ఛాతీకి తగిలి విరిగిపోయింది; అంగదుడు అరచేతి ఒక్క దెబ్బతో అతని గుర్రాన్ని చంపి, పిడికిలితో తల మీద కొట్టగా నరాంతకుడు చచ్చిపడ్డాడు. దేవాంతకుడు, త్రిశిరుడు కలిసి దాడి చేశారు. {hanuman|హనుమంతుడు} పిడికిలితో దేవాంతకుణ్ణి చంపాడు; తర్వాత త్రిశిరుని కత్తినే లాక్కుని అతని మూడు తలలు నరికాడు. {nila|నీలుడు} పర్వత శిఖరంతో మహోదరుణ్ణి నలిపేశాడు; ఋషభుడు అనే వానరుడు మహాపార్శ్వుని గదతోనే అతన్ని చంపాడు."]
  ],
  [
   ["p", "Last came {atikaya|Atikāya}, the huge son of Rāvaṇa — tall as a mountain, learned in the Vedas, protected by armour that Brahmā had given him. His chariot shone like a thousand suns. The vānaras thought Kumbhakarṇa had come back to life and ran. But Atikāya would not fight ordinary soldiers. ‘I fight only with heroes. Where are Rāma and Lakṣmaṇa?’ {lakshmana|Lakṣmaṇa} stepped forward and twanged his bow.",
    "చివరికి రావణుని భారీకాయుడైన కొడుకు {atikaya|అతికాయుడు} వచ్చాడు — పర్వతమంత ఎత్తు, వేదపండితుడు, బ్రహ్మ ఇచ్చిన కవచం రక్షణ గలవాడు. అతని రథం వెయ్యి సూర్యుల్లా మెరిసింది. కుంభకర్ణుడు మళ్ళీ బతికి వచ్చాడని వానరులు అనుకుని పారిపోయారు. కానీ అతికాయుడు సామాన్య సైనికులతో పోరాడడు. ‘నేను వీరులతో మాత్రమే పోరాడతాను. రామలక్ష్మణులు ఎక్కడ?’ {lakshmana|లక్ష్మణుడు} ముందుకొచ్చి విల్లు టంకారం చేశాడు."],
   ["p", "‘You are only a boy,’ said Atikāya. ‘Go away before you get hurt.’ ‘Words do not make a hero,’ answered Lakṣmaṇa. ‘Show me your deeds.’ They fought with every kind of divine weapon — fire against water, wind against mountain, Indra's weapon against Yama's. But no arrow could pierce Atikāya's armour. Then the Wind god whispered to Lakṣmaṇa, ‘His armour is Brahmā's gift. Only Brahmā's own weapon can break it.’ Lakṣmaṇa invoked the Brahmāstra, and it struck off Atikāya's head with its crown and earrings."
   , "‘నువ్వు పిల్లవాడివి,’ అన్నాడు అతికాయుడు. ‘దెబ్బ తగలకముందే వెళ్ళిపో.’ ‘మాటలతో వీరుడు కాలేడు,’ జవాబిచ్చాడు లక్ష్మణుడు. ‘నీ పనులు చూపించు.’ ఇద్దరూ అన్ని రకాల దివ్యాస్త్రాలతో పోరాడారు — అగ్నికి నీరు, పర్వతానికి వాయువు, యమాస్త్రానికి ఐంద్రాస్త్రం. కానీ ఏ బాణమూ అతికాయుని కవచాన్ని చీల్చలేకపోయింది. అప్పుడు వాయుదేవుడు లక్ష్మణుని చెవిలో చెప్పాడు: ‘అతని కవచం బ్రహ్మ ఇచ్చిన వరం. బ్రహ్మాస్త్రం ఒక్కటే దాన్ని ఛేదించగలదు.’ లక్ష్మణుడు బ్రహ్మాస్త్రాన్ని ప్రయోగించగా అది కిరీటం, కుండలాలతో సహా అతికాయుని తల నరికింది."]
  ],
  [
   ["p", "The rākṣasas who survived fled to Rāvaṇa and told him that his sons and brothers were all dead. Rāvaṇa sat silent, his eyes filled with tears and fear. ‘Who are these Rāma and Lakṣmaṇa,’ he whispered, ‘that they can kill such heroes? Perhaps Rāma is Nārāyaṇa himself.’ Then he ordered the walls guarded day and night, and sent for the only son he had left to rely on — Indrajit.",
    "బతికిన రాక్షసులు రావణుని దగ్గరకు పారిపోయి అతని కొడుకులు, సోదరులు అందరూ చనిపోయారని చెప్పారు. రావణుడు కన్నీళ్ళతో, భయంతో నిండిన కళ్ళతో మౌనంగా కూర్చున్నాడు. ‘ఇలాంటి వీరులను చంపగలిగిన ఈ రామలక్ష్మణులు ఎవరు?’ అని గొణిగాడు. ‘రాముడు స్వయంగా నారాయణుడేనేమో.’ తర్వాత రాత్రింబవళ్ళు ప్రాకారాలు కాపలా కాయమని ఆజ్ఞాపించి, ఆధారపడదగిన మిగిలిన ఒకే ఒక కొడుకు — ఇంద్రజిత్తును పిలిపించాడు."],
   ["dyk", "🛡️", "Atikāya's armour could only be broken by the weapon of the same god who gave it. In these stories, boons have rules — and the wise find the one way through.",
    "అతికాయుని కవచాన్ని దాన్ని ఇచ్చిన దేవుని అస్త్రమే ఛేదించగలదు. ఈ కథల్లో వరాలకు నియమాలుంటాయి — జ్ఞానులు దాటే ఒకే దారిని కనుక్కుంటారు."]
  ]
 ],
 remember: [
  ["Aṅgada killed Narāntaka; Hanumān killed Devāntaka and three-headed Triśiras.", "అంగదుడు నరాంతకుణ్ణి, హనుమంతుడు దేవాంతకుణ్ణి, మూడు తలల త్రిశిరుణ్ణి చంపారు."],
  ["Lakṣmaṇa killed Atikāya with the Brahmāstra, on the Wind god's advice.", "వాయుదేవుని సలహాతో లక్ష్మణుడు బ్రహ్మాస్త్రంతో అతికాయుణ్ణి చంపాడు."],
  ["Rāvaṇa began to wonder whether Rāma was Nārāyaṇa himself.", "రాముడు స్వయంగా నారాయణుడేనేమోనని రావణుడు ఆలోచించడం మొదలుపెట్టాడు."]
 ],
 think: ["Atikāya told Lakṣmaṇa he was ‘only a boy’. Why is it a mistake to judge someone's ability by their age or size?", "అతికాయుడు లక్ష్మణుణ్ణి ‘పిల్లవాడు’ అన్నాడు. ఒకరి సామర్థ్యాన్ని వయసు లేదా పరిమాణం బట్టి అంచనా వేయడం ఎందుకు తప్పు?"]
},
{
 id: "yuddha-16", kanda: "yuddha", n: 16, order: 616, date: "2026-10-21",
 title: "The Mountain of Herbs", titleTe: "ఓషధీ పర్వతం", sargas: "72–74", scene: "hill",
 who: ["indrajit", "rama", "lakshmana", "vibhishana", "hanuman", "jambavan"],
 pages: [
  [
   ["p", "{indrajit|Indrajit} performed a fire-sacrifice, mounted his chariot, and became invisible again. From the sky he rained arrows and weapons of every kind on the vānaras, striking down leader after leader. Then he released the Brahmāstra at {rama|Rāma} and {lakshmana|Lakṣmaṇa}. Out of respect for Brahmā, the brothers did not resist, and fell senseless. By evening the whole vānara army lay on the field — sixty-seven crores of vānaras struck down, says Vālmīki. Indrajit went back to Laṅkā in triumph.",
    "{indrajit|ఇంద్రజిత్తు} అగ్నిహోత్రం చేసి, రథం ఎక్కి, మళ్ళీ అదృశ్యమయ్యాడు. ఆకాశం నుండి వానరుల మీద అన్ని రకాల బాణాలు, ఆయుధాలు కురిపించి ఒక్కొక్క నాయకుణ్ణి కూల్చాడు. తర్వాత {rama|రాముని}, {lakshmana|లక్ష్మణుని} మీద బ్రహ్మాస్త్రం ప్రయోగించాడు. బ్రహ్మ మీద గౌరవంతో అన్నదమ్ములు ఎదిరించలేదు; స్పృహ తప్పి పడిపోయారు. సాయంత్రానికి వానర సేన అంతా రణభూమిలో పడి ఉంది — అరవై ఏడు కోట్ల వానరులు కూలిపోయారని వాల్మీకి చెబుతాడు. ఇంద్రజిత్తు విజయగర్వంతో లంకకు తిరిగి వెళ్ళాడు."],
   ["p", "That night, {vibhishana|Vibhīṣaṇa} and {hanuman|Hanumān}, who were still standing, walked through the battlefield with torches, searching among the fallen. They found old {jambavan|Jāmbavān}, king of the bears, barely alive, pierced by arrows, unable to open his eyes. ‘Who is there?’ he whispered. ‘It is Vibhīṣaṇa.’ Jāmbavān asked, ‘Is Hanumān alive?’ Vibhīṣaṇa was surprised. ‘Why do you ask about Hanumān before Rāma, Lakṣmaṇa, Sugrīva or Aṅgada?’"
   , "ఆ రాత్రి ఇంకా నిలబడి ఉన్న {vibhishana|విభీషణుడు}, {hanuman|హనుమంతుడు} కాగడాలతో రణభూమిలో పడిపోయినవారి మధ్య వెతుకుతూ నడిచారు. బాణాలతో గుచ్చుకుని, కళ్ళు తెరవలేక, కొనఊపిరితో ఉన్న వృద్ధ భల్లూకరాజు {jambavan|జాంబవంతుణ్ణి} కనుగొన్నారు. ‘ఎవరక్కడ?’ అని గొణిగాడు. ‘నేను విభీషణుణ్ణి.’ జాంబవంతుడు అడిగాడు: ‘హనుమంతుడు బతికే ఉన్నాడా?’ విభీషణుడు ఆశ్చర్యపోయాడు. ‘రాముడు, లక్ష్మణుడు, సుగ్రీవుడు, అంగదుడు కంటే ముందు హనుమంతుని గురించి ఎందుకు అడుగుతున్నావు?’"]
  ],
  [
   ["p", "‘Because,’ said Jāmbavān, ‘if Hanumān lives, then even if the whole army is dead, it is alive. If Hanumān is dead, then even if we live, we are as good as dead.’ Hanumān knelt and touched his feet. Jāmbavān said, ‘Go, son of the Wind. Fly north over the ocean to the Himālaya. Between Mount Ṛṣabha and Mount Kailāsa you will see a mountain of herbs, shining in the dark. Bring four herbs: Mṛtasañjīvanī, which brings back the dying; Viśalyakaraṇī, which draws out arrows; Sauvarṇakaraṇī, which restores the body's colour; and Sandhānī, which joins broken bones. Go quickly!’",
    "‘ఎందుకంటే,’ అన్నాడు జాంబవంతుడు, ‘హనుమంతుడు బతికి ఉంటే, సేన అంతా చచ్చినా బతికినట్టే. హనుమంతుడు చనిపోతే, మనం బతికి ఉన్నా చచ్చినట్టే.’ హనుమంతుడు మోకరిల్లి అతని పాదాలు తాకాడు. జాంబవంతుడు అన్నాడు: ‘వాయుపుత్రా, వెళ్ళు. సముద్రం మీదుగా ఉత్తరాన హిమాలయానికి ఎగురు. ఋషభ పర్వతానికీ కైలాస పర్వతానికీ మధ్య చీకటిలో మెరిసే ఓషధీ పర్వతం కనిపిస్తుంది. నాలుగు మూలికలు తీసుకురా: చనిపోతున్నవారిని బతికించే మృతసంజీవని; బాణాలను బయటకు లాగే విశల్యకరణి; శరీర వర్ణాన్ని తిరిగి తెచ్చే సౌవర్ణకరణి; విరిగిన ఎముకలను అతికించే సంధాని. త్వరగా వెళ్ళు!’"],
   ["p", "Hanumān grew as tall as a mountain, roared, and leapt from Mount Malaya. He flew over the ocean, over forests, rivers and cities, past the snowy peaks, until he saw the mountain of herbs glowing like a fire. But when he landed, the herbs hid themselves — they did not want to be taken. Hanumān could not tell which was which. Angry, he said, ‘Then I will take the whole mountain!’ He tore off the peak, with all its trees, animals and glowing plants, and lifted it high, and flew back south with it ‘like a second sun’."
   , "హనుమంతుడు పర్వతమంత ఎత్తుగా పెరిగి, గర్జించి, మలయ పర్వతం నుండి ఎగిరాడు. సముద్రం, అడవులు, నదులు, నగరాలు దాటి, మంచు శిఖరాలను దాటి, అగ్నిలా మెరుస్తున్న ఓషధీ పర్వతాన్ని చూశాడు. కానీ అతను దిగగానే మూలికలు దాక్కున్నాయి — తీసుకెళ్ళబడడం వాటికి ఇష్టం లేదు. ఏది ఏదో హనుమంతుడు గుర్తుపట్టలేకపోయాడు. కోపంతో, ‘అయితే పర్వతాన్నంతా తీసుకెళ్తాను!’ అని దాని శిఖరాన్ని చెట్లు, జంతువులు, మెరిసే మొక్కలతో సహా పెకలించి, పైకెత్తి, ‘రెండో సూర్యునిలా’ దక్షిణం వైపు ఎగిరి వచ్చాడు."]
  ],
  [
   ["p", "As soon as Hanumān reached the battlefield with the mountain, the fragrance of the herbs spread over the field. Rāma and Lakṣmaṇa rose up, their wounds healed. All the fallen vānaras woke ‘as if from sleep’, stronger than before. But the rākṣasas who had died did not come back — Rāvaṇa had ordered their bodies thrown into the sea, to hide how many had fallen. Then Hanumān carried the mountain back to the Himālaya and set it in its place, and returned before dawn.",
    "హనుమంతుడు పర్వతంతో రణభూమి చేరగానే మూలికల సువాసన అంతా వ్యాపించింది. రామలక్ష్మణులు గాయాలు మానిపోయి లేచారు. పడిపోయిన వానరులంతా ‘నిద్ర నుండి లేచినట్టు’ మునుపటికంటే బలంగా లేచారు. కానీ చనిపోయిన రాక్షసులు తిరిగి రాలేదు — ఎంతమంది చనిపోయారో దాచడానికి వారి శరీరాలను సముద్రంలో పడేయమని రావణుడు ఆజ్ఞాపించాడు. తర్వాత హనుమంతుడు పర్వతాన్ని హిమాలయానికి తీసుకెళ్ళి దాని స్థానంలో పెట్టి, తెల్లవారకముందే తిరిగి వచ్చాడు."],
   ["dyk", "⛰️", "The picture of Hanumān flying with a mountain in his hand is one of the most famous images in India. In Vālmīki, Hanumān brings the mountain of herbs twice — here, and again later when Lakṣmaṇa is struck by Rāvaṇa's spear.",
    "చేతిలో పర్వతంతో ఎగిరే హనుమంతుని చిత్రం భారతదేశంలోనే అత్యంత ప్రసిద్ధమైనది. వాల్మీకిలో హనుమంతుడు ఓషధీ పర్వతాన్ని రెండుసార్లు తెస్తాడు — ఇక్కడ, తర్వాత రావణుని శక్తి లక్ష్మణునికి తగిలినప్పుడు మళ్ళీ."]
  ]
 ],
 remember: [
  ["Indrajit's Brahmāstra struck down Rāma, Lakṣmaṇa and the whole army.", "ఇంద్రజిత్తు బ్రహ్మాస్త్రం రామలక్ష్మణులను, సేనంతటినీ కూల్చింది."],
  ["Jāmbavān said: if Hanumān lives, we all live — and sent him to the Himālaya.", "‘హనుమంతుడు బతికి ఉంటే మనమంతా బతికినట్టే’ అని జాంబవంతుడు అతన్ని హిమాలయానికి పంపాడు."],
  ["Hanumān brought the whole mountain of herbs, and everyone was healed.", "హనుమంతుడు ఓషధీ పర్వతాన్నంతా తెచ్చాడు; అందరూ స్వస్థులయ్యారు."]
 ],
 think: ["When Hanumān couldn't find the right herbs, he found another way. What do you do when a plan doesn't work as expected?", "సరైన మూలికలు దొరకనప్పుడు హనుమంతుడు మరో దారి కనుక్కున్నాడు. ప్రణాళిక అనుకున్నట్టు పని చేయనప్పుడు మీరు ఏం చేస్తారు?"]
}
]);
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "yuddha-17", kanda: "yuddha", n: 17, order: 617, date: "2026-10-21",
 title: "Laṅkā Burns Again", titleTe: "మళ్ళీ లంకా దహనం", sargas: "75–79", scene: "lanka",
 who: ["sugriva", "kumbha", "angada", "hanuman", "makaraksha", "rama"],
 pages: [
  [
   ["p", "That night {sugriva|Sugrīva} said, ‘Kumbhakarṇa and Rāvaṇa's sons are dead. Rāvaṇa cannot send out his army now. Take torches and burn Laṅkā!’ The vānaras rushed in from every side with blazing torches. Fire leapt from house to house — mansions of gold and silver, palaces of jewels, gardens, armouries, elephant stables. The sea reflected the burning city until it looked as if there were two Laṅkās on fire. In the light of the flames, the vānaras could see the rākṣasas running.",
    "ఆ రాత్రి {sugriva|సుగ్రీవుడు} అన్నాడు: ‘కుంభకర్ణుడు, రావణుని కొడుకులు చనిపోయారు. ఇప్పుడు రావణుడు సైన్యాన్ని పంపలేడు. కాగడాలు పట్టుకుని లంకను తగలబెట్టండి!’ వానరులు మండే కాగడాలతో అన్ని వైపుల నుండి దూసుకెళ్ళారు. మంటలు ఇంటి నుండి ఇంటికి దూకాయి — బంగారు, వెండి భవనాలు, రత్న ప్రాసాదాలు, తోటలు, ఆయుధాగారాలు, ఏనుగుల శాలలు. మండే నగరం సముద్రంలో ప్రతిబింబించి రెండు లంకలు మండుతున్నట్టు కనిపించింది. మంటల వెలుగులో పారిపోతున్న రాక్షసులు వానరులకు కనిపించారు."],
   ["p", "Out of the burning city came {kumbha|Kumbha and Nikumbha}, the two sons of Kumbhakarṇa, eager to avenge their father. Kumbha shot down Aṅgada and many vānara chiefs with his arrows. Then Sugrīva himself faced him. He snapped Kumbha's bow, and the two fought hand to hand, wrestling and rolling until the earth shook. At last Sugrīva struck Kumbha on the chest with his fist, so hard that it blazed like a thunderbolt, and Kumbha fell dead.",
    "మండుతున్న నగరం నుండి కుంభకర్ణుని ఇద్దరు కొడుకులు, {kumbha|కుంభ నికుంభులు}, తండ్రి పగ తీర్చుకోవాలనే కసితో బయటకు వచ్చారు. కుంభుడు బాణాలతో అంగదుణ్ణి, ఎందరో వానర నాయకులను కూల్చాడు. అప్పుడు సుగ్రీవుడు స్వయంగా అతన్ని ఎదుర్కొన్నాడు. కుంభుని విల్లు విరిచాడు; ఇద్దరూ భూమి కంపించేలా కుస్తీ పడుతూ, దొర్లుతూ చేతులతో పోరాడారు. చివరికి సుగ్రీవుడు పిడుగులా మెరిసేంత గట్టిగా పిడికిలితో కుంభుని ఛాతీ మీద కొట్టగా కుంభుడు చచ్చిపడ్డాడు."]
  ],
  [
   ["p", "Nikumbha whirled a huge iron club studded with diamonds, so bright that it lit up the night. He struck {hanuman|Hanumān} on the chest, and the club shattered into a hundred pieces. Hanumān struck back with his fist, and Nikumbha staggered. Then Nikumbha seized Hanumān and lifted him up — but Hanumān broke free, threw Nikumbha to the ground, jumped on him, and twisted off his head. The vānaras roared with joy.",
    "నికుంభుడు వజ్రాలు పొదిగిన భారీ ఇనుప గదను తిప్పాడు — అది రాత్రిని వెలిగించేంత ప్రకాశంగా ఉంది. దానితో {hanuman|హనుమంతుని} ఛాతీ మీద కొట్టగా గద వంద ముక్కలైంది. హనుమంతుడు పిడికిలితో తిరిగి కొట్టగా నికుంభుడు తూలాడు. తర్వాత నికుంభుడు హనుమంతుణ్ణి పట్టుకుని పైకెత్తాడు — కానీ హనుమంతుడు విడిపించుకుని నికుంభుణ్ణి నేలకేసి కొట్టి, అతని మీదకు దూకి, తలను మెలిపెట్టి తుంచేశాడు. వానరులు ఆనందంతో గర్జించారు."],
   ["p", "Next Rāvaṇa sent {makaraksha|Makarākṣa}, the son of Khara whom Rāma had killed in Janasthāna. ‘Where is Rāma, who killed my father? Today I will avenge him!’ Rāma smiled. ‘You talk too much. I killed your father and fourteen thousand rākṣasas. Today vultures will feast on you too.’ They fought fiercely; Makarākṣa hurled a flaming spear given by Śiva, but Rāma cut it into pieces in the air. Then Rāma fired the weapon of Agni, and Makarākṣa fell dead."
   , "తర్వాత రావణుడు జనస్థానంలో రాముడు చంపిన ఖరుని కొడుకు {makaraksha|మకరాక్షుణ్ణి} పంపాడు. ‘నా తండ్రిని చంపిన రాముడు ఎక్కడ? ఈ రోజు పగ తీర్చుకుంటాను!’ రాముడు నవ్వాడు. ‘నువ్వు ఎక్కువగా మాట్లాడుతున్నావు. నీ తండ్రిని, పద్నాలుగు వేల రాక్షసులను చంపాను. ఈ రోజు నిన్ను కూడా గద్దలు తింటాయి.’ ఇద్దరూ భీకరంగా పోరాడారు; మకరాక్షుడు శివుడిచ్చిన మండే శూలాన్ని విసిరాడు, కానీ రాముడు దాన్ని గాలిలోనే ముక్కలు చేశాడు. తర్వాత రాముడు ఆగ్నేయాస్త్రం వేయగా మకరాక్షుడు చచ్చిపడ్డాడు."]
  ],
  [
   ["p", "One by one, Rāvaṇa's great warriors had fallen. His city was burning. His brothers and sons were dead. And still he would not give up Sītā. In the palace, only one champion remained who had never been defeated — Indrajit, conqueror of Indra.",
    "ఒక్కొక్కరుగా రావణుని గొప్ప వీరులు పడిపోయారు. అతని నగరం మండుతోంది. సోదరులు, కొడుకులు చనిపోయారు. అయినా సీతను వదులుకోలేదు. అంతఃపురంలో ఎన్నడూ ఓడని ఒకే ఒక్క వీరుడు మిగిలాడు — ఇంద్రుణ్ణి జయించిన ఇంద్రజిత్తు."],
   ["dyk", "🔥", "Laṅkā is burned twice in Vālmīki's Rāmāyaṇa — first by Hanumān's tail in the Sundara Kāṇḍa, and again by the vānara army with torches in the Yuddha Kāṇḍa.",
    "వాల్మీకి రామాయణంలో లంక రెండుసార్లు కాలిపోతుంది — మొదట సుందరకాండలో హనుమంతుని తోకతో, మళ్ళీ యుద్ధకాండలో వానర సేన కాగడాలతో."]
  ]
 ],
 remember: [
  ["Sugrīva ordered the vānaras to burn Laṅkā with torches at night.", "రాత్రివేళ కాగడాలతో లంకను తగలబెట్టమని సుగ్రీవుడు వానరులకు ఆజ్ఞాపించాడు."],
  ["Sugrīva killed Kumbha and Hanumān killed Nikumbha, Kumbhakarṇa's sons.", "కుంభకర్ణుని కొడుకుల్లో కుంభుణ్ణి సుగ్రీవుడు, నికుంభుణ్ణి హనుమంతుడు చంపారు."],
  ["Rāma killed Makarākṣa, Khara's son, with the weapon of Agni.", "ఖరుని కొడుకు మకరాక్షుణ్ణి రాముడు ఆగ్నేయాస్త్రంతో చంపాడు."]
 ],
 think: ["Rāvaṇa lost almost everything but still would not admit he was wrong. Why is it so hard for some people to say ‘I made a mistake’?", "రావణుడు దాదాపు అంతా పోగొట్టుకున్నా తప్పు ఒప్పుకోలేదు. ‘నేను తప్పు చేశాను’ అని చెప్పడం కొందరికి ఎందుకు అంత కష్టం?"]
},
{
 id: "yuddha-18", kanda: "yuddha", n: 18, order: 618, date: "2026-10-21",
 title: "The Magic Sītā", titleTe: "మాయా సీత", sargas: "80–83", scene: "night",
 who: ["indrajit", "rama", "lakshmana", "hanuman", "vibhishana"],
 pages: [
  [
   ["p", "{indrajit|Indrajit} went out again, invisible, and rained arrows on Rāma and Lakṣmaṇa. Angry, {lakshmana|Lakṣmaṇa} said, ‘Brother, let me use the Brahmāstra and destroy every rākṣasa in Laṅkā!’ But {rama|Rāma} said, ‘No. It is not right to kill all the rākṣasas because of one. We do not strike those who are not fighting, those who hide, those who fold their hands, or those who run away. Indrajit we will find and kill — but not the innocent.’",
    "{indrajit|ఇంద్రజిత్తు} మళ్ళీ అదృశ్యంగా బయటకు వచ్చి రామలక్ష్మణుల మీద బాణాలు కురిపించాడు. కోపంతో {lakshmana|లక్ష్మణుడు}, ‘అన్నా, బ్రహ్మాస్త్రం వేసి లంకలోని ప్రతి రాక్షసుణ్ణి నాశనం చేయనీ!’ అన్నాడు. కానీ {rama|రాముడు} అన్నాడు: ‘వద్దు. ఒక్కడి కోసం రాక్షసులందరినీ చంపడం న్యాయం కాదు. పోరాడనివారిని, దాక్కున్నవారిని, చేతులు జోడించినవారిని, పారిపోతున్నవారిని మనం కొట్టం. ఇంద్రజిత్తును వెతికి చంపుదాం — కానీ నిర్దోషులను కాదు.’"],
   ["p", "Indrajit then played his cruellest trick. He made, by magic, a woman who looked exactly like Sītā — thin, sad, in a faded yellow cloth — and put her in his chariot. He drove to the western gate where {hanuman|Hanumān} was fighting. In front of all the vānaras, he seized the false Sītā by the hair and raised his sword. ‘Rāma came here for her. Watch me kill her!’ ‘Stop!’ shouted Hanumān. But Indrajit struck, and the figure fell.",
    "అప్పుడు ఇంద్రజిత్తు తన అత్యంత క్రూరమైన మాయ పన్నాడు. మాయతో సరిగ్గా సీతలాగే కనిపించే ఒక స్త్రీని సృష్టించాడు — చిక్కిపోయి, విచారంగా, వెలిసిన పసుపు వస్త్రంతో — ఆమెను తన రథంలో కూర్చోబెట్టాడు. {hanuman|హనుమంతుడు} పోరాడుతున్న పశ్చిమ ద్వారం దగ్గరకు రథం నడిపాడు. వానరులందరి ముందు ఆ మాయా సీతను జుట్టు పట్టి లాగి కత్తి ఎత్తాడు. ‘రాముడు ఈమె కోసమే వచ్చాడు. ఈమెను చంపడం చూడండి!’ ‘ఆగు!’ అని హనుమంతుడు అరిచాడు. కానీ ఇంద్రజిత్తు కొట్టాడు; ఆ ఆకారం పడిపోయింది."]
  ],
  [
   ["p", "Hanumān's heart broke. ‘What is the use of fighting now, when the one we fought for is dead?’ He led the vānaras back and told Rāma. At the news, Rāma fell to the ground like a tree cut at the root. The vānaras sprinkled water on his face. Lakṣmaṇa, holding his brother, burst out in grief and anger: ‘Rāma, you have always followed dharma, and what has it brought you? Exile, the loss of Sītā, and now this! If dharma cannot protect the righteous, what is the use of it?’ He wept as he spoke.",
    "హనుమంతుని గుండె పగిలింది. ‘ఎవరి కోసం పోరాడుతున్నామో వారే చనిపోతే ఇక పోరాడి ఏం లాభం?’ వానరులను వెనక్కి తీసుకెళ్ళి రామునికి చెప్పాడు. ఆ వార్త విని రాముడు వేరుతో నరికిన చెట్టులా నేల మీద పడిపోయాడు. వానరులు అతని ముఖం మీద నీళ్ళు చల్లారు. అన్నను పట్టుకున్న లక్ష్మణుడు దుఃఖంతో, కోపంతో విరుచుకుపడ్డాడు: ‘రామా, నువ్వు ఎప్పుడూ ధర్మాన్నే అనుసరించావు, అది నీకు ఏమిచ్చింది? వనవాసం, సీత దూరమవడం, ఇప్పుడు ఇది! ధర్మం ధర్మాత్ములను కాపాడలేకపోతే దానివల్ల ఏం ప్రయోజనం?’ మాట్లాడుతూ ఏడ్చాడు."],
   ["p", "Just then {vibhishana|Vibhīṣaṇa} arrived and saw them all in despair. When he heard what had happened, he said, ‘My lord, this is impossible. Rāvaṇa would never let Sītā be killed — he wants her too much. This was only Indrajit's magic, to make you lose heart. And I know why: right now he has gone to the shrine of Nikumbhilā to perform a secret sacrifice. If he completes it, no one in the three worlds will be able to defeat him. Brahmā has said that whoever attacks him before he finishes will kill him. Send Lakṣmaṇa now!’",
    "సరిగ్గా అప్పుడు {vibhishana|విభీషణుడు} వచ్చి అందరూ నిరాశలో ఉండడం చూశాడు. జరిగింది విని అన్నాడు: ‘ప్రభూ, ఇది అసంభవం. రావణుడు సీతను చంపనివ్వడు — ఆమెపై అతనికి అంత మోహం. మీరు మనసు కోల్పోవాలని ఇంద్రజిత్తు చేసిన మాయ ఇది. ఎందుకో నాకు తెలుసు: ఇప్పుడు అతను నికుంభిలా క్షేత్రానికి రహస్య యాగం చేయడానికి వెళ్ళాడు. అది పూర్తి చేస్తే ముల్లోకాల్లో ఎవరూ అతన్ని ఓడించలేరు. అతను యాగం ముగించకముందే దాడి చేసినవాడే అతన్ని చంపుతాడని బ్రహ్మ చెప్పాడు. ఇప్పుడే లక్ష్మణుణ్ణి పంపండి!’"]
  ],
  [
   ["p", "Rāma rose, his grief turning to resolve. ‘Go, Lakṣmaṇa, with Vibhīṣaṇa, Hanumān, Jāmbavān and the army. Destroy Indrajit before he finishes his sacrifice.’ Lakṣmaṇa touched his brother's feet, took up his bow, and set out at once.",
    "రాముడు లేచాడు; అతని దుఃఖం సంకల్పంగా మారింది. ‘లక్ష్మణా, విభీషణుడు, హనుమంతుడు, జాంబవంతుడు, సేనతో వెళ్ళు. ఇంద్రజిత్తు యాగం ముగించకముందే అతన్ని నాశనం చెయ్యి.’ లక్ష్మణుడు అన్న పాదాలు తాకి, విల్లు చేతబట్టి వెంటనే బయలుదేరాడు."],
   ["dyk", "🎭", "Lakṣmaṇa's outburst — ‘what use is dharma?’ — is one of the most honest moments in the epic. Vālmīki lets even good people doubt in their darkest hour, and then shows the truth coming to light.",
    "‘ధర్మం వల్ల ఏం ప్రయోజనం?’ అన్న లక్ష్మణుని ఆవేదన ఈ మహాకావ్యంలో అత్యంత నిజాయితీ గల క్షణాల్లో ఒకటి. అత్యంత చీకటి సమయంలో మంచివారు కూడా సందేహపడడాన్ని వాల్మీకి చూపిస్తాడు; తర్వాత సత్యం వెలుగులోకి రావడం చూపిస్తాడు."]
  ]
 ],
 remember: [
  ["Rāma refused to destroy all rākṣasas for one: the innocent must not be harmed.", "ఒక్కడి కోసం రాక్షసులందరినీ నాశనం చేయడానికి రాముడు నిరాకరించాడు: నిర్దోషులకు హాని చేయకూడదు."],
  ["Indrajit made a magic Sītā and pretended to kill her, and Rāma fell in grief.", "ఇంద్రజిత్తు మాయా సీతను సృష్టించి చంపినట్టు నటించాడు; రాముడు దుఃఖంతో కూలిపోయాడు."],
  ["Vibhīṣaṇa revealed the trick and Indrajit's secret sacrifice at Nikumbhilā.", "విభీషణుడు ఆ మాయను, నికుంభిలలో ఇంద్రజిత్తు రహస్య యాగాన్ని బయటపెట్టాడు."]
 ],
 think: ["Even angry and hurt, Rāma would not harm the innocent. Why is it important to keep our values even when others don't?", "కోపంగా, బాధగా ఉన్నా రాముడు నిర్దోషులకు హాని చేయలేదు. ఇతరులు పాటించకపోయినా మన విలువలను కాపాడుకోవడం ఎందుకు ముఖ్యం?"]
},
{
 id: "yuddha-19", kanda: "yuddha", n: 19, order: 619, date: "2026-10-21",
 title: "Indrajit at Nikumbhilā", titleTe: "నికుంభిలలో ఇంద్రజిత్తు", sargas: "84–91", scene: "forest",
 who: ["lakshmana", "vibhishana", "indrajit", "hanuman", "rama", "sushena"],
 pages: [
  [
   ["p", "{lakshmana|Lakṣmaṇa} and the vānaras rushed to Nikumbhilā, a dark grove with a great banyan tree, where Indrajit's army guarded the shrine. The vānaras attacked the guards with trees and rocks, and the noise of battle broke into the sacrifice. Furious, {indrajit|Indrajit} left his fire before the rites were finished and came out in his chariot. When he saw his uncle beside Lakṣmaṇa, he cried, ‘{vibhishana|Vibhīṣaṇa}! You were born and raised here; you are my father's own brother. And you have joined our enemies and shown them the secret of my sacrifice! Shame on you, traitor!’",
    "{lakshmana|లక్ష్మణుడు}, వానరులు నికుంభిలకు పరుగెత్తారు — పెద్ద మర్రిచెట్టు ఉన్న చీకటి వనం; ఇంద్రజిత్తు సైన్యం ఆ క్షేత్రాన్ని కాపలా కాస్తోంది. వానరులు చెట్లు, రాళ్ళతో కావలివారిపై దాడి చేశారు; యుద్ధ ఘోష యాగాన్ని భంగపరిచింది. కోపంతో {indrajit|ఇంద్రజిత్తు} కర్మలు పూర్తి కాకముందే అగ్నిని వదిలి రథంలో బయటకు వచ్చాడు. లక్ష్మణుని పక్కన చిన్నాన్నను చూసి అరిచాడు: ‘{vibhishana|విభీషణా}! నువ్వు ఇక్కడే పుట్టి పెరిగావు; మా నాన్న సొంత తమ్ముడివి. శత్రువులతో కలిసి నా యాగ రహస్యం వారికి చెప్పావు! ఛీ, ద్రోహీ!’"],
   ["p", "Vibhīṣaṇa answered calmly, ‘I was born a rākṣasa, but my nature is not a rākṣasa's. I do not delight in cruelty. When my brother's sins became too great, I left him, as one leaves a house on fire. Stealing others' wives, robbing others' wealth, distrusting friends — these three faults destroy a person. Your father has all three. Today you will die, and soon he will follow you.’"
   , "విభీషణుడు ప్రశాంతంగా జవాబిచ్చాడు: ‘నేను రాక్షసుడిగా పుట్టాను, కానీ నా స్వభావం రాక్షస స్వభావం కాదు. క్రూరత్వంలో నాకు ఆనందం లేదు. అన్న పాపాలు మితిమీరినప్పుడు, మండుతున్న ఇంటిని వదిలినట్టు అతన్ని వదిలాను. పరుల భార్యలను అపహరించడం, పరుల సొమ్ము దోచుకోవడం, మిత్రులను అనుమానించడం — ఈ మూడు దోషాలు మనిషిని నాశనం చేస్తాయి. మీ నాన్నకు ఈ మూడూ ఉన్నాయి. ఈ రోజు నువ్వు చస్తావు, త్వరలోనే అతను నిన్ను అనుసరిస్తాడు.’"]
  ],
  [
   ["p", "Then began the greatest duel of the war — Lakṣmaṇa against Indrajit. They fought from chariot and from the ground, with arrows thick as rain. Indrajit's armour was cut away; Lakṣmaṇa's body was covered in wounds; both bled like flowering kiṃśuka trees. They used every divine weapon — Varuṇa's against Agni's, Rudra's against Yama's, Sūrya's against Kubera's — each one cancelling the other. Lakṣmaṇa killed Indrajit's charioteer and horses; Indrajit fought on foot. Hanumān and Vibhīṣaṇa held back the rākṣasa army. The gods themselves gathered in the sky to watch.",
    "అప్పుడు యుద్ధంలోనే అత్యంత గొప్ప ద్వంద్వ యుద్ధం మొదలైంది — లక్ష్మణుడు వర్సెస్ ఇంద్రజిత్తు. రథం మీద నుండి, నేల మీద నుండి వానలా దట్టమైన బాణాలతో పోరాడారు. ఇంద్రజిత్తు కవచం తెగిపోయింది; లక్ష్మణుని శరీరం గాయాలతో నిండిపోయింది; ఇద్దరూ పూసిన మోదుగ చెట్లలా రక్తసిక్తమయ్యారు. అన్ని దివ్యాస్త్రాలూ ప్రయోగించారు — ఆగ్నేయానికి వారుణం, యమాస్త్రానికి రౌద్రం, కౌబేరానికి సౌరం — ఒకదాన్ని ఒకటి నిర్వీర్యం చేశాయి. లక్ష్మణుడు ఇంద్రజిత్తు సారథిని, గుర్రాలను చంపాడు; ఇంద్రజిత్తు కాలినడకన పోరాడాడు. హనుమంతుడు, విభీషణుడు రాక్షస సైన్యాన్ని అడ్డుకున్నారు. స్వయంగా దేవతలే ఆకాశంలో గుమిగూడి చూశారు."],
   ["p", "At last Lakṣmaṇa took up an arrow given by Indra and fitted it to his bow. Drawing it back to his ear, he spoke a solemn oath: ‘If Rāma, son of Daśaratha, is truly devoted to dharma, true to his word, and unequalled in valour, then let this arrow kill Indrajit!’ He released it. The arrow flew like blazing fire and struck off Indrajit's head, with its shining helmet and earrings. The conqueror of Indra fell to the earth.",
    "చివరికి లక్ష్మణుడు ఇంద్రుడిచ్చిన ఒక బాణం తీసి విల్లుకు సంధించాడు. చెవి వరకు లాగి గంభీరంగా ప్రమాణం చేశాడు: ‘దశరథ పుత్రుడైన రాముడు నిజంగా ధర్మనిష్ఠుడు, సత్యసంధుడు, సాటిలేని పరాక్రమశాలి అయితే, ఈ బాణం ఇంద్రజిత్తును సంహరించుగాక!’ వదిలాడు. మండే అగ్నిలా దూసుకెళ్ళిన ఆ బాణం మెరిసే శిరస్త్రాణం, కుండలాలతో సహా ఇంద్రజిత్తు తలను నరికింది. ఇంద్రుణ్ణి జయించినవాడు నేలకూలాడు."]
  ],
  [
   ["p", "The rākṣasas fled, the vānaras roared, and the gods showered flowers. Lakṣmaṇa, wounded and weary, leaned on Jāmbavān and Hanumān and came back to {rama|Rāma}. Rāma embraced him, kissed his head, and held him on his lap. ‘You have done the hardest thing of all. With Indrajit dead, Rāvaṇa is as good as dead. Today I have truly won.’ He called for {sushena|Suṣeṇa}, who healed Lakṣmaṇa's wounds with herbs, so that the arrows came out and the pain was gone.",
    "రాక్షసులు పారిపోయారు, వానరులు గర్జించారు, దేవతలు పూలవాన కురిపించారు. గాయపడి అలసిపోయిన లక్ష్మణుడు జాంబవంతుడు, హనుమంతుల మీద ఆనుకుని {rama|రాముని} దగ్గరకు వచ్చాడు. రాముడు అతన్ని ఆలింగనం చేసుకుని, తల మీద ముద్దాడి, ఒడిలో పెట్టుకున్నాడు. ‘అన్నిటికంటే కష్టమైన పని చేశావు. ఇంద్రజిత్తు చనిపోవడంతో రావణుడు చచ్చినట్టే. ఈ రోజు నిజంగా గెలిచాను.’ {sushena|సుషేణుణ్ణి} పిలిపించగా అతను మూలికలతో లక్ష్మణుని గాయాలు మాన్పాడు; బాణాలు బయటకు వచ్చాయి, నొప్పి పోయింది."],
   ["dyk", "🏹", "Lakṣmaṇa's oath — staking his arrow on Rāma's truth and goodness — shows what the brothers believed: that dharma itself gives strength. The arrow was powered not only by Indra's gift, but by Rāma's character.",
    "రాముని సత్యం, మంచితనం మీద తన బాణాన్ని పందెంగా పెట్టిన లక్ష్మణుని ప్రమాణం అన్నదమ్ముల నమ్మకాన్ని చూపిస్తుంది: ధర్మమే బలాన్ని ఇస్తుంది. ఆ బాణానికి శక్తి ఇంద్రుని వరం నుండే కాదు, రాముని శీలం నుండి కూడా వచ్చింది."]
  ]
 ],
 remember: [
  ["Lakṣmaṇa broke Indrajit's secret sacrifice at Nikumbhilā.", "లక్ష్మణుడు నికుంభిలలో ఇంద్రజిత్తు రహస్య యాగాన్ని భంగం చేశాడు."],
  ["Vibhīṣaṇa said three faults destroy a person: stealing wives, stealing wealth, distrusting friends.", "పరస్త్రీ అపహరణ, పరధన అపహరణ, మిత్రులపై అనుమానం — ఈ మూడు దోషాలు మనిషిని నాశనం చేస్తాయని విభీషణుడు చెప్పాడు."],
  ["Lakṣmaṇa killed Indrajit with Indra's arrow, swearing by Rāma's truth.", "రాముని సత్యం మీద ప్రమాణం చేసి లక్ష్మణుడు ఇంద్రాస్త్రంతో ఇంద్రజిత్తును చంపాడు."]
 ],
 think: ["Vibhīṣaṇa said he was born a rākṣasa but did not have a rākṣasa's nature. Do our choices matter more than where we are born?", "రాక్షసుడిగా పుట్టినా తనది రాక్షస స్వభావం కాదని విభీషణుడు అన్నాడు. మనం ఎక్కడ పుట్టామనే దానికంటే మన ఎంపికలు ఎక్కువ ముఖ్యమా?"]
},
{
 id: "yuddha-20", kanda: "yuddha", n: 20, order: 620, date: "2026-10-21",
 title: "Rāvaṇa's Grief and Fury", titleTe: "రావణుని దుఃఖం, ఆగ్రహం", sargas: "92–99", scene: "palace",
 who: ["ravana", "sita", "rama", "sugriva", "angada"],
 pages: [
  [
   ["p", "When {ravana|Rāvaṇa} heard that Indrajit was dead, he fainted, and when he woke he wept aloud. ‘My son, my hero, conqueror of Indra! You were to perform my funeral rites, and now I must perform yours.’ Then grief turned to madness. ‘It is because of Sītā that my son is dead! I will kill her!’ He seized his sword and rushed to the Aśoka grove, his eyes blazing. Sītā saw him coming and trembled. ‘He is coming to kill me. If only I had gone with Hanumān!’",
    "ఇంద్రజిత్తు చనిపోయాడని విని {ravana|రావణుడు} స్పృహ తప్పాడు; మేల్కొన్నాక బిగ్గరగా ఏడ్చాడు. ‘నా కొడుకా, నా వీరుడా, ఇంద్రుణ్ణి జయించినవాడా! నువ్వు నా అంత్యక్రియలు చేయాల్సినవాడివి, ఇప్పుడు నేను నీవి చేయాల్సి వచ్చింది.’ తర్వాత దుఃఖం ఉన్మాదంగా మారింది. ‘సీత వల్లే నా కొడుకు చనిపోయాడు! ఆమెను చంపుతాను!’ కత్తి పట్టుకుని, రగిలే కళ్ళతో అశోకవనానికి పరుగెత్తాడు. అతను రావడం చూసి సీత వణికిపోయింది. ‘నన్ను చంపడానికి వస్తున్నాడు. హనుమంతునితో వెళ్ళి ఉంటే బాగుండేది!’"],
   ["p", "But Rāvaṇa's wise minister Supārśva stood in his way. ‘My king, you are the brother of Kubera, learned in the Vedas, devoted to your duties. How can you think of killing a woman? It would be a stain on your name forever. Turn your anger on Rāma instead. Tomorrow is the new moon: go out with your army, kill Rāma, and Sītā will be yours.’ Rāvaṇa listened, lowered his sword, and went back to his palace."
   , "కానీ రావణుని జ్ఞాని అయిన మంత్రి సుపార్శ్వుడు అడ్డుగా నిలబడ్డాడు. ‘మహారాజా, మీరు కుబేరుని సోదరులు, వేదపండితులు, కర్తవ్యనిష్ఠులు. స్త్రీని చంపాలని ఎలా ఆలోచిస్తున్నారు? అది మీ పేరుకు శాశ్వత కళంకం అవుతుంది. మీ కోపాన్ని రాముని మీదకు మళ్ళించండి. రేపు అమావాస్య: సైన్యంతో బయలుదేరి రాముణ్ణి చంపండి; సీత మీదవుతుంది.’ రావణుడు విని, కత్తి దించి, అంతఃపురానికి తిరిగి వెళ్ళాడు."]
  ],
  [
   ["p", "Rāvaṇa sent out all his remaining army — elephants, chariots, horsemen and foot soldiers. {rama|Rāma} faced them alone with the Gāndharva weapon. Its magic made the rākṣasas see a thousand Rāmas everywhere at once; they could not tell where the real Rāma was. In a few hours, Rāma had destroyed ten thousand chariots, eighteen thousand elephants, fourteen thousand horses and two hundred thousand rākṣasas. ‘Such is the strength of my arms,’ said Rāma quietly, ‘and of Śiva's grace.’",
    "రావణుడు మిగిలిన తన సైన్యాన్నంతా పంపాడు — ఏనుగులు, రథాలు, అశ్వికులు, కాల్బలం. {rama|రాముడు} గాంధర్వాస్త్రంతో ఒంటరిగా వారిని ఎదుర్కొన్నాడు. దాని మాయ వల్ల రాక్షసులకు అన్నిచోట్లా ఒకేసారి వెయ్యి మంది రాములు కనిపించారు; అసలు రాముడు ఎక్కడో గుర్తుపట్టలేకపోయారు. కొన్ని గంటల్లో రాముడు పది వేల రథాలను, పద్దెనిమిది వేల ఏనుగులను, పద్నాలుగు వేల గుర్రాలను, రెండు లక్షల రాక్షసులను నాశనం చేశాడు. ‘ఇది నా భుజబలం,’ అన్నాడు రాముడు నెమ్మదిగా, ‘శివుని అనుగ్రహం కూడా.’"],
   ["p", "That night the women of Laṅkā wept in every house — mothers, wives and sisters who had lost their sons, husbands and brothers. ‘Why did Śūrpaṇakhā ever go near Rāma in the forest? Why did Rāvaṇa not listen to Vibhīṣaṇa? Because of one man's desire, all of us have lost everything.’ Rāvaṇa heard their weeping, and it filled him with fury rather than sorrow."
   , "ఆ రాత్రి లంకలో ప్రతి ఇంట్లో స్త్రీలు ఏడ్చారు — కొడుకులను, భర్తలను, సోదరులను కోల్పోయిన తల్లులు, భార్యలు, సోదరీమణులు. ‘అసలు శూర్పణఖ అడవిలో రాముని దగ్గరకు ఎందుకు వెళ్ళింది? రావణుడు విభీషణుని మాట ఎందుకు వినలేదు? ఒక్కడి కోరిక వల్ల మనమంతా సర్వస్వం కోల్పోయాం.’ వారి ఏడుపు విని రావణునికి దుఃఖం కాదు, కోపం వచ్చింది."]
  ],
  [
   ["p", "In the morning he rode out with his last great warriors — Virūpākṣa, Mahodara and Mahāpārśva. {sugriva|Sugrīva} killed Virūpākṣa and then Mahodara in fierce duels; {angada|Aṅgada} killed Mahāpārśva with a blow of his fist. Now Rāvaṇa stood alone in his chariot on the battlefield, facing Rāma. The final battle had begun.",
    "ఉదయం అతను తన చివరి గొప్ప వీరులు — విరూపాక్షుడు, మహోదరుడు, మహాపార్శ్వుడు — తో బయలుదేరాడు. భీకర ద్వంద్వ యుద్ధాల్లో {sugriva|సుగ్రీవుడు} విరూపాక్షుణ్ణి, తర్వాత మహోదరుణ్ణి చంపాడు; {angada|అంగదుడు} పిడికిలి దెబ్బతో మహాపార్శ్వుణ్ణి చంపాడు. ఇప్పుడు రావణుడు రణభూమిలో తన రథంలో ఒంటరిగా రాముని ఎదుట నిలబడ్డాడు. చివరి యుద్ధం మొదలైంది."],
   ["dyk", "😢", "Vālmīki gives a voice to the grieving rākṣasa women. Even in an epic about a just war, he does not forget the suffering of ordinary people on the losing side.",
    "దుఃఖిస్తున్న రాక్షస స్త్రీలకు వాల్మీకి స్వరం ఇస్తాడు. న్యాయమైన యుద్ధం గురించిన మహాకావ్యంలో కూడా ఓడిపోతున్న పక్షంలోని సామాన్య ప్రజల బాధను అతను మరచిపోడు."]
  ]
 ],
 remember: [
  ["Mad with grief, Rāvaṇa tried to kill Sītā, but his minister Supārśva stopped him.", "దుఃఖంతో ఉన్మత్తుడైన రావణుడు సీతను చంపబోయాడు; మంత్రి సుపార్శ్వుడు ఆపాడు."],
  ["Rāma destroyed Rāvaṇa's army alone with the Gāndharva weapon.", "రాముడు గాంధర్వాస్త్రంతో ఒంటరిగా రావణుని సైన్యాన్ని నాశనం చేశాడు."],
  ["The women of Laṅkā wept for their dead; Rāvaṇa came out for the last battle.", "లంక స్త్రీలు చనిపోయినవారి కోసం ఏడ్చారు; రావణుడు చివరి యుద్ధానికి వచ్చాడు."]
 ],
 think: ["The women of Laṅkā suffered because of one man's wrong choice. How can one person's actions affect many others?", "ఒక్కడి తప్పుడు ఎంపిక వల్ల లంక స్త్రీలు బాధపడ్డారు. ఒక వ్యక్తి చర్యలు ఎంతమంది మీద ప్రభావం చూపగలవు?"]
}
]);
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "yuddha-21", kanda: "yuddha", n: 21, order: 621, date: "2026-10-21",
 title: "Lakṣmaṇa Struck Again", titleTe: "మళ్ళీ లక్ష్మణునికి శక్తి", sargas: "100–102", scene: "hill",
 who: ["ravana", "vibhishana", "lakshmana", "rama", "sushena", "hanuman"],
 pages: [
  [
   ["p", "In the battle, {vibhishana|Vibhīṣaṇa} killed Rāvaṇa's horses with his mace. Enraged at his brother, {ravana|Rāvaṇa} hurled a mighty spear, made by the architect Maya, straight at Vibhīṣaṇa. But {lakshmana|Lakṣmaṇa} leapt in front of Vibhīṣaṇa and cut it down with arrows. ‘Since you saved him,’ Rāvaṇa roared, ‘this one is for you!’ He hurled another spear, blazing like a thunderbolt, ringing with eight bells. It struck Lakṣmaṇa in the chest, pierced right through him and buried itself in the earth. Lakṣmaṇa fell.",
    "యుద్ధంలో {vibhishana|విభీషణుడు} గదతో రావణుని గుర్రాలను చంపాడు. తమ్ముని మీద కోపంతో {ravana|రావణుడు} శిల్పి మయుడు తయారుచేసిన మహా శక్తి ఆయుధాన్ని నేరుగా విభీషణుని మీదకు విసిరాడు. కానీ {lakshmana|లక్ష్మణుడు} విభీషణుని ముందుకు దూకి బాణాలతో దాన్ని కూల్చాడు. ‘అతన్ని కాపాడావు కాబట్టి,’ రావణుడు గర్జించాడు, ‘ఇది నీ కోసం!’ పిడుగులా మండుతూ, ఎనిమిది గంటలు మోగుతున్న మరో శక్తిని విసిరాడు. అది లక్ష్మణుని ఛాతీని చీల్చుకుని భూమిలో దిగబడింది. లక్ష్మణుడు పడిపోయాడు."],
   ["p", "{rama|Rāma} rushed to his brother, pulled the spear out with both hands and broke it in two, though Rāvaṇa's arrows rained on him all the while. Then he told Hanumān and Sugrīva to guard Lakṣmaṇa, and turned on Rāvaṇa with such fury that Rāvaṇa fled from the field. Only then did Rāma sit down beside Lakṣmaṇa and weep. ‘Without Lakṣmaṇa, what use is victory? What use is Sītā, or my life? I can find another wife, but never another brother like this.’"
   , "{rama|రాముడు} తమ్ముని దగ్గరకు పరుగెత్తి, రావణుని బాణాలు తన మీద కురుస్తున్నా, రెండు చేతులతో శక్తిని బయటకు లాగి రెండుగా విరిచాడు. తర్వాత లక్ష్మణుణ్ణి కాపాడమని హనుమంతుడు, సుగ్రీవునికి చెప్పి, రావణుడు రణభూమి నుండి పారిపోయేంత ఆగ్రహంతో అతని మీద విరుచుకుపడ్డాడు. అప్పుడు మాత్రమే లక్ష్మణుని పక్కన కూర్చుని ఏడ్చాడు. ‘లక్ష్మణుడు లేకపోతే విజయం ఎందుకు? సీత ఎందుకు, నా ప్రాణం ఎందుకు? ఇంకో భార్య దొరకవచ్చు, కానీ ఇలాంటి తమ్ముడు ఎన్నడూ దొరకడు.’"]
  ],
  [
   ["p", "{sushena|Suṣeṇa}, the vānara healer, examined Lakṣmaṇa. ‘He is not dead, my lord. His face has not changed colour; his palms are still red; his heart beats. Hanumān, go quickly to the mountain of herbs and bring the four healing herbs, especially Viśalyakaraṇī.’ {hanuman|Hanumān} flew off at once. Again he could not tell one herb from another, and again he lifted the whole peak and brought it back.",
    "వానర వైద్యుడు {sushena|సుషేణుడు} లక్ష్మణుణ్ణి పరీక్షించాడు. ‘ప్రభూ, ఇతను చనిపోలేదు. ముఖం రంగు మారలేదు; అరచేతులు ఇంకా ఎర్రగా ఉన్నాయి; గుండె కొట్టుకుంటోంది. హనుమా, త్వరగా ఓషధీ పర్వతానికి వెళ్ళి నాలుగు మూలికలు, ముఖ్యంగా విశల్యకరణిని తీసుకురా.’ {hanuman|హనుమంతుడు} వెంటనే ఎగిరాడు. మళ్ళీ ఏ మూలిక ఏదో గుర్తుపట్టలేక, మళ్ళీ శిఖరాన్నంతా ఎత్తుకొచ్చాడు."],
   ["p", "Suṣeṇa crushed the herb and held it to Lakṣmaṇa's nose. As soon as he breathed it in, Lakṣmaṇa sat up, the wound gone, as though waking from sleep. Rāma embraced him with tears of joy. But Lakṣmaṇa said at once, ‘Brother, you made a vow to kill Rāvaṇa. Do not waste time weeping over me. Kill him before the sun sets today, and keep your word.’"
   , "సుషేణుడు మూలికను నలిపి లక్ష్మణుని ముక్కు దగ్గర పెట్టాడు. దాన్ని పీల్చగానే గాయం మాయమై, నిద్ర నుండి లేచినట్టు లక్ష్మణుడు లేచి కూర్చున్నాడు. రాముడు ఆనందబాష్పాలతో అతన్ని ఆలింగనం చేసుకున్నాడు. కానీ లక్ష్మణుడు వెంటనే అన్నాడు: ‘అన్నా, రావణుణ్ణి చంపుతానని ప్రతిజ్ఞ చేశావు. నా కోసం ఏడుస్తూ సమయం వృథా చేయకు. ఈ రోజు సూర్యుడు అస్తమించకముందే అతన్ని చంపి నీ మాట నిలబెట్టుకో.’"]
  ],
  [
   ["p", "Rāma rose and took up his bow again. Rāvaṇa had returned to the field in a new chariot, more splendid than before. The two greatest warriors of the age faced each other once more, and the vānaras and rākṣasas stopped fighting to watch.",
    "రాముడు లేచి మళ్ళీ విల్లు చేతబట్టాడు. రావణుడు మునుపటికంటే వైభవమైన కొత్త రథంలో రణభూమికి తిరిగి వచ్చాడు. ఆ యుగపు ఇద్దరు మహావీరులు మరోసారి ఎదురెదురయ్యారు; వానరులు, రాక్షసులు పోరాటం ఆపి చూశారు."],
   ["more", "Hanumān and the herbs in later tellings", "తర్వాతి కథనాల్లో హనుమంతుడు, మూలికలు", "Sañjīvanī stories", "సంజీవని కథలు", [
    ["p", "Many later Rāmāyaṇas and folk tellings join this scene with the earlier one, and add adventures on Hanumān's journey — a demon named Kālanemi trying to delay him, or Bharata shooting him down by mistake over Ayodhyā. These are much loved, but they are not in Vālmīki's text, where Hanumān simply flies, lifts the peak and returns.",
     "చాలా తర్వాతి రామాయణాలు, జానపద కథనాలు ఈ సన్నివేశాన్ని ముందటి దానితో కలిపి, హనుమంతుని ప్రయాణంలో సాహసాలు జోడిస్తాయి — కాలనేమి అనే రాక్షసుడు ఆలస్యం చేయడానికి ప్రయత్నించడం, అయోధ్య మీదుగా వెళ్తుంటే భరతుడు పొరపాటున బాణం వేయడం. ఇవి ఎంతో ప్రియమైనవే, కానీ వాల్మీకి గ్రంథంలో లేవు; అక్కడ హనుమంతుడు ఎగిరి, శిఖరం ఎత్తి, తిరిగి వస్తాడు అంతే."]
   ]]
  ]
 ],
 remember: [
  ["Lakṣmaṇa saved Vibhīṣaṇa, and Rāvaṇa's spear struck Lakṣmaṇa down.", "లక్ష్మణుడు విభీషణుణ్ణి కాపాడాడు; రావణుని శక్తి లక్ష్మణుణ్ణి కూల్చింది."],
  ["Hanumān brought the mountain of herbs a second time, and Suṣeṇa healed Lakṣmaṇa.", "హనుమంతుడు రెండోసారి ఓషధీ పర్వతాన్ని తెచ్చాడు; సుషేణుడు లక్ష్మణుణ్ణి స్వస్థపరిచాడు."],
  ["Lakṣmaṇa urged Rāma to kill Rāvaṇa before sunset and keep his vow.", "సూర్యాస్తమయానికి ముందే రావణుణ్ణి చంపి ప్రతిజ్ఞ నిలబెట్టుకోమని లక్ష్మణుడు రాముణ్ణి కోరాడు."]
 ],
 think: ["Lakṣmaṇa took the spear meant for Vibhīṣaṇa, who had only just joined them. What does this show about how Rāma's side treated those who came for shelter?", "ఇప్పుడే చేరిన విభీషణుని కోసం వచ్చిన శక్తిని లక్ష్మణుడు తనపై తీసుకున్నాడు. శరణు కోరి వచ్చినవారిని రాముని పక్షం ఎలా చూసిందో ఇది ఏం చూపిస్తుంది?"]
},
{
 id: "yuddha-22", kanda: "yuddha", n: 22, order: 622, date: "2026-10-21",
 title: "Indra's Chariot and the Hymn to the Sun", titleTe: "ఇంద్ర రథం, ఆదిత్య హృదయం", sargas: "103–105", scene: "sky",
 who: ["rama", "ravana", "indra", "matali", "agastya"],
 pages: [
  [
   ["p", "{rama|Rāma} stood on the ground; {ravana|Rāvaṇa} fought from a chariot. The gods in the sky said, ‘This is not a fair fight.’ So {indra|Indra} sent his own golden chariot, drawn by green horses, with his charioteer {matali|Mātali}, his armour, his great bow and his spear. Mātali bowed to Rāma: ‘Indra sends you this chariot to kill Rāvaṇa. Mount it, my lord.’ Rāma walked round it in respect — and, careful of Rāvaṇa's tricks, checked that it was truly from Indra — and then mounted it, shining like the sun.",
    "{rama|రాముడు} నేల మీద నిలబడ్డాడు; {ravana|రావణుడు} రథం మీద నుండి పోరాడుతున్నాడు. ‘ఇది న్యాయమైన యుద్ధం కాదు,’ అన్నారు ఆకాశంలో దేవతలు. అందుకని {indra|ఇంద్రుడు} ఆకుపచ్చ గుర్రాలు లాగే తన సొంత బంగారు రథాన్ని, సారథి {matali|మాతలిని}, కవచం, మహా ధనుస్సు, శక్తి ఆయుధంతో పంపాడు. మాతలి రామునికి నమస్కరించాడు: ‘రావణుణ్ణి చంపడానికి ఇంద్రుడు ఈ రథం పంపాడు. ప్రభూ, ఎక్కండి.’ రాముడు గౌరవంగా దానికి ప్రదక్షిణ చేశాడు — రావణుని మాయల పట్ల జాగ్రత్తగా, అది నిజంగా ఇంద్రునిదేనా అని సరిచూసుకుని — తర్వాత సూర్యునిలా ప్రకాశిస్తూ ఎక్కాడు."],
   ["p", "The battle grew terrible. Rāvaṇa's arrows turned into serpents; Rāma's turned into eagles that ate them. Rāvaṇa shot down Indra's banner and wounded Mātali's horses. For a moment it seemed Rāma was losing. Then Rāma struck Rāvaṇa so hard that he fainted in his chariot, and Rāvaṇa's charioteer quickly drove him away from the field. When Rāvaṇa woke, he was furious. ‘You have shamed me before my enemy! Take me back!’ The charioteer said, ‘I did it to save your life, my king, as a good charioteer should.’ Rāvaṇa forgave him, gave him a bracelet, and returned to the fight."
   , "యుద్ధం భయంకరంగా మారింది. రావణుని బాణాలు పాములుగా మారాయి; రాముని బాణాలు వాటిని తినే గరుడ పక్షులుగా మారాయి. రావణుడు ఇంద్రుని ధ్వజాన్ని కూల్చి, మాతలి గుర్రాలను గాయపరిచాడు. ఒక క్షణం రాముడు ఓడిపోతున్నట్టు అనిపించింది. తర్వాత రాముడు రావణుణ్ణి ఎంత గట్టిగా కొట్టాడంటే అతను రథంలో స్పృహ తప్పాడు; రావణుని సారథి త్వరగా రథాన్ని రణభూమి నుండి దూరంగా నడిపాడు. మేల్కొన్న రావణుడు కోపించాడు. ‘శత్రువు ముందు నన్ను అవమానపరిచావు! వెనక్కి తీసుకెళ్ళు!’ ‘మంచి సారథి చేయాల్సినట్టే, మీ ప్రాణం కాపాడడానికే అలా చేశాను మహారాజా,’ అన్నాడు సారథి. రావణుడు అతన్ని క్షమించి, కంకణం ఇచ్చి, యుద్ధానికి తిరిగి వచ్చాడు."]
  ],
  [
   ["p", "As Rāma stood, tired from battle and deep in thought, with Rāvaṇa before him ready to fight again, the great sage {agastya|Agastya}, who had come with the gods to watch, approached him. ‘Rāma, my child, listen to this eternal secret, by which you will conquer all your enemies in battle. It is the Āditya Hṛdayam — the Heart of the Sun — a hymn to the Sun god, who is the light of all the worlds and the witness of all deeds. Recite it three times, and you will win.’",
    "యుద్ధంలో అలసిపోయి, ఆలోచనలో మునిగి రాముడు నిలబడి ఉండగా, మళ్ళీ పోరాడడానికి రావణుడు ఎదురుగా ఉండగా, దేవతలతో కలిసి చూడడానికి వచ్చిన మహర్షి {agastya|అగస్త్యుడు} అతని దగ్గరకు వచ్చాడు. ‘రామా, నాయనా, ఈ సనాతన రహస్యాన్ని విను; దీనితో యుద్ధంలో శత్రువులందరినీ జయిస్తావు. ఇది ఆదిత్య హృదయం — సూర్యదేవుని స్తోత్రం; అతను లోకాలన్నిటికీ వెలుగు, అన్ని కర్మలకూ సాక్షి. మూడుసార్లు పఠించు, నువ్వు గెలుస్తావు.’"],
   ["sloka", ["తతో యుద్ధపరిశ్రాంతం సమరే చింతయా స్థితమ్ ।", "రావణం చాగ్రతో దృష్ట్వా యుద్ధాయ సముపస్థితమ్ ॥"],
    ["tato yuddhapariśrāntaṃ samare cintayā sthitam |", "rāvaṇaṃ cāgrato dṛṣṭvā yuddhāya samupasthitam ||"],
    "‘Then, seeing Rāma weary from battle and standing lost in thought, with Rāvaṇa before him ready to fight…’ — the opening verse of the Āditya Hṛdayam.",
    "‘అప్పుడు యుద్ధంలో అలసిపోయి ఆలోచనలో నిలిచిన రాముణ్ణి, ఎదురుగా యుద్ధానికి సిద్ధంగా ఉన్న రావణుణ్ణి చూసి…’ — ఆదిత్య హృదయం మొదటి శ్లోకం."]
  ],
  [
   ["p", "Rāma sipped water three times, purified himself, gazed at the Sun and recited the hymn three times with a joyful heart. Strength flowed back into him. He took up his bow and turned towards Rāvaṇa, determined to end the war. And the Sun, from the middle of the sky, seemed to say, ‘Hurry!’",
    "రాముడు మూడుసార్లు ఆచమనం చేసి, శుచియై, సూర్యుణ్ణి చూస్తూ సంతోషమైన మనసుతో స్తోత్రాన్ని మూడుసార్లు పఠించాడు. అతనిలోకి మళ్ళీ బలం ప్రవహించింది. విల్లు చేతబట్టి యుద్ధాన్ని ముగించాలనే నిశ్చయంతో రావణుని వైపు తిరిగాడు. ఆకాశం మధ్య నుండి సూర్యుడు ‘త్వరపడు!’ అన్నట్టు అనిపించింది."],
   ["dyk", "☀️", "The Āditya Hṛdayam is recited daily by many people for strength and health. It appears in most versions of Vālmīki's Rāmāyaṇa; scholars of the Critical Edition placed it in an appendix as a possible later addition.",
    "బలం, ఆరోగ్యం కోసం చాలామంది ఆదిత్య హృదయాన్ని రోజూ పఠిస్తారు. ఇది వాల్మీకి రామాయణం చాలా ప్రతుల్లో ఉంది; విమర్శనాత్మక సంపుటి (క్రిటికల్ ఎడిషన్) పండితులు దీన్ని తర్వాతి చేర్పు కావచ్చని అనుబంధంలో ఉంచారు."]
  ]
 ],
 remember: [
  ["Indra sent his chariot and charioteer Mātali so that Rāma could fight fairly.", "రాముడు సమానంగా పోరాడడానికి ఇంద్రుడు తన రథాన్ని, సారథి మాతలిని పంపాడు."],
  ["Rāvaṇa's charioteer drove him from the field to save his life.", "రావణుని ప్రాణం కాపాడడానికి అతని సారథి రణభూమి నుండి రథాన్ని దూరంగా నడిపాడు."],
  ["Sage Agastya taught Rāma the Āditya Hṛdayam, the hymn to the Sun.", "అగస్త్య మహర్షి రామునికి సూర్య స్తోత్రమైన ఆదిత్య హృదయం ఉపదేశించాడు."]
 ],
 think: ["Even Rāma felt tired and worried, and needed encouragement from a wise teacher. Who helps you find strength when you are tired?", "రాముడు కూడా అలసిపోయి ఆందోళన చెందాడు; జ్ఞాని అయిన గురువు ప్రోత్సాహం అవసరమైంది. మీరు అలసిపోయినప్పుడు బలం పొందడానికి ఎవరు సహాయపడతారు?"]
},
{
 id: "yuddha-23", kanda: "yuddha", n: 23, order: 623, date: "2026-10-21",
 title: "Rāma and Rāvaṇa", titleTe: "రామ రావణ యుద్ధం", sargas: "106–110", scene: "weapons",
 who: ["rama", "ravana", "matali"],
 pages: [
  [
   ["p", "As the last battle began, the omens told the story. Over Rāvaṇa's chariot, clouds rained blood, vultures circled, the earth shook, and a dark ring surrounded the sun. Over Rāma's chariot, gentle breezes blew and birds sang. The two armies stood still and watched, as if painted on a wall. ‘The ocean is like only the ocean,’ says Vālmīki, ‘the sky is like only the sky; and the battle of Rāma and Rāvaṇa is like only the battle of Rāma and Rāvaṇa.’",
    "చివరి యుద్ధం మొదలవుతుంటే శకునాలే కథ చెప్పాయి. రావణుని రథం మీద మేఘాలు రక్తం కురిపించాయి, గద్దలు తిరిగాయి, భూమి కంపించింది, సూర్యుని చుట్టూ నల్లని వలయం కమ్మింది. రాముని రథం మీద చల్లని గాలులు వీచాయి, పక్షులు పాడాయి. రెండు సైన్యాలూ గోడ మీద చిత్రించినట్టు కదలకుండా చూశాయి. ‘సముద్రానికి సముద్రమే సాటి, ఆకాశానికి ఆకాశమే సాటి; రామ రావణ యుద్ధానికి రామ రావణ యుద్ధమే సాటి,’ అంటాడు వాల్మీకి."],
   ["p", "Their arrows filled the sky until the sun disappeared. Their chariots circled each other like two planets in battle. Rāvaṇa hurled a spear covered with bells; Rāma stopped it with Indra's spear. Then Rāma took a terrible arrow and cut off one of {ravana|Rāvaṇa}'s heads. It fell — and at once a new head grew in its place. Rāma cut it off again; another grew. A hundred times Rāma cut off Rāvaṇa's heads, and a hundred times they grew back. Still the battle raged on without rest."
   , "వారి బాణాలు సూర్యుడు కనిపించనంతగా ఆకాశాన్ని నింపాయి. యుద్ధం చేసే రెండు గ్రహాల్లా వారి రథాలు ఒకదాని చుట్టూ ఒకటి తిరిగాయి. రావణుడు గంటలతో కప్పిన శక్తిని విసిరాడు; రాముడు ఇంద్రుని శక్తితో దాన్ని ఆపాడు. తర్వాత రాముడు భయంకరమైన బాణం తీసి {ravana|రావణుని} ఒక తల నరికాడు. అది పడిపోయింది — వెంటనే దాని స్థానంలో కొత్త తల మొలిచింది. రాముడు మళ్ళీ నరికాడు; ఇంకోటి మొలిచింది. వందసార్లు రాముడు రావణుని తలలు నరికాడు, వందసార్లు అవి మళ్ళీ మొలిచాయి. అయినా విశ్రాంతి లేకుండా యుద్ధం సాగుతూనే ఉంది."]
  ],
  [
   ["p", "Then {matali|Mātali} said, ‘My lord, why do you fight him as though you did not know how to kill him? Use the Brahmāstra. The time of his death, foretold by the gods, has come.’ Rāma took out the arrow that Agastya had given him long ago in the forest — made by Brahmā for Indra, with the wind in its feathers, fire and sun in its point, the weight of Mount Meru and Mount Mandara in its shaft. It blazed like the fire at the end of the world. Rāma fitted it to his bow with mantras from the Vedas, drew it to his ear, and released it.",
    "అప్పుడు {matali|మాతలి} అన్నాడు: ‘ప్రభూ, అతన్ని ఎలా చంపాలో తెలియనట్టు ఎందుకు పోరాడుతున్నారు? బ్రహ్మాస్త్రం ప్రయోగించండి. దేవతలు చెప్పిన అతని మరణ సమయం వచ్చింది.’ చాలా కాలం క్రితం అడవిలో అగస్త్యుడు ఇచ్చిన బాణాన్ని రాముడు తీశాడు — ఇంద్రుని కోసం బ్రహ్మ తయారుచేసినది; దాని ఈకల్లో వాయువు, మొనలో అగ్ని, సూర్యుడు, కాండంలో మేరు మందర పర్వతాల బరువు. అది ప్రళయాగ్నిలా మండింది. రాముడు వేదమంత్రాలతో దాన్ని విల్లుకు సంధించి, చెవి వరకు లాగి, వదిలాడు."],
   ["p", "The arrow flew like death itself, roaring like thunder. It struck Rāvaṇa in the chest and pierced his heart, then plunged into the earth, and came back, cleansed, to Rāma's quiver. The bow fell from Rāvaṇa's hands. The king of Laṅkā, who had made the three worlds weep, fell from his chariot to the ground, ‘like Vṛtra struck by Indra's thunderbolt’."
   , "ఆ బాణం సాక్షాత్తు మృత్యువులా, ఉరుములా గర్జిస్తూ దూసుకెళ్ళింది. రావణుని ఛాతీకి తగిలి గుండెను చీల్చి, భూమిలో దిగబడి, శుద్ధమై రాముని అమ్ములపొదికి తిరిగి వచ్చింది. రావణుని చేతుల నుండి విల్లు జారిపడింది. ముల్లోకాలనూ ఏడిపించిన లంకేశ్వరుడు ‘ఇంద్రుని వజ్రాయుధం తాకిన వృత్రాసురునిలా’ రథం నుండి నేలకూలాడు."]
  ],
  [
   ["p", "The rākṣasas who were left fled into Laṅkā. The vānaras roared ‘Victory to Rāma!’ Drums sounded in heaven; the gods showered flowers on Rāma's chariot; a cool, fragrant breeze blew; the sun shone bright and clear again. The sages sang Rāma's praise. The great war was over.",
    "మిగిలిన రాక్షసులు లంకలోకి పారిపోయారు. వానరులు ‘రామునికి జయం!’ అని గర్జించారు. స్వర్గంలో దుందుభులు మోగాయి; దేవతలు రాముని రథం మీద పూలవాన కురిపించారు; చల్లని, సువాసన గాలి వీచింది; సూర్యుడు మళ్ళీ స్వచ్ఛంగా ప్రకాశించాడు. మునులు రాముణ్ణి స్తుతించారు. మహాయుద్ధం ముగిసింది."],
   ["dyk", "🏹", "Vālmīki says that Rāma's arrow pierced Rāvaṇa's heart. Later tellings, like the Kamba Rāmāyaṇa and others, add that Vibhīṣaṇa revealed a secret — that Rāvaṇa kept nectar (amṛta) in his navel. That detail is not in Vālmīki.",
    "రాముని బాణం రావణుని గుండెను చీల్చిందని వాల్మీకి చెబుతాడు. రావణుడు నాభిలో అమృతం దాచుకున్నాడని విభీషణుడు రహస్యం చెప్పాడని తర్వాతి కథనాలు జోడిస్తాయి. ఆ వివరం వాల్మీకిలో లేదు."]
  ]
 ],
 remember: [
  ["Terrible omens surrounded Rāvaṇa, and good omens surrounded Rāma.", "రావణుని చుట్టూ భయంకర అపశకునాలు, రాముని చుట్టూ శుభ శకునాలు కనిపించాయి."],
  ["Rāma cut off Rāvaṇa's heads a hundred times, but they grew back.", "రాముడు వందసార్లు రావణుని తలలు నరికాడు, అవి మళ్ళీ మొలిచాయి."],
  ["On Mātali's advice, Rāma killed Rāvaṇa with the Brahmāstra Agastya had given him.", "మాతలి సలహాతో అగస్త్యుడు ఇచ్చిన బ్రహ్మాస్త్రంతో రాముడు రావణుణ్ణి సంహరించాడు."]
 ],
 think: ["Rāma had the Brahmāstra all along but needed Mātali to remind him. Have you ever had the answer to a problem without realising it?", "బ్రహ్మాస్త్రం రాముని దగ్గర ఎప్పుడూ ఉంది, కానీ మాతలి గుర్తుచేయాల్సి వచ్చింది. జవాబు మీ దగ్గరే ఉన్నా గుర్తించని సందర్భం మీకు ఎప్పుడైనా ఎదురైందా?"]
},
{
 id: "yuddha-24", kanda: "yuddha", n: 24, order: 624, date: "2026-10-21",
 title: "Mandodarī's Lament; Vibhīṣaṇa Crowned", titleTe: "మండోదరి విలాపం; విభీషణ పట్టాభిషేకం", sargas: "111–113", scene: "lamp",
 who: ["vibhishana", "rama", "mandodari", "lakshmana", "hanuman", "sita"],
 pages: [
  [
   ["p", "{vibhishana|Vibhīṣaṇa} saw his brother lying on the battlefield and wept. ‘O hero, you who slept on soft beds now lie on the bare earth. I warned you, but desire and pride blinded you.’ Then he hesitated. ‘He was cruel, untruthful and an enemy of dharma. Should I perform his funeral rites?’ {rama|Rāma} answered, ‘Enmity ends with death. Our purpose is achieved. Perform his rites with honour — he is as much mine now as he is yours. He was a great warrior, learned and strong.’",
    "రణభూమిలో పడి ఉన్న అన్నను చూసి {vibhishana|విభీషణుడు} ఏడ్చాడు. ‘ఓ వీరుడా, మెత్తని పాన్పుల మీద పడుకునేవాడివి ఇప్పుడు ఒట్టి నేల మీద పడుకున్నావు. నేను హెచ్చరించాను, కానీ కోరిక, గర్వం నిన్ను గుడ్డివాణ్ణి చేశాయి.’ తర్వాత సంకోచించాడు. ‘అతను క్రూరుడు, అసత్యవాది, ధర్మానికి శత్రువు. అతని అంత్యక్రియలు నేను చేయాలా?’ {rama|రాముడు} జవాబిచ్చాడు: ‘మరణంతో శత్రుత్వం ముగుస్తుంది. మన లక్ష్యం నెరవేరింది. గౌరవంగా అతని కర్మలు చెయ్యి — ఇప్పుడు అతను నీకెంతో నాకూ అంతే. అతను గొప్ప వీరుడు, విద్వాంసుడు, బలవంతుడు.’"],
   ["p", "The queens of Laṅkā came weeping out of the city. {mandodari|Mandodarī}, Rāvaṇa's chief queen, fell on her husband's body. ‘You conquered the gods, and a man has killed you? No — Rāma must be Viṣṇu himself, come to destroy you. I told you to return Sītā. Sītā, more faithful than Arundhatī, more patient than the earth — your desire for her was your death. Now, without you, where shall I go?’ Her lament was so moving that even the vānaras wept."
   , "లంక రాణులు ఏడుస్తూ నగరం నుండి బయటకు వచ్చారు. రావణుని పట్టమహిషి {mandodari|మండోదరి} భర్త శరీరం మీద పడింది. ‘దేవతలను జయించిన నిన్ను ఒక మనిషి చంపాడా? కాదు — నిన్ను నాశనం చేయడానికి వచ్చిన స్వయంగా విష్ణువే రాముడు. సీతను అప్పగించమని చెప్పాను. అరుంధతి కంటే పతివ్రత, భూమి కంటే ఓర్పు గల సీత — ఆమెపై నీ మోహమే నీ మరణం. ఇప్పుడు నువ్వు లేకుండా నేనెక్కడికి వెళ్ళాలి?’ ఆమె విలాపం ఎంత హృదయవిదారకంగా ఉందంటే వానరులు కూడా ఏడ్చారు."]
  ],
  [
   ["p", "Vibhīṣaṇa performed Rāvaṇa's funeral as the Vedas command, with sandalwood, sacred fires and offerings, and the queens returned to the city. Then Rāma asked {lakshmana|Lakṣmaṇa} to crown Vibhīṣaṇa king of Laṅkā — Rāma himself would not enter any city during his fourteen years of exile. Lakṣmaṇa anointed Vibhīṣaṇa with sea-water in golden jars, amid the chanting of mantras. The new king brought gifts, and Rāma accepted them only to please him.",
    "విభీషణుడు వేదవిధి ప్రకారం గంధపు చెక్కలు, పవిత్ర అగ్నులు, తర్పణాలతో రావణుని అంత్యక్రియలు చేశాడు; రాణులు నగరానికి తిరిగి వెళ్ళారు. తర్వాత విభీషణుణ్ణి లంకకు రాజుగా పట్టాభిషిక్తుణ్ణి చేయమని రాముడు {lakshmana|లక్ష్మణుణ్ణి} కోరాడు — పద్నాలుగేళ్ళ వనవాసంలో రాముడు ఏ నగరంలోనూ ప్రవేశించడు. మంత్రఘోష మధ్య బంగారు కలశాల్లోని సముద్రజలంతో లక్ష్మణుడు విభీషణుణ్ణి అభిషేకించాడు. కొత్త రాజు కానుకలు తెచ్చాడు; అతన్ని సంతోషపెట్టడానికే రాముడు వాటిని స్వీకరించాడు."],
   ["p", "Then Rāma turned to {hanuman|Hanumān}. ‘With King Vibhīṣaṇa's permission, go to Sītā. Tell her that Rāvaṇa is dead and that Lakṣmaṇa and I are well. Bring me her message.’ Hanumān entered Laṅkā and found Sītā under the tree in the Aśoka grove, still guarded by the rākṣasīs. When he told her the news, she could not speak for joy. At last she said, ‘I can find nothing in the three worlds to give you that equals this news — not gold, not jewels, not a kingdom.’",
    "తర్వాత రాముడు {hanuman|హనుమంతుని} వైపు తిరిగాడు. ‘విభీషణ మహారాజు అనుమతితో సీత దగ్గరకు వెళ్ళు. రావణుడు చనిపోయాడని, నేను, లక్ష్మణుడు క్షేమంగా ఉన్నామని చెప్పు. ఆమె సందేశం తీసుకురా.’ హనుమంతుడు లంకలో ప్రవేశించి, అశోకవనంలో చెట్టు కింద, ఇంకా రాక్షసుల కాపలాలోనే ఉన్న సీతను చూశాడు. వార్త చెప్పగానే ఆనందంతో ఆమె మాట్లాడలేకపోయింది. చివరికి, ‘ఈ వార్తకు సమానమైనది ముల్లోకాల్లో నీకు ఇవ్వడానికి ఏదీ కనిపించడం లేదు — బంగారం, రత్నాలు, రాజ్యం ఏదీ,’ అంది."]
  ],
  [
   ["p", "Hanumān looked at the rākṣasīs who had threatened Sītā for so many months. ‘My lady, let me kill these cruel women who tormented you.’ But {sita|Sītā} said, ‘No, Hanumān. They were only servants, obeying their king's orders. Now that he is dead, they will not trouble me. A noble person shows compassion to everyone — good or bad, even to those who deserve punishment. Who is there who has never done wrong?’ Hanumān bowed. ‘You are truly worthy to be Rāma's wife.’",
    "నెలల తరబడి సీతను బెదిరించిన రాక్షసుల వైపు హనుమంతుడు చూశాడు. ‘అమ్మా, మిమ్మల్ని హింసించిన ఈ క్రూర స్త్రీలను చంపనివ్వండి.’ కానీ {sita|సీత} అంది: ‘వద్దు హనుమా. వారు తమ రాజు ఆజ్ఞలు పాటించిన సేవకులు మాత్రమే. అతను చనిపోయాడు కాబట్టి ఇక నన్ను బాధించరు. ఉత్తములు అందరిపట్ల — మంచివారైనా చెడ్డవారైనా, శిక్షకు అర్హులైనా — కరుణ చూపుతారు. ఎన్నడూ తప్పు చేయనివారెవరు?’ హనుమంతుడు నమస్కరించాడు. ‘మీరు నిజంగా రాముని భార్య కావడానికి తగినవారు.’"],
   ["p", "Sītā's message was simple: ‘I wish to see my husband.’",
    "సీత సందేశం సరళమైనది: ‘నా భర్తను చూడాలని ఉంది.’"]
  ]
 ],
 remember: [
  ["Rāma said enmity ends with death, and Vibhīṣaṇa performed Rāvaṇa's funeral.", "మరణంతో శత్రుత్వం ముగుస్తుందని రాముడు చెప్పాడు; విభీషణుడు రావణుని అంత్యక్రియలు చేశాడు."],
  ["Lakṣmaṇa crowned Vibhīṣaṇa king of Laṅkā.", "లక్ష్మణుడు విభీషణుణ్ణి లంకకు రాజుగా పట్టాభిషిక్తుణ్ణి చేశాడు."],
  ["Sītā forgave the rākṣasīs: ‘Who has never done wrong?’", "సీత రాక్షసులను క్షమించింది: ‘ఎన్నడూ తప్పు చేయనివారెవరు?’"]
 ],
 think: ["Sītā forgave the guards who had threatened her. Why might forgiveness be a sign of strength, not weakness?", "తనను బెదిరించిన కావలివారిని సీత క్షమించింది. క్షమ బలహీనతకు కాదు, బలానికి గుర్తు ఎందుకు కావచ్చు?"]
}
]);
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "yuddha-25", kanda: "yuddha", n: 25, order: 625, date: "2026-10-21",
 title: "Sītā's Ordeal by Fire", titleTe: "సీతా అగ్నిప్రవేశం", sargas: "114–118", scene: "yajna",
 who: ["vibhishana", "sita", "rama", "lakshmana", "agni", "brahma"],
 pages: [
  [
   ["p", "{vibhishana|Vibhīṣaṇa} brought {sita|Sītā}, bathed and dressed in fine clothes and jewels, in a palanquin. The vānaras crowded round to see her. Rāma said, ‘Let her come on foot. There is no shame for a woman to be seen at such a time, in war, before her husband.’ Sītā walked towards Rāma, her eyes fixed on his face, full of joy and shyness. But Rāma's face was hard, and when he spoke, his words shocked everyone.",
    "స్నానం చేసి, మంచి వస్త్రాలు, ఆభరణాలు ధరించిన {sita|సీతను} {vibhishana|విభీషణుడు} పల్లకిలో తీసుకొచ్చాడు. ఆమెను చూడడానికి వానరులు గుమిగూడారు. ‘ఆమె కాలినడకన రానీ,’ అన్నాడు రాముడు. ‘ఇలాంటి సమయంలో, యుద్ధంలో, భర్త ఎదుట స్త్రీ కనిపించడంలో అవమానం లేదు.’ ఆనందం, సిగ్గు నిండిన కళ్ళను రాముని ముఖం మీదే నిలిపి సీత అతని వైపు నడిచింది. కానీ రాముని ముఖం కఠినంగా ఉంది; అతను మాట్లాడినప్పుడు అతని మాటలు అందరినీ దిగ్భ్రాంతికి గురిచేశాయి."],
   ["p", "‘I have won you back,’ said {rama|Rāma}, ‘and wiped away the insult to my family's honour. But know this: this war was fought to restore my name, not only for you. You have lived for a long time in another man's house. I cannot take you back without question. You are free to go wherever you wish — to Lakṣmaṇa, Bharata, Sugrīva or Vibhīṣaṇa.’ These words fell on Sītā like arrows. She wept, and for a moment could not speak."
   , "‘నిన్ను తిరిగి గెలుచుకున్నాను,’ అన్నాడు {rama|రాముడు}, ‘నా వంశ గౌరవానికి జరిగిన అవమానాన్ని తుడిచేశాను. కానీ ఇది తెలుసుకో: ఈ యుద్ధం నా పేరును నిలబెట్టుకోవడానికే జరిగింది, నీ కోసమే కాదు. చాలాకాలం నువ్వు పరపురుషుని ఇంట్లో ఉన్నావు. ప్రశ్నించకుండా నిన్ను స్వీకరించలేను. నువ్వు కోరిన చోటికి వెళ్ళవచ్చు — లక్ష్మణుడు, భరతుడు, సుగ్రీవుడు, విభీషణుడు ఎవరి దగ్గరికైనా.’ ఈ మాటలు సీత మీద బాణాల్లా పడ్డాయి. ఆమె ఏడ్చింది; ఒక క్షణం మాట్లాడలేకపోయింది."]
  ],
  [
   ["p", "Then Sītā wiped her tears and answered with great dignity. ‘Why do you speak to me like this, like a common man to a common woman? Rāvaṇa touched my body by force, when I was helpless. That was not in my power. But my heart, which is in my power, was always yours. If you meant to abandon me, why did you not tell Hanumān when he came to Laṅkā? I would have given up my life then, and you would have been spared this war.’ Then she turned to {lakshmana|Lakṣmaṇa}. ‘Build me a fire. It is the only remedy for this sorrow.’",
    "తర్వాత సీత కన్నీళ్ళు తుడుచుకుని ఎంతో గౌరవంగా జవాబిచ్చింది. ‘సామాన్య పురుషుడు సామాన్య స్త్రీతో మాట్లాడినట్టు నాతో ఎందుకు ఇలా మాట్లాడుతున్నారు? నేను నిస్సహాయురాలిగా ఉన్నప్పుడు రావణుడు బలవంతంగా నా శరీరాన్ని తాకాడు. అది నా వశంలో లేదు. కానీ నా వశంలో ఉన్న నా హృదయం ఎప్పుడూ మీదే. నన్ను వదిలేయాలనుకుంటే హనుమంతుడు లంకకు వచ్చినప్పుడే ఎందుకు చెప్పలేదు? అప్పుడే ప్రాణం విడిచేదాన్ని; మీకు ఈ యుద్ధం తప్పేది.’ తర్వాత {lakshmana|లక్ష్మణుని} వైపు తిరిగింది. ‘నాకు చితి పేర్చు. ఈ దుఃఖానికి అదే మందు.’"],
   ["p", "Lakṣmaṇa looked at Rāma in anger and pain, but Rāma said nothing, and Lakṣmaṇa built the fire. Sītā walked round Rāma with folded hands, bowed to the gods and to the brāhmaṇas, and stood before the flames. ‘O {agni|Agni}, witness of all the world: if my heart has never turned away from Rāma, protect me.’ And she stepped into the fire. The vānaras and rākṣasas cried out in horror."
   , "లక్ష్మణుడు కోపంతో, బాధతో రాముని వైపు చూశాడు; కానీ రాముడు ఏమీ మాట్లాడలేదు; లక్ష్మణుడు చితి పేర్చాడు. సీత చేతులు జోడించి రాముని చుట్టూ ప్రదక్షిణ చేసి, దేవతలకు, బ్రాహ్మణులకు నమస్కరించి, మంటల ముందు నిలబడింది. ‘ఓ {agni|అగ్నిదేవా}, లోకమంతటికీ సాక్షీ: నా హృదయం ఎన్నడూ రాముని నుండి మరలకపోతే నన్ను కాపాడు.’ అంటూ అగ్నిలోకి అడుగుపెట్టింది. వానరులు, రాక్షసులు భయంతో ఆక్రందించారు."]
  ],
  [
   ["p", "At that moment the gods appeared in the sky — {brahma|Brahmā}, Śiva, Indra, Yama, Varuṇa, Kubera — and with them the spirit of Daśaratha. Brahmā said to Rāma, ‘How can you, the creator of the worlds, treat Sītā like this? Do you not know who you are? You are Nārāyaṇa himself, and Sītā is Lakṣmī.’ Then Agni rose from the flames, holding Sītā in his arms — her clothes, her flowers and her ornaments untouched, shining like the morning sun. ‘Here is Sītā, Rāma,’ said Agni. ‘She is pure. She never thought of anyone but you, even in Rāvaṇa's power. Take her back.’",
    "ఆ క్షణంలో ఆకాశంలో దేవతలు ప్రత్యక్షమయ్యారు — {brahma|బ్రహ్మ}, శివుడు, ఇంద్రుడు, యముడు, వరుణుడు, కుబేరుడు — వారితో దశరథుని ఆత్మ కూడా. బ్రహ్మ రామునితో అన్నాడు: ‘లోకాలను సృష్టించిన నువ్వు సీతను ఇలా ఎలా చూస్తావు? నువ్వెవరో నీకు తెలియదా? నువ్వు స్వయంగా నారాయణుడివి; సీత లక్ష్మీదేవి.’ అప్పుడు అగ్నిదేవుడు సీతను చేతుల్లో పట్టుకుని మంటల నుండి లేచాడు — ఆమె వస్త్రాలు, పూలు, ఆభరణాలు చెక్కుచెదరకుండా, ఉదయ సూర్యునిలా ప్రకాశిస్తూ. ‘రామా, ఇదిగో సీత,’ అన్నాడు అగ్ని. ‘ఈమె పవిత్రురాలు. రావణుని వశంలో ఉన్నా నిన్ను తప్ప ఎవరినీ తలచలేదు. ఈమెను స్వీకరించు.’"],
   ["p", "Rāma's eyes filled with tears. ‘I knew she was pure. She could no more be Rāvaṇa's than light could be separated from the sun. But the world did not know it. If I had taken her back without this, people would have said that Rāma was foolish, ruled by desire. Now all the worlds have seen her truth.’ And he took Sītā's hand with great joy.",
    "రాముని కళ్ళు నీళ్ళతో నిండాయి. ‘ఆమె పవిత్రురాలని నాకు తెలుసు. సూర్యుని నుండి కాంతిని విడదీయలేనట్టే ఆమె రావణునిది కాలేదు. కానీ లోకానికి అది తెలియదు. ఇది లేకుండా ఆమెను స్వీకరించి ఉంటే, రాముడు మూర్ఖుడు, కోరికకు దాసుడు అని ప్రజలు అనేవారు. ఇప్పుడు లోకాలన్నీ ఆమె సత్యాన్ని చూశాయి.’ ఎంతో ఆనందంతో సీత చేయి పట్టుకున్నాడు."],
   ["dyk", "🔥", "Sītā's ordeal by fire is one of the most discussed and debated episodes in the whole Rāmāyaṇa. Readers for centuries have been moved by Sītā's courage and dignity — and many have questioned Rāma's words. Vālmīki tells it plainly and lets us think about it.",
    "సీతా అగ్నిప్రవేశం మొత్తం రామాయణంలోనే అత్యంత చర్చనీయమైన సన్నివేశాల్లో ఒకటి. శతాబ్దాలుగా పాఠకులు సీత ధైర్యానికి, గౌరవానికి చలించిపోయారు — చాలామంది రాముని మాటలను ప్రశ్నించారు కూడా. వాల్మీకి సూటిగా చెప్పి, మనల్ని ఆలోచించనిస్తాడు."]
  ]
 ],
 remember: [
  ["Rāma spoke harshly to Sītā in front of everyone, doubting her.", "రాముడు అందరి ముందు సీతను అనుమానిస్తూ కఠినంగా మాట్లాడాడు."],
  ["Sītā answered with dignity — her heart was always his — and entered the fire.", "సీత గౌరవంగా జవాబిచ్చింది — తన హృదయం ఎప్పుడూ అతనిదే — అగ్నిలో ప్రవేశించింది."],
  ["Agni brought her out unharmed and declared her pure; Rāma took her back.", "అగ్ని ఆమెను క్షేమంగా బయటకు తెచ్చి పవిత్రురాలని ప్రకటించాడు; రాముడు ఆమెను స్వీకరించాడు."]
 ],
 think: ["Sītā stood up for herself with courage, even before Rāma. What do you think of Rāma's words and Sītā's answer?", "రాముని ముందు కూడా సీత ధైర్యంగా తన పక్షాన నిలబడింది. రాముని మాటలు, సీత జవాబు గురించి మీరేమనుకుంటున్నారు?"]
},
{
 id: "yuddha-26", kanda: "yuddha", n: 26, order: 626, date: "2026-10-21",
 title: "Daśaratha Appears; the Vānaras Revived", titleTe: "దశరథ దర్శనం; వానరుల పునర్జీవనం", sargas: "119–120", scene: "sky",
 who: ["dasaratha", "rama", "sita", "lakshmana", "kaikeyi", "indra"],
 pages: [
  [
   ["p", "Then Śiva pointed to the sky. ‘Look, Rāma — your father.’ There, in a shining celestial chariot, sat King {dasaratha|Daśaratha}. Rāma and Lakṣmaṇa bowed to him. Daśaratha took Rāma on his lap and embraced him. ‘My son, I have no joy in heaven without you. Kaikeyī's words still burn in my heart. Now I see you safe, with your enemies destroyed, and I am at peace. You have freed me from my debt of truth, and saved me as Aṣṭāvakra saved his father.’",
    "అప్పుడు శివుడు ఆకాశం వైపు చూపించాడు. ‘చూడు రామా — మీ నాన్న.’ అక్కడ ప్రకాశించే దివ్య విమానంలో దశరథ మహారాజు కూర్చుని ఉన్నాడు. రామలక్ష్మణులు అతనికి నమస్కరించారు. {dasaratha|దశరథుడు} రాముణ్ణి ఒడిలో కూర్చోబెట్టుకుని ఆలింగనం చేసుకున్నాడు. ‘నాయనా, నువ్వు లేకుండా స్వర్గంలో నాకు ఆనందం లేదు. కైకేయి మాటలు ఇంకా నా గుండెలో మండుతున్నాయి. ఇప్పుడు శత్రువులను సంహరించి క్షేమంగా ఉన్న నిన్ను చూసి శాంతి పొందాను. నా సత్య రుణం నుండి నన్ను విడిపించావు; అష్టావక్రుడు తన తండ్రిని కాపాడినట్టు నన్ను కాపాడావు.’"],
   ["p", "Rāma folded his hands. ‘Father, I ask only one thing. When we left, you said in anger, “I disown Kaikeyī and her son.” Please take back those words. Be gracious to Kaikeyī and Bharata.’ Daśaratha said, ‘So be it.’ Then he embraced {lakshmana|Lakṣmaṇa}: ‘You have served Rāma well and earned great merit.’ And to {sita|Sītā} he said gently, ‘Do not be angry with Rāma, my daughter. He did this to show the world your purity. Your deed will be remembered above the deeds of all women.’ Then he rose to Indra's heaven."
   , "రాముడు చేతులు జోడించాడు. ‘నాన్నా, ఒక్కటే అడుగుతున్నాను. మేము వెళ్ళేటప్పుడు మీరు కోపంలో “కైకేయిని, ఆమె కొడుకును త్యజిస్తున్నాను” అన్నారు. దయచేసి ఆ మాటలు వెనక్కి తీసుకోండి. {kaikeyi|కైకేయి}, భరతులపై దయ చూపండి.’ ‘అలాగే,’ అన్నాడు దశరథుడు. తర్వాత {lakshmana|లక్ష్మణుణ్ణి} ఆలింగనం చేసుకున్నాడు: ‘రామునికి చక్కగా సేవ చేసి గొప్ప పుణ్యం సంపాదించావు.’ {sita|సీతతో} మెల్లగా అన్నాడు: ‘అమ్మా, రాముని మీద కోపగించకు. నీ పవిత్రతను లోకానికి చూపడానికే అలా చేశాడు. నీ కార్యం స్త్రీలందరి కార్యాలకంటే మిన్నగా గుర్తుండిపోతుంది.’ తర్వాత ఇంద్రలోకానికి వెళ్ళిపోయాడు."]
  ],
  [
   ["p", "Then {indra|Indra}, pleased, said to Rāma, ‘Our coming to you should not be in vain. Ask for a boon.’ Rāma did not ask for anything for himself. ‘Lord of the gods, let all the vānaras and bears who gave their lives for me rise up again, healed and whole, and be reunited with their wives and children. And wherever they live, let there always be fruits, roots and clear water, even out of season.’",
    "తర్వాత సంతోషించిన {indra|ఇంద్రుడు} రామునితో అన్నాడు: ‘మేము నీ దగ్గరకు రావడం వృథా కాకూడదు. వరం కోరుకో.’ రాముడు తన కోసం ఏమీ అడగలేదు. ‘దేవేంద్రా, నా కోసం ప్రాణాలు అర్పించిన వానరులు, భల్లూకాలు అందరూ గాయాలు మాని, సంపూర్ణంగా మళ్ళీ లేచి, తమ భార్యాపిల్లలను కలుసుకోవాలి. వారు ఎక్కడ ఉన్నా, కాలం కాకపోయినా, ఎప్పుడూ పండ్లు, దుంపలు, స్వచ్ఛమైన నీరు ఉండాలి.’"],
   ["p", "‘So be it,’ said Indra. And at once, all over the battlefield, the fallen vānaras rose up ‘as if waking from sleep’, their wounds healed, and looked around in amazement. ‘What happened?’ they asked each other. When they understood, they danced and roared and praised Rāma, who had thought of them first, even in his moment of victory."
   , "‘అలాగే,’ అన్నాడు ఇంద్రుడు. వెంటనే రణభూమి అంతటా పడిపోయిన వానరులు ‘నిద్ర నుండి మేల్కొన్నట్టు’ గాయాలు మాని లేచి ఆశ్చర్యంగా చుట్టూ చూశారు. ‘ఏం జరిగింది?’ అని ఒకరినొకరు అడిగారు. అర్థమయ్యాక, విజయ క్షణంలో కూడా ముందుగా తమ గురించే ఆలోచించిన రాముణ్ణి స్తుతిస్తూ నాట్యం చేశారు, గర్జించారు."]
  ],
  [
   ["p", "The gods departed. Rāma, Sītā and Lakṣmaṇa spent the night in the camp with their friends. The fourteen years of exile were almost over, and in Ayodhyā, Bharata was waiting.",
    "దేవతలు వెళ్ళిపోయారు. సీతారామలక్ష్మణులు మిత్రులతో కలిసి శిబిరంలో రాత్రి గడిపారు. పద్నాలుగేళ్ళ వనవాసం దాదాపు ముగిసింది; అయోధ్యలో భరతుడు ఎదురుచూస్తున్నాడు."],
   ["dyk", "🙏", "Rāma's boon shows his character: at the moment of his greatest triumph, his first thought was for those who had suffered for him — and he even asked his father to forgive Kaikeyī, who had sent him into exile.",
    "రాముని వరం అతని శీలాన్ని చూపిస్తుంది: తన గొప్ప విజయ క్షణంలో, తన కోసం బాధపడినవారి గురించే అతని మొదటి ఆలోచన — తనను వనవాసానికి పంపిన కైకేయిని క్షమించమని తండ్రిని కూడా అడిగాడు."]
  ]
 ],
 remember: [
  ["Daśaratha appeared from heaven and blessed Rāma, Lakṣmaṇa and Sītā.", "దశరథుడు స్వర్గం నుండి ప్రత్యక్షమై సీతారామలక్ష్మణులను దీవించాడు."],
  ["Rāma asked his father to forgive Kaikeyī and Bharata.", "కైకేయిని, భరతుణ్ణి క్షమించమని రాముడు తండ్రిని కోరాడు."],
  ["Rāma's boon from Indra brought all the fallen vānaras back to life.", "ఇంద్రుని నుండి రాముడు కోరిన వరంతో పడిపోయిన వానరులంతా మళ్ళీ బతికారు."]
 ],
 think: ["Given any boon he wanted, Rāma asked for something for others. What would you ask for, and for whom?", "కోరిన వరం ఇస్తామంటే రాముడు ఇతరుల కోసం అడిగాడు. మీరైతే ఏం అడుగుతారు, ఎవరి కోసం?"]
},
{
 id: "yuddha-27", kanda: "yuddha", n: 27, order: 627, date: "2026-10-21",
 title: "The Flight Home in the Puṣpaka", titleTe: "పుష్పకంలో తిరుగు ప్రయాణం", sargas: "121–126", scene: "sky",
 who: ["vibhishana", "rama", "sita", "tara", "bharadvajamuni", "hanuman", "bharata", "guha"],
 pages: [
  [
   ["p", "{vibhishana|Vibhīṣaṇa} begged Rāma to stay a while in Laṅkā, to bathe, rest and be honoured. But Rāma said, ‘My heart is with Bharata, who is waiting for me in bark clothes, fasting. If I am late even a day, he may give up his life. Let us go now.’ So Vibhīṣaṇa brought the Puṣpaka, the flying chariot that Rāvaṇa had taken from Kubera. Rāma, Sītā and Lakṣmaṇa climbed in, and at Rāma's invitation Sugrīva, Vibhīṣaṇa and all the vānara chiefs came too. The chariot rose into the sky like a great swan.",
    "కొంతకాలం లంకలో ఉండి, స్నానం చేసి, విశ్రాంతి తీసుకుని, సన్మానం పొందమని {vibhishana|విభీషణుడు} రాముణ్ణి బతిమాలాడు. కానీ రాముడు అన్నాడు: ‘నారబట్టలతో, ఉపవాసంతో నా కోసం ఎదురుచూస్తున్న భరతుని దగ్గరే నా మనసు ఉంది. ఒక్క రోజు ఆలస్యమైనా అతను ప్రాణం విడవవచ్చు. ఇప్పుడే వెళ్దాం.’ అందుకని రావణుడు కుబేరుని నుండి లాక్కున్న ఎగిరే విమానం పుష్పకాన్ని విభీషణుడు తెప్పించాడు. సీతారామలక్ష్మణులు ఎక్కారు; రాముని ఆహ్వానంతో సుగ్రీవుడు, విభీషణుడు, వానర నాయకులంతా కూడా ఎక్కారు. ఆ విమానం పెద్ద హంసలా ఆకాశంలోకి లేచింది."],
   ["p", "As they flew, Rāma showed Sītā the places of their story. ‘Look, Sītā — there is the battlefield where Rāvaṇa fell. There is where Hanumān killed Dhūmrākṣa. There is Nala's bridge across the ocean. Here, on the shore, is where I first camped, and where the great god Mahādeva showed me his grace. There is where Vibhīṣaṇa came to me.’ When they flew over Kiṣkindhā, Sītā said, ‘I would like to take {tara|Tārā} and the wives of the vānara chiefs with us to Ayodhyā.’ So the chariot landed, and the vānara queens joined them."
   , "ఎగురుతుండగా రాముడు సీతకు తమ కథలోని ప్రదేశాలు చూపించాడు. ‘చూడు సీతా — అక్కడే రావణుడు పడిపోయిన రణభూమి. అక్కడే హనుమంతుడు ధూమ్రాక్షుణ్ణి చంపాడు. అదిగో సముద్రం మీద నలుని వారధి. ఇక్కడ తీరంలోనే మొదట విడిది చేశాను; మహాదేవుడు నాపై అనుగ్రహం చూపిన చోటు ఇదే. అక్కడే విభీషణుడు నా దగ్గరకు వచ్చాడు.’ కిష్కింధ మీదుగా ఎగురుతుంటే సీత అంది: ‘{tara|తార}ను, వానర నాయకుల భార్యలను మనతో అయోధ్యకు తీసుకెళ్ళాలని ఉంది.’ అందుకని విమానం దిగింది; వానర రాణులు వారితో చేరారు."]
  ],
  [
   ["p", "On they flew — over Ṛṣyamūka where Rāma met Sugrīva, over Lake Pampā where Śabarī had waited, over Janasthāna and Pañcavaṭī where Sītā had been taken, over Agastya's hermitage, over Citrakūṭa where Bharata had come to beg Rāma to return, over the Yamunā and the Gaṅgā. On the fifth day of the bright fortnight, exactly fourteen years after they had left, they came down at the hermitage of the sage {bharadvajamuni|Bharadvāja} near Prayāga. The sage blessed them and told them all the news of Ayodhyā. As a gift he gave a boon: that the trees all along the road to Ayodhyā would burst into flower and fruit.",
    "ముందుకు ఎగిరారు — రాముడు సుగ్రీవుణ్ణి కలిసిన ఋష్యమూకం, శబరి ఎదురుచూసిన పంపా సరోవరం, సీత అపహరణకు గురైన జనస్థానం, పంచవటి, అగస్త్యాశ్రమం, భరతుడు రాముణ్ణి తిరిగి రమ్మని బతిమాలిన చిత్రకూటం, యమున, గంగ మీదుగా. బయలుదేరిన సరిగ్గా పద్నాలుగేళ్ళకు, శుక్లపక్ష పంచమి నాడు ప్రయాగ దగ్గర {bharadvajamuni|భరద్వాజ} మహర్షి ఆశ్రమంలో దిగారు. మహర్షి వారిని దీవించి అయోధ్య వార్తలన్నీ చెప్పాడు. అయోధ్యకు వెళ్ళే దారి పొడవునా చెట్లన్నీ పూలు, పండ్లతో నిండిపోయేలా వరం ఇచ్చాడు."],
   ["p", "Rāma called {hanuman|Hanumān}. ‘Go quickly to Ayodhyā. On the way, tell my friend Guha at Śṛṅgaverapura that I am back. Then go to {bharata|Bharata}. Tell him everything that happened, and watch his face carefully. If, after fourteen years of ruling, he wishes to keep the kingdom, let him keep it. Come back and tell me what you see.’"
   , "రాముడు {hanuman|హనుమంతుణ్ణి} పిలిచాడు. ‘త్వరగా అయోధ్యకు వెళ్ళు. దారిలో శృంగిబేరపురంలో నా మిత్రుడు {guha|గుహునికి} నేను తిరిగి వచ్చానని చెప్పు. తర్వాత {bharata|భరతుని} దగ్గరకు వెళ్ళు. జరిగిందంతా చెప్పి అతని ముఖాన్ని జాగ్రత్తగా గమనించు. పద్నాలుగేళ్ళు పాలించాక రాజ్యాన్ని ఉంచుకోవాలని అతను కోరుకుంటే ఉంచుకోనీ. చూసింది వచ్చి చెప్పు.’"]
  ],
  [
   ["p", "Hanumān found Bharata at Nandigrāma, outside Ayodhyā — thin from fasting, wearing bark clothes and matted hair, living like a hermit, ruling the kingdom in the name of Rāma's sandals, which sat on the throne. ‘Rāma, for whom you grieve, asks after you,’ said Hanumān. ‘He has killed Rāvaṇa, rescued Sītā, and is coming home with Lakṣmaṇa and his friends. Tomorrow you will see him.’ Bharata fell to the ground in joy, then rose and embraced Hanumān, weeping. ‘After so many years, what good news you bring! What can I give you?’ He offered Hanumān a hundred thousand cows, a hundred villages and rich gifts, and asked to hear the whole story.",
    "అయోధ్య బయట నందిగ్రామంలో హనుమంతుడు భరతుణ్ణి చూశాడు — ఉపవాసాలతో చిక్కిపోయి, నారబట్టలు, జడలు ధరించి, తపస్విలా జీవిస్తూ, సింహాసనం మీద ఉంచిన రాముని పాదుకల పేరుతో రాజ్యం పాలిస్తూ. ‘మీరు ఎవరి కోసం దుఃఖిస్తున్నారో ఆ రాముడు మీ క్షేమం అడిగాడు,’ అన్నాడు హనుమంతుడు. ‘రావణుణ్ణి చంపి, సీతను విడిపించి, లక్ష్మణుడు, మిత్రులతో ఇంటికి వస్తున్నాడు. రేపు అతన్ని చూస్తారు.’ భరతుడు ఆనందంతో నేల మీద పడిపోయాడు; తర్వాత లేచి ఏడుస్తూ హనుమంతుణ్ణి ఆలింగనం చేసుకున్నాడు. ‘ఇన్నేళ్ళ తర్వాత ఎంత శుభవార్త తెచ్చావు! నీకేమివ్వను?’ లక్ష గోవులు, వంద గ్రామాలు, విలువైన కానుకలు ఇచ్చి, కథంతా వినిపించమని అడిగాడు."],
   ["dyk", "🛩️", "The Puṣpaka Vimāna is often called the first ‘aeroplane’ in literature. Rāma's tour from the sky retells the whole story in a few minutes — a beautiful way for the poet to look back before the ending.",
    "పుష్పక విమానాన్ని తరచుగా సాహిత్యంలో మొదటి ‘విమానం’ అంటారు. ఆకాశం నుండి రాముడు చూపించిన పర్యటన కొన్ని నిమిషాల్లో కథంతా మళ్ళీ చెబుతుంది — ముగింపుకు ముందు వెనక్కి చూసుకోవడానికి కవి ఎంచుకున్న అందమైన మార్గం."]
  ]
 ],
 remember: [
  ["Rāma hurried home in the Puṣpaka so that Bharata would not wait a day longer.", "భరతుడు ఇంకొక్క రోజు ఎదురుచూడకూడదని రాముడు పుష్పకంలో త్వరగా ఇంటికి బయలుదేరాడు."],
  ["From the sky, Rāma showed Sītā all the places of their story.", "ఆకాశం నుండి రాముడు సీతకు తమ కథలోని ప్రదేశాలన్నీ చూపించాడు."],
  ["Hanumān brought the good news to Bharata, who was living like a hermit at Nandigrāma.", "నందిగ్రామంలో తపస్విలా జీవిస్తున్న భరతునికి హనుమంతుడు శుభవార్త తెచ్చాడు."]
 ],
 think: ["Rāma told Hanumān to watch Bharata's face, in case Bharata wanted to keep the kingdom. Why do you think Rāma was willing to let him?", "భరతుడు రాజ్యం ఉంచుకోవాలనుకుంటున్నాడేమో అతని ముఖం గమనించమని రాముడు హనుమంతునికి చెప్పాడు. అలా ఉంచుకోనివ్వడానికి రాముడు ఎందుకు సిద్ధపడ్డాడని మీరు అనుకుంటున్నారు?"]
},
{
 id: "yuddha-28", kanda: "yuddha", n: 28, order: 628, date: "2026-10-21",
 title: "Rāma's Coronation", titleTe: "శ్రీరామ పట్టాభిషేకం", sargas: "127–128", scene: "palace",
 who: ["bharata", "shatrughna", "rama", "vasishtha", "sita", "hanuman", "lakshmana"],
 pages: [
  [
   ["p", "Ayodhyā woke up overjoyed. {bharata|Bharata} ordered the roads to be swept and sprinkled with water, the city decorated with flags and flowers. With {shatrughna|Śatrughna}, the three queens, the ministers and all the people, he went out to meet Rāma, carrying Rāma's sandals on his head. When the Puṣpaka came down from the sky ‘like the moon rising’, Bharata ran forward and bowed at Rāma's feet. Rāma lifted him up and held him close, and they wept together. Then Bharata greeted Lakṣmaṇa and Sītā, and embraced Sugrīva, Vibhīṣaṇa and the vānaras: ‘You have done what a friend should do.’",
    "అయోధ్య ఆనందంతో మేల్కొంది. దారులు ఊడ్చి నీళ్ళు చల్లమని, నగరాన్ని ధ్వజాలు, పూలతో అలంకరించమని {bharata|భరతుడు} ఆజ్ఞాపించాడు. {shatrughna|శత్రుఘ్నుడు}, ముగ్గురు తల్లులు, మంత్రులు, ప్రజలందరితో కలిసి రాముని పాదుకలను తల మీద పెట్టుకుని రాముణ్ణి ఎదుర్కోవడానికి వెళ్ళాడు. పుష్పకం ‘చంద్రుడు ఉదయించినట్టు’ ఆకాశం నుండి దిగగానే భరతుడు పరుగెత్తి రాముని పాదాలకు నమస్కరించాడు. రాముడు అతన్ని లేపి గుండెకు హత్తుకున్నాడు; ఇద్దరూ కలిసి ఏడ్చారు. తర్వాత భరతుడు లక్ష్మణునికి, సీతకు నమస్కరించి, సుగ్రీవుణ్ణి, విభీషణుణ్ణి, వానరులను ఆలింగనం చేసుకున్నాడు: ‘మిత్రులు చేయాల్సిన పని మీరు చేశారు.’"],
   ["p", "Bharata placed the sandals on Rāma's feet with his own hands. ‘The kingdom you left with me as a trust, I now return to you. Your treasury, your army, your granaries — all have grown tenfold by your grace. Today my birth has borne fruit.’ Seeing this, the vānaras and Vibhīṣaṇa wept with joy. Rāma took Bharata on his lap, and the Puṣpaka was sent back to its owner, Kubera."
   , "భరతుడు తన చేతులతో పాదుకలను రాముని పాదాలకు తొడిగాడు. ‘నా దగ్గర నమ్మకంగా ఉంచిన రాజ్యాన్ని ఇప్పుడు నీకు తిరిగి ఇస్తున్నాను. నీ అనుగ్రహంతో నీ కోశాగారం, సైన్యం, ధాన్యాగారాలు — అన్నీ పదింతలు పెరిగాయి. ఈ రోజు నా జన్మ సఫలమైంది.’ ఇది చూసి వానరులు, విభీషణుడు ఆనందంతో కన్నీళ్ళు పెట్టుకున్నారు. రాముడు భరతుణ్ణి ఒడిలో కూర్చోబెట్టుకున్నాడు; పుష్పకాన్ని దాని యజమాని కుబేరుని దగ్గరకు తిరిగి పంపారు."]
  ],
  [
   ["p", "Rāma's matted hair was cut, and he bathed and was dressed in royal silks and jewels. Sītā was adorned by the queens; even the vānara wives were dressed in fine clothes. Vānaras flew to the four oceans and to five hundred rivers to bring holy water in golden jars. Then, seated on a golden throne with Sītā beside him, Rāma was anointed king by the sage {vasishtha|Vasiṣṭha}, with the priests and elders of Ayodhyā, as his ancestors had been. Śatrughna held the white umbrella, Sugrīva and Vibhīṣaṇa held the fans, and the gods sang in the sky.",
    "రాముని జడలు కత్తిరించారు; స్నానం చేయించి రాజ వస్త్రాలు, ఆభరణాలు అలంకరించారు. తల్లులు సీతను అలంకరించారు; వానర స్త్రీలు కూడా మంచి వస్త్రాలు ధరించారు. వానరులు నాలుగు సముద్రాలకు, ఐదు వందల నదులకు ఎగిరి బంగారు కలశాల్లో పవిత్ర జలాలు తెచ్చారు. తర్వాత సీతతో కలిసి బంగారు సింహాసనం మీద కూర్చున్న రాముణ్ణి, అతని పూర్వికులకు జరిగినట్టే, {vasishtha|వసిష్ఠ} మహర్షి అయోధ్య పురోహితులు, పెద్దలతో కలిసి రాజుగా అభిషేకించాడు. శత్రుఘ్నుడు తెల్లని గొడుగు పట్టాడు, సుగ్రీవ విభీషణులు వింజామరలు వీచారు, ఆకాశంలో దేవతలు గానం చేశారు."],
   ["p", "Rāma gave rich gifts to all his friends. He gave Sītā a beautiful pearl necklace. Sītā held it, then looked at the vānaras, then at Rāma. Rāma understood. ‘Give it to whoever has pleased you most, Sītā — the one in whom courage, strength, skill, wisdom and humility are always found.’ Sītā placed the necklace round {hanuman|Hanumān}'s neck, and he shone with it ‘like a mountain lit by a white cloud in moonlight’."
   , "రాముడు తన మిత్రులందరికీ విలువైన కానుకలు ఇచ్చాడు. సీతకు అందమైన ముత్యాల హారం ఇచ్చాడు. సీత దాన్ని పట్టుకుని వానరుల వైపు, తర్వాత రాముని వైపు చూసింది. రాముడు అర్థం చేసుకున్నాడు. ‘సీతా, నిన్ను అత్యంత సంతోషపెట్టినవారికి ఇవ్వు — ధైర్యం, బలం, నేర్పు, బుద్ధి, వినయం ఎప్పుడూ ఎవరిలో ఉంటాయో వారికి.’ సీత ఆ హారాన్ని {hanuman|హనుమంతుని} మెడలో వేసింది; అతను ‘వెన్నెలలో తెల్లని మేఘంతో వెలిగిన పర్వతంలా’ ప్రకాశించాడు."]
  ],
  [
   ["p", "Rāma asked {lakshmana|Lakṣmaṇa} to be crown prince, but Lakṣmaṇa would not accept; so Bharata was made yuvarāja. Then Rāma ruled Ayodhyā for many thousands of years, says Vālmīki. In Rāma's kingdom, no widow wept, no child died before its parents, there was no fear of snakes or disease, no thieves; the rains came on time, the trees always bore fruit, and everyone followed dharma and was happy. Even today, when people dream of a perfect, just and happy land, they call it ‘Rāma Rājya’.",
    "యువరాజుగా ఉండమని రాముడు {lakshmana|లక్ష్మణుణ్ణి} కోరాడు, కానీ లక్ష్మణుడు ఒప్పుకోలేదు; అందుకని భరతుణ్ణి యువరాజుగా చేశారు. తర్వాత రాముడు ఎన్నో వేల సంవత్సరాలు అయోధ్యను పాలించాడని వాల్మీకి చెబుతాడు. రామ రాజ్యంలో ఏ విధవా ఏడవలేదు, తల్లిదండ్రుల కంటే ముందు ఏ బిడ్డా చనిపోలేదు, పాములు, రోగాల భయం లేదు, దొంగలు లేరు; సకాలంలో వర్షాలు కురిశాయి, చెట్లు ఎప్పుడూ పండ్లు కాశాయి, అందరూ ధర్మాన్ని పాటిస్తూ సంతోషంగా ఉన్నారు. ఈ రోజుకీ పరిపూర్ణమైన, న్యాయమైన, సంతోషకరమైన దేశాన్ని కలలు కన్నప్పుడు ప్రజలు దాన్ని ‘రామ రాజ్యం’ అంటారు."],
   ["dyk", "👑", "Here ends the Yuddha Kāṇḍa. Vālmīki says that whoever hears this story with faith is freed from sorrow and blessed with long life, children and good fortune. Many families end a reading of the Rāmāyaṇa with the coronation — the Paṭṭābhiṣekam — and celebrate it as a festival.",
    "ఇక్కడితో యుద్ధకాండ ముగుస్తుంది. ఈ కథను శ్రద్ధగా విన్నవారు దుఃఖం నుండి విముక్తులై, దీర్ఘాయుష్షు, సంతానం, సౌభాగ్యం పొందుతారని వాల్మీకి చెబుతాడు. చాలా కుటుంబాలు రామాయణ పారాయణాన్ని పట్టాభిషేకంతో ముగించి పండుగలా జరుపుకుంటారు."]
  ]
 ],
 remember: [
  ["Bharata put the sandals on Rāma's feet and returned the kingdom to him.", "భరతుడు పాదుకలను రాముని పాదాలకు తొడిగి రాజ్యాన్ని తిరిగి అప్పగించాడు."],
  ["Vasiṣṭha crowned Rāma king, with Sītā beside him, with waters from the four oceans.", "నాలుగు సముద్రాల జలాలతో వసిష్ఠుడు సీతతో కూర్చున్న రాముణ్ణి రాజుగా అభిషేకించాడు."],
  ["Sītā gave her pearl necklace to Hanumān; Rāma's just rule became known as Rāma Rājya.", "సీత తన ముత్యాల హారాన్ని హనుమంతునికి ఇచ్చింది; రాముని న్యాయ పాలన ‘రామ రాజ్యం’గా ప్రసిద్ధి పొందింది."]
 ],
 think: ["Bharata ruled for fourteen years but happily gave the kingdom back. What does Bharata teach us about keeping our promises?", "భరతుడు పద్నాలుగేళ్ళు పాలించినా సంతోషంగా రాజ్యాన్ని తిరిగి ఇచ్చాడు. మాట నిలబెట్టుకోవడం గురించి భరతుడు మనకు ఏం నేర్పిస్తాడు?"]
}
]);
