
const Header = () => {
    return (
        <div className="mt-0 h-14 flex  justify-start px-8 bg-gradient-to-r from-purple-400 via-purple-700 to-orange-300
">
            <span className="text-orange-400 font-serif font-semibold text-lg  py-4 ml-8 ">🌐LandingPage.X</span>
            <ul className="list-none flex ml-64 text-left px-24  text-white space-x-12 py-4 ">
                <li> <a href="">Home</a></li> 
                <li><a href="">Aboutus</a></li>
                <li><a href="">Contacts</a></li>
                <li><a href="">Services</a></li>
            </ul>
            <button className="bg-orange-500 rounded w-28 h-10 mt-2 ml-36">Login</button>
        </div>
    )
}
export default Header;