import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

export async function assemblePages() {
  const output = new URL('../.pages/', import.meta.url);
  // Diretório fixo de artefatos; evita publicar páginas removidas em builds anteriores.
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  await cp(new URL('../conveniencia018/out/', import.meta.url), new URL('conveniencia018/', output), { recursive: true });
  await cp(new URL('../volpicontabilidade/dist/', import.meta.url), new URL('volpicontabilidade/', output), { recursive: true });
  await cp(new URL('../gazzetti/dist/', import.meta.url), new URL('gazzetti/', output), { recursive: true });
  await cp(new URL('../chapeudepalha/dist/', import.meta.url), new URL('cdpalha/', output), { recursive: true });
  await cp(new URL('../ragassi/dist/', import.meta.url), new URL('ragassi/', output), { recursive: true });
  const eletroseveroFiles = [
    'index.html', 'styles.css', 'app.js', 'catalog.js', 'data/content.js',
    'assets/logo-original.png', 'assets/photos/',
  ];
  for (const file of eletroseveroFiles) {
    await cp(new URL(`../eletrosevero/${file}`, import.meta.url), new URL(`eletrosevero/${file}`, output), {
      recursive: true,
      filter: source => !source.endsWith('.md'),
    });
  }
  await writeFile(new URL('.nojekyll', output), '');
  console.log('Publicação preparada em .pages/');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await assemblePages();
