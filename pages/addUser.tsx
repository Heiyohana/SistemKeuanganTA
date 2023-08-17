import React, { useState } from "react";
import { IUser } from "./component/User.type";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IUser) => void;
};

const addUser = (props: Props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;
  const onUsernameChangeHnd = (e: any) => {
    setUsername(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const onRoleChangeHnd = (e: any) => {
    setRole(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const data: IUser = {
      id: new Date().toJSON().toString(),
      username: username,
      email: email,
      role: role,
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  return (
    <div className="fixed inset-0 bg-transparent flex justify-center items-center">
      <div className="w-max flex flex-col p-2 pb-2 bg-white rounded-md">
        <div>
          <h3 className="font-bold text-center">Add User Form</h3>
        </div>
        <form
          onSubmit={onSubmitBtnClickHnd}
          className="justify-center items-center"
        >
          <div>
            <label htmlFor="">Username: </label>
            <input
              type={username}
              className="w-full p-2 border border-gray-300 rounded-sm mb-2"
              onChange={onUsernameChangeHnd}
            />
          </div>
          <div>
            <label htmlFor="">Email: </label>
            <input
              type={email}
              className="w-full p-2 border border-gray-300 rounded-sm mb-2"
              onChange={onEmailChangeHnd}
            />
          </div>
          <div>
            <label htmlFor="">Role: </label>
            <input
              type={role}
              className="w-full p-2 border border-gray-300 rounded-sm mb-2"
              onChange={onRoleChangeHnd}
            />
          </div>
          <div className="mt-3 items-center justify-center">
            <input
              type="button"
              value="Back"
              className="rounded-lg bg-white border-2 border-blue-500 px-4 py-2 mr-2 cursor-pointer"
              onClick={onBackBtnClickHnd}
            />
            <input
              type="submit"
              value="Add User"
              className="rounded-lg bg-white border-2 border-blue-500 px-4 py-2 mr-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default addUser;
