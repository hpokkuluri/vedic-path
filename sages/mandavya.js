// Great Sages — Māṇḍavya (Aṇī-Māṇḍavya). Retold by Hari Pokkuluri.
// Told from the Mahābhārata (Ādi, Udyoga, Śānti and Āśramavāsika Parvas), the Bhāgavata Purāṇa,
// the Mārkaṇḍeya Purāṇa and the Bhagavad Gītā, in fresh original wording.
// Block format: see the top of ramayana.js and sages.js.
window.SAGE_PLAN = Object.assign(window.SAGE_PLAN || {}, { mandavya: [
  ["The Sage at the Gate — a Vow of Silence", "Mahābhārata, Ādi Parva · Bhagavad Gītā 17"],
  ["Thieves in the Āśrama", "Mahābhārata, Ādi Parva"],
  ["Alive on the Stake", "Mahābhārata, Ādi Parva"],
  ["At the Court of Dharma", "Mahābhārata, Ādi Parva"],
  ["The Age of Responsibility — Māṇḍavya's Curse", "Mahābhārata, Ādi Parva · Bhāgavata Purāṇa 1"],
  ["Dharma Walks as a Man — Vidura", "Mahābhārata, Ādi, Sabhā, Udyoga and Āśramavāsika Parvas · Bhāgavata 3"],
  ["The Foot in the Dark — the Sun That Did Not Rise", "Mārkaṇḍeya Purāṇa"],
  ["Māṇḍavya and King Janaka — the End of Craving", "Mahābhārata, Śānti Parva (Mokṣadharma)"],
  ["What Māṇḍavya Leaves Us", "Mahābhārata · Purāṇas · local tradition"]
] });
window.RMY_WHO = Object.assign({
  "mdking": { "av": "👑", "en": "The king who judged Māṇḍavya", "te": "మాండవ్యుని శిక్షించిన రాజు", "d": "A king whom the Mahābhārata does not name. Without looking into the matter, he had the silent sage impaled with the thieves — and later begged his forgiveness.", "dt": "మహాభారతం పేరు చెప్పని ఒక రాజు. విచారణ లేకుండానే మౌనముని అయిన మాండవ్యుని దొంగలతో పాటు శూలానికి ఎక్కించాడు — తర్వాత ఆయన కాళ్ళ మీద పడి క్షమాపణ వేడుకున్నాడు." },
  "ambikadasi": { "av": "🙏", "en": "Ambikā's maid", "te": "అంబిక దాసి", "d": "A palace maid of Queen Ambikā, sent to Vyāsa in her mistress's place. She was not afraid, and her son was Vidura.", "dt": "అంబికా దేవి దగ్గర పనిచేసిన దాసి. రాణి బదులు ఆమెను వ్యాసుని దగ్గరకు పంపారు. ఆమె భయపడలేదు; ఆమె కుమారుడే విదురుడు." },
  "aryama": { "av": "☀️", "en": "Aryamā", "te": "అర్యముడు", "d": "One of the Ādityas, sons of Aditi. The Bhāgavata says he held Yama's rod of justice while Yama lived on earth as Vidura.", "dt": "అదితి కుమారులైన ఆదిత్యులలో ఒకడు. యముడు విదురునిగా భూమిపై ఉన్నంతకాలం ఆయన దండాన్ని అర్యముడు పట్టాడని భాగవతం చెబుతుంది." },
  "uddhava": { "av": "🪈", "en": "Uddhava", "te": "ఉద్ధవుడు", "d": "Kṛṣṇa's dear friend and cousin among the Yādavas, a man of deep devotion and wisdom.", "dt": "యాదవులలో శ్రీకృష్ణుని ప్రియ మిత్రుడు, బంధువు. గొప్ప భక్తుడు, జ్ఞాని." },
  "maitreyamuni": { "av": "🧘", "en": "Maitreya", "te": "మైత్రేయ మహర్షి", "d": "A sage, disciple of Parāśara, who in the Bhāgavata Purāṇa teaches Vidura by the Gaṅgā at Haridvāra.", "dt": "పరాశరుని శిష్యుడైన మహర్షి. భాగవత పురాణంలో హరిద్వారం దగ్గర గంగ ఒడ్డున విదురునికి బోధించాడు." },
  "kaushikapratishthana": { "av": "🧔", "en": "Kauśika of Pratiṣṭhāna", "te": "ప్రతిష్ఠానపుర కౌశికుడు", "d": "In the Mārkaṇḍeya Purāṇa, a sick and harsh-tempered brāhmaṇa whose foot struck Māṇḍavya in the dark, drawing his curse.", "dt": "మార్కండేయ పురాణంలో రోగగ్రస్తుడు, కటువైన స్వభావం గల బ్రాహ్మణుడు. చీకట్లో అతని పాదం మాండవ్యునికి తగిలి శాపం తెచ్చింది." },
  "videhajanaka": { "av": "🌾", "en": "Janaka of Videha", "te": "విదేహ జనకుడు", "d": "Janaka is the title of the kings of Mithilā. In the Śānti Parva a Janaka, free of all clinging, answers the sage Māṇḍavya's question about happiness.", "dt": "మిథిలా రాజులందరికీ జనకుడు అనేది బిరుదు. శాంతి పర్వంలో ఏ బంధమూ లేని ఒక జనక మహారాజు మాండవ్య మహర్షి సుఖం గురించి అడిగిన ప్రశ్నకు జవాబిస్తాడు." }
}, window.RMY_WHO || {});
window.SAGE_CHAPTERS = (window.SAGE_CHAPTERS || []).concat([
{
 id: "md-1", sage: "mandavya", n: 1, order: 2701, date: "2026-10-28",
 title: "The Sage at the Gate — a Vow of Silence", titleTe: "ఆశ్రమ ద్వారం దగ్గర మౌనముని",
 src: "Mahābhārata, Ādi Parva · Bhagavad Gītā 17",
 who: ["mandavya", "janamejaya", "vaishampayana", "vidura", "dharma"],
 pages: [
  [
   ["p", "Some sages are famous for what they said. {mandavya|Māṇḍavya} is famous for what he did not say. His whole story turns on one long silence — and on one hard question that he later put to the god of justice himself.", "కొందరు మహర్షులు తాము చెప్పిన మాటలతో ప్రసిద్ధులయ్యారు. {mandavya|మాండవ్యుడు} మాత్రం తాను చెప్పని మాటతో ప్రసిద్ధుడయ్యాడు. ఆయన కథ అంతా ఒక సుదీర్ఘమైన మౌనం చుట్టూ తిరుగుతుంది — ఆ తర్వాత ఆయన స్వయంగా ధర్మదేవుణ్ణే అడిగిన ఒక కఠినమైన ప్రశ్న చుట్టూ."],
   ["p", "The Mahābhārata tells his story because of a question. The sage {vaishampayana|Vaiśampāyana} was reciting the epic to King {janamejaya|Janamejaya}. When he came to the birth of {vidura|Vidura}, he said that Vidura was really {dharma|Dharma}, the god of justice, born as a man because of the curse of a sage called Aṇī-Māṇḍavya.", "మహాభారతం ఈ కథను ఒక ప్రశ్న వల్ల చెబుతుంది. {vaishampayana|వైశంపాయన మహర్షి} {janamejaya|జనమేజయ మహారాజుకు} భారత కథ వినిపిస్తున్నాడు. {vidura|విదురుని} జన్మ దగ్గరికి వచ్చినప్పుడు, విదురుడు నిజానికి ధర్మదేవతే అనీ, అణిమాండవ్యుడనే ముని శాపం వల్ల మనిషిగా పుట్టాడనీ చెప్పాడు."],
   ["p", "Janamejaya stopped him at once. “What did Dharma do, that he should be cursed? And who was this brahmarṣi whose curse was strong enough to make the god of justice be born as the son of a servant woman?” So Vaiśampāyana went back and told the story from the beginning.", "జనమేజయుడు వెంటనే ఆపి అడిగాడు: “ధర్మదేవుడు ఏం చేశాడని శాపం పొందాడు? న్యాయానికి అధిపతి అయిన దేవుణ్ణి ఒక దాసి కొడుకుగా పుట్టించగలిగేంత శక్తి గల శాపం ఇచ్చిన ఆ బ్రహ్మర్షి ఎవరు?” అప్పుడు వైశంపాయనుడు వెనక్కి వెళ్ళి ఆ కథను మొదటి నుండి చెప్పాడు."]
  ],
  [
   ["h", "Arms raised, lips closed", "చేతులు పైకెత్తి, పెదవులు మూసి"],
   ["p", "The epic describes Māṇḍavya in a few words, and every word is praise. He was a brāhmaṇa known far and wide, steady in mind, a knower of dharma, devoted to tapas and firm in truth. He lived in an āśrama in the forest.", "మహాభారతం మాండవ్యుని గురించి కొన్ని మాటలే చెబుతుంది — ప్రతి మాటా ప్రశంసే. ఆయన అంతటా పేరు పొందిన బ్రాహ్మణుడు, స్థిరమైన మనసు కలవాడు, ధర్మం తెలిసినవాడు, తపస్సులో నిమగ్నుడు, సత్యం విడువనివాడు. అడవిలో ఒక ఆశ్రమంలో ఉండేవాడు."],
   ["p", "At the gate of that āśrama, at the foot of a tree, he stood with both his arms raised to the sky. He had taken a vow of mauna — silence. Day after day, season after season, he stood there and said nothing at all.", "ఆ ఆశ్రమ ద్వారం దగ్గర, ఒక చెట్టు మొదట్లో, రెండు చేతులూ ఆకాశం వైపు ఎత్తి నిలబడేవాడు. ఆయన మౌనవ్రతం పట్టాడు. రోజుల తరబడి, ఋతువుల తరబడి అక్కడే నిలబడి ఒక్క మాట కూడా మాట్లాడలేదు."],
   ["dyk", "🪵", "His name tells the end of his story. *Aṇī* means the sharp point or tip — and before this story is over, the point of a stake will stay inside his body for the rest of his life. People called him Aṇī-Māṇḍavya, “Māṇḍavya of the point.”", "ఆయన పేరులోనే కథ ముగింపు ఉంది. *అణి* అంటే మొన, కొన. ఈ కథ ముగిసేసరికి ఒక శూలం మొన జీవితాంతం ఆయన శరీరంలోనే ఉండిపోతుంది. అందుకే జనం ఆయనను అణిమాండవ్యుడు — “మొన గల మాండవ్యుడు” — అని పిలిచారు."]
  ],
  [
   ["h", "Why silence is tapas", "మౌనం ఎందుకు తపస్సు"],
   ["p", "Of all the senses, speech is said to be the hardest to tame. Words slip out in anger, in boasting, in fear, in gossip. A vow of silence is a way of holding the mind still by holding the tongue still. The Bhagavad Gītā counts silence among the austerities of the mind.", "అన్ని ఇంద్రియాలలోకీ మాటను అదుపు చేయడం అన్నిటికంటే కష్టం అంటారు. కోపంలో, గొప్పలు చెప్పుకునేటప్పుడు, భయంలో, చాడీలలో మాటలు జారిపోతాయి. నాలుకను స్థిరంగా ఉంచడం ద్వారా మనసును స్థిరంగా ఉంచే మార్గమే మౌనవ్రతం. భగవద్గీత మౌనాన్ని మానసిక తపస్సులలో ఒకటిగా లెక్కిస్తుంది."],
   ["sloka", ["మనఃప్రసాదః సౌమ్యత్వం మౌనమాత్మవినిగ్రహః ।", "భావసంశుద్ధిరిత్యేతత్తపో మానసముచ్యతే ॥"], ["manaḥprasādaḥ saumyatvaṃ maunam ātmavinigrahaḥ |", "bhāvasaṃśuddhir ity etat tapo mānasam ucyate ||"], "Calmness of mind, gentleness, silence, self-control and purity of heart — this is called the austerity of the mind. (Bhagavad Gītā 17.16)", "మనసు ప్రసన్నంగా ఉండటం, సౌమ్యత, మౌనం, ఆత్మనిగ్రహం, భావశుద్ధి — వీటిని మానసిక తపస్సు అంటారు. (భగవద్గీత 17.16)"],
   ["p", "A vow is a promise made to oneself and to God. Māṇḍavya would keep his even when breaking it might have saved him. That is the hinge on which his whole life turns.", "వ్రతం అంటే తనకు తానూ, దేవునికీ ఇచ్చుకున్న మాట. దాన్ని విడిస్తే తనను తాను కాపాడుకోగలిగే సమయంలో కూడా మాండవ్యుడు దాన్ని విడవలేదు. ఆయన జీవితమంతా ఆ ఒక్క విషయం మీదే తిరుగుతుంది."]
  ],
  [
   ["more", "Which Māṇḍavya?", "ఏ మాండవ్యుడు?", "One name in several books", "ఎన్నో గ్రంథాలలో ఒకే పేరు", [
    ["p", "The name Māṇḍavya comes up in more than one place. The Ādi Parva tells of the sage on the stake. The Mārkaṇḍeya Purāṇa also puts a Māṇḍavya on a stake, in a different city and a different story. The Śānti Parva has a Māṇḍavya who asks King Janaka about happiness. The texts never say plainly that these are one man; storytellers usually treat them as one, and we tell all of them here, noting where they do not fit together.", "మాండవ్యుడు అనే పేరు ఒకటికంటే ఎక్కువ చోట్ల వస్తుంది. ఆది పర్వం శూలం మీద ఉన్న మునిని గురించి చెబుతుంది. మార్కండేయ పురాణం కూడా ఒక మాండవ్యుణ్ణి శూలం మీద చూపిస్తుంది — వేరే ఊరిలో, వేరే కథలో. శాంతి పర్వంలో జనక మహారాజును సుఖం గురించి అడిగే మాండవ్యుడు ఉన్నాడు. వీరంతా ఒక్కరే అని గ్రంథాలు స్పష్టంగా చెప్పవు; కథకులు సాధారణంగా ఒక్కరిగానే చెబుతారు. మనం అన్నీ ఇక్కడ చెప్పుకుందాం — ఎక్కడ పొంతన కుదరదో అది కూడా చెబుతూ."],
    ["p", "Do not mix him up with the Māṇḍūkya Upaniṣad, the short Upaniṣad on Om. That name comes from a different teacher, Maṇḍūka, and has nothing to do with our sage.", "ఓంకారం గురించి చెప్పే చిన్న ఉపనిషత్తు అయిన మాండూక్య ఉపనిషత్తుతో ఈయనను కలపకండి. ఆ పేరు మండూకుడు అనే వేరే గురువు నుండి వచ్చింది; మన మాండవ్యునితో దానికి సంబంధం లేదు."]
   ]],
   ["src", "Mahābhārata, Ādi Parva — Janamejaya's question and the story of Aṇī-Māṇḍavya, told after the birth of Vidura (the Aṇīmāṇḍavya episode, Sambhava section). Bhagavad Gītā 17.16 (silence as austerity of the mind).", "మహాభారతం, ఆది పర్వం — విదురుని జన్మ తర్వాత జనమేజయుని ప్రశ్న, అణిమాండవ్యుని కథ (సంభవ పర్వంలోని అణిమాండవ్యోపాఖ్యానం). భగవద్గీత 17.16 (మౌనం మానసిక తపస్సు)."]
  ]
 ],
 remember: [
  ["{mandavya|Māṇḍavya} stood at his āśrama gate with arms raised, keeping a vow of silence.", "{mandavya|మాండవ్యుడు} ఆశ్రమ ద్వారం దగ్గర చేతులు పైకెత్తి మౌనవ్రతంలో నిలబడేవాడు."],
  ["{janamejaya|Janamejaya} asked why Dharma was cursed — and so the story was told.", "ధర్మదేవుడు ఎందుకు శాపం పొందాడని {janamejaya|జనమేజయుడు} అడగడంతో ఈ కథ చెప్పబడింది."],
  ["The Gītā counts silence among the austerities of the mind.", "భగవద్గీత మౌనాన్ని మానసిక తపస్సులలో లెక్కిస్తుంది."]
 ],
 think: ["Try staying silent for one hour at home. What did you notice about how often you wanted to speak — and why?", "ఇంట్లో ఒక గంట పాటు మౌనంగా ఉండి చూడండి. ఎన్నిసార్లు మాట్లాడాలనిపించిందో, ఎందుకో గమనించారా?"]
},
{
 id: "md-2", sage: "mandavya", n: 2, order: 2702, date: "2026-10-28",
 title: "Thieves in the Āśrama", titleTe: "ఆశ్రమంలో దొంగలు",
 src: "Mahābhārata, Ādi Parva",
 who: ["mandavya", "mdking"],
 pages: [
  [
   ["p", "One day the quiet of the forest broke. A band of thieves came running towards the āśrama, carrying stolen goods. Behind them, not far off, came the king's guards, chasing them.", "ఒక రోజు అడవిలోని నిశ్శబ్దం చెదిరిపోయింది. దొంగిలించిన సొమ్ము మోసుకుంటూ ఒక దొంగల గుంపు ఆశ్రమం వైపు పరుగెత్తుకొచ్చింది. వారి వెనకే, కొంచెం దూరంలో, రాజభటులు తరుముకొస్తున్నారు."],
   ["p", "The thieves saw the āśrama and thought it a good hiding place. They pushed their loot into a corner of it and hid themselves there too. All this happened in front of {mandavya|Māṇḍavya}, standing at the gate with his arms raised. He saw everything. He said nothing.", "దొంగలు ఆశ్రమాన్ని చూసి దాక్కోడానికి మంచి చోటు అనుకున్నారు. సొమ్మును ఆశ్రమంలో ఒక మూల దాచి, తామూ అక్కడే దాక్కున్నారు. ఇదంతా ద్వారం దగ్గర చేతులెత్తి నిలబడిన {mandavya|మాండవ్యుని} కళ్ళ ముందే జరిగింది. ఆయన అంతా చూశాడు. ఏమీ అనలేదు."]
  ],
  [
   ["h", "The question at the gate", "ద్వారం దగ్గర ప్రశ్న"],
   ["p", "The guards came up, panting, and found the sage standing there. “Brāhmaṇa, which way did the thieves go? Tell us quickly, so that we can catch them.”", "భటులు ఆయాసపడుతూ వచ్చి అక్కడ నిలబడిన మునిని చూశారు. “స్వామీ, దొంగలు ఏ వైపు వెళ్ళారు? తొందరగా చెప్పండి, పట్టుకుంటాం.”"],
   ["p", "Māṇḍavya gave no answer — the epic says he spoke not a word, good or bad. The guards asked again. Still silence. So they searched the āśrama themselves, and there they found the thieves crouching, and the stolen goods beside them.", "మాండవ్యుడు జవాబివ్వలేదు — మంచిగానీ చెడ్డగానీ ఒక్క మాట కూడా అనలేదని మహాభారతం చెబుతుంది. భటులు మళ్ళీ అడిగారు. మళ్ళీ మౌనమే. దాంతో వాళ్ళే ఆశ్రమమంతా వెతికారు. అక్కడ ముడుచుకుని దాక్కున్న దొంగలూ, పక్కనే దొంగ సొమ్మూ దొరికాయి."],
   ["p", "Now the guards looked at the silent sage with suspicion. “The thieves were in his āśrama. The goods were in his āśrama. He would not tell us where they were. He must be one of them.” They seized Māṇḍavya along with the thieves and dragged them all before the king.", "ఇప్పుడు భటులు ఆ మౌనమునిని అనుమానంగా చూశారు. “దొంగలు ఇతని ఆశ్రమంలోనే ఉన్నారు. సొమ్ము ఇతని ఆశ్రమంలోనే ఉంది. ఎక్కడున్నారో అడిగితే చెప్పలేదు. ఇతనూ వాళ్ళలో ఒకడే అయి ఉంటాడు.” దొంగలతో పాటు మాండవ్యుణ్ణి కూడా పట్టుకుని రాజు దగ్గరికి ఈడ్చుకెళ్ళారు."]
  ],
  [
   ["h", "A judgement without a hearing", "విచారణ లేని తీర్పు"],
   ["p", "{mdking|The king} did not ask the sage a single question. He did not send anyone to find out who lived in that āśrama. He heard the guards, saw the stolen goods, and passed one sentence on everyone brought before him: death on the stake, the śūla — one of the cruellest punishments of those times.", "{mdking|రాజు} మునిని ఒక్క ప్రశ్న కూడా అడగలేదు. ఆ ఆశ్రమంలో ఉండేదెవరో కనుక్కోమని ఎవరినీ పంపలేదు. భటుల మాట విని, దొంగ సొమ్ము చూసి, తన ముందుకు తెచ్చినవారందరికీ ఒకే శిక్ష విధించాడు — శూలం మీద ఎక్కించి చంపడం. ఆ కాలపు అతి క్రూరమైన శిక్షలలో అది ఒకటి."],
   ["p", "The guards carried out the order. The thieves and the sage were all put upon stakes. Then the guards took the recovered wealth back to the king, and everyone thought the matter was finished.", "భటులు ఆజ్ఞను అమలు చేశారు. దొంగలనూ మునినీ అందరినీ శూలాలకు ఎక్కించారు. తర్వాత దొరికిన సొమ్మును రాజుకు అప్పగించారు. విషయం అయిపోయిందని అందరూ అనుకున్నారు."],
   ["dyk", "⚖️", "The Mahābhārata does not name this king or his city. He appears only to make one mistake — judging without asking — and later to own it.", "మహాభారతం ఈ రాజు పేరు గానీ, అతని నగరం పేరు గానీ చెప్పదు. విచారించకుండా తీర్పు చెప్పే ఒక తప్పు చేయడానికీ, తర్వాత ఆ తప్పును ఒప్పుకోడానికీ మాత్రమే అతను కథలో కనిపిస్తాడు."]
  ],
  [
   ["h", "Why did he not speak?", "ఆయన ఎందుకు మాట్లాడలేదు?"],
   ["p", "The epic does not explain his silence; it simply says he kept his vow. Readers over the centuries have thought about it in different ways. Some say a vow taken before God is not broken for one's own safety. Some point out that if he had spoken, he would have had to hand over men who came to him for shelter — or else tell a lie. Some say a sage so far beyond the body no longer felt he had anything to defend. These are reflections, not words of the text.", "ఆయన మౌనానికి కారణం మహాభారతం వివరించదు; ఆయన తన వ్రతం విడవలేదని మాత్రమే చెబుతుంది. శతాబ్దాలుగా చదివినవారు దీన్ని రకరకాలుగా ఆలోచించారు. దేవుని ముందు పట్టిన వ్రతాన్ని తన రక్షణ కోసం విడవకూడదని కొందరంటారు. మాట్లాడి ఉంటే తన దగ్గరికి ఆశ్రయం కోసం వచ్చిన వాళ్ళను పట్టివ్వాల్సి వచ్చేది — లేదా అబద్ధం చెప్పాల్సి వచ్చేది — అని కొందరంటారు. శరీరాన్ని దాటిపోయిన మునికి కాపాడుకోవలసింది ఏమీ లేదనిపించిందని మరికొందరంటారు. ఇవి ఆలోచనలు మాత్రమే, గ్రంథంలోని మాటలు కావు."],
   ["src", "Mahābhārata, Ādi Parva — the Aṇīmāṇḍavya episode: the thieves hide their loot in the āśrama, the guards question the silent sage, the king sentences him with the thieves to the stake.", "మహాభారతం, ఆది పర్వం — అణిమాండవ్యోపాఖ్యానం: దొంగలు ఆశ్రమంలో సొమ్ము దాచడం, భటులు మౌనమునిని ప్రశ్నించడం, రాజు దొంగలతో పాటు ఆయనకు శూల శిక్ష విధించడం."]
  ]
 ],
 remember: [
  ["Thieves hid their loot in {mandavya|Māṇḍavya}'s āśrama; he stayed silent when the guards asked.", "దొంగలు {mandavya|మాండవ్యుని} ఆశ్రమంలో సొమ్ము దాచారు; భటులు అడిగినా ఆయన మౌనంగానే ఉన్నాడు."],
  ["The guards took his silence as guilt and seized him with the thieves.", "భటులు ఆయన మౌనాన్ని నేరంగా భావించి దొంగలతో పాటు పట్టుకున్నారు."],
  ["{mdking|The king} sentenced him to the stake without asking a single question.", "{mdking|రాజు} ఒక్క ప్రశ్న కూడా అడగకుండా ఆయనకు శూల శిక్ష వేశాడు."]
 ],
 think: ["The guards decided that silence meant guilt. Have you ever judged someone too quickly from one thing you saw?", "మౌనంగా ఉన్నాడంటే నేరం చేసినట్టే అని భటులు నిర్ణయించేశారు. మీరు ఎప్పుడైనా చూసిన ఒక్క విషయంతో ఎవరినైనా తొందరపడి అంచనా వేశారా?"]
},
{
 id: "md-3", sage: "mandavya", n: 3, order: 2703, date: "2026-10-28",
 title: "Alive on the Stake", titleTe: "శూలం మీద ప్రాణంతో",
 src: "Mahābhārata, Ādi Parva",
 who: ["mandavya", "mdking"],
 pages: [
  [
   ["p", "Days passed. The guards who watched the place of punishment noticed something they could not understand. The brāhmaṇa on the stake had not died. He had eaten nothing, he had drunk nothing, and still he lived — sitting in meditation, calm, his mind fixed on God.", "రోజులు గడిచాయి. శిక్ష పడిన చోట కాపలా ఉన్న భటులు తమకు అర్థం కాని ఒక విషయం గమనించారు. శూలం మీద ఉన్న ఆ బ్రాహ్మణుడు చనిపోలేదు. ఏమీ తినలేదు, ఏమీ తాగలేదు — అయినా బతికే ఉన్నాడు. ప్రశాంతంగా, మనసు దేవుని మీద నిలిపి, ధ్యానంలో ఉన్నాడు."],
   ["p", "The power of his long tapas held his life in his body. The epic says that, there on the stake, he called the other ṛṣis to him in his mind.", "చిరకాలం చేసిన తపస్సు శక్తి ఆయన ప్రాణాన్ని శరీరంలో నిలిపి ఉంచింది. శూలం మీద ఉండే ఆయన మనసులోనే మిగతా ఋషులను తన దగ్గరికి పిలిచాడని మహాభారతం చెబుతుంది."]
  ],
  [
   ["h", "Visitors in the night", "రాత్రి వచ్చిన అతిథులు"],
   ["p", "The sages came to him at night, taking the form of birds, and gathered around the stake grieving. “Brāhmaṇa, what sin did you commit, that you should suffer like this?”", "రాత్రివేళ ఆ ఋషులు పక్షుల రూపంలో వచ్చి, బాధపడుతూ శూలం చుట్టూ చేరారు. “విప్రోత్తమా, ఏ పాపం చేశావని ఇంత బాధ అనుభవిస్తున్నావు?”"],
   ["p", "Māṇḍavya's answer is one of the most striking lines in his story. In effect he said: “Whom shall I blame? No one else has done this to me.” He did not curse the guards. He did not curse the king. He looked for the cause in himself.", "మాండవ్యుని జవాబు ఆయన కథలోని అతి గొప్ప మాటలలో ఒకటి. ఆయన చెప్పిన దాని సారం ఇది: “ఎవరిని నిందించను? నాకు ఇది వేరెవరూ చేయలేదు.” భటులను శపించలేదు. రాజును శపించలేదు. కారణాన్ని తనలోనే వెతుక్కున్నాడు."],
   ["dyk", "🐦", "The ṛṣis coming as birds at night is part of the Mahābhārata's own telling. The epic often shows sages and gods moving about in other forms when they wish to visit unseen.", "ఋషులు రాత్రి పక్షుల రూపంలో రావడం మహాభారతంలోనే ఉంది. ఎవరికీ కనబడకుండా రావాలనుకున్నప్పుడు మునులూ దేవతలూ వేరే రూపాలలో తిరగడం మహాభారతంలో తరచూ కనిపిస్తుంది."]
  ],
  [
   ["h", "The king at his feet", "కాళ్ళ మీద పడిన రాజు"],
   ["p", "The guards could keep quiet no longer. They went to the king. “Mahārāja, that brāhmaṇa is still alive on the stake, after all this time.” The king understood at once that he had made a terrible mistake. He hurried to the place with his ministers.", "భటులు ఇక ఊరుకోలేకపోయారు. రాజు దగ్గరికి వెళ్ళారు. “మహారాజా, ఇన్ని రోజులైనా ఆ బ్రాహ్మణుడు శూలం మీద ఇంకా బతికే ఉన్నాడు.” తాను ఘోరమైన తప్పు చేశానని రాజుకు వెంటనే అర్థమైంది. మంత్రులతో కలిసి ఆ చోటికి పరుగున వెళ్ళాడు."],
   ["p", "He bowed before the sage and begged, “Whatever wrong I have done you in ignorance, best of ṛṣis, forgive me. Be gracious to me.” And Māṇḍavya forgave him. The text says simply that the sage was pleased with the king and showed him grace.", "ఆ మునికి నమస్కరించి వేడుకున్నాడు: “మునిశ్రేష్ఠా, తెలియక నేను మీకు చేసిన అపరాధాన్ని క్షమించండి. నన్ను అనుగ్రహించండి.” మాండవ్యుడు క్షమించాడు. ముని రాజు మీద ప్రసన్నుడై అనుగ్రహించాడని మాత్రమే గ్రంథం చెబుతుంది."]
  ],
  [
   ["h", "The point that stayed", "మిగిలిపోయిన మొన"],
   ["p", "The king had him lifted down. They tried to draw the stake out of his body, but it would not come. So they cut it off close to his body, and the point stayed inside him. With that point within him Māṇḍavya went on living, went on with his tapas, and — the epic says — won worlds that others find very hard to reach. From then on he was Aṇī-Māṇḍavya.", "రాజు ఆయనను కిందికి దింపించాడు. శూలాన్ని శరీరం నుండి లాగడానికి ప్రయత్నించారు గానీ అది రాలేదు. దాంతో శరీరానికి దగ్గరగా దాన్ని నరికేశారు; మొన ఆయన లోపలే ఉండిపోయింది. ఆ మొనతోనే మాండవ్యుడు జీవించాడు, తపస్సు కొనసాగించాడు, ఇతరులకు అందని ఉత్తమ లోకాలను సంపాదించాడని మహాభారతం చెబుతుంది. అప్పటి నుండి ఆయన అణిమాండవ్యుడయ్యాడు."],
   ["p", "Two things stand out here. He forgave the king at once, without bargaining. And yet forgiveness did not end his question. He still wanted to know why this had happened to him — and he knew exactly whom to ask.", "ఇక్కడ రెండు విషయాలు ప్రత్యేకంగా కనిపిస్తాయి. బేరసారాలు లేకుండా ఆయన రాజును వెంటనే క్షమించాడు. అయినా క్షమించడంతో ఆయన ప్రశ్న తీరిపోలేదు. ఇది తనకు ఎందుకు జరిగిందో ఆయనకు ఇంకా తెలుసుకోవాలనిపించింది — ఎవరిని అడగాలో కూడా ఆయనకు బాగా తెలుసు."],
   ["src", "Mahābhārata, Ādi Parva — the Aṇīmāṇḍavya episode: the sage lives on the stake by his tapas; the ṛṣis come as birds; the king begs forgiveness; the stake is cut and its point remains, giving him the name Aṇī-Māṇḍavya.", "మహాభారతం, ఆది పర్వం — అణిమాండవ్యోపాఖ్యానం: తపశ్శక్తితో శూలం మీద బతికి ఉండటం; ఋషులు పక్షులుగా రావడం; రాజు క్షమాపణ; శూలాన్ని నరకడం, మొన లోపల మిగలడం, అణిమాండవ్యుడనే పేరు."]
  ]
 ],
 remember: [
  ["By the power of his tapas, {mandavya|Māṇḍavya} stayed alive on the stake.", "తపశ్శక్తితో {mandavya|మాండవ్యుడు} శూలం మీద ప్రాణంతో నిలిచాడు."],
  ["Asked what sin he had done, he said, “Whom shall I blame? No one else did this.”", "ఏ పాపం చేశావని అడిగితే “ఎవరిని నిందించను? ఇది వేరెవరూ చేయలేదు” అన్నాడు."],
  ["He forgave {mdking|the king}; the stake's point stayed in him, and he became Aṇī-Māṇḍavya.", "ఆయన {mdking|రాజును} క్షమించాడు; శూలం మొన లోపలే ఉండిపోయి అణిమాండవ్యుడయ్యాడు."]
 ],
 think: ["Māṇḍavya forgave the king but still wanted an answer. Can you forgive someone and still ask why something happened?", "మాండవ్యుడు రాజును క్షమించాడు, అయినా జవాబు కావాలనుకున్నాడు. ఒకరిని క్షమిస్తూనే, ఏదైనా ఎందుకు జరిగిందని అడగవచ్చా?"]
},
{
 id: "md-4", sage: "mandavya", n: 4, order: 2704, date: "2026-10-28",
 title: "At the Court of Dharma", titleTe: "ధర్మదేవుని సభలో",
 src: "Mahābhārata, Ādi Parva",
 who: ["mandavya", "dharma", "yama"],
 pages: [
  [
   ["p", "{dharma|Dharma} — the god who keeps the account of every deed and gives each its fruit — sat on his seat in his own hall. One day the doors opened and in walked a thin ascetic with the point of a stake still lodged in his body. It was {mandavya|Aṇī-Māṇḍavya}.", "ప్రతి కర్మకూ లెక్క ఉంచి దాని ఫలాన్ని ఇచ్చే {dharma|ధర్మదేవుడు} తన సభలో తన ఆసనం మీద కూర్చున్నాడు. ఒక రోజు ఆ సభ తలుపులు తెరుచుకుని, శరీరంలో ఇంకా శూలం మొన ఉన్న ఒక బక్క పలచని తపస్వి లోపలికి నడిచొచ్చాడు. ఆయనే {mandavya|అణిమాండవ్యుడు}."],
   ["p", "He came by the strength of his tapas, and he did not come to beg. He came to ask for an account. “What wicked thing did I do, without knowing it, that I should be given such a fruit? Tell me quickly — and see the power of my tapas.”", "తన తపశ్శక్తితో వచ్చాడు; యాచించడానికి రాలేదు. లెక్క అడగడానికి వచ్చాడు. “తెలియకుండా నేనేం పాపం చేశానని నాకు ఇలాంటి ఫలం ఇచ్చావు? వెంటనే చెప్పు — నా తపస్సు బలం చూడు.”"],
   ["dyk", "⚖️", "In the epics, Dharma and {yama|Yama} are often the same god — Yama, who rules the dead, is also called Dharmarāja, the king of justice, because he weighs every deed. Yudhiṣṭhira is called Dharmarāja after his father.", "ఇతిహాసాలలో ధర్మదేవుడూ {yama|యముడూ} తరచూ ఒకరే. మరణించినవారిని పాలించే యముడు ప్రతి కర్మనూ తూకం వేస్తాడు కాబట్టి ధర్మరాజు అని కూడా పిలవబడతాడు. యుధిష్ఠిరుడికి తండ్రి పేరుతోనే ధర్మరాజు అనే పేరు వచ్చింది."]
  ],
  [
   ["h", "A blade of grass", "ఒక గడ్డిపోచ"],
   ["p", "Dharma answered him plainly. “You once pushed a blade of grass into the tails of little insects. This is the fruit of that deed. Just as a small gift brings a reward many times greater, so a small wrong also brings a fruit many times greater.”", "ధర్మదేవుడు సూటిగా జవాబిచ్చాడు. “నువ్వు ఒకప్పుడు చిన్న చిన్న పురుగుల తోకల్లోకి గడ్డిపోచ గుచ్చావు. ఇది దాని ఫలమే. చిన్న దానం ఎన్నో రెట్లు పుణ్యం ఇచ్చినట్టే, చిన్న అధర్మం కూడా ఎన్నో రెట్లు ఫలం ఇస్తుంది.”"],
   ["p", "Māṇḍavya did not remember any such thing. “When did I do this?” he asked. And Dharma said, “When you were a child.”", "మాండవ్యునికి అలాంటిదేమీ గుర్తు లేదు. “ఇది నేనెప్పుడు చేశాను?” అని అడిగాడు. “నువ్వు చిన్నపిల్లవాడిగా ఉన్నప్పుడు” అన్నాడు ధర్మదేవుడు."],
   ["p", "The word the epic uses is *pataṅgikā*, a small flying insect. A Telugu child might picture a tūnīga, a dragonfly, caught in a game and pricked with a straw — the kind of careless thing children do without a second thought.", "మహాభారతం వాడిన మాట *పతంగిక* — ఎగిరే చిన్న పురుగు. తెలుగు పిల్లలకు ఆటలో పట్టుకుని పుల్లతో గుచ్చే తూనీగ గుర్తు రావచ్చు — పిల్లలు రెండోసారి ఆలోచించకుండా చేసే అలాంటి పని."]
  ],
  [
   ["h", "What Māṇḍavya did not argue", "మాండవ్యుడు వాదించనిది"],
   ["p", "Notice what Māṇḍavya does not say. He does not say, “Deeds have no fruit.” He does not say, “Hurting an insect is nothing.” He accepts that every act, even a small one, bears fruit. What he questions is the measure — and the age.", "మాండవ్యుడు ఏం అనలేదో గమనించండి. “కర్మలకు ఫలం ఉండదు” అనలేదు. “పురుగును బాధపెడితే ఏమీ కాదు” అనలేదు. చిన్న పనికైనా ఫలం ఉంటుందని ఒప్పుకున్నాడు. ఆయన ప్రశ్నించింది తూకాన్ని — ఆ వయస్సునీ."],
   ["p", "A small child does not yet know right from wrong. Can a deed done without that knowledge weigh the same as a deed done by a grown man who knows exactly what he is doing? And can a lifetime's worth of suffering on a stake be the right price for a child's game? That was the case he put to the god of justice, face to face.", "చిన్న పిల్లవాడికి ఇంకా మంచి చెడ్డల తేడా తెలియదు. ఆ తెలివి లేకుండా చేసిన పని, తానేం చేస్తున్నాడో పూర్తిగా తెలిసిన పెద్దవాడు చేసిన పనితో సమానంగా తూగుతుందా? పిల్లల ఆటకు శూలం మీద అనుభవించిన ఇంత బాధ సరైన వెలా? ఈ వాదాన్నే ఆయన ధర్మదేవుని ముఖాముఖి ముందుంచాడు."],
   ["src", "Mahābhārata, Ādi Parva — the Aṇīmāṇḍavya episode: Māṇḍavya goes to Dharma's hall; Dharma names the childhood deed of piercing small insects with a blade of grass and says that small wrongs, like small gifts, bear great fruit.", "మహాభారతం, ఆది పర్వం — అణిమాండవ్యోపాఖ్యానం: మాండవ్యుడు ధర్మదేవుని సభకు వెళ్ళడం; చిన్నతనంలో గడ్డిపోచతో పురుగులను గుచ్చిన పనిని ధర్మదేవుడు చెప్పడం; చిన్న దానం లాగే చిన్న అధర్మం కూడా పెద్ద ఫలం ఇస్తుందనడం."]
  ]
 ],
 remember: [
  ["{mandavya|Māṇḍavya} went to {dharma|Dharma}'s hall to ask why he had suffered.", "తాను ఎందుకు బాధపడ్డాడో అడగడానికి {mandavya|మాండవ్యుడు} {dharma|ధర్మదేవుని} సభకు వెళ్ళాడు."],
  ["Dharma said: as a child you pierced small insects with a blade of grass.", "“చిన్నతనంలో గడ్డిపోచతో పురుగులను గుచ్చావు” అన్నాడు ధర్మదేవుడు."],
  ["Māṇḍavya did not deny that deeds bear fruit; he questioned the measure and the age.", "కర్మకు ఫలం ఉంటుందని మాండవ్యుడు కాదనలేదు; తూకాన్ని, వయస్సును ప్రశ్నించాడు."]
 ],
 think: ["Is a mistake made by a three-year-old the same as the same mistake made by a grown-up? Why or why not?", "మూడేళ్ళ పిల్లవాడు చేసిన తప్పూ, అదే తప్పు పెద్దవాడు చేయడమూ ఒకటేనా? ఎందుకు?"]
},
{
 id: "md-5", sage: "mandavya", n: 5, order: 2705, date: "2026-10-28",
 title: "The Age of Responsibility — Māṇḍavya's Curse", titleTe: "బాధ్యత వయస్సు — మాండవ్యుని శాపం",
 src: "Mahābhārata, Ādi Parva · Bhāgavata Purāṇa 1",
 who: ["mandavya", "dharma", "vidura", "vyasa", "ambika", "ambikadasi", "aryama"],
 pages: [
  [
   ["p", "{mandavya|Māṇḍavya} gave his verdict on the god of justice. “What a child does in the first years of life is not adharma, for the child does not understand. You have given a great punishment for a small fault. Harming a brāhmaṇa is heavier than harming all other creatures. So, Dharma, you will be born as a man — in the womb of a śūdra woman.”", "{mandavya|మాండవ్యుడు} ధర్మదేవుని మీదే తీర్పు చెప్పాడు. “జీవితపు మొదటి సంవత్సరాలలో పిల్లవాడు చేసేది అధర్మం కాదు — ఎందుకంటే వాడికి తెలియదు. చిన్న తప్పుకు నువ్వు పెద్ద శిక్ష వేశావు. బ్రాహ్మణుణ్ణి బాధించడం మిగతా అన్ని ప్రాణులను బాధించడం కంటే బరువైనది. కాబట్టి, ధర్మా, నువ్వు మనిషిగా పుడతావు — ఒక శూద్ర స్త్రీ గర్భంలో.”"],
   ["p", "Then he did something no one had done before. He laid down a new limit for the whole world, a law that would bind even Dharma's court from that day on.", "తర్వాత అంతకు ముందు ఎవరూ చేయని పని చేశాడు. లోకమంతటికీ ఒక కొత్త హద్దు పెట్టాడు — ఆ రోజు నుండి ధర్మదేవుని సభ కూడా పాటించవలసిన నియమం."]
  ],
  [
   ["h", "The line drawn for children", "పిల్లల కోసం గీసిన గీత"],
   ["p", "“From today I set the boundary of the fruit of deeds in this world. Until the fourteenth year, what a child does will not be counted as sin. For those who do such things after that age, it will be a fault.” Most versions of the Mahābhārata give the age as fourteen; some versions of the same passage speak of twelve, and manuscripts differ on the exact words.", "“ఈ రోజు నుండి లోకంలో కర్మ ఫలానికి నేను హద్దు పెడుతున్నాను. పద్నాలుగో ఏడు వచ్చే వరకు పిల్లవాడు చేసేది పాపంగా లెక్కకు రాదు. ఆ వయస్సు దాటాక అలాంటి పనులు చేసేవారికి అది దోషమే అవుతుంది.” మహాభారతపు చాలా ప్రతులు ఆ వయస్సును పద్నాలుగేళ్ళు అని చెబుతాయి; అదే భాగాన్ని కొన్ని ప్రతులు పన్నెండేళ్ళు అంటాయి. ఖచ్చితమైన మాటల విషయంలో ప్రతులు వేర్వేరుగా ఉన్నాయి."],
   ["dyk", "🧒", "This may be one of the oldest stories anywhere in which a sage argues that young children should not be held responsible like adults. The idea that the young are judged differently — and more gently — is found in law codes all over the world today.", "చిన్న పిల్లలను పెద్దవాళ్ళలాగా బాధ్యులను చేయకూడదని ఒక ముని వాదించిన కథలలో ప్రపంచంలోనే ఇది అతి ప్రాచీనమైన వాటిలో ఒకటి కావచ్చు. పిల్లలను వేరుగా — మరింత మృదువుగా — చూడాలన్న ఆలోచన ఈనాడు ప్రపంచమంతటా చట్టాలలో కనిపిస్తుంది."],
   ["p", "So the sage who had suffered for a childhood deed made sure that no other child would suffer in the same way. His own pain became a protection for every child after him.", "చిన్నతనపు పనికి తాను బాధపడిన ముని, మరే పిల్లవాడూ అలా బాధపడకుండా చూశాడు. ఆయన బాధే తర్వాతి పిల్లలందరికీ రక్షణ అయింది."]
  ],
  [
   ["h", "Dharma is born as Vidura", "ధర్మదేవుడు విదురునిగా జన్మించడం"],
   ["p", "The curse came true in the house of the Kurus. When {vyasa|Vyāsa} was asked to give sons to the widowed queens, Queen {ambika|Ambikā} could not bear to go to him a second time and sent {ambikadasi|her maid} in her place, dressed in her own jewels. The maid welcomed the sage without fear, and her son was {vidura|Vidura} — Dharma himself, born as a man.", "ఆ శాపం కురువంశంలో నిజమైంది. విధవలైన రాణులకు సంతానం ఇవ్వమని {vyasa|వ్యాసుని} అడిగినప్పుడు, {ambika|అంబిక} రెండోసారి ఆయన దగ్గరికి వెళ్ళలేక తన నగలు తొడిగి {ambikadasi|తన దాసిని} పంపింది. ఆ దాసి భయం లేకుండా మునిని ఆదరించింది. ఆమె కుమారుడే {vidura|విదురుడు} — మనిషిగా పుట్టిన ధర్మదేవుడే."],
   ["sglink", "Three Sons for a Dying Line", "అంతరించబోతున్న వంశానికి ముగ్గురు కుమారులు", "vy-3"],
   ["p", "The epic says that Vidura, born by Māṇḍavya's curse, was learned in dharma and in the ways of the world, free of anger and greed, far-sighted, devoted to peace, and devoted to the good of the Kurus.", "మాండవ్యుని శాపం వల్ల పుట్టిన విదురుడు ధర్మంలోనూ లోకవ్యవహారంలోనూ పండితుడనీ, కోపమూ లోభమూ లేనివాడనీ, దూరదృష్టి గలవాడనీ, శాంతిప్రియుడనీ, కురువంశ క్షేమం కోరేవాడనీ మహాభారతం చెబుతుంది."]
  ],
  [
   ["h", "Who held the rod meanwhile?", "ఈలోగా దండం ఎవరు పట్టారు?"],
   ["p", "If the god of justice was living on earth, who kept his office? The Bhāgavata Purāṇa answers: for as long as {yama|Yama} lived in a human body by Māṇḍavya's curse — a hundred years, it says — the Āditya {aryama|Aryamā} held the rod of punishment and gave each sinner the fruit of his deeds.", "న్యాయదేవుడు భూమి మీద ఉంటే ఆయన పదవిని ఎవరు చూసుకున్నారు? భాగవత పురాణం జవాబిస్తుంది: మాండవ్యుని శాపం వల్ల {yama|యముడు} మానవ శరీరంలో ఉన్నంతకాలం — వంద సంవత్సరాలు అని చెబుతుంది — ఆదిత్యుడైన {aryama|అర్యముడు} దండం పట్టి, పాపులకు వారి కర్మఫలం ఇచ్చాడు."],
   ["p", "Was the curse fair? The texts do not argue the point. But there is something deep in it: the god who weighs every human deed had to live as a human himself, in a body that the world looked down on, and learn what it is to be judged. And that life gave the epic its wisest and most honest man.", "ఆ శాపం న్యాయమైనదా? గ్రంథాలు దీని మీద వాదించవు. కానీ దీనిలో ఒక లోతైన విషయం ఉంది: ప్రతి మనిషి కర్మనూ తూకం వేసే దేవుడు స్వయంగా మనిషిగా — లోకం చిన్నచూపు చూసే జన్మలో — బతికి, తీర్పుకు గురి కావడం ఎలా ఉంటుందో తెలుసుకోవలసి వచ్చింది. ఆ జీవితమే మహాభారతానికి దానిలో అందరికంటే జ్ఞాని, అందరికంటే నిజాయితీపరుడైన మనిషిని ఇచ్చింది."],
   ["src", "Mahābhārata, Ādi Parva — the Aṇīmāṇḍavya episode (Māṇḍavya's curse on Dharma and the limit set for children's deeds) and the birth of Vidura from Ambikā's maid. Bhāgavata Purāṇa, Skandha 1 (Vidura's return: Aryamā holds Yama's rod while Yama lives as a śūdra by Māṇḍavya's curse).", "మహాభారతం, ఆది పర్వం — అణిమాండవ్యోపాఖ్యానం (ధర్మదేవునికి మాండవ్యుని శాపం, పిల్లల పనులకు పెట్టిన హద్దు), అంబిక దాసికి విదురుని జననం. భాగవత పురాణం, ప్రథమ స్కంధం (విదురుని పునరాగమనం: మాండవ్యుని శాపంతో యముడు శూద్రునిగా ఉన్నప్పుడు అర్యముడు దండం పట్టడం)."]
  ]
 ],
 remember: [
  ["{mandavya|Māṇḍavya} cursed {dharma|Dharma} to be born as a man, of a śūdra mother.", "{mandavya|మాండవ్యుడు} {dharma|ధర్మదేవుణ్ణి} శూద్ర స్త్రీ గర్భంలో మనిషిగా పుట్టమని శపించాడు."],
  ["He set a limit: what a young child does is not counted as sin.", "చిన్న పిల్లలు చేసే పనులు పాపంగా లెక్కకు రావని ఆయన హద్దు పెట్టాడు."],
  ["Dharma was born as {vidura|Vidura}; {aryama|Aryamā} held Yama's rod meanwhile.", "ధర్మదేవుడు {vidura|విదురునిగా} పుట్టాడు; ఈలోగా {aryama|అర్యముడు} యముని దండం పట్టాడు."]
 ],
 think: ["Māṇḍavya turned his own suffering into a rule that protects every child. Can a bad thing that happens to us become a good thing for others?", "మాండవ్యుడు తన బాధను ప్రతి పిల్లవాడినీ కాపాడే నియమంగా మార్చాడు. మనకు జరిగిన చెడు ఇతరులకు మేలుగా మారగలదా?"]
},
{
 id: "md-6", sage: "mandavya", n: 6, order: 2706, date: "2026-10-28",
 title: "Dharma Walks as a Man — Vidura", titleTe: "మనిషిగా నడిచిన ధర్మం — విదురుడు",
 src: "Mahābhārata, Ādi, Sabhā, Udyoga and Āśramavāsika Parvas · Bhāgavata 3",
 who: ["vidura", "dharma", "mandavya", "bhishma", "dhritarashtra", "pandu", "duryodhana", "yudhishthira", "krishna", "vyasa", "uddhava", "maitreyamuni"],
 pages: [
  [
   ["p", "{mandavya|Māṇḍavya}'s curse did not end in a single birth story. It shaped a whole life — the life of {vidura|Vidura}, the son of a maid who grew up in the palace beside the princes {dhritarashtra|Dhṛtarāṣṭra} and {pandu|Pāṇḍu}, raised by {bhishma|Bhīṣma}.", "{mandavya|మాండవ్యుని} శాపం ఒక్క జన్మ కథతో ముగిసిపోలేదు. అది ఒక జీవితమంతటినీ తీర్చిదిద్దింది — {vidura|విదురుని} జీవితం. దాసి కొడుకైన ఆయన {bhishma|భీష్ముని} పెంపకంలో రాకుమారులు {dhritarashtra|ధృతరాష్ట్ర}, {pandu|పాండురాజులతో} కలిసి రాజభవనంలో పెరిగాడు."],
   ["p", "Because of his mother's station he could never be king. He became the king's counsellor instead, and the epic says that in all three worlds there was no one equal to him in knowing dharma. The curse had placed the god of justice exactly where he could do the most good — at the elbow of a blind king, speaking the truth whether it was welcome or not.", "తల్లి స్థానం వల్ల ఆయన ఎప్పటికీ రాజు కాలేడు. బదులుగా రాజుకు మంత్రి అయ్యాడు. ధర్మం తెలియడంలో మూడు లోకాలలోనూ ఆయనకు సాటి లేరని మహాభారతం చెబుతుంది. ఆ శాపం న్యాయదేవుణ్ణి సరిగ్గా ఎక్కువ మేలు చేయగల చోట నిలబెట్టింది — గుడ్డి రాజు పక్కన, ఇష్టమైనా కాకపోయినా సత్యమే చెబుతూ."]
  ],
  [
   ["h", "The voice no one wanted to hear", "ఎవరూ వినదలుచుకోని గొంతు"],
   ["p", "When {duryodhana|Duryodhana} was born amid evil omens, Vidura told Dhṛtarāṣṭra to give up the child for the good of the family; the father could not. When Duryodhana plotted to burn the Pāṇḍavas in a house of lac, Vidura warned {yudhishthira|Yudhiṣṭhira} in a coded speech only he would understand, and sent a miner to dig them an escape tunnel.", "దుష్ట శకునాల మధ్య {duryodhana|దుర్యోధనుడు} పుట్టినప్పుడు, వంశ క్షేమం కోసం ఆ బిడ్డను వదులుకోమని విదురుడు ధృతరాష్ట్రునికి చెప్పాడు; తండ్రి వదులుకోలేకపోయాడు. లక్క ఇంట్లో పాండవులను కాల్చేయాలని దుర్యోధనుడు కుట్ర పన్నినప్పుడు, {yudhishthira|ధర్మరాజుకు} మాత్రమే అర్థమయ్యే సంకేత భాషలో విదురుడు హెచ్చరించాడు; తప్పించుకోడానికి సొరంగం తవ్వడానికి ఒక ఖనకుణ్ణి పంపాడు."],
   ["p", "In the gambling hall, Vidura spoke again and again against the game, and when Draupadī was dragged in and the elders sat silent, he stood up against the wrong — only young Vikarṇa joined him. Duryodhana answered him with insults. On the night before Kṛṣṇa's peace mission, he spoke to the sleepless Dhṛtarāṣṭra for hours; those teachings are remembered as the Vidura Nīti.", "జూదం వద్దని విదురుడు మళ్ళీ మళ్ళీ చెప్పాడు. ద్రౌపదిని సభలోకి ఈడ్చుకొచ్చినప్పుడు పెద్దలు మౌనంగా కూర్చుంటే, లేచి నిలబడి ఆ అన్యాయాన్ని ఎదిరించాడు — యువకుడైన వికర్ణుడు ఒక్కడే ఆయనకు తోడయ్యాడు. దుర్యోధనుడు ఆయనకు అవమానాలతో జవాబిచ్చాడు. శ్రీకృష్ణుని రాయబారానికి ముందు రాత్రి, నిద్రపట్టని ధృతరాష్ట్రునికి గంటల తరబడి హితం చెప్పాడు; ఆ బోధలనే విదుర నీతి అంటారు."],
   ["dyk", "🏠", "When {krishna|Kṛṣṇa} came to Hāstinapura as peace envoy, he refused Duryodhana's feast and chose to eat and stay in Vidura's simple house. The poor man's simple meal, given with love, mattered more to him than the king's banquet.", "{krishna|శ్రీకృష్ణుడు} రాయబారిగా హస్తినాపురానికి వచ్చినప్పుడు దుర్యోధనుని విందును కాదని, విదురుని సాధారణ ఇంట్లోనే భోజనం చేసి బస చేశాడు. రాజు పెట్టే విందు కంటే ప్రేమతో పెట్టిన సాదా భోజనమే ఆయనకు ఎక్కువైంది."]
  ],
  [
   ["h", "The pilgrim", "తీర్థయాత్రికుడు"],
   ["p", "The Mahābhārata keeps Vidura with the Kurus to the end of the war. The Bhāgavata Purāṇa tells a fuller story of his wanderings: driven out by Duryodhana's insults, Vidura left Hāstinapura and went on a long pilgrimage. On the way he met {uddhava|Uddhava}, who told him that Kṛṣṇa had left the world, and then the sage {maitreyamuni|Maitreya} at Haridvāra, who taught him at length — much of the third skandha of the Bhāgavata is that teaching. The Bhāgavata says that when he left he laid his bow down at the palace door, so that no one could say he would fight for Duryodhana; later tellings make it that he broke the bow. The two books simply tell his later years differently.", "మహాభారతం విదురుణ్ణి యుద్ధం ముగిసే వరకు కురువుల దగ్గరే ఉంచుతుంది. భాగవత పురాణం ఆయన యాత్రల గురించి ఇంకా విస్తారంగా చెబుతుంది: దుర్యోధనుని అవమానాలు భరించలేక విదురుడు హస్తినాపురం విడిచి దీర్ఘ తీర్థయాత్రకు వెళ్ళాడు. దారిలో {uddhava|ఉద్ధవుడు} కలిసి శ్రీకృష్ణుడు లోకం విడిచాడని చెప్పాడు; తర్వాత హరిద్వారంలో {maitreyamuni|మైత్రేయ మహర్షి} ఆయనకు విస్తారంగా బోధించాడు — భాగవతంలోని తృతీయ స్కంధంలో చాలా భాగం ఆ బోధే. వెళ్ళేటప్పుడు దుర్యోధనుని తరఫున పోరాడుతాడని ఎవరూ అనకుండా తన విల్లును రాజభవన ద్వారం దగ్గర పెట్టి వెళ్ళాడని భాగవతం చెబుతుంది; తర్వాతి కథనాలు ఆయన విల్లు విరిచేశాడని చెబుతాయి. ఈ రెండు గ్రంథాలూ ఆయన తర్వాతి జీవితాన్ని వేర్వేరుగా చెబుతాయి."]
  ],
  [
   ["h", "Dharma returns to Dharma", "ధర్మం ధర్మంలో కలిసిపోవడం"],
   ["p", "After the war, Vidura went to the forest with Dhṛtarāṣṭra, Gāndhārī and Kuntī. He lived on almost nothing, grew thin as a shadow, and wandered alone. When Yudhiṣṭhira came looking for him, Vidura stood still under a tree, gazed into his eyes, and by yoga entered into Yudhiṣṭhira's body — breath into breath, senses into senses. His empty body remained leaning against the tree, and a voice from the sky said it should not be cremated.", "యుద్ధం తర్వాత విదురుడు ధృతరాష్ట్రుడు, గాంధారి, కుంతులతో కలిసి అడవికి వెళ్ళాడు. దాదాపు ఏమీ తినకుండా, నీడలా చిక్కిపోయి, ఒంటరిగా తిరిగేవాడు. ధర్మరాజు వెతుక్కుంటూ వచ్చినప్పుడు, విదురుడు ఒక చెట్టు కింద నిలబడి, ఆయన కళ్ళలోకి చూస్తూ, యోగబలంతో ధర్మరాజు శరీరంలోకి ప్రవేశించాడు — ప్రాణం ప్రాణంలోకి, ఇంద్రియాలు ఇంద్రియాలలోకి. ఆయన ఖాళీ శరీరం చెట్టుకు ఆనుకుని నిలిచిపోయింది. దాన్ని దహనం చేయవద్దని ఆకాశవాణి చెప్పింది."],
   ["p", "Later {vyasa|Vyāsa} explained it: Vidura was Dharma himself, born a man by the curse of Aṇī-Māṇḍavya, and Yudhiṣṭhira was born of Dharma. So at the end Vidura simply went back into the one who shared his nature. The story that began with a sage on a stake ends here, with the god of justice coming home.", "తర్వాత {vyasa|వ్యాసుడు} వివరించాడు: విదురుడు అణిమాండవ్యుని శాపం వల్ల మనిషిగా పుట్టిన ధర్మదేవుడే; ధర్మరాజు ధర్మదేవుని వల్ల పుట్టినవాడు. అందుకే చివరికి విదురుడు తనతో ఒకే స్వభావం గల వ్యక్తిలోకి తిరిగి చేరిపోయాడు. శూలం మీద ఉన్న మునితో మొదలైన కథ ఇక్కడ ముగుస్తుంది — న్యాయదేవుడు తన ఇంటికి తిరిగి చేరడంతో."],
   ["src", "Mahābhārata: Ādi Parva (Vidura's birth and upbringing; his counsel at Duryodhana's birth; the warning about the house of lac); Sabhā Parva (Vidura in the gambling hall); Udyoga Parva (the Vidura Nīti, the night talk with Dhṛtarāṣṭra; Kṛṣṇa stays in Vidura's house); Āśramavāsika Parva (Vidura's end in the forest; Vyāsa on Aṇī-Māṇḍavya's curse). Bhāgavata Purāṇa, Skandhas 1 and 3 (Vidura's pilgrimage; Uddhava; Maitreya's teaching).", "మహాభారతం: ఆది పర్వం (విదురుని జననం, పెంపకం; దుర్యోధనుని జన్మ సమయంలో హితవు; లక్క ఇంటి హెచ్చరిక); సభా పర్వం (జూద సభలో విదురుడు); ఉద్యోగ పర్వం (విదుర నీతి — ధృతరాష్ట్రునితో రాత్రి సంభాషణ; కృష్ణుడు విదురుని ఇంట్లో బస); ఆశ్రమవాసిక పర్వం (అడవిలో విదురుని అంతం; అణిమాండవ్యుని శాపం గురించి వ్యాసుని మాట). భాగవత పురాణం, ప్రథమ, తృతీయ స్కంధాలు (విదురుని యాత్ర; ఉద్ధవుడు; మైత్రేయ బోధ)."]
  ]
 ],
 remember: [
  ["{vidura|Vidura}, Dharma born as a man, became the Kurus' wisest counsellor.", "మనిషిగా పుట్టిన ధర్మదేవుడైన {vidura|విదురుడు} కురువుల అందరికంటే జ్ఞాని అయిన మంత్రి అయ్యాడు."],
  ["He alone spoke up in the gambling hall; {krishna|Kṛṣṇa} chose to stay in his house.", "జూద సభలో ఆయన ఒక్కడే ఎదిరించాడు; {krishna|శ్రీకృష్ణుడు} ఆయన ఇంట్లోనే బస చేశాడు."],
  ["At the end he entered {yudhishthira|Yudhiṣṭhira}'s body by yoga — Dharma returning to Dharma.", "చివరికి యోగబలంతో {yudhishthira|ధర్మరాజు} శరీరంలోకి చేరాడు — ధర్మం ధర్మంలో కలిసిపోయింది."]
 ],
 think: ["Vidura kept telling the truth even when people insulted him for it. Why is it hard to say something true that others do not want to hear?", "అవమానించినా విదురుడు నిజమే చెబుతూ వచ్చాడు. ఇతరులు వినదలుచుకోని నిజం చెప్పడం ఎందుకు కష్టం?"]
},
{
 id: "md-7", sage: "mandavya", n: 7, order: 2707, date: "2026-10-28",
 title: "The Foot in the Dark — the Sun That Did Not Rise", titleTe: "చీకట్లో తగిలిన పాదం — ఉదయించని సూర్యుడు",
 src: "Mārkaṇḍeya Purāṇa",
 who: ["mandavya", "kaushikapratishthana", "kaushikapatni", "surya", "brahma", "anasuya"],
 pages: [
  [
   ["p", "The Mārkaṇḍeya Purāṇa has its own story of Māṇḍavya on the stake. It does not follow the Mahābhārata's timeline — here the sage is still on his stake in the city of Pratiṣṭhāna — but it is a story often told in Telugu homes.", "మార్కండేయ పురాణంలో శూలం మీది మాండవ్యుని గురించి దానికంటూ ఒక కథ ఉంది. అది మహాభారతపు కాలక్రమాన్ని అనుసరించదు — ఇక్కడ ముని ప్రతిష్ఠానపురంలో ఇంకా శూలం మీదే ఉన్నాడు — అయినా తెలుగు ఇళ్ళలో తరచూ చెప్పుకునే కథ ఇది."],
   ["p", "In that city lived a brāhmaṇa named {kaushikapratishthana|Kauśika}, sick in body and harsh in temper, and his wife, who served him with complete devotion however badly he treated her. One day Kauśika demanded that she take him to the house of a courtesan he desired. Since he could not walk, she lifted him on her shoulders and carried him through the dark streets at night.", "ఆ నగరంలో {kaushikapratishthana|కౌశికుడు} అనే బ్రాహ్మణుడు ఉండేవాడు — శరీరం నిండా రోగం, స్వభావం నిండా కటుత్వం. అతను ఎంత దురుసుగా చూసినా అతని భార్య పూర్తి భక్తితో సేవ చేసేది. ఒక రోజు కౌశికుడు తాను కోరుకున్న ఒక వేశ్య ఇంటికి తీసుకెళ్ళమని ఆజ్ఞాపించాడు. అతను నడవలేడు కాబట్టి ఆమె అతన్ని భుజాల మీద ఎత్తుకుని రాత్రి చీకటి వీధుల గుండా మోసుకెళ్ళింది."]
  ],
  [
   ["h", "The curse", "శాపం"],
   ["p", "On the way, in the darkness, they passed the place where {mandavya|Māṇḍavya} — wrongly taken for a thief — hung on his stake. Kauśika's dangling foot struck him and shook the stake. In his pain the sage cried out: “The one who kicked me will die when the sun rises!”", "దారిలో, చీకట్లో, దొంగ అని పొరపాటున శిక్షించబడిన {mandavya|మాండవ్యుడు} శూలం మీద వేలాడుతున్న చోటు దాటి వెళ్ళారు. కిందికి వేలాడుతున్న కౌశికుని పాదం ఆయనకు తగిలి శూలం కదిలింది. ఆ బాధలో ముని అరిచాడు: “నన్ను కాలితో తన్నినవాడు సూర్యుడు ఉదయించగానే చనిపోతాడు!”"],
   ["p", "{kaushikapatni|Kauśika's wife} heard it. She did not plead. She answered with a vow of her own: “Then the sun will not rise.” And the power of her devotion was such that the sun did not rise.", "{kaushikapatni|కౌశికుని భార్య} అది విన్నది. ఆమె వేడుకోలేదు. తానూ ఒక మాట అన్నది: “అయితే సూర్యుడు ఉదయించడు.” ఆమె పాతివ్రత్య బలం ఎలాంటిదంటే — సూర్యుడు ఉదయించలేదు."],
   ["dyk", "🪔", "The Purāṇa does not give her a name. Later popular tellings give her a name — Śīlavatī in some, Sumati in many Telugu tellings — and remember her as the woman whose word held back the dawn.", "పురాణం ఆమె పేరు చెప్పదు. తర్వాతి కథనాలు ఆమెకు పేరు పెట్టాయి — కొన్నిటిలో శీలవతి, చాలా తెలుగు కథనాలలో సుమతి. తన మాటతో తెల్లవారకుండా ఆపిన ఇల్లాలిగా ఆమెను గుర్తుంచుకుంటారు."]
  ],
  [
   ["h", "A world without dawn", "తెల్లవారని లోకం"],
   ["p", "Night stretched on and on. With no sunrise there was no time for the morning rites, no sacrifices, no offerings — the order of the world began to fall apart. The gods went to {brahma|Brahmā}, who told them that the power of one devoted woman could be met only by another. He sent them to {anasuya|Anasūyā}, wife of Atri.", "రాత్రి అలా సాగుతూనే ఉంది. సూర్యోదయం లేకపోతే సంధ్యావందనం లేదు, యజ్ఞాలు లేవు, హవిస్సులు లేవు — లోకపు క్రమమే చెదిరిపోవడం మొదలైంది. దేవతలు {brahma|బ్రహ్మదేవుని} దగ్గరికి వెళ్ళారు. ఒక పతివ్రత శక్తికి మరో పతివ్రత మాత్రమే సమాధానం చెప్పగలదని ఆయన చెప్పి, అత్రి మహర్షి భార్య {anasuya|అనసూయ} దగ్గరికి పంపాడు."],
   ["p", "Anasūyā went to Kauśika's wife and promised her: “Let the sun rise. If your husband dies, I will bring him back to life — free of his sickness, young and well.” Trusting her, the wife let the sun rise. As it rose, Kauśika fell dead — and Anasūyā, by her own power, restored him to life, healthy and young. The gods, delighted, offered Anasūyā a boon, and she asked that Brahmā, Viṣṇu and Śiva be born as her sons.", "అనసూయ కౌశికుని భార్య దగ్గరికి వెళ్ళి మాట ఇచ్చింది: “సూర్యుణ్ణి ఉదయించనివ్వు. నీ భర్త చనిపోతే నేను బతికిస్తాను — రోగం లేకుండా, యువకుడిగా, ఆరోగ్యంగా.” ఆమె మాట నమ్మి ఆ ఇల్లాలు సూర్యుణ్ణి ఉదయించనిచ్చింది. సూర్యుడు ఉదయించగానే కౌశికుడు కుప్పకూలి చనిపోయాడు — అనసూయ తన శక్తితో అతన్ని ఆరోగ్యవంతుడైన యువకుడిగా బతికించింది. సంతోషించిన దేవతలు అనసూయకు వరం ఇవ్వబోతే, బ్రహ్మ విష్ణు మహేశ్వరులు తన కుమారులుగా పుట్టాలని కోరుకుంది."],
   ["sglink", "The Woman Who Held Back the Dawn", "తెల్లవారకుండా ఆపిన ఇల్లాలు", "at-5"]
  ],
  [
   ["h", "A hard question", "ఒక కఠినమైన ప్రశ్న"],
   ["p", "This story leaves us something to think about. In the Mahābhārata, Māṇḍavya argued that a deed done without understanding should not be punished harshly. Yet here, in pain, he curses a man whose foot struck him in the dark without meaning to. The Purāṇa does not comment on this; it is our own observation. Even great sages, the old stories show, can speak in anger — and the world then has to find a way to set things right.", "ఈ కథ మనకు ఆలోచించవలసిన ఒక విషయం వదిలి వెళ్తుంది. మహాభారతంలో మాండవ్యుడు — తెలియకుండా చేసిన పనిని కఠినంగా శిక్షించకూడదని వాదించాడు. కానీ ఇక్కడ, బాధలో, చీకట్లో అనుకోకుండా పాదం తగిలిన మనిషినే శపిస్తాడు. పురాణం దీని మీద ఏమీ వ్యాఖ్యానించదు; ఇది మన పరిశీలన మాత్రమే. మహామునులు కూడా కోపంలో మాట జారవచ్చనీ, అప్పుడు దాన్ని సరిదిద్దే దారిని లోకం వెతుక్కోవాల్సి వస్తుందనీ పాత కథలు చూపిస్తాయి."],
   ["src", "Mārkaṇḍeya Purāṇa — the story of the devoted wife of Kauśika in Pratiṣṭhāna: Māṇḍavya on the stake, his curse, the sun held back, the gods and Brahmā, Anasūyā's promise, Kauśika restored, and Anasūyā's boon of the three gods as her sons.", "మార్కండేయ పురాణం — ప్రతిష్ఠానపుర కౌశికుని పతివ్రత భార్య కథ: శూలం మీద మాండవ్యుడు, ఆయన శాపం, ఆగిపోయిన సూర్యోదయం, దేవతలూ బ్రహ్మదేవుడూ, అనసూయ మాట, కౌశికుడు బతకడం, త్రిమూర్తులు కుమారులుగా పుట్టాలన్న అనసూయ వరం."]
  ]
 ],
 remember: [
  ["In the Mārkaṇḍeya Purāṇa, {kaushikapratishthana|Kauśika}'s foot struck {mandavya|Māṇḍavya} in the dark, and he cursed him to die at sunrise.", "మార్కండేయ పురాణంలో చీకట్లో {kaushikapratishthana|కౌశికుని} పాదం {mandavya|మాండవ్యునికి} తగిలింది; సూర్యోదయానికి చనిపోతాడని ఆయన శపించాడు."],
  ["{kaushikapatni|His wife} said, “Then the sun will not rise” — and it did not.", "“అయితే సూర్యుడు ఉదయించడు” అన్నది {kaushikapatni|అతని భార్య} — ఉదయించలేదు."],
  ["{anasuya|Anasūyā} let the sun rise and brought Kauśika back to life.", "{anasuya|అనసూయ} సూర్యోదయం జరిగేలా చేసి కౌశికుణ్ణి బతికించింది."]
 ],
 think: ["Māṇḍavya, who argued for mercy, cursed someone in a moment of pain. Why is it easier to ask for mercy than to give it?", "దయ కోసం వాదించిన మాండవ్యుడే బాధలో ఒకరిని శపించాడు. దయ అడగడం కంటే దయ చూపించడం ఎందుకు కష్టం?"]
},
{
 id: "md-8", sage: "mandavya", n: 8, order: 2708, date: "2026-10-28",
 title: "Māṇḍavya and King Janaka — the End of Craving", titleTe: "మాండవ్యుడు, జనక మహారాజు — తృష్ణ అంతం",
 src: "Mahābhārata, Śānti Parva (Mokṣadharma)",
 who: ["mandavya", "videhajanaka", "bhishma", "yudhishthira"],
 pages: [
  [
   ["p", "After the great war, {yudhishthira|Yudhiṣṭhira} sat at the side of {bhishma|Bhīṣma}, who lay on his bed of arrows, and asked him question after question about how to live and how to be free. Bhīṣma answered with teachings and with old stories. One of those stories is a conversation between a sage named {mandavya|Māṇḍavya} and {videhajanaka|Janaka}, king of Videha.", "మహా యుద్ధం తర్వాత {yudhishthira|ధర్మరాజు} అంపశయ్య మీద పడుకున్న {bhishma|భీష్ముని} పక్కన కూర్చుని, ఎలా బతకాలో, ఎలా ముక్తి పొందాలో ఒకదాని తర్వాత ఒకటిగా ప్రశ్నలు అడిగాడు. భీష్ముడు బోధలతోనూ పాత కథలతోనూ జవాబిచ్చాడు. ఆ కథలలో ఒకటి {mandavya|మాండవ్యుడనే} మునికీ విదేహ రాజు {videhajanaka|జనకునికీ} మధ్య జరిగిన సంభాషణ."],
   ["p", "The epic does not say whether this is the same Māṇḍavya who suffered on the stake. Many readers take it so, and it is moving to imagine it: a man who had lost everything a body can lose, asking a king who had everything how to be happy.", "శూలం మీద బాధపడిన మాండవ్యుడే ఈయనా కాదా అని మహాభారతం చెప్పదు. చాలామంది చదువరులు ఆయనే అనుకుంటారు. అలా ఊహించుకుంటే మనసు కదిలిపోతుంది: శరీరం పోగొట్టుకోగల సర్వమూ పోగొట్టుకున్న ఒక మనిషి, అన్నీ ఉన్న ఒక రాజును సుఖంగా ఎలా ఉండాలని అడగడం."]
  ],
  [
   ["h", "The king's answer", "రాజు జవాబు"],
   ["p", "Janaka's answer is about *tṛṣṇā* — craving, the thirst that keeps wanting more. Happiness, he says, does not come from getting what we crave; it comes when the craving itself ends. The joys of desire in this world, and even the great joys of heaven, are not worth a sixteenth part of the joy that comes when craving is destroyed.", "జనకుని జవాబు *తృష్ణ* గురించి — ఇంకా ఇంకా కావాలనిపించే దాహం గురించి. మనం కోరుకున్నది దొరికితే సుఖం రాదు; ఆ కోరికే తీరిపోయినప్పుడు సుఖం వస్తుంది అంటాడు. ఈ లోకంలో కోరికల వల్ల కలిగే సుఖాలూ, స్వర్గంలోని గొప్ప సుఖాలూ కూడా తృష్ణ నశించినప్పుడు కలిగే ఆనందంలో పదహారో వంతుకు కూడా సరిపోవు."],
   ["p", "A king saying this means something. Janaka was not a poor man making the best of poverty. He ruled a rich kingdom — and he had seen that owning things and being owned by them are two different matters.", "ఈ మాట ఒక రాజు చెప్పడంలో అర్థం ఉంది. జనకుడు పేదరికంతో సర్దుకుపోతున్న పేదవాడు కాదు. సంపన్న రాజ్యాన్ని పాలించాడు — వస్తువులు మనకు ఉండటం వేరు, మనమే వస్తువులకు బానిసలు కావడం వేరు అని గ్రహించాడు."],
   ["dyk", "🔥", "Elsewhere in the Śānti Parva, a Janaka is remembered for a famous saying: even if his city Mithilā were burning, nothing that was truly his would burn. It is the same spirit — possessions do not possess the free man.", "శాంతి పర్వంలో మరో చోట ఒక జనకుని ప్రసిద్ధ మాట కనిపిస్తుంది: తన నగరం మిథిల తగలబడిపోయినా నిజంగా తనదైనది ఏదీ కాలిపోదు అని. అదే భావం — స్వతంత్రుడైన మనిషిని సంపద తన చేతిలో పెట్టుకోలేదు."]
  ],
  [
   ["h", "The stake and the throne", "శూలమూ సింహాసనమూ"],
   ["p", "Put the two pictures side by side — the sage on the stake who would not blame anyone, and the king on the throne who would not cling to anything. Both are free in the same way. Neither pain nor wealth could take hold of their minds. That is why Bhīṣma passed this conversation on to Yudhiṣṭhira, who was about to rule a kingdom won at a terrible price.", "ఈ రెండు చిత్రాలనూ పక్కపక్కన పెట్టి చూడండి — ఎవరినీ నిందించని శూలం మీది ముని, దేనినీ పట్టుకు వేలాడని సింహాసనం మీది రాజు. ఇద్దరూ ఒకే రకంగా స్వతంత్రులు. బాధగానీ సంపదగానీ వారి మనసులను పట్టుకోలేకపోయాయి. అందుకే భయంకరమైన మూల్యం చెల్లించి గెలుచుకున్న రాజ్యాన్ని పాలించబోతున్న ధర్మరాజుకు భీష్ముడు ఈ సంభాషణను అందించాడు."],
   ["src", "Mahābhārata, Śānti Parva, Mokṣadharma section — Bhīṣma tells Yudhiṣṭhira the old account of the conversation of Māṇḍavya and Janaka on craving (tṛṣṇā) and the happiness of its ending. Janaka's saying about Mithilā burning is found elsewhere in the Śānti Parva.", "మహాభారతం, శాంతి పర్వం, మోక్షధర్మ పర్వం — తృష్ణ గురించి, అది నశించినప్పుడు కలిగే సుఖం గురించి మాండవ్యునికీ జనకునికీ జరిగిన సంభాషణను భీష్ముడు ధర్మరాజుకు చెప్పడం. మిథిల తగలబడటం గురించిన జనకుని మాట శాంతి పర్వంలోనే మరో చోట ఉంది."]
  ]
 ],
 remember: [
  ["{bhishma|Bhīṣma} told {yudhishthira|Yudhiṣṭhira} of a talk between {mandavya|Māṇḍavya} and {videhajanaka|Janaka}.", "{mandavya|మాండవ్యుడు}, {videhajanaka|జనకుడు} మాట్లాడుకున్న సంగతిని {bhishma|భీష్ముడు} {yudhishthira|ధర్మరాజుకు} చెప్పాడు."],
  ["Janaka said happiness comes when craving ends, not when it is fed.", "కోరిక తీర్చుకుంటే కాదు, కోరికే అంతమైనప్పుడు సుఖం వస్తుందని జనకుడు అన్నాడు."],
  ["All the joys of earth and heaven are not worth a sixteenth of that joy.", "భూలోక, స్వర్గలోక సుఖాలన్నీ ఆ ఆనందంలో పదహారో వంతుకు కూడా సరిపోవు."]
 ],
 think: ["Think of something you wanted very much and finally got. Did the wanting stop, or did you soon want something else?", "మీరు ఎంతో కోరుకుని చివరికి పొందిన ఒక వస్తువును గుర్తు చేసుకోండి. ఆ కోరిక తీరిపోయిందా, లేక త్వరలోనే ఇంకేదో కావాలనిపించిందా?"]
},
{
 id: "md-9", sage: "mandavya", n: 9, order: 2709, date: "2026-10-28",
 title: "What Māṇḍavya Leaves Us", titleTe: "మాండవ్యుడు మనకు ఇచ్చిన వారసత్వం",
 src: "Mahābhārata · Purāṇas · local tradition",
 who: ["mandavya", "dharma", "vidura", "mdking"],
 pages: [
  [
   ["p", "{mandavya|Māṇḍavya} has no great hymn in the Veda, no book of his own, no famous disciple. He is remembered for a few days of silence, a long time on a stake, and one conversation with the god of justice. Yet the Mahābhārata thought his story important enough to stop the main tale and tell it — because without him, there is no {vidura|Vidura}.", "{mandavya|మాండవ్యునికి} వేదంలో గొప్ప సూక్తం లేదు, సొంత గ్రంథం లేదు, ప్రసిద్ధ శిష్యుడు లేడు. కొన్ని రోజుల మౌనం, శూలం మీద సుదీర్ఘ కాలం, న్యాయదేవునితో ఒక్క సంభాషణ — వీటితోనే ఆయన గుర్తుండిపోయాడు. అయినా ప్రధాన కథను ఆపి మరీ చెప్పేంత ముఖ్యమైనదిగా మహాభారతం ఆయన కథను భావించింది — ఎందుకంటే ఆయన లేకపోతే {vidura|విదురుడు} లేడు."]
  ],
  [
   ["h", "Four lessons from the stake", "శూలం నుండి నాలుగు పాఠాలు"],
   ["p", "First, judge carefully. {mdking|The king}'s great wrong was not cruelty but haste — he never asked a single question. Second, look within before blaming. On the stake, Māṇḍavya said, “Whom shall I blame?” Third, forgive quickly. When the king fell at his feet, the sage did not make him crawl.", "మొదటిది — జాగ్రత్తగా తీర్పు చెప్పాలి. {mdking|రాజు} చేసిన పెద్ద తప్పు క్రూరత్వం కాదు, తొందరపాటు — ఒక్క ప్రశ్న కూడా అడగలేదు. రెండోది — ఇతరులను నిందించే ముందు మనలోకి మనం చూసుకోవాలి. శూలం మీద మాండవ్యుడు “ఎవరిని నిందించను?” అన్నాడు. మూడోది — త్వరగా క్షమించాలి. రాజు కాళ్ళ మీద పడినప్పుడు ముని అతన్ని ఇంకా దిగజార్చలేదు."],
   ["p", "And fourth — this is the surprising one — even justice must be just. Māṇḍavya accepted that every deed bears fruit, but he would not accept a fruit out of all proportion to the deed, or a child punished like a man. He took that complaint to {dharma|Dharma} himself, and Dharma had to accept it.", "నాలుగోది — ఇది ఆశ్చర్యపరిచేది — న్యాయం కూడా న్యాయంగా ఉండాలి. ప్రతి కర్మకూ ఫలం ఉంటుందని మాండవ్యుడు ఒప్పుకున్నాడు; కానీ కర్మకు ఏమాత్రం సరిపోని ఫలాన్నీ, పిల్లవాణ్ణి పెద్దవాడిలా శిక్షించడాన్నీ ఒప్పుకోలేదు. ఆ ఫిర్యాదును స్వయంగా {dharma|ధర్మదేవుని} దగ్గరికే తీసుకెళ్ళాడు; ధర్మదేవుడు దాన్ని అంగీకరించక తప్పలేదు."]
  ],
  [
   ["h", "Places that remember him", "ఆయనను గుర్తుంచుకున్న ప్రదేశాలు"],
   ["p", "In Karnataka, local tradition says that the town and district of Mandya take their name from Māṇḍavya, who is believed to have done tapas there. This is a local belief, not something the epic or Purāṇas state, but it shows how far the sage's name has travelled.", "కర్ణాటకలో మండ్య పట్టణానికీ జిల్లాకూ మాండవ్యుని పేరు మీదే ఆ పేరు వచ్చిందనీ, ఆయన అక్కడ తపస్సు చేశాడనీ స్థానిక సంప్రదాయం చెబుతుంది. ఇది స్థానిక విశ్వాసం, మహాభారతంలో గానీ పురాణాలలో గానీ ఉన్నది కాదు — అయినా ఆ ముని పేరు ఎంత దూరం ప్రయాణించిందో ఇది చూపిస్తుంది."],
   ["dyk", "📖", "Whenever Vidura is praised as the wisest man of the Mahābhārata, Māṇḍavya is quietly present too. The god of justice became our wisest counsellor because a silent sage on a stake asked him a question he could not answer.", "మహాభారతంలో అందరికంటే జ్ఞాని అని విదురుణ్ణి పొగిడిన ప్రతిసారీ మాండవ్యుడు కూడా నిశ్శబ్దంగా అక్కడ ఉంటాడు. శూలం మీది మౌనముని తాను జవాబు చెప్పలేని ప్రశ్న అడిగినందుకే న్యాయదేవుడు మనకు అతి జ్ఞాని అయిన మంత్రి అయ్యాడు."]
  ],
  [
   ["h", "The silent sage", "మౌనముని"],
   ["p", "So remember Māṇḍavya as the sage who kept silence when speaking would have saved him, who blamed no one when he had every reason to, who forgave a king in a moment — and who, when the time came, spoke up boldly for every child who would ever be born.", "కాబట్టి మాండవ్యుణ్ణి ఇలా గుర్తుంచుకోండి — మాట్లాడితే బతికిపోయే సమయంలో మౌనంగా ఉన్న ముని; నిందించడానికి ఎన్ని కారణాలున్నా ఎవరినీ నిందించని ముని; క్షణంలో రాజును క్షమించిన ముని — సమయం వచ్చినప్పుడు, ఇక ముందు పుట్టబోయే ప్రతి పిల్లవాడి తరఫునా ధైర్యంగా గొంతెత్తిన ముని."],
   ["src", "Mahābhārata, Ādi Parva (the Aṇīmāṇḍavya episode), Śānti Parva (Māṇḍavya and Janaka), Āśramavāsika Parva (Vidura's end). Bhāgavata Purāṇa, Skandha 1. Mārkaṇḍeya Purāṇa (Kauśika's wife). The link between Mandya and Māṇḍavya is a local Karnataka tradition.", "మహాభారతం, ఆది పర్వం (అణిమాండవ్యోపాఖ్యానం), శాంతి పర్వం (మాండవ్య–జనక సంవాదం), ఆశ్రమవాసిక పర్వం (విదురుని అంతం). భాగవత పురాణం, ప్రథమ స్కంధం. మార్కండేయ పురాణం (కౌశికుని భార్య కథ). మండ్యకూ మాండవ్యునికీ ఉన్న సంబంధం కర్ణాటకలోని స్థానిక సంప్రదాయం."]
  ]
 ],
 remember: [
  ["Judge carefully, look within before blaming, and forgive quickly.", "జాగ్రత్తగా తీర్పు చెప్పాలి, నిందించే ముందు మనలోకి చూసుకోవాలి, త్వరగా క్షమించాలి."],
  ["{mandavya|Māṇḍavya} showed that even justice must be fair and in proportion.", "న్యాయం కూడా సమంగా, తగిన తూకంతో ఉండాలని {mandavya|మాండవ్యుడు} చూపించాడు."],
  ["Without Māṇḍavya there would be no {vidura|Vidura}.", "మాండవ్యుడు లేకపోతే {vidura|విదురుడు} లేడు."]
 ],
 think: ["Which of Māṇḍavya's four lessons do you find hardest to follow — judging carefully, not blaming, forgiving quickly, or standing up for what is fair?", "మాండవ్యుని నాలుగు పాఠాలలో — జాగ్రత్తగా తీర్పు, నిందించకపోవడం, త్వరగా క్షమించడం, న్యాయం కోసం నిలబడటం — మీకు ఏది పాటించడం అన్నిటికంటే కష్టం?"]
}
]);
