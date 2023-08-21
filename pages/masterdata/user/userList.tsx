import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IUser } from "./user.type";
import ViewUserModal from "./viewUserModal";

type Props = {
  list: IUser[];
  onDeleteClickHnd: (data: IUser) => void;
};
const userList = (props: Props) => {
  const { list, onDeleteClickHnd } = props;
  const [showViewModal, setShowViewModal] = useState(false);
  const [detailsToShow, setDetailsToShow] = useState(null as IUser | null);

  const viewDetails = (data: IUser) => {
    setDetailsToShow(data);
    setShowViewModal(true);
  };

  const onCloseModal = () => setShowViewModal(false);
  return (
    <div>
      <table className="text-left border-2 border-blue-500">
        <thead className="bg-blue-500 items-center text-white">
          <tr>
            <td className="px-2 py-1 font-medium">No</td>
            <td className="px-2 py-1 font-medium">Username</td>
            <td className="px-2 py-1 font-medium">Email</td>
            <td className="px-2 py-1 font-medium">Role</td>
            <td className="px-2 py-1 font-medium">Sandi</td>
            <td className="px-2 py-1 font-medium">Aksi</td>
          </tr>
        </thead>
        <tbody className="bg-white text-left">
          {list.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.sandi}</td>
                <td>
                  <button
                    value="Delete"
                    className="cursor pointer"
                    onClick={() => onDeleteClickHnd(user)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-md mr-2 text-red-500"
                      onClick={() => onDeleteClickHnd(user)}
                    />
                  </button>
                  <button
                    value="Edit"
                    className="cursor pointer"
                    onClick={() => viewDetails(user)}
                  >
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="text-md mr-2 text-green-500"
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showViewModal && detailsToShow && (
        <ViewUserModal onClose={onCloseModal} data={detailsToShow} />
      )}
    </div>
  );
};

export default userList;
