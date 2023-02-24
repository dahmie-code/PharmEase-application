import { FaThList, FaIdCard } from "react-icons/fa";
import { HiUserGroup, HiShoppingCart } from "react-icons/hi";
import { BiGroup } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";
import { BsStack, BsGearFill } from "react-icons/bs";
import { MdOutlineInventory } from "react-icons/md";

export const links = [
  {
    title: "Navigation",
    links: [
      {
        name: "dashboard",
        icon: <FaThList />,
      },
  
      {
        name: "customers",
        icon: <HiUserGroup />,
      },
      {
        name: "suppliers",
        icon: <BiGroup />,
      },
      {
        name: "products",
        icon: <GiMedicines />,
      },
      {
        name: "point of sale",
        icon: <HiShoppingCart />,
      },
      {
        name: "stock",
        icon: <BsStack />,
      },
      {
        name: "order",
        icon: <HiShoppingCart />,
      },
      {
        name: "employee",
        icon: <FaIdCard />,
      },
      {
        name: "inventory",
        icon: <MdOutlineInventory />,
      },
      {
        name: "settings",
        icon: <BsGearFill />,
      },
    ],
  },
];
