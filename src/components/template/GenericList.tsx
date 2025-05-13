import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { IconButton } from "@mui/material"

interface GenericListProps<T> {
  data: T[]
  onEdit: (index: number) => void
  onDelete: (index: number) => void
  renderItem: (item: T) => React.ReactNode
}

//this generates the list used in GenericEntityList, the other component is used to reduce even more the amount of code in the main components
export default function GenericList<T>({
  data,
  onEdit,
  onDelete,
  renderItem,
}: GenericListProps<T>) {
  return (
    <ul className="max-h-[400px] overflow-auto flex flex-col gap-2">
      {data.map((item, index) => (
        <li
          key={index}
          className="flex w-full justify-between border-2 border-light-text-primary dark:border-dark-text-primary p-4 rounded-xl"
        >
          {renderItem(item)}
          <aside>
            <IconButton
              onClick={() => onEdit(index)}
              sx={{
                color: "white",
                transition: "background .3s ease",
                ":hover": {
                  background: "rgba(0, 0, 0, .2)",
                },
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => onDelete(index)}
              sx={{
                color: "white",
                transition: "background .3s ease",
                ":hover": {
                  background: "rgba(0, 0, 0, .2)",
                },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </aside>
        </li>
      ))}
    </ul>
  )
}
