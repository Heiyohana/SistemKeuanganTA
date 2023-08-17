import React from "react";
import { IUser } from "./component/User.type";

type Props = {
  onClose: () => void;
  data: IUser;
};

const userModal = (props: Props) => {
  const { onClose, data } = props;

  return (
    <div className="fixed inset-0 bg-black bg-transparent flex justify-center items-center">
      <div className="w-[200px] h-[400px] flex flex-col pr-2 pb-2 bg-white rounded-lg">
        <span
          className="place-self-end text-2xl font-semibold cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <div className="px-4 pb-3">
          <h1 className="font-semibold text-lg text-center">User Details</h1>
          <div>
            <div>
              <label>Username : {data.username}</label> <br />
              <label>Email : {data.email}</label> <br />
              <label>Role : {data.role}</label> <br />
            </div>
            <div>
              <input
                type="button"
                value="Edit"
                className="rounded-lg bg-white border-2 border-blue-500 px-4 py-2 mr-2 cursor-pointer"
                // onClick={}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userModal;
