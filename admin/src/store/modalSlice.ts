import { create } from "zustand";

interface ModalState {
  isRoleCreateModalOpen: boolean;
  toggleRoleCreateModal: () => void;
}

const useModalStore = create<ModalState>()((set) => ({
    isRoleCreateModalOpen: false,
    toggleRoleCreateModal: () => set((state) => ({ isRoleCreateModalOpen: !state.isRoleCreateModalOpen  })),
}));

export default useModalStore;
