import { data, images } from "../utils"
import { IoMdClose } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <aside>
        {/* Sidebar top*/}
        <div>
            {/* logo */}
            <div>
                <img src={images.Logo} alt="logo" />
                <h2>EGA<span>TOR</span></h2>
            </div>
            {/* close btn */}
            <div>
            <IoMdClose />
            </div>
        </div>

        {/* sidebar links */}
        <div>
            {
                data.links.slice(0, 4).map(({icon, name}, i) => (
                    <a href="#" key={i}>
                        <span>{icon}</span>
                        <h3>{name}</h3>
                    </a>
                ))
            }
             <a href="#">
                        <span><HiOutlineEnvelope /></span>
                        <h3>message</h3>
                    </a>
            {
                data.links.slice(4, 8).map(({icon, name}, i) => (
                    <a href="#" key={i}>
                        <span>{icon}</span>
                        <h3>{name}</h3>
                    </a>
                ))
            }
        </div>
    </aside>
  )
}

export default Sidebar