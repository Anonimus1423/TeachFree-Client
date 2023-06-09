import SidebarLink from "./Link";
import { ReactComponent as HomeIcon } from "../../images/icons/Home.svg";
import { ReactComponent as TestIcon } from "../../images/icons/Test.svg";
import { ReactComponent as ClassIcon } from "../../images/icons/Class.svg";
import { ReactComponent as CheckedIcon } from "../../images/icons/Checked.svg";

function Sidebar({ sidebarOpened, noUser, setSidebarOpened }) {
  return (
    <nav className={sidebarOpened ? "active sidebar" : "sidebar"}>
      <ul>
        <SidebarLink text="Գլխավոր էջ" Icon={HomeIcon} link="/" setSidebarOpened={setSidebarOpened}/>
        <SidebarLink
          text="Անգլերենի մակարդակի ստուգում"
          Icon={TestIcon}
          link="/test"
          setSidebarOpened={setSidebarOpened}
        />
        <SidebarLink
          text="Իմ դասընթացները"
          Icon={ClassIcon}
          link={!noUser ? "/my-courses" : "/registration"}
          setSidebarOpened={setSidebarOpened}
        />
        <SidebarLink
          text="Բոլոր դասընթացները"
          Icon={CheckedIcon}
          link="/courses"
          setSidebarOpened={setSidebarOpened}
        />
      </ul>
    </nav>
  );
}

export default Sidebar;
