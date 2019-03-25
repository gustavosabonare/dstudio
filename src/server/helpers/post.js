export function getVideoUrl(string) {
  const regex = /https:\/\/.+\?/gm;

  return regex.exec(string)[0] || '';
}

export function getContentWithoutHTML(string) {
  const regex = /<[^>]*>|\\n/gm;

  return string.replace(regex, '') || '';
}