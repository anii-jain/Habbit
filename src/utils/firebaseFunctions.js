import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// Placing Orders 
export const placeOrder = async (data) => {
  await setDoc(doc(firestore, "orders", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};

export const getAllOrders = async () => {
  const items = await getDocs(
    query(collection(firestore, "orders"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
