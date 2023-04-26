import { Dispatch, useState } from "react";
import Autosuggest from "react-autosuggest";
import AutosuggestHighlightMatch from "autosuggest-highlight/match";
import AutosuggestHighlightParse from "autosuggest-highlight/parse";
import { MembersName } from "../name/MembersName";
import { AddProjectInterface } from "../interfaces/AddProjectInterface";

interface AutoSuggestFormProps {
  id: string;
  setProjectData: Dispatch<React.SetStateAction<AddProjectInterface>>;
}

export function AutoSuggestForm(props: AutoSuggestFormProps) {
  const escapeRegexCharacters = (str: string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const getSuggestions = (value: string) => {
    const escapedValue = escapeRegexCharacters(value.trim());
    if (escapedValue === "") {
      return [];
    }
    const regex = new RegExp("\\b" + escapedValue, "i");
    return MembersName.filter((member) => regex.test(getSuggestionValue(member)));
  };

  const getSuggestionValue = (suggestion: string) => suggestion;

  const renderSuggestion = (suggestion: string, { query }: { query: string }) => {
    const suggestionText = suggestion;
    const matches = AutosuggestHighlightMatch(suggestionText, query);
    const parts = AutosuggestHighlightParse(suggestionText, matches);

    return (
      <span>
        {parts.map((part, index) => {
          return (
            <span style={part.highlight ? { color: "#ee0000", fontWeight: "bold" } : {}} key={index}>
              {part.text}
            </span>
          );
        })}
      </span>
    );
  };

  const [value, setValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Array<string>>([]);

  const onChange = (event: React.FormEvent, { newValue }: Autosuggest.ChangeEvent) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }: Autosuggest.SuggestionsFetchRequestedParams) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    value,
    onChange,
    onBlur: () =>
      props.setProjectData((prev) => ({
        ...prev,
        [props.id]: value
      }))
  };

  return (
    <Autosuggest
      id={props.id}
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
}
