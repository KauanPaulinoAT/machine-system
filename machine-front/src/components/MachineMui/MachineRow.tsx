"use client";

import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";

import Typography from "@mui/joy/Typography";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";

import Machine from "./MachineTable";
import Button from "@mui/joy/Button/Button";

function RowMenu({ onDeleteClick, onEditClick }: { onDeleteClick: () => void; onEditClick: () => void; }) {
  return (
    <div>
        <Button color="neutral" onClick={onEditClick}><EditRoundedIcon /></Button>
        <Divider sx={{ my: 0.5, width: "20px", mx: "auto" }} />
        <Button color="danger" onClick={onDeleteClick}><DeleteRoundedIcon /></Button>
    </div>

  );
}

interface MachineRowProps {
  machine: Machine;
  onEdit: (machine: Machine) => void;
  onDelete: (machine: Machine) => void;
}

export default function MachineRow({ machine, onEdit, onDelete }: MachineRowProps) {
  return (
    <tr>
      <td>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar size="sm"><DnsRoundedIcon /></Avatar>
          <Typography level="body-xs">{machine.name}</Typography>
        </Box>
      </td>
      <td>
        <Typography level="body-xs">{machine.tipo}</Typography>
      </td>
      <td style={{ textAlign: "center" }}>
        <RowMenu
          onDeleteClick={() => onDelete(machine)}
          onEditClick={() => onEdit(machine)}
        />
      </td>
    </tr>
  );
}
