import React, { use, useState } from "react";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "ferid" },
    { id: 2, username: "aydan" },
    { id: 3, username: "murad" },
    { id: 4, username: "nigar" },
    { id: 5, username: "emin" },
  ]);
  const [UserName, SetUserName] = useState("");
  const [UserName2, SetUserName2] = useState(users);
  const CreateUser = (e) => {
    e.preventDefault();
    const newuser = users.filter((item) => item.username === UserName);
    console.log(newuser);

    if (newuser.length > 0) {
      alert("bu username data var");
    } else {
      console.log("sagol");
      let newARR = {
        id: Date.now(),
        username: UserName,
      };
      setUsers((item) => [...item, newARR]);
      SetUserName("");
    }
  };
  const [Search, SetSearch] = useState("");

  const SearchClick = (title) => {
    SetSearch(title);
    console.log(title);

    const filt = UserName2.filter((item) =>
      item.username.toLowerCase().includes(title.toLowerCase())
    );
    console.log(filt);

    setUsers(filt);
  };
  const [Modal, SetModal] = useState(false);
  const [newuser, setnewuser] = useState({});
  const ClickUser = (user) => {
    SetModal(!Modal);
    setnewuser(user);
  };

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <form
            method="get"
            onSubmit={CreateUser}
            className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 shadow-md rounded-lg"
          >
            <input
              type="text"
              value={UserName}
              onChange={(e) => SetUserName(e.target.value)}
              placeholder="Yeni istifadəçi adı"
              className="w-full flex-1 px-4 py-2 border border-gray-300 rounded-lg  focus:ring-blue-400"
            />
            <input
              type="submit"
              value="Əlavə et"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            />
          </form>
        </div>
        <div className="mb-8 mt-8">
          <form
            method="get"
            className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 shadow-md rounded-lg"
          >
            <input
              type="text"
              value={Search}
              onChange={(e) => SearchClick(e.target.value)}
              placeholder="istifadeci axtarisi"
              className="w-full flex-1 px-4 py-2 border border-gray-300 rounded-lg  focus:ring-blue-400"
            />
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {user.username}
              </h2>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">ID: {user.id}</p>
                <MdOutlineMedicalInformation
                  className="text-3xl cursor-pointer"
                  onClick={() => ClickUser(user)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="modal">
        {Modal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                İstifadəçi məlumatları
              </h2>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">ID:</span> {newuser.id}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">
                  İstifadəçi adı: {newuser.username}
                </span>
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => SetModal(!Modal)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  <IoClose />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Users;
