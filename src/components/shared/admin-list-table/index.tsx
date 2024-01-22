import React, { ReactNode } from "react";
import styles from "@/styles/AdminListTable.module.css";
import { Table } from "react-bootstrap";
import StyleButton from "@/components/shared/style-button";

interface AdminListTableProps {
  first_title?: string;
  second_title?: string;
  third_title?: string;
  fourth_title?: string;
  fifth_title?: string;
  sixth_title?: string;
  children: ReactNode;
}

const AdminListTable: React.FC<AdminListTableProps> = ({
  children,
  first_title,
  second_title,
  third_title,
  fourth_title,
  fifth_title,
  sixth_title,
}) => {
  return (
    <div className={styles.admin_panel}>
      <Table borderless={true} hover={true} responsive={true}>
        <thead>
          <tr>
            {first_title && <th>{first_title}</th>}
            {second_title && <th>{second_title}</th>}
            {third_title && <th>{third_title}</th>}
            {fourth_title && <th>{fourth_title}</th>}
            {fifth_title && <th>{fifth_title}</th>}
            {sixth_title && <th>{sixth_title}</th>}
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>

      <div className="pagination justify-content-end">
        <div className="pagination">
          <StyleButton action="<" type_button="blue" />
          <StyleButton action="1" type_button="blue" />
          <StyleButton action="2" type_button="blue" />
          <StyleButton action="3" type_button="blue" />
          ...
          <StyleButton action="9" type_button="blue" />
          <StyleButton action=">" type_button="blue" />
        </div>
      </div>
    </div>
  );
};

export default AdminListTable;
