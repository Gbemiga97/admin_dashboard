import { IoMenuOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { images } from "../utils";

const RecentUpdates = () => {
  return (
    <div>
        {/* top */}
        <div>
            {/* menu btn */}
            <button>
            <IoMenuOutline />
            </button>
            {/* theme toggler */}
            <div>
                <CiLight />
                <FaMoon />
            </div>
            {/* profile */}
            <div>
                <div>
                    <p>Hey, <b>Daniel</b></p>
                    <small className="text-muted">Admin</small>
                </div>
                <div>
                    <img src={images.Profile1} alt="profile_img" />
                </div>
            </div>
        </div>

        {/* updates */}
        <div>
            <h2>Recent Updates</h2>
            <div>
                <div>
                    <div>
                        <img src={images.Profile2} alt="profile_2" />
                    </div>
                    <div>
                        <p>
                            <b>Mike Tyson received his order of Night lion tech GPS drone.</b>
                            <small className="text-muted">
                                 2 Minutes Ago
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentUpdates