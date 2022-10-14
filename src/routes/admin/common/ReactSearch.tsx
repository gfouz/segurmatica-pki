import { useState, useEffect, MouseEvent } from 'react';
import styled from 'styled-components';
import { Input } from '@chakra-ui/react';

type Item = {
  name: string;
  ci: string;
  tome: string;
  folio: string;
  email: string;
  price: string;
  range: string;
  phone: string;
  address: string;
  enabled: boolean;
}

interface IData {
  data: Item[];
}

const ReactSearch = ({ data }: IData) => {

  const list = data?.map((item) => item.name);
  const [suggestions, setSuggestions] = useState(['']);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState<string | undefined>('');
  const [item, setItem] = useState<Item>();

  const handleChange = (e: { target: { value: string; }; }) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    if (query.length > 1) {
      const filterSuggestions = list?.filter(
        (suggestion) => suggestion?.toLowerCase().indexOf(query) > -1,
      );
      setSuggestions(filterSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const handleClick = (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
    setSuggestions([]);
    setValue((e.target as HTMLElement).innerHTML);
    setSuggestionsActive(false);
  };

  const handleKeyDown = (e: { keyCode: number; }) => {
    // UP ARROW
    if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    // DOWN ARROW
    else if (e.keyCode === 40) {
      if (suggestionIndex - 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // ENTER
    else if (e.keyCode === 13) {
      setValue(suggestions[suggestionIndex]);
      setSuggestionIndex(0);
      setSuggestionsActive(false);
    }
  };

  const Suggestions = () => {
    return (
      <ul className='suggestions'>
        {suggestions?.map((suggestion, index) => {
          return (
            <li
              className={index === suggestionIndex ? 'active' : ''}
              key={index}
              onClick={(e) => handleClick(e)}
              style={{ listStyleType: 'none', cursor: 'pointer' }}
            >
              {suggestion}
            </li>
          );
        })}
      </ul>
    );
  };

  const styles = {
    border: '1px solid green',
  };

  useEffect(() => {
    setItem(data?.find((item) => item.name === value));
  }, [value]);

  return (
    <Searchbox>
      <Input
        className='searchbox__input'
        type='text'
        value={value}
        variant='flushed'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {suggestionsActive && <Suggestions />}
      {!suggestionsActive && (
        <ItemList>
          <ul className='list'>
            <li className='list__item'>
              <span> {item?.name && `Nombre: ${item?.name}`}</span>
              <span> {item?.ci && `Carnet: ${item?.ci}`}</span>
              <span> {item?.tome && `Tomo: ${item?.tome}`}</span>
              <span> {item?.folio && `Folio: ${item?.folio}`}</span>
              <span> {item?.email && `Correo: ${item?.email}`} </span>
              <span> {item?.price && `Precio: ${item?.price}`}</span>
              <span> {item?.range && `Rango: ${item?.range}`}</span>
              <span> {item?.phone && `Tel: ${item?.phone}`}</span>
              <span> {item?.address && `domicilio: ${item?.address}`}</span>
              <span> {item?.enabled && item?.enabled === true && `Estado: habilitado`}</span>

            </li>
          </ul>
        </ItemList>
      )}
    </Searchbox>
  );
};

export default ReactSearch;

const Searchbox = styled.div`
.suggestions {
  color: #0F5BFF;
  font-weight: bolder;
}
`;

const ItemList = styled.div`
  margin: 1em 0;
  .list {
    display: flex;
    flex-direction: column;
  }
  .list__item {
    list-style-type: none;
    span {
      display: block;
    }
    font-style: italic;
    font-weight: bolder;
  }
`;
