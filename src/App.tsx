import List from "./components/List";
import axios from "axios";
import Header from "./components/Header";
import GlobalStyle from './style';
import WrapperMain from "./UI/Wrappers/Main";
import { useEffect, useState } from "react";
import { IPlace, Place } from "./classes/place";

import './App.css';
import "@fontsource/ubuntu"
import "@fontsource/ubuntu-condensed"
import More from "./components/More";

function App() {

    const [size, setSize] = useState<number>(8);
    const [places, setPlaces] = useState<IPlace[]>([]);

    useEffect(() => {

        fetchPlaces();

    }, []);

    async function fetchPlaces() {

        try {

            const response = await axios.get<IPlace[]>('https://6075786f0baf7c0017fa64ce.mockapi.io/products');

            console.log(response.data);

            setPlaces(response.data.map(p => Place.parseJson(p)));

        } catch (e) {

            alert(e);

        };

    };

    return (
        <>
            <GlobalStyle/>
            <WrapperMain>
                <Header title="Похожие объявления"/>
                <List points={places.slice(0, size)}/>
                <More onClick={_ => {

                    const v = size + 8;

                    if (places.length <= v) {

                        setSize(places.length);
                        alert('Новых позиций нет!');

                    } else if (places.length > v) setSize(v);

                }}/>
            </WrapperMain>
        </>
    );

}

export default App;