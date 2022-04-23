import _ from 'lodash';

export const urlExtract = (url) => {
  return url?.substring(url.indexOf('facebook'), url.length - 1).toLowerCase();
};

export const requestSearch = _.memoize(async (name) => {
  const res = await fetch(
    `https://rest.bandsintown.com/artists/${name.trim()}?app_id=abc`
  );

  if (res.status !== 200) {
    return { error: 'Not Found' };
  }

  const result = await res.json();
  return result === '' ? { error: 'Not Found' } : result;
});

export const requestEvents = _.memoize(async (name) => {
  const res = await fetch(
    `https://rest.bandsintown.com/artists/${name.trim()}/events?app_id=abc`
  );

  if (res.status !== 200) {
    return { error: 'Not Found' };
  }

  const result = await res.json();
  return result === '' ? { error: 'Not Found' } : result;
});

export const renderDate = (date) => {
  const dat = new Date(date);

  return dat.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
