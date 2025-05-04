type InputProps<T> = {
  element: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  setter: (value: React.SetStateAction<T>) => void
}

type FileProps<T> = {
  element: React.ChangeEvent<HTMLInputElement>
  setter: (value: React.SetStateAction<T>) => void
}

export const handleInputChange = <T>({element, setter}: InputProps<T>) => { 
  const { name, value } = element.target
  setter((prevData) => ({
    ...prevData,
    [name]: value,
  }))
}

export const handleFileChange = async <T>({
  element,
  setter,
}: FileProps<T>) => {
  const file = element.target.files?.[0] ?? null;

  if (!file) return 

    const previewUrl = URL.createObjectURL(file);
    setter((prevData) => ({
      ...prevData,
      photo: file,
      photoPreview: previewUrl,
    }));
};
