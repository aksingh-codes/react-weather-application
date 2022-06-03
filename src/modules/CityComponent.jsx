import styled from "styled-components";

const WeatherLogo = styled.img`
    width : 140px;
    height : 140px;
    margin :40px auto;
`;

const ChooseCityLabel = styled.span`
color: black;
font-size:18px;
font-weight:bold;
margin: 10px auto;
`;

const SearchBox = styled.form`
    display:flex;
    flex-direction:row;
    border:#ED4264 solid 1px;
    border-radius:2px;
    color: #ED4264;
    font-size:18px;
    font-weight:bold;
    margin: 20px auto;

    box-shadow: 0 0px 1px 0px;

    & input{
        padding:10px;
        font-size:14px;
        border:none;
        outline:none;
        font-weight:bold;
    }
    & button{
        padding:10px;
        font-size:14px;
        color:white;
        background:#ED4264;
        border:none;
        outline:none;
        font-weight:bold;
        cursor:pointer;
    }
`;

const CityComponent = (props) => {
    const {updateCity, fetchWeather} = props;
    return (
        <>
            <WeatherLogo src="/icons/perfect-day.svg"></WeatherLogo>
            <ChooseCityLabel>Find Weather of your City</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input placeholder="City" onChange={
                    (e) => {
                        updateCity(e.target.value)
                    }
                } />
                <button type="submit">Search</button>
            </SearchBox>
        </>
    )
}

export default CityComponent;