import React, { useContext } from "react";
import { MdViewModule, MdOutlineCancelPresentation } from "react-icons/md";
import { CgSortAz } from "react-icons/cg";
import { AppContext } from "../../context/AppContext";
import "./title.scss";

const Title = () => {
  const { deleteFilterHandler, input }: any = useContext(AppContext);
  return (
    <div>
      {input !== "" ? (
        <div className="titleSearchBox">
          <div className="titleSearch">
            <CgSortAz />
            <span>Výsledky vyhledávání</span>
          </div>
          <div
            className="titleDeleteFilter"
            onClick={() => {
              deleteFilterHandler();
            }}
          >
            <MdOutlineCancelPresentation />
            <span>Smazat filtry</span>
          </div>
        </div>
      ) : (
        <div className="titleOverview">
          <MdViewModule />
          <span>Přehled pokémonů</span>
        </div>
      )}
    </div>
  );
};

export default Title;
