const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const isType = (type) => ['work', 'home', 'personal'].includes(type);
  if (isType(type)) return type;
};

const parseBoolean = (value) => {
  const isString = typeof value === 'string';
  if (!isString) return;

  const lowerCaseValue = value.toLowerCase();

  if (lowerCaseValue === 'true') {
    return true;
  } else if (lowerCaseValue === 'false') {
    return false;
  }
  return;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;
  return {
    type: parseContactType(type),
    isFavourite: parseBoolean(isFavourite),
  };
};
