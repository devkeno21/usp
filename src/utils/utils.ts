export const getActiveBtnColor = (isActive:boolean)=>{
    return isActive ?  "bg-secondary-900 bg-opacity-25 border-secondary-900 hover:bg-secondary-700 hover:bg-opacity-20 w-full text-xs"
              : "bg-white bg-opacity-20  border-gray-500 hover:bg-white hover:bg-opacity-15 w-full text-xs"
}