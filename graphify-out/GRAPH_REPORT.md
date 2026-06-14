# Graph Report - Actus-site  (2026-06-14)

## Corpus Check
- 8 files · ~11,226 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 90 nodes · 84 edges · 9 communities (7 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 8|Community 8]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `Actus Site` - 7 edges
3. `compilerOptions` - 6 edges
4. `scripts` - 5 edges
5. `useMotion()` - 2 edges
6. `App()` - 2 edges
7. `Desenvolvimento` - 2 edges
8. `Verificação` - 2 edges
9. `private` - 1 edges
10. `dev` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (9 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, allowSyntheticDefaultImports, esModuleInterop, forceConsistentCasingInFileNames, isolatedModules, jsx, lib (+10 more)

### Community 1 - "Community 1"
Cohesion: 0.07
Nodes (4): faqs, modes, productTabs, roles

### Community 2 - "Community 2"
Cohesion: 0.18
Nodes (10): devDependencies, name, private, scripts, build, dev, lint, preview (+2 more)

### Community 3 - "Community 3"
Cohesion: 0.20
Nodes (9): Actus Site, code:bash (npm install), code:bash (npm run build), Desenvolvimento, Identidade visual, Imagens, Movimento, Stack (+1 more)

### Community 4 - "Community 4"
Cohesion: 0.25
Nodes (8): dependencies, react, react-dom, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react

### Community 5 - "Community 5"
Cohesion: 0.25
Nodes (7): compilerOptions, composite, module, moduleResolution, noEmit, skipLibCheck, include

## Knowledge Gaps
- **51 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+46 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 4` to `Community 2`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _51 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._