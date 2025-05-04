import GenericList from "@components/template/GenericList"

type Props<T> = {
  data: T[]
  config: { INPUTS: Record<string, { LABEL: string; KEY: keyof T }> }
  onEdit: (index: number) => void
  onDelete: (index: number) => void
}

//this is what should be used in components to create a list
export default function GenericEntityList<T>({
  data,
  config,
  onEdit,
  onDelete,
}: Props<T>) {
  return (
    <GenericList<T>
      data={data}
      onEdit={onEdit}
      onDelete={onDelete}
      renderItem={(item) => (
        <main>
          {Object.entries(config.INPUTS).map(([key, { LABEL, KEY }]) => (
            <p key={key}>
              <strong>{LABEL}:</strong> {item[KEY] as string}
            </p>
          ))}
        </main>
      )}
    />
  )
}
