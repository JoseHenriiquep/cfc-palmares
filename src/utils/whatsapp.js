const whatsappNumber = '5581992799266'

export const whatsappLink = (topic = 'matrícula') =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Olá! Vim pelo site do CFC Palmares e gostaria de saber mais sobre ${topic}.`,
  )}`
