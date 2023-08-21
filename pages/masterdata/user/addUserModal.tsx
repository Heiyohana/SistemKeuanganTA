import React, { useState } from "react";
import { IUser } from "./user.type";

type Props = {
  onBatalBtnHnd: () => void;
  onSubmitClickHnd: (data: IUser) => void;
};

const addUserModal = (props: Props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [sandi, setSandi] = useState("");
  const { onBatalBtnHnd, onSubmitClickHnd } = props;

  const onUsernameChangeHnd = (e: any) => {
    setUsername(e.target.value);
  };
  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };
  const onRoleChangeHnd = (e: any) => {
    setRole(e.target.value);
  };
  const onSandiChangeHnd = (e: any) => {
    setSandi(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const data: IUser = {
      id: new Date().toJSON().toString(),
      username: username,
      email: email,
      role: role,
      sandi: sandi,
    };
    onSubmitClickHnd(data);
    onBatalBtnHnd();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[400px] h-max flex flex-col bg-white rounded-xl">
        <div className="p-6">
          <h1 className="font-bold text-lg">Tambah Data</h1>
          <form onSubmit={onSubmitBtnClickHnd}>
            <div>
              <div className="pb-2">
                <label>Username :</label>
                <input
                  type="text"
                  value={username}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder=""
                  onChange={onUsernameChangeHnd}
                />
              </div>
              <div className="pb-2">
                <label>Email :</label>
                <input
                  type="text"
                  value={email}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder=""
                  onChange={onEmailChangeHnd}
                />
              </div>
              <div className="pb-2">
                <label>Role :</label>
                <input
                  type="text"
                  value={role}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder=""
                  onChange={onRoleChangeHnd}
                />
              </div>
              <div className="pb-2">
                <label>Sandi :</label>
                <input
                  type="text"
                  value={sandi}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder=""
                  onChange={onSandiChangeHnd}
                />
              </div>
            </div>

            {/* Button */}
            <div className="place-items-end">
              <input
                type="button"
                value="Batal"
                className="rounded-lg bg-white border-2 border-blue-500 text-blue-500 px-4 mr-3 py-1 cursor-pointer"
                onClick={onBatalBtnHnd}
              />
              <input
                type="submit"
                value="Simpan"
                className="rounded-lg text-white bg-blue-500 px-4 py-1 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default addUserModal;
