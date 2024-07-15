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


// ASSETS
import defaultProfilPic from "../assets/png/profile-user.png"
import seachIcon_svg from "../assets/svg/search-icon.svg"














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




        {/* THE USERNAME THE EMAIL AND THE LOGO   THE ACCOUNT SECTION */}
        <div className=" py-4 flex justify-start
         2xl:h-[7rem] 2xl:mb-4">


          {/* THE AVATAR LOGO */}
          <div className="">
            <img className=" 2xl:w-[4.5rem] 2xl:h-[4.5rem] bg-white rounded-full" src={defaultProfilPic} alt="" />
          </div>



          <div className=" flex flex-col text-[#000000] 
          2xl:mt-3 2xl:text-sm 2xl:ml-4 ">

            {/* THE EMAIL */}
            <p>love.to.code108@gmail.com</p>
            {/* THE USERNAME */}
            <p>love-to-code108</p>

          </div>


        </div>








        {/* THE SEARCH BAR AND THE BUTTON */}
        <div className="searchBar-mainPage">

          {/* THE SEARCH BAR */}
          <input type="text" className=" text-xl font-inter px-1 
              2xl:w-[14rem] 2xl:mr-4 2xl:h-[2rem]"/>

          {/* THE SEARCH BUTTON  */}
          <button className="" onClick={printUserObject}>
            <img src={seachIcon_svg} alt="" />
            </button>

        </div>


        {/* LIST OF FILES */}
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
