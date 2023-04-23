import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { AppContext } from "../../context/AppContext";
import ReactPaginate from "react-paginate";
import { MdOutlineDone } from "react-icons/md";
import style from "./pagination.module.scss";
import { GET_COUNT_POKEMON } from "../../graphql/queries";
import Container from "../Container/Container";

const Pagination = () => {
  const {
    deleteFilterHandler,
    setPageHandler,
    page,
    input,
    limit,
  } = useContext(AppContext);
  //query pokemon generation-i limit, offset, search
  const { loading, data } = useQuery(GET_COUNT_POKEMON, {
    variables: { searchInput: input },
  });

  if (loading) return <Container>Loading...</Container>;

  const { count } = data.pokemon_v2_pokemonspecies_aggregate.aggregate;

  const pages = Math.ceil(count / limit);
  return (
    <div>
      {pages === 1 ? (
        <div className={style.allVisibleBox}>
          <MdOutlineDone className={style.allVisibleIcon} />
          <div className={style.allVisible}>Vše zobrazeno</div>
          <div
            className={style.allVisibleBack}
            onClick={() => deleteFilterHandler()}
          >
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
          containerClassName={style.pagination}
          activeLinkClassName={style.activePagination}
          previousLinkClassName={style.nextPrevLink}
          nextLinkClassName={style.nextPrevLink}
          disabledClassName={style.disabledPrevNext}
        />
      )}
    </div>
  );
};

export default Pagination;
