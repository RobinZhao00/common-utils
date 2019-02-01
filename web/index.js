export const parseURL = (url = window.location.href) => {
  if (!url) throw new Error('pls input correct url');
  url = url.replace(/\s+/g, '');

  const parser = document.createElement("a");
  parser.href = url;

  const queries = parser.search
    .replace(/^\?/, "")
    .split("&")
    .map(item => item.split('='))
    .reduce((prev, curr) => ({
      ...prev,
      [curr[0]]: curr[1],
    }), {});

  return {
    protocol: parser.protocol,
    host: parser.host,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname,
    hash: parser.hash,
    queries,
  }
};
