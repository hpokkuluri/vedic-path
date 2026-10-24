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
  {
    id: 'hanuman-and-the-sun',
    added: '2026-10-13',
    epic: 'Ramayana',
    chars: ['Hanumān', 'Vāyu', 'Indra', 'Añjanā', 'Brahmā'],
    title: { en: 'Little Hanumān and the Sun', te: 'సూర్యుడిని పండు అనుకున్న బాల హనుమంతుడు' },
    moral: { en: 'When we fall, love and kindness help us rise again — stronger than before.', te: 'మనం పడిపోయినప్పుడు ప్రేమ, ఆదరణ మనల్ని మళ్ళీ నిలబెడతాయి — ఇంకా బలంగా.' },
    cover: { bg: 'sky', props: [['sun', 325, 85, 1.5], ['hanuman', 165, 140, 1], ['cloud', 70, 60, 1], ['cloud', 250, 175, 0.8]] },
    pages: [
      {
        scene: { bg: 'mountain', props: [['sun', 330, 115, 1.1], ['tree', 60, 198, 0.9], ['person', 120, 198, 1.2, { female: true, skin: 'wheat', cloth: '#d9577a', pallu: '#f0c040' }], ['monkey', 190, 198, 0.75, { color: '#d9772a', raise: true }], ['cloud', 220, 45, 0.9]] },
        en: 'On a green mountain lived Añjanā and her husband Kesarī, a chief of the monkeys. They had a little son, born with the blessing of Vāyu, the Wind God. The baby was strong and quick — and he was always hungry! One morning his mother went out to gather fruit. The baby woke up and looked around for something to eat. Just then the sun was rising over the hills, round and red and shining. "Oh!" thought the baby. "What a big, ripe fruit!" He clapped his little hands, bent his knees, and with one mighty jump he shot up into the sky, straight towards the sun.',
        te: 'పచ్చని ఒక కొండ మీద అంజనాదేవి, ఆమె భర్త వానర వీరుడు కేసరి ఉండేవారు. వాళ్ళకు ఒక చిన్న కొడుకు ఉన్నాడు. వాయుదేవుడి ఆశీస్సులతో పుట్టిన ఆ పిల్లవాడు చాలా బలంగా, చురుకుగా ఉండేవాడు. ఎప్పుడూ ఆకలి ఆకలి అంటూనే ఉండేవాడు! ఒక రోజు పొద్దున్నే అమ్మ పండ్లు తేవడానికి బయటకు వెళ్ళింది. పిల్లవాడు నిద్ర లేచి, తినడానికి ఏమైనా దొరుకుతుందేమో అని చుట్టూ చూశాడు. అప్పుడే కొండల వెనక నుంచి సూర్యుడు ఉదయిస్తున్నాడు — గుండ్రంగా, ఎర్రగా, మెరుస్తూ. "ఆహా!" అనుకున్నాడు పిల్లవాడు. "ఎంత పెద్ద పండు! ఎంత ఎర్రగా పండింది!" చిట్టి చేతులతో చప్పట్లు కొట్టి, మోకాళ్ళు వంచి, ఒక్క పెద్ద గెంతు గెంతాడు. సూర్యుడి వైపు ఆకాశంలోకి దూసుకుపోయాడు.',
      },
      {
        scene: { bg: 'sky', props: [['sun', 345, 75, 1.2], ['hanuman', 220, 115, 0.9], ['cloud', 85, 195, 1.8], ['elephant', 85, 182, 0.75], ['person', 85, 140, 0.75, { skin: 'fair', cloth: '#3a6ab0', crown: true, raise: true }], ['cloud', 300, 175, 0.8]] },
        en: 'Up, up he flew — higher than the birds, higher than the clouds. The gods in heaven watched in surprise. Sūrya, the Sun God, knew this was Vāyu\'s child, so he did not burn him with his heat. But Indra, the king of the gods, came riding on his white elephant, Airāvata. "Who is this who wants to swallow the sun?" he thundered. "Without the sun, the whole world will be dark!" Indra threw his thunderbolt, the vajra. It struck the little one on the chin, and he tumbled down out of the sky onto the mountain, where he lay very still.',
        te: 'పైకి, ఇంకా పైకి — పక్షుల కన్నా ఎత్తుకు, మేఘాల కన్నా ఎత్తుకు ఎగిరాడు. స్వర్గంలో దేవతలు ఆశ్చర్యంగా చూశారు. ఇతడు వాయుదేవుడి బిడ్డ అని సూర్యభగవానుడికి తెలుసు. అందుకే తన వేడితో ఆ పిల్లవాడిని కాల్చలేదు. కానీ దేవతల రాజు ఇంద్రుడు తన తెల్ల ఏనుగు ఐరావతం మీద అక్కడికి వచ్చాడు. "సూర్యుడినే మింగాలని చూస్తున్న ఈ పిల్లవాడు ఎవరు?" అని గర్జించాడు. "సూర్యుడు లేకపోతే లోకమంతా చీకటి అయిపోతుంది!" ఇంద్రుడు తన వజ్రాయుధాన్ని విసిరాడు. అది ఆ చిన్నవాడి దవడకు తగిలింది. అతడు ఆకాశం నుంచి కొండ మీద పడిపోయి, కదలకుండా ఉండిపోయాడు.',
      },
      {
        scene: { bg: 'mountain', props: [['cloud', 70, 55, 1], ['person', 110, 198, 1.2, { skin: 'fair', cloth: '#cfe9f7', top: '#9ccbe8' }], ['monkey', 190, 198, 0.75, { color: '#d9772a' }], ['person', 270, 198, 1.35, { skin: 'fair', cloth: '#e8a23a', crown: true, beard: true, hair: '#ddd', raise: true }], ['lotus', 345, 200, 1], ['flowers', 40, 200, 1]] },
        en: 'Vāyu, the Wind God, was heartbroken. He lifted his son, carried him into a cave, and stopped blowing. Without wind, nothing in the world could breathe! Plants drooped, people and animals grew weak, and even the gods were in trouble. They all hurried to Brahmā, the Creator. Brahmā came to the cave and gently touched the child — and the little one opened his eyes and smiled! Vāyu was happy again, and the cool breeze blew once more. Then the gods gave the child their blessings: great strength, speed, wisdom and a long life. Because his chin, his "hanu", had been hurt, he was called Hanumān.',
        te: 'వాయుదేవుడికి చాలా దుఃఖం కలిగింది. కొడుకును ఎత్తుకుని ఒక గుహలోకి వెళ్ళిపోయి, గాలి వీచడం ఆపేశాడు. గాలి లేకపోతే లోకంలో ఎవరూ ఊపిరి పీల్చుకోలేరు! మొక్కలు వాడిపోయాయి, మనుషులు, జంతువులు నీరసపడిపోయారు, దేవతలు కూడా ఇబ్బంది పడ్డారు. అందరూ కలిసి సృష్టికర్త బ్రహ్మదేవుడి దగ్గరకు పరుగెత్తారు. బ్రహ్మదేవుడు గుహకు వచ్చి పిల్లవాడిని ప్రేమగా తాకాడు — వెంటనే ఆ చిన్నవాడు కళ్ళు తెరిచి నవ్వాడు! వాయుదేవుడు సంతోషించాడు, మళ్ళీ చల్లని గాలి వీచింది. తరువాత దేవతలంతా ఆ బిడ్డకు వరాలు ఇచ్చారు — గొప్ప బలం, వేగం, తెలివి, దీర్ఘాయువు. దవడను సంస్కృతంలో "హనువు" అంటారు. దవడకు దెబ్బ తగిలింది కాబట్టి అతనికి "హనుమంతుడు" అనే పేరు వచ్చింది.',
      },
    ],
  },
  {
    id: 'karna-and-parashurama',
    added: '2026-10-13',
    epic: 'Mahabharata',
    chars: ['Karṇa', 'Paraśurāma'],
    title: { en: 'Karṇa and Paraśurāma — the Bee and the Curse', te: 'కర్ణుడు, పరశురాముడు — పురుగు కాటు, గురువు శాపం' },
    moral: { en: 'Honesty is the first lesson — what we gain by a lie does not stay with us.', te: 'నిజాయితీయే మొదటి పాఠం — అబద్ధంతో సంపాదించింది నిలవదు.' },
    cover: { bg: 'ashram', props: [['archer', 120, 198, 1.3, { cloth: '#c9952a' }], ['bee', 205, 120, 1.3], ['person', 260, 198, 1.4, { skin: 'wheat', cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['sun', 50, 50, 0.8]] },
    pages: [
      {
        scene: { bg: 'mountain', props: [['cloud', 200, 40, 0.9], ['person', 130, 198, 1.15, { cloth: '#c9952a', raise: true }], ['person', 270, 198, 1.45, { skin: 'wheat', cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['tree', 360, 198, 0.9]] },
        en: 'Young Karṇa dreamed of becoming the greatest archer in the world. But Guru Droṇa would not teach him the mightiest weapons. So Karṇa travelled far away to Mount Mahendra, where the great sage Paraśurāma lived. Paraśurāma was a fierce teacher with a famous axe, and he taught only brāhmaṇas. Karṇa bowed low. "Guru, I am a brāhmaṇa boy. Please make me your student." That was not true — Karṇa had grown up in a charioteer\'s home — but he wanted to learn so badly. The sage agreed. Karṇa practised hard every day, and soon he had learned even the most powerful weapon of all, the Brahmāstra.',
        te: 'కర్ణుడికి లోకంలోనే గొప్ప విలుకాడు కావాలని కోరిక. కానీ ద్రోణాచార్యుడు అతనికి గొప్ప దివ్యాస్త్రాలు నేర్పడానికి ఒప్పుకోలేదు. అందుకే కర్ణుడు చాలా దూరంలో ఉన్న మహేంద్ర పర్వతానికి వెళ్ళాడు. అక్కడ మహర్షి పరశురాముడు ఉండేవాడు. గొడ్డలి పట్టుకునే పరశురాముడు చాలా కఠినమైన గురువు. ఆయన బ్రాహ్మణులకు మాత్రమే విద్య నేర్పేవాడు. కర్ణుడు వంగి నమస్కరించాడు. "గురువుగారూ, నేను బ్రాహ్మణ బాలుడిని. నన్ను మీ శిష్యుడిగా స్వీకరించండి." అది నిజం కాదు — కర్ణుడు ఒక సారథి ఇంట్లో పెరిగాడు. కానీ నేర్చుకోవాలనే తపన అతని చేత అలా చెప్పించింది. ముని ఒప్పుకున్నాడు. కర్ణుడు రోజూ కష్టపడి సాధన చేశాడు. త్వరలోనే అన్నిటికంటే శక్తివంతమైన బ్రహ్మాస్త్రాన్ని కూడా నేర్చుకున్నాడు.',
      },
      {
        scene: { bg: 'forest', props: [['tree', 90, 198, 1.3], ['person', 185, 198, 1.35, { cloth: '#c9952a' }], ['bee', 212, 188, 1.1], ['person', 280, 198, 1.3, { skin: 'wheat', cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['sun', 360, 50, 0.7]] },
        en: 'One afternoon, Paraśurāma felt tired after the lessons. He lay down in the shade, rested his head on Karṇa\'s lap, and was soon fast asleep. Just then a stinging insect, something like a bee, landed on Karṇa\'s thigh and began to bite. It bit and bit. It hurt terribly! But Karṇa thought, "If I move, my guru will wake up." So he sat as still as a rock. He pressed his lips together and did not make a sound. The insect bit deeper, until a few warm drops of blood trickled down and touched the sleeping sage.',
        te: 'ఒక మధ్యాహ్నం పాఠాలయ్యాక పరశురాముడికి అలసటగా అనిపించింది. నీడలో కర్ణుడి ఒడిలో తల పెట్టుకుని పడుకున్నాడు. కాసేపట్లోనే గాఢంగా నిద్రపోయాడు. అప్పుడే తుమ్మెద లాంటి ఒక కుట్టే పురుగు ఎగురుకుంటూ వచ్చి కర్ణుడి తొడ మీద వాలి కుట్టడం మొదలుపెట్టింది. కుడుతూనే ఉంది. భరించలేనంత నొప్పి! కానీ కర్ణుడు ఇలా అనుకున్నాడు: "నేను కదిలితే గురువుగారి నిద్ర చెడిపోతుంది." అందుకే బండరాయిలా కదలకుండా కూర్చున్నాడు. పెదవులు బిగబట్టాడు, చిన్న శబ్దం కూడా చేయలేదు. పురుగు ఇంకా లోతుగా తొలిచింది. చివరకు కొన్ని వెచ్చని రక్తపు చుక్కలు కారి, నిద్రపోతున్న గురువుగారిని తాకాయి.',
      },
      {
        scene: { bg: 'ashram', props: [['person', 140, 198, 1.45, { skin: 'wheat', cloth: '#f4ead2', beard: true, hair: '#ddd', raise: true }], ['person', 225, 198, 1.15, { cloth: '#c9952a' }], ['bow', 270, 198, 0.8], ['cloud', 80, 45, 0.9]] },
        en: 'Paraśurāma woke and saw what had happened. First he was amazed — then his eyes flashed. "No brāhmaṇa could bear such pain without moving," he said. "Only a kṣatriya warrior could. Tell me the truth! Who are you?" Karṇa fell at his feet. "Forgive me, Guru. I am Karṇa, a charioteer\'s son. I lied because I wanted so much to learn." The lie hurt the old sage deeply. "You tricked your teacher," he said. "So on the day you need the Brahmāstra most, you will forget it." Then, more gently, he added, "Still, no warrior on earth will be your equal in battle." With tears in his eyes, Karṇa bowed and accepted the curse.',
        te: 'పరశురాముడు నిద్రలేచి జరిగింది చూశాడు. మొదట ఆశ్చర్యపోయాడు — మరుక్షణం ఆయన కళ్ళు ఎర్రబడ్డాయి. "ఇంత నొప్పిని కదలకుండా ఏ బ్రాహ్మణుడూ భరించలేడు," అన్నాడు. "ఒక క్షత్రియ వీరుడు మాత్రమే భరించగలడు. నిజం చెప్పు! నువ్వు ఎవరు?" కర్ణుడు ఆయన పాదాల మీద పడ్డాడు. "క్షమించండి గురువుగారూ. నేను కర్ణుడిని, ఒక సారథి కొడుకుని. నేర్చుకోవాలనే ఆశతో అబద్ధం చెప్పాను." ఆ అబద్ధం ముసలి మహర్షి మనసును చాలా బాధపెట్టింది. "నువ్వు గురువును మోసం చేశావు. అందుకే బ్రహ్మాస్త్రం నీకు అత్యంత అవసరమైన రోజున అది నీకు గుర్తుకు రాదు," అని శపించాడు. తరువాత కాస్త మెత్తబడి, "అయినా యుద్ధంలో నీకు సమానమైన వీరుడు ఉండడు," అన్నాడు. కర్ణుడు కన్నీళ్ళతో తల వంచి ఆ శాపాన్ని స్వీకరించాడు.',
      },
    ],
  },
  {
    id: 'dasharathas-four-sons',
    added: '2026-10-13',
    epic: 'Ramayana',
    chars: ['Daśaratha', 'Kausalyā', 'Kaikeyī', 'Sumitrā', 'Ṛṣyaśṛṅga', 'Rāma'],
    title: { en: 'How Daśaratha\'s Four Sons Were Born — the Sacred Pāyasam', te: 'దశరథుడి నలుగురు కుమారులు — దివ్య పాయసం' },
    moral: { en: 'Wait with patience and a pure heart — good things come in their own time.', te: 'ఓపికతో, మంచి మనసుతో ఎదురుచూస్తే సరైన సమయానికి మంచే జరుగుతుంది.' },
    cover: { bg: 'palace', props: [['person', 110, 198, 1.4, { skin: 'fair', cloth: '#a8392a', crown: true }], ['pot', 200, 196, 1.5], ['fire', 290, 198, 1.1], ['cloud', 330, 45, 0.9]] },
    pages: [
      {
        scene: { bg: 'palace', props: [['person', 80, 198, 1.4, { skin: 'fair', cloth: '#a8392a', crown: true }], ['person', 150, 198, 1.3, { skin: 'wheat', cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['person', 240, 198, 1.2, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['person', 295, 198, 1.2, { female: true, skin: 'wheat', cloth: '#3a6ab0', pallu: '#f0c040' }], ['person', 350, 198, 1.2, { female: true, skin: 'fair', cloth: '#4f9d4f', pallu: '#f0c040' }]] },
        en: 'Long ago, in the shining city of Ayodhyā, there ruled a good king named Daśaratha. His kingdom was rich and his people were happy, but the king carried one sorrow: he had no children. He had three queens — gentle Kausalyā, lively Kaikeyī and kind Sumitrā — and all of them longed for a baby. One day Daśaratha said sadly to his teacher, the sage Vasiṣṭha, "Who will care for Ayodhyā after me?" The wise men advised him, "Invite the holy sage Ṛṣyaśṛṅga. Let him lead a great fire-sacrifice so that sons may be born to you." So the king sent for the sage with great respect.',
        te: 'చాలా కాలం క్రితం, అందమైన అయోధ్యా నగరాన్ని దశరథుడు అనే మంచి రాజు పరిపాలించేవాడు. రాజ్యం సిరిసంపదలతో కళకళలాడేది, ప్రజలు సంతోషంగా ఉండేవారు. కానీ రాజుకు ఒకే ఒక బాధ — ఆయనకు పిల్లలు లేరు. ఆయనకు ముగ్గురు రాణులు — సౌమ్యమైన కౌసల్య, చురుకైన కైకేయి, దయగల సుమిత్ర. ముగ్గురూ ఒక బిడ్డ కోసం ఎంతగానో ఎదురుచూశారు. ఒక రోజు దశరథుడు తన గురువు వసిష్ఠ మహర్షితో, "నా తరువాత అయోధ్యను ఎవరు చూసుకుంటారు?" అని బాధగా అన్నాడు. పెద్దలు ఇలా సలహా ఇచ్చారు: "ఋష్యశృంగ మహర్షిని ఆహ్వానించండి. ఆయన చేత పుత్రకామేష్టి యాగం చేయించండి. మీకు కుమారులు పుడతారు." రాజు ఎంతో గౌరవంతో ఆ మహర్షిని అయోధ్యకు పిలిపించాడు.',
      },
      {
        scene: { bg: 'river', props: [['person', 90, 198, 1.35, { skin: 'fair', cloth: '#a8392a', crown: true }], ['fire', 185, 198, 1.6], ['person', 270, 198, 1.45, { skin: 'fair', cloth: '#f2a33a', top: '#ffd84a', crown: true, raise: true }], ['pot', 305, 126, 0.7], ['sun', 360, 45, 0.7]] },
        en: 'On the banks of the river Sarayū, a great fire was lit. The sages chanted, and the king poured offerings of ghee into the flames. Suddenly the fire leapt up tall and bright, and out of it stepped a shining being, as dazzling as the sun. In his hands he held a golden vessel with a silver lid. "O King," he said, "the gods are pleased with you. Take this pāyasam, this sweet rice pudding, and share it with your queens. Sons will be born to you." Daśaratha took the vessel with trembling hands. He was as happy as a poor man who has suddenly found treasure.',
        te: 'సరయూ నది ఒడ్డున పెద్ద యజ్ఞం మొదలైంది. ఋషులు మంత్రాలు చదువుతుంటే, రాజు అగ్నిలో నెయ్యి ఆహుతులు పోశాడు. ఒక్కసారిగా అగ్ని ఎత్తుగా, ప్రకాశవంతంగా ఎగిసింది. ఆ మంటల్లోంచి సూర్యుడిలా మెరిసిపోతున్న ఒక దివ్య పురుషుడు బయటకు వచ్చాడు. ఆయన చేతుల్లో వెండి మూత ఉన్న ఒక బంగారు పాత్ర ఉంది. "రాజా," అన్నాడు ఆయన, "దేవతలు నీ మీద ప్రసన్నులయ్యారు. ఈ తియ్యని పాయసాన్ని తీసుకుని నీ రాణులకు పంచి ఇవ్వు. నీకు కుమారులు పుడతారు." దశరథుడు వణుకుతున్న చేతులతో ఆ పాత్రను అందుకున్నాడు. పేదవాడికి ఒక్కసారిగా నిధి దొరికినంత సంతోషం కలిగింది ఆయనకు.',
      },
      {
        scene: { bg: 'palace', props: [['person', 55, 198, 1.2, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['person', 110, 198, 1.2, { female: true, skin: 'wheat', cloth: '#3a6ab0', pallu: '#f0c040' }], ['person', 345, 198, 1.2, { female: true, skin: 'fair', cloth: '#4f9d4f', pallu: '#f0c040' }], ['person', 175, 198, 0.75, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['person', 215, 198, 0.75, { skin: 'wheat', cloth: '#a8392a' }], ['person', 255, 198, 0.75, { skin: 'fair', cloth: '#e8a23a' }], ['person', 295, 198, 0.75, { skin: 'fair', cloth: '#7a5ab0' }]] },
        en: 'The king hurried to the palace. He gave half of the pāyasam to Queen Kausalyā. Of what was left, he gave a share to Sumitrā, a share to Kaikeyī, and the last share to Sumitrā again — so Sumitrā had two! In time, on the ninth day of the spring month of Caitra, Kausalyā gave birth to Rāma. Kaikeyī\'s son was Bharata, and Sumitrā had twins, Lakṣmaṇa and Śatrughna. All of Ayodhyā danced with joy! The four princes grew up together, playing and learning side by side. Lakṣmaṇa always stayed close to Rāma, and Śatrughna to Bharata — bound together, it is said, by their shares of the pāyasam. Even today we celebrate Rāma\'s birthday as Śrī Rāma Navamī.',
        te: 'రాజు సంతోషంగా అంతఃపురానికి వెళ్ళాడు. పాయసంలో సగం కౌసల్యకు ఇచ్చాడు. మిగిలిన దానిలో ఒక భాగం సుమిత్రకు, ఒక భాగం కైకేయికి ఇచ్చి, చివరి భాగం మళ్ళీ సుమిత్రకే ఇచ్చాడు. అలా సుమిత్రకు రెండు భాగాలు దక్కాయి! కొంత కాలానికి, వసంత కాలంలో చైత్ర మాసం నవమి నాడు కౌసల్యకు రాముడు పుట్టాడు. కైకేయికి భరతుడు పుట్టాడు. సుమిత్రకు కవల పిల్లలు — లక్ష్మణుడు, శత్రుఘ్నుడు. అయోధ్య అంతా ఆనందంతో పండుగ చేసుకుంది! నలుగురు రాకుమారులు కలిసి ఆడుకుంటూ, కలిసి చదువుకుంటూ పెరిగారు. లక్ష్మణుడు ఎప్పుడూ రాముడి వెంటే, శత్రుఘ్నుడు భరతుడి వెంటే ఉండేవారు — పాయసంలోని ఆ భాగాలే వాళ్ళను అలా కలిపాయని అంటారు. ఇప్పటికీ రాముడి పుట్టినరోజును మనం శ్రీరామ నవమిగా జరుపుకుంటాం.',
      },
    ],
  },
  {
    id: 'how-the-pandavas-were-born',
    added: '2026-10-14',
    epic: 'Mahabharata',
    chars: ['Kuntī', 'Mādrī', 'Pāṇḍu', 'Yudhiṣṭhira', 'Bhīma', 'Arjuna', 'Nakula', 'Sahadeva'],
    title: { en: 'How the Five Pāṇḍavas Were Born', te: 'పంచ పాండవుల జననం' },
    moral: { en: 'A gift used with love and sharing brings joy to everyone.', te: 'ప్రేమతో పంచుకునే వరం అందరికీ ఆనందాన్ని ఇస్తుంది.' },
    cover: { bg: 'mountain', props: [['person', 110, 198, 1.4, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['person', 170, 198, 0.7, { skin: 'fair', cloth: '#f0c040' }], ['person', 205, 198, 0.75, { skin: 'wheat', cloth: '#a8392a' }], ['person', 240, 198, 0.7, { skin: 'fair', cloth: '#3a6ab0' }], ['person', 300, 198, 1.4, { female: true, skin: 'fair', cloth: '#4f9d4f', pallu: '#f0c040' }], ['sun', 350, 45, 0.8]] },
    pages: [
      {
        scene: { bg: 'mountain', props: [['person', 110, 198, 1.45, { skin: 'fair', cloth: '#f4ead2', crown: true }], ['person', 190, 198, 1.3, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['person', 260, 198, 1.3, { female: true, skin: 'fair', cloth: '#4f9d4f', pallu: '#f0c040' }], ['deer', 340, 198, 1], ['cloud', 70, 45, 0.9]] },
        en: 'King Pāṇḍu of Hastināpura was a brave and gentle ruler. He had two queens, Kuntī and Mādrī. One day, while hunting in the forest, Pāṇḍu shot an arrow at a deer — but the deer was really a sage in disguise! Before he left the world, the sage laid a curse on him: Pāṇḍu could never become a father. The king was heartbroken. He gave up his crown, put on simple clothes and went to live among the sages on the mountain Śataśṛṅga. His two queens went with him. "Without children," he said sadly, "who will carry on our family?"',
        te: 'హస్తినాపుర రాజు పాండురాజు వీరుడు, మంచివాడు. ఆయనకు ఇద్దరు రాణులు — కుంతి, మాద్రి. ఒక రోజు అడవిలో వేటాడుతుండగా పాండురాజు ఒక జింక మీద బాణం వేశాడు. కానీ ఆ జింక నిజానికి జింక రూపంలో ఉన్న ఒక ముని! ఈ లోకం విడిచి వెళ్ళేముందు ఆ ముని, "నువ్వు ఎప్పటికీ తండ్రివి కాలేవు," అని శపించాడు. రాజు గుండె పగిలిపోయింది. ఆయన కిరీటం వదిలేసి, సాదా బట్టలు కట్టుకుని, శతశృంగ పర్వతం మీద మునుల మధ్య ఉండటానికి వెళ్ళిపోయాడు. ఇద్దరు రాణులూ ఆయన వెంటే వెళ్ళారు. "పిల్లలు లేకపోతే మన వంశాన్ని ఎవరు ముందుకు తీసుకెళ్తారు?" అని ఆయన బాధపడ్డాడు.',
      },
      {
        scene: { bg: 'ashram', props: [['person', 100, 198, 1.4, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['person', 170, 198, 1.3, { skin: 'fair', cloth: '#f4ead2', crown: true }], ['person', 260, 198, 1.5, { skin: 'fair', cloth: '#f2a33a', top: '#ffd84a', crown: true, raise: true }], ['rock', 215, 198, 0.6], ['cloud', 330, 40, 0.8]] },
        en: 'Then Kuntī remembered a secret. "When I was a girl," she said, "the sage Durvāsa taught me a holy mantra. With it I can call any god, and he will bless me with a child." Pāṇḍu\'s face lit up. "Call Dharma, the god of what is right!" So Yudhiṣṭhira was born — truthful and fair. Next Kuntī called Vāyu, the wind god, and strong Bhīma was born. It is said that baby Bhīma once slipped from her lap onto a rock — and the rock broke into pieces, while the baby just giggled! Then Kuntī called Indra, king of the gods, and Arjuna was born, who would become the finest archer in the world.',
        te: 'అప్పుడు కుంతికి ఒక రహస్యం గుర్తుకు వచ్చింది. "నేను చిన్నపిల్లగా ఉన్నప్పుడు దుర్వాస మహర్షి నాకు ఒక మంత్రం ఉపదేశించారు. దానితో ఏ దేవుడిని పిలిచినా ఆయన వచ్చి నాకు బిడ్డను వరంగా ఇస్తాడు," అని చెప్పింది. పాండురాజు ముఖం వెలిగిపోయింది. "ధర్మదేవుడిని పిలువు!" అలా సత్యం, న్యాయం తెలిసిన ధర్మరాజు పుట్టాడు. తరువాత కుంతి వాయుదేవుడిని పిలిచింది, బలశాలి భీముడు పుట్టాడు. ఒకసారి పసి భీముడు తల్లి ఒడిలోంచి జారి ఒక బండ మీద పడ్డాడట — బండ ముక్కలు ముక్కలైంది, బిడ్డ మాత్రం కిలకిలా నవ్వాడట! ఆ తరువాత కుంతి దేవేంద్రుడిని పిలిచింది. లోకంలోనే గొప్ప విలుకాడు కాబోయే అర్జునుడు పుట్టాడు.',
      },
      {
        scene: { bg: 'mountain', props: [['person', 80, 198, 1.35, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['person', 150, 198, 1.35, { female: true, skin: 'fair', cloth: '#4f9d4f', pallu: '#f0c040' }], ['person', 210, 198, 0.75, { skin: 'fair', cloth: '#f0c040' }], ['person', 245, 198, 0.85, { skin: 'wheat', cloth: '#a8392a' }], ['person', 280, 198, 0.75, { skin: 'fair', cloth: '#3a6ab0' }], ['person', 315, 198, 0.6, { skin: 'fair', cloth: '#e8a23a' }], ['person', 345, 198, 0.6, { skin: 'fair', cloth: '#7a5ab0' }], ['sun', 360, 45, 0.7]] },
        en: 'Kuntī now had three sons, but Mādrī had none. Kuntī did not keep her gift to herself. "Little sister," she said, "I will share the mantra with you." Mādrī thought carefully and called the Aśvins, the twin gods of healing. Twin boys were born to her — Nakula, so handsome, and Sahadeva, so wise. Now there were five princes: Yudhiṣṭhira, Bhīma, Arjuna, Nakula and Sahadeva. They grew up together among the sages, climbing the hills and learning from the rishis. Kuntī loved all five as her own. People called them the Pāṇḍavas, the sons of Pāṇḍu, and the five brothers stayed together all their lives.',
        te: 'ఇప్పుడు కుంతికి ముగ్గురు కొడుకులు, కానీ మాద్రికి ఎవరూ లేరు. కుంతి తనకు దొరికిన వరాన్ని తన దగ్గరే దాచుకోలేదు. "చెల్లీ, ఈ మంత్రం నీకూ చెబుతాను," అంది. మాద్రి బాగా ఆలోచించి, కవల దేవతలైన అశ్వినీ దేవతలను పిలిచింది. ఆమెకు కవల పిల్లలు పుట్టారు — ఎంతో అందమైన నకులుడు, ఎంతో తెలివైన సహదేవుడు. ఇప్పుడు ఐదుగురు రాకుమారులు — ధర్మరాజు, భీముడు, అర్జునుడు, నకులుడు, సహదేవుడు. వాళ్ళు మునుల మధ్య కొండలు ఎక్కుతూ, ఋషుల దగ్గర నేర్చుకుంటూ కలిసి పెరిగారు. కుంతి ఐదుగురినీ తన సొంత బిడ్డల్లాగే ప్రేమించింది. అందరూ వాళ్ళను పాండురాజు కొడుకులు — పాండవులు — అని పిలిచారు. ఆ ఐదుగురు అన్నదమ్ములు జీవితాంతం కలిసే ఉన్నారు.',
      },
    ],
  },
  {
    id: 'vishvamitra-and-tataka',
    added: '2026-10-14',
    epic: 'Ramayana',
    chars: ['Viśvāmitra', 'Rāma', 'Lakṣmaṇa', 'Daśaratha', 'Tāṭakā'],
    title: { en: 'Viśvāmitra Takes the Boys to the Forest — Tāṭakā', te: 'విశ్వామిత్రుడితో అడవికి — తాటకి' },
    moral: { en: 'Being brave means protecting those who cannot protect themselves.', te: 'తమను తాము కాపాడుకోలేని వారిని కాపాడటమే నిజమైన ధైర్యం.' },
    cover: { bg: 'forest', props: [['person', 90, 198, 1.4, { skin: 'wheat', cloth: '#e8a23a', beard: true, hair: '#ddd' }], ['archer', 170, 198, 1.1, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['archer', 240, 198, 1, { skin: 'fair', cloth: '#a8392a' }], ['tree', 340, 198, 1.1], ['sun', 50, 45, 0.7]] },
    pages: [
      {
        scene: { bg: 'court', props: [['throne', 110, 196, 1.2], ['person', 110, 192, 1.2, { skin: 'fair', cloth: '#a8392a', crown: true }], ['person', 220, 198, 1.45, { skin: 'wheat', cloth: '#e8a23a', beard: true, hair: '#ddd', raise: true }], ['person', 300, 198, 0.9, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['person', 340, 198, 0.85, { skin: 'fair', cloth: '#a8392a' }]] },
        en: 'One day the great sage Viśvāmitra came to King Daśaratha\'s court. The king bowed low. "Ask for anything, holy one, and it is yours." "Demons keep spoiling my sacred fire in the forest," said the sage. "Send me your son Rāma to protect it." Daśaratha turned pale. "Rāma is not even sixteen! Take my whole army instead!" Viśvāmitra frowned. "A king who breaks his word?" Then the wise Vasiṣṭha spoke softly: "Do not fear, O King. With Viśvāmitra beside him, no harm will come to Rāma." So Daśaratha blessed his sons, and Rāma and Lakṣmaṇa set off with the sage, their bows on their shoulders.',
        te: 'ఒక రోజు విశ్వామిత్ర మహర్షి దశరథ మహారాజు సభకు వచ్చాడు. రాజు వినయంగా నమస్కరించాడు. "స్వామీ, ఏం కావాలో అడగండి, ఇస్తాను." "అడవిలో నా యజ్ఞాన్ని రాక్షసులు పాడుచేస్తున్నారు," అన్నాడు మహర్షి. "దాన్ని కాపాడటానికి నీ కొడుకు రాముడిని నాతో పంపు." దశరథుడి ముఖం పాలిపోయింది. "రాముడికి ఇంకా పదహారేళ్ళు కూడా నిండలేదు! కావాలంటే నా సైన్యమంతా తీసుకెళ్ళండి!" విశ్వామిత్రుడు కోపంగా చూశాడు. "ఇచ్చిన మాట తప్పే రాజువా?" అప్పుడు వసిష్ఠ మహర్షి మెల్లగా అన్నాడు, "భయపడకు రాజా. విశ్వామిత్రుడు వెంట ఉంటే రాముడికి ఏ ఆపదా రాదు." దశరథుడు కొడుకులను ఆశీర్వదించాడు. రామలక్ష్మణులు భుజాల మీద విల్లులతో మహర్షి వెంట బయలుదేరారు.',
      },
      {
        scene: { bg: 'river', props: [['person', 110, 198, 1.45, { skin: 'wheat', cloth: '#e8a23a', beard: true, hair: '#ddd', raise: true }], ['person', 200, 198, 1.1, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['person', 250, 198, 1.05, { skin: 'fair', cloth: '#a8392a' }], ['tree', 345, 198, 1.1], ['sun', 60, 45, 0.7]] },
        en: 'They walked along the river Sarayū. Viśvāmitra said, "Rāma, come here. I will teach you two secret mantras, Balā and Atibalā. With them you will never feel tired or hungry, even in the deepest forest." Rāma learned them carefully, and Lakṣmaṇa listened beside him. The boys slept that night on soft grass under the stars. Next morning they came to a dark, silent forest. No birds sang there. No flowers grew. "This is the forest of Tāṭakā," said the sage. "She was once a lovely yakṣī, but because of a curse she became a fierce demoness. Now she frightens away every traveller who comes here."',
        te: 'వాళ్ళు సరయూ నది ఒడ్డు వెంట నడిచారు. విశ్వామిత్రుడు, "రామా, ఇలా రా. నీకు బల, అతిబల అనే రెండు రహస్య మంత్రాలు నేర్పుతాను. వీటితో ఎంత దట్టమైన అడవిలో ఉన్నా నీకు అలసట గానీ, ఆకలి గానీ ఉండవు," అన్నాడు. రాముడు వాటిని శ్రద్ధగా నేర్చుకున్నాడు, పక్కనే లక్ష్మణుడు కూడా విన్నాడు. ఆ రాత్రి అన్నదమ్ములు నక్షత్రాల కింద మెత్తని గడ్డి మీద నిద్రపోయారు. మరుసటి రోజు ఉదయం వాళ్ళు ఒక చీకటి, నిశ్శబ్దమైన అడవికి చేరుకున్నారు. అక్కడ ఒక్క పక్షి కూడా కూయడం లేదు. ఒక్క పువ్వు కూడా పూయడం లేదు. "ఇది తాటకి అడవి," అన్నాడు మహర్షి. "ఒకప్పుడు ఆమె అందమైన యక్షిణి. ఒక శాపం వల్ల భయంకరమైన రాక్షసిగా మారింది. ఇప్పుడు ఇక్కడికి వచ్చే ప్రతి బాటసారినీ భయపెట్టి తరిమేస్తోంది."',
      },
      {
        scene: { bg: 'forest', props: [['archer', 100, 198, 1.35, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['person', 165, 198, 1.1, { skin: 'fair', cloth: '#a8392a' }], ['rock', 240, 150, 0.6], ['person', 320, 198, 2, { female: true, skin: 'dark', cloth: '#5a3a5a', hair: '#5a2a2a', raise: true }], ['cloud', 220, 40, 1]] },
        en: 'Suddenly the ground shook. Tāṭakā came roaring out of the trees, huge and wild, throwing rocks and whirling clouds of dust. Rāma held his bow, but he hesitated. "Guru, she is a woman. How can I fight her?" "Rāma," said Viśvāmitra, "a prince must protect the innocent. She has harmed many people. This is your duty." Rāma nodded. Rocks flew at them, but his arrows broke every one. At last Rāma let fly a single shining arrow, and the great demoness fell, never to frighten anyone again. Birds began to sing. The gods showered flowers, and the happy sage gave Rāma many divine weapons as his reward.',
        te: 'ఒక్కసారిగా నేల కంపించింది. పెద్ద పెద్ద బండరాళ్ళు విసురుతూ, దుమ్ము సుడిగాలులు రేపుతూ తాటకి చెట్ల మధ్య నుంచి గర్జిస్తూ వచ్చింది. రాముడు విల్లు పట్టుకున్నాడు, కానీ ఆగిపోయాడు. "గురువుగారూ, ఆమె ఒక స్త్రీ. ఆమెతో ఎలా యుద్ధం చేయను?" "రామా," అన్నాడు విశ్వామిత్రుడు, "అమాయకులను కాపాడటం రాకుమారుడి ధర్మం. ఆమె ఎంతో మందికి హాని చేసింది. ఇది నీ కర్తవ్యం." రాముడు తల ఊపాడు. రాళ్ళు వాళ్ళ మీదకు దూసుకొచ్చాయి, కానీ రాముడి బాణాలు ప్రతి రాయినీ ముక్కలు చేశాయి. చివరకు రాముడు మెరిసే ఒక్క బాణం వదిలాడు. ఆ పెద్ద రాక్షసి కూలిపోయింది. ఇక ఎవరినీ భయపెట్టదు. పక్షులు మళ్ళీ పాడటం మొదలుపెట్టాయి. దేవతలు పూలవాన కురిపించారు. సంతోషించిన మహర్షి రాముడికి ఎన్నో దివ్యాస్త్రాలను బహుమతిగా ఇచ్చాడు.',
      },
    ],
  },
  {
    id: 'dronas-ring-in-the-well',
    added: '2026-10-14',
    epic: 'Mahabharata',
    chars: ['Droṇa', 'Bhīṣma', 'Yudhiṣṭhira', 'Arjuna', 'Duryodhana'],
    title: { en: 'Droṇa\'s Ring in the Well', te: 'బావిలో ద్రోణుడి ఉంగరం' },
    moral: { en: 'Real skill is quiet — it shows itself when it is needed.', te: 'నిజమైన నైపుణ్యం గొప్పలు చెప్పదు — అవసరమైనప్పుడు తానే కనిపిస్తుంది.' },
    cover: { bg: 'village', props: [['person', 110, 198, 1.45, { skin: 'wheat', cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['well', 210, 198, 1.1], ['person', 290, 198, 1, { skin: 'fair', cloth: '#3a6ab0' }], ['person', 330, 198, 0.95, { skin: 'fair', cloth: '#a8392a' }]] },
    pages: [
      {
        scene: { bg: 'village', props: [['person', 90, 198, 1, { skin: 'fair', cloth: '#f0c040' }], ['person', 130, 198, 1.05, { skin: 'wheat', cloth: '#a8392a' }], ['well', 210, 198, 1.1], ['person', 280, 198, 1, { skin: 'fair', cloth: '#3a6ab0', raise: true }], ['person', 320, 198, 1, { skin: 'fair', cloth: '#7a5ab0' }], ['sun', 360, 45, 0.7]] },
        en: 'One sunny afternoon, the young princes of Hastināpura were playing outside the city — the five Pāṇḍavas and their cousins the Kauravas. They were hitting a small wooden ball with sticks. Whack! Someone hit it too hard, and the ball flew high, bounced once — and plopped right into an old well! The princes crowded around and peered down. Far below, the ball was floating on the dark water. "Pull it out!" "How? It\'s too deep!" "Lower a rope!" "We have no rope!" They tried everything, but nothing worked. The princes were very good at shouting, but not at all good at solving the problem.',
        te: 'ఒక ఎండ మధ్యాహ్నం హస్తినాపుర యువరాజులు — పాండవులు ఐదుగురూ, వారి దాయాదులైన కౌరవులూ — నగరం బయట ఆడుకుంటున్నారు. చిన్న చెక్క బంతిని కర్రలతో కొడుతూ ఆడుతున్నారు. ఠప్! ఎవరో గట్టిగా కొట్టారు. బంతి ఎత్తుకు ఎగిరి, ఒకసారి నేల మీద ఎగిరిపడి — డబుక్కున ఒక పాత బావిలో పడిపోయింది! యువరాజులంతా చుట్టూ చేరి కిందకు తొంగిచూశారు. ఎంతో లోతున చీకటి నీళ్ళ మీద బంతి తేలుతోంది. "బయటకు తీయండి!" "ఎలా? చాలా లోతుగా ఉంది!" "తాడు దించండి!" "తాడు లేదుగా!" వాళ్ళు ఏం చేసినా లాభం లేకపోయింది. అరవడంలో అందరూ గట్టివాళ్ళే గానీ, సమస్యను పరిష్కరించడంలో మాత్రం ఎవరూ కాదు.',
      },
      {
        scene: { bg: 'village', props: [['person', 110, 198, 1.45, { skin: 'wheat', cloth: '#f4ead2', beard: true, hair: '#ddd', raise: true }], ['well', 210, 198, 1.1], ['arrow', 210, 140, 0.8], ['person', 290, 198, 1, { skin: 'fair', cloth: '#3a6ab0' }], ['person', 330, 198, 1, { skin: 'fair', cloth: '#7a5ab0' }]] },
        en: 'Just then a thin, dark-skinned brāhmaṇa with bright eyes came walking by. He smiled. "Princes of the great Bharata family, and you cannot get a ball out of a well? Watch." He slipped the ring off his finger and dropped it into the well too! Then he picked up a handful of long blades of grass and whispered a mantra over them. He threw one blade — it pierced the ball like an arrow. He threw another into the end of the first, then another, and another, until they made a long green chain. Gently he pulled — and up came the ball! The princes\' mouths fell open.',
        te: 'అప్పుడే మెరిసే కళ్ళున్న ఒక సన్నని, నల్లని బ్రాహ్మణుడు అటుగా వచ్చాడు. ఆయన చిరునవ్వు నవ్వాడు. "గొప్ప భరత వంశపు రాకుమారులు మీరు, బావిలోంచి బంతి తీయలేరా? చూడండి." ఆయన తన వేలి ఉంగరం తీసి అది కూడా బావిలో పడేశాడు! తరువాత గుప్పెడు పొడవాటి గడ్డిపోచలు తీసుకుని వాటి మీద ఒక మంత్రం చదివాడు. ఒక పోచ విసిరాడు — అది బాణంలా బంతిలో గుచ్చుకుంది. ఇంకో పోచను మొదటి దాని చివరలో గుచ్చాడు, ఆ తరువాత ఇంకొకటి, ఇంకొకటి... అలా పొడవైన ఆకుపచ్చ గొలుసు తయారైంది. ఆయన మెల్లగా లాగాడు — బంతి పైకి వచ్చేసింది! యువరాజులు నోళ్ళు తెరుచుకుని చూస్తూ ఉండిపోయారు.',
      },
      {
        scene: { bg: 'palace', props: [['person', 100, 198, 1.5, { skin: 'fair', cloth: '#f4ead2', beard: true, hair: '#ddd', crown: true }], ['person', 190, 198, 1.4, { skin: 'wheat', cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['archer', 280, 198, 1.05, { skin: 'fair', cloth: '#3a6ab0' }], ['person', 340, 198, 1, { skin: 'fair', cloth: '#f0c040' }]] },
        en: '"And your ring, sir?" asked Arjuna. The brāhmaṇa took a bow, aimed into the well and shot one arrow. It came flying back up with the ring hanging on its tip! He slipped the ring on and smiled. The princes bowed. "Who are you?" "Go and tell your grandfather Bhīṣma what you saw. He will know." The boys ran to the palace, all talking at once. Bhīṣma listened and said at once, "That can only be Droṇa, the greatest teacher of weapons in the land!" He welcomed Droṇa with honour and asked him to teach the princes. And so Droṇa became their guru — and Arjuna would become his dearest student.',
        te: '"మరి మీ ఉంగరం, స్వామీ?" అని అడిగాడు అర్జునుడు. ఆ బ్రాహ్మణుడు ఒక విల్లు తీసుకుని బావిలోకి గురిపెట్టి ఒక బాణం వదిలాడు. ఆ బాణం కొసకు ఉంగరం వేలాడుతూ పైకి దూసుకొచ్చింది! ఆయన ఉంగరాన్ని వేలికి పెట్టుకుని చిరునవ్వు నవ్వాడు. యువరాజులు నమస్కరించారు. "మీరు ఎవరు?" "వెళ్ళి మీ తాతగారు భీష్ముడికి మీరు చూసింది చెప్పండి. ఆయనకు తెలుస్తుంది." పిల్లలంతా ఒకేసారి మాట్లాడుతూ అంతఃపురానికి పరుగెత్తారు. భీష్ముడు విని వెంటనే అన్నాడు, "ఆయన తప్పకుండా ద్రోణుడే — ఈ దేశంలో అస్త్రవిద్య నేర్పే గొప్ప గురువు!" ఆయన ద్రోణుడిని గౌరవంగా ఆహ్వానించి, రాకుమారులకు విద్య నేర్పమని కోరాడు. అలా ద్రోణుడు వారికి గురువయ్యాడు — అర్జునుడు ఆయనకు అత్యంత ప్రియమైన శిష్యుడయ్యాడు.',
      },
    ],
  },
  {
    id: 'ahalya-is-freed',
    added: '2026-10-15',
    epic: 'Ramayana',
    chars: ['Ahalyā', 'Gautama', 'Rāma', 'Lakṣmaṇa', 'Viśvāmitra'],
    title: { en: 'Ahalyā Is Freed', te: 'అహల్యా శాప విమోచనం' },
    moral: { en: 'Patience and a kind heart can undo even a curse.', te: 'ఓర్పు, మంచి మనసు ఉంటే శాపమైనా తొలగిపోతుంది.' },
    cover: { bg: 'ashram', props: [['person', 120, 198, 1.35, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['person', 210, 198, 1.4, { female: true, skin: 'fair', cloth: '#f4ead2', pallu: '#f0c040' }], ['flowers', 265, 198, 1], ['cloud', 70, 45, 0.9]] },
    pages: [
      {
        scene: { bg: 'ashram', props: [['person', 90, 198, 1.45, { skin: 'wheat', cloth: '#e8a23a', beard: true, hair: '#ddd', raise: true }], ['person', 170, 198, 1.1, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['person', 215, 198, 1.05, { skin: 'fair', cloth: '#a8392a' }], ['tree', 258, 198, 0.7], ['cloud', 190, 40, 0.8]] },
        en: 'On the way to Mithilā, Sage Viśvāmitra led Rāma and Lakṣmaṇa past an old hermitage. The trees stood still, no birds sang, and the paths were covered with dry leaves. "Whose ashram is this, Guru?" asked Rāma. "Long ago," said Viśvāmitra, "the great sage Gautama lived here with his wife, Ahalyā. She was so lovely that, it is said, Brahmā himself shaped her with special care. Every morning Gautama went to the river to bathe and pray, and Ahalyā looked after their peaceful home. In those days this ashram was full of flowers, deer and happy songs."',
        te: 'మిథిలకు వెళ్ళే దారిలో విశ్వామిత్ర మహర్షి రామలక్ష్మణులను ఒక పాత ఆశ్రమం దగ్గరకు తీసుకువచ్చాడు. అక్కడ చెట్లు కదలడం లేదు, పక్షులు పాడడం లేదు, దారుల నిండా ఎండిన ఆకులు పడి ఉన్నాయి. "గురువుగారూ, ఇది ఎవరి ఆశ్రమం?" అని అడిగాడు రాముడు. "చాలా కాలం క్రితం," అన్నాడు విశ్వామిత్రుడు, "గౌతమ మహర్షి తన భార్య అహల్యతో ఇక్కడ ఉండేవాడు. అహల్య ఎంత అందమైనదంటే, బ్రహ్మదేవుడే ఆమెను ఎంతో శ్రద్ధగా సృష్టించాడని చెబుతారు. రోజూ ఉదయం గౌతముడు స్నానం, సంధ్యావందనం కోసం నదికి వెళ్ళేవాడు. అహల్య వారి ప్రశాంతమైన ఇంటిని చూసుకునేది. ఆ రోజుల్లో ఈ ఆశ్రమం పూలతో, జింకలతో, సంతోషమైన పాటలతో నిండి ఉండేది."',
      },
      {
        scene: { bg: 'ashram', props: [['person', 110, 198, 1.45, { skin: 'wheat', cloth: '#f4ead2', beard: true, hair: '#ddd', raise: true }], ['person', 200, 198, 1.3, { female: true, skin: 'fair', cloth: '#f4ead2', pallu: '#7a5ab0' }], ['rock', 258, 198, 0.7], ['cloud', 220, 40, 1]] },
        en: 'But Indra, the king of the gods, played a wicked trick. One day, while Gautama was away, Indra came to the ashram disguised as the sage himself. Just as he was slipping away, the real Gautama returned and understood everything. The sage\'s anger blazed like fire. He cursed Indra, and then he turned to Ahalyā. "You will stay here alone for thousands of years, unseen by anyone, living only on air and doing penance," he said. In the tellings we hear at home, it is said she became a stone. Then his anger cooled. "When Rāma, son of Daśaratha, comes here," he said more gently, "you will be free." And Gautama went away to the Himālayas.',
        te: 'కానీ దేవతల రాజైన ఇంద్రుడు ఒక చెడ్డ మోసం చేశాడు. ఒక రోజు గౌతముడు బయటకు వెళ్ళినప్పుడు, ఇంద్రుడు గౌతముడి వేషంలోనే ఆశ్రమానికి వచ్చాడు. అతను దొంగచాటుగా వెళ్ళిపోతుండగా, అసలు గౌతముడు తిరిగి వచ్చి జరిగినదంతా గ్రహించాడు. మహర్షి కోపం అగ్నిలా మండింది. ఆయన ఇంద్రుడిని శపించాడు. తరువాత అహల్య వైపు తిరిగి, "నువ్వు వేల సంవత్సరాలు ఇక్కడ ఒంటరిగా, ఎవరికీ కనిపించకుండా, గాలిని మాత్రమే ఆహారంగా తీసుకుంటూ తపస్సు చేస్తూ ఉంటావు," అన్నాడు. మన ఇళ్ళలో చెప్పుకునే కథల్లో ఆమె రాయిగా మారిందని అంటారు. కొంతసేపటికి ఆయన కోపం చల్లారింది. "దశరథుడి కుమారుడైన రాముడు ఇక్కడికి వచ్చినప్పుడు నీకు శాప విముక్తి కలుగుతుంది," అని మెల్లగా చెప్పి, గౌతముడు హిమాలయాలకు వెళ్ళిపోయాడు.',
      },
      {
        scene: { bg: 'ashram', props: [['person', 90, 198, 1.3, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['person', 140, 198, 1.2, { skin: 'fair', cloth: '#a8392a' }], ['person', 220, 198, 1.4, { female: true, skin: 'fair', cloth: '#f4ead2', pallu: '#f0c040', raise: true }], ['flowers', 270, 198, 0.8], ['sun', 50, 45, 0.7], ['cloud', 200, 35, 0.8]] },
        en: '"Rāma, come," said Viśvāmitra. "Ahalyā has waited long enough." Rāma stepped into the silent ashram. At once a soft light glowed, like the moon coming out from behind the clouds, and there stood Ahalyā, free at last! Rāma and Lakṣmaṇa bowed and touched her feet, as good children do to an elder. Ahalyā\'s eyes filled with happy tears. She welcomed the princes as honoured guests and gave them water and fruits. Flowers rained from the sky, and the gods sang. Then Sage Gautama returned, and the two were together again. The ashram woke up — the birds sang, and the deer came running back.',
        te: '"రామా, రా," అన్నాడు విశ్వామిత్రుడు. "అహల్య చాలా కాలంగా ఎదురుచూస్తోంది." రాముడు ఆ నిశ్శబ్దమైన ఆశ్రమంలోకి అడుగు పెట్టాడు. వెంటనే మబ్బుల వెనుక నుంచి బయటకు వచ్చిన చంద్రుడిలా ఒక మెత్తని వెలుగు ప్రకాశించింది. ఆ వెలుగులో అహల్య నిలబడి ఉంది — చివరకు ఆమెకు శాప విముక్తి కలిగింది! రామలక్ష్మణులు పెద్దలకు మంచి పిల్లలు చేసినట్టే ఆమెకు నమస్కరించి పాదాలకు మొక్కారు. అహల్య కళ్ళు ఆనంద బాష్పాలతో నిండిపోయాయి. ఆమె యువరాజులను గౌరవంగా ఆహ్వానించి, నీళ్ళు, పండ్లు ఇచ్చింది. ఆకాశం నుంచి పూలవాన కురిసింది, దేవతలు పాటలు పాడారు. అప్పుడు గౌతమ మహర్షి తిరిగి వచ్చాడు, ఇద్దరూ మళ్ళీ కలిశారు. ఆశ్రమం మళ్ళీ మేల్కొంది — పక్షులు పాడాయి, జింకలు పరుగెత్తుకుంటూ తిరిగి వచ్చాయి.',
      },
    ],
  },
  {
    id: 'pandavas-escape-the-house-of-lac',
    added: '2026-10-15',
    epic: 'Mahabharata',
    chars: ['Vidura', 'Bhīma', 'Kuntī', 'Yudhiṣṭhira', 'Duryodhana'],
    title: { en: 'The Pāṇḍavas Escape the House of Lac', te: 'లక్క ఇంటి నుంచి తప్పించుకున్న పాండవులు' },
    moral: { en: 'With wisdom and true well-wishers, we can escape even great danger.', te: 'జ్ఞానం, మంచి ఆప్తులు ఉంటే ఎంత పెద్ద ఆపదనైనా దాటవచ్చు.' },
    cover: { bg: 'night', props: [['hut', 185, 198, 1.1], ['fire', 145, 198, 1.5], ['fire', 228, 198, 1.3], ['person', 320, 198, 1.5, { skin: 'wheat', cloth: '#a8392a', raise: true }], ['moon', 60, 45, 1]] },
    pages: [
      {
        scene: { bg: 'court', props: [['throne', 110, 196, 1.2], ['person', 110, 192, 1.2, { skin: 'fair', cloth: '#4a4a8a', crown: true }], ['person', 220, 198, 1.3, { skin: 'wheat', cloth: '#7a5a3a', raise: true }], ['pot', 300, 198, 0.9]] },
        en: 'The Pāṇḍava princes were growing up strong and kind, and the people of Hastināpura loved them. Their cousin Duryodhana burned with jealousy. "If they are gone, the kingdom will be mine," he thought. So he made a secret plan with a minister named Purocana. "Build a beautiful house in the town of Vāraṇāvata," he said, "but build it with lac, wax, oil and dry straw — things that catch fire in a moment. We will send the Pāṇḍavas there for a holiday, and one night, you will set it alight." Then Duryodhana smiled sweetly and invited his cousins and their mother Kuntī to enjoy the festival at Vāraṇāvata.',
        te: 'పాండవులు బలంగా, మంచిగా పెరుగుతున్నారు. హస్తినాపుర ప్రజలు వారిని ఎంతో ప్రేమించేవారు. వారి దాయాది దుర్యోధనుడు అసూయతో రగిలిపోయాడు. "వీళ్ళు లేకపోతే రాజ్యం నాదే," అనుకున్నాడు. అందుకే పురోచనుడు అనే మంత్రితో కలిసి ఒక రహస్య పథకం వేశాడు. "వారణావతంలో ఒక అందమైన ఇల్లు కట్టించు," అన్నాడు. "కానీ దాన్ని లక్క, మైనం, నూనె, ఎండు గడ్డితో కట్టించు — క్షణంలో మంటలు అంటుకునే వస్తువులతో. పాండవులను అక్కడికి విహారానికి పంపుదాం. ఒక రాత్రి నువ్వు ఆ ఇంటికి నిప్పు పెట్టాలి." తరువాత దుర్యోధనుడు తియ్యగా నవ్వుతూ, వారణావతంలో జరిగే ఉత్సవం చూసి రమ్మని పాండవులను, వారి తల్లి కుంతిని ఆహ్వానించాడు.',
      },
      {
        scene: { bg: 'palace', props: [['person', 100, 198, 1.4, { skin: 'wheat', cloth: '#f4ead2', beard: true, hair: '#ddd', raise: true }], ['person', 190, 198, 1.3, { skin: 'fair', cloth: '#f0c040' }], ['person', 260, 198, 1.3, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['person', 330, 198, 1.4, { skin: 'wheat', cloth: '#a8392a' }]] },
        en: 'But wise Uncle Vidura had found out the plan. As the Pāṇḍavas set out, he spoke to Yudhiṣṭhira in a secret language that only the two of them understood. "A fire can burn a whole forest, but it cannot harm the rat that hides in its hole. The one who knows the way through the dark stays safe." Yudhiṣṭhira understood. At Vāraṇāvata, Purocana welcomed them to their shining new house. Yudhiṣṭhira sniffed the walls. "Lac and ghee," he whispered to Bhīma. "Act as if nothing is wrong." Soon a quiet digger arrived, sent by Vidura. Night after night, he secretly dug a tunnel under the floor, leading out into the forest.',
        te: 'కానీ తెలివైన విదురుడికి ఈ పథకం తెలిసిపోయింది. పాండవులు బయలుదేరుతుండగా, ఆయన ధర్మరాజుతో వారిద్దరికి మాత్రమే అర్థమయ్యే రహస్య భాషలో మాట్లాడాడు. "అగ్ని అడవినంతా కాల్చేయగలదు, కానీ కలుగులో దాక్కున్న ఎలుకను ఏమీ చేయలేదు. చీకటిలో దారి తెలిసినవాడు క్షేమంగా ఉంటాడు." ధర్మరాజుకు అర్థమైంది. వారణావతంలో పురోచనుడు వారిని మెరిసిపోతున్న కొత్త ఇంట్లోకి ఆహ్వానించాడు. ధర్మరాజు గోడల వాసన చూశాడు. "లక్క, నెయ్యి," అని భీముడి చెవిలో గుసగుసలాడాడు. "ఏమీ తెలియనట్టే ఉందాం." త్వరలోనే విదురుడు పంపిన, సొరంగాలు తవ్వడంలో నేర్పరి అయిన ఒక వ్యక్తి వచ్చాడు. ప్రతి రాత్రీ అతను నేల కింద రహస్యంగా సొరంగం తవ్వాడు — అది అడవిలోకి దారి తీసింది.',
      },
      {
        scene: { bg: 'night', props: [['hut', 110, 198, 1], ['fire', 80, 198, 1.2], ['fire', 140, 198, 1.1], ['person', 240, 198, 1.6, { skin: 'wheat', cloth: '#a8392a', raise: true }], ['person', 290, 198, 1.2, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['boat', 355, 198, 0.8], ['moon', 330, 40, 0.9]] },
        en: 'For a whole year the Pāṇḍavas pretended to be happy guests, while they quietly learned every path in the forest. Then one dark night, they knew Purocana was ready to strike. So Bhīma set the house on fire first, and the family slipped into the tunnel. The house of lac burst into flames, and the wicked plan turned back on the man who made it. Kuntī was tired, so mighty Bhīma lifted his mother onto his shoulders, carried the twins on his hips, held his two brothers by the hand, and ran through the tunnel and the dark forest. At the river Gaṅgā, a boat sent by Vidura was waiting. Everyone in Hastināpura thought the Pāṇḍavas were gone — but they were safe.',
        te: 'ఒక సంవత్సరమంతా పాండవులు సంతోషంగా ఉన్న అతిథుల్లా నటించారు. ఈలోగా అడవిలోని ప్రతి దారినీ నిశ్శబ్దంగా తెలుసుకున్నారు. ఒక చీకటి రాత్రి, పురోచనుడు దాడికి సిద్ధంగా ఉన్నాడని వారికి అర్థమైంది. అందుకే భీముడే ముందుగా ఆ ఇంటికి నిప్పు పెట్టాడు, కుటుంబమంతా సొరంగంలోకి జారుకుంది. లక్క ఇల్లు భగ్గున మండిపోయింది — చెడ్డ పథకం దాన్ని వేసినవాడి మీదికే తిరిగింది. కుంతీదేవి అలసిపోయింది. బలవంతుడైన భీముడు తల్లిని భుజాల మీద ఎక్కించుకుని, కవలలైన నకుల సహదేవులను నడుము మీద ఎత్తుకుని, ఇద్దరు సోదరుల చేతులు పట్టుకుని సొరంగం గుండా, చీకటి అడవి గుండా పరుగెత్తాడు. గంగా నది ఒడ్డున విదురుడు పంపిన పడవ వారి కోసం ఎదురుచూస్తోంది. పాండవులు ఇక లేరని హస్తినాపురంలో అందరూ అనుకున్నారు — కానీ వారు క్షేమంగా ఉన్నారు.',
      },
    ],
  },
  {
    id: 'kaikeyis-two-boons',
    added: '2026-10-15',
    epic: 'Ramayana',
    chars: ['Kaikeyī', 'Mantharā', 'Daśaratha', 'Rāma'],
    title: { en: 'Kaikeyī\'s Two Boons and Mantharā\'s Whisper', te: 'కైకేయి రెండు వరాలు — మంథర చెప్పుడు మాటలు' },
    moral: { en: 'Do not let jealous whispers cloud a loving heart.', te: 'అసూయతో చెప్పే చెప్పుడు మాటలకు మంచి మనసును పాడుచేసుకోకూడదు.' },
    cover: { bg: 'palace', props: [['person', 140, 198, 1.2, { female: true, skin: 'wheat', cloth: '#7a6a5a', pallu: '#5a4a3a', hair: '#ddd', raise: true }], ['person', 220, 198, 1.4, { female: true, skin: 'fair', cloth: '#7a5ab0', pallu: '#f0c040' }], ['throne', 320, 196, 1]] },
    pages: [
      {
        scene: { bg: 'mountain', props: [['person', 110, 198, 1.3, { skin: 'fair', cloth: '#a8392a', crown: true }], ['chariot', 200, 198, 1.4], ['person', 280, 198, 1.3, { female: true, skin: 'fair', cloth: '#7a5ab0', pallu: '#f0c040', raise: true }], ['arrow', 330, 90, 1], ['cloud', 60, 40, 0.9]] },
        en: 'Long before Rāma was born, King Daśaratha went to help Indra in a great battle against the demon Śambara. His young queen Kaikeyī rode with him in the chariot. In the thick of the fight, the king was badly wounded and fainted. Brave Kaikeyī grabbed the reins herself, drove the chariot swiftly out of danger, and cared for him until he was well. It is said she even held a broken wheel in place with her own finger! When Daśaratha opened his eyes, he said, "You saved my life. Ask me for two boons — anything at all." Kaikeyī smiled. "Keep them for me, my king. I will ask some other day."',
        te: 'రాముడు పుట్టడానికి చాలా కాలం ముందు, దశరథ మహారాజు శంబరుడు అనే రాక్షసుడితో జరిగిన పెద్ద యుద్ధంలో ఇంద్రుడికి సహాయం చేయడానికి వెళ్ళాడు. ఆయన చిన్న రాణి కైకేయి కూడా ఆయనతో రథంలో వెళ్ళింది. యుద్ధం తీవ్రంగా జరుగుతుండగా రాజుకు పెద్ద గాయమై స్పృహ తప్పాడు. ధైర్యవంతురాలైన కైకేయి తానే కళ్ళాలు పట్టుకుని, రథాన్ని వేగంగా ప్రమాదం నుంచి బయటకు నడిపింది. ఆయన కోలుకునే వరకు సేవ చేసింది. విరిగిన చక్రం ఊడిపోకుండా తన వేలినే ఇరుసుకు అడ్డుగా పెట్టిందని కూడా చెబుతారు! దశరథుడు కళ్ళు తెరిచి, "నువ్వు నా ప్రాణాలు కాపాడావు. రెండు వరాలు కోరుకో — ఏదైనా సరే," అన్నాడు. కైకేయి చిరునవ్వు నవ్వింది. "అవి మీ దగ్గరే ఉంచండి మహారాజా. ఎప్పుడైనా అడుగుతాను."',
      },
      {
        scene: { bg: 'palace', props: [['person', 140, 198, 1.4, { female: true, skin: 'fair', cloth: '#7a5ab0', pallu: '#f0c040' }], ['person', 230, 198, 1.2, { female: true, skin: 'wheat', cloth: '#7a6a5a', pallu: '#5a4a3a', hair: '#ddd', raise: true }], ['crown', 305, 198, 0.7], ['flowers', 60, 198, 0.8]] },
        en: 'Many years later, Daśaratha announced, "Tomorrow Rāma will be crowned prince!" All Ayodhyā danced with joy. Kaikeyī loved Rāma like her own son, and she gave her maid Mantharā a precious ornament for bringing the good news. But Mantharā frowned. "Silly queen! Once Rāma is king, Kausalyā will be the great queen, and you and your son Bharata will live like servants." At first Kaikeyī laughed. But Mantharā kept whispering, one fear after another, until Kaikeyī\'s heart grew cloudy. "Remember the two boons," hissed Mantharā. "Ask for them now." So Kaikeyī threw off her jewels and lay on the floor of the anger-room, waiting for the king.',
        te: 'చాలా ఏళ్ళ తరువాత దశరథుడు ప్రకటించాడు, "రేపే రాముడికి యువరాజ పట్టాభిషేకం!" అయోధ్య అంతా ఆనందంతో నాట్యం చేసింది. కైకేయికి రాముడంటే సొంత కొడుకంత ప్రేమ. ఆ శుభవార్త తెచ్చినందుకు ఆమె తన దాసి మంథరకు ఒక విలువైన ఆభరణం బహుమతిగా ఇచ్చింది. కానీ మంథర ముఖం చిట్లించింది. "అమాయకపు రాణీ! రాముడు రాజైతే కౌసల్య పెద్ద రాణి అవుతుంది. నువ్వూ, నీ కొడుకు భరతుడూ వాళ్ళకు సేవకుల్లా బతకాలి." మొదట కైకేయి నవ్వేసింది. కానీ మంథర ఒక భయం తరువాత ఇంకో భయం చెవిలో ఊదుతూనే ఉంది. చివరకు కైకేయి మనసుకు మబ్బు పట్టింది. "ఆ రెండు వరాలు గుర్తు తెచ్చుకో," అని బుసకొట్టింది మంథర. "ఇప్పుడే అడుగు." కైకేయి తన నగలన్నీ విసిరేసి, కోపగృహంలో నేల మీద పడుకుని రాజు కోసం ఎదురుచూసింది.',
      },
      {
        scene: { bg: 'palace', props: [['person', 100, 198, 1.35, { skin: 'fair', cloth: '#a8392a', crown: true, beard: true, hair: '#ddd' }], ['person', 185, 198, 1.35, { female: true, skin: 'fair', cloth: '#7a5ab0', pallu: '#f0c040' }], ['person', 290, 198, 1.35, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['sun', 360, 45, 0.6]] },
        en: 'When Daśaratha found her, he begged, "Tell me what is wrong, my dear. I will do anything!" "Then give me my two boons," said Kaikeyī. "First, let Bharata be crowned king. Second, send Rāma to the forest for fourteen years." The old king sank to the ground as if struck by lightning. All night he pleaded, but Kaikeyī would not change her mind. In the morning Rāma came. When he heard the news, his face stayed as calm and bright as ever. "Mother, if this keeps my father\'s word, I will go gladly," he said, and he bowed to Kaikeyī too. That is how one jealous whisper changed the story of Ayodhyā.',
        te: 'దశరథుడు ఆమెను చూసి బతిమాలాడు, "ఏమైంది ప్రియా? చెప్పు, ఏదైనా చేస్తాను!" "అయితే నా రెండు వరాలు ఇవ్వండి," అంది కైకేయి. "మొదటిది, భరతుడికి పట్టాభిషేకం చేయాలి. రెండవది, రాముడు పద్నాలుగు సంవత్సరాలు అడవికి వెళ్ళాలి." ఆ మాటలు వినగానే ముసలి రాజు పిడుగు పడినట్టు నేల మీద కూలిపోయాడు. రాత్రంతా బతిమాలాడు, కానీ కైకేయి మనసు మారలేదు. ఉదయం రాముడు వచ్చాడు. విషయం విన్నా ఆయన ముఖం ఎప్పటిలాగే ప్రశాంతంగా, ప్రకాశంగా ఉంది. "అమ్మా, దీనివల్ల నాన్నగారి మాట నిలుస్తుందంటే, నేను సంతోషంగా వెళ్తాను," అని చెప్పి కైకేయికి కూడా నమస్కరించాడు. ఒక్క అసూయ నిండిన గుసగుస అయోధ్య కథనే ఇలా మార్చేసింది.',
      },
    ],
  },
  {
    id: 'bhima-and-bakasura',
    added: '2026-10-16',
    epic: 'Mahabharata',
    chars: ['Bhīma', 'Kuntī', 'Bakāsura'],
    title: { en: 'Bhīma and the Demon Bakāsura', te: 'భీముడు — బకాసురుడు' },
    moral: { en: 'Stand by those who sheltered you, even when it is hard.', te: 'మనకు ఆశ్రయం ఇచ్చిన వారికి కష్టకాలంలో అండగా నిలవాలి.' },
    cover: { bg: 'forest', props: [['cart', 110, 198, 1.1], ['person', 200, 198, 1.5, { skin: 'wheat', cloth: '#a8392a' }], ['demon', 310, 198, 1.2], ['sun', 360, 40, 0.7]] },
    pages: [
      {
        scene: { bg: 'village', props: [['person', 70, 198, 1.3, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['person', 170, 198, 1.2, { skin: 'wheat', cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['person', 215, 198, 1.1, { female: true, skin: 'wheat', cloth: '#7a5ab0', pallu: '#3a6ab0' }], ['person', 252, 198, 0.9, { female: true, skin: 'wheat', cloth: '#3a9a8a', pallu: '#f0c040' }], ['person', 285, 198, 0.65, { skin: 'wheat', cloth: '#f0c040', raise: true }]] },
        en: 'After escaping from the house of lac, the five Pāṇḍava brothers and their mother Kuntī hid in the little town of Ekacakrā. They dressed as poor brahmins and lived in the home of a kind brahmin family. Every day the brothers went from door to door asking for rice, and every evening Kuntī shared it out — half for big, hungry Bhīma, and half for everyone else! One afternoon, Kuntī heard loud sobbing from the next room. "I will go," the father was saying. "No, I will go," cried the mother. "Let me go instead," said their daughter. And their tiny son ran about waving a blade of grass. "Don\'t cry! I will hit the demon with this!"',
        te: 'లక్క ఇంటి నుండి తప్పించుకున్న తరువాత పాండవులు ఐదుగురూ, వారి తల్లి కుంతీదేవి ఏకచక్రపురం అనే చిన్న ఊరిలో రహస్యంగా ఉన్నారు. పేద బ్రాహ్మణుల్లా వేషం వేసుకుని, ఒక మంచి బ్రాహ్మణ కుటుంబం ఇంట్లో ఉంటున్నారు. రోజూ అన్నదమ్ములు ఇంటింటికీ వెళ్ళి భిక్ష తెచ్చేవారు. సాయంత్రం కుంతి ఆ అన్నాన్ని పంచేది — సగం ఆకలి ఎక్కువైన భీముడికి, మిగతా సగం అందరికీ! ఒక రోజు మధ్యాహ్నం పక్క గదిలోంచి గట్టిగా ఏడుపు వినిపించింది. "నేను వెళ్తాను," అంటున్నాడు ఆ ఇంటి యజమాని. "వద్దు, నేను వెళ్తాను," అని ఏడ్చింది ఆయన భార్య. "నన్ను పంపండి," అంది వాళ్ళ అమ్మాయి. వాళ్ళ చిన్న కొడుకు ఒక గడ్డిపోచను ఊపుతూ పరుగెత్తాడు. "ఏడవకండి! దీంతో ఆ రాక్షసుడిని కొడతాను!"',
      },
      {
        scene: { bg: 'village', props: [['person', 120, 198, 1.3, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['person', 200, 198, 1.2, { skin: 'wheat', cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['person', 290, 198, 1.5, { raise: true, skin: 'wheat', cloth: '#a8392a' }], ['mace', 320, 198, 1]] },
        en: 'Kuntī went in gently. "What is the matter? Perhaps I can help." The brahmin wiped his tears. "Near our town lives a terrible demon named Bakāsura. He leaves us in peace on one condition. By turns, each family must send him a cart piled high with rice and sweets, pulled by two buffaloes — and one person from the family, who never comes back. Today it is our turn." Kuntī thought for a moment, then smiled. "You have only one son. I have five. My son Bhīma will take the cart. He is very strong, and he will come home safe." When Bhīma heard this, his eyes shone. "A whole cart of food — all for me?"',
        te: 'కుంతి మెల్లగా లోపలికి వెళ్ళింది. "ఏమైంది? నేనేమైనా సహాయం చేయగలనేమో." బ్రాహ్మణుడు కన్నీళ్ళు తుడుచుకున్నాడు. "మా ఊరి దగ్గర బకాసురుడు అనే భయంకరమైన రాక్షసుడు ఉన్నాడు. ఒక షరతు మీదే వాడు మమ్మల్ని వదిలిపెడుతున్నాడు. వంతుల వారీగా ప్రతి కుటుంబం రెండు దున్నపోతులు కట్టిన బండి నిండా అన్నం, పిండివంటలు పంపాలి — దానితో పాటు ఇంటి నుండి ఒక మనిషిని కూడా. ఆ మనిషి మళ్ళీ తిరిగి రాడు. ఈ రోజు మా వంతు." కుంతి ఒక్క క్షణం ఆలోచించి చిరునవ్వు నవ్వింది. "మీకు ఒక్కడే కొడుకు. నాకు ఐదుగురు ఉన్నారు. నా కొడుకు భీముడు బండి తీసుకెళ్తాడు. వాడు చాలా బలవంతుడు, క్షేమంగా తిరిగి వస్తాడు." ఈ మాట వినగానే భీముడి కళ్ళు మెరిశాయి. "బండెడు అన్నం — అంతా నాకేనా?"',
      },
      {
        scene: { bg: 'forest', props: [['cart', 80, 198, 1], ['person', 175, 198, 1.5, { raise: true, skin: 'wheat', cloth: '#a8392a' }], ['demon', 290, 198, 1.3, { raise: true }], ['tree', 370, 198, 0.9], ['bird', 230, 60, 0.8], ['bird', 260, 45, 0.7]] },
        en: 'Bhīma drove the cart deep into the forest, right up to the demon\'s cave. He sat down, shouted, "Bakāsura! Your dinner is here!" — and began to eat it all himself. Rice, curds, sweets — handful after handful! Out stomped the demon, his eyes red with anger. "Who dares to eat MY food?" He thumped Bhīma hard on the back. Bhīma did not even turn around. He finished the last sweet, licked his fingers and stood up. "Now I am ready," he said. The two wrestled, and the earth shook. They pulled up trees and swung them like sticks. At last mighty Bhīma pinned the demon down, and Bakāsura never troubled anyone again. The whole town cheered, and Bhīma came home to his mother — with a very full tummy.',
        te: 'భీముడు బండిని అడవి లోపలికి, రాక్షసుడి గుహ దగ్గరకు తోలుకెళ్ళాడు. అక్కడ కూర్చుని, "బకాసురా! నీ భోజనం వచ్చింది!" అని గట్టిగా పిలిచి — తనే తినడం మొదలుపెట్టాడు. అన్నం, పెరుగు, పిండివంటలు — ముద్ద తరువాత ముద్ద! బకాసురుడు కోపంతో ఎర్రబడిన కళ్ళతో దబదబా అడుగులు వేస్తూ వచ్చాడు. "నా భోజనాన్ని తినే ధైర్యం ఎవడికి?" అంటూ భీముడి వీపు మీద గట్టిగా గుద్దాడు. భీముడు వెనక్కి తిరిగి కూడా చూడలేదు. చివరి లడ్డూ తిని, వేళ్ళు నాక్కుని లేచి నిలబడ్డాడు. "ఇప్పుడు నేను సిద్ధం," అన్నాడు. ఇద్దరూ కుస్తీ పట్టారు, భూమి దద్దరిల్లింది. చెట్లను పెకలించి కర్రల్లా ఝుళిపించారు. చివరకు బలశాలి భీముడు రాక్షసుడిని నేలకు అదిమిపట్టాడు. ఆ తరువాత బకాసురుడు మళ్ళీ ఎవరినీ బాధపెట్టలేదు. ఊరంతా సంబరాలు చేసుకుంది. భీముడు నిండిన పొట్టతో అమ్మ దగ్గరకు తిరిగి వచ్చాడు.',
      },
    ],
  },
  {
    id: 'guha-the-boatman',
    added: '2026-10-16',
    epic: 'Ramayana',
    chars: ['Guha', 'Rāma', 'Sītā', 'Lakṣmaṇa'],
    title: { en: 'Guha the Boatman', te: 'పడవ నడిపిన గుహుడు' },
    moral: { en: 'True friendship asks for nothing in return.', te: 'నిజమైన స్నేహం ప్రతిఫలం ఏమీ కోరదు.' },
    cover: { bg: 'river', props: [['boat', 200, 205, 1.3], ['person', 90, 198, 1.4, { skin: 'dark', cloth: '#4f7a3a', crown: true }], ['person', 300, 198, 1.4, { skin: 'blue', cloth: '#c9a26b', top: '#4a78b8' }], ['sun', 360, 40, 0.8], ['cloud', 70, 45, 0.9]] },
    pages: [
      {
        scene: { bg: 'river', props: [['chariot', 60, 198, 1.1], ['person', 145, 198, 1.4, { skin: 'blue', cloth: '#c9a26b', top: '#4a78b8' }], ['person', 190, 198, 1.3, { female: true, skin: 'fair', cloth: '#f0c040', pallu: '#c0392b' }], ['person', 270, 198, 1.4, { raise: true, skin: 'dark', cloth: '#4f7a3a', crown: true }], ['berries', 330, 198, 1], ['pot', 365, 198, 0.8]] },
        en: 'When Rāma left Ayodhyā to live in the forest for fourteen years, Sītā and Lakṣmaṇa went with him. Their charioteer Sumantra drove them to the banks of the holy river Gaṅgā, to a town called Śṛṅgaverapura. This was the home of Guha, king of the hunters and boatmen — and Rāma\'s dear friend. Guha came running with his people, carrying fruits, honey and sweet rice. "Rāma! My whole kingdom is yours. Stay here and be our king!" Rāma hugged him warmly. "Dear friend, your love is the greatest gift. But I have promised to live like a forest hermit. I cannot take a kingdom or a feast. Just give some grass and water to my father\'s tired horses."',
        te: 'పద్నాలుగు సంవత్సరాలు అడవిలో ఉండటానికి రాముడు అయోధ్యను విడిచినప్పుడు, సీతాదేవి, లక్ష్మణుడు కూడా ఆయనతో వెళ్ళారు. రథసారథి సుమంత్రుడు వారిని పవిత్రమైన గంగానది ఒడ్డున ఉన్న శృంగిబేరపురానికి తీసుకెళ్ళాడు. అది బోయలకు, పడవవాళ్ళకు రాజైన గుహుడి ఊరు. గుహుడు రాముడికి ప్రాణ స్నేహితుడు. గుహుడు తన వాళ్ళతో కలిసి పండ్లు, తేనె, తీపి అన్నం పట్టుకుని పరుగెత్తుకుంటూ వచ్చాడు. "రామా! నా రాజ్యమంతా నీదే. ఇక్కడే ఉండి మాకు రాజుగా ఉండు!" రాముడు అతన్ని ఆప్యాయంగా కౌగిలించుకున్నాడు. "మిత్రమా, నీ ప్రేమే నాకు అన్నిటికంటే గొప్ప కానుక. కానీ అడవిలో మునిలా బతుకుతానని మాట ఇచ్చాను. రాజ్యాన్ని గానీ, విందును గానీ తీసుకోలేను. అలసిపోయిన మా నాన్నగారి గుర్రాలకు కాస్త గడ్డి, నీళ్ళు ఇవ్వు, చాలు."',
      },
      {
        scene: { bg: 'night', props: [['tree', 70, 198, 1.1], ['fire', 220, 198, 1], ['person', 175, 198, 1.35, { skin: 'fair', cloth: '#c9a26b' }], ['bow', 150, 198, 0.9], ['person', 270, 198, 1.35, { skin: 'dark', cloth: '#4f7a3a', crown: true }], ['moon', 340, 45, 0.9]] },
        en: 'That night Rāma and Sītā slept on a bed of grass under a big tree. Lakṣmaṇa stood nearby with his bow, wide awake. Guha came to him. "Prince, please rest. My men and I will guard you all." Lakṣmaṇa shook his head. "How can I sleep, Guha, when my brother, a king\'s son, sleeps on the bare ground?" So Guha did not sleep either. All night the two sat by the fire, talking softly about Rāma — how gentle he was, and how all of Ayodhyā was weeping for him. The stars wheeled slowly across the sky, and the river whispered past. By morning, the hunter-king and the prince had become friends for life.',
        te: 'ఆ రాత్రి రాముడు, సీతాదేవి ఒక పెద్ద చెట్టు కింద గడ్డి పరుపు మీద నిద్రపోయారు. లక్ష్మణుడు విల్లు పట్టుకుని దగ్గరలోనే మెలకువగా నిలబడ్డాడు. గుహుడు అతని దగ్గరకు వచ్చాడు. "రాకుమారా, కాసేపు విశ్రాంతి తీసుకో. నేను, నా మనుషులు మిమ్మల్ని కాపాడుతాం." లక్ష్మణుడు వద్దని తల ఊపాడు. "గుహా, రాజకుమారుడైన మా అన్నయ్య నేల మీద పడుకుంటే నాకు నిద్ర ఎలా పడుతుంది?" అందుకని గుహుడు కూడా నిద్రపోలేదు. రాత్రంతా ఇద్దరూ మంట దగ్గర కూర్చుని రాముడి గురించి మెల్లగా మాట్లాడుకున్నారు — ఆయన ఎంత మంచివాడో, అయోధ్య అంతా ఆయన కోసం ఎలా ఏడుస్తోందో. ఆకాశంలో నక్షత్రాలు మెల్లగా కదిలాయి, నది గలగలా పారింది. తెల్లవారేసరికి బోయరాజు, రాకుమారుడు జీవితాంతం స్నేహితులయ్యారు.',
      },
      {
        scene: { bg: 'river', props: [['boat', 200, 205, 1.4], ['person', 175, 190, 1.1, { skin: 'blue', cloth: '#c9a26b', top: '#4a78b8' }], ['person', 215, 190, 1, { female: true, skin: 'fair', cloth: '#f0c040', pallu: '#c0392b' }], ['person', 80, 198, 1.4, { raise: true, skin: 'dark', cloth: '#4f7a3a', crown: true }], ['person', 330, 198, 1.2, { skin: 'fair', cloth: '#c9a26b' }], ['sun', 360, 40, 0.8]] },
        en: 'In the morning Rāma sent Sumantra back to Ayodhyā, and Guha brought his best boat. It is said that he folded his hands and grinned. "Lord, the dust of your feet once turned a stone into a lady. If my boat turns into a lady, how will I feed my family? Let me wash your feet first!" Rāma laughed and let him. Guha washed Rāma\'s feet with great love and rowed them across the Gaṅgā. On the far bank, Sītā slipped off her ring to give as the fare. Guha shook his head. "Mother, we are both boatmen. I carry people across this river. Rāma carries people across the river of life. When my turn comes, let him carry me across!"',
        te: 'తెల్లవారిన తరువాత రాముడు సుమంత్రుడిని అయోధ్యకు తిరిగి పంపాడు. గుహుడు తన దగ్గర ఉన్న మంచి పడవను తెచ్చాడు. అప్పుడు గుహుడు చేతులు జోడించి చిలిపిగా నవ్వాడని అంటారు. "స్వామీ, మీ పాదధూళి తగిలి ఒకసారి రాయి స్త్రీగా మారింది. నా పడవ కూడా స్త్రీగా మారిపోతే నా కుటుంబాన్ని ఎలా పోషించాలి? ముందు మీ కాళ్ళు కడగనివ్వండి!" రాముడు నవ్వి ఒప్పుకున్నాడు. గుహుడు ఎంతో భక్తితో రాముడి పాదాలు కడిగి, వారిని గంగానది దాటించాడు. ఆవలి ఒడ్డున సీతాదేవి పడవ కూలిగా ఇవ్వడానికి తన ఉంగరం తీసింది. గుహుడు వద్దని తల ఊపాడు. "అమ్మా, మేమిద్దరం పడవవాళ్ళమే. నేను ఈ నదిని దాటిస్తాను. రాముడు అందరినీ భవసాగరం దాటిస్తాడు. నా వంతు వచ్చినప్పుడు ఆయనే నన్ను దాటించాలి!"',
      },
    ],
  },
  {
    id: 'hidimba-and-ghatotkacha',
    added: '2026-10-16',
    epic: 'Mahabharata',
    chars: ['Hiḍimbā', 'Bhīma', 'Ghaṭotkaca', 'Kuntī'],
    title: { en: 'Hiḍimbā and Little Ghaṭotkaca', te: 'హిడింబి — బుజ్జి ఘటోత్కచుడు' },
    moral: { en: 'A true heart can turn a stranger into family.', te: 'నిజమైన మనసు పరాయివారిని కూడా మనవారిగా చేస్తుంది.' },
    cover: { bg: 'forest', props: [['person', 110, 198, 1.5, { skin: 'wheat', cloth: '#a8392a' }], ['person', 190, 198, 1.35, { female: true, skin: 'wheat', cloth: '#3a9a8a', pallu: '#f0c040' }], ['demon', 270, 198, 0.7, { color: '#7a5a9a', bald: true, raise: true }], ['tree', 360, 198, 1]] },
    pages: [
      {
        scene: { bg: 'night', props: [['tree', 60, 198, 1.2], ['person', 150, 198, 1.5, { skin: 'wheat', cloth: '#a8392a' }], ['mace', 180, 198, 1], ['person', 250, 198, 1.3, { female: true, skin: 'wheat', cloth: '#3a9a8a', pallu: '#f0c040', raise: true }], ['demon', 350, 198, 1, { color: '#4a4a7a' }], ['moon', 300, 45, 0.8]] },
        en: 'After their escape from the house of lac, the Pāṇḍavas and Kuntī walked all night through a dark forest. They grew so tired that strong Bhīma carried them all! At last they lay down under a tree and fell fast asleep — all except Bhīma, who kept watch. Not far away, on a tall tree, sat a rākṣasa named Hiḍimba. He sniffed the air. "Humans! Sister, go and bring them to me." His sister Hiḍimbā went. But when she saw Bhīma — tall, brave and handsome — her heart melted. She changed herself into a lovely young woman and whispered, "Run! My brother is coming. But I will protect you, for I wish to marry you."',
        te: 'లక్క ఇంటి నుండి తప్పించుకున్న తరువాత పాండవులు, కుంతీదేవి రాత్రంతా చీకటి అడవిలో నడిచారు. వాళ్ళు ఎంతగా అలసిపోయారంటే, బలవంతుడైన భీముడు అందరినీ మోసుకుని నడిచాడు! చివరకు అందరూ ఒక చెట్టు కింద పడుకుని గాఢంగా నిద్రపోయారు — భీముడు తప్ప. అతను కాపలా కాస్తున్నాడు. దగ్గరలోనే ఒక ఎత్తైన చెట్టు మీద హిడింబుడు అనే రాక్షసుడు కూర్చుని ఉన్నాడు. వాడు గాలిని వాసన చూశాడు. "మనుషులు! చెల్లీ, వెళ్ళి వాళ్ళను నా దగ్గరకు తీసుకురా." వాడి చెల్లెలు హిడింబి వెళ్ళింది. కానీ పొడవుగా, ధైర్యంగా, అందంగా ఉన్న భీముడిని చూడగానే ఆమె మనసు కరిగిపోయింది. ఆమె అందమైన యువతిగా రూపం మార్చుకుని మెల్లగా చెప్పింది, "పారిపో! మా అన్నయ్య వస్తున్నాడు. కానీ నేను నిన్ను కాపాడుతాను, ఎందుకంటే నిన్ను పెళ్ళి చేసుకోవాలని ఉంది."',
      },
      {
        scene: { bg: 'forest', props: [['person', 150, 198, 1.5, { raise: true, skin: 'wheat', cloth: '#a8392a' }], ['demon', 250, 198, 1.3, { color: '#4a4a7a', raise: true }], ['tree', 360, 198, 1], ['bird', 90, 60, 0.8], ['bird', 120, 45, 0.7], ['bird', 320, 50, 0.7]] },
        en: 'Bhīma smiled. "Run? And leave my mother and brothers asleep? Never!" Just then Hiḍimba came crashing through the trees, roaring with rage. "Sister, how dare you help a human!" Bhīma stepped forward. "Shh! Do not wake my family. If you want to fight, fight me — over there." And he dragged the demon far away from the sleeping Pāṇḍavas. The two wrestled like two mountains bumping together. Trees cracked, and birds flew squawking into the sky. The noise woke Kuntī and the brothers. "Finish it quickly, Bhīma!" called Arjuna. With one mighty heave, Bhīma overcame the demon, and Hiḍimba never frightened anyone again.',
        te: 'భీముడు చిరునవ్వు నవ్వాడు. "పారిపోవాలా? నిద్రపోతున్న మా అమ్మను, అన్నదమ్ములను వదిలేసి? ఎన్నటికీ కాదు!" అంతలోనే హిడింబుడు చెట్లను విరగ్గొట్టుకుంటూ, కోపంతో గర్జిస్తూ వచ్చాడు. "చెల్లీ, ఒక మనిషికి సహాయం చేసే ధైర్యమా నీకు!" భీముడు ముందుకు వచ్చాడు. "ష్! మా వాళ్ళను లేపకు. యుద్ధం కావాలంటే నాతో చెయ్యి — అక్కడ." అంటూ ఆ రాక్షసుడిని నిద్రపోతున్న పాండవులకు దూరంగా లాక్కెళ్ళాడు. రెండు కొండలు ఢీకొన్నట్టు ఇద్దరూ కుస్తీ పట్టారు. చెట్లు విరిగిపడ్డాయి, పక్షులు అరుస్తూ ఆకాశంలోకి ఎగిరిపోయాయి. ఆ శబ్దానికి కుంతి, అన్నదమ్ములు నిద్ర లేచారు. "త్వరగా ముగించు భీమా!" అని అరిచాడు అర్జునుడు. ఒక్క ఊపుతో భీముడు ఆ రాక్షసుడిని ఓడించాడు. ఆ తరువాత హిడింబుడు ఇంకెవరినీ భయపెట్టలేదు.',
      },
      {
        scene: { bg: 'mountain', props: [['person', 80, 198, 1.3, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['person', 150, 198, 1.5, { skin: 'wheat', cloth: '#a8392a' }], ['person', 215, 198, 1.35, { female: true, skin: 'wheat', cloth: '#3a9a8a', pallu: '#f0c040' }], ['demon', 300, 198, 0.95, { color: '#7a5a9a', bald: true, raise: true }], ['sun', 360, 40, 0.8]] },
        en: 'Hiḍimbā fell at Kuntī\'s feet. "Mother, I love your son. Please let me marry him." Kuntī saw that her heart was true. Yudhiṣṭhira agreed, with one promise: "Bhīma will be with you through the day and come back to us each night, until you have a child." So Bhīma and Hiḍimbā were married, and they roamed the forests and mountains together. Soon a baby boy was born. Rākṣasa children grow fast, and in no time he was a strong young lad with a round, shiny head like a pot — so they named him Ghaṭotkaca. He bowed to his father and grandmother. "Whenever you need me, just think of me, and I will come!" And many times, he did.',
        te: 'హిడింబి కుంతీదేవి పాదాల మీద పడింది. "అమ్మా, నేను మీ అబ్బాయిని ప్రేమిస్తున్నాను. అతన్ని పెళ్ళి చేసుకోనివ్వండి." ఆమె మనసు నిజమైనదని కుంతి గ్రహించింది. ధర్మరాజు ఒక షరతుతో ఒప్పుకున్నాడు: "పగలంతా భీముడు నీతో ఉంటాడు, ప్రతి రాత్రి మా దగ్గరకు తిరిగి వస్తాడు — మీకు బిడ్డ పుట్టే వరకు." అలా భీముడికి, హిడింబికి పెళ్ళి జరిగింది. ఇద్దరూ కలిసి అడవుల్లో, కొండల్లో తిరిగారు. కొన్నాళ్ళకు వాళ్ళకు ఒక మగబిడ్డ పుట్టాడు. రాక్షస పిల్లలు త్వరగా పెరుగుతారు. చూస్తుండగానే వాడు బలమైన యువకుడయ్యాడు. వాడి తల కుండలా గుండ్రంగా, నున్నగా మెరుస్తూ ఉండేది — అందుకే వాడికి ఘటోత్కచుడు అని పేరు పెట్టారు. వాడు తండ్రికి, నాయనమ్మకు నమస్కరించాడు. "మీకు ఎప్పుడు అవసరమైనా నన్ను తలుచుకోండి, వెంటనే వస్తాను!" అన్నట్టుగానే ఎన్నోసార్లు వచ్చి సహాయం చేశాడు.',
      },
    ],
  },
  {
    id: 'the-golden-deer',
    added: '2026-10-17',
    epic: 'Ramayana',
    chars: ['Mārīca', 'Rāvaṇa', 'Rāma', 'Sītā', 'Lakṣmaṇa'],
    title: { en: 'The Golden Deer — Mārīca\'s Trick', te: 'బంగారు లేడి — మారీచుడి మాయ' },
    moral: { en: 'Not everything that glitters is what it seems.', te: 'మెరిసేదంతా బంగారం కాదు.' },
    cover: { bg: 'forest', props: [['hut', 330, 196, 0.9], ['deer', 200, 192, 1.6], ['person', 80, 198, 1.3, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040', raise: true }], ['sun', 360, 45, 0.8], ['cloud', 160, 45, 0.9]] },
    pages: [
      {
        scene: { bg: 'shore', props: [['chariot', 80, 150, 1.2], ['demon', 170, 198, 1.2, { raise: true }], ['demon', 290, 198, 1, { color: '#5a7a5a', bald: true, flip: true }], ['palm', 365, 198, 1]] },
        en: 'Rāvaṇa, the ten-headed king of Laṅkā, was burning with anger. In the forest, Rāma and Lakṣmaṇa had defeated his demon army, and he wanted revenge. So he flew in his chariot to the hermitage of Mārīca, a demon who could take any shape he liked. Years before, one of Rāma\'s arrows had flung Mārīca far out into the sea, and he had never forgotten it. "Rāma is like fire," Mārīca warned. "Do not go near him!" But Rāvaṇa roared, "Help me, or I will punish you myself!" Mārīca sighed. "Either way, trouble finds me," he said, and he agreed.',
        te: 'పది తలల లంకాధిపతి రావణుడు కోపంతో రగిలిపోతున్నాడు. అడవిలో రామలక్ష్మణులు అతని రాక్షస సైన్యాన్ని ఓడించారు. ఎలాగైనా పగ తీర్చుకోవాలనుకున్నాడు. అందుకే తన రథంలో ఎగురుకుంటూ మారీచుడి ఆశ్రమానికి వెళ్ళాడు. మారీచుడు ఏ రూపమైనా ధరించగల రాక్షసుడు. చాలా ఏళ్ళ క్రితం రాముడి బాణం ఒకటి అతన్ని దూరంగా సముద్రంలోకి విసిరేసింది. ఆ సంగతి అతను ఎప్పుడూ మర్చిపోలేదు. "రాముడు నిప్పు లాంటివాడు," అని మారీచుడు హెచ్చరించాడు. "ఆయన జోలికి వెళ్ళకు!" కానీ రావణుడు గర్జించాడు, "నాకు సాయం చెయ్యి, లేకపోతే నేనే నిన్ను శిక్షిస్తాను!" మారీచుడు నిట్టూర్చాడు. "ఎటు చూసినా నాకు కష్టమే," అనుకుని ఒప్పుకున్నాడు.',
      },
      {
        scene: { bg: 'forest', props: [['hut', 345, 196, 0.85], ['person', 55, 198, 1.3, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040', raise: true }], ['person', 110, 198, 1.35, { skin: 'blue', cloth: '#f0c040' }], ['person', 160, 198, 1.25, { skin: 'fair', cloth: '#e0703a' }], ['flowers', 215, 198, 0.9], ['deer', 270, 196, 1.3]] },
        en: 'Next morning, near the little hut at Pañcavaṭī, a wonderful deer appeared. Its skin shone like gold, it had silver spots, and its antlers sparkled like jewels. It nibbled flowers and skipped about, coming close and then dashing away. "Oh, how beautiful!" cried Sītā. "My lord, please catch it for me!" Lakṣmaṇa frowned. "Brother, no real deer looks like that. I think it is the demon Mārīca playing a trick." Rāma smiled. "If it is a deer, Sītā shall have it. If it is Mārīca, he deserves my arrow. Lakṣmaṇa, stay here and guard Sītā. Do not leave her alone." Then he took his bow and followed the deer.',
        te: 'మరుసటి రోజు ఉదయం, పంచవటిలోని చిన్న పర్ణశాల దగ్గర ఒక అద్భుతమైన లేడి కనిపించింది. దాని ఒళ్ళు బంగారంలా మెరుస్తోంది, ఒంటి మీద వెండి చుక్కలు ఉన్నాయి, కొమ్ములు రత్నాల్లా తళతళలాడుతున్నాయి. అది పూలు తింటూ గెంతుతూ, దగ్గరికి వచ్చి మళ్ళీ దూరంగా పరుగెత్తుతోంది. "అబ్బ, ఎంత అందంగా ఉందో!" అంది సీతాదేవి. "స్వామీ, దయచేసి దాన్ని నాకు పట్టి తెండి!" లక్ష్మణుడు కనుబొమలు ముడిచాడు. "అన్నయ్యా, నిజమైన లేడి ఇలా ఉండదు. ఇది మారీచుడి మాయ అనిపిస్తోంది." రాముడు చిరునవ్వు నవ్వాడు. "నిజంగా లేడి అయితే సీతకు తెచ్చిస్తాను. మారీచుడైతే నా బాణానికి తగినవాడే. లక్ష్మణా, నువ్వు ఇక్కడే ఉండి సీతను కాపాడు. ఆమెను ఒంటరిగా వదలకు." అని చెప్పి విల్లు పట్టుకుని లేడి వెంట వెళ్ళాడు.',
      },
      {
        scene: { bg: 'forest', props: [['tree', 30, 198, 0.9], ['archer', 100, 198, 1.4, { skin: 'blue', cloth: '#f0c040' }], ['arrow', 210, 168, 1], ['deer', 300, 196, 1.2, { flip: true }], ['tree', 370, 198, 1]] },
        en: 'The golden deer ran deeper and deeper into the forest. Sometimes it vanished, sometimes it peeped out from behind a tree. Rāma chased it far, far away from the hut. At last he knew that Lakṣmaṇa was right. He fitted an arrow to his bow and let it fly. The arrow struck, and the deer fell — and turned back into the demon Mārīca. But Mārīca had one last trick. With his final breath he cried out in Rāma\'s own voice: "Hā Sītā! Hā Lakṣmaṇa!" The cry rang through the forest, all the way to the hut. Rāma\'s heart grew heavy. "This was a plan to draw us away," he thought, and he hurried back as fast as he could.',
        te: 'బంగారు లేడి అడవిలోకి ఇంకా ఇంకా లోపలికి పరుగెత్తింది. ఒకసారి మాయమైపోయేది, మరోసారి చెట్టు చాటు నుంచి తొంగి చూసేది. రాముడు దాని వెంట పడి పర్ణశాలకు చాలా దూరం వెళ్ళిపోయాడు. చివరకు లక్ష్మణుడు చెప్పిందే నిజమని ఆయనకు అర్థమైంది. విల్లుకు బాణం సంధించి వదిలాడు. బాణం తగలగానే లేడి కింద పడి, మళ్ళీ మారీచుడిగా మారిపోయింది. కానీ మారీచుడి దగ్గర ఇంకో మాయ మిగిలి ఉంది. చివరి ఊపిరితో అతను అచ్చం రాముడి గొంతుతో అరిచాడు: "హా సీతా! హా లక్ష్మణా!" ఆ అరుపు అడవంతా మారుమోగి పర్ణశాల వరకు వినిపించింది. రాముడి మనసు బరువెక్కింది. "మమ్మల్ని దూరం చేయడానికే ఈ పన్నాగం," అనుకుని వీలైనంత వేగంగా వెనక్కి పరుగెత్తాడు.',
      },
    ],
  },
  {
    id: 'arjuna-wins-draupadi',
    added: '2026-10-17',
    epic: 'Mahabharata',
    chars: ['Arjuna', 'Draupadī', 'Drupada', 'Bhīma', 'Kṛṣṇa', 'Kuntī'],
    title: { en: 'Arjuna Wins Draupadī — the Fish Target', te: 'మత్స్య యంత్రం — ద్రౌపదీ స్వయంవరం' },
    moral: { en: 'Quiet skill and patience win where boasting fails.', te: 'గొప్పలు కాదు — ఓర్పుతో నేర్చిన విద్యే గెలిపిస్తుంది.' },
    cover: { bg: 'court', props: [['archer', 130, 198, 1.5, { cloth: '#f4ead2' }], ['fishWheel', 270, 198, 1.4], ['person', 355, 198, 1.25, { female: true, skin: 'dark', cloth: '#c0392b', pallu: '#f0c040' }]] },
    pages: [
      {
        scene: { bg: 'court', props: [['person', 70, 198, 1.35, { crown: true, beard: true, hair: '#ddd', cloth: '#a83a3a' }], ['person', 135, 198, 1.25, { female: true, skin: 'dark', cloth: '#c0392b', pallu: '#f0c040' }], ['fishWheel', 255, 198, 1.3], ['bow', 335, 198, 1.1]] },
        en: 'After escaping the house of lac, the five Pāṇḍavas lived quietly, dressed as poor brāhmaṇas, so that no one would know they were alive. One day they heard exciting news. King Drupada of Pāñcāla was holding a svayaṃvara for his daughter, Princess Draupadī — a ceremony where she would choose her own husband. Drupada secretly hoped Arjuna would win her. So he set a test that only a perfect archer could pass. A great, heavy bow lay ready. High above, a wooden fish turned round and round behind a spinning wheel. "Whoever strings this bow and strikes the fish with five arrows," the herald announced, "will marry the princess!"',
        te: 'లక్క ఇంటి నుంచి తప్పించుకున్న తరువాత పాండవులు ఐదుగురూ పేద బ్రాహ్మణుల వేషంలో రహస్యంగా బతుకుతున్నారు. తాము బతికే ఉన్నామని ఎవరికీ తెలియకూడదు. ఒక రోజు వాళ్ళకు ఒక విశేషం తెలిసింది. పాంచాల దేశపు రాజు ద్రుపదుడు తన కూతురు ద్రౌపదికి స్వయంవరం ఏర్పాటు చేశాడు — అంటే రాకుమారి తనకు నచ్చిన వరుడిని తానే ఎంచుకుంటుంది. అర్జునుడే తన అల్లుడు కావాలని ద్రుపదుడు మనసులో కోరుకున్నాడు. అందుకే గొప్ప విలుకాడు మాత్రమే గెలవగలిగే పరీక్ష పెట్టాడు. అక్కడ చాలా బరువైన విల్లు సిద్ధంగా ఉంది. పైన ఎత్తులో, తిరిగే చక్రం వెనక ఒక చెక్క చేప గిరగిరా తిరుగుతోంది. "ఈ విల్లు ఎక్కుపెట్టి, ఐదు బాణాలతో ఆ చేపను కొట్టినవారే రాకుమారిని పెళ్ళాడతారు!" అని చాటింపు వేశారు.',
      },
      {
        scene: { bg: 'court', props: [['person', 55, 198, 1.1, { crown: true, cloth: '#7a5ab0' }], ['person', 100, 198, 1.1, { crown: true, cloth: '#4f7a3a' }], ['archer', 190, 198, 1.4, { cloth: '#f4ead2' }], ['fishWheel', 310, 198, 1.3]] },
        en: 'Kings and princes came from far and wide. One by one, they tried to lift the bow. Some could not even move it! Others bent it a little, and it sprang back and knocked them over, while the crowd laughed. Even mighty Karṇa stepped forward, but in the end the fish was not his to win. At last a young brāhmaṇa rose from among the priests. People whispered, "If great kings have failed, what can a priest do?" It was Arjuna in disguise. He bowed to the bow, lifted it easily and strung it in a flash. Then, it is said, he looked down — not up — into the pool of water below, where the spinning fish was reflected.',
        te: 'దూరదూరాల నుంచి రాజులు, రాకుమారులు వచ్చారు. ఒక్కొక్కరుగా విల్లు ఎత్తడానికి ప్రయత్నించారు. కొందరు దాన్ని కదపనైనా కదపలేకపోయారు! మరికొందరు కొంచెం వంచగానే అది ఎగిరి వాళ్ళనే కింద పడేసింది. సభలో అందరూ నవ్వారు. మహావీరుడైన కర్ణుడు కూడా ముందుకు వచ్చాడు, కానీ ఆ చేప అతనికి దక్కలేదు. చివరకు బ్రాహ్మణుల మధ్య నుంచి ఒక యువకుడు లేచాడు. "గొప్ప గొప్ప రాజులే ఓడిపోయారు, ఈ బ్రాహ్మణుడు ఏం చేస్తాడు?" అని జనం గుసగుసలాడారు. అతను మారువేషంలో ఉన్న అర్జునుడు! విల్లుకు నమస్కరించి, సులభంగా ఎత్తి, క్షణంలో నారి కట్టాడు. తరువాత అతను పైకి కాదు — కిందకు చూశాడని అంటారు. కింద నీటి కొలనులో తిరుగుతున్న చేప నీడ కనిపిస్తోంది.',
      },
      {
        scene: { bg: 'court', props: [['archer', 100, 198, 1.4, { cloth: '#f4ead2' }], ['person', 185, 198, 1.25, { female: true, skin: 'dark', cloth: '#c0392b', pallu: '#f0c040' }], ['arrow', 250, 72, 1], ['fishWheel', 310, 198, 1.3]] },
        en: 'Arjuna kept his eyes on the reflection. The wheel turned, the fish turned, the water rippled. He waited… and waited… Then — twang! — five arrows flew up through the spinning wheel, one after another, and struck the fish. The hall burst into cheers! Draupadī smiled and placed her garland of flowers around Arjuna\'s neck. Some angry kings rushed forward, but Bhīma pulled up a whole tree to guard his brother, and they soon backed away. In the crowd, Kṛṣṇa smiled; he knew exactly who those \'brāhmaṇas\' were. That evening the brothers reached home. "Mother, see what we have brought today!" they called — and Kuntī welcomed Draupadī as her own dear daughter.',
        te: 'అర్జునుడు చూపు నీటిలోని నీడ మీదే నిలిపాడు. చక్రం తిరుగుతోంది, చేప తిరుగుతోంది, నీళ్ళు అలలు అలలుగా కదులుతున్నాయి. అతను ఓపికగా ఎదురుచూశాడు... ఆగాడు... అంతే — ఝుం! — ఐదు బాణాలు ఒకదాని వెంట ఒకటి తిరిగే చక్రం గుండా పైకి దూసుకెళ్ళి చేపకు తగిలాయి. సభంతా జయజయధ్వానాలతో మారుమోగింది! ద్రౌపది చిరునవ్వుతో పూలమాలను అర్జునుడి మెడలో వేసింది. కోపంతో కొందరు రాజులు మీదికి వచ్చారు, కానీ భీముడు ఒక చెట్టునే పెకలించి తమ్ముడికి అండగా నిలిచాడు. వాళ్ళు వెంటనే వెనక్కి తగ్గారు. జనం మధ్య ఉన్న శ్రీకృష్ణుడు చిరునవ్వు నవ్వాడు — ఆ \'బ్రాహ్మణులు\' ఎవరో ఆయనకు బాగా తెలుసు. ఆ సాయంత్రం సోదరులు ఇంటికి చేరి, "అమ్మా, ఈ రోజు మేము ఏం తెచ్చామో చూడు!" అని పిలిచారు. కుంతీదేవి ద్రౌపదిని తన సొంత కూతురిలా ప్రేమగా దగ్గరకు తీసుకుంది.',
      },
    ],
  },
  {
    id: 'lakshmanas-line',
    added: '2026-10-17',
    epic: 'Ramayana',
    chars: ['Lakṣmaṇa', 'Sītā', 'Rāvaṇa'],
    title: { en: 'Lakṣmaṇa\'s Line', te: 'లక్ష్మణ రేఖ' },
    moral: { en: 'Wise limits keep us safe — think twice before you cross them.', te: 'పెద్దలు గీసిన హద్దులు మనల్ని కాపాడతాయి — దాటే ముందు ఆలోచించాలి.' },
    cover: { bg: 'forest', props: [['hut', 200, 178, 1], ['rekha', 200, 196, 1.7], ['person', 252, 190, 1.15, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['archer', 110, 198, 1.3, { skin: 'fair', cloth: '#e0703a' }], ['sun', 360, 45, 0.8]] },
    pages: [
      {
        scene: { bg: 'forest', props: [['tree', 40, 198, 1], ['archer', 130, 198, 1.35, { skin: 'fair', cloth: '#e0703a' }], ['person', 220, 198, 1.3, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040', raise: true }], ['hut', 310, 196, 1]] },
        en: 'At the little hut, Sītā and Lakṣmaṇa heard a terrible cry from deep in the forest: "Hā Sītā! Hā Lakṣmaṇa!" It sounded just like Rāma. Sītā turned pale. "Lakṣmaṇa, your brother is in danger! Run and help him!" But Lakṣmaṇa stayed calm. "Mother, no one in the three worlds can harm Rāma. This is a demon\'s trick. Brother told me to guard you, and I will not leave." Sītā was so frightened that she spoke sharp, unkind words, saying he did not truly care for Rāma. Lakṣmaṇa\'s eyes filled with tears, for he loved Rāma more than his own life. "I will go," he said softly, "but first, listen carefully."',
        te: 'పర్ణశాలలో ఉన్న సీతాదేవికి, లక్ష్మణుడికి అడవి లోపలి నుంచి ఒక భయంకరమైన అరుపు వినిపించింది: "హా సీతా! హా లక్ష్మణా!" అది అచ్చం రాముడి గొంతులాగే ఉంది. సీతాదేవి ముఖం పాలిపోయింది. "లక్ష్మణా, మీ అన్నయ్య ఆపదలో ఉన్నారు! వెంటనే వెళ్ళి కాపాడు!" కానీ లక్ష్మణుడు నిబ్బరంగా ఉన్నాడు. "అమ్మా, ముల్లోకాల్లో ఎవరూ రాముడికి హాని చేయలేరు. ఇది ఏదో రాక్షస మాయ. మిమ్మల్ని కాపాడమని అన్నయ్య చెప్పారు. నేను మిమ్మల్ని వదిలి వెళ్ళను." భయంతో సీతాదేవి కటువైన మాటలు అంది — అతనికి రాముడి మీద నిజమైన ప్రేమ లేదంది. లక్ష్మణుడి కళ్ళలో నీళ్ళు తిరిగాయి. అతనికి తన ప్రాణం కంటే అన్నయ్యే ఎక్కువ. "వెళ్తాను అమ్మా," అన్నాడు మెల్లగా, "కానీ ముందు నేను చెప్పేది జాగ్రత్తగా వినండి."',
      },
      {
        scene: { bg: 'forest', props: [['archer', 45, 198, 1.1, { skin: 'fair', cloth: '#e0703a', flip: true }], ['hut', 195, 178, 1], ['rekha', 195, 196, 1.7], ['person', 248, 190, 1.15, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['person', 340, 198, 1.3, { cloth: '#e08a3a', beard: true, hair: '#ddd' }], ['pot', 372, 198, 0.6]] },
        en: 'It is said that Lakṣmaṇa took the tip of his arrow and drew a line on the ground all around the hut. He said a prayer, and the line glowed softly. "Mother, stay inside this line," he said. "As long as you are inside, no demon can touch you. Please do not step across it, for anyone." Then he bowed to Sītā and ran into the forest to find Rāma. Soon after, an old holy man came walking up to the hut, with a water pot in his hand. "Bhikṣām dehi! Alms, please, good lady!" he called. But this was no holy man. It was Rāvaṇa in disguise.',
        te: 'అప్పుడు లక్ష్మణుడు తన బాణం కొనతో పర్ణశాల చుట్టూ నేల మీద ఒక గీత గీశాడని అంటారు. ఒక మంత్రం చదవగానే ఆ గీత మెల్లగా వెలిగింది. "అమ్మా, ఈ గీత లోపలే ఉండండి," అన్నాడు. "మీరు లోపల ఉన్నంత వరకు ఏ రాక్షసుడూ మిమ్మల్ని తాకలేడు. ఎవరి కోసమైనా సరే, దయచేసి దీన్ని దాటకండి." తరువాత సీతాదేవికి నమస్కరించి రాముడిని వెతుక్కుంటూ అడవిలోకి పరుగెత్తాడు. కాసేపటికి ఒక ముసలి సన్యాసి చేతిలో కమండలంతో పర్ణశాల దగ్గరకు వచ్చాడు. "భవతి భిక్షాం దేహి! అమ్మా, భిక్ష వేయండి!" అని పిలిచాడు. కానీ అతను నిజమైన సన్యాసి కాదు. మారువేషంలో వచ్చిన రావణుడు!',
      },
      {
        scene: { bg: 'forest', props: [['hut', 90, 178, 1], ['rekha', 110, 196, 1.5], ['person', 140, 192, 1.15, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040' }], ['fire', 210, 198, 1], ['demon', 300, 198, 1.3, { raise: true, flip: true }]] },
        en: 'Rāvaṇa stepped towards the hut, but the moment his foot touched the glowing line, flames leapt up and he sprang back! "Come out, lady," he said sweetly. "I am old and tired. Will you send a hungry guest away?" Sītā hesitated. In those days, turning away a guest was thought a great wrong. Holding fruits in her hands, she stepped across the line to give him food. At once the holy man vanished, and there stood Rāvaṇa, the ten-headed king! He seized Sītā, lifted her into his flying chariot and rose into the sky. "Rāma! Lakṣmaṇa!" she cried. Far below, a brave old bird heard her call — and that is the story of Jaṭāyu.',
        te: 'రావణుడు పర్ణశాల వైపు అడుగు వేశాడు. కానీ అతని కాలు ఆ వెలిగే గీతను తాకగానే మంటలు ఎగిసిపడ్డాయి. అతను ఉలిక్కిపడి వెనక్కి దూకాడు! "అమ్మా, బయటకు రా," అన్నాడు తియ్యగా. "నేను ముసలివాడిని, అలసిపోయాను. ఆకలితో వచ్చిన అతిథిని ఉత్తచేతులతో పంపుతావా?" సీతాదేవి సంకోచించింది. ఆ రోజుల్లో అతిథిని వెనక్కి పంపడం పెద్ద తప్పుగా భావించేవారు. చేతుల్లో పండ్లు పట్టుకుని ఆమె గీత దాటి బయటకు అడుగు పెట్టింది. వెంటనే సన్యాసి మాయమయ్యాడు — అక్కడ పది తలల రావణుడు నిలబడ్డాడు! అతను సీతాదేవిని పట్టుకుని తన ఎగిరే రథంలో ఎక్కించుకుని ఆకాశంలోకి ఎగిరిపోయాడు. "రామా! లక్ష్మణా!" అని ఆమె కేకలు వేసింది. కింద ఒక ముసలి పక్షిరాజు ఆమె పిలుపు విన్నాడు — అదే జటాయువు కథ.',
      },
    ],
  },
  {
    id: 'draupadi-born-from-the-fire',
    added: '2026-10-18',
    epic: 'Mahabharata',
    chars: ['Draupadī', 'Drupada', 'Dhṛṣṭadyumna', 'Droṇa'],
    title: { en: 'Draupadī Is Born from the Fire', te: 'అగ్ని నుంచి పుట్టిన ద్రౌపది' },
    moral: { en: 'Keep the promises you make to your friends.', te: 'స్నేహితులకు ఇచ్చిన మాటను ఎప్పుడూ నిలబెట్టుకోవాలి.' },
    cover: { bg: 'ashram', props: [['person', 200, 182, 1.3, { female: true, skin: 'dark', cloth: '#c0392b', pallu: '#f0c040' }], ['fire', 200, 200, 1.7], ['lotus', 110, 202, 0.9], ['lotus', 60, 204, 0.7], ['cloud', 90, 45, 0.9], ['sun', 360, 45, 0.7]] },
    pages: [
      {
        scene: { bg: 'court', props: [['throne', 120, 196, 1.2], ['person', 120, 192, 1.2, { skin: 'fair', cloth: '#3a6ab0', crown: true, raise: true }], ['person', 290, 198, 1.3, { cloth: '#f4ead2', flip: true }]] },
        en: 'Long ago, two boys studied together in the same āśrama — Prince Drupada of Pāñcāla and a poor brāhmaṇa boy named Droṇa. They were the best of friends. "When I become king," Drupada promised, "half my kingdom will be yours!" Years passed. Drupada became king, and Droṇa grew up very poor. One day Droṇa came to the palace to meet his old friend. But Drupada laughed at him. "How can a king be friends with a beggar?" Droṇa went away, deeply hurt. Later he became the teacher of the Kuru princes. As his fee, he asked them to bring Drupada to him. Arjuna defeated Drupada and brought him. Droṇa kept half the kingdom and gave the other half back. "Now we are equals," he said. But Drupada\'s pride still burned.',
        te: 'చాలా కాలం క్రితం, ఇద్దరు పిల్లలు ఒకే ఆశ్రమంలో కలిసి చదువుకున్నారు — పాంచాల రాకుమారుడు ద్రుపదుడు, పేద బ్రాహ్మణ బాలుడు ద్రోణుడు. వాళ్ళిద్దరూ ప్రాణ స్నేహితులు. "నేను రాజునయ్యాక నా రాజ్యంలో సగం నీదే!" అని ద్రుపదుడు మాట ఇచ్చాడు. ఏళ్ళు గడిచాయి. ద్రుపదుడు రాజయ్యాడు, ద్రోణుడు చాలా పేదరికంలో పెరిగాడు. ఒక రోజు ద్రోణుడు తన పాత స్నేహితుడిని చూడటానికి రాజభవనానికి వచ్చాడు. కానీ ద్రుపదుడు నవ్వాడు. "రాజుకీ, బిచ్చగాడికీ స్నేహం ఎలా కుదురుతుంది?" ద్రోణుడు ఎంతో బాధపడి వెళ్ళిపోయాడు. తరువాత ఆయన కురు రాకుమారులకు గురువయ్యాడు. గురుదక్షిణగా ద్రుపదుడిని తన దగ్గరకు తీసుకురమ్మన్నాడు. అర్జునుడు ద్రుపదుడిని ఓడించి తీసుకొచ్చాడు. ద్రోణుడు సగం రాజ్యం తన దగ్గర ఉంచుకుని, మిగతా సగం తిరిగి ఇచ్చేశాడు. "ఇప్పుడు మనం సమానులం," అన్నాడు. కానీ ద్రుపదుడి మనసులో అవమానం రగులుతూనే ఉంది.',
      },
      {
        scene: { bg: 'ashram', props: [['person', 45, 198, 1.15, { skin: 'fair', cloth: '#3a6ab0', crown: true }], ['person', 110, 198, 1.2, { cloth: '#f4ead2', beard: true, hair: '#ddd', raise: true }], ['archer', 205, 168, 1.1, { skin: 'fair', cloth: '#c0392b', crown: true }], ['fire', 200, 200, 2], ['person', 290, 198, 1.15, { cloth: '#f4ead2', beard: true, hair: '#ddd', flip: true }]] },
        en: 'Drupada wished for two things: a son strong enough to face Droṇa one day, and a daughter fit to marry brave Arjuna. He wandered through the forests, looking for sages who could help him. At last two brothers, the sages Yāja and Upayāja, agreed to perform a great fire ceremony for him. For many days they chanted and poured offerings of ghee into the sacred fire. The flames rose higher and higher. Then — whoosh! — out of the fire stepped a young warrior, shining like a flame. He wore armour and a crown, held a bow and a sword, and climbed onto a chariot! A voice rang out from the sky: "This prince is born to take away the sorrow of Pāñcāla." He was named Dhṛṣṭadyumna.',
        te: 'ద్రుపదుడు రెండు కోరికలు కోరుకున్నాడు: ఒక రోజు ద్రోణుడిని ఎదుర్కోగల బలమైన కొడుకు, వీరుడైన అర్జునుడికి తగిన కూతురు. సహాయం చేయగల మునుల కోసం అడవులన్నీ తిరిగాడు. చివరకు యాజుడు, ఉపయాజుడు అనే ఇద్దరు అన్నదమ్ములైన మునులు ఆయన కోసం ఒక గొప్ప యజ్ఞం చేయడానికి ఒప్పుకున్నారు. ఎన్నో రోజులు వాళ్ళు మంత్రాలు చదువుతూ పవిత్రమైన అగ్నిలో నెయ్యి పోశారు. మంటలు ఇంకా ఇంకా పైకి లేచాయి. అప్పుడు — భగ్గున! — అగ్ని నుంచి ఒక యువ వీరుడు బయటకు వచ్చాడు. మంటలా మెరిసిపోతున్నాడు. కవచం, కిరీటం ధరించి, విల్లు, కత్తి పట్టుకుని ఒక రథం ఎక్కాడు! అప్పుడు ఆకాశం నుంచి ఒక స్వరం వినిపించింది: "పాంచాల దేశపు దుఃఖాన్ని పోగొట్టడానికే ఈ రాకుమారుడు పుట్టాడు." అతనికి ధృష్టద్యుమ్నుడు అని పేరు పెట్టారు.',
      },
      {
        scene: { bg: 'ashram', props: [['person', 60, 198, 1.2, { skin: 'fair', cloth: '#3a6ab0', crown: true, raise: true }], ['lotus', 120, 202, 0.8], ['person', 200, 180, 1.3, { female: true, skin: 'dark', cloth: '#c0392b', pallu: '#f0c040' }], ['fire', 200, 200, 1.7], ['lotus', 278, 202, 0.8], ['cloud', 120, 45, 0.8]] },
        en: 'The fire was not finished yet. From the middle of the altar rose a young woman, calm and glowing. Her skin was dark and lovely like a blue lotus, her eyes were wide like lotus petals, and her long hair was dark and curly. A sweet smell of blue lotuses spread all around, far into the distance. Again the voice spoke from the sky: "She is the finest of women. Great changes will come to the world through her." Drupada\'s heart filled with joy. Because of her dark beauty she was named Kṛṣṇā. People also called her Draupadī, daughter of Drupada; Pāñcālī, princess of Pāñcāla; and Yājñasenī, a name that recalls the sacred fire. She grew up wise and brave, never afraid to speak up for what was right.',
        te: 'అగ్ని ఇంకా ఆగలేదు. యజ్ఞ వేదిక మధ్య నుంచి ఒక యువతి ప్రశాంతంగా, వెలుగులు చిమ్ముతూ పైకి లేచింది. ఆమె శరీరం నల్లకలువలా నల్లగా, అందంగా ఉంది. కళ్ళు తామరరేకుల్లా విశాలంగా ఉన్నాయి. పొడవైన నల్లని ఉంగరాల జుట్టు. నల్లకలువల తియ్యని సువాసన చాలా దూరం వరకు వ్యాపించింది. మళ్ళీ ఆకాశం నుంచి స్వరం వినిపించింది: "ఈమె స్త్రీలలో ఉత్తమురాలు. ఈమె ద్వారా లోకంలో గొప్ప మార్పులు జరుగుతాయి." ద్రుపదుడి హృదయం ఆనందంతో నిండిపోయింది. నల్లని అందం వల్ల ఆమెకు కృష్ణ అని పేరు పెట్టారు. ద్రుపదుడి కూతురు కాబట్టి ద్రౌపది అని, పాంచాల రాకుమారి కాబట్టి పాంచాలి అని, యజ్ఞాన్ని గుర్తుచేసే యాజ్ఞసేని అని కూడా పిలిచారు. ఆమె తెలివైనదిగా, ధైర్యవంతురాలిగా పెరిగింది. న్యాయం కోసం మాట్లాడటానికి ఎప్పుడూ భయపడలేదు.',
      },
    ],
  },
  {
    id: 'rama-meets-hanuman-and-sugriva',
    added: '2026-10-18',
    epic: 'Ramayana',
    chars: ['Hanumān', 'Sugrīva', 'Rāma', 'Lakṣmaṇa'],
    title: { en: 'Rāma Meets Hanumān and Sugrīva', te: 'హనుమంతుడు, సుగ్రీవుడితో రాముడి స్నేహం' },
    moral: { en: 'Kind, humble words open the door to a lifelong friendship.', te: 'వినయంతో కూడిన మంచి మాట జీవితాంతం నిలిచే స్నేహానికి దారి తీస్తుంది.' },
    cover: { bg: 'mountain', props: [['archer', 70, 198, 1.15, { skin: 'fair', cloth: '#c9a26b' }], ['archer', 140, 198, 1.3, { skin: 'blue', cloth: '#c9a26b', top: '#4a78b8' }], ['monkey', 290, 198, 1.9, { color: '#d9772a', flip: true }], ['sun', 360, 45, 0.8]] },
    pages: [
      {
        scene: { bg: 'river', props: [['lotus', 50, 206, 0.8], ['archer', 130, 194, 1.2, { skin: 'blue', cloth: '#c9a26b', top: '#4a78b8' }], ['archer', 200, 194, 1.1, { skin: 'fair', cloth: '#c9a26b' }], ['lotus', 290, 210, 0.7], ['monkey', 320, 168, 0.8, { flip: true }], ['monkey', 360, 168, 0.75, { color: '#d9772a', flip: true }], ['bird', 260, 80, 1]] },
        en: 'After meeting Śabari, Rāma and Lakṣmaṇa walked on to the beautiful Pampā lake, full of lotuses and singing birds. Nearby stood the hill called Ṛṣyamūka. On top of that hill hid Sugrīva, a monkey prince, with four loyal friends. His mighty elder brother Vāli had driven him away, and Sugrīva lived in fear. When he saw two tall warriors with bows walking towards his hill, he trembled. "Has Vāli sent them to catch me?" He turned to his wisest friend. "Hanumān, go and find out who they are. Be careful!" So Hanumān changed himself into a young brāhmaṇa scholar and went down the hill to meet the strangers.',
        te: 'శబరిని కలిసిన తరువాత రాముడు, లక్ష్మణుడు తామరపూలతో, పక్షుల పాటలతో నిండిన అందమైన పంపా సరస్సు దగ్గరకు నడిచారు. దాని దగ్గరలోనే ఋష్యమూక పర్వతం ఉంది. ఆ కొండ మీద వానర రాకుమారుడు సుగ్రీవుడు తన నలుగురు నమ్మకమైన స్నేహితులతో దాక్కుని ఉన్నాడు. అతని బలవంతుడైన అన్న వాలి అతన్ని తరిమేశాడు. అందుకే సుగ్రీవుడు భయంభయంగా బతుకుతున్నాడు. విల్లులు పట్టుకుని తన కొండ వైపు నడిచి వస్తున్న ఇద్దరు పొడవైన వీరులను చూసి అతను వణికిపోయాడు. "నన్ను పట్టుకోవడానికి వాలి వీళ్ళను పంపాడా?" అనుకుని, తన తెలివైన స్నేహితుడి వైపు తిరిగాడు. "హనుమా, వెళ్ళి వాళ్ళెవరో కనుక్కో. జాగ్రత్త!" హనుమంతుడు ఒక యువ బ్రాహ్మణ పండితుడి రూపం ధరించి కొండ దిగి వాళ్ళను కలవడానికి వెళ్ళాడు.',
      },
      {
        scene: { bg: 'forest', props: [['archer', 90, 198, 1.25, { skin: 'blue', cloth: '#c9a26b', top: '#4a78b8' }], ['archer', 165, 198, 1.15, { skin: 'fair', cloth: '#c9a26b' }], ['person', 290, 198, 1.25, { cloth: '#f4ead2', tilak: true, raise: true, flip: true }], ['cloud', 250, 40, 0.9]] },
        en: 'Hanumān bowed politely and spoke. "Noble ones, you look like kings, yet you wear clothes of bark like hermits. Who are you, and why have you come to this forest? My master Sugrīva, a good monkey prince, wishes to be your friend." Rāma listened in wonder and turned to Lakṣmaṇa. "Did you hear how he speaks? Not a single mistake! Every word is clear, sweet and just right. He must know all the Vedas. A king with a messenger like this can succeed in any task." Lakṣmaṇa told Hanumān their whole story — the exile, and how Sītā had been carried away. Hanumān\'s heart leapt with joy. He took his true form and carried both brothers up the hill on his shoulders.',
        te: 'హనుమంతుడు వినయంగా నమస్కరించి ఇలా అన్నాడు: "మహానుభావులారా, మీరు రాజుల్లా కనిపిస్తున్నారు, కానీ మునుల్లా నారబట్టలు కట్టుకున్నారు. మీరెవరు? ఈ అడవికి ఎందుకు వచ్చారు? మా ప్రభువు సుగ్రీవుడు మంచి వానర రాకుమారుడు. ఆయన మీతో స్నేహం చేయాలనుకుంటున్నాడు." రాముడు ఆశ్చర్యంగా విని లక్ష్మణుడి వైపు తిరిగాడు. "ఇతను ఎలా మాట్లాడుతున్నాడో విన్నావా? ఒక్క తప్పు కూడా లేదు! ప్రతి మాటా స్పష్టంగా, మధురంగా, సరిగ్గా ఉంది. ఇతనికి వేదాలన్నీ తెలిసి ఉండాలి. ఇలాంటి దూత ఉన్న రాజు ఏ పనినైనా సాధించగలడు." లక్ష్మణుడు తమ కథంతా హనుమంతుడికి చెప్పాడు — వనవాసం గురించి, సీతాదేవిని ఎత్తుకుపోయిన సంగతి గురించి. హనుమంతుడి మనసు ఆనందంతో పొంగిపోయింది. తన నిజరూపం ధరించి, అన్నదమ్ములిద్దరినీ భుజాల మీద ఎక్కించుకుని కొండ పైకి తీసుకెళ్ళాడు.',
      },
      {
        scene: { bg: 'mountain', props: [['archer', 55, 198, 1.1, { skin: 'fair', cloth: '#c9a26b' }], ['person', 130, 198, 1.25, { skin: 'blue', cloth: '#c9a26b', top: '#4a78b8', raise: true }], ['fire', 200, 198, 1.3], ['monkey', 270, 198, 1.5, { color: '#b8823f', flip: true }], ['crown', 270, 115, 0.6], ['monkey', 345, 198, 1.3, { color: '#d9772a', flip: true }]] },
        en: 'On the hilltop, Hanumān lit a fire. Rāma and Sugrīva walked around it together, hand in hand. "From today we are friends," they promised. "Your joys and sorrows are mine." Then Sugrīva brought out a small bundle. "Some days ago a demon carried a lady across the sky. She was crying, \'Rāma! Lakṣmaṇa!\' and she dropped this." Inside were Sītā\'s jewels! Rāma held them to his heart. "Lakṣmaṇa, do you know these?" Lakṣmaṇa looked carefully. "Brother, I do not know the earrings or the bracelets. But I know these anklets — I saw them every morning when I bowed at Sītā\'s feet." Rāma hugged his humble brother. With true friends beside him, he knew he would find Sītā.',
        te: 'కొండ మీద హనుమంతుడు అగ్ని వెలిగించాడు. రాముడు, సుగ్రీవుడు చేతులు పట్టుకుని కలిసి ఆ అగ్నికి ప్రదక్షిణ చేశారు. "ఈ రోజు నుంచి మనం స్నేహితులం. నీ సుఖదుఃఖాలు నావే," అని ఒకరికొకరు మాట ఇచ్చుకున్నారు. తరువాత సుగ్రీవుడు ఒక చిన్న మూట తెప్పించాడు. "కొన్ని రోజుల క్రితం ఒక రాక్షసుడు ఒక స్త్రీని ఆకాశమార్గంలో తీసుకుపోయాడు. ఆమె \'రామా! లక్ష్మణా!\' అని ఏడుస్తూ ఈ మూటను కిందకు జారవిడిచింది." అందులో సీతాదేవి నగలు ఉన్నాయి! రాముడు వాటిని గుండెలకు హత్తుకున్నాడు. "లక్ష్మణా, ఇవి నీకు తెలుసా?" లక్ష్మణుడు జాగ్రత్తగా చూశాడు. "అన్నయ్యా, ఈ కమ్మలు, ఈ కంకణాలు నాకు తెలియవు. కానీ ఈ అందెలు నాకు తెలుసు — రోజూ ఉదయం వదినమ్మ పాదాలకు నమస్కరించేటప్పుడు వాటిని చూసేవాడిని." రాముడు వినయం గల తన తమ్ముడిని కౌగిలించుకున్నాడు. నిజమైన స్నేహితులు తోడుండగా సీతను తప్పక కనుగొంటానని ఆయనకు నమ్మకం కలిగింది.',
      },
    ],
  },
  {
    id: 'the-akshaya-patra',
    added: '2026-10-18',
    epic: 'Mahabharata',
    chars: ['Yudhiṣṭhira', 'Sūrya', 'Draupadī', 'Dhaumya'],
    title: { en: 'The Akṣaya Pātra — the Bowl That Never Emptied', te: 'అక్షయ పాత్ర — ఎప్పటికీ ఖాళీ కాని పాత్ర' },
    moral: { en: 'Feed others first — a sharing heart is never empty.', te: 'ముందు ఇతరులకు పెట్టాలి — పంచుకునే మనసు ఎప్పుడూ ఖాళీ కాదు.' },
    cover: { bg: 'ashram', props: [['sun', 70, 60, 1.1], ['person', 150, 198, 1.3, { female: true, skin: 'dark', cloth: '#c0392b', pallu: '#f0c040', raise: true }], ['pot', 210, 198, 1.3], ['berries', 260, 198, 0.9], ['cloud', 220, 40, 0.8]] },
    pages: [
      {
        scene: { bg: 'forest', props: [['person', 60, 198, 1.2, { cloth: '#c9a26b' }], ['person', 110, 198, 1.15, { female: true, skin: 'dark', cloth: '#c0392b', pallu: '#f0c040' }], ['person', 200, 198, 1.2, { cloth: '#f4ead2', beard: true, hair: '#ddd', flip: true }], ['person', 260, 198, 1.05, { cloth: '#f4ead2', beard: true, hair: '#ddd', flip: true }], ['person', 310, 198, 1, { cloth: '#f4ead2', flip: true }], ['person', 355, 198, 1.05, { cloth: '#f4ead2', beard: true, flip: true }]] },
        en: 'The five Pāṇḍava brothers had lost their kingdom in a game of dice, and now they had to live in the forest for twelve years. Draupadī went with them. But they did not go alone! Many brāhmaṇas loved Yudhiṣṭhira so much that they followed him into the forest. "Wherever you go, we will go," they said. Yudhiṣṭhira was touched, but also worried. "How will I feed so many people? A good host never lets a guest go hungry, but here we have nothing except roots and fruits." He went to the wise family priest, Dhaumya. "What shall I do?" Dhaumya smiled. "Long ago, the Sun gave food to all living beings. Pray to Sūrya, the Sun god. He will help you."',
        te: 'పాండవులు ఐదుగురూ జూదంలో తమ రాజ్యాన్ని పోగొట్టుకున్నారు. ఇప్పుడు పన్నెండేళ్ళు అడవిలో ఉండాలి. ద్రౌపది కూడా వారితో వెళ్ళింది. కానీ వాళ్ళు ఒంటరిగా వెళ్ళలేదు! ధర్మరాజు అంటే ఎంతో ప్రేమ ఉన్న చాలా మంది బ్రాహ్మణులు ఆయన వెంట అడవికి వచ్చారు. "మీరు ఎక్కడికి వెళ్తే మేమూ అక్కడికే వస్తాం," అన్నారు. ధర్మరాజు మనసు కరిగిపోయింది, కానీ దిగులు కూడా పట్టుకుంది. "ఇంత మందికి నేను భోజనం ఎలా పెట్టగలను? మంచి గృహస్థు అతిథిని ఎప్పుడూ ఆకలితో పంపకూడదు. కానీ ఇక్కడ దుంపలు, పండ్లు తప్ప మన దగ్గర ఏమీ లేవు." ఆయన తమ కుటుంబ పురోహితుడైన ధౌమ్యుడి దగ్గరకు వెళ్ళాడు. "నేనేం చేయాలి?" ధౌమ్యుడు చిరునవ్వు నవ్వాడు. "పూర్వం సూర్యుడే సకల జీవులకూ ఆహారం ఇచ్చాడు. సూర్యభగవానుడిని ప్రార్థించు. ఆయన నీకు సహాయం చేస్తాడు."',
      },
      {
        scene: { bg: 'river', props: [['sun', 250, 120, 2], ['pot', 250, 165, 1], ['person', 130, 206, 1.3, { cloth: '#c9a26b', raise: true }], ['cloud', 60, 45, 0.9]] },
        en: 'So Yudhiṣṭhira stood in the river at sunrise. Folding his hands, he chanted the hundred and eight names of the Sun again and again, with all his heart. Then the sky grew brighter than ever, and Sūrya himself appeared, shining like gold. In his hands he held a copper vessel. "I am pleased with you, Yudhiṣṭhira," said the Sun god. "Take this bowl. For the twelve years of your forest life, the food Draupadī cooks in it will never run out. Fruits, roots, vegetables, rice — there will be enough for everyone who comes to your door. But remember: the bowl stays full each day only until Draupadī herself has eaten." Yudhiṣṭhira bowed low with thanks.',
        te: 'అందుకే ధర్మరాజు తెల్లవారుజామున నదిలో నిలబడ్డాడు. చేతులు జోడించి, మనస్ఫూర్తిగా సూర్యుడి నూట ఎనిమిది నామాలను మళ్ళీ మళ్ళీ జపించాడు. అప్పుడు ఆకాశం ఎన్నడూ లేనంత ప్రకాశవంతంగా మారింది. బంగారంలా మెరిసిపోతూ సూర్యభగవానుడే స్వయంగా ప్రత్యక్షమయ్యాడు. ఆయన చేతిలో ఒక రాగి పాత్ర ఉంది. "ధర్మరాజా, నీ భక్తికి మెచ్చాను," అన్నాడు సూర్యుడు. "ఈ పాత్రను తీసుకో. మీ పన్నెండేళ్ళ వనవాసంలో ద్రౌపది ఇందులో వండే ఆహారం ఎప్పటికీ తరగదు. పండ్లు, దుంపలు, కూరగాయలు, అన్నం — మీ దగ్గరకు వచ్చే ప్రతి ఒక్కరికీ సరిపోతుంది. కానీ గుర్తుంచుకో: ప్రతి రోజూ ద్రౌపది భోజనం చేసే వరకు మాత్రమే ఈ పాత్ర నిండుగా ఉంటుంది." ధర్మరాజు కృతజ్ఞతతో వంగి నమస్కరించాడు.',
      },
      {
        scene: { bg: 'ashram', props: [['person', 50, 198, 1.1, { cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['person', 140, 198, 1.3, { female: true, skin: 'dark', cloth: '#c0392b', pallu: '#f0c040', raise: true }], ['pot', 195, 198, 1.1], ['bird', 232, 198, 1, { color: '#3a8a5a', wing: '#8ac08a' }], ['deer', 270, 198, 0.9, { flip: true }]] },
        en: 'From that day on, the Pāṇḍavas\' forest home was never short of food. Every day Draupadī cooked in the wonderful bowl, which people called the Akṣaya Pātra — "the bowl that never empties". First she served the brāhmaṇas and any guests who came by. Then she served the five brothers. Only when everyone had eaten did Draupadī sit down to eat, last of all. After that, the bowl stayed empty until the next morning. Hungry travellers, wandering sages, even birds and animals — no one was turned away. And one day, it is said, this very bowl and its one small rule would bring a surprise visit from a famous, short-tempered sage… but that is another story!',
        te: 'ఆ రోజు నుంచి అడవిలో పాండవుల ఇంట్లో ఆహారానికి ఎప్పుడూ కొరత రాలేదు. ప్రతి రోజూ ద్రౌపది ఆ అద్భుతమైన పాత్రలో వంట చేసేది. దాన్ని అందరూ \'అక్షయ పాత్ర\' అని పిలిచారు — అంటే \'ఎప్పటికీ ఖాళీ కాని పాత్ర\'. ముందుగా ఆమె బ్రాహ్మణులకూ, వచ్చిన అతిథులకూ వడ్డించేది. తరువాత ఐదుగురు సోదరులకూ వడ్డించేది. అందరూ తిన్న తరువాతే చివరగా ద్రౌపది భోజనానికి కూర్చునేది. ఆ తరువాత మరుసటి ఉదయం వరకు పాత్ర ఖాళీగా ఉండేది. ఆకలితో వచ్చిన బాటసారులు, తిరిగే మునులు, పక్షులు, జంతువులు కూడా — ఎవరూ ఆకలితో వెనక్కి వెళ్ళలేదు. ఒక రోజు ఈ పాత్ర, దాని చిన్న నియమం కారణంగా ముక్కోపి అయిన ఒక ప్రసిద్ధ ముని అనుకోకుండా వచ్చాడని చెబుతారు… కానీ అది ఇంకో కథ!',
      },
    ],
  },
  {
    id: 'vali-and-sugriva',
    added: '2026-10-19',
    epic: 'Ramayana',
    chars: ['Vāli', 'Sugrīva', 'Tārā', 'Rāma', 'Aṅgada'],
    title: { en: 'Vāli and Sugrīva — Two Brothers', te: 'వాలి, సుగ్రీవుడు — ఇద్దరు అన్నదమ్ములు' },
    moral: { en: 'Listen before you judge — anger that will not listen can break a family.', te: 'తీర్పు చెప్పే ముందు వినాలి — వినని కోపం కుటుంబాన్ని విడదీస్తుంది.' },
    cover: { bg: 'mountain', props: [['monkey', 140, 198, 1.8, { color: '#c9952a' }], ['crown', 140, 100, 0.6], ['monkey', 260, 198, 1.7, { color: '#b8823f', flip: true }], ['sun', 360, 45, 0.8]] },
    pages: [
      {
        scene: { bg: 'night', props: [['moon', 60, 70, 1], ['monkey', 50, 198, 1.2, { color: '#b8823f' }], ['monkey', 130, 198, 1.6, { color: '#c9952a' }], ['demon', 240, 198, 1.05, { flip: true }], ['rock', 345, 198, 1.6]] },
        en: 'In the forest kingdom of Kiṣkindhā lived two monkey brothers. Vāli, the elder, was the son of Indra. It is said he was so strong that he could visit all four oceans in a single morning! Sugrīva, the younger, was the son of Sūrya, the Sun. The brothers loved each other dearly. One night a demon named Māyāvī roared at the city gate. Vāli rushed out, and the frightened demon fled into a deep cave. "Brother, wait here and guard the door," said Vāli, and he ran inside. Sugrīva waited a day, a month, a whole year. At last he heard terrible roars, and then silence. Sure that his brother was gone forever, he sadly closed the cave with a big rock and went home. The ministers made him king.',
        te: 'కిష్కింధ అనే అడవి రాజ్యంలో ఇద్దరు వానర సోదరులు ఉండేవారు. అన్న వాలి ఇంద్రుడి కొడుకు. అతను ఎంత బలవంతుడంటే, ఒక్క ఉదయంలోనే నాలుగు సముద్రాల దగ్గరకూ వెళ్ళి వచ్చేవాడని చెబుతారు! తమ్ముడు సుగ్రీవుడు సూర్యుడి కొడుకు. అన్నదమ్ములిద్దరూ ఒకరినొకరు ఎంతో ప్రేమించుకునేవారు. ఒక రాత్రి మాయావి అనే రాక్షసుడు నగర ద్వారం దగ్గర గర్జించాడు. వాలి బయటకు దూకాడు. భయపడిన రాక్షసుడు ఒక లోతైన గుహలోకి పారిపోయాడు. "తమ్ముడూ, ఇక్కడే ఉండి గుహ ద్వారానికి కాపలా కాయి," అని చెప్పి వాలి లోపలికి పరుగెత్తాడు. సుగ్రీవుడు ఒక రోజు, ఒక నెల, ఏడాది పొడుగునా ఎదురుచూశాడు. చివరకు లోపలి నుంచి భయంకరమైన గర్జనలు, ఆ తరువాత నిశ్శబ్దం వినిపించాయి. అన్నయ్య ఇక తిరిగి రాడని అనుకుని, బాధతో ఒక పెద్ద బండరాయితో గుహను మూసి ఇంటికి వెళ్ళాడు. మంత్రులు అతన్ని రాజుగా చేశారు.',
      },
      {
        scene: { bg: 'mountain', props: [['archer', 55, 198, 1.2, { skin: 'blue', cloth: '#c9a26b', top: '#4a78b8' }], ['monkey', 125, 198, 1.2, { color: '#b8823f' }], ['tree', 185, 196, 0.7], ['tree', 220, 196, 0.7], ['tree', 255, 196, 0.7], ['tree', 290, 196, 0.7], ['tree', 325, 196, 0.7], ['tree', 360, 196, 0.7], ['tree', 392, 196, 0.7], ['arrow', 300, 152, 1.3]] },
        en: 'But Vāli was alive! He had defeated the demon. When he found the cave closed with a rock, he kicked it away and stormed home. There sat Sugrīva on the throne. Sugrīva bowed at his feet. "Brother, I thought you were gone. Please take back your kingdom!" But Vāli was too angry to listen. "You shut me in so that you could be king!" he shouted. He drove Sugrīva out of Kiṣkindhā and even kept Sugrīva\'s wife, Rumā. Poor Sugrīva fled to the hill Ṛṣyamūka. Because of an old curse of the sage Mataṅga, Vāli could never set foot there. Years later, Sugrīva told all this to his new friend Rāma. Rāma promised to help him. To show his strength, he shot a single arrow that went right through seven tall sāla trees!',
        te: 'కానీ వాలి బతికే ఉన్నాడు! అతను రాక్షసుడిని ఓడించాడు. బయటకు రాబోతే గుహ బండరాయితో మూసి ఉంది. వాలి ఆ రాయిని తన్ని పక్కకు తోసి, కోపంగా ఇంటికి వచ్చాడు. అక్కడ సింహాసనం మీద సుగ్రీవుడు కూర్చుని ఉన్నాడు. సుగ్రీవుడు అన్న పాదాలకు నమస్కరించాడు. "అన్నయ్యా, నువ్వు ఇక లేవనుకున్నాను. దయచేసి నీ రాజ్యం నువ్వే తీసుకో!" కానీ కోపంలో ఉన్న వాలి ఏమీ వినలేదు. "నువ్వు రాజు కావాలనే నన్ను లోపల బంధించావు!" అని అరిచాడు. సుగ్రీవుడిని కిష్కింధ నుంచి తరిమేశాడు. అతని భార్య రుమను కూడా తన దగ్గరే ఉంచుకున్నాడు. పాపం సుగ్రీవుడు ఋష్యమూక పర్వతానికి పారిపోయాడు. మతంగ ముని పాత శాపం వల్ల వాలి ఆ కొండ మీద అడుగు పెట్టలేడు. కొన్నేళ్ళ తరువాత సుగ్రీవుడు ఈ కథంతా తన కొత్త స్నేహితుడు రాముడికి చెప్పాడు. రాముడు సహాయం చేస్తానని మాట ఇచ్చాడు. తన బలం చూపించడానికి ఒకే ఒక్క బాణం వేశాడు — అది వరుసగా ఉన్న ఏడు పెద్ద సాల వృక్షాలను చీల్చుకుంటూ దూసుకుపోయింది!',
      },
      {
        scene: { bg: 'forest', props: [['archer', 60, 198, 1.1, { skin: 'blue', cloth: '#c9a26b', top: '#4a78b8' }], ['tree', 120, 196, 1], ['monkey', 220, 198, 1.6, { color: '#c9952a' }], ['crown', 220, 104, 0.55], ['monkey', 300, 198, 1.6, { color: '#b8823f', flip: true }], ['flowers', 300, 168, 0.7], ['cloud', 300, 40, 0.8]] },
        en: 'Sugrīva went to the gate of Kiṣkindhā and roared a challenge. Out came Vāli, and the two brothers wrestled. But they looked so alike that Rāma, watching from behind a tree, could not tell who was who! Sugrīva ran back, bruised and tired. So Lakṣmaṇa hung a garland of forest flowers around Sugrīva\'s neck. "Now we will know you," said Rāma. Sugrīva roared again. Vāli\'s wise wife Tārā begged him, "Do not go! He has a strong friend now." But Vāli would not listen. As the brothers fought, Rāma\'s arrow flew, and mighty Vāli fell. In his last moments, all his anger melted away. He gave Sugrīva his golden necklace and said, "Brother, look after my son Aṅgada, and Tārā." Sugrīva wept. He became king, and Aṅgada became the young prince.',
        te: 'సుగ్రీవుడు కిష్కింధ ద్వారం దగ్గరకు వెళ్ళి గట్టిగా గర్జించి యుద్ధానికి పిలిచాడు. వాలి బయటకు వచ్చాడు. అన్నదమ్ములిద్దరూ తలపడ్డారు. కానీ ఇద్దరూ ఒకేలా ఉండటంతో, చెట్టు వెనకాల నుంచి చూస్తున్న రాముడు ఎవరు ఎవరో గుర్తుపట్టలేకపోయాడు! దెబ్బలు తిని అలసిపోయిన సుగ్రీవుడు వెనక్కి పరుగెత్తి వచ్చాడు. అప్పుడు లక్ష్మణుడు అడవి పూల మాలను సుగ్రీవుడి మెడలో వేశాడు. "ఇప్పుడు నిన్ను గుర్తుపడతాం," అన్నాడు రాముడు. సుగ్రీవుడు మళ్ళీ గర్జించాడు. వాలి భార్య, తెలివైన తార, "వెళ్ళకండి! ఇప్పుడు అతనికి బలమైన స్నేహితుడు తోడున్నాడు," అని బతిమాలింది. కానీ వాలి వినలేదు. అన్నదమ్ములు పోరాడుతుండగా రాముడి బాణం దూసుకొచ్చింది. మహాబలుడైన వాలి నేల కూలాడు. చివరి క్షణాల్లో అతని కోపమంతా కరిగిపోయింది. తన బంగారు హారాన్ని సుగ్రీవుడికి ఇచ్చి, "తమ్ముడూ, నా కొడుకు అంగదుడినీ, తారనూ జాగ్రత్తగా చూసుకో," అన్నాడు. సుగ్రీవుడు కన్నీళ్ళు పెట్టుకున్నాడు. అతను రాజయ్యాడు, అంగదుడు యువరాజు అయ్యాడు.',
      },
    ],
  },
  {
    id: 'krishna-eats-a-single-leaf',
    added: '2026-10-19',
    epic: 'Mahabharata',
    chars: ['Kṛṣṇa', 'Draupadī', 'Durvāsa', 'Yudhiṣṭhira', 'Duryodhana'],
    title: { en: 'Kṛṣṇa Eats a Single Leaf — Durvāsa\'s Visit', te: 'ఒక్క ఆకుతో ఆకలి తీర్చిన శ్రీకృష్ణుడు — దుర్వాస మహర్షి రాక' },
    moral: { en: 'Call on God with a pure heart, and even a single leaf becomes a feast.', te: 'స్వచ్ఛమైన మనసుతో దేవుడిని తలచుకుంటే ఒక్క ఆకు కూడా విందు అవుతుంది.' },
    cover: { bg: 'ashram', props: [['sun', 60, 55, 0.9], ['person', 140, 198, 1.4, { skin: 'blue', cloth: '#f0c040', crown: true, tilak: true }], ['pot', 200, 198, 1.2], ['person', 255, 198, 1.3, { female: true, skin: 'dark', cloth: '#c0392b', pallu: '#f0c040', flip: true }]] },
    pages: [
      {
        scene: { bg: 'palace', props: [['person', 100, 198, 1.4, { cloth: '#a83a3a', crown: true }], ['person', 190, 198, 1.35, { cloth: '#e07a2a', beard: true, hair: '#ddd', flip: true }], ['person', 250, 198, 1.05, { cloth: '#f4ead2', beard: true, flip: true }], ['person', 295, 198, 1, { cloth: '#f4ead2', flip: true }], ['person', 340, 198, 1.05, { cloth: '#f4ead2', beard: true, hair: '#ddd', flip: true }], ['person', 380, 198, 0.95, { cloth: '#f4ead2', flip: true }]] },
        en: 'Back in Hastināpura, Duryodhana heard that the Pāṇḍavas had a magic bowl and were happy even in the forest. That made him jealous. One day the sage Durvāsa came to his palace with ten thousand disciples. Duryodhana served them so well that Durvāsa offered him a boon. Duryodhana smiled a crafty smile. "Great sage, please visit my cousins in the forest too. But go in the afternoon, after Queen Draupadī has eaten." He knew that by then the Akṣaya Pātra would be empty. If the Pāṇḍavas could not feed the famous short-tempered sage, Durvāsa might curse them! "So be it," said Durvāsa, and off he went with his huge crowd of hungry disciples.',
        te: 'హస్తినాపురంలో ఉన్న దుర్యోధనుడికి ఒక వార్త తెలిసింది — పాండవుల దగ్గర ఒక అద్భుతమైన పాత్ర ఉంది, వాళ్ళు అడవిలో కూడా సంతోషంగా ఉన్నారు. అది విని అతనికి అసూయ కలిగింది. ఒక రోజు దుర్వాస మహర్షి పది వేల మంది శిష్యులతో అతని రాజభవనానికి వచ్చాడు. దుర్యోధనుడు వాళ్ళకు ఎంతో బాగా సేవ చేశాడు. సంతోషించిన దుర్వాసుడు "ఏదైనా వరం కోరుకో" అన్నాడు. దుర్యోధనుడు కుటిలంగా నవ్వాడు. "మహర్షీ, అడవిలో ఉన్న మా దాయాదుల దగ్గరకు కూడా వెళ్ళండి. కానీ మధ్యాహ్నం, ద్రౌపది భోజనం చేసిన తరువాత వెళ్ళండి." అప్పటికి అక్షయ పాత్ర ఖాళీ అయిపోతుందని అతనికి తెలుసు. ముక్కోపి అయిన మహర్షికి పాండవులు భోజనం పెట్టలేకపోతే, ఆయన వాళ్ళను శపిస్తాడని అతని పన్నాగం! "అలాగే," అని దుర్వాసుడు ఆకలితో ఉన్న తన పెద్ద శిష్య బృందంతో బయలుదేరాడు.',
      },
      {
        scene: { bg: 'ashram', props: [['cloud', 70, 45, 0.9], ['person', 110, 198, 1.35, { female: true, skin: 'dark', cloth: '#c0392b', pallu: '#f0c040', raise: true }], ['pot', 165, 198, 1.1], ['person', 235, 198, 1.45, { skin: 'blue', cloth: '#f0c040', crown: true, tilak: true, raise: true, flip: true }], ['cloud', 230, 40, 0.7]] },
        en: 'That afternoon, Durvāsa and his disciples arrived at the Pāṇḍavas\' forest home. Yudhiṣṭhira welcomed them warmly. "Please bathe in the river, and then come and eat," he said. The sages went off to the river. But Draupadī had already eaten, and the bowl was empty! Her heart pounded. "How will we feed ten thousand guests?" There was only one friend she could turn to. She closed her eyes and prayed, "Kṛṣṇa, Kṛṣṇa, friend of the helpless, please save us!" At once Kṛṣṇa stood before her, smiling. "Draupadī, I am very hungry. Give me something to eat first!" "Kṛṣṇa, are you joking? I called you because there is no food left!" "Just bring me the bowl," said Kṛṣṇa.',
        te: 'ఆ మధ్యాహ్నం దుర్వాసుడు, ఆయన శిష్యులు అడవిలో పాండవులు ఉంటున్న చోటికి చేరుకున్నారు. ధర్మరాజు వాళ్ళకు ఆదరంగా స్వాగతం పలికాడు. "దయచేసి నదిలో స్నానం చేసి భోజనానికి రండి," అన్నాడు. మునులు నది వైపు వెళ్ళారు. కానీ ద్రౌపది అప్పటికే భోజనం చేసేసింది, పాత్ర ఖాళీగా ఉంది! ఆమె గుండె దడదడలాడింది. "పది వేల మంది అతిథులకు ఎలా భోజనం పెట్టాలి?" ఆమెకు ఒక్కరే గుర్తొచ్చారు. కళ్ళు మూసుకుని, "కృష్ణా, కృష్ణా, ఆపద్బాంధవా, మమ్మల్ని కాపాడు!" అని ప్రార్థించింది. వెంటనే శ్రీకృష్ణుడు చిరునవ్వుతో ఆమె ముందు నిలబడ్డాడు. "ద్రౌపదీ, నాకు చాలా ఆకలిగా ఉంది. ముందు నాకు ఏదైనా తినడానికి పెట్టు!" "కృష్ణా, హాస్యమాడుతున్నావా? తినడానికి ఏమీ లేదనే కదా నిన్ను పిలిచాను!" "ఆ పాత్ర ఒకసారి తీసుకురా," అన్నాడు శ్రీకృష్ణుడు.',
      },
      {
        scene: { bg: 'river', props: [['sun', 355, 50, 0.8], ['person', 70, 204, 1.3, { cloth: '#e07a2a', beard: true, hair: '#ddd', raise: true }], ['person', 135, 208, 1.05, { cloth: '#f4ead2', beard: true }], ['person', 190, 206, 1, { cloth: '#f4ead2' }], ['person', 245, 204, 1.05, { cloth: '#f4ead2', beard: true, hair: '#ddd' }], ['person', 300, 202, 0.95, { cloth: '#f4ead2', raise: true }]] },
        en: 'Draupadī brought the empty bowl. Kṛṣṇa peered inside and found one tiny bit of a green leaf stuck to the rim. He picked it up and ate it happily. "May this satisfy the Lord who lives in every heart," he said. At that very moment, down at the river, Durvāsa and all ten thousand disciples suddenly felt full — as full as if they had eaten a grand feast! They burped and patted their tummies. "We cannot eat another grain!" they groaned. Durvāsa felt ashamed. "We have made them cook for nothing. These Pāṇḍavas are dear to Kṛṣṇa. Let us leave quietly." So the sages slipped away. Draupadī laughed with relief, Kṛṣṇa smiled, and Duryodhana\'s trick had failed.',
        te: 'ద్రౌపది ఖాళీ పాత్రను తీసుకొచ్చింది. శ్రీకృష్ణుడు లోపలికి తొంగి చూశాడు. పాత్ర అంచుకు ఒక చిన్న ఆకుకూర ముక్క అంటుకుని ఉంది. ఆయన దాన్ని తీసుకుని ఇష్టంగా తిన్నాడు. "అందరి హృదయాల్లో ఉండే భగవంతుడు దీనితో తృప్తి చెందుగాక," అన్నాడు. సరిగ్గా అదే క్షణంలో, నది దగ్గర ఉన్న దుర్వాసుడికీ, ఆయన పది వేల మంది శిష్యులకీ ఒక్కసారిగా కడుపు నిండిపోయింది — పెద్ద విందు భోజనం చేసినంతగా! వాళ్ళు త్రేన్పులు తీస్తూ పొట్టలు నిమురుకున్నారు. "ఇంకొక్క మెతుకు కూడా తినలేం!" అన్నారు. దుర్వాసుడు సిగ్గుపడ్డాడు. "మన కోసం వాళ్ళు అనవసరంగా వంట చేస్తున్నారు. ఈ పాండవులు శ్రీకృష్ణుడికి ఎంతో ఇష్టమైనవాళ్ళు. మనం నిశ్శబ్దంగా వెళ్ళిపోదాం." అలా మునులంతా మెల్లగా వెళ్ళిపోయారు. ద్రౌపది హాయిగా నవ్వింది, శ్రీకృష్ణుడు చిరునవ్వు నవ్వాడు. దుర్యోధనుడి పన్నాగం పారలేదు.',
      },
    ],
  },
  {
    id: 'sampati-jatayus-brother',
    added: '2026-10-19',
    epic: 'Ramayana',
    chars: ['Sampāti', 'Jaṭāyu', 'Aṅgada', 'Hanumān', 'Jāmbavān'],
    title: { en: 'Sampāti, Jaṭāyu\'s Brother', te: 'జటాయువు అన్న సంపాతి' },
    moral: { en: 'When we help others, even our old wounds can heal.', te: 'ఇతరులకు సహాయం చేస్తే మన పాత గాయాలు కూడా మానిపోతాయి.' },
    cover: { bg: 'shore', props: [['sun', 50, 50, 0.8], ['eagle', 220, 100, 1.6], ['lanka', 355, 150, 0.6], ['monkey', 90, 196, 1.2, { color: '#d9772a' }], ['bear', 150, 197, 1.1]] },
    pages: [
      {
        scene: { bg: 'shore', props: [['monkey', 60, 196, 1.15, { color: '#d9772a' }], ['monkey', 120, 196, 1.25], ['bear', 180, 197, 1.1], ['monkey', 235, 196, 1, { color: '#b8823f' }], ['rock', 340, 198, 2.1], ['bird', 335, 140, 2.6, { color: '#7a5a3a', wing: '#7a5a3a', flip: true }]] },
        en: 'Sugrīva sent search parties in every direction to find Sītā. The southern team was led by young Aṅgada, with Hanumān and wise old Jāmbavān the bear. They searched forests, hills and caves, but found no sign of her. At last they reached the shore of the great southern ocean. The month Sugrīva had given them was over, and they sat down sadly on the sand. On the hill nearby lived a huge old vulture with no wings. He peeped out of his cave and licked his beak. "So many monkeys! Dinner has come to me at last!" Just then Aṅgada sighed, "Brave Jaṭāyu gave his life for Sītā, and we cannot even find her." The vulture froze. "Jaṭāyu? Who speaks of my little brother? Tell me, is Jaṭāyu gone?"',
        te: 'సీతాదేవిని వెతకడానికి సుగ్రీవుడు అన్ని దిక్కులకూ వానర బృందాలను పంపాడు. దక్షిణ దిక్కుకు వెళ్ళిన బృందానికి యువకుడైన అంగదుడు నాయకుడు. అతనితో హనుమంతుడు, తెలివైన ముసలి ఎలుగుబంటి జాంబవంతుడు ఉన్నారు. వాళ్ళు అడవులు, కొండలు, గుహలు అన్నీ వెతికారు. కానీ సీతాదేవి జాడ ఎక్కడా దొరకలేదు. చివరకు దక్షిణ మహాసముద్రపు ఒడ్డుకు చేరుకున్నారు. సుగ్రీవుడు ఇచ్చిన నెల గడువు ముగిసిపోయింది. అందరూ దిగులుగా ఇసుకలో కూర్చున్నారు. దగ్గరలోని కొండ మీద రెక్కలు లేని ఒక పెద్ద ముసలి గద్ద ఉంది. అది గుహలోంచి తొంగి చూసి ముక్కు నాక్కుంది. "ఇన్ని కోతులా! చాలా రోజులకు నాకు భోజనం దొరికింది!" సరిగ్గా అప్పుడే అంగదుడు నిట్టూర్చాడు. "వీర జటాయువు సీతాదేవి కోసం ప్రాణాలు అర్పించాడు. మనం కనీసం ఆమెను కనుక్కోలేకపోయాం." ఆ గద్ద ఒక్కసారిగా ఆగిపోయింది. "జటాయువా? నా తమ్ముడి గురించి మాట్లాడుతున్నది ఎవరు? చెప్పండి, జటాయువు ఇక లేడా?"',
      },
      {
        scene: { bg: 'sky', props: [['sun', 330, 115, 2], ['eagle', 225, 105, 1.3], ['eagle', 160, 148, 0.85], ['cloud', 70, 60, 1], ['cloud', 120, 190, 0.8]] },
        en: 'The monkeys told him everything. The old bird wept for his brother. "I am Sampāti," he said. "Long ago, when Jaṭāyu and I were young and proud, we raced each other up into the sky to touch the Sun. Higher and higher we flew! But the Sun grew hotter and hotter, and Jaṭāyu\'s feathers began to scorch. So I spread my big wings over him like an umbrella. He was saved — but my own wings were burnt away, and I fell down onto this mountain. A kind sage named Niśākara looked after me. He told me, \'One day the messengers of Rāma will come here. Help them, and your wings will grow again.\' I have waited a very, very long time for you!"',
        te: 'వానరులు జరిగినదంతా ఆయనకు చెప్పారు. ముసలి పక్షిరాజు తమ్ముడి కోసం కన్నీళ్ళు పెట్టుకున్నాడు. "నా పేరు సంపాతి," అన్నాడు ఆయన. "చాలా కాలం క్రితం, జటాయువూ నేనూ యువకులుగా ఉన్నప్పుడు మాకు గర్వం ఎక్కువ. సూర్యుడిని తాకాలని ఇద్దరం పోటీ పడి ఆకాశంలోకి ఎగిరాం. పైకి, ఇంకా పైకి ఎగిరాం! కానీ సూర్యుడి వేడి పెరుగుతూ పోయింది. జటాయువు రెక్కలు మాడిపోవడం మొదలైంది. అప్పుడు నేను నా పెద్ద రెక్కలను గొడుగులా అతని మీద చాపాను. తమ్ముడు బతికాడు — కానీ నా రెక్కలు కాలిపోయాయి. నేను ఈ కొండ మీద పడిపోయాను. నిశాకరుడు అనే దయగల ముని నన్ను చూసుకున్నాడు. \'ఒక రోజు రాముడి దూతలు ఇక్కడికి వస్తారు. వాళ్ళకు సహాయం చెయ్యి, నీ రెక్కలు మళ్ళీ మొలుస్తాయి,\' అని చెప్పాడు. ఎన్నో ఏళ్ళుగా మీ కోసమే ఎదురుచూస్తున్నాను!"',
      },
      {
        scene: { bg: 'shore', props: [['lanka', 355, 150, 0.6], ['eagle', 210, 115, 1.5], ['monkey', 60, 196, 1.3, { color: '#d9772a' }], ['bear', 125, 197, 1.1], ['monkey', 185, 196, 1.15], ['monkey', 245, 196, 1, { color: '#b8823f' }]] },
        en: 'Sampāti had the sharpest eyes of any bird. He stretched his neck and gazed far across the ocean. "I can see it! A hundred yojanas away lies the golden city of Laṅkā. There, in a garden of aśoka trees, sits Sītā, sad and surrounded by demon guards. Cross this ocean, and you will find her!" As he spoke these helpful words, something wonderful happened. Tiny new feathers sprouted on his back. They grew and grew into two strong, fresh wings! Sampāti flapped them with joy. "Look, I can fly again! Go, my friends, and may you succeed!" And he soared up into the sky. The monkeys cheered. Then they all looked at the wide, wide sea. Who could jump so far? Jāmbavān turned slowly to Hanumān…',
        te: 'సంపాతి కళ్ళు ఏ పక్షికీ లేనంత చురుకైనవి. ఆయన మెడ చాచి సముద్రానికి ఆవల దూరంగా చూశాడు. "నాకు కనిపిస్తోంది! నూరు యోజనాల దూరంలో బంగారు లంకా నగరం ఉంది. అక్కడ అశోక వనంలో, రాక్షస కాపలాదారుల మధ్య సీతాదేవి దిగులుగా కూర్చుని ఉంది. ఈ సముద్రం దాటితే మీరు ఆమెను చూడగలరు!" ఆయన ఈ మంచి మాటలు చెబుతుండగానే ఒక అద్భుతం జరిగింది. ఆయన వీపు మీద చిన్న చిన్న కొత్త ఈకలు మొలిచాయి. అవి పెరిగి పెరిగి రెండు బలమైన కొత్త రెక్కలు అయ్యాయి! సంపాతి సంతోషంగా రెక్కలు ఆడించాడు. "చూడండి, నేను మళ్ళీ ఎగరగలను! వెళ్ళండి మిత్రులారా, మీకు విజయం కలుగుగాక!" అంటూ ఆకాశంలోకి ఎగిరిపోయాడు. వానరులు సంతోషంతో కేకలు వేశారు. తరువాత అందరూ విశాలమైన సముద్రం వైపు చూశారు. ఇంత దూరం ఎవరు దూకగలరు? జాంబవంతుడు మెల్లగా హనుమంతుడి వైపు తిరిగాడు…',
      },
    ],
  },
  {
    id: 'yakshas-questions-at-the-lake',
    added: '2026-10-20',
    epic: 'Mahabharata',
    chars: ['Yudhiṣṭhira', 'Yama', 'Bhīma', 'Arjuna', 'Nakula', 'Sahadeva'],
    title: { en: 'The Yakṣa\'s Questions at the Lake', te: 'సరస్సు దగ్గర యక్ష ప్రశ్నలు' },
    moral: { en: 'A calm mind and a fair heart can pass the hardest test.', te: 'ప్రశాంతమైన మనస్సు, న్యాయమైన హృదయం ఎంత కష్టమైన పరీక్షనైనా గెలుస్తాయి.' },
    cover: { bg: 'river', props: [['sun', 60, 70, 0.9], ['person', 150, 198, 1.4, { cloth: '#f0c040', tilak: true }], ['rock', 290, 202, 1.5], ['bird', 292, 175, 2.6, { color: '#f4f4f4', wing: '#d8d8d8', flip: true }], ['lotus', 220, 206, 0.9], ['lotus', 360, 206, 0.8]] },
    pages: [
      {
        scene: { bg: 'forest', props: [['deer', 330, 196, 1.4], ['person', 70, 198, 1.2, { cloth: '#f0c040' }], ['person', 120, 198, 1.35, { cloth: '#a83a3a' }], ['person', 170, 198, 1.2, { cloth: '#3a6ab0' }], ['person', 215, 198, 1.05, { cloth: '#4f9d69' }], ['person', 255, 198, 1.05, { cloth: '#7a5ab0' }], ['cloud', 120, 45, 0.9]] },
        en: 'Near the end of their twelve years in the forest, the five Pāṇḍava brothers heard a cry. "Help! A deer has run off with my fire-sticks caught in its antlers!" It was a poor brāhmaṇa. Without those sticks he could not light his holy fire. The brothers chased the deer deep into the woods, but it vanished. Hot and thirsty, they sat down under a tree. Nakula climbed up and spotted a sparkling lake with cranes beside it. He ran to fetch water. As he bent to drink, a voice boomed: "Stop! This lake is mine. Answer my questions first, then drink." But Nakula was too thirsty to listen. He drank — and fell to the ground as if in a deep sleep.',
        te: 'అడవిలో పన్నెండేళ్ళ వనవాసం దాదాపు ముగుస్తున్న సమయం. ఒక రోజు పాండవులకు ఒక కేక వినిపించింది. "రక్షించండి! నా అరణి కర్రలు ఒక జింక కొమ్ములకు చిక్కుకున్నాయి, అది పారిపోయింది!" అని ఒక పేద బ్రాహ్మణుడు అరిచాడు. ఆ కర్రలు లేకపోతే ఆయన యజ్ఞానికి అగ్ని రగిలించలేడు. ఐదుగురు అన్నదమ్ములూ జింక వెంట అడవి లోపలికి పరుగెత్తారు. కానీ అది మాయమైపోయింది. ఎండకు అలసిపోయి, దాహంతో వాళ్ళు ఒక చెట్టు కింద కూర్చున్నారు. నకులుడు చెట్టెక్కి చూస్తే, పక్కన కొంగలు ఉన్న ఒక మెరిసే సరస్సు కనిపించింది. అతడు నీళ్ళు తేవడానికి పరుగెత్తాడు. నీళ్ళు తాగబోతుండగా ఒక గంభీరమైన గొంతు వినిపించింది: "ఆగు! ఈ సరస్సు నాది. ముందు నా ప్రశ్నలకు జవాబు చెప్పు, తరువాత తాగు." కానీ దాహం ఎక్కువై నకులుడు ఆ మాట వినలేదు. నీళ్ళు తాగాడు — వెంటనే గాఢ నిద్రలోకి జారినట్టు నేల మీద పడిపోయాడు.',
      },
      {
        scene: { bg: 'river', props: [['person', 110, 198, 1.4, { cloth: '#f0c040', tilak: true }], ['rock', 300, 202, 1.5], ['bird', 302, 175, 2.6, { color: '#f4f4f4', wing: '#d8d8d8', flip: true }], ['lotus', 200, 206, 0.9], ['cloud', 250, 45, 1], ['sun', 50, 60, 0.7]] },
        en: 'One by one, Sahadeva, Arjuna and Bhīma came looking for him. Each heard the same voice. Arjuna shot arrows into the empty air. Bhīma roared, "Who dares to stop me?" Each one drank, and each one fell beside the others. At last Yudhiṣṭhira came. His heart broke to see his four brothers lying so still. Then he saw a big white crane standing on a rock. "I am a yakṣa," it said. "They did not listen to me. Will you?" Yudhiṣṭhira folded his hands. "I will not take what is yours. Ask, and I will answer as well as I can." So the yakṣa began. "What is faster than the wind?" "The mind." "What is greater than the earth?" "A mother." "What is higher than the sky?" "A father."',
        te: 'నకులుడిని వెతుక్కుంటూ ఒకరి తరువాత ఒకరు — సహదేవుడు, అర్జునుడు, భీముడు — వచ్చారు. ప్రతి ఒక్కరికీ అదే గొంతు వినిపించింది. అర్జునుడు ఎవరూ కనిపించని గాలిలోకి బాణాలు వేశాడు. భీముడు "నన్ను ఆపేది ఎవరు?" అని గర్జించాడు. ప్రతి ఒక్కరూ నీళ్ళు తాగారు, ప్రతి ఒక్కరూ మిగతావారి పక్కనే పడిపోయారు. చివరకు ధర్మరాజు వచ్చాడు. కదలకుండా పడి ఉన్న నలుగురు తమ్ముళ్ళను చూసి ఆయన గుండె చెరువైంది. అప్పుడు ఒక బండ మీద నిలుచున్న పెద్ద తెల్లని కొంగ కనిపించింది. "నేను యక్షుడిని," అంది అది. "వాళ్ళు నా మాట వినలేదు. నువ్వు వింటావా?" ధర్మరాజు చేతులు జోడించాడు. "నీది అయినదాన్ని నేను తీసుకోను. అడుగు, నాకు తెలిసినంత వరకు జవాబు చెబుతాను." యక్షుడు అడగడం మొదలుపెట్టాడు. "గాలి కంటే వేగమైనది ఏది?" "మనస్సు." "భూమి కంటే గొప్పది ఏది?" "తల్లి." "ఆకాశం కంటే ఎత్తైనది ఏది?" "తండ్రి."',
      },
      {
        scene: { bg: 'river', props: [['person', 90, 198, 1.3, { cloth: '#f0c040', tilak: true }], ['person', 230, 198, 1.6, { skin: 'dark', cloth: '#a83a3a', crown: true, raise: true }], ['person', 300, 198, 1.1, { cloth: '#4f9d69' }], ['person', 345, 198, 1.1, { cloth: '#a83a3a' }], ['sun', 160, 60, 1]] },
        en: 'The questions went on and on, and Yudhiṣṭhira answered each one calmly. "What is the greatest wonder in the world?" asked the yakṣa. "Every day we see living beings leave this world, yet each of us thinks we will stay here forever. That is the greatest wonder." The yakṣa was pleased. "Choose one brother, and I will wake him." Yudhiṣṭhira thought, then said, "Let Nakula live." "Not mighty Bhīma? Not Arjuna, the great archer?" "My father had two queens, Kuntī and Mādrī. I, Kuntī\'s son, am alive. So let one son of Mādrī live too. That is fair." At once the crane became a shining god. It was Yama, lord of dharma — Yudhiṣṭhira\'s own father! "My son, you chose fairness over your own gain," he said. And all four brothers woke up, smiling.',
        te: 'ప్రశ్నలు ఒకదాని తరువాత ఒకటి వస్తూనే ఉన్నాయి. ధర్మరాజు ప్రశాంతంగా అన్నింటికీ జవాబు చెప్పాడు. "ఈ లోకంలో అన్నిటికంటే గొప్ప ఆశ్చర్యం ఏది?" అని అడిగాడు యక్షుడు. "ప్రాణులు రోజూ ఈ లోకం విడిచి వెళ్ళిపోవడం మనం చూస్తూనే ఉంటాం. అయినా మనలో ప్రతి ఒక్కరూ తాను మాత్రం ఎప్పటికీ ఇక్కడే ఉంటానని అనుకుంటారు. అదే గొప్ప ఆశ్చర్యం." యక్షుడు సంతోషించాడు. "నీ తమ్ముళ్ళలో ఒకరిని కోరుకో, అతన్ని మేల్కొలుపుతాను." ధర్మరాజు కాసేపు ఆలోచించి, "నకులుడిని బతికించు," అన్నాడు. "బలశాలి భీముడిని కాదా? గొప్ప విలుకాడు అర్జునుడిని కాదా?" "మా తండ్రికి కుంతి, మాద్రి అని ఇద్దరు రాణులు. కుంతి కొడుకునైన నేను బతికే ఉన్నాను. మాద్రి కొడుకుల్లో కూడా ఒకరు బతకాలి. అదే న్యాయం." ఆ మాట వినగానే కొంగ వెలుగులు చిమ్మే దేవుడిగా మారింది. ఆయన ధర్మదేవుడైన యమధర్మరాజు — ధర్మరాజు సొంత తండ్రి! "నాయనా, నీ లాభం కంటే న్యాయాన్నే ఎంచుకున్నావు," అన్నాడు ఆయన. వెంటనే నలుగురు తమ్ముళ్ళూ చిరునవ్వుతో నిద్ర లేచారు.',
      },
    ],
  },
  {
    id: 'hanuman-meets-sita',
    added: '2026-10-20',
    epic: 'Ramayana',
    chars: ['Hanumān', 'Sītā', 'Rāvaṇa', 'Trijaṭā'],
    title: { en: 'Hanumān Meets Sītā in the Aśoka Garden', te: 'అశోక వనంలో సీతమ్మను చూసిన హనుమంతుడు' },
    moral: { en: 'Hope and courage keep us strong, even in the darkest place.', te: 'ఎంత చీకటిలో ఉన్నా ఆశ, ధైర్యం మనల్ని బలంగా ఉంచుతాయి.' },
    cover: { bg: 'night', props: [['moon', 340, 60, 0.9], ['tree', 250, 198, 1.7], ['person', 215, 198, 1.25, { female: true, skin: 'fair', cloth: '#e0c060', pallu: '#c9a040' }], ['monkey', 272, 118, 0.6, { color: '#d9772a' }], ['flowers', 100, 200, 1.2], ['flowers', 150, 202, 0.9]] },
    pages: [
      {
        scene: { bg: 'night', props: [['moon', 60, 60, 0.9], ['lanka', 240, 185, 1.8], ['monkey', 95, 196, 0.55, { color: '#d9772a' }], ['tree', 360, 198, 1]] },
        en: 'After his mighty leap across the ocean, Hanumān landed on a hill outside Laṅkā. The city glittered with gold, and fierce guards watched every gate. "If they see a big monkey, they will raise the alarm," thought Hanumān. So when night fell, he made himself as small as a cat and slipped inside. He crept through palaces and halls, peeping into every room, but Sītā was nowhere. He began to worry. Then he found a quiet garden full of aśoka trees. Under one tree sat a lady in a faded yellow sari, thin and sad, with demon guards all around her. "That must be Mother Sītā!" Hanumān hid among the leaves of the tree above her.',
        te: 'సముద్రం మీదుగా గొప్ప దూకు దూకిన తరువాత హనుమంతుడు లంక బయట ఒక కొండ మీద దిగాడు. ఆ నగరం బంగారంతో మెరిసిపోతోంది. ప్రతి ద్వారం దగ్గరా భయంకరమైన కాపలాదారులు ఉన్నారు. "ఇంత పెద్ద కోతిని చూస్తే వీళ్ళు అందరినీ అప్రమత్తం చేస్తారు," అనుకున్నాడు హనుమంతుడు. అందుకే చీకటి పడగానే పిల్లి అంత చిన్నగా మారి మెల్లగా లోపలికి దూరాడు. రాజభవనాల్లో, మందిరాల్లో తిరుగుతూ ప్రతి గదిలోకీ తొంగి చూశాడు. కానీ సీతాదేవి ఎక్కడా కనిపించలేదు. ఆయనకు దిగులు మొదలైంది. అప్పుడు అశోక చెట్లతో నిండిన ఒక నిశ్శబ్దమైన వనం కనిపించింది. ఒక చెట్టు కింద, వాడిపోయిన పసుపు చీరలో, చిక్కిపోయి దిగులుగా ఒక స్త్రీ కూర్చుని ఉంది. ఆమె చుట్టూ రాక్షస స్త్రీలు కాపలా ఉన్నారు. "ఈమే సీతమ్మ తల్లి!" అనుకుని హనుమంతుడు ఆమె పైన ఉన్న చెట్టు ఆకుల మధ్య దాక్కున్నాడు.',
      },
      {
        scene: { bg: 'night', props: [['moon', 60, 55, 0.8], ['tree', 300, 198, 1.6], ['person', 285, 198, 1.2, { female: true, skin: 'fair', cloth: '#e0c060', pallu: '#c9a040' }], ['monkey', 322, 120, 0.55, { color: '#d9772a' }], ['demon', 130, 198, 1.2, { color: '#4a4a7a', raise: true }], ['fire', 200, 198, 0.7]] },
        en: 'Just before dawn, Rāvaṇa strode into the garden with his queens and flashing lamps. "Sītā, forget Rāma," he boomed. "Be my queen, and all Laṅkā is yours." Sītā picked up a blade of grass and placed it between them, as if he were not worth looking at. "I belong to Rāma, just as light belongs to the Sun," she said. "Send me back to him, or his arrows will come for you." Rāvaṇa stormed off in a rage, ordering the guards to frighten her. But a wise old guard named Trijaṭā said, "Stop! Last night I dreamed that Rāma came in glory and Laṅkā fell. Be kind to this lady." Up in the tree, Hanumān\'s heart swelled. How brave Mother Sītā was!',
        te: 'తెల్లవారే ముందు రావణుడు తన రాణులతో, వెలుగుతున్న దీపాలతో వనంలోకి వచ్చాడు. "సీతా, రాముడిని మరచిపో," అని గర్జించాడు. "నా రాణివి అయితే లంక అంతా నీదే." సీతాదేవి ఒక గడ్డిపోచను తీసి తనకూ అతనికీ మధ్య పెట్టింది — అతని ముఖం చూడడానికి కూడా ఇష్టం లేనట్టు. "సూర్యుడి నుంచి వెలుగును వేరు చేయలేనట్టే, నన్ను రాముడి నుంచి వేరు చేయలేవు," అంది ఆమె. "నన్ను ఆయన దగ్గరకు పంపించు. లేకపోతే ఆయన బాణాలు నిన్ను వెతుక్కుంటూ వస్తాయి." రావణుడు కోపంతో వెళ్ళిపోయాడు, ఆమెను భయపెట్టమని కాపలాదారులకు ఆజ్ఞాపించాడు. కానీ త్రిజట అనే తెలివైన ముసలి రాక్షసి, "ఆగండి! రాత్రి నాకు ఒక కల వచ్చింది. రాముడు వైభవంగా వచ్చాడు, లంక కూలిపోయింది. ఈమెతో దయగా ఉండండి," అంది. చెట్టు మీద ఉన్న హనుమంతుడి హృదయం పొంగిపోయింది. సీతమ్మ ఎంత ధైర్యవంతురాలు!',
      },
      {
        scene: { bg: 'night', props: [['moon', 340, 55, 0.9], ['tree', 300, 198, 1.6], ['person', 220, 198, 1.25, { female: true, skin: 'fair', cloth: '#e0c060', pallu: '#c9a040', raise: true }], ['monkey', 150, 196, 0.95, { color: '#d9772a' }], ['flowers', 70, 200, 1.1]] },
        en: 'When the guards dozed off, Hanumān began to sing softly from the branches — the story of Rāma, from Ayodhyā to the forest. Sītā looked up in wonder. Down climbed a small monkey, who bowed low. "Mother, I am Hanumān, Rāma\'s messenger. He thinks of you every moment." Sītā feared this was another of Rāvaṇa\'s tricks — until Hanumān placed a ring in her hand. It was Rāma\'s own ring, with his name on it! Tears of joy ran down her cheeks. "Sit on my back, Mother, and I will carry you home right now," said Hanumān. Sītā smiled. "No, my child. Rāma himself must come and win me back. Give him this." She handed him her shining hair-jewel. "Tell him I am waiting."',
        te: 'కాపలాదారులు కునుకు తీయగానే హనుమంతుడు కొమ్మల మధ్య నుంచి మెల్లగా పాడడం మొదలుపెట్టాడు — అయోధ్య నుంచి అడవి వరకు రాముడి కథ. సీతాదేవి ఆశ్చర్యంగా పైకి చూసింది. ఒక చిన్న కోతి కిందికి దిగి వచ్చి వినయంగా నమస్కరించింది. "అమ్మా, నేను హనుమంతుడిని, రాముడి దూతను. ఆయన ప్రతి క్షణం మిమ్మల్నే తలచుకుంటున్నారు." ఇది కూడా రావణుడి మాయేనేమో అని సీతాదేవి భయపడింది. అప్పుడు హనుమంతుడు ఆమె చేతిలో ఒక ఉంగరం పెట్టాడు. అది రాముడి సొంత ఉంగరం — దాని మీద ఆయన పేరు ఉంది! ఆమె కళ్ళ నుంచి ఆనందబాష్పాలు జారాయి. "అమ్మా, నా వీపు మీద కూర్చోండి. ఇప్పుడే మిమ్మల్ని ఇంటికి తీసుకెళ్తాను," అన్నాడు హనుమంతుడు. సీతాదేవి చిరునవ్వు నవ్వింది. "వద్దు నాయనా. రాముడే స్వయంగా వచ్చి నన్ను గెలుచుకుని తీసుకెళ్ళాలి. ఇది ఆయనకు ఇవ్వు," అంటూ తన మెరిసే చూడామణిని ఇచ్చింది. "నేను ఎదురుచూస్తున్నానని చెప్పు."',
      },
    ],
  },
  {
    id: 'arjuna-and-shiva-the-hunter',
    added: '2026-10-20',
    epic: 'Mahabharata',
    chars: ['Arjuna', 'Śiva', 'Pārvatī', 'Vyāsa'],
    title: { en: 'Arjuna and Śiva the Hunter — the Pāśupata', te: 'వేటగాడిగా వచ్చిన శివుడు — అర్జునుడికి పాశుపతం' },
    moral: { en: 'Never give up — and stay humble, however strong you are.', te: 'ఎప్పుడూ వెనకడుగు వేయకు; ఎంత బలవంతుడివైనా వినయంగా ఉండు.' },
    cover: { bg: 'mountain', props: [['archer', 90, 198, 1.4, { cloth: '#3a6ab0' }], ['boar', 205, 198, 1.2, { flip: true }], ['archer', 330, 198, 1.5, { skin: 'dark', cloth: '#7a5a3a', flip: true }], ['cloud', 200, 45, 0.9]] },
    pages: [
      {
        scene: { bg: 'mountain', props: [['person', 200, 198, 1.5, { cloth: '#f4ead2', raise: true }], ['sun', 340, 70, 0.9], ['cloud', 80, 50, 0.9], ['tree', 360, 198, 0.8], ['tree', 40, 198, 0.8]] },
        en: 'During the years in the forest, the sage Vyāsa told the Pāṇḍavas, "One day there may be a great war. Arjuna must win divine weapons from the gods." So Arjuna said goodbye to his brothers and Draupadī and climbed high into the Himālayas. There, among the snowy peaks, he began a hard tapas to please Lord Śiva. First he ate only fallen leaves, then he lived on air alone, standing still in prayer for months. His tapas grew so strong that the hills seemed to tremble. The mountain sages hurried to Śiva. "Lord, Arjuna\'s prayer is shaking the mountains!" Śiva smiled. "I know. I will go and test him myself." And with Pārvatī by his side, he took the form of a wild forest hunter.',
        te: 'అరణ్యవాసం సమయంలో వ్యాస మహర్షి పాండవులతో, "ముందు ముందు ఒక పెద్ద యుద్ధం రావచ్చు. అర్జునుడు దేవతల నుంచి దివ్యాస్త్రాలు సంపాదించాలి," అని చెప్పాడు. అందుకే అర్జునుడు అన్నదమ్ములకు, ద్రౌపదికి వీడ్కోలు చెప్పి హిమాలయాల పైకి వెళ్ళాడు. మంచు శిఖరాల మధ్య శివుడి కోసం కఠినమైన తపస్సు మొదలుపెట్టాడు. మొదట రాలిన ఆకులు మాత్రమే తిన్నాడు, తరువాత గాలి మాత్రమే పీల్చి బతికాడు. నెలల తరబడి కదలకుండా ప్రార్థనలో నిలుచున్నాడు. ఆ తపస్సు శక్తికి కొండలే వణికినట్టు అనిపించింది. అక్కడి మునులు శివుడి దగ్గరకు పరుగెత్తారు. "స్వామీ, అర్జునుడి తపస్సుకు పర్వతాలు కంపిస్తున్నాయి!" శివుడు చిరునవ్వు నవ్వాడు. "నాకు తెలుసు. నేనే వెళ్ళి అతన్ని పరీక్షిస్తాను." పార్వతీదేవిని వెంట తీసుకుని ఆయన ఒక అడవి వేటగాడి రూపం ధరించాడు.',
      },
      {
        scene: { bg: 'forest', props: [['archer', 80, 198, 1.35, { cloth: '#3a6ab0' }], ['boar', 205, 198, 1.3, { flip: true }], ['arrow', 180, 150, 0.8], ['archer', 318, 198, 1.5, { skin: 'dark', cloth: '#7a5a3a', flip: true }], ['person', 370, 198, 1.2, { female: true, skin: 'dark', cloth: '#4f9d4f', pallu: '#c0392b' }]] },
        en: 'Just then a demon named Mūka, disguised as a huge wild boar, came charging at Arjuna. Arjuna grabbed his bow, the Gāṇḍīva, and shot. At that very moment a tall hunter stepped out of the trees and shot too. Both arrows struck the boar, and the demon was gone. "That boar was mine!" said the hunter. "I aimed first!" "No, it was mine," said Arjuna. They argued, and then they fought. Arjuna shot arrow after arrow, but the hunter only smiled and caught them. Soon even Arjuna\'s magic quiver, which never ran empty, was empty! He swung his bow — the hunter took it away. They wrestled, and the hunter held him so tightly that Arjuna fell to the ground, out of breath.',
        te: 'అదే సమయంలో మూకుడు అనే రాక్షసుడు పెద్ద అడవిపంది రూపంలో అర్జునుడి మీదకు దూసుకొచ్చాడు. అర్జునుడు తన గాండీవం అందుకుని బాణం వేశాడు. సరిగ్గా అదే క్షణంలో చెట్ల మధ్య నుంచి ఒక పొడవైన వేటగాడు వచ్చి తానూ బాణం వేశాడు. రెండు బాణాలూ పందికి తగిలాయి, రాక్షసుడు అంతమయ్యాడు. "ఆ పంది నాది! నేనే ముందు గురి పెట్టాను!" అన్నాడు వేటగాడు. "కాదు, అది నాది," అన్నాడు అర్జునుడు. ఇద్దరూ వాదించుకున్నారు, తరువాత యుద్ధానికి దిగారు. అర్జునుడు బాణం మీద బాణం వేశాడు. కానీ వేటగాడు నవ్వుతూ వాటన్నిటినీ పట్టుకున్నాడు. ఎప్పటికీ ఖాళీ కాని అర్జునుడి అక్షయ తూణీరం కూడా ఖాళీ అయిపోయింది! విల్లుతో కొట్టబోతే వేటగాడు ఆ విల్లునే లాగేసుకున్నాడు. ఇద్దరూ కుస్తీ పట్టారు. వేటగాడు గట్టిగా పట్టుకోవడంతో అర్జునుడు ఊపిరి ఆడక నేల మీద పడిపోయాడు.',
      },
      {
        scene: { bg: 'mountain', props: [['linga', 90, 198, 1.3], ['person', 160, 198, 1.2, { cloth: '#3a6ab0' }], ['person', 260, 198, 1.6, { skin: 'blue', cloth: '#c9952a', hair: '#3a2a1a', raise: true }], ['person', 330, 198, 1.35, { female: true, skin: 'fair', cloth: '#4f9d4f', pallu: '#c0392b' }], ['bow', 215, 198, 0.9]] },
        en: 'Arjuna sat up, puzzled. "No one has ever beaten me like this," he thought. "I need Lord Śiva\'s help." He shaped a small Śiva-liṅga out of clay, laid a garland of flowers on it, and prayed with all his heart. Then he looked up — and gasped. The very garland he had offered was now around the hunter\'s neck! "You are Śiva himself!" cried Arjuna, falling at his feet. "Forgive me for fighting you, Lord." The hunter changed into shining Śiva, with Pārvatī beside him. "There is nothing to forgive, Arjuna. You fought bravely and never gave up. I am pleased with you." He gave back the Gāṇḍīva, and then gave Arjuna his own mighty weapon, the Pāśupata — to be used only to protect what is right.',
        te: 'అర్జునుడు లేచి కూర్చుని ఆశ్చర్యపోయాడు. "ఇంత వరకు నన్ను ఎవరూ ఇలా ఓడించలేదు. నాకు శివుడి సహాయం కావాలి," అనుకున్నాడు. మట్టితో ఒక చిన్న శివలింగం చేసి, దాని మీద పూలమాల వేసి, మనస్ఫూర్తిగా ప్రార్థించాడు. తరువాత తల ఎత్తి చూసి ఆశ్చర్యంతో నిలిచిపోయాడు. తాను లింగానికి వేసిన పూలమాల ఇప్పుడు వేటగాడి మెడలో ఉంది! "మీరు సాక్షాత్తూ శివుడే!" అని అర్జునుడు ఆయన పాదాల మీద పడ్డాడు. "స్వామీ, మీతో యుద్ధం చేసినందుకు నన్ను క్షమించండి." వేటగాడు వెలుగులు చిమ్మే శివుడిగా మారాడు. పక్కనే పార్వతీదేవి ఉంది. "క్షమించడానికి ఏమీ లేదు అర్జునా. నువ్వు ధైర్యంగా పోరాడావు, ఎక్కడా వెనకడుగు వేయలేదు. నిన్ను చూసి నాకు చాలా సంతోషం కలిగింది." ఆయన గాండీవాన్ని తిరిగి ఇచ్చి, తన మహాస్త్రమైన పాశుపతాన్ని అర్జునుడికి ప్రసాదించాడు — ధర్మాన్ని కాపాడడానికి మాత్రమే దాన్ని వాడమని చెప్పి.',
      },
    ],
  },
  {
    id: 'hanuman-sets-lanka-on-fire',
    added: '2026-10-21',
    epic: 'Ramayana',
    chars: ['Hanumān', 'Rāvaṇa', 'Indrajit', 'Vibhīṣaṇa', 'Sītā'],
    title: { en: 'Hanumān Sets Laṅkā on Fire', te: 'హనుమంతుడి లంకా దహనం' },
    moral: { en: 'Courage with a cool head can turn trouble into victory.', te: 'ధైర్యానికి నిదానం తోడైతే కష్టం కూడా విజయంగా మారుతుంది.' },
    cover: { bg: 'night', props: [['moon', 60, 55, 0.8], ['lanka', 200, 196, 2], ['fire', 120, 120, 0.6], ['fire', 175, 92, 0.75], ['fire', 255, 104, 0.7], ['hanuman', 320, 80, 0.7]] },
    pages: [
      {
        scene: { bg: 'forest', props: [['tree', 50, 198, 1.1], ['rock', 120, 200, 0.8], ['monkey', 180, 196, 1.4, { color: '#d9772a' }], ['mace', 212, 198, 1], ['demon', 290, 198, 0.95, { raise: true }], ['demon', 355, 198, 0.85, { color: '#5a7a5a', bald: true, flip: true }]] },
        en: 'Hanumān had found Sītā and given her Rāma\'s ring. But before going home, he thought, "Let me show Rāvaṇa how strong Rāma\'s friends are." So he began to pull up the trees of the Aśoka garden — every tree except the one where Sītā sat. Crash! Snap! The guards came running, and then whole armies of demons. Hanumān swung a great iron bar and sent them all flying. At last Rāvaṇa\'s son Indrajit came in his chariot and shot the Brahmāstra, the weapon of Lord Brahmā. Hanumān could have broken free, but out of respect for Brahmā, he let himself be tied up. "Good," he smiled. "Now they will take me straight to Rāvaṇa."',
        te: 'హనుమంతుడు సీతమ్మను చూసి, రాముడి ఉంగరాన్ని ఆమెకు ఇచ్చాడు. కానీ తిరిగి వెళ్ళే ముందు ఇలా అనుకున్నాడు: "రాముడి మిత్రులు ఎంత బలవంతులో రావణుడికి చూపిస్తాను." వెంటనే అశోక వనంలోని చెట్లను పెకలించడం మొదలుపెట్టాడు — సీతమ్మ కూర్చున్న చెట్టును తప్ప. ఢాం! ఫట్! కాపలాదారులు పరుగెత్తుకొచ్చారు, తరువాత రాక్షసుల సైన్యాలే వచ్చాయి. హనుమంతుడు ఒక పెద్ద ఇనుప దండాన్ని గిరగిరా తిప్పి వాళ్ళందరినీ దూరంగా విసిరేశాడు. చివరకు రావణుడి కొడుకు ఇంద్రజిత్తు రథం మీద వచ్చి బ్రహ్మదేవుడి అస్త్రమైన బ్రహ్మాస్త్రాన్ని ప్రయోగించాడు. హనుమంతుడు ఆ బంధాన్ని తెంచుకుని బయటపడగలిగేవాడే. కానీ బ్రహ్మదేవుడి మీద గౌరవంతో కట్టుబడిపోయాడు. "మంచిది," అని నవ్వుకున్నాడు. "ఇప్పుడు వీళ్ళే నన్ను నేరుగా రావణుడి దగ్గరకు తీసుకెళతారు."',
      },
      {
        scene: { bg: 'court', props: [['throne', 100, 196, 1.2], ['demon', 100, 192, 1.1, { cloth: '#f0c040' }], ['person', 195, 198, 1.2, { skin: 'dark', cloth: '#4a7a5a', raise: true }], ['tail', 300, 198, 0.45], ['tail', 300, 184, 0.42], ['tail', 300, 170, 0.39], ['tail', 300, 156, 0.36], ['tail', 300, 142, 0.33], ['monkey', 300, 136, 1.05, { color: '#d9772a' }]] },
        en: 'In his golden hall, Rāvaṇa sat on a high throne, his ten heads glittering with crowns. No one offered Hanumān a seat. So, it is said, he stretched his tail longer and longer, coiled it into a tall tower, and sat on top — higher than the king himself! "Who are you, monkey?" roared Rāvaṇa. "I am Hanumān, messenger of Rāma," came the calm reply. "Return Sītā to him with respect, and ask his pardon. That is the only way to save Laṅkā." Rāvaṇa shook with rage. "Kill him!" But his younger brother Vibhīṣaṇa stood up. "Brother, a messenger must never be killed. Punish him some other way."',
        te: 'తన బంగారు సభలో రావణుడు ఎత్తైన సింహాసనం మీద కూర్చున్నాడు. అతని పది తలల మీద కిరీటాలు మెరుస్తున్నాయి. హనుమంతుడికి ఎవరూ ఆసనం ఇవ్వలేదు. అప్పుడు అతడు తన తోకను పొడవుగా, ఇంకా పొడవుగా పెంచి, దాన్ని చుట్టలు చుట్టలుగా ఎత్తైన గోపురంలా చుట్టి, దాని మీద కూర్చున్నాడని చెబుతారు — రాజు కంటే ఎత్తులో! "కోతీ, ఎవరు నువ్వు?" అని రావణుడు గర్జించాడు. "నేను హనుమంతుడిని, శ్రీరాముడి దూతను," అని ప్రశాంతంగా జవాబు వచ్చింది. "సీతమ్మను గౌరవంగా రాముడికి అప్పగించి, ఆయనను క్షమించమని వేడుకో. లంకను కాపాడుకోవడానికి అదొక్కటే దారి." రావణుడు కోపంతో ఊగిపోయాడు. "వీడిని చంపండి!" కానీ అతని తమ్ముడు విభీషణుడు లేచి నిలబడ్డాడు. "అన్నా, దూతను ఎన్నడూ చంపకూడదు. వేరే విధంగా శిక్షించు."',
      },
      {
        scene: { bg: 'night', props: [['moon', 350, 45, 0.7], ['lanka', 230, 198, 1.9], ['fire', 150, 124, 0.6], ['fire', 205, 94, 0.75], ['fire', 285, 106, 0.7], ['hanuman', 120, 90, 0.75], ['fire', 55, 74, 0.5]] },
        en: '"Then set his tail on fire!" ordered Rāvaṇa. The demons wrapped Hanumān\'s tail in old cloth, soaked it in oil and lit it. Laughing and beating drums, they paraded him through the streets. When Sītā heard, she prayed, "O Fire god, if I have always been true, be cool to Hanumān." And the flames felt as cool as sandal paste! Suddenly Hanumān shrank, slipped out of the ropes, and grew huge again. With his blazing tail he leapt from rooftop to rooftop, and the golden palaces of Laṅkā went up in flames. Then he dipped his tail in the sea, made sure Sītā was safe, and leapt back across the ocean to bring Rāma the good news.',
        te: '"అలా అయితే వీడి తోకకు నిప్పు పెట్టండి!" అని రావణుడు ఆజ్ఞాపించాడు. రాక్షసులు హనుమంతుడి తోకకు పాత గుడ్డలు చుట్టి, నూనెలో ముంచి, నిప్పు అంటించారు. నవ్వుతూ, డప్పులు కొడుతూ అతన్ని వీధుల్లో ఊరేగించారు. ఈ సంగతి విన్న సీతమ్మ, "అగ్నిదేవా, నేను ఎప్పుడూ సత్యంగానే ఉన్నదాన్నయితే, హనుమంతుడిని చల్లగా చూడు," అని ప్రార్థించింది. ఆ మంటలు అతనికి చందనంలా చల్లగా అనిపించాయి! ఒక్కసారిగా హనుమంతుడు చిన్నగా మారి తాళ్ళ నుంచి జారిపోయి, మళ్ళీ పెద్దగా పెరిగాడు. మండుతున్న తోకతో ఒక మేడ మీద నుంచి మరో మేడ మీదికి దూకాడు. లంకలోని బంగారు భవనాలు మంటల్లో చిక్కుకున్నాయి. తరువాత తోకను సముద్రంలో ముంచి మంట ఆర్పుకున్నాడు. సీతమ్మ క్షేమంగా ఉందని చూసుకుని, ఈ శుభవార్త రాముడికి చెప్పడానికి సముద్రం మీదుగా తిరిగి ఎగిరాడు.',
      },
    ],
  },
  {
    id: 'arjuna-and-urvashi',
    added: '2026-10-21',
    epic: 'Mahabharata',
    chars: ['Arjuna', 'Indra', 'Urvaśī', 'Citrasena'],
    title: { en: 'Arjuna in Indra\'s Heaven — Urvaśī\'s Curse', te: 'స్వర్గంలో అర్జునుడు — ఊర్వశి శాపం' },
    moral: { en: 'Doing right may cost you something, but in the end it always brings good.', te: 'సరైన పని చేస్తే కొంత కష్టం రావచ్చు, కానీ చివరకు అదే మేలు చేస్తుంది.' },
    cover: { bg: 'palace', props: [['cloud', 60, 55, 1], ['cloud', 340, 60, 0.9], ['person', 150, 198, 1.35, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040', raise: true }], ['person', 255, 198, 1.45, { skin: 'wheat', cloth: '#3a6ab0' }], ['bow', 285, 198, 1]] },
    pages: [
      {
        scene: { bg: 'sky', props: [['sun', 345, 70, 1], ['cloud', 70, 60, 0.9], ['cloud', 195, 172, 2.2], ['person', 190, 128, 0.75, { skin: 'wheat', cloth: '#3a6ab0' }], ['chariot', 200, 152, 1.3], ['cloud', 300, 45, 0.8]] },
        en: 'While the Pāṇḍavas lived in the forest, Arjuna went to the Himālayas and won the Pāśupata weapon from Lord Śiva. Soon after, a shining chariot rolled down from the clouds. Its driver, Mātali, bowed. "Indra, king of the gods, wishes to see his son Arjuna!" Up and up they flew, to Amarāvatī, the city of the gods, where flowers never fade. Indra hugged Arjuna and seated him beside his own throne. Arjuna stayed there for five years. He learned the gods\' own weapons — of thunder, wind and fire. And Indra said, "Learn music and dance too, my son. One day you will need them." So the gandharva Citrasena became his teacher.',
        te: 'పాండవులు అడవిలో ఉన్న రోజుల్లో అర్జునుడు హిమాలయాలకు వెళ్ళి శివుడి నుంచి పాశుపతాస్త్రాన్ని పొందాడు. కొద్ది సేపటికే మేఘాల నుంచి మెరిసిపోతున్న ఒక రథం కిందికి దిగి వచ్చింది. దాని సారథి మాతలి నమస్కరించి, "దేవతల రాజు ఇంద్రుడు తన కుమారుడైన అర్జునుడిని చూడాలనుకుంటున్నాడు!" అన్నాడు. రథం పైకి, ఇంకా పైకి ఎగిరి, పూలు ఎప్పటికీ వాడని దేవనగరం అమరావతికి చేరుకుంది. ఇంద్రుడు అర్జునుడిని కౌగిలించుకుని తన సింహాసనం పక్కనే కూర్చోబెట్టుకున్నాడు. అర్జునుడు అక్కడ ఐదేళ్ళు ఉన్నాడు. ఉరుము, గాలి, అగ్ని వంటి దేవతల అస్త్రాలన్నీ నేర్చుకున్నాడు. "నాయనా, సంగీతం, నాట్యం కూడా నేర్చుకో. ఒక రోజు అవి నీకు పనికొస్తాయి," అన్నాడు ఇంద్రుడు. అలా గంధర్వుడైన చిత్రసేనుడు అర్జునుడికి గురువయ్యాడు.',
      },
      {
        scene: { bg: 'palace', props: [['drum', 60, 198, 1], ['person', 140, 198, 1.35, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040', raise: true }], ['flowers', 200, 200, 0.9], ['person', 270, 198, 1.4, { skin: 'wheat', cloth: '#3a6ab0' }], ['throne', 355, 196, 0.9], ['person', 355, 190, 1.05, { skin: 'fair', cloth: '#f0c040', crown: true }]] },
        en: 'One evening the heavenly dancer Urvaśī danced in Indra\'s hall. Her anklets jingled like rain, and everyone was spellbound. Arjuna watched her with deep respect. Indra noticed and thought, "My son likes Urvaśī." So he asked her to visit Arjuna. That night she came to him in her finest jewels, wishing to become his bride. But Arjuna stood up and folded his hands. "Mother, why have you come?" Urvaśī was astonished. "Mother? I am no mother of yours!" "Long ago you were the wife of King Purūravas, an ancestor of our Kuru family," said Arjuna. "So you are a mother of my whole family. I looked at you only with respect."',
        te: 'ఒక సాయంత్రం దేవనర్తకి ఊర్వశి ఇంద్రసభలో నాట్యం చేసింది. ఆమె అందెలు వాన చినుకుల్లా ఘల్లుమన్నాయి. అందరూ మైమరచిపోయారు. అర్జునుడు ఆమెను ఎంతో గౌరవంగా చూస్తున్నాడు. అది గమనించిన ఇంద్రుడు, "నా కుమారుడికి ఊర్వశి నచ్చింది," అనుకుని, అర్జునుడి దగ్గరకు వెళ్ళమని ఊర్వశికి చెప్పాడు. ఆ రాత్రి ఊర్వశి మంచి నగలు ధరించి, అర్జునుడిని పెళ్ళాడాలనే కోరికతో అతని దగ్గరకు వచ్చింది. కానీ అర్జునుడు లేచి నిలబడి చేతులు జోడించాడు. "అమ్మా, ఎందుకు వచ్చారు?" ఊర్వశి ఆశ్చర్యపోయింది. "అమ్మనా? నేను నీకు తల్లిని కాను!" "చాలా కాలం క్రితం మా కురువంశ పూర్వీకుడైన పురూరవ మహారాజుకు మీరు భార్య," అన్నాడు అర్జునుడు. "అందుకే మీరు మా వంశానికే తల్లి వంటివారు. నేను మిమ్మల్ని గౌరవంతోనే చూశాను."',
      },
      {
        scene: { bg: 'palace', props: [['person', 110, 198, 1.35, { female: true, skin: 'fair', cloth: '#d9577a', pallu: '#f0c040', raise: true }], ['person', 205, 198, 1.4, { skin: 'wheat', cloth: '#3a6ab0' }], ['throne', 320, 196, 1], ['person', 300, 198, 1.3, { skin: 'fair', cloth: '#f0c040', crown: true, raise: true }], ['cloud', 360, 50, 0.8]] },
        en: 'No one had ever refused Urvaśī before. Her eyes flashed with anger. "You turned me away!" she cried. "So be it! You will forget that you are a warrior, and live among women as a dance teacher!" Arjuna was shaken and went to Indra. But Indra smiled and put a hand on his shoulder. "My son, you did right. Your goodness pleases me more than any victory. And this curse will become a blessing. It will last only one year, and you may choose when." Years later, when the Pāṇḍavas had to live in disguise for one whole year, Arjuna used that very curse — and became Bṛhannalā, the dance teacher whom no one recognised!',
        te: 'ఊర్వశిని ఇంతవరకు ఎవరూ కాదనలేదు. ఆమె కళ్ళు కోపంతో మెరిశాయి. "నన్ను కాదన్నావు కదా! అందుకే నువ్వు వీరుడివని మరచిపోయి, స్త్రీల మధ్య నాట్యం నేర్పేవాడిగా బతుకుతావు!" అని శపించింది. అర్జునుడు కలవరపడి ఇంద్రుడి దగ్గరకు వెళ్ళాడు. ఇంద్రుడు చిరునవ్వుతో అతని భుజం మీద చేయి వేశాడు. "నాయనా, నువ్వు సరైన పనే చేశావు. ఏ విజయం కంటే నీ మంచితనమే నాకు ఎక్కువ సంతోషాన్ని ఇచ్చింది. ఈ శాపం నీకు వరంగా మారుతుంది. ఇది ఒక్క సంవత్సరం మాత్రమే ఉంటుంది, ఎప్పుడు అనేది నువ్వే ఎంచుకోవచ్చు." కొన్నేళ్ళ తరువాత పాండవులు ఒక సంవత్సరం పాటు మారువేషాల్లో బతకవలసి వచ్చినప్పుడు, అర్జునుడు ఈ శాపాన్నే ఉపయోగించుకున్నాడు — ఎవరూ గుర్తుపట్టలేని నాట్యాచార్యుడు బృహన్నలగా మారాడు!',
      },
    ],
  },
  {
    id: 'vibhishana-joins-rama',
    added: '2026-10-21',
    epic: 'Ramayana',
    chars: ['Vibhīṣaṇa', 'Rāvaṇa', 'Rāma', 'Sugrīva', 'Hanumān', 'Lakṣmaṇa'],
    title: { en: 'Vibhīṣaṇa Joins Rāma', te: 'రాముడి శరణు కోరిన విభీషణుడు' },
    moral: { en: 'Stand up for what is right, and good friends will stand by you.', te: 'ధర్మం వైపు నిలబడితే మంచి మిత్రులు నీకు తోడుగా నిలుస్తారు.' },
    cover: { bg: 'shore', props: [['sun', 60, 50, 0.9], ['lanka', 330, 150, 0.6], ['person', 160, 198, 1.45, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['bow', 188, 198, 1], ['person', 250, 198, 1.35, { skin: 'dark', cloth: '#4a7a5a', crown: true }], ['monkey', 90, 196, 1, { color: '#d9772a' }]] },
    pages: [
      {
        scene: { bg: 'court', props: [['throne', 100, 196, 1.2], ['demon', 100, 192, 1.1, { cloth: '#f0c040', raise: true }], ['person', 225, 198, 1.4, { skin: 'dark', cloth: '#4a7a5a' }], ['demon', 330, 198, 0.9, { color: '#5a7a5a', bald: true, flip: true }]] },
        en: 'After Hanumān set Laṅkā ablaze, Rāvaṇa called his ministers. "Rāma is coming with an army of monkeys. What shall we do?" "Fight! We will crush them!" shouted the boastful ones. But Rāvaṇa\'s younger brother, Vibhīṣaṇa, spoke calmly. "Brother, ever since Sītā came here, bad omens have filled our city. Rāma is good and mighty. Give Sītā back and make peace — that is right, and it will save Laṅkā." Rāvaṇa\'s face burned with anger. "You live in my palace, yet you praise my enemy! If you were not my brother, I would punish you. Get out of my sight!"',
        te: 'హనుమంతుడు లంకను కాల్చి వెళ్ళిన తరువాత రావణుడు తన మంత్రులను పిలిచాడు. "రాముడు వానర సైన్యంతో వస్తున్నాడు. ఏం చేద్దాం?" "యుద్ధం చేద్దాం! వాళ్ళను నలిపేద్దాం!" అని గొప్పలు చెప్పుకునేవాళ్ళు అరిచారు. కానీ రావణుడి తమ్ముడు విభీషణుడు ప్రశాంతంగా మాట్లాడాడు. "అన్నా, సీతమ్మ ఇక్కడికి వచ్చినప్పటి నుంచి మన నగరంలో అన్నీ అపశకునాలే కనిపిస్తున్నాయి. రాముడు ధర్మాత్ముడు, మహా బలవంతుడు. సీతమ్మను తిరిగి ఇచ్చి సంధి చేసుకో — అదే ధర్మం, అదే లంకను కాపాడుతుంది." రావణుడి ముఖం కోపంతో ఎర్రబడింది. "నా ఇంట్లో ఉంటూ నా శత్రువును పొగుడుతావా! నువ్వు నా తమ్ముడివి కాకపోతే నిన్ను శిక్షించేవాడిని. నా కళ్ళ ముందు నుంచి వెళ్ళిపో!"',
      },
      {
        scene: { bg: 'shore', props: [['cloud', 300, 108, 1.9], ['person', 288, 98, 0.85, { skin: 'dark', cloth: '#4a7a5a', raise: true }], ['person', 322, 98, 0.6, { skin: 'dark', cloth: '#5a5a8a' }], ['monkey', 70, 196, 1.2, { color: '#c9a26b' }], ['monkey', 135, 196, 1.1, { color: '#d9772a' }], ['person', 205, 198, 1.4, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['palm', 375, 198, 0.9]] },
        en: 'Sadly, Vibhīṣaṇa rose into the sky with four loyal friends and flew across the ocean to where Rāma\'s army was camped. "I am Vibhīṣaṇa, Rāvaṇa\'s brother," he called from above. "I have left everything behind. I have come to Rāma for shelter." The monkeys grew suspicious. "He is a demon, and Rāvaṇa\'s own brother," said King Sugrīva. "He may be a spy!" Others agreed. But Hanumān said, "I have watched his face. I see no trick in it. He spoke up for what is right, and he has come at the right time." Everyone turned to Rāma. What would he decide?',
        te: 'బాధతో విభీషణుడు తన నలుగురు నమ్మకమైన మిత్రులతో కలిసి ఆకాశంలోకి లేచి, సముద్రం దాటి రాముడి సైన్యం విడిది చేసిన చోటికి ఎగిరి వచ్చాడు. "నేను రావణుడి తమ్ముడు విభీషణుడిని," అని ఆకాశం నుంచే పిలిచాడు. "నేను అన్నీ వదులుకుని వచ్చాను. శ్రీరాముడి శరణు కోరుతున్నాను." వానరులకు అనుమానం వచ్చింది. "ఇతడు రాక్షసుడు, పైగా రావణుడి సొంత తమ్ముడు," అన్నాడు సుగ్రీవుడు. "గూఢచారి కావచ్చు!" మరికొందరు కూడా అదే అన్నారు. కానీ హనుమంతుడు, "నేను అతని ముఖం చూశాను. అందులో ఏ మోసమూ కనిపించడం లేదు. అతను ధర్మం వైపు నిలిచి మాట్లాడాడు, సరైన సమయంలో వచ్చాడు," అన్నాడు. అందరూ రాముడి వైపు చూశారు. ఆయన ఏం నిర్ణయిస్తాడు?',
      },
      {
        scene: { bg: 'shore', props: [['sun', 360, 45, 0.8], ['person', 80, 198, 1.3, { skin: 'fair', cloth: '#e8a23a' }], ['person', 160, 198, 1.45, { skin: 'blue', cloth: '#f0c040', tilak: true, raise: true }], ['pot', 196, 122, 0.55], ['person', 230, 198, 1.3, { skin: 'dark', cloth: '#4a7a5a', crown: true }], ['monkey', 305, 196, 1.1, { color: '#d9772a' }], ['monkey', 360, 196, 1, { color: '#c9a26b' }]] },
        en: 'Rāma smiled. "If anyone comes to me asking for shelter, I will protect him — even if he is Rāvaṇa himself. That is my promise." So Vibhīṣaṇa came down and bowed at Rāma\'s feet. Rāma lifted him up and embraced him like a brother. Then he said, "Lakṣmaṇa, bring water from the sea." Right there on the beach, before the whole army, Rāma poured the sea water over Vibhīṣaṇa\'s head and crowned him King of Laṅkā — even before the war had begun! The monkeys cheered, "Jai Śrī Rām!" Vibhīṣaṇa\'s eyes filled with tears. He had lost his home, but he had found a true friend.',
        te: 'రాముడు చిరునవ్వు నవ్వాడు. "శరణు కోరి వచ్చిన వారిని నేను తప్పక కాపాడతాను — స్వయంగా రావణుడే వచ్చినా సరే. ఇది నా మాట." అప్పుడు విభీషణుడు కిందికి దిగి వచ్చి రాముడి పాదాలకు నమస్కరించాడు. రాముడు అతన్ని పైకి లేవనెత్తి సోదరుడిలా కౌగిలించుకున్నాడు. తరువాత, "లక్ష్మణా, సముద్రపు నీళ్ళు తీసుకురా," అన్నాడు. అక్కడే, ఆ సముద్రపు ఒడ్డున, సైన్యమంతా చూస్తుండగా, రాముడు ఆ నీటితో విభీషణుడికి అభిషేకం చేసి అతన్ని లంకకు రాజుగా పట్టం కట్టాడు — యుద్ధం మొదలవకముందే! వానరులంతా "జై శ్రీరామ్!" అని హర్షధ్వానాలు చేశారు. విభీషణుడి కళ్ళు చెమర్చాయి. అతను ఇంటిని పోగొట్టుకున్నాడు, కానీ నిజమైన మిత్రుడిని పొందాడు.',
      },
    ],
  },
  {
    id: 'bhima-and-the-saugandhika-flowers',
    added: '2026-10-22',
    epic: 'Mahabharata',
    chars: ['Bhīma', 'Draupadī', 'Kubera', 'Yudhiṣṭhira', 'Ghaṭotkaca'],
    title: { en: 'Bhīma Fetches the Saugandhika Flowers', te: 'సౌగంధిక పుష్పాలు తెచ్చిన భీముడు' },
    moral: { en: 'Be brave for those you love — but stay humble and gentle too.', te: 'ప్రేమించిన వారి కోసం ధైర్యంగా ఉండు — కానీ వినయం, శాంతం విడువకు.' },
    cover: { bg: 'river', props: [['tree', 40, 175, 0.9], ['person', 120, 198, 1.5, { cloth: '#a8392a' }], ['mace', 148, 198, 1], ['lotus', 230, 202, 1.1], ['lotus', 290, 196, 0.9], ['lotus', 345, 205, 1.2], ['bee', 270, 150, 0.6]] },
    pages: [
      {
        scene: { bg: 'river', props: [['tree', 30, 175, 0.9], ['person', 100, 198, 1.45, { cloth: '#a8392a' }], ['mace', 127, 198, 1], ['lotus', 220, 202, 1], ['lotus', 280, 196, 0.85], ['lotus', 335, 205, 1.1], ['bee', 260, 155, 0.6], ['bee', 320, 140, 0.5]] },
        en: 'Draupadī loved the golden Saugandhika flower that the wind had carried to her. So Bhīma set off to find more. On the way he met his great brother Hanumān, who blessed him and showed him the path. "Go north, to the lake of Kubera, the king of wealth," said Hanumān. "There these flowers grow by the thousand." Bhīma strode on through valleys of tall pines, past roaring waterfalls, singing as he went. At last he saw it — a lake as clear as crystal, covered with golden lotuses. Their sweet scent filled the air, and bees hummed happily over them. "Draupadī will be so pleased!" he thought.',
        te: 'గాలికి ఎగిరి వచ్చిన బంగారు సౌగంధిక పుష్పం ద్రౌపదికి ఎంతో నచ్చింది. అందుకే ఇంకా పూలు తేవడానికి భీముడు బయలుదేరాడు. దారిలో తన అన్నయ్య హనుమంతుడిని కలిశాడు. హనుమంతుడు అతడిని ఆశీర్వదించి దారి చూపించాడు. "ఉత్తరం వైపు వెళ్ళు. అక్కడ ధనానికి రాజైన కుబేరుడి సరోవరం ఉంది," అన్నాడు హనుమంతుడు. "అక్కడ ఈ పూలు వేలకొద్దీ పూస్తాయి." భీముడు పొడవాటి దేవదారు చెట్ల లోయల గుండా, హోరుమనే జలపాతాలు దాటుకుంటూ, పాటలు పాడుకుంటూ ముందుకు సాగాడు. చివరకు అతనికి అది కనిపించింది — స్ఫటికంలా తేటగా ఉన్న ఒక సరోవరం, దాని నిండా బంగారు తామరలు. వాటి తియ్యని సువాసన గాలంతా నిండిపోయింది. తుమ్మెదలు వాటి మీద సంతోషంగా ఝుమ్మంటున్నాయి. "ద్రౌపది ఎంత సంతోషిస్తుందో!" అనుకున్నాడు భీముడు.',
      },
      {
        scene: { bg: 'river', props: [['lotus', 60, 205, 0.9], ['person', 150, 198, 1.5, { cloth: '#a8392a', raise: true }], ['mace', 178, 198, 1], ['demon', 270, 198, 0.95, { color: '#5a7a5a', raise: true, flip: true }], ['demon', 345, 198, 0.85, { color: '#7a5a8a', flip: true }]] },
        en: 'Bhīma waded in to pick the flowers. Suddenly a crowd of fierce rākṣasas came running, waving clubs. They were the Krodhavaśas, Kubera\'s guards. "Stop!" they roared. "This lake belongs to King Kubera. No human may touch it!" Bhīma stood tall. "I am Bhīma, son of Pāṇḍu. A true kṣatriya does not beg. These flowers grow wild on the mountain, free for all, and I will take them!" The guards rushed at him. Bhīma whirled his mace like a whirlwind. One by one the guards went tumbling, until the rest dropped their clubs and ran off to tell Kubera. Bhīma calmly went back to gathering his flowers.',
        te: 'పూలు కోయడానికి భీముడు సరోవరంలోకి దిగాడు. అంతలో భయంకరమైన రాక్షసుల గుంపు ఒకటి గదలు ఊపుకుంటూ పరుగెత్తుకుంటూ వచ్చింది. వాళ్ళు కుబేరుడి కాపలాదారులైన క్రోధవశులు. "ఆగు!" అని గర్జించారు. "ఈ సరోవరం కుబేర మహారాజుది. మనుషులెవరూ దీన్ని ముట్టుకోకూడదు!" భీముడు నిటారుగా నిలబడ్డాడు. "నేను పాండురాజు కుమారుడు భీముడిని. నిజమైన క్షత్రియుడు యాచించడు. ఈ పూలు కొండ మీద తమంతట తామే పూస్తాయి, అందరివీ. నేను వీటిని తీసుకుంటాను!" కాపలాదారులు అతని మీదికి దూకారు. భీముడు తన గదను సుడిగాలిలా తిప్పాడు. ఒక్కొక్కరూ దొర్లుకుంటూ దూరంగా పడ్డారు. మిగిలినవాళ్ళు గదలు పారేసి కుబేరుడికి చెప్పడానికి పారిపోయారు. భీముడు నిదానంగా మళ్ళీ పూలు కోసుకోవడం మొదలుపెట్టాడు.',
      },
      {
        scene: { bg: 'river', props: [['cloud', 340, 50, 0.9], ['person', 70, 198, 1.35, { skin: 'wheat', cloth: '#f0c040' }], ['person', 150, 198, 1.3, { female: true, cloth: '#d9577a', pallu: '#f0c040', raise: true }], ['person', 235, 198, 1.5, { cloth: '#a8392a', raise: true }], ['lotus', 255, 112, 0.7], ['lotus', 320, 205, 1], ['lotus', 370, 198, 0.8]] },
        en: 'Back at the āśrama, Yudhiṣṭhira saw strange signs: a fierce wind blew, and dust darkened the sky. "Where is Bhīma?" he asked. "He went to find the flowers," said Draupadī. At once Bhīma\'s son Ghaṭotkaca lifted everyone onto his broad shoulders and flew to the lake. There stood Bhīma, his arms full of golden lotuses. Yudhiṣṭhira hugged him, then said gently, "Brother, do not act so rashly again. We must never anger the gods." Soon a message came from Kubera himself. He only laughed. "Let Bhīma take as many flowers as he likes for Draupadī!" And Draupadī smiled with joy as Bhīma placed the flowers in her hands.',
        te: 'ఆశ్రమంలో ధర్మరాజుకు వింత శకునాలు కనిపించాయి: పెనుగాలి వీచింది, దుమ్ముతో ఆకాశం చీకటిపడింది. "భీముడు ఎక్కడ?" అని అడిగాడు. "పూల కోసం వెళ్ళాడు," అంది ద్రౌపది. వెంటనే భీముడి కుమారుడు ఘటోత్కచుడు అందరినీ తన విశాలమైన భుజాల మీద ఎక్కించుకుని సరోవరానికి ఎగిరి వెళ్ళాడు. అక్కడ భీముడు రెండు చేతుల నిండా బంగారు తామరలతో నిలబడి ఉన్నాడు. ధర్మరాజు అతడిని కౌగిలించుకుని మెల్లగా అన్నాడు, "తమ్ముడూ, ఇంకెప్పుడూ ఇలా తొందరపడకు. దేవతలకు కోపం తెప్పించకూడదు." కొద్ది సేపటికే స్వయంగా కుబేరుడి నుంచి కబురు వచ్చింది. ఆయన నవ్వి, "ద్రౌపది కోసం భీముడు ఎన్ని పూలైనా తీసుకోవచ్చు!" అన్నాడు. భీముడు ఆ పూలను ద్రౌపది చేతుల్లో పెట్టగానే ఆమె ముఖం సంతోషంతో వికసించింది.',
      },
    ],
  },
  {
    id: 'samudra-shows-the-way',
    added: '2026-10-22',
    epic: 'Ramayana',
    chars: ['Rāma', 'Samudra', 'Nala', 'Lakṣmaṇa', 'Vibhīṣaṇa'],
    title: { en: 'Samudra, the Ocean King, Shows the Way', te: 'దారి చూపిన సముద్రుడు' },
    moral: { en: 'Be patient first, firm when you must — and always ready to forgive.', te: 'ముందు ఓపిక పట్టు, అవసరమైతే దృఢంగా ఉండు — క్షమించడానికి ఎప్పుడూ సిద్ధంగా ఉండు.' },
    cover: { bg: 'shore', props: [['sun', 360, 45, 0.8], ['person', 280, 150, 1.3, { skin: 'blue', cloth: '#2a8a8a', crown: true, raise: true }], ['person', 110, 198, 1.45, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['bow', 138, 198, 1], ['monkey', 45, 196, 1, { color: '#d9772a', stone: true }]] },
    pages: [
      {
        scene: { bg: 'shore', props: [['sun', 340, 55, 0.9], ['monkey', 50, 196, 1.1, { color: '#d9772a' }], ['bear', 110, 198, 0.9], ['person', 200, 198, 1.4, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['person', 270, 198, 1.25, { skin: 'dark', cloth: '#4a7a5a', crown: true }], ['monkey', 350, 196, 1, { color: '#c9a26b' }]] },
        en: 'Rāma\'s great army of monkeys and bears reached the southern shore. In front of them stretched the ocean — wide, deep and roaring, with no end in sight. "How will we ever cross?" the monkeys whispered. Vibhīṣaṇa said, "Rāma, the Ocean King is a friend of your family, for the sons of your ancestor King Sagara dug out the sea. Ask him for help." Rāma agreed. He spread kuśa grass on the sand, folded his hands and lay down facing the sea. "O Ocean, please show us the way," he prayed. One day passed. Two days. Three days and three nights. But the waves only crashed and roared. The Ocean King did not come.',
        te: 'రాముడి వానర, భల్లూక సైన్యం దక్షిణ సముద్రతీరానికి చేరుకుంది. ఎదురుగా సముద్రం — విశాలంగా, లోతుగా, హోరుమంటూ, అంతు కనిపించకుండా పరుచుకుని ఉంది. "దీన్ని ఎలా దాటాలి?" అని వానరులు గుసగుసలాడుకున్నారు. విభీషణుడు, "రామా, సముద్రుడు మీ వంశానికి మిత్రుడు. మీ పూర్వీకుడైన సగర మహారాజు కుమారులే ఈ సముద్రాన్ని తవ్వారు. ఆయన సహాయం అడుగు," అన్నాడు. రాముడు ఒప్పుకున్నాడు. ఇసుక మీద దర్భలు పరిచి, చేతులు జోడించి, సముద్రానికి ఎదురుగా పడుకున్నాడు. "ఓ సముద్రుడా, మాకు దారి చూపించు," అని ప్రార్థించాడు. ఒక రోజు గడిచింది. రెండు రోజులు. మూడు పగళ్ళు, మూడు రాత్రులు గడిచాయి. కానీ అలలు హోరుమంటూ ఎగసిపడుతున్నాయే తప్ప సముద్రుడు రాలేదు.',
      },
      {
        scene: { bg: 'shore', props: [['cloud', 80, 45, 0.9], ['cloud', 200, 35, 1], ['person', 40, 198, 1.3, { skin: 'fair', cloth: '#e8a23a' }], ['archer', 110, 198, 1.45, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['arrow', 230, 125, 0.9], ['person', 315, 150, 1.3, { skin: 'blue', cloth: '#2a8a8a', crown: true, raise: true }], ['flowers', 345, 152, 0.6]] },
        en: 'On the fourth morning Rāma rose, his eyes red with anger. "Lakṣmaṇa, the Ocean thinks my patience is weakness. Bring my bow!" He shot blazing arrows into the sea. The water boiled and hissed. Huge waves leapt up, and the fish, crocodiles and sea-serpents trembled. Then Rāma set the mightiest arrow of all, the Brahmāstra, to his bow. The sky darkened, the hills shook, and everyone held their breath. Suddenly the waters parted. Out rose the Ocean King, glowing like a dark-blue jewel, wearing garlands of red flowers and pearls. He folded his hands before Rāma. "Forgive me, Lord. Please, put down your anger."',
        te: 'నాలుగో రోజు ఉదయం రాముడు లేచాడు. ఆయన కళ్ళు కోపంతో ఎర్రబడ్డాయి. "లక్ష్మణా, నా ఓపికను సముద్రుడు బలహీనత అనుకుంటున్నాడు. నా ధనుస్సు తీసుకురా!" రాముడు మండుతున్న బాణాలను సముద్రంలోకి వేశాడు. నీళ్ళు సలసలా కాగిపోయాయి. పెద్ద పెద్ద అలలు ఎగిరిపడ్డాయి. చేపలు, మొసళ్ళు, సముద్ర సర్పాలు గడగడ వణికిపోయాయి. అప్పుడు రాముడు అన్నిటికంటే గొప్పదైన బ్రహ్మాస్త్రాన్ని విల్లుకు సంధించాడు. ఆకాశం చీకటైపోయింది, కొండలు కదిలాయి, అందరూ ఊపిరి బిగబట్టారు. అంతలో నీళ్ళు రెండుగా చీలిపోయాయి. వైడూర్యంలా మెరిసిపోతూ, ఎర్రని పూలమాలలు, ముత్యాల హారాలు ధరించిన సముద్రుడు పైకి లేచి వచ్చాడు. రాముడి ముందు చేతులు జోడించాడు. "స్వామీ, నన్ను క్షమించు. దయచేసి కోపం తగ్గించుకో."',
      },
      {
        scene: { bg: 'shore', props: [['sun', 50, 50, 0.8], ['person', 300, 150, 1.25, { skin: 'blue', cloth: '#2a8a8a', crown: true }], ['person', 150, 198, 1.45, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['bow', 178, 198, 1], ['monkey', 240, 196, 1.2, { color: '#c9a26b', stone: true }], ['stones', 350, 198, 0.9], ['monkey', 60, 196, 1, { color: '#d9772a' }]] },
        en: '"Lord Rāma," said the Ocean King, "I cannot change my nature. An ocean must be deep and hard to cross, just as fire must be hot. But I will help you. In your army is Nala, son of Viśvakarmā, the builder of the gods. Let him build a bridge. I will hold up every stone and keep my waves calm." Rāma\'s anger melted away. But an arrow, once set, must fly. "Send it north," said the Ocean, "to a land where wicked robbers live." Rāma let it go, and that land became a desert — which Rāma kindly blessed to grow healing herbs and sweet fruits. Then Nala stepped forward. "I can do it!" And the building began.',
        te: '"శ్రీరామా," అన్నాడు సముద్రుడు, "నా స్వభావాన్ని నేను మార్చుకోలేను. అగ్ని వేడిగా ఉన్నట్లే, సముద్రం లోతుగా, దాటడానికి కష్టంగా ఉండాలి. కానీ నేను నీకు సహాయం చేస్తాను. నీ సైన్యంలో దేవశిల్పి విశ్వకర్మ కుమారుడు నలుడు ఉన్నాడు. అతడిని వారధి కట్టనివ్వు. ప్రతి రాయినీ నేను మోస్తాను, నా అలలను శాంతంగా ఉంచుతాను." రాముడి కోపం కరిగిపోయింది. కానీ ఒకసారి సంధించిన బాణం వృథా కాకూడదు. "దాన్ని ఉత్తరం వైపు, దుష్టులైన దొంగలుండే చోటికి వెయ్యి," అన్నాడు సముద్రుడు. రాముడు బాణం వదిలాడు. ఆ ప్రదేశం ఎడారిగా మారిపోయింది. తరువాత రాముడు దయతో అక్కడ ఔషధ మొక్కలు, తియ్యని పండ్లు పండాలని దీవించాడు. అప్పుడు నలుడు ముందుకు వచ్చి, "నేను కడతాను!" అన్నాడు. అలా వారధి పని మొదలైంది.',
      },
    ],
  },
  {
    id: 'pandavas-in-disguise-at-viratas-court',
    added: '2026-10-22',
    epic: 'Mahabharata',
    chars: ['Yudhiṣṭhira', 'Bhīma', 'Arjuna', 'Nakula', 'Sahadeva', 'Draupadī', 'Virāṭa'],
    title: { en: 'The Pāṇḍavas in Disguise at Virāṭa\'s Court', te: 'విరాటుని కొలువులో మారువేషాల పాండవులు' },
    moral: { en: 'No honest work is too small — do every job with your whole heart.', te: 'నిజాయితీగా చేసే ఏ పనీ చిన్నది కాదు — ప్రతి పనినీ మనసుపెట్టి చెయ్యి.' },
    cover: { bg: 'court', props: [['throne', 200, 192, 1.1], ['person', 200, 188, 1.05, { skin: 'fair', cloth: '#a8392a', crown: true, beard: true, hair: '#ddd' }], ['person', 80, 198, 1.3, { cloth: '#f4ead2' }], ['pot', 125, 198, 0.8], ['person', 300, 198, 1.3, { female: true, cloth: '#d9577a', pallu: '#f0c040' }], ['drum', 355, 198, 0.9]] },
    pages: [
      {
        scene: { bg: 'forest', props: [['tree', 300, 198, 1.8], ['bow', 305, 110, 0.5], ['person', 60, 198, 1.3, { skin: 'wheat', cloth: '#f4ead2' }], ['person', 120, 198, 1.45, { cloth: '#a8392a', raise: true }], ['mace', 148, 198, 0.9], ['person', 185, 198, 1.35, { cloth: '#3a6ab0' }], ['person', 235, 198, 1.25, { female: true, cloth: '#d9577a', pallu: '#f0c040' }]] },
        en: 'Twelve long years in the forest were over. But one more test remained. For the thirteenth year, the Pāṇḍavas had to live hidden among people. If anyone recognised them, they would have to go back to the forest for twelve more years! "We will go to the kingdom of Matsya," said Yudhiṣṭhira. "King Virāṭa is good and kind." Outside the city stood a tall Śamī tree. There the brothers wrapped up their famous weapons — Arjuna\'s Gāṇḍīva bow, Bhīma\'s mace and all the rest — and tied them high in its branches, where no one would look. Then each of them chose a new name and a new job.',
        te: 'అడవిలో పన్నెండేళ్ళు ముగిశాయి. కానీ ఇంకా ఒక పరీక్ష మిగిలి ఉంది. పదమూడో సంవత్సరం పాండవులు ఎవరికీ తెలియకుండా జనం మధ్య దాక్కుని బతకాలి. ఎవరైనా గుర్తుపడితే, మళ్ళీ పన్నెండేళ్ళు అడవికి వెళ్ళాలి! "మనం మత్స్య దేశానికి వెళ్దాం," అన్నాడు ధర్మరాజు. "విరాటరాజు మంచివాడు, దయగలవాడు." ఊరి బయట ఒక పొడవాటి జమ్మిచెట్టు ఉంది. అన్నదమ్ములు తమ ప్రసిద్ధ ఆయుధాలను — అర్జునుడి గాండీవాన్ని, భీముడి గదను, మిగతా అన్నిటినీ — మూటగట్టి, ఎవరూ చూడని ఎత్తైన కొమ్మల్లో కట్టి ఉంచారు. తరువాత ఒక్కొక్కరూ ఒక కొత్త పేరు, ఒక కొత్త పని ఎంచుకున్నారు.',
      },
      {
        scene: { bg: 'court', props: [['throne', 200, 192, 1.1], ['person', 200, 188, 1.05, { skin: 'fair', cloth: '#a8392a', crown: true, beard: true, hair: '#ddd' }], ['person', 60, 198, 1.25, { cloth: '#f4ead2' }], ['person', 125, 198, 1.35, { cloth: '#a8392a' }], ['pot', 155, 198, 0.7], ['person', 275, 198, 1.3, { cloth: '#7a4a9a', raise: true }], ['drum', 315, 198, 0.8], ['person', 360, 198, 1.2, { female: true, cloth: '#d9577a', pallu: '#f0c040' }]] },
        en: 'Yudhiṣṭhira became Kaṅka, a wise brāhmaṇa who played dice with the king and gave him good advice. Bhīma became Ballava, the palace cook — and how everyone loved his food! Arjuna, remembering Urvaśī\'s curse, became Bṛhannalā, who taught music and dance to Princess Uttarā. Nakula became Granthika, keeper of the king\'s horses, and Sahadeva became Tantipāla, keeper of the cows. Draupadī became Sairandhrī, a maid who dressed the hair of Queen Sudeṣṇā. Princes and a queen were now cooks and servants! Yet none of them complained. Each one did the humble work so well that King Virāṭa was delighted with all his new helpers.',
        te: 'ధర్మరాజు కంకుభట్టు అనే బ్రాహ్మణుడిగా మారాడు. రాజుతో పాచికలు ఆడుతూ మంచి సలహాలు ఇచ్చేవాడు. భీముడు వలలుడు అనే వంటవాడయ్యాడు — అతని వంటలంటే అందరికీ ఎంతో ఇష్టం! ఊర్వశి శాపాన్ని గుర్తు చేసుకుని అర్జునుడు బృహన్నలగా మారి, రాకుమారి ఉత్తరకు సంగీతం, నాట్యం నేర్పించాడు. నకులుడు దామగ్రంథి పేరుతో రాజుగారి గుర్రాలను చూసుకున్నాడు. సహదేవుడు తంత్రీపాలుడిగా ఆవులను కాశాడు. ద్రౌపది సైరంధ్రి అనే పనిమనిషిగా సుధేష్ణ మహారాణికి జడలు అల్లేది. రాకుమారులు, మహారాణి ఇప్పుడు వంటవాళ్ళు, సేవకులు! అయినా ఎవరూ ఫిర్యాదు చేయలేదు. ప్రతి ఒక్కరూ తమ చిన్న పనిని ఎంత బాగా చేశారంటే, విరాటరాజు తన కొత్త సేవకులను చూసి ఎంతో సంతోషించాడు.',
      },
      {
        scene: { bg: 'palace', props: [['person', 40, 198, 0.9, { cloth: '#3a8a5a' }], ['person', 75, 198, 0.9, { female: true, cloth: '#e0703a', pallu: '#f0c040' }], ['person', 160, 198, 1.5, { cloth: '#a8392a', raise: true }], ['person', 235, 198, 1.55, { skin: 'dark', cloth: '#5a5a5a', raise: true, flip: true }], ['throne', 350, 196, 0.85], ['person', 350, 190, 0.95, { skin: 'fair', cloth: '#a8392a', crown: true, beard: true, hair: '#ddd' }]] },
        en: 'Months passed. One day a great festival was held, and a giant wrestler named Jīmūta challenged everyone. "Who dares to fight me?" No one stepped forward. The king turned to his cook. "Ballava, you are big and strong. Will you try?" Bhīma did not want to be noticed, but he could not refuse the king. He tied his cloth tightly and stepped into the ring. The two wrestled like two angry elephants — until Bhīma lifted Jīmūta high above his head, whirled him round and round, and threw him to the ground. The great wrestler could not rise again. The crowd roared! The year of hiding was almost over... but Duryodhana\'s spies were searching everywhere.',
        te: 'నెలలు గడిచాయి. ఒక రోజు పెద్ద ఉత్సవం జరిగింది. జీమూతుడు అనే భారీ మల్లయోధుడు అందరినీ సవాలు చేశాడు. "నాతో పోరాడే ధైర్యం ఎవరికి ఉంది?" ఎవరూ ముందుకు రాలేదు. రాజు తన వంటవాడి వైపు తిరిగాడు. "వలలా, నువ్వు ఎత్తుగా, బలంగా ఉన్నావు. ప్రయత్నిస్తావా?" తను ఎవరి దృష్టిలోనూ పడకూడదని భీముడు అనుకున్నాడు, కానీ రాజు మాట కాదనలేకపోయాడు. పంచె బిగించి కట్టుకుని గోదాలోకి దిగాడు. ఇద్దరూ కోపంతో ఉన్న రెండు ఏనుగుల్లా తలపడ్డారు. చివరకు భీముడు జీమూతుడిని తల మీదకు ఎత్తి, గిరగిరా తిప్పి, నేల మీదకు విసిరాడు. ఆ మహా మల్లుడు మళ్ళీ లేవలేకపోయాడు. జనమంతా హర్షధ్వానాలు చేశారు! అజ్ఞాతవాసం దాదాపు పూర్తి కావస్తోంది... కానీ దుర్యోధనుడి గూఢచారులు అన్నిచోట్లా వెతుకుతున్నారు.',
      },
    ],
  },
  {
    id: 'angadas-foot-in-ravanas-court',
    added: '2026-10-23',
    epic: 'Ramayana',
    chars: ['Aṅgada', 'Rāvaṇa', 'Rāma'],
    title: { en: 'Aṅgada\'s Foot in Rāvaṇa\'s Court', te: 'రావణుడి కొలువులో అంగదుడి పాదం' },
    moral: { en: 'With courage and faith, no one can move you.', te: 'ధైర్యం, నమ్మకం ఉంటే మనల్ని ఎవరూ కదిలించలేరు.' },
    cover: { bg: 'court', props: [['throne', 110, 196, 1.2], ['demon', 110, 192, 1.1, { cloth: '#f0c040' }], ['crown', 110, 84, 0.9], ['monkey', 270, 196, 1.6], ['crown', 270, 112, 0.55]] },
    pages: [
      {
        scene: { bg: 'shore', props: [['lanka', 320, 150, 0.8], ['person', 80, 198, 1.45, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['bow', 108, 198, 1], ['monkey', 190, 196, 1.35], ['crown', 190, 120, 0.5], ['monkey', 250, 196, 0.9, { color: '#d9772a' }], ['bear', 40, 198, 0.8], ['cloud', 200, 40, 1]] },
        en: 'The great bridge was built, and Rāma\'s army had crossed the sea to Laṅkā. But Rāma did not want a war if it could be avoided. "Let us give Rāvaṇa one last chance," he said. "Who will carry my message?" Young Aṅgada, the son of Vāli, stepped forward. "I will go, my lord!" Rāma smiled and blessed him. With one mighty leap, Aṅgada flew over the walls of Laṅkā and landed right in the middle of Rāvaṇa\'s golden court. The demon king sat on his high throne, his ten heads frowning. All around him, fierce rākṣasas gripped their weapons.',
        te: 'వారధి పూర్తయింది. రాముడి సైన్యం సముద్రం దాటి లంక చేరుకుంది. కానీ వీలైతే యుద్ధం లేకుండా చూడాలని రాముడు అనుకున్నాడు. "రావణుడికి చివరిసారిగా ఒక అవకాశం ఇద్దాం," అన్నాడు. "నా సందేశాన్ని ఎవరు తీసుకువెళ్తారు?" వాలి కొడుకైన యువ అంగదుడు ముందుకు వచ్చాడు. "నేను వెళ్తాను స్వామీ!" రాముడు చిరునవ్వుతో అతడిని ఆశీర్వదించాడు. ఒక్క దూకుతో అంగదుడు లంక గోడల మీదుగా ఎగిరి, సరిగ్గా రావణుడి బంగారు కొలువు మధ్యలో దిగాడు. రాక్షస రాజు ఎత్తైన సింహాసనం మీద కూర్చుని ఉన్నాడు. అతడి పది తలలూ కోపంగా ముఖం చిట్లించాయి. చుట్టూ భయంకరమైన రాక్షసులు ఆయుధాలు పట్టుకుని నిలబడ్డారు.',
      },
      {
        scene: { bg: 'court', props: [['throne', 70, 196, 1.1], ['demon', 70, 192, 1, { cloth: '#f0c040' }], ['crown', 70, 90, 0.8], ['demon', 170, 198, 0.9, { raise: true }], ['demon', 330, 198, 0.9, { color: '#5a7a5a', raise: true, flip: true }], ['monkey', 250, 92, 1.3], ['crown', 250, 23, 0.5]] },
        en: 'Aṅgada stood tall and spoke without fear. "I am Aṅgada, son of Vāli, and I bring a message from Rāma. Return Sītā with honour and ask for forgiveness. Then you and Laṅkā will be safe. If not, Rāma\'s arrows will end your pride." Rāvaṇa\'s eyes blazed. "Seize this monkey!" he roared. Four demons grabbed Aṅgada\'s arms. Aṅgada simply laughed. He sprang up into the air, carrying all four with him, and shook them off so they tumbled down like ripe fruit. Then he landed on the palace roof and stamped so hard that its tall tower cracked and crumbled!',
        te: 'అంగదుడు నిటారుగా నిలబడి భయం లేకుండా మాట్లాడాడు. "నేను వాలి కుమారుడైన అంగదుడిని. శ్రీరాముడి సందేశం తెచ్చాను. సీతాదేవిని గౌరవంగా అప్పగించి క్షమాపణ అడుగు. అలా చేస్తే నువ్వూ, లంకా క్షేమంగా ఉంటారు. లేకపోతే రాముడి బాణాలు నీ గర్వాన్ని అణచివేస్తాయి." రావణుడి కళ్ళు నిప్పులు కక్కాయి. "ఈ కోతిని పట్టుకోండి!" అని గర్జించాడు. నలుగురు రాక్షసులు అంగదుడి చేతులు పట్టుకున్నారు. అంగదుడు నవ్వాడు. ఆ నలుగురినీ వేలాడేసుకునే ఆకాశంలోకి ఎగిరి, వాళ్ళను విదిలించాడు. వాళ్ళు పండిన పళ్ళలా కింద రాలిపడ్డారు. తరువాత అంగదుడు రాజభవనం పైకప్పు మీద దిగి కాలితో గట్టిగా తొక్కాడు. దాని ఎత్తైన గోపురం పగిలి కూలిపోయింది!',
      },
      {
        scene: { bg: 'court', props: [['throne', 330, 196, 1.1], ['monkey', 200, 196, 1.6], ['crown', 200, 108, 0.55], ['demon', 110, 198, 0.95, { color: '#4a4a7a', raise: true }], ['demon', 40, 198, 0.85, { color: '#7a5a9a', bald: true }], ['demon', 285, 198, 0.95, { cloth: '#f0c040', flip: true }], ['crown', 285, 92, 0.75]] },
        en: 'It is said that, before he left, Aṅgada gave Rāvaṇa\'s warriors one more challenge. He planted his foot firmly on the floor of the court. "If any of you can move my foot even a little, Rāma will go home and Sītā will stay here!" One by one, the strongest rākṣasas pulled and pushed, puffed and groaned. The foot did not move — not even a hair\'s width. At last Rāvaṇa himself came down from his throne and bent to grab it. Aṅgada pulled his foot away. "Why hold my feet, Rāvaṇa? Fall at Rāma\'s feet instead — they alone can save you!" Rāvaṇa stood speechless, and Aṅgada leapt back to Rāma, his message delivered.',
        te: 'వెళ్ళే ముందు అంగదుడు రావణుడి వీరులకు ఇంకో సవాలు విసిరాడని చెబుతారు. కొలువు నేల మీద తన కాలిని గట్టిగా నాటాడు. "మీలో ఎవరైనా నా కాలిని కొంచెమైనా కదిలించగలిగితే, రాముడు వెనక్కి వెళ్ళిపోతాడు, సీతాదేవి ఇక్కడే ఉంటుంది!" బలమైన రాక్షసులు ఒకరి తరువాత ఒకరు వచ్చి లాగారు, తోశారు, ఆయాసపడ్డారు, మూలిగారు. ఆ కాలు వెంట్రుకవాసి కూడా కదలలేదు. చివరకు రావణుడే సింహాసనం దిగి వచ్చి ఆ కాలిని పట్టుకోవడానికి వంగాడు. అంగదుడు చటుక్కున కాలు వెనక్కి తీసుకున్నాడు. "రావణా, నా కాళ్ళు ఎందుకు పట్టుకుంటావు? శ్రీరాముడి పాదాలు పట్టుకో — అవే నిన్ను కాపాడగలవు!" రావణుడు నోట మాట రాక నిలబడిపోయాడు. సందేశం అందించిన అంగదుడు ఒక్క దూకుతో రాముడి దగ్గరకు తిరిగి వచ్చాడు.',
      },
    ],
  },
  {
    id: 'prince-uttaras-brave-ride',
    added: '2026-10-23',
    epic: 'Mahabharata',
    chars: ['Uttara', 'Arjuna', 'Uttarā', 'Draupadī'],
    title: { en: 'Prince Uttara\'s Brave Ride', te: 'ఉత్తరకుమారుడి సాహస యాత్ర' },
    moral: { en: 'Courage is not having no fear — it is doing what is right in spite of it.', te: 'భయం లేకపోవడం ధైర్యం కాదు — భయం ఉన్నా సరైనది చేయడమే నిజమైన ధైర్యం.' },
    cover: { bg: 'forest', props: [['sun', 360, 45, 0.8], ['chariot', 130, 198, 1.6], ['person', 170, 198, 1.25, { cloth: '#3a8a5a', crown: true, raise: true }], ['archer', 250, 198, 1.45, { cloth: '#7a5ab0' }], ['cloud', 120, 45, 0.9]] },
    pages: [
      {
        scene: { bg: 'palace', props: [['person', 90, 198, 1.4, { cloth: '#3a8a5a', crown: true, raise: true }], ['person', 175, 198, 1.1, { female: true, skin: 'fair', cloth: '#e0703a', pallu: '#f0c040' }], ['person', 245, 198, 1.25, { female: true, cloth: '#d9577a', pallu: '#f0c040' }], ['person', 320, 198, 1.35, { female: true, cloth: '#7a5ab0', pallu: '#f0c040' }]] },
        en: 'Near the end of the Pāṇḍavas\' secret year, the Kauravas attacked the kingdom of Matsya and drove away King Virāṭa\'s cows. The king was away fighting another battle, so only young Prince Uttara was left in the palace. "I will chase them all away by myself!" he boasted to the palace ladies. "If only I had a good charioteer!" Draupadī, disguised as the maid Sairandhrī, spoke softly. "Bṛhannalā, the dance teacher, once drove Arjuna\'s chariot." Princess Uttarā ran to fetch her teacher. Bṛhannalā — who was really Arjuna — smiled and took the reins. Off they raced!',
        te: 'పాండవుల అజ్ఞాతవాసం ముగియబోతున్న సమయంలో, కౌరవులు మత్స్య దేశం మీద దండెత్తి విరాట రాజు ఆవులను తోలుకుపోయారు. రాజు వేరే యుద్ధానికి వెళ్ళి ఉన్నాడు. రాజభవనంలో యువరాజు ఉత్తరకుమారుడు ఒక్కడే మిగిలాడు. "నేనొక్కడినే వాళ్ళందరినీ తరిమికొడతాను!" అని అంతఃపుర స్త్రీల ముందు గొప్పలు చెప్పాడు. "మంచి సారథి ఒక్కడు దొరికితే చాలు!" సైరంధ్రి వేషంలో ఉన్న ద్రౌపది మెల్లగా అంది, "నాట్యం నేర్పే బృహన్నల ఒకప్పుడు అర్జునుడి రథం నడిపింది." రాకుమారి ఉత్తర తన గురువును పిలుచుకురావడానికి పరుగెత్తింది. నిజానికి అర్జునుడే అయిన బృహన్నల చిరునవ్వుతో పగ్గాలు అందుకుంది. రథం వేగంగా దూసుకుపోయింది!',
      },
      {
        scene: { bg: 'forest', props: [['elephant', 330, 150, 0.55], ['person', 270, 150, 0.6, { cloth: '#a8392a' }], ['person', 295, 150, 0.6, { cloth: '#5a5a5a' }], ['person', 370, 150, 0.6, { cloth: '#c9952a' }], ['tree', 80, 198, 1.6], ['bow', 85, 120, 0.4], ['person', 150, 198, 1.3, { cloth: '#3a8a5a', crown: true, raise: true, flip: true }], ['person', 220, 198, 1.35, { female: true, cloth: '#7a5ab0', pallu: '#f0c040', raise: true }]] },
        en: 'But when the chariot came over the hill, Uttara saw the Kaurava army: Bhīṣma, Droṇa, Karṇa, Duryodhana and thousands of soldiers. Elephants trumpeted. Conches boomed. Uttara\'s knees shook. "Turn back! Turn back!" he cried. He jumped off the chariot and ran. Bṛhannalā ran after him, long braid flying, and the Kaurava soldiers laughed. Catching the prince gently by the hand, Arjuna said, "Don\'t be afraid. You drive, and I will fight." He stopped by a tall śamī tree. "Climb up and bring down the bundle hidden there." Inside were shining weapons — and the mighty Gāṇḍīva bow!',
        te: 'కానీ రథం కొండ దాటగానే ఉత్తరుడికి కౌరవ సైన్యం కనిపించింది — భీష్ముడు, ద్రోణుడు, కర్ణుడు, దుర్యోధనుడు, వేలాది మంది సైనికులు. ఏనుగులు ఘీంకరించాయి. శంఖాలు మోగాయి. ఉత్తరుడి మోకాళ్ళు వణికాయి. "వెనక్కి తిప్పు! వెనక్కి తిప్పు!" అని అరిచాడు. రథం మీద నుంచి దూకి పారిపోయాడు. బృహన్నల జడ ఊగుతుండగా అతడి వెనకే పరుగెత్తింది. అది చూసి కౌరవ సైనికులు నవ్వారు. అర్జునుడు యువరాజు చేయి మెల్లగా పట్టుకుని, "భయపడకు. నువ్వు రథం నడుపు, నేను యుద్ధం చేస్తాను," అన్నాడు. ఒక పెద్ద జమ్మి చెట్టు దగ్గర ఆగాడు. "పైకి ఎక్కి అక్కడ దాచిన మూటను కిందకు దించు." ఆ మూటలో మెరిసే ఆయుధాలు ఉన్నాయి — గొప్ప గాండీవ ధనుస్సు కూడా!',
      },
      {
        scene: { bg: 'forest', props: [['sun', 50, 45, 0.8], ['chariot', 110, 198, 1.5], ['person', 150, 198, 1.2, { cloth: '#3a8a5a', crown: true, raise: true }], ['archer', 215, 198, 1.45, { cloth: '#7a5ab0' }], ['arrow', 320, 110, 0.9], ['arrow', 340, 140, 0.9], ['cloud', 300, 40, 0.9]] },
        en: 'Uttara stared. "Whose bow is this?" "It is mine," said Bṛhannalā. "I am Arjuna, and my brothers are hiding in your father\'s court." Uttara\'s fear melted into wonder and joy. "Then I will be your charioteer!" Arjuna blew his conch, Devadatta, and the sound rolled like thunder. He fought the whole Kaurava army and won back every cow. Then he used a magic weapon that made the warriors fall fast asleep. Remembering a promise to Princess Uttarā, he took the bright upper cloths of the sleeping princes for her dolls! Uttara drove home proudly — braver and wiser than the boy who had boasted that morning.',
        te: 'ఉత్తరుడు ఆశ్చర్యంగా చూశాడు. "ఈ విల్లు ఎవరిది?" "నాదే," అంది బృహన్నల. "నేను అర్జునుడిని. నా సోదరులు మీ నాన్నగారి కొలువులోనే దాగి ఉన్నారు." ఉత్తరుడి భయం పోయి ఆశ్చర్యం, ఆనందం కలిగాయి. "అయితే నేను మీకు సారథిని అవుతాను!" అర్జునుడు తన దేవదత్త శంఖం ఊదాడు. ఆ శబ్దం ఉరుములా మారుమోగింది. అతడు కౌరవ సైన్యమంతటితో పోరాడి ఆవులన్నిటినీ వెనక్కి తెచ్చాడు. తరువాత ఒక మంత్రాస్త్రం వేసి వీరులందరినీ గాఢనిద్రలోకి పంపాడు. రాకుమారి ఉత్తరకు ఇచ్చిన మాట గుర్తుచేసుకుని, నిద్రపోతున్న రాజకుమారుల రంగురంగుల ఉత్తరీయాలను ఆమె బొమ్మల కోసం తీసుకున్నాడు! ఆ ఉదయం గొప్పలు చెప్పిన పిల్లవాడి కంటే ఎంతో ధైర్యంగా, తెలివిగా మారిన ఉత్తరుడు గర్వంగా రథం నడుపుతూ ఇంటికి తిరిగి వచ్చాడు.',
      },
    ],
  },
  {
    id: 'hanuman-carries-the-mountain',
    added: '2026-10-23',
    epic: 'Ramayana',
    chars: ['Hanumān', 'Lakṣmaṇa', 'Suṣeṇa', 'Rāma'],
    title: { en: 'Hanumān Carries the Mountain', te: 'సంజీవని పర్వతం తెచ్చిన హనుమంతుడు' },
    moral: { en: 'When the task is hard and time is short, a brave heart finds a way.', te: 'పని కష్టమైనా, సమయం తక్కువైనా — ధైర్యమున్న మనసు దారి కనుక్కుంటుంది.' },
    cover: { bg: 'night', props: [['moon', 60, 60, 0.9], ['hanuman', 190, 175, 1.3], ['peak', 220, 77, 0.7], ['cloud', 330, 70, 0.8]] },
    pages: [
      {
        scene: { bg: 'night', props: [['moon', 350, 55, 0.8], ['fire', 200, 198, 0.8], ['person', 80, 198, 1.4, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['person', 135, 198, 1.3, { skin: 'fair', cloth: '#e8a23a' }], ['monkey', 270, 196, 1.3, { color: '#c9c0b0' }], ['monkey', 335, 196, 1.1, { color: '#d9772a' }]] },
        en: 'The great battle of Laṅkā raged on. One day Rāvaṇa hurled a terrible spear of power, and it struck Lakṣmaṇa in the chest. The brave prince fell to the ground and lay still. Rāma knelt beside his brother, his eyes full of tears. "Without Lakṣmaṇa, what use is victory to me?" he whispered. Then Suṣeṇa, the wise old monkey physician, came forward and felt Lakṣmaṇa\'s pulse. "He still breathes, my lord. There is hope! Far to the north, on a mountain in the Himālayas, grow magic herbs, like the sañjīvanī that brings back life. If they reach him before the sun rises, Lakṣmaṇa will wake."',
        te: 'లంకలో మహా యుద్ధం జోరుగా సాగుతోంది. ఒక రోజు రావణుడు భయంకరమైన శక్తి ఆయుధాన్ని విసిరాడు. అది లక్ష్మణుడి గుండెకు తగిలింది. వీరుడైన లక్ష్మణుడు నేల మీద పడి కదలకుండా ఉండిపోయాడు. రాముడు తమ్ముడి పక్కన మోకరిల్లాడు. ఆయన కళ్ళ నిండా నీళ్ళు. "లక్ష్మణుడు లేకపోతే ఈ విజయం నాకెందుకు?" అని మెల్లగా అన్నాడు. అప్పుడు తెలివైన వృద్ధ వానర వైద్యుడు సుషేణుడు ముందుకు వచ్చి లక్ష్మణుడి నాడి చూశాడు. "స్వామీ, ఇంకా ఊపిరి ఉంది. ఆశ ఉంది! ఉత్తరాన హిమాలయాల్లో ఒక పర్వతం మీద అద్భుతమైన మూలికలు పెరుగుతాయి — ప్రాణం పోసే సంజీవని లాంటివి. తెల్లవారే లోపు అవి ఇక్కడికి చేరితే లక్ష్మణుడు లేచి కూర్చుంటాడు."',
      },
      {
        scene: { bg: 'night', props: [['moon', 60, 50, 0.8], ['peak', 270, 198, 1.5], ['monkey', 130, 196, 2, { color: '#d9772a' }], ['cloud', 170, 45, 0.7]] },
        en: '"I will go!" said Hanumān. He grew as tall as a hill, bowed to Rāma, and leapt into the night sky. Over forests, rivers and sleeping villages he flew, faster than the wind, until the snowy Himālayas shone under the moon. There stood the mountain of herbs, glowing softly in the dark. But which plant was which? There were hundreds of leaves and flowers, and all of them seemed to glow! Hanumān scratched his head. Time was running out. "If I cannot pick the right herb," he said, "I will take them all!" He wrapped his mighty arms around the peak, and with one great heave — he lifted the whole mountain!',
        te: '"నేను వెళ్తాను!" అన్నాడు హనుమంతుడు. ఆయన కొండంత పెద్దగా పెరిగి, రాముడికి నమస్కరించి, రాత్రి ఆకాశంలోకి ఎగిరాడు. అడవులు, నదులు, నిద్రపోతున్న ఊళ్ళ మీదుగా గాలి కంటే వేగంగా ఎగిరాడు. చివరకు వెన్నెలలో మెరిసే మంచు కొండలు — హిమాలయాలు — కనిపించాయి. అక్కడ మూలికల పర్వతం చీకట్లో మెల్లగా వెలుగుతోంది. కానీ ఏ మొక్క ఏదో ఎలా తెలుస్తుంది? వందలాది ఆకులు, పువ్వులు — అన్నీ వెలుగుతున్నట్టే ఉన్నాయి! హనుమంతుడు తల గోక్కున్నాడు. సమయం గడిచిపోతోంది. "సరైన మూలికను ఎంచలేకపోతే, అన్నిటినీ తీసుకెళ్తాను!" అనుకున్నాడు. తన బలమైన చేతులతో ఆ శిఖరాన్ని చుట్టి, ఒక్క ఊపుతో — పర్వతాన్నే పెకలించి ఎత్తాడు!',
      },
      {
        scene: { bg: 'forest', props: [['sun', 360, 70, 0.8], ['peak', 55, 198, 0.9], ['person', 140, 198, 1.4, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['person', 195, 198, 1.3, { raise: true, skin: 'fair', cloth: '#e8a23a' }], ['monkey', 260, 196, 1.4, { color: '#d9772a' }], ['monkey', 320, 196, 1.1, { color: '#c9c0b0' }], ['flowers', 370, 198, 0.8]] },
        en: 'Holding the mountain high on one hand like a giant umbrella, Hanumān flew back south. The monkeys cheered as a mountain sailed across the stars! He set it down gently beside the camp. Suṣeṇa quickly picked the right herbs, crushed them and held them under Lakṣmaṇa\'s nose. Lakṣmaṇa stirred, opened his eyes and sat up, as strong as ever. It is said the sky was just turning pink with dawn. Rāma hugged Lakṣmaṇa, then hugged Hanumān even tighter. "Hanumān, you have given me back my brother. I can never repay you." Hanumān only bowed and smiled. Serving Rāma was all the reward he wanted.',
        te: 'ఆ పర్వతాన్ని ఒక్క చేత్తో పెద్ద గొడుగులా పైకి ఎత్తి పట్టుకుని, హనుమంతుడు దక్షిణానికి ఎగిరి వచ్చాడు. నక్షత్రాల మధ్య ఎగురుతున్న పర్వతాన్ని చూసి వానరులు ఆనందంతో కేకలు వేశారు! ఆయన దాన్ని శిబిరం పక్కన మెల్లగా దించాడు. సుషేణుడు వెంటనే సరైన మూలికలు కోసి, నలిపి, లక్ష్మణుడి ముక్కు దగ్గర పెట్టాడు. లక్ష్మణుడు కదిలాడు, కళ్ళు తెరిచాడు, ఎప్పటిలాగే బలంగా లేచి కూర్చున్నాడు. అప్పుడే ఆకాశం తెల్లవారుతూ ఎర్రబడుతోందని చెబుతారు. రాముడు లక్ష్మణుడిని కౌగిలించుకున్నాడు, తరువాత హనుమంతుడిని ఇంకా గట్టిగా హత్తుకున్నాడు. "హనుమా, నా తమ్ముడిని నాకు తిరిగి ఇచ్చావు. నీ ఋణం ఎప్పటికీ తీర్చుకోలేను." హనుమంతుడు వినయంగా నమస్కరించి నవ్వాడు. రాముడి సేవే ఆయనకు కావలసిన బహుమతి.',
      },
    ],
  },
  {
    id: 'krishna-the-peace-messenger',
    added: '2026-10-24',
    epic: 'Mahabharata',
    chars: ['Kṛṣṇa', 'Duryodhana', 'Yudhiṣṭhira', 'Vidura', 'Bhīṣma'],
    title: { en: 'Kṛṣṇa the Peace Messenger', te: 'శ్రీకృష్ణ రాయబారం — శాంతి దూత' },
    moral: { en: 'A wise person always tries for peace first — only pride turns it away.', te: 'తెలివైనవారు ముందు శాంతి కోసమే ప్రయత్నిస్తారు — గర్వమే దాన్ని దూరం చేస్తుంది.' },
    cover: { bg: 'court', props: [['sun', 200, 150, 2.2], ['person', 200, 198, 1.9, { skin: 'blue', cloth: '#f0c040', crown: true, tilak: true }], ['person', 80, 198, 1.2, { cloth: '#a83a3a', crown: true }], ['mace', 105, 198, 0.9], ['person', 330, 198, 1.2, { cloth: '#f4ead2', beard: true, hair: '#ddd' }]] },
    pages: [
      {
        scene: { bg: 'ashram', props: [['sun', 60, 55, 0.8], ['person', 110, 198, 1.4, { cloth: '#f4ead2' }], ['person', 165, 198, 1.4, { raise: true, skin: 'blue', cloth: '#f0c040', crown: true, tilak: true }], ['chariot', 250, 198, 1.4], ['cloud', 220, 45, 0.9]] },
        en: 'Thirteen long years had passed. The Pāṇḍavas had lived in the forest for twelve years and in disguise for one, just as they had promised. Now they asked for their kingdom back. But Duryodhana sent no answer, and the days went by. Yudhiṣṭhira sighed. "I do not want a war between brothers. So many people would suffer." Kṛṣṇa put a hand on his shoulder. "Then let me go to Hastināpura as your messenger. I will ask for peace." "Ask them for half the kingdom," said Yudhiṣṭhira. "And if they refuse, ask for just five villages — one for each of us. That will be enough." So Kṛṣṇa climbed into his chariot and set off.',
        te: 'పదమూడు సంవత్సరాలు గడిచిపోయాయి. ఇచ్చిన మాట ప్రకారం పాండవులు పన్నెండేళ్ళు అడవిలో, ఒక ఏడాది అజ్ఞాతవాసంలో గడిపారు. ఇప్పుడు తమ రాజ్యం తమకు ఇవ్వమని అడిగారు. కానీ దుర్యోధనుడి నుంచి జవాబు రాలేదు. రోజులు గడిచిపోతున్నాయి. ధర్మరాజు నిట్టూర్చాడు. "అన్నదమ్ముల మధ్య యుద్ధం నాకు ఇష్టం లేదు. దాని వల్ల ఎంతోమంది బాధపడతారు." శ్రీకృష్ణుడు ఆయన భుజం మీద చేయి వేశాడు. "అయితే నేను మీ దూతగా హస్తినాపురానికి వెళ్తాను. శాంతి కోసం అడుగుతాను." "సగం రాజ్యం ఇవ్వమని అడుగు," అన్నాడు ధర్మరాజు. "ఒప్పుకోకపోతే, మా ఐదుగురికీ ఐదు ఊళ్ళు ఇచ్చినా చాలు." అలా శ్రీకృష్ణుడు రథం ఎక్కి బయలుదేరాడు.',
      },
      {
        scene: { bg: 'court', props: [['throne', 200, 198, 1.3], ['person', 200, 192, 1.2, { cloth: '#7a5ab0', crown: true, beard: true, hair: '#ddd' }], ['person', 75, 198, 1.4, { raise: true, skin: 'blue', cloth: '#f0c040', crown: true, tilak: true }], ['person', 300, 198, 1.3, { cloth: '#a83a3a', crown: true, raise: true }], ['mace', 330, 198, 1], ['person', 140, 198, 1.1, { cloth: '#f4ead2', beard: true, hair: '#ddd' }]] },
        en: 'In the great hall of Hastināpura sat the blind king Dhṛtarāṣṭra, with grandfather Bhīṣma, Guru Droṇa, wise Vidura and all the princes. Kṛṣṇa stood up and spoke kindly. "O King, the Pāṇḍavas and the Kauravas are one family. Let them share the land and live as brothers. Give the Pāṇḍavas half the kingdom — or even just five villages — and there will be peace." Bhīṣma nodded. Droṇa nodded. Vidura begged Duryodhana to agree. Even his mother, Queen Gāndhārī, came and said, "My son, listen to Kṛṣṇa." But Duryodhana jumped up, red with anger. "Five villages? I will not give them even as much land as the point of a needle can cover!"',
        te: 'హస్తినాపుర సభలో గుడ్డి రాజు ధృతరాష్ట్రుడు కూర్చుని ఉన్నాడు. ఆయనతో పాటు భీష్మ పితామహుడు, ద్రోణాచార్యుడు, తెలివైన విదురుడు, యువరాజులందరూ ఉన్నారు. శ్రీకృష్ణుడు లేచి నిలబడి మృదువుగా మాట్లాడాడు. "మహారాజా, పాండవులు, కౌరవులు ఒకే కుటుంబం. రాజ్యాన్ని పంచుకుని అన్నదమ్ముల్లా కలిసి ఉండనివ్వండి. పాండవులకు సగం రాజ్యం ఇవ్వండి — కనీసం ఐదు ఊళ్ళు ఇచ్చినా చాలు — అప్పుడు శాంతి ఉంటుంది." భీష్ముడు అవునన్నాడు. ద్రోణుడు అవునన్నాడు. ఒప్పుకోమని విదురుడు దుర్యోధనుడిని బతిమాలాడు. తల్లి గాంధారీదేవి కూడా వచ్చి, "నాయనా, కృష్ణుడి మాట విను," అంది. కానీ దుర్యోధనుడు కోపంతో ఎర్రబడి లేచాడు. "ఐదు ఊళ్ళా? సూది మొన మోపినంత నేల కూడా ఇవ్వను!"',
      },
      {
        scene: { bg: 'court', props: [['sun', 200, 150, 2.2], ['person', 200, 198, 2, { skin: 'blue', cloth: '#f0c040', crown: true, tilak: true }], ['person', 70, 198, 1.1, { cloth: '#a83a3a', crown: true }], ['person', 110, 198, 1, { cloth: '#8a3a5a' }], ['person', 320, 198, 1.1, { cloth: '#7a5ab0', crown: true, beard: true, hair: '#ddd' }]] },
        en: 'Then Duryodhana whispered to his brothers, "Let us tie up this cowherd. Without Kṛṣṇa, the Pāṇḍavas can do nothing!" Kṛṣṇa only laughed. Suddenly a dazzling light filled the hall. Kṛṣṇa grew taller and taller, and in his body everyone saw the gods, the sages, the sun and the moon, rivers and mountains — the whole universe! This was his Viśvarūpa, his cosmic form. The princes covered their eyes. For that moment Kṛṣṇa even gave the blind king the power to see it. Then the light faded, and Kṛṣṇa walked calmly out of the hall. He had offered peace with an open hand. Duryodhana\'s pride had pushed it away, and now a great war could not be stopped.',
        te: 'అప్పుడు దుర్యోధనుడు తన తమ్ముళ్ళతో గుసగుసలాడాడు. "ఈ గొల్లవాడిని బంధిద్దాం. కృష్ణుడు లేకపోతే పాండవులు ఏమీ చేయలేరు!" శ్రీకృష్ణుడు చిరునవ్వు నవ్వాడు. ఒక్కసారిగా సభ అంతా మెరిసే వెలుగుతో నిండిపోయింది. శ్రీకృష్ణుడు పెరిగి పెరిగి ఆకాశమంత ఎత్తయ్యాడు. ఆయన శరీరంలో దేవతలు, ఋషులు, సూర్యచంద్రులు, నదులు, పర్వతాలు — ఈ విశ్వమంతా కనిపించింది! అదే ఆయన విశ్వరూపం. యువరాజులు కళ్ళు మూసుకున్నారు. ఆ క్షణంలో గుడ్డి రాజుకు కూడా ఆ రూపాన్ని చూసే శక్తిని కృష్ణుడు ఇచ్చాడు. తరువాత ఆ వెలుగు తగ్గిపోయింది. శ్రీకృష్ణుడు ప్రశాంతంగా సభ నుంచి బయటకు నడిచాడు. ఆయన స్నేహంతో శాంతిని అందించాడు. కానీ దుర్యోధనుడి గర్వం దాన్ని తోసిపుచ్చింది. ఇక మహా యుద్ధాన్ని ఎవరూ ఆపలేకపోయారు.',
      },
    ],
  },
  {
    id: 'indrajit-the-cloud-warrior',
    added: '2026-10-24',
    epic: 'Ramayana',
    chars: ['Indrajit', 'Lakṣmaṇa', 'Rāvaṇa', 'Vibhīṣaṇa', 'Rāma'],
    title: { en: 'Indrajit, the Cloud Warrior', te: 'మేఘాల వీరుడు ఇంద్రజిత్తు' },
    moral: { en: 'Great power is not enough — truth and goodness win in the end.', te: 'ఎంత బలమున్నా సరిపోదు — చివరకు సత్యం, ధర్మమే గెలుస్తాయి.' },
    cover: { bg: 'night', props: [['moon', 350, 60, 0.8], ['cloud', 120, 70, 1.6], ['cloud', 260, 60, 1.3], ['demon', 200, 198, 1.2, { color: '#4a4a7a', raise: true }], ['arrow', 300, 140, 1.1]] },
    pages: [
      {
        scene: { bg: 'palace', props: [['cloud', 90, 50, 1.1], ['cloud', 300, 45, 1], ['demon', 110, 198, 1.1, { color: '#6a5a9a' }], ['crown', 110, 86, 0.9], ['person', 290, 198, 1.3, { female: true, cloth: '#3a8a6a', pallu: '#f0c040' }], ['basket', 200, 198, 1, { glow: false }]] },
        en: 'When Rāvaṇa\'s first son was born in Laṅkā, the baby did not cry like other babies. He roared — and the sound rolled across the sky like thunder in the monsoon clouds! So his parents named him Meghanāda, "the one with the voice of the clouds." Meghanāda grew up brave and clever. He learned every weapon and every kind of magic, and he performed great fire-rituals to win powerful boons. One day he rode into battle against Indra, the king of the gods, and he won — he even carried Indra away to Laṅkā! Lord Brahmā himself came and asked him to set Indra free. In return, Brahmā gave him a new name: Indrajit, "the conqueror of Indra."',
        te: 'లంకలో రావణుడికి పెద్ద కొడుకు పుట్టినప్పుడు, ఆ పసివాడు మిగతా పిల్లల్లా ఏడవలేదు. గర్జించాడు! వానాకాలం మేఘాల్లో ఉరుము ఉరిమినట్టు ఆ శబ్దం ఆకాశమంతా మార్మోగింది. అందుకే అమ్మానాన్నలు అతనికి "మేఘనాదుడు" అని పేరు పెట్టారు — అంటే "మేఘాల గొంతు ఉన్నవాడు". మేఘనాదుడు ధైర్యంగా, తెలివిగా పెరిగాడు. అన్ని రకాల ఆయుధాలూ, మాయలూ నేర్చుకున్నాడు. గొప్ప యజ్ఞాలు చేసి శక్తివంతమైన వరాలు పొందాడు. ఒక రోజు దేవతల రాజైన ఇంద్రుడితో యుద్ధం చేసి గెలిచాడు — ఇంద్రుడిని బంధించి లంకకు తీసుకుపోయాడు కూడా! అప్పుడు బ్రహ్మదేవుడే స్వయంగా వచ్చి ఇంద్రుడిని విడిచిపెట్టమని అడిగాడు. దానికి బదులుగా అతనికి "ఇంద్రజిత్తు" అనే కొత్త పేరు ఇచ్చాడు — అంటే "ఇంద్రుడిని జయించినవాడు".',
      },
      {
        scene: { bg: 'forest', props: [['cloud', 90, 60, 1.4], ['eagle', 250, 95, 1.3], ['person', 150, 198, 1.4, { skin: 'blue', cloth: '#f0c040', tilak: true }], ['person', 205, 198, 1.3, { skin: 'fair', cloth: '#e8a23a', raise: true }], ['monkey', 300, 196, 1.2, { color: '#d9772a' }], ['monkey', 355, 196, 1, { color: '#9a6a3a', flip: true }]] },
        en: 'Years later, Rāma\'s army of monkeys and bears came to Laṅkā to bring Sītā home. Indrajit rode out in his magic chariot and rose high into the clouds. Nobody could see him! From his hiding place in the sky, he shot arrows that turned into hissing serpents. They wrapped around Rāma and Lakṣmaṇa and bound them tight, and the two brothers fell to the ground. The monkeys wept. Then a great wind began to blow. Garuḍa, the mighty king of birds, swooped down from the sky on golden wings. The moment the snakes saw him, they slid away in fear! Rāma and Lakṣmaṇa sat up, free and strong again, and the monkeys danced with joy.',
        te: 'కొన్నేళ్ళ తరువాత, సీతాదేవిని తిరిగి తీసుకువెళ్ళడానికి రాముడి వానర సైన్యం లంకకు వచ్చింది. ఇంద్రజిత్తు తన మాయా రథం ఎక్కి మేఘాల్లోకి ఎగిరిపోయాడు. అతను ఎవరికీ కనిపించలేదు! ఆకాశంలో దాక్కుని అతను బాణాలు వేశాడు. ఆ బాణాలు బుసలు కొట్టే పాములుగా మారాయి. అవి రామలక్ష్మణులను గట్టిగా చుట్టేసి బంధించాయి. ఇద్దరు అన్నదమ్ములూ నేల మీద పడిపోయారు. వానరులంతా ఏడ్చారు. అప్పుడు పెద్ద గాలి వీచింది. బంగారు రెక్కలతో పక్షుల రాజు గరుత్మంతుడు ఆకాశం నుంచి కిందికి దూసుకొచ్చాడు. ఆయనను చూడగానే పాములన్నీ భయంతో పారిపోయాయి! రామలక్ష్మణులు మళ్ళీ బలంగా లేచి కూర్చున్నారు. వానరులు సంతోషంతో గంతులు వేశారు.',
      },
      {
        scene: { bg: 'night', props: [['moon', 60, 55, 0.7], ['fire', 210, 198, 1], ['demon', 290, 198, 1.1, { color: '#4a4a7a', raise: true }], ['archer', 110, 198, 1.4, { skin: 'fair', cloth: '#e8a23a' }], ['monkey', 50, 196, 1.2, { color: '#d9772a' }], ['demon', 365, 198, 0.8, { color: '#3a8a6a', cloth: '#f4ead2', flip: true }]] },
        en: 'Indrajit had one more secret. Vibhīṣaṇa, Rāvaṇa\'s good brother, told Rāma, "In the dark grove of Nikumbhilā, Indrajit is starting a fire-ritual. If he finishes it, no one will ever defeat him. We must stop him before it ends!" So Lakṣmaṇa set out with Hanumān and Vibhīṣaṇa. They reached the grove just in time, and the ritual was broken. Indrajit leapt up in fury, and a long, fierce battle began. At last Lakṣmaṇa placed a shining arrow on his bow and said, "If my brother Rāma is truly good and true, let this arrow win." The arrow flew like lightning, and the great cloud warrior fell. Over Laṅkā, the thunder was silent at last.',
        te: 'ఇంద్రజిత్తుకు ఇంకో రహస్యం ఉంది. రావణుడి మంచి తమ్ముడు విభీషణుడు రాముడితో ఇలా చెప్పాడు: "నికుంభిల అనే చీకటి వనంలో ఇంద్రజిత్తు ఒక యజ్ఞం మొదలుపెడుతున్నాడు. అది పూర్తయితే ఇక అతన్ని ఎవరూ ఓడించలేరు. అది ముగిసేలోపే మనం అతన్ని ఆపాలి!" అందుకే లక్ష్మణుడు హనుమంతుడిని, విభీషణుడిని వెంటబెట్టుకుని బయలుదేరాడు. సరిగ్గా సమయానికి వారు ఆ వనానికి చేరుకున్నారు. యజ్ఞం ఆగిపోయింది. ఇంద్రజిత్తు కోపంతో లేచాడు. చాలాసేపు భయంకరమైన యుద్ధం జరిగింది. చివరకు లక్ష్మణుడు మెరిసే బాణాన్ని విల్లుకు ఎక్కుపెట్టి, "మా అన్న రాముడు నిజంగా ధర్మాత్ముడు, సత్యవంతుడు అయితే, ఈ బాణం గెలవాలి," అన్నాడు. ఆ బాణం మెరుపులా దూసుకెళ్ళింది. మేఘాల వీరుడు నేల కూలాడు. లంక మీద ఉరుములు ఇక ఆగిపోయాయి.',
      },
    ],
  },
  {
    id: 'viduras-simple-meal-for-krishna',
    added: '2026-10-24',
    epic: 'Mahabharata',
    chars: ['Vidura', 'Kṛṣṇa', 'Duryodhana'],
    title: { en: 'Vidura\'s Simple Meal for Kṛṣṇa', te: 'విదురుడి ఇంట శ్రీకృష్ణుడి భోజనం' },
    moral: { en: 'God looks at the love in a gift, not at its price.', te: 'కానుకలోని ప్రేమనే దేవుడు చూస్తాడు, దాని విలువను కాదు.' },
    cover: { bg: 'village', props: [['hut', 200, 196, 1.3], ['person', 140, 198, 1.4, { skin: 'blue', cloth: '#f0c040', crown: true, tilak: true }], ['person', 260, 198, 1.3, { female: true, cloth: '#e8d29a', pallu: '#3a8a6a' }], ['bananas', 200, 205, 1.3], ['sun', 360, 50, 0.8]] },
    pages: [
      {
        scene: { bg: 'palace', props: [['person', 120, 198, 1.4, { cloth: '#a83a3a', crown: true, raise: true }], ['mace', 85, 198, 0.9], ['pot', 200, 198, 1], ['pot', 230, 198, 0.8], ['person', 300, 198, 1.4, { flip: true, skin: 'blue', cloth: '#f0c040', crown: true, tilak: true }]] },
        en: 'When Kṛṣṇa came to Hastināpura to talk about peace, Duryodhana wanted to impress him. He made his palace sparkle. Golden plates were set out with a hundred sweet and spicy dishes, and soft silk beds were made ready. "Come, Kṛṣṇa," said Duryodhana with a smile. "Eat with us and rest in my palace." But Kṛṣṇa knew the smile was not real. "Thank you, Prince," he said gently. "A person eats in someone\'s home for one of two reasons — because there is love, or because he is hungry and in need. You have no love for the Pāṇḍavas, who are dear to me, and I am not in need." And he walked away to a small, simple house nearby.',
        te: 'శాంతి గురించి మాట్లాడడానికి శ్రీకృష్ణుడు హస్తినాపురానికి వచ్చినప్పుడు, ఆయనను మెప్పించాలని దుర్యోధనుడు అనుకున్నాడు. తన భవనాన్ని ధగధగా మెరిసేలా అలంకరించాడు. బంగారు పళ్ళాల్లో వంద రకాల తీపి, కారం వంటకాలు సిద్ధం చేయించాడు. మెత్తని పట్టు పరుపులు వేయించాడు. "రా కృష్ణా," అని నవ్వుతూ పిలిచాడు దుర్యోధనుడు. "మాతో భోజనం చేసి, నా భవనంలో విశ్రాంతి తీసుకో." కానీ ఆ నవ్వు నిజమైనది కాదని కృష్ణుడికి తెలుసు. "ధన్యవాదాలు రాకుమారా," అన్నాడు ఆయన మృదువుగా. "ఎవరైనా ఇంకొకరి ఇంట్లో భోజనం చేసేది రెండు కారణాల వల్లే — ప్రేమ ఉంటే, లేదా ఆకలితో అవసరంలో ఉంటే. నాకు ప్రియమైన పాండవుల మీద నీకు ప్రేమ లేదు. నాకు అవసరమూ లేదు." అని చెప్పి, దగ్గర్లోనే ఉన్న ఒక చిన్న, సాదా ఇంటి వైపు నడిచాడు.',
      },
      {
        scene: { bg: 'village', props: [['hut', 200, 194, 1.2], ['person', 140, 198, 1.4, { skin: 'blue', cloth: '#f0c040', crown: true, tilak: true }], ['bananas', 200, 205, 1.3], ['person', 260, 198, 1.3, { female: true, cloth: '#e8d29a', pallu: '#3a8a6a', raise: true }], ['flowers', 360, 198, 0.8]] },
        en: 'That was the home of Vidura, the wise and honest uncle of the Pāṇḍavas. It is said that Vidura was out, and only his wife was at home. When she opened the door and saw Kṛṣṇa standing there, she could hardly believe her eyes! "Kṛṣṇa, in our little house!" She seated him on a mat and looked around. There was nothing special to offer — only a bunch of bananas. She sat beside him and began to peel them. But her heart was so full of joy, and her eyes so fixed on Kṛṣṇa\'s face, that she dropped the fruit on the floor and handed him the peels instead! And Kṛṣṇa, smiling, ate every peel as if it were the finest sweet.',
        te: 'అది పాండవుల తెలివైన, నిజాయితీ గల బాబాయి విదురుడి ఇల్లు. ఆ సమయంలో విదురుడు ఇంట్లో లేడని, ఆయన భార్య మాత్రమే ఉందని చెబుతారు. తలుపు తీసి ఎదురుగా శ్రీకృష్ణుడిని చూడగానే ఆమె తన కళ్ళను తానే నమ్మలేకపోయింది! "కృష్ణా, మా చిన్న ఇంటికి నువ్వా!" ఆమె ఆయనను ఒక చాప మీద కూర్చోబెట్టి చుట్టూ చూసింది. పెట్టడానికి ప్రత్యేకంగా ఏమీ లేదు — కొన్ని అరటిపళ్ళు తప్ప. ఆమె ఆయన పక్కన కూర్చుని అరటిపళ్ళు ఒలవడం మొదలుపెట్టింది. కానీ ఆమె మనసు ఆనందంతో నిండిపోయింది, కళ్ళు కృష్ణుడి ముఖం మీదే ఉన్నాయి. అందుకే పండును కింద పడేసి, తొక్కను ఆయన చేతికి ఇచ్చింది! కృష్ణుడు చిరునవ్వుతో ఆ తొక్కలన్నీ గొప్ప మిఠాయిలా తినేశాడు.',
      },
      {
        scene: { bg: 'village', props: [['hut', 200, 194, 1.2], ['person', 120, 198, 1.4, { skin: 'blue', cloth: '#f0c040', crown: true, tilak: true }], ['bananas', 175, 205, 1.2], ['person', 240, 198, 1.3, { female: true, cloth: '#e8d29a', pallu: '#3a8a6a' }], ['person', 310, 198, 1.4, { cloth: '#f4ead2', beard: true, hair: '#ddd', raise: true }], ['moon', 360, 50, 0.6]] },
        en: 'Just then Vidura came home. He stopped at the door and gasped. "What are you doing? You are feeding the Lord banana peels!" His wife looked down and saw the fruit lying on the floor. Her cheeks turned pink. "Oh! I was so happy, I did not even notice!" Vidura quickly peeled a banana and gave Kṛṣṇa the sweet fruit. Kṛṣṇa ate it and laughed softly. "Vidura, your fruit is sweet. But the peels your wife gave me were sweeter still — because every one was full of love." That night Kṛṣṇa slept happily in Vidura\'s simple home. A palace full of gold could not give him what a small house full of love had given.',
        te: 'అప్పుడే విదురుడు ఇంటికి వచ్చాడు. గుమ్మంలోనే ఆగిపోయి ఆశ్చర్యపోయాడు. "ఏం చేస్తున్నావు? స్వామికి అరటి తొక్కలు తినిపిస్తున్నావా!" ఆమె కిందకు చూసింది. నేల మీద పళ్ళు పడి ఉన్నాయి. ఆమె ముఖం సిగ్గుతో ఎర్రబడింది. "అయ్యో! సంతోషంలో నేను గమనించనే లేదు!" విదురుడు వెంటనే ఒక అరటిపండు ఒలిచి, తియ్యని పండును కృష్ణుడికి ఇచ్చాడు. కృష్ణుడు అది తిని మెల్లగా నవ్వాడు. "విదురా, నువ్విచ్చిన పండు తియ్యగానే ఉంది. కానీ నీ భార్య ఇచ్చిన తొక్కలు ఇంకా తియ్యగా ఉన్నాయి — ఎందుకంటే ప్రతి దాంట్లోనూ ప్రేమ నిండి ఉంది." ఆ రాత్రి కృష్ణుడు విదురుడి సాదా ఇంట్లో హాయిగా నిద్రపోయాడు. బంగారంతో నిండిన భవనం ఇవ్వలేనిది, ప్రేమతో నిండిన చిన్న ఇల్లు ఆయనకు ఇచ్చింది.',
      },
    ],
  },
];
