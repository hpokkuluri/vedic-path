// ─────────────── KIDS STORIES ───────────────
// Original retellings for children (ages 5–15) of episodes from the Rāmāyaṇa and Mahābhārata.
// Each story: 2–5 pages, English + Telugu, a one-line lesson, and simple scenes drawn by kids.js.
//   id      unique, lowercase-with-dashes
//   added   'YYYY-MM-DD' — stories added in the last 21 days show a NEW tag until read on that phone
//   epic    'Ramayana' | 'Mahabharata'
//   pages   [{ scene: { bg, props: [[prop, x, y, scale, options]] }, en, te }]
// Scene backgrounds and props are listed in kids.js (SCENE KIT). The picture is 400 wide × 220 tall;
// x,y is where a prop stands (its bottom centre). Ground is roughly y = 175–200.
window.KIDS_STORIES = [
  {
    id: 'squirrel-and-the-bridge',
    added: '2026-10-12',
    epic: 'Ramayana',
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
];
