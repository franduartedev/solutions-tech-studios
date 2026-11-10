# Procedencia y licencia de las fotografías

Todas las fotografías provienen de [Unsplash](https://unsplash.com) y se usan bajo la
[Licencia Unsplash](https://unsplash.com/license) (uso comercial permitido, sin obligación de
atribución; se acredita igualmente por buena práctica, también en el pie del sitio).
No se usaron fotos de Unsplash+ (licencia distinta). Se descargaron con `npm run photos`
(`scripts/download-photos.mjs`) en tres anchos (800/1400/2200 px).

Página de cada foto: `https://unsplash.com/photos/<ID>`

| Rubro | N.º | Autoría | ID Unsplash | Uso |
|---|---|---|---|---|
| Jurídico | 1 | Paul Menz | yhB5EM_OkGw | Hero A (a sangre) |
| Jurídico | 2 | Paul Menz | 0XU9JHgxUnQ | Hero B (editorial) |
| Jurídico | 3 | Sofia Lasheva | QgHEQ9ULqK4 | Áreas |
| Jurídico | 4 | Alesia Kazantceva | 0B7ijYKaKcE | El estudio |
| Jurídico | 5 | john renzzel | rr12y4qEbps | Áreas |
| Jurídico | 6 | Paul Menz | DqV7R-iU4-I | Áreas |
| Jurídico | 7 | Annalisa Overgaard | haXoAIkEbQo | Hero B (detalle) / Áreas |
| Jurídico | 8 | Nastuh Abootalebi | rSpMla5RItA | Forma de trabajo |
| Contable | 1 | Julien Moreau | 688Fna1pwOQ | Áreas / Forma de trabajo |
| Contable | 2 | Mike Von | 2hzL3NMOozs | Hero |
| Contable | 3 | Akin Cakiner | LtS0APv6-5c | El estudio |
| Contable | 4 | Karen Uppal | TLjNPAz6d4g | Áreas |
| Contable | 5 | Anders Jildén | Sc5RKXLBjGg | Áreas |
| Contable | 6 | Ryunosuke Kikuno | ILFfFsqmt2A | Áreas |
| Gestoría | 1 | Jon Tyson | Rwk3fu-d8qw | Hero (arco) |
| Gestoría | 2 | chris wang | _f7aNucnTuU | El estudio / Forma de trabajo |
| Gestoría | 3 | Kevin Jackson | G4MS7DiBv5o | Áreas |
| Gestoría | 4 | SHAN LU | _IBWeoe1VAA | Áreas |
| Gestoría | 5 | Creatopy | zaYgClEAE6A | Áreas |
| Gestoría | 6 | Georgii Eletskikh | 4j3Iz6MS_Jo | Áreas |
| Arquitectura | 1 | Anton Lammert | oMCC7gKDBYE | Hero |
| Arquitectura | 2 | 준영 박 | IWYcrdO93WY | El estudio |
| Arquitectura | 3 | Pierre Châtel-Innocenti | YVD3VT79AcY | Áreas |
| Arquitectura | 4 | Pascal Meier | h3zP4X6OuZ8 | Áreas |
| Arquitectura | 5 | Pascal Meier | of2bV2tO3CA | Áreas |
| Arquitectura | 6 | Dorsa Masghati | NRLnzGXtoE4 | Áreas / Forma de trabajo |

Notas:
- Las fotos de edificios pueden mostrar lugares reconocibles (p. ej. la biblioteca del hero jurídico). Son ilustrativas; **en el sitio real de cada cliente se reemplazan por fotos propias del estudio** (ver pendientes).
- Verificar en cada página de Unsplash que la foto siga disponible bajo la licencia antes de publicar.
- Los metadatos (autoría, ID) están en `src/config/<rubro>.ts`, campo `photos`, y alimentan el pie del sitio.
