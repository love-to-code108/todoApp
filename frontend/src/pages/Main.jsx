import { HamburgerMenu_Icon } from "../GlobalComponents/HamburgerMenu_Icon"
import todoLogo from "../../public/SVG/toDoLogo.svg"
import { Button } from "@/components/ui/button"
import "../custom.css"

// IMPORTING ATOMS HERE
import { useRecoilState } from "recoil"
import { USER_atom } from "../recoil/user-atom"
import { completedArray_atom, uncompletedArray_atom } from "../recoil/todo-atom"


export const Main = () => {


  // INITIALIZING THE ATOMS
  const [completedTodoArray, setcompletedTodoArray] = useRecoilState(completedArray_atom);

  const [uncompletedTodoArray, setuncompletedTodoArray] = useRecoilState(uncompletedArray_atom);

  const [USER, setUSER] = useRecoilState(USER_atom);
  console.log(USER);










  return (
    <div className=" px-6 pt-8">





      {/* WRAPPER DIV FOR MENU ICON AND TODO LOGO */}
      <div className=" flex items-center mb-12">



        {/* THE HAMBURGER MENU */}
        <HamburgerMenu_Icon />


        {/* THE TODO LOGO  */}
        <div className=" w-[100%] flex justify-center">
          <img className=" h-[2rem]" src={todoLogo} alt="" />
        </div>


      </div>









      {/* WRAPPER FOR THE INPUT SECTION AND INPUT BUTTON */}
      <div className=" flex items-center px-4 w-[100%]">



        {/* ADD TO DO INPUT SECTION  */}
        <div className=" mr-3">
          <input type="text" className=" toDoSectionInput border-black border-2 px-2 py-2 h-[3rem] w-[100%] rounded-md font-inter" placeholder="Add Todo"></input>



        </div>


        {/* ADD TO DO PLUS BUTTON */}
        <div>
          <Button className=" text-3xl h-[3rem] w-[3rem]">+</Button>
        </div>



      </div>







      {/* NOT COMPLETED SECTION  */}
      <div>

      </div>



      {/* COMPLETED SECTION  */}
      <div>

      </div>




    </div>
  )
}
