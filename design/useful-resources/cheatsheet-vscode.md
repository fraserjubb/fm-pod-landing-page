# VS Code Quick Tips

## Copy all class names

- `Cmd+Shift+F` → enable Regex `.*`
- Search: `(?<=class=")[^"]+`
- In results: `Cmd+Shift+L` → `Cmd+C`

## Multi-line cursors

- **Keyboard:** place cursor → `Option+Cmd+↓` (or ↑) to add cursors line by line
- **Selection:** select lines → `Cmd+Shift+P` → **Add Cursors to Line Ends** (or Line Starts)

# CSS Property Order - Quick Cheat

1. **Position & Box**: position, top/right/bottom/left, z-index, display, float, clear, box-sizing, max|min-width/max|min-height, width/height, margin/padding
2. **Flex/Grid**: flex*, justify-content, align-items/align-self, order, grid*
3. **Typography**: font-family, font-size, font-weight, line-height, letter-spacing, text-align, text-decoration, text-transform, color
4. **Background & Border**: background*, border*, border-radius, outline, box-shadow
5. **Visual / Effects**: opacity, visibility, overflow, cursor, transition, transform
6. **Misc / State**: pointer-events, animation, clip, filter

> Keep pseudo-classes (:hover, :active) and media query overrides at the end.

# JS DOM Events — Most Common (Quick Cheat)

### Mouse

- `click` → element clicked
- `dblclick` → element double-clicked
- `mouseenter` / `mouseleave` → hover in/out

### Keyboard

- `keydown` → key pressed down
- `keyup` → key released

### Form/Input

- `submit` → form submitted
- `change` → value changed
- `input` → value changes as user types
- `focus` / `blur` → element gains/loses focus

### Window/Document

- `load` → page or resource loaded
- `resize` → window resized
- `scroll` → page or element scrolled

### Special / Misc

- `toggle` → `<details>` opened/closed
- `contextmenu` → right-click menu

# target vs currentTarget

- `target` = where it started
- `currentTarget` = where you attached the listener.
