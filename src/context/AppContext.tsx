import React, { createContext, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
interface AppContextType {
  limit: number;
  input: string;
  page: number;
  offset: number;
  pages: number;
  setInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteFilterHandler: () => void;
  setPageHandler: (value: number) => void;
  setAllPagesCount: (value: number) => void;
  setFirstLetterUpperCase: (str: string) => string;
}

export const AppContext = createContext<AppContextType>({
  limit: 12,
  input: "",
  page: 0,
  offset: 0,
  pages: 1,
  setInputHandler: (e) => {},
  deleteFilterHandler: () => {},
  setPageHandler: (value) => {},
  setAllPagesCount: (value) => {},
  setFirstLetterUpperCase: (str) => str,
});

const AppProvider = ({ children }: Props) => {
  const [input, setInput] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);
  //pagination limit per page
  const limit = 12;
  const offset = page * limit;
  //pagination number
  const pages = Math.ceil(pageCount / limit);
  //set searchInput from input, set page to first
  const setInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
    setPage(0);
  };
  const setAllPagesCount = (value: number) => {
    setPageCount(value);
  };
  //delete all filter
  const deleteFilterHandler = () => {
    setPage(0);
    setInput("");
  };
  //pagination change page
  const setPageHandler = (e: any) => {
    setPage(e.selected);
  };
  const setFirstLetterUpperCase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const value = {
    limit,
    input,
    page,
    offset,
    pages,
    setInputHandler,
    deleteFilterHandler,
    setPageHandler,
    setAllPagesCount,
    setFirstLetterUpperCase,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
