import re
from pathlib import Path
p = Path(r"c:\laragon\www\workshopUI\public\assets\css\style.css")
s = p.read_text(encoding='utf-8')
lines = s.splitlines()
out = []
in_section = False
# Heuristic: treat comment lines that are full-line like /* Title */ as section headers
# Exclude inline comments that contain 'identical to box height' or 'box-sizing'
for i, line in enumerate(lines):
    stripped = line.strip()
    is_header = False
    if stripped.startswith('/*') and stripped.endswith('*/'):
        title = stripped[2:-2].strip()
        if title and 'identical to box height' not in title and 'box-sizing' not in title and not title.lower().startswith('position:'):
            is_header = True
    # detect start of a new selector too (lines starting with . or /* after we've opened a section)
    if is_header:
        # close previous section if still open
        if in_section:
            out.append('}')
            out.append('')
            in_section = False
        # make class name
        title = stripped[2:-2].strip()
        class_name = '.' + re.sub(r"[^0-9A-Za-z\-]", '-', title).strip('-')
        out.append(f"{class_name} {{")
        in_section = True
        continue
    # If we encounter a standalone selector that starts a new block (starts with '.' and next char isn't a comment), close prior
    if stripped.startswith('.') and stripped.endswith('{') is False and re.match(r'^\.[A-Za-z0-9_-]+\s*\{', stripped) is None:
        # This is an existing selector block like .Logo { ... }
        # If we are inside a synthetic section, we should close it before adding this selector
        if in_section:
            out.append('}')
            out.append('')
            in_section = False
    # If encountering a comment that is an inline explanatory like '/* identical to box height */' keep as-is
    out.append(line)
# close if file ends while in_section
if in_section:
    out.append('}')

new = '\n'.join(out)
# write backup
bak = p.with_suffix('.css.bak')
bak.write_text(s, encoding='utf-8')
p.write_text(new, encoding='utf-8')
print('Done')
