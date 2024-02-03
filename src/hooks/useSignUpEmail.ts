import { createUserWithEmailAndPassword } from "firebase/auth";
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
  const [errMessage, setErrorMessage] = useState<string | null>(null);
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
      setLoading(false);
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );
      if (!newUser) {
        setErrorMessage("Failed to create an account. Please try again.");
        setLoading(false);
      }

      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };

        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setErrorMessage("Failed to create an account. Please try again.");
      setLoading(false);
    }
  };

  return { errMessage, loading, signup };
};

export default useSignUpEmail;
