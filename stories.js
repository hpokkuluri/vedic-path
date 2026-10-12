// ─────────────── KIDS STORIES ───────────────
// Original retellings for children (ages 5–15) of episodes from the Rāmāyaṇa and Mahābhārata.
// Each story: 2–5 pages, English + Telugu, a one-line lesson, and simple scenes drawn by kids.js.
//   id      unique, lowercase-with-dashes
//   added   'YYYY-MM-DD' — stories added in the last 21 days show a NEW tag until read on that phone
//   epic    'Ramayana' | 'Mahabharata'
//   chars   main characters, English names with diacritics (used for the Characters filter)
//   pages   [{ scene: { bg, props: [[prop, x, y, scale, options]] }, en, te }]
// Scene backgrounds and props are listed in kids.js (SCENE KIT). The picture is 400 wide × 220 tall;
// x,y is where a prop stands (its bottom centre). Ground is roughly y = 175–200.
window.KIDS_STORIES = [
  {
    id: 'squirrel-and-the-bridge',
    added: '2026-10-12',
    epic: 'Ramayana',
    chars: ['Rāma', 'The Squirrel', 'Nala', 'Nīla'],
    title: { en: 'The Squirrel Who Helped Build the Bridge', te: 'వారధికి సాయం చేసిన ఉడుత' },
    moral: { en: 'No help is too small when it is given with a full heart.', te: 'మనస్ఫూర్తిగా చేసే ఏ సహాయమూ చిన్నది కాదు.' },
    cover: { bg: 'shore', props: [['stones', 290, 150, 1.1], ['squirrel', 170, 190, 1.6], ['sun', 350, 50, 1], ['cloud', 80, 50, 1]] },
    pages: [
      {
        scene: { bg: 'sea', props: [['sun', 345, 50, 1], ['monkey', 90, 190, 1.2, { stone: true }], ['stones', 210, 160, 1.2], ['monkey', 320, 192, 1.1, { stone: true, flip: true }], ['cloud', 150, 45, 1]] },
        en: 'Long ago, the demon king Rāvaṇa carried Sītā away to his island kingdom of Laṅkā. Rāma, his brother Lakṣmaṇa and a great army of monkeys and bears marched south until they reached the edge of the ocean. The waves were wide and deep, and Laṅkā lay far away across the water. "We will build a bridge," said Rāma. At once the whole army got to work. Mighty monkeys like Nala and Nīla lifted huge rocks. Others wrote Rāma\'s name on every stone, and — wonder of wonders — the stones floated on the sea!',
        te: 'చాలా కాలం క్రితం, రాక్షస రాజు రావణుడు సీతాదేవిని తన లంకా ద్వీపానికి ఎత్తుకుపోయాడు. రాముడు, ఆయన తమ్ముడు లక్ష్మణుడు, వానరులు, ఎలుగుబంట్ల పెద్ద సైన్యం దక్షిణానికి నడిచి సముద్రపు ఒడ్డుకు చేరుకున్నారు. సముద్రం చాలా వెడల్పుగా, లోతుగా ఉంది. లంక నీటికి ఆవల చాలా దూరంలో ఉంది. "మనం ఒక వారధి కడదాం," అన్నాడు రాముడు. వెంటనే సైన్యమంతా పనిలోకి దిగింది. నలుడు, నీలుడు వంటి బలమైన వానరులు పెద్ద పెద్ద బండరాళ్ళను ఎత్తారు. మరికొందరు ప్రతి రాయి మీద \'శ్రీరామ\' అని రాశారు. ఆశ్చర్యం! ఆ రాళ్ళు నీటి మీద తేలాయి!',
      },
      {
        scene: { bg: 'shore', props: [['squirrel', 140, 192, 1.5], ['stones', 300, 150, 0.9], ['monkey', 330, 196, 1.2, { flip: true }], ['cloud', 70, 45, 1], ['cloud', 260, 35, 0.8]] },
        en: 'Among all the busy workers was a tiny squirrel. She could not lift a rock — she was far too small. But she wanted to help Rāma too. So she ran into the water and got her fur wet. Then she rolled in the sand on the beach until it stuck all over her. She ran to the bridge, shook herself, and the sand fell into the gaps between the stones. Back and forth she went, again and again: water, sand, bridge. A big monkey laughed. "Little one, what use is your handful of sand? Move aside, or we will step on you!"',
        te: 'పనిలో ఉన్నవారందరి మధ్య ఒక చిన్న ఉడుత కూడా ఉంది. అది బండరాయిని ఎత్తలేదు — అది చాలా చిన్నది. కానీ దానికి కూడా రాముడికి సహాయం చేయాలని ఉంది. అందుకే అది నీళ్ళలోకి పరుగెత్తి ఒళ్ళంతా తడుపుకుంది. తరువాత ఒడ్డున ఇసుకలో దొర్లింది, ఇసుక దాని ఒంటికి అంటుకుంది. వారధి దగ్గరకు పరుగెత్తి ఒళ్ళు విదిలించింది, ఇసుక రాళ్ళ మధ్య సందుల్లో పడింది. అలా మళ్ళీ మళ్ళీ — నీళ్ళు, ఇసుక, వారధి — అటూ ఇటూ తిరిగింది. ఒక పెద్ద వానరం నవ్వింది. "చిట్టి ఉడుతా, నీ గుప్పెడు ఇసుక వల్ల ఏం లాభం? పక్కకు తప్పుకో, లేకపోతే మా కాళ్ళ కింద పడతావు!"',
      },
      {
        scene: { bg: 'shore', props: [['sun', 60, 50, 0.9], ['person', 180, 198, 1.5, { skin: 'blue', cloth: '#f0c040', crown: true, tilak: true }], ['squirrel', 240, 150, 1.1], ['stones', 330, 152, 0.8], ['monkey', 90, 196, 1]] },
        en: 'Rāma had been watching. He walked over and gently picked up the little squirrel. "Do not laugh at her," he told the monkeys. "The big rocks need small grains of sand to fill the gaps between them. She is giving all the strength she has, and that is all anyone can give." Then, with great love, Rāma stroked the squirrel\'s back with three fingers. Where his fingers touched, three soft stripes appeared on her fur. And to this day, it is said, the squirrels of India carry those stripes — Rāma\'s thank-you to a small helper with a big heart.',
        te: 'రాముడు ఇదంతా గమనిస్తూనే ఉన్నాడు. ఆయన దగ్గరకు వచ్చి ఆ చిన్న ఉడుతను ప్రేమగా చేతుల్లోకి తీసుకున్నాడు. "దాన్ని చూసి నవ్వకండి," అని వానరులతో అన్నాడు. "పెద్ద రాళ్ళ మధ్య ఖాళీలను నింపడానికి చిన్న ఇసుక రేణువులు కావాలి. ఈ ఉడుత తనకున్న బలమంతా ఇస్తోంది. ఎవరైనా ఇవ్వగలిగేది అంతే." తరువాత రాముడు ఎంతో ప్రేమతో మూడు వేళ్ళతో ఉడుత వీపు మీద నిమిరాడు. ఆయన వేళ్ళు తాకిన చోట మూడు మెత్తని చారలు ఏర్పడ్డాయి. ఇప్పటికీ మన దేశంలో ఉడుతల వీపు మీద ఆ చారలు కనిపిస్తాయని అంటారు — పెద్ద మనసున్న చిన్న సహాయకురాలికి రాముడు చెప్పిన కృతజ్ఞత అది.',
      },
    ],
  },
  {
    id: 'arjuna-and-the-birds-eye',
    added: '2026-10-12',
    epic: 'Mahabharata',
    chars: ['Arjuna', 'Droṇa', 'Yudhiṣṭhira'],
    title: { en: 'Arjuna and the Bird\'s Eye', te: 'అర్జునుడి గురి' },
    moral: { en: 'Keep your eyes on your goal, and you will reach it.', te: 'లక్ష్యం మీదే దృష్టి పెడితే విజయం తప్పక వస్తుంది.' },
    cover: { bg: 'forest', props: [['archer', 120, 196, 1.4], ['targetTree', 310, 196, 1.4], ['sun', 50, 50, 0.8]] },
    pages: [
      {
        scene: { bg: 'ashram', props: [['person', 90, 198, 1.4, { skin: 'wheat', cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['targetTree', 230, 196, 1.3], ['person', 160, 198, 1, { cloth: '#3a6ab0' }], ['person', 195, 198, 0.95, { cloth: '#a83a3a' }]] },
        en: 'In the forest school of Guru Droṇa, the young princes of Hastināpura were learning archery. There were the five Pāṇḍava brothers and their cousins, the Kauravas. One morning Droṇa hung a small wooden bird high on the branch of a tree. "Today\'s test is simple," he said. "Aim at the eye of that bird. Do not shoot until I tell you." The princes lined up with their bows ready, each one hoping to be the best.',
        te: 'ద్రోణాచార్యుల ఆశ్రమంలో హస్తినాపుర యువరాజులు విలువిద్య నేర్చుకుంటున్నారు. పాండవులు ఐదుగురూ, వారి దాయాదులైన కౌరవులూ అక్కడ ఉన్నారు. ఒక రోజు ఉదయం ద్రోణుడు ఒక చెట్టు కొమ్మ మీద ఎత్తులో చెక్కతో చేసిన చిన్న పక్షిని వేలాడదీశాడు. "ఈ రోజు పరీక్ష చాలా సులభం," అన్నాడు ఆయన. "ఆ పక్షి కంటికి గురి పెట్టండి. నేను చెప్పే వరకు బాణం వదలకండి." యువరాజులంతా విల్లులు పట్టుకుని వరుసగా నిలబడ్డారు. ప్రతి ఒక్కరూ తానే గెలవాలని ఆశపడ్డారు.',
      },
      {
        scene: { bg: 'forest', props: [['person', 70, 198, 1.3, { cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['archer', 160, 198, 1.2, { cloth: '#7a5ab0' }], ['targetTree', 320, 196, 1.3], ['cloud', 230, 40, 0.9]] },
        en: 'Droṇa called the eldest, Yudhiṣṭhira, first. "Take aim. Now tell me — what do you see?" "I see the tree, the branches, the leaves, the bird, and you, my teacher," said Yudhiṣṭhira. "Put your bow down," said Droṇa. He asked the next prince, and the next. "I see the sky and the tree." "I see my brothers and the bird." Each time Droṇa sighed and said, "Put your bow down." The princes looked at one another, puzzled. What was the right answer?',
        te: 'ద్రోణుడు మొదట పెద్దవాడైన ధర్మరాజును పిలిచాడు. "గురి పెట్టు. ఇప్పుడు చెప్పు — నీకు ఏం కనిపిస్తోంది?" "చెట్టు, కొమ్మలు, ఆకులు, పక్షి, మీరు కూడా కనిపిస్తున్నారు గురువుగారూ," అన్నాడు ధర్మరాజు. "విల్లు కింద పెట్టు," అన్నాడు ద్రోణుడు. తరువాత ఇంకో యువరాజును, ఆ తరువాత మరొకరిని అడిగాడు. "నాకు ఆకాశం, చెట్టు కనిపిస్తున్నాయి." "నా సోదరులు, పక్షి కనిపిస్తున్నారు." ప్రతిసారీ ద్రోణుడు నిట్టూర్చి "విల్లు కింద పెట్టు" అన్నాడు. యువరాజులు ఒకరి ముఖం ఒకరు చూసుకున్నారు. సరైన జవాబు ఏమిటి?',
      },
      {
        scene: { bg: 'forest', props: [['archer', 90, 198, 1.5, { cloth: '#3a6ab0' }], ['arrow', 230, 120, 1.2], ['targetTree', 330, 196, 1.4], ['sun', 360, 40, 0.7]] },
        en: 'At last it was Arjuna\'s turn. He raised his bow and drew the string back to his ear. "What do you see, Arjuna?" asked Droṇa. "I see only the eye of the bird," said Arjuna. "Not the tree? Not the bird?" "No, Guru. Only its eye." Droṇa smiled. "Shoot!" The arrow flew straight and struck the bird\'s eye. Droṇa hugged his student. "This is the secret of every great archer," he told the princes. "When you aim, see nothing but your goal."',
        te: 'చివరకు అర్జునుడి వంతు వచ్చింది. అతడు విల్లు ఎత్తి, నారిని చెవి వరకు లాగాడు. "అర్జునా, నీకు ఏం కనిపిస్తోంది?" అని అడిగాడు ద్రోణుడు. "నాకు పక్షి కన్ను మాత్రమే కనిపిస్తోంది," అన్నాడు అర్జునుడు. "చెట్టు కనిపించడం లేదా? పక్షి?" "లేదు గురువుగారూ. దాని కన్ను మాత్రమే." ద్రోణుడు చిరునవ్వు నవ్వాడు. "వదులు!" బాణం సూటిగా దూసుకెళ్ళి పక్షి కంటికి తగిలింది. ద్రోణుడు తన శిష్యుడిని కౌగిలించుకున్నాడు. "ప్రతి గొప్ప విలుకాడి రహస్యం ఇదే," అని యువరాజులతో చెప్పాడు. "గురి పెట్టినప్పుడు, నీ లక్ష్యం తప్ప మరేదీ చూడకూడదు."',
      },
    ],
  },
  {
    id: 'hanumans-great-leap',
    added: '2026-10-12',
    epic: 'Ramayana',
    chars: ['Hanumān', 'Jāmbavān'],
    title: { en: 'Hanumān\'s Great Leap', te: 'హనుమంతుడి మహా లంఘనం' },
    moral: { en: 'Believe in yourself — you are stronger than you think.', te: 'నిన్ను నువ్వు నమ్ము — నువ్వు అనుకునే దానికంటే నువ్వు బలవంతుడివి.' },
    cover: { bg: 'sky', props: [['hanuman', 200, 145, 1.4], ['cloud', 70, 60, 1], ['cloud', 330, 50, 0.9], ['lanka', 350, 195, 0.8]] },
    pages: [
      {
        scene: { bg: 'shore', props: [['monkey', 70, 196, 1.1], ['monkey', 130, 198, 1], ['bear', 200, 198, 1.1], ['monkey', 300, 198, 1.3, { color: '#d9772a', flip: true }], ['cloud', 260, 40, 0.9]] },
        en: 'The monkey army searched everywhere for Sītā until they reached the southern sea. There they learned that she was a prisoner in Laṅkā, a hundred yojanas away across the water. "Who can jump so far?" the monkeys wondered. One said he could jump ten yojanas, another twenty, another fifty. No one could jump a hundred. Hanumān sat quietly to one side. As a child he had been so full of mischief that the sages had made him forget his own great strength — until the right moment came.',
        te: 'వానర సైన్యం సీతాదేవి కోసం అన్ని చోట్లా వెతుకుతూ దక్షిణ సముద్రపు ఒడ్డుకు చేరింది. ఆమె నీటికి ఆవల వంద యోజనాల దూరంలో ఉన్న లంకలో బందీగా ఉందని అక్కడ తెలిసింది. "అంత దూరం ఎవరు దూకగలరు?" అని వానరులు ఆలోచించారు. ఒకరు పది యోజనాలు దూకగలనన్నారు, మరొకరు ఇరవై, ఇంకొకరు యాభై. వంద యోజనాలు ఎవరూ దూకలేరు. హనుమంతుడు ఒక పక్కన మౌనంగా కూర్చున్నాడు. చిన్నతనంలో ఆయన చేసిన అల్లరికి, మునులు ఆయనకు తన బలం గుర్తుండకుండా చేశారు — సరైన సమయం వచ్చే వరకు.',
      },
      {
        scene: { bg: 'mountain', props: [['bear', 130, 198, 1.3], ['monkey', 270, 200, 2, { color: '#d9772a', flip: true }], ['sun', 360, 40, 0.8]] },
        en: 'Then old Jāmbavān, the wise king of the bears, walked up to Hanumān. "Son of the Wind," he said, "why are you silent? You are as strong as the wind itself. As a baby you leapt into the sky to catch the sun, thinking it was a ripe mango! You can cross this ocean." As Jāmbavān spoke, Hanumān began to remember. His chest swelled with courage. He grew taller and taller, as big as a mountain. "I will find Mother Sītā," he roared, "and bring the news to Rāma!"',
        te: 'అప్పుడు ఎలుగుబంట్ల రాజు, జ్ఞానవంతుడైన వృద్ధ జాంబవంతుడు హనుమంతుడి దగ్గరకు వచ్చాడు. "వాయుపుత్రా, ఎందుకు మౌనంగా ఉన్నావు?" అన్నాడు. "నువ్వు గాలి అంత బలవంతుడివి. చిన్నప్పుడు సూర్యుడిని పండిన మామిడిపండు అనుకుని పట్టుకోవడానికి ఆకాశంలోకి ఎగిరావు! ఈ సముద్రాన్ని నువ్వు దాటగలవు." జాంబవంతుడు మాట్లాడుతుండగానే హనుమంతుడికి అన్నీ గుర్తుకు రావడం మొదలైంది. ఆయన గుండె ధైర్యంతో నిండిపోయింది. ఆయన పెరిగి పెరిగి పర్వతమంత పెద్దవాడయ్యాడు. "నేను సీతమ్మను వెతికి, రాముడికి వార్త తెస్తాను!" అని గర్జించాడు.',
      },
      {
        scene: { bg: 'sky', props: [['cloud', 60, 60, 1.1], ['hanuman', 190, 140, 1.35], ['cloud', 300, 40, 0.8], ['lanka', 345, 198, 0.9]] },
        en: 'Hanumān climbed Mount Mahendra and pressed down with his feet. The whole mountain shook! Then, chanting Rāma\'s name, he sprang into the sky. He flew over the ocean like an arrow, his tail streaming behind him. On the way there were tests: a mountain rose out of the sea and offered him rest, and a giant sea-creature opened her mouth to swallow him. Hanumān was polite to one and clever with the other, and he never stopped. At last the golden city of Laṅkā appeared below. The impossible leap was done — because Hanumān remembered who he was.',
        te: 'హనుమంతుడు మహేంద్ర పర్వతం ఎక్కి కాళ్ళతో గట్టిగా నొక్కాడు. పర్వతమంతా కంపించింది! తరువాత \'శ్రీరామ\' అని జపిస్తూ ఆకాశంలోకి ఎగిరాడు. తోక వెనుక ఊగుతుండగా బాణంలా సముద్రం మీదుగా ఎగిరాడు. దారిలో పరీక్షలు ఎదురయ్యాయి: సముద్రం నుంచి ఒక పర్వతం పైకి లేచి విశ్రాంతి తీసుకోమంది, ఒక పెద్ద సముద్ర రాక్షసి ఆయనను మింగడానికి నోరు తెరిచింది. ఒకరితో వినయంగా, మరొకరితో తెలివిగా వ్యవహరించి, ఆయన ఎక్కడా ఆగలేదు. చివరకు కింద బంగారు లంకా నగరం కనిపించింది. అసాధ్యమనుకున్న దూకు పూర్తయింది — ఎందుకంటే హనుమంతుడు తానెవరో గుర్తు చేసుకున్నాడు.',
      },
    ],
  },
  {
    id: 'karna-the-son-of-the-sun',
    added: '2026-10-12',
    epic: 'Mahabharata',
    chars: ['Karṇa', 'Kuntī', 'Sūrya', 'Durvāsa'],
    title: { en: 'Karṇa, the Son of the Sun', te: 'సూర్యపుత్రుడు కర్ణుడు' },
    moral: { en: 'Where we are born does not decide who we become.', te: 'మనం ఎక్కడ పుట్టామన్నది కాదు, ఎలా బతుకుతామన్నదే మనల్ని నిర్ణయిస్తుంది.' },
    cover: { bg: 'river', props: [['sun', 330, 70, 1.3], ['basket', 190, 196, 1.4], ['cloud', 80, 50, 1]] },
    pages: [
      {
        scene: { bg: 'palace', props: [['person', 130, 198, 1.4, { cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['person', 250, 198, 1.3, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['fire', 190, 198, 0.8]] },
        en: 'Long ago, a princess named Kuntī lived in the palace of King Kuntibhoja. One day the great sage Durvāsa came to stay. He was famous for his short temper, but Kuntī served him with such patience and care that, before leaving, he blessed her. "I will teach you a secret mantra," he said. "With it you can call any god you wish, and he will give you a child as great as himself." Kuntī bowed and learned the mantra by heart.',
        te: 'చాలా కాలం క్రితం కుంతిభోజ మహారాజు అంతఃపురంలో కుంతి అనే రాకుమారి ఉండేది. ఒక రోజు మహర్షి దుర్వాసుడు అక్కడ కొంతకాలం ఉండడానికి వచ్చాడు. ఆయనకు కోపం ఎక్కువని అందరికీ తెలుసు. కానీ కుంతి ఎంతో ఓపికగా, శ్రద్ధగా ఆయనకు సేవ చేసింది. వెళ్ళే ముందు దుర్వాసుడు ఆమెను ఆశీర్వదించాడు. "నీకు ఒక రహస్య మంత్రం ఉపదేశిస్తాను," అన్నాడు. "దానితో నువ్వు ఏ దేవుడిని పిలిచినా ఆయన వస్తాడు, తనంతటి గొప్ప బిడ్డను నీకు ప్రసాదిస్తాడు." కుంతి నమస్కరించి ఆ మంత్రాన్ని కంఠస్థం చేసింది.',
      },
      {
        scene: { bg: 'palace', props: [['sun', 200, 90, 2.2], ['person', 120, 198, 1.3, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['basket', 280, 196, 1.2]] },
        en: 'Kuntī was young and curious. "Does it really work?" she wondered. One morning she looked up at the rising sun and softly said the mantra. In a blaze of golden light, Sūrya, the Sun God himself, stood before her! Kuntī was frightened. "I only wanted to test it," she said. But a mantra once spoken cannot be undone. Sūrya blessed her, and in time Kuntī had a baby boy who shone like the morning sun. He was born wearing golden armour, the kavaca, and bright golden earrings, the kuṇḍalas — gifts from his father that would protect him.',
        te: 'కుంతి చిన్నపిల్ల, ఆమెకు కుతూహలం ఎక్కువ. "ఈ మంత్రం నిజంగా పని చేస్తుందా?" అని ఆలోచించింది. ఒక రోజు ఉదయం ఉదయిస్తున్న సూర్యుడిని చూస్తూ మెల్లగా ఆ మంత్రం చదివింది. బంగారు కాంతితో సూర్యభగవానుడే ఆమె ముందు ప్రత్యక్షమయ్యాడు! కుంతి భయపడిపోయింది. "నేను ఊరికే పరీక్షించాలనుకున్నాను," అంది. కానీ ఒకసారి చదివిన మంత్రాన్ని వెనక్కి తీసుకోలేం. సూర్యుడు ఆమెను ఆశీర్వదించాడు. కొంతకాలానికి కుంతికి ఉదయసూర్యుడిలా వెలిగిపోయే ఒక మగబిడ్డ పుట్టాడు. ఆ బిడ్డ పుట్టుకతోనే బంగారు కవచంతో, మెరిసే బంగారు కుండలాలతో పుట్టాడు — అవి అతడిని కాపాడడానికి తండ్రి ఇచ్చిన కానుకలు.',
      },
      {
        scene: { bg: 'river', props: [['basket', 150, 196, 1.3], ['person', 270, 198, 1.2, { cloth: '#3a6ab0' }], ['person', 320, 198, 1.15, { female: true, cloth: '#f2a33a', pallu: '#4f9d69' }], ['sun', 360, 40, 0.8]] },
        en: 'Kuntī was still unmarried and very young, and she was afraid of what people would say. With tears in her eyes, she laid the baby in a soft basket, kissed him, and set it gently on the river. "May the gods protect you, my child," she whispered. The basket floated far downstream, until a kind charioteer named Adhiratha saw it shining in the water. He and his wife Rādhā had no children. They took the baby home with joy and named him Vasuṣeṇa. People also called him Rādheya, son of Rādhā. The world would one day know him as Karṇa — the great archer, famous for never refusing anyone who asked him for help.',
        te: 'కుంతి ఇంకా పెళ్ళి కాని చిన్నపిల్ల. లోకులు ఏమంటారోనని ఆమె భయపడింది. కన్నీళ్ళతో ఆ బిడ్డను ఒక మెత్తని బుట్టలో పడుకోబెట్టి, ముద్దాడి, ఆ బుట్టను మెల్లగా నదిలో వదిలింది. "నా బిడ్డా, దేవతలు నిన్ను కాపాడుదురు గాక," అని గుసగుసగా అంది. ఆ బుట్ట నదిలో చాలా దూరం తేలుతూ వెళ్ళింది. నీళ్ళలో మెరుస్తున్న ఆ బుట్టను అధిరథుడు అనే దయగల సారథి చూశాడు. అతనికీ, అతని భార్య రాధకూ పిల్లలు లేరు. వారు సంతోషంగా ఆ బిడ్డను ఇంటికి తీసుకెళ్ళి వసుషేణుడు అని పేరు పెట్టారు. రాధ కొడుకు కాబట్టి అందరూ రాధేయుడు అని కూడా పిలిచేవారు. అడిగిన వారికి ఎప్పుడూ లేదనని గొప్ప విలుకాడు కర్ణుడిగా లోకం అతడిని తరువాత తెలుసుకుంది.',
      },
    ],
  },
  {
    id: 'karna-gives-away-his-armour',
    added: '2026-10-12',
    epic: 'Mahabharata',
    chars: ['Karṇa', 'Indra', 'Sūrya'],
    title: { en: 'Karṇa Gives Away His Armour', te: 'కవచ కుండలాలు దానం చేసిన కర్ణుడు' },
    moral: { en: 'A true giver keeps his word, even when it costs him dearly.', te: 'నిజమైన దాత ఎంత కష్టమైనా ఇచ్చిన మాట నిలబెట్టుకుంటాడు.' },
    cover: { bg: 'river', props: [['sun', 330, 60, 1.2], ['person', 150, 198, 1.5, { cloth: '#c9952a', crown: true }], ['person', 250, 198, 1.3, { cloth: '#f4ead2', beard: true, hair: '#ddd' }]] },
    pages: [
      {
        scene: { bg: 'river', props: [['sun', 200, 70, 1.6], ['person', 200, 200, 1.5, { cloth: '#c9952a', crown: true, raise: true }], ['lotus', 90, 205, 1], ['lotus', 320, 205, 0.9]] },
        en: 'Karṇa grew up to be a mighty warrior and the king of Aṅga. Every day at noon he stood in the river and prayed to Sūrya, the Sun. After his prayers, he gave away whatever anyone asked of him — gold, cows, even his own things. As long as he wore his golden armour and earrings, no weapon could ever harm him. But Indra, the king of the gods, was worried. His son Arjuna would one day have to face Karṇa in battle. So Indra made a plan.',
        te: 'కర్ణుడు పెరిగి పెద్దయ్యాక గొప్ప వీరుడయ్యాడు, అంగ దేశానికి రాజయ్యాడు. ప్రతి రోజు మధ్యాహ్నం అతను నదిలో నిలబడి సూర్యభగవానుడిని ప్రార్థించేవాడు. ప్రార్థన తరువాత ఎవరు ఏమి అడిగినా ఇచ్చేసేవాడు — బంగారం, ఆవులు, తన సొంత వస్తువులు కూడా. బంగారు కవచ కుండలాలు ధరించి ఉన్నంత కాలం ఏ ఆయుధమూ అతడిని గాయపరచలేదు. కానీ దేవతల రాజైన ఇంద్రుడు ఆందోళన పడ్డాడు. ఆయన కొడుకు అర్జునుడు ఒక రోజు యుద్ధంలో కర్ణుడిని ఎదుర్కోవాలి. అందుకే ఇంద్రుడు ఒక ఉపాయం ఆలోచించాడు.',
      },
      {
        scene: { bg: 'night', props: [['moon', 340, 60, 0.9], ['cloud', 230, 110, 1.6], ['sun', 230, 120, 0.9], ['person', 120, 198, 1.4, { cloth: '#c9952a', crown: true }]] },
        en: 'The night before, Sūrya came to Karṇa in a dream. "My son," he said, "tomorrow Indra will come to you dressed as a poor brāhmaṇa. He will ask for your armour and earrings. Do not give them — they protect your life." Karṇa smiled in his sleep. "Father, I have never sent anyone away empty-handed. If I refuse now, I will lose my good name, and a good name lasts longer than life." Sūrya sighed. "Then at least ask for something in return," he said.',
        te: 'ముందు రోజు రాత్రి సూర్యుడు కర్ణుడికి కలలో కనిపించాడు. "నాయనా," అన్నాడు, "రేపు ఇంద్రుడు పేద బ్రాహ్మణుడి వేషంలో నీ దగ్గరకు వస్తాడు. నీ కవచ కుండలాలు అడుగుతాడు. వాటిని ఇవ్వకు — అవి నీ ప్రాణాన్ని కాపాడుతాయి." కర్ణుడు నిద్రలోనే చిరునవ్వు నవ్వాడు. "తండ్రీ, నేను ఎవరినీ ఎప్పుడూ ఉత్త చేతులతో పంపలేదు. ఇప్పుడు కాదంటే నా మంచి పేరు పోతుంది. మంచి పేరు ప్రాణం కంటే ఎక్కువ కాలం నిలుస్తుంది." సూర్యుడు నిట్టూర్చాడు. "అయితే కనీసం బదులుగా ఏదైనా అడుగు," అన్నాడు.',
      },
      {
        scene: { bg: 'river', props: [['sun', 340, 50, 1], ['person', 140, 198, 1.5, { cloth: '#c9952a', crown: true }], ['person', 250, 198, 1.35, { cloth: '#f4ead2', beard: true, hair: '#ddd', raise: true }]] },
        en: 'At noon, an old brāhmaṇa came. "Great Karṇa, give me your armour and earrings." Everyone around gasped. But Karṇa did not hesitate. The armour was part of his very body, yet he carefully removed it, piece by piece, and placed it with the earrings in the old man\'s hands. Indra was ashamed and amazed. He took back his true form. "No one has ever given like you," he said. "Ask me for anything." Karṇa asked for Indra\'s mighty weapon, the Śakti, which could be used just once. And because of this brave gift, Karṇa was also called Vaikartana — the one who cut away his own armour.',
        te: 'మధ్యాహ్నం ఒక వృద్ధ బ్రాహ్మణుడు వచ్చాడు. "మహాదాతా కర్ణా, నీ కవచ కుండలాలు నాకు దానం చెయ్యి." చుట్టూ ఉన్నవారంతా ఆశ్చర్యపోయారు. కానీ కర్ణుడు ఒక్క క్షణం కూడా సంకోచించలేదు. ఆ కవచం అతని శరీరంలో భాగమే అయినా, జాగ్రత్తగా దాన్ని విడదీసి, కుండలాలతో కలిపి ఆ వృద్ధుడి చేతుల్లో పెట్టాడు. ఇంద్రుడు సిగ్గుపడ్డాడు, ఆశ్చర్యపోయాడు. తన నిజరూపంలో ప్రత్యక్షమయ్యాడు. "నీలా దానం చేసినవారు ఎవరూ లేరు," అన్నాడు. "ఏ వరం కావాలో అడుగు." కర్ణుడు ఒక్కసారి మాత్రమే ప్రయోగించగల ఇంద్రుడి శక్తి ఆయుధాన్ని అడిగాడు. తన కవచాన్ని తానే కోసి ఇచ్చినందుకు కర్ణుడికి వైకర్తనుడు అనే పేరు కూడా వచ్చింది.',
      },
    ],
  },
  {
    id: 'ekalavyas-guru-dakshina',
    added: '2026-10-12',
    epic: 'Mahabharata',
    chars: ['Ekalavya', 'Droṇa', 'Arjuna'],
    title: { en: 'Ekalavya\'s Gift to His Teacher', te: 'ఏకలవ్యుడి గురుదక్షిణ' },
    moral: { en: 'Practice and devotion can teach us more than any classroom.', te: 'పట్టుదల, భక్తి ఉంటే ఎవరైనా ఏ విద్యనైనా నేర్చుకోగలరు.' },
    cover: { bg: 'forest', props: [['person', 120, 198, 1.3, { cloth: '#9a9a9a', top: '#9a9a9a', beard: true, hair: '#888', skin: 'fair' }], ['archer', 240, 198, 1.4, { cloth: '#4f7a3a', skin: 'dark' }]] },
    pages: [
      {
        scene: { bg: 'ashram', props: [['person', 100, 198, 1.4, { cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['person', 210, 198, 1.2, { cloth: '#4f7a3a', skin: 'dark' }], ['tree', 40, 198, 0.9]] },
        en: 'Deep in the forest lived Ekalavya, the son of a hunter-chief of the Niṣāda tribe. More than anything, he wanted to become a great archer. He walked a long way to Hastināpura to meet Guru Droṇa, the finest archery teacher in the land. "Please make me your student," he begged. But Droṇa taught only the princes of the royal family. "I cannot teach you," he said. Ekalavya bowed and went back to the forest. He was sad, but he did not give up.',
        te: 'దట్టమైన అడవిలో నిషాద తెగ నాయకుడి కొడుకు ఏకలవ్యుడు ఉండేవాడు. గొప్ప విలుకాడు కావాలని అతనికి అన్నిటికంటే ఎక్కువ కోరిక. దేశంలోనే గొప్ప విలువిద్యా గురువైన ద్రోణాచార్యుడిని కలవడానికి చాలా దూరం నడిచి హస్తినాపురానికి వచ్చాడు. "దయచేసి నన్ను మీ శిష్యుడిగా చేర్చుకోండి," అని వేడుకున్నాడు. కానీ ద్రోణుడు రాజకుమారులకు మాత్రమే విద్య నేర్పేవాడు. "నేను నీకు నేర్పలేను," అన్నాడు. ఏకలవ్యుడు నమస్కరించి అడవికి తిరిగి వెళ్ళాడు. అతనికి బాధ కలిగింది, కానీ పట్టు వదలలేదు.',
      },
      {
        scene: { bg: 'forest', props: [['person', 110, 198, 1.3, { cloth: '#9a9a9a', top: '#9a9a9a', beard: true, hair: '#888', skin: 'fair' }], ['archer', 230, 198, 1.3, { cloth: '#4f7a3a', skin: 'dark' }], ['dog', 340, 198, 1.1, { arrows: true, flip: true }]] },
        en: 'In the forest, Ekalavya made a statue of Droṇa out of clay. Every morning he bowed to it as his guru, and then he practised from dawn until dark. Years passed, and he became an astonishing archer. One day the Pāṇḍava princes came hunting with a dog. The dog barked loudly at Ekalavya. Quick as lightning, Ekalavya shot seven arrows that filled the dog\'s mouth and stopped its barking — without hurting it at all! The princes stared in wonder. "Who taught you this?" asked Arjuna. "My guru is Droṇa," said Ekalavya.',
        te: 'అడవిలో ఏకలవ్యుడు మట్టితో ద్రోణుడి విగ్రహం తయారు చేశాడు. ప్రతి ఉదయం ఆ విగ్రహానికి గురువుగా నమస్కరించి, తెల్లవారినప్పటి నుంచి చీకటి పడే వరకు సాధన చేసేవాడు. సంవత్సరాలు గడిచాయి. అతను అద్భుతమైన విలుకాడయ్యాడు. ఒక రోజు పాండవ రాకుమారులు ఒక కుక్కతో వేటకు వచ్చారు. ఆ కుక్క ఏకలవ్యుడిని చూసి గట్టిగా మొరిగింది. మెరుపు వేగంతో ఏకలవ్యుడు ఏడు బాణాలు వేశాడు. అవి కుక్కకు ఏమాత్రం గాయం కాకుండా దాని నోటిని నింపి మొరగడం ఆపేశాయి! రాకుమారులు ఆశ్చర్యంగా చూశారు. "నీకు ఇది ఎవరు నేర్పారు?" అని అర్జునుడు అడిగాడు. "నా గురువు ద్రోణాచార్యులు," అన్నాడు ఏకలవ్యుడు.',
      },
      {
        scene: { bg: 'forest', props: [['person', 120, 198, 1.4, { cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['person', 240, 198, 1.3, { cloth: '#4f7a3a', skin: 'dark', raise: true }], ['bow', 300, 198, 0.9]] },
        en: 'Arjuna was upset. Droṇa had promised that Arjuna would be the greatest archer in the world. So Droṇa went to the forest with the princes. Ekalavya ran to touch his feet with joy. "If I am your guru," said Droṇa, "you must give me guru-dakṣiṇā, a gift for your teacher." "Anything, Guru!" said Ekalavya. "Then give me the thumb of your right hand." Everyone fell silent. Without a moment\'s pause, Ekalavya gave it. He could never shoot as fast again — but his love for his teacher made his name shine for ever.',
        te: 'అర్జునుడికి బాధ కలిగింది. అర్జునుడిని లోకంలోనే గొప్ప విలుకాడిని చేస్తానని ద్రోణుడు మాట ఇచ్చాడు. అందుకే ద్రోణుడు రాకుమారులతో కలిసి అడవికి వెళ్ళాడు. ఏకలవ్యుడు సంతోషంగా పరుగెత్తుకుంటూ వచ్చి ఆయన పాదాలకు నమస్కరించాడు. "నేను నీ గురువునైతే," అన్నాడు ద్రోణుడు, "నువ్వు నాకు గురుదక్షిణ ఇవ్వాలి." "ఏదైనా ఇస్తాను గురువుగారూ!" అన్నాడు ఏకలవ్యుడు. "అయితే నీ కుడి చేతి బొటనవేలు ఇవ్వు." అందరూ మౌనమైపోయారు. ఒక్క క్షణం కూడా ఆలోచించకుండా ఏకలవ్యుడు దాన్ని ఇచ్చేశాడు. ఆ తరువాత అతను మునుపటిలా వేగంగా బాణాలు వేయలేకపోయాడు — కానీ గురువు మీద అతనికున్న భక్తి అతని పేరును శాశ్వతంగా నిలబెట్టింది.',
      },
    ],
  },
  {
    id: 'ganesha-writes-the-mahabharata',
    added: '2026-10-12',
    epic: 'Mahabharata',
    chars: ['Gaṇeśa', 'Vyāsa', 'Brahmā'],
    title: { en: 'Gaṇeśa Writes the Mahābhārata', te: 'మహాభారతం రాసిన గణపతి' },
    moral: { en: 'Think before you write, and finish what you start.', te: 'ఆలోచించి రాయాలి, మొదలుపెట్టిన పని పూర్తి చేయాలి.' },
    cover: { bg: 'ashram', props: [['ganesha', 150, 198, 1.5], ['scroll', 230, 198, 1], ['person', 300, 198, 1.3, { cloth: '#f4ead2', beard: true, hair: '#ddd' }]] },
    pages: [
      {
        scene: { bg: 'ashram', props: [['person', 150, 198, 1.5, { cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['scroll', 250, 198, 1], ['cloud', 300, 50, 0.9]] },
        en: 'The great sage Vyāsa had seen the whole story of the Kuru family in his mind — the Pāṇḍavas and Kauravas, their friendships and quarrels, and the great war at Kurukṣetra. It was the longest story ever told, full of wisdom. "This story must be written down for the whole world," he thought. "But who could write so fast and so long?" He prayed to Brahmā, the Creator. "Ask Gaṇeśa," said Brahmā. "No one is wiser."',
        te: 'మహర్షి వ్యాసుడు కురువంశపు కథనంతా తన మనసులో చూశాడు — పాండవులు, కౌరవులు, వారి స్నేహాలు, గొడవలు, కురుక్షేత్ర మహాయుద్ధం. అది ఎంతో జ్ఞానంతో నిండిన, ఇంతవరకు ఎవరూ చెప్పనంత పెద్ద కథ. "ఈ కథను లోకమంతటి కోసం రాసి పెట్టాలి," అనుకున్నాడు. "కానీ ఇంత వేగంగా, ఇంత ఎక్కువ ఎవరు రాయగలరు?" ఆయన సృష్టికర్త బ్రహ్మదేవుడిని ప్రార్థించాడు. "గణపతిని అడుగు," అన్నాడు బ్రహ్మ. "ఆయనంత తెలివైనవారు ఎవరూ లేరు."',
      },
      {
        scene: { bg: 'ashram', props: [['ganesha', 130, 198, 1.5], ['person', 270, 198, 1.4, { cloth: '#f4ead2', beard: true, hair: '#ddd' }]] },
        en: 'Vyāsa prayed to Gaṇeśa, and the elephant-headed god appeared, smiling. "I will write your story," said Gaṇeśa, "but on one condition. Once I start, you must not stop speaking even for a moment. If you pause, I will put down my pen and leave." Vyāsa thought quickly. "I agree," he said, "if you agree to my condition too. You must understand the meaning of every verse before you write it." Gaṇeśa laughed. "Agreed!"',
        te: 'వ్యాసుడు గణపతిని ప్రార్థించగా, ఏనుగు ముఖం గల ఆ దేవుడు చిరునవ్వుతో ప్రత్యక్షమయ్యాడు. "నీ కథ నేను రాస్తాను," అన్నాడు గణపతి, "కానీ ఒక షరతు. నేను మొదలుపెట్టాక నువ్వు ఒక్క క్షణం కూడా ఆగకుండా చెప్పాలి. నువ్వు ఆగితే నేను కలం కింద పెట్టి వెళ్ళిపోతాను." వ్యాసుడు వెంటనే ఆలోచించాడు. "సరే," అన్నాడు, "కానీ నా షరతుకు కూడా మీరు ఒప్పుకోవాలి. ప్రతి శ్లోకం అర్థం పూర్తిగా అర్థం చేసుకున్న తరువాతే మీరు రాయాలి." గణపతి నవ్వాడు. "ఒప్పుకున్నాను!"',
      },
      {
        scene: { bg: 'ashram', props: [['ganesha', 150, 198, 1.5], ['scroll', 235, 198, 1.2], ['person', 320, 198, 1.3, { cloth: '#f4ead2', beard: true, hair: '#ddd', raise: true }]] },
        en: 'And so they began. Vyāsa spoke and Gaṇeśa wrote, faster than the wind. Whenever Vyāsa needed time to think, he spoke a very difficult verse, and Gaṇeśa had to stop and work out its meaning — giving Vyāsa a little rest! Once, as Gaṇeśa wrote at great speed, his pen broke. He did not stop. He broke off one of his own tusks and kept writing with it. That is why Gaṇeśa is shown with one broken tusk. Day after day they worked, until the whole Mahābhārata was written — a gift for all of us.',
        te: 'అలా వారు మొదలుపెట్టారు. వ్యాసుడు చెబుతుంటే గణపతి గాలి కంటే వేగంగా రాశాడు. ఆలోచించడానికి సమయం కావలసినప్పుడల్లా వ్యాసుడు చాలా కఠినమైన శ్లోకం చెప్పేవాడు. దాని అర్థం తెలుసుకోవడానికి గణపతి ఆగవలసి వచ్చేది — అప్పుడు వ్యాసుడికి కొంచెం విశ్రాంతి దొరికేది! ఒకసారి గణపతి చాలా వేగంగా రాస్తుండగా ఆయన కలం విరిగిపోయింది. అయినా ఆయన ఆగలేదు. తన దంతాల్లో ఒకదాన్ని విరిచి దానితోనే రాయడం కొనసాగించాడు. అందుకే గణపతిని ఒక విరిగిన దంతంతో చూపిస్తారు. రోజుల తరబడి వారు పని చేసి, మహాభారతాన్ని పూర్తిగా రాశారు — అది మనందరికీ దొరికిన గొప్ప కానుక.',
      },
    ],
  },
  {
    id: 'bhishmas-promise',
    added: '2026-10-12',
    epic: 'Mahabharata',
    chars: ['Bhīṣma', 'Śantanu', 'Satyavatī', 'Gaṅgā'],
    title: { en: 'Bhīṣma\'s Promise', te: 'భీష్మ ప్రతిజ్ఞ' },
    moral: { en: 'Keeping a promise, even a hard one, makes a person truly great.', te: 'కష్టమైనా ఇచ్చిన మాట నిలబెట్టుకునేవాడే నిజమైన గొప్పవాడు.' },
    cover: { bg: 'river', props: [['person', 200, 198, 1.6, { cloth: '#3a6ab0', crown: true, raise: true }], ['flowers', 120, 120, 1], ['flowers', 290, 110, 1], ['flowers', 200, 70, 0.9]] },
    pages: [
      {
        scene: { bg: 'river', props: [['person', 150, 198, 1.4, { female: true, skin: 'fair', cloth: '#4a90c2', pallu: '#fff' }], ['person', 240, 198, 1.2, { cloth: '#3a6ab0' }], ['lotus', 320, 205, 1]] },
        en: 'King Śantanu of Hastināpura had a brave and wise son named Devavrata. His mother was Gaṅgā, the goddess of the holy river, who had raised him and taught him every skill. Devavrata learned the Vedas from the sages and archery from the great Paraśurāma himself. When he grew up, Gaṅgā brought him back to his father. Śantanu was overjoyed and made Devavrata the crown prince. Everyone said he would be a wonderful king.',
        te: 'హస్తినాపుర రాజు శంతనుడికి దేవవ్రతుడు అనే ధైర్యవంతుడు, జ్ఞాని అయిన కొడుకు ఉండేవాడు. అతని తల్లి పవిత్ర నది అయిన గంగాదేవి. ఆమె అతడిని పెంచి అన్ని విద్యలూ నేర్పింది. దేవవ్రతుడు మునుల దగ్గర వేదాలు, గొప్ప పరశురాముడి దగ్గర విలువిద్య నేర్చుకున్నాడు. అతను పెద్దవాడయ్యాక గంగాదేవి అతడిని తండ్రి దగ్గరకు తీసుకొచ్చింది. శంతనుడు ఎంతో సంతోషించి దేవవ్రతుడిని యువరాజుగా చేశాడు. అతను గొప్ప రాజు అవుతాడని అందరూ అనుకున్నారు.',
      },
      {
        scene: { bg: 'river', props: [['boat', 300, 190, 1.1], ['person', 300, 178, 1, { female: true, cloth: '#d9577a', pallu: '#f0c040' }], ['person', 130, 198, 1.4, { cloth: '#c9952a', crown: true, beard: true, hair: '#aaa' }]] },
        en: 'One day, by the river Yamunā, King Śantanu met Satyavatī, the daughter of a fisherman chief, and wished to marry her. But her father said, "Only if her son becomes king after you." Śantanu could not agree — the throne belonged to Devavrata. He returned home sad and silent. Devavrata saw his father\'s sorrow and found out the reason. At once he went to the fisherman chief himself.',
        te: 'ఒక రోజు యమునా నది ఒడ్డున శంతనుడు జాలరుల నాయకుడి కూతురైన సత్యవతిని చూసి, ఆమెను పెళ్ళి చేసుకోవాలనుకున్నాడు. కానీ ఆమె తండ్రి, "మీ తరువాత ఆమె కొడుకే రాజు కావాలి. అలా అయితేనే ఒప్పుకుంటాను," అన్నాడు. శంతనుడు ఒప్పుకోలేకపోయాడు — సింహాసనం దేవవ్రతుడిది. బాధతో, మౌనంగా ఇంటికి తిరిగి వచ్చాడు. తండ్రి బాధను చూసిన దేవవ్రతుడు కారణం తెలుసుకున్నాడు. వెంటనే తానే జాలరుల నాయకుడి దగ్గరకు వెళ్ళాడు.',
      },
      {
        scene: { bg: 'river', props: [['person', 200, 198, 1.6, { cloth: '#3a6ab0', raise: true }], ['flowers', 110, 110, 1], ['flowers', 290, 100, 1], ['flowers', 200, 55, 0.8], ['cloud', 70, 40, 0.8]] },
        en: '"I give up the throne," Devavrata said. "Satyavatī\'s son shall be king." The chief still worried. "But your own children may claim it one day." Devavrata raised his hand. "Then hear my vow: I will never marry, and I will serve the throne of Hastināpura all my life." The heavens rang with praise, and flowers rained down from the sky. Because of this terrible, wonderful vow, he was called Bhīṣma. His father blessed him: "You will leave this world only when you yourself choose."',
        te: '"నేను సింహాసనాన్ని వదులుకుంటున్నాను," అన్నాడు దేవవ్రతుడు. "సత్యవతి కొడుకే రాజవుతాడు." అయినా నాయకుడికి సందేహం తీరలేదు. "కానీ మీ పిల్లలు ఒక రోజు రాజ్యం కావాలంటారేమో." దేవవ్రతుడు చెయ్యి ఎత్తాడు. "అయితే నా ప్రతిజ్ఞ వినండి: నేను జీవితంలో పెళ్ళి చేసుకోను. జీవితాంతం హస్తినాపుర సింహాసనానికి సేవ చేస్తాను." ఆకాశమంతా జయజయధ్వానాలు మారుమోగాయి, దేవతలు పూలవర్షం కురిపించారు. ఇంత భీషణమైన ప్రతిజ్ఞ చేసినందుకు అతనికి భీష్ముడు అనే పేరు వచ్చింది. తండ్రి అతడిని ఆశీర్వదించాడు: "నువ్వు కోరుకున్నప్పుడే ఈ లోకాన్ని విడిచిపెడతావు."',
      },
    ],
  },
  {
    id: 'bhima-meets-hanuman',
    added: '2026-10-12',
    epic: 'Mahabharata',
    chars: ['Bhīma', 'Hanumān', 'Draupadī'],
    title: { en: 'Bhīma Meets Old Hanumān', te: 'హనుమంతుడిని కలిసిన భీముడు' },
    moral: { en: 'Real strength is humble; never look down on anyone.', te: 'నిజమైన బలం వినయంతో ఉంటుంది; ఎవరినీ తక్కువగా చూడకూడదు.' },
    cover: { bg: 'mountain', props: [['monkey', 110, 198, 1.3, { color: '#b0b0b0' }], ['tail', 220, 200, 1], ['person', 320, 198, 1.5, { cloth: '#a8392a' }], ['mace', 345, 198, 1]] },
    pages: [
      {
        scene: { bg: 'mountain', props: [['person', 140, 198, 1.3, { female: true, cloth: '#d9577a', pallu: '#f0c040' }], ['person', 240, 198, 1.5, { cloth: '#a8392a' }], ['mace', 268, 198, 1], ['flowers', 330, 200, 1]] },
        en: 'While the Pāṇḍavas lived in the forest, a beautiful golden flower with a heavenly scent floated down near Draupadī. "Oh, how lovely!" she said. "Bhīma, could you bring me more of these?" Bhīma, the strongest of the brothers, picked up his mace at once. "I will bring you a whole garden of them!" he said, and set off towards the mountains, crashing through the forest like a storm. Animals ran out of his way, and trees shook as he passed.',
        te: 'పాండవులు అడవిలో ఉన్నప్పుడు, దివ్యమైన సువాసన గల ఒక అందమైన బంగారు పువ్వు ద్రౌపది దగ్గర ఎగిరి వచ్చి పడింది. "ఆహా, ఎంత అందంగా ఉంది!" అంది ఆమె. "భీమా, ఇలాంటి పూలు ఇంకా తెచ్చి పెడతావా?" సోదరుల్లో అందరికంటే బలవంతుడైన భీముడు వెంటనే గద పట్టుకున్నాడు. "నీకు వాటితో ఒక తోటే తెస్తాను!" అని, తుఫానులా అడవిని చీల్చుకుంటూ పర్వతాల వైపు బయలుదేరాడు. జంతువులు దారి తప్పుకుని పారిపోయాయి, అతను వెళ్తుంటే చెట్లు కంపించాయి.',
      },
      {
        scene: { bg: 'mountain', props: [['monkey', 100, 198, 1.2, { color: '#b0b0b0' }], ['tail', 210, 200, 1], ['person', 320, 198, 1.5, { cloth: '#a8392a', raise: true }]] },
        en: 'On a narrow mountain path lay an old, tired monkey, his long tail stretched right across the way. "Move your tail, old monkey!" shouted Bhīma. "I am too old and weak," said the monkey softly. "Please lift it aside yourself." Bhīma laughed and tried to push the tail away with his mace. It did not move. He grabbed it with one hand, then both hands. He pulled until he sweated and his face turned red. The tail did not move even a hair!',
        te: 'ఒక ఇరుకైన కొండ దారిలో ఒక ముసలి, అలసిపోయిన కోతి పడుకుని ఉంది. దాని పొడవాటి తోక దారికి అడ్డంగా ఉంది. "తోక తీసెయ్, ముసలి కోతీ!" అని భీముడు అరిచాడు. "నేను చాలా ముసలివాడిని, బలహీనుడిని," అంది ఆ కోతి మెల్లగా. "దయచేసి నువ్వే దాన్ని పక్కకు జరుపు." భీముడు నవ్వి తన గదతో తోకను నెట్టడానికి ప్రయత్నించాడు. అది కదలలేదు. ఒక చేత్తో పట్టుకున్నాడు, తరువాత రెండు చేతులతో. చెమటలు పట్టే వరకు, ముఖం ఎర్రబడే వరకు లాగాడు. తోక వెంట్రుకవాసి కూడా కదలలేదు!',
      },
      {
        scene: { bg: 'mountain', props: [['monkey', 150, 200, 2.2, { color: '#d9772a' }], ['person', 300, 198, 1.3, { cloth: '#a8392a' }], ['sun', 350, 40, 0.8]] },
        en: 'Bhīma folded his hands. "Who are you, sir?" The monkey smiled and grew taller and taller, bright as the sun. It was Hanumān! "I am your elder brother," he said, "for we are both sons of Vāyu, the Wind God." Bhīma bowed, full of shame and joy. Hanumān hugged him. "Strength is a gift, little brother. Use it to protect others, never to bully them." He promised to help the Pāṇḍavas, and to sit on the flag of Arjuna\'s chariot in the great war.',
        te: 'భీముడు చేతులు జోడించాడు. "అయ్యా, మీరు ఎవరు?" ఆ కోతి చిరునవ్వు నవ్వి, పెరిగి పెరిగి సూర్యుడిలా వెలిగిపోయింది. ఆయన హనుమంతుడు! "నేను నీ అన్నయ్యను," అన్నాడు. "మనిద్దరం వాయుదేవుడి పుత్రులం." భీముడు సిగ్గుతో, సంతోషంతో నమస్కరించాడు. హనుమంతుడు అతడిని కౌగిలించుకున్నాడు. "తమ్ముడూ, బలం ఒక వరం. ఇతరులను కాపాడడానికి వాడు, బెదిరించడానికి కాదు." పాండవులకు సహాయం చేస్తానని, మహాయుద్ధంలో అర్జునుడి రథం జెండా మీద కూర్చుంటానని మాట ఇచ్చాడు.',
      },
    ],
  },
  {
    id: 'rama-breaks-shivas-bow',
    added: '2026-10-12',
    epic: 'Ramayana',
    chars: ['Rāma', 'Sītā', 'Janaka', 'Viśvāmitra', 'Lakṣmaṇa'],
    title: { en: 'Rāma Breaks Śiva\'s Bow', te: 'శివధనుర్భంగం' },
    moral: { en: 'True strength is calm and gentle, not proud.', te: 'నిజమైన బలం గర్వంతో కాదు, శాంతంగా వినయంగా ఉంటుంది.' },
    cover: { bg: 'court', props: [['bow', 200, 196, 2.4], ['person', 110, 198, 1.4, { skin: 'blue', cloth: '#f0c040', crown: true }], ['person', 300, 198, 1.3, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }]] },
    pages: [
      {
        scene: { bg: 'court', props: [['person', 110, 198, 1.4, { cloth: '#c9952a', crown: true, beard: true, hair: '#aaa' }], ['bow', 220, 196, 2.2], ['person', 320, 198, 1.3, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }]] },
        en: 'King Janaka of Mithilā had a beautiful and kind daughter named Sītā. In his palace he kept a wonderful gift from Lord Śiva — a giant bow so heavy that it took hundreds of men to wheel it in on an iron cart. "Whoever can lift Śiva\'s bow and string it," Janaka announced, "will marry my daughter." Kings and princes came from far and wide. They pushed and pulled and puffed, but not one of them could even lift the bow from its box.',
        te: 'మిథిలా రాజు జనకమహారాజుకు సీత అనే అందమైన, మంచి మనసున్న కూతురు ఉంది. ఆయన రాజభవనంలో శివుడు ఇచ్చిన ఒక అద్భుతమైన విల్లు ఉండేది. అది ఎంత బరువంటే, ఇనుప బండిపై దాన్ని తోసుకు రావడానికి వందల మంది కావాలి. "శివధనుస్సును ఎత్తి నారి కట్టగలిగిన వీరుడికే నా కూతురిని ఇచ్చి పెళ్ళి చేస్తాను," అని జనకుడు ప్రకటించాడు. ఎంతో దూరం నుంచి రాజులు, రాకుమారులు వచ్చారు. తోశారు, లాగారు, ఆయాసపడ్డారు — కానీ ఒక్కరు కూడా ఆ విల్లును పెట్టె నుంచి ఎత్తలేకపోయారు.',
      },
      {
        scene: { bg: 'palace', props: [['person', 100, 198, 1.4, { cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['person', 200, 198, 1.35, { skin: 'blue', cloth: '#f0c040' }], ['person', 280, 198, 1.25, { skin: 'fair', cloth: '#e0703a' }]] },
        en: 'One day the sage Viśvāmitra arrived in Mithilā with two young princes from Ayodhyā — Rāma and his brother Lakṣmaṇa. Rāma had already protected the sage\'s holy fire from fierce demons in the forest. Janaka welcomed them warmly and showed them the famous bow. Viśvāmitra turned to Rāma and smiled. "Go on, my child. Take a look at it." Rāma bowed to his teacher and walked calmly towards the bow, while the whole court held its breath.',
        te: 'ఒక రోజు విశ్వామిత్ర మహర్షి అయోధ్య రాకుమారులు రాముడు, అతని తమ్ముడు లక్ష్మణుడితో కలిసి మిథిలకు వచ్చాడు. అంతకు ముందే అడవిలో క్రూరమైన రాక్షసుల నుంచి మహర్షి యజ్ఞాన్ని రాముడు కాపాడాడు. జనకుడు వారికి ఆప్యాయంగా స్వాగతం పలికి ఆ ప్రసిద్ధ విల్లును చూపించాడు. విశ్వామిత్రుడు రాముడి వైపు చూసి చిరునవ్వు నవ్వాడు. "వెళ్ళు నాయనా, ఒకసారి చూడు." రాముడు గురువుకు నమస్కరించి ప్రశాంతంగా విల్లు దగ్గరకు నడిచాడు. సభ అంతా ఊపిరి బిగబట్టి చూస్తోంది.',
      },
      {
        scene: { bg: 'court', props: [['person', 160, 198, 1.5, { skin: 'blue', cloth: '#f0c040', raise: true }], ['bow', 250, 160, 1.8], ['person', 330, 198, 1.3, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['flowers', 300, 90, 0.9]] },
        en: 'Rāma lifted the mighty bow as easily as a garland of flowers. He bent it to tie the string — and with a sound like thunder, the great bow snapped in two! The ground shook and the people cheered. Sītā stepped forward, shy and smiling, and placed a garland of flowers around Rāma\'s neck. King Janaka\'s eyes filled with happy tears. Soon there was a grand wedding in Mithilā, and Rāma\'s three brothers were married on the same day.',
        te: 'రాముడు ఆ బలమైన విల్లును పూలమాలను ఎత్తినంత సులువుగా ఎత్తాడు. నారి కట్టడానికి దాన్ని వంచాడు — ఉరుము లాంటి శబ్దంతో ఆ మహా ధనుస్సు రెండు ముక్కలైంది! నేల కంపించింది, ప్రజలు జయజయధ్వానాలు చేశారు. సీత సిగ్గుగా చిరునవ్వుతో ముందుకు వచ్చి రాముడి మెడలో పూలమాల వేసింది. జనకమహారాజు కళ్ళు ఆనందబాష్పాలతో నిండాయి. కొద్ది రోజుల్లోనే మిథిలలో వైభవంగా పెళ్ళి జరిగింది. అదే రోజు రాముడి ముగ్గురు తమ్ముళ్ళకు కూడా పెళ్ళిళ్ళు జరిగాయి.',
      },
    ],
  },
  {
    id: 'shabaris-berries',
    added: '2026-10-12',
    epic: 'Ramayana',
    chars: ['Śabari', 'Rāma', 'Lakṣmaṇa', 'Mataṅga'],
    title: { en: 'Śabari\'s Berries', te: 'శబరి ఎంగిలి పండ్లు' },
    moral: { en: 'God values love more than any rich offering.', te: 'దేవుడు కానుకల కంటే ప్రేమకే విలువ ఇస్తాడు.' },
    cover: { bg: 'ashram', props: [['person', 130, 198, 1.3, { female: true, skin: 'dark', cloth: '#c9a26b', hair: '#ddd', pallu: '#a8723a' }], ['berries', 200, 200, 1.2], ['person', 280, 198, 1.4, { skin: 'blue', cloth: '#f0c040' }]] },
    pages: [
      {
        scene: { bg: 'ashram', props: [['person', 130, 198, 1.4, { cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['person', 230, 198, 1.2, { female: true, skin: 'dark', cloth: '#c9a26b', pallu: '#a8723a' }], ['flowers', 300, 200, 1]] },
        en: 'In the forest near Lake Pampā lived Śabari, a woman from a hunter tribe. She served the old sage Mataṅga and his disciples with great love, sweeping the paths and bringing water and fruit. Before the sage left this world, he told her, "One day Lord Rāma will come to this āśrama. Wait for him, Śabari. Serve him, and your life will be blessed." Śabari bowed. From that day on, she waited — for many, many years.',
        te: 'పంపా సరస్సు దగ్గర అడవిలో శబరి అనే బోయ స్త్రీ ఉండేది. ఆమె వృద్ధ మహర్షి మతంగుడికి, ఆయన శిష్యులకు ఎంతో ప్రేమతో సేవ చేసేది — దారులు ఊడ్చేది, నీళ్ళు, పండ్లు తెచ్చేది. ఈ లోకం విడిచి వెళ్ళే ముందు మహర్షి ఆమెతో, "ఒక రోజు శ్రీరాముడు ఈ ఆశ్రమానికి వస్తాడు. శబరీ, ఆయన కోసం ఎదురుచూడు. ఆయనకు సేవ చేస్తే నీ జన్మ ధన్యమవుతుంది," అని చెప్పాడు. శబరి నమస్కరించింది. ఆ రోజు నుంచి ఆమె ఎదురుచూసింది — ఎన్నో, ఎన్నో సంవత్సరాలు.',
      },
      {
        scene: { bg: 'forest', props: [['person', 150, 198, 1.3, { female: true, skin: 'dark', cloth: '#c9a26b', hair: '#ddd', pallu: '#a8723a' }], ['berries', 220, 200, 1.2], ['tree', 320, 198, 1.1], ['bird', 330, 120, 0.9, { color: '#c0392b', wing: '#e07a5f' }]] },
        en: 'Every morning, Śabari swept the path and scattered flowers on it, in case Rāma came that day. Her hair turned white and her back grew bent, but she never stopped hoping. Each day she gathered wild berries for him. And because she wanted to give Rāma only the sweetest ones, she tasted each berry first. If a berry was sour, she threw it away. If it was sweet, she kept it in her basket for her Lord.',
        te: 'రాముడు ఈ రోజే వస్తాడేమోనని ప్రతి ఉదయం శబరి దారి ఊడ్చి పూలు చల్లేది. ఆమె జుట్టు తెల్లబడింది, నడుము వంగిపోయింది, కానీ ఆమె ఆశ వదులుకోలేదు. ప్రతి రోజు ఆయన కోసం అడవి రేగుపండ్లు ఏరేది. రాముడికి తియ్యటి పండ్లు మాత్రమే ఇవ్వాలని, ప్రతి పండునూ ముందుగా తానే రుచి చూసేది. పుల్లగా ఉంటే పారేసేది. తియ్యగా ఉంటే తన స్వామి కోసం బుట్టలో దాచి పెట్టేది.',
      },
      {
        scene: { bg: 'ashram', props: [['person', 110, 198, 1.25, { female: true, skin: 'dark', cloth: '#c9a26b', hair: '#ddd', pallu: '#a8723a', raise: true }], ['berries', 175, 200, 1.1], ['person', 250, 198, 1.4, { skin: 'blue', cloth: '#f0c040' }], ['person', 320, 198, 1.3, { skin: 'fair', cloth: '#e0703a' }]] },
        en: 'At last, one day, Rāma and Lakṣmaṇa walked up the path! Śabari cried with joy and washed their feet. Then she offered her berries. Lakṣmaṇa frowned — they had all been tasted. But Rāma ate every one with great happiness. "I have never eaten anything so sweet," he said, "because each berry is full of love." Śabari told them to go to Sugrīva, the monkey king, who would help them find Sītā. Then, her long wait over, she left this world in peace.',
        te: 'చివరకు ఒక రోజు రాముడు, లక్ష్మణుడు ఆ దారిలో నడిచి వచ్చారు! శబరి ఆనందంతో ఏడ్చింది, వారి పాదాలు కడిగింది. తరువాత తన పండ్లు సమర్పించింది. లక్ష్మణుడు ముఖం చిట్లించాడు — అవన్నీ రుచి చూసిన ఎంగిలి పండ్లు. కానీ రాముడు ప్రతి పండునూ ఎంతో ఆనందంగా తిన్నాడు. "ఇంత తియ్యటి పండ్లు నేను ఎప్పుడూ తినలేదు," అన్నాడు, "ఎందుకంటే ప్రతి పండులోనూ ప్రేమ నిండి ఉంది." సీతను వెతకడంలో సహాయం చేసే వానర రాజు సుగ్రీవుడి దగ్గరకు వెళ్ళమని శబరి వారికి చెప్పింది. తన సుదీర్ఘ నిరీక్షణ ముగియడంతో ఆమె ప్రశాంతంగా ఈ లోకాన్ని విడిచింది.',
      },
    ],
  },
  {
    id: 'jatayu-the-brave-bird',
    added: '2026-10-12',
    epic: 'Ramayana',
    chars: ['Jaṭāyu', 'Rāvaṇa', 'Sītā', 'Rāma'],
    title: { en: 'Jaṭāyu the Brave Bird', te: 'వీర జటాయువు' },
    moral: { en: 'Do what is right, even when the enemy is much stronger.', te: 'శత్రువు ఎంత బలవంతుడైనా ధర్మం కోసం నిలబడాలి.' },
    cover: { bg: 'sky', props: [['eagle', 200, 120, 1.8], ['cloud', 70, 60, 1], ['cloud', 330, 45, 0.9]] },
    pages: [
      {
        scene: { bg: 'forest', props: [['eagle', 230, 90, 1.4], ['person', 110, 198, 1.3, { skin: 'blue', cloth: '#f0c040' }], ['hut', 320, 198, 0.9]] },
        en: 'High above the forest of Pañcavaṭī lived Jaṭāyu, the old king of the vultures. He had been a dear friend of King Daśaratha. When Rāma, Sītā and Lakṣmaṇa came to live in the forest, Jaṭāyu greeted them warmly. "I knew your father well, Rāma," he said. "While you live here, I will watch over you like a father." Every day he circled in the sky above their little hut, keeping guard.',
        te: 'పంచవటి అడవి మీద ఎత్తులో గద్దల రాజు, వృద్ధుడైన జటాయువు ఉండేవాడు. ఆయన దశరథ మహారాజుకు ప్రియ స్నేహితుడు. రాముడు, సీత, లక్ష్మణుడు అడవిలో నివసించడానికి వచ్చినప్పుడు జటాయువు వారిని ఆప్యాయంగా పలకరించాడు. "రామా, మీ నాన్నగారు నాకు బాగా తెలుసు," అన్నాడు. "మీరు ఇక్కడ ఉన్నంత కాలం తండ్రిలా మిమ్మల్ని కాపాడుతాను." ప్రతి రోజు ఆయన వారి చిన్న కుటీరం పైన ఆకాశంలో చక్కర్లు కొడుతూ కాపలా కాసేవాడు.',
      },
      {
        scene: { bg: 'sky', props: [['chariot', 150, 120, 1.6], ['person', 140, 98, 0.8, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040', raise: true }], ['eagle', 290, 100, 1.4], ['cloud', 60, 40, 0.8]] },
        en: 'One day, the demon king Rāvaṇa tricked Rāma and Lakṣmaṇa into leaving the hut, and carried Sītā away in his flying chariot. "Rāma! Lakṣmaṇa! Help!" she cried. Jaṭāyu heard her. Though he was very old, he flew straight at Rāvaṇa. "Stop, you wicked king! Let her go!" He fought with his sharp beak and claws. He broke Rāvaṇa\'s bow and smashed his chariot. But Rāvaṇa drew his sword and struck Jaṭāyu\'s wings, and the brave old bird fell to the ground.',
        te: 'ఒక రోజు రాక్షస రాజు రావణుడు మోసంతో రాముడిని, లక్ష్మణుడిని కుటీరం నుంచి దూరం చేసి, సీతను తన పుష్పక విమానంలో ఎత్తుకుపోయాడు. "రామా! లక్ష్మణా! కాపాడండి!" అని ఆమె అరిచింది. జటాయువు ఆ అరుపు విన్నాడు. చాలా ముసలివాడైనా, సూటిగా రావణుడి మీదకు ఎగిరాడు. "ఆగు, దుష్టుడా! ఆమెను వదిలిపెట్టు!" తన పదునైన ముక్కుతో, గోళ్ళతో పోరాడాడు. రావణుడి విల్లు విరిచాడు, రథాన్ని ధ్వంసం చేశాడు. కానీ రావణుడు కత్తి తీసి జటాయువు రెక్కలను నరికాడు. ఆ వీర వృద్ధ పక్షి నేల కూలాడు.',
      },
      {
        scene: { bg: 'forest', props: [['eagle', 170, 205, 1.1], ['person', 240, 198, 1.4, { skin: 'blue', cloth: '#f0c040' }], ['person', 310, 198, 1.3, { skin: 'fair', cloth: '#e0703a' }]] },
        en: 'Searching for Sītā, Rāma and Lakṣmaṇa found Jaṭāyu lying wounded. "Rāvaṇa has taken Sītā," he whispered. "He flew towards the south." Rāma held the old bird gently in his arms and wept. "You gave your life for us, dear friend. You are like a father to me." Jaṭāyu smiled and closed his eyes for the last time. With his own hands, Rāma performed Jaṭāyu\'s last rites, just as a son would for his father — the greatest honour he could give.',
        te: 'సీతను వెతుకుతూ వస్తున్న రాముడు, లక్ష్మణుడు గాయపడి పడి ఉన్న జటాయువును చూశారు. "రావణుడు సీతను ఎత్తుకుపోయాడు," అని ఆయన గొణిగాడు. "దక్షిణం వైపు ఎగిరిపోయాడు." రాముడు ఆ వృద్ధ పక్షిని మెల్లగా ఒడిలోకి తీసుకుని కన్నీళ్ళు పెట్టుకున్నాడు. "ప్రియ మిత్రమా, మా కోసం నీ ప్రాణం ఇచ్చావు. నువ్వు నాకు తండ్రి లాంటివాడివి." జటాయువు చిరునవ్వు నవ్వి చివరిసారిగా కళ్ళు మూశాడు. తండ్రికి కొడుకు చేసినట్లే, రాముడు తన చేతులతో జటాయువుకు అంత్యక్రియలు చేశాడు — అంతకంటే గొప్ప గౌరవం మరొకటి లేదు.',
      },
    ],
  },
  {
    id: 'kumbhakarna-the-sleeping-giant',
    added: '2026-10-12',
    epic: 'Ramayana',
    chars: ['Kumbhakarṇa', 'Brahmā', 'Sarasvatī', 'Rāvaṇa'],
    title: { en: 'Kumbhakarṇa, the Sleeping Giant', te: 'నిద్రపోయే కుంభకర్ణుడు' },
    moral: { en: 'Choose your words carefully — and give good advice even when it is hard to hear.', te: 'మాటలు జాగ్రత్తగా ఎంచుకోవాలి; కష్టమైనా మంచి సలహానే ఇవ్వాలి.' },
    cover: { bg: 'night', props: [['sleeper', 170, 200, 1.1], ['moon', 340, 60, 1]] },
    pages: [
      {
        scene: { bg: 'mountain', props: [['person', 120, 198, 1.8, { skin: 'dark', cloth: '#5a3a5a', crown: true }], ['fire', 200, 198, 1], ['person', 290, 198, 1.4, { cloth: '#f0c040', beard: true, hair: '#ddd', crown: true }]] },
        en: 'Rāvaṇa had a younger brother named Kumbhakarṇa — a giant so huge and so hungry that the gods were afraid of him. To become even more powerful, he sat in deep prayer for many years. At last Brahmā, the Creator, appeared. "Ask for a boon," he said. The gods trembled. They knew Kumbhakarṇa wanted to ask for Indrāsana — the throne of Indra, king of the gods! So they prayed to Sarasvatī, the goddess of speech, for help.',
        te: 'రావణుడికి కుంభకర్ణుడు అనే తమ్ముడు ఉండేవాడు. అతను ఎంత పెద్దవాడంటే, ఎంత తిండిపోతంటే, దేవతలు కూడా అతనికి భయపడేవారు. ఇంకా బలవంతుడు కావాలని అతను ఎన్నో సంవత్సరాలు ఘోర తపస్సు చేశాడు. చివరకు సృష్టికర్త బ్రహ్మదేవుడు ప్రత్యక్షమయ్యాడు. "వరం కోరుకో," అన్నాడు. దేవతలు వణికిపోయారు. కుంభకర్ణుడు ఇంద్రాసనం — దేవతల రాజైన ఇంద్రుడి సింహాసనం — అడగబోతున్నాడని వారికి తెలుసు! అందుకే వారు వాక్కుకు అధిదేవత అయిన సరస్వతీదేవిని సహాయం కోసం ప్రార్థించారు.',
      },
      {
        scene: { bg: 'night', props: [['sleeper', 170, 200, 1.1], ['moon', 340, 55, 0.9], ['cloud', 80, 50, 0.8]] },
        en: 'Sarasvatī sat on Kumbhakarṇa\'s tongue. He opened his mouth to say "Indrāsana," but out came "Nidrāsana" — a bed to sleep on! "So be it," said Brahmā. Kumbhakarṇa was horrified, but the words could not be taken back. Rāvaṇa begged Brahmā to soften the boon. "Very well," said Brahmā. "He will sleep for six months, then wake for one day, and then sleep again." And so the mighty giant slept, snoring so loudly that the trees of Laṅkā shook.',
        te: 'సరస్వతీదేవి కుంభకర్ణుడి నాలుక మీద కూర్చుంది. అతను "ఇంద్రాసనం" అనడానికి నోరు తెరిచాడు, కానీ "నిద్రాసనం" — నిద్రపోవడానికి పడక — అని వచ్చింది! "తథాస్తు," అన్నాడు బ్రహ్మ. కుంభకర్ణుడు నిర్ఘాంతపోయాడు, కానీ అన్న మాటను వెనక్కి తీసుకోలేడు. రావణుడు ఆ వరాన్ని కొంచెం మార్చమని బ్రహ్మను వేడుకున్నాడు. "సరే," అన్నాడు బ్రహ్మ. "ఆరు నెలలు నిద్రపోతాడు, ఒక రోజు మేలుకుంటాడు, మళ్ళీ నిద్రపోతాడు." అలా ఆ మహా రాక్షసుడు నిద్రపోయాడు. అతని గురకకు లంకలోని చెట్లు కంపించేవి.',
      },
      {
        scene: { bg: 'palace', props: [['sleeper', 150, 205, 1], ['elephant', 300, 200, 0.9], ['drum', 60, 200, 1.1], ['drum', 230, 200, 0.9]] },
        en: 'During the great war with Rāma, Rāvaṇa needed his brother\'s help. But how do you wake a giant in the middle of his six-month sleep? His servants beat huge drums and blew conch shells. They poured cold water on him. They made elephants walk over his body! At last Kumbhakarṇa yawned and woke up — and ate mountains of food. When he heard the whole story, he told Rāvaṇa honestly, "Brother, you were wrong. Give Sītā back to Rāma." Rāvaṇa would not listen. So, loyal to his brother, Kumbhakarṇa went bravely into battle, where he fell to Rāma\'s arrows.',
        te: 'రాముడితో మహాయుద్ధం జరుగుతున్నప్పుడు రావణుడికి తమ్ముడి సహాయం కావలసి వచ్చింది. కానీ ఆరు నెలల నిద్ర మధ్యలో రాక్షసుడిని ఎలా లేపాలి? సేవకులు పెద్ద పెద్ద డప్పులు మోగించారు, శంఖాలు ఊదారు. అతని మీద చల్లటి నీళ్ళు పోశారు. అతని శరీరం మీద ఏనుగులను నడిపించారు! చివరకు కుంభకర్ణుడు ఆవలించి మేలుకున్నాడు — కొండల్లాంటి ఆహారం తిన్నాడు. జరిగినదంతా విన్నాక అతను రావణుడితో నిజాయితీగా, "అన్నయ్యా, నువ్వు తప్పు చేశావు. సీతను రాముడికి అప్పగించు," అన్నాడు. రావణుడు వినలేదు. అన్న మీద విశ్వాసంతో కుంభకర్ణుడు ధైర్యంగా యుద్ధానికి వెళ్ళి, రాముడి బాణాలకు నేలకొరిగాడు.',
      },
    ],
  },
  {
    id: 'bharata-and-ramas-sandals',
    added: '2026-10-12',
    epic: 'Ramayana',
    chars: ['Bharata', 'Rāma', 'Kaikeyī'],
    title: { en: 'Bharata and Rāma\'s Sandals', te: 'భరతుడు – శ్రీరామ పాదుకలు' },
    moral: { en: 'Love for family is greater than any throne.', te: 'అన్నదమ్ముల ప్రేమ ఏ సింహాసనం కంటేనైనా గొప్పది.' },
    cover: { bg: 'palace', props: [['throne', 200, 196, 1.4], ['sandals', 200, 150, 0.8], ['person', 300, 198, 1.3, { cloth: '#f4ead2', top: '#c98a5a' }]] },
    pages: [
      {
        scene: { bg: 'palace', props: [['person', 130, 198, 1.4, { cloth: '#a83a3a', crown: true }], ['person', 250, 198, 1.3, { female: true, skin: 'fair', cloth: '#7a5ab0', pallu: '#f0c040' }], ['throne', 330, 196, 1]] },
        en: 'When Prince Bharata came home to Ayodhyā from his uncle\'s kingdom, he found the city silent and sad. His father, King Daśaratha, had passed away. His mother, Queen Kaikeyī, told him proudly, "I asked your father for two boons. Rāma has gone to the forest for fourteen years, and you will be king!" Bharata was shocked. "Mother, what have you done? Rāma is the rightful king. I will never sit on his throne!"',
        te: 'భరతుడు తన మేనమామ రాజ్యం నుంచి అయోధ్యకు తిరిగి వచ్చేసరికి నగరమంతా మౌనంగా, దుఃఖంగా ఉంది. ఆయన తండ్రి దశరథ మహారాజు స్వర్గస్థుడయ్యాడు. ఆయన తల్లి కైకేయి గర్వంగా చెప్పింది, "మీ నాన్నగారిని నేను రెండు వరాలు అడిగాను. రాముడు పద్నాలుగేళ్ళు అడవికి వెళ్ళాడు, నువ్వే రాజువి!" భరతుడు నిర్ఘాంతపోయాడు. "అమ్మా, ఏం చేశావు? రాముడే నిజమైన రాజు. నేను ఎప్పటికీ ఆయన సింహాసనం మీద కూర్చోను!"',
      },
      {
        scene: { bg: 'forest', props: [['hut', 330, 198, 0.9], ['person', 140, 198, 1.3, { cloth: '#a83a3a' }], ['person', 230, 198, 1.4, { skin: 'blue', cloth: '#c9a26b', top: '#4a78b8' }], ['tree', 50, 198, 0.9]] },
        en: 'Bharata walked all the way to the forest of Citrakūṭa with the queens, the ministers and many people of Ayodhyā. When he saw Rāma living in a simple hut, dressed like a hermit, he fell at his brother\'s feet and wept. "Please come home, brother. The kingdom is yours." But Rāma gently lifted him up. "Our father gave his word, Bharata, and a son must keep his father\'s promise. I will return after fourteen years."',
        te: 'భరతుడు రాణులు, మంత్రులు, అయోధ్య ప్రజలతో కలిసి చిత్రకూట అడవి వరకు నడిచి వెళ్ళాడు. ముని వేషంలో చిన్న కుటీరంలో నివసిస్తున్న రాముడిని చూసి, అన్నయ్య పాదాల మీద పడి ఏడ్చాడు. "అన్నయ్యా, దయచేసి ఇంటికి రా. రాజ్యం నీదే." కానీ రాముడు అతడిని ప్రేమగా పైకి లేపాడు. "భరతా, మన తండ్రి మాట ఇచ్చారు. తండ్రి ఇచ్చిన మాటను కొడుకు నిలబెట్టాలి. పద్నాలుగేళ్ళ తరువాత నేను తిరిగి వస్తాను."',
      },
      {
        scene: { bg: 'village', props: [['throne', 190, 196, 1.3], ['sandals', 190, 152, 0.75], ['person', 300, 198, 1.3, { cloth: '#c9a26b', top: '#c98a5a' }], ['hut', 70, 198, 0.7]] },
        en: '"Then give me your sandals, brother," said Bharata. Rāma stepped into a pair of wooden sandals, the pādukās, and gave them to him. Bharata carried them home on his head. He placed them on the royal throne and said, "These are the king. I am only their servant." For fourteen years Bharata ruled from the small village of Nandigrāma, living simply like a hermit, waiting for Rāma. "If you do not return on the very first day," he had said, "I will give up my life." And Rāma came home on time.',
        te: '"అయితే అన్నయ్యా, నీ పాదుకలు నాకు ఇవ్వు," అన్నాడు భరతుడు. రాముడు ఒక జత చెక్క పాదుకలు తొడుక్కుని వాటిని అతనికి ఇచ్చాడు. భరతుడు వాటిని తన తల మీద పెట్టుకుని ఇంటికి తీసుకెళ్ళాడు. రాజ సింహాసనం మీద వాటిని ఉంచి, "ఇవే రాజు. నేను వీటి సేవకుడిని మాత్రమే," అన్నాడు. పద్నాలుగేళ్ళ పాటు భరతుడు నందిగ్రామం అనే చిన్న ఊరు నుంచి ముని లాగా సామాన్యంగా జీవిస్తూ, రాముడి కోసం ఎదురుచూస్తూ రాజ్యం పాలించాడు. "సరిగ్గా గడువు రోజున నువ్వు రాకపోతే నేను ప్రాణం విడుస్తాను," అని ఆయన చెప్పాడు. రాముడు సరైన సమయానికి ఇంటికి వచ్చాడు.',
      },
    ],
  },
];
