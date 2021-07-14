import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import firebase from "../app/firebase";
import { ITodo } from "../todos/ITodo";
import { pipe } from "./func";
import {
  parseDatesToFirestoreDatesInObject,
  parseFirestoreDatesToDatesInObject,
} from "./parser";

export const firestore = firebase.firestore();

const converter = <T>(
  parseToFirestore: (data: any) => any,
  parseFromFirestore: (data: any) => any
) => ({
  toFirestore: (data: Partial<T>) => parseToFirestore(data),
  fromFirestore: (snap: QueryDocumentSnapshot) => {
    return { ...parseFromFirestore(snap.data()), id: snap.id } as T;
  },
});

const DefaultDataPointOptions = {
  parseToFirestore: (data: any) => data,
  parseFromFirestore: (data: any) => data,
};

const dataPoint = <T>(
  collectionPath: string,
  options: Partial<typeof DefaultDataPointOptions>
) => {
  const opts = { ...DefaultDataPointOptions, ...options };
  
  const parseToFirestore = pipe(
      opts.parseToFirestore,
      parseDatesToFirestoreDatesInObject
  )
  const parseFromFirestore = pipe(
      opts.parseFromFirestore,
      parseFirestoreDatesToDatesInObject
  )
  return firestore
    .collection(collectionPath)
    .withConverter(
      converter<T>(parseToFirestore, parseFromFirestore)
    );
};

const db = {
  todos: dataPoint<ITodo>("todos", {
    parseFromFirestore: (data) => {
      console.log('Custom parse from firestore');
      return data;
    },
  }),
};

export default db;
