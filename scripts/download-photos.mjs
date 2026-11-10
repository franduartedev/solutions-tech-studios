// Descarga las fotografías de Unsplash en tres anchos (800/1400/2200) a public/img/<rubro>/
// Uso: node scripts/download-photos.mjs
// Procedencia y licencia: ver PHOTO_CREDITS.md
import fs from 'node:fs';
import path from 'node:path';

const SETS = {
  // Dirección Modern Boutique: interiores y arquitectura contemporáneos, travertino, luz natural.
  juridico: ['1651342490186-7d3288f567e5', '1651342490124-c2042b78d41c', '1729252822745-30daad53f224', '1601993957728-1e56ab70c5a8', '1764810815228-b7f9432eec5c', '1614595737476-42487331b8a1', '1730941591968-a7b6c3cf6b85', '1497366412874-3415097a27e7'],
  contable: ['1460574283810-2aab119d8511', '1658849110893-841726ccd937', '1559339232-1a1166f4650c', '1594655151913-93647a6d998e', '1488972685288-c3fd157d7c7a', '1759898897021-9f706f5768dc'],
  gestoria: ['1642794711894-eaaa4566fdd5', '1779062553594-7c84878a9266', '1556982255-c17ea0e3ea15', '1578531500970-6326bbc991bf', '1697538054828-1feb08526ca0', '1733748094919-5048c0d74498'],
  arquitectura: ['1563891925196-a3e34f6d869c', '1569258592171-357ea26da4df', '1525623434043-13387b9c56e2', '1646935239823-85952f60d307', '1609104145561-febb1adb73d0', '1586871608370-4adee64d1794'],
};
const WIDTHS = [800, 1400, 2200];
const root = path.resolve('public/img');

for (const [rubro, ids] of Object.entries(SETS)) {
  fs.mkdirSync(path.join(root, rubro), { recursive: true });
  await Promise.all(
    ids.flatMap((id, i) =>
      WIDTHS.map(async (w) => {
        const file = path.join(root, rubro, `${i + 1}-${w}.jpg`);
        if (fs.existsSync(file)) return;
        const url = `https://images.unsplash.com/photo-${id}?w=${w}&q=72&fm=jpg&fit=max&auto=format`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`${res.status} ${url}`);
        fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
      }),
    ),
  );
  console.log('ok', rubro);
}
