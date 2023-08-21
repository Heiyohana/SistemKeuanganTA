import React from "react";
import { IUser } from "./user.type";

type Props = {
  data: IUser;
  onClose: () => void;
};

const viewUserModal = (props: Props) => {
  const { data, onClose } = props;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[400px] h-max flex flex-col bg-white rounded-xl">
        <div className="p-6">
          <h1 className="font-bold text-lg">Details Customer</h1>
          <form>
            <div>
              <div className="pb-2">
                <label>Username :</label>
                <input
                  type="text"
                  // value={data.nama}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={data.username}
                  //   onChange={onNamaChangeHnd}
                />
              </div>
              <div className="pb-2">
                <label>Email : </label> <br />
                <input
                  type="text"
                  // value={data.nohp}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={data.email}
                  //   onChange={onNohpChangeHnd}
                />
              </div>
              <div className="pb-2">
                <label>Role: </label> <br />
                <input
                  type="text"
                  // value={data.alamat}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={data.role}
                  //   onChange={onAlamatChangeHnd}
                />
              </div>
              <div className="pb-2">
                <label>Kata Sandi: </label> <br />
                <input
                  type="text"
                  // value={data.alamat}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={data.sandi}
                  //   onChange={onAlamatChangeHnd}
                />
              </div>
            </div>

            {/* Button */}
            <div className="place-items-end">
              <input
                type="button"
                value="Close"
                className="rounded-lg bg-white border-2 border-blue-500 text-blue-500 px-4 mr-3 py-1 cursor-pointer"
                onClick={onClose}
              />
              <input
                type="submit"
                value="Edit"
                className="rounded-lg text-white bg-blue-500 px-4 py-1 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default viewUserModal;
