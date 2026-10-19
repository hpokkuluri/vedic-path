# The Vedas — backlog

A "Vedas / వేదాలు" tile: six books, each a set of chapters in the same paged reader as the Rāmāyaṇa
(`vedas.js`, one file per book in `vedas/`). A daily scheduled task writes **one book per day**, starting
Wednesday 2026-10-21, taking the first unchecked book under "Next".

## What Hari asked for (read this first)

- **Easy to understand, like the Rāmāyaṇa.** Many readers — Hari included — do not know what the Vedas are,
  why they matter, or what relevance they have today. Write for that reader: a curious adult or a child of
  10+, who has heard the word "Veda" but nothing more. Explain every Sanskrit term the first time it is used.
- **No verses.** Do not use `sloka` blocks, and do not quote Sanskrit lines. Explain ideas in plain words.
  A famous short phrase may be named inside a sentence with its meaning when it really helps
  (e.g. "Satyameva Jayate — truth alone wins"), at most once or twice a book.
- **Tell it through stories and pictures-in-words** wherever possible: the Upaniṣad stories, the people who
  preserved the Vedas, what happens at a real yajña or upanayanam, a family chanting at dawn.
- English and Telugu for every block. Telugu must be natural and simple, the way Telugu families speak.
- Fresh wording from the original texts and well-established facts. Never copy or closely follow any modern
  book, translation, website or video. Where scholars and tradition differ (dates, authorship), give both
  plainly and respectfully. Never invent a story, a reference or a statistic.
- Credit line "Written by Hari Pokkuluri" appears automatically on chapter 1 of each book.

## How a book file is built

- `vedas/<key>.js` adds `window.VEDA_PLAN.<key>` (chapter titles and short source labels) and appends to
  `window.VEDA_CHAPTERS`. Copy the object shape of a chapter in `sages/vasishtha.js`, but use `book: '<key>'`
  instead of `sage`. Chapter `id` = `<prefix>-<n>` (prefixes: intro `vi`, rig `vr`, yajur `vy`, sama `vs`,
  atharva `va2`, life `vl`); `order` = book position (1–6) × 100 + n; `date` = today (America/New_York).
- 8–12 chapters a book, 3–5 pages a chapter. Blocks: `p`, `h`, `dyk`, `more`, `src` (one on the last page of
  every chapter), `link` (Rāmāyaṇa chapter id, e.g. `bala-5`), `sglink` (Great Sages chapter id, e.g. `an-8`),
  `vdlink` (another Vedas chapter). Link to existing sage and Rāmāyaṇa chapters instead of retelling them.
  Give each chapter `remember` (3 lines) and `think` (one question). `who` and `{key|Name}` links may use
  existing `RMY_WHO` keys; add new ones with `window.RMY_WHO = Object.assign({...new}, window.RMY_WHO || {})`.
- Wire each file in: `<script src="vedas/<key>.js"></script>` in `index.html` just before
  `<script src="vedas.js"></script>`; add `'./vedas/<key>.js'` to `SHELL` in `sw.js` and bump `CACHE`.
- **First run only (when `vedas/` does not exist yet):** also add the home tile in `index.html`'s library
  `texts` list, right after the `sages` tile:
  `{ key:'vedas', icon:'🕉️', name:'The Vedas', desc:'Vedālu · explained simply', action:"openVedas()", gradient:'linear-gradient(160deg,#3a1406,#c0601c)', dot:'#c0601c', tradition:'Veda' },`
  and a top-bar tab after the Sages tab: `<button class="stab" data-sec="vedas" onclick="openVedas()">Vedas</button>`.
  The views, routing, `vedas.js` script tag and service-worker entry are already in place.
- `node tools/check_vedas.js` must print OK (it rejects `sloka` blocks).

## Next

- [ ] What Are the Vedas? (intro) — what "Veda" means (knowledge); śruti — heard, not written by anyone; the ṛṣis as seers (link to Great Sages); how old they are (tradition: eternal; scholars: the Ṛgveda roughly 1500–1200 BCE — say both); Vyāsa dividing one Veda into four and why; the four layers in every Veda (Saṃhitā hymns, Brāhmaṇa rituals, Āraṇyaka forest teachings, Upaniṣad wisdom) explained with a simple picture; śākhās (branches); how they were kept alive for 3,000+ years without writing — father to son, guru to student, the clever chanting patterns that lock every syllable in place, UNESCO's 2003 recognition of Vedic chanting; the six Vedāṅgas (phonetics, ritual, grammar, word-meaning, metre, astronomy/calendar) and how they gave India grammar (Pāṇini), mathematics and the pañcāṅga; the Upavedas (Āyurveda, Dhanurveda, Gāndharvaveda, Sthāpatya); why the Vedas are called the root of Hindu dharma.
- [ ] Ṛgveda (rig) — the oldest; ten maṇḍalas and the families of seers; the gods of the Ṛgveda explained simply (Agni, Indra, Varuṇa, Soma, Uṣas, the Aśvins…) and what each stands for; what the hymns ask for (light, rain, cows, children, friendship, truth); stories inside it (the hidden cows and Saramā — link an-3; Purūravas and Urvaśī; Viśvāmitra and the rivers; the Battle of the Ten Kings — link va-3; Yama and Yamī; the gambler's lament); the great questions (the creation hymn that ends "perhaps even He does not know"; "Truth is one, the wise call it by many names"; the closing hymn about living in harmony); the Gāyatrī — what it means and why it is so loved (meaning only); the hymns we still use at weddings and funerals.
- [ ] Yajurveda (yajur) — the priest's handbook; what a yajña actually is, step by step, without jargon (the fire altar, the four priests, the offerings, the idea of giving back to nature); Kṛṣṇa and Śukla Yajurveda and Yājñavalkya's story of the split (simply; link to his sage page if it exists); the great altar built of bricks and the mathematics in the Śulba Sūtras; Śrī Rudram — where it comes from and why it is chanted (no verses; mention the app's Rudram section); the Puruṣa Sūkta idea; the Upaniṣads of this Veda told as stories: Īśa ("everything is filled with the Lord — enjoy by giving up"), Kaṭha (Naciketas and Yama), Taittirīya (Bhṛgu discovering what Brahman is, the convocation advice "speak the truth, treat mother, father, teacher, guest as god"), Bṛhadāraṇyaka (Yājñavalkya and Maitreyī, Gārgī's questions, "lead me from the unreal to the real").
- [ ] Sāmaveda (sama) — the Veda of song; how a Ṛgveda verse becomes a sung sāman; why Kṛṣṇa says "among the Vedas I am the Sāma"; the roots of Indian music (the seven notes, Carnatic and Hindustani traditions tracing back to it); the three surviving śākhās and the Jaiminīya tradition kept alive in Kerala and Tamil Nadu; the Chāndogya Upaniṣad stories: Satyakāma Jābāla who told the truth about his birth, Śvetaketu and his father ("tat tvam asi — you are that", the salt in water, the banyan seed), Nārada and Sanatkumāra, Raikva the cart-man; the Kena Upaniṣad story of the gods, the blade of grass and Umā Haimavatī.
- [ ] Atharvaveda (atharva) — the Veda of everyday life; Atharvan and Aṅgiras (link an-8); prayers for health, healing herbs, a happy home, a safe journey, harmony in the family and the assembly, protection from fear; why it is called the root of Āyurveda; the Bhūmi Sūkta — the Earth as mother, and its message for ecology today; the Muṇḍaka (link an-8), Praśna (six students and their six questions) and Māṇḍūkya (Om and the three states of waking, dream and deep sleep) Upaniṣads, told simply.
- [ ] The Vedas in Our Life (life) — where the Vedas still touch a Hindu family's day: Om; sandhyāvandanam and the Gāyatrī; the sixteen saṃskāras from naming to marriage to the last rites, and which Veda each comes from; the wedding — the seven steps, Agni as witness, Arundhatī's star (link va-2); the upanayanam; gotra and pravara (link an-11); temple worship and the Vedic chanting there; the pañcāṅga and the Vedic calendar; Āyurveda, yoga, music and architecture; what the Vedas teach about the environment, truth, giving, and living in harmony; how anyone can begin to learn — chanting, reading in translation, listening; and why it matters for the next generation.

## Done
