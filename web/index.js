// 通过创建URL对象获取查询参数
// get search by URL class
const parseURL = url => new URL(url).search
  .slice(1)
  .split('&')
  .map(itm => itm.split('='))
  .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {});

// 通过正则获取查询参数
// get search by regex
const parseURL = url => (url.match(/([^?=&]+)(=([^&]*))/g) || [])
  .filter(a => a.includes('='))
  .map(b => b.split('='))
  .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {});
