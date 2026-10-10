import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const content=JSON.parse(fs.readFileSync(new URL('../src/data/content.json',import.meta.url),'utf8'));
const spec=fs.readFileSync(new URL('../docs/handoff-etapa-05.md',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles/global.css',import.meta.url),'utf8');
function luminance(hex) { const v=hex.match(/\w\w/g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return v[0]*.2126+v[1]*.7152+v[2]*.0722; }
function contrast(a,b) { const [l,h]=[luminance(a),luminance(b)].sort((a,b)=>a-b);return (h+.05)/(l+.05); }
test('copy e metadados correspondem integralmente ao handoff da agência',()=>{
 const approved=spec.slice(spec.indexOf('### 5.1'),spec.indexOf('## 6.'));
 const blocks=approved.split(/### 5\.\d /).slice(1);
 for(const [index,page] of Object.values(content).entries()){
  const block=blocks[index];
  assert.equal(page.title,block.match(/\*\*Meta title:\*\* (.+)/)[1].trim());
  assert.equal(page.description,block.match(/\*\*Meta description:\*\* (.+)/)[1].trim());
  const source=block.slice(block.indexOf('#### '));
  assert.deepEqual(page.sections.flatMap(s=>s.headings.map(h=>h.text)),[...source.matchAll(/\*\*H[123]: (.+?)\*\*/g)].map(m=>m[1]));
  const lines=source.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
  const paragraphs=lines.filter(l=>!l.startsWith('#')&&!l.startsWith('**')&&!l.startsWith('CTA:')&&!l.startsWith('CTA geral:')&&!l.startsWith('Botão:')&&!l.startsWith('|')&&!l.startsWith('- '));
  assert.deepEqual(page.sections.flatMap(s=>s.paragraphs),paragraphs);
  assert.deepEqual(page.sections.flatMap(s=>s.activities),lines.filter(l=>l.startsWith('- ')).map(l=>l.slice(2)));
 }
 assert.deepEqual(Object.values(content).map(p=>p.sections.length),[5,5,5,4]);
});
test('combinações efetivas de texto, foco e controles atendem AA',()=>{
 const token=name=>css.match(new RegExp('--'+name+': (#[0-9A-Fa-f]{6})'))[1];
 for(const bg of ['navy-base','navy-deep','navy-surface']){
  for(const fg of ['silver','text-primary','text-secondary']) assert.ok(contrast(token(fg),token(bg))>=4.5,fg+'/'+bg);
  for(const fg of ['control-border','focus']) assert.ok(contrast(token(fg),token(bg))>=3,fg+'/'+bg);
 }
 assert.ok(contrast(token('silver'),token('navy-deep'))>=4.5);
});
