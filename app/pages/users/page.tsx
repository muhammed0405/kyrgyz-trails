/** @format */
"use client";
import React, { useEffect } from "react";
import { UseTypedDispatch } from "../../redux/customHooks/useTypedDispatch";
import { useTypedSelectorHook } from "../../redux/customHooks/useTypedSelectorHook";
import { UserCard } from "../../components/common/userCard";
import { IUserType } from "../../redux/Interfaces/interFaces";

export default function UserList() {
  const { getUsers } = UseTypedDispatch();
  const users = useTypedSelectorHook((state) => state.user.users);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.map((user: IUserType) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
