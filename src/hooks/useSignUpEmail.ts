import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

type Input = {
  email: string;
  password: string;
  fullName: string;
  username: string;
};

const useSignUpEmail = () => {
  const [createUserWithEmailAndPassword, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [errMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const signup = async (inputs: Input) => {
    setLoading(true);
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.fullName ||
      !inputs.username
    ) {
      setErrorMessage("Please fill in all the fields");
      return;
    }
    try {
      // Trying to create a new user
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      // If there is error, it will be caught by the error state
      if (!newUser && error) {
        setErrorMessage("Failed to create an account. Please try again.");
      }

      // If there is no error, we will add the user to the database
      if (newUser) {
        console.log(newUser);
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: "",
          profilePicURL: "",
          followers: <string[]>[],
          following: <string[]>[],
          posts: <string[]>[],
          createdAt: Date.now(),
        };

        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);

        localStorage.setItem("user-info", JSON.stringify(userDoc));
      }
    } catch (err) {
      console.log(err);
      setErrorMessage("Failed to create an account. Please try again.");
    }

    setLoading(false);
  };

  return { signup, error, errMessage, loading };
};

export default useSignUpEmail;
