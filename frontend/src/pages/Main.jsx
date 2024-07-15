import { HamburgerMenu_Icon } from "../myComponents/HamburgerMenu_Icon"
import todoLogo from "../../public/SVG/toDoLogo.svg"
import { Button } from "@/components/ui/button"
import "../custom.css"

// IMPORTING ATOMS HERE
import { useRecoilState } from "recoil"
import { todoArray_atom, todoInput_atom } from "../recoil/user-atom"

// PULLING THE USER
import { pullUSER } from "../localStorage/pullingTheUserObject"
import { updateUserObject } from "../axios/useUpdateUserObject"

// COMPONENTS


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

    settodoArray((e) => [...e, todo]);


    // UPDATING THE USER OBJECT BY ADDING THE NEW TODO
    USER.todoFiles[0].todos.push()

  }







  /*
  .########..########.########..##.....##..######..
  .##.....##.##.......##.....##.##.....##.##....##.
  .##.....##.##.......##.....##.##.....##.##.......
  .##.....##.######...########..##.....##.##...####
  .##.....##.##.......##.....##.##.....##.##....##.
  .##.....##.##.......##.....##.##.....##.##....##.
  .########..########.########...#######...######..
  */

  const printUserObject = () => {
    console.log(USER);
  }














  /*
  .########.########...#######..##....##.########.########.##....##.########.
  .##.......##.....##.##.....##.###...##....##....##.......###...##.##.....##
  .##.......##.....##.##.....##.####..##....##....##.......####..##.##.....##
  .######...########..##.....##.##.##.##....##....######...##.##.##.##.....##
  .##.......##...##...##.....##.##..####....##....##.......##..####.##.....##
  .##.......##....##..##.....##.##...###....##....##.......##...###.##.....##
  .##.......##.....##..#######..##....##....##....########.##....##.########.
  */
  return (
    <div id="main-MainPage">

      <div className="wrapper1-MainPage">
        {/* THE FILES MENU */}

        {/* THE AVATAR LOGO */}

        {/* THE USERNAME */}

        {/* THE EMAIL */}

        {/* THE SEARCH BAR */}

        {/* THE SEARCH BUTTON */}

        {/* THE FILE NAMES LIST */}

        {/* THE THREE DOTS IN THE LIST */}
        </div>






        <div className="">
          {/* THE TO DO SECTION */}

          {/* THE TO DO LOGO */}

          {/* THE TO DO INPUT BOX */}

          {/* THE TO DO ADD BOX */}

          {/* THE COMPLETED SECTION */}

          {/* THE INCOMPLETED SECTION */}
        </div>

      </div>
      )
}
