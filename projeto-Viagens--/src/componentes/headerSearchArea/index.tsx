import React, { useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import './headerSearchArea.css';

interface Suggestion {
  id: number;
  name: string;
}

export const HeaderSearchArea: React.FC = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    setSuggestions([
      { id: 1, name: 'Montanha Aventuras' },
      { id: 2, name: 'Praia Relaxante' },
      { id: 3, name: 'Aventura na Floresta' },
      { id: 4, name: 'Escalada' },
      { id: 5, name: 'Safari' },
    ]);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    // Filtra as sugestões com base na query
    const filtered = suggestions.filter(suggestion =>
      suggestion.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    // Define o valor da query como o nome da sugestão selecionada e limpa a lista de sugestões
    setQuery(suggestion.name);
    setFilteredSuggestions([]);
  };

  return (
    <div className='SearchArea'>
      <input
        type='search'
        value={query}
        onChange={handleInputChange}
        placeholder='Encontre a aventura perfeita'
      />
      <IoSearch className='search-icon' />

      {query && filteredSuggestions.length > 0 && (
        <ul className='suggestions-list'>
          {filteredSuggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className='suggestion-item'
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};