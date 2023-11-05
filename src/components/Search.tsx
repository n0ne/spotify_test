import React, { useEffect, useState, ChangeEvent, useCallback } from "react";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import { useDebounce } from "@uidotdev/usehooks";

interface SearchProps {
  setSearch: (searchTerm: string) => void;
}

const style = {
  maxWidth: '97%',
}

const Search: React.FC<SearchProps> = ({ setSearch }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedSearchTerm = useDebounce<string>(inputValue, 500);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  }, []);

  useEffect(() => {
    setSearch(debouncedSearchTerm)
  }, [debouncedSearchTerm])

  return (
    <Box sx={style}>
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