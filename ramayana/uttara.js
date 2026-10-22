// Śrī Rāmāyaṇa — Uttara Kāṇḍa. Retold by Hari Pokkuluri.
// Told fresh from Vālmīki's Uttara Kāṇḍa (sarga numbers follow the common southern text). Block format: see the top of ramayana.js.
window.RMY_PLAN = Object.assign(window.RMY_PLAN || {}, { uttara: [
  ["The Sages' Visit and Kubera's Birth", "Sargas 1–3"],
  ["The Rākṣasas of Old", "Sargas 4–8"],
  ["Rāvaṇa and His Brothers", "Sargas 9–10"],
  ["Laṅkā and the Puṣpaka", "Sargas 11–15"],
  ["Rāvaṇa at Kailāsa", "Sarga 16"],
  ["Vedavatī's Curse", "Sarga 17"],
  ["Rāvaṇa Conquers the World", "Sargas 18–25"],
  ["Rambhā's Curse and Indra's Defeat", "Sargas 26–30"],
  ["Kārtavīrya and Vāli", "Sargas 31–34"],
  ["The Story of Hanumān", "Sargas 35–36"],
  ["The Friends Depart", "Sargas 37–40"],
  ["Golden Days and Sītā's Wish", "Sargas 41–42"],
  ["Whispers in the City", "Sargas 43–45"],
  ["Sītā in Vālmīki's Āśrama", "Sargas 46–49"],
  ["Old Prophecies and Royal Tales", "Sargas 50–60"],
  ["Śatrughna and Lavaṇa", "Sargas 61–72"],
  ["The Brāhmaṇa's Son", "Sargas 73–76"],
  ["Stories of Agastya, Vṛtra and Ila", "Sargas 77–90"],
  ["Lava and Kuśa Sing", "Sargas 91–94"],
  ["Sītā Returns to the Earth", "Sargas 95–98"],
  ["Time Comes to Rāma", "Sargas 99–106"],
  ["Rāma's Final Journey", "Sargas 107–111"]
] });
window.RMY_WHO = Object.assign(window.RMY_WHO || {}, {
 "pulastya": { "av": "🧘", "en": "Pulastya", "te": "పులస్త్యుడు",
  "d": "A great sage, one of the mind-born sons of Brahmā, grandfather of Kubera and Rāvaṇa.",
  "dt": "బ్రహ్మ మానస పుత్రుల్లో ఒకడైన మహర్షి; కుబేరుడు, రావణుల తాత." },
 "vishravas": { "av": "📿", "en": "Viśravas", "te": "విశ్రవసుడు",
  "d": "Son of Pulastya, a learned sage. Father of Kubera by one wife and of Rāvaṇa, Kumbhakarṇa, Vibhīṣaṇa and Śūrpaṇakhā by Kaikasī.",
  "dt": "పులస్త్యుని కుమారుడు, విద్వాంసుడైన ముని. ఒక భార్య ద్వారా కుబేరునికి, కైకసి ద్వారా రావణ, కుంభకర్ణ, విభీషణ, శూర్పణఖలకు తండ్రి." },
 "kaikasi": { "av": "🌑", "en": "Kaikasī", "te": "కైకసి",
  "d": "Daughter of the rākṣasa Sumālī, mother of Rāvaṇa, Kumbhakarṇa, Śūrpaṇakhā and Vibhīṣaṇa.",
  "dt": "రాక్షసుడు సుమాలి కుమార్తె; రావణ, కుంభకర్ణ, శూర్పణఖ, విభీషణుల తల్లి." },
 "sumali": { "av": "👹", "en": "Sumālī", "te": "సుమాలి",
  "d": "A rākṣasa chief of old, who once ruled Laṅkā with his brothers Mālyavān and Mālī until Viṣṇu drove them out. Rāvaṇa's grandfather.",
  "dt": "పూర్వపు రాక్షస నాయకుడు; సోదరులు మాల్యవంతుడు, మాలితో కలిసి లంకను పాలించాడు, విష్ణువు వెళ్ళగొట్టేవరకు. రావణుని తాత." },
 "vedavati": { "av": "🔥", "en": "Vedavatī", "te": "వేదవతి",
  "d": "A maiden doing tapas to win Viṣṇu as her husband. Insulted by Rāvaṇa, she entered the fire, vowing to be born again for his destruction.",
  "dt": "విష్ణువును భర్తగా పొందడానికి తపస్సు చేస్తున్న కన్య. రావణుడు అవమానించగా, అతని నాశనానికి మళ్ళీ పుడతానని శపథం చేసి అగ్నిలో ప్రవేశించింది." },
 "anaranya": { "av": "👑", "en": "Anaraṇya", "te": "అనరణ్యుడు",
  "d": "A king of Ayodhyā of the Ikṣvāku line, killed by Rāvaṇa. As he died, he foretold that one of his descendants would kill Rāvaṇa.",
  "dt": "ఇక్ష్వాకు వంశపు అయోధ్య రాజు; రావణుని చేతిలో మరణించాడు. చనిపోతూ, తన వంశంలోని ఒకడు రావణుణ్ణి చంపుతాడని శపించాడు." },
 "kartavirya": { "av": "🙌", "en": "Kārtavīrya Arjuna", "te": "కార్తవీర్యార్జునుడు",
  "d": "The thousand-armed king of Māhiṣmatī on the Narmadā, who captured Rāvaṇa.",
  "dt": "నర్మదా తీరంలోని మాహిష్మతికి రాజు, వెయ్యి చేతులవాడు; రావణుణ్ణి బంధించాడు." },
 "bhadra": { "av": "🗣️", "en": "Bhadra", "te": "భద్రుడు",
  "d": "One of Rāma's companions who told him what the people of Ayodhyā were saying.",
  "dt": "అయోధ్య ప్రజలు ఏమనుకుంటున్నారో రామునికి చెప్పిన అతని సహచరుల్లో ఒకడు." },
 "lavana": { "av": "🔱", "en": "Lavaṇa", "te": "లవణాసురుడు",
  "d": "A cruel rākṣasa, son of Madhu, who held Śiva's trident and terrorised the sages near the Yamunā. Killed by Śatrughna.",
  "dt": "మధువు కుమారుడైన క్రూర రాక్షసుడు; శివుని శూలం కలిగి యమునా తీరంలో మునులను హింసించాడు. శత్రుఘ్నుని చేతిలో మరణించాడు." },
 "durvasa": { "av": "⚡", "en": "Durvāsa", "te": "దుర్వాసుడు",
  "d": "A sage famous for his quick temper and his curses.",
  "dt": "తీవ్రమైన కోపానికి, శాపాలకు ప్రసిద్ధుడైన ముని." },
 "kala": { "av": "⏳", "en": "Kāla (Time)", "te": "కాలుడు",
  "d": "Time itself, who came to Rāma as a messenger from Brahmā to remind him that his work on earth was done.",
  "dt": "సాక్షాత్తు కాలం; భూమి మీద అతని కార్యం ముగిసిందని గుర్తుచేయడానికి బ్రహ్మ దూతగా రాముని దగ్గరకు వచ్చాడు." }
});
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "uttara-1", kanda: "uttara", n: 1, order: 701, date: "2026-10-21",
 title: "The Sages' Visit and Kubera's Birth", titleTe: "మునుల రాక, కుబేరుని జననం", sargas: "1–3", scene: "palace",
 who: ["rama", "agastya", "pulastya", "vishravas", "kubera"],
 pages: [
  [
   ["p", "After {rama|Rāma} was crowned, sages came to Ayodhyā from every direction to bless him — from the east Kauśika and others, from the south Agastya and Atri, from the west Vasiṣṭha's companions, from the north Viśvāmitra, Gautama, Jamadagni and Bharadvāja. Rāma received them with honour and gave them seats of gold. ‘We are happy to see you victorious, Rāma,’ they said. ‘Killing Rāvaṇa was great — but killing Indrajit was even greater. No one in the three worlds could defeat him.’",
    "{rama|రాముని} పట్టాభిషేకం తర్వాత అతన్ని దీవించడానికి అన్ని దిక్కుల నుండి మునులు అయోధ్యకు వచ్చారు — తూర్పు నుండి కౌశికుడు మొదలైనవారు, దక్షిణం నుండి అగస్త్యుడు, అత్రి, పశ్చిమం నుండి వసిష్ఠుని సహచరులు, ఉత్తరం నుండి విశ్వామిత్రుడు, గౌతముడు, జమదగ్ని, భరద్వాజుడు. రాముడు గౌరవంగా వారిని ఆహ్వానించి బంగారు ఆసనాలు ఇచ్చాడు. ‘రామా, నిన్ను విజయుడిగా చూసి సంతోషిస్తున్నాం,’ అన్నారు. ‘రావణుణ్ణి చంపడం గొప్పదే — కానీ ఇంద్రజిత్తును చంపడం ఇంకా గొప్పది. ముల్లోకాల్లో అతన్ని ఎవరూ ఓడించలేకపోయారు.’"],
   ["p", "Rāma was surprised. ‘Why do you praise the killing of Indrajit more than that of Rāvaṇa? And who were these rākṣasas — where did they come from, and how did they become so powerful?’ So the great sage {agastya|Agastya} began to tell the story of Rāvaṇa's family from the very beginning — a story that fills the first part of this kāṇḍa."
   , "రాముడు ఆశ్చర్యపోయాడు. ‘రావణ వధ కంటే ఇంద్రజిత్తు వధను ఎందుకు ఎక్కువగా పొగుడుతున్నారు? అసలు ఈ రాక్షసులు ఎవరు — ఎక్కడి నుండి వచ్చారు, ఇంత బలవంతులు ఎలా అయ్యారు?’ అప్పుడు మహర్షి {agastya|అగస్త్యుడు} రావణుని వంశ కథను మొదటి నుండి చెప్పడం మొదలుపెట్టాడు — ఈ కాండలోని మొదటి భాగమంతా ఆ కథే."]
  ],
  [
   ["p", "‘In the first age,’ said Agastya, ‘Brahmā had a mind-born son, the sage {pulastya|Pulastya}. He did tapas on Mount Meru at the hermitage of the royal sage Tṛṇabindu. But young girls kept coming there to play, sing and dance, disturbing his meditation. Annoyed, Pulastya said, “Any maiden who sees me here will become a mother.” The girls ran away in fear. But Tṛṇabindu's daughter, who had not heard, came looking for her friends, saw the sage, and found herself expecting a child. Her father understood, and gave her to Pulastya as his wife. She served him faithfully, and their son was {vishravas|Viśravas}, a sage as learned as his father.’",
    "‘మొదటి యుగంలో,’ అన్నాడు అగస్త్యుడు, ‘బ్రహ్మకు {pulastya|పులస్త్యుడు} అనే మానసపుత్రుడు ఉండేవాడు. అతను మేరు పర్వతం మీద రాజర్షి తృణబిందుని ఆశ్రమంలో తపస్సు చేశాడు. కానీ కన్యలు అక్కడికి వచ్చి ఆడుతూ, పాడుతూ, నాట్యం చేస్తూ అతని ధ్యానాన్ని భంగపరిచారు. విసుగొచ్చిన పులస్త్యుడు, “ఇక్కడ నన్ను చూసిన ఏ కన్య అయినా తల్లి అవుతుంది,” అన్నాడు. కన్యలు భయంతో పారిపోయారు. కానీ ఆ మాట వినని తృణబిందుని కూతురు స్నేహితురాళ్ళను వెతుకుతూ వచ్చి మునిని చూసింది; గర్భవతి అయింది. ఆమె తండ్రి అర్థం చేసుకుని ఆమెను పులస్త్యునికి భార్యగా ఇచ్చాడు. ఆమె అతనికి నిష్ఠగా సేవ చేసింది; వారి కొడుకు తండ్రి అంతటి విద్వాంసుడైన ముని {vishravas|విశ్రవసుడు}.’"],
   ["p", "‘Viśravas married the daughter of the sage Bharadvāja, and their son was Vaiśravaṇa — {kubera|Kubera}. Kubera did tapas for a thousand years, and Brahmā, pleased, made him one of the guardians of the world and the lord of all wealth, and gave him the Puṣpaka, the flying chariot. Kubera asked his father where he should live. Viśravas said, “On the southern ocean, on Mount Trikūṭa, there is a golden city called Laṅkā, built long ago by Viśvakarmā for the rākṣasas. They fled from it in fear of Viṣṇu, and it stands empty. Live there.” So Kubera went to Laṅkā with his yakṣas and ruled it happily.’"
   , "‘విశ్రవసుడు భరద్వాజ మహర్షి కుమార్తెను వివాహం చేసుకున్నాడు; వారి కొడుకు వైశ్రవణుడు — {kubera|కుబేరుడు}. కుబేరుడు వెయ్యేళ్ళు తపస్సు చేయగా సంతోషించిన బ్రహ్మ అతన్ని లోకపాలకుల్లో ఒకణ్ణిగా, సమస్త సంపదలకు అధిపతిగా చేసి, ఎగిరే విమానం పుష్పకాన్ని ఇచ్చాడు. ఎక్కడ ఉండాలని కుబేరుడు తండ్రిని అడిగాడు. విశ్రవసుడు అన్నాడు: “దక్షిణ సముద్రంలో త్రికూట పర్వతం మీద, చాలా కాలం క్రితం రాక్షసుల కోసం విశ్వకర్మ నిర్మించిన లంక అనే బంగారు నగరం ఉంది. విష్ణువుకు భయపడి వారు దాన్ని వదిలి పారిపోయారు; అది ఖాళీగా ఉంది. అక్కడ ఉండు.” అలా కుబేరుడు తన యక్షులతో లంకకు వెళ్ళి సంతోషంగా పాలించాడు.’"]
  ],
  [
   ["p", "Rāma listened eagerly. ‘But who were the rākṣasas who first lived in Laṅkā, and why did they flee?’ Agastya smiled and continued.",
    "రాముడు ఆసక్తిగా విన్నాడు. ‘అయితే మొదట లంకలో ఉన్న రాక్షసులు ఎవరు, ఎందుకు పారిపోయారు?’ అగస్త్యుడు నవ్వి కొనసాగించాడు."],
   ["dyk", "📖", "The Uttara Kāṇḍa — the ‘Later Book’ — tells what happened after Rāma's coronation, and also goes back in time to tell the history of Rāvaṇa and Hanumān. Many scholars think parts of it were added after Vālmīki's main poem, but it has been read as part of the Rāmāyaṇa for well over a thousand years.",
    "ఉత్తరకాండ — ‘తర్వాతి కాండ’ — రాముని పట్టాభిషేకం తర్వాత ఏం జరిగిందో చెబుతుంది; కాలంలో వెనక్కి వెళ్ళి రావణుని, హనుమంతుని చరిత్ర కూడా చెబుతుంది. దీనిలోని కొన్ని భాగాలు వాల్మీకి మూల కావ్యం తర్వాత చేరాయని చాలామంది పండితులు భావిస్తారు; అయినా వెయ్యేళ్ళకు పైగా ఇది రామాయణంలో భాగంగానే చదవబడుతోంది."]
  ]
 ],
 remember: [
  ["After the coronation, the great sages came to bless Rāma.", "పట్టాభిషేకం తర్వాత రాముణ్ణి దీవించడానికి మహర్షులు వచ్చారు."],
  ["Agastya began to tell the history of Rāvaṇa's family, from the sage Pulastya.", "పులస్త్య మహర్షి నుండి మొదలుపెట్టి రావణుని వంశ చరిత్రను అగస్త్యుడు చెప్పడం మొదలుపెట్టాడు."],
  ["Kubera, son of Viśravas, received the Puṣpaka and first ruled Laṅkā.", "విశ్రవసుని కొడుకు కుబేరుడు పుష్పకాన్ని పొంది మొదట లంకను పాలించాడు."]
 ],
 think: ["Rāma wanted to understand where his enemies came from. Why can it help to understand someone's story, even an enemy's?", "తన శత్రువులు ఎక్కడి నుండి వచ్చారో రాముడు అర్థం చేసుకోవాలనుకున్నాడు. శత్రువుదైనా సరే, ఒకరి కథను అర్థం చేసుకోవడం ఎందుకు సహాయపడుతుంది?"]
},
{
 id: "uttara-2", kanda: "uttara", n: 2, order: 702, date: "2026-10-21",
 title: "The Rākṣasas of Old", titleTe: "పూర్వపు రాక్షసులు", sargas: "4–8", scene: "sky",
 who: ["agastya", "brahma", "shiva", "sumali", "malyavan", "vishnu", "garuda"],
 pages: [
  [
   ["p", "‘When {brahma|Brahmā} created the waters,’ said Agastya, ‘he created beings to guard them. Hungry and thirsty, they asked, “What shall we do?” Brahmā said, “Protect the waters.” Some said, “We will protect (rakṣāmaḥ)”; others said, “We will worship (yakṣāmaḥ).” Those who said rakṣāmaḥ became the rākṣasas; those who said yakṣāmaḥ became the yakṣas. Among the first rākṣasas were two brothers, Heti and Praheti. Heti married Bhayā — “Fear”, the sister of Time — and their grandson was Sukeśa.’",
    "‘{brahma|బ్రహ్మ} జలాలను సృష్టించినప్పుడు,’ అన్నాడు అగస్త్యుడు, ‘వాటిని కాపాడడానికి కొన్ని జీవులను సృష్టించాడు. ఆకలి, దప్పికతో అవి, “మేమేం చేయాలి?” అని అడిగాయి. “జలాలను రక్షించండి,” అన్నాడు బ్రహ్మ. కొందరు “రక్షిస్తాం (రక్షామః)” అన్నారు; కొందరు “పూజిస్తాం (యక్షామః)” అన్నారు. రక్షామః అన్నవారు రాక్షసులయ్యారు; యక్షామః అన్నవారు యక్షులయ్యారు. మొదటి రాక్షసుల్లో హేతి, ప్రహేతి అనే ఇద్దరు అన్నదమ్ములు ఉన్నారు. హేతి కాలుని సోదరి అయిన భయ — “భయం” — ను పెళ్ళాడాడు; వారి మనవడు సుకేశుడు.’"],
   ["p", "‘Sukeśa was abandoned as a baby. {shiva|Śiva} and Pārvatī, passing through the sky on the bull Nandi, heard him crying. Out of pity, Pārvatī blessed him — and blessed all rākṣasa children from then on to grow up in a single day. Sukeśa grew strong and pious, and had three sons: {malyavan|Mālyavān}, {sumali|Sumālī} and Mālī. The three did great tapas, and Brahmā gave them boons of strength and victory. They asked Viśvakarmā to build them a city, and he built golden Laṅkā on Trikūṭa.’"
   , "‘పసిబిడ్డగా ఉన్నప్పుడే సుకేశుణ్ణి వదిలేశారు. నందిపై ఆకాశంలో వెళ్తున్న {shiva|శివుడు}, పార్వతి అతని ఏడుపు విన్నారు. జాలితో పార్వతి అతన్ని దీవించింది — అప్పటి నుండి రాక్షస శిశువులంతా ఒక్క రోజులోనే పెరిగి పెద్దవాళ్ళయ్యేలా దీవించింది. సుకేశుడు బలవంతుడై, భక్తుడై, ముగ్గురు కొడుకులను కన్నాడు: {malyavan|మాల్యవంతుడు}, {sumali|సుమాలి}, మాలి. ముగ్గురూ గొప్ప తపస్సు చేయగా బ్రహ్మ వారికి బలం, విజయ వరాలు ఇచ్చాడు. తమకు ఒక నగరం నిర్మించమని విశ్వకర్మను అడగగా, అతను త్రికూటం మీద బంగారు లంకను నిర్మించాడు.’"]
  ],
  [
   ["p", "‘Proud of their boons, the three brothers began to torment the gods and the sages. The gods went to Śiva, who said, “I cannot kill them, for I have blessed their family. Go to {vishnu|Viṣṇu}.” Viṣṇu promised, “I will destroy them.” The rākṣasas heard of this and marched on heaven with a huge army. Viṣṇu came to meet them, riding on {garuda|Garuḍa}, holding his conch, discus, mace and sword. The battle was fierce. Garuḍa's wings blew the rākṣasas about like leaves in a storm. Mālī struck Garuḍa, and Viṣṇu cut off Mālī's head with his discus, Sudarśana.’",
    "‘వరాల గర్వంతో ముగ్గురు అన్నదమ్ములు దేవతలను, మునులను హింసించడం మొదలుపెట్టారు. దేవతలు శివుని దగ్గరకు వెళ్ళగా అతను, “వారి వంశాన్ని నేను దీవించాను కాబట్టి వారిని చంపలేను. {vishnu|విష్ణువు} దగ్గరకు వెళ్ళండి,” అన్నాడు. “నేను వారిని నాశనం చేస్తాను,” అని విష్ణువు మాట ఇచ్చాడు. ఇది విని రాక్షసులు భారీ సైన్యంతో స్వర్గం మీదకు దండెత్తారు. శంఖ చక్ర గదా ఖడ్గాలు ధరించి {garuda|గరుత్మంతుని} మీద విష్ణువు వారిని ఎదుర్కొన్నాడు. యుద్ధం భీకరంగా సాగింది. గరుత్మంతుని రెక్కల గాలికి రాక్షసులు తుఫానులో ఆకుల్లా ఎగిరిపోయారు. మాలి గరుత్మంతుణ్ణి కొట్టగా, విష్ణువు సుదర్శన చక్రంతో మాలి తల నరికాడు.’"],
   ["p", "‘Mālyavān and Sumālī fled with the survivors. Viṣṇu chased them, and Mālyavān turned and said, “Is it right to strike those who are running away?” Viṣṇu answered, “I promised the gods to destroy you. Wherever you go, I will find you — even in the underworld.” So the rākṣasas abandoned Laṅkā and went to live in Pātāla, the world under the earth. That is how Laṅkā came to be empty, until Kubera came to live there.’"
   , "‘మాల్యవంతుడు, సుమాలి బతికినవారితో కలిసి పారిపోయారు. విష్ణువు వారిని తరిమాడు; మాల్యవంతుడు వెనుదిరిగి, “పారిపోతున్నవారిని కొట్టడం న్యాయమా?” అన్నాడు. విష్ణువు జవాబిచ్చాడు: “మిమ్మల్ని నాశనం చేస్తానని దేవతలకు మాట ఇచ్చాను. ఎక్కడికి వెళ్ళినా — పాతాళంలో కూడా — మిమ్మల్ని పట్టుకుంటాను.” అలా రాక్షసులు లంకను వదిలి భూమి కిందనున్న పాతాళంలో నివసించడానికి వెళ్ళారు. కుబేరుడు వచ్చేవరకు లంక అలా ఖాళీగా ఉండిపోయింది.’"]
  ],
  [
   ["p", "‘And so, Rāma,’ said Agastya, ‘you see that you, who are Viṣṇu on earth, had already defeated the rākṣasas once, long ago. They feared you then, and they had reason to fear you again.’ Rāma listened in silence, and asked him to go on — how did Rāvaṇa come to be born?",
    "‘అందుకే రామా,’ అన్నాడు అగస్త్యుడు, ‘భూమి మీద విష్ణువైన నువ్వు చాలా కాలం క్రితమే ఒకసారి రాక్షసులను ఓడించావు. అప్పుడు వారు నీకు భయపడ్డారు; మళ్ళీ భయపడడానికి కారణం ఉంది.’ రాముడు మౌనంగా విని, కొనసాగించమని కోరాడు — రావణుడు ఎలా పుట్టాడు?"],
   ["dyk", "🔤", "The play on words — rakṣāmaḥ (‘we will protect’) and yakṣāmaḥ (‘we will worship’) — is Vālmīki's playful way of explaining the names rākṣasa and yakṣa. Ancient storytellers loved such word-origins.",
    "రక్షామః (‘రక్షిస్తాం’), యక్షామః (‘పూజిస్తాం’) అనే పద చమత్కారం రాక్షస, యక్ష పేర్ల మూలాన్ని వివరించడానికి వాల్మీకి సరదా పద్ధతి. ప్రాచీన కథకులకు ఇలాంటి పద వ్యుత్పత్తులంటే ఎంతో ఇష్టం."]
  ]
 ],
 remember: [
  ["Rākṣasas and yakṣas were first created by Brahmā to guard the waters.", "జలాలను కాపాడడానికి బ్రహ్మ మొదట రాక్షసులను, యక్షులను సృష్టించాడు."],
  ["Mālyavān, Sumālī and Mālī ruled golden Laṅkā, built by Viśvakarmā.", "విశ్వకర్మ నిర్మించిన బంగారు లంకను మాల్యవంతుడు, సుమాలి, మాలి పాలించారు."],
  ["Viṣṇu killed Mālī and drove the rākṣasas from Laṅkā into the underworld.", "విష్ణువు మాలిని చంపి రాక్షసులను లంక నుండి పాతాళానికి తరిమాడు."]
 ],
 think: ["The rākṣasas grew proud because of their boons and used their power to hurt others. What happens when people use their gifts to harm instead of help?", "వరాల వల్ల రాక్షసులు గర్వపడి తమ శక్తితో ఇతరులను బాధించారు. ప్రజలు తమ ప్రతిభను సహాయానికి బదులు హాని చేయడానికి వాడితే ఏమవుతుంది?"]
},
{
 id: "uttara-3", kanda: "uttara", n: 3, order: 703, date: "2026-10-21",
 title: "Rāvaṇa and His Brothers", titleTe: "రావణుడు, అతని సోదరులు", sargas: "9–10", scene: "tapas",
 who: ["sumali", "kaikasi", "vishravas", "ravana", "kumbhakarna", "vibhishana", "shurpanakha", "brahma"],
 pages: [
  [
   ["p", "‘One day {sumali|Sumālī} came up from the underworld with his beautiful daughter {kaikasi|Kaikasī}. He saw Kubera flying in the Puṣpaka, shining like fire, and he thought, “If my daughter had sons like that, our family would rise again.” He told Kaikasī, “Go to the sage Viśravas and ask him to be the father of your sons.” Kaikasī went to {vishravas|Viśravas} at dusk, while he was performing the fire-ritual, and stood before him with her eyes lowered.’",
    "‘ఒకరోజు {sumali|సుమాలి} తన అందమైన కూతురు {kaikasi|కైకసి}తో కలిసి పాతాళం నుండి పైకి వచ్చాడు. పుష్పకంలో అగ్నిలా ప్రకాశిస్తూ ఎగురుతున్న కుబేరుణ్ణి చూసి, “నా కూతురికి ఇలాంటి కొడుకులు పుడితే మా వంశం మళ్ళీ వర్ధిల్లుతుంది,” అనుకున్నాడు. “విశ్రవస మహర్షి దగ్గరకు వెళ్ళి నీ కొడుకులకు తండ్రి కమ్మని అడుగు,” అని కైకసితో చెప్పాడు. కైకసి సంధ్యా సమయంలో, అగ్నిహోత్రం చేస్తున్న {vishravas|విశ్రవసుని} దగ్గరకు వెళ్ళి కళ్ళు దించుకుని నిలబడింది.’"],
   ["p", "‘Viśravas understood her wish. “Because you came to me at this terrible hour of twilight,” he said, “your sons will be fierce and cruel rākṣasas.” Kaikasī was upset. “Must sons born of a sage like you be cruel?” Viśravas said, “Your last son will be righteous, true to my family.” In time she gave birth to a son with ten heads and twenty arms — {ravana|Daśagrīva}, later called Rāvaṇa; then the giant {kumbhakarna|Kumbhakarṇa}; then a daughter, {shurpanakha|Śūrpaṇakhā}; and last, the gentle {vibhishana|Vibhīṣaṇa}.’"
   , "‘విశ్రవసుడు ఆమె కోరిక అర్థం చేసుకున్నాడు. “ఈ భయంకరమైన సంధ్యా సమయంలో నా దగ్గరకు వచ్చావు కాబట్టి,” అన్నాడు, “నీ కొడుకులు క్రూరులైన రాక్షసులవుతారు.” కైకసి బాధపడింది. “మీలాంటి మహర్షికి పుట్టే కొడుకులు క్రూరులు కావాలా?” విశ్రవసుడు అన్నాడు: “నీ చివరి కొడుకు నా వంశానికి తగినట్టు ధర్మాత్ముడవుతాడు.” కాలక్రమంలో ఆమె పది తలలు, ఇరవై చేతులతో ఒక కొడుకును కన్నది — {ravana|దశగ్రీవుడు}, తర్వాత రావణుడని పిలవబడ్డాడు; తర్వాత భారీకాయుడు {kumbhakarna|కుంభకర్ణుడు}; తర్వాత ఒక కూతురు {shurpanakha|శూర్పణఖ}; చివరికి సౌమ్యుడైన {vibhishana|విభీషణుడు}.’"]
  ],
  [
   ["p", "‘One day Kaikasī pointed at Kubera flying overhead in his chariot. “Look at your brother, my son, so splendid. You should be like him.” Burning with envy, Daśagrīva swore, “I will be greater than him!” The three brothers went to Gokarṇa and did terrible tapas. Kumbhakarṇa stood in the summer heat among fires and in the winter cold in water. Vibhīṣaṇa stood on one foot for thousands of years, reciting the Vedas. Daśagrīva fasted for ten thousand years — and at the end of every thousand years he cut off one of his heads and offered it into the fire.’",
    "‘ఒకరోజు కైకసి పైన విమానంలో ఎగురుతున్న కుబేరుణ్ణి చూపించింది. “నాయనా, నీ అన్నను చూడు, ఎంత వైభవంగా ఉన్నాడో. నువ్వూ అలా కావాలి.” అసూయతో రగిలిన దశగ్రీవుడు, “అతనికంటే గొప్పవాణ్ణవుతాను!” అని శపథం చేశాడు. ముగ్గురు అన్నదమ్ములు గోకర్ణానికి వెళ్ళి ఘోర తపస్సు చేశారు. కుంభకర్ణుడు వేసవిలో అగ్నుల మధ్య, చలికాలంలో నీటిలో నిలబడ్డాడు. విభీషణుడు వేదాలు పఠిస్తూ వేలాది సంవత్సరాలు ఒంటికాలి మీద నిలబడ్డాడు. దశగ్రీవుడు పది వేల సంవత్సరాలు ఉపవాసం చేశాడు — ప్రతి వెయ్యేళ్ళ చివర తన ఒక తలను నరికి అగ్నిలో వేశాడు.’"],
   ["p", "‘When he was about to cut off his tenth head, {brahma|Brahmā} appeared. Daśagrīva asked, “Let me be immortal.” “No one can be immortal,” said Brahmā. “Ask for something else.” “Then let me never be killed by gods, dānavas, yakṣas, nāgas, gandharvas or rākṣasas. As for humans and animals — I do not care about them; they are like grass to me.” Brahmā granted it, and gave him back all his heads. That one proud mistake — thinking humans did not matter — would be his end.’"
   , "‘పదో తల నరకబోతుండగా {brahma|బ్రహ్మ} ప్రత్యక్షమయ్యాడు. “నన్ను అమరుణ్ణి చెయ్యి,” అడిగాడు దశగ్రీవుడు. “ఎవరూ అమరులు కాలేరు,” అన్నాడు బ్రహ్మ. “వేరేది అడుగు.” “అయితే దేవతలు, దానవులు, యక్షులు, నాగులు, గంధర్వులు, రాక్షసుల చేతిలో నాకు మరణం ఉండకూడదు. మనుషులు, జంతువులు — వారి గురించి నాకు లెక్కలేదు; నాకు వారు గడ్డిపోచల్లాంటివారు.” బ్రహ్మ ఆ వరం ఇచ్చి, అతని తలలన్నీ తిరిగి ఇచ్చాడు. మనుషులు లెక్కలోకి రారనే ఆ ఒక్క గర్విష్ఠ పొరపాటే అతని అంతానికి కారణమైంది.’"]
  ],
  [
   ["p", "‘Vibhīṣaṇa asked, “Let my mind always stay in dharma, even in the worst trouble.” Brahmā was so pleased that he also gave him long life. When Brahmā came to Kumbhakarṇa, the gods were afraid: “He has eaten so many creatures; if he gets a boon, he will eat the whole world!” So the goddess Sarasvatī entered Kumbhakarṇa's tongue. Instead of asking for power, he heard himself say, “Let me sleep for many years.” “So be it,” said Brahmā. Later Kumbhakarṇa realised what had happened and was sorry, but it was too late.’",
    "‘విభీషణుడు అడిగాడు: “ఎంత కష్టంలోనైనా నా మనసు ఎప్పుడూ ధర్మంలోనే ఉండాలి.” బ్రహ్మ ఎంత సంతోషించాడంటే దీర్ఘాయుష్షు కూడా ఇచ్చాడు. బ్రహ్మ కుంభకర్ణుని దగ్గరకు రాగానే దేవతలు భయపడ్డారు: “ఇతను ఇప్పటికే ఎన్నో జీవులను తిన్నాడు; వరం దొరికితే లోకాన్నంతా తినేస్తాడు!” అప్పుడు సరస్వతీదేవి కుంభకర్ణుని నాలుకలో ప్రవేశించింది. శక్తి అడగబోయి, “చాలా సంవత్సరాలు నిద్రపోవాలి” అని తాను అనడం అతనికే వినిపించింది. “అలాగే,” అన్నాడు బ్రహ్మ. తర్వాత జరిగింది గ్రహించి కుంభకర్ణుడు బాధపడ్డాడు, కానీ అప్పటికే ఆలస్యమైంది.’"],
   ["dyk", "🧠", "Rāvaṇa asked for protection from every kind of being except humans, whom he despised. That is why Viṣṇu was born as Rāma, a man. In the old stories, pride often leaves exactly the gap through which downfall comes.",
    "తాను తృణీకరించిన మనుషులు తప్ప అన్ని రకాల జీవుల నుండి రావణుడు రక్షణ కోరాడు. అందుకే విష్ణువు మనిషిగా — రాముడిగా — జన్మించాడు. పాత కథల్లో గర్వం తరచుగా సరిగ్గా పతనం వచ్చే దారినే వదిలేస్తుంది."]
  ]
 ],
 remember: [
  ["Kaikasī came to Viśravas at dusk; their sons were Rāvaṇa, Kumbhakarṇa and Vibhīṣaṇa, and their daughter Śūrpaṇakhā.", "కైకసి సంధ్యా సమయంలో విశ్రవసుని దగ్గరకు వచ్చింది; వారి సంతానం రావణ, కుంభకర్ణ, విభీషణులు, శూర్పణఖ."],
  ["Rāvaṇa offered nine heads in tapas and asked to be safe from all beings except humans.", "రావణుడు తపస్సులో తొమ్మిది తలలు అర్పించి, మనుషులు తప్ప అందరి నుండి రక్షణ కోరాడు."],
  ["Vibhīṣaṇa asked that his mind always stay in dharma; Kumbhakarṇa got sleep.", "విభీషణుడు మనసు ఎప్పుడూ ధర్మంలో ఉండాలని కోరాడు; కుంభకర్ణునికి నిద్ర దక్కింది."]
 ],
 think: ["Three brothers were given the same chance, and each asked for something different. What would you ask for, and what does it say about you?", "ముగ్గురు అన్నదమ్ములకు ఒకే అవకాశం దొరికింది; ఒక్కొక్కరు ఒక్కోటి అడిగారు. మీరైతే ఏం అడుగుతారు? అది మీ గురించి ఏం చెబుతుంది?"]
},
{
 id: "uttara-4", kanda: "uttara", n: 4, order: 704, date: "2026-10-21",
 title: "Laṅkā and the Puṣpaka", titleTe: "లంక, పుష్పకం", sargas: "11–15", scene: "lanka",
 who: ["ravana", "kubera", "vishravas", "mandodari", "vibhishana", "sarama", "indrajit"],
 pages: [
  [
   ["p", "‘With his boon, {ravana|Daśagrīva} grew proud. His grandfather Sumālī came up from the underworld and said, “Laṅkā was our city. Take it back from Kubera.” Daśagrīva sent a message to {kubera|Kubera}: “Laṅkā belongs to the rākṣasas. Give it to me.” Kubera asked their father {vishravas|Viśravas} what to do. Viśravas said, “Your brother is wicked and has a boon from Brahmā. Do not fight him. Leave Laṅkā and go to Mount Kailāsa.” So Kubera gave up Laṅkā without a fight and built a new city, Alakā, on Kailāsa.’",
    "‘వరం వల్ల {ravana|దశగ్రీవుడు} గర్వించాడు. అతని తాత సుమాలి పాతాళం నుండి వచ్చి, “లంక మన నగరం. కుబేరుని నుండి తిరిగి తీసుకో,” అన్నాడు. దశగ్రీవుడు {kubera|కుబేరునికి} సందేశం పంపాడు: “లంక రాక్షసులది. నాకు ఇచ్చేయ్.” ఏం చేయాలని కుబేరుడు తండ్రి {vishravas|విశ్రవసుణ్ణి} అడిగాడు. విశ్రవసుడు అన్నాడు: “నీ తమ్ముడు దుష్టుడు, బ్రహ్మ వరం ఉన్నవాడు. అతనితో యుద్ధం చేయకు. లంకను వదిలి కైలాస పర్వతానికి వెళ్ళు.” అలా కుబేరుడు యుద్ధం చేయకుండానే లంకను వదిలి కైలాసం మీద అలకాపురి అనే కొత్త నగరం నిర్మించుకున్నాడు.’"],
   ["p", "‘Daśagrīva became king of Laṅkā. Maya, the architect of the dānavas, gave him his daughter {mandodari|Mandodarī} in marriage. Kumbhakarṇa married Vajrajvālā, granddaughter of Bali. {vibhishana|Vibhīṣaṇa} married {sarama|Saramā}, the gentle daughter of a gandharva king. Mandodarī's first son roared like thunder the moment he was born, so he was named Meghanāda — “Thunder of the Clouds” — the one who would later be called {indrajit|Indrajit}.’"
   , "‘దశగ్రీవుడు లంకకు రాజయ్యాడు. దానవశిల్పి మయుడు తన కూతురు {mandodari|మండోదరి}ని అతనికిచ్చి పెళ్ళి చేశాడు. కుంభకర్ణుడు బలి మనవరాలు వజ్రజ్వాలను పెళ్ళాడాడు. {vibhishana|విభీషణుడు} ఒక గంధర్వరాజు సౌమ్యురాలైన కూతురు {sarama|సరమ}ను పెళ్ళాడాడు. మండోదరి మొదటి కొడుకు పుట్టిన క్షణమే ఉరుములా గర్జించాడు; అందుకే మేఘనాదుడు — “మేఘ గర్జన” — అని పేరు పెట్టారు; తర్వాత అతనే {indrajit|ఇంద్రజిత్తు} అని పిలవబడ్డాడు.’"]
  ],
  [
   ["p", "‘Now Daśagrīva began to trouble the whole world. He destroyed the gardens of the gods, killed sages, and attacked anyone who stood against him. Kubera, hearing of this, sent a messenger with brotherly advice: “Stop these wicked deeds, for the sake of our family's name.” Daśagrīva flew into a rage and killed the messenger. Then he marched with his army to Kailāsa and attacked Kubera's city.’",
    "‘ఇప్పుడు దశగ్రీవుడు లోకాన్నంతా బాధించడం మొదలుపెట్టాడు. దేవతల తోటలను ధ్వంసం చేశాడు, మునులను చంపాడు, తనకు అడ్డొచ్చిన ఎవరిపైనైనా దాడి చేశాడు. ఇది విని కుబేరుడు సోదర ప్రేమతో సలహా ఇస్తూ ఒక దూతను పంపాడు: “మన వంశ గౌరవం కోసం ఈ దుష్కార్యాలు ఆపు.” దశగ్రీవుడు ఆగ్రహించి ఆ దూతను చంపేశాడు. తర్వాత సైన్యంతో కైలాసానికి దండెత్తి కుబేరుని నగరంపై దాడి చేశాడు.’"],
   ["p", "‘Kubera's yakṣas fought bravely, but they could not stand against the rākṣasas. At last Kubera himself came out. He reminded his brother of their father, of dharma, of the shame of fighting one's own family. Daśagrīva would not listen. He struck Kubera on the head with a mace, and Kubera fell, wounded. Daśagrīva took the Puṣpaka — the beautiful flying chariot that Brahmā had given Kubera — as a prize of war, and flew back to Laṅkā in triumph.’"
   , "‘కుబేరుని యక్షులు ధైర్యంగా పోరాడారు, కానీ రాక్షసుల ముందు నిలవలేకపోయారు. చివరికి కుబేరుడే స్వయంగా బయటకు వచ్చాడు. తమ తండ్రిని, ధర్మాన్ని, సొంత కుటుంబంతో యుద్ధం చేయడంలోని అవమానాన్ని తమ్మునికి గుర్తుచేశాడు. దశగ్రీవుడు వినలేదు. గదతో కుబేరుని తల మీద కొట్టగా కుబేరుడు గాయపడి పడిపోయాడు. బ్రహ్మ కుబేరునికి ఇచ్చిన అందమైన ఎగిరే విమానం పుష్పకాన్ని యుద్ధ బహుమతిగా తీసుకుని దశగ్రీవుడు విజయగర్వంతో లంకకు ఎగిరి వెళ్ళాడు.’"]
  ],
  [
   ["p", "‘That is how the Puṣpaka came to Rāvaṇa,’ said Agastya. ‘The same chariot in which he carried Sītā away, and in which you, Rāma, flew home to Ayodhyā — and which you have now returned to its true owner, Kubera.’",
    "‘అలా పుష్పకం రావణుని దగ్గరకు వచ్చింది,’ అన్నాడు అగస్త్యుడు. ‘అతను సీతను ఎత్తుకుపోయిన విమానం అదే; రామా, నువ్వు అయోధ్యకు ఎగిరి వచ్చిన విమానమూ అదే — ఇప్పుడు నువ్వు దాని అసలు యజమాని కుబేరునికి తిరిగి ఇచ్చేశావు.’"],
   ["dyk", "🛕", "Kubera chose to give up Laṅkā rather than fight his brother. Rāvaṇa, given the same chance years later with Vibhīṣaṇa, chose anger. The Rāmāyaṇa keeps showing how brothers choose differently.",
    "తమ్మునితో యుద్ధం చేయడం కంటే లంకను వదులుకోవడాన్నే కుబేరుడు ఎంచుకున్నాడు. సంవత్సరాల తర్వాత విభీషణుని విషయంలో అదే అవకాశం వచ్చినప్పుడు రావణుడు కోపాన్ని ఎంచుకున్నాడు. అన్నదమ్ములు ఎలా భిన్నంగా ఎంచుకుంటారో రామాయణం మళ్ళీ మళ్ళీ చూపిస్తుంది."]
  ]
 ],
 remember: [
  ["Kubera gave up Laṅkā to Rāvaṇa without a fight, on his father's advice.", "తండ్రి సలహాతో కుబేరుడు యుద్ధం చేయకుండా లంకను రావణునికి వదిలేశాడు."],
  ["Rāvaṇa married Mandodarī, daughter of Maya; their son Meghanāda roared at birth.", "రావణుడు మయుని కూతురు మండోదరిని పెళ్ళాడాడు; వారి కొడుకు మేఘనాదుడు పుట్టగానే గర్జించాడు."],
  ["Rāvaṇa attacked his brother Kubera and took the Puṣpaka.", "రావణుడు అన్న కుబేరునిపై దాడి చేసి పుష్పకాన్ని లాక్కున్నాడు."]
 ],
 think: ["Kubera gave up his city to avoid fighting his brother. Was that wise, or should he have stood up to Rāvaṇa?", "తమ్మునితో యుద్ధం తప్పించుకోవడానికి కుబేరుడు తన నగరాన్ని వదులుకున్నాడు. అది తెలివైన పనా, లేక రావణుణ్ణి ఎదిరించాల్సిందా?"]
}
]);
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "uttara-5", kanda: "uttara", n: 5, order: 705, date: "2026-10-21",
 title: "Rāvaṇa at Kailāsa", titleTe: "కైలాసంలో రావణుడు", sargas: "16", scene: "hill",
 who: ["ravana", "nandi", "shiva", "parvati"],
 pages: [
  [
   ["p", "‘After defeating Kubera,’ Agastya went on, ‘{ravana|Daśagrīva} flew in the Puṣpaka over a forest of reeds where the god Kārttikeya was born. Suddenly the chariot stopped in mid-air and would not move. A strange figure appeared — {nandi|Nandi}, Śiva's attendant, dark and short, with the face of a monkey, holding a trident. “Turn back, Daśagrīva,” said Nandi. “Lord Śiva is here on the mountain with the goddess. No one may pass.”’",
    "‘కుబేరుణ్ణి ఓడించాక,’ అగస్త్యుడు కొనసాగించాడు, ‘{ravana|దశగ్రీవుడు} పుష్పకంలో కార్తికేయుడు జన్మించిన రెల్లు వనం మీదుగా ఎగురుతున్నాడు. ఒక్కసారిగా విమానం గాలిలోనే ఆగిపోయి కదలలేదు. ఒక వింత ఆకారం ప్రత్యక్షమైంది — శివుని అనుచరుడు {nandi|నంది}, నల్లగా, పొట్టిగా, కోతి ముఖంతో, త్రిశూలం పట్టుకుని. “దశగ్రీవా, వెనక్కి తిరుగు,” అన్నాడు నంది. “శివుడు దేవితో కలిసి ఈ పర్వతం మీద ఉన్నాడు. ఎవరూ దాటకూడదు.”’"],
   ["p", "‘Daśagrīva laughed at Nandi's monkey face. Nandi grew angry and cursed him: “Because you mock me for my monkey face, vānaras with faces like mine, with strength like mine, will one day destroy you and your whole family.” But Daśagrīva did not care. “Who is this Śiva who blocks my way? I will tear up this mountain by its roots!” He put his twenty arms under Mount Kailāsa and lifted it. The mountain shook; Śiva's attendants trembled; {parvati|Pārvatī}, frightened, held on to Śiva.’"
   , "‘నంది కోతి ముఖం చూసి దశగ్రీవుడు నవ్వాడు. కోపించిన నంది శపించాడు: “నా కోతి ముఖాన్ని ఎగతాళి చేశావు కాబట్టి, నాలాంటి ముఖాలు, నాలాంటి బలం గల వానరులు ఒకనాడు నిన్ను, నీ వంశాన్నంతా నాశనం చేస్తారు.” కానీ దశగ్రీవుడు లెక్కచేయలేదు. “నా దారికి అడ్డొచ్చే ఈ శివుడెవరు? ఈ పర్వతాన్ని వేళ్ళతో పెకలిస్తాను!” ఇరవై చేతులను కైలాస పర్వతం కింద పెట్టి ఎత్తాడు. పర్వతం కంపించింది; శివగణాలు వణికిపోయాయి; భయపడిన {parvati|పార్వతి} శివుణ్ణి పట్టుకుంది.’"]
  ],
  [
   ["p", "‘{shiva|Śiva} smiled, and with just the big toe of his foot, pressed the mountain down. Daśagrīva's arms were crushed beneath it like pillars under a falling roof. In terrible pain he let out a roar so loud that the three worlds shook, the oceans rose and the gods thought the end of the world had come. His ministers said, “Praise Śiva. There is no other way. He is kind to those who seek his mercy.” So Daśagrīva, his arms trapped, sang hymns to Śiva — for a thousand years, the story says.’",
    "‘{shiva|శివుడు} నవ్వి, కాలి బొటనవేలితో పర్వతాన్ని కిందకు అదిమాడు. కూలుతున్న కప్పు కింద స్తంభాల్లా దశగ్రీవుని చేతులు దాని కింద నలిగిపోయాయి. భయంకరమైన నొప్పితో అతను ముల్లోకాలు కంపించేంత, సముద్రాలు ఉప్పొంగేంత, ప్రళయం వచ్చిందని దేవతలు అనుకునేంత పెద్దగా గర్జించాడు. అతని మంత్రులు, “శివుణ్ణి స్తుతించు. వేరే దారి లేదు. కరుణ కోరేవారిపై అతను దయ చూపుతాడు,” అన్నారు. అలా చేతులు చిక్కుకుని ఉండగా దశగ్రీవుడు శివుని స్తోత్రాలు పాడాడు — వెయ్యేళ్ళు అని కథ చెబుతుంది.’"],
   ["p", "‘At last Śiva was pleased and released him. “Because of the terrible cry (rāva) you gave, which made the worlds weep, you will be called Rāvaṇa from now on.” And Śiva gave him a famous sword named Candrahāsa — “the Moon's Laughter” — warning him never to disrespect it, or it would return to Śiva. From that day Daśagrīva was known as Rāvaṇa.’"
   , "‘చివరికి శివుడు సంతోషించి అతన్ని విడిచిపెట్టాడు. “లోకాలను ఏడిపించిన భయంకరమైన అరుపు (రావం) నువ్వు చేశావు కాబట్టి ఇకనుండి నువ్వు రావణుడని పిలవబడతావు.” శివుడు అతనికి చంద్రహాసం — “చంద్రుని నవ్వు” — అనే ప్రసిద్ధ ఖడ్గాన్ని ఇచ్చి, దాన్ని ఎప్పుడూ అగౌరవపరచకూడదని, లేకపోతే అది తన దగ్గరకు తిరిగి వస్తుందని హెచ్చరించాడు. ఆ రోజు నుండి దశగ్రీవుడు రావణుడుగా ప్రసిద్ధుడయ్యాడు.’"]
  ],
  [
   ["p", "And Nandi's curse came true: it was the vānaras — Hanumān, Sugrīva, Aṅgada, Nīla and their armies — who helped Rāma destroy Rāvaṇa and his family.",
    "నంది శాపం నిజమైంది: రాముడు రావణుణ్ణి, అతని వంశాన్ని నాశనం చేయడానికి సహాయపడింది వానరులే — హనుమంతుడు, సుగ్రీవుడు, అంగదుడు, నీలుడు, వారి సేనలు."],
   ["dyk", "🎶", "The famous hymn Śiva Tāṇḍava Stotram is traditionally said to be the song Rāvaṇa sang under Kailāsa. That hymn is a later composition and is not in Vālmīki's text, but the tradition connecting them is very old and much loved.",
    "ప్రసిద్ధ శివ తాండవ స్తోత్రాన్ని కైలాసం కింద రావణుడు పాడిన స్తోత్రంగా సంప్రదాయం చెబుతుంది. ఆ స్తోత్రం తర్వాతి రచన, వాల్మీకి గ్రంథంలో లేదు; కానీ వాటిని కలిపే సంప్రదాయం చాలా పాతది, ఎంతో ప్రియమైనది."]
  ]
 ],
 remember: [
  ["Rāvaṇa mocked Nandi's monkey face, and Nandi cursed that vānaras would destroy him.", "రావణుడు నంది కోతి ముఖాన్ని ఎగతాళి చేశాడు; వానరులు అతన్ని నాశనం చేస్తారని నంది శపించాడు."],
  ["Rāvaṇa lifted Kailāsa; Śiva pressed it down with his toe and trapped his arms.", "రావణుడు కైలాసాన్ని ఎత్తాడు; శివుడు కాలి వేలితో అదిమి అతని చేతులు చిక్కుకునేలా చేశాడు."],
  ["Śiva named him Rāvaṇa, ‘the one who made the worlds cry’, and gave him the sword Candrahāsa.", "శివుడు అతనికి రావణుడు — ‘లోకాలను ఏడిపించినవాడు’ — అని పేరు పెట్టి చంద్రహాస ఖడ్గం ఇచ్చాడు."]
 ],
 think: ["Rāvaṇa laughed at Nandi because he looked different. Why is it wrong to mock someone for how they look?", "నంది భిన్నంగా కనిపించినందుకు రావణుడు నవ్వాడు. ఒకరి రూపాన్ని చూసి ఎగతాళి చేయడం ఎందుకు తప్పు?"]
},
{
 id: "uttara-6", kanda: "uttara", n: 6, order: 706, date: "2026-10-21",
 title: "Vedavatī's Curse", titleTe: "వేదవతి శాపం", sargas: "17", scene: "tapas",
 who: ["ravana", "vedavati", "vishnu", "sita", "janaka"],
 pages: [
  [
   ["p", "‘Rāvaṇa wandered through the Himālayan forests,’ said Agastya, ‘and there he saw a young woman doing tapas, wearing deerskin and matted hair, shining like a goddess. Struck by her beauty, Rāvaṇa asked, “Who are you, and why do you waste your youth in tapas?” She answered, “I am {vedavati|Vedavatī}, daughter of the sage Kuśadhvaja, son of Bṛhaspati. My father wished me to marry no one but {vishnu|Viṣṇu}. A daitya who wanted to marry me killed my father in his sleep. Now I do tapas so that Viṣṇu will be my husband.”’",
    "‘రావణుడు హిమాలయ అడవుల్లో తిరుగుతున్నాడు,’ అన్నాడు అగస్త్యుడు, ‘అక్కడ జింక చర్మం, జడలు ధరించి, దేవతలా ప్రకాశిస్తూ తపస్సు చేస్తున్న ఒక యువతిని చూశాడు. ఆమె అందానికి ముగ్ధుడై రావణుడు, “నువ్వెవరు, నీ యవ్వనాన్ని తపస్సులో ఎందుకు వృథా చేస్తున్నావు?” అని అడిగాడు. ఆమె జవాబిచ్చింది: “నేను {vedavati|వేదవతి}ని, బృహస్పతి కుమారుడైన కుశధ్వజ మహర్షి కూతురిని. నన్ను {vishnu|విష్ణువుకు} తప్ప ఎవరికీ ఇవ్వకూడదని మా నాన్న కోరిక. నన్ను పెళ్ళాడాలనుకున్న ఒక దైత్యుడు నిద్రలో ఉన్న మా నాన్నను చంపేశాడు. విష్ణువు నా భర్త కావాలని ఇప్పుడు తపస్సు చేస్తున్నాను.”’"],
   ["p", "‘Rāvaṇa laughed. “Who is this Viṣṇu? I am far greater. Be my wife.” Vedavatī refused. Rāvaṇa seized her by the hair. In fury, Vedavatī raised her hand like a sword and cut off her own hair where he held it. “You have insulted me, and I will not live in this body. I could curse you, but that would destroy the merit of my tapas. Instead, I will be born again — not from any woman's womb — and I will be the cause of your destruction.” And she entered a blazing fire before his eyes.’"
   , "‘రావణుడు నవ్వాడు. “ఈ విష్ణువు ఎవరు? నేను అతనికంటే చాలా గొప్పవాణ్ణి. నా భార్యవు కా.” వేదవతి నిరాకరించింది. రావణుడు ఆమె జుట్టు పట్టుకున్నాడు. ఆగ్రహంతో వేదవతి తన చేతిని కత్తిలా ఎత్తి, అతను పట్టుకున్న చోట తన జుట్టును తెంపేసింది. “నువ్వు నన్ను అవమానించావు; ఈ శరీరంతో ఇక బతకను. నిన్ను శపించగలను, కానీ అది నా తపఃఫలాన్ని నాశనం చేస్తుంది. బదులుగా మళ్ళీ పుడతాను — ఏ స్త్రీ గర్భం నుండీ కాదు — నీ నాశనానికి కారణమవుతాను.” అంటూ అతని కళ్ళ ముందే మండుతున్న అగ్నిలో ప్రవేశించింది.’"]
  ],
  [
   ["p", "‘Vedavatī was indeed born again,’ said Agastya. ‘Not from a mother, but from the earth — found by King {janaka|Janaka} in the furrow of a ploughed field. She is {sita|Sītā}, your queen, Rāma. And just as she promised, she became the cause of Rāvaṇa's death.’",
    "‘వేదవతి నిజంగానే మళ్ళీ జన్మించింది,’ అన్నాడు అగస్త్యుడు. ‘తల్లి నుండి కాదు, భూమి నుండి — దున్నిన పొలం నాగటిచాలులో {janaka|జనక} మహారాజుకు దొరికింది. రామా, ఆమే నీ రాణి {sita|సీత}. ఆమె మాట ఇచ్చినట్టే రావణుని మరణానికి కారణమైంది.’"],
   ["dyk", "🪷", "Vedavatī's story links the beginning of Rāvaṇa's wickedness to its end. Like Nandi's curse, it shows a pattern in the Uttara Kāṇḍa: each wrong Rāvaṇa did planted a seed of his own downfall.",
    "వేదవతి కథ రావణుని దుష్టత్వపు ఆరంభాన్ని దాని అంతంతో కలుపుతుంది. నంది శాపంలాగే, ఉత్తరకాండలోని ఒక క్రమాన్ని ఇది చూపిస్తుంది: రావణుడు చేసిన ప్రతి తప్పూ అతని పతనానికి ఒక విత్తనం నాటింది."]
  ]
 ],
 remember: [
  ["Vedavatī was doing tapas to win Viṣṇu as her husband.", "విష్ణువును భర్తగా పొందడానికి వేదవతి తపస్సు చేస్తోంది."],
  ["When Rāvaṇa insulted her, she entered the fire, vowing to return for his destruction.", "రావణుడు అవమానించగా, అతని నాశనం కోసం తిరిగి వస్తానని శపథం చేసి ఆమె అగ్నిలో ప్రవేశించింది."],
  ["She was born again from the earth as Sītā.", "ఆమె భూమి నుండి సీతగా మళ్ళీ జన్మించింది."]
 ],
 think: ["Vedavatī chose not to curse Rāvaṇa so that she would not lose the goodness she had earned. Why might holding back from revenge be powerful?", "తాను సంపాదించుకున్న పుణ్యాన్ని కోల్పోకూడదని వేదవతి రావణుణ్ణి శపించలేదు. ప్రతీకారం నుండి వెనక్కి తగ్గడం ఎందుకు శక్తివంతమైనది కావచ్చు?"]
},
{
 id: "uttara-7", kanda: "uttara", n: 7, order: 707, date: "2026-10-21",
 title: "Rāvaṇa Conquers the World", titleTe: "రావణుని దిగ్విజయం", sargas: "18–25", scene: "weapons",
 who: ["ravana", "marutta", "anaranya", "narada", "shurpanakha"],
 pages: [
  [
   ["p", "‘Rāvaṇa set out to conquer the world,’ Agastya continued. ‘He came upon King {marutta|Marutta} performing a great sacrifice, with the gods present. Afraid of Rāvaṇa, the gods hid by taking the forms of animals and birds: Indra became a peacock, Yama a crow, Kubera a chameleon, Varuṇa a swan. Rāvaṇa demanded that Marutta fight or surrender, then ate the sages present and left. Afterwards the gods blessed the creatures whose forms they had taken: Indra gave the peacock the eyes on its tail; Yama gave the crow freedom from disease; Varuṇa gave the swan its pure white colour; Kubera gave the chameleon a golden glow.’",
    "‘రావణుడు లోకాన్ని జయించడానికి బయలుదేరాడు,’ అగస్త్యుడు కొనసాగించాడు. ‘దేవతలు హాజరైన మహాయజ్ఞం చేస్తున్న {marutta|మరుత్త} మహారాజును చూశాడు. రావణునికి భయపడి దేవతలు జంతువులు, పక్షుల రూపాల్లో దాక్కున్నారు: ఇంద్రుడు నెమలి, యముడు కాకి, కుబేరుడు ఊసరవెల్లి, వరుణుడు హంస అయ్యారు. రావణుడు మరుత్తుణ్ణి యుద్ధం చేయమని లేదా లొంగిపొమ్మని బెదిరించి, అక్కడి మునులను తిని వెళ్ళిపోయాడు. తర్వాత దేవతలు తాము రూపం ధరించిన జీవులను దీవించారు: ఇంద్రుడు నెమలి తోకకు కన్నులు ఇచ్చాడు; యముడు కాకికి రోగాల నుండి విముక్తి ఇచ్చాడు; వరుణుడు హంసకు స్వచ్ఛమైన తెల్లని రంగు ఇచ్చాడు; కుబేరుడు ఊసరవెల్లికి బంగారు మెరుపు ఇచ్చాడు.’"],
   ["p", "‘Many kings bowed to Rāvaṇa without fighting. But when he came to Ayodhyā, King {anaranya|Anaraṇya} of the Ikṣvāku line — Rāma's own ancestor — came out to fight. His army was destroyed, and Rāvaṇa struck him down. As he lay dying, Anaraṇya said, “You have insulted the Ikṣvāku family. One day a king will be born in my line who will kill you, with your sons, ministers and army.” And so it was: you, Rāma, are of that line.’"
   , "‘చాలామంది రాజులు యుద్ధం చేయకుండానే రావణునికి తలవంచారు. కానీ అయోధ్యకు వచ్చినప్పుడు ఇక్ష్వాకు వంశపు రాజు — రాముని పూర్వికుడే — {anaranya|అనరణ్యుడు} యుద్ధానికి వచ్చాడు. అతని సైన్యం నశించింది; రావణుడు అతన్ని కూల్చాడు. చనిపోతూ అనరణ్యుడు అన్నాడు: “ఇక్ష్వాకు వంశాన్ని అవమానించావు. నా వంశంలో ఒకనాడు ఒక రాజు పుడతాడు; అతను నిన్ను నీ కొడుకులు, మంత్రులు, సైన్యంతో సహా చంపుతాడు.” అలాగే జరిగింది: రామా, నువ్వు ఆ వంశంవాడివే.’"]
  ],
  [
   ["p", "‘Then {narada|Nārada} met Rāvaṇa and, partly to test him, said, “Why fight mortals, who die anyway? Fight Yama, the god of death himself!” So Rāvaṇa went to Yama's city in the south. He freed the souls being punished there and fought Yama's army. Yama came out on his chariot and raised his terrible staff of Time, which no one can survive. But Brahmā appeared and stopped him: “If you strike, either my boon to Rāvaṇa will fail or your staff will — and both must stay true.” So Yama vanished from the field, and Rāvaṇa claimed victory.’",
    "‘తర్వాత {narada|నారదుడు} రావణుణ్ణి కలిసి, కొంత పరీక్షించడానికి అన్నాడు: “ఎలాగూ చనిపోయే మనుషులతో ఎందుకు యుద్ధం? సాక్షాత్తు మృత్యుదేవుడు యమునితో యుద్ధం చెయ్యి!” అలా రావణుడు దక్షిణాన యమపురికి వెళ్ళాడు. అక్కడ శిక్ష అనుభవిస్తున్న ప్రాణులను విడిపించి యముని సైన్యంతో పోరాడాడు. యముడు రథం మీద వచ్చి, ఎవరూ తట్టుకోలేని భయంకర కాలదండాన్ని ఎత్తాడు. కానీ బ్రహ్మ ప్రత్యక్షమై ఆపాడు: “నువ్వు కొడితే రావణునికి నేనిచ్చిన వరం విఫలమవుతుంది, లేదా నీ దండం విఫలమవుతుంది — రెండూ సత్యంగా ఉండాలి.” అందుకని యముడు రణభూమి నుండి అదృశ్యమయ్యాడు; రావణుడు విజయం ప్రకటించుకున్నాడు.’"],
   ["p", "‘Rāvaṇa went down to the underworld, defeated the nāgas and the sons of Varuṇa, and returned in the Puṣpaka carrying away many women — daughters of kings, sages, gods and dānavas. Weeping, they cursed him: “Since you carry off other men's wives, you will die because of a woman.” In one battle Rāvaṇa even killed, without knowing, Vidyujjihva, the husband of his own sister {shurpanakha|Śūrpaṇakhā}. To console her, he sent her to live in the Daṇḍaka forest at Janasthāna with their cousins Khara and Dūṣaṇa — the very place where, years later, she would meet Rāma.’"
   , "‘రావణుడు పాతాళానికి దిగి నాగులను, వరుణుని కొడుకులను ఓడించి, పుష్పకంలో ఎందరో స్త్రీలను — రాజుల, మునుల, దేవతల, దానవుల కూతుళ్ళను — ఎత్తుకుని తిరిగి వచ్చాడు. ఏడుస్తూ వారు శపించారు: “పరుల భార్యలను ఎత్తుకుపోతున్నావు కాబట్టి ఒక స్త్రీ కారణంగానే చనిపోతావు.” ఒక యుద్ధంలో రావణుడు తెలియకుండా తన సొంత చెల్లెలు {shurpanakha|శూర్పణఖ} భర్త విద్యుజ్జిహ్వుణ్ణి కూడా చంపేశాడు. ఆమెను ఊరడించడానికి దాయాదులు ఖరదూషణులతో కలిసి దండకారణ్యంలోని జనస్థానంలో ఉండడానికి పంపాడు — సంవత్సరాల తర్వాత ఆమె రాముణ్ణి కలిసిన చోటు అదే.’"]
  ],
  [
   ["p", "Agastya paused. ‘You see, Rāma, how every road Rāvaṇa took led back to you: Anaraṇya's curse, the women's curse, Śūrpaṇakhā sent to Janasthāna. Without knowing it, he was building the path of his own end.’",
    "అగస్త్యుడు ఆగాడు. ‘చూశావా రామా, రావణుడు నడిచిన ప్రతి దారీ నీ దగ్గరకే దారితీసింది: అనరణ్యుని శాపం, స్త్రీల శాపం, జనస్థానానికి పంపిన శూర్పణఖ. తెలియకుండానే అతను తన అంతానికి దారి వేసుకున్నాడు.’"],
   ["dyk", "🦚", "The story of the gods blessing the peacock, crow, swan and chameleon is one of the Rāmāyaṇa's ‘why’ stories — a playful way of explaining the beauty of creatures we see every day.",
    "దేవతలు నెమలి, కాకి, హంస, ఊసరవెల్లిని దీవించిన కథ రామాయణంలోని ‘ఎందుకు’ కథల్లో ఒకటి — రోజూ చూసే జీవుల అందాన్ని వివరించే సరదా పద్ధతి."]
  ]
 ],
 remember: [
  ["The gods hid from Rāvaṇa as animals and later blessed them — like the peacock's tail.", "దేవతలు జంతువుల రూపంలో రావణుని నుండి దాక్కుని, తర్వాత వాటిని దీవించారు — నెమలి తోకలా."],
  ["King Anaraṇya, Rāma's ancestor, foretold that one of his line would kill Rāvaṇa.", "రాముని పూర్వికుడు అనరణ్యుడు తన వంశంలోని ఒకడు రావణుణ్ణి చంపుతాడని చెప్పాడు."],
  ["Rāvaṇa fought Yama and sent Śūrpaṇakhā to Janasthāna.", "రావణుడు యమునితో యుద్ధం చేసి, శూర్పణఖను జనస్థానానికి పంపాడు."]
 ],
 think: ["Agastya shows how Rāvaṇa's own deeds led to his end. How can our choices today shape what happens to us later?", "రావణుని సొంత కర్మలే అతని అంతానికి ఎలా దారితీశాయో అగస్త్యుడు చూపిస్తాడు. ఈ రోజు మన ఎంపికలు తర్వాత మనకు జరిగేదాన్ని ఎలా రూపొందిస్తాయి?"]
},
{
 id: "uttara-8", kanda: "uttara", n: 8, order: 708, date: "2026-10-21",
 title: "Rambhā's Curse and Indra's Defeat", titleTe: "రంభ శాపం, ఇంద్ర పరాజయం", sargas: "26–30", scene: "sky",
 who: ["ravana", "rambha", "nalakuvara", "indra", "indrajit", "brahma", "ahalya"],
 pages: [
  [
   ["p", "‘One moonlit night, as Rāvaṇa's army camped on Mount Kailāsa,’ said Agastya, ‘the apsarā {rambha|Rambhā} passed by, dressed for a festival, on her way to meet her husband {nalakuvara|Nalakūbara}, the son of Kubera. Rāvaṇa stopped her. She begged him, “I am your nephew's wife — like your daughter. Let me go.” But Rāvaṇa would not listen, and he forced himself upon her. Rambhā went to Nalakūbara weeping and told him everything.’",
    "‘ఒక వెన్నెల రాత్రి రావణుని సైన్యం కైలాస పర్వతం మీద విడిది చేసి ఉండగా,’ అన్నాడు అగస్త్యుడు, ‘అప్సరస {rambha|రంభ} ఉత్సవానికి అలంకరించుకుని, కుబేరుని కొడుకైన తన భర్త {nalakuvara|నలకూబరుని} కలవడానికి ఆ దారిన వెళ్తోంది. రావణుడు ఆమెను ఆపాడు. “నేను నీ అన్న కొడుకు భార్యను — నీ కూతురి లాంటిదాన్ని. నన్ను పోనీ,” అని ఆమె వేడుకుంది. కానీ రావణుడు వినకుండా ఆమెపై బలాత్కారం చేశాడు. రంభ ఏడుస్తూ నలకూబరుని దగ్గరకు వెళ్ళి అంతా చెప్పింది.’"],
   ["p", "‘Nalakūbara took water in his hand and cursed Rāvaṇa: “If he ever again forces any woman who does not want him, his head will split into seven pieces.” When Rāvaṇa heard this curse, he was afraid. That is why, Rāma, in all the months Sītā was in his power, he never forced her — he could only threaten and wait.’"
   , "‘నలకూబరుడు చేతిలో నీళ్ళు తీసుకుని రావణుణ్ణి శపించాడు: “ఇష్టం లేని ఏ స్త్రీనైనా ఇంకెప్పుడైనా బలవంతం చేస్తే అతని తల ఏడు ముక్కలవుతుంది.” ఈ శాపం విని రావణుడు భయపడ్డాడు. అందుకే రామా, సీత అతని వశంలో ఉన్న నెలలన్నిటిలో అతను ఆమెను బలవంతం చేయలేదు — బెదిరించి ఎదురుచూడగలిగాడు అంతే.’"],
   ["more", "Two tellings of the curse", "శాపం గురించి రెండు కథనాలు", "Yuddha and Uttara Kāṇḍas", "యుద్ధ, ఉత్తర కాండలు", [
    ["p", "In the Yuddha Kāṇḍa, Rāvaṇa himself says the curse came from Brahmā, after he wronged an apsarā named Puñjikasthalā. Here in the Uttara Kāṇḍa, the curse comes from Nalakūbara, after Rambhā. Vālmīki's text keeps both.",
     "యుద్ధకాండలో పుంజికస్థల అనే అప్సరసకు అపచారం చేసిన తర్వాత బ్రహ్మ ఆ శాపం ఇచ్చాడని రావణుడే చెబుతాడు. ఇక్కడ ఉత్తరకాండలో రంభ విషయంలో నలకూబరుడు శాపం ఇస్తాడు. వాల్మీకి గ్రంథం రెండింటినీ ఉంచింది."]
   ]]
  ],
  [
   ["p", "‘Then Rāvaṇa marched on heaven itself. {indra|Indra} came out with the gods, and a great battle began. Rāvaṇa's grandfather Sumālī was killed by one of the Vasus. Meghanāda fought Indra's son Jayanta and drove him from the field. Then Indra captured Rāvaṇa himself and was about to carry him away — but Meghanāda, using his magic, became invisible, broke through to Indra, bound him with ropes of illusion, and carried the king of the gods off to Laṅkā as a prisoner.’",
    "‘తర్వాత రావణుడు స్వర్గం మీదకే దండెత్తాడు. {indra|ఇంద్రుడు} దేవతలతో బయటకు వచ్చాడు; మహాయుద్ధం మొదలైంది. రావణుని తాత సుమాలి వసువుల్లో ఒకరి చేతిలో మరణించాడు. మేఘనాదుడు ఇంద్రుని కొడుకు జయంతునితో పోరాడి అతన్ని రణభూమి నుండి తరిమాడు. తర్వాత ఇంద్రుడు రావణుణ్ణే బంధించి తీసుకెళ్ళబోయాడు — కానీ మేఘనాదుడు మాయతో అదృశ్యుడై ఇంద్రుని దగ్గరకు దూసుకెళ్ళి, మాయా పాశాలతో అతన్ని బంధించి, దేవరాజును బందీగా లంకకు తీసుకెళ్ళాడు.’"],
   ["p", "‘The gods went to {brahma|Brahmā}, who came to Laṅkā. “Your son has defeated Indra,” Brahmā told Rāvaṇa. “From now on he will be known as {indrajit|Indrajit} — Conqueror of Indra. Release Indra.” Indrajit asked for a boon in return: immortality. Brahmā said no one could have that. So Indrajit asked, “Then let me be undefeatable whenever I complete my fire-sacrifice before battle.” Brahmā granted it — but warned that if he went into battle without finishing it, he would die. And that, Rāma, is how Lakṣmaṇa was able to kill him at Nikumbhilā.’"
   , "‘దేవతలు {brahma|బ్రహ్మ} దగ్గరకు వెళ్ళగా అతను లంకకు వచ్చాడు. “నీ కొడుకు ఇంద్రుణ్ణి జయించాడు,” అని బ్రహ్మ రావణునితో అన్నాడు. “ఇకనుండి ఇతను {indrajit|ఇంద్రజిత్తు} — ఇంద్రుణ్ణి జయించినవాడు — అని పిలవబడతాడు. ఇంద్రుణ్ణి విడిచిపెట్టు.” బదులుగా ఇంద్రజిత్తు అమరత్వం వరంగా అడిగాడు. అది ఎవరికీ దక్కదని బ్రహ్మ అన్నాడు. అప్పుడు ఇంద్రజిత్తు, “అయితే యుద్ధానికి ముందు నా అగ్నియాగం పూర్తి చేసినప్పుడల్లా నేను అజేయుడిగా ఉండాలి,” అని అడిగాడు. బ్రహ్మ ఇచ్చాడు — కానీ యాగం ముగించకుండా యుద్ధానికి వెళ్తే చనిపోతాడని హెచ్చరించాడు. రామా, అందుకే నికుంభిలలో లక్ష్మణుడు అతన్ని చంపగలిగాడు.’"]
  ],
  [
   ["p", "‘As for Indra,’ said Agastya, ‘Brahmā told him that this humiliation was the result of his own old wrong — when he deceived {ahalya|Ahalyā}, the wife of the sage Gautama. Even the king of the gods must reap what he sows.’ Now Rāma understood why the sages praised the killing of Indrajit above all: he had defeated even Indra.",
    "‘ఇక ఇంద్రుని విషయానికొస్తే,’ అన్నాడు అగస్త్యుడు, ‘గౌతమ మహర్షి భార్య {ahalya|అహల్య}ను మోసం చేసిన తన పాత తప్పుకు ఫలమే ఈ అవమానం అని బ్రహ్మ అతనితో చెప్పాడు. దేవరాజైనా తాను విత్తినదే కోయాలి.’ ఇంద్రుణ్ణే ఓడించినవాడు కాబట్టే మునులు ఇంద్రజిత్తు వధను అన్నిటికంటే ఎక్కువగా ఎందుకు పొగిడారో రామునికి ఇప్పుడు అర్థమైంది."],
   ["dyk", "⚡", "This chapter answers Rāma's first question to the sages — why was killing Indrajit even greater than killing Rāvaṇa? Because Indrajit had once defeated and captured Indra, the king of the gods.",
    "మునులను రాముడు అడిగిన మొదటి ప్రశ్నకు ఈ అధ్యాయం జవాబిస్తుంది — రావణ వధ కంటే ఇంద్రజిత్తు వధ ఎందుకు గొప్పది? ఎందుకంటే ఇంద్రజిత్తు ఒకప్పుడు దేవరాజు ఇంద్రుణ్ణి ఓడించి బంధించాడు."]
  ]
 ],
 remember: [
  ["After Rāvaṇa wronged Rambhā, Nalakūbara cursed him — which is why he never forced Sītā.", "రావణుడు రంభకు అపచారం చేయగా నలకూబరుడు శపించాడు — అందుకే అతను సీతను బలవంతం చేయలేదు."],
  ["Meghanāda captured Indra, and Brahmā named him Indrajit.", "మేఘనాదుడు ఇంద్రుణ్ణి బంధించాడు; బ్రహ్మ అతనికి ఇంద్రజిత్తు అని పేరు పెట్టాడు."],
  ["Indrajit's boon depended on finishing his fire-sacrifice before battle.", "ఇంద్రజిత్తు వరం యుద్ధానికి ముందు అగ్నియాగం పూర్తి చేయడం మీద ఆధారపడి ఉంది."]
 ],
 think: ["Brahmā told Indra that his defeat came from his own past wrong. Do you think our past actions follow us? How?", "ఇంద్రుని ఓటమి అతని పాత తప్పు ఫలమేనని బ్రహ్మ చెప్పాడు. మన గత కర్మలు మనల్ని వెంటాడతాయని అనుకుంటున్నారా? ఎలా?"]
}
]);
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "uttara-9", kanda: "uttara", n: 9, order: 709, date: "2026-10-21",
 title: "Kārtavīrya and Vāli", titleTe: "కార్తవీర్యుడు, వాలి", sargas: "31–34", scene: "ganga",
 who: ["ravana", "kartavirya", "pulastya", "vali"],
 pages: [
  [
   ["p", "‘But Rāvaṇa was not always the victor,’ said Agastya. ‘Once he came to the river Narmadā near the city of Māhiṣmatī. He bathed and, on the river bank, set up a golden Śiva-liṅga that he carried everywhere, and began to worship it with flowers. A little way upstream, King {kartavirya|Kārtavīrya Arjuna}, who had a thousand arms, was playing in the river with his queens. With his thousand arms he held back the whole river like a dam. When he let it go, the water rushed downstream, swept away Rāvaṇa's flowers and flooded his worship.’",
    "‘కానీ రావణుడు ఎప్పుడూ గెలవలేదు,’ అన్నాడు అగస్త్యుడు. ‘ఒకసారి అతను మాహిష్మతీ నగరం దగ్గర నర్మదా నదికి వచ్చాడు. స్నానం చేసి, ఎప్పుడూ వెంట తీసుకెళ్ళే బంగారు శివలింగాన్ని నదీతీరంలో ప్రతిష్ఠించి పూలతో పూజించడం మొదలుపెట్టాడు. కొంచెం ఎగువన వెయ్యి చేతుల రాజు {kartavirya|కార్తవీర్యార్జునుడు} తన రాణులతో నదిలో జలక్రీడలు ఆడుతున్నాడు. వెయ్యి చేతులతో నదినంతా ఆనకట్టలా ఆపాడు. వదలగానే నీరు దిగువకు దూసుకొచ్చి రావణుని పూలను కొట్టుకుపోయింది, అతని పూజను ముంచేసింది.’"],
   ["p", "‘Furious, Rāvaṇa rushed to fight Arjuna. But Arjuna, with his thousand arms, was more than his match. He struck Rāvaṇa down with his mace, bound him with ropes and carried him to Māhiṣmatī as a prisoner, like a captured animal. When the sage {pulastya|Pulastya}, Rāvaṇa's grandfather, heard this, he went to Arjuna and asked him to release his grandson. Out of respect for the sage, Arjuna set Rāvaṇa free, gave him gifts and made friends with him. Rāvaṇa went home ashamed.’"
   , "‘కోపంతో రావణుడు అర్జునునితో యుద్ధానికి దూసుకెళ్ళాడు. కానీ వెయ్యి చేతుల అర్జునుడు అతనికంటే బలవంతుడు. గదతో రావణుణ్ణి కూల్చి, తాళ్ళతో కట్టి, పట్టుకున్న జంతువులా బందీగా మాహిష్మతికి తీసుకెళ్ళాడు. రావణుని తాత {pulastya|పులస్త్య} మహర్షి ఇది విని అర్జునుని దగ్గరకు వెళ్ళి తన మనవణ్ణి విడిచిపెట్టమని అడిగాడు. మహర్షి మీద గౌరవంతో అర్జునుడు రావణుణ్ణి విడిచిపెట్టి, కానుకలు ఇచ్చి, స్నేహం చేసుకున్నాడు. రావణుడు సిగ్గుతో ఇంటికి వెళ్ళాడు.’"]
  ],
  [
   ["p", "‘Then Rāvaṇa heard of {vali|Vāli}, the mighty king of the vānaras, and went to Kiṣkindhā to challenge him. Vāli was away at the southern ocean, saying his evening prayers. Rāvaṇa crept up behind him, meaning to seize him by surprise. But Vāli knew. Without even turning round, he reached back, caught Rāvaṇa, tucked him under his arm, and flew off — to the western ocean, the northern ocean and the eastern ocean — finishing his prayers at each one, while Rāvaṇa dangled helplessly, scratching and biting.’",
    "‘తర్వాత రావణుడు మహాబలుడైన వానరరాజు {vali|వాలి} గురించి విని అతన్ని సవాలు చేయడానికి కిష్కింధకు వెళ్ళాడు. వాలి దక్షిణ సముద్రం దగ్గర సంధ్యావందనం చేస్తున్నాడు. హఠాత్తుగా పట్టుకోవాలని రావణుడు వెనకనుండి నక్కి వచ్చాడు. కానీ వాలికి తెలుసు. కనీసం వెనుదిరగకుండానే చెయ్యి వెనక్కి చాచి రావణుణ్ణి పట్టుకుని, చంకలో పెట్టుకుని ఎగిరాడు — పశ్చిమ సముద్రానికి, ఉత్తర సముద్రానికి, తూర్పు సముద్రానికి — ప్రతిచోటా సంధ్యావందనం ముగించుకుంటూ; రావణుడు నిస్సహాయంగా వేలాడుతూ గీరుతూ, కొరుకుతూ ఉన్నాడు.’"],
   ["p", "‘When Vāli came back to Kiṣkindhā, he let Rāvaṇa go and laughed. “Who are you, and where have you come from?” Rāvaṇa, amazed at Vāli's strength, said humbly, “I am Rāvaṇa, king of the rākṣasas. I came to fight you, but I have seen your strength. Let us be friends.” So they lit a fire and swore friendship before it. That is why Rāvaṇa never troubled Kiṣkindhā while Vāli lived.’"
   , "‘వాలి కిష్కింధకు తిరిగి వచ్చాక రావణుణ్ణి వదిలి నవ్వాడు. “నువ్వెవరు, ఎక్కడి నుండి వచ్చావు?” వాలి బలానికి ఆశ్చర్యపోయిన రావణుడు వినయంగా అన్నాడు: “నేను రాక్షసరాజు రావణుణ్ణి. నీతో యుద్ధం చేయడానికి వచ్చాను, కానీ నీ బలం చూశాను. స్నేహితులమవుదాం.” అలా అగ్ని రగిలించి దాని ఎదుట స్నేహ ప్రమాణం చేశారు. అందుకే వాలి బతికి ఉన్నంతకాలం రావణుడు కిష్కింధను బాధించలేదు.’"]
  ],
  [
   ["p", "Rāma marvelled. ‘Vāli was so strong — and yet he could not defeat his brother's friend?’ Agastya smiled. ‘There is one more story, Rāma — the story of that friend. Hanumān.’",
    "రాముడు ఆశ్చర్యపోయాడు. ‘వాలి అంత బలవంతుడు — అయినా తమ్ముని మిత్రుణ్ణి ఓడించలేకపోయాడా?’ అగస్త్యుడు నవ్వాడు. ‘రామా, ఇంకో కథ ఉంది — ఆ మిత్రుని కథ. హనుమంతుని కథ.’"],
   ["dyk", "🙌", "Kārtavīrya Arjuna appears in many Purāṇas too. Later he was killed by Paraśurāma for stealing his father Jamadagni's wish-granting cow — a story told in the Great Sages tile in this app.",
    "కార్తవీర్యార్జునుడు ఎన్నో పురాణాల్లో కూడా కనిపిస్తాడు. తర్వాత తండ్రి జమదగ్ని కామధేనువును దొంగిలించినందుకు పరశురాముడు అతన్ని సంహరించాడు — ఆ కథ ఈ యాప్‌లోని మహర్షులు విభాగంలో ఉంది."]
  ]
 ],
 remember: [
  ["Kārtavīrya Arjuna, the thousand-armed king, captured Rāvaṇa at the Narmadā.", "వెయ్యి చేతుల రాజు కార్తవీర్యార్జునుడు నర్మదా తీరంలో రావణుణ్ణి బంధించాడు."],
  ["Vāli carried Rāvaṇa under his arm to all four oceans during his prayers.", "వాలి సంధ్యావందనం చేస్తూ రావణుణ్ణి చంకలో పెట్టుకుని నాలుగు సముద్రాలకు తీసుకెళ్ళాడు."],
  ["Rāvaṇa and Vāli became friends before the sacred fire.", "రావణుడు, వాలి అగ్నిసాక్షిగా స్నేహితులయ్యారు."]
 ],
 think: ["Rāvaṇa, who frightened the gods, was beaten by two kings on earth. Why is it good to remember that there is always someone stronger?", "దేవతలను భయపెట్టిన రావణుణ్ణి భూమి మీది ఇద్దరు రాజులు ఓడించారు. మనకంటే బలవంతులు ఎప్పుడూ ఉంటారని గుర్తుంచుకోవడం ఎందుకు మంచిది?"]
},
{
 id: "uttara-10", kanda: "uttara", n: 10, order: 710, date: "2026-10-21",
 title: "The Story of Hanumān", titleTe: "హనుమంతుని కథ", sargas: "35–36", scene: "sky",
 who: ["rama", "agastya", "hanuman", "anjana", "kesari", "indra", "surya", "brahma"],
 pages: [
  [
   ["p", "{rama|Rāma} asked, ‘Hanumān is so strong — he could have defeated Vāli easily. Why did he not help Sugrīva when Vāli drove him out?’ {agastya|Agastya} answered, ‘Listen, Rāma. Hanumān was born to {anjana|Añjanā} and the vānara {kesari|Kesarī}, by the blessing of the Wind god. One morning, when he was a tiny baby and his mother had gone to gather fruit, he was hungry. He saw the rising sun, red like a ripe fruit, and leapt into the sky to catch it. It was the day of an eclipse, and Rāhu, who had come to seize the sun, found a baby there instead. Rāhu ran to {indra|Indra} and complained.’",
    "{rama|రాముడు} అడిగాడు: ‘హనుమంతుడు అంత బలవంతుడు — వాలిని సులభంగా ఓడించగలడు. వాలి సుగ్రీవుణ్ణి వెళ్ళగొట్టినప్పుడు అతను ఎందుకు సాయం చేయలేదు?’ {agastya|అగస్త్యుడు} జవాబిచ్చాడు: ‘విను రామా. వాయుదేవుని అనుగ్రహంతో {anjana|అంజన}కు, వానరుడు {kesari|కేసరి}కి హనుమంతుడు జన్మించాడు. ఒక ఉదయం అతను పసిబిడ్డగా ఉన్నప్పుడు, తల్లి పండ్లు తేవడానికి వెళ్ళినప్పుడు, అతనికి ఆకలి వేసింది. పండిన పండులా ఎర్రగా ఉదయిస్తున్న సూర్యుణ్ణి చూసి దాన్ని పట్టుకోవడానికి ఆకాశంలోకి దూకాడు. అది గ్రహణం రోజు; సూర్యుణ్ణి పట్టుకోవడానికి వచ్చిన రాహువుకు అక్కడ ఒక పసిబిడ్డ కనిపించాడు. రాహువు {indra|ఇంద్రుని} దగ్గరకు పరుగెత్తి ఫిర్యాదు చేశాడు.’"],
   ["p", "‘Indra came on his elephant Airāvata. The baby, seeing the white elephant, thought it was another fruit and reached for it! Indra struck him with his thunderbolt, and the baby fell onto a mountain and broke his jaw — his hanu. That is how he came to be called Hanumān. His father the Wind god was so angry that he took his son into a cave and stopped blowing. Without air, all creatures began to suffer; their breath stopped, their bodies stiffened. The gods ran to {brahma|Brahmā}.’"
   , "‘ఇంద్రుడు ఐరావతం మీద వచ్చాడు. ఆ తెల్లని ఏనుగును చూసి పసిబిడ్డ అది ఇంకో పండు అనుకుని దాని వైపు చేయి చాచాడు! ఇంద్రుడు వజ్రాయుధంతో కొట్టగా బిడ్డ ఒక పర్వతం మీద పడి దవడ — హనువు — విరిగింది. అందుకే అతనికి హనుమంతుడు అనే పేరు వచ్చింది. అతని తండ్రి వాయుదేవుడు ఎంత కోపించాడంటే కొడుకును ఒక గుహలోకి తీసుకెళ్ళి వీచడం ఆపేశాడు. గాలి లేక జీవులన్నీ బాధపడడం మొదలుపెట్టాయి; ఊపిరి ఆగిపోయింది, శరీరాలు బిగుసుకుపోయాయి. దేవతలు {brahma|బ్రహ్మ} దగ్గరకు పరుగెత్తారు.’"]
  ],
  [
   ["p", "‘Brahmā went to the cave and touched the child, who came back to life. Then, to please the Wind, all the gods gave Hanumān boons. Brahmā said no weapon of his, not even the Brahmāstra, could kill him. Indra said his thunderbolt would never harm him again. {surya|Sūrya} gave him a hundredth part of his own brilliance and promised to teach him all the scriptures. Varuṇa said water would never harm him; Yama gave him freedom from his staff and from disease; Kubera said his mace would not hurt him; Śiva and Viśvakarmā promised that none of their weapons would harm him. And Brahmā added, “He will be able to take any form he wishes and go wherever he wishes.”’",
    "‘బ్రహ్మ గుహకు వెళ్ళి బిడ్డను తాకగానే అతను మళ్ళీ బతికాడు. తర్వాత వాయువును సంతోషపెట్టడానికి దేవతలంతా హనుమంతునికి వరాలు ఇచ్చారు. తన ఏ ఆయుధమూ, బ్రహ్మాస్త్రం కూడా, అతన్ని చంపలేదని బ్రహ్మ అన్నాడు. తన వజ్రాయుధం ఇంకెప్పుడూ అతనికి హాని చేయదని ఇంద్రుడు అన్నాడు. {surya|సూర్యుడు} తన తేజస్సులో నూరో భాగం ఇచ్చి, శాస్త్రాలన్నీ నేర్పుతానని మాట ఇచ్చాడు. నీరు హాని చేయదని వరుణుడు; తన దండం నుండి, రోగాల నుండి విముక్తి యముడు; తన గద బాధించదని కుబేరుడు; తమ ఆయుధాలేవీ హాని చేయవని శివుడు, విశ్వకర్మ మాట ఇచ్చారు. బ్రహ్మ ఇంకా అన్నాడు: “కోరిన రూపం ధరించగలడు, కోరిన చోటికి వెళ్ళగలడు.”’"],
   ["p", "‘Full of all these boons, little Hanumān became very naughty. He played tricks on the sages in the forest — breaking their sacrificial vessels, tearing their bark clothes, scattering their sacred fires. The sages knew whose son he was and put up with it for a long time. But at last the sages of the lines of Bhṛgu and Aṅgiras gave him a mild curse: “You will forget your strength. Only when someone reminds you of it will you remember.” After that, Hanumān became calm and gentle. He learned grammar and the scriptures from Sūrya himself, and became as learned as Bṛhaspati.’"
   , "‘ఈ వరాలన్నిటితో చిన్ని హనుమంతుడు చాలా అల్లరివాడయ్యాడు. అడవిలోని మునుల మీద తుంటరి చేష్టలు చేశాడు — యజ్ఞపాత్రలు పగలగొట్టడం, నారబట్టలు చింపడం, పవిత్ర అగ్నులను చెదరగొట్టడం. అతను ఎవరి కొడుకో తెలిసి మునులు చాలాకాలం సహించారు. చివరికి భృగు, అంగిరస వంశాల మునులు అతనికి మృదువైన శాపం ఇచ్చారు: “నీ బలాన్ని మరచిపోతావు. ఎవరైనా గుర్తుచేసినప్పుడే గుర్తొస్తుంది.” ఆ తర్వాత హనుమంతుడు ప్రశాంతంగా, సౌమ్యంగా మారాడు. స్వయంగా సూర్యుని దగ్గర వ్యాకరణం, శాస్త్రాలు నేర్చుకుని బృహస్పతి అంతటి విద్వాంసుడయ్యాడు.’"]
  ],
  [
   ["p", "‘That is why, Rāma,’ said Agastya, ‘when Vāli and Sugrīva quarrelled, Hanumān did not know his own strength, and could not help his friend. Only when Jāmbavān reminded him on the seashore did he remember — and then he leapt across the ocean.’ Rāma looked at Hanumān with even greater love.",
    "‘అందుకే రామా,’ అన్నాడు అగస్త్యుడు, ‘వాలి సుగ్రీవులు గొడవపడినప్పుడు హనుమంతునికి తన బలం తెలియదు; మిత్రునికి సాయం చేయలేకపోయాడు. సముద్ర తీరంలో జాంబవంతుడు గుర్తుచేసినప్పుడే అతనికి గుర్తొచ్చింది — అప్పుడు సముద్రాన్ని దాటాడు.’ రాముడు ఇంకా ఎక్కువ ప్రేమతో హనుమంతుని వైపు చూశాడు."],
   ["dyk", "☀️", "Hanumān is said to have learned from Sūrya by flying in front of the sun's chariot all day, facing his teacher as the sun moved across the sky. He is remembered as a master of grammar and music, as well as of strength.",
    "సూర్యుని రథం ముందు రోజంతా ఎగురుతూ, ఆకాశంలో కదిలే గురువుకు ఎదురుగా ఉంటూ హనుమంతుడు సూర్యుని దగ్గర నేర్చుకున్నాడని చెబుతారు. బలంలోనే కాదు, వ్యాకరణం, సంగీతంలో కూడా ఆచార్యుడిగా అతన్ని గుర్తుంచుకుంటారు."]
  ]
 ],
 remember: [
  ["Baby Hanumān leapt at the sun, thinking it a fruit, and Indra's thunderbolt broke his jaw.", "పసి హనుమంతుడు సూర్యుణ్ణి పండు అనుకుని దూకాడు; ఇంద్రుని వజ్రాయుధం అతని దవడ విరిచింది."],
  ["The gods gave him many boons when the Wind god stopped blowing in grief.", "వాయుదేవుడు దుఃఖంతో వీచడం ఆపేయగా దేవతలు అతనికి ఎన్నో వరాలు ఇచ్చారు."],
  ["The sages cursed him to forget his strength until reminded — which is why he didn't help Sugrīva against Vāli.", "గుర్తుచేసేవరకు బలం మరచిపోవాలని మునులు శపించారు — అందుకే వాలికి వ్యతిరేకంగా సుగ్రీవునికి సాయం చేయలేదు."]
 ],
 think: ["Hanumān forgot his strength until a friend reminded him. Do you have strengths you have forgotten? Who could remind you?", "మిత్రుడు గుర్తుచేసేవరకు హనుమంతుడు తన బలాన్ని మరచిపోయాడు. మీరు మరచిపోయిన బలాలు మీకున్నాయా? మీకు ఎవరు గుర్తుచేయగలరు?"]
},
{
 id: "uttara-11", kanda: "uttara", n: 11, order: 711, date: "2026-10-21",
 title: "The Friends Depart", titleTe: "మిత్రుల వీడ్కోలు", sargas: "37–40", scene: "palace",
 who: ["rama", "janaka", "sugriva", "vibhishana", "hanuman"],
 pages: [
  [
   ["p", "When the sages had gone, {rama|Rāma} began to rule. Kings and friends who had come for the coronation stayed in Ayodhyā for a month, feasting and rejoicing. Then it was time for them to go home. Rāma gave rich gifts to King {janaka|Janaka}, to his uncle Yudhājit of Kekaya, to the king of Kāśī and to the other kings, and they departed with blessings.",
    "మునులు వెళ్ళిపోయాక {rama|రాముడు} పాలన మొదలుపెట్టాడు. పట్టాభిషేకానికి వచ్చిన రాజులు, మిత్రులు ఒక నెల అయోధ్యలో విందులతో, ఆనందంతో గడిపారు. తర్వాత వారు ఇళ్ళకు వెళ్ళే సమయం వచ్చింది. రాముడు {janaka|జనక} మహారాజుకు, కేకయ రాజైన మేనమామ యుధాజిత్తుకు, కాశీరాజుకు, ఇతర రాజులకు విలువైన కానుకలు ఇచ్చాడు; వారు ఆశీర్వదించి వెళ్ళారు."],
   ["p", "Then Rāma called his friends from the war. To {sugriva|Sugrīva} he said, ‘You are my friend and brother. Rule Kiṣkindhā well, with Aṅgada and the vānaras.’ To {vibhishana|Vibhīṣaṇa} he said, ‘Rule Laṅkā with dharma, and protect your people. As long as you are righteous, your kingdom will stand.’ He embraced each of the vānara and bear chiefs, gave them jewels and fine clothes, and they wept at leaving him."
   , "తర్వాత రాముడు యుద్ధంలోని తన మిత్రులను పిలిచాడు. {sugriva|సుగ్రీవునితో}, ‘నువ్వు నా మిత్రుడివి, సోదరుడివి. అంగదుడు, వానరులతో కలిసి కిష్కింధను చక్కగా పాలించు,’ అన్నాడు. {vibhishana|విభీషణునితో}, ‘లంకను ధర్మంతో పాలించు, నీ ప్రజలను కాపాడు. నువ్వు ధర్మంగా ఉన్నంతకాలం నీ రాజ్యం నిలుస్తుంది,’ అన్నాడు. వానర, భల్లూక నాయకులను ఒక్కొక్కరిని ఆలింగనం చేసుకుని, రత్నాలు, మంచి వస్త్రాలు ఇచ్చాడు; అతన్ని విడిచి వెళ్ళడానికి వారు ఏడ్చారు."]
  ],
  [
   ["p", "Last came {hanuman|Hanumān}. He bowed and said, ‘My lord, my love for you will never fade. Grant me one wish: let me live on earth as long as your story is told. As long as people speak of Rāma, let me be here to hear it.’ Rāma embraced him. ‘So be it, Hanumān. As long as my story is told in the world, your fame and your life will last. For each thing you did for me, I would give my life — and still I would be in your debt. Let the good you did for me stay in my heart forever, never repaid, for one repays only when the other is in trouble, and I wish you never to be in trouble.’",
    "చివరికి {hanuman|హనుమంతుడు} వచ్చాడు. నమస్కరించి అన్నాడు: ‘ప్రభూ, మీపై నా ప్రేమ ఎన్నడూ తగ్గదు. ఒక్క వరం ఇవ్వండి: మీ కథ చెప్పబడుతున్నంతకాలం నేను భూమి మీద బతికి ఉండాలి. ప్రజలు రాముని గురించి మాట్లాడుతున్నంతకాలం దాన్ని వినడానికి నేను ఇక్కడే ఉండాలి.’ రాముడు అతన్ని ఆలింగనం చేసుకున్నాడు. ‘అలాగే హనుమా. లోకంలో నా కథ చెప్పబడుతున్నంతకాలం నీ కీర్తి, నీ ప్రాణం నిలుస్తాయి. నువ్వు నాకు చేసిన ప్రతి పనికీ నా ప్రాణం ఇచ్చినా ఇంకా నీకు రుణపడే ఉంటాను. నువ్వు చేసిన ఉపకారం నా హృదయంలోనే తీర్చకుండా ఉండిపోనీ — ఎదుటివారు కష్టంలో ఉన్నప్పుడే రుణం తీర్చగలం; నువ్వు ఎన్నడూ కష్టంలో పడకూడదని నా కోరిక.’"],
   ["p", "Rāma took a precious necklace from his own neck and placed it on Hanumān. Then, one by one, the vānaras and bears, and Vibhīṣaṇa with his rākṣasas, said goodbye and returned to their homes, their eyes full of tears."
   , "రాముడు తన మెడలోని విలువైన హారం తీసి హనుమంతునికి వేశాడు. తర్వాత ఒక్కొక్కరుగా వానరులు, భల్లూకాలు, తన రాక్షసులతో విభీషణుడు కన్నీళ్ళు నిండిన కళ్ళతో వీడ్కోలు చెప్పి తమ ఇళ్ళకు తిరిగి వెళ్ళారు."]
  ],
  [
   ["p", "And so Hanumān is called a cirañjīvī — one who lives forever. It is believed that wherever the Rāmāyaṇa is read or sung, Hanumān is present, listening with folded hands.",
    "అందుకే హనుమంతుణ్ణి చిరంజీవి — ఎప్పటికీ బతికి ఉండేవాడు — అంటారు. రామాయణం ఎక్కడ చదివినా, పాడినా హనుమంతుడు చేతులు జోడించి వింటూ అక్కడే ఉంటాడని నమ్మకం."],
   ["dyk", "🛕", "A well-loved later tradition says that Rāma gave Vibhīṣaṇa an image of Viṣṇu as Raṅganātha, which came to rest at Śrīraṅgam on the Kāverī. That story is from the temple's tradition, not from Vālmīki.",
    "రాముడు విభీషణునికి రంగనాథ రూపంలోని విష్ణు విగ్రహాన్ని ఇచ్చాడని, అది కావేరీ తీరంలోని శ్రీరంగంలో స్థిరపడిందని ఒక ప్రియమైన తర్వాతి సంప్రదాయం చెబుతుంది. ఆ కథ ఆలయ సంప్రదాయానిది, వాల్మీకిది కాదు."]
  ]
 ],
 remember: [
  ["Rāma said farewell to the kings, to Sugrīva and the vānaras, and to Vibhīṣaṇa.", "రాముడు రాజులకు, సుగ్రీవుడు, వానరులకు, విభీషణునికి వీడ్కోలు చెప్పాడు."],
  ["Hanumān asked to live as long as Rāma's story is told, and Rāma granted it.", "రాముని కథ చెప్పబడుతున్నంతకాలం బతకాలని హనుమంతుడు కోరాడు; రాముడు అనుగ్రహించాడు."],
  ["Rāma said he could never repay Hanumān's kindness.", "హనుమంతుని ఉపకారాన్ని ఎన్నడూ తీర్చలేనని రాముడు అన్నాడు."]
 ],
 think: ["Hanumān's only wish was to keep hearing Rāma's story. What story or song would you never tire of hearing?", "రాముని కథ వింటూ ఉండడమే హనుమంతుని ఏకైక కోరిక. మీకు ఎన్నిసార్లు విన్నా విసుగు రాని కథ లేదా పాట ఏది?"]
},
{
 id: "uttara-12", kanda: "uttara", n: 12, order: 712, date: "2026-10-21",
 title: "Golden Days and Sītā's Wish", titleTe: "స్వర్ణ దినాలు, సీత కోరిక", sargas: "41–42", scene: "palace",
 who: ["rama", "sita", "kubera"],
 pages: [
  [
   ["p", "One day the Puṣpaka chariot came back to Ayodhyā by itself and spoke to Rāma. ‘Lord {kubera|Kubera} says: “You have won me from Rāvaṇa. I am yours. Use me whenever you wish.”’ Rāma honoured it with flowers and said, ‘Go where you wish, and come when I think of you.’ And the chariot rose into the sky.",
    "ఒకరోజు పుష్పక విమానం తనంతట తానే అయోధ్యకు తిరిగి వచ్చి రామునితో మాట్లాడింది. ‘{kubera|కుబేర} ప్రభువు చెబుతున్నాడు: “రావణుని నుండి నువ్వు నన్ను గెలుచుకున్నావు. నేను నీవాణ్ణి. ఎప్పుడు కావాలంటే అప్పుడు నన్ను వాడుకో.”’ రాముడు పూలతో దాన్ని గౌరవించి, ‘నీకు నచ్చిన చోటికి వెళ్ళు; నేను తలచుకున్నప్పుడు రా,’ అన్నాడు. విమానం ఆకాశంలోకి లేచింది."],
   ["p", "Those were golden days. Rāma ruled with justice in the morning, hearing the complaints of his people, and in the afternoon he walked in the Aśoka garden of the palace with {sita|Sītā}, among flowering trees, pools and singing birds. The garden was so beautiful it was like Kubera's own garden in heaven. Rāma and Sītā were happy, as they had been long ago in the first years of their marriage."
   , "అవి స్వర్ణ దినాలు. రాముడు ఉదయం ప్రజల ఫిర్యాదులు వింటూ న్యాయంగా పాలించేవాడు; మధ్యాహ్నం పూచిన చెట్లు, కొలనులు, పాడే పక్షుల మధ్య అంతఃపురంలోని అశోకవనంలో {sita|సీతతో} కలిసి నడిచేవాడు. ఆ తోట స్వర్గంలోని కుబేరుని తోటంత అందంగా ఉండేది. పెళ్ళైన తొలి సంవత్సరాల్లోలాగే సీతారాములు సంతోషంగా ఉన్నారు."]
  ],
  [
   ["p", "One day Rāma noticed a glow on Sītā's face and learned that she was expecting a child. His joy was great. ‘What would you like most, Sītā? Tell me any wish, and I will fulfil it.’ Sītā smiled. ‘I would like to visit the holy hermitages on the banks of the Gaṅgā, where the sages live on roots and fruits. I want to touch their feet and spend at least one night among them.’",
    "ఒకరోజు సీత ముఖంలో ఒక కాంతిని రాముడు గమనించాడు; ఆమె గర్భవతి అని తెలుసుకున్నాడు. అతని ఆనందానికి అవధులు లేవు. ‘సీతా, నీకు అన్నిటికంటే ఏం కావాలి? ఏ కోరికైనా చెప్పు, తీరుస్తాను.’ సీత నవ్వింది. ‘దుంపలు, పండ్లు తింటూ మునులు నివసించే గంగాతీరంలోని పవిత్ర ఆశ్రమాలను చూడాలని ఉంది. వారి పాదాలు తాకి, కనీసం ఒక్క రాత్రైనా వారి మధ్య గడపాలని ఉంది.’"],
   ["p", "‘Then you shall go tomorrow,’ said Rāma happily. Neither of them knew that this simple wish would change their lives forever.",
    "‘అయితే రేపే వెళ్దువు గాని,’ అన్నాడు రాముడు సంతోషంగా. ఈ సరళమైన కోరిక తమ జీవితాలను శాశ్వతంగా మార్చేస్తుందని ఇద్దరికీ తెలియదు."]
  ],
  [
   ["p", "Sītā had lived for years in the forest and loved it. Even as a queen in a golden palace, her heart remembered the peace of the āśramas, the sound of the Vedas at dawn, the deer and the river. It was a wish that showed who she truly was.",
    "సీత సంవత్సరాల తరబడి అడవిలో జీవించి దాన్ని ప్రేమించింది. బంగారు భవనంలో రాణిగా ఉన్నా ఆమె మనసు ఆశ్రమాల ప్రశాంతతను, తెల్లవారుజామున వేదఘోషను, జింకలను, నదిని గుర్తుచేసుకుంటూనే ఉంది. ఆమె నిజంగా ఎలాంటిదో చూపిన కోరిక అది."],
   ["dyk", "🌸", "In Indian tradition, a mother-to-be's wishes (called dohada) are fulfilled with care, because it is believed they come from the child too. Sītā's wish — to be among the sages — is often seen as a sign of the wise sons she would bear.",
    "భారతీయ సంప్రదాయంలో గర్భిణి కోరికలను (దోహదం) జాగ్రత్తగా తీరుస్తారు; అవి బిడ్డ నుండి కూడా వస్తాయని నమ్మకం. మునుల మధ్య ఉండాలన్న సీత కోరికను ఆమె కనబోయే జ్ఞానవంతులైన కొడుకులకు గుర్తుగా తరచుగా భావిస్తారు."]
  ]
 ],
 remember: [
  ["The Puṣpaka returned to Rāma, sent by Kubera, to serve him whenever he wished.", "కుబేరుడు పంపగా పుష్పకం రాముని దగ్గరకు తిరిగి వచ్చింది — అతను కోరినప్పుడు సేవ చేయడానికి."],
  ["Rāma and Sītā lived happily, and Sītā was expecting a child.", "సీతారాములు సంతోషంగా ఉన్నారు; సీత గర్భవతి."],
  ["Sītā wished to visit the hermitages of the sages on the Gaṅgā.", "గంగాతీరంలోని మునుల ఆశ్రమాలను చూడాలని సీత కోరుకుంది."]
 ],
 think: ["Even as a queen, Sītā longed for the simple life of the forest. What simple things make you truly happy?", "రాణిగా ఉన్నా సీత అడవిలోని సరళ జీవితం కోసం తపించింది. ఏ సరళమైన విషయాలు మీకు నిజమైన సంతోషాన్ని ఇస్తాయి?"]
}
]);
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "uttara-13", kanda: "uttara", n: 13, order: 713, date: "2026-10-21",
 title: "Whispers in the City", titleTe: "నగరంలో గుసగుసలు", sargas: "43–45", scene: "palace",
 who: ["rama", "bhadra", "lakshmana", "bharata", "shatrughna", "sita"],
 pages: [
  [
   ["p", "That evening {rama|Rāma} sat with his companions, who entertained him with stories and jokes. He turned to one of them, {bhadra|Bhadra}, and asked, ‘Tell me truly, Bhadra — what do the people of the city say about me, about Sītā, about my brothers? A king must know what his people think.’ Bhadra hesitated, then folded his hands. ‘My lord, they praise you. They speak of the bridge over the sea, of the death of Rāvaṇa, of your justice. But…’",
    "ఆ సాయంత్రం {rama|రాముడు} తన సహచరులతో కూర్చున్నాడు; వారు కథలు, హాస్యంతో అతన్ని అలరించారు. వారిలో ఒకడైన {bhadra|భద్రుని} వైపు తిరిగి అడిగాడు: ‘భద్రా, నిజం చెప్పు — నగర ప్రజలు నా గురించి, సీత గురించి, నా తమ్ముళ్ళ గురించి ఏమనుకుంటున్నారు? ప్రజలు ఏమనుకుంటున్నారో రాజుకు తెలియాలి.’ భద్రుడు సంకోచించి, తర్వాత చేతులు జోడించాడు. ‘ప్రభూ, వారు మిమ్మల్ని పొగుడుతున్నారు. సముద్రం మీద వారధి, రావణ వధ, మీ న్యాయం గురించి మాట్లాడుకుంటున్నారు. కానీ…’"],
   ["p", "‘But they also say: “How can Rāma take back Sītā, who lived so long in Rāvaṇa's house, carried away on his lap? Now we too will have to accept such things from our own wives, for the people follow the king.” This is what they say in the streets and markets, my lord.’ Rāma turned to his other companions. ‘Is this true?’ They bowed their heads to the ground and said, ‘It is true.’"
   , "‘…కానీ ఇలా కూడా అంటున్నారు: “రావణుని ఒడిలో ఎత్తుకెళ్ళబడి, అంతకాలం అతని ఇంట్లో ఉన్న సీతను రాముడు ఎలా స్వీకరించాడు? ఇప్పుడు మన భార్యల విషయంలో కూడా మనం ఇలాంటివి సహించాల్సి వస్తుంది — రాజును బట్టే ప్రజలు.” ప్రభూ, వీధుల్లో, సంతల్లో ఇదే అనుకుంటున్నారు.’ రాముడు మిగతా సహచరుల వైపు తిరిగాడు. ‘ఇది నిజమేనా?’ వారు నేల వరకు తలలు వంచి, ‘నిజమే,’ అన్నారు."]
  ],
  [
   ["p", "Rāma sent his companions away and called his three brothers. When {lakshmana|Lakṣmaṇa}, {bharata|Bharata} and {shatrughna|Śatrughna} came in, they saw his face pale and wet with tears, ‘like the sun in eclipse’. Rāma told them what the people were saying. ‘You know that Sītā is pure. Agni himself declared it before the gods at Laṅkā, and my own heart knows it. But the people do not believe it. A king who is spoken of with shame is lost. I would give up my life, or even you, my brothers, rather than my good name. So I have decided: I will send Sītā away.’",
    "రాముడు సహచరులను పంపేసి ముగ్గురు తమ్ముళ్ళను పిలిచాడు. {lakshmana|లక్ష్మణుడు}, {bharata|భరతుడు}, {shatrughna|శత్రుఘ్నుడు} లోపలికి రాగానే ‘గ్రహణం పట్టిన సూర్యునిలా’ పాలిపోయి, కన్నీళ్ళతో తడిసిన అతని ముఖం చూశారు. ప్రజలు ఏమనుకుంటున్నారో రాముడు చెప్పాడు. ‘సీత పవిత్రురాలని మీకు తెలుసు. లంకలో దేవతల ఎదుట స్వయంగా అగ్నిదేవుడే ప్రకటించాడు; నా హృదయానికీ తెలుసు. కానీ ప్రజలు నమ్మడం లేదు. అపకీర్తి పాలైన రాజు నశించినట్టే. నా మంచి పేరు కంటే నా ప్రాణాన్నైనా, మిమ్మల్నైనా వదులుకుంటాను. అందుకే నిర్ణయించుకున్నాను: సీతను పంపించేస్తాను.’"],
   ["p", "‘Lakṣmaṇa, tomorrow take Sītā in a chariot, with Sumantra driving, as if to fulfil her wish to see the hermitages. Take her across the Gaṅgā and leave her near the āśrama of the sage Vālmīki. Do not argue with me. Anyone who tries to change my mind will be my enemy. I swear you by my feet and my life — do as I say.’ The brothers wept, but none dared to speak. Rāma went to his rooms, sighing like an elephant in pain, and spent the night alone."
   , "‘లక్ష్మణా, ఆశ్రమాలు చూడాలన్న సీత కోరిక తీర్చడానికి వెళ్తున్నట్టే, రేపు సుమంత్రుడు నడిపే రథంలో ఆమెను తీసుకెళ్ళు. గంగ దాటించి వాల్మీకి మహర్షి ఆశ్రమం దగ్గర వదిలేసి రా. నాతో వాదించకు. నా మనసు మార్చడానికి ప్రయత్నించేవాడు నాకు శత్రువు. నా పాదాల మీద, నా ప్రాణం మీద ఒట్టు — నేను చెప్పినట్టు చెయ్యి.’ తమ్ముళ్ళు ఏడ్చారు, కానీ ఎవరూ మాట్లాడే ధైర్యం చేయలేదు. రాముడు గాయపడిన ఏనుగులా నిట్టూరుస్తూ తన గదికి వెళ్ళి రాత్రంతా ఒంటరిగా గడిపాడు."]
  ],
  [
   ["p", "This is the saddest decision in the Rāmāyaṇa. The king who had crossed an ocean and fought a terrible war to bring his wife home now sent her away — not because he doubted her, but because of what others were saying. Vālmīki does not hide Rāma's pain, nor the injustice done to Sītā.",
    "రామాయణంలోనే అత్యంత విషాదకరమైన నిర్ణయం ఇది. భార్యను ఇంటికి తీసుకురావడానికి సముద్రం దాటి భయంకర యుద్ధం చేసిన రాజు ఇప్పుడు ఆమెను పంపించేశాడు — ఆమెను అనుమానించి కాదు, ఇతరులు ఏమంటున్నారో అనే కారణంతో. రాముని బాధను గానీ, సీతకు జరిగిన అన్యాయాన్ని గానీ వాల్మీకి దాచడు."],
   ["dyk", "⚖️", "For centuries, poets, saints and ordinary readers have argued about this choice. Bhavabhūti's play Uttararāmacarita, written about 1,300 years ago, is a famous retelling full of grief for both Rāma and Sītā. Many Telugu folk songs take Sītā's side.",
    "శతాబ్దాలుగా కవులు, సాధువులు, సామాన్య పాఠకులు ఈ నిర్ణయం గురించి వాదించారు. సుమారు 1,300 ఏళ్ళ క్రితం రాసిన భవభూతి ‘ఉత్తరరామచరితం’ నాటకం సీతారాములిద్దరి దుఃఖంతో నిండిన ప్రసిద్ధ పునఃకథనం. చాలా తెలుగు జానపద గీతాలు సీత పక్షాన నిలుస్తాయి."]
  ]
 ],
 remember: [
  ["Bhadra told Rāma that some people doubted Sītā because she had lived in Rāvaṇa's house.", "రావణుని ఇంట్లో ఉన్నందుకు కొందరు ప్రజలు సీతను అనుమానిస్తున్నారని భద్రుడు రామునికి చెప్పాడు."],
  ["Rāma knew Sītā was pure, but decided to send her away to protect his name as king.", "సీత పవిత్రురాలని రామునికి తెలిసినా, రాజుగా తన పేరు కాపాడుకోవడానికి ఆమెను పంపించాలని నిర్ణయించాడు."],
  ["He ordered Lakṣmaṇa to leave her near Vālmīki's āśrama.", "వాల్మీకి ఆశ్రమం దగ్గర ఆమెను వదిలిరమ్మని లక్ష్మణుణ్ణి ఆజ్ఞాపించాడు."]
 ],
 think: ["Rāma acted because of gossip, even though he knew the truth. Should we let what others say decide what we do? Why or why not?", "నిజం తెలిసినా రాముడు పుకార్ల కారణంగా పని చేశాడు. ఇతరులు ఏమంటారో అది మనం ఏం చేయాలో నిర్ణయించాలా? ఎందుకు, ఎందుకు కాదు?"]
},
{
 id: "uttara-14", kanda: "uttara", n: 14, order: 714, date: "2026-10-21",
 title: "Sītā in Vālmīki's Āśrama", titleTe: "వాల్మీకి ఆశ్రమంలో సీత", sargas: "46–49", scene: "ganga",
 who: ["lakshmana", "sita", "sumantra", "valmiki"],
 pages: [
  [
   ["p", "In the morning {lakshmana|Lakṣmaṇa} came to {sita|Sītā} with a heavy heart. ‘The king has granted your wish. I will take you to the hermitages on the Gaṅgā.’ Sītā was overjoyed. She packed fine clothes and jewels as gifts for the wives of the sages, and climbed into the chariot driven by {sumantra|Sumantra}. On the way she said, ‘Lakṣmaṇa, my right eye is throbbing and I feel strange. I hope all is well with your brothers and the queens.’ Lakṣmaṇa could not answer.",
    "ఉదయం బరువెక్కిన గుండెతో {lakshmana|లక్ష్మణుడు} {sita|సీత} దగ్గరకు వచ్చాడు. ‘రాజు మీ కోరిక తీర్చాడు. గంగాతీరంలోని ఆశ్రమాలకు మిమ్మల్ని తీసుకెళ్తాను.’ సీత ఆనందంతో ఉప్పొంగిపోయింది. మునిపత్నులకు కానుకలుగా మంచి వస్త్రాలు, ఆభరణాలు సర్దుకుని, {sumantra|సుమంత్రుడు} నడిపే రథం ఎక్కింది. దారిలో, ‘లక్ష్మణా, నా కుడికన్ను అదురుతోంది, ఏదో వింతగా ఉంది. మీ అన్నదమ్ములు, తల్లులు క్షేమంగా ఉండాలి,’ అంది. లక్ష్మణుడు జవాబు చెప్పలేకపోయాడు."],
   ["p", "They crossed the Gaṅgā in a boat. On the far bank, Lakṣmaṇa suddenly broke down and wept aloud. Sītā was alarmed. ‘Why are you weeping, Lakṣmaṇa? Tell me!’ He fell at her feet. ‘Forgive me, my lady. The king has heard the people speak against you, and he has ordered me to leave you here. He knows you are innocent, but he fears for his name. This is the āśrama of the sage Vālmīki, our father's friend. Live here under his protection.’ Sītā fainted.",
    "పడవలో గంగ దాటారు. అవతలి తీరంలో లక్ష్మణుడు ఒక్కసారిగా బిగ్గరగా ఏడ్చేశాడు. సీత కంగారుపడింది. ‘లక్ష్మణా, ఎందుకు ఏడుస్తున్నావు? చెప్పు!’ అతను ఆమె పాదాల మీద పడ్డాడు. ‘అమ్మా, నన్ను క్షమించండి. ప్రజలు మీకు వ్యతిరేకంగా మాట్లాడుకోవడం రాజు విన్నాడు; మిమ్మల్ని ఇక్కడ వదిలేయమని నన్ను ఆజ్ఞాపించాడు. మీరు నిర్దోషులని అతనికి తెలుసు, కానీ తన పేరు గురించి భయపడుతున్నాడు. ఇది మా నాన్న మిత్రుడైన వాల్మీకి మహర్షి ఆశ్రమం. ఆయన రక్షణలో ఇక్కడ ఉండండి.’ సీత స్పృహ తప్పింది."]
  ],
  [
   ["p", "When she woke, Sītā spoke slowly through her tears. ‘My body must have been made only for sorrow. What sin did I commit in a past life, that I am abandoned though I am pure? I would give up my life in the Gaṅgā this moment — but I carry the child of the Ikṣvāku line, and I must protect it. Lakṣmaṇa, tell the king this: “You know I am pure, and that my love for you is unchanging. You have left me to protect your fame. Protect your people as you protect your brothers; that is your highest duty. I do not grieve for myself.”’",
    "మేల్కొన్నాక సీత కన్నీళ్ళ మధ్య నెమ్మదిగా మాట్లాడింది. ‘నా శరీరం దుఃఖం కోసమే సృష్టించబడిందేమో. పవిత్రురాలినైనా విడిచిపెట్టబడడానికి పూర్వజన్మలో నేనేం పాపం చేశానో? ఈ క్షణమే గంగలో ప్రాణం విడిచేదాన్ని — కానీ ఇక్ష్వాకు వంశపు బిడ్డను మోస్తున్నాను; దాన్ని కాపాడాలి. లక్ష్మణా, రాజుతో ఇలా చెప్పు: “నేను పవిత్రురాలినని, నీపై నా ప్రేమ మారదని నీకు తెలుసు. నీ కీర్తిని కాపాడుకోవడానికి నన్ను వదిలేశావు. నీ తమ్ముళ్ళను కాపాడినట్టే నీ ప్రజలను కాపాడు; అదే నీ పరమ ధర్మం. నా గురించి నేను దుఃఖించను.”’"],
   ["p", "‘And look at me, Lakṣmaṇa, before you go, so that you can tell everyone that I carry Rāma's child.’ Lakṣmaṇa bowed his head to the ground, walked round her in reverence, and crossed back over the river, weeping. Sītā stood on the bank and watched him go until he was out of sight, then sat down on the ground and wept like a peacock crying in the forest."
   , "‘వెళ్ళే ముందు నన్ను చూడు లక్ష్మణా — నేను రాముని బిడ్డను మోస్తున్నానని అందరికీ చెప్పగలవు.’ లక్ష్మణుడు నేల వరకు తల వంచి, ఆమెకు ప్రదక్షిణ చేసి, ఏడుస్తూ నది దాటి వెళ్ళిపోయాడు. కనుచూపు మేర వరకు సీత తీరంలో నిలబడి చూసింది; తర్వాత నేల మీద కూర్చుని అడవిలో అరిచే నెమలిలా ఏడ్చింది."]
  ],
  [
   ["p", "The young sons of the sages heard her and ran to tell {valmiki|Vālmīki}. The great sage came at once. ‘Welcome, daughter of Janaka, daughter-in-law of Daśaratha. I know everything by the power of my tapas. I know you are innocent. Do not grieve — you are now in my care. The women of this āśrama will look after you as their own daughter. This is your home now.’ Sītā bowed to his feet and followed him into the peaceful āśrama, where the women welcomed her with love.",
    "మునుల కుమారులు ఆమె ఏడుపు విని వాల్మీకికి చెప్పడానికి పరుగెత్తారు. మహర్షి {valmiki|వాల్మీకి} వెంటనే వచ్చాడు. ‘జనకుని కూతురా, దశరథుని కోడలా, స్వాగతం. నా తపశ్శక్తితో నాకు అంతా తెలుసు. నువ్వు నిర్దోషివని నాకు తెలుసు. దుఃఖించకు — ఇప్పుడు నువ్వు నా సంరక్షణలో ఉన్నావు. ఈ ఆశ్రమంలోని స్త్రీలు నిన్ను తమ సొంత కూతురిలా చూసుకుంటారు. ఇక ఇదే నీ ఇల్లు.’ సీత అతని పాదాలకు నమస్కరించి, అతని వెంట ప్రశాంతమైన ఆశ్రమంలోకి వెళ్ళింది; అక్కడి స్త్రీలు ఆమెను ప్రేమతో ఆహ్వానించారు."],
   ["dyk", "🪶", "The poet of the Rāmāyaṇa now becomes a part of his own story. Vālmīki shelters Sītā, and it is in his āśrama that her sons will be born and will learn to sing the Rāmāyaṇa.",
    "రామాయణ కవి ఇప్పుడు తన కథలోనే ఒక భాగమవుతాడు. వాల్మీకి సీతకు ఆశ్రయం ఇస్తాడు; అతని ఆశ్రమంలోనే ఆమె కొడుకులు పుట్టి రామాయణం పాడడం నేర్చుకుంటారు."]
  ]
 ],
 remember: [
  ["Lakṣmaṇa took Sītā across the Gaṅgā and, weeping, told her she had been abandoned.", "లక్ష్మణుడు సీతను గంగ దాటించి, ఏడుస్తూ ఆమెను విడిచిపెట్టారని చెప్పాడు."],
  ["Sītā sent Rāma a message: protect your people; I do not grieve for myself.", "సీత రామునికి సందేశం పంపింది: నీ ప్రజలను కాపాడు; నా గురించి నేను దుఃఖించను."],
  ["Vālmīki welcomed her, knowing she was innocent, and gave her a home in his āśrama.", "ఆమె నిర్దోషి అని తెలిసి వాల్మీకి ఆహ్వానించి తన ఆశ్రమంలో ఆశ్రయం ఇచ్చాడు."]
 ],
 think: ["Even when treated unfairly, Sītā thought about Rāma's duty to his people and about her child. Where did she find such strength?", "అన్యాయంగా ప్రవర్తించినా సీత ప్రజల పట్ల రాముని ధర్మం గురించి, తన బిడ్డ గురించి ఆలోచించింది. ఆమెకు అంత బలం ఎక్కడి నుండి వచ్చింది?"]
},
{
 id: "uttara-15", kanda: "uttara", n: 15, order: 715, date: "2026-10-21",
 title: "Old Prophecies and Royal Tales", titleTe: "పాత జోస్యాలు, రాజుల కథలు", sargas: "50–60", scene: "palace",
 who: ["sumantra", "lakshmana", "durvasa", "rama", "yayati", "puru"],
 pages: [
  [
   ["p", "As they drove back to Ayodhyā, {lakshmana|Lakṣmaṇa} wept the whole way. {sumantra|Sumantra} said gently, ‘Do not grieve, Lakṣmaṇa. This was foretold long ago. When your father was young, the sage {durvasa|Durvāsa} stayed at Vasiṣṭha's āśrama, and King Daśaratha asked him about the future of his family. Durvāsa said that Rāma would rule for a long time and be happy, but that he would be parted from Sītā, and later from you and his other brothers. Daśaratha told me this and made me promise never to tell anyone. Now it has come true. Fate cannot be avoided.’",
    "అయోధ్యకు తిరిగి వెళ్తుంటే దారంతా {lakshmana|లక్ష్మణుడు} ఏడుస్తూనే ఉన్నాడు. {sumantra|సుమంత్రుడు} మెల్లగా అన్నాడు: ‘లక్ష్మణా, దుఃఖించకు. ఇది చాలా కాలం క్రితమే జోస్యం చెప్పబడింది. మీ నాన్న యవ్వనంలో ఉన్నప్పుడు {durvasa|దుర్వాస} మహర్షి వసిష్ఠాశ్రమంలో ఉన్నాడు; దశరథ మహారాజు తన వంశ భవిష్యత్తు గురించి అడిగాడు. రాముడు చాలాకాలం సుఖంగా పాలిస్తాడని, కానీ సీత నుండి, తర్వాత నీ నుండి, ఇతర తమ్ముళ్ళ నుండి విడిపోతాడని దుర్వాసుడు చెప్పాడు. దశరథుడు నాకు ఇది చెప్పి ఎవరికీ చెప్పనని మాట తీసుకున్నాడు. ఇప్పుడు అది నిజమైంది. విధిని తప్పించలేం.’"],
   ["p", "When Lakṣmaṇa reached Ayodhyā, he found {rama|Rāma} sitting alone, his eyes full of tears. Lakṣmaṇa gave him Sītā's message. Rāma listened in silence. Then he said, ‘For four days I have not attended to the work of my people. A king who does not hear his people goes to ruin. Let me tell you why, Lakṣmaṇa.’ And to steady his own heart, he told Lakṣmaṇa stories of kings of old."
   , "లక్ష్మణుడు అయోధ్య చేరేసరికి {rama|రాముడు} కన్నీళ్ళు నిండిన కళ్ళతో ఒంటరిగా కూర్చుని ఉన్నాడు. లక్ష్మణుడు సీత సందేశం అందించాడు. రాముడు మౌనంగా విన్నాడు. తర్వాత అన్నాడు: ‘నాలుగు రోజులుగా ప్రజల పనులు చూడలేదు. ప్రజల మాట వినని రాజు నశిస్తాడు. ఎందుకో చెబుతాను లక్ష్మణా.’ తన మనసును నిలబెట్టుకోవడానికి లక్ష్మణునికి పాత రాజుల కథలు చెప్పాడు."]
  ],
  [
   ["p", "‘There was once King Nṛga, a generous giver. By mistake, a cow he had given to one brāhmaṇa got mixed into his herd and was given again to another. The two brāhmaṇas quarrelled and came to the king for justice, but he kept them waiting for days. Angry, they cursed him to become a lizard living in a well for thousands of years. Never keep those who seek justice waiting, Lakṣmaṇa.’",
    "‘ఒకప్పుడు నృగుడు అనే దానశీలుడైన రాజు ఉండేవాడు. పొరపాటున ఒక బ్రాహ్మణునికి దానం చేసిన ఆవు తిరిగి అతని మందలో కలిసిపోయి, మరో బ్రాహ్మణునికి మళ్ళీ దానం చేయబడింది. ఇద్దరు బ్రాహ్మణులు గొడవపడి న్యాయం కోసం రాజు దగ్గరకు వచ్చారు, కానీ అతను వారిని రోజుల తరబడి ఎదురుచూసేలా చేశాడు. కోపంతో వారు వేల సంవత్సరాలు ఒక బావిలో తొండగా ఉండమని శపించారు. లక్ష్మణా, న్యాయం కోరి వచ్చినవారిని ఎన్నడూ ఎదురుచూసేలా చేయకూడదు.’"],
   ["p", "Rāma told of King Nimi, who began a sacrifice without waiting for his guru Vasiṣṭha. The two cursed each other to lose their bodies; Vasiṣṭha was born again, and Nimi chose to live in the eyelids of all beings — which is why the blink of an eye is called nimiṣa. And he told of King {yayati|Yayāti}, who was cursed with old age by the sage Śukra, and whose youngest son {puru|Puru} lovingly took the old age upon himself so that his father could be young again. ‘A son's devotion to his father,’ said Rāma, ‘is a great dharma.’"
   , "గురువు వసిష్ఠుని కోసం ఆగకుండా యాగం మొదలుపెట్టిన నిమి మహారాజు కథ రాముడు చెప్పాడు. ఇద్దరూ శరీరాలు కోల్పోవాలని ఒకరినొకరు శపించుకున్నారు; వసిష్ఠుడు మళ్ళీ జన్మించాడు; నిమి సమస్త జీవుల కనురెప్పల్లో నివసించడాన్ని ఎంచుకున్నాడు — అందుకే రెప్పపాటును నిమిషం అంటారు. శుక్రుని శాపంతో ముసలితనం పొందిన {yayati|యయాతి} మహారాజు కథ కూడా చెప్పాడు; తండ్రి మళ్ళీ యువకుడు కావాలని అతని చిన్న కొడుకు {puru|పూరుడు} ప్రేమతో ఆ ముసలితనాన్ని తాను స్వీకరించాడు. ‘తండ్రి పట్ల కొడుకు భక్తి గొప్ప ధర్మం,’ అన్నాడు రాముడు."]
  ],
  [
   ["p", "Then Rāma wiped his tears and went back to his throne. From that day he heard the complaints of his people every morning without fail, and no one who came for justice was ever kept waiting. He ruled alone, without a queen at his side, and took no other wife.",
    "తర్వాత రాముడు కన్నీళ్ళు తుడుచుకుని సింహాసనానికి తిరిగి వెళ్ళాడు. ఆ రోజు నుండి ప్రతి ఉదయం తప్పకుండా ప్రజల ఫిర్యాదులు విన్నాడు; న్యాయం కోరి వచ్చిన ఎవరినీ ఎదురుచూసేలా చేయలేదు. పక్కన రాణి లేకుండా ఒంటరిగా పాలించాడు; మరో భార్యను స్వీకరించలేదు."],
   ["dyk", "👁️", "Nimi's story gives Sanskrit and Telugu the word nimiṣa / నిమిషం — the ‘blink of an eye’ — which in Telugu became our word for a minute!",
    "నిమి కథ సంస్కృత, తెలుగు భాషలకు నిమిషం — ‘రెప్పపాటు’ — అనే పదాన్ని ఇచ్చింది; తెలుగులో అదే మన ‘నిమిషం’ అయింది!"]
  ]
 ],
 remember: [
  ["Sumantra told Lakṣmaṇa that Durvāsa had long ago foretold Rāma's separation from Sītā.", "సీత నుండి రాముడు విడిపోతాడని దుర్వాసుడు చాలాకాలం క్రితమే చెప్పాడని సుమంత్రుడు లక్ష్మణునికి చెప్పాడు."],
  ["Rāma told the stories of King Nṛga, King Nimi and King Yayāti.", "రాముడు నృగ, నిమి, యయాతి మహారాజుల కథలు చెప్పాడు."],
  ["Rāma returned to his duties and never kept anyone seeking justice waiting.", "రాముడు తన బాధ్యతలకు తిరిగి వచ్చి, న్యాయం కోరినవారిని ఎన్నడూ ఎదురుచూసేలా చేయలేదు."]
 ],
 think: ["King Nṛga was punished for keeping people waiting for justice. Why does it matter to listen to people's problems promptly?", "న్యాయం కోసం ప్రజలను ఎదురుచూసేలా చేసినందుకు నృగ మహారాజు శిక్ష అనుభవించాడు. ప్రజల సమస్యలను వెంటనే వినడం ఎందుకు ముఖ్యం?"]
},
{
 id: "uttara-16", kanda: "uttara", n: 16, order: 716, date: "2026-10-21",
 title: "Śatrughna and Lavaṇa", titleTe: "శత్రుఘ్నుడు, లవణాసురుడు", sargas: "61–72", scene: "forest",
 who: ["rama", "shatrughna", "lavana", "valmiki", "sita", "lavakusha"],
 pages: [
  [
   ["p", "One day sages from the banks of the Yamunā, led by the sage Cyavana, came to {rama|Rāma} for help. ‘A rākṣasa named {lavana|Lavaṇa}, son of Madhu, rules the forest of Madhuvana. He has a trident given to his father by Śiva, and with it no one can defeat him. He kills and eats sages, animals and people. Protect us, Rāma.’ Rāma asked his brothers, ‘Who will go?’ Bharata offered, but {shatrughna|Śatrughna} said, ‘Brother, Bharata has already suffered much for you. Let me go this time.’",
    "ఒకరోజు చ్యవన మహర్షి నాయకత్వంలో యమునా తీరపు మునులు సహాయం కోసం {rama|రాముని} దగ్గరకు వచ్చారు. ‘మధువు కుమారుడు {lavana|లవణాసురుడు} అనే రాక్షసుడు మధువనాన్ని పాలిస్తున్నాడు. శివుడు అతని తండ్రికి ఇచ్చిన శూలం అతని దగ్గర ఉంది; దానితో అతన్ని ఎవరూ ఓడించలేరు. మునులను, జంతువులను, మనుషులను చంపి తింటున్నాడు. రామా, మమ్మల్ని కాపాడు.’ రాముడు తమ్ముళ్ళను అడిగాడు: ‘ఎవరు వెళ్తారు?’ భరతుడు ముందుకొచ్చాడు, కానీ {shatrughna|శత్రుఘ్నుడు} అన్నాడు: ‘అన్నా, భరతుడు ఇప్పటికే నీ కోసం ఎంతో కష్టపడ్డాడు. ఈసారి నన్ను వెళ్ళనీ.’"],
   ["p", "Rāma crowned Śatrughna king of the land of Madhuvana, and gave him a divine arrow — the very arrow with which Viṣṇu had once killed the demons Madhu and Kaiṭabha. ‘Lavaṇa goes out hunting every morning and leaves his trident at home. Wait for him at the gate of his city, and fight him before he can get his trident.’ Śatrughna set out with an army."
   , "రాముడు శత్రుఘ్నుణ్ణి మధువన ప్రాంతానికి రాజుగా పట్టాభిషిక్తుణ్ణి చేసి, ఒక దివ్య బాణం ఇచ్చాడు — ఒకప్పుడు విష్ణువు మధుకైటభులను సంహరించిన బాణం అదే. ‘లవణుడు ప్రతి ఉదయం వేటకు వెళ్తూ శూలాన్ని ఇంట్లోనే వదిలేస్తాడు. అతని నగర ద్వారం దగ్గర కాచుకుని, శూలం తీసుకోకముందే అతనితో యుద్ధం చెయ్యి.’ శత్రుఘ్నుడు సైన్యంతో బయలుదేరాడు."]
  ],
  [
   ["p", "On the way, Śatrughna stopped for a night at the āśrama of {valmiki|Vālmīki}. That very night, {sita|Sītā} gave birth to twin sons. The young sages ran joyfully to tell Vālmīki. The sage came and performed the protective rites. He took a handful of sacred kuśa grass and wiped the elder child with its upper part, and the younger with its lower part (lava). ‘The elder shall be called Kuśa and the younger Lava,’ he said — and these were {lavakusha|Lava and Kuśa}, the sons of Rāma. Śatrughna heard the news in the night and was filled with joy, but he kept silent and went on his way at dawn.",
    "దారిలో శత్రుఘ్నుడు ఒక రాత్రి {valmiki|వాల్మీకి} ఆశ్రమంలో ఆగాడు. సరిగ్గా ఆ రాత్రే {sita|సీత} కవల కొడుకులను కన్నది. యువ మునులు ఆనందంగా వాల్మీకికి చెప్పడానికి పరుగెత్తారు. మహర్షి వచ్చి రక్షా కర్మలు చేశాడు. గుప్పెడు పవిత్ర కుశ గడ్డి తీసుకుని దాని పై భాగంతో పెద్ద బిడ్డను, కింది భాగం (లవం)తో చిన్న బిడ్డను తుడిచాడు. ‘పెద్దవాడు కుశుడు, చిన్నవాడు లవుడు అని పిలవబడతారు,’ అన్నాడు — వారే రాముని కుమారులు {lavakusha|లవకుశులు}. రాత్రి ఆ వార్త విని శత్రుఘ్నుడు ఆనందంతో నిండిపోయాడు, కానీ మౌనంగా ఉండి తెల్లవారగానే తన దారిన వెళ్ళాడు."],
   ["p", "At Madhuvana, Śatrughna waited at the city gate. When Lavaṇa came back from hunting, carrying the bodies of animals, he found his way blocked. ‘Who are you, to stand in my way?’ ‘I am Śatrughna, brother of Rāma, and I have come to kill you.’ Lavaṇa laughed and tore up a tree to fight. The battle was long and fierce. At last Śatrughna fired Viṣṇu's arrow. It blazed like the fire at the end of time, pierced Lavaṇa's heart, and he fell dead. The gods rejoiced."
   , "మధువనంలో శత్రుఘ్నుడు నగర ద్వారం దగ్గర కాచుకున్నాడు. జంతువుల కళేబరాలు మోసుకుంటూ వేట నుండి తిరిగి వచ్చిన లవణునికి దారి మూసి ఉంది. ‘నా దారికి అడ్డుగా నిలబడ్డ నువ్వెవరు?’ ‘నేను రాముని తమ్ముడు శత్రుఘ్నుణ్ణి; నిన్ను చంపడానికి వచ్చాను.’ లవణుడు నవ్వి యుద్ధానికి ఒక చెట్టు పెకలించాడు. యుద్ధం దీర్ఘంగా, భీకరంగా సాగింది. చివరికి శత్రుఘ్నుడు విష్ణు బాణాన్ని వదిలాడు. అది ప్రళయాగ్నిలా మండి లవణుని గుండెను చీల్చింది; అతను చచ్చిపడ్డాడు. దేవతలు ఆనందించారు."]
  ],
  [
   ["p", "Śatrughna built a beautiful new city on the banks of the Yamunā and called it Madhurā — the city we know today as Mathurā. He ruled it well for twelve years. Then, longing to see Rāma, he set out for Ayodhyā. On the way he stayed again at Vālmīki's āśrama. There, in the evening, he heard two boys singing a song so beautiful that he and his soldiers wept: the story of Rāma, from the beginning. Śatrughna was amazed, but he did not ask who the boys were, and went on to Ayodhyā in silence.",
    "శత్రుఘ్నుడు యమునా తీరంలో అందమైన కొత్త నగరం నిర్మించి దానికి మధుర అని పేరు పెట్టాడు — ఈ రోజు మనకు తెలిసిన మథుర అదే. పన్నెండేళ్ళు చక్కగా పాలించాడు. తర్వాత రాముణ్ణి చూడాలనే కోరికతో అయోధ్యకు బయలుదేరాడు. దారిలో మళ్ళీ వాల్మీకి ఆశ్రమంలో ఉన్నాడు. అక్కడ సాయంత్రం ఇద్దరు బాలురు పాడుతున్న పాట విని అతను, అతని సైనికులు కన్నీళ్ళు పెట్టుకున్నారు — అంత మధురమైన పాట: మొదటి నుండి రాముని కథ. శత్రుఘ్నుడు ఆశ్చర్యపోయాడు, కానీ ఆ బాలురు ఎవరో అడగలేదు; మౌనంగా అయోధ్యకు వెళ్ళాడు."],
   ["dyk", "🏙️", "Mathurā, founded by Śatrughna in this story, later became famous as the birthplace of Kṛṣṇa. It is one of the seven holy cities of India.",
    "ఈ కథలో శత్రుఘ్నుడు స్థాపించిన మథుర తర్వాత కృష్ణుని జన్మస్థలంగా ప్రసిద్ధి పొందింది. భారతదేశంలోని సప్త మోక్షపురుల్లో అది ఒకటి."]
  ]
 ],
 remember: [
  ["Śatrughna went to fight Lavaṇa, who held Śiva's trident.", "శివుని శూలం గల లవణాసురునితో యుద్ధానికి శత్రుఘ్నుడు వెళ్ళాడు."],
  ["The night he stayed at Vālmīki's āśrama, Sītā gave birth to twins, Kuśa and Lava.", "అతను వాల్మీకి ఆశ్రమంలో ఉన్న రాత్రే సీత కవలలు కుశలవులను కన్నది."],
  ["Śatrughna killed Lavaṇa with Viṣṇu's arrow and founded the city of Mathurā.", "శత్రుఘ్నుడు విష్ణు బాణంతో లవణుణ్ణి చంపి మథుర నగరాన్ని స్థాపించాడు."]
 ],
 think: ["Śatrughna knew about the twins but kept the secret. Why do you think he stayed silent?", "కవలల గురించి తెలిసినా శత్రుఘ్నుడు రహస్యంగా ఉంచాడు. అతను ఎందుకు మౌనంగా ఉన్నాడని మీరు అనుకుంటున్నారు?"]
}
]);
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "uttara-17", kanda: "uttara", n: 17, order: 717, date: "2026-10-21",
 title: "The Brāhmaṇa's Son", titleTe: "బ్రాహ్మణ బాలుడు", sargas: "73–76", scene: "forest",
 who: ["rama", "narada", "shambuka"],
 pages: [
  [
   ["p", "One day an old brāhmaṇa came to the palace gate carrying the body of his young son. ‘This boy was not yet fourteen. Never in Ayodhyā has a child died before his father. It must be because of some wrong in the king's rule. O Rāma, if you do not bring my son back to life, my wife and I will die here at your door.’ {rama|Rāma} was deeply troubled and called his ministers and the sages.",
    "ఒకరోజు ఒక వృద్ధ బ్రాహ్మణుడు తన చిన్న కొడుకు శవాన్ని మోసుకుంటూ రాజభవన ద్వారం దగ్గరకు వచ్చాడు. ‘ఈ బాలునికి ఇంకా పద్నాలుగేళ్ళు కూడా లేవు. అయోధ్యలో ఎన్నడూ తండ్రి కంటే ముందు బిడ్డ చనిపోలేదు. రాజు పాలనలో ఏదో తప్పు వల్లే ఇది జరిగి ఉండాలి. రామా, నా కొడుకును బతికించకపోతే నేను, నా భార్య నీ ద్వారం దగ్గరే చనిపోతాం.’ {rama|రాముడు} తీవ్రంగా కలవరపడి మంత్రులను, మునులను పిలిపించాడు."],
   ["p", "The sage {narada|Nārada} said that the order of the age had been broken: somewhere in the kingdom, a man of the śūdra class was performing severe tapas, which in the Tretā age, Nārada said, was not permitted to him. Rāma flew in the Puṣpaka across his kingdom searching, and in the south, by a lake, he found a man hanging upside down from a tree, doing fierce tapas. Rāma asked him who he was. The man answered, ‘I am {shambuka|Śambūka}, a śūdra. I do this tapas to reach the world of the gods in this very body.’ At once Rāma drew his sword and struck off his head. The gods praised Rāma, and in Ayodhyā the brāhmaṇa's son came back to life."
   , "వయోధర్మం భంగమైందని {narada|నారద} మహర్షి చెప్పాడు: రాజ్యంలో ఎక్కడో శూద్ర వర్ణానికి చెందిన ఒక వ్యక్తి కఠిన తపస్సు చేస్తున్నాడని, త్రేతాయుగంలో అతనికి అది అనుమతి లేదని నారదుడు అన్నాడు. రాముడు పుష్పకంలో రాజ్యమంతా వెతుకుతూ ఎగిరాడు; దక్షిణాన ఒక సరస్సు దగ్గర చెట్టుకు తలకిందులుగా వేలాడుతూ ఘోర తపస్సు చేస్తున్న వ్యక్తిని చూశాడు. రాముడు అతనెవరని అడిగాడు. ‘నేను {shambuka|శంబూకుణ్ణి}, శూద్రుణ్ణి. ఈ శరీరంతోనే దేవలోకం చేరాలని ఈ తపస్సు చేస్తున్నాను,’ అని అతను జవాబిచ్చాడు. వెంటనే రాముడు కత్తి దూసి అతని తల నరికాడు. దేవతలు రాముణ్ణి పొగిడారు; అయోధ్యలో బ్రాహ్మణ బాలుడు మళ్ళీ బతికాడు."]
  ],
  [
   ["p", "This episode is told here plainly, as it appears in the text, because nothing is hidden in this retelling. But it must also be said plainly: today most readers find it deeply troubling. It goes against the truth, taught in the Upaniṣads and by the saints, that every person has the same divine self within, and that devotion and tapas belong to everyone.",
    "ఈ పునఃకథనంలో ఏదీ దాచకూడదు కాబట్టి ఈ సన్నివేశాన్ని గ్రంథంలో ఉన్నట్టే సూటిగా చెప్పాం. కానీ ఇది కూడా సూటిగా చెప్పాలి: ఈ రోజు చాలామంది పాఠకులు దీన్ని తీవ్రంగా కలచివేసేదిగా భావిస్తారు. ప్రతి మనిషిలోనూ ఒకే దివ్య ఆత్మ ఉందని, భక్తి, తపస్సు అందరికీ చెందుతాయని ఉపనిషత్తులు, సాధువులు బోధించిన సత్యానికి ఇది విరుద్ధం."],
   ["p", "Many scholars believe this part of the Uttara Kāṇḍa was added long after Vālmīki. Great poets and saints have argued with it: Bhavabhūti, in his play, makes Rāma grieve as he strikes, and has Śambūka rise in a divine form, thanking him. In the Rāmāyaṇa itself, the hunter-woman Śabarī, the boatman Guha and the vānaras are all honoured by Rāma. Each reader must think about this episode honestly."
   , "ఉత్తరకాండలోని ఈ భాగం వాల్మీకి తర్వాత చాలాకాలానికి చేరిందని చాలామంది పండితులు భావిస్తారు. గొప్ప కవులు, సాధువులు దీనితో విభేదించారు: భవభూతి తన నాటకంలో రాముడు దుఃఖిస్తూ కొట్టినట్టు, శంబూకుడు దివ్య రూపంలో లేచి కృతజ్ఞతలు చెప్పినట్టు చూపిస్తాడు. రామాయణంలోనే వేటకత్తె శబరి, పడవవాడు గుహుడు, వానరులు — అందరూ రాముని గౌరవం పొందారు. ప్రతి పాఠకుడూ ఈ సన్నివేశం గురించి నిజాయితీగా ఆలోచించాలి."]
  ],
  [
   ["p", "On his way back, Rāma stopped at the āśrama of the sage Agastya, who welcomed him warmly and had more stories to tell.",
    "తిరుగు ప్రయాణంలో రాముడు అగస్త్య మహర్షి ఆశ్రమంలో ఆగాడు; మహర్షి ఆప్యాయంగా ఆహ్వానించి మరిన్ని కథలు చెప్పాడు."],
   ["dyk", "🪷", "The Bhakti saints of India — Rāmānanda, Kabīr, Raidās, Tyāgarāja, Potana and many others — taught that Rāma's name and grace are open to everyone, whatever their birth. That is the Rāma most Indian families worship today.",
    "భారత భక్తి సాధువులు — రామానందుడు, కబీర్, రైదాస్, త్యాగరాజు, పోతన, ఇంకా ఎందరో — పుట్టుక ఏదైనా రామనామం, రామానుగ్రహం అందరికీ అందుబాటులో ఉంటాయని బోధించారు. ఈ రోజు చాలా భారతీయ కుటుంబాలు ఆరాధించేది ఆ రాముణ్ణే."]
  ]
 ],
 remember: [
  ["An old brāhmaṇa came to Rāma grieving for his son who had died young.", "చిన్నవయసులో చనిపోయిన కొడుకు కోసం దుఃఖిస్తూ ఒక వృద్ధ బ్రాహ్మణుడు రాముని దగ్గరకు వచ్చాడు."],
  ["The text says Rāma killed Śambūka, a śūdra doing tapas, and the boy came back to life.", "తపస్సు చేస్తున్న శూద్రుడు శంబూకుణ్ణి రాముడు చంపాడని, బాలుడు మళ్ళీ బతికాడని గ్రంథం చెబుతుంది."],
  ["Many find this episode deeply troubling, and many scholars think it is a later addition.", "చాలామంది ఈ సన్నివేశాన్ని తీవ్రంగా కలచివేసేదిగా భావిస్తారు; ఇది తర్వాతి చేర్పు అని చాలామంది పండితులు అనుకుంటారు."]
 ],
 think: ["This story troubles many readers today. How should we think about parts of old stories that seem unfair to us now?", "ఈ కథ ఈ రోజు చాలామంది పాఠకులను కలచివేస్తుంది. ఇప్పుడు మనకు అన్యాయంగా అనిపించే పాత కథల భాగాల గురించి మనం ఎలా ఆలోచించాలి?"]
},
{
 id: "uttara-18", kanda: "uttara", n: 18, order: 718, date: "2026-10-21",
 title: "Stories of Agastya, Vṛtra and Ila", titleTe: "అగస్త్యుని కథలు, వృత్రుడు, ఇల", sargas: "77–90", scene: "tapas",
 who: ["agastya", "rama", "danda", "araja", "bharata", "lakshmana", "vritra", "indra"],
 pages: [
  [
   ["p", "{agastya|Agastya} gave Rāma a shining ornament made by Viśvakarmā. ‘This came to me from King Śveta. He was a king who gave away much in his life, but never gave food. So in heaven he was always hungry, and had to eat his own body each day. I freed him from this by accepting this ornament from him. Let it be yours.’ Then Rāma asked about the forest of Daṇḍaka. Agastya told him: ‘Long ago Daṇḍa, a son of King Ikṣvāku, ruled here. He forced himself upon {araja|Arajā}, the daughter of his guru Śukra. Śukra cursed the kingdom, and for seven days a rain of dust fell, burying it. It became the great empty forest called Daṇḍakāraṇya, where you lived in exile.’",
    "{agastya|అగస్త్యుడు} విశ్వకర్మ చేసిన ఒక ప్రకాశించే ఆభరణాన్ని రామునికి ఇచ్చాడు. ‘ఇది శ్వేత మహారాజు నుండి నాకు వచ్చింది. జీవితంలో ఎన్నో దానాలు చేసినా అతను అన్నదానం మాత్రం ఎన్నడూ చేయలేదు. అందుకే స్వర్గంలో ఎప్పుడూ ఆకలితో ఉండి, రోజూ తన శరీరాన్నే తినాల్సి వచ్చేది. అతని నుండి ఈ ఆభరణం స్వీకరించి ఆ బాధ నుండి విముక్తి చేశాను. ఇది నీది కానీ.’ తర్వాత రాముడు దండకారణ్యం గురించి అడిగాడు. అగస్త్యుడు చెప్పాడు: ‘చాలాకాలం క్రితం ఇక్ష్వాకు మహారాజు కొడుకు {danda|దండుడు} ఇక్కడ పాలించాడు. అతను తన గురువు శుక్రుని కూతురు {araja|అరజ}పై బలాత్కారం చేశాడు. శుక్రుడు రాజ్యాన్ని శపించగా ఏడు రోజులు ధూళి వర్షం కురిసి దాన్ని పూడ్చేసింది. నువ్వు వనవాసం చేసిన దండకారణ్యం అనే మహా నిర్జన అరణ్యంగా అది మారింది.’"],
   ["p", "Back in Ayodhyā, Rāma said to his brothers, ‘I wish to perform the Rājasūya sacrifice, as great kings do.’ But {bharata|Bharata} said gently, ‘Brother, the Rājasūya means conquering all the kings of the earth. Why destroy families for glory, when all the kings already love you as a father?’ Rāma was pleased. ‘You are right. I will not do anything that brings suffering to the world.’ Then {lakshmana|Lakṣmaṇa} suggested, ‘Perform the Aśvamedha, the horse sacrifice, which purifies from every sin. Let me tell you how it saved Indra.’"
   , "అయోధ్యకు తిరిగి వచ్చాక రాముడు తమ్ముళ్ళతో, ‘గొప్ప రాజులు చేసినట్టు రాజసూయ యాగం చేయాలని ఉంది,’ అన్నాడు. కానీ {bharata|భరతుడు} మెల్లగా అన్నాడు: ‘అన్నా, రాజసూయం అంటే భూమి మీది రాజులందరినీ జయించడం. రాజులంతా నిన్ను తండ్రిలా ప్రేమిస్తుంటే కీర్తి కోసం కుటుంబాలను ఎందుకు నాశనం చేయాలి?’ రాముడు సంతోషించాడు. ‘నువ్వు చెప్పింది నిజం. లోకానికి బాధ కలిగించే ఏ పనీ చేయను.’ అప్పుడు {lakshmana|లక్ష్మణుడు}, ‘అన్ని పాపాల నుండి శుద్ధి చేసే అశ్వమేధ యాగం చెయ్యి. అది ఇంద్రుణ్ణి ఎలా కాపాడిందో చెబుతాను,’ అని సూచించాడు."]
  ],
  [
   ["p", "‘Long ago there was a mighty asura named {vritra|Vṛtra}, who did great tapas and grew so powerful that the gods feared him. {indra|Indra}, with Viṣṇu's help, killed him with the thunderbolt. But Vṛtra had been a learned brāhmaṇa, and the sin of killing him followed Indra like a shadow. Indra fled and hid. The world fell into disorder without its king. At last the gods performed an Aśvamedha for Indra, and the sin left him — divided among the waters, the earth, the trees and women, who each took a share and received a boon in return.’",
    "‘చాలాకాలం క్రితం వృత్రుడు అనే మహాబలుడైన అసురుడు ఉండేవాడు; గొప్ప తపస్సు చేసి దేవతలు భయపడేంత బలవంతుడయ్యాడు. విష్ణువు సాయంతో {indra|ఇంద్రుడు} వజ్రాయుధంతో అతన్ని చంపాడు. కానీ {vritra|వృత్రుడు} విద్వాంసుడైన బ్రాహ్మణుడు కాబట్టి అతన్ని చంపిన పాపం ఇంద్రుణ్ణి నీడలా వెంటాడింది. ఇంద్రుడు పారిపోయి దాక్కున్నాడు. రాజు లేక లోకం అల్లకల్లోలమైంది. చివరికి దేవతలు ఇంద్రుని కోసం అశ్వమేధం చేయగా ఆ పాపం అతన్ని విడిచింది — నీరు, భూమి, చెట్లు, స్త్రీల మధ్య పంచబడింది; ఒక్కొక్కరూ ఒక భాగం తీసుకుని బదులుగా ఒక వరం పొందారు.’"],
   ["p", "Rāma told another story of the Aśvamedha. ‘King Ila of Bāhlī once went hunting and entered a grove where Śiva was playing with Pārvatī; to please her, Śiva had made every creature there female. Ila too became a woman — Ilā. Ilā met Budha, son of the Moon, married him, and their son was Purūravas, founder of the lunar dynasty. At last an Aśvamedha was performed for Śiva, who granted that Ila would be a man for one month and a woman the next. So the Aśvamedha brings healing and peace.’ Rāma decided to perform it."
   , "రాముడు అశ్వమేధం గురించి ఇంకో కథ చెప్పాడు. ‘బాహ్లీక రాజు ఇలుడు ఒకసారి వేటకు వెళ్ళి, శివుడు పార్వతితో విహరిస్తున్న ఒక వనంలో ప్రవేశించాడు; పార్వతిని సంతోషపెట్టడానికి శివుడు అక్కడి జీవులన్నిటినీ స్త్రీలుగా చేశాడు. ఇలుడు కూడా స్త్రీ అయ్యాడు — ఇల. ఇల చంద్రుని కుమారుడు బుధుణ్ణి కలిసి పెళ్ళాడింది; వారి కొడుకు చంద్రవంశ స్థాపకుడు పురూరవుడు. చివరికి శివుని కోసం అశ్వమేధం చేయగా, ఇలుడు ఒక నెల పురుషుడిగా, మరో నెల స్త్రీగా ఉండేలా శివుడు అనుగ్రహించాడు. అలా అశ్వమేధం స్వస్థతను, శాంతిని ఇస్తుంది.’ రాముడు దాన్ని చేయాలని నిర్ణయించుకున్నాడు."]
  ],
  [
   ["p", "So messengers were sent to invite kings, sages and friends — Sugrīva and the vānaras, Vibhīṣaṇa and the rākṣasas — to a great Aśvamedha in the Naimiṣa forest, on the banks of the river Gomatī.",
    "అలా గోమతీ నదీతీరంలోని నైమిశారణ్యంలో జరిగే మహా అశ్వమేధానికి రాజులను, మునులను, మిత్రులను — సుగ్రీవుడు, వానరులు, విభీషణుడు, రాక్షసులు — ఆహ్వానించడానికి దూతలను పంపారు."],
   ["dyk", "🐎", "Bharata's advice not to perform the Rājasūya shows the ideal of a peaceful king: true greatness does not need conquest. Rāma listened to his younger brother and changed his mind.",
    "రాజసూయం చేయవద్దన్న భరతుని సలహా శాంతియుత రాజు ఆదర్శాన్ని చూపిస్తుంది: నిజమైన గొప్పతనానికి దండయాత్రలు అవసరం లేదు. రాముడు తమ్ముని మాట విని మనసు మార్చుకున్నాడు."]
  ]
 ],
 remember: [
  ["Agastya gave Rāma an ornament from King Śveta and told how Daṇḍa's sin made the Daṇḍaka forest.", "అగస్త్యుడు శ్వేత మహారాజు నుండి వచ్చిన ఆభరణాన్ని రామునికి ఇచ్చి, దండుని పాపం వల్ల దండకారణ్యం ఎలా ఏర్పడిందో చెప్పాడు."],
  ["Bharata advised against the Rājasūya, because it would bring war; Rāma agreed.", "యుద్ధం తెస్తుందని రాజసూయం వద్దని భరతుడు సలహా ఇచ్చాడు; రాముడు ఒప్పుకున్నాడు."],
  ["The stories of Vṛtra and Ila showed the healing power of the Aśvamedha.", "వృత్రుడు, ఇలుల కథలు అశ్వమేధపు స్వస్థత శక్తిని చూపించాయి."]
 ],
 think: ["Rāma changed his plan after hearing his brother's advice. Is it a sign of strength or weakness to change your mind?", "తమ్ముని సలహా విని రాముడు తన ప్రణాళిక మార్చుకున్నాడు. మనసు మార్చుకోవడం బలానికి గుర్తా, బలహీనతకా?"]
},
{
 id: "uttara-19", kanda: "uttara", n: 19, order: 719, date: "2026-10-21",
 title: "Lava and Kuśa Sing", titleTe: "లవకుశుల గానం", sargas: "91–94", scene: "yajna",
 who: ["rama", "sita", "valmiki", "lavakusha"],
 pages: [
  [
   ["p", "The Aśvamedha began in the Naimiṣa forest, with kings and sages from every land, and Sugrīva and Vibhīṣaṇa serving the guests. Food and gifts were given freely for a whole year. At Rāma's side, where his queen should have sat, there was a golden image of {sita|Sītā}, for {rama|Rāma} would not take another wife.",
    "నైమిశారణ్యంలో అశ్వమేధం ప్రారంభమైంది; అన్ని దేశాల రాజులు, మునులు వచ్చారు; సుగ్రీవ విభీషణులు అతిథులకు సేవ చేశారు. ఏడాది పొడవునా అన్నం, కానుకలు ధారాళంగా ఇచ్చారు. రాణి కూర్చోవాల్సిన చోట {rama|రాముని} పక్కన {sita|సీత} బంగారు విగ్రహం ఉంది — రాముడు మరో భార్యను స్వీకరించడు."],
   ["p", "The sage {valmiki|Vālmīki} came to the sacrifice with his disciples. He called his two young pupils, {lavakusha|Lava and Kuśa}, and said, ‘Go through the camp, by the huts of the sages, the streets of the city, and the door of the king's hall, and sing the Rāmāyaṇa that I have taught you. Sing twenty sargas each day, sweetly, to the vīṇā. Accept no gifts — we live on roots and fruits. If the king asks whose sons you are, say only that you are Vālmīki's disciples.’"
   , "{valmiki|వాల్మీకి} మహర్షి తన శిష్యులతో యాగానికి వచ్చాడు. తన ఇద్దరు యువ శిష్యులు {lavakusha|లవకుశులను} పిలిచి అన్నాడు: ‘శిబిరంలో, మునుల కుటీరాల దగ్గర, నగర వీధుల్లో, రాజ సభ ద్వారం దగ్గర తిరుగుతూ నేను నేర్పిన రామాయణాన్ని పాడండి. రోజుకు ఇరవై సర్గలు వీణతో మధురంగా పాడండి. ఏ కానుకా స్వీకరించకండి — మనం దుంపలు, పండ్లతో బతుకుతాం. మీరెవరి కొడుకులని రాజు అడిగితే వాల్మీకి శిష్యులం అని మాత్రమే చెప్పండి.’"]
  ],
  [
   ["p", "The two boys, dressed as young hermits, sang in the streets and before the sages, and everyone who heard them stopped to listen, amazed. Their voices were sweet, their music perfect, and the story moved everyone to tears. Soon Rāma heard of them and called them to his hall. Before the kings, sages and all his court, the boys sang the story of Rāma from the very beginning. The listeners whispered, ‘They look exactly like Rāma — as if they were his reflections — except for their matted hair and bark clothes.’",
    "బాల తపస్వుల వేషంలో ఇద్దరు బాలురు వీధుల్లో, మునుల ముందు పాడారు; విన్నవారంతా ఆశ్చర్యంగా ఆగి విన్నారు. వారి స్వరాలు మధురం, సంగీతం పరిపూర్ణం, కథ అందరినీ కంటతడి పెట్టించింది. కాసేపటికి రాముడు వారి గురించి విని సభకు పిలిపించాడు. రాజులు, మునులు, సభ అంతటి ముందు బాలురు మొదటి నుండి రాముని కథ పాడారు. శ్రోతలు గుసగుసలాడారు: ‘జడలు, నారబట్టలు తప్ప వీరు సరిగ్గా రాముని లాగే ఉన్నారు — అతని ప్రతిబింబాల్లా.’"],
   ["p", "When they had sung, Rāma ordered eighteen thousand gold coins to be given to them. The boys refused politely. ‘We live in the forest on roots and fruits. What would we do with gold?’ Rāma was moved. ‘Who made this wonderful poem? How long is it?’ ‘Our teacher, the sage Vālmīki, made it,’ they said. ‘It has twenty-four thousand verses and tells the whole of your life, O king. If you wish, we will sing it all for you.’"
   , "వారు పాడడం ముగించాక పద్దెనిమిది వేల బంగారు నాణేలు ఇవ్వమని రాముడు ఆజ్ఞాపించాడు. బాలురు వినయంగా నిరాకరించారు. ‘మేము అడవిలో దుంపలు, పండ్లతో బతుకుతాం. బంగారంతో మాకేం పని?’ రాముడు చలించిపోయాడు. ‘ఈ అద్భుత కావ్యాన్ని ఎవరు రచించారు? ఇది ఎంత పెద్దది?’ ‘మా గురువు వాల్మీకి మహర్షి రచించారు,’ అన్నారు. ‘ఇందులో ఇరవై నాలుగు వేల శ్లోకాలు ఉన్నాయి; రాజా, ఇది నీ జీవితమంతా చెబుతుంది. నువ్వు కోరితే అంతా పాడతాం.’"]
  ],
  [
   ["p", "Day after day Rāma listened, with his brothers, the sages and the kings. As the story went on — the wedding at Mithilā, the exile, the Aśoka grove, the fire at Laṅkā — Rāma came to understand that these two boys were the sons of Sītā, his own sons. With a heart full of longing, he sent messengers to Vālmīki: ‘If Sītā is pure and blameless, let her come here with your permission and prove it before this assembly. Let her swear an oath tomorrow, before all the people.’",
    "రోజుల తరబడి రాముడు తమ్ముళ్ళు, మునులు, రాజులతో కలిసి విన్నాడు. కథ సాగుతుండగా — మిథిలలో వివాహం, వనవాసం, అశోకవనం, లంకలో అగ్ని — ఈ ఇద్దరు బాలురు సీత కొడుకులని, తన సొంత కొడుకులని రాముడు గ్రహించాడు. తపనతో నిండిన మనసుతో వాల్మీకి దగ్గరకు దూతలను పంపాడు: ‘సీత పవిత్రురాలు, నిర్దోషి అయితే, మీ అనుమతితో ఇక్కడికి వచ్చి ఈ సభ ఎదుట నిరూపించుకోనివ్వండి. రేపు ప్రజలందరి ముందు ప్రమాణం చేయనివ్వండి.’"],
   ["dyk", "🎶", "Lava and Kuśa are remembered as the first singers of the Rāmāyaṇa. The tradition of singing the epic — kathā, harikathā, the Telugu burrakatha and many others — goes back, the story says, to these two boys.",
    "లవకుశులను రామాయణం మొదటి గాయకులుగా గుర్తుంచుకుంటారు. ఈ మహాకావ్యాన్ని పాడే సంప్రదాయం — కథ, హరికథ, తెలుగు బుర్రకథ, ఇంకా ఎన్నో — ఈ ఇద్దరు బాలుర నుండే మొదలైందని కథ చెబుతుంది."]
  ]
 ],
 remember: [
  ["At Rāma's Aśvamedha, a golden image of Sītā sat beside him.", "రాముని అశ్వమేధంలో అతని పక్కన సీత బంగారు విగ్రహం ఉంది."],
  ["Vālmīki's pupils Lava and Kuśa sang the Rāmāyaṇa and refused Rāma's gold.", "వాల్మీకి శిష్యులు లవకుశులు రామాయణం పాడి, రాముని బంగారాన్ని నిరాకరించారు."],
  ["Rāma realised they were his sons and asked Sītā to come and swear her purity.", "వారు తన కొడుకులని రాముడు గ్రహించి, సీతను వచ్చి తన పవిత్రతపై ప్రమాణం చేయమని కోరాడు."]
 ],
 think: ["The boys refused gold because they were happy with a simple life. What do you think made them so content?", "సరళ జీవితంతో సంతోషంగా ఉన్నందుకు బాలురు బంగారాన్ని నిరాకరించారు. వారిని అంత తృప్తిగా ఉంచింది ఏమిటని మీరు అనుకుంటున్నారు?"]
},
{
 id: "uttara-20", kanda: "uttara", n: 20, order: 720, date: "2026-10-21",
 title: "Sītā Returns to the Earth", titleTe: "సీత భూప్రవేశం", sargas: "95–98", scene: "yajna",
 who: ["valmiki", "sita", "rama", "lavakusha", "brahma"],
 pages: [
  [
   ["p", "The next morning, the great assembly gathered: sages from every land, kings, ministers, people of every class, vānaras and rākṣasas. All waited in silence. Then {valmiki|Vālmīki} came, and behind him, with her eyes lowered and her palms joined, came {sita|Sītā}, dressed in the ochre cloth of a hermit. A murmur of sorrow went through the crowd. Vālmīki spoke: ‘Rāma, here is Sītā, who was abandoned because of the people's talk. These twins, Lava and Kuśa, are your sons. In thousands of years I have never spoken a lie. If Sītā is not pure, let all my tapas be fruitless. I have seen with my inner eye that she is innocent.’",
    "మరుసటి ఉదయం మహాసభ కొలువుదీరింది: అన్ని దేశాల మునులు, రాజులు, మంత్రులు, అన్ని వర్గాల ప్రజలు, వానరులు, రాక్షసులు. అందరూ మౌనంగా ఎదురుచూశారు. అప్పుడు {valmiki|వాల్మీకి} వచ్చాడు; అతని వెనకాల కళ్ళు దించుకుని, చేతులు జోడించి, తపస్విని కాషాయ వస్త్రం ధరించి {sita|సీత} వచ్చింది. జనసమూహంలో దుఃఖపు గుసగుస వ్యాపించింది. వాల్మీకి మాట్లాడాడు: ‘రామా, ప్రజల మాటల వల్ల విడిచిపెట్టబడిన సీత ఇదిగో. ఈ కవలలు లవకుశులు నీ కొడుకులు. వేల సంవత్సరాల్లో నేను ఎన్నడూ అబద్ధం ఆడలేదు. సీత పవిత్రురాలు కాకపోతే నా తపస్సంతా నిష్ఫలం కావాలి. ఆమె నిర్దోషి అని నా అంతర్దృష్టితో చూశాను.’"],
   ["p", "{rama|Rāma} folded his hands. ‘O sage, I believe your words. I know Sītā is pure, and I know these are my sons. Forgive me. I left her only because of what the people said. But let Sītā now give proof before all the people, so that no one may ever doubt again.’"
   , "{rama|రాముడు} చేతులు జోడించాడు. ‘మహర్షీ, మీ మాటలు నమ్ముతున్నాను. సీత పవిత్రురాలని, వీరు నా కొడుకులని నాకు తెలుసు. నన్ను క్షమించండి. ప్రజలు అన్న మాటల వల్లే ఆమెను విడిచిపెట్టాను. కానీ ఇక ఎవరూ ఎన్నడూ అనుమానించకుండా సీత ఇప్పుడు ప్రజలందరి ముందు నిరూపించుకోనీ.’"]
  ],
  [
   ["p", "Sītā did not look at Rāma. She looked down at the earth, and with folded hands she spoke softly, so that everyone heard:",
    "సీత రాముని వైపు చూడలేదు. భూమి వైపు చూస్తూ, చేతులు జోడించి, అందరికీ వినిపించేలా మెల్లగా అంది:"],
   ["p", "‘If I have never thought of anyone but Rāma, even in my mind — let Mother Earth open and receive me. If in thought, word and deed I have honoured only Rāma — let the goddess Earth receive me. If it is true that I have never known any man but Rāma — let Mother Earth take me back.’",
    "‘మనసులో కూడా నేను రాముణ్ణి తప్ప ఎవరినీ తలచకపోతే — భూమాత తెరుచుకుని నన్ను స్వీకరించుగాక. మనసా వాచా కర్మణా రాముణ్ణే ఆరాధించి ఉంటే — భూదేవి నన్ను స్వీకరించుగాక. రాముడు తప్ప ఏ పురుషుడూ నాకు తెలియదనేది నిజమైతే — భూమాత నన్ను తనలోకి తీసుకోవుగాక.’"],
   ["p", "As she spoke, the earth split open, and a wonderful throne rose from it, carried on the heads of great serpents shining with jewels. On it sat the goddess Earth herself. She took Sītā in her arms, welcomed her, and seated her beside her. And as flowers rained from the sky and the gods cried ‘Well done!’, the throne sank back into the earth with Sītā, and the ground closed over them."
   , "ఆమె మాట్లాడుతుండగానే భూమి చీలింది; రత్నాలతో మెరిసే మహా సర్పాల తలలపై మోయబడుతూ ఒక అద్భుత సింహాసనం దాని నుండి పైకి లేచింది. దాని మీద స్వయంగా భూదేవి కూర్చుని ఉంది. ఆమె సీతను చేతుల్లోకి తీసుకుని, ఆహ్వానించి, తన పక్కన కూర్చోబెట్టుకుంది. ఆకాశం నుండి పూలవాన కురుస్తూ, దేవతలు ‘భళా!’ అని ఘోషిస్తుండగా, సింహాసనం సీతతో సహా భూమిలోకి దిగిపోయింది; నేల మళ్ళీ మూసుకుంది."]
  ],
  [
   ["p", "For a moment the whole world was silent. Then Rāma, mad with grief, cried out, ‘Give her back, Earth! Give me back my Sītā, or I will destroy your mountains and forests and turn everything into water!’ {brahma|Brahmā} appeared and calmed him. ‘Do not grieve, Rāma. Sītā has gone to the world of the serpents, and you will be together again in heaven. Now listen to the rest of your story, which Vālmīki has written.’ Rāma took his sons Lava and Kuśa to Ayodhyā, and never again took a wife; at every sacrifice, a golden image of Sītā sat by his side.",
    "ఒక్క క్షణం లోకమంతా నిశ్శబ్దమైంది. తర్వాత దుఃఖంతో ఉన్మత్తుడైన రాముడు అరిచాడు: ‘భూదేవీ, ఆమెను తిరిగి ఇవ్వు! నా సీతను నాకు తిరిగి ఇవ్వు, లేకపోతే నీ పర్వతాలను, అడవులను నాశనం చేసి అంతా నీటిమయం చేస్తాను!’ {brahma|బ్రహ్మ} ప్రత్యక్షమై అతన్ని శాంతపరిచాడు. ‘రామా, దుఃఖించకు. సీత నాగలోకానికి వెళ్ళింది; స్వర్గంలో మీరు మళ్ళీ కలుస్తారు. ఇప్పుడు వాల్మీకి రాసిన నీ కథలోని మిగిలిన భాగం విను.’ రాముడు తన కొడుకులు లవకుశులను అయోధ్యకు తీసుకెళ్ళాడు; మళ్ళీ ఎన్నడూ భార్యను స్వీకరించలేదు; ప్రతి యాగంలో సీత బంగారు విగ్రహం అతని పక్కన ఉండేది."],
   ["dyk", "🌍", "Sītā was born from the earth, found in a furrow by King Janaka — and at the end, she returned to the earth. Her name itself means ‘furrow’. Many readers see her final choice as her own answer to all who doubted her.",
    "సీత భూమి నుండి పుట్టింది, నాగటిచాలులో జనక మహారాజుకు దొరికింది — చివరికి భూమికే తిరిగి వెళ్ళింది. ఆమె పేరుకే ‘నాగటిచాలు’ అని అర్థం. తనను అనుమానించిన అందరికీ ఆమె చివరి నిర్ణయమే ఆమె సొంత జవాబు అని చాలామంది పాఠకులు భావిస్తారు."]
  ]
 ],
 remember: [
  ["Vālmīki declared before the assembly that Sītā was pure and that Lava and Kuśa were Rāma's sons.", "సీత పవిత్రురాలని, లవకుశులు రాముని కొడుకులని వాల్మీకి సభ ఎదుట ప్రకటించాడు."],
  ["Sītā called on Mother Earth to receive her if she had been true to Rāma.", "తాను రామునికి నిష్ఠగా ఉంటే తనను స్వీకరించమని సీత భూమాతను వేడుకుంది."],
  ["The Earth goddess rose on a throne and took Sītā back into the earth.", "భూదేవి సింహాసనంపై లేచి సీతను భూమిలోకి తీసుకెళ్ళింది."]
 ],
 think: ["Sītā did not go back to Ayodhyā; she chose to return to the earth. What do you think her choice meant?", "సీత అయోధ్యకు తిరిగి వెళ్ళలేదు; భూమికి తిరిగి వెళ్ళడాన్ని ఎంచుకుంది. ఆమె నిర్ణయానికి అర్థం ఏమిటని మీరు అనుకుంటున్నారు?"]
}
]);
window.RMY_CHAPTERS = (window.RMY_CHAPTERS || []).concat([
{
 id: "uttara-21", kanda: "uttara", n: 21, order: 721, date: "2026-10-21",
 title: "Time Comes to Rāma", titleTe: "రాముని దగ్గరకు కాలుడు", sargas: "99–106", scene: "lamp",
 who: ["rama", "kausalya", "bharata", "lakshmana", "kala", "durvasa", "vasishtha"],
 pages: [
  [
   ["p", "Many years passed. One by one the queens — {kausalya|Kausalyā}, Sumitrā and Kaikeyī — grew old and went to join King Daśaratha in heaven. {bharata|Bharata}, at the request of his uncle in Kekaya, went with an army and conquered the land of the gandharvas beyond the Indus, and there he founded two cities for his sons: Takṣaśilā for Takṣa and Puṣkalāvatī for Puṣkala. {rama|Rāma} also gave kingdoms to {lakshmana|Lakṣmaṇa}'s sons, Aṅgada and Candraketu. All the princes ruled with dharma, and the land was at peace.",
    "ఎన్నో సంవత్సరాలు గడిచాయి. ఒక్కొక్కరుగా రాణులు — {kausalya|కౌసల్య}, సుమిత్ర, కైకేయి — వృద్ధులై స్వర్గంలో దశరథ మహారాజును చేరారు. కేకయ దేశంలోని మేనమామ కోరిక మేరకు {bharata|భరతుడు} సైన్యంతో వెళ్ళి సింధునది అవతలి గంధర్వ దేశాన్ని జయించి, అక్కడ తన కొడుకుల కోసం రెండు నగరాలు స్థాపించాడు: తక్షుని కోసం తక్షశిల, పుష్కలుని కోసం పుష్కలావతి. {rama|రాముడు} {lakshmana|లక్ష్మణుని} కొడుకులు అంగదుడు, చంద్రకేతులకు కూడా రాజ్యాలు ఇచ్చాడు. యువరాజులంతా ధర్మంగా పాలించారు; దేశం శాంతిగా ఉంది."],
   ["p", "Then one day a tall ascetic came to the palace gate and said to Lakṣmaṇa, ‘I am a messenger of a great sage, and I must speak to Rāma alone.’ Rāma received him with honour. The ascetic said, ‘What I have to say must be heard by no one else. Whoever sees us or hears us, you must put to death.’ Rāma agreed, and placed Lakṣmaṇa at the door. ‘Let no one in, brother.’ Then the ascetic revealed himself: ‘I am {kala|Kāla} — Time itself — sent by Brahmā. Brahmā says: “You came to earth as Viṣṇu to destroy Rāvaṇa. That work is done. You chose to stay for eleven thousand years; that time is ending. Stay longer if you wish, or return to us.”’ Rāma smiled. ‘I will return. That is why I came.’"
   , "తర్వాత ఒకరోజు ఒక ఎత్తైన తపస్వి రాజభవన ద్వారం దగ్గరకు వచ్చి లక్ష్మణునితో అన్నాడు: ‘నేను ఒక మహర్షి దూతను; రామునితో ఏకాంతంగా మాట్లాడాలి.’ రాముడు గౌరవంగా ఆహ్వానించాడు. తపస్వి అన్నాడు: ‘నేను చెప్పేది ఇంకెవరూ వినకూడదు. మమ్మల్ని చూసినవారిని, విన్నవారిని నువ్వు మరణశిక్ష వేయాలి.’ రాముడు ఒప్పుకుని లక్ష్మణుణ్ణి ద్వారం దగ్గర ఉంచాడు. ‘తమ్ముడూ, ఎవరినీ లోపలికి రానీయకు.’ అప్పుడు తపస్వి తనెవరో చెప్పాడు: ‘నేను {kala|కాలుణ్ణి} — సాక్షాత్తు కాలాన్ని — బ్రహ్మ పంపాడు. బ్రహ్మ చెబుతున్నాడు: “రావణ సంహారానికి విష్ణువుగా భూమికి వచ్చావు. ఆ పని ముగిసింది. పదకొండు వేల సంవత్సరాలు ఉండాలని ఎంచుకున్నావు; ఆ కాలం ముగుస్తోంది. కావాలంటే ఇంకా ఉండు, లేదా మా దగ్గరకు తిరిగి రా.”’ రాముడు నవ్వాడు. ‘తిరిగి వస్తాను. అందుకే వచ్చాను.’"]
  ],
  [
   ["p", "Just then the sage {durvasa|Durvāsa}, famous for his anger, arrived at the door. ‘Take me to Rāma at once!’ ‘He is busy, holy one,’ said Lakṣmaṇa. ‘Please wait a little.’ Durvāsa's eyes blazed. ‘If you do not announce me this moment, I will curse Rāma, you, your brothers, your sons and the whole kingdom!’ Lakṣmaṇa thought, ‘Better that I alone die than that everyone be destroyed.’ He went in and told Rāma. Rāma came out, honoured Durvāsa, and fed him — Durvāsa only wanted a meal after a thousand years of fasting — and the sage left happy.",
    "సరిగ్గా అప్పుడు కోపానికి ప్రసిద్ధుడైన {durvasa|దుర్వాస} మహర్షి ద్వారం దగ్గరకు వచ్చాడు. ‘వెంటనే నన్ను రాముని దగ్గరకు తీసుకెళ్ళు!’ ‘మహర్షీ, అతను పనిలో ఉన్నాడు,’ అన్నాడు లక్ష్మణుడు. ‘దయచేసి కొంచెం ఆగండి.’ దుర్వాసుని కళ్ళు రగిలాయి. ‘ఈ క్షణమే నా రాక తెలియజేయకపోతే రాముణ్ణి, నిన్ను, నీ తమ్ముళ్ళను, మీ కొడుకులను, రాజ్యాన్నంతా శపిస్తాను!’ లక్ష్మణుడు ఆలోచించాడు: ‘అందరూ నశించడం కంటే నేనొక్కణ్ణే చనిపోవడం మేలు.’ లోపలికి వెళ్ళి రామునికి చెప్పాడు. రాముడు బయటకు వచ్చి దుర్వాసుణ్ణి గౌరవించి భోజనం పెట్టాడు — వెయ్యేళ్ళ ఉపవాసం తర్వాత దుర్వాసుడు కోరింది భోజనమే — మహర్షి సంతోషంగా వెళ్ళిపోయాడు."],
   ["p", "But Rāma's promise to Kāla could not be broken. He sat with his head bowed, unable to speak. Lakṣmaṇa said cheerfully, ‘Do not grieve, brother. Keep your word — kill me. A king must never break his promise.’ {vasishtha|Vasiṣṭha} advised, ‘Rāma, for a good man, to be abandoned is the same as death. Banish Lakṣmaṇa, and your word will be kept.’ With a breaking heart, Rāma said, ‘Lakṣmaṇa, I abandon you. Go.’"
   , "కానీ కాలునికి రాముడు ఇచ్చిన మాట తప్పరాదు. మాట్లాడలేక తల వంచుకుని కూర్చున్నాడు. లక్ష్మణుడు ఉత్సాహంగా అన్నాడు: ‘అన్నా, దుఃఖించకు. మాట నిలబెట్టుకో — నన్ను చంపు. రాజు ఎన్నడూ మాట తప్పకూడదు.’ {vasishtha|వసిష్ఠుడు} సలహా ఇచ్చాడు: ‘రామా, సజ్జనునికి విడిచిపెట్టబడడం మరణంతో సమానం. లక్ష్మణుణ్ణి త్యజించు; నీ మాట నిలుస్తుంది.’ గుండె పగిలేలా రాముడు, ‘లక్ష్మణా, నిన్ను త్యజిస్తున్నాను. వెళ్ళు,’ అన్నాడు."]
  ],
  [
   ["p", "Lakṣmaṇa bowed to his brother for the last time and, without even going home, walked to the banks of the river Sarayū. There he sipped water, sat in yoga, closed his eyes and stopped his breath. The gods showered flowers, and Indra came and carried him up to heaven in his own body. Lakṣmaṇa, who had followed Rāma like a shadow all his life, went ahead of him at the end — to prepare the way.",
    "లక్ష్మణుడు చివరిసారి అన్నకు నమస్కరించి, ఇంటికి కూడా వెళ్ళకుండా సరయూ నదీతీరానికి నడిచాడు. అక్కడ ఆచమనం చేసి, యోగంలో కూర్చుని, కళ్ళు మూసుకుని, శ్వాస ఆపేశాడు. దేవతలు పూలవాన కురిపించారు; ఇంద్రుడు వచ్చి అతన్ని సశరీరంగా స్వర్గానికి తీసుకెళ్ళాడు. జీవితమంతా నీడలా రాముణ్ణి అనుసరించిన లక్ష్మణుడు చివరికి అతనికంటే ముందే వెళ్ళాడు — దారి సిద్ధం చేయడానికి."],
   ["dyk", "⏳", "Kāla means both ‘time’ and ‘death’. In this story Time comes not as an enemy but as a messenger, reminding even Rāma that every life on earth has its season.",
    "కాలం అంటే ‘సమయం’, ‘మృత్యువు’ రెండూ. ఈ కథలో కాలుడు శత్రువుగా కాదు, దూతగా వస్తాడు — భూమి మీద ప్రతి జీవితానికీ ఒక కాలం ఉంటుందని రామునికి కూడా గుర్తుచేస్తాడు."]
  ]
 ],
 remember: [
  ["The queens passed away; Bharata founded Takṣaśilā and Puṣkalāvatī for his sons.", "రాణులు స్వర్గస్థులయ్యారు; భరతుడు తన కొడుకుల కోసం తక్షశిల, పుష్కలావతి స్థాపించాడు."],
  ["Time (Kāla) came to tell Rāma his work on earth was done.", "భూమి మీద అతని కార్యం ముగిసిందని చెప్పడానికి కాలుడు రాముని దగ్గరకు వచ్చాడు."],
  ["To save everyone from Durvāsa's curse, Lakṣmaṇa broke Rāma's rule, was banished and left his body by the Sarayū.", "దుర్వాసుని శాపం నుండి అందరినీ కాపాడడానికి లక్ష్మణుడు రాముని నియమం భంగపరిచి, త్యజించబడి, సరయూ తీరంలో దేహం విడిచాడు."]
 ],
 think: ["Lakṣmaṇa chose to sacrifice himself to protect everyone else. What does his choice tell us about him?", "అందరినీ కాపాడడానికి లక్ష్మణుడు తనను తాను త్యాగం చేసుకున్నాడు. అతని ఎంపిక అతని గురించి మనకు ఏం చెబుతుంది?"]
},
{
 id: "uttara-22", kanda: "uttara", n: 22, order: 722, date: "2026-10-21",
 title: "Rāma's Final Journey", titleTe: "రాముని మహాప్రస్థానం", sargas: "107–111", scene: "ganga",
 who: ["rama", "lavakusha", "bharata", "shatrughna", "vibhishana", "hanuman", "brahma"],
 pages: [
  [
   ["p", "Without Lakṣmaṇa, {rama|Rāma} decided that he too would go. He called his ministers and the people and said, ‘I will follow Lakṣmaṇa. I will crown Bharata king.’ But {bharata|Bharata} refused. ‘I do not want a kingdom without you, brother — not even heaven. Crown your sons, Kuśa and Lava, and let me come with you.’ So Rāma crowned Kuśa king of southern Kosala, with his capital at Kuśāvatī, and Lava king of northern Kosala, with his capital at Śrāvastī. {lavakusha|Lava and Kuśa} wept as they said goodbye. {shatrughna|Śatrughna} crowned his own sons at Mathurā and hurried to join his brothers.",
    "లక్ష్మణుడు లేకపోవడంతో తాను కూడా వెళ్ళాలని {rama|రాముడు} నిర్ణయించుకున్నాడు. మంత్రులను, ప్రజలను పిలిచి, ‘లక్ష్మణుని అనుసరిస్తాను. భరతుణ్ణి రాజుగా పట్టాభిషిక్తుణ్ణి చేస్తాను,’ అన్నాడు. కానీ {bharata|భరతుడు} నిరాకరించాడు. ‘అన్నా, నువ్వు లేని రాజ్యం నాకు వద్దు — స్వర్గం కూడా వద్దు. నీ కొడుకులు కుశలవులను పట్టాభిషిక్తులను చేసి, నన్ను నీతో రానీ.’ అందుకని రాముడు కుశుణ్ణి దక్షిణ కోసలకు కుశావతి రాజధానిగా, లవుణ్ణి ఉత్తర కోసలకు శ్రావస్తి రాజధానిగా రాజులను చేశాడు. వీడ్కోలు చెబుతూ {lavakusha|లవకుశులు} ఏడ్చారు. {shatrughna|శత్రుఘ్నుడు} మథురలో తన కొడుకులను పట్టాభిషిక్తులను చేసి అన్నలను చేరడానికి త్వరపడ్డాడు."],
   ["p", "When the people of Ayodhyā heard that Rāma was leaving, they said, ‘We will go wherever you go.’ The vānaras and bears came too, from Kiṣkindhā and the forests, with Sugrīva at their head. Rāma turned to {vibhishana|Vibhīṣaṇa}: ‘Rule Laṅkā with dharma as long as the sun and moon shine and as long as my story is told.’ And to {hanuman|Hanumān} he said again, ‘Live on earth as long as my story is told, Hanumān, and be happy.’ Hanumān bowed. ‘As long as your story lives on earth, I will stay and listen to it.’"
   , "రాముడు వెళ్ళిపోతున్నాడని విని అయోధ్య ప్రజలు, ‘నువ్వెక్కడికి వెళ్తే మేమూ అక్కడికే,’ అన్నారు. సుగ్రీవుని నాయకత్వంలో కిష్కింధ నుండి, అడవుల నుండి వానరులు, భల్లూకాలు కూడా వచ్చారు. రాముడు {vibhishana|విభీషణుని} వైపు తిరిగాడు: ‘సూర్యచంద్రులు ప్రకాశించినంతకాలం, నా కథ చెప్పబడుతున్నంతకాలం లంకను ధర్మంగా పాలించు.’ {hanuman|హనుమంతునితో} మళ్ళీ అన్నాడు: ‘హనుమా, నా కథ చెప్పబడుతున్నంతకాలం భూమి మీద సంతోషంగా ఉండు.’ హనుమంతుడు నమస్కరించాడు. ‘మీ కథ భూమి మీద బతికి ఉన్నంతకాలం నేను ఇక్కడే ఉండి దాన్ని వింటాను.’"]
  ],
  [
   ["p", "At dawn Rāma set out from Ayodhyā, dressed in fine silk, holding sacred kuśa grass, silent and calm. Behind him came Bharata and Śatrughna, the priests carrying the sacred fires, the queens of the palace, the ministers, the people of every class, the vānaras and the bears — a great procession walking joyfully, as if to a festival. Even the animals and birds of Ayodhyā followed. They walked to the banks of the Sarayū, to a place called Gopratara.",
    "తెల్లవారుజామున రాముడు పట్టు వస్త్రాలు ధరించి, చేతిలో పవిత్ర దర్భలు పట్టుకుని, మౌనంగా, ప్రశాంతంగా అయోధ్య నుండి బయలుదేరాడు. అతని వెనకాల భరతశత్రుఘ్నులు, పవిత్ర అగ్నులు మోస్తున్న పురోహితులు, అంతఃపుర స్త్రీలు, మంత్రులు, అన్ని వర్గాల ప్రజలు, వానరులు, భల్లూకాలు — పండుగకు వెళ్తున్నట్టు ఆనందంగా నడిచే మహా ఊరేగింపు. అయోధ్యలోని జంతువులు, పక్షులు కూడా అనుసరించాయి. సరయూ తీరంలోని గోప్రతారం అనే చోటికి నడిచారు."],
   ["p", "There {brahma|Brahmā} appeared in the sky with all the gods, in shining chariots, and flowers rained down. Brahmā said, ‘Come, Viṣṇu! Come, with your brothers. Enter your own true form, whichever you wish.’ Rāma stepped into the waters of the Sarayū with Bharata and Śatrughna, and in a blaze of light he entered the form of Viṣṇu. The gods bowed and sang his praise. Then, at Rāma's wish, Brahmā gave all those who had followed him a place in a heaven called Santānaka. They entered the waters with joy and rose up in shining forms. The vānaras and bears returned to the gods from whom they had been born."
   , "అక్కడ బ్రహ్మ దేవతలందరితో ప్రకాశించే విమానాల్లో ఆకాశంలో ప్రత్యక్షమయ్యాడు; పూలవాన కురిసింది. {brahma|బ్రహ్మ} అన్నాడు: ‘రా విష్ణూ! నీ తమ్ముళ్ళతో రా. నీ నిజ స్వరూపంలోకి — నీకు ఇష్టమైనదానిలోకి — ప్రవేశించు.’ రాముడు భరతశత్రుఘ్నులతో కలిసి సరయూ జలాల్లోకి అడుగుపెట్టి, మహాతేజస్సుతో విష్ణు స్వరూపంలో ప్రవేశించాడు. దేవతలు నమస్కరించి స్తుతించారు. తర్వాత రాముని కోరిక మేరకు తనను అనుసరించిన అందరికీ సంతానకం అనే స్వర్గలోకంలో బ్రహ్మ స్థానం ఇచ్చాడు. వారు ఆనందంగా జలాల్లో ప్రవేశించి ప్రకాశించే రూపాలతో పైకి లేచారు. వానరులు, భల్లూకాలు తాము ఏ దేవతల నుండి జన్మించారో వారిలో కలిసిపోయారు."]
  ],
  [
   ["p", "So ends the story of Rāma, as the sage Vālmīki first sang it. Vālmīki says that whoever reads or hears this poem with faith, even a single verse of it, is freed from sorrow and sin, and is blessed with long life, good children, wisdom and peace. And wherever the Rāmāyaṇa is told, Hanumān is there, listening with folded hands and tears of joy.",
    "వాల్మీకి మహర్షి మొదట గానం చేసినట్టు రాముని కథ ఇలా ముగుస్తుంది. ఈ కావ్యాన్ని — ఒక్క శ్లోకమైనా — శ్రద్ధగా చదివినవారు, విన్నవారు దుఃఖం నుండి, పాపం నుండి విముక్తులై, దీర్ఘాయుష్షు, మంచి సంతానం, జ్ఞానం, శాంతి పొందుతారని వాల్మీకి చెబుతాడు. రామాయణం ఎక్కడ చెప్పబడినా, చేతులు జోడించి, ఆనందబాష్పాలతో వింటూ హనుమంతుడు అక్కడే ఉంటాడు."],
   ["dyk", "🙏", "Here ends the Uttara Kāṇḍa, and the whole Śrī Rāmāyaṇa — seven kāṇḍas, retold for this app by Hari Pokkuluri. Śrī Rāma jaya Rāma jaya jaya Rāma!",
    "ఇక్కడితో ఉత్తరకాండ, సంపూర్ణ శ్రీరామాయణం ముగుస్తాయి — ఏడు కాండలు, ఈ యాప్ కోసం హరి పొక్కులూరి పునఃకథనం. శ్రీరామ జయ రామ జయ జయ రామ!"]
  ]
 ],
 remember: [
  ["Rāma crowned Kuśa and Lava, and Bharata and Śatrughna chose to go with him.", "రాముడు కుశలవులను పట్టాభిషిక్తులను చేశాడు; భరతశత్రుఘ్నులు అతనితో వెళ్ళడాన్ని ఎంచుకున్నారు."],
  ["Hanumān and Vibhīṣaṇa stayed on earth, as long as Rāma's story is told.", "రాముని కథ చెప్పబడుతున్నంతకాలం హనుమంతుడు, విభీషణుడు భూమి మీదే ఉన్నారు."],
  ["Rāma entered the Sarayū and returned to his form as Viṣṇu, with all who loved him.", "రాముడు సరయూలో ప్రవేశించి, తనను ప్రేమించిన అందరితో కలిసి విష్ణు స్వరూపానికి తిరిగి వెళ్ళాడు."]
 ],
 think: ["The whole city chose to follow Rāma at the end. What makes people love a leader that much?", "చివరికి నగరమంతా రాముణ్ణి అనుసరించాలని ఎంచుకుంది. ఒక నాయకుణ్ణి ప్రజలు అంతగా ప్రేమించడానికి కారణం ఏమిటి?"]
}
]);
