import { create } from 'zustand'

interface Data {
    title:string,
    message:string
}
interface DialogState {
  isOpen: boolean,
  title:string,
  message:string,
  openDialog: (data:Data) => void
  closeDialog: () => void
}

const useSuccessDialogStore = create<DialogState>()((set) => ({
    isOpen: false,
    title: "",
    message: "",
    openDialog: (data) => {set(() => ({ isOpen: true, title:data.title , message:data.message }))},
    closeDialog: () => {set(() => ({ isOpen: false, title:"" , message:"" }))},
}))

export default useSuccessDialogStore