import { Box, TextField } from "@mui/material";
import React, { useEffect, useState, ChangeEvent } from "react";
import { useDebounce } from "@uidotdev/usehooks";

interface SearchProps {
  setSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ setSearch }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedSearchTerm = useDebounce<string>(inputValue, 500);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  useEffect(() => {
    setSearch(debouncedSearchTerm)
  }, [debouncedSearchTerm])

  return (
    <Box>
      <TextField
        fullWidth
        id="standard-basic"
        label="Search track"
        variant="standard"
        margin="normal"
        value={inputValue}
        onChange={handleInputChange}
      />
    </Box>
  )
}

export default Search;