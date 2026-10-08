export function GET() {
  return new Response('User-agent: *\nDisallow: /\n# Previa demonstrativa: remover o bloqueio somente apos aprovacao do conteudo.\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
