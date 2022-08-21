import React from "react";
import { styled } from "@mui/material/styles";

// Add support for the sx prop for consistency with the other branches.
const TableElement = styled("table")(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginInline: "auto",
  borderSpacing: 0,
  "th,td": {
    padding: theme.spacing(1),
    border: "1px solid",
  },
}));
type Props = {};

export default function Table({}: Props) {
  return (
    <div>
      <TableElement>
        <thead>
          <tr>
            <th>نام</th>
            <th>یک</th>
            <th>دو</th>
            <th>سه</th>
            <th>نام</th>
            <th>یک</th>
            <th>دو</th>
            <th>سه</th>
            <th>نام</th>
            <th>یک</th>
            <th>دو</th>
            <th>سه</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> نام</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
            <td> نام</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
            <td> نام</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
          </tr>
          <tr>
            <td> نام</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
            <td> نام</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
            <td> نام</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
          </tr>
          <tr>
            <td> نام</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
            <td> نام</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
            <td> نام</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
            <td>۲۳۴۳۲۴</td>
          </tr>
        </tbody>
      </TableElement>
    </div>
  );
}
