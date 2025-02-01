const parseContactType = (type, isFavourite) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const isType = (type) => ['work', 'home', 'personal'].includes(type);

  return {
    type: isType(type) ? type : undefined,
    isFavourite:
      isFavourite === 'true'
        ? true
        : isFavourite === 'false'
        ? false
        : undefined,
  };
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;
  return parseContactType(type, isFavourite);
};
