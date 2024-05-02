import { HamburgerMenu_Icon } from "../GlobalComponents/HamburgerMenu_Icon"
import todoLogo from "../../public/SVG/toDoLogo.svg"
import { Button } from "@/components/ui/button"
import "../custom.css"

// IMPORTING ATOMS HERE
import { useRecoilState } from "recoil"
import { todoArray_atom, todoInput_atom } from "../recoil/user-atom"

// PULLING THE USER
import { pullUSER } from "../USER/pullingTheUserObject"
import { updateUserObject } from "../axios/useUpdateUserObject"


export const Main = () => {


  // PULLING THE USER OBJECT
  const USER = pullUSER();


  // INITIALIZING THE ATOMS
  const [todoArray, settodoArray] = useRecoilState(todoArray_atom);
  const [todoInput, settodoInput] = useRecoilState(todoInput_atom);


  
  
  
  
  
  
  // ADDING TO DO TO THE TODO ARRAY
  const addTodo = () => {
    
    console.log(todoInput);
    console.log(todoArray);
    
    
    // THE TODO OBJECT
    const todo = {
      value: todoInput,
      state: false,
    }
    
    console.log(todo);
    
    settodoArray([...todoArray , todo]);


    
    // UPDATE USER OBJECT
    updateUserObject("Something");
  }









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
          <input type="text" className=" toDoSectionInput border-black border-2 px-2 py-2 h-[3rem] w-[100%] rounded-md font-inter" onChange={(e) => settodoInput(e.target.value)} placeholder="Add Todo" />
        </div>


        {/* ADD TO DO PLUS BUTTON */}
        <div>
          <Button onClick={addTodo} className=" text-3xl h-[3rem] w-[3rem]">+</Button>
        </div>



      </div>







      {/* NOT COMPLETED SECTION  */}
      <div>
        {
          todoArray.map((v, i) => {
            return <h1 className=" text-xl" key={i}>{v.value}</h1>;
          })
        }

      </div>



      {/* COMPLETED SECTION  */}
      <div>

      </div>




    </div>
  )
}
