import { create } from 'zustand'

interface DialogState {
  isOpen: boolean
  openDialog: () => void
  closeDialog: () => void
}

const useJoiningDialogStore = create<DialogState>()((set) => ({
    isOpen: false,
    openDialog: () => set((state) => ({ isOpen: true })),
    closeDialog: () => set((state) => ({ isOpen: false })),
}))

export default useJoiningDialogStore