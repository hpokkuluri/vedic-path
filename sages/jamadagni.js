// Great Sages — Jamadagni and Paraśurāma. Retold by Hari Pokkuluri.
// Told from the Mahābhārata (Ādi, Āraṇyaka, Udyoga, Śānti and Anuśāsana Parvas), the Vālmīki Rāmāyaṇa (Bāla Kāṇḍa),
// the Bhāgavata and other Purāṇas, with later and local tellings marked, in fresh original wording.
// Block format: see the top of ramayana.js and sages.js.
window.SAGE_PLAN = Object.assign(window.SAGE_PLAN || {}, { jamadagni: [
  ["Ṛcīka's Two Bowls", "Mahābhārata, Āraṇyaka and Śānti Parvas · Viṣṇu Purāṇa"],
  ["Jamadagni, Reṇukā — and the Sun's Gift", "Mahābhārata, Āraṇyaka and Anuśāsana Parvas"],
  ["The Order No Son Should Hear", "Mahābhārata, Āraṇyaka Parva · local traditions"],
  ["The King Who Took the Calf", "Mahābhārata, Āraṇyaka Parva · Bhāgavata 9.15–9.16"],
  ["Twenty-One Times", "Mahābhārata, Ādi, Āraṇyaka and Śānti Parvas"],
  ["The Earth Given Away — and the Western Shore", "Mahābhārata, Śānti Parva · later tellings"],
  ["Paraśurāma Meets Rāma", "Rāmāyaṇa, Bāla Kāṇḍa, sargas 74–76"],
  ["Teacher and Opponent of Bhīṣma — Ambā's Cause", "Mahābhārata, Udyoga Parva"],
  ["Droṇa's Weapons and Karṇa's Curse", "Mahābhārata, Ādi, Udyoga and Śānti Parvas"],
  ["The Avatāra Who Waits", "Bhāgavata 1.3 · Purāṇas · living tradition"]
] });
window.RMY_WHO = Object.assign({
  "renuka": { "av": "🌺", "en": "Reṇukā", "te": "రేణుకాదేవి", "d": "Wife of Jamadagni and mother of Paraśurāma. Worshipped as a goddess in many places, as Ellamma in Karnataka and the Telugu lands.", "dt": "జమదగ్ని భార్య, పరశురాముని తల్లి. ఎన్నోచోట్ల దేవతగా — కర్ణాటక, తెలుగు ప్రాంతాలలో ఎల్లమ్మగా — పూజలందుకుంటుంది." },
  "amba": { "av": "🔥", "en": "Ambā", "te": "అంబ", "d": "Eldest princess of Kāśī, carried off by Bhīṣma and then rejected by all; she sought Paraśurāma's help and was reborn as Śikhaṇḍin to bring about Bhīṣma's fall.", "dt": "కాశీ పెద్ద రాకుమార్తె; భీష్ముడు తీసుకువచ్చాక అందరూ తిరస్కరించారు; పరశురాముని సహాయం కోరింది; భీష్ముని పతనానికి శిఖండిగా మళ్ళీ పుట్టింది." },
  "kashyapa": { "av": "🌏", "en": "Kaśyapa", "te": "కశ్యప ప్రజాపతి", "d": "Son of Marīci and one of the Saptarṣis; husband of Aditi, Diti, Kadrū, Vinatā and other daughters of Dakṣa — the father of gods, asuras, serpents and birds. Paraśurāma gave him the whole earth.", "dt": "మరీచి కుమారుడు, సప్తర్షులలో ఒకరు; అదితి, దితి, కద్రువ, వినత మొదలైన దక్షుని కుమార్తెల భర్త — దేవతలు, అసురులు, నాగులు, పక్షులకు తండ్రి. పరశురాముడు ఆయనకు సమస్త భూమినీ ఇచ్చాడు." },
  "akritavrana": { "av": "🧘", "en": "Akṛtavraṇa", "te": "అకృతవ్రణుడు", "d": "Paraśurāma's companion and disciple, who tells the Pāṇḍavas the story of his master.", "dt": "పరశురాముని సహచరుడు, శిష్యుడు; పాండవులకు తన గురువు కథ చెప్పినవాడు." }
}, window.RMY_WHO || {});
window.SAGE_CHAPTERS = (window.SAGE_CHAPTERS || []).concat([
{
 id: "jp-1", sage: "jamadagni", n: 1, order: 1701, date: "2026-10-23",
 title: "Ṛcīka's Two Bowls", titleTe: "ఋచీకుని రెండు చరువులు",
 src: "Mahābhārata, Āraṇyaka and Śānti Parvas · Viṣṇu Purāṇa",
 who: ["jamadagni", "parashurama", "richika", "satyavati", "gadhi", "bhrigu", "vishvamitra"],
 pages: [
  [
   ["p", "The story of {jamadagni|Jamadagni} and his son {parashurama|Paraśurāma} begins one generation earlier, with a mix-up. {richika|Ṛcīka}, a sage of {bhrigu|Bhṛgu}'s family, had married {satyavati|Satyavatī}, daughter of King {gadhi|Gādhi}, after paying Gādhi's impossible bride-price of a thousand white horses, each with one black ear.", "{jamadagni|జమదగ్ని}, ఆయన కుమారుడు {parashurama|పరశురాముని} కథ ఒక తరం ముందే, ఒక పొరపాటుతో మొదలవుతుంది. {bhrigu|భృగు} వంశపు ముని {richika|ఋచీకుడు} — ఒక్కో చెవి నల్లగా ఉన్న వెయ్యి తెల్ల గుర్రాలనే అసాధ్యమైన కన్యాశుల్కం చెల్లించి — {gadhi|గాధి} మహారాజు కుమార్తె {satyavati|సత్యవతిని} పెళ్ళాడాడు."],
   ["sglink", "How Ṛcīka won Satyavatī", "ఋచీకుడు సత్యవతిని ఎలా గెలుచుకున్నాడు", "vm-1"],
   ["p", "Both Satyavatī and her mother, Gādhi's queen, longed for sons. So the sage prepared two bowls of charu — rice cooked in milk, filled with the power of mantras. Into one he put the qualities of a brāhmaṇa — peace, patience, learning. Into the other he put the qualities of a kṣatriya — strength, courage, the power to rule. “This one is for you,” he told Satyavatī, “and this one for your mother.” (In the Āraṇyaka Parva, it is Ṛcīka's father Bhṛgu who gives the gift; in other books it is Ṛcīka.)", "సత్యవతీ, ఆమె తల్లి — గాధి రాణి — ఇద్దరూ కుమారుల కోసం తపించారు. అందుకే ముని మంత్రశక్తితో నిండిన రెండు చరువులు — పాలలో వండిన అన్నం — సిద్ధం చేశాడు. ఒకదానిలో బ్రాహ్మణ గుణాలు — శాంతం, ఓర్పు, విద్య — ఉంచాడు. మరొకదానిలో క్షత్రియ గుణాలు — బలం, ధైర్యం, పాలించే శక్తి — ఉంచాడు. “ఇది నీకు, ఇది మీ అమ్మకు” అని సత్యవతితో చెప్పాడు. (ఆరణ్యక పర్వంలో ఈ వరం ఇచ్చింది ఋచీకుని తండ్రి భృగువు; ఇతర గ్రంథాలలో ఋచీకుడే.)"]
  ],
  [
   ["h", "The Swap", "మార్పిడి"],
   ["p", "But the queen thought: “Surely the sage made the better bowl for his own wife.” She persuaded her daughter to swap — and each ate the other's charu. When the sage learned of it, he said sadly to Satyavatī: “Your mother will now bear a son who is a great brāhmaṇa — and you will bear a son who is a fierce warrior, though born a brāhmaṇa.”", "కానీ రాణి ఆలోచించింది: “ముని తన భార్యకు మంచి చరువే చేసి ఉంటాడు.” కుమార్తెను ఒప్పించి మార్చుకుంది — ఒకరి చరువు మరొకరు తిన్నారు. ఇది తెలిసి ముని బాధగా సత్యవతితో అన్నాడు: “మీ అమ్మ ఇప్పుడు గొప్ప బ్రాహ్మణుడయ్యే కుమారుని కంటుంది — నువ్వు బ్రాహ్మణునిగా పుట్టినా భయంకర యోధుడైన కుమారుని కంటావు.”"],
   ["p", "Satyavatī fell at his feet. “Please — not my son. Let my son be gentle. If it must be, let it be my grandson.” The sage agreed. So Satyavatī's son was Jamadagni, a calm and learned sage — and Jamadagni's son would be Paraśurāma, the brāhmaṇa warrior with an axe. And the queen's son was {vishvamitra|Viśvāmitra}, the king who became a brahmarṣi.", "సత్యవతి ఆయన పాదాలపై పడింది. “దయచేసి — నా కొడుకు వద్దు. నా కొడుకు సౌమ్యుడిగా ఉండాలి. తప్పనిసరైతే నా మనుమడు కానివ్వండి.” ముని ఒప్పుకున్నాడు. అలా సత్యవతి కుమారుడు జమదగ్ని — ప్రశాంతుడైన పండిత ముని; జమదగ్ని కుమారుడు పరశురాముడు — గొడ్డలి పట్టిన బ్రాహ్మణ యోధుడు. రాణి కుమారుడు {vishvamitra|విశ్వామిత్రుడు} — బ్రహ్మర్షి అయిన రాజు."],
   ["dyk", "🥣", "So Viśvāmitra and Jamadagni were cousins — and the two bowls explain both of their strange lives: a king with a sage's heart, and a sage's son with a warrior's arm.", "అంటే విశ్వామిత్రుడు, జమదగ్ని వరుసకు అన్నదమ్ములు — ఆ రెండు చరువులే వారిద్దరి విచిత్ర జీవితాలనూ వివరిస్తాయి: ముని హృదయం కల రాజు, యోధుని భుజబలం కల ముని కుమారుడు."],
   ["src", "Mahābhārata, Āraṇyaka Parva (Akṛtavraṇa's account: the bride-price, Bhṛgu's gift of the two charus, the swap, Satyavatī's plea) and Śānti Parva (the same story). Viṣṇu Purāṇa 4.7 (Ṛcīka prepares the charus).", "మహాభారతం, ఆరణ్యక పర్వం (అకృతవ్రణుని కథనం: కన్యాశుల్కం, భృగువు రెండు చరువుల వరం, మార్పిడి, సత్యవతి వేడుకోలు), శాంతి పర్వం (అదే కథ). విష్ణు పురాణం 4.7 (ఋచీకుడు చరువులు సిద్ధం చేయడం)."]
  ]
 ],
 remember: [
  ["{richika|Ṛcīka} made two bowls of charu — one with a brāhmaṇa's qualities, one with a kṣatriya's.", "{richika|ఋచీకుడు} రెండు చరువులు చేశాడు — ఒకటి బ్రాహ్మణ గుణాలతో, ఒకటి క్షత్రియ గుణాలతో."],
  ["{satyavati|Satyavatī} and her mother swapped them; Satyavatī begged that the change fall on her grandson.", "{satyavati|సత్యవతి}, ఆమె తల్లి మార్చుకున్నారు; ఆ మార్పు మనుమడిపై పడాలని సత్యవతి వేడుకుంది."],
  ["So {jamadagni|Jamadagni} was gentle, his son {parashurama|Paraśurāma} a warrior, and the queen's son {vishvamitra|Viśvāmitra}.", "అలా {jamadagni|జమదగ్ని} సౌమ్యుడు, ఆయన కుమారుడు {parashurama|పరశురాముడు} యోధుడు, రాణి కుమారుడు {vishvamitra|విశ్వామిత్రుడు}."]
 ],
 think: ["The queen thought the other bowl must be better and swapped it. Have you ever wanted what someone else had, only to find yours was right for you?", "మరొక చరువే మంచిదని రాణి అనుకుని మార్చుకుంది. మరొకరి దగ్గర ఉన్నది కావాలని కోరుకుని, చివరికి మీదే మీకు సరైనదని తెలుసుకున్న సందర్భం ఉందా?"]
},
{
 id: "jp-2", sage: "jamadagni", n: 2, order: 1702, date: "2026-10-23",
 title: "Jamadagni, Reṇukā — and the Sun's Gift", titleTe: "జమదగ్ని, రేణుక — సూర్యుని కానుక",
 src: "Mahābhārata, Āraṇyaka and Anuśāsana Parvas",
 who: ["jamadagni", "renuka", "parashurama", "surya", "shiva"],
 pages: [
  [
   ["p", "{jamadagni|Jamadagni} grew up a great scholar of the Vedas — and, the Mahābhārata adds, a master of the science of archery too, which he learned without a teacher. He married {renuka|Reṇukā}, the daughter of King Prasenajit, and they had five sons: Rumaṇvān, Suṣeṇa, Vasu, Viśvāvasu — and the youngest, Rāma, who would be known as {parashurama|Paraśurāma}, “Rāma of the axe.”", "{jamadagni|జమదగ్ని} గొప్ప వేద పండితునిగా పెరిగాడు — గురువు లేకుండానే ధనుర్విద్యలోనూ నిష్ణాతుడయ్యాడని మహాభారతం జోడిస్తుంది. ప్రసేనజిత్ మహారాజు కుమార్తె {renuka|రేణుకను} పెళ్ళాడాడు; వారికి ఐదుగురు కుమారులు: రుమణ్వంతుడు, సుషేణుడు, వసువు, విశ్వావసువు — చిన్నవాడు రాముడు; అతనే {parashurama|పరశురాముడు} — “గొడ్డలి రాముడు.”"],
   ["p", "The youngest son did great tapas to {shiva|Śiva} on the mountain, and Śiva, pleased, gave him weapons — above all, the *paraśu*, the battle-axe that never left his hand and gave him his name.", "చిన్న కుమారుడు పర్వతంపై {shiva|శివునికై} గొప్ప తపస్సు చేశాడు; ప్రసన్నుడైన శివుడు అతనికి ఆయుధాలు — అన్నిటికంటే ముఖ్యంగా *పరశువు* — ఇచ్చాడు; ఆ యుద్ధ గొడ్డలి ఎన్నడూ అతని చేతిని వీడలేదు; దానితోనే అతనికి ఆ పేరు వచ్చింది."]
  ],
  [
   ["h", "The Archer and the Burning Sun", "విలుకాడు — మండే సూర్యుడు"],
   ["p", "The Anuśāsana Parva tells a gentle story about Jamadagni and Reṇukā. One summer day Jamadagni was practising archery, shooting arrow after arrow far into the distance, and Reṇukā cheerfully ran to fetch them back. It was noon in the month of Jyeṣṭha, and the sun blazed down. Her head burned; her bare feet burned on the hot ground. She stopped to rest in the shade of a tree, and came back late.", "జమదగ్ని, రేణుకల గురించి అనుశాసన పర్వం ఒక మధురమైన కథ చెబుతుంది. ఒక వేసవి రోజు జమదగ్ని విలువిద్య అభ్యసిస్తూ బాణం తర్వాత బాణం దూరంగా వేస్తుంటే, రేణుక సంతోషంగా పరుగెత్తి వాటిని తెచ్చేది. జ్యేష్ఠ మాసపు మధ్యాహ్నం; సూర్యుడు మండిపోతున్నాడు. ఆమె తల మండింది; వేడి నేలపై ఆమె కాళ్ళు కాలాయి. ఒక చెట్టు నీడలో విశ్రమించి ఆలస్యంగా తిరిగి వచ్చింది."],
   ["p", "When Jamadagni heard why she was late, he grew angry — at the {surya|Sun}. “I will bring him down with my arrows,” he said, and took up his bow. The Sun, alarmed, came to him in the form of a brāhmaṇa and pleaded: “The Sun gives life to the world — the rains, the crops, everything depends on him.” And to make peace, he gave Jamadagni two gifts for Reṇukā: an umbrella to shade her head, and a pair of sandals to protect her feet.", "ఆమె ఎందుకు ఆలస్యమైందో విని జమదగ్నికి కోపం వచ్చింది — {surya|సూర్యునిపై}. “నా బాణాలతో అతన్ని కూల్చేస్తాను” అని విల్లు ఎత్తాడు. భయపడిన సూర్యుడు బ్రాహ్మణ రూపంలో వచ్చి వేడుకున్నాడు: “సూర్యుడే లోకానికి జీవం ఇస్తాడు — వానలు, పంటలు, అన్నీ అతనిపైనే ఆధారపడతాయి.” సంధి కోసం రేణుక కోసం జమదగ్నికి రెండు కానుకలు ఇచ్చాడు: ఆమె తలకు నీడనిచ్చే గొడుగు, కాళ్ళను కాపాడే జత పాదరక్షలు."],
   ["dyk", "☂️", "The Mahābhārata says this is how the umbrella and sandals came into the world — and that giving them to a brāhmaṇa in summer is a meritorious gift. Many people still give umbrellas and sandals as summer charity.", "గొడుగు, పాదరక్షలు లోకంలోకి ఇలాగే వచ్చాయని — వేసవిలో వాటిని బ్రాహ్మణునికి దానం చేయడం పుణ్యమని — మహాభారతం చెబుతుంది. చాలామంది ఇప్పటికీ వేసవి దానంగా గొడుగులు, చెప్పులు ఇస్తారు."],
   ["src", "Mahābhārata, Āraṇyaka Parva (Jamadagni's learning; Reṇukā, daughter of Prasenajit; the five sons). Anuśāsana Parva (Jamadagni, Reṇukā and the Sun; the gift of the umbrella and sandals). Paraśurāma's axe from Śiva is told in the Mahābhārata and the Purāṇas.", "మహాభారతం, ఆరణ్యక పర్వం (జమదగ్ని విద్య; ప్రసేనజిత్ కుమార్తె రేణుక; ఐదుగురు కుమారులు). అనుశాసన పర్వం (జమదగ్ని, రేణుక, సూర్యుడు; గొడుగు, పాదరక్షల కానుక). శివుని నుండి పరశురామునికి గొడ్డలి మహాభారతం, పురాణాలలో చెప్పబడింది."]
  ]
 ],
 remember: [
  ["{jamadagni|Jamadagni} married {renuka|Reṇukā}; their youngest son was {parashurama|Paraśurāma}.", "{jamadagni|జమదగ్ని} {renuka|రేణుకను} పెళ్ళాడాడు; వారి చిన్న కుమారుడు {parashurama|పరశురాముడు}."],
  ["Paraśurāma received his axe from {shiva|Śiva}.", "పరశురాముడు {shiva|శివుని} నుండి గొడ్డలి పొందాడు."],
  ["When the Sun scorched Reṇukā, {surya|Sūrya} gave her an umbrella and sandals.", "సూర్యుడు రేణుకను కాల్చినప్పుడు {surya|సూర్యుడు} ఆమెకు గొడుగు, పాదరక్షలు ఇచ్చాడు."]
 ],
 think: ["Jamadagni was ready to fight the Sun for his wife's sake. Was that love, or anger, or both?", "భార్య కోసం జమదగ్ని సూర్యునితోనే పోరాడడానికి సిద్ధమయ్యాడు. అది ప్రేమా, కోపమా, రెండూనా?"]
},
{
 id: "jp-3", sage: "jamadagni", n: 3, order: 1703, date: "2026-10-23",
 title: "The Order No Son Should Hear", titleTe: "ఏ కుమారుడూ వినకూడని ఆజ్ఞ",
 src: "Mahābhārata, Āraṇyaka Parva · local traditions",
 who: ["jamadagni", "renuka", "parashurama"],
 pages: [
  [
   ["p", "This is the hardest story in Paraśurāma's life. The Mahābhārata tells it plainly, and so will we.", "పరశురాముని జీవితంలో అత్యంత కఠినమైన కథ ఇది. మహాభారతం దీన్ని సూటిగా చెబుతుంది; మనమూ అలాగే చెబుదాం."],
   ["p", "One day {renuka|Reṇukā} went to the river to bathe. There she saw a king named Citraratha, handsome and splendid, playing in the water with his wives. For a moment, her heart was stirred by him. She came home wet and shaken. {jamadagni|Jamadagni}, with his inner sight, saw what had passed through her mind, and his anger blazed up.", "ఒకరోజు {renuka|రేణుక} స్నానానికి నదికి వెళ్ళింది. అక్కడ అందగాడు, వైభవోపేతుడు అయిన చిత్రరథుడు అనే రాజు తన భార్యలతో నీటిలో ఆడుకోవడం చూసింది. ఒక్క క్షణం ఆమె మనసు అతని వైపు చలించింది. తడిసి, కలవరపడి ఇంటికి వచ్చింది. {jamadagni|జమదగ్ని} తన అంతర్దృష్టితో ఆమె మనసులో మెదిలినదాన్ని చూశాడు; ఆయన కోపం భగ్గుమంది."]
  ],
  [
   ["h", "Four Who Refused, One Who Obeyed", "నిరాకరించిన నలుగురు, పాటించిన ఒక్కడు"],
   ["p", "He called his eldest son, Rumaṇvān. “Kill your mother.” The son stood frozen and could not do it. He called the second, the third, the fourth — none of them could raise a hand against their mother. In his fury, Jamadagni cursed all four to lose their reason and wander like animals.", "పెద్ద కుమారుడు రుమణ్వంతుని పిలిచాడు. “నీ తల్లిని చంపు.” కుమారుడు నిశ్చేష్టుడై నిలబడ్డాడు; చేయలేకపోయాడు. రెండవవాణ్ణి, మూడవవాణ్ణి, నాలుగవవాణ్ణి పిలిచాడు — ఎవరూ తల్లిపై చేయి ఎత్తలేకపోయారు. కోపంతో జమదగ్ని నలుగురినీ బుద్ధి కోల్పోయి జంతువుల్లా తిరగమని శపించాడు."],
   ["p", "Then the youngest, {parashurama|Rāma}, came home. His father gave him the same order. Without a word, Rāma raised his axe and struck off his mother's head.", "అప్పుడు చిన్నవాడు {parashurama|రాముడు} ఇంటికి వచ్చాడు. తండ్రి అతనికీ అదే ఆజ్ఞ ఇచ్చాడు. ఒక్క మాట కూడా లేకుండా రాముడు గొడ్డలి ఎత్తి తల్లి తల నరికేశాడు."],
   ["p", "Jamadagni's anger vanished at once. “My son, you have done what was hard. Ask for anything.” And Paraśurāma — who had perhaps known all along what he would ask — said: “Let my mother live again, and let her not remember that she was killed. Let no sin touch her. Let my brothers have their minds back. And let me be unconquered in battle and live long.” Jamadagni granted every boon. Reṇukā rose up alive, as if from sleep, and the brothers were themselves again.", "జమదగ్ని కోపం ఒక్కసారిగా మాయమైంది. “నాయనా, కష్టమైన పని చేశావు. ఏదైనా కోరుకో.” పరశురాముడు — తాను ఏం అడగబోతున్నాడో బహుశా మొదటి నుండీ తెలిసినవాడు — అన్నాడు: “నా తల్లి మళ్ళీ బతకాలి; తాను చంపబడిన సంగతి ఆమెకు గుర్తుండకూడదు. ఏ పాపమూ ఆమెను తాకకూడదు. నా సోదరులకు బుద్ధి తిరిగి రావాలి. నేను యుద్ధంలో అజేయుడిగా, దీర్ఘాయువుగా ఉండాలి.” జమదగ్ని ప్రతి వరమూ ఇచ్చాడు. నిద్ర నుండి లేచినట్టు రేణుక సజీవంగా లేచింది; సోదరులు మళ్ళీ మామూలయ్యారు."]
  ],
  [
   ["h", "Reṇukā the Goddess", "దేవతగా రేణుక"],
   ["p", "This story troubles readers, and it is meant to. It shows how terrible anger can be, even in a great sage; how hard obedience can be; and how love found a way — through the boons — to undo what anger did. Many readers note that Paraśurāma obeyed only because he trusted his father's power to restore what was lost.", "ఈ కథ పాఠకులను కలవరపెడుతుంది; అది ఉద్దేశపూర్వకమే. గొప్ప మునిలో కూడా కోపం ఎంత భయంకరమైనదో; విధేయత ఎంత కష్టమైనదో; కోపం చేసినదాన్ని ప్రేమ — వరాల ద్వారా — ఎలా రద్దు చేసిందో ఇది చూపిస్తుంది. పోయినదాన్ని తిరిగి తేగల తండ్రి శక్తిపై నమ్మకంతోనే పరశురాముడు ఆజ్ఞ పాటించాడని చాలామంది పాఠకులు గమనిస్తారు."],
   ["p", "In many parts of India, Reṇukā herself is worshipped as a goddess. In Karnataka and in the Telugu lands she is honoured as Ellamma (Yellamma), and in Maharashtra at Mahur; local tellings of her story vary widely and add much that the Mahābhārata does not say.", "భారతదేశంలో చాలా ప్రాంతాల్లో రేణుకనే దేవతగా పూజిస్తారు. కర్ణాటకలో, తెలుగు ప్రాంతాలలో ఎల్లమ్మగా, మహారాష్ట్రలో మాహూర్‌లో గౌరవిస్తారు; ఆమె కథ స్థానిక కథనాలలో ఎంతో భిన్నంగా ఉంటుంది; మహాభారతం చెప్పనివి ఎన్నో జోడిస్తాయి."],
   ["dyk", "🌺", "Remember Cirakārin in Gautama's story, who saved his mother by thinking slowly? The Mahābhārata gives us both stories — the son who obeyed and the son who paused — and lets us think about them side by side.", "తల్లిని నెమ్మదిగా ఆలోచించి కాపాడిన గౌతముని కథలోని చిరకారి గుర్తున్నాడా? మహాభారతం రెండు కథలనూ ఇస్తుంది — పాటించిన కుమారుడు, ఆగిన కుమారుడు — పక్కపక్కన పెట్టి ఆలోచించమంటుంది."],
   ["sglink", "Cirakārin, the son who thought slowly", "చిరకారి — నెమ్మదిగా ఆలోచించిన కుమారుడు", "gt-5"],
   ["src", "Mahābhārata, Āraṇyaka Parva (Akṛtavraṇa's account: Reṇukā and Citraratha; the order to the five sons; the curse on the four; Paraśurāma's act and his boons). The worship of Reṇukā as Ellamma/Yellamma and at Mahur belongs to local traditions.", "మహాభారతం, ఆరణ్యక పర్వం (అకృతవ్రణుని కథనం: రేణుక, చిత్రరథుడు; ఐదుగురు కుమారులకు ఆజ్ఞ; నలుగురికి శాపం; పరశురాముని చర్య, వరాలు). ఎల్లమ్మగా, మాహూర్‌లో రేణుక ఆరాధన స్థానిక సంప్రదాయాలకు చెందినది."]
  ]
 ],
 remember: [
  ["{jamadagni|Jamadagni}, in anger, ordered his sons to kill {renuka|Reṇukā}; four refused and were cursed.", "కోపంలో {jamadagni|జమదగ్ని} {renuka|రేణుకను} చంపమని కుమారులను ఆజ్ఞాపించాడు; నలుగురు నిరాకరించి శాపం పొందారు."],
  ["{parashurama|Paraśurāma} obeyed, then asked as his boon that she live again without memory of it.", "{parashurama|పరశురాముడు} పాటించి, తల్లి ఆ జ్ఞాపకం లేకుండా మళ్ళీ బతకాలని వరం కోరాడు."],
  ["His mother and brothers were restored; Reṇukā is worshipped as a goddess, Ellamma.", "తల్లి, సోదరులు మళ్ళీ మామూలయ్యారు; రేణుకను ఎల్లమ్మగా దేవతగా పూజిస్తారు."]
 ],
 think: ["Four sons refused an order; one obeyed and then used his reward to undo it. Which do you think showed more love — and is there more than one right answer?", "నలుగురు కుమారులు ఆజ్ఞను నిరాకరించారు; ఒక్కడు పాటించి, తన బహుమానంతో దాన్ని రద్దు చేశాడు. ఎవరు ఎక్కువ ప్రేమ చూపారని మీరనుకుంటున్నారు — సరైన జవాబు ఒక్కటే ఉందా?"]
},
{
 id: "jp-4", sage: "jamadagni", n: 4, order: 1704, date: "2026-10-23",
 title: "The King Who Took the Calf", titleTe: "దూడను తీసుకుపోయిన రాజు",
 src: "Mahābhārata, Āraṇyaka Parva · Bhāgavata 9.15–9.16",
 who: ["jamadagni", "parashurama", "kartavirya", "renuka", "dattatreya"],
 pages: [
  [
   ["p", "In those days the mightiest king on earth was {kartavirya|Kārtavīrya Arjuna} of Māhiṣmatī on the Narmadā. He had worshipped {dattatreya|Dattātreya} and received from him a thousand arms and a golden chariot that could go anywhere. He was so strong that, the Rāmāyaṇa says, he once caught Rāvaṇa himself and kept him tied up like an animal. But power had made him proud.", "ఆ రోజుల్లో భూమిపై అత్యంత బలవంతుడైన రాజు నర్మదా తీరాన మాహిష్మతికి చెందిన {kartavirya|కార్తవీర్యార్జునుడు}. {dattatreya|దత్తాత్రేయుణ్ణి} ఆరాధించి ఆయన నుండి వేయి చేతులు, ఎక్కడికైనా వెళ్ళగల బంగారు రథం పొందాడు. ఎంత బలవంతుడంటే ఒకసారి స్వయంగా రావణుణ్ణే పట్టుకుని జంతువులా కట్టి ఉంచాడని రామాయణం చెబుతుంది. కానీ అధికారం అతన్ని గర్విష్ఠుణ్ణి చేసింది."],
   ["link", "Kārtavīrya captures Rāvaṇa", "కార్తవీర్యుడు రావణుణ్ణి బంధించడం", "uttara-9"],
   ["sglink", "Dattātreya, who gave him his arms", "అతనికి చేతులిచ్చిన దత్తాత్రేయుడు", "at-8"]
  ],
  [
   ["h", "A Guest Who Stole", "దొంగిలించిన అతిథి"],
   ["p", "One day Kārtavīrya came to {jamadagni|Jamadagni}'s āśrama while {parashurama|Paraśurāma} was away. {renuka|Reṇukā} welcomed him with honour. But the king, drunk with his own greatness, did not return the courtesy. He broke down the trees of the āśrama, and when he saw the sage's sacred cow and her calf — the cow whose milk was used for the daily fire offering — he took the calf by force and carried it away, ignoring its cries.", "ఒకరోజు {parashurama|పరశురాముడు} లేని సమయంలో కార్తవీర్యుడు {jamadagni|జమదగ్ని} ఆశ్రమానికి వచ్చాడు. {renuka|రేణుక} గౌరవంగా ఆహ్వానించింది. కానీ తన గొప్పతనపు మత్తులో ఉన్న రాజు ఆ మర్యాదకు తగ్గట్టు ప్రవర్తించలేదు. ఆశ్రమంలోని చెట్లను విరగ్గొట్టాడు; నిత్యాగ్నిహోత్రానికి పాలిచ్చే ముని హోమధేనువునూ దాని దూడనూ చూసి, దూడ అరుస్తున్నా పట్టించుకోకుండా బలవంతంగా తీసుకుపోయాడు."],
   ["p", "The Bhāgavata tells it a little differently: there, the sage's cow was a wish-fulfilling Kāmadhenu who had fed the king's whole army, and the king, wanting her for himself, took her and her calf away.", "భాగవతం దీన్ని కొంచెం వేరేలా చెబుతుంది: అక్కడ ముని ఆవు రాజు సైన్యమంతటికీ భోజనం పెట్టిన కోరికలు తీర్చే కామధేనువు; దాన్ని తనకు కావాలని రాజు ఆవునూ దూడనూ తీసుకుపోయాడు."],
   ["p", "When Paraśurāma came home and heard, he took up his axe and his bow and went after the king. In the battle that followed, he cut off Kārtavīrya's thousand arms one by one, and killed him, and brought the cow and calf home.", "పరశురాముడు ఇంటికి వచ్చి విన్నాడు; గొడ్డలి, విల్లు తీసుకుని రాజు వెంటపడ్డాడు. తర్వాత జరిగిన యుద్ధంలో కార్తవీర్యుని వేయి చేతులనూ ఒక్కొక్కటిగా నరికి, అతన్ని సంహరించి, ఆవునూ దూడనూ ఇంటికి తెచ్చాడు."]
  ],
  [
   ["h", "Revenge on a Sage", "మునిపై ప్రతీకారం"],
   ["p", "Jamadagni was not pleased. “My son, we are brāhmaṇas. Our strength is forgiveness. You have killed a king — that is a grave sin. Go and purify yourself on pilgrimage.” Paraśurāma obeyed and went away for a year.", "జమదగ్ని సంతోషించలేదు. “నాయనా, మనం బ్రాహ్మణులం. క్షమే మన బలం. నువ్వు ఒక రాజును చంపావు — అది ఘోర పాపం. తీర్థయాత్ర చేసి పవిత్రుడవు కా.” పరశురాముడు పాటించి ఏడాదిపాటు వెళ్ళిపోయాడు."],
   ["p", "While he was away, the sons of Kārtavīrya came to the āśrama for revenge. They found Jamadagni sitting alone in meditation, and attacked him. The gentle sage, who had just told his son that forgiveness is a brāhmaṇa's strength, did not fight back. They killed him and went away. Reṇukā, beside the body, cried out again and again: “Rāma! Rāma!”", "అతను లేని సమయంలో కార్తవీర్యుని కుమారులు ప్రతీకారం కోసం ఆశ్రమానికి వచ్చారు. ఒంటరిగా ధ్యానంలో కూర్చున్న జమదగ్నిని చూసి దాడి చేశారు. క్షమే బ్రాహ్మణుని బలమని కొడుకుకు అప్పుడే చెప్పిన సౌమ్యుడైన ముని ఎదురు తిరగలేదు. వారు ఆయనను చంపి వెళ్ళిపోయారు. శరీరం పక్కన రేణుక మళ్ళీ మళ్ళీ “రామా! రామా!” అని అరిచింది."],
   ["dyk", "🐄", "Later Purāṇas add that Reṇukā struck her breast twenty-one times in grief, and that this is why Paraśurāma made twenty-one campaigns. The Mahābhārata does not give this reason.", "దుఃఖంలో రేణుక ఇరవై ఒక్కసారి గుండెలు బాదుకుందనీ, అందుకే పరశురాముడు ఇరవై ఒక్క దండయాత్రలు చేశాడనీ తరువాతి పురాణాలు జోడిస్తాయి. మహాభారతం ఈ కారణం చెప్పదు."],
   ["src", "Mahābhārata, Āraṇyaka Parva (Kārtavīrya's visit; the calf of the homa-cow taken; the thousand arms cut; Jamadagni killed by Kārtavīrya's sons; Reṇukā's cry). Bhāgavata Purāṇa 9.15–9.16 (the Kāmadhenu; Jamadagni's counsel on forgiveness; the pilgrimage). Rāmāyaṇa, Uttara Kāṇḍa (Kārtavīrya and Rāvaṇa). The twenty-one blows are from later Purāṇas.", "మహాభారతం, ఆరణ్యక పర్వం (కార్తవీర్యుని రాక; హోమధేను దూడ అపహరణ; వేయి చేతుల ఖండన; కార్తవీర్య పుత్రులు జమదగ్నిని చంపడం; రేణుక రోదన). భాగవత పురాణం 9.15–9.16 (కామధేనువు; క్షమ గురించి జమదగ్ని హితవు; తీర్థయాత్ర). రామాయణం, ఉత్తరకాండ (కార్తవీర్యుడు, రావణుడు). ఇరవై ఒక్క దెబ్బలు తరువాతి పురాణాలవి."]
  ]
 ],
 remember: [
  ["{kartavirya|Kārtavīrya}, proud of his thousand arms, took the calf of {jamadagni|Jamadagni}'s sacred cow.", "వేయి చేతుల గర్వంతో {kartavirya|కార్తవీర్యుడు} {jamadagni|జమదగ్ని} హోమధేను దూడను తీసుకుపోయాడు."],
  ["{parashurama|Paraśurāma} cut off his arms and killed him; Jamadagni sent his son on pilgrimage to atone.", "{parashurama|పరశురాముడు} అతని చేతులు నరికి సంహరించాడు; ప్రాయశ్చిత్తానికి జమదగ్ని కుమారుణ్ణి తీర్థయాత్రకు పంపాడు."],
  ["Kārtavīrya's sons killed the gentle sage while his son was away.", "కుమారుడు లేని సమయంలో కార్తవీర్యుని కుమారులు సౌమ్యుడైన మునిని చంపారు."]
 ],
 think: ["Jamadagni taught that forgiveness is a brāhmaṇa's strength — and died without fighting back. What did his son learn from that, do you think?", "క్షమే బ్రాహ్మణుని బలమని జమదగ్ని బోధించాడు — ఎదురు తిరగకుండానే మరణించాడు. దాని నుండి ఆయన కుమారుడు ఏం నేర్చుకున్నాడని మీరనుకుంటున్నారు?"]
},
{
 id: "jp-5", sage: "jamadagni", n: 5, order: 1705, date: "2026-10-23",
 title: "Twenty-One Times", titleTe: "ఇరవై ఒక్కసార్లు",
 src: "Mahābhārata, Ādi, Āraṇyaka and Śānti Parvas",
 who: ["parashurama", "jamadagni", "richika"],
 pages: [
  [
   ["p", "{parashurama|Paraśurāma} came home to find his father dead and his mother weeping. Something in him broke. He swore before his father's body that he would rid the earth of the kṣatriyas — the warrior-kings who had grown so arrogant that they could murder a sage at his prayers.", "{parashurama|పరశురాముడు} ఇంటికి వచ్చేసరికి తండ్రి మరణించి ఉన్నాడు, తల్లి ఏడుస్తోంది. అతనిలో ఏదో విరిగిపోయింది. ప్రార్థనలో ఉన్న మునిని హత్య చేసేంత అహంకారులైన క్షత్రియులను — యోధ రాజులను — భూమి నుండి తుడిచేస్తానని తండ్రి శరీరం ఎదుట ప్రతిజ్ఞ చేశాడు."],
   ["p", "First he went to Māhiṣmatī and destroyed Kārtavīrya's sons. Then he went on, against king after king. The Mahābhārata says he cleared the earth of kṣatriyas twenty-one times. Each time, a new generation grew up from those who had escaped, and each time he went out again.", "మొదట మాహిష్మతికి వెళ్ళి కార్తవీర్యుని కుమారులను నాశనం చేశాడు. తర్వాత రాజు తర్వాత రాజుపై దండెత్తాడు. ఇరవై ఒక్కసార్లు భూమిని క్షత్రియ రహితం చేశాడని మహాభారతం చెబుతుంది. ప్రతిసారీ తప్పించుకున్నవారి నుండి కొత్త తరం పెరిగింది; ప్రతిసారీ ఆయన మళ్ళీ బయలుదేరాడు."]
  ],
  [
   ["h", "The Five Lakes at Kurukṣetra", "కురుక్షేత్రంలో ఐదు సరస్సులు"],
   ["p", "The Mahābhārata begins its whole story at a place called Samantapañcaka, in Kurukṣetra. There, it says, Paraśurāma made five great lakes, filled from his wars, and offered water to his ancestors from them. That same field, ages later, would be where the Kurus and Pāṇḍavas fought their great war.", "మహాభారతం తన కథనంతా కురుక్షేత్రంలోని సమంతపంచకం అనే ప్రదేశంలో మొదలుపెడుతుంది. అక్కడ పరశురాముడు తన యుద్ధాల నుండి నిండిన ఐదు మహా సరస్సులను ఏర్పరిచి, వాటి నుండి పితరులకు తర్పణం విడిచాడని చెబుతుంది. యుగాల తర్వాత అదే భూమిలో కురుపాండవుల మహాయుద్ధం జరిగింది."],
   ["p", "Then his ancestors — {richika|Ṛcīka} and the elders of Bhṛgu's family — appeared before him. “Enough, child,” they said. “You have done what you vowed. Now stop. Let your anger go. Return to tapas, which is the true strength of our family.” Paraśurāma bowed and laid down his vengeance.", "అప్పుడు ఆయన పితరులు — {richika|ఋచీకుడు}, భృగు వంశపు పెద్దలు — ప్రత్యక్షమయ్యారు. “చాలు నాయనా. నువ్వు ప్రతిజ్ఞ చేసినది చేశావు. ఇక ఆపు. కోపాన్ని వదులు. మన వంశపు నిజమైన బలమైన తపస్సుకు తిరిగి వెళ్ళు” అన్నారు. పరశురాముడు నమస్కరించి తన ప్రతీకారాన్ని విడిచిపెట్టాడు."]
  ],
  [
   ["h", "Those Who Survived", "బతికి బయటపడినవారు"],
   ["p", "The Śānti Parva adds that not every royal line was destroyed. Some princes were hidden and raised in secret — among cowherds, by sages, in the forest, even, one story says, among bears on a mountain. From them the royal families of the earth grew again. The Sun dynasty of Ayodhyā survived: Rāma would be born into it.", "అన్ని రాజవంశాలూ నాశనం కాలేదని శాంతి పర్వం జోడిస్తుంది. కొందరు రాకుమారులను రహస్యంగా దాచి పెంచారు — గోపాలుర మధ్య, మునుల దగ్గర, అడవిలో, ఒక కథ ప్రకారం పర్వతంపై ఎలుగుబంట్ల మధ్య కూడా. వారి నుండి భూమిపై రాజవంశాలు మళ్ళీ పెరిగాయి. అయోధ్య సూర్యవంశం నిలిచింది: అందులోనే రాముడు పుట్టబోతున్నాడు."],
   ["dyk", "⚔️", "Paraśurāma's wars are told not to praise killing, but as a warning to kings: when rulers forget dharma and abuse their power, the world itself rises against them.", "పరశురాముని యుద్ధాలను హత్యలను పొగడడానికి కాదు, రాజులకు హెచ్చరికగా చెబుతారు: పాలకులు ధర్మాన్ని మరచి అధికారాన్ని దుర్వినియోగం చేస్తే లోకమే వారిపై తిరగబడుతుంది."],
   ["src", "Mahābhārata, Ādi Parva (Samantapañcaka and the five lakes), Āraṇyaka Parva (the twenty-one campaigns; the ancestors restrain him), Śānti Parva (the hidden survivors of the royal lines).", "మహాభారతం, ఆది పర్వం (సమంతపంచకం, ఐదు సరస్సులు), ఆరణ్యక పర్వం (ఇరవై ఒక్క దండయాత్రలు; పితరులు ఆయనను ఆపడం), శాంతి పర్వం (రాజవంశాలలో దాగి బతికినవారు)."]
  ]
 ],
 remember: [
  ["After {jamadagni|Jamadagni}'s death, {parashurama|Paraśurāma} cleared the earth of arrogant kings twenty-one times.", "{jamadagni|జమదగ్ని} మరణం తర్వాత {parashurama|పరశురాముడు} అహంకారులైన రాజులను ఇరవై ఒక్కసార్లు భూమి నుండి తొలగించాడు."],
  ["He made five lakes at Samantapañcaka in Kurukṣetra.", "కురుక్షేత్రంలోని సమంతపంచకంలో ఐదు సరస్సులు ఏర్పరిచాడు."],
  ["His ancestors, led by {richika|Ṛcīka}, told him to stop and return to tapas.", "{richika|ఋచీకుని} నాయకత్వంలో పితరులు ఆపి తపస్సుకు తిరిగి వెళ్ళమన్నారు."]
 ],
 think: ["It was his own ancestors who told Paraśurāma, “Enough.” Why is it sometimes hardest to stop when we feel we are in the right?", "“చాలు” అని పరశురామునికి చెప్పింది ఆయన పితరులే. మనం సరైనవాళ్ళమని అనిపించినప్పుడు ఆపడం ఒక్కోసారి ఎందుకు అత్యంత కష్టం?"]
},
{
 id: "jp-6", sage: "jamadagni", n: 6, order: 1706, date: "2026-10-23",
 title: "The Earth Given Away — and the Western Shore", titleTe: "దానమిచ్చిన భూమి — పశ్చిమ తీరం",
 src: "Mahābhārata, Śānti Parva · later tellings",
 who: ["parashurama", "kashyapa", "varuna"],
 pages: [
  [
   ["p", "When his wars were over, {parashurama|Paraśurāma} performed a great horse-sacrifice to wash away what he had done. At the end of a sacrifice, the priests are given a gift, the *dakṣiṇā*. Paraśurāma gave the greatest dakṣiṇā ever given: he gave the whole earth to the chief priest, the sage {kashyapa|Kaśyapa}.", "యుద్ధాలు ముగిశాక, తాను చేసినదాన్ని కడిగేసుకోవడానికి {parashurama|పరశురాముడు} అశ్వమేధ మహాయాగం చేశాడు. యజ్ఞం చివర పురోహితులకు *దక్షిణ* ఇస్తారు. పరశురాముడు అంతకుముందెన్నడూ ఇవ్వనంత గొప్ప దక్షిణ ఇచ్చాడు: సమస్త భూమినీ ప్రధాన పురోహితుడైన {kashyapa|కశ్యప} మహర్షికి దానమిచ్చాడు."],
   ["p", "Kaśyapa accepted — and then said something unexpected. “This earth is mine now. You may not live in it. Go to the shore of the southern ocean and leave my land.” He knew that as long as Paraśurāma stayed, the kings could never rise again, and the earth would have no one to protect it.", "కశ్యపుడు స్వీకరించాడు — తర్వాత ఊహించని మాట అన్నాడు. “ఈ భూమి ఇప్పుడు నాది. నువ్వు ఇందులో ఉండకూడదు. దక్షిణ సముద్ర తీరానికి వెళ్ళి నా భూమిని విడిచిపెట్టు.” పరశురాముడు ఉన్నంతకాలం రాజులు మళ్ళీ లేవలేరనీ, భూమిని కాపాడేవారే ఉండరనీ ఆయనకు తెలుసు."]
  ],
  [
   ["h", "Land from the Sea", "సముద్రం నుండి భూమి"],
   ["p", "Paraśurāma went to the edge of the sea. The Śānti Parva says the ocean itself, out of respect, drew back and made a new strip of land for him — the region called Śūrpāraka, on the western coast. There, and on the Mahendra mountain, he settled down to tapas.", "పరశురాముడు సముద్రపు అంచుకు వెళ్ళాడు. సముద్రమే గౌరవంతో వెనక్కి జరిగి ఆయన కోసం కొత్త భూభాగాన్ని — పశ్చిమ తీరంలోని శూర్పారకం అనే ప్రాంతాన్ని — సృష్టించిందని శాంతి పర్వం చెబుతుంది. అక్కడ, మహేంద్ర పర్వతంపై ఆయన తపస్సులో స్థిరపడ్డాడు."],
   ["p", "Later tellings of the western coast make this a great founding story. They say Paraśurāma stood on the cliffs and hurled his axe into the sea — or asked {varuna|Varuṇa} to give him as much land as his axe could cover — and the waters drew back from Gokarṇa to Kanyākumārī, leaving the green coastal land of Konkan and Kerala. Kerala's old chronicle, the Keralolpatti, opens with this story, and the land is still poetically called Paraśurāma-kṣetra.", "పశ్చిమ తీరపు తరువాతి కథనాలు దీన్ని ఒక మహా స్థాపక కథగా చేస్తాయి. పరశురాముడు కొండ అంచున నిలబడి తన గొడ్డలిని సముద్రంలోకి విసిరాడనీ — లేదా గొడ్డలి ఎంతవరకు వెళ్తే అంత భూమి ఇవ్వమని {varuna|వరుణుని} కోరాడనీ — గోకర్ణం నుండి కన్యాకుమారి వరకు నీరు వెనక్కి జరిగి కొంకణ్, కేరళల పచ్చని తీర భూమి మిగిలిందనీ చెబుతాయి. కేరళ ప్రాచీన చరిత్ర కేరళోల్పత్తి ఈ కథతోనే మొదలవుతుంది; ఆ భూమిని ఇప్పటికీ కవితాత్మకంగా పరశురామ క్షేత్రం అంటారు."],
   ["dyk", "🌴", "Many old temples along the coast from Goa to Kerala trace their founding to Paraśurāma, and his statue stands at several places on that shore.", "గోవా నుండి కేరళ వరకు తీరంలోని ఎన్నో ప్రాచీన ఆలయాలు తమ స్థాపనను పరశురామునికి ఆపాదిస్తాయి; ఆ తీరంలో చాలాచోట్ల ఆయన విగ్రహం ఉంది."],
   ["src", "Mahābhārata, Śānti Parva (the earth given to Kaśyapa as dakṣiṇā; Kaśyapa sends him away; the ocean makes Śūrpāraka for him). The axe thrown into the sea and the founding of Kerala and Konkan come from later regional tellings (the Keralolpatti; the Sahyādri-khaṇḍa).", "మహాభారతం, శాంతి పర్వం (భూమిని దక్షిణగా కశ్యపునికి ఇవ్వడం; కశ్యపుడు ఆయనను పంపడం; సముద్రం శూర్పారకాన్ని సృష్టించడం). గొడ్డలిని సముద్రంలోకి విసరడం, కేరళ కొంకణ్ స్థాపన తరువాతి ప్రాంతీయ కథనాల నుండి (కేరళోల్పత్తి; సహ్యాద్రి ఖండం)."]
  ]
 ],
 remember: [
  ["{parashurama|Paraśurāma} gave the whole earth as dakṣiṇā to {kashyapa|Kaśyapa}.", "{parashurama|పరశురాముడు} సమస్త భూమినీ దక్షిణగా {kashyapa|కశ్యపునికి} ఇచ్చాడు."],
  ["Kaśyapa asked him to leave the land; the ocean made Śūrpāraka for him.", "భూమిని విడిచిపెట్టమని కశ్యపుడు కోరాడు; సముద్రం ఆయన కోసం శూర్పారకాన్ని సృష్టించింది."],
  ["Later tellings make him the founder of the Konkan and Kerala coast.", "తరువాతి కథనాలు ఆయనను కొంకణ్, కేరళ తీర స్థాపకునిగా చెబుతాయి."]
 ],
 think: ["Paraśurāma gave away everything he had won — and then had to leave it. Can giving something away completely be a way of making peace with it?", "పరశురాముడు తాను గెలిచినదంతా దానమిచ్చాడు — దాన్ని విడిచి వెళ్ళాల్సి వచ్చింది. దేన్నైనా పూర్తిగా ఇచ్చేయడం దానితో శాంతి చేసుకునే మార్గం కాగలదా?"]
},
{
 id: "jp-7", sage: "jamadagni", n: 7, order: 1707, date: "2026-10-23",
 title: "Paraśurāma Meets Rāma", titleTe: "పరశురాముడు శ్రీరాముని కలవడం",
 src: "Rāmāyaṇa, Bāla Kāṇḍa, sargas 74–76",
 who: ["parashurama", "rama", "dasaratha", "vasishtha", "shiva", "vishnu"],
 pages: [
  [
   ["p", "Ages later, {rama|Rāma} of Ayodhyā broke the great bow of {shiva|Śiva} in Mithilā and married Sītā. As the wedding party travelled home, the sky darkened, the wind howled and birds cried out in alarm. Then, blazing like fire, the axe on his shoulder and a great bow in his hand, {parashurama|Paraśurāma} stood in their path.", "యుగాల తర్వాత అయోధ్య {rama|రాముడు} మిథిలలో {shiva|శివుని} మహాధనుస్సును విరిచి సీతను పెళ్ళాడాడు. పెళ్ళి బృందం ఇంటికి తిరిగి వస్తుండగా ఆకాశం చీకటైంది, గాలి హోరెత్తింది, పక్షులు భయంతో అరిచాయి. అప్పుడు నిప్పులా జ్వలిస్తూ, భుజంపై గొడ్డలి, చేతిలో మహాధనుస్సుతో {parashurama|పరశురాముడు} వారి దారిలో నిలబడ్డాడు."],
   ["p", "{dasaratha|Daśaratha} was terrified for his son, and begged for mercy. {vasishtha|Vasiṣṭha} and the sages offered water and honours. Paraśurāma ignored them all and spoke only to Rāma: “I have heard you broke Śiva's bow. That bow was old and worn. Here is its twin — the bow of {vishnu|Viṣṇu}, which my father Jamadagni kept and left to me. If you can string this one, I will fight you.”", "కుమారుని కోసం {dasaratha|దశరథుడు} భయపడి దయ కోసం వేడుకున్నాడు. {vasishtha|వసిష్ఠుడు}, మునులు అర్ఘ్యం, సత్కారాలు సమర్పించారు. పరశురాముడు అందరినీ పట్టించుకోకుండా రామునితోనే మాట్లాడాడు: “నువ్వు శివధనుస్సును విరిచావని విన్నాను. ఆ విల్లు పాతది, జీర్ణమైనది. ఇదిగో దాని జంట — నా తండ్రి జమదగ్ని భద్రపరిచి నాకిచ్చిన {vishnu|విష్ణువు} ధనుస్సు. దీనికి నారి ఎక్కించగలిగితే నీతో యుద్ధం చేస్తాను.”"]
  ],
  [
   ["h", "One Rāma Meets Another", "ఒక రాముడు మరో రాముని ఎదుట"],
   ["p", "Rāma, calm, took the bow from Paraśurāma's hands — and with it, the Rāmāyaṇa says, the power of Viṣṇu passed from the elder Rāma to the younger. He strung it with ease, fitted an arrow, and said: “You are a brāhmaṇa, and Viśvāmitra's kin; I will not kill you. But a Vaiṣṇava arrow cannot be drawn and not released. Tell me — shall I destroy your power to travel, or the worlds you have won by your tapas?”", "రాముడు ప్రశాంతంగా పరశురాముని చేతుల నుండి ధనుస్సు అందుకున్నాడు — దానితో పాటు పెద్ద రాముని నుండి చిన్న రామునికి విష్ణుతేజస్సు చేరిందని రామాయణం చెబుతుంది. సులభంగా నారి ఎక్కించి, బాణం సంధించి అన్నాడు: “మీరు బ్రాహ్మణులు, విశ్వామిత్రుని బంధువులు; మిమ్మల్ని చంపను. కానీ వైష్ణవ బాణాన్ని ఎక్కుపెట్టి వదలకుండా ఉండలేం. చెప్పండి — మీ సంచార శక్తిని నాశనం చేయనా, మీ తపస్సుతో సంపాదించిన లోకాలనా?”"],
   ["p", "Paraśurāma looked at Rāma, and understood who stood before him. His fire went out of him. “I know you now — you are Viṣṇu himself. I am not ashamed to be defeated by the Lord of the three worlds. Spare my power to move — I promised Kaśyapa I would not stay on his earth at night. Destroy the worlds I have won.” Rāma released the arrow, and it destroyed those worlds.", "పరశురాముడు రాముని చూసి, తన ఎదుట ఎవరున్నారో గ్రహించాడు. ఆయన తేజస్సు ఆయనను విడిచిపోయింది. “ఇప్పుడు మిమ్మల్ని తెలుసుకున్నాను — మీరు స్వయంగా విష్ణువు. ముల్లోకాల ప్రభువు చేతిలో ఓడిపోవడం నాకు సిగ్గు కాదు. నా సంచార శక్తిని విడిచిపెట్టండి — కశ్యపుని భూమిపై రాత్రి ఉండనని ఆయనకు మాట ఇచ్చాను. నేను సంపాదించిన లోకాలను నాశనం చేయండి.” రాముడు బాణం వదిలాడు; అది ఆ లోకాలను నాశనం చేసింది."],
   ["p", "Paraśurāma walked around Rāma in reverence, and went back to the Mahendra mountain. The sky cleared, and the wedding party went home to Ayodhyā in joy.", "పరశురాముడు భక్తితో రామునికి ప్రదక్షిణ చేసి మహేంద్ర పర్వతానికి తిరిగి వెళ్ళాడు. ఆకాశం నిర్మలమైంది; పెళ్ళి బృందం ఆనందంగా అయోధ్యకు చేరింది."],
   ["link", "Paraśurāma in the Rāmāyaṇa", "రామాయణంలో పరశురాముడు", "bala-14"],
   ["dyk", "🏹", "Two avatāras of Viṣṇu — the sixth and the seventh — met face to face. The tradition sees it as the passing of a torch: the age of the axe gave way to the age of the righteous king.", "విష్ణువు రెండు అవతారాలు — ఆరవదీ ఏడవదీ — ముఖాముఖి కలిశాయి. దీన్ని సంప్రదాయం దివిటీ అప్పగించడంగా చూస్తుంది: గొడ్డలి యుగం ధర్మరాజు యుగానికి దారి ఇచ్చింది."],
   ["src", "Vālmīki Rāmāyaṇa, Bāla Kāṇḍa, sargas 74–76 (the omens; Paraśurāma's challenge; the two bows of Śiva and Viṣṇu; Rāma strings Viṣṇu's bow; the arrow destroys Paraśurāma's worlds; his return to Mahendra).", "వాల్మీకి రామాయణం, బాలకాండ, 74–76 సర్గలు (అపశకునాలు; పరశురాముని సవాలు; శివ విష్ణువుల రెండు ధనుస్సులు; రాముడు విష్ణు ధనుస్సుకు నారి ఎక్కించడం; బాణం పరశురాముని లోకాలను నాశనం చేయడం; మహేంద్ర పర్వతానికి తిరుగు ప్రయాణం)."]
  ]
 ],
 remember: [
  ["{parashurama|Paraśurāma} challenged {rama|Rāma} to string the bow of {vishnu|Viṣṇu}.", "విష్ణు ధనుస్సుకు నారి ఎక్కించమని {parashurama|పరశురాముడు} {rama|రాముని} సవాలు చేశాడు."],
  ["Rāma strung it easily, and Paraśurāma recognised him as Viṣṇu himself.", "రాముడు సులభంగా నారి ఎక్కించాడు; పరశురాముడు ఆయనను స్వయంగా విష్ణువుగా గుర్తించాడు."],
  ["Rāma's arrow destroyed the worlds Paraśurāma had won; he returned to Mahendra.", "రాముని బాణం పరశురాముడు సంపాదించిన లోకాలను నాశనం చేసింది; ఆయన మహేంద్రానికి తిరిగి వెళ్ళాడు."]
 ],
 think: ["Paraśurāma said he was not ashamed to lose to the Lord. When is it right to accept defeat gracefully?", "భగవంతుని చేతిలో ఓడిపోవడం సిగ్గు కాదని పరశురాముడు అన్నాడు. ఓటమిని హుందాగా ఎప్పుడు స్వీకరించాలి?"]
},
{
 id: "jp-8", sage: "jamadagni", n: 8, order: 1708, date: "2026-10-23",
 title: "Teacher and Opponent of Bhīṣma — Ambā's Cause", titleTe: "భీష్ముని గురువు, ప్రత్యర్థి — అంబ కోసం",
 src: "Mahābhārata, Udyoga Parva",
 who: ["parashurama", "bhishma", "amba", "akritavrana", "ganga"],
 pages: [
  [
   ["p", "In the Mahābhārata, {parashurama|Paraśurāma} is the great teacher of weapons, living on the Mahendra mountain. Among those who had learned from him was {bhishma|Bhīṣma}, the son of Gaṅgā. And it was Bhīṣma whom he would one day have to face in battle.", "మహాభారతంలో {parashurama|పరశురాముడు} మహేంద్ర పర్వతంపై నివసించే అస్త్రవిద్యా మహాగురువు. ఆయన దగ్గర నేర్చుకున్నవారిలో గంగాపుత్రుడు {bhishma|భీష్ముడు} ఒకడు. ఒకరోజు యుద్ధంలో ఎదుర్కోవాల్సి వచ్చింది కూడా భీష్మునే."],
   ["p", "Bhīṣma had carried off the three princesses of Kāśī to marry his half-brother. The eldest, {amba|Ambā}, told him she had already given her heart to King Śālva, so Bhīṣma let her go. But Śālva refused her — “You were carried off by another man; I will not take you.” Ambā returned to Bhīṣma; he too refused, bound by his vow never to marry. Rejected by everyone, Ambā blamed Bhīṣma for ruining her life, and went into the forest seeking someone who could punish him.", "భీష్ముడు తన సవతి తమ్ముని పెళ్ళి కోసం కాశీ రాకుమార్తెలు ముగ్గురినీ తీసుకువచ్చాడు. పెద్దామె {amba|అంబ} తాను ఇప్పటికే సాల్వ రాజుకు మనసిచ్చానని చెప్పడంతో భీష్ముడు ఆమెను పంపేశాడు. కానీ సాల్వుడు “మరొకడు తీసుకుపోయిన నిన్ను నేను స్వీకరించను” అని తిరస్కరించాడు. అంబ భీష్ముని దగ్గరికి తిరిగి వచ్చింది; ఎన్నడూ పెళ్ళి చేసుకోనన్న ప్రతిజ్ఞకు కట్టుబడి అతనూ తిరస్కరించాడు. అందరూ తిరస్కరించడంతో తన జీవితాన్ని నాశనం చేసింది భీష్ముడేనని నిందించి, అతన్ని శిక్షించగలవారి కోసం అడవికి వెళ్ళింది."]
  ],
  [
   ["h", "Twenty-Three Days at Kurukṣetra", "కురుక్షేత్రంలో ఇరవై మూడు రోజులు"],
   ["p", "In the forest the sages, and Paraśurāma's companion {akritavrana|Akṛtavraṇa}, brought Ambā to Paraśurāma. Moved by her sorrow, he took up her cause. He called Bhīṣma to him and said: “Take this princess back and marry her.” Bhīṣma bowed to his teacher with deep respect — and refused. “I cannot break my vow, not even for you.” “Then fight me,” said Paraśurāma.", "అడవిలో మునులు, పరశురాముని సహచరుడు {akritavrana|అకృతవ్రణుడు} అంబను పరశురాముని దగ్గరికి తీసుకువచ్చారు. ఆమె దుఃఖానికి చలించి ఆయన ఆమె పక్షం వహించాడు. భీష్ముని పిలిపించి “ఈ రాకుమార్తెను తిరిగి తీసుకువెళ్ళి పెళ్ళి చేసుకో” అన్నాడు. భీష్ముడు గురువుకు అపారమైన గౌరవంతో నమస్కరించి — నిరాకరించాడు. “మీ కోసం కూడా నా ప్రతిజ్ఞను తెంచలేను.” “అయితే నాతో యుద్ధం చెయ్యి” అన్నాడు పరశురాముడు."],
   ["p", "They fought at Kurukṣetra for twenty-three days. Teacher and student were evenly matched — every weapon one released, the other answered. At last Bhīṣma took up a mighty weapon that would put his opponent to sleep. But voices from the sky, and the gods and sages, stopped him: “Do not use it on your guru.” Paraśurāma's own ancestors appeared and told him to lay down his weapons. {ganga|Gaṅgā}, Bhīṣma's mother, came too. And so the fight ended with neither side destroyed.", "వారు ఇరవై మూడు రోజులు కురుక్షేత్రంలో యుద్ధం చేశారు. గురుశిష్యులు సమఉజ్జీలు — ఒకరు ఏ అస్త్రం వదిలినా మరొకరు జవాబిచ్చారు. చివరికి భీష్ముడు ప్రత్యర్థిని నిద్రపుచ్చే మహాస్త్రాన్ని తీశాడు. కానీ ఆకాశవాణి, దేవతలు, మునులు అతన్ని ఆపారు: “నీ గురువుపై దాన్ని ప్రయోగించకు.” పరశురాముని పితరులే ప్రత్యక్షమై ఆయుధాలు విడవమని చెప్పారు. భీష్ముని తల్లి {ganga|గంగ} కూడా వచ్చింది. అలా ఎవరూ నశించకుండా యుద్ధం ముగిసింది."]
  ],
  [
   ["h", "“I Have Done What I Could”", "“నేను చేయగలిగింది చేశాను”"],
   ["p", "Paraśurāma turned to Ambā honestly. “Child, I fought with all my strength, and I could not defeat Bhīṣma. I have done what I could. Go to him and ask his protection.” But Ambā would not. She went away and did fierce tapas to Śiva, and was reborn as Śikhaṇḍin — who, years later, would stand before Bhīṣma at Kurukṣetra and bring about his fall.", "పరశురాముడు నిజాయితీగా అంబ వైపు తిరిగాడు. “అమ్మా, శక్తినంతా పెట్టి పోరాడాను; భీష్ముని ఓడించలేకపోయాను. నేను చేయగలిగింది చేశాను. అతని దగ్గరికే వెళ్ళి రక్షణ అడుగు.” కానీ అంబ వెళ్ళలేదు. వెళ్ళి శివునికై ఘోర తపస్సు చేసి శిఖండిగా మళ్ళీ పుట్టింది — ఏళ్ళ తర్వాత కురుక్షేత్రంలో భీష్ముని ఎదుట నిలబడి అతని పతనానికి కారణమైంది."],
   ["dyk", "🤝", "The great teacher who had once destroyed kings by the score took up a wronged woman's cause, fought his own student for her, and then admitted he could not win. It is one of the most human moments in Paraśurāma's long life.", "ఒకప్పుడు రాజులను గుంపులుగా నాశనం చేసిన మహాగురువు అన్యాయానికి గురైన ఒక స్త్రీ పక్షం వహించి, ఆమె కోసం తన శిష్యునితోనే పోరాడి, గెలవలేనని ఒప్పుకున్నాడు. పరశురాముని సుదీర్ఘ జీవితంలో అత్యంత మానవీయ క్షణాలలో ఇది ఒకటి."],
   ["src", "Mahābhārata, Udyoga Parva, the Ambopākhyāna (Ambā, Śālva and Bhīṣma; Akṛtavraṇa brings her to Paraśurāma; the twenty-three-day battle at Kurukṣetra; the prasvāpa weapon withheld; Paraśurāma's words to Ambā; her tapas and rebirth as Śikhaṇḍin).", "మహాభారతం, ఉద్యోగ పర్వం, అంబోపాఖ్యానం (అంబ, సాల్వుడు, భీష్ముడు; అకృతవ్రణుడు ఆమెను పరశురాముని దగ్గరికి తేవడం; కురుక్షేత్రంలో ఇరవై మూడు రోజుల యుద్ధం; ప్రయోగించని ప్రస్వాపాస్త్రం; అంబతో పరశురాముని మాటలు; ఆమె తపస్సు, శిఖండిగా పునర్జన్మ)."]
  ]
 ],
 remember: [
  ["Rejected by all, {amba|Ambā} sought {parashurama|Paraśurāma}'s help against {bhishma|Bhīṣma}.", "అందరూ తిరస్కరించిన {amba|అంబ} {bhishma|భీష్మునికి} వ్యతిరేకంగా {parashurama|పరశురాముని} సహాయం కోరింది."],
  ["Teacher and student fought for twenty-three days at Kurukṣetra until the gods and ancestors stopped them.", "దేవతలు, పితరులు ఆపేవరకు గురుశిష్యులు కురుక్షేత్రంలో ఇరవై మూడు రోజులు పోరాడారు."],
  ["Paraśurāma admitted he could not win; Ambā was reborn as Śikhaṇḍin.", "తాను గెలవలేనని పరశురాముడు ఒప్పుకున్నాడు; అంబ శిఖండిగా మళ్ళీ పుట్టింది."]
 ],
 think: ["Bhīṣma refused his own teacher to keep his vow. Is keeping a promise always right, even when it hurts someone?", "తన ప్రతిజ్ఞ నిలబెట్టుకోవడానికి భీష్ముడు తన గురువునే తిరస్కరించాడు. ఎవరినైనా బాధపెట్టినా మాట నిలబెట్టుకోవడం ఎప్పుడూ సరైనదేనా?"]
},
{
 id: "jp-9", sage: "jamadagni", n: 9, order: 1709, date: "2026-10-23",
 title: "Droṇa's Weapons and Karṇa's Curse", titleTe: "ద్రోణుని అస్త్రాలు, కర్ణునికి శాపం",
 src: "Mahābhārata, Ādi, Udyoga and Śānti Parvas",
 who: ["parashurama", "drona", "karna", "indra"],
 pages: [
  [
   ["h", "Everything Given Away", "సర్వస్వ దానం"],
   ["p", "The Ādi Parva tells that {drona|Droṇa}, a poor young brāhmaṇa, heard that {parashurama|Paraśurāma} was giving away all his wealth to brāhmaṇas, and hurried to the Mahendra mountain. He arrived too late — the gold, the land, everything was gone. “All I have left,” said Paraśurāma, “is my body and my weapons. Choose.” Droṇa chose the weapons. So Paraśurāma taught him every divine weapon he knew, with the secrets of using and withdrawing them — and Droṇa became the greatest teacher of arms in the age, teacher of the Kurus and the Pāṇḍavas.", "పేద యువ బ్రాహ్మణుడైన {drona|ద్రోణుడు}, {parashurama|పరశురాముడు} తన సంపదనంతా బ్రాహ్మణులకు దానం చేస్తున్నాడని విని మహేంద్ర పర్వతానికి పరుగెత్తాడని ఆది పర్వం చెబుతుంది. ఆలస్యంగా చేరాడు — బంగారం, భూమి, అన్నీ ఇచ్చేశాడు. “నా దగ్గర మిగిలింది నా శరీరం, నా అస్త్రాలు మాత్రమే. ఎంచుకో” అన్నాడు పరశురాముడు. ద్రోణుడు అస్త్రాలను ఎంచుకున్నాడు. అలా తనకు తెలిసిన ప్రతి దివ్యాస్త్రాన్నీ, వాటి ప్రయోగ ఉపసంహార రహస్యాలతో సహా పరశురాముడు అతనికి నేర్పాడు — ద్రోణుడు ఆ యుగంలో అస్త్రవిద్యకు అత్యున్నత గురువై, కురుపాండవులకు ఆచార్యుడయ్యాడు."]
  ],
  [
   ["h", "The Student Who Hid His Birth", "జన్మను దాచిన శిష్యుడు"],
   ["p", "The Śānti Parva tells the story of another student. {karna|Karṇa}, raised by a charioteer, longed to learn the brahmāstra. Droṇa would not teach it to him. So Karṇa went to Paraśurāma — who in those days taught only brāhmaṇas — and told him he was a brāhmaṇa of the Bhṛgu family. Paraśurāma accepted him and taught him gladly, for Karṇa was a brilliant student.", "మరో శిష్యుని కథ శాంతి పర్వం చెబుతుంది. సారథి పెంచిన {karna|కర్ణుడు} బ్రహ్మాస్త్రం నేర్చుకోవాలని తపించాడు. ద్రోణుడు అతనికి నేర్పలేదు. అందుకే ఆ రోజుల్లో బ్రాహ్మణులకు మాత్రమే బోధించే పరశురాముని దగ్గరికి వెళ్ళి తాను భృగు వంశపు బ్రాహ్మణుణ్ణి అని చెప్పాడు. కర్ణుడు ప్రతిభావంతుడైన శిష్యుడు కాబట్టి పరశురాముడు అతన్ని స్వీకరించి సంతోషంగా బోధించాడు."],
   ["p", "One day, tired, Paraśurāma lay down and slept with his head in Karṇa's lap. A stinging insect crawled onto Karṇa's thigh and began to bore into it. The pain was terrible, and blood flowed — but Karṇa did not move, so as not to wake his teacher. When Paraśurāma woke and saw the blood, he was not grateful; he was suspicious. “No brāhmaṇa could bear such pain without flinching. Only a kṣatriya could. Tell me the truth — who are you?”", "ఒకరోజు అలసిపోయిన పరశురాముడు కర్ణుని ఒడిలో తల పెట్టి నిద్రపోయాడు. ఒక కుట్టే పురుగు కర్ణుని తొడపైకి పాకి లోపలికి తొలవసాగింది. బాధ భయంకరంగా ఉంది, రక్తం కారింది — అయినా గురువు నిద్ర చెడకూడదని కర్ణుడు కదలలేదు. పరశురాముడు మేల్కొని రక్తం చూసి కృతజ్ఞత చూపలేదు; అనుమానించాడు. “ఏ బ్రాహ్మణుడూ ఇంత బాధను చలించకుండా భరించలేడు. క్షత్రియుడే భరించగలడు. నిజం చెప్పు — నువ్వెవరు?”"],
   ["p", "Karṇa confessed that he was a charioteer's son. Paraśurāma's anger flared at the lie. “Because you deceived me to get this knowledge, it will fail you when you need it most. At the moment of your greatest danger, you will forget the brahmāstra.” And so it happened: on the seventeenth day at Kurukṣetra, facing Arjuna, Karṇa could not remember it.", "తాను సారథి కుమారుణ్ణి అని కర్ణుడు ఒప్పుకున్నాడు. అబద్ధానికి పరశురాముని కోపం భగ్గుమంది. “ఈ విద్య కోసం నన్ను మోసం చేశావు కాబట్టి అత్యంత అవసరమైనప్పుడే అది నిన్ను విడిచిపెడుతుంది. నీకు అత్యంత ప్రమాదకర క్షణంలో బ్రహ్మాస్త్రాన్ని మరచిపోతావు.” అలాగే జరిగింది: కురుక్షేత్రంలో పదిహేడవ రోజున అర్జునుని ఎదుర్కొంటుండగా కర్ణునికి అది గుర్తురాలేదు."]
  ],
  [
   ["h", "A Voice for Peace", "శాంతి కోసం ఒక స్వరం"],
   ["p", "And yet the fierce Paraśurāma, in the Udyoga Parva, comes to the Kuru court on the eve of the war to argue for peace. He tells Duryodhana the story of a proud king named Dambhodbhava who challenged everyone to fight, and was humbled by the sages Nara and Nārāyaṇa with a handful of grass-blades. “Arjuna and Kṛṣṇa are Nara and Nārāyaṇa,” he warns. “Make peace.” Duryodhana would not listen.", "అయినా భయంకరుడైన పరశురాముడు ఉద్యోగ పర్వంలో యుద్ధం ముంగిట కురుసభకు వచ్చి శాంతి కోసం వాదిస్తాడు. అందరినీ యుద్ధానికి సవాలు చేసి, నరనారాయణ మునుల చేతిలో గుప్పెడు గడ్డిపోచలతో గర్వభంగమైన దంభోద్భవుడు అనే గర్విష్ఠ రాజు కథను దుర్యోధనునికి చెబుతాడు. “అర్జునుడు, కృష్ణుడే నరనారాయణులు. సంధి చేసుకో” అని హెచ్చరిస్తాడు. దుర్యోధనుడు వినలేదు."],
   ["dyk", "🐛", "The Śānti Parva adds that the insect was really an asura under an old curse, freed the moment Paraśurāma looked at it.", "ఆ పురుగు నిజానికి పాత శాపానికి గురైన అసురుడనీ, పరశురాముడు దాని వైపు చూడగానే విముక్తుడయ్యాడనీ శాంతి పర్వం జోడిస్తుంది."],
   ["src", "Mahābhārata, Ādi Parva (Droṇa receives Paraśurāma's weapons when he has given all else away). Śānti Parva (Nārada tells Yudhiṣṭhira how Karṇa came to Paraśurāma as a Bhārgava brāhmaṇa; the insect; the curse). Udyoga Parva (Paraśurāma in the Kuru assembly; the story of Dambhodbhava). Karṇa's forgetting is fulfilled in the Karṇa Parva.", "మహాభారతం, ఆది పర్వం (సర్వం దానం చేశాక ద్రోణునికి పరశురాముని అస్త్రాలు). శాంతి పర్వం (భార్గవ బ్రాహ్మణునిగా కర్ణుడు పరశురాముని దగ్గరికి వెళ్ళిన కథను నారదుడు ధర్మరాజుకు చెప్పడం; పురుగు; శాపం). ఉద్యోగ పర్వం (కురుసభలో పరశురాముడు; దంభోద్భవుని కథ). కర్ణుడు మరచిపోవడం కర్ణ పర్వంలో నెరవేరుతుంది."]
  ]
 ],
 remember: [
  ["Having given everything away, {parashurama|Paraśurāma} gave {drona|Droṇa} all his weapons.", "సర్వస్వం దానం చేశాక {parashurama|పరశురాముడు} తన అస్త్రాలన్నీ {drona|ద్రోణునికి} ఇచ్చాడు."],
  ["{karna|Karṇa} pretended to be a brāhmaṇa; bearing an insect's sting gave him away.", "{karna|కర్ణుడు} బ్రాహ్మణునిగా నటించాడు; పురుగు కాటును భరించడమే అతన్ని బయటపెట్టింది."],
  ["Cursed to forget the brahmāstra when most in need, Karṇa forgot it facing Arjuna.", "అత్యవసర సమయంలో బ్రహ్మాస్త్రం మరచిపోతావనే శాపం పొందిన కర్ణుడు అర్జునుని ఎదుట దాన్ని మరచాడు."]
 ],
 think: ["Karṇa's great endurance was what revealed his lie. Can a good quality ever give away a secret? Was the curse fair?", "కర్ణుని గొప్ప సహనమే అతని అబద్ధాన్ని బయటపెట్టింది. ఒక మంచి గుణం రహస్యాన్ని బయటపెట్టగలదా? ఆ శాపం న్యాయమైనదేనా?"]
},
{
 id: "jp-10", sage: "jamadagni", n: 10, order: 1710, date: "2026-10-23",
 title: "The Avatāra Who Waits", titleTe: "ఎదురుచూస్తున్న అవతారం",
 src: "Bhāgavata 1.3 · Purāṇas · living tradition",
 who: ["parashurama", "jamadagni", "ganesha", "vishnu"],
 pages: [
  [
   ["p", "{parashurama|Paraśurāma} is counted as the sixth of Viṣṇu's ten avatāras — after Vāmana and before Rāma. The Bhāgavata says that seeing kings grow hostile to brāhmaṇas, the Lord came as Paraśurāma and cleared the earth of them twenty-one times. But he is unlike any other avatāra in one way: he did not leave. He is one of the Ciranjīvīs, said to be still living on the Mahendra mountain, in tapas, until the end of this age.", "{parashurama|పరశురాముడు} విష్ణువు దశావతారాలలో ఆరవ అవతారం — వామనుని తర్వాత, రాముని ముందు. రాజులు బ్రాహ్మణ ద్రోహులుగా మారడం చూసి భగవంతుడు పరశురామునిగా వచ్చి ఇరవై ఒక్కసార్లు భూమిని వారి నుండి విముక్తం చేశాడని భాగవతం చెబుతుంది. కానీ ఒక విషయంలో ఆయన మరే అవతారం లాంటివాడూ కాదు: ఆయన వెళ్ళిపోలేదు. చిరంజీవులలో ఒకడు; ఈ యుగాంతం వరకు మహేంద్ర పర్వతంపై తపస్సులో జీవించే ఉన్నాడని చెబుతారు."],
   ["sglink", "The Ciranjīvīs", "చిరంజీవులు", "mk-7"]
  ],
  [
   ["h", "Later Stories", "తరువాతి కథలు"],
   ["p", "Later Purāṇas add more stories. One tells how Paraśurāma came to Kailāsa to see Śiva, and {ganesha|Gaṇeśa}, guarding the door, would not let him in. They fought, and Paraśurāma threw the axe that Śiva himself had given him. Gaṇeśa, recognising his father's weapon, would not let it be dishonoured — so he did not dodge, and took the blow on one tusk, which broke. And that, the story says, is why Gaṇeśa is Ekadanta, “the one-tusked.”", "తరువాతి పురాణాలు మరిన్ని కథలు జోడిస్తాయి. శివుని దర్శించడానికి పరశురాముడు కైలాసానికి వచ్చినప్పుడు ద్వారం కాపలా కాస్తున్న {ganesha|గణేశుడు} లోపలికి వెళ్ళనివ్వలేదని ఒక కథ. ఇద్దరూ పోరాడారు; స్వయంగా శివుడు ఇచ్చిన గొడ్డలిని పరశురాముడు విసిరాడు. తన తండ్రి ఆయుధమని గుర్తించిన గణేశుడు దానికి అవమానం జరగకూడదని తప్పించుకోకుండా ఒక దంతంపై ఆ దెబ్బను స్వీకరించాడు; దంతం విరిగింది. అందుకే గణేశుడు ఏకదంతుడని కథ చెబుతుంది."],
   ["p", "The Kalki Purāṇa, a late text, says that at the end of this Kali age, when Viṣṇu comes as Kalki, it is Paraśurāma who will teach him the arts of war — the sixth avatāra waiting through the ages to train the tenth.", "కలియుగాంతంలో విష్ణువు కల్కిగా వచ్చినప్పుడు ఆయనకు యుద్ధవిద్యలు నేర్పేది పరశురాముడేనని తరువాతి గ్రంథమైన కల్కి పురాణం చెబుతుంది — పదవ అవతారాన్ని తీర్చిదిద్దడానికి ఆరవ అవతారం యుగాల తరబడి ఎదురుచూస్తోంది."]
  ],
  [
   ["h", "Father and Son", "తండ్రీ కొడుకు"],
   ["p", "And {jamadagni|Jamadagni}? He shines in the sky as one of the Saptarṣis of our age — in the Bṛhadāraṇyaka Upaniṣad, he and Viśvāmitra are the two eyes. The calm sage who taught that forgiveness is a brāhmaṇa's strength, and his son who carried an axe across the earth, belong to one story: a family where a mix-up of two bowls put a warrior's arm in a sage's house, and where in the end the warrior, too, returned to tapas.", "మరి {jamadagni|జమదగ్ని}? మన యుగపు సప్తర్షులలో ఒకడిగా ఆకాశంలో ప్రకాశిస్తాడు — బృహదారణ్యక ఉపనిషత్తులో ఆయన, విశ్వామిత్రుడు రెండు కళ్ళు. క్షమే బ్రాహ్మణుని బలమని బోధించిన ప్రశాంత మునీ, భూమంతా గొడ్డలి మోసుకుని తిరిగిన ఆయన కుమారుడూ ఒకే కథకు చెందినవారు: రెండు చరువుల మార్పిడి ఒక ముని ఇంట్లో యోధుని భుజబలాన్ని ఉంచిన కుటుంబం; చివరికి ఆ యోధుడు కూడా తపస్సుకే తిరిగి వెళ్ళిన కుటుంబం."],
   ["dyk", "🪓", "Paraśurāma Jayantī is celebrated on Akṣaya Tṛtīyā, in the month of Vaiśākha.", "పరశురామ జయంతిని వైశాఖ మాసంలో అక్షయ తృతీయ నాడు జరుపుకుంటారు."],
   ["src", "Bhāgavata Purāṇa 1.3 (Paraśurāma among the avatāras) and 9.16. The Ciranjīvi tradition. Brahmāṇḍa Purāṇa and later tellings (Gaṇeśa's tusk). Kalki Purāṇa (Paraśurāma teaches Kalki). Bṛhadāraṇyaka Upaniṣad 2.2.4 (Jamadagni among the seven sages). Akṣaya Tṛtīyā is living practice.", "భాగవత పురాణం 1.3 (అవతారాలలో పరశురాముడు), 9.16. చిరంజీవి సంప్రదాయం. బ్రహ్మాండ పురాణం, తరువాతి కథనాలు (గణేశుని దంతం). కల్కి పురాణం (కల్కికి పరశురాముని బోధ). బృహదారణ్యక ఉపనిషత్తు 2.2.4 (సప్తర్షులలో జమదగ్ని). అక్షయ తృతీయ సజీవ ఆచారం."]
  ]
 ],
 remember: [
  ["{parashurama|Paraśurāma} is the sixth avatāra of {vishnu|Viṣṇu} and a Ciranjīvī, still in tapas on Mahendra.", "{parashurama|పరశురాముడు} {vishnu|విష్ణువు} ఆరవ అవతారం, చిరంజీవి; ఇప్పటికీ మహేంద్రంపై తపస్సులో ఉన్నాడు."],
  ["Later tellings say {ganesha|Gaṇeśa} lost a tusk to his axe, and that he will teach Kalki.", "ఆయన గొడ్డలికి {ganesha|గణేశుడు} దంతం కోల్పోయాడనీ, ఆయన కల్కికి బోధిస్తాడనీ తరువాతి కథనాలు చెబుతాయి."],
  ["{jamadagni|Jamadagni} shines among the Saptarṣis.", "{jamadagni|జమదగ్ని} సప్తర్షులలో ప్రకాశిస్తాడు."]
 ],
 think: ["Paraśurāma began in anger and ended in tapas. What helps a person turn from anger back to peace?", "పరశురాముడు కోపంతో మొదలై తపస్సుతో ముగించాడు. కోపం నుండి మళ్ళీ శాంతికి తిరగడానికి మనిషికి ఏది సహాయపడుతుంది?"]
}
]);
