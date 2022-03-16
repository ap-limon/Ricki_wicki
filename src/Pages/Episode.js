import {React, useEffect, useState} from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";

const Episode = () => {
    let [results, setResults] = useState([]);
    let [info, setInfo] = useState([]);
    let { air_date, episode, name } = info;
    let [id, setId] = useState(1);

    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            setInfo(data);
            let a = await Promise.all(data.characters.map(async (x) => {
                const res = await fetch(x);
                return await res.json();
            }));
            setResults(a);
        })();
    }, [api]);
    console.log(results);
    return (
        <div className="container">
            <div className="row mb-3">
                <h1 className="text-center mb-3">
                    Episode name:{" "}
                    <span className="text-primary">{ name === " " ? "Unknown" : name}</span>
                </h1>
                <h5 className="text-center">
                    Air Date: {air_date === " " ? "Unknown" : air_date};
                </h5>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12 mb-4">
                    <h4 className="text-center mb-4">
                        Pick Edisode
                    </h4>
                    <InputGroup name="Episode" changeId={setId} total={51} />
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Card results={results}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Episode;