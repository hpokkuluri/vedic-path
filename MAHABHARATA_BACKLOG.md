# Śrī Mahābhāratam — build plan

Retold by Hari Pokkuluri, in English + Telugu, for the whole family. Full and detailed — nothing important left out.

## How it is built
- Reader: `mahabharata.js` (cover poster → 18 parvas + Harivaṃśa → chapter list → swipe reader). Reuses the Rāmāyaṇa styles and scene art (`window.RMY_SCENE`), adds its own scenes (naimisha, serpent, garuda, sun, dice, chariot).
- Content: one file per parva in `mahabharata/<parva>.js`, appending to `window.MBH_PLAN`, `window.MBH_WHO`, `window.MBH_CHAPTERS`.
- Chapter fields: `id` (`adi-1`), `parva`, `n`, `order` (parva index × 100 + n), `date`, `title`, `titleTe`, `adh` (the upa-parva shown under the title), `scene`, `who`, `pages`, `remember`, `think`. Plan entries are `[title, upa-parva]` and must match each chapter.
- Names in prose use `{key|Name}`; every key must exist in `MBH_WHO`.
- Each new parva file needs a `<script>` tag in `index.html` (before `mahabharata.js`) and an entry in `sw.js` SHELL, with the cache version bumped.
- Narration is plain prose (no outer quote marks for Sauti / Vaiśampāyana).
- Ślokas only when the text is certain; anything from later poets or folk tradition is labelled as such.

## Decisions
- Bhagavad Gītā (Bhīṣma Parva): a story-level chapter that links to the app's Gītā section, not a second retelling.
- Harivaṃśa is included at the end.
- Rāmāyaṇa code is untouched apart from exposing `RMY_SCENE`.
- Cover uses Hari's painting (icons/cover-mahabharata.jpg, its printed title band removed); home tile is the Kṛṣṇa–Arjuna crop (icons/tile-mahabharata.jpg).

## Status
| # | Parva | Chapters |
|---|---|---|
| 1 | Ādi | 43 of 43 ✅ |
| 2 | Sabhā | 16 of 16 ✅ |
| 3 | Āraṇyaka | 42 of 42 ✅ |
| 4 | Virāṭa | 18 of 18 ✅ |
| 5 | Udyoga | 23 of 23 ✅ |
| 6 | Bhīṣma | 14 of 14 ✅ (Gītā told at story level, with buttons into the Gītā section) |
| 7 | Droṇa | 14 of 14 ✅ |
| 8 | Karṇa | 10 of 10 ✅ |
| 9 | Śalya | 8 of 8 ✅ |
| 10 | Sauptika | 5 of 5 ✅ |
| 11 | Strī | 7 of 7 ✅ |
| 12 | Śānti | 12 of 12 ✅ |
| 13 | Anuśāsana | 8 of 8 ✅ (Viṣṇu Sahasranāma chapter links to the VSN section) |
| 14 | Āśvamedhika | next |
| 15 | Āśramavāsika | — |
| 16 | Mausala | — |
| 17 | Mahāprasthānika | — |
| 18 | Svargārohaṇa | — |
| ✦ | Harivaṃśa | — |

Threads set up in Ādi Parva to pay off later: Karṇa's armour taken by Indra (Āraṇyaka), Aśvasena (Karṇa Parva), Ulūpī and Babhruvāhana (Āśvamedhika), Ghaṭotkaca's promise (Droṇa), Yuyutsu crossing over (Bhīṣma), Śikhaṇḍī (Udyoga/Bhīṣma).
