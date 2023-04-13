const svgTags = [
  'animate',
  'animateMotion',
  'animateTransform',
  'circle',
  'clipPath',
  'defs',
  'desc',
  'ellipse',
  'feBlend',
  'svg',
  'rect',
  'mask',
  'path',
]

export const isSvg = (tag: string) => svgTags.includes(tag)

export const createSvgElement = (tag: string) => {
  return document.createElementNS('http://www.w3.org/2000/svg', tag)
}
