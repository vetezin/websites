import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, join } from 'node:path';
import { spawnSync } from 'node:child_process';
import assert from 'node:assert/strict';

const root = fileURLToPath(new URL('../',import.meta.url));
const files = ['content.mjs','assets/main.js',...(await readdir(resolve(root,'scripts'))).filter(name=>name.endsWith('.mjs')).map(name=>join('scripts',name))];
for (const file of files) {
  const result = spawnSync(process.execPath,['--check',resolve(root,file)],{encoding:'utf8'});
  assert.equal(result.status,0,`${file}: ${result.stderr}`);
}
const css = await readFile(resolve(root,'assets/styles.css'),'utf8');
assert.ok(!css.includes('@import'),'CSS must not request remote dependencies.');
function luminance(hex) {
  const values = hex.match(/[a-f\d]{2}/gi).map(value=>parseInt(value,16)/255).map(value=>value<=.04045?value/12.92:((value+.055)/1.055)**2.4);
  return values[0]*.2126+values[1]*.7152+values[2]*.0722;
}
for (const [foreground,background] of [['#f3f5f8','#101b30'],['#bec7d4','#101b30'],['#bec7d4','#20272e'],['#a9bdf3','#101b30'],['#ffffff','#3552a0'],['#ffffff','#4262b5'],['#bec7d4','#172640']]) {
  const values = [luminance(foreground),luminance(background)].sort((a,b)=>b-a);
  const ratio = (values[0]+.05)/(values[1]+.05);
  assert.ok(ratio>=4.5,`Contrast ${foreground}/${background}: ${ratio.toFixed(2)}`);
  console.log(`Contraste AA ${foreground}/${background}: ${ratio.toFixed(2)}:1`);
}
console.log(`Sintaxe verificada: ${files.length} arquivos. Sem dependências externas.`);
