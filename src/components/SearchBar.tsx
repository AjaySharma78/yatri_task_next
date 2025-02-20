interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export const SearchBar = ({ search, setSearch }: SearchBarProps) => {

    return (
      <input
        type="text"
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        className=" p-2 mb-4 w-full rounded-md text-black placeholder:text-black bg-slate-400"
      />
    );
  }