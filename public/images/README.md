# Photography

Drop your real photos into this folder, then reference them from
`lib/content.ts` (or directly on the `<Photo src="/images/..." />` slots in the
section components). Until a real file is provided, each slot shows a tasteful
placeholder that names the intended shot — so the layout always looks finished.

## Recommended shots (from the spec)

| Suggested filename        | Where it appears        | Description                          |
| ------------------------- | ----------------------- | ------------------------------------ |
| `hero.jpg`                | Hero                    | Axel with both dogs, lifestyle       |
| `portrait.jpg`            | About Me                | Warm portrait of Axel                |
| `raava.jpg`               | Meet My Dogs            | Raava (Bullmastiff)                  |
| `goldas.jpg`              | Meet My Dogs            | Goldas (Labrador)                    |
| `walking.jpg` (optional)  | —                       | Walking the dogs together            |
| `closing.jpg`             | Closing                 | Warm photo of Axel + dogs outdoors   |

## How to wire a photo in

`components/ui/Photo.tsx` renders a real `<img>` (lazy-loaded, `object-cover`)
whenever a `src` is passed. For example, in `components/sections/Hero.tsx`:

```tsx
<Photo src="/images/hero.jpg" alt={t.hero.photoLabel} priority ... />
```

## Style

Natural light · warm · authentic · no stock-photo look.
