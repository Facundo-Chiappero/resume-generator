import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { IconButton } from "@mui/material"

interface GenericListProps<T> {
  data: T[]
  config: { INPUTS: Record<string, { LABEL: string; KEY: keyof T }> }
  onEdit: (index: number) => void
  onDelete: (index: number) => void
}

export default function GenericList<T>(props: GenericListProps<T>) {
  const { data, config, onEdit, onDelete } = props

  return (
    <ul className="max-h-[400px] overflow-auto flex flex-col gap-2">
      {data.map((item, index) => (
        <li
          key={index}
          className="flex w-full justify-between border-2 border-light-text-primary dark:border-dark-text-primary p-4 rounded-xl"
        >
          <main>
            {Object.entries(config.INPUTS).map(([key, { LABEL, KEY }]) => (
              <p key={key}>
                <strong>{LABEL}:</strong> {item[KEY] as string}
              </p>
            ))}
          </main>

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
