import React from "react";
import { useCollection } from "@nandorojo/swr-firestore";
import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "@nandorojo/swr-firestore/node_modules/@firebase/firestore-types";

type Test = {
  id: string;
  name: string;
};

const converter: FirestoreDataConverter<Test> = {
  fromFirestore(
    snapshot: QueryDocumentSnapshot<Test>,
    options: SnapshotOptions
  ) {
    console.log("fromFirestore");
    return snapshot.data();
  },
  toFirestore(test: Test) {
    return test;
  },
};

export const Component = () => {
  const { data, error } = useCollection<Test>("docs", {
    documentDataConverter: converter,
  });
  return (
    <div>
      <div>Component</div>
      <ul>{data && data.map((t) => <li key={t.name}>{t.name}</li>)}</ul>
    </div>
  );
};
