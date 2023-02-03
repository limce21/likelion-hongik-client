import styled from "styled-components";

export function SearchBar() {
  return (
    <SearchContainer>
      <input type="text" placeholder="검색어를 입력하세요"></input>
      <button type="submit">검색</button>
    </SearchContainer>
  );
}

const SearchContainer = styled.form`
  margin-top: 20px;
  display: flex;
  gap: 16px;
  width: 100%;
  input {
    width: 783px;
    height: 60px;
    background: rgba(51, 51, 51, 0.6);
    border-radius: 8px;
    border: none;
    color: #fff;
    padding: 19px 16px;
    font-weight: 500;
    font-size: 18px;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 126px;
    height: 60px;
    background: #e9e9e9;
    border-radius: 8px;
    font-weight: 600;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.32px;
    color: #000000;
    border: none;
    font-size: 20px;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    input {
      width: 100%;
      height: 12.3077vw;
      font-weight: 500;
      font-size: 3.5897vw;
      line-height: 4.359vw;
    }
    button {
      width: 100%;
      height: 10.2564vw;
      font-weight: 600;
      font-size: 4.1026vw;
      line-height: 4.8718vw;
    }
  }
`;
