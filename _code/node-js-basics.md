---
permalink: /code/node_js_basics
title: Node.js 101
description: ...or how to set up a node project.
category:
  - programming
tags:
  - node.js
  - javascript
  - serverside
---

## Package.json

**name**: "my-package-name"  
Lowercase hyphenated alpha characters.

**version**: "0.1.0"  
Semantic versioning (use 0.1.0 as the first development version):
1. **Major** incompatible API changes
2. **Minor** backward compatible new functionality
3. **Patch** Bug fixes/Improvements to existing functionality (possibly each commit/merge to master)

**license**: "ISC"  
The "Internet System Consortium" is a permissive free software licence.
Language deemed unnecessary given adoption of the Berne Convention was removed.
It is meant to be functionally equivalent to the simplified BSD and the MIT licenses.

*ISC license template:*

> ISC License (ISC)
> 
> Copyright [year(s)], [copyright holder] \<e-mail address>
> 
> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

**author**: "Matthieu Bosquet"  
My name.

**private**: true  
Prevent the `npm publish` command from working.

**main**: "index.js"  
File run by the command `node .`
