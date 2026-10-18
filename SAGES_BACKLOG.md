# Great Sages — backlog

The Great Sages tile (`sages.js`, one file per sage in `sages/`). A daily scheduled task takes the
**first unchecked** sage under "Next", writes that sage's complete life, publishes it, and moves it to
"Done" in the same commit.

## What Hari asked for

- The **full** life of each sage — "big stories, nothing hidden", for kids and adults alike.
  Include every major episode the sources tell, including hard ones (curses, killings, wrongs done
  to women, the sage's own failures). Tell difficult events plainly and without graphic detail.
  No separate kids' version.
- English and Telugu for every block. Telugu must be natural, grammatical, the way Telugu families
  speak, with the usual Telugu names (రాముడు, సీతాదేవి, వసిష్ఠుడు, …).
- Written fresh in our own words from the original texts (Veda, Brāhmaṇas, Vālmīki Rāmāyaṇa,
  Mahābhārata, Purāṇas, Yoga Vāsiṣṭha, Kālidāsa and other pre-modern works). Never copy or closely
  follow any modern translation, comic, book, film or website.
- Where texts disagree, tell the main version and give the other(s), saying which text says what.
  Mark folk or later tellings as such ("later tellings say…"). Never invent an episode or a source.
  If unsure of a chapter/verse number, name the book and section without the number.
- Credit line "Retold by Hari Pokkuluri" appears automatically on chapter 1.

## How a sage file is built (copy the pattern of `sages/vasishtha.js`)

1. `window.SAGE_PLAN.<key>` — the list of chapter titles and sources (aim for 7–12 chapters).
2. `window.RMY_WHO` — add a name-sheet entry (`av, en, te, d, dt`) for every new person used in
   `who` or in `{key|Name}` links, using `Object.assign({...new}, window.RMY_WHO || {})` so existing
   entries win. Check `ramayana/*.js` and the other `sages/*.js` for keys that already exist.
3. `window.SAGE_CHAPTERS` — one object per chapter: `id` (`<prefix>-<n>`, prefix 2–3 letters and unique),
   `sage`, `n`, `order` (= the sage's position in the SAGES list in `sages.js` × 100 + n), `date`
   (today, America/New_York), `title`, `titleTe`, `src`, `who`, `pages` (3–5 pages of blocks),
   `remember` (3 lines), `think` (one question).
4. Block types (see the top of `ramayana.js` and `sages.js`): `p` paragraph, `h` sub-heading,
   `sloka` (Telugu-script lines, transliteration, meaning EN, meaning TE), `dyk` "Did you know?",
   `src` "Where this is told" (put one on the last page of every chapter), `more` tap-to-open box,
   `link` (opens a Rāmāyaṇa chapter id such as `bala-5`), `sglink` (opens another sage chapter).
   Use `sglink`/`link` where a story is already told in full elsewhere instead of retelling it.
   Only quote a Sanskrit verse when you are certain of its exact text.
5. Wire it in: `<script src="sages/<key>.js"></script>` in `index.html` just before
   `<script src="sages.js"></script>`; add `'./sages/<key>.js'` to `SHELL` in `sw.js` and bump `CACHE`.
6. `node tools/check_sages.js` must print OK.

## Next
- [ ] Agastya (agastya) — born from the pot with Vasiṣṭha; Lopāmudrā; Vātāpi and Ilvala; drinking the ocean; humbling the Vindhya; going south; Rāma's weapons; Āditya Hṛdayam; Tamil tradition
- [ ] Bhṛgu (bhrigu) — mind-born son of Brahmā; Khyāti; testing Brahmā, Śiva and Viṣṇu (the kick on Viṣṇu's chest, Lakṣmī's anger, Tirumala); Bhṛgu Saṃhitā; Bhṛgu's curse on Agni; Pulomā and Cyavana; the Bhārgava line
- [ ] Nārada (narada) — previous birth as a servant's son (Bhāgavata 1.5–6); Dakṣa's curse; the vīṇā; Vālmīki and Rāmāyaṇa; Dhruva and Prahlāda; Nārada's pride and the illusion (Nārada-moha, Rāmacaritamānasa); Nārada Bhakti Sūtras
- [ ] Vyāsa (vyasa) — Satyavatī and Parāśara; born on an island; dividing the Vedas; Dhṛtarāṣṭra, Pāṇḍu, Vidura by niyoga; Gaṇeśa writing the Mahābhārata; Śuka; Gāndhārī's hundred sons; Brahma Sūtras; Guru Pūrṇimā
- [ ] Vālmīki (valmiki) — the hunter Ratnākara (later tradition) and the Rāma mantra; the anthill; the krauñca birds and the first śloka; Nārada; Sītā and Lava-Kuśa in his āśrama; the Rāmāyaṇa sung at Rāma's court
- [ ] Durvāsa (durvasa) — born of Atri and Anasūyā as Śiva's part; Kuntī's mantra; Śakuntalā's curse; Indra and the garland (churning of the ocean); Ambarīṣa and the Sudarśana; Draupadī's akṣaya-pātra; Lakṣmaṇa and Rāma's departure
- [ ] Atri and Anasūyā (atri) — Atri in the Ṛgveda (eclipse hymn); Anasūyā and the Trimūrti as babies; Dattātreya, Durvāsa, Candra; Anasūyā gifts Sītā; the Ganga at Citrakūṭa (Mandākinī)
- [ ] Gautama (gautama) — Ahalyā and Indra (all versions); Śatānanda; bringing the Godāvarī (Gautamī) to earth at Tryambaka; the cow and the sages' plot; Nyāya Sūtras attribution
- [ ] Bharadvāja (bharadvaja) — birth story (Bṛhaspati and Mamatā, Maruts); Ṛgveda Maṇḍala 6; his āśrama at Prayāga and the feast for Bharata's army; Droṇa's birth; Āyurveda from Indra
- [ ] Mārkaṇḍeya (markandeya) — Mṛkaṇḍu's choice of a short-lived wise son; embracing the liṅga; Śiva defeats Yama; the vision of the child on the banyan leaf at pralaya; the Mārkaṇḍeya Purāṇa and Devī Māhātmyam
- [ ] Dadhīci (dadhichi) — the horse's head and the Madhu-vidyā (Aśvins); quarrel with Kṣuva; giving his bones for the vajra; Dakṣa's yajña; his son Pippalāda
- [ ] Kapila (kapila) — son of Kardama and Devahūti; teaching his mother (Bhāgavata 3); Sāṅkhya; Sagara's sixty thousand sons burned; Gaṅgā Sāgar
- [ ] Jamadagni and Paraśurāma (jamadagni) — Ṛcīka's bowl; Reṇukā and the order to kill her; Kārtavīrya and Kāmadhenu; twenty-one campaigns; giving the earth to Kaśyapa; Rāma and the bow; Bhīṣma and Amba; Karṇa's curse; the western coast
- [ ] Yājñavalkya (yajnavalkya) — quarrel with Vaiśampāyana and vomiting the Yajus (Taittirīya); the Sun and the Śukla Yajurveda; Janaka's court and the thousand cows; Gārgī; Maitreyī and Kātyāyanī; Yājñavalkya Smṛti
- [ ] Bṛhaspati (brihaspati) — son of Aṅgiras; guru of the devas; Tārā and Candra (Budha's birth); Kaca; Bṛhaspati Nīti; the planet Jupiter
- [ ] Kaśyapa (kashyapa) — wives Aditi, Diti, Danu, Kadrū, Vinatā; Garuḍa and the nāgas; Vāmana's father; Kashmir (Kaśyapa-mīra); Paraśurāma's gift of the earth
- [ ] Aṣṭāvakra (ashtavakra) — cursed in the womb; the debate at Janaka's court with Bandī; the Aṣṭāvakra Gītā
- [ ] Ṛṣyaśṛṅga (rishyashringa) — the deer-born boy who had never seen a woman; Romapāda's drought; Śāntā; Daśaratha's putrakāmeṣṭi

Add more when fewer than five remain: e.g. Pulastya, Kaṇva, Uttaṅka, Dhaumya, Lomaśa, Māṇḍavya,
Śuka, Jaimini, Vālakhilyas, the four Kumāras, Upamanyu, Āruṇi, Sāndīpani, Garga, Śāṇḍilya, Cyavana.
New sages also need a line in the SAGES list in `sages.js` (key, name, Telugu, known-for, Telugu,
icon, gradient) — add it at the end of the list.

## Done
- [x] Viśvāmitra (vishvamitra) — 13 chapters — 2026-10-17
- [x] Vasiṣṭha (vasishtha) — 9 chapters — 2026-10-17
- [x] Śukrācārya (shukracharya) — 9 chapters — 2026-10-17
- [x] Angirasa, with Aamahaiya and Orukshaya (angiras) — 11 chapters — 2026-10-17
