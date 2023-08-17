import { IUser } from "./component/User.type";
import React, { useState } from "react";

type Props = {
  data: IUser;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IUser) => void;
};

const editUser = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;
  const [username, setUsername] = useState(data.username);
  const [email, setEmail] = useState(data.email);
  const [role, setRole] = useState(data.role);

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
    const updatedData: IUser = {
      id: data.id,
      username: username,
      email: email,
      role: role,
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };

  return (
    <div className="items-center justify-center bg-white">
      <div>
        <h3 className="font-bold text-center">Edit User Form</h3>
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
            value="Update User"
            className="rounded-lg bg-white border-2 border-blue-500 px-4 py-2 mr-2"
            // onClick={onUpdateClickHnd}
          />
        </div>
      </form>
    </div>
  );
};

export default editUser;
