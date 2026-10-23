// Great Sages — Kaśyapa. Retold by Hari Pokkuluri.
// Told from the Ṛgveda, the Śatapatha Brāhmaṇa, the Vālmīki Rāmāyaṇa (Bāla Kāṇḍa), the Mahābhārata (Ādi and Śānti
// Parvas), the Bhāgavata and Viṣṇu Purāṇas, the Nīlamata Purāṇa and Kalhaṇa's Rājataraṅgiṇī, with later tellings
// marked, in fresh original wording. Block format: see the top of ramayana.js and sages.js.
window.SAGE_PLAN = Object.assign(window.SAGE_PLAN || {}, { kashyapa: [
  ["The Tortoise-Father — Son of Marīci", "Śatapatha Brāhmaṇa 7.5 · Mahābhārata, Ādi Parva · Ṛgveda 9.113"],
  ["Aditi, Diti and the Forty-Nine Maruts", "Rāmāyaṇa, Bāla 45–47 · Bhāgavata 3.14, 6.18"],
  ["Kadrū, Vinatā and the White Horse's Tail", "Mahābhārata, Ādi Parva (Āstīka)"],
  ["Garuḍa Steals the Amṛta", "Mahābhārata, Ādi Parva (Āstīka)"],
  ["The Dwarf Born to Aditi", "Bhāgavata 8.16–8.18"],
  ["The Earth Given to Kaśyapa", "Mahābhārata, Śānti Parva"],
  ["The Lake That Became Kashmir", "Nīlamata Purāṇa · Rājataraṅgiṇī 1"],
  ["Kāśyapa the Healer — and the Gotra of All", "Mahābhārata, Ādi Parva · Kāśyapa Saṃhitā · living tradition"]
] });
window.RMY_WHO = Object.assign({
  "marici": { "av": "✨", "en": "Marīci", "te": "మరీచి", "d": "The first of Brahmā's mind-born sons, whose name means “ray of light”; father of Kaśyapa.", "dt": "బ్రహ్మ మానస పుత్రులలో మొదటివాడు; పేరుకు అర్థం “కాంతి కిరణం”; కశ్యపుని తండ్రి." },
  "kadru": { "av": "🐍", "en": "Kadrū", "te": "కద్రువ", "d": "Wife of Kaśyapa and mother of the thousand serpents (nāgas).", "dt": "కశ్యపుని భార్య, వేయి నాగుల తల్లి." },
  "vinata": { "av": "🦅", "en": "Vinatā", "te": "వినత", "d": "Wife of Kaśyapa and mother of Aruṇa, the dawn-charioteer, and Garuḍa, king of birds.", "dt": "కశ్యపుని భార్య; అరుణుడు (సూర్య సారథి), గరుత్మంతుడు (పక్షిరాజు) తల్లి." },
  "aruna": { "av": "🌅", "en": "Aruṇa", "te": "అనూరుడు (అరుణుడు)", "d": "Vinatā's elder son, born half-formed from an egg broken too early; he became the charioteer of the Sun — the red glow of dawn.", "dt": "ముందుగానే పగలగొట్టిన గుడ్డు నుండి అసంపూర్ణంగా పుట్టిన వినత పెద్ద కుమారుడు; సూర్యుని సారథి అయ్యాడు — ఉదయపు ఎర్రని కాంతి." },
  "valakhilyas": { "av": "🧘", "en": "The Vālakhilyas", "te": "వాలఖిల్యులు", "d": "Sixty thousand thumb-sized sages of great tapas, who hang upside down from the branches of trees.", "dt": "చెట్ల కొమ్మలకు తలకిందులుగా వేలాడే, బొటనవేలంత పరిమాణం గల అరవై వేల మంది మహాతపస్వులు." },
  "takshaka": { "av": "🐍", "en": "Takṣaka", "te": "తక్షకుడు", "d": "A great serpent king, son of Kadrū, who bit King Parīkṣit to death.", "dt": "పరీక్షిత్తు మహారాజును కాటేసి చంపిన కద్రువ కుమారుడైన మహా నాగరాజు." }
}, window.RMY_WHO || {});
window.SAGE_CHAPTERS = (window.SAGE_CHAPTERS || []).concat([
{
 id: "ks-1", sage: "kashyapa", n: 1, order: 2001, date: "2026-10-23",
 title: "The Tortoise-Father — Son of Marīci", titleTe: "కూర్మ రూప పితామహుడు — మరీచి కుమారుడు",
 src: "Śatapatha Brāhmaṇa 7.5 · Mahābhārata, Ādi Parva · Ṛgveda 9.113",
 who: ["kashyapa", "marici", "brahma", "daksha", "aditi", "diti"],
 pages: [
  [
   ["p", "If you ask who is the father of the gods, the asuras, the serpents, the birds, the cattle and almost every creature that walks, swims, crawls or flies — the Purāṇas give one answer: {kashyapa|Kaśyapa}. He was the son of {marici|Marīci}, the first of {brahma|Brahmā}'s mind-born sons, and he is counted among the seven Saptarṣis of our age.", "దేవతలకు, అసురులకు, నాగులకు, పక్షులకు, పశువులకు — నడిచే, ఈదే, పాకే, ఎగిరే దాదాపు ప్రతి ప్రాణికీ తండ్రి ఎవరని అడిగితే పురాణాలు ఒకే జవాబిస్తాయి: {kashyapa|కశ్యపుడు}. ఆయన {brahma|బ్రహ్మ} మానస పుత్రులలో మొదటివాడైన {marici|మరీచి} కుమారుడు; మన యుగపు సప్తర్షులలో ఒకరిగా లెక్కించబడతాడు."],
   ["p", "His name is very old. The Śatapatha Brāhmaṇa says that when the Creator made all creatures, he took the form of a tortoise — *kūrma* — and “the tortoise is Kaśyapa; therefore all creatures are called Kāśyapa, children of Kaśyapa.” The tortoise, with the round sky of its shell above and the flat earth of its belly below, was itself a picture of the world.", "ఆయన పేరు చాలా ప్రాచీనమైనది. సృష్టికర్త సకల జీవులను సృష్టించినప్పుడు తాబేలు — *కూర్మం* — రూపం దాల్చాడనీ, “తాబేలే కశ్యపుడు; అందుకే సకల జీవులనూ కాశ్యపులు — కశ్యపుని సంతానం — అంటారు” అనీ శతపథ బ్రాహ్మణం చెబుతుంది. పైన గుండ్రని ఆకాశం వంటి డిప్పా, కింద చదునైన భూమి వంటి పొట్టా ఉన్న తాబేలే లోకానికి ఒక చిత్రం."]
  ],
  [
   ["h", "Thirteen Daughters of Dakṣa", "దక్షుని పదమూడు మంది కుమార్తెలు"],
   ["p", "The Prajāpati {daksha|Dakṣa} gave thirteen of his daughters to Kaśyapa in marriage. From them, the books say, came every kind of being. From {aditi|Aditi} came the Ādityas — the shining gods, Indra among them, and later Viṣṇu as Vāmana. From {diti|Diti} came the daityas; from Danu, the dānavas; from Kadrū, the serpents; from Vinatā, Garuḍa and Aruṇa; from Surabhi, the cattle; from others, the trees, the birds of prey, the sea creatures and the wild beasts. The lists in the Mahābhārata and the Purāṇas differ in names and order, but all agree: Kaśyapa is the father of the living world.", "ప్రజాపతి {daksha|దక్షుడు} తన పదమూడు మంది కుమార్తెలను కశ్యపునికి ఇచ్చి పెళ్ళి చేశాడు. వారి నుండే ప్రతి రకపు ప్రాణీ వచ్చిందని గ్రంథాలు చెబుతాయి. {aditi|అదితి} నుండి ఆదిత్యులు — ఇంద్రునితో సహా ప్రకాశించే దేవతలు, తర్వాత వామనునిగా విష్ణువు. {diti|దితి} నుండి దైత్యులు; దనువు నుండి దానవులు; కద్రువ నుండి నాగులు; వినత నుండి గరుత్మంతుడు, అరుణుడు; సురభి నుండి పశువులు; ఇతరుల నుండి చెట్లు, వేటాడే పక్షులు, సముద్ర జీవులు, అడవి మృగాలు. మహాభారతం, పురాణాలలోని జాబితాలు పేర్లలో, క్రమంలో మారుతాయి; కానీ అన్నీ ఒకటే చెబుతాయి: కశ్యపుడు జీవలోకానికి తండ్రి."],
   ["p", "So the gods and the asuras, who fought endlessly, were half-brothers — sons of one father by two sisters. Every war between them was a family quarrel.", "అంటే నిరంతరం పోరాడిన దేవతలూ అసురులూ సవతి సోదరులు — ఒకే తండ్రికి ఇద్దరు అక్కాచెల్లెళ్ళ ద్వారా పుట్టినవారు. వారి ప్రతి యుద్ధమూ ఒక కుటుంబ కలహమే."]
  ],
  [
   ["h", "A Seer of the Soma Hymns", "సోమ సూక్తాల ద్రష్ట"],
   ["p", "Kaśyapa Mārīca is also a seer of the Ṛgveda, in its ninth book, the hymns to Soma. One of them (9.113) has a famous refrain longing for the world beyond: “Where there is light that never fails, in the world where the sun is placed — there, purifying one, make me immortal.”", "కశ్యప మారీచుడు ఋగ్వేదపు తొమ్మిదవ మండలంలోని — సోమ సూక్తాలలోని — ద్రష్ట కూడా. వాటిలో ఒకటి (9.113) అతీత లోకం కోసం తపించే ప్రసిద్ధ పల్లవితో ఉంటుంది: “ఎన్నటికీ ఆరని వెలుగు ఎక్కడ ఉందో, సూర్యుడు నిలిచిన లోకంలో — అక్కడ, పవిత్రం చేసేవాడా, నన్ను అమృతుణ్ణి చేయి.”"],
   ["dyk", "🐢", "The Kūrma (tortoise) avatāra of Viṣṇu, who held Mount Mandara on his back during the churning of the ocean, shares this old picture of the tortoise holding up the world.", "క్షీరసాగర మథనంలో మందర పర్వతాన్ని వీపుపై మోసిన విష్ణువు కూర్మావతారం కూడా లోకాన్ని మోసే తాబేలు అనే ఇదే ప్రాచీన చిత్రాన్ని పంచుకుంటుంది."],
   ["src", "Śatapatha Brāhmaṇa 7.5.1.5 (the tortoise is Kaśyapa; all creatures are Kāśyapa). Mahābhārata, Ādi Parva (Marīci's son Kaśyapa; Dakṣa's thirteen daughters and their offspring). Ṛgveda 9.113–9.114 (Kaśyapa Mārīca).", "శతపథ బ్రాహ్మణం 7.5.1.5 (తాబేలే కశ్యపుడు; సకల జీవులూ కాశ్యపులు). మహాభారతం, ఆది పర్వం (మరీచి కుమారుడు కశ్యపుడు; దక్షుని పదమూడు మంది కుమార్తెలు, వారి సంతానం). ఋగ్వేదం 9.113–9.114 (కశ్యప మారీచుడు)."]
  ]
 ],
 remember: [
  ["{kashyapa|Kaśyapa}, son of {marici|Marīci}, is the father of gods, asuras, serpents, birds and beasts.", "{marici|మరీచి} కుమారుడు {kashyapa|కశ్యపుడు} దేవతలు, అసురులు, నాగులు, పక్షులు, మృగాలకు తండ్రి."],
  ["The Śatapatha Brāhmaṇa says the tortoise is Kaśyapa, so all creatures are “Kāśyapa.”", "తాబేలే కశ్యపుడనీ, అందుకే సకల జీవులూ “కాశ్యపులు” అనీ శతపథ బ్రాహ్మణం చెబుతుంది."],
  ["He married thirteen daughters of {daksha|Dakṣa}; {aditi|Aditi}'s sons were gods, {diti|Diti}'s the daityas.", "{daksha|దక్షుని} పదమూడు మంది కుమార్తెలను పెళ్ళాడాడు; {aditi|అదితి} కుమారులు దేవతలు, {diti|దితి} కుమారులు దైత్యులు."]
 ],
 think: ["The gods and the asuras were brothers, children of one father. Does knowing that change how you see their wars?", "దేవతలూ అసురులూ ఒకే తండ్రి సంతానమైన సోదరులు. అది తెలియడం వారి యుద్ధాలను మీరు చూసే తీరును మారుస్తుందా?"]
},
{
 id: "ks-2", sage: "kashyapa", n: 2, order: 2002, date: "2026-10-23",
 title: "Aditi, Diti and the Forty-Nine Maruts", titleTe: "అదితి, దితి — నలభై తొమ్మిది మంది మరుత్తులు",
 src: "Rāmāyaṇa, Bāla 45–47 · Bhāgavata 3.14, 6.18",
 who: ["kashyapa", "diti", "aditi", "indra", "maruts", "hiranyakashipu"],
 pages: [
  [
   ["p", "The two sisters {aditi|Aditi} and {diti|Diti} were rivals through their sons. In the Rāmāyaṇa, Viśvāmitra tells young Rāma the story at the city of Viśālā. After the churning of the ocean, Indra and the gods had killed Diti's sons in battle. Diti, broken with grief, went to {kashyapa|Kaśyapa} and asked: “Give me a son who will kill Indra.”", "అక్కాచెల్లెళ్ళు {aditi|అదితి}, {diti|దితి} తమ కుమారుల ద్వారా ప్రత్యర్థులయ్యారు. రామాయణంలో విశాలా నగరం దగ్గర విశ్వామిత్రుడు ఈ కథను బాలుడైన రామునికి చెబుతాడు. క్షీరసాగర మథనం తర్వాత ఇంద్రుడు, దేవతలు యుద్ధంలో దితి కుమారులను చంపారు. దుఃఖంతో కుంగిపోయిన దితి {kashyapa|కశ్యపుని} దగ్గరికి వెళ్ళి “ఇంద్రుణ్ణి చంపే కుమారుణ్ణి నాకు ప్రసాదించండి” అని అడిగింది."],
   ["p", "Kaśyapa agreed — on one condition. “If you remain perfectly pure in body and mind for a thousand years, you will have such a son.” Diti began her vow. And {indra|Indra}, knowing everything, came and served her humbly — bringing fire, water, fruits, kuśa grass, massaging her tired feet — while watching for any mistake.", "కశ్యపుడు ఒక షరతుతో ఒప్పుకున్నాడు. “వెయ్యి సంవత్సరాలు శరీరంలోనూ మనసులోనూ పూర్తి పవిత్రతతో ఉంటే అలాంటి కుమారుడు పుడతాడు.” దితి వ్రతం మొదలుపెట్టింది. అంతా తెలిసిన {indra|ఇంద్రుడు} వచ్చి వినయంగా ఆమెకు సేవ చేశాడు — అగ్ని, నీరు, పండ్లు, దర్భలు తెస్తూ, అలసిన కాళ్ళు ఒత్తుతూ — ఏదైనా తప్పు జరుగుతుందేమో అని కనిపెడుతూ."]
  ],
  [
   ["h", "“Do Not Cry”", "“ఏడవకు”"],
   ["p", "Near the end of the thousand years, one afternoon, Diti fell asleep in a careless way, with her head where her feet should have been. In that moment of impurity, Indra entered her womb and with his thunderbolt cut the unborn child into seven pieces. The child cried out, and Indra said, “*Mā rudaḥ* — do not cry!” — and cut each piece into seven again.", "వెయ్యి సంవత్సరాలు దాదాపు ముగుస్తుండగా, ఒక మధ్యాహ్నం దితి పాదాలుండాల్సిన చోట తల పెట్టి అజాగ్రత్తగా నిద్రపోయింది. ఆ అపవిత్ర క్షణంలో ఇంద్రుడు ఆమె గర్భంలోకి ప్రవేశించి వజ్రాయుధంతో పుట్టబోయే శిశువును ఏడు ముక్కలు చేశాడు. శిశువు ఏడవగా “*మా రుదః* — ఏడవకు!” అని ఇంద్రుడు ప్రతి ముక్కనూ మళ్ళీ ఏడుగా చేశాడు."],
   ["p", "Diti woke and Indra confessed. But the forty-nine pieces did not die. They became the forty-nine {maruts|Maruts}, the storm-gods — and Diti, softened, asked Indra only to let them live in heaven as his companions. Indra agreed. So the sons Diti had wanted as Indra's killers became Indra's dearest allies. (The Bhāgavata adds that it was Viṣṇu's grace, and Diti's vow, that kept the pieces alive, and explains the name Marut from Indra's words, *mā rudaḥ*.)", "దితి మేల్కొంది; ఇంద్రుడు ఒప్పుకున్నాడు. కానీ ఆ నలభై తొమ్మిది ముక్కలు చనిపోలేదు. అవి నలభై తొమ్మిది మంది {maruts|మరుత్తులు} — తుఫాను దేవతలు — అయ్యాయి. మెత్తబడిన దితి వారిని ఇంద్రుని సహచరులుగా స్వర్గంలో ఉండనివ్వమని మాత్రమే కోరింది. ఇంద్రుడు ఒప్పుకున్నాడు. అలా ఇంద్రుణ్ణి చంపాలని దితి కోరిన కుమారులు ఇంద్రుని ప్రియ మిత్రులయ్యారు. (విష్ణువు అనుగ్రహం, దితి వ్రతమే ఆ ముక్కలను బతికించాయని భాగవతం జోడిస్తుంది; ఇంద్రుని మాట *మా రుదః* నుండి మరుత్ అనే పేరును వివరిస్తుంది.)"]
  ],
  [
   ["h", "Born at Twilight", "సంధ్యవేళ జననం"],
   ["p", "The Bhāgavata tells another story of Diti and Kaśyapa. Once, at the hour of dusk — the time sacred to Śiva and his fierce attendants, when a sage should be at his prayers — Diti, overcome by desire, insisted on being with her husband. Kaśyapa warned her, then gave way. Afterwards he said sadly: “Because of this hour, you will bear two sons who will trouble all the worlds.” They were {hiranyakashipu|Hiraṇyakaśipu} and Hiraṇyākṣa, the great asura brothers — though Kaśyapa added that one of Diti's grandsons — Hiraṇyakaśipu's son Prahlāda — would be a great devotee.", "దితి, కశ్యపుల గురించి భాగవతం మరో కథ చెబుతుంది. ఒకసారి సంధ్యవేళ — శివునికి, ఆయన ఉగ్రగణాలకు పవిత్రమైన, ముని ప్రార్థనలో ఉండాల్సిన సమయం — కామంతో దితి భర్తతో ఉండాలని పట్టుబట్టింది. కశ్యపుడు హెచ్చరించి, తర్వాత లొంగిపోయాడు. తర్వాత బాధగా అన్నాడు: “ఈ వేళ వల్ల నువ్వు లోకాలన్నిటినీ బాధించే ఇద్దరు కుమారులను కంటావు.” వారే మహా అసుర సోదరులు {hiranyakashipu|హిరణ్యకశిపుడు}, హిరణ్యాక్షుడు — అయితే హిరణ్యకశిపుని కుమారుడు ప్రహ్లాదుడు గొప్ప భక్తుడవుతాడని కశ్యపుడు జోడించాడు."],
   ["dyk", "🌪️", "In the Rāmāyaṇa, Viśvāmitra tells this story at the very place where Diti did her tapas — and the city of Viśālā that stood there was founded, he says, by a son of Ikṣvāku.", "రామాయణంలో దితి తపస్సు చేసిన చోటే విశ్వామిత్రుడు ఈ కథ చెబుతాడు — అక్కడ ఉన్న విశాలా నగరాన్ని ఇక్ష్వాకుని కుమారుడు స్థాపించాడని ఆయన చెబుతాడు."],
   ["src", "Vālmīki Rāmāyaṇa, Bāla Kāṇḍa, sargas 45–47 (Diti's request after the churning; the thousand-year vow; Indra's service and act; the forty-nine Maruts; Viśālā). Bhāgavata Purāṇa 6.18 (Diti's vow; the Maruts; “mā rudaḥ”) and 3.14 (Diti at twilight; the birth of Hiraṇyakaśipu and Hiraṇyākṣa).", "వాల్మీకి రామాయణం, బాలకాండ, 45–47 సర్గలు (మథనం తర్వాత దితి కోరిక; వెయ్యేళ్ళ వ్రతం; ఇంద్రుని సేవ, చర్య; నలభై తొమ్మిది మరుత్తులు; విశాల). భాగవత పురాణం 6.18 (దితి వ్రతం; మరుత్తులు; “మా రుదః”), 3.14 (సంధ్యవేళ దితి; హిరణ్యకశిపు, హిరణ్యాక్షుల జననం)."]
  ]
 ],
 remember: [
  ["{diti|Diti} asked {kashyapa|Kaśyapa} for a son to kill {indra|Indra}, and kept a thousand-year vow.", "ఇంద్రుణ్ణి చంపే కుమారుని కోసం {diti|దితి} {kashyapa|కశ్యపుని} అడిగి వెయ్యేళ్ళ వ్రతం పాటించింది."],
  ["Indra cut the unborn child into forty-nine — “mā rudaḥ!” — and they became the {maruts|Maruts}, Indra's allies.", "ఇంద్రుడు శిశువును నలభై తొమ్మిది ముక్కలు చేశాడు — “మా రుదః!” — వారు ఇంద్రుని మిత్రులైన {maruts|మరుత్తులు} అయ్యారు."],
  ["Born of a union at twilight, {hiranyakashipu|Hiraṇyakaśipu} and Hiraṇyākṣa troubled the worlds.", "సంధ్యవేళ కలయిక వల్ల పుట్టిన {hiranyakashipu|హిరణ్యకశిపుడు}, హిరణ్యాక్షుడు లోకాలను బాధించారు."]
 ],
 think: ["Diti wanted sons to destroy Indra, and ended up with sons who became his friends. How do our plans sometimes turn into the opposite of what we meant?", "ఇంద్రుణ్ణి నాశనం చేసే కుమారులను దితి కోరింది; చివరికి అతని మిత్రులైన కుమారులు దక్కారు. మన పథకాలు ఒక్కోసారి మనం ఉద్దేశించినదానికి విరుద్ధంగా ఎలా మారతాయి?"]
},
{
 id: "ks-3", sage: "kashyapa", n: 3, order: 2003, date: "2026-10-23",
 title: "Kadrū, Vinatā and the White Horse's Tail", titleTe: "కద్రువ, వినత — తెల్ల గుర్రపు తోక",
 src: "Mahābhārata, Ādi Parva (Āstīka)",
 who: ["kashyapa", "kadru", "vinata", "aruna", "surya"],
 pages: [
  [
   ["p", "Two more of {kashyapa|Kaśyapa}'s wives were the sisters {kadru|Kadrū} and {vinata|Vinatā}. Pleased with their service, Kaśyapa offered each a boon. Kadrū asked for a thousand sons, all splendid serpents. Vinatā asked for only two — but two who would be stronger and more glorious than all of Kadrū's sons. Kaśyapa granted both.", "కశ్యపుని మరో ఇద్దరు భార్యలు అక్కాచెల్లెళ్ళు {kadru|కద్రువ}, {vinata|వినత}. వారి సేవకు సంతోషించి కశ్యపుడు ఒక్కొక్కరికీ వరం ఇవ్వబోయాడు. కద్రువ వేయి మంది కుమారులను — అందరూ తేజస్వులైన నాగులను — కోరింది. వినత ఇద్దరినే కోరింది — కానీ కద్రువ కుమారులందరి కంటే బలవంతులు, కీర్తిమంతులు అయిన ఇద్దరిని. కశ్యపుడు రెండూ ఇచ్చాడు."],
   ["p", "In time Kadrū laid a thousand eggs and Vinatā two. After five hundred years, Kadrū's eggs hatched, and out came her thousand serpent sons. Vinatā's two eggs lay still. Impatient and jealous, Vinatā broke one open — and out came a son with only the upper half of his body formed. He was {aruna|Aruṇa}. Hurt, he cursed his mother: “Because of your impatience, you will be your sister's slave for five hundred years — until your other son sets you free. Do not break that egg too.” Aruṇa rose into the sky and became the charioteer of the {surya|Sun} — the red glow you see before sunrise.", "కాలక్రమంలో కద్రువ వేయి గుడ్లు, వినత రెండు గుడ్లు పెట్టారు. ఐదు వందల సంవత్సరాల తర్వాత కద్రువ గుడ్లు పొదిగి ఆమె వేయి నాగ కుమారులు బయటకు వచ్చారు. వినత రెండు గుడ్లూ అలాగే ఉన్నాయి. ఓపిక లేక, అసూయతో వినత ఒక గుడ్డును పగలగొట్టింది — శరీరంలో పై సగం మాత్రమే ఏర్పడిన కుమారుడు బయటకు వచ్చాడు. అతనే {aruna|అనూరుడు (అరుణుడు)}. బాధతో తల్లిని శపించాడు: “నీ తొందరపాటు వల్ల ఐదు వందల సంవత్సరాలు నీ సోదరికి దాసిగా ఉంటావు — నీ మరో కుమారుడు నిన్ను విడిపించేవరకు. ఆ గుడ్డును కూడా పగలగొట్టకు.” అరుణుడు ఆకాశంలోకి లేచి {surya|సూర్యుని} సారథి అయ్యాడు — సూర్యోదయానికి ముందు మీరు చూసే ఎర్రని కాంతి."]
  ],
  [
   ["h", "The Bet", "పందెం"],
   ["p", "One day the two sisters saw Uccaiḥśravas, the white horse that had risen from the churning of the ocean. Kadrū said: “His tail is black.” Vinatā said: “It is white — all white.” They bet: whoever was wrong would become the other's slave.", "ఒకరోజు అక్కాచెల్లెళ్ళు క్షీరసాగర మథనంలో పుట్టిన తెల్లని గుర్రం ఉచ్చైఃశ్రవాన్ని చూశారు. “దాని తోక నల్లగా ఉంది” అంది కద్రువ. “తెల్లగా ఉంది — పూర్తిగా తెల్లగా” అంది వినత. పందెం వేసుకున్నారు: ఎవరి మాట తప్పైతే వారు మరొకరికి దాసి కావాలి."],
   ["p", "Kadrū knew she was wrong. That night she ordered her serpent sons: “Go and hang on the horse's tail like black hairs, so that it looks black.” Some of the serpents refused to cheat — and Kadrū cursed them to burn one day in a king's great snake-sacrifice. The rest obeyed. In the morning, the horse's tail looked black, and Vinatā became her sister's slave.", "తన మాట తప్పని కద్రువకు తెలుసు. ఆ రాత్రి తన నాగ కుమారులను ఆజ్ఞాపించింది: “వెళ్ళి ఆ గుర్రపు తోకకు నల్లని వెంట్రుకల్లా వేలాడండి — తోక నల్లగా కనిపించాలి.” కొందరు నాగులు మోసం చేయడానికి నిరాకరించారు — ఒకరోజు ఒక రాజు చేసే సర్పయాగంలో కాలిపోతారని కద్రువ వారిని శపించింది. మిగిలినవారు పాటించారు. ఉదయం గుర్రపు తోక నల్లగా కనిపించింది; వినత తన సోదరికి దాసి అయింది."],
   ["dyk", "🐎", "Kadrū's curse on her own sons would come true ages later, in King Janamejaya's great snake-sacrifice — the occasion at which the whole Mahābhārata was first recited.", "తన సొంత కుమారులకు కద్రువ ఇచ్చిన శాపం యుగాల తర్వాత జనమేజయ మహారాజు సర్పయాగంలో నెరవేరింది — మహాభారతమంతా మొదటిసారి పఠించబడిన సందర్భం అదే."],
   ["src", "Mahābhārata, Ādi Parva, the Āstīka section (Kaśyapa's boons to Kadrū and Vinatā; the eggs; Aruṇa's birth and curse; the bet over Uccaiḥśravas' tail; Kadrū's curse on the serpents; Vinatā's slavery).", "మహాభారతం, ఆది పర్వం, ఆస్తీక భాగం (కద్రువ వినతలకు కశ్యపుని వరాలు; గుడ్లు; అరుణుని జననం, శాపం; ఉచ్చైఃశ్రవపు తోక పందెం; నాగులకు కద్రువ శాపం; వినత దాస్యం)."]
  ]
 ],
 remember: [
  ["{kashyapa|Kaśyapa} gave {kadru|Kadrū} a thousand serpent sons and {vinata|Vinatā} two mighty sons.", "{kashyapa|కశ్యపుడు} {kadru|కద్రువకు} వేయి నాగ కుమారులను, {vinata|వినతకు} ఇద్దరు బలవంతులైన కుమారులను ప్రసాదించాడు."],
  ["Vinatā broke an egg too soon; half-formed {aruna|Aruṇa} became the Sun's charioteer.", "వినత గుడ్డును ముందుగానే పగలగొట్టింది; అసంపూర్ణ {aruna|అరుణుడు} సూర్య సారథి అయ్యాడు."],
  ["By cheating over a horse's tail, Kadrū made Vinatā her slave.", "గుర్రపు తోక విషయంలో మోసంతో కద్రువ వినతను దాసిని చేసుకుంది."]
 ],
 think: ["Vinatā could not wait, and broke an egg too soon. When has impatience cost you something?", "వినత ఆగలేక గుడ్డును ముందుగానే పగలగొట్టింది. తొందరపాటు మీకు ఎప్పుడైనా ఏదైనా నష్టం కలిగించిందా?"]
},
{
 id: "ks-4", sage: "kashyapa", n: 4, order: 2004, date: "2026-10-23",
 title: "Garuḍa Steals the Amṛta", titleTe: "గరుత్మంతుడు అమృతాన్ని తేవడం",
 src: "Mahābhārata, Ādi Parva (Āstīka)",
 who: ["kashyapa", "garuda", "vinata", "kadru", "valakhilyas", "vishnu", "indra"],
 pages: [
  [
   ["p", "At last {vinata|Vinatā}'s second egg hatched, and out burst {garuda|Garuḍa} — blazing like fire, so bright that the gods thought the world was ending. He grew in an instant to a vast size. He found his mother a slave and asked the serpents: “What must I bring you to set her free?” “Bring us the amṛta, the nectar of immortality, from heaven,” they said.", "చివరికి {vinata|వినత} రెండో గుడ్డు పొదిగి {garuda|గరుత్మంతుడు} బయటకు దూకాడు — అగ్నిలా జ్వలిస్తూ, లోకమే అంతమవుతోందేమోనని దేవతలు భయపడేంత ప్రకాశంతో. క్షణంలో బ్రహ్మాండంగా పెరిగాడు. తల్లి దాసిగా ఉండడం చూసి నాగులను అడిగాడు: “ఆమెను విడిపించడానికి మీకు ఏం తేవాలి?” “స్వర్గం నుండి అమృతం తెచ్చివ్వు” అన్నారు వారు."],
   ["p", "Garuḍa set out, hungry for the journey. He flew to his father {kashyapa|Kaśyapa}, who told him: “In a lake nearby, an elephant and a tortoise — two brothers cursed for quarrelling over their inheritance — are fighting endlessly. Eat them, and you will have strength for your task.” Garuḍa seized both, one in each claw.", "ప్రయాణానికి ఆకలితో గరుత్మంతుడు బయలుదేరాడు. తండ్రి {kashyapa|కశ్యపుని} దగ్గరికి ఎగిరాడు; ఆయన చెప్పాడు: “దగ్గర్లోని ఒక సరస్సులో ఒక ఏనుగు, ఒక తాబేలు — ఆస్తి కోసం గొడవపడినందుకు శపించబడిన ఇద్దరు సోదరులు — అంతులేకుండా పోరాడుతున్నారు. వాటిని తిను; నీ కార్యానికి బలం వస్తుంది.” గరుత్మంతుడు ఒక్కో పంజాలో ఒక్కోదాన్ని పట్టుకున్నాడు."]
  ],
  [
   ["h", "The Branch and the Thumb-Sized Sages", "కొమ్మ — బొటనవేలంత మునులు"],
   ["p", "Looking for a place to eat, he landed on a giant banyan branch — and it cracked under his weight. Hanging from that branch, upside down, in tapas, were the sixty thousand {valakhilyas|Vālakhilyas}, sages no bigger than a thumb. If the branch fell, they would be killed. Garuḍa caught the branch in his beak and flew on, carrying the elephant, the tortoise and the branch full of sages, looking for somewhere to set them down.", "తినడానికి చోటు వెతుకుతూ ఒక బ్రహ్మాండమైన మర్రి కొమ్మపై వాలాడు — అతని బరువుకు అది విరిగింది. ఆ కొమ్మకు తలకిందులుగా వేలాడుతూ తపస్సు చేస్తున్నారు బొటనవేలంత పరిమాణం గల అరవై వేల మంది {valakhilyas|వాలఖిల్యులు}. కొమ్మ పడితే వారు చనిపోతారు. గరుత్మంతుడు కొమ్మను ముక్కుతో పట్టుకుని — ఏనుగు, తాబేలు, మునులతో నిండిన కొమ్మను మోస్తూ — దించడానికి చోటు వెతుకుతూ ఎగిరాడు."],
   ["p", "Again he came to Kaśyapa, who went to the tiny sages and gently asked them to let go of the branch for the sake of the world. They agreed, and flew off to the Himālaya. Only then could Garuḍa drop the branch on an empty mountain and eat.", "మళ్ళీ కశ్యపుని దగ్గరికి వచ్చాడు; ఆయన ఆ చిన్న మునుల దగ్గరికి వెళ్ళి లోక క్షేమం కోసం కొమ్మను విడిచిపెట్టమని మృదువుగా కోరాడు. వారు ఒప్పుకుని హిమాలయాలకు ఎగిరిపోయారు. అప్పుడే గరుత్మంతుడు కొమ్మను ఒక నిర్జన పర్వతంపై వదిలి తినగలిగాడు."]
  ],
  [
   ["h", "The Nectar and the Kuśa Grass", "అమృతం — దర్భలు"],
   ["p", "Garuḍa stormed heaven, scattered the gods, shrank through a whirling wheel of blades, and took the pot of amṛta — without drinking a drop. On the way back {vishnu|Viṣṇu} met him, and was so pleased that Garuḍa had not been greedy that he offered him a boon. Garuḍa asked to be higher than Viṣṇu — so Viṣṇu put him on his banner — and to be immortal without the nectar. In return, Garuḍa became Viṣṇu's vehicle. {indra|Indra} too made friends with him, and they made a plan.", "గరుత్మంతుడు స్వర్గంపై దాడి చేసి, దేవతలను చెల్లాచెదురు చేసి, తిరుగుతున్న కత్తుల చక్రం గుండా చిన్నగా మారి దూరి, ఒక్క చుక్క కూడా తాగకుండా అమృత కలశాన్ని తీసుకున్నాడు. తిరుగు దారిలో {vishnu|విష్ణువు} ఎదురై, గరుత్మంతుడు అత్యాశ చూపనందుకు ఎంతో సంతోషించి వరం ఇవ్వబోయాడు. విష్ణువు కంటే పైన ఉండాలని గరుత్మంతుడు కోరాడు — విష్ణువు అతన్ని తన ధ్వజంపై ఉంచాడు — అమృతం లేకుండానే అమరుడు కావాలని కూడా కోరాడు. బదులుగా గరుత్మంతుడు విష్ణువు వాహనమయ్యాడు. {indra|ఇంద్రుడు} కూడా అతనితో స్నేహం చేశాడు; ఇద్దరూ ఒక పథకం వేశారు."],
   ["p", "Garuḍa set the pot down on kuśa grass before the serpents. “Here is your amṛta. Now my mother is free. But bathe first before you drink it.” As the serpents ran to bathe, Indra swooped down and carried the pot back to heaven. The serpents returned and licked the kuśa grass where the pot had stood — and the sharp grass split their tongues. That, the Mahābhārata says, is why snakes have forked tongues — and why kuśa grass is holy, having touched the amṛta.", "గరుత్మంతుడు నాగుల ఎదుట దర్భలపై కలశాన్ని ఉంచాడు. “ఇదిగో మీ అమృతం. ఇప్పుడు నా తల్లి స్వతంత్రురాలు. కానీ తాగే ముందు స్నానం చేయండి.” నాగులు స్నానానికి పరుగెత్తగానే ఇంద్రుడు కిందికి దూసుకువచ్చి కలశాన్ని స్వర్గానికి తీసుకుపోయాడు. నాగులు తిరిగి వచ్చి కలశం ఉంచిన దర్భలను నాకాయి — పదునైన దర్భలు వాటి నాలుకలను చీల్చాయి. అందుకే పాములకు చీలిన నాలుకలనీ — అమృతాన్ని తాకినందుకే దర్భలు పవిత్రమనీ — మహాభారతం చెబుతుంది."],
   ["dyk", "🦅", "Garuḍa is Vinatā's son, so he is called Vainateya; in Telugu he is lovingly called Garutmantuḍu, and his image stands on top of the flagstaff (dhvaja-stambha) of Viṣṇu temples.", "గరుత్మంతుడు వినత కుమారుడు కాబట్టి వైనతేయుడు అంటారు; తెలుగులో ప్రేమగా గరుత్మంతుడు అంటారు; విష్ణు ఆలయాల ధ్వజస్తంభం పైన ఆయన రూపం ఉంటుంది."],
   ["src", "Mahābhārata, Ādi Parva, the Āstīka section (Garuḍa's birth; the serpents' demand; Kaśyapa's advice about the elephant and tortoise; the Vālakhilyas on the banyan branch and Kaśyapa's plea; the theft of the amṛta; Viṣṇu's boons; Indra's friendship; the kuśa grass and the serpents' split tongues).", "మహాభారతం, ఆది పర్వం, ఆస్తీక భాగం (గరుడ జననం; నాగుల డిమాండ్; ఏనుగు, తాబేలు గురించి కశ్యపుని సలహా; మర్రి కొమ్మపై వాలఖిల్యులు, కశ్యపుని వేడుకోలు; అమృతాపహరణం; విష్ణువు వరాలు; ఇంద్రుని స్నేహం; దర్భలు, నాగుల చీలిన నాలుకలు)."]
  ]
 ],
 remember: [
  ["To free {vinata|Vinatā}, {garuda|Garuḍa} went to bring the amṛta; {kashyapa|Kaśyapa} guided him twice.", "వినతను విడిపించడానికి {garuda|గరుత్మంతుడు} అమృతం తేవడానికి వెళ్ళాడు; {kashyapa|కశ్యపుడు} రెండుసార్లు దారి చూపాడు."],
  ["Kaśyapa persuaded the {valakhilyas|Vālakhilyas} to leave the falling branch.", "విరిగిన కొమ్మను విడవమని కశ్యపుడు {valakhilyas|వాలఖిల్యులను} ఒప్పించాడు."],
  ["Garuḍa freed his mother and became {vishnu|Viṣṇu}'s vehicle; the serpents' tongues were split by kuśa grass.", "గరుత్మంతుడు తల్లిని విడిపించి {vishnu|విష్ణువు} వాహనమయ్యాడు; దర్భలు నాగుల నాలుకలను చీల్చాయి."]
 ],
 think: ["Garuḍa held the nectar of immortality and did not drink a drop. Why do you think that impressed Viṣṇu so much?", "అమృతాన్ని చేత పట్టుకున్నా గరుత్మంతుడు ఒక్క చుక్క కూడా తాగలేదు. అది విష్ణువును అంతగా ఎందుకు మెప్పించిందని మీరనుకుంటున్నారు?"]
},
{
 id: "ks-5", sage: "kashyapa", n: 5, order: 2005, date: "2026-10-23",
 title: "The Dwarf Born to Aditi", titleTe: "అదితికి పుట్టిన వామనుడు",
 src: "Bhāgavata 8.16–8.18",
 who: ["kashyapa", "aditi", "vamana", "bali", "vishnu", "indra"],
 pages: [
  [
   ["p", "When the asura king {bali|Bali} conquered heaven and drove out the gods, {aditi|Aditi}, mother of the gods, was heartbroken. Her sons were homeless wanderers. When {kashyapa|Kaśyapa} came home from a long samādhi, he found his āśrama joyless and his wife in tears.", "అసుర రాజు {bali|బలి} స్వర్గాన్ని జయించి దేవతలను తరిమేసినప్పుడు దేవమాత {aditi|అదితి} గుండె పగిలిపోయింది. ఆమె కుమారులు ఇల్లు లేని సంచారులయ్యారు. సుదీర్ఘ సమాధి నుండి {kashyapa|కశ్యపుడు} ఇంటికి వచ్చేసరికి ఆశ్రమం ఆనందం లేకుండా, భార్య కన్నీళ్ళతో ఉంది."],
   ["p", "Kaśyapa comforted her, and then — like a good teacher — gave her not an answer but a practice. He taught her the *payovrata*, a twelve-day vow of worship to Viṣṇu in the bright half of Phālguna, living only on milk. “Worship the Lord with a pure heart,” he said, “and he will fulfil your wish.”", "కశ్యపుడు ఆమెను ఓదార్చి — మంచి గురువులా — జవాబు కాకుండా ఒక సాధన ఇచ్చాడు. ఫాల్గుణ శుక్లపక్షంలో పాలను మాత్రమే ఆహారంగా తీసుకుంటూ విష్ణువును ఆరాధించే పన్నెండు రోజుల *పయోవ్రతాన్ని* ఆమెకు ఉపదేశించాడు. “పవిత్ర హృదయంతో భగవంతుని ఆరాధించు; ఆయన నీ కోరిక తీరుస్తాడు” అన్నాడు."]
  ],
  [
   ["h", "The Lord as Their Son", "వారి కుమారుడిగా భగవంతుడు"],
   ["p", "Aditi kept the vow with all her heart. On the last day, {vishnu|Viṣṇu} appeared before her and said: “I will be born as your son, entering through Kaśyapa's tapas, and I will win back heaven for your children.” In time, on the twelfth day of the bright fortnight of Bhādrapada, Viṣṇu was born to Aditi and Kaśyapa — and in front of his parents' eyes he became a tiny brāhmaṇa boy, {vamana|Vāmana}, the dwarf.", "అదితి మనస్ఫూర్తిగా వ్రతం పాటించింది. చివరి రోజున {vishnu|విష్ణువు} ప్రత్యక్షమై అన్నాడు: “కశ్యపుని తపస్సు ద్వారా ప్రవేశించి నీ కుమారుడిగా పుడతాను; నీ బిడ్డలకు స్వర్గాన్ని తిరిగి గెలుచుకుంటాను.” కాలక్రమంలో భాద్రపద శుక్ల ద్వాదశి నాడు విష్ణువు అదితి, కశ్యపులకు జన్మించాడు — తల్లిదండ్రుల కళ్ళ ఎదుటే చిన్న బ్రాహ్మణ బాలుడు {vamana|వామనుడు} అయ్యాడు."],
   ["p", "Kaśyapa himself performed his son's sacred-thread ceremony. The Sun taught him the Gāyatrī, Bṛhaspati gave him the sacred thread, Kaśyapa the girdle of muñja grass, the Earth a deerskin, the Moon a staff, and Aditi a loincloth. Then the little brahmacārin set off for Bali's great sacrifice on the Narmadā, to ask for three steps of land.", "కశ్యపుడే స్వయంగా కుమారునికి ఉపనయనం చేశాడు. సూర్యుడు గాయత్రిని ఉపదేశించాడు; బృహస్పతి యజ్ఞోపవీతం, కశ్యపుడు ముంజ మొలతాడు, భూమి జింకచర్మం, చంద్రుడు దండం, అదితి కౌపీనం ఇచ్చారు. తర్వాత ఆ చిన్నారి బ్రహ్మచారి మూడు అడుగుల నేల అడగడానికి నర్మదా తీరాన బలి మహాయాగానికి బయలుదేరాడు."],
   ["sglink", "Bali and the Dwarf", "బలి, వామనుడు", "sk-7"]
  ],
  [
   ["h", "Three Steps", "మూడు అడుగులు"],
   ["p", "Bali promised the boy his three steps, against his guru Śukra's warning. Then Vāmana grew, and grew, until with one step he covered the earth, with the second the heavens, and there was no place left for the third. Bali bowed his head: “Place your third step here.” So {indra|Indra}, Aditi's son, got back his heaven, and Bali, for his truthfulness, was given the underworld Sutala to rule, with the Lord himself as his gatekeeper.", "గురువు శుక్రుని హెచ్చరికను కాదని బలి ఆ బాలునికి మూడు అడుగులు ఇస్తానన్నాడు. అప్పుడు వామనుడు పెరిగి పెరిగి — ఒక అడుగుతో భూమినీ, రెండో అడుగుతో స్వర్గాన్నీ కప్పేశాడు; మూడో అడుగుకు చోటే లేదు. బలి తల వంచాడు: “మూడో అడుగు ఇక్కడ పెట్టండి.” అలా అదితి కుమారుడు {indra|ఇంద్రుడు} తన స్వర్గాన్ని తిరిగి పొందాడు; సత్యసంధతకు బలికి సుతల లోకాధిపత్యం దక్కింది; స్వయంగా భగవంతుడే ఆయనకు ద్వారపాలకుడయ్యాడు."],
   ["dyk", "🌙", "Vāmana Jayantī falls on Bhādrapada śukla dvādaśī. And it was Kaśyapa's simple gift to his grieving wife — a vow, not a weapon — that brought the Lord into their home.", "వామన జయంతి భాద్రపద శుక్ల ద్వాదశి నాడు వస్తుంది. దుఃఖిస్తున్న భార్యకు కశ్యపుడు ఇచ్చిన సరళ కానుక — ఆయుధం కాదు, ఒక వ్రతం — భగవంతుణ్ణి వారి ఇంటికి తెచ్చింది."],
   ["src", "Bhāgavata Purāṇa 8.16 (Aditi's grief; Kaśyapa teaches the payovrata), 8.17 (Viṣṇu appears to Aditi), 8.18 (Vāmana's birth; his upanayana and the gifts of the gods; his journey to Bali), 8.19–8.23 (the three steps; Bali given Sutala).", "భాగవత పురాణం 8.16 (అదితి దుఃఖం; కశ్యపుడు పయోవ్రతం ఉపదేశించడం), 8.17 (అదితికి విష్ణువు ప్రత్యక్షం), 8.18 (వామన జననం; ఆయన ఉపనయనం, దేవతల కానుకలు; బలి దగ్గరికి ప్రయాణం), 8.19–8.23 (మూడు అడుగులు; బలికి సుతలం)."]
  ]
 ],
 remember: [
  ["When {bali|Bali} took heaven, {kashyapa|Kaśyapa} taught grieving {aditi|Aditi} the payovrata.", "{bali|బలి} స్వర్గాన్ని తీసుకున్నప్పుడు దుఃఖిస్తున్న {aditi|అదితికి} {kashyapa|కశ్యపుడు} పయోవ్రతం ఉపదేశించాడు."],
  ["{vishnu|Viṣṇu} was born to them as {vamana|Vāmana}, and Kaśyapa gave him the sacred thread.", "{vishnu|విష్ణువు} వారికి {vamana|వామనుడిగా} జన్మించాడు; కశ్యపుడు ఆయనకు ఉపనయనం చేశాడు."],
  ["With three steps Vāmana won back heaven for {indra|Indra}.", "మూడు అడుగులతో వామనుడు {indra|ఇంద్రునికి} స్వర్గాన్ని తిరిగి గెలిచాడు."]
 ],
 think: ["Kaśyapa did not fight for his wife's sons — he taught her to pray. When is patience a better answer than a fight?", "కశ్యపుడు భార్య కుమారుల కోసం పోరాడలేదు — ప్రార్థించడం నేర్పాడు. పోరాటం కంటే ఓర్పు ఎప్పుడు మంచి జవాబు?"]
},
{
 id: "ks-6", sage: "kashyapa", n: 6, order: 2006, date: "2026-10-23",
 title: "The Earth Given to Kaśyapa", titleTe: "కశ్యపునికి దానమిచ్చిన భూమి",
 src: "Mahābhārata, Śānti Parva",
 who: ["kashyapa", "parashurama", "bhudevi"],
 pages: [
  [
   ["p", "When {parashurama|Paraśurāma} finished his twenty-one campaigns, he performed a horse-sacrifice and gave the whole earth as the priests' fee to {kashyapa|Kaśyapa}. Kaśyapa accepted the earth — and immediately did something wise. He told Paraśurāma: “This land is mine now. You must not live in it. Go to the shore of the southern ocean.” He knew the earth would never have peace while the warrior-sage remained on it.", "{parashurama|పరశురాముడు} తన ఇరవై ఒక్క దండయాత్రలు ముగించాక అశ్వమేధం చేసి సమస్త భూమినీ పురోహితుల దక్షిణగా {kashyapa|కశ్యపునికి} ఇచ్చాడు. కశ్యపుడు భూమిని స్వీకరించి — వెంటనే వివేకవంతమైన పని చేశాడు. పరశురామునితో అన్నాడు: “ఈ భూమి ఇప్పుడు నాది. నువ్వు ఇందులో ఉండకూడదు. దక్షిణ సముద్ర తీరానికి వెళ్ళు.” యోధముని భూమిపై ఉన్నంతకాలం దానికి శాంతి ఉండదని ఆయనకు తెలుసు."],
   ["sglink", "Paraśurāma's side of the story", "కథలో పరశురాముని వైపు", "jp-6"]
  ],
  [
   ["h", "The Earth Asks for Kings", "రాజుల కోసం భూదేవి వేడుకోలు"],
   ["p", "But with no kings left to protect her, the earth fell into disorder. The strong preyed on the weak, like big fish eating small fish. The Śānti Parva says that the {bhudevi|Earth} herself, in distress, sank down — and Kaśyapa held her up on his thigh, so she is called *Urvī*. She begged him: “Give me kings to protect me. Some princes of the old royal families are still alive, hidden — among the cowherds, by the sages, in the forests and mountains. Find them, and make them kings.”", "కానీ కాపాడే రాజులు లేకపోవడంతో భూమి అస్తవ్యస్తమైంది. పెద్ద చేపలు చిన్న చేపలను తిన్నట్టు బలవంతులు బలహీనులను పీడించారు. బాధతో {bhudevi|భూదేవి} కిందికి కుంగిపోగా కశ్యపుడు ఆమెను తన తొడపై (ఊరువుపై) నిలిపాడనీ, అందుకే ఆమెను *ఉర్వి* అంటారనీ శాంతి పర్వం చెబుతుంది. ఆమె ఆయనను వేడుకుంది: “నన్ను కాపాడడానికి రాజులను ఇవ్వు. ప్రాచీన రాజవంశాల రాకుమారులు కొందరు ఇంకా దాగి బతికే ఉన్నారు — గోపాలుర మధ్య, మునుల దగ్గర, అడవుల్లో, కొండల్లో. వారిని వెతికి రాజులను చేయి.”"],
   ["p", "So Kaśyapa sought out the hidden princes and set them on their thrones, and order returned to the world. Because she was Kaśyapa's gift and Kaśyapa's care, the earth is also called *Kāśyapī* — “Kaśyapa's.”", "అలా కశ్యపుడు దాగిన రాకుమారులను వెతికి సింహాసనాలపై నిలిపాడు; లోకానికి క్రమం తిరిగి వచ్చింది. కశ్యపుని దానం, కశ్యపుని సంరక్షణ కాబట్టి భూమిని *కాశ్యపి* — “కశ్యపునిది” — అని కూడా అంటారు."],
   ["dyk", "🌍", "Two of the earth's Sanskrit names come from this story: Kāśyapī, “Kaśyapa's,” and Urvī, explained here as the one held on his thigh.", "భూమికి ఉన్న రెండు సంస్కృత పేర్లు ఈ కథ నుండి వస్తాయి: కాశ్యపి — “కశ్యపునిది”; ఉర్వి — ఇక్కడ ఆయన తొడపై నిలిపినదిగా వివరించబడింది."],
   ["src", "Mahābhārata, Śānti Parva (Paraśurāma gives the earth to Kaśyapa and is sent away; the earth in disorder; Kaśyapa holds her on his thigh; she asks for the hidden princes to be made kings; Kaśyapa restores the royal lines).", "మహాభారతం, శాంతి పర్వం (పరశురాముడు భూమిని కశ్యపునికి ఇచ్చి పంపబడడం; అస్తవ్యస్తమైన భూమి; కశ్యపుడు ఆమెను తొడపై నిలపడం; దాగిన రాకుమారులను రాజులను చేయమని ఆమె కోరడం; కశ్యపుడు రాజవంశాలను పునరుద్ధరించడం)."]
  ]
 ],
 remember: [
  ["{parashurama|Paraśurāma} gave the earth to {kashyapa|Kaśyapa}, who sent him away so the earth could have peace.", "{parashurama|పరశురాముడు} భూమిని {kashyapa|కశ్యపునికి} ఇచ్చాడు; భూమికి శాంతి కోసం కశ్యపుడు ఆయనను పంపేశాడు."],
  ["The {bhudevi|Earth} asked Kaśyapa to find the hidden princes and make them kings.", "దాగిన రాకుమారులను వెతికి రాజులను చేయమని {bhudevi|భూదేవి} కశ్యపుని కోరింది."],
  ["So the earth is called Kāśyapī — Kaśyapa's.", "అందుకే భూమిని కాశ్యపి — కశ్యపునిది — అంటారు."]
 ],
 think: ["Kaśyapa owned the whole earth for a moment, and used that moment to give it back to others. What would you do if you were given everything?", "కశ్యపుడు ఒక్క క్షణం భూమంతటికీ యజమాని అయ్యాడు; ఆ క్షణాన్ని దాన్ని ఇతరులకు తిరిగి ఇవ్వడానికి వాడాడు. మీకు అంతా ఇస్తే మీరేం చేస్తారు?"]
},
{
 id: "ks-7", sage: "kashyapa", n: 7, order: 2007, date: "2026-10-23",
 title: "The Lake That Became Kashmir", titleTe: "కాశ్మీరంగా మారిన సరస్సు",
 src: "Nīlamata Purāṇa · Rājataraṅgiṇī 1",
 who: ["kashyapa", "vishnu", "shiva", "brahma"],
 pages: [
  [
   ["p", "The valley of Kashmir has its own sacred book, the Nīlamata Purāṇa, and its own great history, Kalhaṇa's Rājataraṅgiṇī, “the River of Kings.” Both begin with the same story — and its hero is {kashyapa|Kaśyapa}.", "కాశ్మీర లోయకు సొంత పవిత్ర గ్రంథం — నీలమత పురాణం — సొంత మహా చరిత్ర — కల్హణుని రాజతరంగిణి, “రాజుల నది” — ఉన్నాయి. రెండూ ఒకే కథతో మొదలవుతాయి — దాని నాయకుడు {kashyapa|కశ్యపుడు}."],
   ["p", "Long ago, the whole valley was a great lake, called Satīsaras — the lake of Satī, the goddess. In its waters lived a demon named Jalodbhava, “born of water,” who had a boon that he could not be killed while in the water. From the lake he came out to raid the lands around, and then slipped back into the depths where no one could touch him.", "చాలా కాలం క్రితం లోయ అంతా ఒక మహా సరస్సు — సతీసరస్సు, సతీదేవి సరస్సు. దాని నీటిలో జలోద్భవుడు — “నీటి నుండి పుట్టినవాడు” — అనే రాక్షసుడు నివసించేవాడు; నీటిలో ఉన్నంతవరకు ఎవరూ చంపలేని వరం అతనికి ఉంది. సరస్సు నుండి బయటకు వచ్చి చుట్టుపక్కల ప్రాంతాలను దోచుకుని, ఎవరూ తాకలేని లోతుల్లోకి జారుకునేవాడు."]
  ],
  [
   ["h", "Draining the Lake", "సరస్సును ఖాళీ చేయడం"],
   ["p", "Kaśyapa, travelling through the land on pilgrimage, saw the suffering of the people and prayed to the gods for help. {brahma|Brahmā}, {vishnu|Viṣṇu} and {shiva|Śiva} came. The waters had to be emptied so the demon could be fought on dry land. In the Nīlamata Purāṇa, Viṣṇu's brother Ananta, Balarāma, struck the mountains with his plough and cut an opening, and the waters of the lake rushed out through the gap at Varāhamūla (today's Baramulla). With the lake drained, Viṣṇu fought Jalodbhava on the dry ground and killed him.", "తీర్థయాత్రలో ఆ ప్రాంతం గుండా వెళ్తున్న కశ్యపుడు ప్రజల బాధ చూసి సహాయం కోసం దేవతలను ప్రార్థించాడు. {brahma|బ్రహ్మ}, {vishnu|విష్ణువు}, {shiva|శివుడు} వచ్చారు. రాక్షసునితో పొడి నేలపై పోరాడాలంటే నీటిని ఖాళీ చేయాలి. నీలమత పురాణంలో విష్ణువు సోదరుడు అనంతుడు — బలరాముడు — తన నాగలితో కొండలను కొట్టి ఒక ద్వారం చేశాడు; సరస్సు నీరు వరాహమూల (నేటి బారాముల్లా) దగ్గరి కనుమ గుండా బయటకు పరుగెత్తింది. సరస్సు ఖాళీ అయ్యాక విష్ణువు పొడి నేలపై జలోద్భవునితో పోరాడి అతన్ని సంహరించాడు."],
   ["p", "Where the lake had been, a beautiful green valley appeared. Kaśyapa brought people to settle in it, and the land flourished. Popular tradition explains the name Kashmir as Kaśyapa-mīra — “Kaśyapa's lake” or “Kaśyapa's land” — though this is a folk explanation of the name.", "సరస్సు ఉన్నచోట అందమైన పచ్చని లోయ కనిపించింది. కశ్యపుడు అందులో నివసించడానికి జనాన్ని తెచ్చాడు; ఆ భూమి సుసంపన్నమైంది. కాశ్మీర్ అనే పేరును కశ్యప-మీర — “కశ్యపుని సరస్సు” లేదా “కశ్యపుని భూమి” — అని జనసంప్రదాయం వివరిస్తుంది — అయితే ఇది ఆ పేరుకు జానపద వివరణ."]
  ],
  [
   ["h", "A Story the Earth Remembers", "భూమి గుర్తుంచుకున్న కథ"],
   ["p", "Remarkably, geologists say the Kashmir valley really was once a great lake, drained when the waters cut through the mountains near Baramulla. The old story of Kaśyapa and the drained lake may hold a memory, in the language of the gods, of the land's own history.", "విశేషమేమిటంటే కాశ్మీర లోయ నిజంగానే ఒకప్పుడు మహా సరస్సు అనీ, బారాముల్లా దగ్గర నీరు కొండలను చీల్చుకుని వెళ్ళడంతో ఖాళీ అయిందనీ భూగర్భ శాస్త్రవేత్తలు చెబుతారు. కశ్యపుడు, ఖాళీ అయిన సరస్సు అనే పాత కథ దేవతల భాషలో ఆ భూమి సొంత చరిత్రను గుర్తుపెట్టుకుని ఉండవచ్చు."],
   ["dyk", "🏔️", "Kalhaṇa wrote the Rājataraṅgiṇī in the twelfth century, and opened it with this story before telling the history of Kashmir's kings.", "కల్హణుడు పన్నెండవ శతాబ్దంలో రాజతరంగిణి రాశాడు; కాశ్మీర రాజుల చరిత్ర చెప్పేముందు ఈ కథతోనే దాన్ని ప్రారంభించాడు."],
   ["src", "Nīlamata Purāṇa (Satīsaras; the demon Jalodbhava; Kaśyapa's prayer; the lake drained at Varāhamūla; the valley settled). Kalhaṇa, Rājataraṅgiṇī, Book 1 (the same founding story). The derivation “Kaśyapa-mīra” is a popular explanation.", "నీలమత పురాణం (సతీసరస్సు; జలోద్భవుడు; కశ్యపుని ప్రార్థన; వరాహమూల దగ్గర సరస్సు ఖాళీ కావడం; లోయలో నివాసం). కల్హణుడు, రాజతరంగిణి, 1వ తరంగం (అదే స్థాపక కథ). “కశ్యప-మీర” అనే వ్యుత్పత్తి జనప్రియ వివరణ."]
  ]
 ],
 remember: [
  ["Kashmir was once a lake, Satīsaras, where the water-demon Jalodbhava lived.", "కాశ్మీరం ఒకప్పుడు సతీసరస్సు; అందులో జలోద్భవుడనే రాక్షసుడు నివసించాడు."],
  ["{kashyapa|Kaśyapa} prayed; the lake was drained at Varāhamūla and {vishnu|Viṣṇu} killed the demon.", "{kashyapa|కశ్యపుడు} ప్రార్థించాడు; వరాహమూల దగ్గర సరస్సు ఖాళీ అయింది; {vishnu|విష్ణువు} రాక్షసుణ్ణి సంహరించాడు."],
  ["Kaśyapa settled the valley; tradition links the name Kashmir with him.", "కశ్యపుడు లోయలో జనాన్ని నివసింపజేశాడు; కాశ్మీర్ అనే పేరును సంప్రదాయం ఆయనతో జోడిస్తుంది."]
 ],
 think: ["Geologists say the Kashmir valley really was a lake. Why do you think old stories sometimes remember things that science later discovers?", "కాశ్మీర లోయ నిజంగానే సరస్సు అని భూగర్భ శాస్త్రవేత్తలు చెబుతారు. శాస్త్రం తరువాత కనుగొనే విషయాలను పాత కథలు ఒక్కోసారి ఎందుకు గుర్తుంచుకుంటాయని మీరనుకుంటున్నారు?"]
},
{
 id: "ks-8", sage: "kashyapa", n: 8, order: 2008, date: "2026-10-23",
 title: "Kāśyapa the Healer — and the Gotra of All", titleTe: "వైద్యుడు కాశ్యపుడు — అందరి గోత్రం",
 src: "Mahābhārata, Ādi Parva · Kāśyapa Saṃhitā · living tradition",
 who: ["kashyapa", "takshaka", "parikshit"],
 pages: [
  [
   ["h", "The Healer on the Road", "దారిలో వైద్యుడు"],
   ["p", "The Mahābhārata tells of a later brāhmaṇa of Kaśyapa's line, also called Kāśyapa, who was a master healer of snakebite. When King {parikshit|Parīkṣit}, Arjuna's grandson, was cursed to die in seven days by the bite of the serpent {takshaka|Takṣaka}, Kāśyapa set out for the king's city, hoping to save him and earn a rich reward.", "కశ్యప వంశానికి చెందిన తరువాతి కాలపు ఒక బ్రాహ్మణుడు — అతన్నీ కాశ్యపుడనే అంటారు — పాముకాటుకు నిష్ణాతుడైన వైద్యుడని మహాభారతం చెబుతుంది. అర్జునుని మనుమడు {parikshit|పరీక్షిత్తు} మహారాజు {takshaka|తక్షకుని} కాటుతో ఏడు రోజుల్లో మరణిస్తాడని శాపం పొందినప్పుడు, అతన్ని కాపాడి గొప్ప బహుమానం పొందాలని కాశ్యపుడు రాజు నగరానికి బయలుదేరాడు."],
   ["p", "On the road he met an old brāhmaṇa — Takṣaka in disguise. “Where are you going?” “To save the king from Takṣaka's poison.” “I am Takṣaka. Show me your power.” The serpent bit a great banyan tree, and it burned to ashes. Kāśyapa gathered the ashes and, by his healing mantras, brought the tree back — first a sprout, then leaves, then the whole tree, green and tall again.", "దారిలో ఒక ముసలి బ్రాహ్మణుడు ఎదురయ్యాడు — మారువేషంలో తక్షకుడు. “ఎక్కడికి వెళ్తున్నావు?” “తక్షకుని విషం నుండి రాజును కాపాడడానికి.” “నేనే తక్షకుణ్ణి. నీ శక్తి చూపించు.” ఆ నాగుడు ఒక పెద్ద మర్రిచెట్టును కాటేశాడు; అది బూడిదైపోయింది. కాశ్యపుడు ఆ బూడిదను పోగుచేసి తన వైద్య మంత్రాలతో చెట్టును తిరిగి బతికించాడు — మొదట మొలక, తర్వాత ఆకులు, తర్వాత మళ్ళీ పచ్చగా, ఎత్తుగా పూర్తి చెట్టు."],
   ["p", "Takṣaka was alarmed. “What reward did you hope for from the king? I will give you more — go home.” Kāśyapa, seeing by his inner sight that the king's lifespan was truly at its end, took the wealth and turned back. Parīkṣit died by Takṣaka's bite, and his son Janamejaya, in grief and anger, held the great snake-sacrifice at which the Mahābhārata was first told.", "తక్షకుడు భయపడ్డాడు. “రాజు నుండి ఏ బహుమానం ఆశించావు? దానికంటే ఎక్కువ ఇస్తాను — ఇంటికి వెళ్ళు.” రాజు ఆయుష్షు నిజంగానే ముగిసిందని తన అంతర్దృష్టితో చూసి కాశ్యపుడు సంపద తీసుకుని వెనుదిరిగాడు. తక్షకుని కాటుతో పరీక్షిత్తు మరణించాడు; దుఃఖంతో, కోపంతో అతని కుమారుడు జనమేజయుడు సర్పయాగం చేశాడు — అక్కడే మహాభారతం మొదటిసారి చెప్పబడింది."]
  ],
  [
   ["h", "Doctor of Children", "పిల్లల వైద్యుడు"],
   ["p", "An old book of Āyurveda, the *Kāśyapa Saṃhitā*, carries Kaśyapa's name. It is the classic Indian text on the care of children — from pregnancy and birth to infant diseases, feeding and growth. It is presented as the teaching of the sage Kaśyapa to his disciple Vṛddha Jīvaka. So Kaśyapa, father of all creatures, is also remembered as the first doctor of children.", "ఆయుర్వేదపు ఒక ప్రాచీన గ్రంథం — *కాశ్యప సంహిత* — కశ్యపుని పేరుతో ఉంది. పిల్లల సంరక్షణపై — గర్భం, ప్రసవం నుండి శిశు వ్యాధులు, ఆహారం, ఎదుగుదల వరకు — అది ప్రామాణిక భారతీయ గ్రంథం. కశ్యప మహర్షి తన శిష్యుడు వృద్ధ జీవకునికి చేసిన బోధగా అది చెప్పబడింది. అలా సకల జీవులకు తండ్రి అయిన కశ్యపుడు పిల్లలకు తొలి వైద్యునిగా కూడా గుర్తుంచుకోబడతాడు."]
  ],
  [
   ["h", "Everyone's Gotra", "అందరి గోత్రం"],
   ["p", "In many Hindu families, when a person does not know their gotra — their sage-lineage — the custom is to say “Kāśyapa.” The reason goes back to the Śatapatha Brāhmaṇa's old words: all creatures are Kāśyapa, children of Kaśyapa. Whoever you are, says the tradition, you belong to his family.", "చాలా హిందూ కుటుంబాలలో ఎవరికైనా తమ గోత్రం — తమ ఋషి వంశం — తెలియకపోతే “కాశ్యప” అని చెప్పడం ఆచారం. దానికి కారణం శతపథ బ్రాహ్మణంలోని ప్రాచీన మాటలు: సకల జీవులూ కాశ్యపులు — కశ్యపుని సంతానం. మీరెవరైనా ఆయన కుటుంబానికి చెందినవారేనని సంప్రదాయం చెబుతుంది."],
   ["dyk", "👃", "In the Bṛhadāraṇyaka Upaniṣad's picture of the seven sages as the openings of the head, Vasiṣṭha and Kaśyapa are the two nostrils — the breath of life.", "తలలోని ద్వారాలుగా సప్తర్షులను చెప్పే బృహదారణ్యక ఉపనిషత్తు చిత్రంలో వసిష్ఠుడు, కశ్యపుడు రెండు నాసికా రంధ్రాలు — జీవ శ్వాస."],
   ["src", "Mahābhārata, Ādi Parva (Kāśyapa the healer, Takṣaka and the banyan tree; Parīkṣit's death; Janamejaya's snake-sacrifice). Kāśyapa Saṃhitā (Āyurveda of children, taught to Vṛddha Jīvaka). Śatapatha Brāhmaṇa 7.5.1.5 and the custom of Kāśyapa as the gotra for those who do not know theirs. Bṛhadāraṇyaka Upaniṣad 2.2.4.", "మహాభారతం, ఆది పర్వం (వైద్యుడు కాశ్యపుడు, తక్షకుడు, మర్రిచెట్టు; పరీక్షిత్తు మరణం; జనమేజయుని సర్పయాగం). కాశ్యప సంహిత (వృద్ధ జీవకునికి బోధించిన బాల ఆయుర్వేదం). శతపథ బ్రాహ్మణం 7.5.1.5, గోత్రం తెలియనివారికి కాశ్యప గోత్రం చెప్పే ఆచారం. బృహదారణ్యక ఉపనిషత్తు 2.2.4."]
  ]
 ],
 remember: [
  ["The healer Kāśyapa revived a banyan burned by {takshaka|Takṣaka}, but turned back, knowing {parikshit|Parīkṣit}'s time had come.", "తక్షకుడు కాల్చిన మర్రిచెట్టును వైద్యుడు కాశ్యపుడు బతికించాడు; కానీ పరీక్షిత్తు కాలం ముగిసిందని తెలిసి వెనుదిరిగాడు."],
  ["The Kāśyapa Saṃhitā is the classic Āyurveda text on children.", "కాశ్యప సంహిత పిల్లలపై ప్రామాణిక ఆయుర్వేద గ్రంథం."],
  ["Those who do not know their gotra say “Kāśyapa” — all creatures are his children.", "గోత్రం తెలియనివారు “కాశ్యప” అంటారు — సకల జీవులూ ఆయన సంతానమే."]
 ],
 think: ["The tradition says that whoever you are, you belong to Kaśyapa's family. What changes when you think of every creature as family?", "మీరెవరైనా కశ్యపుని కుటుంబానికి చెందినవారేనని సంప్రదాయం చెబుతుంది. ప్రతి ప్రాణినీ కుటుంబంగా భావిస్తే ఏం మారుతుంది?"]
}
]);
