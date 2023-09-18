export const dataFormatter = (data: Record<string, any>[]) =>
  data?.map((item, index) => ({
    ...item,
    key: index.toString(),
  }));
