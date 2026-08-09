# Frontend arsenal â€” WSS Devlabs

Read when the task is UI implementation, components, state, or client-side logic.

| Resource | Path / command |
|----------|----------------|
| Frontend patterns (React/Next, state, data fetching) | `D:/WSSDevlabsEngine/WSSDevlabsEngine/everything-claude-code/skills/frontend-patterns/SKILL.md` |
| shadcn/Tailwind implementation | `D:/WSSDevlabsEngine/WSSDevlabsEngine/ui-ux-pro-max-skill/.claude/skills/ui-styling/SKILL.md` |
| Per-stack UI guidance (22 stacks) | `D:/WSSDevlabsEngine/WSSDevlabsEngine/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/SKILL.md` |
| Visual QA after building | /design-review (gstack global) |
| Quick real-browser check | /browse (gstack global) |

## House rules
- `docs/DESIGN.md` is law: tokens, palette, spacing scale, fonts. No freelancing
  hex codes.
- Loading, empty, and error states exist for every data view â€” the client WILL
  open it with no data.
- Forms: disable-on-submit, inline validation messages, keyboard submit works.
- Mobile 375px first-class, not an afterthought; test it before calling done.
- Accessibility floor: semantic elements, labels on inputs, focus visible,
  contrast per docs/DESIGN.md.
- Design decisions (not implementation): that's /uiux, don't improvise.
