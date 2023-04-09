import searchIcon from '../assets/icon-search.svg'


type searchBarProps = {
    search: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
    click: boolean,
    setClick: React.Dispatch<React.SetStateAction<boolean>>,
    handleClick: () => void
}

export const SearchBar = (props: searchBarProps) => {

    return (
        <div className="search-bar">
            <img className="search-img" src={searchIcon} alt="search-icon" />
            <input
                type="text"
                placeholder="Search GitHub username..."
                value={props.value}
                onChange={props.handleValue}
            />
            <button className="search-btn" onClick={props.handleClick}>
                {props.search}
            </button>
        </div>
    );
}