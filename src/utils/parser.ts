export type FireStoreDate = { seconds: number; nanoseconds: number };

const isFireStoreDate = (x: any): x is FireStoreDate => {
  return x.hasOwnProperty("seconds") && x.hasOwnProperty("nanoseconds");
};

const dateToFirestoreDate = (date: Date): FireStoreDate => {
  return {
    seconds: Math.floor(date.getTime() / 1000),
    nanoseconds: 0,
  };
};

const firestoreDateToDate = (date: FireStoreDate): Date => {
  return new Date(date.seconds * 1000 + Math.floor(date.nanoseconds / 1000));
};

export const parseDatesToFirestoreDatesInObject = (item: any): any => {
  const dates: any = {};
  Object.keys(item).forEach((key) => {
    if (item[key] instanceof Date) {
      dates[key] = dateToFirestoreDate(item[key]);
    }
  });
  return {
    ...item,
    ...dates,
  };
};

export const parseFirestoreDatesToDatesInObject = (item: any): any => {
  const dates: any = {};
  Object.keys(item).forEach((key) => {
    if (isFireStoreDate(item[key])) {
      dates[key] = firestoreDateToDate(item[key]);
    }
  });
  return {
    ...item,
    ...dates,
  };
};