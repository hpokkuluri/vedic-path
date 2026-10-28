/* Upcoming festivals: worked out from the app's own Pañcāṅgam (amānta Telugu calendar) for the saved location.
   Rules: tithi prevailing at sunrise ('rise'), sunset/pradōṣa ('set') or midnight ('mid') in the given lunar month.
   m = lunar month (0 Caitra … 11 Phālguna), t = tithi 0..29 (0-14 śukla, 14 Pūrṇima, 15-29 kṛṣṇa, 29 Amāvāsya). */
(function () {
  'use strict';
  var FESTS = [
    { id:'ugadi', en:'Ugādi', te:'ఉగాది', icon:'🌿', g:'#1d5a2a,#7fb04a', m:0, t:0,
      about:['The Telugu New Year — the first day of Caitra, when a new saṃvatsara (year of the 60-year cycle) begins. Tradition holds that Brahmā began creation on this day.',
             'తెలుగు సంవత్సరాది — చైత్ర శుద్ధ పాడ్యమి. కొత్త సంవత్సరం (అరవై సంవత్సరాల చక్రంలో) మొదలయ్యే రోజు. బ్రహ్మ సృష్టి ఆరంభించిన రోజని సంప్రదాయం.'],
      obs:['Oil bath at dawn, mango-leaf tōraṇams on the door, Ugādi pacchaḍi with six tastes (sweet, sour, salt, bitter, spicy, astringent) for the joys and sorrows of the year, and Pañcāṅga śravaṇam — hearing the new year\'s almanac read.',
           'తెల్లవారుజామున అభ్యంగన స్నానం, గుమ్మానికి మామిడాకుల తోరణాలు, షడ్రుచుల ఉగాది పచ్చడి, సాయంత్రం పంచాంగ శ్రవణం.'] },
    { id:'ramanavami', en:'Śrī Rāma Navamī', te:'శ్రీరామ నవమి', icon:'🏹', g:'#0a2a5a,#3a7ac0', m:0, t:8, at:'noon',
      about:['The birth of Śrī Rāma — Caitra śukla navamī, at noon, in Punarvasu nakṣatra, as Vālmīki tells in the Bāla Kāṇḍa.',
             'శ్రీరాముని జన్మదినం — చైత్ర శుద్ధ నవమి, పునర్వసు నక్షత్రంలో మధ్యాహ్నం. వాల్మీకి బాలకాండలో చెప్పినట్లు.'],
      obs:['Sītārāma Kalyāṇam in temples and homes — most famously at Bhadrācalam — with pānakam (jaggery-pepper drink) and vaḍapappu (soaked moong dal) as prasādam.',
           'ఆలయాల్లో, ఇళ్లలో సీతారామ కళ్యాణం — భద్రాచలంలో ప్రత్యేకం. పానకం, వడపప్పు ప్రసాదం.'] },
    { id:'akshaya', en:'Akṣaya Tṛtīyā', te:'అక్షయ తృతీయ', icon:'🪙', g:'#5a3a02,#d0a02a', m:1, t:2,
      about:['Vaiśākha śukla tṛtīyā — "akṣaya" means that which never wanes; good deeds done today are said to bear unending fruit. Also kept as Paraśurāma Jayantī.',
             'వైశాఖ శుద్ధ తదియ. "అక్షయ" అంటే తరగనిది — ఈ రోజు చేసిన దానధర్మాల ఫలం తరగదని నమ్మకం. పరశురామ జయంతి కూడా.'],
      obs:['Dānam (giving water pots, fans, food), buying gold, and at Siṃhācalam the Candanōtsavam — the one day the sandal paste is removed and the Lord\'s nija-rūpa is seen.',
           'దానాలు (నీటి కుండలు, విసనకర్రలు, అన్నం), బంగారం కొనడం. సింహాచలంలో చందనోత్సవం — స్వామి నిజరూప దర్శనం ఈ ఒక్క రోజే.'] },
    { id:'narasimha', en:'Narasiṃha Jayantī', te:'నృసింహ జయంతి', icon:'🦁', g:'#5a1a02,#d0701c', m:1, t:13, at:'set',
      about:['Vaiśākha śukla caturdaśī, at dusk — the hour Lord Narasiṃha burst from the pillar to protect Prahlāda and end Hiraṇyakaśipu.',
             'వైశాఖ శుద్ధ చతుర్దశి, సంధ్యా సమయం — ప్రహ్లాదుని కాపాడటానికి స్తంభం నుండి నరసింహస్వామి ఆవిర్భవించిన వేళ.'],
      obs:['Fasting through the day, pūja at sunset, Lakṣmī-Nṛsiṃha Karāvalamba stōtram, and pānakam. Special at Yādādri, Ahōbilam and Siṃhācalam.',
           'పగలు ఉపవాసం, సాయంత్రం పూజ, లక్ష్మీనృసింహ కరావలంబ స్తోత్రం, పానకం. యాదాద్రి, అహోబిలం, సింహాచలంలో ప్రత్యేక ఉత్సవాలు.'] },
    { id:'hanuman', en:'Hanumān Jayantī', te:'హనుమజ్జయంతి', icon:'🙏', g:'#6a1a02,#e0601c', m:1, t:24,
      about:['In the Telugu states Hanumān Jayantī is kept on Vaiśākha bahuḷa daśamī, closing the 41-day Hanumān dīkṣa that starts on Caitra pūrṇimā (the day North India celebrates).',
             'తెలుగు రాష్ట్రాల్లో హనుమజ్జయంతి వైశాఖ బహుళ దశమి. చైత్ర పూర్ణిమ (ఉత్తర భారతంలో జయంతి) నుండి 41 రోజుల హనుమాన్ దీక్ష ఈ రోజు పూర్తవుతుంది.'],
      obs:['Hanumān Cālīsā and Sundara Kāṇḍa pārāyaṇam, tamalapāku (betel-leaf) pūja, and processions to Koṇḍagaṭṭu and other Hanumān temples.',
           'హనుమాన్ చాలీసా, సుందరకాండ పారాయణం, తమలపాకుల పూజ. కొండగట్టు వంటి ఆలయాలకు దీక్షాపరుల యాత్ర.'] },
    { id:'toli', en:'Tholi Ēkādaśī', te:'తొలి ఏకాదశి', icon:'🐍', g:'#0a2a4a,#2a8a9a', m:3, t:10,
      about:['Āṣāḍha śukla ēkādaśī (Śayana Ēkādaśī) — the "first" ēkādaśī, when Viṣṇu lies down on Ādiśēṣa for His four-month yōga-nidrā. Cāturmāsya begins.',
             'ఆషాఢ శుద్ధ ఏకాదశి (శయన ఏకాదశి). శ్రీమహావిష్ణువు శేషశయ్యపై యోగనిద్రకు ఉపక్రమించే రోజు. చాతుర్మాస్యం మొదలు.'],
      obs:['Fasting, Viṣṇu pūja and Sahasranāma pārāyaṇam; pēlāla piṇḍi (roasted jowar flour with jaggery) is the day\'s traditional food.',
           'ఉపవాసం, విష్ణు పూజ, సహస్రనామ పారాయణం. పేలాల పిండి ఈ రోజు ప్రత్యేకం.'] },
    { id:'guru', en:'Guru Pūrṇimā', te:'గురు పూర్ణిమ', icon:'📜', g:'#3a1a06,#c08a3a', m:3, t:14,
      about:['Āṣāḍha pūrṇimā — Vyāsa Pūrṇimā, the birthday of Vēdavyāsa, who divided the Vēda and composed the Mahābhārata. The day to honour one\'s guru.',
             'ఆషాఢ పూర్ణిమ — వ్యాస పూర్ణిమ. వేదాలను విభజించి, మహాభారతం రచించిన వేదవ్యాసుని జయంతి. గురువులను పూజించే రోజు.'],
      obs:['Vyāsa pūja, visiting and offering gifts to teachers; sannyāsins begin their Cāturmāsya vrata.',
           'వ్యాస పూజ, గురువులకు నమస్కారం, కానుకలు. సన్యాసులు చాతుర్మాస్య వ్రతం ప్రారంభిస్తారు.'] },
    { id:'varalakshmi', en:'Varalakṣmī Vratam', te:'వరలక్ష్మీ వ్రతం', icon:'🪷', g:'#6a0a3a,#e0508a', special:'varalakshmi',
      about:['The Friday just before Śrāvaṇa pūrṇimā. In the Skanda Purāṇa story, Lakṣmī appears in a dream to the devoted Cārumati and teaches her this vrata.',
             'శ్రావణ పూర్ణిమకు ముందు వచ్చే శుక్రవారం. స్కాందపురాణ కథలో చారుమతికి లక్ష్మీదేవి కలలో కనిపించి ఈ వ్రతం ఉపదేశిస్తుంది.'],
      obs:['A kalaśam is dressed as Lakṣmī, the vrata kathā is read, women tie the nine-knot tōram on the wrist and exchange tāmbūlam.',
           'కలశాన్ని లక్ష్మీదేవిగా అలంకరించి పూజ, వ్రతకథ, తోరం కట్టుకోవడం, ముత్తైదువులకు తాంబూలం.'] },
    { id:'rakhi', en:'Rākhī · Jandhyāla Pūrṇimā', te:'రాఖీ · జంధ్యాల పూర్ణిమ', icon:'🧵', g:'#5a0a1a,#d03a4a', m:4, t:14,
      about:['Śrāvaṇa pūrṇimā — Upākarma, when those who wear the yajñōpavītam change it and resume Vēda study; also Rakṣā Bandhan and Hayagrīva Jayantī.',
             'శ్రావణ పూర్ణిమ — ఉపాకర్మ: యజ్ఞోపవీతం మార్చుకుని వేదాధ్యయనం మళ్ళీ మొదలుపెట్టే రోజు. రక్షాబంధనం, హయగ్రీవ జయంతి కూడా.'],
      obs:['New jandhyam with Gāyatrī japa; sisters tie rākhī on brothers\' wrists.',
           'కొత్త జంధ్యం, గాయత్రీ జపం. అక్కచెల్లెళ్ళు అన్నదమ్ములకు రాఖీ కడతారు.'] },
    { id:'krishna', en:'Śrī Kṛṣṇāṣṭamī', te:'శ్రీకృష్ణాష్టమి', icon:'🦚', g:'#0a1a5a,#3a5ad0', m:4, t:22, at:'mid',
      about:['Śrāvaṇa bahuḷa aṣṭamī — Kṛṣṇa was born at midnight in Rōhiṇī, in Kaṃsa\'s prison at Mathurā, and carried across the Yamunā to Gōkula.',
             'శ్రావణ బహుళ అష్టమి — అర్ధరాత్రి రోహిణీ నక్షత్రంలో మథురలో కంసుని చెరసాలలో శ్రీకృష్ణ జననం. వసుదేవుడు యమున దాటి గోకులానికి చేర్చాడు.'],
      obs:['Fasting till midnight, little footprints drawn from the door to the pūja room, children dressed as Kṛṣṇa, and uṭṭi koṭṭaḍam — breaking the hanging pot of butter.',
           'అర్ధరాత్రి వరకు ఉపవాసం, గుమ్మం నుండి చిన్ని పాదాలు, పిల్లలకు కృష్ణ వేషం, ఉట్టి కొట్టడం.'] },
    { id:'vinayaka', en:'Vināyaka Cavithi', te:'వినాయక చవితి', icon:'🐘', g:'#5a2a02,#e0801c', m:5, t:3, at:'noon',
      about:['Bhādrapada śukla caturthī — the birth of Gaṇapati. The vrata kathā tells of the Śyamantaka jewel and why one should not look at the moon tonight.',
             'భాద్రపద శుద్ధ చవితి — వినాయకుని జన్మదినం. వ్రతకథలో శ్యమంతకమణి కథ, ఈ రాత్రి చంద్రుని చూడరాదనే కారణం.'],
      obs:['A clay Gaṇeśa worshipped with 21 kinds of leaves (ēkaviṃśati patri), kuḍumulu and undrāḷḷu, the kathā read and akṣatas placed on the head; immersion after one to eleven days.',
           'మట్టి వినాయకునికి 21 పత్రులతో పూజ, కుడుములు, ఉండ్రాళ్ళు నైవేద్యం, కథ చదివి అక్షతలు. 1 నుండి 11 రోజుల తర్వాత నిమజ్జనం.'] },
    { id:'mahalaya', en:'Mahālaya Amāvāsya', te:'మహాలయ అమావాస్య', icon:'🕯️', g:'#1a1a2a,#5a5a7a', m:5, t:29,
      about:['The new moon that closes Pitṛ Pakṣa, the fortnight for the ancestors. Bathukamma begins on this day in Telangana (Engili Pūla Bathukamma).',
             'పితృపక్షం ముగిసే అమావాస్య — పితృదేవతల రోజు. తెలంగాణలో బతుకమ్మ (ఎంగిలి పూల బతుకమ్మ) ఈ రోజు మొదలు.'],
      obs:['Tarpaṇam and śrāddham for all ancestors, feeding the poor; women stack flowers into Bathukamma.',
           'పితరులకు తర్పణం, శ్రాద్ధం, అన్నదానం. ఆడపడుచులు పూలతో బతుకమ్మ పేర్చడం.'] },
    { id:'navaratri', en:'Dēvī Navarātrulu begin', te:'దేవీ నవరాత్రులు', icon:'🔱', g:'#6a0a0a,#e03a1c', m:6, t:0,
      about:['Āśvayuja śukla pāḍyami — nine nights of the Goddess, honouring Durgā\'s battle with Mahiṣāsura, ending in Vijayadaśamī.',
             'ఆశ్వయుజ శుద్ధ పాడ్యమి — తొమ్మిది రాత్రుల దేవీ ఆరాధన. మహిషాసురునితో దుర్గాదేవి యుద్ధం, విజయదశమితో ముగింపు.'],
      obs:['Kalaśa sthāpana, a different alaṅkāram each day (famously Kanaka Durgā at Vijayawāḍa), Lalitā Sahasranāmam, bommala koluvu, and Sarasvatī pūja on Mūla nakṣatra.',
           'కలశ స్థాపన, రోజుకొక అలంకారం (విజయవాడ కనకదుర్గ), లలితా సహస్రనామం, బొమ్మల కొలువు, మూలా నక్షత్రాన సరస్వతీ పూజ.'] },
    { id:'dasara', en:'Vijayadaśamī', te:'విజయదశమి', icon:'🏹', g:'#5a0a02,#e05a1c', m:6, t:9,
      about:['Āśvayuja śukla daśamī — the victory of Durgā over Mahiṣāsura and, in the Rāma tradition, of Rāma over Rāvaṇa. The Pāṇḍavas took back their weapons from the śamī tree on this day.',
             'ఆశ్వయుజ శుద్ధ దశమి — మహిషాసురునిపై దుర్గ విజయం, రావణునిపై రాముని విజయం. పాండవులు శమీవృక్షం నుండి ఆయుధాలు తీసుకున్న రోజు.'],
      obs:['Śamī pūja and exchanging śamī leaves as "gold", āyudha pūja, starting new learning; in Telangana, sighting the pālapitta (Indian roller) bird.',
           'శమీ పూజ, జమ్మి ఆకులు బంగారంగా పంచుకోవడం, ఆయుధ పూజ, అక్షరాభ్యాసం. తెలంగాణలో పాలపిట్ట దర్శనం.'] },
    { id:'atlataddi', en:'Atla Taddi', te:'అట్లతద్ది', icon:'🌙', g:'#2a0a3a,#a03ab0', m:6, t:17,
      about:['Āśvayuja bahuḷa tadiya — a Telugu women\'s vrata to Gaurī for a good married life, kept on the same night as North India\'s Karvā Cauth.',
             'ఆశ్వయుజ బహుళ తదియ — మంచి వైవాహిక జీవితం కోసం గౌరీదేవికి ఆడవారు చేసే వ్రతం. ఉత్తర భారతంలో కర్వా చౌత్ ఇదే రాత్రి.'],
      obs:['Eating before dawn (gōṅgūra and curd rice), swings and games through the day, fasting until moonrise, and offering aṭlu (dosas) to Gaurī.',
           'తెల్లవారకముందే భోజనం, పగలంతా ఉయ్యాలలు, ఆటలు, చంద్రోదయం వరకు ఉపవాసం, గౌరీదేవికి అట్లు నైవేద్యం.'] },
    { id:'dhanteras', en:'Dhana Trayōdaśī', te:'ధన త్రయోదశి', icon:'🏺', g:'#5a3a02,#e0a01c', m:6, t:27, at:'set',
      about:['Āśvayuja bahuḷa trayōdaśī — Dhanvantari rose from the churning of the ocean holding the pot of amṛta. The first day of the Dīpāvali days.',
             'ఆశ్వయుజ బహుళ త్రయోదశి — క్షీరసాగర మథనంలో అమృత కలశంతో ధన్వంతరి ఆవిర్భవించిన రోజు. దీపావళి పండుగల మొదటి రోజు.'],
      obs:['Lakṣmī–Kubēra pūja in the evening, buying gold or new vessels, and a lamp for Yama facing south (Yama dīpam).',
           'సాయంత్రం లక్ష్మీ-కుబేర పూజ, బంగారం లేదా కొత్త పాత్రలు కొనడం, దక్షిణ దిక్కుగా యమదీపం.'] },
    { id:'naraka', en:'Naraka Caturdaśī', te:'నరక చతుర్దశి', icon:'🪔', g:'#3a0a02,#c04a1c', m:6, t:28,
      about:['Āśvayuja bahuḷa caturdaśī — Kṛṣṇa and Satyabhāmā destroyed Narakāsura and freed the 16,000 women he held captive.',
             'ఆశ్వయుజ బహుళ చతుర్దశి — శ్రీకృష్ణుడు, సత్యభామ నరకాసురుని సంహరించి, అతని చెరలోని పదహారువేల మందిని విడిపించిన రోజు.'],
      obs:['Oil bath before dawn, new clothes, lamps in the evening and the first crackers.',
           'తెల్లవారుజామున అభ్యంగన స్నానం, కొత్త బట్టలు, సాయంత్రం దీపాలు, టపాసులు.'] },
    { id:'deepavali', en:'Dīpāvali', te:'దీపావళి', icon:'🪔', g:'#5a1a02,#f0a01c', m:6, t:29, at:'set',
      about:['Āśvayuja amāvāsya — the festival of lamps: celebrating the end of Narakāsura and, in the North, Rāma\'s return to Ayōdhyā. Lakṣmī is worshipped on this new-moon evening.',
             'ఆశ్వయుజ అమావాస్య — దీపాల పండుగ. నరకాసుర వధ, ఉత్తరాదిలో శ్రీరాముడు అయోధ్యకు తిరిగి వచ్చిన వేడుక. ఈ అమావాస్య సాయంత్రం లక్ష్మీపూజ.'],
      obs:['Lakṣmī pūja at pradōṣa, rows of diyas, sweets and crackers; children wave gōgu-stalk torches (diviṭīlu) in Telugu villages.',
           'ప్రదోష వేళ లక్ష్మీపూజ, వరుస దీపాలు, మిఠాయిలు, టపాసులు. పల్లెల్లో పిల్లలు దివిటీలు కొడతారు.'] },
    { id:'nagula', en:'Nāgula Cavithi', te:'నాగుల చవితి', icon:'🐍', g:'#0a3a1a,#3a9a4a', m:7, t:3,
      about:['Kārtika śukla caturthī — the Telugu day for the Nāga dēvatas, praying for the family\'s protection and for children.',
             'కార్తీక శుద్ధ చవితి — నాగదేవతల పూజ. కుటుంబ రక్షణ, సంతానం కోసం.'],
      obs:['Fasting, pouring milk into the anthill (puṭṭa), offering cimmili (sesame-jaggery balls) and chalividi.',
           'ఉపవాసం, పుట్టలో పాలు పోయడం, చిమ్మిలి, చలిమిడి నైవేద్యం.'] },
    { id:'kshirabdi', en:'Kṣīrābdhi Dvādaśī', te:'క్షీరాబ్ధి ద్వాదశి', icon:'🌱', g:'#0a3a2a,#2a9a6a', m:7, t:11,
      about:['Kārtika śukla dvādaśī — the day after Utthāna Ēkādaśī, when Viṣṇu wakes from yōga-nidrā; also remembered as the day the ocean of milk was churned.',
             'కార్తీక శుద్ధ ద్వాదశి — ఉత్థాన ఏకాదశి మరుసటి రోజు, విష్ణువు యోగనిద్ర నుండి లేచే రోజు. క్షీరసాగర మథనం జరిగిన రోజని ప్రతీతి.'],
      obs:['Tulasī pūja with an usiri (amla) branch planted beside the tulasī, and lamps lit around it in the evening.',
           'తులసికోట వద్ద ఉసిరి కొమ్మ పెట్టి తులసీ-దామోదర పూజ, సాయంత్రం దీపాలు.'] },
    { id:'karthika', en:'Kārtika Pūrṇimā', te:'కార్తీక పూర్ణిమ', icon:'🔥', g:'#5a0a0a,#e0601c', m:7, t:14, at:'set',
      about:['The full moon of Kārtika — Tripurāri Pūrṇimā, when Śiva destroyed the three cities of the asuras. The holiest night of the holiest month for lamps.',
             'కార్తీక పూర్ణిమ — త్రిపురాసురులను శివుడు సంహరించిన త్రిపురారి పూర్ణిమ. దీపారాధనకు అత్యంత పవిత్రమైన రోజు.'],
      obs:['365 wicks lit together, lamps floated on rivers and tanks, and the jvālā-tōraṇam lit at Śiva temples.',
           '365 వత్తుల దీపం, నదుల్లో దీపాలు వదలడం, శివాలయాల్లో జ్వాలాతోరణం.'] },
    { id:'subrahmanya', en:'Subrahmaṇya Ṣaṣṭhī', te:'సుబ్రహ్మణ్య షష్ఠి', icon:'🦚', g:'#3a0a4a,#c03a8a', m:8, t:5,
      about:['Mārgaśira śukla ṣaṣṭhī — Kumāra Svāmi\'s victory over Tārakāsura, and His wedding to Dēvasēnā.',
             'మార్గశిర శుద్ధ షష్ఠి — తారకాసురునిపై కుమారస్వామి విజయం, దేవసేనతో కళ్యాణం.'],
      obs:['Fasting, abhiṣēkam at Subrahmaṇya temples (Mōpidēvi, Biccavōlu), and worship at anthills.',
           'ఉపవాసం, సుబ్రహ్మణ్య ఆలయాల్లో (మోపిదేవి, బిక్కవోలు) అభిషేకం, పుట్టలో పాలు.'] },
    { id:'gita', en:'Gītā Jayantī', te:'గీతా జయంతి', icon:'📖', g:'#3a1a02,#c0802a', m:8, t:10,
      about:['Mārgaśira śukla ēkādaśī (Mōkṣada Ēkādaśī) — the day Kṛṣṇa taught the Bhagavad Gītā to Arjuna on the field of Kurukṣētra.',
             'మార్గశిర శుద్ధ ఏకాదశి (మోక్షద ఏకాదశి) — కురుక్షేత్రంలో అర్జునునికి శ్రీకృష్ణుడు భగవద్గీత ఉపదేశించిన రోజు.'],
      obs:['Reciting the Gītā — the whole text, or at least Chapter 15 — and fasting for the ēkādaśī.',
           'భగవద్గీత పారాయణం — పూర్తిగా లేదా కనీసం 15వ అధ్యాయం. ఏకాదశి ఉపవాసం.'] },
    { id:'datta', en:'Datta Jayantī', te:'దత్త జయంతి', icon:'🐄', g:'#3a2a0a,#a08a3a', m:8, t:14,
      about:['Mārgaśira pūrṇimā — the birth of Dattātrēya, born to the sage Atri and Anasūyā as the joint grace of Brahmā, Viṣṇu and Śiva.',
             'మార్గశిర పూర్ణిమ — అత్రి మహర్షి, అనసూయలకు త్రిమూర్తుల అంశగా దత్తాత్రేయుని జననం.'],
      obs:['Guru Caritra pārāyaṇam and pūja at Datta kṣētras such as Pīṭhāpuram.',
           'గురుచరిత్ర పారాయణం, పిఠాపురం వంటి దత్త క్షేత్రాల్లో పూజ.'] },
    { id:'vaikuntha', en:'Vaikuṇṭha Ēkādaśī', te:'వైకుంఠ ఏకాదశి', icon:'🚪', g:'#0a2a5a,#d0a02a', special:'vaikuntha',
      about:['The śukla ēkādaśī while the Sun is in Dhanus (Dhanurmāsa) — Mukkōṭi Ēkādaśī, when the gates of Vaikuṇṭha are said to open.',
             'ధనుర్మాసంలో వచ్చే శుద్ధ ఏకాదశి — ముక్కోటి ఏకాదశి. వైకుంఠ ద్వారాలు తెరుచుకునే రోజని నమ్మకం.'],
      obs:['Fasting and jāgaraṇam, and darśanam through the northern gate (uttara-dvāram) of Viṣṇu temples — at Tirumala and Bhadrācalam above all.',
           'ఉపవాసం, జాగరణ, విష్ణు ఆలయాల్లో ఉత్తర ద్వార దర్శనం — తిరుమల, భద్రాచలంలో ప్రత్యేకం.'] },
    { id:'bhogi', en:'Bhōgi', te:'భోగి', icon:'🔥', g:'#5a1a02,#e0701c', special:'bhogi',
      about:['The day before Makara Saṅkrānti — the first day of the Telugu harvest festival. Old things are burnt in the bhōgi fire to welcome the new.',
             'మకర సంక్రాంతికి ముందు రోజు — పెద్ద పండుగలో మొదటి రోజు. పాతవి భోగిమంటల్లో వేసి కొత్తదనాన్ని ఆహ్వానించడం.'],
      obs:['Bhōgi maṇṭalu before dawn, and bhōgi paḷḷu (regi fruits) poured over small children\'s heads in the evening.',
           'తెల్లవారుజామున భోగి మంటలు, సాయంత్రం చిన్నపిల్లలకు భోగి పళ్ళు పోయడం.'] },
    { id:'sankranti', en:'Makara Saṅkrānti', te:'మకర సంక్రాంతి', icon:'🪁', g:'#5a3a02,#f0b01c', special:'sankranti',
      about:['The Sun enters Makara and begins its northward journey (uttarāyaṇa) — the great harvest festival of the Telugu people.',
             'సూర్యుడు మకరరాశిలో ప్రవేశించి ఉత్తరాయణం మొదలయ్యే రోజు — తెలుగువారి పెద్ద పండుగ.'],
      obs:['Muggulu with gobbemmalu, pongali, tarpaṇam for ancestors, haridāsulu and gaṅgireddulu at the door, and kites.',
           'ముగ్గులు, గొబ్బెమ్మలు, పొంగలి, పితృ తర్పణం, హరిదాసులు, గంగిరెద్దులు, గాలిపటాలు.'] },
    { id:'kanuma', en:'Kanuma', te:'కనుమ', icon:'🐂', g:'#3a2a0a,#a07a2a', special:'kanuma',
      about:['The day after Saṅkrānti — for the cattle who work the fields.',
             'సంక్రాంతి మరుసటి రోజు — పొలాల్లో శ్రమించే పశువుల పండుగ.'],
      obs:['Cattle are bathed, their horns painted and decorated, and worshipped; families gather for a feast.',
           'పశువులకు స్నానం, కొమ్ములకు రంగులు, అలంకరణ, పూజ. కుటుంబాలతో విందు.'] },
    { id:'vasanta', en:'Śrī Pañcamī', te:'శ్రీ పంచమి', icon:'🪕', g:'#5a4a02,#e0c01c', m:10, t:4,
      about:['Māgha śukla pañcamī (Vasanta Pañcamī) — the day of Sarasvatī, goddess of learning.',
             'మాఘ శుద్ధ పంచమి (వసంత పంచమి) — విద్యాదేవి సరస్వతీ దేవి పూజ.'],
      obs:['Sarasvatī pūja with books and instruments, and akṣarābhyāsam for small children — crowds at Basara.',
           'పుస్తకాలు, వాయిద్యాలతో సరస్వతీ పూజ, చిన్నారులకు అక్షరాభ్యాసం — బాసరలో ప్రత్యేకం.'] },
    { id:'rathasaptami', en:'Ratha Saptamī', te:'రథ సప్తమి', icon:'☀️', g:'#6a2a02,#f0901c', m:10, t:6,
      about:['Māgha śukla saptamī — the birthday of Sūrya, when His chariot of seven horses turns north.',
             'మాఘ శుద్ధ సప్తమి — సూర్యజయంతి. ఏడు గుర్రాల రథం ఉత్తర దిశగా మళ్ళే రోజు.'],
      obs:['Bath at sunrise with seven jilledu (arka) leaves on the head, arghyam to the Sun, pongali cooked outdoors in the sun; Arasavalli and Tirumala\'s one-day Brahmōtsavam.',
           'సూర్యోదయాన తలపై ఏడు జిల్లేడు ఆకులతో స్నానం, అర్ఘ్యం, ఎండలో పొంగలి. అరసవల్లి, తిరుమలలో ఒక్కరోజు బ్రహ్మోత్సవం.'] },
    { id:'bhishma', en:'Bhīṣma Ēkādaśī', te:'భీష్మ ఏకాదశి', icon:'🌸', g:'#3a0a2a,#b03a7a', m:10, t:10,
      about:['Māgha śukla ēkādaśī — by tradition the day Bhīṣma, on his bed of arrows, taught Yudhiṣṭhira the Viṣṇu Sahasranāmam.',
             'మాఘ శుద్ధ ఏకాదశి — అంపశయ్యపై భీష్ముడు ధర్మరాజుకు విష్ణు సహస్రనామం ఉపదేశించిన రోజని సంప్రదాయం.'],
      obs:['Viṣṇu Sahasranāma pārāyaṇam and fasting.',
           'విష్ణు సహస్రనామ పారాయణం, ఉపవాసం.'] },
    { id:'shivaratri', en:'Mahā Śivarātri', te:'మహా శివరాత్రి', icon:'🔱', g:'#0a0a3a,#3a4ab0', m:10, t:28, at:'mid',
      about:['Māgha bahuḷa caturdaśī — the night Śiva appeared as the endless pillar of fire (Liṅgōdbhava), the night of His wedding to Pārvatī.',
             'మాఘ బహుళ చతుర్దశి — శివుడు అనంత జ్యోతిర్లింగంగా ఆవిర్భవించిన లింగోద్భవ రాత్రి.'],
      obs:['Fasting, abhiṣēkam through the four yāmas of the night, Rudram, and jāgaraṇam — at Śrīśailam, Vēmulavāḍa and Śrīkāḷahasti.',
           'ఉపవాసం, రాత్రి నాలుగు యామాల అభిషేకం, రుద్ర పఠనం, జాగరణ — శ్రీశైలం, వేములవాడ, శ్రీకాళహస్తి.'] },
    { id:'holi', en:'Hōli · Kāmuni Pūrṇimā', te:'హోళీ · కాముని పున్నమి', icon:'🎨', g:'#5a0a5a,#e05ab0', m:11, t:14, at:'set',
      about:['Phālguna pūrṇimā — Hōlikā burnt while Prahlāda was saved; in the Telugu lands, Kāma dahanam — Śiva burning Manmatha with His third eye.',
             'ఫాల్గుణ పూర్ణిమ — హోలిక దహనం, ప్రహ్లాదుని రక్షణ. తెలుగునాట కామదహనం — శివుడు మూడో కన్నుతో మన్మథుని దహించిన కథ.'],
      obs:['Bonfire on the full-moon night, colours the next morning.',
           'పున్నమి రాత్రి కాముని దహనం మంటలు, మరుసటి ఉదయం రంగులు.'] },
  ];

  var MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var MON_TE = ['జన','ఫిబ్ర','మార్చి','ఏప్రి','మే','జూన్','జూలై','ఆగ','సెప్టె','అక్టో','నవం','డిసెం'];
  var WD = [['Sunday','ఆదివారం'],['Monday','సోమవారం'],['Tuesday','మంగళవారం'],['Wednesday','బుధవారం'],['Thursday','గురువారం'],['Friday','శుక్రవారం'],['Saturday','శనివారం']];

  function loc() {
    try { var l = JSON.parse(localStorage.getItem('vedic_panch_loc')); if (l && typeof l.lat === 'number' && l.tz) return l; } catch (e) {}
    return { name: 'East Windsor, NJ', lat: 40.2626, lon: -74.5254, tz: 'America/New_York' };
  }
  var memo = {};
  function day(L, dt) {      // dt: UTC Date holding y-m-d
    var k = dt.toISOString().slice(0, 10);
    if (!memo[k]) memo[k] = PANCH.compute(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate(), L.lat, L.lon, L.tz);
    return memo[k];
  }
  function tithiAt(r, t) {
    for (var i = 0; i < r.tithis.length; i++) if (r.tithis[i].start <= t && t < r.tithis[i].end) return r.tithis[i].idx;
    return r.tithis[0].idx;
  }
  function addDays(dt, n) { var x = new Date(dt.getTime()); x.setUTCDate(x.getUTCDate() + n); return x; }

  function matches(f, r, dt, L) {
    if (f.special === 'sankranti') return r.sunRasi === 9 && day(L, addDays(dt, -1)).sunRasi === 8;
    if (f.special === 'bhogi') return r.sunRasi === 8 && day(L, addDays(dt, 1)).sunRasi === 9;
    if (f.special === 'kanuma') return r.sunRasi === 9 && day(L, addDays(dt, -1)).sunRasi === 9 && day(L, addDays(dt, -2)).sunRasi === 8;
    var ti = tithiAt(r, r.sunrise);
    if (f.special === 'vaikuntha') return r.sunRasi === 8 && ti === 10;
    if (f.special === 'varalakshmi') return !r.adhika && r.masa === 4 && r.weekday === 5 && ti >= 7 && ti <= 14 &&
      tithiAt(day(L, addDays(dt, 7)), day(L, addDays(dt, 7)).sunrise) >= 14;
    if (r.adhika || r.masa !== f.m) return false;
    var at = f.at === 'noon' ? new Date((+r.sunrise + +r.sunset) / 2) : f.at === 'set' ? r.sunset : f.at === 'mid' ? new Date((+r.sunset + +r.nextSunrise) / 2) : r.sunrise;
    if (tithiAt(r, at) === f.t) return true;
    // a tithi that begins and ends between two sunrises (kṣaya) is kept on that day
    return !f.at && r.tithis.some(function (s) { return s.idx === f.t && s.start > r.sunrise && s.end <= r.nextSunrise; });
  }

  // Find the next `want` festivals from today, a few days of computing at a time so the page never freezes.
  function findUpcoming(want, done) {
    var L = loc(), p = PANCH.todayIn(L.tz), start = new Date(Date.UTC(p[0], p[1] - 1, p[2]));
    var key = 'vedic_fest_' + start.toISOString().slice(0, 10) + '_' + L.lat.toFixed(2) + '_' + L.lon.toFixed(2);
    try { var c = JSON.parse(localStorage.getItem(key)); if (c && c.v === 2) { done(c.list); return; } } catch (e) {}
    var found = [], seen = {}, i = 0;
    (function step() {
      var stopAt = i + 4;
      for (; i < stopAt && i < 400 && found.length < want; i++) {
        var dt = addDays(start, i), r = day(L, dt);
        for (var j = 0; j < FESTS.length && found.length < want; j++) {
          var f = FESTS[j];
          if (!seen[f.id] && matches(f, r, dt, L)) {
            seen[f.id] = 1;
            found.push({ id: f.id, date: dt.toISOString().slice(0, 10), masa: r.masa, tithi: tithiAt(r, r.sunrise), wd: r.weekday });
          }
        }
      }
      if (found.length < want && i < 400) { setTimeout(step, 0); return; }
      try {
        for (var k in localStorage) if (k.indexOf('vedic_fest_') === 0) localStorage.removeItem(k);
        localStorage.setItem(key, JSON.stringify({ v: 2, list: found }));
      } catch (e) {}
      memo = {};
      done(found);
    })();
  }

  var byId = {}; FESTS.forEach(function (f) { byId[f.id] = f; });
  var lastList = null;

  function css() {
    if (document.getElementById('fest-css')) return;
    var s = document.createElement('style'); s.id = 'fest-css';
    s.textContent =
      '.fest-wrap{width:100%;max-width:480px;padding:14px 16px 2px;box-sizing:border-box}' +
      '.fest-head{display:flex;align-items:baseline;justify-content:space-between;margin:0 2px 8px}' +
      '.fest-head b{font-family:"Crimson Text",Georgia,serif;font-size:1.15rem;color:var(--accent,#c0601c)}' +
      '.fest-head span{font-size:.78rem;color:var(--fg3,#998)}' +
      '.fest-row{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}' +
      '.fest-cube{position:relative;border-radius:14px;overflow:hidden;cursor:pointer;aspect-ratio:1/1.08;color:#fff;' +
      'display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding:8px 6px 9px;box-sizing:border-box;' +
      'box-shadow:0 2px 8px rgba(0,0,0,.18);-webkit-tap-highlight-color:transparent}' +
      '.fest-cube:active{transform:scale(.97)}' +
      '.fest-cube .ic{font-size:1.9rem;line-height:1;margin-bottom:auto;margin-top:16px}' +
      '.fest-cube .dt{position:absolute;top:6px;right:6px;background:#fffaf0;color:#3a1a06;border-radius:7px;padding:2px 5px;' +
      'text-align:center;font:700 .82rem/1.05 -apple-system,system-ui,sans-serif;min-width:26px}' +
      '.fest-cube .dt small{display:block;font-size:.6rem;font-weight:600;opacity:.75}' +
      '.fest-cube .nm{font-family:"Crimson Text",Georgia,serif;font-weight:700;font-size:.92rem;line-height:1.1;text-align:center;' +
      'text-shadow:0 1px 4px rgba(0,0,0,.4);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}' +
      '.fest-cube .te{font-size:.7rem;opacity:.9;margin-top:2px;font-family:"Noto Sans Telugu",sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}' +
      '.fest-cube.today{outline:2px solid #f0c040;outline-offset:-2px}' +
      '.fest-sk{border-radius:14px;aspect-ratio:1/1.08;background:linear-gradient(90deg,rgba(0,0,0,.05),rgba(0,0,0,.09),rgba(0,0,0,.05));background-size:200% 100%;animation:festSk 1.2s linear infinite}' +
      '@keyframes festSk{to{background-position:-200% 0}}' +
      '#fest-modal{position:fixed;inset:0;z-index:9000;background:rgba(10,4,2,.55);display:flex;align-items:flex-end;justify-content:center}' +
      '#fest-modal .sh{background:var(--bg,#fffaf3);color:var(--fg,#2a1a0a);width:100%;max-width:560px;max-height:86vh;overflow:auto;' +
      'border-radius:20px 20px 0 0;padding-bottom:calc(20px + env(safe-area-inset-bottom,0px));animation:festUp .28s ease}' +
      '@keyframes festUp{from{transform:translateY(40px);opacity:0}}' +
      '#fest-modal .hero{padding:22px 20px 18px;color:#fff;position:relative;text-align:center}' +
      '#fest-modal .hero .ic{font-size:2.8rem}' +
      '#fest-modal .hero h2{margin:6px 0 2px;font-family:"Crimson Text",Georgia,serif;font-size:1.6rem}' +
      '#fest-modal .hero .te{font-family:"Noto Sans Telugu",sans-serif;font-size:1.05rem;opacity:.95}' +
      '#fest-modal .hero .when{margin-top:10px;font-size:.88rem;opacity:.95;line-height:1.5}' +
      '#fest-modal .x{position:absolute;top:10px;right:12px;background:rgba(0,0,0,.25);border:0;color:#fff;width:32px;height:32px;border-radius:50%;font-size:1.1rem;cursor:pointer}' +
      '#fest-modal .bd{padding:6px 20px 0}' +
      '#fest-modal h3{font-family:"Crimson Text",Georgia,serif;color:var(--accent,#c0601c);font-size:1.12rem;margin:16px 0 6px}' +
      '#fest-modal p{margin:0 0 6px;line-height:1.6;font-size:.96rem}' +
      '#fest-modal p.t{font-family:"Noto Sans Telugu",sans-serif;font-size:.95rem;opacity:.9}' +
      '#fest-modal .pb{display:block;width:100%;margin:18px 0 4px;padding:12px;border:0;border-radius:12px;background:var(--accent,#c0601c);color:#fff;font:600 .95rem inherit;cursor:pointer}' +
      '#fest-modal .note{font-size:.75rem;opacity:.6;text-align:center;margin-top:8px;line-height:1.4}';
    document.head.appendChild(s);
  }

  function lang() { return (window.settings && settings.language) || 'both'; }
  function parts(iso) { var a = iso.split('-').map(Number); return a; }

  function cubeHTML(it, todayIso) {
    var f = byId[it.id], a = parts(it.date), lg = lang();
    var nm = lg === 'te' ? f.te : f.en;
    return '<div class="fest-cube' + (it.date === todayIso ? ' today' : '') + '" style="background:linear-gradient(160deg,' + f.g + ')" onclick="openFestival(\'' + it.id + '\',\'' + it.date + '\')">' +
      '<div class="dt">' + (it.date === todayIso ? (lg === 'te' ? 'నేడు' : 'Today') : a[2] + '<small>' + (lg === 'te' ? MON_TE[a[1] - 1] : MON[a[1] - 1]) + '</small>') + '</div>' +
      '<div class="ic">' + f.icon + '</div><div class="nm">' + nm + '</div>' +
      (lg === 'both' ? '<div class="te">' + f.te + '</div>' : '') + '</div>';
  }

  window.renderFestivalRow = function (el) {
    if (!el || typeof PANCH === 'undefined') return;
    css();
    var L = loc(), p = PANCH.todayIn(L.tz);
    var todayIso = p[0] + '-' + String(p[1]).padStart(2, '0') + '-' + String(p[2]).padStart(2, '0');
    var head = '<div class="fest-head"><b>' + (lang() === 'en' ? 'Upcoming Festivals' : lang() === 'te' ? 'రాబోయే పండుగలు' : 'Upcoming Festivals · పండుగలు') + '</b><span>' + L.name + '</span></div>';
    el.innerHTML = head + '<div class="fest-row"><div class="fest-sk"></div><div class="fest-sk"></div><div class="fest-sk"></div></div>';
    findUpcoming(3, function (list) {
      lastList = list;
      if (!document.body.contains(el)) return;
      el.innerHTML = head + '<div class="fest-row">' + list.map(function (it) { return cubeHTML(it, todayIso); }).join('') + '</div>';
    });
  };

  window.openFestival = function (id, iso) {
    var f = byId[id]; if (!f) return;
    css();
    var it = (lastList || []).filter(function (x) { return x.id === id; })[0] || {};
    var a = parts(iso), dt = new Date(Date.UTC(a[0], a[1] - 1, a[2])), wd = dt.getUTCDay(), lg = lang();
    var N = PANCH.N;
    var when = WD[wd][0] + ', ' + ['January','February','March','April','May','June','July','August','September','October','November','December'][a[1] - 1] + ' ' + a[2] + ', ' + a[0];
    var whenTe = WD[wd][1];
    var lunar = '';
    if (it.masa !== undefined) {
      var tn = it.tithi === 29 ? 15 : it.tithi === 14 ? 14 : it.tithi % 15;
      lunar = '<br>' + N.masa[it.masa][1] + ' ' + (it.tithi < 15 ? 'శుద్ధ' : 'బహుళ') + ' ' + N.tithi[tn][1] +
        ' · ' + N.masa[it.masa][0] + ' ' + (it.tithi < 15 ? 'śukla' : 'kṛṣṇa') + ' ' + N.tithi[tn][0];
    }
    var sec = function (title, pair) {
      return '<h3>' + title + '</h3>' + (lg !== 'te' ? '<p>' + pair[0] + '</p>' : '') + (lg !== 'en' ? '<p class="t">' + pair[1] + '</p>' : '');
    };
    var m = document.createElement('div'); m.id = 'fest-modal';
    m.innerHTML = '<div class="sh"><div class="hero" style="background:linear-gradient(160deg,' + f.g + ')">' +
      '<button class="x" aria-label="Close">✕</button><div class="ic">' + f.icon + '</div><h2>' + f.en + '</h2><div class="te">' + f.te + '</div>' +
      '<div class="when">' + when + ' · ' + whenTe + lunar + '</div></div><div class="bd">' +
      sec(lg === 'te' ? 'ఈ పండుగ' : 'About', f.about) + sec(lg === 'te' ? 'ఎలా జరుపుకుంటారు' : 'How it is kept', f.obs) +
      '<button class="pb">🌗 ' + (lg === 'te' ? 'ఆ రోజు పంచాంగం' : 'Panchāṅgam for this day') + '</button>' +
      '<div class="note">Dates are worked out from the Pañcāṅgam for ' + loc().name + '. Local temples may differ by a day.</div></div></div>';
    document.body.appendChild(m);
    var close = function () { m.remove(); };
    m.addEventListener('click', function (e) { if (e.target === m) close(); });
    m.querySelector('.x').onclick = close;
    m.querySelector('.pb').onclick = function () { close(); if (window.panchGoTo) panchGoTo(a[0], a[1], a[2]); openPanch(); };
  };

  window.FESTIVALS = FESTS;
  window._festFind = findUpcoming;
})();
