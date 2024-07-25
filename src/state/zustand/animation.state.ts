import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// export const useAnimationStore = create((set) => ({
//   animationStatus: false,
//   setAnimationStatus: (newAnimationStatus: boolean)  => set({ animationStatus: newAnimationStatus }),
// }))

export const useAnimationStore = create(
    persist(
      (set, get) => ({
        animationStatus: true,
        setAnimationStatus: (newAnimationStatus: boolean)  => set({ animationStatus: newAnimationStatus }),
      }),
      {
        name: 'animation-storage', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      },
    ),
  )