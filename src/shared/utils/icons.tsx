import { Trash, Check, Pencil } from "lucide-react";

const trashIcon = (
  <Trash className="text-primary" size={22} color="var(--primary)" />
);

const checkIcon = (
  <Check className="text-primary" size={22} color="var(--primary)" />
);

const editIcon = (
  <Pencil className="text-primary" size={22} color="var(--primary)" />
);

export { trashIcon, checkIcon, editIcon };
