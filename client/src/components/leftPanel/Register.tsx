import { useMutation } from "@apollo/client";
import { createUserId } from "../../graphql/io";
import useLocalStorage from "../../hooks/useLocalStorage";

const Register = () => {
  const [value, setValue] = useLocalStorage("token");
  const [createUser] = useMutation(createUserId, {
    onCompleted: ({
      createAppUser: {
        appUser: { uid },
      },
    }) => {
      if (!uid) return;
      setValue(uid);
    },
  });

  const handleClick = () => {
    createUser();
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center justify-center h-20 font-semibold"
      >
        create ID
      </button>
      {value}
    </>
  );
};

export default Register;
