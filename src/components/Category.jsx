import useQuiosco from "../hooks/useQuiosco";

export const Category = ({category}) => {
  const {handleClickCategory, currentCategory, handleShowMenu} = useQuiosco()
  const {icon, id, name} = category

  const highlightCurrentCategory = currentCategory.id === id 
    ? "bg-amber-400" 
    : "bg-white"
    
  return (
    <div className={`"flex items-center gap-4 border 
                    w-full p-4 hover:bg-amber-400 
                    cursor-pointer
                    ${highlightCurrentCategory}`}
          
          onClick={() => {handleClickCategory(id)
                          handleShowMenu()
                  }}>
        <div className="md:block flex justify-start">
          <img src={`/img/icono_${icon}.svg`} 
              alt={`Icono ${name}`}
              className="w-6 md:w-12" />                

          <p className="text-lg font-bold 
                      cursor-pointer truncate ml-5">
              {name}
          </p>
        </div>

    </div>
  )
}
