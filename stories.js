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
];
