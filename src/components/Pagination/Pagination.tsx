import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ReactPaginate from "react-paginate";
import { MdOutlineDone } from "react-icons/md";
import "./pagination.scss";
const Pagination = () => {
  const { pages, deleteFilterHandler, setPageHandler, page }: any = useContext(
    AppContext
  );
  return (
    <div>
      {pages === 1 ? (
        <div className="allVisibleBox">
          <MdOutlineDone className="allVisibleIcon" />
          <div className="allVisible">Vše zobrazeno</div>
          <div className="allVisibleBack" onClick={() => deleteFilterHandler()}>
            Zpět na přehled pokémonů
          </div>
        </div>
      ) : (
        <ReactPaginate
          breakLabel="..."
          nextLabel={">"}
          onPageChange={setPageHandler}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pages}
          previousLabel={"<"}
          renderOnZeroPageCount={null}
          forcePage={page}
          containerClassName="pagination"
          activeLinkClassName="activePagination"
          previousLinkClassName="nextPrevLink"
          nextLinkClassName="nextPrevLink"
          disabledClassName="disabledPrevNext"
        />
      )}
    </div>
  );
};

export default Pagination;
