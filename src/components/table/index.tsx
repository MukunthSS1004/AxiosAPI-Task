import React from "react";
import type { User } from "../../common/interface";

interface UserListTableProps {
  users: User[];
}

const UserListTable: React.FC<UserListTableProps> = ({ users }) => {
  return (
    <div>
      <h1 className="mb-4 text-center">USERS From → API</h1>
      
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListTable;
