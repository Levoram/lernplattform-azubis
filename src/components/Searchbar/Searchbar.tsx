import { SearchInput, Input, SearchForm } from "./SearchbarElements";
const Searchbar = () => {
  return (
    <SearchForm action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Gib eine Suchbegriff ein</span>
      </label>
      <SearchInput
        type="text"
        id="header-search"
        placeholder="Gib eine Suchbegriff ein"
        name="s"
      />
      <Input type="submit" value="Suchen"></Input>
    </SearchForm>
  );
};

export default Searchbar;
