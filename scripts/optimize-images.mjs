import sharp from 'sharp'
import { stat } from 'fs/promises'
import { join } from 'path'
import { fileURLToPath } from 'url'

const ASSETS_DIR = join(fileURLToPath(import.meta.url), '../../assets')

const images = [
  { file: 'hero-guto.jpg', width: 1440, quality: 82 },
  { file: 'iabr.jpg',      width: 800,  quality: 82 },
  { file: 'ravi.jpg',      width: 800,  quality: 82 },
  { file: 'ingles.jpg',    width: 800,  quality: 82 },
  { file: 'nutri.jpg',     width: 800,  quality: 82 },
  { file: 'gpreto.jpg',    width: 800,  quality: 82 },
  { file: 'qr.jpg',        width: 800,  quality: 82 },
  { file: '99.jpg',        width: 800,  quality: 82 },
]

async function optimize() {
  for (const { file, width, quality } of images) {
    const path = join(ASSETS_DIR, file)
    const before = (await stat(path)).size

    const buf = await sharp(path)
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer()

    await sharp(buf).toFile(path)

    const after = (await stat(path)).size
    const saved = ((1 - after / before) * 100).toFixed(1)
    console.log(`✓ ${file}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB (-${saved}%)`)
  }

  // quiz.png → comprimir como PNG (mantém formato para não precisar alterar imports)
  const quizPath = join(ASSETS_DIR, 'quiz.png')
  const qBefore = (await stat(quizPath)).size
  await sharp(quizPath)
    .resize({ width: 800, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: false })
    .toFile(quizPath + '.tmp')
  const { rename } = await import('fs/promises')
  await rename(quizPath + '.tmp', quizPath)
  const qAfter = (await stat(quizPath)).size
  console.log(`✓ quiz.png: ${(qBefore/1024).toFixed(0)}KB → ${(qAfter/1024).toFixed(0)}KB (-${((1-qAfter/qBefore)*100).toFixed(1)}%)`)
}

optimize().catch(console.error)
