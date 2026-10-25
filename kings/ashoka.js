// Great Kings — Aśoka. Retold by Hari Pokkuluri.
// Told from Aśoka's own inscriptions (the Major and Minor Rock Edicts, the Separate Kaliṅga Edicts and the
// Pillar Edicts), the Buddhist Aśokāvadāna, Dīpavaṃsa and Mahāvaṃsa, the Purāṇic king-lists and later history,
// with legends marked, in fresh original wording. Block format: see the top of ramayana.js and kings.js.
window.KING_PLAN = Object.assign(window.KING_PLAN || {}, { ashoka: [
  ["The Prince Nobody Expected", "Aśokāvadāna · Mahāvaṃsa"],
  ["Fierce Aśoka — the Struggle for the Throne", "Mahāvaṃsa · Aśokāvadāna · Rock Edict 5"],
  ["Kaliṅga", "Rock Edict 13"],
  ["The Turn to Dhamma", "Minor Rock Edicts · Bairāṭ inscription · Rock Edict 8"],
  ["Words Cut in Stone", "Rock Edicts 1, 2, 12 · Pillar Edicts · Separate Kaliṅga Edicts"],
  ["Aśoka in the Telugu Lands — and the Name Found Again", "Erragudi and Rājula Mandagiri edicts · Maski edict · Prinsep"],
  ["Mahinda and Saṅghamittā — to Laṅkā", "Dīpavaṃsa · Mahāvaṃsa"],
  ["Half a Fruit — the Last Gift", "Aśokāvadāna · Purāṇas"],
  ["Lions and a Wheel", "Sārnāth pillar · the Republic of India"]
] });
window.RMY_WHO = Object.assign({
  "ashoka": { "av": "☸️", "en": "Aśoka", "te": "అశోకుడు", "d": "The third Maurya emperor (ruled c. 268–232 BCE), grandson of Candragupta. After the bloody conquest of Kaliṅga he turned to the Buddha's teaching and ruled by dhamma, carving his messages on rocks and pillars across India.", "dt": "మూడవ మౌర్య చక్రవర్తి (సుమారు క్రీ.పూ. 268–232), చంద్రగుప్తుని మనుమడు. రక్తసిక్తమైన కళింగ విజయం తర్వాత బుద్ధుని బోధ వైపు తిరిగి ధమ్మంతో పాలించాడు; భారతదేశమంతటా శిలలపై, స్తంభాలపై తన సందేశాలు చెక్కించాడు." },
  "devi": { "av": "🌸", "en": "Devī of Vidiśā", "te": "విదిశ దేవి", "d": "A merchant's daughter of Vidiśā whom Aśoka married as a young prince; mother of Mahinda and Saṅghamittā.", "dt": "యువరాజుగా ఉన్నప్పుడు అశోకుడు పెళ్ళాడిన విదిశ వర్తకుని కుమార్తె; మహింద, సంఘమిత్రల తల్లి." },
  "mahinda": { "av": "🙏", "en": "Mahinda", "te": "మహేంద్రుడు (మహింద)", "d": "Aśoka's son, a Buddhist monk who carried the Buddha's teaching to Sri Lanka.", "dt": "అశోకుని కుమారుడు; బుద్ధుని బోధను శ్రీలంకకు తీసుకువెళ్ళిన బౌద్ధ భిక్షువు." },
  "sanghamitta": { "av": "🌳", "en": "Saṅghamittā", "te": "సంఘమిత్ర", "d": "Aśoka's daughter, a Buddhist nun who brought a branch of the Bodhi tree to Sri Lanka and founded the order of nuns there.", "dt": "అశోకుని కుమార్తె; బోధి వృక్షపు కొమ్మను శ్రీలంకకు తెచ్చి అక్కడ భిక్షుణీ సంఘాన్ని స్థాపించిన బౌద్ధ భిక్షుణి." },
  "buddha": { "av": "☸️", "en": "The Buddha", "te": "బుద్ధుడు", "d": "Siddhārtha Gautama, the Śākya prince who became the Awakened One and taught the path to the end of suffering, about two centuries before Aśoka.", "dt": "అశోకునికి సుమారు రెండు శతాబ్దాల ముందు, జ్ఞానోదయం పొంది దుఃఖ నివారణ మార్గాన్ని బోధించిన శాక్య రాకుమారుడు సిద్ధార్థ గౌతముడు." },
  "kunala": { "av": "👁️", "en": "Kuṇāla", "te": "కుణాలుడు", "d": "In Buddhist legend, Aśoka's son with beautiful eyes, blinded through his stepmother's plot, who forgave her.", "dt": "బౌద్ధ ఐతిహ్యంలో అందమైన కళ్ళు కల అశోకుని కుమారుడు; సవతి తల్లి కుట్ర వల్ల గుడ్డివాడై ఆమెను క్షమించాడు." }
}, window.RMY_WHO || {});
window.KING_CHAPTERS = (window.KING_CHAPTERS || []).concat([
{
 id: "as-1", king: "ashoka", n: 1, order: 201, date: "2026-10-24",
 title: "The Prince Nobody Expected", titleTe: "ఎవరూ ఊహించని రాకుమారుడు",
 src: "Aśokāvadāna · Mahāvaṃsa",
 who: ["ashoka", "bindusara", "chandragupta", "devi", "mahinda", "sanghamitta"],
 pages: [
  [
   ["p", "{ashoka|Aśoka} was the grandson of {chandragupta|Candragupta Maurya} and the son of {bindusara|Bindusāra}. Almost everything we know about his youth comes from Buddhist books written long after his death — the Aśokāvadāna, written in Sanskrit in north India, and the Pali chronicles of Sri Lanka, the Dīpavaṃsa and Mahāvaṃsa. They love him, so they tell his story as a great turning from darkness to light. We will follow them, and mark what is legend.", "{ashoka|అశోకుడు} {chandragupta|చంద్రగుప్త మౌర్యుని} మనుమడు, {bindusara|బిందుసారుని} కుమారుడు. అతని యవ్వనం గురించి మనకు తెలిసిన దాదాపు ప్రతిదీ అతని మరణం తర్వాత చాలా కాలానికి రాసిన బౌద్ధ గ్రంథాల నుండే వస్తుంది — ఉత్తర భారతంలో సంస్కృతంలో రాసిన అశోకావదానం, శ్రీలంక పాళీ చరిత్రలు దీపవంశం, మహావంశం. అవి అతన్ని ప్రేమిస్తాయి; అందుకే అతని కథను చీకటి నుండి వెలుగుకు జరిగిన మహా మార్పుగా చెబుతాయి. వాటిని అనుసరిస్తూ, ఐతిహ్యం ఏదో గుర్తిస్తూ వెళ్దాం."],
   ["p", "The Aśokāvadāna says his mother was a brāhmaṇa woman of Campā named Subhadrāṅgī, who was kept away from the king by jealous queens. When at last she bore the king a son, she said, “Now I am without sorrow” — *a-śoka* — and so the child was named Aśoka. The Mahāvaṃsa names his mother differently, as Dhammā.", "అతని తల్లి చంపా నగరానికి చెందిన సుభద్రాంగి అనే బ్రాహ్మణ స్త్రీ అనీ, అసూయపడిన రాణులు ఆమెను రాజుకు దూరంగా ఉంచారనీ అశోకావదానం చెబుతుంది. చివరికి ఆమె రాజుకు కుమారుని కన్నప్పుడు “ఇప్పుడు నేను శోకం లేనిదాన్ని” — *అ-శోక* — అందట; అందుకే ఆ బిడ్డకు అశోకుడు అని పేరు పెట్టారు. మహావంశం అతని తల్లి పేరును ధమ్మా అని వేరేగా చెబుతుంది."]
  ],
  [
   ["h", "Rough Skin and a Clear Eye", "గరుకు చర్మం, స్పష్టమైన దృష్టి"],
   ["p", "The Aśokāvadāna says the young prince had rough, unpleasant skin, and his father did not love him. When a sage was asked which of the princes would become king, he would not name anyone, for fear of the king — but he said, “The one who has the best seat, the best food and the best vessel will be king.” Aśoka was sitting on the bare ground, eating plain rice and curd from a clay pot. He understood at once: “The earth is the best seat; rice and curd the best food; a clay pot the best vessel. It will be me.”", "యువ రాకుమారునికి గరుకుగా, అసహ్యంగా ఉండే చర్మం ఉండేదనీ, తండ్రి అతన్ని ప్రేమించలేదనీ అశోకావదానం చెబుతుంది. రాకుమారులలో ఎవరు రాజవుతారని ఒక మునిని అడిగితే, రాజుకు భయపడి ఎవరి పేరూ చెప్పలేదు — కానీ “ఉత్తమ ఆసనం, ఉత్తమ ఆహారం, ఉత్తమ పాత్ర ఉన్నవాడే రాజవుతాడు” అన్నాడు. అశోకుడు నేలపై కూర్చుని మట్టి కుండలో సాదా పెరుగన్నం తింటున్నాడు. వెంటనే అర్థం చేసుకున్నాడు: “భూమే ఉత్తమ ఆసనం; పెరుగన్నమే ఉత్తమ ఆహారం; మట్టి కుండే ఉత్తమ పాత్ర. అది నేనే.”"]
  ],
  [
   ["h", "Governor of Ujjayinī", "ఉజ్జయిని పాలకుడు"],
   ["p", "Bindusāra sent the young Aśoka to deal with trouble in distant provinces. The Aśokāvadāna says he was sent to Takṣaśilā in the north-west, where the people had risen in revolt — and that they welcomed him, saying they had no quarrel with the king, only with his wicked ministers. The Mahāvaṃsa says he was made governor at Ujjayinī in Avanti.", "బిందుసారుడు యువకుడైన అశోకుణ్ణి దూర ప్రాంతాల సమస్యలను పరిష్కరించడానికి పంపాడు. ప్రజలు తిరుగుబాటు చేసిన వాయవ్యంలోని తక్షశిలకు అతన్ని పంపారనీ — తమకు రాజుతో కాదు, అతని దుష్ట మంత్రులతోనే గొడవ అని చెబుతూ వారు అతన్ని స్వాగతించారనీ అశోకావదానం చెబుతుంది. అవంతిలోని ఉజ్జయినికి అతన్ని పాలకునిగా నియమించారని మహావంశం చెబుతుంది."],
   ["p", "On the way to Ujjayinī, the Mahāvaṃsa says, he stopped at Vidiśā and married {devi|Devī}, the daughter of a merchant. She bore him a son, {mahinda|Mahinda}, and a daughter, {sanghamitta|Saṅghamittā} — two children who would one day carry their father's faith across the sea. Devī, it seems, was a devout Buddhist, and the great stūpa at Sāñcī, near Vidiśā, was later built on the hill near her home.", "ఉజ్జయినికి వెళ్ళే దారిలో విదిశలో ఆగి ఒక వర్తకుని కుమార్తె {devi|దేవిని} పెళ్ళాడాడని మహావంశం చెబుతుంది. ఆమె అతనికి కుమారుడు {mahinda|మహింద}ని, కుమార్తె {sanghamitta|సంఘమిత్రను} కన్నది — ఒకరోజు తండ్రి విశ్వాసాన్ని సముద్రం దాటి తీసుకువెళ్ళిన ఇద్దరు బిడ్డలు. దేవి భక్తిశ్రద్ధలు గల బౌద్ధురాలని తెలుస్తుంది; విదిశ దగ్గర ఆమె ఇంటికి సమీపంలోని కొండపైనే తర్వాత సాంచీ మహా స్తూపం నిర్మించబడింది."],
   ["dyk", "🍚", "In the legend, the prince who ate plain curd rice from a clay pot knew he would be king. Simplicity, not splendour, was the sign.", "ఐతిహ్యంలో మట్టి కుండలో సాదా పెరుగన్నం తిన్న రాకుమారునికే తాను రాజవుతానని తెలిసింది. వైభవం కాదు, నిరాడంబరతే సూచన."],
   ["src", "Aśokāvadāna (Subhadrāṅgī; the name a-śoka; his rough skin; the sage's riddle of the seat, food and vessel; the revolt at Takṣaśilā). Mahāvaṃsa 5 and 13 (his mother Dhammā; governor of Ujjayinī; Devī of Vidiśā; Mahinda and Saṅghamittā). These are Buddhist legends written centuries later.", "అశోకావదానం (సుభద్రాంగి; అ-శోక అనే పేరు; గరుకు చర్మం; ఆసనం, ఆహారం, పాత్ర గురించి ముని ప్రహేళిక; తక్షశిల తిరుగుబాటు). మహావంశం 5, 13 (తల్లి ధమ్మా; ఉజ్జయిని పాలకుడు; విదిశ దేవి; మహింద, సంఘమిత్ర). ఇవి శతాబ్దాల తర్వాత రాసిన బౌద్ధ ఐతిహ్యాలు."]
  ]
 ],
 remember: [
  ["{ashoka|Aśoka} was the son of {bindusara|Bindusāra} and grandson of {chandragupta|Candragupta}.", "{ashoka|అశోకుడు} {bindusara|బిందుసారుని} కుమారుడు, {chandragupta|చంద్రగుప్తుని} మనుమడు."],
  ["Legend says his mother named him “a-śoka,” without sorrow.", "తల్లి అతనికి “అ-శోక” — శోకం లేనివాడు — అని పేరు పెట్టిందని ఐతిహ్యం."],
  ["As governor of Ujjayinī he married {devi|Devī} of Vidiśā; their children were {mahinda|Mahinda} and {sanghamitta|Saṅghamittā}.", "ఉజ్జయిని పాలకునిగా విదిశ {devi|దేవిని} పెళ్ళాడాడు; వారి పిల్లలు {mahinda|మహింద}, {sanghamitta|సంఘమిత్ర}."]
 ],
 think: ["Aśoka's father did not love him, yet he became the greatest of the Mauryas. What helps a person grow strong when they are not favoured?", "అశోకుని తండ్రి అతన్ని ప్రేమించలేదు; అయినా మౌర్యులలో గొప్పవాడయ్యాడు. ఎవరూ ఆదరించనప్పుడు మనిషి బలంగా ఎదగడానికి ఏది సహాయపడుతుంది?"]
},
{
 id: "as-2", king: "ashoka", n: 2, order: 202, date: "2026-10-24",
 title: "Fierce Aśoka — the Struggle for the Throne", titleTe: "చండాశోకుడు — సింహాసనం కోసం పోరాటం",
 src: "Mahāvaṃsa · Aśokāvadāna · Rock Edict 5",
 who: ["ashoka", "bindusara"],
 pages: [
  [
   ["p", "When {bindusara|Bindusāra} died, around 273 BCE, the throne was not passed peacefully. The Aśokāvadāna says the dying king wanted his eldest son Susīma to rule, but the ministers, who disliked Susīma, set {ashoka|Aśoka} on the throne instead, and Susīma was killed trying to take the city. The Mahāvaṃsa tells a darker tale: that Aśoka killed ninety-nine of his brothers, sparing only one, Tissa.", "సుమారు క్రీ.పూ. 273లో {bindusara|బిందుసారుడు} మరణించినప్పుడు సింహాసనం ప్రశాంతంగా అప్పగించబడలేదు. మరణిస్తున్న రాజు తన పెద్ద కుమారుడు సుసీముడు పాలించాలని కోరాడనీ, కానీ సుసీముడంటే ఇష్టం లేని మంత్రులు బదులుగా {ashoka|అశోకుణ్ణి} సింహాసనంపై కూర్చోబెట్టారనీ, నగరాన్ని స్వాధీనం చేసుకోవడానికి ప్రయత్నిస్తూ సుసీముడు చంపబడ్డాడనీ అశోకావదానం చెబుతుంది. మహావంశం ఇంకా చీకటి కథ చెబుతుంది: అశోకుడు తొంభై తొమ్మిది మంది సోదరులను చంపి, తిస్సుడు అనే ఒక్కణ్ణి మాత్రమే విడిచిపెట్టాడని."],
   ["p", "Historians doubt the number. Aśoka's own inscriptions, cut years later, speak of officers who look after the households of his brothers and sisters — so some of them, at least, were still alive. And Buddhist writers liked to make the “before” as black as possible, so that the “after” would shine more brightly. What does seem true is that there was a struggle, and that his coronation came about four years after his father's death, around 269 BCE.", "చరిత్రకారులు ఆ సంఖ్యను అనుమానిస్తారు. ఏళ్ళ తర్వాత చెక్కించిన అశోకుని సొంత శాసనాలే అతని సోదరులు, సోదరీమణుల కుటుంబాలను చూసుకునే అధికారుల గురించి చెబుతాయి — అంటే కనీసం వారిలో కొందరు ఇంకా బతికే ఉన్నారు. “తర్వాతి” రూపం ఇంకా ప్రకాశవంతంగా కనిపించాలని బౌద్ధ రచయితలు “ముందటి” రూపాన్ని వీలైనంత నల్లగా చిత్రించడానికి ఇష్టపడేవారు. నిజమని అనిపించేది ఇది: ఒక పోరాటం జరిగింది; తండ్రి మరణం తర్వాత సుమారు నాలుగేళ్ళకు, సుమారు క్రీ.పూ. 269లో అతని పట్టాభిషేకం జరిగింది."]
  ],
  [
   ["h", "Caṇḍāśoka", "చండాశోకుడు"],
   ["p", "The Aśokāvadāna calls the young king *Caṇḍāśoka* — “Aśoka the Fierce” — and tells stories of his cruelty: that he cut down a whole grove of flowering aśoka trees in anger, and that he built a prison so terrible that it was called “Aśoka's hell,” where no one who entered came out alive. In the legend, a young monk thrown into that prison remained calm and unharmed in the boiling cauldron, and when the king came to see the wonder, the monk taught him — and the prison was torn down.", "అశోకావదానం యువ రాజును *చండాశోకుడు* — “ఉగ్ర అశోకుడు” — అని పిలుస్తూ అతని క్రూరత్వ కథలు చెబుతుంది: కోపంలో పూచిన అశోక వృక్షాల తోటనంతటినీ నరికించాడనీ, లోపలికి వెళ్ళినవారెవరూ బతికి బయటకు రాని, “అశోకుని నరకం” అని పిలిచేంత భయంకరమైన చెరసాలను కట్టించాడనీ. ఐతిహ్యంలో ఆ చెరసాలలోకి విసిరిన ఒక యువ భిక్షువు మరుగుతున్న పాత్రలో కూడా ప్రశాంతంగా, హాని లేకుండా ఉన్నాడనీ, ఆ అద్భుతాన్ని చూడడానికి రాజు వచ్చినప్పుడు భిక్షువు అతనికి బోధించాడనీ — చెరసాల కూల్చివేయబడిందనీ చెబుతుంది."],
   ["p", "These are legends. But they point at something Aśoka himself would later admit in his own words, carved in stone: that he had been a man of war and violence before he changed.", "ఇవి ఐతిహ్యాలు. కానీ తర్వాత అశోకుడే స్వయంగా రాతిపై చెక్కిన తన మాటల్లో ఒప్పుకున్న ఒక విషయాన్ని ఇవి సూచిస్తాయి: మారకముందు తాను యుద్ధం, హింసల మనిషినని."],
   ["dyk", "🌳", "The aśoka tree, with its bright orange-red flowers, is sacred in Hindu tradition too — Sītā was kept in the Aśoka grove (Aśoka-vana) in Laṅkā.", "ప్రకాశవంతమైన నారింజ-ఎరుపు పూలు కల అశోక వృక్షం హిందూ సంప్రదాయంలోనూ పవిత్రమైనది — లంకలో సీతను అశోకవనంలోనే ఉంచారు."],
   ["src", "Mahāvaṃsa 5 (the ninety-nine brothers killed; Tissa spared; the coronation four years later). Aśokāvadāna (Susīma; Caṇḍāśoka; the grove of aśoka trees; “Aśoka's hell” and the monk Samudra). Rock Edict 5 (officers caring for the households of Aśoka's brothers and sisters). The Buddhist stories are legends; historians doubt the killing of ninety-nine brothers.", "మహావంశం 5 (తొంభై తొమ్మిది సోదరుల వధ; తిస్సుడు విడిచిపెట్టబడడం; నాలుగేళ్ళ తర్వాత పట్టాభిషేకం). అశోకావదానం (సుసీముడు; చండాశోకుడు; అశోక వృక్షాల తోట; “అశోకుని నరకం”, భిక్షువు సముద్రుడు). 5వ శిలాశాసనం (అశోకుని సోదర సోదరీమణుల కుటుంబాలను చూసుకునే అధికారులు). బౌద్ధ కథలు ఐతిహ్యాలు; తొంభై తొమ్మిది సోదరుల వధను చరిత్రకారులు అనుమానిస్తారు."]
  ]
 ],
 remember: [
  ["After {bindusara|Bindusāra}'s death there was a struggle; {ashoka|Aśoka} was crowned about four years later.", "{bindusara|బిందుసారుని} మరణం తర్వాత పోరాటం జరిగింది; సుమారు నాలుగేళ్ళకు {ashoka|అశోకునికి} పట్టాభిషేకమైంది."],
  ["Buddhist legend calls him Caṇḍāśoka, the Fierce, and tells of “Aśoka's hell.”", "బౌద్ధ ఐతిహ్యం అతన్ని చండాశోకుడు — ఉగ్రుడు — అని పిలుస్తూ “అశోకుని నరకం” గురించి చెబుతుంది."],
  ["His own edicts show some brothers and sisters still alive, so the killing of ninety-nine is doubted.", "అతని సొంత శాసనాలు కొందరు సోదర సోదరీమణులు బతికే ఉన్నట్టు చూపిస్తాయి; అందుకే తొంభై తొమ్మిది మంది వధను అనుమానిస్తారు."]
 ],
 think: ["Buddhist writers made Aśoka's early life darker so his change would shine brighter. Why do storytellers sometimes do that? Is it fair?", "అశోకుని మార్పు ఇంకా ప్రకాశించాలని బౌద్ధ రచయితలు అతని తొలి జీవితాన్ని ఇంకా చీకటిగా చిత్రించారు. కథకులు ఒక్కోసారి ఎందుకు అలా చేస్తారు? అది న్యాయమేనా?"]
},
{
 id: "as-3", king: "ashoka", n: 3, order: 203, date: "2026-10-24",
 title: "Kaliṅga", titleTe: "కళింగ",
 src: "Rock Edict 13",
 who: ["ashoka"],
 pages: [
  [
   ["p", "Eight years after his coronation — around 261 BCE — {ashoka|Aśoka} attacked Kaliṅga, the land along the eastern coast, roughly today's Odisha and the northern edge of Andhra. Kaliṅga was rich and proud and had stayed outside the Maurya empire. Aśoka conquered it.", "పట్టాభిషేకం తర్వాత ఎనిమిదేళ్ళకు — సుమారు క్రీ.పూ. 261లో — {ashoka|అశోకుడు} తూర్పు తీరం వెంబడి ఉన్న కళింగపై — నేటి ఒడిశా, ఆంధ్ర ఉత్తర అంచు సుమారుగా — దండెత్తాడు. కళింగ సంపన్నమైనది, గర్వమైనది; మౌర్య సామ్రాజ్యానికి వెలుపలే ఉండిపోయింది. అశోకుడు దాన్ని జయించాడు."],
   ["p", "We do not need a legend for what happened next. Aśoka told it himself, in his Thirteenth Rock Edict, carved on rocks across his empire. A hundred and fifty thousand people, he says, were carried away as captives; a hundred thousand were killed; and many times that number died — of wounds, hunger and disease.", "తర్వాత ఏం జరిగిందో చెప్పడానికి మనకు ఐతిహ్యం అక్కర్లేదు. సామ్రాజ్యమంతటా శిలలపై చెక్కించిన తన పదమూడవ శిలాశాసనంలో అశోకుడే స్వయంగా చెప్పాడు. లక్షా యాభై వేల మంది బందీలుగా తీసుకుపోబడ్డారనీ; లక్ష మంది చంపబడ్డారనీ; దానికి ఎన్నో రెట్లు మంది — గాయాలతో, ఆకలితో, రోగాలతో — మరణించారనీ చెబుతాడు."]
  ],
  [
   ["h", "A King's Remorse", "ఒక రాజు పశ్చాత్తాపం"],
   ["p", "Then come words that no conqueror before him had ever carved in stone. Here they are, in our own words, close to their meaning: “After Kaliṅga was conquered, the Beloved of the Gods began to follow dhamma with all his heart. The Beloved of the Gods feels deep remorse for the conquest of Kaliṅga. For when an unconquered land is conquered, there is killing, death and carrying away of people — and this the Beloved of the Gods finds very painful and grievous.”", "తర్వాత అంతకుముందు ఏ విజేతా రాతిపై చెక్కని మాటలు వస్తాయి. వాటి అర్థానికి దగ్గరగా మన మాటల్లో ఇవిగో: “కళింగను జయించిన తర్వాత దేవానాంప్రియుడు మనస్ఫూర్తిగా ధమ్మాన్ని అనుసరించసాగాడు. కళింగ విజయానికి దేవానాంప్రియుడు తీవ్రంగా పశ్చాత్తాపపడుతున్నాడు. ఎందుకంటే జయించని దేశాన్ని జయించినప్పుడు హత్యలు, మరణాలు, ప్రజలను బందీలుగా తీసుకుపోవడం జరుగుతాయి — ఇది దేవానాంప్రియునికి ఎంతో బాధాకరమైనది, దుఃఖకరమైనది.”"],
   ["p", "And worse still, he says: even the good people — brāhmaṇas and śramaṇas, people who honoured their parents and elders and were kind to friends and servants — suffered, or lost those they loved. “Even if a hundredth or a thousandth part of those who suffered in Kaliṅga were to suffer now, it would weigh heavily on the mind of the Beloved of the Gods.”", "ఇంకా ఘోరమైనది, అతను అంటాడు: మంచివాళ్ళు కూడా — బ్రాహ్మణులు, శ్రమణులు, తల్లిదండ్రులనూ పెద్దలనూ గౌరవించేవారు, మిత్రులు, సేవకుల పట్ల దయగలవారు — బాధపడ్డారు, లేదా ప్రియమైనవారిని పోగొట్టుకున్నారు. “కళింగలో బాధపడినవారిలో వందో వంతు, వెయ్యో వంతు ఇప్పుడు బాధపడినా అది దేవానాంప్రియుని మనసుపై భారంగా ఉంటుంది.”"]
  ],
  [
   ["h", "Victory by Dhamma", "ధమ్మ విజయం"],
   ["p", "From then on, Aśoka says, the only conquest he wants is *dhamma-vijaya* — conquest by dhamma, by right conduct. He writes that he has already won such “victories” not only within his empire but far beyond it, naming five Greek kings in the west — Antiochus, Ptolemy, Antigonus, Magas and Alexander — and the Cōḷas and Pāṇḍyas in the south. He asks his sons and grandsons not to think of new conquests by the sword, and if they must conquer, to do it with patience and light punishment.", "అప్పటి నుండి తాను కోరే ఏకైక విజయం *ధమ్మ విజయం* — ధర్మం ద్వారా, సత్ప్రవర్తన ద్వారా విజయం — అని అశోకుడు అంటాడు. అలాంటి “విజయాలు” తన సామ్రాజ్యంలోనే కాదు, దాని అవతల చాలా దూరం వరకు ఇప్పటికే సాధించానని రాస్తూ పశ్చిమాన ఐదుగురు గ్రీకు రాజుల — ఆంటియోకస్, టాలెమీ, ఆంటిగోనస్, మగస్, అలెగ్జాండర్ — దక్షిణాన చోళ, పాండ్యుల పేర్లు చెబుతాడు. తన కుమారులు, మనుమలు కత్తితో కొత్త విజయాల గురించి ఆలోచించవద్దనీ, తప్పనిసరై జయించాల్సి వస్తే ఓర్పుతో, తేలికపాటి శిక్షలతో చేయాలనీ కోరుతాడు."],
   ["dyk", "🪨", "Strikingly, the Thirteenth Edict was not carved at the two edict-sites in Kaliṅga itself, Dhauli and Jaugaḍa. There, Aśoka put up special edicts instead, telling his officers to treat the people justly.", "విశేషమేమిటంటే కళింగలోని రెండు శాసన స్థలాలు — ధౌళి, జౌగడ — లో పదమూడవ శాసనాన్ని చెక్కలేదు. అక్కడ బదులుగా ప్రజలను న్యాయంగా చూడమని అధికారులకు చెప్పే ప్రత్యేక శాసనాలను అశోకుడు నిలిపాడు."],
   ["src", "Major Rock Edict 13 (the Kaliṅga war in the eighth year after coronation: 150,000 deported, 100,000 killed, many times more dead; Aśoka's remorse; dhamma-vijaya; the five Greek kings; the Cōḷas and Pāṇḍyas; advice to his descendants). It is found at Shāhbāzgaṛhī, Mānsehrā, Kālsī, Girnār, Erragudi and elsewhere, but not at Dhauli or Jaugaḍa.", "13వ ప్రధాన శిలాశాసనం (పట్టాభిషేకం తర్వాత ఎనిమిదవ ఏట కళింగ యుద్ధం: 1,50,000 మంది బందీలు, 1,00,000 మంది హతులు, ఎన్నో రెట్లు మృతులు; అశోకుని పశ్చాత్తాపం; ధమ్మ విజయం; ఐదుగురు గ్రీకు రాజులు; చోళ, పాండ్యులు; వారసులకు హితవు). ఇది షాబాజ్‌గఢీ, మాన్సెహ్రా, కాల్సీ, గిర్నార్, ఎర్రగుడి మొదలైనచోట్ల ఉంది; ధౌళి, జౌగడలలో లేదు."]
  ]
 ],
 remember: [
  ["Around 261 BCE {ashoka|Aśoka} conquered Kaliṅga; his own edict counts the dead and captured.", "సుమారు క్రీ.పూ. 261లో {ashoka|అశోకుడు} కళింగను జయించాడు; అతని సొంత శాసనమే మృతులనూ బందీలనూ లెక్కిస్తుంది."],
  ["In Rock Edict 13 he carved his deep remorse for the suffering he caused.", "13వ శిలాశాసనంలో తాను కలిగించిన బాధకు తన తీవ్ర పశ్చాత్తాపాన్ని చెక్కించాడు."],
  ["From then on he wanted only dhamma-vijaya, victory by right conduct.", "అప్పటి నుండి ధమ్మ విజయాన్ని — సత్ప్రవర్తన ద్వారా విజయాన్ని — మాత్రమే కోరాడు."]
 ],
 think: ["Aśoka admitted his wrong in public, carved in stone for everyone to read. Why is it so rare for powerful people to say “I was wrong”?", "అశోకుడు తన తప్పును బహిరంగంగా, అందరూ చదివేలా రాతిపై చెక్కించి ఒప్పుకున్నాడు. శక్తిమంతులు “నేను తప్పు చేశాను” అనడం ఎందుకు అంత అరుదు?"]
},
{
 id: "as-4", king: "ashoka", n: 4, order: 204, date: "2026-10-24",
 title: "The Turn to Dhamma", titleTe: "ధమ్మం వైపు మలుపు",
 src: "Minor Rock Edicts · Bairāṭ inscription · Rock Edict 8 · Lumbinī pillar",
 who: ["ashoka", "buddha"],
 pages: [
  [
   ["p", "What did {ashoka|Aśoka} turn to? He calls it *dhamma* — the Prakrit form of the Sanskrit *dharma*. In his edicts, dhamma is mostly something every person of every faith could accept: obedience to mother and father, respect for teachers and elders, kindness to servants and the poor, generosity to brāhmaṇas and śramaṇas alike, not harming living beings, truthfulness, and self-control.", "{ashoka|అశోకుడు} దేని వైపు తిరిగాడు? దాన్ని అతను *ధమ్మం* అంటాడు — సంస్కృత *ధర్మం*కు ప్రాకృత రూపం. అతని శాసనాలలో ధమ్మం ఎక్కువగా ఏ మతానికి చెందినవారైనా అంగీకరించగలిగేదే: తల్లిదండ్రులకు విధేయత, గురువులు, పెద్దల పట్ల గౌరవం, సేవకులు, పేదల పట్ల దయ, బ్రాహ్మణులకూ శ్రమణులకూ సమానంగా దానం, ప్రాణులకు హాని చేయకపోవడం, సత్యం, ఇంద్రియనిగ్రహం."],
   ["p", "But Aśoka himself became a follower of the {buddha|Buddha}. In one of his Minor Rock Edicts he says frankly: for more than two and a half years he was a lay follower but did not try very hard; then he drew close to the Saṅgha, the community of monks, and began to exert himself in earnest.", "కానీ అశోకుడు స్వయంగా {buddha|బుద్ధుని} అనుచరుడయ్యాడు. తన చిన్న శిలాశాసనాలలో ఒకదానిలో నిష్కపటంగా చెబుతాడు: రెండున్నర సంవత్సరాలకు పైగా ఉపాసకునిగా ఉన్నా పెద్దగా కృషి చేయలేదు; తర్వాత సంఘానికి — భిక్షు సమాజానికి — దగ్గరై మనస్ఫూర్తిగా శ్రమించడం మొదలుపెట్టాడు."]
  ],
  [
   ["h", "Pilgrimages Instead of Pleasure Tours", "విహార యాత్రలకు బదులు ధర్మ యాత్రలు"],
   ["p", "In the Eighth Rock Edict he says that kings of the past used to go on *vihāra-yātrās* — pleasure tours, for hunting and amusement. But in the tenth year after his coronation, he went to Sambodhi — Bodh Gayā, where the Buddha attained awakening — and since then he goes on *dhamma-yātrās* instead: visiting holy men, giving gifts to the old, meeting the people of the countryside and talking with them about dhamma.", "పూర్వపు రాజులు *విహార యాత్రలకు* — వేట, వినోదాల కోసం ఆనంద యాత్రలకు — వెళ్ళేవారని ఎనిమిదవ శిలాశాసనంలో చెబుతాడు. కానీ పట్టాభిషేకం తర్వాత పదవ ఏట తాను సంబోధికి — బుద్ధుడు జ్ఞానోదయం పొందిన బోధ్ గయకు — వెళ్ళాననీ, అప్పటి నుండి బదులుగా *ధమ్మ యాత్రలకు* వెళ్తున్నాననీ — సాధువులను దర్శిస్తూ, వృద్ధులకు దానాలు ఇస్తూ, గ్రామీణ ప్రజలను కలుసుకుని వారితో ధమ్మం గురించి మాట్లాడుతున్నాననీ చెబుతాడు."],
   ["p", "In the twentieth year of his reign he went to Lumbinī, where the Buddha was born, and set up a stone pillar there. It still stands, and its inscription says: “Here the Buddha, the Śākya sage, was born.” He made the village of Lumbinī free of the religious tax and reduced its land tax to one-eighth.", "పాలనలోని ఇరవయ్యవ ఏట బుద్ధుడు జన్మించిన లుంబినికి వెళ్ళి అక్కడ ఒక రాతి స్తంభం నిలిపాడు. అది ఇప్పటికీ నిలిచి ఉంది; “ఇక్కడ శాక్యముని బుద్ధుడు జన్మించాడు” అని దాని శాసనం చెబుతుంది. లుంబిని గ్రామాన్ని మత పన్ను నుండి విముక్తం చేసి, భూమి పన్నును ఎనిమిదో వంతుకు తగ్గించాడు."]
  ],
  [
   ["h", "A Letter to the Monks", "భిక్షువులకు ఒక లేఖ"],
   ["p", "At Bairāṭ in Rajasthan, a small stone carried a message from Aśoka addressed directly to the Saṅgha. In it he greets the monks, declares his faith in the Buddha, the Dhamma and the Saṅgha, and names seven teachings he hopes monks and nuns, and lay men and women, will often hear and reflect on. It is the only edict in which he speaks entirely as a Buddhist to Buddhists.", "రాజస్థాన్‌లోని బైరాట్‌లో ఒక చిన్న రాయి నేరుగా సంఘాన్ని ఉద్దేశించిన అశోకుని సందేశాన్ని మోసింది. అందులో భిక్షువులను పలకరించి, బుద్ధుడు, ధమ్మం, సంఘం పట్ల తన విశ్వాసాన్ని ప్రకటించి, భిక్షువులు, భిక్షుణులు, ఉపాసకులు, ఉపాసికలు తరచూ విని మననం చేయాలని తాను కోరుకునే ఏడు బోధలను పేర్కొంటాడు. పూర్తిగా ఒక బౌద్ధునిగా బౌద్ధులతో మాట్లాడే ఏకైక శాసనం ఇదే."],
   ["dyk", "🪨", "The Lumbinī pillar was found in 1896. Its inscription is the oldest record we have that names the Buddha's birthplace.", "లుంబిని స్తంభం 1896లో దొరికింది. బుద్ధుని జన్మస్థలాన్ని పేర్కొన్న మనకు లభించిన అతి ప్రాచీన రికార్డు దాని శాసనమే."],
   ["src", "Minor Rock Edict 1 (two and a half years as a lay follower; then close to the Saṅgha). Rock Edict 8 (vihāra-yātrā and dhamma-yātrā; the visit to Sambodhi in the tenth year). Lumbinī (Rummindei) pillar inscription (the visit in the twentieth year; “hida budhe jāte sakyamuni”; tax relief). Calcutta-Bairāṭ inscription (addressed to the Saṅgha; seven texts). Rock Edicts 3, 4, 9 and 11 (the content of dhamma).", "1వ చిన్న శిలాశాసనం (రెండున్నర ఏళ్ళు ఉపాసకుడు; తర్వాత సంఘానికి సమీపం). 8వ శిలాశాసనం (విహార యాత్ర, ధమ్మ యాత్ర; పదవ ఏట సంబోధి దర్శనం). లుంబిని (రుమ్మిందేయి) స్తంభ శాసనం (ఇరవయ్యవ ఏట దర్శనం; “హిద బుధే జాతే సక్యముని”; పన్ను సడలింపు). కలకత్తా-బైరాట్ శాసనం (సంఘానికి ఉద్దేశించినది; ఏడు బోధలు). 3, 4, 9, 11 శిలాశాసనాలు (ధమ్మ స్వరూపం)."]
  ]
 ],
 remember: [
  ["{ashoka|Aśoka}'s dhamma was right conduct any person could accept — respect, kindness, truth and not harming.", "{ashoka|అశోకుని} ధమ్మం ఎవరైనా అంగీకరించగల సత్ప్రవర్తన — గౌరవం, దయ, సత్యం, అహింస."],
  ["He became a follower of the {buddha|Buddha} and went to Bodh Gayā on pilgrimage.", "అతను {buddha|బుద్ధుని} అనుచరుడై బోధ్ గయకు యాత్ర చేశాడు."],
  ["His pillar at Lumbinī still says: “Here the Buddha was born.”", "లుంబినిలోని అతని స్తంభం ఇప్పటికీ “ఇక్కడ బుద్ధుడు జన్మించాడు” అని చెబుతుంది."]
 ],
 think: ["Aśoka replaced hunting trips with trips to meet his people. If a leader today did the same, what do you think they would learn?", "అశోకుడు వేట యాత్రలకు బదులు ప్రజలను కలిసే యాత్రలు చేశాడు. ఈ రోజు ఒక నాయకుడు అలా చేస్తే వారు ఏం నేర్చుకుంటారని మీరనుకుంటున్నారు?"]
},
{
 id: "as-5", king: "ashoka", n: 5, order: 205, date: "2026-10-24",
 title: "Words Cut in Stone", titleTe: "రాతిపై చెక్కిన మాటలు",
 src: "Rock Edicts 1, 2, 5, 12 · Pillar Edicts 5, 7 · Separate Kaliṅga Edicts",
 who: ["ashoka"],
 pages: [
  [
   ["p", "{ashoka|Aśoka} did something no Indian king had done before: he spoke directly to his people, in their own language, carved in stone where they could read it — or have it read to them. His edicts are spread from Afghanistan to Karnataka, from Gujarat to Odisha. Most are in Prakrit, written in the Brāhmī script; in the north-west, in the Kharoṣṭhī script; and at Kandahar, in Greek and Aramaic, so that the people there could understand. In almost all of them he calls himself *Devānaṃpiya Piyadasi* — “the Beloved of the Gods, of gracious look.”", "అంతకుముందు ఏ భారతీయ రాజూ చేయని పనిని అశోకుడు చేశాడు: ప్రజలతో వారి సొంత భాషలో, వారు చదవగలిగేచోట — లేదా వారికి చదివి వినిపించేచోట — రాతిపై చెక్కించి నేరుగా మాట్లాడాడు. అతని శాసనాలు అఫ్ఘానిస్తాన్ నుండి కర్ణాటక వరకు, గుజరాత్ నుండి ఒడిశా వరకు విస్తరించి ఉన్నాయి. చాలావరకు బ్రాహ్మీ లిపిలో ప్రాకృతంలో; వాయవ్యంలో ఖరోష్ఠీ లిపిలో; కాందహార్‌లో అక్కడి ప్రజలకు అర్థమయ్యేలా గ్రీకు, అరామిక్ భాషల్లో. దాదాపు అన్నిటిలోనూ తనను *దేవానాంపియ పియదసి* — “దేవతలకు ప్రియుడు, ప్రసన్న దృష్టి కలవాడు” — అని పిలుచుకుంటాడు."]
  ],
  [
   ["h", "Two Peacocks and a Deer", "రెండు నెమళ్ళు, ఒక జింక"],
   ["p", "The First Rock Edict has a homely confession. In the royal kitchen, Aśoka says, many hundreds of thousands of animals used to be killed every day for curries. Now only three are killed — two peacocks and a deer, and the deer not always — and soon even these will not be killed. The Fifth Pillar Edict lists many creatures he protected outright: parrots, wild ducks, geese, bats, tortoises, squirrels, and others.", "మొదటి శిలాశాసనంలో ఒక గృహస్థ ఒప్పుకోలు ఉంది. రాజ వంటశాలలో కూరల కోసం ప్రతిరోజూ ఎన్నో లక్షల ప్రాణులను చంపేవారని అశోకుడు అంటాడు. ఇప్పుడు మూడే చంపుతున్నారు — రెండు నెమళ్ళు, ఒక జింక; జింక కూడా ఎప్పుడూ కాదు — త్వరలో వీటిని కూడా చంపరు. అతను పూర్తిగా రక్షించిన ఎన్నో ప్రాణులను ఐదవ స్తంభ శాసనం పేర్కొంటుంది: చిలుకలు, అడవి బాతులు, హంసలు, గబ్బిలాలు, తాబేళ్ళు, ఉడుతలు మొదలైనవి."],
   ["p", "The Second Rock Edict says he arranged medical care for both people and animals, throughout his own empire and in the lands of neighbouring kings, and had medicinal herbs, roots and fruits planted wherever they were lacking. The Seventh Pillar Edict adds that he planted banyan trees along the roads to give shade to people and animals, planted mango groves, had wells dug every few miles, and built rest-houses for travellers.", "తన సామ్రాజ్యమంతటా, పొరుగు రాజుల దేశాలలోనూ మనుషులకూ జంతువులకూ వైద్య సదుపాయాలు ఏర్పాటు చేశాననీ, ఔషధ మూలికలు, దుంపలు, పండ్లు లేనిచోటల్లా నాటించాననీ రెండవ శిలాశాసనం చెబుతుంది. మనుషులకూ జంతువులకూ నీడనివ్వడానికి దారుల వెంబడి మర్రిచెట్లు నాటించాననీ, మామిడి తోటలు వేయించాననీ, కొన్ని మైళ్ళకు ఒకటిగా బావులు తవ్వించాననీ, ప్రయాణికుల కోసం సత్రాలు కట్టించాననీ ఏడవ స్తంభ శాసనం జోడిస్తుంది."]
  ],
  [
   ["h", "“All People Are My Children”", "“ప్రజలందరూ నా బిడ్డలే”"],
   ["p", "In the special edicts he put up in Kaliṅga, at Dhauli and Jaugaḍa, he wrote to his officers: “All people are my children. Just as I wish my own children every kind of welfare and happiness in this world and the next, so I wish the same for all people.” He told them to judge fairly, never to imprison or torture anyone without reason, and warned that anger, cruelty, haste, laziness and impatience are the faults that make an officer fail.", "కళింగలో ధౌళి, జౌగడలలో నిలిపిన ప్రత్యేక శాసనాలలో తన అధికారులకు రాశాడు: “ప్రజలందరూ నా బిడ్డలే. నా సొంత బిడ్డలకు ఈ లోకంలోనూ పరలోకంలోనూ అన్ని రకాల మేలు, సుఖం కోరుకున్నట్టే ప్రజలందరికీ అదే కోరుకుంటున్నాను.” న్యాయంగా తీర్పు చెప్పమనీ, కారణం లేకుండా ఎవరినీ ఖైదు చేయవద్దనీ, హింసించవద్దనీ చెప్పి — కోపం, క్రూరత్వం, తొందరపాటు, సోమరితనం, అసహనం అధికారిని విఫలం చేసే దోషాలని హెచ్చరించాడు."],
   ["p", "And in the Twelfth Rock Edict, he gave one of the oldest messages of religious harmony in the world: the Beloved of the Gods honours all faiths — ascetics and householders alike. Whoever praises his own faith and runs down another's, out of devotion to his own, in fact does great harm to his own. Concord is good: let people listen to each other's teachings and respect them.", "పన్నెండవ శిలాశాసనంలో ప్రపంచంలోని అతి ప్రాచీన మత సామరస్య సందేశాలలో ఒకదాన్ని ఇచ్చాడు: దేవానాంప్రియుడు అన్ని మతాలనూ — సన్యాసులనూ గృహస్థులనూ — గౌరవిస్తాడు. తన మతంపై భక్తితో దాన్ని పొగుడుతూ ఇతరుల మతాన్ని నిందించేవాడు నిజానికి తన మతానికే గొప్ప హాని చేస్తాడు. సమవాయం — కలిసి ఉండడం — మంచిది: జనం ఒకరి బోధలను మరొకరు విని గౌరవించాలి."],
   ["dyk", "🌳", "Aśoka also appointed special officers, the dhamma-mahāmātras, in the thirteenth year of his reign, to look after the welfare of people of every faith and to help prisoners and the poor.", "అన్ని మతాల ప్రజల సంక్షేమాన్ని చూడడానికి, ఖైదీలకూ పేదలకూ సహాయపడడానికి పాలనలోని పదమూడవ ఏట అశోకుడు ధమ్మ మహామాత్రులు అనే ప్రత్యేక అధికారులను కూడా నియమించాడు."],
   ["src", "Rock Edict 1 (the royal kitchen; two peacocks and a deer). Rock Edict 2 (medical care for people and animals; herbs planted). Rock Edict 5 (the dhamma-mahāmātras). Rock Edict 12 (honour all faiths; concord). Pillar Edicts 5 (protected animals) and 7 (banyans, mango groves, wells, rest-houses). Separate Kaliṅga Edicts at Dhauli and Jaugaḍa (“all people are my children”; the faults of officers). The Kandahar Greek and Aramaic edicts.", "1వ శిలాశాసనం (రాజ వంటశాల; రెండు నెమళ్ళు, ఒక జింక). 2వ శిలాశాసనం (మనుషులకూ జంతువులకూ వైద్యం; మూలికల నాటకం). 5వ శిలాశాసనం (ధమ్మ మహామాత్రులు). 12వ శిలాశాసనం (అన్ని మతాలను గౌరవించు; సమవాయం). 5వ స్తంభ శాసనం (రక్షిత ప్రాణులు), 7వ స్తంభ శాసనం (మర్రిచెట్లు, మామిడి తోటలు, బావులు, సత్రాలు). ధౌళి, జౌగడలలోని ప్రత్యేక కళింగ శాసనాలు (“ప్రజలందరూ నా బిడ్డలే”; అధికారుల దోషాలు). కాందహార్ గ్రీకు, అరామిక్ శాసనాలు."]
  ]
 ],
 remember: [
  ["{ashoka|Aśoka} carved his messages in the people's own languages from Afghanistan to Karnataka.", "{ashoka|అశోకుడు} అఫ్ఘానిస్తాన్ నుండి కర్ణాటక వరకు ప్రజల సొంత భాషల్లో తన సందేశాలు చెక్కించాడు."],
  ["He gave medical care to people and animals, and planted shade trees and dug wells along the roads.", "మనుషులకూ జంతువులకూ వైద్యం అందించి, దారుల వెంట నీడ చెట్లు నాటించి బావులు తవ్వించాడు."],
  ["“All people are my children”; and: one who runs down another's faith harms his own.", "“ప్రజలందరూ నా బిడ్డలే”; ఇతరుల మతాన్ని నిందించేవాడు తన మతానికే హాని చేస్తాడు."]
 ],
 think: ["Aśoka said that whoever runs down another person's faith harms his own. Why might speaking badly of others' beliefs hurt your own?", "ఇతరుల మతాన్ని నిందించేవాడు తన మతానికే హాని చేస్తాడని అశోకుడు అన్నాడు. ఇతరుల నమ్మకాల గురించి చెడుగా మాట్లాడడం మన నమ్మకానికే ఎందుకు హాని చేయవచ్చు?"]
},
{
 id: "as-6", king: "ashoka", n: 6, order: 206, date: "2026-10-24",
 title: "Aśoka in the Telugu Lands — and the Name Found Again", titleTe: "తెలుగు నేలపై అశోకుడు — మళ్ళీ దొరికిన పేరు",
 src: "Erragudi and Rājula Mandagiri edicts · Maski edict · Prinsep and Turnour",
 who: ["ashoka"],
 pages: [
  [
   ["p", "Some of {ashoka|Aśoka}'s most complete edicts are in today's Andhra Pradesh. At Erragudi, near Pattikonda in Kurnool district, the rocks of a low hill carry the full set of his fourteen Major Rock Edicts, together with a Minor Rock Edict. Some lines there are written in an unusual way — alternately left-to-right and right-to-left, like a plough turning at the end of each furrow. Nearby, at Rājula Mandagiri, there is another Minor Rock Edict.", "అశోకుని అత్యంత సంపూర్ణ శాసనాలలో కొన్ని నేటి ఆంధ్రప్రదేశ్‌లో ఉన్నాయి. కర్నూలు జిల్లా పత్తికొండ దగ్గర ఎర్రగుడిలో ఒక చిన్న కొండ శిలలు అతని పద్నాలుగు ప్రధాన శిలాశాసనాల పూర్తి సమితినీ, ఒక చిన్న శిలాశాసనాన్నీ మోస్తున్నాయి. అక్కడి కొన్ని పంక్తులు అసాధారణంగా — ప్రతి సాలు చివర నాగలి తిరిగినట్టు, ఒకసారి ఎడమ నుండి కుడికి, ఒకసారి కుడి నుండి ఎడమకు — రాయబడ్డాయి. దగ్గర్లోని రాజుల మందగిరిలో మరో చిన్న శిలాశాసనం ఉంది."],
   ["p", "So more than 2,200 years ago, the people of the Kurnool country could stand before these rocks and hear the emperor's words read aloud — about Kaliṅga, about kindness to animals, about respecting all faiths. Not long after, the great Buddhist centres of Andhra — Amarāvatī, Nāgārjunakoṇḍa, Bhaṭṭiprōlu — would rise along the Kṛṣṇā.", "అంటే 2,200 సంవత్సరాలకు పైగా క్రితమే కర్నూలు ప్రాంత ప్రజలు ఈ శిలల ఎదుట నిలబడి చక్రవర్తి మాటలు — కళింగ గురించి, జంతువుల పట్ల దయ గురించి, అన్ని మతాల పట్ల గౌరవం గురించి — బిగ్గరగా చదువుతుంటే వినగలిగారు. కొంతకాలానికే ఆంధ్రలోని మహా బౌద్ధ కేంద్రాలు — అమరావతి, నాగార్జునకొండ, భట్టిప్రోలు — కృష్ణా తీరం వెంబడి ఎదిగాయి."]
  ],
  [
   ["h", "A Forgotten Script", "మరచిపోయిన లిపి"],
   ["p", "For more than a thousand years, no one in India could read Aśoka's edicts. The Brāhmī script in which they were written had slowly changed into the many scripts of India — including Telugu — until its old letters were forgotten. Travellers saw the inscribed pillars and wondered what they said.", "వెయ్యి సంవత్సరాలకు పైగా భారతదేశంలో ఎవరూ అశోకుని శాసనాలను చదవలేకపోయారు. అవి రాయబడిన బ్రాహ్మీ లిపి నెమ్మదిగా భారతదేశపు ఎన్నో లిపులుగా — తెలుగుతో సహా — మారిపోయి, దాని పాత అక్షరాలు మరచిపోబడ్డాయి. యాత్రికులు శాసనాలున్న స్తంభాలను చూసి అవి ఏం చెబుతున్నాయో అని ఆశ్చర్యపోయేవారు."],
   ["p", "In 1837, the scholar James Prinsep in Calcutta, working from short donor inscriptions at Sāñcī, finally cracked the Brāhmī script. He could now read the edicts — but they were from a king called “Devānaṃpiya Piyadasi,” and no one knew who that was. That same year, George Turnour in Sri Lanka found in the Pali chronicle Dīpavaṃsa that “Piyadassi” was a name of Aśoka. The Beloved of the Gods had a name again.", "1837లో కలకత్తాలో పండితుడు జేమ్స్ ప్రిన్సెప్ సాంచీలోని చిన్న దాన శాసనాల సహాయంతో చివరికి బ్రాహ్మీ లిపిని ఛేదించాడు. ఇప్పుడు శాసనాలను చదవగలిగాడు — కానీ అవి “దేవానాంపియ పియదసి” అనే రాజువి; అతను ఎవరో ఎవరికీ తెలియదు. అదే ఏడాది శ్రీలంకలో జార్జ్ టర్నర్ పాళీ చరిత్ర దీపవంశంలో “పియదస్సి” అశోకుని పేరని కనుగొన్నాడు. దేవానాంప్రియునికి మళ్ళీ ఒక పేరు దొరికింది."]
  ],
  [
   ["h", "The Rock at Maski", "మస్కిలోని శిల"],
   ["p", "Even so, some scholars still doubted. Then, in 1915, a gold-mining engineer named C. Beadon found an inscription on a rock at Maski, in Raichur district of Karnataka. It began like the other Minor Rock Edicts — but here, the king called himself “Devānaṃpiya Asoka.” For the first time in stone, the name Aśoka appeared, and the question was settled. Later, more inscriptions with his name were found at Gujarra, Nittūr and Udegolam.", "అయినా కొందరు పండితులు ఇంకా అనుమానించారు. అప్పుడు 1915లో సి. బీడన్ అనే బంగారు గనుల ఇంజనీరు కర్ణాటకలోని రాయచూరు జిల్లా మస్కిలో ఒక శిలపై శాసనాన్ని కనుగొన్నాడు. అది ఇతర చిన్న శిలాశాసనాల్లాగే మొదలైంది — కానీ ఇక్కడ రాజు తనను “దేవానాంపియ అశోక” అని పిలుచుకున్నాడు. మొదటిసారి రాతిపై అశోకుని పేరు కనిపించింది; ప్రశ్న తీరిపోయింది. తర్వాత గుజ్జర, నిట్టూరు, ఉడేగొళంలలో అతని పేరుతో మరిన్ని శాసనాలు దొరికాయి."],
   ["dyk", "🔤", "Telugu letters descend from Brāhmī. Look at Aśoka's edicts closely, and a Telugu reader can sometimes spot the ancestors of familiar letters.", "తెలుగు అక్షరాలు బ్రాహ్మీ నుండే వచ్చాయి. అశోకుని శాసనాలను జాగ్రత్తగా చూస్తే, తెలుగు పాఠకులు ఒక్కోసారి తెలిసిన అక్షరాల పూర్వీకులను గుర్తించగలరు."],
   ["src", "The Erragudi Major and Minor Rock Edicts and the Rājula Mandagiri Minor Rock Edict (Kurnool district, Andhra Pradesh). James Prinsep's decipherment of Brāhmī (1837); George Turnour's identification of Piyadassi with Aśoka from the Dīpavaṃsa (1837). The Maski Minor Rock Edict (found 1915) naming “Devānaṃpiya Asoka”; the Gujarra, Nittūr and Udegolam inscriptions.", "ఎర్రగుడి ప్రధాన, చిన్న శిలాశాసనాలు, రాజుల మందగిరి చిన్న శిలాశాసనం (కర్నూలు జిల్లా, ఆంధ్రప్రదేశ్). జేమ్స్ ప్రిన్సెప్ బ్రాహ్మీ లిపి ఛేదన (1837); దీపవంశం ఆధారంగా పియదస్సిని అశోకునిగా జార్జ్ టర్నర్ గుర్తించడం (1837). “దేవానాంపియ అశోక” అని పేర్కొన్న మస్కి చిన్న శిలాశాసనం (1915లో లభ్యం); గుజ్జర, నిట్టూరు, ఉడేగొళం శాసనాలు."]
  ]
 ],
 remember: [
  ["Erragudi in Kurnool district has the full set of {ashoka|Aśoka}'s fourteen Major Rock Edicts.", "కర్నూలు జిల్లా ఎర్రగుడిలో {ashoka|అశోకుని} పద్నాలుగు ప్రధాన శిలాశాసనాల పూర్తి సమితి ఉంది."],
  ["James Prinsep deciphered Brāhmī in 1837; Turnour showed “Piyadasi” was Aśoka.", "1837లో జేమ్స్ ప్రిన్సెప్ బ్రాహ్మీని ఛేదించాడు; “పియదసి” అశోకుడేనని టర్నర్ చూపించాడు."],
  ["The Maski rock, found in 1915, gave the name “Asoka” in stone for the first time.", "1915లో దొరికిన మస్కి శిల మొదటిసారి రాతిపై “అశోక” అనే పేరును ఇచ్చింది."]
 ],
 think: ["For a thousand years no one could read Aśoka's words, though they were in plain sight. What else might be around us, waiting for someone to learn how to read it?", "అశోకుని మాటలు కళ్ళెదుటే ఉన్నా వెయ్యేళ్ళు ఎవరూ చదవలేకపోయారు. ఎవరైనా చదవడం నేర్చుకునేవరకు మన చుట్టూ ఇంకా ఏమి ఎదురుచూస్తూ ఉండవచ్చు?"]
},
{
 id: "as-7", king: "ashoka", n: 7, order: 207, date: "2026-10-24",
 title: "Mahinda and Saṅghamittā — to Laṅkā", titleTe: "మహింద, సంఘమిత్ర — లంకకు",
 src: "Dīpavaṃsa · Mahāvaṃsa · Rock Edict 13",
 who: ["ashoka", "mahinda", "sanghamitta"],
 pages: [
  [
   ["p", "The Pali chronicles of Sri Lanka tell that in Aśoka's reign a great council of monks was held at Pāṭaliputra, under the elder Moggaliputta Tissa, to settle disputes and purify the community. After it, they say, teachers were sent out to many lands — to Kashmir and Gandhāra, to the Himālaya, to the west, to Suvarṇabhūmi in the east, and to Laṅkā. Aśoka's own Thirteenth Edict confirms that he sent envoys of dhamma far beyond his borders.", "అశోకుని పాలనలో వివాదాలను పరిష్కరించి సంఘాన్ని శుద్ధి చేయడానికి స్థవిరుడు మొగ్గలిపుత్త తిస్సుని అధ్యక్షతన పాటలీపుత్రంలో భిక్షువుల మహాసభ జరిగిందని శ్రీలంక పాళీ చరిత్రలు చెబుతాయి. దాని తర్వాత ఎన్నో దేశాలకు — కాశ్మీరం, గాంధారం, హిమాలయాలు, పశ్చిమం, తూర్పున సువర్ణభూమి, లంక — గురువులను పంపారని చెబుతాయి. ధమ్మ దూతలను తన సరిహద్దుల అవతల చాలా దూరం వరకు పంపానని అశోకుని సొంత పదమూడవ శాసనమే ధృవీకరిస్తుంది."],
   ["p", "To Laṅkā went Aśoka's own son, {mahinda|Mahinda}, who had become a monk at twenty. The Mahāvaṃsa says that when he arrived, the Sri Lankan king Devānaṃpiya Tissa was out hunting on the hill of Mihintale. Mahinda called to him by name. To test the king's wisdom, he asked him a riddle about the mango trees around them — and, finding him clever, taught him the Buddha's teaching. The king became a Buddhist, and Buddhism has been the great faith of Sri Lanka ever since.", "లంకకు అశోకుని సొంత కుమారుడు — ఇరవై ఏళ్ళకే భిక్షువైన — {mahinda|మహింద} వెళ్ళాడు. అతను చేరినప్పుడు శ్రీలంక రాజు దేవానాంపియ తిస్సుడు మిహింతలే కొండపై వేటాడుతున్నాడని మహావంశం చెబుతుంది. మహింద అతన్ని పేరుతో పిలిచాడు. రాజు తెలివిని పరీక్షించడానికి చుట్టూ ఉన్న మామిడి చెట్ల గురించి ఒక ప్రహేళిక అడిగి, అతను తెలివైనవాడని తెలిసి బుద్ధుని బోధ ఉపదేశించాడు. రాజు బౌద్ధుడయ్యాడు; అప్పటి నుండి బౌద్ధం శ్రీలంక ప్రధాన మతంగా ఉంది."]
  ],
  [
   ["h", "A Branch of the Bodhi Tree", "బోధి వృక్షపు కొమ్మ"],
   ["p", "The queen of Laṅkā and her women also wished to become nuns, but only a nun could ordain them. So Aśoka's daughter {sanghamitta|Saṅghamittā}, herself a nun, sailed to Laṅkā. With her, the chronicles say, she carried a branch of the very Bodhi tree at Bodh Gayā under which the Buddha had attained awakening, in a golden vessel.", "లంక రాణి, ఆమె స్త్రీలు కూడా భిక్షుణులు కావాలనుకున్నారు; కానీ భిక్షుణి మాత్రమే వారికి దీక్ష ఇవ్వగలదు. అందుకే స్వయంగా భిక్షుణి అయిన అశోకుని కుమార్తె {sanghamitta|సంఘమిత్ర} లంకకు ప్రయాణించింది. బుద్ధుడు జ్ఞానోదయం పొందిన బోధ్ గయలోని బోధి వృక్షపు కొమ్మను బంగారు పాత్రలో తనతో తీసుకువెళ్ళిందని చరిత్రలు చెబుతాయి."],
   ["p", "That branch was planted at Anurādhapura, and the tree that grew from it — the Jaya Śrī Mahā Bodhi — is still living and worshipped today. It is often called the oldest living tree in the world that was planted by human hands on a known date.", "ఆ కొమ్మను అనురాధపురంలో నాటారు; దాని నుండి పెరిగిన వృక్షం — జయ శ్రీ మహా బోధి — ఈ రోజుకీ జీవించి ఉంది, పూజలందుకుంటోంది. తెలిసిన తేదీన మనుషులు నాటిన, ప్రపంచంలో జీవించి ఉన్న అతి ప్రాచీన వృక్షంగా దాన్ని తరచూ చెబుతారు."]
  ],
  [
   ["h", "Eighty-Four Thousand Stūpas", "ఎనభై నాలుగు వేల స్తూపాలు"],
   ["p", "Buddhist legend says that Aśoka opened the stūpas where the Buddha's relics had been placed, divided the relics, and built eighty-four thousand new stūpas over them all across his empire in a single day. The number is a legend — but archaeologists have found that many great stūpas, such as those at Sāñcī and Bhārhut, began as brick mounds in Aśoka's time.", "బుద్ధుని అస్థికలు ఉంచిన స్తూపాలను అశోకుడు తెరిచి, అస్థికలను పంచి, సామ్రాజ్యమంతటా ఒకే రోజులో వాటిపై ఎనభై నాలుగు వేల కొత్త స్తూపాలు కట్టించాడని బౌద్ధ ఐతిహ్యం చెబుతుంది. ఆ సంఖ్య ఐతిహ్యం — కానీ సాంచీ, భార్హుత్ వంటి ఎన్నో మహా స్తూపాలు అశోకుని కాలంలో ఇటుక దిబ్బలుగా మొదలయ్యాయని పురాతత్వ శాస్త్రవేత్తలు కనుగొన్నారు."],
   ["dyk", "⛵", "Saṅghamittā Day is still celebrated in Sri Lanka on the full moon of Unduvap (December), remembering the princess who brought the Bodhi tree.", "బోధి వృక్షాన్ని తెచ్చిన రాకుమార్తెను స్మరిస్తూ శ్రీలంకలో ఉందువప్ (డిసెంబర్) పౌర్ణమి నాడు ఇప్పటికీ సంఘమిత్ర దినోత్సవం జరుపుకుంటారు."],
   ["src", "Dīpavaṃsa and Mahāvaṃsa 5, 12–20 (the Third Council under Moggaliputta Tissa; the missions; Mahinda at Mihintale and King Devānaṃpiya Tissa; Saṅghamittā and the Bodhi branch at Anurādhapura). Rock Edict 13 (envoys of dhamma). Aśokāvadāna (the 84,000 stūpas — legend). Excavations at Sāñcī and elsewhere (Mauryan stūpa cores).", "దీపవంశం, మహావంశం 5, 12–20 (మొగ్గలిపుత్త తిస్సుని అధ్యక్షతన మూడవ సంగీతి; ధర్మప్రచార యాత్రలు; మిహింతలేలో మహింద, దేవానాంపియ తిస్స రాజు; సంఘమిత్ర, అనురాధపురంలో బోధి కొమ్మ). 13వ శిలాశాసనం (ధమ్మ దూతలు). అశోకావదానం (84,000 స్తూపాలు — ఐతిహ్యం). సాంచీ మొదలైనచోట్ల తవ్వకాలు (మౌర్య స్తూప కేంద్రాలు)."]
  ]
 ],
 remember: [
  ["{ashoka|Aśoka}'s son {mahinda|Mahinda} took the Buddha's teaching to Sri Lanka.", "{ashoka|అశోకుని} కుమారుడు {mahinda|మహింద} బుద్ధుని బోధను శ్రీలంకకు తీసుకువెళ్ళాడు."],
  ["His daughter {sanghamitta|Saṅghamittā} carried a branch of the Bodhi tree to Anurādhapura.", "ఆయన కుమార్తె {sanghamitta|సంఘమిత్ర} బోధి వృక్షపు కొమ్మను అనురాధపురానికి తీసుకువెళ్ళింది."],
  ["The tree grown from it, the Jaya Śrī Mahā Bodhi, is still alive.", "దాని నుండి పెరిగిన జయ శ్రీ మహా బోధి ఇప్పటికీ జీవించి ఉంది."]
 ],
 think: ["Aśoka sent his own son and daughter to carry his message across the sea. What does it say about a person when they give their dearest to a cause?", "అశోకుడు తన సందేశాన్ని సముద్రం దాటి తీసుకువెళ్ళడానికి సొంత కుమారుణ్ణీ కుమార్తెనూ పంపాడు. ఒక లక్ష్యం కోసం తమకు అత్యంత ప్రియమైనవారిని ఇచ్చే వ్యక్తి గురించి అది ఏం చెబుతుంది?"]
},
{
 id: "as-8", king: "ashoka", n: 8, order: 208, date: "2026-10-24",
 title: "Half a Fruit — the Last Gift", titleTe: "సగం ఉసిరికాయ — చివరి దానం",
 src: "Aśokāvadāna · Rājataraṅgiṇī 1 · Purāṇas · Harṣacarita",
 who: ["ashoka", "kunala"],
 pages: [
  [
   ["h", "Kuṇāla's Eyes", "కుణాలుని కళ్ళు"],
   ["p", "The Aśokāvadāna tells sad stories of {ashoka|Aśoka}'s old age. His son {kunala|Kuṇāla} had eyes so beautiful that he was named after the Himālayan kuṇāla bird. One of Aśoka's younger queens, Tiṣyarakṣitā, fell in love with the prince; when he refused her, she plotted revenge. While Kuṇāla was away governing Takṣaśilā, she sent an order sealed with the king's seal, commanding that the prince's eyes be put out. The officers wept, but Kuṇāla, seeing the royal seal, obeyed, and was blinded.", "అశోకుని వృద్ధాప్యం గురించి అశోకావదానం విషాద కథలు చెబుతుంది. ఆయన కుమారునికి ఎంత అందమైన కళ్ళంటే హిమాలయ కుణాల పక్షి పేరు మీద {kunala|కుణాలుడు} అని పేరు పెట్టారు. అశోకుని చిన్న రాణులలో ఒకరైన తిష్యరక్షిత ఆ రాకుమారుణ్ణి కోరింది; అతను తిరస్కరించడంతో ప్రతీకారానికి కుట్ర పన్నింది. కుణాలుడు తక్షశిల పాలనకు దూరంగా ఉన్నప్పుడు రాజముద్రతో ఒక ఆజ్ఞ పంపి రాకుమారుని కళ్ళు పెకలించమని ఆదేశించింది. అధికారులు ఏడ్చారు; కానీ రాజముద్ర చూసి కుణాలుడు పాటించాడు; గుడ్డివాడయ్యాడు."],
   ["p", "He wandered back to Pāṭaliputra as a blind singer with his wife, and sang outside the palace. Aśoka recognised his son's voice. When he learned the truth, he wanted to punish the queen terribly — but Kuṇāla begged him to forgive her, and said he felt no anger at all. The legend says that by the power of his forgiveness, his sight was restored.", "భార్యతో కలిసి గుడ్డి గాయకునిగా పాటలీపుత్రానికి తిరిగి వచ్చి రాజభవనం బయట పాడాడు. కొడుకు గొంతును అశోకుడు గుర్తుపట్టాడు. నిజం తెలిశాక రాణిని ఘోరంగా శిక్షించాలనుకున్నాడు — కానీ ఆమెను క్షమించమని కుణాలుడు వేడుకుని, తనకు ఏమాత్రం కోపం లేదన్నాడు. అతని క్షమాశక్తి వల్ల అతనికి చూపు తిరిగి వచ్చిందని ఐతిహ్యం చెబుతుంది."]
  ],
  [
   ["h", "Lord of Half a Fruit", "సగం ఉసిరికాయకు ప్రభువు"],
   ["p", "In his last years, the Aśokāvadāna says, Aśoka longed to give a hundred crores of gold to the Saṅgha, and kept giving from the treasury. His ministers, afraid the kingdom would be emptied, persuaded the crown prince to stop the gifts. Bit by bit, the old emperor was allowed less and less — until at last he had nothing but half an *āmalaka* fruit, an Indian gooseberry, in his hand.", "తన చివరి సంవత్సరాలలో అశోకుడు సంఘానికి వంద కోట్ల బంగారం దానం చేయాలని తపించి, కోశాగారం నుండి ఇస్తూనే ఉన్నాడని అశోకావదానం చెబుతుంది. రాజ్యం ఖాళీ అవుతుందని భయపడిన మంత్రులు దానాలను ఆపమని యువరాజును ఒప్పించారు. కొద్దికొద్దిగా వృద్ధ చక్రవర్తికి అనుమతి తగ్గుతూ వచ్చింది — చివరికి ఆయన చేతిలో సగం *ఆమలకం* — ఉసిరికాయ — తప్ప ఏమీ లేదు."],
   ["p", "He called his ministers and asked: “Who is lord of this land now?” “You are, Your Majesty.” Aśoka shook his head, with tears in his eyes. “No. I have fallen from lordship. I am lord only of this half fruit.” And he sent that half āmalaka to the monks of the Kukkuṭārāma monastery as his last gift, asking them to share it. The monks ground it up and put it into their soup, so that every one of them could have a little.", "మంత్రులను పిలిచి అడిగాడు: “ఇప్పుడు ఈ దేశానికి ప్రభువు ఎవరు?” “మీరే, మహారాజా.” కళ్ళలో నీళ్ళతో అశోకుడు తల అడ్డంగా ఊపాడు. “కాదు. నేను ప్రభుత్వం నుండి జారిపోయాను. ఈ సగం ఉసిరికాయకు మాత్రమే నేను ప్రభువును.” ఆ సగం ఉసిరికాయను చివరి దానంగా కుక్కుటారామ విహారపు భిక్షువులకు పంపి, దాన్ని పంచుకోమని కోరాడు. ప్రతి ఒక్కరికీ కొంచెం దక్కేలా భిక్షువులు దాన్ని నూరి తమ పులుసులో కలిపారు."]
  ],
  [
   ["h", "After Aśoka", "అశోకుని తర్వాత"],
   ["p", "Aśoka died around 232 BCE, after ruling for some thirty-seven years. In Kashmir, Kalhaṇa's Rājataraṅgiṇī remembers him in a different way — as a king who built a city there and restored a shrine of Śiva, and whose son Jalauka was a great devotee of Śiva. The Purāṇas list him among the Maurya kings as Aśokavardhana.", "సుమారు ముప్పై ఏడు సంవత్సరాలు పాలించి అశోకుడు సుమారు క్రీ.పూ. 232లో మరణించాడు. కాశ్మీరంలో కల్హణుని రాజతరంగిణి ఆయనను వేరే విధంగా గుర్తుచేస్తుంది — అక్కడ ఒక నగరాన్ని నిర్మించి, ఒక శివాలయాన్ని పునరుద్ధరించిన రాజుగా; ఆయన కుమారుడు జలౌకుడు గొప్ప శివభక్తుడని. పురాణాలు మౌర్య రాజులలో ఆయనను అశోకవర్ధనుడిగా పేర్కొంటాయి."],
   ["p", "The empire did not long survive him. It broke into parts under weaker kings, and around 185 BCE the last Maurya, Bṛhadratha, was killed by his own general Puṣyamitra Śuṅga while reviewing the army — as the poet Bāṇa recalls in the Harṣacarita. The dynasty Candragupta founded had lasted about 137 years.", "ఆయన తర్వాత సామ్రాజ్యం ఎక్కువకాలం నిలవలేదు. బలహీన రాజుల కింద ముక్కలైంది; సుమారు క్రీ.పూ. 185లో చివరి మౌర్యుడు బృహద్రథుడు సైన్యాన్ని పరిశీలిస్తుండగా అతని సొంత సేనాని పుష్యమిత్ర శుంగుడు అతన్ని చంపాడు — కవి బాణుడు హర్షచరితంలో గుర్తుచేసినట్టు. చంద్రగుప్తుడు స్థాపించిన వంశం సుమారు 137 సంవత్సరాలు నిలిచింది."],
   ["dyk", "🍈", "The story of the half āmalaka is still told by Buddhist teachers about generosity: the emperor who once gave away kingdoms ended by giving away half a fruit — and it was counted as great a gift as any.", "సగం ఉసిరికాయ కథను బౌద్ధ గురువులు దానం గురించి ఇప్పటికీ చెబుతారు: ఒకప్పుడు రాజ్యాలనే దానం చేసిన చక్రవర్తి చివరికి సగం పండును దానం చేశాడు — అదీ ఏ దానంతోనైనా సమానంగా గొప్పదిగా లెక్కించబడింది."],
   ["src", "Aśokāvadāna (Kuṇāla and Tiṣyarakṣitā; Kuṇāla's forgiveness; the gifts stopped; the half āmalaka sent to the Kukkuṭārāma). Kalhaṇa, Rājataraṅgiṇī 1 (Aśoka in Kashmir; Jalauka). Viṣṇu Purāṇa 4.24 (Aśokavardhana among the Mauryas). Bāṇa, Harṣacarita 6 (Bṛhadratha killed by his general). These Buddhist and Kashmiri stories are traditional tellings written long after Aśoka.", "అశోకావదానం (కుణాలుడు, తిష్యరక్షిత; కుణాలుని క్షమ; దానాల నిలిపివేత; కుక్కుటారామానికి సగం ఉసిరికాయ). కల్హణుని రాజతరంగిణి 1 (కాశ్మీరంలో అశోకుడు; జలౌకుడు). విష్ణు పురాణం 4.24 (మౌర్యులలో అశోకవర్ధనుడు). బాణుని హర్షచరితం 6 (సేనాని చేతిలో బృహద్రథుని వధ). ఈ బౌద్ధ, కాశ్మీర కథలు అశోకుని తర్వాత చాలా కాలానికి రాసిన సంప్రదాయ కథనాలు."]
  ]
 ],
 remember: [
  ["In legend, {kunala|Kuṇāla} was blinded through a queen's plot and asked his father to forgive her.", "ఐతిహ్యంలో ఒక రాణి కుట్ర వల్ల {kunala|కుణాలుడు} గుడ్డివాడై, ఆమెను క్షమించమని తండ్రిని వేడుకున్నాడు."],
  ["At the end, {ashoka|Aśoka} had only half an āmalaka fruit, and gave it to the monks.", "చివరికి {ashoka|అశోకుని} దగ్గర సగం ఉసిరికాయ మాత్రమే మిగిలింది; దాన్ని భిక్షువులకు ఇచ్చేశాడు."],
  ["He died around 232 BCE; the Maurya line ended around 185 BCE.", "సుమారు క్రీ.పూ. 232లో మరణించాడు; మౌర్య వంశం సుమారు క్రీ.పూ. 185లో ముగిసింది."]
 ],
 think: ["Aśoka said he was lord only of half a fruit — and still gave it away. Can a very small gift be as great as a very big one? When?", "తాను సగం పండుకు మాత్రమే ప్రభువునని అశోకుడు అన్నాడు — అయినా దాన్ని ఇచ్చేశాడు. చాలా చిన్న దానం చాలా పెద్ద దానమంత గొప్పది కాగలదా? ఎప్పుడు?"]
},
{
 id: "as-9", king: "ashoka", n: 9, order: 209, date: "2026-10-24",
 title: "Lions and a Wheel", titleTe: "సింహాలు, ఒక చక్రం",
 src: "Sārnāth pillar · Muṇḍaka Upaniṣad 3.1.6 · the Republic of India",
 who: ["ashoka", "buddha"],
 pages: [
  [
   ["p", "At Sārnāth, near Vārāṇasī, where the {buddha|Buddha} gave his first teaching, {ashoka|Aśoka} set up a tall polished stone pillar. On top of it stood a wonderful capital: four lions sitting back to back, facing the four directions. Below them, on a round band, are four smaller animals — an elephant, a bull, a horse and a lion — walking between four wheels.", "బుద్ధుడు తొలి బోధ చేసిన వారణాసి దగ్గరి సారనాథ్‌లో {ashoka|అశోకుడు} మెరుగుపెట్టిన ఎత్తైన రాతి స్తంభాన్ని నిలిపాడు. దాని పైన అద్భుతమైన శీర్షం ఉంది: నాలుగు దిక్కులకు అభిముఖంగా వీపులు కలిపి కూర్చున్న నాలుగు సింహాలు. వాటి కింద, ఒక గుండ్రని పట్టీపై, నాలుగు చక్రాల మధ్య నడుస్తున్న నాలుగు చిన్న జంతువులు — ఏనుగు, ఎద్దు, గుర్రం, సింహం."],
   ["p", "The pillar had fallen and lay buried for centuries. It was dug up in 1904–05, and the lion capital — carved from a single block of sandstone and polished so brightly it seems almost like metal — is now kept in the museum at Sārnāth. Mauryan stone-workers had a secret polish that no later age matched.", "ఆ స్తంభం పడిపోయి శతాబ్దాల పాటు భూమిలో కూరుకుపోయింది. 1904–05లో తవ్వి తీశారు; ఒకే ఇసుకరాయి దిమ్మ నుండి చెక్కి, దాదాపు లోహంలా కనిపించేంత ప్రకాశవంతంగా మెరుగుపెట్టిన ఆ సింహ శీర్షాన్ని ఇప్పుడు సారనాథ్ సంగ్రహాలయంలో ఉంచారు. మౌర్య శిల్పులకు తరువాతి ఏ కాలమూ సాటిరాని ఒక రహస్య మెరుగు ఉండేది."]
  ],
  [
   ["h", "The Emblem of India", "భారతదేశపు చిహ్నం"],
   ["p", "When India became a republic on 26 January 1950, it took Aśoka's lion capital from Sārnāth as its State Emblem — three lions visible, the fourth hidden behind. Beneath it are written three words from the Muṇḍaka Upaniṣad:", "1950 జనవరి 26న భారతదేశం గణతంత్రమైనప్పుడు సారనాథ్‌లోని అశోకుని సింహ శీర్షాన్ని తన జాతీయ చిహ్నంగా స్వీకరించింది — కనిపించేవి మూడు సింహాలు, నాలుగవది వెనక దాగి ఉంటుంది. దాని కింద ముండకోపనిషత్తు నుండి మూడు మాటలు రాయబడ్డాయి:"],
   ["sloka", ["సత్యమేవ జయతే"], ["satyam eva jayate"], "“Truth alone triumphs.” (Muṇḍaka Upaniṣad 3.1.6)", "“సత్యమే జయిస్తుంది.” (ముండకోపనిషత్తు 3.1.6)"],
   ["p", "So on every Indian coin, every government seal and every passport, an emperor's Buddhist pillar and a line from the Upaniṣads stand together.", "అలా ప్రతి భారతీయ నాణెంపై, ప్రతి ప్రభుత్వ ముద్రపై, ప్రతి పాస్‌పోర్టుపై ఒక చక్రవర్తి బౌద్ధ స్తంభమూ, ఉపనిషత్తులోని ఒక వాక్యమూ కలిసి నిలుస్తాయి."]
  ],
  [
   ["h", "The Wheel on the Flag", "జెండాపై చక్రం"],
   ["p", "And at the centre of India's national flag, adopted on 22 July 1947, is a navy-blue wheel with twenty-four spokes — the Aśoka Cakra, taken from the same capital. It is the wheel of dhamma, of right conduct, always turning.", "1947 జూలై 22న స్వీకరించిన భారత జాతీయ జెండా మధ్యలో ఇరవై నాలుగు ఆకులతో ముదురు నీలి చక్రం ఉంది — అదే శీర్షం నుండి తీసుకున్న అశోక చక్రం. అది నిరంతరం తిరిగే ధర్మ చక్రం, సత్ప్రవర్తన చక్రం."],
   ["p", "The grandson of the man who built India's first great empire by the sword became the king who gave up the sword. And it is his wheel and his lions — not his conquests — that India chose to remember.", "కత్తితో భారతదేశపు తొలి మహా సామ్రాజ్యాన్ని నిర్మించిన వ్యక్తి మనుమడు కత్తిని విడిచిన రాజయ్యాడు. భారతదేశం గుర్తుంచుకోవడానికి ఎంచుకున్నది ఆయన విజయాలను కాదు — ఆయన చక్రాన్నీ, ఆయన సింహాలనూ."],
   ["kglink", "Candragupta, his grandfather", "ఆయన తాత చంద్రగుప్తుడు", "cg-1"],
   ["dyk", "🇮🇳", "The Aśoka Chakra is also the name of India's highest peacetime award for bravery.", "శాంతి కాలంలో శౌర్యానికి భారతదేశపు అత్యున్నత పురస్కారం పేరు కూడా అశోక చక్రమే."],
   ["src", "The Sārnāth lion capital (excavated 1904–05; Sārnāth Museum). Muṇḍaka Upaniṣad 3.1.6 (“satyam eva jayate”). The State Emblem of India (adopted 26 January 1950) and the National Flag with the Aśoka Cakra (adopted 22 July 1947).", "సారనాథ్ సింహ శీర్షం (1904–05లో తవ్వకం; సారనాథ్ సంగ్రహాలయం). ముండకోపనిషత్తు 3.1.6 (“సత్యమేవ జయతే”). భారత జాతీయ చిహ్నం (1950 జనవరి 26న స్వీకరణ), అశోక చక్రంతో జాతీయ పతాకం (1947 జూలై 22న స్వీకరణ)."]
  ]
 ],
 remember: [
  ["{ashoka|Aśoka}'s lion capital at Sārnāth became the State Emblem of India in 1950.", "సారనాథ్‌లోని {ashoka|అశోకుని} సింహ శీర్షం 1950లో భారత జాతీయ చిహ్నమైంది."],
  ["Beneath it is “Satyameva jayate” from the Muṇḍaka Upaniṣad.", "దాని కింద ముండకోపనిషత్తులోని “సత్యమేవ జయతే” ఉంది."],
  ["The 24-spoked Aśoka Cakra stands at the centre of India's flag.", "24 ఆకుల అశోక చక్రం భారత జెండా మధ్యలో ఉంది."]
 ],
 think: ["India chose to remember Aśoka's wheel of dhamma, not his conquests. What would you most want people to remember about you?", "భారతదేశం అశోకుని విజయాలను కాకుండా ఆయన ధర్మ చక్రాన్ని గుర్తుంచుకోవడానికి ఎంచుకుంది. మీ గురించి జనం ఏమి ఎక్కువగా గుర్తుంచుకోవాలని కోరుకుంటారు?"]
}
]);
