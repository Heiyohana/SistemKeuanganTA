import React, { useState } from "react";
import { IUser } from "./component/User.type";
import UserModal from "./userModal";

type Props = {
  list: IUser[];
  onDeleteClickHnd: (data: IUser) => void;
  onEditUserHnd: (data: IUser) => void;
};

const UserList = (props: Props) => {
  const { list, onDeleteClickHnd, onEditUserHnd } = props;

  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IUser | null);

  const viewUserRecord = (data: IUser) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <div>
      <article>
        <h3 className="font-bold text-2xl text-center">User List</h3>
      </article>
      <table>
        <tbody>
          <tr>
            <th>username</th>
            <th>email</th>
            <th>role</th>
            <th>actions</th>
          </tr>

          {list.map((user) => {
            console.log(user);
            return (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <div>
                    <input
                      type="button"
                      value="View"
                      className="cursor-pointer rounded-md bg-white border border-blue-500 px-3 py-1 mr-2"
                      onClick={() => viewUserRecord(user)}
                    />
                    <input
                      type="button"
                      value="Edit"
                      className="cursor-pointer rounded-md bg-white border border-blue-500 px-3 py-1 mr-2"
                      onClick={() => onEditUserHnd(user)}
                    />
                    <input
                      type="button"
                      value="Delete"
                      className="cursor-pointer rounded-md bg-white border border-blue-500 px-3 py-1 mr-2"
                      onClick={() => onDeleteClickHnd(user)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showModal && dataToShow !== null && (
        <UserModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default UserList;
