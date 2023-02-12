//import styles from "../utils/index"
const NavBar = () => {
  return (
    <div className={`bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 fixed py-10 flex justify-between items-center px-[2rem] bg-black text-white z-50 h-10 w-full`}>
      <h2 className="text-white text-2xl">JFTL</h2>
      <div className="flex justify-center items-center">
        <button className={`bg-gradient-to-r from-cyan-500 to-blue-500 w-32 tracking-wider h-10 rounded-full`} > Contact Us </button>
      </div>
    </div>
  )
}

export default NavBar